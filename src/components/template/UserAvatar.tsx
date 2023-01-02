import Link from 'next/link'
import useAuth from '../../data/hook/useAuth'

export default function UserAvatar() {
    const {user} = useAuth()

    return (
        <Link href="/Profile">
            <img 
            src={user?.imageUrl ?? '/images/avatar.svg'} 
            alt="Foto de Perfil"
            className="h-10 w-10 rounded-full cursor-pointer" />
        </Link>
    )
}