import { MoonIcon, SunIcon } from '../../icons'

interface ChangeThemeButtonProps {
    theme: string,
    changeTheme: () => void
}

export default function ChangeThemeButton(props: ChangeThemeButtonProps) {
    return props.theme === 'dark' ? (
        <div className="
            hidden sm:flex items-center gap-2 cursor-pointer
            bg-gradient-to-r from-yellow-300 to-yellow-600
            w-fit h-10 px-3 rounded-full"
            onClick={props.changeTheme}>
            <div className="h-8 w-8 text-white">
                {SunIcon}
            </div>
            <span className="
                hidden lg:flex items-center text-white font-medium">
                Claro
            </span>
        </div>
    ) : (
        <div className="
            hidden sm:flex items-center gap-2 cursor-pointer
            bg-gradient-to-r from-gray-500 to-gray-900
            w-fit h-10 px-3 rounded-full"
            onClick={props.changeTheme}>
            <span className="
                hidden lg:flex items-center text-white font-medium">
                Escuro
            </span>
            <div className="h-8 w-8 text-white">
                {MoonIcon}
            </div>
        </div>
    )
}