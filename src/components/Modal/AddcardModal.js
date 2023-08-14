import downloimg from "../../assets/images/visa.svg";
import { toggleModal5 } from "../../services/edit-modal"
export const AddcardModal = () => {
    return (
        <>

            <div className="fixed z-10 overflow-y-auto top-0 w-full left-0 hidden" id="modal-5">
                <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <div className="fixed inset-0 transition-opacity">
                        <div className="absolute inset-0 bg-gray-900 opacity-[0.5]" />
                    </div>
                    <span className="hidden sm:inline-block sm:align-middle h-screen">&#8203;</span>
                    <div
                        className="inline-block align-center bg-white rounded-2xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-xl sm:w-full w-[90%] "
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="modal-headline"
                    >
                        <div className="px-8 mt-8">
                            <div>
                                <h5 className="text-2xl font-semibold">Add New Card Details</h5>
                            </div>
                        </div>

                        <div className="bg-white px-8 pt-8 pb-4  sm:pb-4">
                            <form className="theme-form ng-untouched ng-pristine ng-valid">
                                <label className="lable-color font-semibold text-base">Card Number</label>
                                <div className="block relative">
                                    <input
                                        type="text"
                                        id="email"
                                        placeholder="Enter Card Number"
                                        required=""
                                        className="box-shadow-3 h-12 px-2 rounded-lg border border-[#797979] bg-white w-full mt-2 mb-6 text-sm font-normal placeholder-black"
                                    />
                                    <div className="absolute top-[1.5rem] right-5">
                                        <img src={downloimg} alt="downloimg" />
                                    </div>
                                </div>

                                <div className="sm:flex block w-full float-right mb-2">
                                    <div className="flex-initial w-12/12 sm:w-6/12 mr-4">
                                        <label className="lable-color font-semibold text-base">Expiry Date</label>
                                        <div className="block">
                                            <input
                                                type="text"
                                                id="email"
                                                placeholder=" DD/MM "
                                                required=""
                                                className="box-shadow-3 h-12 px-2 rounded-lg border border-[#797979] bg-white w-full mt-2 mb-4  placeholder-black text-sm font-normal"
                                            />
                                        </div>
                                    </div>

                                    <div className="flex-initial w-full sm:w-6/12">
                                        <label className="lable-color font-semibold text-base">CVV/CVC</label>
                                        <div className="block">
                                            <input type="text" id="email" placeholder=" ● ● ● " required="" className="box-shadow-3 h-12 px-2 rounded-lg border border-[#797979] bg-white w-full mt-2 mb-1  placeholder-black text-sm font-normal" />
                                        </div>
                                    </div>
                                </div>

                                <label className="lable-color font-semibold text-base">Card Holdername</label>
                                <div className="block">
                                    <input type="text" id="email" placeholder=" Enter Card Holdername" required="" className="box-shadow-3 h-12 px-2 rounded-lg border border-[#797979] bg-white w-full mt-2 mb-4  placeholder-black text-sm font-normal" />
                                </div>

                                <div className="flex justify-end">



                                    <button className="py-2.5 flex px-18 sm:px-12 mr-8 text-center bac-3 rounded-lg text-white mb-5 mt-5 text-lg uppercase font-semibold" onClick={toggleModal5} >Cancel</button>
                                    <button className="py-2.5 flex px-16 text-center bac-6 rounded-lg text-white mb-5 mt-5 text-xl font-semibold uppercase" onClick={toggleModal5} >Add</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
};
export default AddcardModal;