import Head from 'next/head'
import Image from 'next/image'
import Router from 'next/router'
import loadingGif from '../../../public/images/loading.gif'
import useAuth from '../../data/hook/useAuth'

export default function ForceAuth(props) {
    const {user, loading} = useAuth()

    function renderContent() {
        return (
            <>
                <Head>
                    <script dangerouslySetInnerHTML={{
                        __html: `
                            if(!document.cookie?.includes("admin-template-auth")) {
                                window.location.href = "/Authentication"
                            }  
                        `
                    }} />
                </Head>
                {props.children}
            </>
        )
    }

    function renderLoading() {
        return (
            <div className="
                flex items-center justify-center h-screen">
                <Image src={loadingGif} alt="Carregando.." />
            </div>
        )
    }

    if(!loading && user?.email) {
        return renderContent()
    } else if(loading) {
        return renderLoading()
    } else {
        Router.push('/Authentication')
        return null
    }
}