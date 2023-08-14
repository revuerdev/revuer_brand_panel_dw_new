import downloimg from "../../assets/images/download-svc.svg";
import purchImages from "../../assets/images/image 111.svg";
import dropuserimg from "../../assets/images/Rectangle 598.svg";
import {toggleModal4 } from "../../services/edit-modal"
export const InboxModal = () => {
    return (
        <>
            <div className="fixed z-10 overflow-y-auto top-0 w-full left-0 hidden" id="modal-4">
                <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <div className="fixed inset-0 transition-opacity">
                        <div className="absolute inset-0 bg-gray-900 opacity-75" />
                    </div>
                    <span className=" sm:inline-block sm:align-middle h-screen">&#8203;</span>
                    <div
                        className="inline-block absolute rem58 right-8 top-7 align-center bg-white rounded-2xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle md:max-w-2xl lg:max-w-[76rem] max-w-xl sm:mt-0 mt-10 w-[90%] sm:w-full"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="modal-headline"
                    >
                        <div className="px-6 pt-5 pb-1">
                            <div className="flex items-center">
                                <div className="mr-4">
                                    <i className="fa fa-angle-left text-xl mt-1.5" aria-hidden="true"></i>
                                </div>

                                <div>
                                    <h5 className="text-xl font-semibold">Payment History</h5>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="rounded w-full mx-auto">
                                <div className="block sm:flex justify-between items-center px-6">
                                    <div>
                                        <ul id="tabs" className="inline-flex pt-2 px- w-full sm:mb-0 mb-8">
                                            <li className="bg-white text-gray-800 text-xs sm:text-sm font-semibold py-1 rounded-t mr-5 sm:mr-8 border-b-2 border-[#FCB43C] -mb-px"><a id="default-tab" href="#first">Campaigns Payment </a></li>
                                            <li className="color-3 text-xs sm:text-sm py-1 rounded-t"><a href="#second">Plans Payment</a></li>
                                        </ul>
                                    </div>

                                    <div>
                                        <div>
                                            <div className="flex justify-end sm:justify-between items-center">
                                                <div className="flex justify-between items-center">
                                                    <img src={downloimg} alt={downloimg} className="w-7 mr-4" />
                                                    <a className="text-sm font-semibold uppercase text-white rounded-lg bac-3 px-10 py-2.5" onClick={toggleModal4}>Download</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div id="tab-contents">
                                    <div id="first" className="px-6">
                                        <div className="flex justify-between mt-7 mb-3">
                                            <div>
                                                <h5 className="color-3 text-sm font-normal">Campaign Details</h5>
                                            </div>
                                            <div>
                                                <h5 className="color-3 text-sm font-normal">Price</h5>
                                            </div>
                                        </div>

                                        <div className="h-[27.3rem] example-125 mb-4">
                                            <div className="block sm:flex justify-between items-center border-b border-[#9DB6BD] py-4">
                                                <div className="block sm:flex items-center">
                                                    <div>
                                                        <img src={purchImages} alt="purchImages" className="w-16 h-11 rounded mr-3 object-cover " />
                                                    </div>

                                                    <div>
                                                        <h5 className="mb-1 text-base font-medium">You purchased a basic plan and it’s valid only for 1 month</h5>
                                                        <p className="text-sm font-normal text-[#797979]">Today, at 2:10 PM</p>
                                                    </div>
                                                </div>

                                                <h3 className="text-black text-base font-semibold">-₹30,000</h3>
                                            </div>

                                            <div className="block sm:flex justify-between items-center border-b border-[#9DB6BD] py-4">
                                                <div className="block sm:flex items-center">
                                                    <div>
                                                        <img src={dropuserimg} alt="dropuserimg" className="w-16 h-11 rounded mr-3 object-cover " />
                                                    </div>

                                                    <div>
                                                        <h5 className="mb-1 text-base font-medium">You purchased a basic plan and it’s valid only for 1 month</h5>
                                                        <p className="text-sm font-normal text-[#797979]">Today, at 2:10 PM</p>
                                                    </div>
                                                </div>

                                                <h3 className="text-black text-base font-semibold">-₹30,000</h3>
                                            </div>

                                            <div className="block sm:flex justify-between items-center border-b border-[#9DB6BD] py-4">
                                                <div className="block sm:flex items-center">
                                                    <div>
                                                        <img src={purchImages} alt="purchImages" className="w-16 h-11 rounded mr-3 object-cover " />
                                                    </div>

                                                    <div>
                                                        <h5 className="mb-1 text-base font-medium">You purchased a basic plan and it’s valid only for 1 month</h5>
                                                        <p className="text-sm font-normal text-[#797979]">Today, at 2:10 PM</p>
                                                    </div>
                                                </div>

                                                <h3 className="text-black text-base font-semibold">-₹30,000</h3>
                                            </div>

                                            <div className="block sm:flex justify-between items-center border-b border-[#9DB6BD] py-4">
                                                <div className="block sm:flex items-center">
                                                    <div>
                                                        <img src={dropuserimg} alt="dropuserimg" className="w-16 h-11 rounded mr-3 object-cover " />
                                                    </div>

                                                    <div>
                                                        <h5 className="mb-1 text-base font-medium">You purchased a basic plan and it’s valid only for 1 month</h5>
                                                        <p className="text-sm font-normal text-[#797979]">Today, at 2:10 PM</p>
                                                    </div>
                                                </div>

                                                <h3 className="text-black text-base font-semibold">-₹30,000</h3>
                                            </div>

                                            <div className="block sm:flex justify-between items-center border-b border-[#9DB6BD] py-4">
                                                <div className="block sm:flex items-center">
                                                    <div>
                                                        <img src={purchImages} alt="purchImages" className="w-16 h-11 rounded mr-3 object-cover " />
                                                    </div>

                                                    <div>
                                                        <h5 className="mb-1 text-base font-medium">You purchased a basic plan and it’s valid only for 1 month</h5>
                                                        <p className="text-sm font-normal text-[#797979]">Today, at 2:10 PM</p>
                                                    </div>
                                                </div>

                                                <h3 className="text-black text-base font-semibold">-₹30,000</h3>
                                            </div>

                                            <div className="block sm:flex justify-between items-center border-b border-[#9DB6BD] py-4">
                                                <div className="block sm:flex items-center">
                                                    <div>
                                                        <img src={dropuserimg} alt="dropuserimg" className="w-16 h-11 rounded mr-3 object-cover" />
                                                    </div>

                                                    <div>
                                                        <h5 className="mb-1 text-base font-medium">You purchased a basic plan and it’s valid only for 1 month</h5>
                                                        <p className="text-sm font-normal text-[#797979]">Today, at 2:10 PM</p>
                                                    </div>
                                                </div>

                                                <h3 className="text-black text-base font-semibold">-₹30,000</h3>
                                            </div>
                                        </div>

                                        <div className="flex justify-end">
                                            <ul className="flex mb-6">
                                                <li className="border border-black text-sm font-medium rounded px-3 py-2 mr-3 box-shadow-3">
                                                    <a><i className="fa fa-angle-left" aria-hidden="true"></i> </a>
                                                </li>
                                                <li className="bac-6 text-white text-sm font-semibold rounded px-4 py-2 mr-3">
                                                    <a >1</a>
                                                </li>

                                                <li className="border border-[#95A5A6] text-sm font-semibold color-3 px-3 rounded py-2 mr-3 box-shadow-3">
                                                    <a>2</a>
                                                </li>

                                                <li className="border border-[#95A5A6] text-sm font-semibold color-3 px-3 rounded py-2 mr-3 box-shadow-3">
                                                    <a >3</a>
                                                </li>
                                                <li className="border border-[#95A5A6] text-sm font-semibold color-3 px-3 rounded py-2 mr-3 box-shadow-3">
                                                    <a >4</a>
                                                </li>

                                                <li className="border rounded text-sm font-medium border-black px-3 py-2 ">
                                                    <a ><i className="fa fa-angle-right" aria-hidden="true"></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div id="second" className="hidden px-6">
                                        <div className="flex justify-between mt-4 mb-2">
                                            <div>
                                                <h5 className="color-3 text-sm font-normal">Plan Details</h5>
                                            </div>
                                            <div>
                                                <h5 className="color-3 text-sm font-normal">Price</h5>
                                            </div>
                                        </div>

                                        <div className="h-[27.3rem] example-125 mb-4">
                                            <div className="block sm:flex justify-between items-center border-b border-[#9DB6BD] py-3">
                                                <div className="block sm:flex items-center">
                                                    <div className="bg-[#EAEFFB] text-center px-6 py-3 rounded lable-color text-sm font-semibold mr-3">
                                                        Basic
                                                    </div>

                                                    <div>
                                                        <h5 className="mb-1 text-base font-medium">You purchased a basic plan and it’s valid only for 1 month</h5>
                                                        <p className="text-sm font-normal text-[#797979]">Today, at 2:10 PM</p>
                                                    </div>
                                                </div>

                                                <h3 className="text-black text-base font-semibold">-₹30,000</h3>
                                            </div>

                                            <div className="block sm:flex justify-between items-center border-b border-[#9DB6BD] py-3">
                                                <div className="block sm:flex items-center">
                                                    <div className="bg-[#FFF8EC] text-center px-3 py-3 rounded color-2 text-sm font-semibold mr-3">
                                                        Standard
                                                    </div>

                                                    <div>
                                                        <h5 className="mb-1 text-base font-medium">You purchased a basic plan and it’s valid only for 1 month</h5>
                                                        <p className="text-sm font-normal text-[#797979]">Today, at 2:10 PM</p>
                                                    </div>
                                                </div>

                                                <h3 className="text-black text-base font-semibold">-₹30,000</h3>
                                            </div>

                                            <div className="block sm:flex justify-between items-center border-b border-[#9DB6BD] py-3">
                                                <div className="block sm:flex items-center">
                                                    <div className="bg-[#EBE3F3] text-center px-3 py-3 rounded text[#634383] text-sm font-semibold mr-3">
                                                        Premium
                                                    </div>

                                                    <div>
                                                        <h5 className="mb-1 text-base font-medium">You purchased a basic plan and it’s valid only for 1 month</h5>
                                                        <p className="text-sm font-normal text-[#797979]">Today, at 2:10 PM</p>
                                                    </div>
                                                </div>

                                                <h3 className="text-black text-base font-semibold">-₹30,000</h3>
                                            </div>

                                            <div className="block sm:flex justify-between items-center border-b border-[#9DB6BD] py-3">
                                                <div className="block sm:flex items-center">
                                                    <div className="bg-[#EAEFFB] text-center px-6 py-3 rounded lable-color text-sm font-semibold mr-3">
                                                        Basic
                                                    </div>

                                                    <div>
                                                        <h5 className="mb-1 text-base font-medium">You purchased a basic plan and it’s valid only for 1 month</h5>
                                                        <p className="text-sm font-normal text-[#797979]">Today, at 2:10 PM</p>
                                                    </div>
                                                </div>

                                                <h3 className="text-black text-base font-semibold">-₹30,000</h3>
                                            </div>

                                            <div className="block sm:flex justify-between items-center border-b border-[#9DB6BD] py-3">
                                                <div className="block sm:flex items-center">
                                                    <div className="bg-[#FFF8EC] px-3 py-3 text-center rounded color-2 text-sm font-semibold mr-3">
                                                        Standard
                                                    </div>

                                                    <div>
                                                        <h5 className="mb-1 text-base font-medium">You purchased a basic plan and it’s valid only for 1 month</h5>
                                                        <p className="text-sm font-normal text-[#797979]">Today, at 2:10 PM</p>
                                                    </div>
                                                </div>

                                                <h3 className="text-black text-base font-semibold">-₹30,000</h3>
                                            </div>

                                            <div className="block sm:flex justify-between items-center border-b border-[#9DB6BD] py-3">
                                                <div className="block sm:flex items-center">
                                                    <div className="bg-[#EAEFFB] text-center px-6 py-3 rounded lable-color text-sm font-semibold mr-3">
                                                        Basic
                                                    </div>

                                                    <div>
                                                        <h5 className="mb-1 text-base font-medium">You purchased a basic plan and it’s valid only for 1 month</h5>
                                                        <p className="text-sm font-normal text-[#797979]">Today, at 2:10 PM</p>
                                                    </div>
                                                </div>

                                                <h3 className="text-black text-base font-semibold">-₹30,000</h3>
                                            </div>
                                        </div>

                                        <div className="flex justify-end">
                                        <ul className="flex mb-6">
                                                <li className="border border-black text-sm font-medium rounded px-3 py-2 mr-3 box-shadow-3">
                                                    <a><i className="fa fa-angle-left" aria-hidden="true"></i> </a>
                                                </li>
                                                <li className="bac-6 text-white text-sm font-semibold rounded px-4 py-2 mr-3">
                                                    <a >1</a>
                                                </li>

                                                <li className="border border-[#95A5A6] text-sm font-semibold color-3 px-3 rounded py-2 mr-3 box-shadow-3">
                                                    <a>2</a>
                                                </li>

                                                <li className="border border-[#95A5A6] text-sm font-semibold color-3 px-3 rounded py-2 mr-3 box-shadow-3">
                                                    <a >3</a>
                                                </li>

                                                <li className="border border-[#95A5A6] text-sm font-semibold color-3 px-3 rounded py-2 mr-3 box-shadow-3">
                                                    <a >4</a>
                                                </li>

                                                <li className="border rounded text-sm font-medium border-black px-3 py-2 box-shadow-3">
                                                    <a ><i className="fa fa-angle-right" aria-hidden="true"></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default InboxModal;