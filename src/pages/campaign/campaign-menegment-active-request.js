import { Header, Sidebar } from "../../layouts";
import siranimg from "../../assets/images/pandind-aprove-page-heding-icon.svg";
import celendericon from "../../assets/images/calendar-2-color-task.svg";
import uploadicon from "../../assets/images/calendar-2.svg";
import successModalImg2 from "../../assets/images/request-page-image.png";
import usericon from "../../assets/images/group-chat 1 (Traced).png";
import useresicon from "../../assets/images/group-chat 2 (Traced).svg";
import facebook from "../../assets/images/facebook-icon.svg";
import instagram from "../../assets/images/instagram-icon.svg";
import twitter from "../../assets/images/twitter-icon.svg";
import youtube from "../../assets/images/youtube-icon.svg";
import pinterest from "../../assets/images/pinterest-icon.svg";
import linkedin from "../../assets/images/linkedin-icon.svg";
import doneicon from "../../assets/images/check-mark 1 (Traced).svg";
import male from "../../assets/images/details-page-male-color.svg";
import { useEffect, useState } from "react";
import Table from "../../components/Table";
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";

import { getDisplayCampaignDetails } from "../../context/actions/campaign"


function CampaignMenegmentActiveRequest() {
  const [tabs, setTabs] = useState({
    parentNode: "Participation",
    childNode: "Pending",
  });

  const [hoverDetails, setHoverDetails] = useState(false);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const pathname = window.location.pathname;
  const campaign_token = pathname.substring(pathname.lastIndexOf('/') + 1);
  var brandlogin_unique_token = localStorage.getItem("brandlogin_unique_token");

  const compaignDetailsData = useSelector((state) => state.taskDetailsCampaignData);
  var mainCampaignDetails = compaignDetailsData.campaignDetails
  var getCampaignTaskData = compaignDetailsData.getCampaignTaskData

  useEffect(() => {
    dispatch(getDisplayCampaignDetails({ campaign_token: campaign_token, brandlogin_unique_token: brandlogin_unique_token }, navigate))
  }, []);

  return (
    <>
      <section className="pl-0 md:pl-60 lg:pl-[15rem] lg:pt-0 md:pt-0 pt-20">
        <Header
          welcome="Campaign"
          extrab={`${mainCampaignDetails ? mainCampaignDetails[0].campaign_name : ''} /`}
          extra=" Participation Approval"
        />

        <div className="px-5">
          <div className="bg-white box-shadow-1 rounded-2xl px-0 lg:px-8  pt-3 mb-8">
            <div className="flex mt-8 items-center mb-4">
              <h6 className="text text-xl font-semibold mr-3 ml-6 font-12">
                {
                  mainCampaignDetails ? mainCampaignDetails[0].campaign_name : ''
                }
              </h6>
              <img
                src={siranimg}
                alt="siranimg"
                className="w-5 cursor-pointer"
                onClick={() => setHoverDetails(!hoverDetails)}
              />
            </div>
            {hoverDetails ? (
              <div>
                <div className="box-shadow-1 rounded-2xl pt-2 mt-7 lg:pt-8  mb-8 relative">
                  <div className="w-16 overflow-hidden inline-block absolute -top-8 left-[11.5rem]">
                    <div className="h-8 w-8 bg-white box-shadow-1 rotate-45 transform origin-bottom-left"></div>
                  </div>
                  <div className="mb-2 px-8">
                    <div className="md:block lg:flex block">
                      <div className="flex-initial w-full md:full lg:w-8/12 bac-1 py-5 pr-4 md:py-5 lg:py-0 mr-4 mb-0 md:mb-2 lg:mb-2">
                        <h2 className="color-3 text-sm mb-2">Campaign Name</h2>
                        <h5 className="text-base font-medium mb-4">
                          {
                            mainCampaignDetails ? mainCampaignDetails[0].campaign_name : ''
                          }
                        </h5>

                        <h2 className="color-3 text-sm  font-medium mb-2">
                          Campaign Overview
                        </h2>
                        <h5 className="text-sm font-medium mb-4 text-justify">
                          {
                            mainCampaignDetails ? mainCampaignDetails[0].campaign_obj : ''
                          }
                        </h5>

                        <div className="block lg:flex justify-between mb-2">
                          <div className="mb-4 lg:mb-0">
                            <div>
                              <h3 className="mb-1 text-sm color-3">
                                Start Date
                              </h3>
                            </div>
                            <div className="flex">
                              <img
                                src={celendericon}
                                alt="celendericon"
                                className="w-4 mr-2"
                              />
                              <h3 className="text-sm font-semibold lable-color">
                                {
                                  mainCampaignDetails ? mainCampaignDetails[0].start_date : ''
                                }
                              </h3>
                            </div>
                          </div>

                          <div className="mb-4 lg:mb-0">
                            <div>
                              <h3 className="mb-1 text-sm color-3">End Date</h3>
                            </div>
                            <div className="flex">
                              <img
                                src={uploadicon}
                                alt="uploadicon"
                                className="w-4 mr-2"
                              />
                              <h3 className="text-sm font-semibold lable-color">
                                {
                                  mainCampaignDetails ? mainCampaignDetails[0].last_date : ''
                                }
                              </h3>
                            </div>
                          </div>

                          <div className="mb-4 lg:mb-0">
                            <div>
                              <h3 className="mb-1 text-sm color-3">
                                Campaign Type
                              </h3>
                            </div>
                            <div className="flex">
                              <img
                                src={male} alt="male"
                                className="w-4 mr-3"
                              />
                              <h3 className="text-sm font-semibold lable-color">
                                {
                                  mainCampaignDetails ? mainCampaignDetails[0].campaign_type_name : ''
                                }
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex-initial w-full md:full lg:w-4/12 ">
                        <h2 className="color-3 text-sm mb-2">Cover Image</h2>
                        <img
                          src={`${process.env.CAMPAIGN_IMAGE_URL}/${mainCampaignDetails ? mainCampaignDetails[0].image : ''}`}
                          alt="successModalImg2"
                          className="w-full h-[212px] object-cover rounded-3xl"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mb-4 px-8 pb-5 sm:pb-0">
                    <hr className="mb-10 px-5" />

                    <h5 className="text-2xl font-semibold mb-1 lg:mb-2">
                      Task
                    </h5>


                    {
                      mainCampaignDetails ? mainCampaignDetails[0].cam_type == 7 ?
                        getCampaignTaskData.map((item, index) => {
                          return (
                            <>
                              {
                                item.task_number == 15
                                  ?
                                  <>
                                    <div className="md:block lg:flex block">
                                      <div className="flex-initial w-full md:full lg:w-10/12 bac-1 py-2 lg:py-5 pr-4 md:py-2 mr-2 mb-0 md:mb-2 lg:mb-2">
                                        <div className="md:block lg:flex block">
                                          <div className="flex-initial w-full md:full lg:w-7/12 bac-1 py-1  pr-4 md:py-1 lg:py-0 mr-2 mb-0 md:mb-2 lg:mb-2">
                                            <h3 className="color-3 text-sm font-normal mb-2">
                                              Task 1
                                            </h3>
                                            <h5 className="text-base font-medium">
                                              Buy
                                            </h5>
                                          </div>

                                          <div className="flex-initial w-full md:full lg:w-5/12 bac-1 py-5 pr-4 md:py-1 lg:py-0 mr-2 mb-0 md:mb-2 lg:mb-2">
                                            <h3 className="color-3 text-sm font-normal mb-2">
                                              Product Link
                                            </h3>
                                            <h5 className="text-base font-medium font-8">
                                              <a href={item.link} target="_blank">{item.link}</a>
                                            </h5>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="mb-6">
                                      <h5 className="color-3 text-sm mb-2">Product Details</h5>
                                      <h3 className="text-base font-medium text-justify sm:w-10/12">
                                        {item.details}
                                      </h3>
                                    </div>
                                    <div className="mb-6">
                                      <h5 className="color-3 text-sm mb-2">Ask revuer to upload a product images.</h5>
                                      <h3 className="text-base font-medium text-justify sm:w-10/12">
                                        {item.screen_shot == 1 ? "YES" : "NO"}
                                      </h3>
                                    </div>
                                    <hr />
                                  </>
                                  :
                                  item.task_number == 16
                                    ?
                                    <>
                                      <div className="md:block lg:flex block">
                                        <div className="flex-initial w-full md:full lg:w-10/12 bac-1 py-2 lg:py-5 pr-4 md:py-2 mr-2 mb-0 md:mb-2 lg:mb-2">
                                          <div className="md:block lg:flex block">
                                            <div className="flex-initial w-full md:full lg:w-7/12 bac-1 py-1  pr-4 md:py-1 lg:py-0 mr-2 mb-0 md:mb-2 lg:mb-2">
                                              <h3 className="color-3 text-sm font-normal mb-2">
                                                Task 2
                                              </h3>
                                              <h5 className="text-base font-medium">
                                                Review
                                              </h5>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="mb-6">
                                        <h5 className="color-3 text-sm mb-2">Review Details</h5>
                                        <h3 className="text-base font-medium text-justify sm:w-10/12">
                                          {item.details}
                                        </h3>
                                      </div>
                                      <div className="mb-6">
                                        <h5 className="color-3 text-sm mb-2">Ask revuer to upload a product images.</h5>
                                        <h3 className="text-base font-medium text-justify sm:w-10/12">
                                          {item.screen_shot == 1 ? "YES" : "NO"}
                                        </h3>
                                      </div>
                                      <hr />
                                    </>
                                    :
                                    item.task_number == 17
                                      ?
                                      <>
                                        <div className="md:block lg:flex block">
                                          <div className="flex-initial w-full md:full lg:w-10/12 bac-1 py-2 lg:py-5 pr-4 md:py-2 mr-2 mb-0 md:mb-2 lg:mb-2">
                                            <div className="md:block lg:flex block">
                                              <div className="flex-initial w-full md:full lg:w-7/12 bac-1 py-1  pr-4 md:py-1 lg:py-0 mr-2 mb-0 md:mb-2 lg:mb-2">
                                                <h3 className="color-3 text-sm font-normal mb-2">
                                                  {
                                                    mainCampaignDetails ? mainCampaignDetails[0].task_visiable == 1 ? "Task 3" : "Task 1" : ''
                                                  }
                                                </h3>
                                                <h5 className="text-base font-medium">
                                                  Script Approval
                                                </h5>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="mb-6">
                                          <h5 className="color-3 text-sm mb-2">Script Details</h5>
                                          <h3 className="text-base font-medium text-justify sm:w-10/12">
                                            {item.details}
                                          </h3>
                                        </div>
                                        <hr />
                                      </>
                                      :
                                      item.task_number == 18
                                        ?
                                        <>
                                          <div className="md:block lg:flex block">
                                            <div className="flex-initial w-full md:full lg:w-10/12 bac-1 py-2 lg:py-5 pr-4 md:py-2 mr-2 mb-0 md:mb-2 lg:mb-2">
                                              <div className="md:block lg:flex block">
                                                <div className="flex-initial w-full md:full lg:w-7/12 bac-1 py-1  pr-4 md:py-1 lg:py-0 mr-2 mb-0 md:mb-2 lg:mb-2">
                                                  <h3 className="color-3 text-sm font-normal mb-2">
                                                    {
                                                      mainCampaignDetails ? mainCampaignDetails[0].task_visiable == 1 ? "Task 4" : "Task 2" : ''
                                                    }
                                                  </h3>
                                                  <h5 className="text-base font-medium">
                                                    Draft Upload
                                                  </h5>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="mb-6">
                                            <h5 className="color-3 text-sm mb-2">Draft upload Details</h5>
                                            <h3 className="text-base font-medium text-justify sm:w-10/12">
                                              {item.details}
                                            </h3>
                                          </div>
                                          <div className="mb-6">
                                            <h5 className="color-3 text-sm mb-2">Ask revuer to upload a video.</h5>
                                            <h3 className="text-base font-medium text-justify sm:w-10/12">
                                              {item.screen_shot == 1 ? "YES" : "NO"}
                                            </h3>
                                          </div>
                                          <hr />
                                        </>
                                        :
                                        item.task_number == 19
                                          ?
                                          <>
                                            <div className="md:block lg:flex block">
                                              <div className="flex-initial w-full md:full lg:w-10/12 bac-1 py-2 lg:py-5 pr-4 md:py-2 mr-2 mb-0 md:mb-2 lg:mb-2">
                                                <div className="md:block lg:flex block">
                                                  <div className="flex-initial w-full md:full lg:w-7/12 bac-1 py-1  pr-4 md:py-1 lg:py-0 mr-2 mb-0 md:mb-2 lg:mb-2">
                                                    <h3 className="color-3 text-sm font-normal mb-2">
                                                      {
                                                        mainCampaignDetails ? mainCampaignDetails[0].task_visiable == 1 ? "Task 5" : "Task 3" : ''
                                                      }
                                                    </h3>
                                                    <h5 className="text-base font-medium">
                                                      Publish upon Approval
                                                    </h5>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="mb-6">
                                              <h5 className="color-3 text-sm mb-2">Publish Details</h5>
                                              <h3 className="text-base font-medium text-justify sm:w-10/12">
                                                {item.details}
                                              </h3>
                                            </div>
                                            <div className="mb-6">
                                              <h5 className="color-3 text-sm mb-2">Video Duration</h5>
                                              <h3 className="text-base font-medium text-justify sm:w-10/12">
                                                {item.video_duration}
                                              </h3>
                                            </div>
                                            <div className="mb-6">
                                              <h5 className="color-3 text-sm mb-2">Ask revuer to submit a published video.</h5>
                                              <h3 className="text-base font-medium text-justify sm:w-10/12">
                                                {item.screen_shot == 1 ? "YES" : "NO"}
                                              </h3>
                                            </div>
                                            <hr />
                                          </>
                                          :
                                          ''
                              }
                            </>
                          )
                        })
                        : ''
                        : ''

                    }


                    <hr />

                    <h5 className="text-2xl font-semibold mb-4 mt-6">Other</h5>

                    <div className="md:block lg:flex block mb-8">
                      <div className="flex-initial w-full md:full lg:w-6/12 bac-1 py-2  pr-4 md:py-5 lg:py-0 mr-2 mb-0 md:mb-2 lg:mb-2">
                        <h3 className="color-3 text-sm font-normal mb-2">
                          Do’s
                        </h3>
                        <h5 className="text-base font-medium text-justify">
                          {
                            mainCampaignDetails ?
                              mainCampaignDetails[0].dos.map((item, index) => {
                                return (
                                  <>
                                    {item}<br />
                                  </>
                                )
                              })
                              :
                              "No dos available"
                          }
                        </h5>
                      </div>

                      <div className="flex-initial w-full md:full lg:w-6/12 bac-1 py-2  pr-4 md:py-5 lg:py-0 mb-0 md:mb-2 lg:mb-2">
                        <h3 className="color-3 text-sm font-normal mb-2">
                          Dont’s
                        </h3>
                        <h5 className="text-base font-medium text-justify">
                          {
                            mainCampaignDetails ?
                              mainCampaignDetails[0].donts.map((item, index) => {
                                return (
                                  <>
                                    {item}<br />
                                  </>
                                )
                              })
                              :
                              "No dont's available"
                          }
                        </h5>
                      </div>
                    </div>

                    <hr />

                    <div className="md:block lg:flex block mb-5 mt-4">
                      <div className="flex-initial w-full md:full lg:w-7/12 bac-1 py-5 pr-4 md:py-1 lg:py-0 mr-2 mb-0 md:mb-2 lg:mb-2">
                        <div className="md:block lg:flex block mb-4">
                          <div className="flex-initial w-full md:full lg:w-4/12 bac-1 py-3 px-1 lg:px-4 md:py-1 lg:py-0 mr-2 mb-0 md:mb-2 lg:mb-2 border-r-1 lg:border-r my-3">
                            <h5 className="text-lg font-semibold mb-5">
                              Campaign Budget
                            </h5>
                            <h3 className="color-3 text-sm font-normal mb-2">
                              Campaign Budget
                            </h3>
                            <h5 className="text-lg font-medium text-justify">
                              ₹{
                                mainCampaignDetails ? mainCampaignDetails[0].budget : ''
                              }
                            </h5>
                          </div>

                          <div className="flex-initial w-full md:full lg:w-8/12 bac-1 py-3 px-1 lg:px-7 md:py-1 lg:py-0 mr-2 mb-0 md:mb-2 lg:mb-2 border-r-1 lg:border-r my-3">
                            <div>
                              <h6 className="text-lg font-semibold mb-5">
                                Campaign Duration & Revuer Limit
                              </h6>

                              <div className="flex justify-between items-center">
                                <div>
                                  <h3 className="color-3 text-sm font-normal mb-2">
                                    Campaign Duration
                                  </h3>
                                  <div className="flex items-center">
                                    <img
                                      src={usericon}
                                      alt="usericon"
                                      className="w-3 h-4 mr-2"
                                    />
                                    <h4 className="text-base font-medium">
                                      20 Days
                                    </h4>
                                  </div>
                                </div>
                                <div>
                                  <h3 className="color-3 text-sm font-normal mb-2">
                                    Revuers Limit
                                  </h3>
                                  <div className="flex items-center">
                                    <img
                                      src={useresicon}
                                      alt="useresicon"
                                      className="w-5 mr-2"
                                    />
                                    <h4 className="text-base font-medium">
                                      {
                                        mainCampaignDetails ? mainCampaignDetails[0].revuer_limit_count : ''
                                      }
                                    </h4>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex-initial w-full md:full lg:w-5/12 bac-1 py-0  pr-4 md:py-1 lg:py-0 mr-2 mb-0 md:mb-2 lg:mb-2">
                        <div className="md:block lg:flex block mb-4">
                          <div className="flex-initial w-full md:full lg:w-6/12 bac-1 pr-4 md:py-1 lg:py-3 mr-2 mb-0 md:mb-2 lg:mb-2 px-2 border-r-1 lg:border-r lg:h-28">
                            <h5 className="text-lg font-semibold mb-5">
                              Social Platform
                            </h5>

                            <div className="flex">

                              {
                                mainCampaignDetails
                                  ?
                                  mainCampaignDetails[0].social_icon == "1"
                                    ?
                                    <>
                                      <img
                                        src={facebook}
                                        alt="facebook"
                                        className="w-9 mr-5"
                                      />
                                    </>
                                    :
                                    mainCampaignDetails[0].social_icon == "2" ?
                                      <>
                                        <img
                                          src={instagram}
                                          alt="instagram"
                                          className="w-9 mr-5"
                                        />
                                      </>
                                      :
                                      mainCampaignDetails[0].social_icon == "3" ?
                                        <>
                                          <img
                                            src={twitter}
                                            alt="twitter"
                                            className="w-9 mr-5"
                                          />
                                        </>
                                        :
                                        mainCampaignDetails[0].social_icon == "4" ?
                                          <>
                                            <img
                                              src={youtube}
                                              alt="youtube"
                                              className="w-9 mr-5"
                                            />
                                          </>
                                          :
                                          mainCampaignDetails[0].social_icon == "5" ?
                                            <>
                                              <img
                                                src={pinterest}
                                                alt="pinterest"
                                                className="w-9 mr-5"
                                              />
                                            </>
                                            :
                                            mainCampaignDetails[0].social_icon == "6" ?
                                              <>
                                                <img
                                                  src={linkedin}
                                                  alt="linkedin"
                                                  className="w-9 mr-5"
                                                />
                                              </>
                                              :
                                              '--'
                                  :
                                  '--'
                              }

                            </div>
                          </div>

                          <div className="flex-initial mt-8 sm:mt-0 w-full md:full lg:w-7/12 bac-1 pr-4 md:py-1 lg:py-3 mr-2 mb-0 md:mb-2 lg:mb-2 px-5">
                            <div>
                              <div>
                                <h6 className="text-base font-semibold mb-5">
                                  Campaign Post Status
                                </h6>

                                <div className="flex">
                                  <img
                                    src={doneicon}
                                    alt="doneicon"
                                    className="w-4 mr-3"
                                  />
                                  <h6 className="text-base font-medium">
                                    {
                                      mainCampaignDetails ?
                                        mainCampaignDetails[0].campaign_post_status == 1 ? 'Active' : 'Inactive'
                                        : ''
                                    }
                                  </h6>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="px-6">
                <ul id="tabs" className="inline-flex pt-2  w-full mb-2">
                  <li
                    onClick={() =>
                      setTabs({
                        parentNode: "Participation",
                        childNode: "Pending",
                      })
                    }
                    className={`bg-white cursor-pointer py-1 rounded-t mr-5 sm:mr-6 ${tabs.parentNode == "Participation"
                      ? "text-gray-800 border-[#FCB43C] border-b-2 font-semibold"
                      : "text-[#797979]"
                      } border-[#FCB43C]`}
                  >
                    <a id="default-tab" className="font-10 text-xs lg:text-sm" >Participation Approval </a>
                  </li>
                  <li
                    onClick={() =>
                      setTabs({ parentNode: "Task", childNode: "Pending" })
                    }
                    className={`font-10 cursor-pointer px-2 lg:px-0 text-sm lg:text-base py-1 rounded-t ${tabs.parentNode == "Task"
                      ? "font-semibold text-gray-800 border-[#FCB43C] border-b-2"
                      : "text-[#797979]"
                      }`}
                  >
                    <a>Task Approval</a>
                  </li>
                </ul>

                <Table
                  parentNode={tabs.parentNode}
                  childNode={tabs.childNode}
                />
              </div>
            )}
          </div>
        </div>
      </section>
      <Sidebar title="Campaigns" />
    </>
  );
}
export default CampaignMenegmentActiveRequest;
