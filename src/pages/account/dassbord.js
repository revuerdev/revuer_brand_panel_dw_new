import editimg from "../../assets/images/edit-2.svg"
import deletimg from "../../assets/images/trash.svg"
import makilimg from "../../assets/images/dassbord-maik.svg"
import rewieimg from "../../assets/images/rewie-dassbord.svg"
import amitimg from "../../assets/images/amit.svg"
import Divyaimg from "../../assets/images/divya.svg"
import viewlink from "../../assets/images/view-link.png"
import Bhargaviimg from "../../assets/images/Bhargavi-kirubasankar.svg"
import pendingApproval from "../../assets/images/pending-approval.png"
import pendingTask from "../../assets/images/pending-task.png"
import { switchMainTabs } from "../../services/switch-tab"
import { Header, Sidebar } from "../../layouts";
import { useEffect, useState } from "react";
import Moment from 'moment';
import { useDispatch, useSelector } from 'react-redux'
import { getBrandDetails } from "../../context/actions/brand"
import { getCampaignList } from "../../context/actions/campaign"

import { toggleModal11 } from "../../services/edit-modal"
import { CampaignDeleteModal } from "../../components/Modal";

import { brandCampaignDelete } from "../../context/actions/campaign"
import { brandCampaignStatusChange } from "../../context/actions/campaign"

import { getNotificationData } from "../../context/actions/notification"

import { getTotalActionCount } from "../../context/actions/notification"

import block from "../../assets/images/block.png"
import unblock from "../../assets/images/unblock.png"

