import Link from 'next/link'

interface ListItemProps {
    url: string,
    text: string,
    icon: any,
    className?: string,
    onClick?: (event: any) => void
}

export default function ListItem(props: ListItemProps) {
    return (
        <li 
        onClick={props.onClick}
        className="
            cursor-pointer
            hover:bg-gray-100 dark:hover:bg-gray-800">
            <Link className={`
                flex flex-col items-center justify-center
                w-full p-4 h-20 text-gray-600 dark:text-gray-200 ${props.className}
            `} 
                    href={props.url}>
                    {props.icon}
                    <span className="
                        text-xs font-light">
                        {props.text}
                    </span>
            </Link>
        </li>
    )
}