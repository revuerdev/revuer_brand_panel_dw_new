import siranimg from "../../assets/images/pandind-aprove-page-heding-icon.svg";
import celendericon from "../../assets/images/calendar-2-color-task.svg";
import uploadicon from "../../assets/images/calendar-2.svg";
import successModalImg2 from "../../assets/images/request-page-image.png"
import usericon from "../../assets/images/group-chat 1 (Traced).png";
import useresicon from "../../assets/images/group-chat 2 (Traced).svg";
import facebook from "../../assets/images/facebook-icon.svg"
import instagram from "../../assets/images/instagram-icon.svg";
import doneicon from "../../assets/images/check-mark 1 (Traced).svg"
import { Header, Sidebar } from "../../layouts";
import { NavLink as Link } from "react-router-dom";
import { useState } from "react";
function CampaignDetailsTaskRequest() {
  return (
    <>
      <section className="pl-0 md:pl-60 lg:pl-[15rem]">
      <Header  welcome="Campaign"extrab="Review Our Product - Soap /" extra=" Participation Approval"/>

      <div className="px-8">
                <div className="flex mt-8 items-center mb-6">
                    <h6 className="text text-xl font-semibold mr-3 mb-1 ">Review Our Product - Soap</h6>
                    <img src={siranimg} alt="siranimg" className="w-5" />
                </div>
            </div>
            <div className="box-shadow-1 rounded-lg pt-2 lg:pt-8 mx-8 mb-8 relative">
                <div className="w-16 overflow-hidden inline-block absolute -top-8 left-36">
                    <div className="h-8 w-8 bg-white box-shadow-1 rotate-45 transform origin-bottom-left"></div>
                </div>
                <div className="mb-2 px-8">
                    <div className="md:block lg:flex block">
                        <div className="flex-initial w-full md:full lg:w-8/12 bac-1 py-5 pr-4 md:py-5 lg:py-0 mr-2 mb-0 md:mb-2 lg:mb-2">
                            <h2 className="color-3 text-sm mb-2">Campaign Name</h2>
                            <h5 className="text-base font-medium mb-4">Review for Dry Scalp Shampoo</h5>

                            <h2 className="color-3 text-sm  font-medium mb-2">Campaign Overview</h2>
                            <h5 className="text-sm font-medium mb-4 text-justify">
                                Buy the product, use it and then share your experienceMi sit massa augue eget ut convallis vulputate. Integer nulla lacus eu viverra malesuada senectus augue sed. Commodo, augue vulputate ultricies well lit
                                and not heavily edited.Follow the guidelines. The image should be visually appealing. well lit and not heavily edited.Follow the guidelines. The image should be visually appealing.
                            </h5>

                            <div className="block lg:flex justify-between mb-2">
                                <div className="mb-4 lg:mb-0">
                                    <div>
                                        <h3 className="mb-1 text-sm color-3">Start Date</h3>
                                    </div>
                                    <div className="flex">
                                        <img src={celendericon} alt="celendericon" className="w-4 mr-2" />
                                        <h3 className="text-sm font-semibold lable-color">04/06/2022</h3>
                                    </div>
                                </div>

                                <div className="mb-4 lg:mb-0">
                                    <div>
                                        <h3 className="mb-1 text-sm color-3">End Date</h3>
                                    </div>
                                    <div className="flex">
                                        <img src={uploadicon} alt="uploadicon" className="w-4 mr-3" />
                                        <h3 className="text-sm font-semibold lable-color">05/08/2022</h3>
                                    </div>
                                </div>

                                <div className="mb-4 lg:mb-0">
                                    <div>
                                        <h3 className="mb-1 text-sm color-3">Target Audience</h3>
                                    </div>
                                    <div className="flex">
                                        <img src="image/details-page-male-color.svg" className="w-4 mr-3" />
                                        <h3 className="text-sm font-semibold lable-color">Male</h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex-initial w-full md:full lg:w-4/12 bac-1 py-8 px-2 lg:px-8 pr-4 md:py-5 lg:py-0 mr-2 mb-0 md:mb-2 lg:mb-5">
                            <h2 className="color-3 text-sm mb-2">Cover Image</h2>
                            <img src={successModalImg2} alt="successModalImg2" className="w-full h-[212px] object-cover rounded-2xl" />
                        </div>
                    </div>
                </div>

                <div className="mb-4 px-8">
                    <hr className="mb-10 px-5" />

                    <h5 className="text-2xl font-semibold mb-1 lg:mb-2">Task</h5>

                    <div className="md:block lg:flex block">
                        <div className="flex-initial w-full md:full lg:w-10/12 bac-1 py-2 lg:py-5 pr-4 md:py-2 mr-2 mb-0 md:mb-2 lg:mb-2">
                            <div className="md:block lg:flex block">
                                <div className="flex-initial w-full md:full lg:w-7/12 bac-1 py-1  pr-4 md:py-1 lg:py-0 mr-2 mb-0 md:mb-2 lg:mb-2">
                                    <h3 className="color-3 text-sm font-normal mb-2">Task 1</h3>
                                    <h5 className="text-base font-medium">Purchase the product and submit product delivery screenshot</h5>
                                </div>

                                <div className="flex-initial w-full md:full lg:w-5/12 bac-1 py-5 pr-4 md:py-1 lg:py-0 mr-2 mb-0 md:mb-2 lg:mb-2">
                                    <h3 className="color-3 text-sm font-normal mb-2">Task 1</h3>
                                    <h5 className="text-base font-medium">https://www.revuer.com/product1/Shoes</h5>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-6">
                        <h5 className="color-3 text-sm mb-2">
                            Task Details
                        </h5>
                        <h3 className="text-base font-medium text-justify sm:w-10/12">
                            Buy the product, use it and then share your experienceMi sit massa augue eget ut convallis vulputate. Integer nulla lacus eu viverra malesuada senectus augue sed. Commodo, augue vulputate ultricies Buy the
                            product, use it and then share your experienceMi sit massa augue eget ut convallis vulputate. Integer nulla lacus eu viverra malesuada senectus augue sed. Commodo, augue vulputate ultricies
                        </h3>
                    </div>
                    <hr />

                    <h5 className="text-2xl font-semibold mb-4 mt-6">Other</h5>

                    <div className="md:block lg:flex block mb-8">
                        <div className="flex-initial w-full md:full lg:w-6/12 bac-1 py-2  pr-4 md:py-5 lg:py-0 mr-2 mb-0 md:mb-2 lg:mb-2">
                            <h3 className="color-3 text-sm font-normal mb-2">Do’s</h3>
                            <h5 className="text-base font-medium text-justify">
                                Follow the guidelines. The image should be visually appealing. Make sure your content is high quality, well lit and not heavily edited.Follow the guidelines. The image should be visually appealing. Make sure
                                your content is high quality, well lit and not heavily edited.
                            </h5>
                        </div>

                        <div className="flex-initial w-full md:full lg:w-6/12 bac-1 py-2  pr-4 md:py-5 lg:py-0 mb-0 md:mb-2 lg:mb-2">
                            <h3 className="color-3 text-sm font-normal mb-2">Dont’s</h3>
                            <h5 className="text-base font-medium text-justify">
                                Ensure no other brand is visible - The brand name should be clearly visible - Do not post without content approval. - Do not share product images available publicly on the Internet Do not post without content
                                approval.
                            </h5>
                        </div>
                    </div>

                    <hr />

                    <div className="md:block lg:flex block mb-5 mt-4">
                        <div className="flex-initial w-full md:full lg:w-7/12 bac-1 py-5 pr-4 md:py-1 lg:py-0 mr-2 mb-0 md:mb-2 lg:mb-2">
                            <div className="md:block lg:flex block mb-4">
                                <div className="flex-initial w-full md:full lg:w-4/12 bac-1 py-3 px-1 lg:px-4 md:py-1 lg:py-0 mr-2 mb-0 md:mb-2 lg:mb-2 border-r-1 lg:border-r my-3">
                                    <h5 className="text-lg font-semibold mb-5">Campaign Budget</h5>
                                    <h3 className="color-3 text-sm font-normal mb-2">Campaign Budget</h3>
                                    <h5 className="text-lg font-medium text-justify">₹95000</h5>
                                </div>

                                <div className="flex-initial w-full md:full lg:w-8/12 bac-1 py-3 px-1 lg:px-7 md:py-1 lg:py-0 mr-2 mb-0 md:mb-2 lg:mb-2 border-r-1 lg:border-r my-3">
                                    <div>
                                        <h6 className="text-lg font-semibold mb-5">Campaign Duration & Revuer Limit</h6>

                                        <div className="flex justify-between items-center">
                                            <div>
                                                <h3 className="color-3 text-sm font-normal mb-2">Campaign Budget</h3>
                                                <div className="flex items-center">
                                                    <img src={usericon} alt="usericon" className="w-3 h-4 mr-2" />
                                                    <h4 className="text-base font-medium">20 Days</h4>
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="color-3 text-sm font-normal mb-2">Campaign Budget</h3>
                                                <div className="flex items-center">
                                                    <img src={useresicon} alt="useresicon" className="w-5 mr-2" />
                                                    <h4 className="text-base font-medium">20 Days</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex-initial w-full md:full lg:w-5/12 bac-1 py-0  pr-4 md:py-1 lg:py-0 mr-2 mb-0 md:mb-2 lg:mb-2">
                            <div className="md:block lg:flex block mb-4">
                                <div className="flex-initial w-full md:full lg:w-6/12 bac-1 pr-4 md:py-1 lg:py-0 mr-2 mb-0 md:mb-2 lg:mb-2 px-2 border-r-1 lg:border-r">
                                    <h5 className="text-lg font-semibold mb-5">Social Platform</h5>

                                    <div className="flex">
                                        <img src={facebook} alt="facebook" className="w-9 mr-5" />
                                        <img src={instagram} alt="instagram" className="w-9" />
                                    </div>
                                </div>

                                <div className="flex-initial w-full md:full lg:w-7/12 bac-1 pr-4 md:py-1 lg:py-0 mr-2 mb-0 md:mb-2 lg:mb-2 px-5">
                                    <div>
                                        <div>
                                            <h6 className="text-base font-semibold mb-5">Campaign Post Status</h6>

                                            <div className="flex">
                                                <img src={doneicon} alt="doneicon" className="w-4 mr-3" />
                                                <h6 className="text-base font-medium">Active</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

      </section>
 
      <Sidebar title="Campaigns" />
    </>
  );
}
export default CampaignDetailsTaskRequest;
