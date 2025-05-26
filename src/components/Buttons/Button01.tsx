import { ReactNode, ButtonHTMLAttributes, useState } from 'react';
import Spinner01 from 'components/Spinners/Spinner01';


interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    width?: string;
    margin?: string;
    title?: string;
    value: string;
    icon?: ReactNode;
    loading?: boolean;
    disabled?: boolean;
}

export default function Button01({
    width,
    margin,
    title,
    value = 'Button',
    icon,
    loading = false,
    disabled,
    ...rest
}: IProps) {

    return (
        <button
            title={title}
            disabled={disabled}
            style={{width: width ? width : '100%', margin: margin ? margin : undefined}}
            className={`
                h-8 p-1 flex justify-center items-center gap-2 font-medium bg-blue-600 text-white hover:bg-blue-800 transition ease-linear duration-100 hover:shadow-md
                ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}
                `}
            {...rest}
        >

            {!loading &&
                <>
                    <p>{value}</p>
                    <span className={`flex justify-center items-center text-[1.2rem]`}>{icon}</span>
                </>
            }

            {loading &&
                <span className={`flex justify-center items-center text-[1.2rem]`}>
                    <Spinner01 />
                </span>
            }

        </button>
    );
}