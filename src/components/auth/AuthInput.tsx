interface AuthInputProps {
    label: string,
    value: any,
    type?: 'text' | 'email' | 'password',
    mandatory?: boolean,
    render?: boolean,
    changeValue: (newValue: any) => void
}

export default function AuthInput(props: AuthInputProps) {
    return props.render ? null : (
        <div className="flex flex-col mt-4">
            <label>
                {props.label}
            </label>
            <input 
                type={props.type ?? 'text'}
                value={props.value}
                required={props.mandatory}
                className="
                    mt-2 px-4 py-3 rounded-lg
                    bg-gray-200
                    border-2 focus:border-blue-500
                    focus:bg-gray-100
                    focus:outline-none
                "
                onChange={e => props.changeValue?.(e.target.value)} />
        </div>
    )
}