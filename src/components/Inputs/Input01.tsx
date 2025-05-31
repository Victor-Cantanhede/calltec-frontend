import { ReactNode, InputHTMLAttributes, useId, useState } from 'react';
import { FiEye } from 'react-icons/fi';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
    width?: string;
    id?: string;
    title?: string;
    value: string;
    type?: 'text' | 'date' | 'email' | 'number' | 'password' | 'search' | 'tel';
    icon?: ReactNode;
}

export default function Input01({ width, id, title, type = 'text', icon, ...rest }: IProps) {

    const generatedId = useId();
    const inputId = id ?? generatedId;

    const [isFocused, setIsFocused] = useState<boolean>(false);

    return (
        <label
            title={title}
            htmlFor={inputId}
            style={{width: width ? width : '100%'}}
            className={`px-2 relative flex justify-start items-center gap-2
                ${!isFocused && 'border-b-1 border-gray-500'}
                ${isFocused && 'border-b-1 border-blue-600'}
                transition ease-linear duration-300
            `}
        >

            {icon &&
                <span
                    className={`flex justify-center items-center text-[1rem]
                        ${!isFocused && 'text-gray-500'}
                        ${isFocused && 'text-blue-600'}
                        transition ease-linear duration-300
                    `}
                >{icon}</span>
            }

            <input
                id={inputId}
                type={type}
                {...rest}
                className='h-8 min-w-0 outline-none flex-grow'
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />

            {type === 'password' &&
                <span
                    className={`p-1 rounded-full flex justify-center items-center text-[1rem] text-gray-500 cursor-pointer transition ease-linear duration-100 hover:bg-gray-300 hover:text-white
                    `}
                ><FiEye /></span>
            }
            
        </label>
    );
}