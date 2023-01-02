import { useState } from 'react'
import AuthInput from '../components/auth/AuthInput'
import useAuth from '../data/hook/useAuth'
import { WarningIcon } from '../icons'

export default function Authentication() {
    const [mode, setMode] = useState<'login' | 'register'>('login')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    const {login, loginGoogle, register} = useAuth()

    function showErrorMessage(msg, time = 5) {
        setError(msg)
        setTimeout(() => setError(null), time * 1000)
    }

    async function submit() {
        try {
            if(mode === 'login') {
                await login(email, password)
            } else {
                await register(email, password)
            }
        } catch (error) {
            showErrorMessage(error?.message ?? 'Erro desconhecido!')
        }
    }
    
    return (
        <div className="
            flex items-center justify-start h-screen ">
            <figure className="
                hidden md:block md:w-1/2 lg:w-2/3">
                <img 
                src="https://source.unsplash.com/random" 
                className="
                    h-screen w-full object-cover" />
            </figure>
            <div className="w-full md:w-1/2 lg:w-1/3 p-10">
                <h1 className="
                    text-2xl font-bold mb-5">
                    {mode === 'login' 
                    ? 'Entre com a Sua Conta'
                    : 'Cadastre-se na Plataforma'}
                </h1>

                {error ? (
                    <div className="
                        flex items-center gap-2
                        bg-red-400 text-white py-3 px-5
                        rounded-lg">
                        <span className="h-5 w-5">
                        {WarningIcon}
                        </span>
                        <span>
                            {error}
                        </span>
                    </div>
                ) : false}

                <AuthInput
                    label="Email"
                    value={email}
                    type="email"
                    mandatory
                    changeValue={setEmail} />
                
                <AuthInput
                    label="Senha"
                    type="password"
                    value={password}
                    mandatory
                    changeValue={setPassword} />

                <button
                    className="
                    w-full bg-indigo-500 hover:bg-indigo-400
                    text-white rounded-lg px-4 py-3 mt-6"
                    onClick={submit}>
                    {mode === 'login' 
                    ? 'Entrar'
                    : 'Cadastrar'}
                </button>

                <hr className="my-6 border-gray-300 w-full" />
                
                <button
                    className="
                    w-full bg-red-500 hover:bg-red-400
                    text-white rounded-lg px-4 py-3"
                    onClick={loginGoogle}>
                    Entrar com Google
                </button>

                {mode === 'login' ? (
                    <p className="
                        mt-8">
                        Novo por aqui?
                        <a 
                        className="
                            text-blue-500 hover:text-blue-600 font-semibold cursor-pointer"
                        onClick={() => setMode('register')}> Crie uma conta!</a>
                    </p>
                ) : (
                    <p className="
                        mt-8">
                        Já possuí uma conta?
                        <a 
                        className="
                            text-blue-500 hover:text-blue-600 font-semibold cursor-pointer"
                        onClick={() => setMode('login')}> Entre com sua conta!</a>
                    </p>
                )}
            </div>
        </div>
    )
}