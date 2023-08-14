import complitedimg from "../../assets/images/done-cemping-icon.svg";
import { NavLink as Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from "react";
import moment from 'moment'

import { getRevuerCompletedTask } from "../../context/actions/revuer"

export default function () {


    const dispatch = useDispatch();
    let navigate = useNavigate();

    const pathname = window.location.pathname;
    const campaign_token = pathname.substring(pathname.lastIndexOf('/') + 1);
    var brandlogin_unique_token = localStorage.getItem("brandlogin_unique_token");

    const [completedTaskPageState, setCompletedTaskPageState] = useState(0);

    const revuerCompletedTaskListData = useSelector((state) => state.revuerCompletedTaskListData);
    var getRevuerCompletedTaskList = revuerCompletedTaskListData.getRevuerCompletedTaskList
    var revuerCompletedTaskPageCount = revuerCompletedTaskListData ? Math.ceil(revuerCompletedTaskListData.revuerCompletedTaskCount / 10) : ''
    const [revuerCompletedTaskPageCountNumber, setCompletedTaskPageCount] = useState(revuerCompletedTaskPageCount)

    useEffect(() => {
        revuerCompletedTaskList(completedTaskPageState);
    }, []);

    const revuerCompletedTaskList = (completedTaskPageNumber) => {
        dispatch(getRevuerCompletedTask({ campaign_token: campaign_token, brandlogin_unique_token: brandlogin_unique_token, navigate, pageValue: completedTaskPageNumber }))
    }

    const currentCompletedTaskPage = (pageCompletedTaskvalue) => {
        setCompletedTaskPageState(pageCompletedTaskvalue)
        revuerCompletedTaskList(pageCompletedTaskvalue)
    }

    const nextCompletedTaskPage = () => {
        const newCompletedTaskPageValue = completedTaskPageState + 1
        if (revuerCompletedTaskPageCount > newCompletedTaskPageValue) {
            setCompletedTaskPageState(newCompletedTaskPageValue)
            revuerCompletedTaskList(newCompletedTaskPageValue)
        }
    }

    const prevCompletedTaskPage = () => {
        const newCompletedTaskPageValue = completedTaskPageState
        if (newCompletedTaskPageValue >= 1) {
            setCompletedTaskPageState(newCompletedTaskPageValue - 1)
            revuerCompletedTaskList(newCompletedTaskPageValue)
        }
    }

    return (
        <>
            <div className="overflow-auto mb-5">
                <table className="table-auto w-full">
                    <thead>
                        <tr className="bg-[#EBF0F2] mb-3 h-14">
                            <th className="lable-color font-medium lg:font-semibold md:font-medium rounded-l-lg text-xs sm:text-sm px-5 md:px-5 lg:pl-4 py-2">Revuers Name</th>

                            <th className="lable-color font-medium lg:font-semibold md:font-medium text-xs sm:text-sm md:px-5 lg:px-4 px-5 sm:pl-3 py-2">Message</th>

                            <th className="lable-color font-medium lg:font-semibold md:font-medium text-xs sm:text-sm md:px-5 px-5 sm:pl-3 py-2">Apply</th>

                            <th className="lable-color font-medium lg:font-semibold md:font-medium text-xs sm:text-sm md:px-5 px-5 sm:pl-3 py-2">Submit</th>

                            <th className="lable-color text-left w-52 font-medium lg:font-semibold md:font-medium text-xs rounded-r-lg sm:text-sm pl-8 md:pr-5 pr-5 sm:pr-3 py-2">Task Status</th>
                        </tr>
                        <tr className="h-0"></tr>

                        {
                            getRevuerCompletedTaskList ?
                                getRevuerCompletedTaskList.length > 0 ?
                                    getRevuerCompletedTaskList.map((item, index) => {
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

                                                    <td className="lable-color  font-normal text-xs sm:text-sm md:px-5 px-5 sm:pl-5 py-2">{moment(item.updateAt).format('L')}</td>

                                                    <td className="lable-color text-xs sm:text-base font-normal py-5 pr-0 pl-8">
                                                        <div className="flex justify-left">
                                                            <img src={complitedimg} alt="complitedimg" className="mr-2 w-5" />
                                                            <h5 className="text-sm font-normal">Completed</h5>
                                                        </div>
                                                    </td>


                                                </tr>
                                                <tr className="h-4"></tr>
                                            </>
                                        )
                                    })
                                    :
                                    <>
                                        <tr className="border-b mb-3">
                                            <td colSpan="5" className="lable-color text-center font-normal text-xs sm:text-base  px-5 md:px-5 lg:pl-4 py-4">
                                                No Completed Task Found
                                            </td>
                                        </tr>
                                        <tr className="h-4"> </tr>
                                    </>
                                :
                                <>
                                    <tr className="border-b mb-3">
                                        <td colSpan="5" className="lable-color text-center font-normal text-xs sm:text-base  px-5 md:px-5 lg:pl-4 py-4">
                                            No Completed Task Found
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
                        <a href="javascript:void(0)" onClick={() => prevCompletedTaskPage()}><i className="fa fa-angle-left" aria-hidden="true"></i> </a>
                    </li>

                    {
                        getRevuerCompletedTaskList && Array(revuerCompletedTaskPageCount).fill(revuerCompletedTaskPageCount).map((item, index) => (
                            <li className={`${index === completedTaskPageState ? "bac-6 text-white text-sm font-semibold rounded px-[1rem] py-2 mr-3" : "border border-[#95A5A6] text-sm font-semibold color-3 px-3 rounded py-2 mr-3"}`}>
                                <a href="javascript:void(0)" onClick={() => currentCompletedTaskPage(index)}>{index + 1}</a>
                            </li>
                        ))
                    }
                    <li className="border rounded text-sm font-medium border-black px-3 py-2 mr-3">
                        <a href="javascript:void(0)" onClick={() => nextCompletedTaskPage()} ><i className="fa fa-angle-right" aria-hidden="true"></i></a>
                    </li>
                </ul>
            </div>
        </>
    )
}