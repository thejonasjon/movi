export function MainBtn({className, BtnIcon, btnText}){
    return (
        <button className={`${className} flex items-center gap-2 rounded-md py-2 px-5 cursor-pointer duration-500`}>
            {BtnIcon}
            {btnText}
        </button>
    )
}