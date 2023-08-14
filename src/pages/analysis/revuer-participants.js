import editimg from "../../assets/images/edit-2.svg"
import deletimg from "../../assets/images/trash.svg"
import viewlink from "../../assets/images/view-link.png"
import { Header, Sidebar } from "../../layouts";
import { useEffect, useRef, useState } from "react";
import Moment from 'moment';
import { useDispatch, useSelector } from 'react-redux'
import { getBrandDetails } from "../../context/actions/brand"
import { getRevuerParticipantsReport, getCampaignNames } from "../../context/actions/analysis"
import { toggleModal11 } from "../../services/edit-modal"
import { CampaignDeleteModal } from "../../components/Modal";
import { changeDateFormate } from "../../services/edit-modal"
import block from "../../assets/images/block.png"
import unblock from "../../assets/images/unblock.png"

import selecticon from "../../assets/images/down-select.svg";
import { useForm } from "react-hook-form"
import { DateRange } from 'react-date-range';
import { addDays } from 'date-fns';
import celendericon from "../../assets/images/calendar-black.svg";
import { toast } from "react-toastify"

function Dassbord() {

    const dispatch = useDispatch();
    const [buttonHide, setButtonHide] = useState()
    var brandlogin_unique_token = localStorage.getItem("brandlogin_unique_token");
    const brandDataDetails = useSelector((state) => state.brandDetails);
    const revuerParticipantsReportData = useSelector((state) => state.revuerParticipantsReport);
    const campignNamesData = useSelector((state) => state.getcampaignName);
    var activePageCount = revuerParticipantsReportData?.recordsTotal != undefined ? Math.ceil(revuerParticipantsReportData?.recordsTotal / 10) : ''
    var pageStart = revuerParticipantsReportData && Number(revuerParticipantsReportData?.start)
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                setshowDateRange(false)
            }
        };
        document.addEventListener('click', handleClickOutside, true);
        dispatch(getBrandDetails({ brandlogin_unique_token: brandlogin_unique_token }))
        dispatch(getCampaignNames({ token: brandlogin_unique_token }))
        // activePagination(activePageState);
    }, [buttonHide])
    const { register, handleSubmit, reset } = useForm()
    const [showDateRangeVisible, setShowDateRangeVisible] = useState(false)
    const ref = useRef(null);
    const submitButton = useRef();
    const toastId = useRef(null);
    const [showDateRange, setshowDateRange] = useState(false)
    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 7),
            key: 'selection'
        }
    ]);
    const [activePageState, setActivePageState] = useState(0);
    const [formData, setFormData] = useState({});
    const onSubmit = (data, event) => {
        data.token = brandlogin_unique_token
        setFormData(data)
        data.pageValue = 0
        if (data.type != "") {
            dispatch(getRevuerParticipantsReport(data, submitButton, toastId))
        } else {
            if (!toast.isActive(toastId.current)) { toastId.current = toast.error("Please Select Campaign Type") }
        }
    }
    const activePagination = (activePageNumber) => {
        dispatch(getRevuerParticipantsReport({ ...formData, pageValue: activePageNumber }, submitButton, toastId))
    }
    const reviewPagination = (reviewPageNumber) => {
        dispatch(getRevuerParticipantsReport({ ...formData, pageValue: reviewPageNumber }, submitButton, toastId))
    }
    const currentActivePage = (pageActivevalue) => {
        setActivePageState(pageActivevalue)
        activePagination(pageActivevalue)
    }
    const nextActivePage = () => {
        const newActivePageValue = activePageState + 1
        if (activePageCount > newActivePageValue) {
            setActivePageState(newActivePageValue)
            activePagination(newActivePageValue)
        }
    }

    const prevActivePage = () => {
        const newActivePageValue = activePageState - 1
        if (newActivePageValue >= 0) {
            setActivePageState(newActivePageValue)
            reviewPagination(newActivePageValue)
        }
    }
    return (
        <>
            <section className="pl-0 md:pl-60 lg:pl-[15rem] lg:pt-0 md:pt-0 pt-14">
                {brandDataDetails.first_name ?
                    <>
                        <Header welcome="Welcome, " name={`${brandDataDetails.first_name}` + ` ${brandDataDetails.last_name} !`} />
                    </>
                    :
                    ''
                }
                <div className="px-5">
                    <div className="bg-white box-shadow-1 rounded-2xl px-7 pt-3 mb-5 px0">
                        <div className="flex justify-between mt-2 items-center mb-6">
                            <h6 className="text text-xl font-semibold pl-3">All My RevuERs</h6>
                            {revuerParticipantsReportData.recordsTotal != undefined &&
                                <h3 className="text-md sm:text-sm font-semibold px-5 rounded-lg py-2">Number of Records : <span>{revuerParticipantsReportData.recordsTotal}</span></h3>
                            }
                        </div>
                        <form onSubmit={handleSubmit((data, event) => onSubmit(data, event))} className="theme-form ng-untouched ng-pristine ng-valid" method="post">
                            <div className="block sm:flex items-center">
                                <div className="flex-initial w-full sub-width-2 sm:w-6/12 lg:w-3/12 md:w-6/12 mr-6">
                                    <label className="lable-color text-sm tracking-wide font-semibold">
                                        Select Campaign Name
                                    </label>
                                    <div className="block relative">
                                        <select id="campaign_token" name="campaign_token"
                                            {...register("campaign_token")}
                                            className="mt-2 form-select appearance-none block w-full px-3 h-12 text-sm font-normal lable-color bg-white bg-clip-padding bg-no-repeat rounded-lg border border-[#95A5A6] transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-black focus:outline-none" aria-label="Default select example">
                                            <option value="" selected>Select Campaign Name</option>
                                            {campignNamesData?.length > 0 &&
                                                campignNamesData?.map((item, index) => {
                                                    return (
                                                        <option value={item.campaign_token} key={index}>{item.campaign_name}</option>
                                                    )
                                                })}
                                        </select>
                                        <img
                                            src={selecticon}
                                            alt="selecticon"
                                            className="w-3 h-2.5 absolute top-[20px] right-2.5  block sm:mr-2 sm:m-none mx-auto"
                                        />
                                    </div>
                                </div>
                                <div className="flex justify-center sm:justify-end mt-7">
                                    <button ref={submitButton} className="bac-6 w-full sm:w-48 py-2.5 flex rounded-lg text-white  text-base font-bold justify-center items-center uppercase" ><i className="fa fa-spin fa-spinner mr-2" id="btn_spinner"></i>submit</button>
                                </div>
                            </div>
                        </form>
                        <div className="px-2">
                            {revuerParticipantsReportData.getCamData &&
                                <div className="flex-initial w-full lg:w-12/12 box-shadow-1 mb-5 lg:mb-6 rounded-xl mt-6">
                                    <div className="bg-white rounded-2xl pb-8">
                                        <div className="flex justify-between px-6">
                                            <h3 className="text-center py-4 text-xl font-semibold">Campaign Details</h3>
                                        </div>
                                        <div className="px-3 lg:px-6">
                                            <div className="md:block lg:flex block">
                                                <div className="flex-initial w-full md:full lg:w-12/12 bac-1 py-2 pr-4 mr-2 mb-0 md:mb-2 lg:mb-2">
                                                    <div className="md:block lg:flex block">
                                                        <div className="flex-initial w-full md:full lg:w-4/12 bac-1 py-1  pr-4 md:py-1 lg:py-0 mr-2 mb-0 md:mb-2 lg:mb-2">
                                                            <h3 className="color-3 text-xs font-normal mb-2">
                                                                Campaign Name
                                                            </h3>
                                                            <h5 className="text-xs font-medium text-sky-400/100">
                                                                <a href={'campaign-task-details/' + revuerParticipantsReportData?.getCamData.campaign_token} className="break-all" target="_blank">{revuerParticipantsReportData?.getCamData.campaign_name}</a>
                                                            </h5>
                                                        </div>
                                                        <div className="flex-initial w-full md:full lg:w-4/12 bac-1 py-5 pr-4 md:py-1 lg:py-0 mr-2 mb-0 md:mb-2 lg:mb-2">
                                                            <h3 className="color-3 text-xs font-normal mb-2">
                                                                Brand Name
                                                            </h3>
                                                            <h5 className="text-xs font-medium font-8">
                                                                {revuerParticipantsReportData?.getCamData.brand_name}
                                                            </h5>
                                                        </div>
                                                        <div className="flex-initial w-full md:full lg:w-4/12 bac-1 py-5 pr-4 md:py-1 lg:py-0 mr-2 mb-0 md:mb-2 lg:mb-2">
                                                            <h3 className="color-3 text-xs font-normal mb-2">
                                                                Campaign Type
                                                            </h3>
                                                            <h5 className="text-xs font-medium font-8">
                                                                {revuerParticipantsReportData?.getCamData.cam_type_name}
                                                            </h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="md:block lg:flex block">
                                                <div className="flex-initial w-full md:full lg:w-12/12 bac-1 py-2 pr-4 mr-2 mb-0 md:mb-2 lg:mb-2">
                                                    <div className="md:block lg:flex block">
                                                        <div className="flex-initial w-full md:full lg:w-4/12 bac-1 py-1  pr-4 md:py-1 lg:py-0 mr-2 mb-0 md:mb-2 lg:mb-2">
                                                            <h3 className="color-3 text-xs font-normal mb-2">
                                                                Campaign Date
                                                            </h3>
                                                            <h5 className="text-xs font-medium">
                                                                {revuerParticipantsReportData?.getCamData.createdAt}
                                                            </h5>
                                                        </div>
                                                        <div className="flex-initial w-full md:full lg:w-4/12 bac-1 py-5 pr-4 md:py-1 lg:py-0 mr-2 mb-0 md:mb-2 lg:mb-2">
                                                            <h3 className="color-3 text-xs font-normal mb-2">
                                                                Publish Date
                                                            </h3>
                                                            <h5 className="text-xs font-medium font-8">
                                                                {revuerParticipantsReportData?.getCamData.updatedAt}
                                                            </h5>
                                                        </div>
                                                        <div className="flex-initial w-full md:full lg:w-4/12 bac-1 py-5 pr-4 md:py-1 lg:py-0 mr-2 mb-0 md:mb-2 lg:mb-2">
                                                            <h3 className="color-3 text-xs font-normal mb-2">
                                                                Start Date - End Date
                                                            </h3>
                                                            <h5 className="text-xs font-medium font-8">
                                                                {revuerParticipantsReportData?.getCamData.start_date} - {revuerParticipantsReportData?.getCamData.last_date}
                                                            </h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="md:block lg:flex block">
                                                <div className="flex-initial w-full md:full lg:w-12/12 bac-1 py-2 pr-4 mr-2 mb-0 md:mb-2 lg:mb-2">
                                                    <div className="md:block lg:flex block">
                                                        <div className="flex-initial w-full md:full lg:w-4/12 bac-1 py-1  pr-4 md:py-1 lg:py-0 mr-2 mb-0 md:mb-2 lg:mb-2">
                                                            <h3 className="color-3 text-xs font-normal mb-2">
                                                                Revuer Limit
                                                            </h3>
                                                            <h5 className="text-xs font-medium">
                                                                {revuerParticipantsReportData?.getCamData.revuerLimit}
                                                            </h5>
                                                        </div>
                                                        <div className="flex-initial w-full md:full lg:w-4/12 bac-1 py-5 pr-4 md:py-1 lg:py-0 mr-2 mb-0 md:mb-2 lg:mb-2">
                                                            <h3 className="color-3 text-xs font-normal mb-2">
                                                                Applied Revuer
                                                            </h3>
                                                            <h5 className="text-xs font-medium font-8">
                                                                {revuerParticipantsReportData?.getCamData.appliedCampaign}
                                                            </h5>
                                                        </div>
                                                        <div className="flex-initial w-full md:full lg:w-4/12 bac-1 py-5 pr-4 md:py-1 lg:py-0 mr-2 mb-0 md:mb-2 lg:mb-2">
                                                            <h3 className="color-3 text-xs font-normal mb-2">
                                                                Approved Revuer
                                                            </h3>
                                                            <h5 className="text-xs font-medium font-8">
                                                                {revuerParticipantsReportData?.getCamData.approvedCampaign}
                                                            </h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="md:block lg:flex block">
                                                <div className="flex-initial w-full md:full lg:w-12/12 bac-1 py-2 pr-4 mr-2 mb-0 md:mb-2 lg:mb-2">
                                                    <div className="md:block lg:flex block">
                                                        <div className="flex-initial w-full md:full lg:w-4/12 bac-1 py-1  pr-4 md:py-1 lg:py-0 mr-2 mb-0 md:mb-2 lg:mb-2">
                                                            <h3 className="color-3 text-xs font-normal mb-2">
                                                                Completed Revuer
                                                            </h3>
                                                            <h5 className="text-xs font-medium">
                                                                {revuerParticipantsReportData?.getCamData.completedCampaign}
                                                            </h5>
                                                        </div>
                                                        <div className="flex-initial w-full md:full lg:w-4/12 bac-1 py-5 pr-4 md:py-1 lg:py-0 mr-2 mb-0 md:mb-2 lg:mb-2">
                                                            <h3 className="color-3 text-xs font-normal mb-2">
                                                                Ongoing Revuer
                                                            </h3>
                                                            <h5 className="text-xs font-medium font-8">
                                                                {revuerParticipantsReportData?.getCamData.ongoingCampaign}
                                                            </h5>
                                                        </div>
                                                        <div className="flex-initial w-full md:full lg:w-4/12 bac-1 py-5 pr-4 md:py-1 lg:py-0 mr-2 mb-0 md:mb-2 lg:mb-2">
                                                            <h3 className="color-3 text-xs font-normal mb-2">
                                                                Budget
                                                            </h3>
                                                            <h5 className="text-xs font-medium font-8">
                                                                {revuerParticipantsReportData?.getCamData.budget}
                                                            </h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <div className="md:block lg:flex block">
                                                <div className="flex-initial w-full md:full lg:w-12/12 bac-1 py-2 pr-4 mr-2 mb-0 md:mb-2 lg:mb-2">
                                                    <div className="md:block lg:flex block">
                                                        <div className="flex-initial w-full md:full lg:w-4/12 bac-1 py-1  pr-4 md:py-1 lg:py-0 mr-2 mb-0 md:mb-2 lg:mb-2">
                                                            <h3 className="color-3 text-xs font-normal mb-2">
                                                                Earn Upto
                                                            </h3>
                                                            <h5 className="text-xs font-medium">
                                                                {revuerParticipantsReportData?.getCamData.earn_upto}
                                                            </h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            }
                            <div id="tab-contents">
                                <div id="first" className="pt-6 text-xs text-justify">
                                    <div className="overflow-auto mb-5">
                                        <table className="table-auto w-full">
                                            <thead>
                                                <tr className="bg-[#eee] mb-3 h-14">
                                                    <th className="lable-color font-normal lg:font-semibold md:font-normal rounded-l-lg text-xs px-5 md:px-5 lg:pl-4 py-2">
                                                        Sr. No.
                                                    </th>
                                                    <th className="lable-color font-normal lg:font-semibold md:font-normal  text-xs px-5 md:px-5 lg:pl-3 py-2">
                                                        Revuer Name
                                                    </th>
                                                    <th className="lable-color text-center font-normal lg:font-semibold md:font-normal  text-xs md:px-5 px-5 sm:pl-3 py-2">
                                                        Applied Date
                                                    </th>

                                                    <th className="lable-color text-center font-normal lg:font-semibold md:font-normal text-xs md:px-5 px-5 sm:pl-3 py-2">
                                                        Approve Date
                                                    </th>
                                                    <th className="lable-color text-center font-normal lg:font-semibold md:font-normal text-xs md:px-5 px-5 sm:pl-3 py-2">
                                                        Completion Date
                                                    </th>
                                                    <th className="lable-color text-center font-normal lg:font-semibold md:font-normal text-xs md:px-5 px-5 sm:pl-3 py-2">
                                                        Task Status
                                                    </th>
                                                    <th className="lable-color font-normal lg:font-semibold text-center md:font-normal text-xs md:px-5 px-5 sm:pl-3 py-2">
                                                        Status
                                                    </th>
                                                </tr>
                                                <tr className="h-4"></tr>
                                                {
                                                    revuerParticipantsReportData.data ?
                                                        revuerParticipantsReportData.data == null || revuerParticipantsReportData.data.length > 0 ?
                                                            revuerParticipantsReportData.data.map((item, index) => {
                                                                var createdAt = Moment(item.createdAt, 'DD-MM-YYYY').format('DD/MM/YYYY')
                                                                var updatedAt = Moment(item.updateAt, 'DD-MM-YYYY').format('DD/MM/YYYY')
                                                                var complete_date = Moment(item.complete_date, 'DD-MM-YYYY').format('DD/MM/YYYY')
                                                                return (
                                                                    <>

                                                                        <tr className="border-b mb-3">
                                                                            <td className="lable-color font-normal text-xs px-5 md:px-5 lg:pl-4 py-2">
                                                                                {pageStart + index + 1}
                                                                            </td>
                                                                            <td className="lable-color flex items-center font-normal text-xs px-5 md:px-5 lg:pl-4 py-2">
                                                                                {item.first_name + ' ' + item.last_name}
                                                                            </td>

                                                                            <td className="lable-color font-normal text-center text-xs px-5 md:px-5 lg:pl-4 py-2">
                                                                                {createdAt}
                                                                            </td>

                                                                            <td className="lable-color font-normal text-center text-xs px-5 md:px-5 py-2">
                                                                                {updatedAt}
                                                                            </td>
                                                                            <td className="lable-color font-normal text-xs px-5 md:px-5 text-center lg:pl-4 py-2">
                                                                                {complete_date == "Invalid date" ? '--' : complete_date}
                                                                            </td>
                                                                            <td className="lable-color font-normal text-xs px-5 md:px-5 text-center lg:pl-4 py-2">
                                                                                {item.task_status}
                                                                            </td>
                                                                            <td className="trased-edit lable-color mt-4 lg:mt-0 font-normal text-xs px-5 md:px-5 lg:pl-0 py-2 flex items-center text-center justify-center" dangerouslySetInnerHTML={{ __html: item.campaign_status }}>
                                                                                {/* {
                                                                                    item.campaign_status == 0 && <spna>Review</spna>
                                                                                }
                                                                                {
                                                                                    item.campaign_status == 2 && <spna>Approved</spna>
                                                                                }
                                                                                {
                                                                                    item.campaign_status == 3 && <spna>Declined</spna>
                                                                                }
                                                                                {
                                                                                    item.campaign_status == 4 && <spna>Completed</spna>
                                                                                }
                                                                                {
                                                                                    item.campaign_status == 6 && <spna>Waiting for Brand</spna>
                                                                                } */}
                                                                            </td>
                                                                        </tr>
                                                                        <tr className="h-4"></tr>
                                                                    </>
                                                                )
                                                            })
                                                            :
                                                            <>
                                                                <tr className="border-b mb-3">
                                                                    <td colSpan="9" className="lable-color text-center font-normal text-xs px-5 md:px-5 lg:pl-4 py-2">
                                                                        No Review Campaign Found
                                                                    </td>
                                                                </tr>
                                                                <tr className="h-4"> </tr>
                                                            </>
                                                        :
                                                        <>
                                                            <tr className="border-b mb-3">
                                                                <td colSpan="9" className="lable-color text-center font-normal text-xs px-5 md:px-5 lg:pl-4 py-2">
                                                                    No Review Campaign Found
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
                                                <a href="javascript:void(0)" onClick={() => prevActivePage()}><i className="fa fa-angle-left" aria-hidden="true"></i> </a>
                                            </li>

                                            {
                                                revuerParticipantsReportData.data && Array(activePageCount).fill(activePageCount).map((item, index) => (
                                                    <li className={`${(Number(revuerParticipantsReportData.start) / 10 + 1 == index + 1) ? "bac-6 text-white text-sm font-semibold rounded px-[1rem] py-2 mr-3" : "border border-[#95A5A6] text-sm font-semibold color-3 px-3 rounded py-2 mr-3"}`}>
                                                        <a href="javascript:void(0)" onClick={() => currentActivePage(index)}>{index + 1}</a>
                                                    </li>
                                                ))
                                            }
                                            <li className="border rounded text-sm font-medium border-black px-3 py-2 mr-3">
                                                <a href="javascript:void(0)" onClick={() => nextActivePage()} ><i className="fa fa-angle-right" aria-hidden="true"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <Sidebar title="Analysis" subtitle="Participants" />
        </>
    );
}
export default Dassbord;
