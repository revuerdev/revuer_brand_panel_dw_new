import complitedimg from "../../assets/images/done-cemping-icon.svg";
import closeimg from "../../assets/images/close-camping-icon.svg";
import pandingimg from "../../assets/images/panding-rewis-icon.svg";
import orgningimg from "../../assets/images/orgnig-camping-icon.svg";
import { NavLink as Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from "react";
import moment from 'moment'


import { getRevuerAllTask } from "../../context/actions/revuer"

export default function () {


    const dispatch = useDispatch();
    let navigate = useNavigate();

    const pathname = window.location.pathname;
    const campaign_token = pathname.substring(pathname.lastIndexOf('/') + 1);
    var brandlogin_unique_token = localStorage.getItem("brandlogin_unique_token");

    const [allTaskPageState, setAllTaskPageState] = useState(0);

    const revuerAllTaskListData = useSelector((state) => state.revuerAllTaskListData);
    var getRevuerAllTaskList = revuerAllTaskListData.getRevuerAllTaskList
    var revuerAllTaskPageCount = revuerAllTaskListData ? Math.ceil(revuerAllTaskListData.revuerAllTaskCount / 10) : ''
    const [revuerAllTaskPageCountNumber, setAllTaskPageCount] = useState(revuerAllTaskPageCount)

    useEffect(() => {
        revuerAllTaskList(allTaskPageState);
    }, []);


    const revuerAllTaskList = (allTaskPageNumber) => {
        dispatch(getRevuerAllTask({ campaign_token: campaign_token, brandlogin_unique_token: brandlogin_unique_token, navigate, pageValue: allTaskPageNumber }))
    }

    const currentAllTaskPage = (pageAllTaskvalue) => {
        setAllTaskPageState(pageAllTaskvalue)
        revuerAllTaskList(pageAllTaskvalue)
    }

    const nextAllTaskPage = () => {
        const newAllTaskPageValue = allTaskPageState + 1
        if (revuerAllTaskPageCount > newAllTaskPageValue) {
            setAllTaskPageState(newAllTaskPageValue)
            revuerAllTaskList(newAllTaskPageValue)
        }
    }

    const prevAllTaskPage = () => {
        const newAllTaskPageValue = allTaskPageState
        if (newAllTaskPageValue >= 1) {
            setAllTaskPageState(newAllTaskPageValue - 1)
            revuerAllTaskList(newAllTaskPageValue)
        }
    }


    return (
        <>
            <div className="overflow-auto mb-5">
                <table className="table-auto w-full">
                    <thead>
                        <tr className="bg-[#EBF0F2] mb-3 h-14">
                            <th className="lable-color font-medium lg:font-semibold md:font-medium rounded-l-lg text-xs sm:text-sm px-5 md:px-5 lg:pl-4 py-2">Revuers Name</th>

                            <th className="lable-color font-medium lg:font-semibold md:font-medium text-xs sm:text-sm md:px-5 px-5 sm:pl-3 py-2">Message</th>

                            <th className="lable-color font-medium lg:font-semibold md:font-medium text-xs sm:text-sm md:px-5 px-5 sm:pl-3 py-2">Apply</th>

                            <th className="lable-color font-medium lg:font-semibold md:font-medium text-xs sm:text-sm md:px-5 px-5 sm:pl-3 py-2">Submit</th>

                            <th className="lable-color text-left w-52 font-medium lg:font-semibold md:font-medium text-xs sm:text-sm pl-8 md:pr-5 pr-5 sm:pr-3 py-2">Task Status</th>
                        </tr>
                        <tr className="h-0"></tr>

                        {
                            getRevuerAllTaskList ?
                                getRevuerAllTaskList.length > 0 ?
                                    getRevuerAllTaskList.map((item, index) => {
                                        return (
                                            <>

                                                <tr className="border-b mb-4">
                                                    <td className="lable-color  text-xs sm:text-base font-normal px-5 md:px-5 lg:pl-4 py-4">

                                                        {
                                                            item.camp_type_id == "2" ?
                                                                <a href={`${process.env.BRAND_URL}${process.env.REACT_APP_FRONT_URL}/campaign-details-video-review/${item.campaign_token}/${item.revuer_token}`}>{item.first_name} {item.last_name}</a> :
                                                                item.camp_type_id == "3" ?
                                                                    <a href={`${process.env.BRAND_URL}${process.env.REACT_APP_FRONT_URL}/campaign-details-testimonial-review/${item.campaign_token}/${item.revuer_token}`}>{item.first_name} {item.last_name}</a> :
                                                                    item.camp_type_id == "7" ?
                                                                        <a href={`${process.env.BRAND_URL}${process.env.REACT_APP_FRONT_URL}/campaign-details-influncer-outreach-review/${item.campaign_token}/${item.revuer_token}`}>{item.first_name} {item.last_name}</a> :
                                                                        ''
                                                        }


                                                    </td>

                                                    <td className="lable-color text-xs sm:text-base font-normal px-5 md:px-5 lg:pl-5 py-4">{item.message}</td>

                                                    <td className="lable-color  text-xs sm:text-base font-normal px-5 md:px-5 lg:pl-5 py-4">{moment(item.createdAt).format('L')}</td>

                                                    {
                                                        item.revuer_task_status == '0'
                                                            ?
                                                            <>
                                                                <td className="lable-color  font-normal text-xs sm:text-sm md:px-5 px-5 sm:pl-5 py-2">--</td>
                                                            </>
                                                            :
                                                            <>
                                                                <td className="lable-color  font-normal text-xs sm:text-sm md:px-5 px-5 sm:pl-5 py-2">{moment(item.updateAt).format('L')}</td>



                                                            </>
                                                    }

                                                    {
                                                        item.revuer_task_status == '0'
                                                            ?
                                                            <>
                                                                <td className="lable-color  text-xs sm:text-base font-normal py-5 pr-0 pl-8">
                                                                    <div className="flex justify-left">
                                                                        <img src={pandingimg} alt="pandingimg" className="mr-2 w-5" />
                                                                        <h5 className="text-sm font-normal">Pending Approval</h5>
                                                                    </div>
                                                                </td>
                                                            </>
                                                            :
                                                            item.revuer_task_status == '2'
                                                                ?
                                                                <>
                                                                    <td className="lable-color text-xs sm:text-base font-normal py-5 pr-0 pl-8">
                                                                        <div className="flex justify-left">
                                                                            <img src={complitedimg} alt="complitedimg" className="mr-2 w-5" />
                                                                            <h5 className="text-sm font-normal">Completed</h5>
                                                                        </div>
                                                                    </td>
                                                                </>
                                                                :
                                                                item.revuer_task_status == '3'
                                                                    ? item.task_button_type == 1 ?
                                                                        <>
                                                                            <td className="lable-color  text-xs sm:text-base font-normal py-5 pr-0 pl-8">
                                                                                <div className="flex justify-left">
                                                                                    <img src={closeimg} alt="closeimg" className="mr-2 w-5" />
                                                                                    <h5 className="text-sm font-normal">Not Yet</h5>
                                                                                </div>
                                                                            </td>
                                                                        </> :
                                                                        <>
                                                                            <td className="lable-color  text-xs sm:text-base font-normal py-5 pr-0 pl-8">
                                                                                <div className="flex justify-left">
                                                                                    <img src={closeimg} alt="closeimg" className="mr-2 w-5" />
                                                                                    <h5 className="text-sm font-normal">Declined</h5>
                                                                                </div>
                                                                            </td>
                                                                        </>

                                                                    :
                                                                    <>
                                                                        <td className="lable-color  text-xs sm:text-base font-normal py-5 pr-0 pl-8">
                                                                            <div className="flex justify-left">
                                                                                <img src={orgningimg} alt="closeimg" className="mr-2 w-5" />
                                                                                <h5 className="text-sm font-normal">Ongoing</h5>
                                                                            </div>
                                                                        </td>
                                                                    </>
                                                    }


                                                </tr>
                                                <tr className="h-4"></tr>
                                            </>
                                        )
                                    })
                                    :
                                    <>
                                        <tr className="border-b mb-3">
                                            <td colSpan="5" className="lable-color text-center font-normal text-xs sm:text-base  px-5 md:px-5 lg:pl-4 py-4">
                                                No All Task Found
                                            </td>
                                        </tr>
                                        <tr className="h-4"> </tr>
                                    </>
                                :
                                <>
                                    <tr className="border-b mb-3">
                                        <td colSpan="5" className="lable-color text-center font-normal text-xs sm:text-base  px-5 md:px-5 lg:pl-4 py-4">
                                            No All Task Found
                                        </td>
                                    </tr>
                                    <tr className="h-4"> </tr>
                                </>
                        }
                    </thead>
                </table>
            </div>
            <div className="flex justify-end textjustify">
                <ul className="flex mb-6">
                    <li className="border border-black text-sm font-medium rounded px-3 py-2 mr-3">
                        <a href="javascript:void(0)" onClick={() => prevAllTaskPage()}><i className="fa fa-angle-left" aria-hidden="true"></i> </a>
                    </li>

                    {
                        getRevuerAllTaskList && Array(revuerAllTaskPageCount).fill(revuerAllTaskPageCount).map((item, index) => (
                            <li className={`${index === allTaskPageState ? "bac-6 text-white text-sm font-semibold rounded px-[1rem] py-2 mr-3" : "border border-[#95A5A6] text-sm font-semibold color-3 px-3 rounded py-2 mr-3"}`}>
                                <a href="javascript:void(0)" onClick={() => currentAllTaskPage(index)}>{index + 1}</a>
                            </li>
                        ))
                    }
                    <li className="border rounded text-sm font-medium border-black px-3 py-2 mr-3">
                        <a href="javascript:void(0)" onClick={() => nextAllTaskPage()} ><i className="fa fa-angle-right" aria-hidden="true"></i></a>
                    </li>
                </ul>
            </div>
        </>
    )
}