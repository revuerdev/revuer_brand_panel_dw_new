export const InputBox = ({ pageProps, className, title }) => {
    return (
        <>
            <label for="email" className="mb-4 lable-color text-base font-semibold"> {title}<span className="text-[#E74C3C]">*</span></label>
            <div className="block relative">
                <input type={pageProps?.type} id={pageProps?.id} placeholder={pageProps?.placeholder} className={`h-12 px-4 bg-white rounded-lg border border-[#95A5A6] mt-2 mb-6 text-sm placeholder-[#001540] w-full ${className}`} />
            </div>
        </>
    )
}