import siranimg from "../../assets/images/siran.svg";
import celendericon from "../../assets/images/calendar-black.svg";
import uploadicon from "../../assets/images/upload.svg";
import selecticon from "../../assets/images/down-select.svg";
import { NavLink as Link } from "react-router-dom";
import { Header, Sidebar } from "../../layouts";
import { useEffect, useState } from "react";
import { customSelect } from "../../utils/custom-select";
import { lightpicker } from "../../services/lightpicker";
function CampaignDetailsSurvey() {
    useEffect(()=>{
        document.getElementsByClassName("select-selected").length==0 && 
        customSelect();
        lightpicker()

    },[])
return (
    <>
  
  <section className="pl-0 md:pl-60 lg:pl-[15rem] lg:pt-0 md:pt-0 pt-14">
  <Header  welcome="Campaign " extra="Create New Campaign "showCampaign={false}/>
<div className="px-5 sm:px-8">
    <div className="mb-10 mt-6 sm:mt-0">
        <h5 className="text-xl tracking-wide font-semibold lable-color mb-4">Campaign Details<span className="text-[#E74C3C]">*</span></h5>
        <div className="md:block lg:flex block box-shadow-1 rounded-2xl pt-8">
            <div className="flex-initial w-full md:full lg:w-7/12 bac-1 py-8 px-8 lg:pr-4 md:py-5 lg:py-0 mr-2 mb-0 md:mb-2 lg:mb-5">
                <label className="mt-6 lable-color text-sm tracking-wide font-semibold">Campaign Name </label>
                <div className="block mb-3 relative">
                    <input type="text" id="email" placeholder="Write from here" required="" className="box-shadow-3 mb-7 sm:mb-2 h-12 px-2 rounded-lg border border-[#95A5A6] bg-white w-full mt-2  text-sm" />
                    <div className="absolute top-5 right-4">
                        <img src={siranimg} alt="siranimg" className="w-7" />
                    </div>
                </div>

                <label className="mt-6 lable-color text-sm tracking-wide font-semibold">Campaign Objective</label>
                <div className="block">
                    <textarea className="resize-none mb-5 h-20 py-3 px-2 box-shadow-3 rounded-lg border border-[#95A5A6] bg-white w-full mt-2 text-sm" id="exampleFormControlTextarea1" rows="3" placeholder="Write From here"></textarea>
                </div>

                <div className="sm:flex block w-full social-break float-right mb-2">
                  <div className="flex-initial w-full sub-width-2 sm:w-6/12 mr-6">
                    <label className="lable-color text-sm tracking-wide font-semibold">
                      Campaign Type
                    </label>
                    <div className="block relative">
                    <div className="custom-select mt-2">
                      <select>
                        <option className="select-options color-3" value="0">Surveys</option>
                        <option  value="1">None</option>
                        <option  value="3">Product Review</option>
                        <option  value="4">Visual/Video Review</option>
                          <option  value="3">Testimonials</option>
                        <option  value="4">Sampling</option>
                             <option  value="4">Surveys</option>
                          <option  value="3">Market Research</option>
                        <option  value="4">Influencer Outreach</option>
                      </select>  
                    </div>
                    <img
            src={selecticon}
            alt="selecticon"
            className="w-3 h-2.5 absolute top-[20px] right-2.5  block sm:mr-2 sm:m-none mx-auto"
          />
                    </div>
                  </div>

                  <div className="flex-initial sub-width-2 w-full sm:w-6/12">
                    <label className="lable-color text-sm tracking-wide font-semibold">
                      Campaign Date Range
                    </label>
                    <div className="block relative">
                      <input
                        type="text"
                        id="calender_select"
                        placeholder="dd/mm/yyyy  to  dd/mm/yyyy "
                        required=""
                        className="box-shadow-3 h-12 px-2 rounded-lg border border-[#95A5A6] bg-white w-full mt-2 mb-1 color-3 text-sm pr-12"
                      />
                      <div className="absolute top-[1.4rem] right-4">
                        <img
                          src={celendericon}
                          alt="celendericon"
                          className="w-5"
                        />
                      </div>
                    </div>
                  </div>
                </div>
            </div>

            <div className="flex-initial w-full md:11/12 lg:w-6/12 bac-1 md:px-8 py-5 px-7 lg:px-2 md:py-5 lg:py-0 mr-5 mb-0 md:mb-2 sm:mb-0">
                                <h4 className="text-sm tracking-wide font-semibold mb-3 sm:mb-3">Cover Image</h4>

                                <div className="flex w-full justify-center bg-grey-lighter">
                                    <label className="w-full flex flex-col items-center px-4 py-[6.7rem] box-shadow-3 border-gray-500 text-blue rounded-lg border-2 border-dashed tracking-wide uppercase  border-blue cursor-pointer">
                                        <img src={uploadicon} alt="uploadicon" />
                                        <span className="mt-4 text-base leading-normal lable-color">Drag & Drop or browse to choose a file</span>
                                        <input type="file" className="hidden" />
                                    </label>
                                </div>
                            </div>
        </div>
    </div>

                <div className="mb-10">
                   

                    <div className="mb-10">
                        <h5 className="text-lg tracking-wide font-semibold lable-color mb-3">Task 1: Fill Form<span className="text-[#E74C3C]">*</span></h5>
                        <div className="md:block lg:flex block box-shadow-1 rounded-2xl  pt-3 px-6 sm:pt-7 mb-6 sm:mb-0 relative">
                            <div className="flex-initial w-full md:11/12 lg:w-7/12 bac-1 py-2 sm:py-12 px-2 pr-4 md:py-5 lg:py-0 mr-2 mb-0 md:mb-2 lg:mb-5">
                                <label className="mt-10 lable-color text-base font-semibold">Fill Form Detail </label>
                                <div className="flex w-full justify-center bg-grey-lighter mb-4 mt-2">
                                    <label className="w-full flex flex-col items-center px-4 py-14 border-gray-500 box-shadow-3 text-blue rounded-lg border-2 border-dashed tracking-wide border-blue cursor-pointer">
                                    <img src={uploadicon} alt="uploadicon" />
                                        <span className="mt-4 text-base leading-normal lable-color capitalize">Drag & Drop or browse to choose a file</span>
                                        <input type="file" className="hidden" />
                                    </label>
                                </div>
                            </div>

                            <div className="flex-initial w-full md:11/12 lg:w-7/12 bac-1 py-2 sm:py-12 px-4 sm:px-2 pr-4 md:py-5 lg:py-0 mb-0 md:mb-2 lg:mb-5">
                                <label className="mt-10 mb-2 lable-color text-base font-semibold"> Form Link</label>
                                <div className="block mb-2">
                                    <input type="text" id="email" placeholder="Paste here" required="" className="box-shadow-3 h-10 px-4 rounded-lg border border-[#95A5A6] bg-white lable-color w-full mt-2 mb-1 text-sm placeholder-[#95A5A6]" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <h5 className="text-xl font-semibold lable-color mb-2">Other</h5>
<div className="mb-10 box-shadow-1 rounded-2xl pt-9 px-8 pb-8">
    <div className="md:block lg:flex block">
        <div className="flex-initial w-full md:11/12 lg:w-7/12 bac-1 py-2 lg:pr-4 md:py-5 lg:py-0 mr-2 mb-0 md:mb-2 lg:mb-2">
            <label className="mt-6 lable-color text-base font-semibold">Do’s</label>
            <div className="block">
                <textarea className="resize-none box-shadow-3 h-20 py-3 px-2 rounded-lg border border-[#95A5A6] bg-white w-full mt-2 mb-1 text-sm" id="exampleFormControlTextarea1" rows="3" placeholder="Write From here"></textarea>
            </div>
        </div>

        <div className="flex-initial w-full md:11/12 lg:w-6/12 bac-1 py-2 md:px-0 lg:px-0 md:py-5 lg:py-0  mb-0 md:mb-2 sm:mb-0">
            <label className="mt-6 lable-color text-base font-semibold">Dont’s</label>
            <div className="block">
                <textarea className="resize-none box-shadow-3 h-20 py-3 px-2 rounded-lg border border-[#95A5A6] bg-white w-full mt-2 mb-1 text-sm" id="exampleFormControlTextarea1" rows="3" placeholder="Write From here"></textarea>
            </div>
        </div>
    </div>

    <label className="mt-2 lable-color text-base font-semibold">Any Additional Details</label>
    <div className="block">
        <textarea className="resize-none mb-6 h-20 py-3 px-2 box-shadow-3 rounded-lg border border-[#95A5A6] bg-white w-full mt-2  text-sm" id="exampleFormControlTextarea1" rows="3" placeholder="Write From here"></textarea>
    </div>

    <label className="mt-2 lable-color text-base font-semibold"> Interests<span className="text-[#E74C3C]">*</span></label>

    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-11 grid-set gap-1 mt-1">
  <div>
 <div class="ram">
    <div>
      <input id="toggle0" type="checkbox" />
      <label for="toggle0">Reading</label>
    </div>
  </div>
  </div>
  <div>
 <div class="ram">
    <div>
      <input id="toggle9" type="checkbox" />
      <label for="toggle9">Programming</label>
    </div>
  </div>
  </div>
 
  <div>
 <div class="ram">
    <div>
      <input id="toggle8" type="checkbox" />
      <label for="toggle8">Leadership</label>
    </div>
  </div>
  </div>
  <div>
 <div class="ram">
    <div>
      <input id="toggle7" type="checkbox" />
      <label for="toggle7">Writing</label>
    </div>
  </div>
  </div>

  <div className=" w-36 sm:w-32 ">
 <div class="ram">
    <div>
      <input id="toggle1" type="checkbox" />
      <label for="toggle1">Traning or Teaching</label>
    </div>
  </div>
  </div>

  <div className="ml-0 sm:ml-5 mx-0">
 <div class="ram">
    <div>
      <input id="toggle2" type="checkbox" />
      <label for="toggle2">Knowledge</label>
    </div>
  </div>
  </div>

  <div>
 <div class="ram">
    <div>
      <input id="toggle3" type="checkbox" />
      <label for="toggle3">Fashion</label>
    </div>
  </div>
  </div>

  <div>
 <div class="ram">
    <div>
      <input id="toggle4" type="checkbox" />
      <label for="toggle4">Travel</label>
    </div>
  </div>
  </div>

  <div>
 <div class="ram">
    <div>
      <input id="toggle5" type="checkbox" />
      <label for="toggle5">Designing</label>
    </div>
  </div>
  
  </div>
  <div>
 <div class="ram">
    <div>
      <input id="toggle6" type="checkbox" />
      <label for="toggle6">  Meditation</label>
    </div>
  </div>
  
  </div>

  <div className="flex items-center ml-4">
 <div class="ram">
    <div>
    <a href="#" class="color-2 font-semibold underline text-xs">View More</a>
    </div>
  </div>
  
  </div>



</div>
</div>

<div className="md:block lg:flex block social-break mb-5">
                            <div className="flex-initial w-full md:11/12 sub-width-2 lg:w-7/12 bac-1 py-2 sm:py-8  pr-4 md:py-5 lg:py-0 mr-2 mb-0 md:mb-2 lg:mb-5">
                                <h5 className="text-lg tracking-wide font-semibold lable-color mb-2">
                                    Campaign Budget & Revuer Limit
                                    <span className="text-[#E74C3C]">*</span>
                                </h5>

                                <div className="box-shadow-1 rounded-2xl py-6 px-6 sm:px-8">
                                    <div className="md:block lg:flex block mb-3">
                                        <div className="flex-initial w-full md:11/12 lg:w-7/12 bac-1 mr-6 mb-0">
                                            <label className="mt-6 lable-color text-sm tracking-wide font-semibold">Campaign Budget</label>
                                            <div className="block relative">
                                                <input
                                                    type="text"
                                                    id="date"
                                                    placeholder="Enter Budget"
                                                    required=""
                                                    className="box-shadow-3 h-12 px-2 rounded-lg border border-[#95A5A6] bg-white w-full mt-2 mb-2 placeholder:text-[#95a5a6] text-sm pl-20"
                                                />
                                                <div className="absolute top-2 left-0 py-3 px-6 border-r border-[#95A5A6]">₹</div>
                                            </div>
                                        </div>

                                        <div className="flex-initial w-full md:11/12 lg:w-7/12 bac-1">
                                            <label className="mt-6 lable-color text-sm tracking-wide font-semibold">
                                                Revuer Limit<span className="text-[#E74C3C]">*</span>
                                            </label>
                                            <div className="block relative">
                                                <div className="custom-select mt-2">
                                                    <select>
                                                        <option className="select-options color-3" value="0">
                                                            select revuer limit
                                                        </option>
                                                        <option value="1">None</option>
                                                        <option value="3">20 Revuers</option>
                                                        <option value="4">30 Revuers</option>
                                                        <option value="3">40 Revuers</option>
                                                        <option value="4">60 Revuers</option>
                                                    </select>
                                                </div>
                                                <img src={selecticon} alt="selecticon" className="w-3 h-2.5 absolute top-[20px] right-2.5  block sm:mr-2 sm:m-none mx-auto" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-check form-check-inline flex items-center mr-5 mb-8 md:mb-5 lg:mb-0">
                                        <input
                                            className="form-check-input appearance-none h-4 w-4 border border-black rounded bg-white checked:bg-[#FCB43C] checked:border-none focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                            type="checkbox"
                                            id="inlineCheckbox1"
                                            value="option1"
                                        />
                                        <label className="form-check-label text-[9px] font-medium inline-block text-black md:text-xs lg:text-sm" htmlFor="inlineCheckbox1">
                                            Want to use your ₹40,000 credit amount ?
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className="flex-initial sub-width-2 w-full md:11/12 lg:w-7/12 bac-1 py-6 md:py-5 lg:py-0 mb-0 md:mb-2 lg:mb-5">
                                <h5 className="text-lg tracking-wide font-semibold lable-color mb-2">
                                    Campaign Payment<span className="text-[#E74C3C]">*</span>
                                </h5>
                                <div className="box-shadow-1 rounded-xl py-6 px-9 px5">
                                    <h4 className="text-base font-semibold lable-color mb-4">Pay with</h4>
                                    <div className="flex items-center mb-3">
                                        <div className="flex items-center mr-4 mb-0">
                                            <input id="default-radio-2" type="radio" name="radio" className="hidden" checked />
                                            <label for="default-radio-2" className="flex items-center cursor-pointer mr-5  text-[10px] sm:text-sm font-semibold lable-color">
                                                <span className="w-4 h-4 inline-block mr-1 rounded-full border border-grey"></span>
                                                Credit/Debit Card
                                            </label>
                                        </div>
                                        <div className="flex items-center mr-4 mb-0">
                                            <input id="default-radio-1" type="radio" name="radio" className="hidden" />
                                            <label for="default-radio-1" className="flex items-center cursor-pointer mr-5 ml-2 text-[11px] sm:text-sm font-semibold lable-color">
                                                <span className="w-4 h-4 inline-block mr-1 rounded-full border border-grey"></span>
                                                Net Banking
                                            </label>
                                        </div>
                                    </div>

                                    <div className="lg:flex block ">
                                        <div className="flex-initial relative w-full md:11/12 lg:w-6/12 bac-1 py-2 sm:py-8 md:py-5 lg:py-0 mr-4 mb-0 md:mb-0 lg:mb-0">
                                            <div class="custom-select ">
                                                <select>
                                                    <option className="select-options color-3" value="0">
                                                        Select saved card
                                                    </option>
                                                    <option value="1">Visa ****1234 Manan Sharma</option>
                                                    <option value="2">Mater ****4444 Manan Sharma</option>
                                                    <option value="3">Rupay ****1010 Manan Sharma</option>
                                                    <option value="4">Visa ****0987 Manan Sharma</option>
                                                </select>
                                            </div>
                                            <img src={selecticon} alt="selecticon" className="w-3 h-2.5 absolute top-[28px] md:top-[40px] lg:top-[20px] right-2.5  block sm:mr-2 sm:m-none mx-auto" />
                                        </div>

                                        <div className="flex-initial w-full md:11/12 flex items-center lg:w-6/12 bac-1 py-2 sm:py-8 md:py-5 lg:py-0 mb-0 md:mb-2 lg:mb-0">
                                            <div className="flex items-center">
                                                <button className="font-11 add-button text-sm uppercase font-semibold rounded h-10 bac-3 px-4 py-2 mr-6 text-white">Add new card</button>
                                                <button className="uppercase bac-6 px-8 py-2 text-sm font-semibold h-10 text-white rounded">Pay</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="md:block lg:flex block mb-5">
                        <div className="flex-initial w-full md:11/12 lg:w-6/12 bac-1 py-2 lg:py-2 px-2 pr-4 md:py-5 mr-2 mb-0 md:mb-2 lg:mb-5">
            <h5 className="text-xl tracking-wide font-semibold lable-color mb-2">
              Select Social Platform<span className="text-[#E74C3C]">*</span>
            </h5>
            <div className="box-shadow-1 rounded-xl py-8 py-s px3 px-5">
              <div className="block lg:flex social-break">
                <div className="block sm:flex socila-mb ">
                  <div className="form-check form-check-inline flex items-center mr-4 mb-5 lg:mb-0">
                    <input
                      className="form-check-input appearance-none h-4 w-4 border border-black rounded bg-white checked:bg-[#FCB43C] checked:border-none focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="checkbox"
                      id="inlineCheckbox2"
                      value="option1"
                    />
                    <label
                      className="form-check-label inline-block text-black text-xs"
                      htmlFor="inlineCheckbox4"
                    >
                      Facebook
                    </label>
                  </div>

                  <div className="form-check form-check-inline flex items-center mr-4 mb-5 lg:mb-0">
                    <input
                      className="form-check-input appearance-none h-4 w-4 border border-black rounded bg-white checked:bg-[#FCB43C] checked:border-none focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="checkbox"
                      id="inlineCheckbox6"
                      value="option1"
                    />
                    <label
                      className="form-check-label inline-block text-black text-xs"
                      htmlFor="inlineCheckbox1"
                    >
                      Instagram
                    </label>
                  </div>
                  <div className="form-check form-check-inline flex items-center mr-4 mb-5 lg:mb-0">
                    <input
                      className="form-check-input appearance-none h-4 w-4 border border-black rounded bg-white checked:bg-[#FCB43C] checked:border-none focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="checkbox"
                      id="inlineCheckbox7"
                      value="option1"
                    />
                    <label
                      className="form-check-label inline-block text-black text-xs"
                      htmlFor="inlineCheckbox1"
                    >
                      Twitter
                    </label>
                  </div>
                </div>

                <div className="block sm:flex ">
                  <div className="form-check form-check-inline flex items-center mr-4 mb-5 lg:mb-0">
                    <input
                      className="form-check-input appearance-none h-4 w-4 border border-black rounded bg-white checked:bg-[#FCB43C] checked:border-none focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="checkbox"
                      id="inlineCheckbox1"
                      value="option1"
                    />
                    <label
                      className="form-check-label inline-block text-black text-xs"
                      htmlFor="inlineCheckbox1"
                    >
                      Youtube
                    </label>
                  </div>

                  <div className="form-check form-check-inline flex items-center mr-4 mb-5 lg:mb-0">
                    <input
                      className="form-check-input appearance-none h-4 w-4 border border-black rounded bg-white checked:bg-[#FCB43C] checked:border-none focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="checkbox"
                      id="inlineCheckbox8"
                      value="option1"
                    />
                    <label
                      className="form-check-label inline-block text-black text-xs"
                      htmlFor="inlineCheckbox1"
                    >
                      Pintrest
                    </label>
                  </div>

                  <div className="form-check form-check-inline flex items-center mr-4 mb-5 lg:mb-0">
                    <input
                      className="form-check-input appearance-none h-4 w-4 border border-black rounded bg-white checked:bg-[#FCB43C] checked:border-none focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="checkbox"
                      id="inlineCheckbox9"
                      value="option1"
                    />
                    <label
                      className="form-check-label inline-block text-black text-xs"
                      htmlFor="inlineCheckbox1"
                    >
                      LinkedIn
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

                            <div className="flex-initial w-full md:11/12 lg:w-6/12 bac-1  md:py-5 lg:py-0  mb-0 md:mb-2 lg:mb-5">
            <div className="box-shadow-1 rounded-xl py-5 sm:py-7 py-0152 mt-9 px-6">
              <div className="block social-break sm:flex justify-between">
                <h5 className="py152 text-lg tracking-wide font-semibold font-sm lable-color mb-6 sm:mb-0">
                  Campaign Post Status
                </h5>

                <div className="flex items-center">
                  <label
                    htmlFor="toggle"
                    className="text-base font-medium text-black mr-5"
                  >
                    Active
                  </label>
                  <div className="relative inline-block w-[3.2rem] mr-2 align-middle select-none transition duration-200 ease-in">
                    <input
                      type="checkbox"
                      name="toggle"
                      id="toggle"
                      className="toggle-checkbox absolute ml-1 block w-5 h-5 mt-[3px] rounded-full bg-white appearance-none cursor-pointer"
                    />
                    <label
                      htmlFor="toggle"
                      className="toggle-label block overflow-hidden h-[26px] rounded-full bac-7 cursor-pointer"
                    ></label>
                  </div>
                </div>
              </div>
            </div>
          </div>
                        </div>

                    <div className="md:mb-5 mb-8 lg:mb-8">
                        <div className="flex justify-center sm:justify-end">
                            <button className="mr-8 bac-3 w-48 py-2.5 rounded text-white uppercase text-base font-bold flex justify-center items-center">Cancel</button>
                            <Link to={`${process.env.REACT_APP_FRONT_URL}/campaign-details-influncer-outreach`} className="bac-6 w-48 py-2.5 flex rounded text-white uppercase text-base font-bold justify-center items-center">Submit </Link>
                            </div>
                       
                    </div>
                </div>
            </div>
        </section>

        <Sidebar title="Campaigns" />
    </>
  );
}


export default CampaignDetailsSurvey