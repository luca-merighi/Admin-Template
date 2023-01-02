import Header from './Header'
import Sidebar from './Sidebar'
import Content from './Content'
import useAppData from '../../data/hook/useAppData'
import ForceAuth from '../auth/ForceAuth'

interface LayoutProps {
    title: string,
    subtitle: string,
    children?: any
}

export default function Layout(props: LayoutProps) {
    const {theme} = useAppData()

    return (
        <ForceAuth>
            <div className={`
            ${theme}
            flex h-screen w-screen
            `}>
                <Sidebar />
                
                <div className="
                    flex flex-col w-full 
                    p-7 bg-gray-300 dark:bg-gray-800">
                <Header title={props.title} subtitle={props.subtitle} />
                <Content>
                    {props.children}
                </Content>
                </div>
            </div>
        </ForceAuth>
    )
}