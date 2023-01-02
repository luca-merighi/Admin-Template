import ChangeThemeButton from './ChangeThemeButton'
import Title from './Title'
import useAppData from '../../data/hook/useAppData'
import UserAvatar from './UserAvatar'

interface HeaderProps {
    title : string,
    subtitle : string,
}

export default function Header(props: HeaderProps) {
    const {theme, changeTheme} = useAppData()

    return (
        <header className="flex items-start justify-between">
            <Title title={props.title} subtitle={props.subtitle} />
            
            <div className="flex flex-grow gap-4 justify-end">
                <ChangeThemeButton theme={theme} changeTheme={changeTheme} />

                <UserAvatar />
            </div>
        </header>
    )
}