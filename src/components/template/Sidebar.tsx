import useAuth from '../../data/hook/useAuth'
import { HomeIcon, LogoutIcon, SettingsIcon } from '../../icons'
import ListItem from './ListItem'

export default function Sidebar() {
    const {logout} = useAuth()

    return (
        <aside className="
            w-32
            flex flex-col
            bg-gray-200 text-gray-700
            dark:bg-gray-900 dark:text-gray-200">
            <header className="
                flex items-center justify-center
                h-20 w-full bg-gradient-to-r from-blue-600 to-sky-400">
                <div className="
                    rounded-full h-14 w-14 bg-white
                    flex flex-col items-center justify-center">
                    <div className="
                        rounded-full h-4 w-4 bg-sky-300">
                        
                    </div>
                    <div className="flex items-center gap-1">
                        <div className="rounded-full h-4 w-4 bg-sky-300"></div>
                        <div className="rounded-full h-4 w-4 bg-sky-300"></div>
                    </div>
                </div>
            </header>
            <ul className="flex flex-col flex-grow">
                <ListItem 
                    url="/" 
                    text="Início" 
                    icon={HomeIcon} />
                <ListItem 
                    url="/Configurations" 
                    text="Configurações" 
                    icon={SettingsIcon} />
            </ul>
            <ul>
                <ListItem 
                    className="
                        text-red-600 dark:text-red-400
                        hover:bg-red-400 hover:text-white
                        dark:hover:text-white"
                    url="/Configurations" 
                    text="Logout" 
                    icon={LogoutIcon}
                    onClick={logout} />
            </ul>
        </aside>
    )
}