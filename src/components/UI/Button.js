export const Button = ({ onClickFunction, pageProps, className, title, buttoncolor }) => {
    return (
        <>
            <button onClick={(e) => onClickFunction} {...pageProps} className={`py-2.5 w-full ${buttoncolor} text-white mb-5 mt-6 text-base font-bold rounded-lg uppercase ${className}`}><a href="reset-password.html">{title}</a></button>
        </>
    )
}