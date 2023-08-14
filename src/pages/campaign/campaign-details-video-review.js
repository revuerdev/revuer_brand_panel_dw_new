import profile from "../../assets/images/divya.svg";
import celendericon from "../../assets/images/done-fill.svg";
import uploadicon from "../../assets/images/video-image.svg";
import successModalImg2 from "../../assets/images/Rectangle 581.svg";
import successModalImg3 from "../../assets/images/Play button.svg";
import facebook from "../../assets/images/facebook-icon.svg";
import instagram from "../../assets/images/instagram-icon.svg";
import panding from "../../assets/images/panding-camping-icon.svg";
import send from "../../assets/images/send.svg";
import jan from "../../assets/images/mr-jan.svg";
import youimg from "../../assets/images/you-img.svg";
import emojiimg from "../../assets/images/emoji-icon-tying.svg";
import sendimg from "../../assets/images/send-icon-chat.svg";
import { Header, Sidebar } from "../../layouts";
import { toggleModal7, toggleModal8 } from "../../services/edit-modal"
import { InstagramReal, FacebookModal } from "../../components/Modal";
import { switchMainTabs, toggleSubnav, rotateMenuBtnIcon } from "../../services/switch-tab";
import { NavLink as Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import play_video from "../../assets/images/play_video.jpg";

import { useDispatch, useSelector } from 'react-redux'
import pandingimg from "../../assets/images/panding-rewis-icon.svg";
import closeimg from "../../assets/images/close-camping-icon.svg";
import orgningimg from "../../assets/images/orgnig-camping-icon.svg";
import { getVisualTaskDetails } from "../../context/actions/task"

import { toggleModal10 } from "../../services/edit-modal"
import { TaskApproveModal } from "../../components/Modal";
import { revuerTaskApproval } from "../../context/actions/task"

import { useForm } from "react-hook-form"
import moment from "moment";
import { feedbackMessageSubmit } from "../../context/actions/task"
import dropuserimg from "../../assets/images/User.svg"

function CampaignDetailsVideoReview() {


  const [modal, setModal] = useState({ video_link: 'Video Link' })
  const [buttonHide, setButtonHide] = useState()

  const pathname = window.location.pathname;
  const newpathname = pathname.split("/");
  const campaign_token = newpathname[3];
  const revuer_token = newpathname[4];
  var brandlogin_unique_token = localStorage.getItem("brandlogin_unique_token");

  const dispatch = useDispatch();
  let navigate = useNavigate();

  const visualTaskDetailsData = useSelector((state) => state.visualTaskListData);

  const visualTaskData = visualTaskDetailsData?.visualTaskDetails

  const revuerName = visualTaskDetailsData?.revuer_name
  const campaignName = visualTaskDetailsData?.campaignName
  const revuer_profile = visualTaskDetailsData?.revuer_profile
  const revuer_task_number = visualTaskDetailsData?.revuer_task_number
  const revuer_task_token = visualTaskDetailsData?.revuer_task_token
  const revuer_task_feedback = visualTaskDetailsData?.revuer_task_feedback

  const getFeedBackChats = visualTaskDetailsData?.getFeedBackChats

  const { register, handleSubmit, reset } = useForm()
  const [feedbackValidateError, setFeedbackValidateError] = useState('')

  const [remarkValidateError, setRemarkValidateError] = useState('')

  const feedBackMessage = (event) => {
    console.log("feedBackMessage : ", event)
    if (event.target.value.trim() == "") {
      setFeedbackValidateError("Feedback can not be blank")
      event.target.classList.add("error")
    } else if (event.target.value.length < 2) {
      setFeedbackValidateError("Feedback must consist of at least 2 characters")
      event.target.classList.add("error")
    } else {
      setFeedbackValidateError("")
      event.target.classList.remove("error")
    }
  }

  const submitFeedBackMessage = (event) => {
    var text_feedback = document.getElementById("text_feedback").value;
    if (text_feedback == "") {
      setFeedbackValidateError("Feedback can not be blank")
    } else if (text_feedback.length < 2) {
      setFeedbackValidateError("Feedback must consist of at least 2 characters")
    } else {
      setFeedbackValidateError("")
      dispatch(feedbackMessageSubmit({ campaign_token: campaign_token, brandlogin_unique_token: brandlogin_unique_token, revuer_token: revuer_token, text_feedback: text_feedback, cam_type: 3, setButtonHide }))
      document.getElementById("text_feedback").value = '';
    }
  }

  const submitFeedBackMessageMain = (event) => {
    var text_feedback = document.getElementById("text_feedback_main").value;
    if (text_feedback == "") {
      setFeedbackValidateError("Feedback can not be blank")
    } else if (text_feedback.length < 2) {
      setFeedbackValidateError("Feedback must consist of at least 2 characters")
    } else {
      setFeedbackValidateError("")
      dispatch(feedbackMessageSubmit({ campaign_token: campaign_token, brandlogin_unique_token: brandlogin_unique_token, revuer_token: revuer_token, text_feedback: text_feedback, cam_type: 3, setButtonHide }))
      document.getElementById("text_feedback_main").value = '';
    }
  }


  const submitTaskStatusChange = (taskAprrove) => {

    var status_title = ''
    var message = ''
    var approval_type = 0
    var remark_msg = document.getElementById("remark_msg").value;

    if (taskAprrove != 3) {
      if (remark_msg == "") {
        setRemarkValidateError("Please enter rejection reason.")
        document.getElementById("remark_msg").classList.add("error")
      } else {

        setRemarkValidateError("")
        document.getElementById("remark_msg").classList.remove("error")

        if (taskAprrove == 1) {
          status_title = 'Not Yet'
          message = "Are you sure you want to not yet task."
          approval_type = 2
        } else if (taskAprrove == 2) {
          status_title = 'Decline'
          message = "Are you sure you want to decline task."
          approval_type = 2
        } else {
          status_title = 'Approve'
          message = "Are you sure you want to approve task."
          approval_type = 1
        }
        toggleModal10(); setModal({ status_title: status_title, message: message, revuer_task_token: revuer_task_token, approval_type: approval_type, task_button_type: taskAprrove, remark_message: remark_msg })
      }
    } else {

      setRemarkValidateError("")
      document.getElementById("remark_msg").classList.remove("error")

      status_title = 'Approve'
      message = "Are you sure you want to approve task."
      approval_type = 1

      toggleModal10(); setModal({ status_title: status_title, message: message, revuer_task_token: revuer_task_token, approval_type: approval_type, task_button_type: taskAprrove, remark_message: remark_msg })
    }
  }

  useEffect(() => {
    switchMainTabs();
    dispatch(getVisualTaskDetails({ campaign_token: campaign_token, brandlogin_unique_token: brandlogin_unique_token, revuer_token: revuer_token }, navigate))
  }, [buttonHide]);


  const taskAprrove = () => {
    var revuer_task_token = modal.revuer_task_token
    var approval_type = modal.approval_type
    var task_button_type = modal.task_button_type
    var remark_message = modal.remark_message
    dispatch(revuerTaskApproval({ campaign_token: campaign_token, revuer_token: revuer_token, revuer_task_token: revuer_task_token, approval_type: approval_type, task_button_type: task_button_type, remark_message: remark_message, setButtonHide }, navigate))
    toggleModal10()
  }

  return (
    <>
      <section className="pl-0 md:pl-60 lg:pl-[15rem] lg:pt-0 md:pt-0 pt-20">
        <Header
          welcome="Campaign"
          extrab={campaignName ? 'Campaign / ' + campaignName + ' / Task Approval / ' : 'Campaign / -- / Task Approval / '}
          extra={revuerName ? revuerName : "--"}
        />

        <div className="px-5">
          <div className="bg-white box-shadow-1 rounded-lg px-4 pt-5 mb-8 pb-10 lg:pb-2">
            <ul id="tabs" className="inline-flex pt-2 px-6 w-full mb-2">
              <li className="bg-white text-gray-800 font-semibold py-1 rounded-t mr-2 sm:mr-2 border-b-2 border-[#FCB43C]">
                <a id="default-tab" href="#first">
                  Task
                </a>
              </li>
              <li className=" lg:px-4 text-sm lg:text-base color-3 py-1 rounded-t">
                <a href="#second">Feedback</a>
              </li>
            </ul>

            <div id="tab-contents">
              <div
                id="first"
                className="pt-2 text-xs sm:text-sm text-justify px-2 lg:px-6"
              >
                <div className="block lg:flex justify-between items-center mb-3 lg:mb-7 pb-0 lg:pb-4">
                  <div className="block sm:flex items-center mt-2">
                    <img
                      src={revuer_profile ? revuer_profile : dropuserimg}
                      alt="profile"
                      className={revuer_profile != "" ? "mr-4 w-11 h-11 border border-black rounded-full" : "mr-4 w-11 h-11 border border-black rounded-full bg-[#616161] p-2"}
                    />
                    <h6 className="mr-3 text-lg font-semibold">{revuerName ? revuerName : "--"}</h6>
                  </div>
                </div>

                <div className="pb-1">
                  <h5 className="text-lg font-semibold mb-5">
                    Visual/Video Review
                  </h5>

                  <div>

                    <div className="accordion" id="accordionExample">

                      {
                        visualTaskData ?
                          visualTaskData.map(
                            ((item, index) => {
                              return (
                                <>
                                  {
                                    item.campaign_task_number == 3 ?
                                      <>
                                        <div className="accordion-item ">
                                          <h2 className="accordion-header mb-0" id="headingTwo">
                                            <button className="
accordion-button
relative
flex
items-center
w-full
py-4
text-base text-gray-800 text-left
bg-white
border-0
rounded-none
transition
focus:outline-none
" type="button" ria-expanded="false">
                                              <h4 className="texe-sm sm:text-base mr-4 lg:mb-0 mb-0 sm:mb-2 w85 lable-color">
                                                <span className="font-semibold">Task 1: </span>Buy
                                              </h4>
                                              {item.revuer_task_status == "1" ?
                                                <>
                                                  <div className="flex items-center">
                                                    <img
                                                      src={orgningimg}
                                                      alt="orgningimg"
                                                      className="w-3 lg:w-5 mr-1"
                                                    />
                                                    <p className="text-xs lg:text-sm font-semibold text-pending">
                                                      Pending
                                                    </p>
                                                  </div>
                                                </>
                                                :
                                                item.revuer_task_status == "4" ?
                                                  <>
                                                    <div className="flex items-center">
                                                      <img
                                                        src={pandingimg}
                                                        alt="pandingimg"
                                                        className="w-3 lg:w-5 mr-1"
                                                      />
                                                      <p className="text-xs lg:text-sm font-semibold text-pending-app">
                                                        Pending Approval
                                                      </p>
                                                    </div>
                                                  </>
                                                  :
                                                  item.revuer_task_status == "2" ?
                                                    <>
                                                      <div className="flex items-center">
                                                        <img
                                                          src={celendericon}
                                                          alt="celendericon"
                                                          className="w-3 lg:w-5 mr-1"
                                                        />
                                                        <p className="text-xs lg:text-sm font-semibold text-[#2ECC71]">
                                                          Completed
                                                        </p>
                                                      </div>
                                                    </>
                                                    :
                                                    item.revuer_task_status == "3" ? item.task_button_type == 1 ?
                                                      <>
                                                        <div className="flex items-center">
                                                          <img
                                                            src={closeimg}
                                                            alt="closeimg"
                                                            className="w-3 lg:w-5 mr-1"
                                                          />
                                                          <p className="text-xs lg:text-sm font-semibold text-decline">
                                                            Not Yet
                                                          </p>
                                                        </div>
                                                      </> :

                                                      <>
                                                        <div className="flex items-center">
                                                          <img
                                                            src={closeimg}
                                                            alt="closeimg"
                                                            className="w-3 lg:w-5 mr-1"
                                                          />
                                                          <p className="text-xs lg:text-sm font-semibold text-decline">
                                                            Declined
                                                          </p>
                                                        </div>
                                                      </>

                                                      :
                                                      ""
                                              }
                                            </button>
                                          </h2>
                                          <div id="" className="" aria-labelledby="headingTwo56"
                                            data-bs-parent="#accordionExample">
                                            <div className="accordion-body py-4">
                                              <div className="break-all">
                                                <p className="w-11/12 text-justify text-sm mb-4">
                                                  {item.brand_camapign_details}
                                                </p>

                                                <div className="flex items-center mb-4">
                                                  <a className="font-medium color-2" target="_blank" href={item.brand_camapign_link}>{item.brand_camapign_link}</a>
                                                </div>

                                                <h5 className="text-base font-semibold">
                                                  Purchased Product Screenshot
                                                </h5>

                                                <div className="flex mb-2">
                                                  <div className="mr-10">
                                                    <a target="_blank" href={`${process.env.VIDEO_URL}/${item.image}`}><img className="w-20" src={`${process.env.VIDEO_URL}/${item.image}`} alt="uploadicon" /></a>
                                                  </div>
                                                </div>

                                                {
                                                  item.revuer_task_status == "3" ?
                                                    <h6 className="text-base">Rejection Reason : {item.remark_message}</h6>
                                                    :
                                                    ''
                                                }

                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </>
                                      :
                                      item.campaign_task_number == 4 ?
                                        <>
                                          <div className="accordion-item ">
                                            <h2 className="accordion-header mb-0" id="headingTwo">
                                              <button className="
accordion-button
relative
flex
items-center
w-full
py-4
text-base text-gray-800 text-left
bg-white
border-0
rounded-none
transition
focus:outline-none
" type="button" ria-expanded="false">
                                                <h4 className="texe-sm sm:text-base mr-4 lg:mb-0 mb-0 sm:mb-2 w85 lable-color">
                                                  <span className="font-semibold">
                                                    {item.task_visiable == "1" ? "Task 2:" : "Task 1:"}


                                                  </span>Review
                                                </h4>
                                                {item.revuer_task_status == "1" ?
                                                  <>
                                                    <div className="flex items-center">
                                                      <img
                                                        src={orgningimg}
                                                        alt="orgningimg"
                                                        className="w-3 lg:w-5 mr-1"
                                                      />
                                                      <p className="text-xs lg:text-sm font-semibold text-pending">
                                                        Pending
                                                      </p>
                                                    </div>
                                                  </>
                                                  :
                                                  item.revuer_task_status == "4" ?
                                                    <>
                                                      <div className="flex items-center">
                                                        <img
                                                          src={pandingimg}
                                                          alt="pandingimg"
                                                          className="w-3 lg:w-5 mr-1"
                                                        />
                                                        <p className="text-xs lg:text-sm font-semibold text-pending-app">
                                                          Pending Approval
                                                        </p>
                                                      </div>
                                                    </>
                                                    :
                                                    item.revuer_task_status == "2" ?
                                                      <>
                                                        <div className="flex items-center">
                                                          <img
                                                            src={celendericon}
                                                            alt="celendericon"
                                                            className="w-3 lg:w-5 mr-1"
                                                          />
                                                          <p className="text-xs lg:text-sm font-semibold text-[#2ECC71]">
                                                            Completed
                                                          </p>
                                                        </div>
                                                      </>
                                                      :
                                                      item.revuer_task_status == "3" ? item.task_button_type == 1 ?
                                                        <>
                                                          <div className="flex items-center">
                                                            <img
                                                              src={closeimg}
                                                              alt="closeimg"
                                                              className="w-3 lg:w-5 mr-1"
                                                            />
                                                            <p className="text-xs lg:text-sm font-semibold text-decline">
                                                              Not Yet
                                                            </p>
                                                          </div>
                                                        </> :

                                                        <>
                                                          <div className="flex items-center">
                                                            <img
                                                              src={closeimg}
                                                              alt="closeimg"
                                                              className="w-3 lg:w-5 mr-1"
                                                            />
                                                            <p className="text-xs lg:text-sm font-semibold text-decline">
                                                              Declined
                                                            </p>
                                                          </div>
                                                        </>

                                                        :
                                                        ""
                                                }
                                              </button>
                                            </h2>
                                            <div aria-labelledby="headingTwo"
                                              data-bs-parent="#accordionExample">
                                              <div className="accordion-body py-4">
                                                <div className="break-all">
                                                  <p className="w-11/12 text-justify text-sm mb-4">
                                                    {item.brand_camapign_details}
                                                  </p>


                                                  <h5 className="text-base font-semibold">
                                                    Review Screenshot
                                                  </h5>

                                                  <div className="flex mb-2">
                                                    <div className="mr-10 flex">

                                                      {item.image.split(",").map((image, iterator) => {
                                                        return (
                                                          <a target="_blank" href={`${process.env.VIDEO_URL}/${image}`}><img className="w-20 mr-5" src={`${process.env.VIDEO_URL}/${image}`} alt="uploadicon" /></a>
                                                        )
                                                      })}

                                                    </div>
                                                  </div>

                                                  <h6 className="text-base">Caption : {item.task_desc}</h6>

                                                  {
                                                    item.revuer_task_status == "3" ?
                                                      <h6 className="text-base">Rejection Reason : {item.remark_message}</h6>
                                                      :
                                                      ''
                                                  }

                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </>
                                        :
                                        item.campaign_task_number == 5 ?
                                          <>
                                            <div className="accordion-item ">
                                              <h2 className="accordion-header mb-0" id="headingTwo1">
                                                <button className="
accordion-button
relative
flex
items-center
w-full
py-4
text-base text-gray-800 text-left
bg-white
border-0
rounded-none
transition
focus:outline-none
" type="button" ria-expanded="false">
                                                  <h4 className="texe-sm sm:text-base mr-4 lg:mb-0 mb-0 sm:mb-2 w85 lable-color">
                                                    <span className="font-semibold">{item.task_visiable == "1" ? "Task 3:" : "Task 2:"}
                                                    </span> Script Approval
                                                  </h4>
                                                  {item.revuer_task_status == "1" ?
                                                    <>
                                                      <div className="flex items-center">
                                                        <img
                                                          src={orgningimg}
                                                          alt="orgningimg"
                                                          className="w-3 lg:w-5 mr-1"
                                                        />
                                                        <p className="text-xs lg:text-sm font-semibold text-pending">
                                                          Pending
                                                        </p>
                                                      </div>
                                                    </>
                                                    :
                                                    item.revuer_task_status == "4" ?
                                                      <>
                                                        <div className="flex items-center">
                                                          <img
                                                            src={pandingimg}
                                                            alt="pandingimg"
                                                            className="w-3 lg:w-5 mr-1"
                                                          />
                                                          <p className="text-xs lg:text-sm font-semibold text-pending-app">
                                                            Pending Approval
                                                          </p>
                                                        </div>
                                                      </>
                                                      :
                                                      item.revuer_task_status == "2" ?
                                                        <>
                                                          <div className="flex items-center">
                                                            <img
                                                              src={celendericon}
                                                              alt="celendericon"
                                                              className="w-3 lg:w-5 mr-1"
                                                            />
                                                            <p className="text-xs lg:text-sm font-semibold text-[#2ECC71]">
                                                              Completed
                                                            </p>
                                                          </div>
                                                        </>
                                                        :
                                                        item.revuer_task_status == "3" ? item.task_button_type == 1 ?
                                                          <>
                                                            <div className="flex items-center">
                                                              <img
                                                                src={closeimg}
                                                                alt="closeimg"
                                                                className="w-3 lg:w-5 mr-1"
                                                              />
                                                              <p className="text-xs lg:text-sm font-semibold text-decline">
                                                                Not Yet
                                                              </p>
                                                            </div>
                                                          </> :

                                                          <>
                                                            <div className="flex items-center">
                                                              <img
                                                                src={closeimg}
                                                                alt="closeimg"
                                                                className="w-3 lg:w-5 mr-1"
                                                              />
                                                              <p className="text-xs lg:text-sm font-semibold text-decline">
                                                                Declined
                                                              </p>
                                                            </div>
                                                          </>

                                                          :
                                                          ""
                                                  }


                                                </button>
                                              </h2>
                                              <div aria-labelledby="headingTwo1"
                                                data-bs-parent="#accordionExample">
                                                <div className="accordion-body py-4">
                                                  <div className="break-all">
                                                    <p className="w-11/12 text-justify text-sm mb-4">
                                                      {item.brand_camapign_details}
                                                    </p>
                                                    <h5 className="text-base font-semibold mb-5">
                                                      Submitted Tasks
                                                    </h5>
                                                    <p className="w-11/12 text-justify text-sm mb-4">
                                                      {item.task_desc}
                                                    </p>

                                                    {
                                                      item.revuer_task_status == "3" ?
                                                        <h6 className="text-base">Rejection Reason : {item.remark_message}</h6>
                                                        :
                                                        ''
                                                    }

                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </>
                                          :
                                          item.campaign_task_number == 6 ?
                                            <>
                                              <div className="accordion-item ">
                                                <h2 className="accordion-header mb-0" id="headingTwo1">
                                                  <button className="
accordion-button
relative
flex
items-center
w-full
py-4
text-base text-gray-800 text-left
bg-white
border-0
rounded-none
transition
focus:outline-none
" type="button" ria-expanded="false">
                                                    <h4 className="texe-sm sm:text-base mr-4 lg:mb-0 mb-0 sm:mb-2 w85 lable-color">
                                                      <span className="font-semibold">{item.task_visiable == "1" ? "Task 4:" : "Task 3:"}
                                                      </span> Draft Upload
                                                    </h4>
                                                    {item.revuer_task_status == "1" ?
                                                      <>
                                                        <div className="flex items-center">
                                                          <img
                                                            src={orgningimg}
                                                            alt="orgningimg"
                                                            className="w-3 lg:w-5 mr-1"
                                                          />
                                                          <p className="text-xs lg:text-sm font-semibold text-pending">
                                                            Pending
                                                          </p>
                                                        </div>
                                                      </>
                                                      :
                                                      item.revuer_task_status == "4" ?
                                                        <>
                                                          <div className="flex items-center">
                                                            <img
                                                              src={pandingimg}
                                                              alt="pandingimg"
                                                              className="w-3 lg:w-5 mr-1"
                                                            />
                                                            <p className="text-xs lg:text-sm font-semibold text-pending-app">
                                                              Pending Approval
                                                            </p>
                                                          </div>
                                                        </>
                                                        :
                                                        item.revuer_task_status == "2" ?
                                                          <>
                                                            <div className="flex items-center">
                                                              <img
                                                                src={celendericon}
                                                                alt="celendericon"
                                                                className="w-3 lg:w-5 mr-1"
                                                              />
                                                              <p className="text-xs lg:text-sm font-semibold text-[#2ECC71]">
                                                                Completed
                                                              </p>
                                                            </div>
                                                          </>
                                                          :
                                                          item.revuer_task_status == "3" ? item.task_button_type == 1 ?
                                                            <>
                                                              <div className="flex items-center">
                                                                <img
                                                                  src={closeimg}
                                                                  alt="closeimg"
                                                                  className="w-3 lg:w-5 mr-1"
                                                                />
                                                                <p className="text-xs lg:text-sm font-semibold text-decline">
                                                                  Not Yet
                                                                </p>
                                                              </div>
                                                            </> :

                                                            <>
                                                              <div className="flex items-center">
                                                                <img
                                                                  src={closeimg}
                                                                  alt="closeimg"
                                                                  className="w-3 lg:w-5 mr-1"
                                                                />
                                                                <p className="text-xs lg:text-sm font-semibold text-decline">
                                                                  Declined
                                                                </p>
                                                              </div>
                                                            </>

                                                            :
                                                            ""
                                                    }
                                                  </button>
                                                </h2>
                                                <div aria-labelledby="headingTwo2"
                                                  data-bs-parent="#accordionExample">
                                                  <div className="accordion-body py-4">
                                                    <div className="break-all">


                                                      <p className="w-11/12 text-justify text-sm mb-4">
                                                        {item.brand_camapign_details}
                                                      </p>

                                                      <h5 className="text-base font-semibold mb-5">
                                                        Submitted Tasks
                                                      </h5>

                                                      <div className="flex mb-8">

                                                        {
                                                          item.social_icon == "1" ?
                                                            <>
                                                              <div className="relative">
                                                                <img
                                                                  src={play_video}
                                                                  alt="successModalImg2"
                                                                  className="w-[90px] h-[80px] rounded object-cover"
                                                                />
                                                                <div className="absolute top-6 right-5 bg-white rounded-full p-1 pointer"

                                                                  onClick={() => { toggleModal7(process.env.VIDEO_URL + '/' + item.task_video); setModal({ video_link: item.task_video }) }}

                                                                >
                                                                  <img
                                                                    src={successModalImg3}
                                                                    alt="successModalImg3"
                                                                    className="w-6"
                                                                  />
                                                                </div>
                                                              </div>
                                                            </>
                                                            :
                                                            item.social_icon == "2"
                                                              ?
                                                              <>
                                                                <div className="mr-10 relative">
                                                                  <img src={play_video} alt="uploadicon" className="w-[90px] h-[80px] rounded object-cover" />

                                                                  <div className="absolute top-6 right-5 bg-white rounded-full p-1"
                                                                    onClick={() => { toggleModal7(process.env.VIDEO_URL + '/' + item.task_video); setModal({ video_link: item.task_video }) }}
                                                                  >
                                                                    <img
                                                                      src={successModalImg3}
                                                                      alt="successModalImg3"
                                                                      className="w-6"
                                                                    />
                                                                  </div>
                                                                </div>
                                                              </>
                                                              :
                                                              <>
                                                                <div className="mr-10 relative">
                                                                  <img src={play_video} alt="uploadicon" className="w-[90px] h-[80px] rounded object-cover" />

                                                                  <div className="absolute top-6 right-5 bg-white rounded-full p-1"

                                                                    onClick={() => { toggleModal7(process.env.VIDEO_URL + '/' + item.task_video); setModal({ video_link: item.task_video }) }}

                                                                  >
                                                                    <img
                                                                      src={successModalImg3}
                                                                      alt="successModalImg3"
                                                                      className="w-6"
                                                                    />
                                                                  </div>
                                                                </div>
                                                              </>
                                                        }

                                                      </div>

                                                      {
                                                        item.revuer_task_status == "3" ?
                                                          <h6 className="text-base">Rejection Reason : {item.remark_message}</h6>
                                                          :
                                                          ''
                                                      }
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </>
                                            :
                                            item.campaign_task_number == 7 ?
                                              <>
                                                <li className="menu__item w-full list-none ">

                                                  <div className="accordion" id="accordionExample-2">
                                                    <div className="accordion-item bg-white">
                                                      <h2 className="accordion-header mb-0" id="headingOne">
                                                        <button
                                                          className="
accordion-button
aroow-className 
relative
flex
items-center
w-full
py-4
text-base text-gray-800 text-left
bg-white
border-5
rounded-none
transition
focus:outline-none
"
                                                          type="button"
                                                        >
                                                          <h4 className="texe-sm sm:text-base mr-4 lg:mb-0 mb-0 sm:mb-2 w85 lable-color">
                                                            <span className="font-semibold">{item.task_visiable == "1" ? "Task 3:" : "Task 4:"}
                                                            </span> Publish Upon Approval
                                                          </h4>
                                                          {item.revuer_task_status == "1" ?
                                                            <>
                                                              <div className="flex items-center">
                                                                <img
                                                                  src={orgningimg}
                                                                  alt="orgningimg"
                                                                  className="w-3 lg:w-5 mr-1"
                                                                />
                                                                <p className="text-xs lg:text-sm font-semibold text-pending">
                                                                  Pending
                                                                </p>
                                                              </div>
                                                            </>
                                                            :
                                                            item.revuer_task_status == "4" ?
                                                              <>
                                                                <div className="flex items-center">
                                                                  <img
                                                                    src={pandingimg}
                                                                    alt="pandingimg"
                                                                    className="w-3 lg:w-5 mr-1"
                                                                  />
                                                                  <p className="text-xs lg:text-sm font-semibold text-pending-app">
                                                                    Pending Approval
                                                                  </p>
                                                                </div>
                                                              </>
                                                              :
                                                              item.revuer_task_status == "2" ?
                                                                <>
                                                                  <div className="flex items-center">
                                                                    <img
                                                                      src={celendericon}
                                                                      alt="celendericon"
                                                                      className="w-3 lg:w-5 mr-1"
                                                                    />
                                                                    <p className="text-xs lg:text-sm font-semibold text-[#2ECC71]">
                                                                      Completed
                                                                    </p>
                                                                  </div>
                                                                </>
                                                                :
                                                                item.revuer_task_status == "3" ? item.task_button_type == 1 ?
                                                                  <>
                                                                    <div className="flex items-center">
                                                                      <img
                                                                        src={closeimg}
                                                                        alt="closeimg"
                                                                        className="w-3 lg:w-5 mr-1"
                                                                      />
                                                                      <p className="text-xs lg:text-sm font-semibold text-decline">
                                                                        Not Yet
                                                                      </p>
                                                                    </div>
                                                                  </> :

                                                                  <>
                                                                    <div className="flex items-center">
                                                                      <img
                                                                        src={closeimg}
                                                                        alt="closeimg"
                                                                        className="w-3 lg:w-5 mr-1"
                                                                      />
                                                                      <p className="text-xs lg:text-sm font-semibold text-decline">
                                                                        Declined
                                                                      </p>
                                                                    </div>
                                                                  </>

                                                                  :
                                                                  ""
                                                          }
                                                        </button>
                                                      </h2>
                                                      <div
                                                        aria-labelledby="headingOne"
                                                        data-bs-parent="#accordionExample-2"
                                                      >
                                                        <div className="accordion-body py-4">
                                                          <div className="break-all">
                                                            <p className="w-11/12 text-justify text-sm mb-4">
                                                              {item.brand_camapign_details}
                                                            </p>

                                                            <h5 className="text-base font-semibold mb-5">
                                                              Submitted Tasks
                                                            </h5>



                                                            <div className="flex items-center mb-4">
                                                              <a className="font-medium color-2" target="_blank" href={item.task_desc}>{item.task_desc}</a>
                                                            </div>

                                                            <div className="flex mb-2">
                                                              <div className="mr-10">
                                                                <a target="_blank" href={`${process.env.VIDEO_URL}/${item.image}`}><img className="w-20" src={`${process.env.VIDEO_URL}/${item.image}`} alt="uploadicon" /></a>
                                                              </div>
                                                            </div>

                                                            {
                                                              item.revuer_task_status == "3" ?
                                                                <h6 className="text-base">Rejection Reason : {item.remark_message}</h6>
                                                                :
                                                                ''
                                                            }

                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </li>
                                              </>
                                              :
                                              ""
                                  }
                                </>
                              )
                            })
                          )
                          : ""
                      }

                    </div>

                  </div>

                </div>

                {
                  revuer_task_number == 1 ?
                    <>
                      <div className="mt-6">
                        <label className="lable-color text-sm tracking-wide font-semibold">
                          Rejection Reason
                        </label>
                        <div className="block lg:flex mt-2 mb-4 items-center">

                          <div className="w-full lg:w-9/12 width-50 mr-5 mb-5 lg:mb-0">
                            <div className="block relative">
                              <input
                                type="text"
                                id="remark_msg"
                                name="remark_msg"
                                {...register("remark_msg")}
                                placeholder="Type here"
                                required=""
                                className="h-12 px-5 rounded-lg border border-[#95A5A6] bg-white w-full text-sm focus:outline-none"
                              />
                              <div className="absolute top-4 right-5">
                                <img src={send} alt="send" className="w-5" />
                              </div>
                              {remarkValidateError && <label className="error">{remarkValidateError}</label>}
                            </div>
                          </div>


                          <div className="w-full lg:w-4/12  flex justify-between mb-5 lg:mb-0">

                            <button className="border-2 text-xs color-3 px-3 mr-3 lg:px-6 py-2 rounded uppercase" onClick={(event) => submitTaskStatusChange(1)} >
                              not yet
                            </button>

                            <button className="text-xs text-white bac-3 px-3 mr-3 lg:px-6 py-2 rounded uppercase" onClick={(event) => submitTaskStatusChange(2)} >
                              decline
                            </button>


                            <button className="text-xs text-white bac-6 px-3 mr-3 lg:px-6 py-2 rounded uppercase" onClick={(event) => submitTaskStatusChange(3)} >
                              approve
                            </button>

                          </div>
                        </div>
                      </div>

                    </> : ''
                }


              </div>

              <div
                id="second"
                className="hidden pt-6 text-xs sm:text-sm text-justify px-2 sm:px-6"
              >
                {
                  getFeedBackChats ?
                    getFeedBackChats.map(
                      ((item, index) => {
                        return (
                          <>
                            {
                              item.type == "2" ?
                                <>
                                  <div className="mb-8">
                                    <div className="flex items-center mt-2 mb-2">
                                      <img
                                        src={revuer_profile ? revuer_profile : dropuserimg}
                                        alt="profile"
                                        className={revuer_profile != "" ? "mr-4 w-11 h-11 border border-black rounded-full" : "mr-4 w-[30px] h-[30px] border border-black rounded-full bg-[#616161] p-1"}
                                      />
                                      <h6 className="mr-2 text-sm font-semibold">{revuerName ? revuerName : "--"}</h6>
                                      <h5 className="color-3 text-xs font-medium">{moment(item.createdAt).format("L")}</h5>
                                    </div>
                                    <div className="border w-full md:w-6/12 lg:w-3/12 lg-5 px-6 text-base border-chat py-2.5 ml-4">
                                      {item.message}
                                    </div>
                                  </div>
                                </>
                                :

                                item.admin_type == "1" ?
                                  <>
                                    <div className="mb-8">
                                      <div className="flex items-center mt-2 mb-2">
                                        <img
                                          src={`${process.env.REVUER_IMAGE_URL}/${revuer_profile ? revuer_profile : ''}`}
                                          alt="Revuer"
                                          className="mr-3 w-7 h-7 border border-black rounded-full"
                                        />
                                        <h6 className="mr-2 text-sm font-semibold">Admin</h6>
                                        <h5 className="color-3 text-xs font-medium">{moment(item.createdAt).format("L")}</h5>
                                      </div>
                                      <div className="border w-full md:w-6/12 lg:w-3/12 lg-5 px-6 text-base border-chat py-2.5 ml-4">
                                        {item.message}
                                      </div>
                                    </div>
                                  </>
                                  :
                                  <>
                                    <div className="flex justify-end">
                                      <div>
                                        <div className="justify-end flex items-center mt-2 mb-2">
                                          <h6 className="mr-2 text-sm font-semibold">You</h6>
                                          <h5 className="color-3 text-xs mr-2 font-medium">{moment(item.createdAt).format("L")}</h5>
                                          <img
                                            src={`${process.env.BRANDS_IMAGE_URL}/${item.user_profile ? item.user_profile : ''}`}
                                            alt="Brand"
                                            className="w-7 h-7 border border-black rounded-full"
                                          />
                                        </div>
                                        <div className="bac-6 text-white px-6 text-base border-chat-1 py-2.5 mr-4">
                                          {item.message}
                                        </div>
                                      </div>
                                    </div>
                                  </>


                            }
                          </>
                        )
                      })
                    )
                    : ""
                }

                <div className="flex justify-between items-center mt35">
                  <div className="mr-3 w-full relative">
                    <textarea
                      className="flex-grow py-2.5 pl-10 px-4 w-full mr-1 rounded-lg border border-gray-300 resize-none focus:outline-none"
                      rows="1"
                      placeholder="Start typing..."
                      id="text_feedback_main"
                      name="text_feedback_main"
                      {...register("text_feedback_main")}
                      onKeyUp={(event) => feedBackMessage(event)}
                      style={{ outline: "none" }}
                    ></textarea>
                    <img
                      src={emojiimg}
                      alt="emojiimg"
                      className="absolute top-3 w-5 right-2"
                    />
                    <h5 className="absolute top-[6px] w-5 left-4 text-lg font-bold lable-color">
                      @
                    </h5>
                    {feedbackValidateError && <label className="error">{feedbackValidateError}</label>}
                  </div>

                  <div className="bac-6 px-4 rounded-lg py-2.5 mb-2">
                    <img src={sendimg} alt="sendimg" className="w-6" onClick={(event) => submitFeedBackMessageMain(event)} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Sidebar title="Campaigns" />

      <InstagramReal reeldata={{ revuerName, dropuserimg, revuer_profile }} />
      <FacebookModal />
      <TaskApproveModal status_title={modal.status_title} message={modal.message} onFailure={toggleModal10} onSuccess={taskAprrove} />
    </>
  );
}
export default CampaignDetailsVideoReview;
