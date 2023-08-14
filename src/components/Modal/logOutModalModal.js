export const logOutModalModal = ({ id = "modal-logout", status_title, message, onFailure, onSuccess }) => {
    // console.log("{ status_title, message, onFailure, onSuccess }", status_title, message, onFailure, onSuccess)
    return (
        <div className="fixed z-10 overflow-y-auto top-44 w-full left-0 hidden sm:top-50" id={id}>
            <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 transition-opacity">
                    <div className="absolute inset-0 bg-gray-900 opacity-75" />
                </div>
                <span className=" sm:inline-block sm:align-middle h-screen">&#8203;</span>
                <div
                    className="inline-block align-center bg-white rounded-2xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-[37.3rem]  w-[90%] sm:w-full absolute lg:left-[27.6rem] left-5 md:left-[14%] top-28"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="modal-headline"
                >
                    <div className="bg-white px-8 pt-2 pb-4 sm:p-6 sm:pb-4">
                        <h5 className="text-2xl text-center mb-4 font-semibold">{status_title}</h5>
                        <p className="text-sm font-semibold text-center mb-3">{message}</p>
                        <div className="flex justify-center">
                            <button className="bac-3 w-32 font-bold py-2 text-white text-xl m-1 sm:m-3 rounded-lg" onClick={onFailure}>No</button>
                            <button className="bac-6 w-32 font-bold py-2 text-white text-xl m-1 sm:m-3 rounded-lg" onClick={onSuccess}>Yes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default logOutModalModal