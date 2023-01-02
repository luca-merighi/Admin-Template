import Layout from '../components/template/Layout'
import useAuth from '../data/hook/useAuth'

export default function Profile() {
    const {user} = useAuth()

    return (
        <Layout 
            title="Perfil"
            subtitle="Administre seu perfil de usuário">
                <h1 className="text-2xl">Perfil do Usuário</h1>

                <div className="
                    mt-10
                    flex flex-col gap-4 w-fit">
                    
                    <img 
                        src={user?.imageUrl ?? '/images/avatar.svg'} 
                        alt="Foto de Perfil"
                        className="h-32 w-32 rounded-full cursor-pointer" />
                    <p className="text-blue-500 text-xl text-center font-semibold">
                        {user?.name ?? 'Nome do Usuário'}
                    </p>
                </div>
        </Layout>
    )
}