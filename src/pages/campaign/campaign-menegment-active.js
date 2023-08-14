import { Header, Sidebar } from "../../layouts";
import editimg from "../../assets/images/edit-2.svg"
import deletimg from "../../assets/images/trash.svg"
import { useEffect, useState } from "react";
import { switchMainTabs } from "../../services/switch-tab"
import viewlink from "../../assets/images/view-task.png"
import block from "../../assets/images/block.png"
import unblock from "../../assets/images/unblock.png"
import { useDispatch, useSelector } from 'react-redux'
import Moment from 'moment';
import { getCampaignReviewListData } from "../../context/actions/campaign"
import { getCampaignActiveListData } from "../../context/actions/campaign"
import { getCampaignCompletedListData } from "../../context/actions/campaign"
import { getCampaignDeclinedListData } from "../../context/actions/campaign"
import { render } from "react-dom";

import { toggleModal11 } from "../../services/edit-modal"
import { CampaignDeleteModal } from "../../components/Modal";

import { brandCampaignDelete } from "../../context/actions/campaign"
import { brandCampaignStatusChange } from "../../context/actions/campaign"

function CampaignMenegmentActive() {


  const dispatch = useDispatch();
  const [modal, setModal] = useState({ status_title: "Delete Campaign" })
  const [buttonHide, setButtonHide] = useState()


  var brandlogin_unique_token = localStorage.getItem("brandlogin_unique_token");

  const [reviewPageState, setReviewPageState] = useState(0);
  const [activePageState, setActivePageState] = useState(0);
  const [completedPageState, setCompletedPageState] = useState(0);
  const [declinedPageState, setDeclinedPageState] = useState(0);

  const campaignReviewListData = useSelector((state) => state.allReviewCampaignListData);
  var reviewCampaignList = campaignReviewListData.campaignReviewList
  var reviewPageCount = campaignReviewListData ? Math.ceil(campaignReviewListData.campaignReviewCount / 10) : ''
  const [reviewPageCountNumber, setReviewPageCount] = useState(reviewPageCount)

  const campaignActiveListData = useSelector((state) => state.allActiveCampaignListData);

  var activeCampaignList = campaignActiveListData.campaignActiveList
  var activePageCount = campaignActiveListData ? Math.ceil(campaignActiveListData.campaignActiveCount / 10) : ''
  const [activePageCountNumber, setActivePageCount] = useState(activePageCount)

  const campaignCompletedListData = useSelector((state) => state.allCompletedCampaignListData);
  var completedCampaignList = campaignCompletedListData.campaignCompletedList
  var completedPageCount = campaignCompletedListData ? Math.ceil(campaignCompletedListData.campaignCompletedCount / 10) : ''
  const [completedPageCountNumber, setCompletedPageCount] = useState(completedPageCount)

  const campaignDeclinedListData = useSelector((state) => state.allDeclinedCampaignListData);
  var declinedCampaignList = campaignDeclinedListData.campaignDeclinedList
  var declinedPageCount = campaignDeclinedListData ? Math.ceil(campaignDeclinedListData.campaignDeclinedCount / 10) : ''
  const [declinedPageCountNumber, setDeclinedPageCount] = useState(declinedPageCount)

  useEffect(() => {
    switchMainTabs()
    reviewPagination(reviewPageState);
    activePagination(activePageState);
    completedPagination(completedPageState);
    declinedPagination(declinedPageState);
  }, [buttonHide])

  const campaignDelete = () => {
    var campaign_token = modal.campaign_token
    var action_type = modal.action_type
    if (action_type == 1) {
      dispatch(brandCampaignDelete({ campaign_token: campaign_token, setButtonHide }))
    } else {
      var campaign_post_status = modal.campaign_post_status
      dispatch(brandCampaignStatusChange({ campaign_token: campaign_token, campaign_post_status: campaign_post_status, setButtonHide }))
    }
    toggleModal11()
  }

  const reviewPagination = (reviewPageNumber) => {
    dispatch(getCampaignReviewListData({ brandlogin_unique_token: brandlogin_unique_token, pageValue: reviewPageNumber }))
  }

  const currentReviewPage = (pageReviewvalue) => {
    setReviewPageState(pageReviewvalue)
    reviewPagination(pageReviewvalue)
  }

  const nextReviewPage = () => {
    const newReviewPageValue = reviewPageState + 1
    if (reviewPageCount > newReviewPageValue) {
      setReviewPageState(newReviewPageValue)
      reviewPagination(newReviewPageValue)
    }
  }

  const prevReviewPage = () => {
    const newReviewPageValue = reviewPageState
    if (newReviewPageValue >= 1) {
      setReviewPageState(newReviewPageValue - 1)
      reviewPagination(newReviewPageValue)
    }
  }

  const activePagination = (activePageNumber) => {
    dispatch(getCampaignActiveListData({ brandlogin_unique_token: brandlogin_unique_token, pageValue: activePageNumber }))
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


  const completedPagination = (completedPageNumber) => {
    dispatch(getCampaignCompletedListData({ brandlogin_unique_token: brandlogin_unique_token, pageValue: completedPageNumber }))
  }

  const currentCompletedPage = (pageCompletedvalue) => {
    setCompletedPageState(pageCompletedvalue)
    completedPagination(pageCompletedvalue)
  }

  const nextCompletedPage = () => {
    const newCompletedPageValue = completedPageState + 1
    if (completedPageCount > newCompletedPageValue) {
      setCompletedPageState(newCompletedPageValue)
      completedPagination(newCompletedPageValue)
    }
  }

  const prevCompletedPage = () => {
    const newCompletedPageValue = completedPageState - 1
    if (newCompletedPageValue >= 1) {
      setCompletedPageState(newCompletedPageValue)
      completedPagination(newCompletedPageValue)
    }
  }

  const declinedPagination = (declinedPageNumber) => {
    dispatch(getCampaignDeclinedListData({ brandlogin_unique_token: brandlogin_unique_token, pageValue: declinedPageNumber }))
  }

  const currentDeclinedPage = (pageDeclinedvalue) => {
    setDeclinedPageState(pageDeclinedvalue)
    declinedPagination(pageDeclinedvalue)
  }

  const nextDeclinedPage = () => {
    const newDeclinedPageValue = declinedPageState + 1
    if (declinedPageCount > newDeclinedPageValue) {
      setDeclinedPageState(newDeclinedPageValue)
      declinedPagination(newDeclinedPageValue)
    }
  }

  const prevDeclinedPage = () => {
    const newDeclinedPageValue = declinedPageState - 1
    if (newDeclinedPageValue >= 1) {
      setDeclinedPageState(newDeclinedPageValue)
      declinedPagination(newDeclinedPageValue)
    }
  }

  return (
    <>
      <section className="pl-0 md:pl-60 lg:pl-[15rem] lg:pt-0 md:pt-0 pt-20 ">
        <Header welcome="Campaign" />
        <div className="px-5">
          <div className="bg-white box-shadow-1 rounded-2xl px-8 pt-3 mb-5">
            <div className="flex justify-between mt-5 items-center">
              <h6 className="text text-xl font-semibold">Campaigns Listing</h6>

            </div>
            <ul id="tabs" className="inline-flex pt-2 px-1 w-full overflow-auto overflow-auto lg:overflow-hidden">
              <li className="bg-white text-sm lg:text-base  lg:px-1 mr-10 text-gray-800 font-semibold py-2 rounded-t border-b-2 -mb-px border-b-[#FCB43C]">
                <a id="default-tab" href="#first">
                  Review
                </a>
              </li>
              <li className=" lg:px-1 text-sm lg:text-base mr-10 py-2 rounded-t">
                <a href="#second">Active</a>
              </li>
              <li className=" lg:px-1 text-sm lg:text-base mr-10 py-2 rounded-t">
                <a href="#third">Completed</a>
              </li>
              <li className=" lg:px-1 text-sm lg:text-base py-2 rounded-t">
                <a href="#fourth">Declined</a>
              </li>
            </ul>

            <div id="tab-contents">
              <div id="first" className="pt-6 text-xs sm:text-sm text-justify">
                <div className="overflow-auto mb-5">
                  <table className="table-auto w-full whitespace-nowrap">
                    <thead>
                      <tr className="bg-[#EBF0F2] mb-3 h-14">
                        <th className="lable-color font-medium lg:font-semibold md:font-medium text-xs sm:text-sm md:px-5 px-5 sm:pl-0 py-2 rounded-l-lg">Sr. No.</th>
                        <th className="lable-color font-medium lg:font-semibold md:font-medium text-xs sm:text-sm px-5 md:px-5 lg:pl-4 py-2">Campaign Name</th>

                        <th className="lable-color font-medium lg:font-semibold md:font-medium text-xs sm:text-sm md:px-5 px-5 sm:pl-0 py-2">Campign Type</th>
                        <th className="lable-color font-medium lg:font-semibold md:font-medium text-xs sm:text-sm md:px-5 px-5 sm:pl-0 py-2">Start Date</th>

                        <th className="lable-color font-medium lg:font-semibold md:font-medium text-xs sm:text-sm md:px-5 px-5 sm:pl-0 py-2">Due Date</th>

                        <th className="lable-color font-medium lg:font-semibold md:font-medium text-xs sm:text-sm md:px-5 px-5 sm:pl-0 py-2">Participants</th>

                        {/* <th className="lable-color font-medium lg:font-semibold md:font-medium text-xs sm:text-sm md:px-5 px-5 sm:pl-0 py-2">Needing Action</th> */}

                        <th className="lable-color font-medium lg:font-semibold md:font-medium text-xs sm:text-sm md:px-5 px-5 sm:pl-0 py-2">Action</th>

                        {/* <th className="lable-color font-medium lg:font-semibold md:font-medium rounded-r-lg text-xs sm:text-sm px-5 md:px-5 sm:pl-0 py-2">Action</th> */}
                      </tr>
                      <tr className="h-4"></tr>

                      {
                        reviewCampaignList ?
                          reviewCampaignList.length > 0 ?
                            reviewCampaignList.map((item, index) => {
                              var start_date = Moment(item.start_date, 'DD-MM-YYYY').format('DD MMMM YYYY')
                              var last_date = Moment(item.last_date, 'DD-MM-YYYY').format('DD MMMM YYYY')
                              return (
                                <>

                                  <tr className="border-b mb-3">
                                    <td className="lable-color font-normal text-xs sm:text-base  px-5 md:px-5 lg:pl-4 py-4">
                                      {Number(campaignReviewListData.start) + index + 1}
                                    </td>
                                    <td style={{ whiteSpace: "word-break" }} className="lable-color flex text-left items-center font-normal text-xs sm:text-base  px-5 md:px-5 lg:pl-4 py-4">
                                      {/* <a href={'campaign-menegment-active-request/' + item.campaign_token}> {item.campaign_name}</a> */}
                                      <a href={'campaign-task-details/' + item.campaign_token} className="mr-3"> {item.campaign_name}</a>
                                      <div className="w-10">
                                        <a href={'campaign-task-details/' + item.campaign_token}> <img src={viewlink} alt="viewlink" className="w-4" /></a>
                                      </div>
                                    </td>

                                    <td className="lable-color font-normal text-xs sm:text-base  px-5 md:px-5 lg:pl-4 py-4">
                                      {item.campaign_type_name}
                                    </td>
                                    <td className="lable-color font-normal text-xs sm:text-base  px-5 md:px-5 lg:pl-4 py-4">
                                      {start_date}
                                    </td>

                                    <td className="lable-color font-normal text-xs sm:text-base  px-5 md:px-5 lg:pl-4 py-4">
                                      {last_date}
                                    </td>

                                    <td className="lable-color font-normal text-center text-xs sm:text-base  px-5 md:px-5 py-4">
                                      {item.joinRevuer} / {item.revuer_limit_count}
                                    </td>

                                   {/*  <td className="lable-color font-normal text-xs text-center sm:text-base  px-5 md:px-5 py-4">
                                      0
                                    </td> */}

                                    <td className="trased-edit lable-color mt-4 lg:mt-0 font-normal text-xs sm:text-base  px-5 md:px-5 lg:pl-0 py-4 flex items-center justify-center">
                                      <a href={'campaign-details-page/' + item.campaign_token}>
                                        <img src={editimg} alt="editimg" className="mr-5 w-4" />{" "}
                                      </a>
                                      <a href="javascript:void(0)">
                                        <img src={deletimg} alt="deletimg" className="w-[15px] mr-5" onClick={() => { toggleModal11(); setModal({ status_title: 'Delete Campaign', message: "Are you sure you want to delete campaign.", campaign_token: item.campaign_token, action_type: 1 }) }} />
                                      </a>

                                      {
                                        item.campaign_post_status == 1 ?
                                          <>
                                            <a href="javascript:void(0)">
                                              <img src={unblock} alt="Inactive" className="w-[15px] mr-5" onClick={() => { toggleModal11(); setModal({ status_title: 'Inactive Campaign', message: "Are you sure you want to inactive campaign.", campaign_token: item.campaign_token, campaign_post_status: 0, action_type: 2 }) }} />
                                            </a>
                                          </>
                                          :
                                          <>
                                            <a href="javascript:void(0)">
                                              <img src={block} alt="Active" className="w-[15px] mr-5" onClick={() => { toggleModal11(); setModal({ status_title: 'Inactive Campaign', message: "Are you sure you want to active campaign.", campaign_token: item.campaign_token, campaign_post_status: 1, action_type: 2 }) }} />
                                            </a>
                                          </>
                                      }

                                    </td>
                                  </tr>
                                  <tr className="h-4"></tr>
                                </>
                              )
                            })
                            :
                            <>
                              <tr className="border-b mb-3">
                                <td colSpan="7" className="text-center lable-color font-normal text-xs sm:text-base  px-5 md:px-5 lg:pl-4 py-4">
                                  No Review Campaign Found
                                </td>
                              </tr>
                              <tr className="h-4"> </tr>
                            </>
                          :
                          <>
                            <tr className="border-b mb-3">
                              <td colSpan="7" className="text-center lable-color font-normal text-xs sm:text-base  px-5 md:px-5 lg:pl-4 py-4">
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
                      <a href="javascript:void(0)" onClick={() => prevReviewPage()}><i className="fa fa-angle-left" aria-hidden="true"></i> </a>
                    </li>

                    {/* {
                      reviewCampaignList && Array(reviewPageCount).fill(reviewPageCount).map((item, index) => (
                        <li className={`${index === reviewPageState ? "bac-6 text-white text-sm font-semibold rounded px-[1rem] py-2 mr-3" : "border border-[#95A5A6] text-sm font-semibold color-3 px-3 rounded py-2 mr-3"}`}>
                          <a href="javascript:void(0)" onClick={() => currentReviewPage(index)}>{index + 1}</a>
                        </li>
                      ))
                    } */}
                    {
                      reviewCampaignList && Array(reviewPageCount).fill(reviewPageCount).map((item, index) => (
                        <li className={`${(Number(campaignReviewListData.start) / 10 + 1 == index + 1) ? "bac-6 text-white text-sm font-semibold rounded px-[1rem] py-2 mr-3" : "border border-[#95A5A6] text-sm font-semibold color-3 px-3 rounded py-2 mr-3"}`}>
                          <a href="javascript:void(0)" onClick={() => currentActivePage(index)}>{index + 1}</a>
                        </li>
                      ))
                    }
                    <li className="border rounded text-sm font-medium border-black px-3 py-2 mr-3">
                      <a href="javascript:void(0)" onClick={() => nextReviewPage()} ><i className="fa fa-angle-right" aria-hidden="true"></i></a>
                    </li>
                  </ul>
                </div>
              </div>

              <div id="second" className="hidden pt-6 text-xs sm:text-sm text-justify">
                <div className="overflow-auto mb-5">
                  <table className="table-auto w-full whitespace-nowrap">
                    <thead>
                      <tr className="bg-[#EBF0F2] mb-3 h-14">
                        <th className="lable-color font-medium lg:font-semibold md:font-medium text-xs sm:text-sm md:px-5 px-5 sm:pl-0 py-2 rounded-l-lg">Sr.No</th>

                        <th className="lable-color font-medium lg:font-semibold md:font-medium text-xs sm:text-sm px-5 md:px-5 lg:pl-4 py-2">Campaign Name</th>

                        <th className="lable-color font-medium lg:font-semibold md:font-medium text-xs sm:text-sm md:px-5 px-5 sm:pl-0 py-2">Campaign Type</th>
                        <th className="lable-color font-medium lg:font-semibold md:font-medium text-xs sm:text-sm md:px-5 px-5 sm:pl-0 py-2">Start Date</th>

                        <th className="lable-color font-medium lg:font-semibold md:font-medium text-xs sm:text-sm md:px-5 px-5 sm:pl-0 py-2">Due Date</th>

                        <th className="lable-color font-medium lg:font-semibold md:font-medium text-xs sm:text-sm md:px-5 px-5 sm:pl-0 py-2">Participants</th>

                        <th className="lable-color font-medium lg:font-semibold md:font-medium text-xs sm:text-sm md:px-5 px-5 sm:pl-0 py-2">Completed</th>

                        <th className="lable-color font-medium lg:font-semibold md:font-medium text-xs sm:text-sm md:px-5 px-5 sm:pl-0 py-2">Action</th>
                        {/* 
                        <th className="lable-color font-medium lg:font-semibold md:font-medium rounded-r-lg text-xs sm:text-sm px-5 md:px-5 sm:pl-0 py-2">Action</th> */}
                      </tr>
                      <tr className="h-4"></tr>
                      {
                        activeCampaignList ?
                          activeCampaignList.length > 0 ?
                            activeCampaignList.map((item, index) => {
                              var start_date = Moment(item.start_date, 'DD-MM-YYYY').format('DD MMMM YYYY')
                              var last_date = Moment(item.last_date, 'DD-MM-YYYY').format('DD MMMM YYYY')
                              return (
                                <>

                                  <tr className="border-b mb-3">
                                    <td className="lable-color font-normal text-xs sm:text-base  px-5 md:px-5 lg:pl-4 py-4">
                                      {Number(campaignActiveListData?.start) + index + 1}
                                    </td>

                                    <td style={{ whiteSpace: "word-break" }} className="lable-color flex text-left items-center font-normal text-xs sm:text-base  px-5 md:px-5 lg:pl-4 py-4">
                                      {/* <a href={'campaign-menegment-active-request/' + item.campaign_token}> {item.campaign_name}</a> */}

                                      {
                                        item.campaign_type == 7 || item.campaign_type == 2 || item.campaign_type == 3
                                          ?
                                          <>
                                            <a href={'campaign-task-details/' + item.campaign_token} className="mr-3"> {item.campaign_name}</a>
                                            <div className="w-10">
                                              <a href={'campaign-menegment-active-request/' + item.campaign_token}> <img src={viewlink} alt="viewlink" className="w-4" /></a>
                                            </div>
                                          </>
                                          :
                                          <>
                                            <a href={'campaign-task-details/' + item.campaign_token} className="mr-3"> {item.campaign_name}</a>
                                            <div className="w-10">
                                              {/* <a href={'campaign-task-details/' + item.campaign_token}> <img src={viewlink} alt="viewlink" className="w-4" /></a> */}
                                            </div>
                                          </>
                                      }

                                    </td>

                                    <td className="lable-color font-normal text-xs sm:text-base  px-5 md:px-5 lg:pl-4 py-4">
                                      {item.campaign_type_name}
                                    </td>
                                    <td className="lable-color font-normal text-xs sm:text-base  px-5 md:px-5 lg:pl-4 py-4">
                                      {start_date}
                                    </td>

                                    <td className="lable-color font-normal text-xs sm:text-base  px-5 md:px-5 lg:pl-4 py-4">
                                      {last_date}
                                    </td>

                                    <td className="lable-color font-normal text-center text-xs sm:text-base  px-5 md:px-5 py-4">
                                      {item.joinRevuer} / {item.revuer_limit_count}
                                    </td>

                                    <td className="lable-color font-normal text-xs text-center sm:text-base  px-5 md:px-5 py-4">
                                      {item.joinCampaign}
                                    </td>

                                    <td className="lable-color font-normal text-xs sm:text-base  px-5 md:px-5 lg:pl-4 py-4">
                                      {
                                        item.campaign_post_status == 1 ?
                                          <>
                                            <a href="javascript:void(0)">
                                              <img src={unblock} alt="Inactive" className="w-[15px] mr-5" onClick={() => { toggleModal11(); setModal({ status_title: 'Inactive Campaign', message: "Are you sure you want to inactive campaign.", campaign_token: item.campaign_token, campaign_post_status: 0, action_type: 2 }) }} />
                                            </a>
                                          </>
                                          :
                                          <>
                                            <a href="javascript:void(0)">
                                              <img src={block} alt="Active" className="w-[15px] mr-5" onClick={() => { toggleModal11(); setModal({ status_title: 'Inactive Campaign', message: "Are you sure you want to active campaign.", campaign_token: item.campaign_token, campaign_post_status: 1, action_type: 2 }) }} />
                                            </a>
                                          </>
                                      }
                                    </td>

                                    {/* <td className="trased-edit lable-color mt-4 lg:mt-0 font-normal text-xs sm:text-base  px-5 md:px-5 lg:pl-0 py-4 flex items-center justify-center">
                                      <a href={'campaign-details-page/' + item.campaign_token}>
                                        <img src={editimg} alt="editimg" className="mr-5 w-4" />{" "}
                                      </a>
                                      <a href="#">
                                        <img src={deletimg} alt="deletimg" className="w-[15px]" />
                                      </a>
                                    </td> */}
                                  </tr>
                                  <tr className="h-4"></tr>
                                </>
                              )
                            })
                            :
                            <>
                              <tr className="border-b mb-3">
                                <td colSpan="7" className="text-center lable-color font-normal text-xs sm:text-base  px-5 md:px-5 lg:pl-4 py-4">
                                  No Active Campaign Found
                                </td>
                              </tr>
                              <tr className="h-4"> </tr>
                            </>
                          :
                          <>
                            <tr className="border-b mb-3">
                              <td colSpan="7" className="text-center lable-color font-normal text-xs sm:text-base  px-5 md:px-5 lg:pl-4 py-4">
                                No Active Campaign Found
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

                    {/* {
                      activeCampaignList && Array(activePageCount).fill(activePageCount).map((item, index) => (
                        <li className={`${index === activePageCount ? "bac-6 text-white text-sm font-semibold rounded px-[1rem] py-2 mr-3" : "border border-[#95A5A6] text-sm font-semibold color-3 px-3 rounded py-2 mr-3"}`}>
                          <a href="javascript:void(0)" onClick={() => currentActivePage(index)}>{index + 1}</a>
                        </li>
                      ))
                    } */}
                    {
                      activeCampaignList && Array(activePageCount).fill(activePageCount).map((item, index) => (
                        <li className={`${(Number(campaignActiveListData?.start) / 10 + 1 == index + 1) ? "bac-6 text-white text-sm font-semibold rounded px-[1rem] py-2 mr-3" : "border border-[#95A5A6] text-sm font-semibold color-3 px-3 rounded py-2 mr-3"}`}>
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


              <div id="third" className="hidden pt-6 text-xs sm:text-sm text-justify">
                <div className="overflow-auto mb-5">
                  <table className="table-auto w-full whitespace-nowrap">
                    <thead>
                      <tr className="bg-[#EBF0F2] mb-3 h-14">
                        <th className="lable-color font-medium lg:font-semibold md:font-medium rounded-l-lg text-xs sm:text-sm px-5 md:px-5 lg:pl-4 py-2">Sr. No</th>
                        <th className="lable-color font-medium lg:font-semibold md:font-medium text-xs sm:text-sm px-5 md:px-5 lg:pl-4 py-2">Campaign Name</th>

                        <th className="lable-color font-medium lg:font-semibold md:font-medium text-xs sm:text-sm md:px-5 px-5 sm:pl-0 py-2">Campaign Type</th>
                        <th className="lable-color font-medium lg:font-semibold md:font-medium text-xs sm:text-sm md:px-5 px-5 sm:pl-0 py-2">Start Date</th>

                        <th className="lable-color font-medium lg:font-semibold md:font-medium text-xs sm:text-sm md:px-5 px-5 sm:pl-0 py-2">Due Date</th>

                        <th className="lable-color font-medium lg:font-semibold md:font-medium text-xs sm:text-sm md:px-5 px-5 sm:pl-0 py-2">Participants</th>

                        <th className="lable-color font-medium lg:font-semibold md:font-medium text-xs sm:text-sm md:px-5 px-5 sm:pl-0 py-2">Status</th>

                        <th className="lable-color font-medium lg:font-semibold md:font-medium text-xs sm:text-sm md:px-5 px-5 sm:pl-0 py-2">Action</th>

                        {/* <th className="lable-color font-medium lg:font-semibold md:font-medium rounded-r-lg text-xs sm:text-sm px-5 md:px-5 sm:pl-0 py-2">Action</th> */}
                      </tr>
                      <tr className="h-4"></tr>

                      {
                        completedCampaignList ?
                          completedCampaignList.length > 0 ?
                            completedCampaignList.map((item, index) => {
                              var start_date = Moment(item.start_date, 'DD-MM-YYYY').format('DD MMMM YYYY')
                              var last_date = Moment(item.last_date, 'DD-MM-YYYY').format('DD MMMM YYYY')
                              return (
                                <>
                                  {console.log("campaignCompletedListData", campaignCompletedListData)}

                                  <tr className="border-b mb-3">
                                    <td className="lable-color font-normal text-xs sm:text-base  px-5 md:px-5 lg:pl-4 py-4">
                                      {Number(campaignCompletedListData?.start) + index + 1}
                                    </td>
                                    <td style={{ whiteSpace: "word-break" }} className="lable-color flex text-left items-center font-normal text-xs sm:text-base  px-5 md:px-5 lg:pl-4 py-4">
                                      {/* <a href={'campaign-menegment-active-request/' + item.campaign_token}> {item.campaign_name}</a> */}
                                      <a href={'campaign-task-details/' + item.campaign_token} className="mr-3"> {item.campaign_name}</a>
                                      <div className="w-10">
                                        <a href={'campaign-task-details/' + item.campaign_token}> <img src={viewlink} alt="viewlink" className="w-4" /></a>
                                      </div>
                                    </td>

                                    <td className="lable-color font-normal text-xs sm:text-base  px-5 md:px-5 lg:pl-4 py-4">
                                      {item.campaign_type_name}
                                    </td>
                                    <td className="lable-color font-normal text-xs sm:text-base  px-5 md:px-5 lg:pl-4 py-4">
                                      {start_date}
                                    </td>

                                    <td className="lable-color font-normal text-xs sm:text-base  px-5 md:px-5 lg:pl-4 py-4">
                                      {last_date}
                                    </td>

                                    <td className="lable-color font-normal text-center text-xs sm:text-base  px-5 md:px-5 py-4">
                                      {item.joinRevuer} / {item.revuer_limit_count}
                                    </td>



                                    <td className="lable-color font-normal text-xs sm:text-base  px-5 md:px-5 lg:pl-4 py-4">
                                      Completed
                                    </td>

                                    <td className="lable-color font-normal text-xs text-center sm:text-base  px-5 md:px-5 py-4">
                                      {
                                        item.campaign_post_status == 1 ?
                                          <>
                                            <a href="javascript:void(0)">
                                              <img src={unblock} alt="Inactive" className="w-[15px] mr-5" onClick={() => { toggleModal11(); setModal({ status_title: 'Inactive Campaign', message: "Are you sure you want to inactive campaign.", campaign_token: item.campaign_token, campaign_post_status: 0, action_type: 2 }) }} />
                                            </a>
                                          </>
                                          :
                                          <>
                                            <a href="javascript:void(0)">
                                              <img src={block} alt="Active" className="w-[15px] mr-5" onClick={() => { toggleModal11(); setModal({ status_title: 'Inactive Campaign', message: "Are you sure you want to active campaign.", campaign_token: item.campaign_token, campaign_post_status: 1, action_type: 2 }) }} />
                                            </a>
                                          </>
                                      }
                                    </td>

                                    {/* <td className="trased-edit lable-color mt-4 lg:mt-0 font-normal text-xs sm:text-base  px-5 md:px-5 lg:pl-0 py-4 flex items-center justify-center">
                                      <a href={'campaign-details-page/' + item.campaign_token}>
                                        <img src={editimg} alt="editimg" className="mr-5 w-4" />{" "}
                                      </a>
                                      <a href="#">
                                        <img src={deletimg} alt="deletimg" className="w-[15px]" />
                                      </a>
                                    </td> */}
                                  </tr>
                                  <tr className="h-4"></tr>
                                </>
                              )
                            })
                            :
                            <>
                              <tr className="border-b mb-3">
                                <td colSpan="7" className="text-center lable-color font-normal text-xs sm:text-base  px-5 md:px-5 lg:pl-4 py-4">
                                  No Completed Campaign Found
                                </td>
                              </tr>
                              <tr className="h-4"> </tr>
                            </>
                          :
                          <>
                            <tr className="border-b mb-3">
                              <td colSpan="7" className="text-center lable-color font-normal text-xs sm:text-base  px-5 md:px-5 lg:pl-4 py-4">
                                No Completed Campaign Found
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
                      <a href="javascript:void(0)" onClick={() => prevCompletedPage()}><i className="fa fa-angle-left" aria-hidden="true"></i> </a>
                    </li>

                    {/* {
                      completedCampaignList && Array(completedPageCount).fill(completedPageCount).map((item, index) => (
                        <li className={`${index === completedPageState ? "bac-6 text-white text-sm font-semibold rounded px-[1rem] py-2 mr-3" : "border border-[#95A5A6] text-sm font-semibold color-3 px-3 rounded py-2 mr-3"}`}>
                          <a href="javascript:void(0)" onClick={() => currentCompletedPage(index)}>{index + 1}</a>
                        </li>
                      ))
                    } */}
                    {
                      completedCampaignList && Array(completedPageCount).fill(completedPageCount).map((item, index) => (
                        <li className={`${(Number(campaignCompletedListData.start) / 10 + 1 == index + 1) ? "bac-6 text-white text-sm font-semibold rounded px-[1rem] py-2 mr-3" : "border border-[#95A5A6] text-sm font-semibold color-3 px-3 rounded py-2 mr-3"}`}>
                          <a href="javascript:void(0)" onClick={() => currentActivePage(index)}>{index + 1}</a>
                        </li>
                      ))
                    }
                    <li className="border rounded text-sm font-medium border-black px-3 py-2 mr-3">
                      <a href="javascript:void(0)" onClick={() => nextCompletedPage()} ><i className="fa fa-angle-right" aria-hidden="true"></i></a>
                    </li>
                  </ul>
                </div>


              </div>

              <div id="fourth" className="hidden pt-6 text-xs sm:text-sm text-justify">
                <div className="overflow-auto mb-5">
                  <table className="table-auto w-full whitespace-nowrap">
                    <thead>
                      <tr className="bg-[#EBF0F2] mb-3 h-14">
                        <th className="lable-color font-medium lg:font-semibold md:font-medium rounded-l-lg text-xs sm:text-sm px-5 md:px-5 lg:pl-4 py-2">Sr. No</th>
                        <th className="lable-color font-medium lg:font-semibold md:font-medium text-xs sm:text-sm px-5 md:px-5 lg:pl-4 py-2">Campaign Name</th>

                        <th className="lable-color font-medium lg:font-semibold md:font-medium text-xs sm:text-sm md:px-5 px-5 sm:pl-0 py-2">Campaign Type</th>
                        <th className="lable-color font-medium lg:font-semibold md:font-medium text-xs sm:text-sm md:px-5 px-5 sm:pl-0 py-2">Start Date</th>

                        <th className="lable-color font-medium lg:font-semibold md:font-medium text-xs sm:text-sm md:px-5 px-5 sm:pl-0 py-2">Due Date</th>

                        <th className="lable-color font-medium lg:font-semibold md:font-medium text-xs sm:text-sm md:px-5 px-5 sm:pl-0 py-2">Participants</th>

                        <th className="lable-color font-medium lg:font-semibold md:font-medium text-xs sm:text-sm md:px-5 px-5 sm:pl-0 py-2">Action</th>

                        {/* <th className="lable-color font-medium lg:font-semibold md:font-medium rounded-r-lg text-xs sm:text-sm px-5 md:px-5 sm:pl-0 py-2">Action</th> */}
                      </tr>
                      <tr className="h-4"></tr>

                      {
                        declinedCampaignList ?
                          declinedCampaignList.length > 0 ?
                            declinedCampaignList.map((item, index) => {
                              var start_date = Moment(item.start_date, 'DD-MM-YYYY').format('DD MMMM YYYY')
                              var last_date = Moment(item.last_date, 'DD-MM-YYYY').format('DD MMMM YYYY')
                              return (
                                <>

                                  <tr className="border-b mb-3">
                                    <td className="lable-color font-normal text-xs sm:text-base  px-5 md:px-5 lg:pl-4 py-4">
                                      {Number(campaignDeclinedListData?.start) + index + 1}
                                    </td>
                                    <td style={{ whiteSpace: "word-break" }} className="lable-color flex text-left items-center font-normal text-xs sm:text-base  px-5 md:px-5 lg:pl-4 py-4">
                                      {/* <a href={'campaign-menegment-active-request/' + item.campaign_token}> {item.campaign_name}</a> */}
                                      <a href={'campaign-task-details/' + item.campaign_token} className="mr-3"> {item.campaign_name}</a>
                                      <div className="w-10">
                                        <a href={'campaign-task-details/' + item.campaign_token}> <img src={viewlink} alt="viewlink" className="w-4" /></a>
                                      </div>
                                    </td>

                                    <td className="lable-color font-normal text-xs sm:text-base  px-5 md:px-5 lg:pl-4 py-4">
                                      {item.campaign_type_name}
                                    </td>
                                    <td className="lable-color font-normal text-xs sm:text-base  px-5 md:px-5 lg:pl-4 py-4">
                                      {start_date}
                                    </td>

                                    <td className="lable-color font-normal text-xs sm:text-base  px-5 md:px-5 lg:pl-4 py-4">
                                      {last_date}
                                    </td>

                                    <td className="lable-color font-normal text-center text-xs sm:text-base  px-5 md:px-5 py-4">
                                      {item.joinRevuer} / {item.revuer_limit_count}
                                    </td>

                                    <td className="lable-color font-normal text-xs sm:text-base  px-5 md:px-5 lg:pl-4 py-4">
                                      {
                                        item.campaign_post_status == 1 ?
                                          <>
                                            <a href="javascript:void(0)">
                                              <img src={unblock} alt="Inactive" className="w-[15px] mr-5" onClick={() => { toggleModal11(); setModal({ status_title: 'Inactive Campaign', message: "Are you sure you want to inactive campaign.", campaign_token: item.campaign_token, campaign_post_status: 0, action_type: 2 }) }} />
                                            </a>
                                          </>
                                          :
                                          <>
                                            <a href="javascript:void(0)">
                                              <img src={block} alt="Active" className="w-[15px] mr-5" onClick={() => { toggleModal11(); setModal({ status_title: 'Inactive Campaign', message: "Are you sure you want to active campaign.", campaign_token: item.campaign_token, campaign_post_status: 1, action_type: 2 }) }} />
                                            </a>
                                          </>
                                      }
                                    </td>

                                    {/* <td className="trased-edit lable-color mt-4 lg:mt-0 font-normal text-xs sm:text-base  px-5 md:px-5 lg:pl-0 py-4 flex items-center justify-center">
                                      <a href={'campaign-details-page/' + item.campaign_token}>
                                        <img src={editimg} alt="editimg" className="mr-5 w-4" />{" "}
                                      </a>
                                      <a href="#">
                                        <img src={deletimg} alt="deletimg" className="w-[15px]" />
                                      </a>
                                    </td> */}
                                  </tr>
                                  <tr className="h-4"></tr>
                                </>
                              )
                            })
                            :
                            <>
                              <tr className="border-b mb-3">
                                <td colSpan="7" className="text-center lable-color font-normal text-xs sm:text-base  px-5 md:px-5 lg:pl-4 py-4">
                                  No Declined Campaign Found
                                </td>
                              </tr>
                              <tr className="h-4"> </tr>
                            </>
                          :
                          <>
                            <tr className="border-b mb-3">
                              <td colSpan="7" className="text-center lable-color font-normal text-xs sm:text-base  px-5 md:px-5 lg:pl-4 py-4">
                                No Declined Campaign Found
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
                      <a href="javascript:void(0)" onClick={() => prevDeclinedPage()}><i className="fa fa-angle-left" aria-hidden="true"></i> </a>
                    </li>
                    {/* 
                    {
                      declinedCampaignList && Array(declinedPageCount).fill(declinedPageCount).map((item, index) => (
                        <li className={`${index === declinedPageState ? "bac-6 text-white text-sm font-semibold rounded px-[1rem] py-2 mr-3" : "border border-[#95A5A6] text-sm font-semibold color-3 px-3 rounded py-2 mr-3"}`}>
                          <a href="javascript:void(0)" onClick={() => currentDeclinedPage(index)}>{index + 1}</a>
                        </li>
                      ))
                    } */}
                    {console.log("declinedCampaignList", campaignDeclinedListData)}
                    {
                      declinedCampaignList && Array(declinedPageCount).fill(declinedPageCount).map((item, index) => (
                        <li className={`${(Number(campaignDeclinedListData?.start) / 10 + 1 == index + 1) ? "bac-6 text-white text-sm font-semibold rounded px-[1rem] py-2 mr-3" : "border border-[#95A5A6] text-sm font-semibold color-3 px-3 rounded py-2 mr-3"}`}>
                          <a href="javascript:void(0)" onClick={() => currentActivePage(index)}>{index + 1}</a>
                        </li>
                      ))
                    }
                    <li className="border rounded text-sm font-medium border-black px-3 py-2 mr-3">
                      <a href="javascript:void(0)" onClick={() => nextDeclinedPage()} ><i className="fa fa-angle-right" aria-hidden="true"></i></a>
                    </li>
                  </ul>
                </div>


              </div>


            </div>

          </div>

        </div>

        <CampaignDeleteModal status_title={modal.status_title} message={modal.message} onFailure={toggleModal11} onSuccess={campaignDelete} />

      </section>
      <Sidebar title="Campaigns" />
    </>
  );
}
export default CampaignMenegmentActive;
