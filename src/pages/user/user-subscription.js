import profilestatus from "../../assets/images/profile-1.svg";
import mosticon from "../../assets/images/most-popular.svg";
import basicicon from "../../assets/images/basic-done.svg";
import standerdicon from "../../assets/images/standra-done.svg";
import primiyamicon from "../../assets/images/primim-done.svg";
import offerstanded from "../../assets/images/offer-standerd.svg";
import primiyamoffer from "../../assets/images/primim-offer.svg";
import { NavLink as Link } from "react-router-dom";

function UserSubscription() {
    return (
        <div className="sm:flex block">
            <div className="flex-initial  w-12/12 sm:w-full bac-1 py-6 px-4 md:py-10 lg:py-8">
                <div className="block sm:flex justify-center items-center mb-12">
                    <img src={profilestatus} alt="ram" className="w-16 sm:block hidden sm:mr-2 sm:m-none" />
                    <img src={profilestatus} alt="ram" className="w-16 block sm:hidden sm:mr-2 sm:m-none mx-auto" />
                    <div>
                        <p className="text-xl font-normal text-center sm:text-left pt-5 sm:pt-0">
                            <span className="font-bold pr-2">Welcome,</span>Manan Sharma
                        </p>
                        <p className="text-center text-sm sm:text-left">Ready to access our pool of trained RevuERs? Let’s do it in 3 quick steps</p>
                    </div>
                </div>

                <div className="border-b-2 border-dashed border-[#95A5A6] w-5/6 md:w-4/6 lg:w-[60%] mx-auto relative sm:mb-18 mb-16">
                    <div className="absolute top-[-22px]">
                        <div className="w-10 h-10 bac-7 rounded-full text-white flex justify-center items-center">1</div>
                    </div>

                    <div className="absolute top-[-22px] left-[43%] md:left-[43%] lg:left-[47%]">
                        <div className="w-10 h-10 bac-1 rounded-full text-[#95A5A6] border-2 border-[#95A5A6] flex justify-center items-center">2</div>
                    </div>

                    <div className="absolute top-[-22px] right-0">
                        <div className="w-10 h-10 bac-1 rounded-full text-[#95A5A6] border-2 border-[#95A5A6] flex justify-center items-center">3</div>
                    </div>

                    <div className="absolute top-8 left-[-33px] font-semibold lable-color text-[9px] sm:text-sm">Purchase a plan</div>

                    <div className="absolute top-8 left-[36%] md:left-[37%] lg:left-[44%] pr-3 font-semibold text-[#95A5A6] text-[9px] sm:text-sm">Setup Your Profile</div>

                    <div className="absolute top-8 right-[-26px] md:right-[-45px] lg:right-[-70px] font-semibold text-[8px] sm:text-sm text-[#95A5A6]">Create your first campaign</div>
                </div>

                <div className="sub-width-4 w-full sm:w-[82.33%] mx-auto">
                    <div className="pt-4">
                        <h6 className="text-center font-semibold  text-lg sm:text-xl mb-2 sm:mb-3">Choose your plan</h6>
                        <p className="text-center text-sm font-normal mb-12">Get the planning, more campaigns, and security features you need to work more efficiently.</p>

                        <div className="block md:block lg:flex mb-8 md:ml-0 lg:ml-0">
                            <div className="flex-initial w-full lg:w-4/12 md:w-full mt-7 mb-20 md:mb-20 lg:mb-0 ">
                                <div className="w-full flex-1 mt-8 order-3 bac-1 rounded-bl-lg md:w-full lg::w-96 lg:w-full lg:order-3 box-shadow-4 pb-11">
                                    <div className="mb-3 pb-7 rounded-b-[50px]  bg-[#EAF0FB] border-gray-300 text-center py-6">
                                        <div className="mx-3">
                                            <span className="block text-2xl font-semibold mb-2 text-[#344B79]">Basic</span>
                                            <p className="text-3xl font-semibold lable-color mb-1">₹1,00,000</p>
                                            <p className="text-sm font-normal lable-color">Per month</p>
                                        </div>
                                    </div>
                                    <ul className="font-medium text-gray-500 py-2 px-152 px-8 mb-4">
                                        <li className="flex text-lg mb-6 items-center alian-baseline ">
                                            <div className="bg-[#EAF0FB] w-7 h-7 flex justify-center items-center rounded-full ">
                                                <img src={basicicon} alt="basicicon" className="w-4" />
                                            </div>
                                            <p className="text-black ml-3 text-sm font-normal font-10">100 Revuers</p>
                                        </li>
                                        <li className="flex text-lg mb-6 items-center alian-baseline">
                                            <div className="bg-[#EAF0FB] w-7 h-7 flex justify-center items-center rounded-full ">
                                                <img src={basicicon} alt="basicicon" className="w-4" />
                                            </div>
                                            <p className="text-black ml-3 text-sm font-normal font-10">Guaranteed Reach 1 Lakh Revuers</p>
                                        </li>

                                        <li className="flex text-lg mb-6 items-center alian-baseline">
                                            <div className="bg-[#EAF0FB] w-7 h-7 flex justify-center items-center rounded-full">
                                                <img src={basicicon} alt="basicicon" className="w-4" />
                                            </div>
                                            <p className="text-black ml-3 text-sm font-normal font-10">10 campaigns</p>
                                        </li>

                                        <li className="flex text-lg mb-6 items-center alian-baseline">
                                            <div className="bg-[#EAF0FB] w-7 h-7 flex justify-center items-center  rounded-full">
                                                <img src={basicicon} alt="basicicon" className="w-4" />
                                            </div>
                                            <p className="text-black ml-3 text-sm font-normal font-10">Customer Support</p>
                                        </li>

                                        <li className="flex text-lg mb-6 items-center alian-baseline">
                                            <div className="bg-[#EAF0FB] w-7 h-7 flex justify-center items-center  rounded-full">
                                                <img src={basicicon} alt="basicicon" className="w-4" />
                                            </div>
                                            <p className="text-black ml-3 text-sm font-normal font-10">Sagittis sit eros mattis morbi</p>
                                        </li>

                                        <li className="flex text-lg mb-6 items-center alian-baseline">
                                            <div className="bg-[#EAF0FB] w-7 h-7 flex justify-center  items-center rounded-full">
                                                <img src={basicicon} alt="basicicon" className="w-4" />
                                            </div>
                                            <p className="text-black ml-3 text-sm font-normal font-10">Egestas at sit dictum nulla</p>
                                        </li>
                                        <li className="flex text-lg mb-6 items-center alian-baseline ">
                                            <div className="bg-[#EAF0FB] w-7 h-7 flex justify-center  items-center rounded-full">
                                                <img src={basicicon} alt="basicicon" className="w-4" />
                                            </div>
                                            <p className="text-black ml-3 text-sm font-normal font-10">In sem commodo maecenas</p>
                                        </li>
                                    </ul>
                                    <Link to={`${process.env.REACT_APP_FRONT_URL}/make-payment`} className="buttio-sub user-sub-buuton text-base font-semibold bg-[#EAF0FB] lable-color w-[20.5rem] rounded-lg py-2 flex mx-auto justify-center">PURCHASE </Link>
                                </div>
                            </div>

                            <div className="flex-initial w-full lg:w-5/12 md:w-full relative">
                                <div className="w-full flex-1 mt-8 order-3 bac-1 rounded-b-lg  md:w-full lg::w-96 lg:w-full lg:order-3 box-shadow-4 pb-11 border-2 border-[#FFE3B2] border-t-0">
                                    <div className="mb-3 rounded-b-[50px] bg-[#FFF8EC]  border-gray-300 text-center py-10 absolute w-full left-0">
                                        <div className="mx-3">
                                            <span className="block text-4xl font-semibold mb-3 text-[#FCB43C]">Standard</span>
                                            <p className="text-3xl font-semibold lable-color mb-1">₹1,50,000</p>
                                            <p className="text-sm font-normal lable-color">Per month</p>
                                            <div className="absolute bottom-6 right-5">
                                                <img src={offerstanded} alt="offerstanded" className="w-16 wimg-sub" />
                                            </div>
                                        </div>
                                    </div>
                                    <ul className="font-medium text-gray-500 py-2.5 px-8 px-152 sm:px-10 pt-56 ">
                                        <li className="flex text-lg mb-6 items-center alian-baseline">
                                            <div className="bg-[#FFF8EC] w-7 h-7 flex justify-center  items-center rounded-full">
                                                <img src={standerdicon} alt="standerdicon" className="w-4" />
                                            </div>
                                            <p className="text-black ml-3 text-base font-normal font-10">200 Revuers</p>
                                        </li>
                                        <li className="flex text-lg mb-6 items-center alian-baseline">
                                            <div className="bg-[#FFF8EC] w-7 h-7 flex justify-center  items-center rounded-full">
                                                <img src={standerdicon} alt="standerdicon" className="w-4" />
                                            </div>
                                            <p className="text-black ml-3 text-base font-normal font-10">Guaranteed Reach 2 Lakh Revuers</p>
                                        </li>

                                        <li className="flex text-lg mb-6 items-center alian-baseline">
                                            <div className="bg-[#FFF8EC] w-7 h-7 flex justify-center  items-center rounded-full">
                                                <img src={standerdicon} alt="standerdicon" className="w-4" />
                                            </div>
                                            <p className="text-black ml-3 text-base font-normal font-10">1 free campaign + 30 campaigns</p>
                                        </li>
                                        <li className="flex text-lg mb-6 items-center alian-baseline">
                                            <div className="bg-[#FFF8EC] w-7 h-7 flex justify-center  items-center rounded-full">
                                                <img src={standerdicon} alt="standerdicon" className="w-4" />
                                            </div>
                                            <p className="text-black ml-3 text-base font-normal font-10">Dedicated Customer success manager</p>
                                        </li>
                                        <li className="flex text-lg mb-6 items-center alian-baseline">
                                            <div className="bg-[#FFF8EC] w-7 h-7 flex justify-center  items-center rounded-full">
                                                <img src={standerdicon} alt="standerdicon" className="w-4" />
                                            </div>
                                            <p className="text-black ml-3 text-base font-normal font-10">Pellentesque nam ultricies maecenas</p>
                                        </li>
                                        <li className="flex text-lg mb-6 items-center alian-baseline">
                                            <div className="bg-[#FFF8EC] w-7 h-7 flex justify-center  items-center rounded-full">
                                                <img src={standerdicon} alt="standerdicon" className="w-4" />
                                            </div>
                                            <p className="text-black ml-3 text-base font-normal font-10">Porttitor curabitur vestibulum diam</p>
                                        </li>
                                        <li className="flex text-lg mb-6 items-centeralian-baseline ">
                                            <div className="bg-[#FFF8EC] w-7 h-7 flex justify-center  items-center rounded-full">
                                                <img src={standerdicon} alt="standerdicon" className="w-4" />
                                            </div>
                                            <p className="text-black ml-3 text-base font-normal font-10">Laoreet pellentesque sit nisl quam sit.</p>
                                        </li>
                                    </ul>
                                    <Link to={`${process.env.REACT_APP_FRONT_URL}/make-payment`} className="buttio-sub user-sub-buuton text-base font-semibold bg-[#FCB43C] lable-color w-[20rem] lg:w-[25rem] rounded-lg py-2 text-white flex mx-auto justify-center mb-6">

                                        PURCHASE </Link>
                                    <div className="absolute -top-16 left-4  md:-top-16 md:left-10 lg:-top-6 lg:left-7">
                                        <img src={mosticon} alt="mosticon" className="w-32" />
                                    </div>
                                </div>
                            </div>

                            <div className="flex-initial w-full lg:w-4/12 md:w-full mt-7">
                                <div className="w-full flex-1 mt-8 order-3 bac-1 rounded-br-lg md:w-full lg::w-96 lg:w-full lg:order-3 box-shadow-3 pb-11">
                                    <div className="mb-3 rounded-b-[50px] bg-[#EBE3F3] border-gray-300 text-center pt-6 pb-8 relative">
                                        <div className="mx-3">
                                            <span className="block text-2xl font-semibold mb-2 text-[#634483]">Premium</span>
                                            <p className="text-3xl font-semibold lable-color mb-1">₹3,00,000</p>
                                            <p className="text-sm font-normal lable-color">Per month</p>
                                            <div className="absolute bottom-6 right-5">
                                                <img src={primiyamoffer} alt="primiyamoffer" className="w-14 wimg-sub" />
                                            </div>
                                        </div>
                                    </div>
                                    <ul className="font-medium text-gray-500 px-152 py-[14px] px-6">
                                        <li className="flex text-lg mb-6 items-center alian-baseline">
                                            <div className="bg-[#E5D9F1] w-7 h-7 flex justify-center items-center rounded-full">
                                                <img src={primiyamicon} alt="primiyamicon" className="w-4" />
                                            </div>
                                            <p className="text-black ml-3 text-sm font-normal font-10">500 Revuers</p>
                                        </li>
                                        <li className="flex text-lg mb-6 items-center alian-baseline">
                                            <div className="bg-[#E5D9F1] w-7 h-7 flex justify-center  items-center rounded-full">
                                                <img src={primiyamicon} alt="primiyamicon" className="w-4 " />
                                            </div>
                                            <p className="text-black ml-3 text-sm font-normal font-10">Guaranteed Reach 5 Lakh Revuers</p>
                                        </li>

                                        <li className="flex text-lg mb-6 items-center alian-baseline">
                                            <div className="bg-[#E5D9F1] w-7 h-7 flex justify-center  items-center rounded-full">
                                                <img src={primiyamicon} alt="primiyamicon" className="w-4" />
                                            </div>
                                            <p className="text-black ml-3 text-sm font-normal font-10">3 free campaign + 50 campaigns</p>
                                        </li>
                                        <li className="flex text-lg mb-6 items-center alian-baseline">
                                            <div className="bg-[#E5D9F1] w-7 h-7 flex justify-center  items-center rounded-full">
                                                <img src={primiyamicon} alt="primiyamicon" className="w-4" />
                                            </div>
                                            <p className="text-black ml-3 text-sm font-normal font-10">Dedicated Customer success manager</p>
                                        </li>
                                        <li className="flex text-lg mb-6 items-center alian-baseline">
                                            <div className="bg-[#E5D9F1] w-7 h-7 flex justify-center  items-center rounded-full">
                                                <img src={primiyamicon} alt="primiyamicon" className="w-4" />{" "}
                                            </div>
                                            <p className="text-black ml-3 text-sm font-normal font-10">Sagittis sit eros mattis morbi</p>
                                        </li>
                                        <li className="flex text-lg mb-6 items-center alian-baseline">
                                            <div className="bg-[#E5D9F1] w-7 h-7 flex justify-center  items-center rounded-full">
                                                <img src={primiyamicon} alt="primiyamicon" className="w-4" />
                                            </div>
                                            <p className="text-black ml-3 text-sm font-normal font-10">Egestas at sit dictum nulla</p>
                                        </li>
                                        <li className="flex text-lg mb-6 items-center alian-baseline">
                                            <div className="bg-[#E5D9F1] w-7 h-7 flex justify-center  items-center rounded-full">
                                                <img src={primiyamicon} alt="primiyamicon" className="w-4" />
                                            </div>
                                            <p className="text-black ml-3 text-sm font-normal font-10">In sem commodo maecenas</p>
                                        </li>
                                    </ul>
                                    <Link to={`${process.env.REACT_APP_FRONT_URL}/make-payment`} className="buttio-sub user-sub-buuton text-base font-semibold bg-[#EBE3F3] lable-color w-[20.8rem] rounded-lg py-2 flex mx-auto justify-center"> PURCHASE</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a href="dassbord.html" className="mt-3 underline text-base  font-medium flex justify-center text-[#818A9E] tracking-widest">
                    Skip this step
                </a>
            </div>
        </div>
    );
}
export default UserSubscription;
