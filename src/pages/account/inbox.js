import amitimg from "../../assets/images/amit.svg"
import Divyaimg from "../../assets/images/divya.svg"
import Bhargaviimg from "../../assets/images/Bhargavi-kirubasankar.svg"
import rohitimg from "../../assets/images/Rohit-sharma.svg"
import someshimg from "../../assets/images/Somesh-Nanda.svg"
import amrishimg from "../../assets/images/Amrish-Ilyas.svg"
import Riyaiimg from "../../assets/images/Riya-Gupta.svg"
import { Header, Sidebar } from "../../layouts";
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from "react";
import { getNotificationData } from "../../context/actions/notification"
function Inboxpage() {

    const dispatch = useDispatch();
    const notificationListData = useSelector((state) => state.notificationData);

    var brandlogin_unique_token = localStorage.getItem("brandlogin_unique_token");
    useEffect(() => {
        dispatch(getNotificationData({ brandlogin_unique_token: brandlogin_unique_token, type: 2 }))
    }, [])

    return (
        <>
            <section className="pl-0 md:pl-60 lg:pl-[15rem] lg:pt-0 md:pt-0 pt-14">
                <Header welcome="Inbox " />
                <div className="px-8">
                    <div className="bg-white box-shadow-1 rounded-xl pb-8 mt-10 mb-10">
                        <h3 className="py-8 px-8 text-2xl font-bold">Inbox</h3>



                        <div className="px-3 lg:px-6">



                            {
                                notificationListData ? notificationListData.length > 0
                                    ?
                                    notificationListData.map((item, index) => {
                                        return (
                                            <>
                                                <div className="block md:flex lg:flex py-3 justify-between items-center">
                                                    <div className="flex items-center">
                                                        <div className="mr-5">
                                                            <img src={item.campaign_image} alt="" className=" w-[5.3rem] h-10 md:w-20 md:h-[3.2rem] lg:w-12 lg:h-12  object-cover" />
                                                        </div>
                                                        <div>

                                                            {
                                                                item.type == '9' ?
                                                                    <>
                                                                        <a href={'campaign-menegment-active-request/' + item.campaign_token}><h3 className="text-base font-semibold">{item.campaign_name}</h3></a>
                                                                    </>
                                                                    :
                                                                    item.type == '10' ?
                                                                        <>
                                                                            <a href={'campaign-task-details/' + item.campaign_token}><h3 className="text-base font-semibold">{item.campaign_name}</h3></a>
                                                                        </>
                                                                        :
                                                                        item.type == '11' ?
                                                                            <>
                                                                                <a href={'campaign-task-details/' + item.campaign_token}><h3 className="text-base font-semibold">{item.campaign_name}</h3></a>
                                                                            </>
                                                                            :
                                                                            item.type == '12' ?
                                                                                <>
                                                                                    {
                                                                                        item.campaign_type == "2"
                                                                                            ?
                                                                                            <>
                                                                                                <a href={`${process.env.BRAND_URL}${process.env.REACT_APP_FRONT_URL}/campaign-details-video-review/${item.campaign_token}/${item.revuer_token}`}><h3 className="text-base font-semibold">{item.campaign_name}</h3></a>
                                                                                            </>
                                                                                            :
                                                                                            item.campaign_type == "3"
                                                                                                ?
                                                                                                <>
                                                                                                    <a href={`${process.env.BRAND_URL}${process.env.REACT_APP_FRONT_URL}/campaign-details-testimonial-review/${item.campaign_token}/${item.revuer_token}`}><h3 className="text-base font-semibold">{item.campaign_name}</h3></a>
                                                                                                </>
                                                                                                :
                                                                                                item.campaign_type == "7" ?
                                                                                                    <>
                                                                                                        <a href={`${process.env.BRAND_URL}${process.env.REACT_APP_FRONT_URL}/campaign-details-influncer-outreach-review/${item.campaign_token}/${item.revuer_token}`}><h3 className="text-base font-semibold">{item.campaign_name}</h3></a>
                                                                                                    </>
                                                                                                    :
                                                                                                    ""
                                                                                    }
                                                                                </>
                                                                                :
                                                                                item.type == '13' ?
                                                                                    <>
                                                                                        <a href={'campaign-task-details/' + item.campaign_token}><h3 className="text-base font-semibold">{item.campaign_name}</h3></a>
                                                                                    </>
                                                                                    :
                                                                                    ""
                                                            }
                                                            <p className="text-sm text-black">{item.message}</p>
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <h5 className="text-gray-400 text-end text-sm">{item.insert_date}</h5>
                                                    </div>
                                                </div>
                                                <hr />
                                            </>
                                        )
                                    })
                                    :
                                    <>
                                        <div>
                                            <h3 className="text-base font-semibold">No Notification Found</h3>
                                        </div>
                                    </>
                                    : ""
                            }



                        </div>
                    </div>
                </div>

                {/* <div>
                    <ul className="flex justify-end mb-5  mr-4 mr10">
                        <li className="border px-4 py-2 rounded mr-2 flex items-center justify-center">
                            <a><i className="fa fa-angle-left text-xl font-medium" aria-hidden="true"></i></a>
                        </li>
                        <li className="border bac-6 px-4 py-2 text-white flex items-center justify-center rounded mr-2">
                            <a >1</a>
                        </li>
                        <li className="border flex items-center text-gray-400 justify-center px-4 py-2 rounded mr-2">
                            <a>2</a>
                        </li>

                        <li className="border flex items-center justify-center text-gray-400 px-4 py-2 rounded mr-2">
                            <a>3</a>
                        </li>

                        <li className="border flex items-center justify-center text-gray-400 px-4 py-2 rounded mr-2">
                            <a>4</a>
                        </li>
                        <li className="border flex items-center justify-center px-4 py-2 rounded mr-2">
                            <a ><i className="fa fa-angle-right text-xl font-medium" aria-hidden="true"></i> </a>
                        </li>
                    </ul>
                </div> */}
            </section>

            <Sidebar title="inbox" />
        </>
    );
}
export default Inboxpage;