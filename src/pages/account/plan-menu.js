import logoImages from "../../assets/images/profile-img.svg";
import vectorimg from "../../assets/images/Vector.svg"
import mosticon from "../../assets/images/most-popular.svg";
import basicicon from "../../assets/images/basic-done.svg";
import standerdicon from "../../assets/images/standra-done.svg";
import primiyamicon from "../../assets/images/primim-done.svg";
import offerstanded from "../../assets/images/offer-standerd.svg";
import primiyamoffer from "../../assets/images/primim-offer.svg";
import dropuserimg from "../../assets/images/User.svg"
import logimg from "../../assets/images/log-out.svg"
import {Header,Sidebar} from "../../layouts";
function Planmenu() {
    return (
        <>
            <section className="pl-0 md:pl-60 lg:pl-[12.8rem] lg:pt-0 md:pt-0 pt-14">
             
             <div className="pl-10">
            <Header  welcome="Plans "/>
            </div>
                <div className="w-full sm:w-11/12 mx-auto">
                    <div className="pt-14">
                        <h6 className="text-center font-semibold text-lg sm:text-2xl mb-2 sm:mb-3">Choose your plan</h6>
                        <p className="text-center text-sm font-medium mb-12">Get the planning, more campaigns, and security features you need to work more efficiently.</p>

                        <div className="block md:block lg:flex mb-8 md:ml-0 lg:ml-10 px-5 sm:px-0 social-break">
                            <div className="flex-initial w-full lg:w-4/12 md:w-full mt-7 mb-20 md:mb-20 lg:mb-0 sub-width-2">
                                <div className="w-full flex-1 mt-8 order-3 bac-1 rounded-bl-lg md:w-full lg::w-96 lg:w-full lg:order-3 box-shadow-3 pb-11">
                                    <div className="mb-3 pb-6 rounded-b-[47px] bg-[#EAF0FB] border-gray-300 text-center py-6">
                                        <div className="mx-3">
                                            <span className="block text-2xl font-semibold mb-2 text-[#344B79]">Basic</span>
                                            <p className="text-3xl font-semibold lable-color mb-1">₹1,00,000</p>
                                            <p className="text-sm font-normal lable-color">per month</p>
                                        </div>
                                    </div>
                                    <ul className="font-medium text-gray-500 py-2.5 px-152 px-8 mb-4">
                                        <li className="flex text-lg mb-8 items-center alian-baseline">
                                            <div className="bg-[#EAF0FB] w-7 h-7 flex justify-center items-center rounded-full">
                                                <img src={basicicon} alt="basicicon" className="w-4" />
                                            </div>
                                            <p className="text-black ml-3 text-[13px] font-normal font-10">100 Revuers</p>
                                        </li>
                                        <li className="flex text-lg mb-8 items-center alian-baseline">
                                            <div className="bg-[#EAF0FB] w-7 h-7 flex justify-center items-center rounded-full">
                                                <img src={basicicon} alt="basicicon" className="w-4" />
                                            </div>
                                            <p className="text-black ml-3 text-[13px] font-normal font-10">Guaranteed Reach 1 Lakh Revuers</p>
                                        </li>

                                        <li className="flex text-lg mb-8 items-center alian-baseline">
                                            <div className="bg-[#EAF0FB] w-7 h-7 flex justify-center items-center rounded-full">
                                                <img src={basicicon} alt="basicicon" className="w-4" />
                                            </div>
                                            <p className="text-black ml-3 text-[13px] font-normal font-10">10 campaigns</p>
                                        </li>

                                        <li className="flex text-lg mb-8 items-center alian-baseline">
                                            <div className="bg-[#EAF0FB] w-7 h-7 flex justify-center items-center rounded-full">
                                                <img src={basicicon} alt="basicicon" className="w-4" />
                                            </div>
                                            <p className="text-black ml-3 text-[13px] font-normal font-10">Customer Support</p>
                                        </li>

                                        <li className="flex text-lg mb-8 items-center alian-baseline">
                                            <div className="bg-[#EAF0FB] w-7 h-7 flex justify-center items-center rounded-full">
                                                <img src={basicicon} alt="basicicon" className="w-4" />
                                            </div>
                                            <p className="text-black ml-3 text-[13px] font-normal font-10">Sagittis sit eros mattis morbi</p>
                                        </li>

                                        <li className="flex text-lg mb-8 items-center alian-baseline">
                                            <div className="bg-[#EAF0FB] w-7 h-7 flex justify-center items-center rounded-full">
                                                <img src={basicicon} alt="basicicon" className="w-4" />
                                            </div>
                                            <p className="text-black ml-3 text-[13px] font-normal font-10">Egestas at sit dictum nulla</p>
                                        </li>
                                        <li className="flex text-lg mb-8 items-center alian-baseline">
                                            <div className="bg-[#EAF0FB] w-7 h-7 flex justify-center items-center rounded-full">
                                                <img src={basicicon} alt="basicicon" className="w-4" />
                                            </div>
                                            <p className="text-black ml-3 text-[13px] font-normal font-10">In sem commodo maecenas</p>
                                        </li>
                                    </ul>
                                    <button className="buttio-sub text-base -mt-1 font-bold bg-[#EAF0FB] lable-color w-72 lg:w-80 rounded-lg py-2.5 flex mx-auto justify-center uppercase" >PURCHASE</button>
                                </div>
                            </div>

                            <div className="flex-initial w-full lg:w-5/12 md:w-full relative sub-width-2">
                                <div className="w-full flex-1 mt-8 order-3 bac-1 rounded-b-lg md:w-full lg::w-96 lg:w-full lg:order-3 box-shadow-3 pb-11 border-2 border-[#FFF3DD] border-t-0">
                                    <div className="mb-3 rounded-b-[47px] bg-[#FFF3DD] border-gray-300 text-center py-8 absolute w-full left-0">
                                        <div className="mx-3">
                                            <span className="block text-3xl font-semibold mb-3 text-[#FCB43C]">Standard</span>
                                            <p className="text-3xl font-semibold lable-color mb-1">₹1,50,000</p>
                                            <p className="text-sm font-normal lable-color">per month</p>
                                            <div className="absolute bottom-6 right-5">
                                                <img src={offerstanded} alt="offerstanded" className="w-20 wimg-sub" />
                                            </div>
                                        </div>
                                    </div>
                                    <ul className="font-medium text-gray-500 px-152 py-4 px-10 pt-52">
                                        <li className="flex text-lg mb-8 items-center alian-baseline">
                                            <div className="bg-[#FFF8EC] w-7 h-7 flex justify-center items-center rounded-full">
                                                <img src={standerdicon} alt="standerdicon" className="w-4" />
                                            </div>
                                            <p className="text-black ml-3 text-base font-normal font-10">200 Revuers</p>
                                        </li>
                                        <li className="flex text-lg mb-8 items-center alian-baseline">
                                            <div className="bg-[#FFF8EC] w-7 h-7 flex justify-center items-center rounded-full">
                                                <img src={standerdicon} alt="standerdicon" className="w-4" />
                                            </div>
                                            <p className="text-black ml-3 text-base font-normal font-10">Guaranteed Reach 2 Lakh Revuers</p>
                                        </li>

                                        <li className="flex text-lg mb-8 items-center alian-baseline">
                                            <div className="bg-[#FFF8EC] w-7 h-7 flex justify-center items-center rounded-full">
                                                <img src={standerdicon} alt="standerdicon" className="w-4" />
                                            </div>
                                            <p className="text-black ml-3 text-base font-normal font-10">1 free campaign + 30 campaigns</p>
                                        </li>
                                        <li className="flex text-lg mb-8 items-center alian-baseline">
                                            <div className="bg-[#FFF8EC] w-7 h-7 flex justify-center items-center rounded-full">
                                                <img src={standerdicon} alt="standerdicon" className="w-4" />
                                            </div>
                                            <p className="text-black ml-3 text-base font-normal font-10">Dedicated Customer success manager</p>
                                        </li>
                                        <li className="flex text-lg mb-8 items-center alian-baseline">
                                            <div className="bg-[#FFF8EC] w-7 h-7 flex justify-center items-center rounded-full">
                                                <img src={standerdicon} alt="standerdicon" className="w-4" />
                                            </div>
                                            <p className="text-black ml-3 text-base font-normal font-10">Pellentesque nam ultricies maecenas</p>
                                        </li>
                                        <li className="flex text-lg mb-8 items-center alian-baseline">
                                            <div className="bg-[#FFF8EC] w-7 h-7 flex justify-center items-center rounded-full">
                                                <img src={standerdicon} alt="standerdicon" className="w-4" />
                                            </div>
                                            <p className="text-black ml-3 text-base font-normal font-10">Porttitor curabitur vestibulum diam</p>
                                        </li>
                                        <li className="flex text-lg mb-8 items-center alian-baseline">
                                            <div className="bg-[#FFF8EC] w-7 h-7 flex justify-center items-center rounded-full">
                                                <img src={standerdicon} alt="standerdicon" className="w-4" />
                                            </div>
                                            <p className="text-black ml-3 text-base font-normal font-10">Laoreet pellentesque sit nisl quam sit.</p>
                                        </li>
                                    </ul>
                                    <button className="buttio-sub text-base font-bold mb-5 bg-[#FCB43C] lable-color w-72 lg:w-96 rounded-lg py-2.5 text-white flex mx-auto justify-center uppercase">PURCHASE</button>
                                    <div className="absolute -top-16 left-4 md:-top-16 md:left-10 lg:-top-6 lg:left-3">
                                        <img src={mosticon} alt="mosticon" className="w-32" />
                                    </div>
                                </div>
                            </div>

                            <div className="flex-initial w-full lg:w-4/12 md:w-full mt-7 sub-width-2">
                                <div className="w-full flex-1 mt-8 order-3 bac-1 rounded-br-lg md:w-full lg::w-96 lg:w-full lg:order-3 box-shadow-3 pb-11">
                                    <div className="mb-3 rounded-b-[47px] bg-[#EBE3F3] border-gray-300 text-center py-6 relative">
                                        <div className="mx-3">
                                            <span className="block text-2xl font-semibold mb-2 text-[#634483]">Premium</span>
                                            <p className="text-3xl font-semibold lable-color mb-1">₹3,00,000</p>
                                            <p className="text-sm font-normal lable-color">per month</p>
                                            <div className="absolute bottom-6 right-5">
                                                <img src={primiyamoffer} alt="primiyamoffer" className="w-16 wimg-sub" />
                                            </div>
                                        </div>
                                    </div>
                                    <ul className="font-medium text-gray-500 px-152 py-2.5 px-6 mb-3">
                                        <li className="flex text-lg mb-8 items-center alian-baseline ">
                                            <div className="bg-[#E5D9F1] w-7 h-7 flex justify-center items-center rounded-full">
                                                <img src={primiyamicon} alt="primiyamicon" className="w-4" />
                                            </div>
                                            <p className="text-black ml-3 text-[13px] font-normal font-10">500 Revuers</p>
                                        </li>
                                        <li className="flex text-lg mb-8 items-center alian-baseline">
                                            <div className="bg-[#E5D9F1] w-7 h-7 flex justify-center items-center rounded-full">
                                                <img src={primiyamicon} alt="primiyamicon" className="w-4" />
                                            </div>
                                            <p className="text-black ml-3 text-[13px] font-normal font-10">Guaranteed Reach 5 Lakh Revuers</p>
                                        </li>

                                        <li className="flex text-lg mb-6 ">
                                            <div className="bg-[#E5D9F1] w-7 h-7 flex justify-center items-center rounded-full">
                                                <img src={primiyamicon} alt="primiyamicon" className="w-4" />
                                            </div>
                                            <p className="text-black ml-3 text-[13px] font-normal font-10">3 free campaign + 50 campaigns</p>
                                        </li>
                                        <li className="flex text-lg mb-8 items-center alian-baseline">
                                            <div className="bg-[#E5D9F1] w-7 h-7 flex justify-center items-center rounded-full">
                                                <img src={primiyamicon} alt="primiyamicon" className="w-4" />
                                            </div>
                                            <p className="text-black ml-3 text-[13px] font-normal font-10">Dedicated Customer success manager</p>
                                        </li>
                                        <li className="flex text-lg mb-8 items-center alian-baseline">
                                            <div className="bg-[#E5D9F1] w-7 h-7 flex justify-center items-center rounded-full">
                                                <img src={primiyamicon} alt="primiyamicon" className="w-4" />
                                            </div>
                                            <p className="text-black ml-3 text-[13px] font-normal font-10">Sagittis sit eros mattis morbi</p>
                                        </li>
                                        <li className="flex text-lg mb-8 items-center alian-baseline">
                                            <div className="bg-[#E5D9F1] w-7 h-7 flex justify-center items-center rounded-full">
                                                <img src={primiyamicon} alt="primiyamicon" className="w-4" />
                                            </div>
                                            <p className="text-black ml-3 text-[13px] font-normal font-10">Egestas at sit dictum nulla</p>
                                        </li>
                                        <li className="flex text-lg mb-8 items-center alian-baseline">
                                            <div className="bg-[#E5D9F1] w-7 h-7 flex justify-center items-center rounded-full">
                                                <img src={primiyamicon} alt="primiyamicon" className="w-4" />
                                            </div>
                                            <p className="text-black ml-3 text-[13px] font-normal font-10">In sem commodo maecenas</p>
                                        </li>
                                    </ul>
                                    <button className="buttio-sub text-base font-bold mt-5 bg-[#EBE3F3] lable-color w-72 lg:w-80 rounded-lg py-2.5 flex mx-auto justify-center uppercase" >PURCHASE</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Sidebar title="Plan-menu" />
        </>
    );
}
export default Planmenu;
