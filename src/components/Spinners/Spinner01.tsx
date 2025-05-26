

export default function Spinner01() {

    return (
        <div className={`
                h-[1.3rem]
                w-[1.3rem]
                border-3
                rounded-full
                border-t-white
                border-l-[rgba(255,255,255,0.4)]
                border-b-[rgba(255,255,255,0.4)]
                border-r-[rgba(255,255,255,0.4)]
                animate-spin
            `}
        ></div>
    );
}