function Dassbord() {

  const dispatch = useDispatch();

  const [modal, setModal] = useState({ status_title: "Delete Campaign" })
  const [buttonHide, setButtonHide] = useState()

  var brandlogin_unique_token = localStorage.getItem("brandlogin_unique_token");

  const brandDataDetails = useSelector((state) => state.brandDetails);

  const campaignListData = useSelector((state) => state.listCampaignData);
  var activeCampaignList = campaignListData.ActiveCampaignList
  var reviewCampaignList = campaignListData.ReviewCampaignList
  var declineCampaignList = campaignListData.DeclineCampaignList
  var completedCampaignList = campaignListData.getCompleteCampaignData
  var totalActiveCampaignData = campaignListData.totalActiveCampaignData
  var totalReviewCampaignData = campaignListData.totalReviewCampaignData


  const notificationListData = useSelector((state) => state.notificationData);
  const totalCountData = useSelector((state) => state.actionCountData);
  var totalPendingApproval = totalCountData.totalPendingApproval
  var totalPendingTask = totalCountData.totalPendingTask

  useEffect(() => {
    switchMainTabs()
    dispatch(getBrandDetails({ brandlogin_unique_token: brandlogin_unique_token }))
    dispatch(getCampaignList({ brandlogin_unique_token: brandlogin_unique_token }))
    dispatch(getNotificationData({ brandlogin_unique_token: brandlogin_unique_token, type: 1 }))
    dispatch(getTotalActionCount({ brandlogin_unique_token: brandlogin_unique_token }))
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

        <div className="block md:block lg:flex px-5">
          <div className="flex-initial w-full md:w-full lg:w-7/12 mr-6 mb-6 sm:mb-0">

            <div className="block md:block lg:flex px-0">

              <div className="flex-initial w-full md:w-full lg:w-full mr-6 mb-6 sm:mb-0">
                <div className="flex items-center rounded-2xl box-shadow-1 pt-6 pb-3 px-6 mb-8 mt-6 sm:mt-0">

                  <div className="lg:flex items-center">


                    <div className="flex items-center">
                      <div className="mr-5">
                        <img src={pendingApproval} alt="pendingApproval" className="w-16" />
                      </div>

                      <div className="bg-white  py-4 px-2 mr-0 md:mr-3 lg:mr-4">
                        <h5 className="campain-button  text-sm color-3 font-normal mb-3 -mt-1 ">Pending Approval</h5>
                        <p className="text-2xl font-semibold">{totalPendingApproval ? totalPendingApproval : 0}</p>
                      </div>
                    </div>

                    <div className="active-box mx-10 lg:block hidden md:block"></div>

                    <div className="flex items-center">
                      <div className="mr-5">
                        <img src={pendingTask} alt="makilimg" className="w-16" />
                      </div>

                      <div className="bg-white  py-4 px-2 mr-0 md:mr-3 lg:mr-4">
                        <h5 className="campain-button  text-sm color-3 font-normal mb-3 -mt-1 ">Pending Task</h5>
                        <p className="text-2xl font-semibold">{totalPendingTask ? totalPendingTask : 0}</p>
                      </div>
                    </div>

                  </div>


                </div>



              </div>

            </div>
          </div>
        </div>

        <div className="block md:block lg:flex px-5">
          <div className="flex-initial w-full md:w-full lg:w-4/12 mr-6 mb-6 sm:mb-0">
            <div className="flex items-center rounded-2xl box-shadow-1 pt-6 pb-3 px-6 mb-8 mt-6 sm:mt-0">
              <div className="mr-5">
                <img src={makilimg} alt="makilimg" />
              </div>

              <div className="bg-white  py-4 px-2 mr-0 md:mr-3 lg:mr-4">
                <h5 className="campain-button  text-base color-3 font-normal mb-7 -mt-1 ">Active Campaigns</h5>
                <p className="text-3xl font-semibold">{totalActiveCampaignData ? totalActiveCampaignData : 0}</p>
              </div>
            </div>

            <div className="flex items-center rounded-2xl box-shadow-1 pt-6 pb-3 px-6 mb-10 md:mb-8 lg:mb-2">
              <div className="mr-5">
                <img src={rewieimg} alt="rewieimg" />
              </div>

              <div className="bg-white rounded-2xl py-4 px-2 mr-0 md:mr-3 lg:mr-4">
                <h5 className="campain-button text-base color-3 font-normal mb-7 -mt-1 ">Campaign In Review</h5>
                <p className="text-3xl font-semibold">{totalReviewCampaignData ? totalReviewCampaignData : 0}</p>
              </div>
            </div>
          </div>

          <div className="flex-initial w-full lg:w-9/12 box-shadow-1 mb-5 lg:mb-6 rounded-xl">
            <div className="bg-white rounded-2xl pb-8">
              <div className="flex justify-between px-6">
                <h3 className="text-center py-4 text-xl font-semibold">Inbox</h3>
                <button><a href={'inbox'} className="uppercase text-sm sm:text-sm font-semibold bac-3 px-5 rounded-lg py-2 text-white">View all</a></button>
              </div>

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
                                <img src={item.campaign_image} alt="amitimg" className="w-14 h-14" />
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
                                <p className="text-xs text-black">{item.message}</p>
                              </div>
                            </div>

                            <div>
                              <h5 className="text-gray-400 text-sm text-end">{item.insert_date}</h5>
                            </div>
                          </div>
                          <hr />
                        </>
                      )
                    })
                    :
                    <>
                      <div>
                        <h3 className="text-center text-base font-semibold">No Notification Found</h3>
                      </div>
                    </>
                    : ""
                }
              </div>
            </div>
          </div>



        </div>

        <div className="px-5">
          <div className="bg-white box-shadow-1 rounded-2xl px-2 sm:px-7 pt-3 mb-5 px0">
            <div className="flex justify-between mt-2 items-center">
              <h6 className="text text-sm sm:text-xl font-semibold pl-3">Campaigns Listing</h6>
              <button><a href={'campaign-menegment-active'} className="bac-3 uppercase text-xs sm:text-sm font-semibold px-5 py-2 mr-8 mr8 text-white rounded-lg">
                View All
              </a></button>
            </div>
            <div className="sm:px-2 px-0">
              <ul id="tabs" className="inline-flex pt-2 px-1 w-full overflow-auto lg:overflow-hidden">
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
                        <tr className="bg-[#eee] mb-3 h-14">
                          <th className="lable-color font-normal lg:font-semibold md:font-normal rounded-l-lg text-xs sm:text-sm px-5 md:px-5 lg:pl-4 py-2">
                            Campaign Name
                          </th>

                          <th className="lable-color font-normal lg:font-semibold md:font-normal text-xs sm:text-sm md:pr-5 pr-5 md:pl-3 lg:pl-4 py-2">
                            Start Date
                          </th>

                          <th className="lable-color font-normal lg:font-semibold md:font-normal text-xs sm:text-sm md:pr-5 pr-5 md:pl-3 lg:pl-4 py-2">
                            Due Date
                          </th>

                          <th className="lable-color text-center font-normal lg:font-semibold md:font-normal  text-xs sm:text-sm md:px-5 px-5 sm:pl-3 py-2">
                            Participants
                          </th>

                          {/* <th className="lable-color text-center font-normal lg:font-semibold md:font-normal text-xs sm:text-sm md:px-5 px-5 sm:pl-3 py-2">
                            Needing Action
                          </th> */}

                          <th className="lable-color font-normal lg:font-semibold md:font-normal text-xs sm:text-sm md:px-5 px-5 sm:pl-3 py-2">
                            Action
                          </th>

                          {/* <th className="lable-color font-normal lg:font-semibold md:font-normal rounded-r-lg text-xs sm:text-sm px-5 md:px-5 sm:pl-3 py-2">
                            Action
                          </th> */}
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
                                      <td className="lable-color flex items-center font-normal text-xs sm:text-base  px-5 md:px-5 lg:pl-4 py-4">
                                        <a href={'campaign-task-details/' + item.campaign_token} className="mr-3"> {item.campaign_name}</a>

                                        <div className="w-10">
                                          <a href={'campaign-task-details/' + item.campaign_token}> <img src={viewlink} alt="viewlink" className="w-4" /></a>
                                        </div>
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
                                  <td colSpan="5" className="text-center lable-color font-normal text-xs sm:text-base  px-5 md:px-5 lg:pl-4 py-4">
                                    No Review Campaign Found
                                  </td>
                                </tr>
                                <tr className="h-4"> </tr>
                              </>
                            :
                            ''
                        }
                      </thead>
                    </table>
                  </div>
                </div>

                <div
                  id="second"
                  className="hidden pt-6 text-xs sm:text-sm text-justify"
                >
                  <div className="overflow-auto mb-5">
                    <table className="table-auto w-full whitespace-nowrap">
                      <thead>
                        <tr className="bg-[#eee] mb-3 h-14">
                          <th className="lable-color font-normal lg:font-semibold md:font-normal rounded-l-lg text-xs sm:text-sm px-5 md:px-5 lg:pl-4 py-2">
                            Campaign Name
                          </th>

                          <th className="lable-color font-normal lg:font-semibold md:font-normal text-xs sm:text-sm md:pr-5 pr-5 md:pl-3 lg:pl-4 py-2">
                            Start Date
                          </th>

                          <th className="lable-color font-normal lg:font-semibold md:font-normal text-xs sm:text-sm md:pr-5 pr-5 md:pl-3 lg:pl-4 py-2">
                            Due Date
                          </th>

                          <th className="lable-color text-center font-normal lg:font-semibold md:font-normal  text-xs sm:text-sm md:px-5 px-5 sm:pl-3 py-2">
                            Participants
                          </th>

                          <th className="lable-color text-center font-normal lg:font-semibold md:font-normal text-xs sm:text-sm md:px-5 px-5 sm:pl-3 py-2">
                            Completed
                          </th>

                         {/*  <th className="lable-color font-normal lg:font-semibold md:font-normal text-xs sm:text-sm md:px-5 px-5 sm:pl-3 py-2">
                            Needing Action
                          </th> */}

                          {/* <th className="lable-color font-normal lg:font-semibold md:font-normal rounded-r-lg text-xs sm:text-sm px-5 md:px-5 sm:pl-3 py-2">
                            Action
                          </th> */}
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

                                    <tr className="border-b pb-2 mb-3">
                                      <td className="lable-color flex items-center font-normal text-xs sm:text-base  px-5 md:px-5 lg:pl-4 py-4">
                                        <a href={'campaign-task-details/' + item.campaign_token} className="mr-3"> {item.campaign_name}</a>
                                        <div className="w-10">
                                          <a href={'campaign-task-details/' + item.campaign_token}> <img src={viewlink} alt="viewlink" className="w-4" /></a>
                                        </div>
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

                                     {/*  <td className="lable-color font-normal text-xs sm:text-base px-5 md:px-5 lg:pl-4 py-4">
                                        0
                                      </td> */}

                                      {/* <td className=" trased-edit lable-color mt-4 lg:mt-0 font-normal text-xs sm:text-base  px-5 md:px-5 lg:pl-0 py-4 flex items-center justify-center">
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
                                  <td colSpan="5" className="text-center lable-color font-normal text-xs sm:text-base  px-5 md:px-5 lg:pl-4 py-4">
                                    No Active Campaign Found
                                  </td>
                                </tr>
                                <tr className="h-4"> </tr>
                              </>
                            :
                            ''
                        }
                      </thead>
                    </table>
                  </div>
                </div>

                <div
                  id="third"
                  className="hidden pt-6 text-xs sm:text-sm text-justify"
                >
                  <div className="overflow-auto mb-5">
                    <table className="table-auto w-full whitespace-nowrap">
                      <thead>
                        <tr className="bg-[#eee] mb-3 h-14">
                          <th className="lable-color font-normal lg:font-semibold md:font-normal rounded-l-lg text-xs sm:text-sm px-5 md:px-5 lg:pl-4 py-2">
                            Campaign Name
                          </th>

                          <th className="lable-color font-normal lg:font-semibold md:font-normal text-xs sm:text-sm md:pr-5 pr-5 md:pl-3 lg:pl-4 py-2">
                            Start Date
                          </th>

                          <th className="lable-color font-normal lg:font-semibold md:font-normal text-xs sm:text-sm md:pr-5 pr-5 md:pl-3 lg:pl-4 py-2">
                            Due Date
                          </th>

                          <th className="lable-color text-center font-normal lg:font-semibold md:font-normal  text-xs sm:text-sm md:px-5 px-5 sm:pl-3 py-2">
                            Participants
                          </th>

                          {/* <th className="lable-color text-center font-normal lg:font-semibold md:font-normal text-xs sm:text-sm md:px-5 px-5 sm:pl-3 py-2">
                            Needing Action
                          </th> */}

                          <th className="lable-color font-normal lg:font-semibold md:font-normal text-xs sm:text-sm md:px-5 px-5 sm:pl-3 py-2">
                            Status
                          </th>

                          {/* <th className="lable-color font-normal lg:font-semibold md:font-normal rounded-r-lg text-xs sm:text-sm px-5 md:px-5 sm:pl-3 py-2">
                            Action
                          </th> */}
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

                                    <tr className="border-b pb-2 mb-3">
                                      <td className="lable-color flex items-center font-normal text-xs sm:text-base  px-5 md:px-5 lg:pl-4 py-4">
                                        <a href={'campaign-task-details/' + item.campaign_token} className="mr-3">{item.campaign_name}</a>
                                        <div className="w-10">
                                          <a href={'campaign-task-details/' + item.campaign_token}> <img src={viewlink} alt="viewlink" className="w-4" /></a>
                                        </div>
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

                                      {/* <td className="lable-color font-normal text-xs text-center sm:text-base  px-5 md:px-5 py-4">
                                        0
                                      </td> */}

                                      <td className="lable-color font-normal text-xs sm:text-base px-5 md:px-5 lg:pl-4 py-4">
                                        Completed
                                      </td>

                                      {/* <td className=" trased-edit lable-color mt-4 lg:mt-0 font-normal text-xs sm:text-base  px-5 md:px-5 lg:pl-0 py-4 flex items-center justify-center">
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
                                  <td colSpan="5" className="text-center lable-color font-normal text-xs sm:text-base  px-5 md:px-5 lg:pl-4 py-4">
                                    No Completed Campaign Found
                                  </td>
                                </tr>
                                <tr className="h-4"> </tr>
                              </>
                            :
                            ''
                        }
                      </thead>
                    </table>
                  </div>
                </div>
                <div
                  id="fourth"
                  className="hidden pt-6 text-xs sm:text-sm text-justify"
                >
                  <div className="overflow-auto mb-5">
                    <table className="table-auto w-full whitespace-nowrap">
                      <thead>
                        <tr className="bg-[#eee] mb-3 h-14">
                          <th className="lable-color font-normal lg:font-semibold md:font-normal rounded-l-lg text-xs sm:text-sm px-5 md:px-5 lg:pl-4 py-2">
                            Campaign Name
                          </th>

                          <th className="lable-color font-normal lg:font-semibold md:font-normal text-xs sm:text-sm md:pr-5 pr-5 md:pl-3 lg:pl-4 py-2">
                            Start Date
                          </th>

                          <th className="lable-color font-normal lg:font-semibold md:font-normal text-xs sm:text-sm md:pr-5 pr-5 md:pl-3 lg:pl-4 py-2">
                            Due Date
                          </th>

                          <th className="lable-color text-center font-normal lg:font-semibold md:font-normal  text-xs sm:text-sm md:px-5 px-5 sm:pl-3 py-2">
                            Participants
                          </th>

                          {/* <th className="lable-color text-center font-normal lg:font-semibold md:font-normal text-xs sm:text-sm md:px-5 px-5 sm:pl-3 py-2">
                            Needing Action
                          </th> */}

                          <th className="lable-color font-normal lg:font-semibold md:font-normal text-xs sm:text-sm md:px-5 px-5 sm:pl-3 py-2">
                            Status
                          </th>

                          {/* <th className="lable-color font-normal lg:font-semibold md:font-normal rounded-r-lg text-xs sm:text-sm px-5 md:px-5 sm:pl-3 py-2">
                            Action
                          </th> */}
                        </tr>
                        <tr className="h-4"></tr>
                        {
                          declineCampaignList ?
                            declineCampaignList.length > 0 ?
                              declineCampaignList.map((item, index) => {
                                var start_date = Moment(item.start_date, 'DD-MM-YYYY').format('DD MMMM YYYY')
                                var last_date = Moment(item.last_date, 'DD-MM-YYYY').format('DD MMMM YYYY')
                                return (
                                  <>
                                    <tr className="border-b pb-2 mb-3">
                                      <td className="lable-color flex items-center font-normal text-xs sm:text-base  px-5 md:px-5 lg:pl-4 py-4">
                                        <a href={'campaign-task-details/' + item.campaign_token} className="mr-3">{item.campaign_name}</a>
                                        <div className="w-10">
                                          <a href={'campaign-task-details/' + item.campaign_token}> <img src={viewlink} alt="viewlink" className="w-4" /></a>
                                        </div>
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

                                      <td className="lable-color font-normal text-xs sm:text-base px-5 md:px-5 lg:pl-4 py-4">
                                        Declined
                                      </td>

                                      {/* <td className=" trased-edit lable-color mt-4 lg:mt-0 font-normal text-xs sm:text-base  px-5 md:px-5 lg:pl-0 py-4 flex items-center justify-center">
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
                                  <td colSpan="6" className="text-center lable-color font-normal text-xs sm:text-base  px-5 md:px-5 lg:pl-4 py-4">
                                    No Declined Campaign Found
                                  </td>
                                </tr>
                                <tr className="h-4"> </tr>
                              </>
                            :
                            ''
                        }

                      </thead>
                    </table>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

        <CampaignDeleteModal status_title={modal.status_title} message={modal.message} onFailure={toggleModal11} onSuccess={campaignDelete} />

      </section>


      <Sidebar title="Dashboard" />
    </>
  );
}
export default Dassbord;
