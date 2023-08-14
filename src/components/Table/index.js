import { useEffect, useState, useRef } from "react";
import AcceptedTable from "./AcceptedTable";
import ApprovalTable from "./ApprovalTable";
import Taxtable from "./Taxtable";
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { toggleModal } from "../../services/edit-modal"
import { StatusChangeModal } from "../../components/Modal";
import { getRevuerPendingApproval } from "../../context/actions/revuer"
import { getRevuerAccepted } from "../../context/actions/revuer"
import { revuerParticipationApproval } from "../../context/actions/revuer"
import facebook from "../../assets/images/facebook.png";
import instagram from "../../assets/images/instagram.png";
import twitter from "../../assets/images/twiter.png";
import youtube from "../../assets/images/youtube.png";
import pinterest from "../../assets/images/pinterest.png";
import linkedin from "../../assets/images/linkdin.png";
import { toast } from "react-toastify"

export const Table = ({ parentNode, childNode }) => {
  const [childNodeType, setChildNodeType] = useState("Pending")
  const [childNodeType1, setChildNodeType1] = useState("Pending")
  const [modal, setModal] = useState({ status_title: 'Accept' })

  const dispatch = useDispatch();
  let navigate = useNavigate();

  const toastId = useRef(null);

  const pathname = window.location.pathname;
  const campaign_token = pathname.substring(pathname.lastIndexOf('/') + 1);
  var brandlogin_unique_token = localStorage.getItem("brandlogin_unique_token");

  const [pendingApprovalPageState, setPendingApprovalPageState] = useState(0);
  const [acceptedPageState, setAcceptedPageState] = useState(0);

  const revuerPendingApprovalListData = useSelector((state) => state.revuerPendingApprovalListData);
  console.log("revuerPendingApprovalListData", revuerPendingApprovalListData)

  const [buttonHide, setButtonHide] = useState()

  var getRevuerPendingApproveList = revuerPendingApprovalListData.getRevuerPendingApproveList
  var revuerApprovalPendingPageCount = revuerPendingApprovalListData ? Math.ceil(revuerPendingApprovalListData.revuerPendingApproveCount / 10) : ''
  const [revuerPendingApprovalPageCountNumber, setPendingApprovalPageCount] = useState(revuerApprovalPendingPageCount)

  const revuerAcceptedListData = useSelector((state) => state.revuerAcceptedListData);
  var getRevuerAcceptedList = revuerAcceptedListData.getRevuerAcceptedList
  var revuerAcceptedPageCount = revuerAcceptedListData ? Math.ceil(revuerAcceptedListData.revuerAcceptedCount / 10) : ''

  const [revuerAcceptedPageCountNumber, setAcceptedPageCount] = useState(revuerAcceptedPageCount)

  useEffect(() => {
    revuerPendingApprovalList(pendingApprovalPageState);
    revuerAcceptedList(acceptedPageState);
  }, [buttonHide]);

  const revuerPendingApprovalList = (reviewPageNumber) => {
    console.log("AA GYA")
    dispatch(getRevuerPendingApproval({ campaign_token: campaign_token, brandlogin_unique_token: brandlogin_unique_token, navigate, pageValue: reviewPageNumber }))
  }

  const currentPendingApprovalPage = (pagePendingApprovalvalue) => {
    setPendingApprovalPageState(pagePendingApprovalvalue)
    revuerPendingApprovalList(pagePendingApprovalvalue)
  }

  const nextPendingApprovalPage = () => {
    const newPendingApprovalPageValue = pendingApprovalPageState + 1
    if (revuerApprovalPendingPageCount > newPendingApprovalPageValue) {
      setPendingApprovalPageState(newPendingApprovalPageValue)
      revuerPendingApprovalList(newPendingApprovalPageValue)
    }
  }

  const prevPendingApprovalPage = () => {
    const newReviewPageValue = pendingApprovalPageState
    if (newReviewPageValue >= 1) {
      setPendingApprovalPageState(newReviewPageValue - 1)
      revuerPendingApprovalList(newReviewPageValue)
    }
  }

  const revuerAcceptedList = (acceptedPageNumber) => {
    dispatch(getRevuerAccepted({ campaign_token: campaign_token, brandlogin_unique_token: brandlogin_unique_token, navigate, pageValue: acceptedPageNumber }))
  }

  const currentAcceptedPage = (pageAcceptedvalue) => {
    setAcceptedPageState(pageAcceptedvalue)
    revuerAcceptedList(pageAcceptedvalue)
  }

  const nextAcceptedPage = () => {
    const newAcceptedPageValue = acceptedPageState + 1
    if (revuerAcceptedPageCount > newAcceptedPageValue) {
      setAcceptedPageState(newAcceptedPageValue)
      revuerAcceptedList(newAcceptedPageValue)
    }
  }

  const prevAcceptedPage = () => {
    const newAcceptedPageValue = acceptedPageState
    if (newAcceptedPageValue >= 1) {
      setAcceptedPageState(newAcceptedPageValue - 1)
      revuerAcceptedList(newAcceptedPageValue)
    }
  }

  const campignParticipationAprrove = () => {
    var revuer_token = modal.revuer_token
    var approval_type = modal.approval_type
    dispatch(revuerParticipationApproval({ campaign_token: campaign_token, brandlogin_unique_token: brandlogin_unique_token, revuer_token: revuer_token, approval_type: approval_type, setButtonHide }, navigate))
    toggleModal()
  }

  return (
    <>
      <div id="tab-contents">
        {parentNode == "Participation" && childNode == "Pending" ?
          <div id="first" className="pt-2 text-xs sm:text-sm text-justify">
            <div className="mt-5 flex flex-row items-center mb-8">
              <div
                onClick={() => setChildNodeType("Pending")}
                data-tabopen="tab1"
                className={`tabbtn ${childNodeType == "Pending" ? "bac-6 w-48 py-[8px] text-center font-8 text-base font-semibold text-white rounded-l-lg " : "tabbtn w-40 font-8 py-1.5 text-base text-center font-mormal color-3 border-2 border-r-0 rounded-l-lg"} cursor-pointer`}
              >
                Pending Approval
              </div>
              <div
                onClick={() => setChildNodeType("Approval")}
                data-tabopen="tab2"
                className={`tabbtn ${childNodeType == "Approval" ? "bac-6 w-48 py-[8px] text-center text-base font-semibold text-white rounded-r-lg" : "tabbtn w-40 py-1.5 text-base text-center font-mormal color-3 border-2 border-l-0 rounded-r-lg"} cursor-pointer`}
              >
                Accepted
              </div>
            </div>
            {childNodeType == "Pending" ?
              <div id="tab1" className="tab mt-1 items-center">
                <div className="overflow-auto mb-5">
                  <table className="table-auto w-full">
                    <thead>

                      <tr className="bg-[#EBF0F2] mb-3 h-14">
                        <th className="lable-color  lg:font-semibold md: rounded-l-lg text-xs sm:text-sm px-5 md:px-5 lg:pl-4 py-2">Revuers Name</th>

                        <th className="lable-color  text-center lg:font-semibold md: text-xs sm:text-sm md:px-5 px-5 sm:pl-3 py-2">Leaderboard Rank</th>

                        {/* <th className="lable-color text-center  lg:font-semibold md: text-xs sm:text-sm md:px-5 px-5 sm:pl-3 py-2">Earn Amount</th> */}

                        <th className="lable-color text-center  lg:font-semibold md: text-xs sm:text-sm md:px-5 px-5 sm:pl-3 py-2">Social Handles</th>

                        <th className="lable-color text-center  lg:font-semibold md: rounded-r-lg text-xs sm:text-sm md:px-5 px-5 sm:pl-3 py-2">Action</th>
                      </tr>
                      <tr className="h-0"></tr>

                      {
                        getRevuerPendingApproveList ?
                          getRevuerPendingApproveList.length > 0 ?
                            getRevuerPendingApproveList.map((item, index) => {
                              return (
                                <>

                                  <tr className="border-b mb-3">
                                    <td className="lable-color  text-xs sm:text-base font-normal px-5 md:px-5 lg:pl-4 py-4">{item.first_name} {item.last_name}</td>

                                    <td className="lable-color  text-center text-xs sm:text-base font-normal px-5 md:px-5 lg:pl-4 py-4">#{item.rank}</td>

                                    {/* <td className="lable-color text-center text-xs sm:text-base font-normal px-5 md:px-5 lg:pl-10 py-4">₹{item.earn_upto}</td> */}


                                    <td className="lable-color text-center text-xs sm:text-base font-normal px-5 md:px-5 lg:pl-10 py-4">

                                      <div className="flex items-center justify-center">
                                        {
                                          item.facebook_url != "" ?
                                            <div className="mr-5">
                                              <a href={item.facebook_url} target="_blank" >
                                                <img src={facebook} alt="facebook" className="w-4" />
                                              </a>
                                            </div>
                                            : ''
                                        }

                                        {
                                          item.instagram_url != "" ?
                                            <div className="mr-5">
                                              <a href={item.instagram_url} target="_blank" >
                                                <img src={instagram} alt="instagram" className="w-4" />
                                              </a>
                                            </div>
                                            : ''
                                        }

                                        {
                                          item.linkedin_url != "" ?
                                            <div className="mr-5">
                                              <a href={item.linkedin_url} target="_blank" >
                                                <img src={linkedin} alt="facebook" className="w-4" />
                                              </a>
                                            </div>
                                            : ''
                                        }

                                        {
                                          item.pinterest_url != "" ?
                                            <div className="mr-5">
                                              <a href={item.pinterest_url} target="_blank" >
                                                <img src={pinterest} alt="pinterest" className="w-4" />
                                              </a>
                                            </div>
                                            : ''
                                        }

                                        {
                                          item.twitter_url != "" ?
                                            <div className="mr-5">
                                              <a href={item.twitter_url} target="_blank" >
                                                <img src={twitter} alt="twitter" className="w-4" />
                                              </a>
                                            </div>
                                            : ''
                                        }

                                        {
                                          item.youtube_url != "" ?
                                            <div className="mr-5">
                                              <a href={item.youtube_url} target="_blank" >
                                                <img src={youtube} alt="youtube" className="w-4" />
                                              </a>
                                            </div>
                                            : ''
                                        }

                                      </div>

                                    </td>

                                    {/* <td className="lable-color text-center text-xs sm:text-base font-normal px-5 md:px-5 lg:pl-10 py-4">--</td> */}

                                    <td className="lable-color  text-right pr-10 text-xs sm:text-base font-normal pl-5 md:pl-5 py-4">
                                      <div>
                                        <a onClick={() => { toggleModal(); setModal({ status_title: 'Decline', message: "Are you sure you want to decline campaign.", revuer_token: item.revuer_token, approval_type: 2 }) }} className="px-5 rounded-lg text-white text-xs font-semibold bac-3 mr-2 py-2 uppercase">Decline</a>

                                        <a onClick={() => { toggleModal(); setModal({ status_title: 'Approve', message: "Are you sure you want to approve campaign.", revuer_token: item.revuer_token, approval_type: 1 }) }} className="px-5 rounded-lg text-white bac-6 text-xs font-semibold py-2 uppercase">Approve</a>
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
                                <td colSpan="4" className="lable-color text-center font-normal text-xs sm:text-base  px-5 md:px-5 lg:pl-4 py-4">
                                  No Pending Approval Found
                                </td>
                              </tr>
                              <tr className="h-4"> </tr>
                            </>
                          :
                          <>
                            <tr className="border-b mb-3">
                              <td colSpan="4" className="lable-color text-center font-normal text-xs sm:text-base  px-5 md:px-5 lg:pl-4 py-4">
                                No Pending Approval Found
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
                      <a href="javascript:void(0)" onClick={() => prevPendingApprovalPage()}><i className="fa fa-angle-left" aria-hidden="true"></i> </a>
                    </li>

                    {
                      getRevuerPendingApproveList && Array(revuerApprovalPendingPageCount).fill(revuerApprovalPendingPageCount).map((item, index) => (
                        <li className={`${index === pendingApprovalPageState ? "bac-6 text-white text-sm font-semibold rounded px-[1rem] py-2 mr-3" : "border border-[#95A5A6] text-sm font-semibold color-3 px-3 rounded py-2 mr-3"}`}>
                          <a href="javascript:void(0)" onClick={() => currentPendingApprovalPage(index)}>{index + 1}</a>
                        </li>
                      ))
                    }
                    <li className="border rounded text-sm font-medium border-black px-3 py-2 mr-3">
                      <a href="javascript:void(0)" onClick={() => nextPendingApprovalPage()} ><i className="fa fa-angle-right" aria-hidden="true"></i></a>
                    </li>
                  </ul>
                </div>
              </div>
              :
              <div id="tab2" className="tab mt-1 items-center ">
                <div className="overflow-auto mb-5">
                  <table className="table-auto w-full">
                    <thead>
                      <tr className="bg-[#EBF0F2] mb-3 h-14">
                        <th className="lable-color  lg:font-semibold md: rounded-l-lg text-xs sm:text-sm px-5 md:px-5 lg:pl-4 py-2">Revuers Name</th>

                        <th className="lable-color  text-center lg:font-semibold  text-xs sm:text-sm md:px-5 px-5 sm:pl-3 py-2">Leaderboard Rank</th>

                        {/* <th className="lable-color text-right  lg:font-semibold rounded-r-lg text-xs sm:text-sm md:px-5 px-5 sm:pl-3 py-2">Earn Amount</th> */}

                        <th className="lable-color text-center  lg:font-semibold rounded-r-lg text-xs sm:text-sm md:px-5 px-5 sm:pl-3 py-2">Social Handles</th>
                      </tr>
                      <tr className="h-0"></tr>

                      {
                        getRevuerAcceptedList ?
                          getRevuerAcceptedList.length > 0 ?
                            getRevuerAcceptedList.map((item, index) => {
                              return (
                                <>

                                  <tr className="border-b mb-4">
                                    <td className="lable-color  text-xs sm:text-base font-normal px-5 md:px-5 lg:pl-4 py-4">{item.first_name} {item.last_name}</td>

                                    <td className="lable-color  text-center text-xs sm:text-base font-normal px-5 md:px-5 lg:pl-4 py-4">#{item.rank}</td>

                                    {/* <td className="lable-color  text-right text-xs sm:text-base font-normal px-5 md:px-5 lg:pl-4 py-4">₹{item.earn_upto}</td> */}

                                    <td className="lable-color  text-right text-xs sm:text-base font-normal px-5 md:px-5 lg:pl-4 py-4">


                                      <div className="flex items-center justify-center">
                                        {
                                          item.facebook_url != "" ?
                                            <div className="mr-5">
                                              <a href={item.facebook_url} target="_blank" >
                                                <img src={facebook} alt="facebook" className="w-4" />
                                              </a>
                                            </div>
                                            : ''
                                        }

                                        {
                                          item.instagram_url != "" ?
                                            <div className="mr-5">
                                              <a href={item.instagram_url} target="_blank" >
                                                <img src={instagram} alt="instagram" className="w-4" />
                                              </a>
                                            </div>
                                            : ''
                                        }

                                        {
                                          item.linkedin_url != "" ?
                                            <div className="mr-5">
                                              <a href={item.linkedin_url} target="_blank" >
                                                <img src={linkedin} alt="facebook" className="w-4" />
                                              </a>
                                            </div>
                                            : ''
                                        }

                                        {
                                          item.pinterest_url != "" ?
                                            <div className="mr-5">
                                              <a href={item.pinterest_url} target="_blank" >
                                                <img src={pinterest} alt="pinterest" className="w-4" />
                                              </a>
                                            </div>
                                            : ''
                                        }

                                        {
                                          item.twitter_url != "" ?
                                            <div className="mr-5">
                                              <a href={item.twitter_url} target="_blank" >
                                                <img src={twitter} alt="twitter" className="w-4" />
                                              </a>
                                            </div>
                                            : ''
                                        }

                                        {
                                          item.youtube_url != "" ?
                                            <div className="mr-5">
                                              <a href={item.youtube_url} target="_blank" >
                                                <img src={youtube} alt="youtube" className="w-4" />
                                              </a>
                                            </div>
                                            : ''
                                        }

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
                                <td colSpan="3" className="lable-color font-normal text-xs sm:text-base  px-5 md:px-5 lg:pl-4 py-4">
                                  No Accepted Found
                                </td>
                              </tr>
                              <tr className="h-4"> </tr>
                            </>
                          :
                          <>
                            <tr className="border-b mb-3">
                              <td colSpan="3" className="lable-color font-normal text-xs sm:text-base  px-5 md:px-5 lg:pl-4 py-4">
                                No Accepted Found
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
                      <a href="javascript:void(0)" onClick={() => prevAcceptedPage()}><i className="fa fa-angle-left" aria-hidden="true"></i> </a>
                    </li>

                    {
                      getRevuerAcceptedList && Array(revuerAcceptedPageCount).fill(revuerAcceptedPageCount).map((item, index) => (
                        <li className={`${index === acceptedPageState ? "bac-6 text-white text-sm font-semibold rounded px-[1rem] py-2 mr-3" : "border border-[#95A5A6] text-sm font-semibold color-3 px-3 rounded py-2 mr-3"}`}>
                          <a href="javascript:void(0)" onClick={() => currentAcceptedPage(index)}>{index + 1}</a>
                        </li>
                      ))
                    }
                    <li className="border rounded text-sm font-medium border-black px-3 py-2 mr-3">
                      <a href="javascript:void(0)" onClick={() => nextAcceptedPage()} ><i className="fa fa-angle-right" aria-hidden="true"></i></a>
                    </li>
                  </ul>
                </div>
              </div>
            }
          </div>
          :
          <div id="second" className="pt-6 text-xs sm:text-sm text-justify">
            <div className=" flex flex-row items-center mb-8">
              <div className=" flex flex-row items-center ">
                <div
                  onClick={() => setChildNodeType1("Pending")}
                  data-tabopen="tab1"
                  className={`tabbtn cursor-pointer ${childNodeType1 == "Pending" ? " bac-6 w-12 md:w-28 lg:w-48 py-[8px] text-center text-xs sm:text-base font-semibold text-white rounded-l-lg" : "tabbtn w-12 md:w-28 lg:w-48 py-1.5 text-xs sm:text-base text-center font-mormal color-3 border-2 border-r-1 rounded-l-lg"} `}
                >
                  All
                </div>
                <div
                  onClick={() => setChildNodeType1("Approval")}
                  data-tabopen="tab2"
                  className={`tabbtn cursor-pointer ${childNodeType1 == "Approval" ? " bac-6 w-32 md:w-40 lg:w-48 py-[8px]  text-center text-xs sm:text-base font-semibold text-white " : "tabbtn w-32 md:w-40 lg:w-48 py-1.5 text-xs sm:text-base text-center font-mormal color-3 border-2 border-x-0"} `}
                >
                  Pending Approval
                </div>
                <div
                  onClick={() => setChildNodeType1("New")}
                  data-tabopen="tab3"
                  className={`tabbtn cursor-pointer ${childNodeType1 == "New" ? " bac-6 w-32 lg:w-48 py-[8px] text-center text-xs sm:text-base font-semibold text-white rounded-r-lg" : "tabbtn w-32 lg:w-48 py-1.5 text-xs sm:text-base text-center font-mormal color-3 border-2 border-r-1 rounded-r-lg"} `}
                >
                  Completed
                </div>
              </div>
            </div>
            {childNodeType1 == "Pending" ?
              <div id="tab1" className="tab mt-1 items-center">
                <Taxtable />
              </div>
              : childNodeType1 == "Approval" ?
                <div id="tab2" className="tab mt-1 items-center">
                  <div className="overflow-auto mb-5">
                    <AcceptedTable />
                  </div>
                </div>
                :
                <div id="tab3" className="tab mt-1 items-center">
                  <div className="overflow-auto mb-5">
                    <ApprovalTable />
                  </div>
                </div>
            }
          </div>
        }
      </div>
      <StatusChangeModal status_title={modal.status_title} message={modal.message} onFailure={toggleModal} onSuccess={campignParticipationAprrove} />
    </>
  );
};
export default Table;
