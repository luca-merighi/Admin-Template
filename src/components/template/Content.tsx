interface ContentProps {
    children?: any
}

export default function Content(props: ContentProps) {
    return (
        <main className="
            mt-7 flex flex-col dark:text-gray-300">
            {props.children}
        </main>
    )
}