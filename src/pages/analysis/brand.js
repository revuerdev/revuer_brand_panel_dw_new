import editimg from "../../assets/images/edit-2.svg"
import deletimg from "../../assets/images/trash.svg"
import viewlink from "../../assets/images/view-link.png"
import { Header, Sidebar } from "../../layouts";
import { useEffect, useRef, useState } from "react";
import Moment from 'moment';
import { useDispatch, useSelector } from 'react-redux'
import { getBrandDetails } from "../../context/actions/brand"
import { getBrandAnalysisReport } from "../../context/actions/analysis"
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
    const [modal, setModal] = useState({ status_title: "Delete Campaign" })
    const [buttonHide, setButtonHide] = useState()
    var brandlogin_unique_token = localStorage.getItem("brandlogin_unique_token");
    const brandDataDetails = useSelector((state) => state.brandDetails);
    const campaignListData = useSelector((state) => state.listCampaignData);
    const analysisBrandRportData = useSelector((state) => state.analysisBrandRport);
    var activePageCount = analysisBrandRportData ? Math.ceil(analysisBrandRportData.campaignCount / 10) : ''
    var pageStart = analysisBrandRportData && Number(analysisBrandRportData.start)
    var reviewCampaignList = campaignListData.ReviewCampaignList
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                setshowDateRange(false)
            }
        };
        document.addEventListener('click', handleClickOutside, true);
        dispatch(getBrandDetails({ brandlogin_unique_token: brandlogin_unique_token }))
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
        console.log("data", data)
        data.dates = state[0].startDate.toString() + " to " + state[0].endDate.toString()
        data.token = brandlogin_unique_token
        setFormData(data)
        data.pageValue = 0
        if (data.type != "") {
            dispatch(getBrandAnalysisReport(data, submitButton, toastId))
        } else {
            if (!toast.isActive(toastId.current)) { toastId.current = toast.error("Please Select Duration") }
        }
    }
    const activePagination = (activePageNumber) => {
        dispatch(getBrandAnalysisReport({ ...formData, pageValue: activePageNumber }, submitButton, toastId))
    }
    const reviewPagination = (reviewPageNumber) => {
        dispatch(getBrandAnalysisReport({ ...formData, pageValue: reviewPageNumber }, submitButton, toastId))
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
                            <h6 className="text text-xl font-semibold pl-3">All My Campigns</h6>
                            {analysisBrandRportData.allCampaignData &&
                                <h3 className="text-md sm:text-sm font-semibold px-5 rounded-lg py-2">Number of Records : <span>{analysisBrandRportData.campaignCount}</span></h3>
                            }
                        </div>
                        <form onSubmit={handleSubmit((data, event) => onSubmit(data, event))} className="theme-form ng-untouched ng-pristine ng-valid" method="post">
                            <div className="block sm:flex items-center">
                                <div className="flex-initial w-full sub-width-2 sm:w-6/12 lg:w-3/12 md:w-6/12 mr-6">
                                    <label className="lable-color text-sm tracking-wide font-semibold">
                                        Select Durations
                                    </label>
                                    <div className="block relative">
                                        <select id="campType" name="campType"
                                            {...register("type", {
                                                onChange: (e) => {
                                                    e.target.value == 1 ? setShowDateRangeVisible(true) : setShowDateRangeVisible(false)
                                                }
                                            })}
                                            className="mt-2 form-select appearance-none block w-full px-3 h-12 text-sm font-normal lable-color bg-white bg-clip-padding bg-no-repeat rounded-lg border border-[#95A5A6] transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-black focus:outline-none" aria-label="Default select example">
                                            <option value="" selected>Select Duration</option>
                                            <option value="1">Date Range</option>
                                            <option value="5">Current Month</option>
                                            <option value="2">Last 30 Days </option>
                                            <option value="3">Last Month</option>
                                            <option value="4">Last Quarter</option>
                                        </select>
                                        <img
                                            src={selecticon}
                                            alt="selecticon"
                                            className="w-3 h-2.5 absolute top-[20px] right-2.5  block sm:mr-2 sm:m-none mx-auto"
                                        />
                                    </div>
                                </div>
                                {showDateRangeVisible &&
                                    <div className="flex-initial sub-width-2 w-full sm:w-6/12 lg:w-3/12 md:w-6/12 mr-6" ref={ref}>
                                        <label className="lable-color text-sm tracking-wide font-semibold">
                                            Date Range
                                        </label>
                                        <div className="block relative">
                                            <input
                                                type="text"
                                                id="dates"
                                                name="dates"
                                                {...register("dates")}
                                                value={changeDateFormate(state[0].startDate) + " to " + changeDateFormate(state[0].endDate)}
                                                onClick={() => setshowDateRange(!showDateRange)}
                                                placeholder="dd/mm/yyyy  to  dd/mm/yyyy "
                                                required=""
                                                className="box-shadow-3 h-12 px-2 rounded-lg border border-[#95A5A6] bg-white w-full mt-2 mb-1 lable-color font-medium text-sm pr-10 focus:outline-none"
                                            />
                                            {showDateRange &&
                                                <DateRange
                                                    editableDateInputs={true}
                                                    onChange={item => setState([item.selection])}
                                                    moveRangeOnFirstSelection={false}
                                                    ranges={state}
                                                    showDateDisplay={false}
                                                    className="box-shadow-1 rounded-xl z-10 absolute top-16 left-0"
                                                    rangeColors={"#000"}
                                                />
                                            }
                                            <div className="absolute top-[1.4rem] right-4">
                                                <img
                                                    src={celendericon}
                                                    alt="celendericon"
                                                    className="w-5"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                }
                                <div className="flex justify-center sm:justify-end mt-7">
                                    <button ref={submitButton} className="bac-6 w-full sm:w-48 py-2.5 flex rounded-lg text-white  text-base font-bold justify-center items-center uppercase" ><i className="fa fa-spin fa-spinner mr-2" id="btn_spinner"></i>submit</button>
                                </div>
                            </div>
                        </form>
                        <div className="px-2">

                            <div id="tab-contents">
                                <div id="first" className="pt-6 text-xs text-justify">
                                    <div className="overflow-auto mb-5">
                                        <table className="table-auto w-full">
                                            <thead>
                                                <tr className="bg-[#eee] mb-3 h-14">
                                                    <th className="lable-color font-normal lg:font-semibold md:font-normal rounded-l-lg text-xs px-5 md:px-5 lg:pl-4 py-2">
                                                        Sr. No.
                                                    </th>
                                                    <th className="lable-color font-normal lg:font-semibold md:font-normal rounded-l-lg text-xs px-5 md:px-5 lg:pl-4 py-2">
                                                        Campaign Name
                                                    </th>

                                                    <th className="lable-color font-normal lg:font-semibold md:font-normal text-xs md:pr-5 pr-5 md:pl-3 lg:pl-4 py-2">
                                                        Campaign Type
                                                    </th>

                                                    <th className="lable-color font-normal lg:font-semibold md:font-normal text-xs md:pr-5 pr-5 md:pl-3 lg:pl-4 py-2">
                                                        Participants
                                                    </th>

                                                    <th className="lable-color text-center font-normal lg:font-semibold md:font-normal  text-xs md:px-5 px-5 sm:pl-3 py-2">
                                                        Creation Date
                                                    </th>

                                                    <th className="lable-color text-center font-normal lg:font-semibold md:font-normal text-xs md:px-5 px-5 sm:pl-3 py-2">
                                                        Publish Date
                                                    </th>
                                                    <th className="lable-color text-center font-normal lg:font-semibold md:font-normal text-xs md:px-5 px-5 sm:pl-3 py-2">
                                                        Start Date
                                                    </th>
                                                    <th className="lable-color text-center font-normal lg:font-semibold md:font-normal text-xs md:px-5 px-5 sm:pl-3 py-2">
                                                        End Date
                                                    </th>

                                                    <th className="lable-color font-normal lg:font-semibold md:font-normal text-xs md:px-5 px-5 sm:pl-3 py-2">
                                                        Status
                                                    </th>
                                                </tr>
                                                <tr className="h-4"></tr>
                                                {
                                                    analysisBrandRportData.allCampaignData ?
                                                        analysisBrandRportData.allCampaignData == null || analysisBrandRportData.allCampaignData.length > 0 ?
                                                            analysisBrandRportData.allCampaignData.map((item, index) => {
                                                                var start_date = Moment(item.start_date, 'DD-MM-YYYY').format('DD/MM/YYYY')
                                                                var last_date = Moment(item.last_date, 'DD-MM-YYYY').format('DD/MM/YYYY')
                                                                var createdAt = Moment(item.createdAt, 'DD-MM-YYYY').format('DD/MM/YYYY')
                                                                var updatedAt = Moment(item.updatedAt, 'DD-MM-YYYY').format('DD/MM/YYYY')
                                                                return (
                                                                    <>

                                                                        <tr className="border-b mb-3">
                                                                            <td className="lable-color font-normal text-xs px-5 md:px-5 lg:pl-4 py-2">
                                                                                {pageStart + index + 1}
                                                                            </td>
                                                                            <td className="lable-color flex items-center font-normal text-xs px-5 md:px-5 lg:pl-4 py-2 text-sky-400/100">
                                                                                <a href={'campaign-task-details/' + item.campaign_token} className="mr-3"> {item.campaign_name}</a>
                                                                            </td>

                                                                            <td className="lable-color font-normal text-xs px-5 md:px-5 lg:pl-4 py-2">
                                                                                {item.campaign_type_name}
                                                                            </td>

                                                                            <td className="lable-color font-normal text-center text-xs px-5 md:px-5 py-2">
                                                                                {item.joinRevuer} / {item.revuer_limit_count}
                                                                            </td>
                                                                            <td className="lable-color font-normal text-xs px-5 md:px-5 lg:pl-4 py-2">
                                                                                {createdAt}
                                                                            </td>
                                                                            <td className="lable-color font-normal text-xs px-5 md:px-5 lg:pl-4 py-2">
                                                                                {updatedAt}
                                                                            </td>
                                                                            <td className="lable-color font-normal text-xs px-5 md:px-5 lg:pl-4 py-2">
                                                                                {start_date}
                                                                            </td>

                                                                            <td className="lable-color font-normal text-xs px-5 md:px-5 lg:pl-4 py-2">
                                                                                {last_date}
                                                                            </td>
                                                                            <td className="trased-edit lable-color mt-4 lg:mt-0 font-normal text-xs px-5 md:px-5 lg:pl-0 py-2 flex items-center justify-center" dangerouslySetInnerHTML={{ __html: item.campaign_status }}>
                                                                                {/* {
                                                                                    item.campaign_main_status == 0 && <spna>Review</spna>
                                                                                }
                                                                                {
                                                                                    item.campaign_main_status == 1 && <spna>Active</spna>
                                                                                }
                                                                                {
                                                                                    item.campaign_main_status == 2 && <spna>Completed</spna>
                                                                                }
                                                                                {
                                                                                    item.campaign_main_status == 3 && <spna>Declined</spna>
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
                                                analysisBrandRportData.allCampaignData && Array(activePageCount).fill(activePageCount).map((item, index) => (
                                                    <li className={`${(Number(analysisBrandRportData.start) / 10 + 1 == index + 1) ? "bac-6 text-white text-sm font-semibold rounded px-[1rem] py-2 mr-3" : "border border-[#95A5A6] text-sm font-semibold color-3 px-3 rounded py-2 mr-3"}`}>
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


            <Sidebar title="Analysis" subtitle="Brand" />
        </>
    );
}
export default Dassbord;
