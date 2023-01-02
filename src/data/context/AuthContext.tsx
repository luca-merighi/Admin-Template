import { createContext, useEffect, useState } from 'react'
import firebase from '../../firebase/config'
import User from '../../model/User'
import Cookies from 'js-cookie'
import route from 'next/router'

interface AuthContextProps {
     user?: User,
     loading?: boolean,
     login?: (email: string, password: string) => Promise<void>,
     register?: (email: string, password: string) => Promise<void>,
     loginGoogle?: () => Promise<void>,
     logout?: () => Promise<void>
}

const AuthContext = createContext<AuthContextProps>({})

async function normalUser(firebaseUser: firebase.User): Promise<User> {
    const token = await firebaseUser.getIdToken()
    return {
        uid: firebaseUser.uid,
        name: firebaseUser.displayName,
        email: firebaseUser.email,
        token,
        provider: firebaseUser.providerData[0]?.providerId,
        imageUrl: firebaseUser.photoURL
    }
}

function administrateCookies(logged: boolean) {
    if(logged) {
        Cookies.set('admin-template-auth', logged, {
            expires: 7
        })
    } else {
        Cookies.remove('admin-template-auth')
    }
}

export function AuthProvider(props) {
    const [user, setUser] = useState<User>(null)
    const [loading, setLoading] = useState(true)

    async function loggedSession(firebaseUser) {
        if(firebaseUser?.email) {
            const user = await normalUser(firebaseUser)
            setUser(user)
            administrateCookies(true)
            setLoading(false)
            return user.email
        } else {
            setUser(null)
            administrateCookies(false)
            setLoading(false)
            return false
        }
    }

    async function login(email, password) {
        try {
            setLoading(true)
            const resp = await firebase.auth().signInWithEmailAndPassword(email, password)
            await loggedSession(resp.user)
            route.push('/')
        } finally {
            setLoading(false)
        }
    }
    
    async function loginGoogle() {
        try {
            setLoading(true)
            const resp = await firebase.auth().signInWithPopup(
                new firebase.auth.GoogleAuthProvider()
            )
            await loggedSession(resp.user)
            route.push('/')
        } finally {
            setLoading(false)
        }
    }

    async function register(email, password) {
        try {
            setLoading(true)
            const resp = await firebase.auth().createUserWithEmailAndPassword(email, password)
            await loggedSession(resp.user)
            route.push('/')
        } finally {
            setLoading(false)
        }
    }

    async function logout() {
        try {
            setLoading(true)
            await firebase.auth().signOut()
            await loggedSession(null)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if(Cookies.get('admin-template-auth')) {
            const cancel = firebase.auth().onIdTokenChanged(loggedSession)
            return () => cancel()
        } else {
            setLoading(false)
        }
    }, [])

    return (
        <AuthContext.Provider value={{
            user,
            login,
            loginGoogle,
            register,
            logout,
            loading
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext