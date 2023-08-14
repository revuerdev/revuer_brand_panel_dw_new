import profile from "../../assets/images/rohit-1.svg";
import celendericon from "../../assets/images/done-fill.svg";
import { Header, Sidebar } from "../../layouts";
import { toggleSubnav, rotateMenuBtnIcon } from "../../services/make-payment";
import { NavLink as Link } from "react-router-dom";
import { useEffect } from "react";
function CampaignDetailsSamplingReview() {
  // useEffect(() => {
  //     toggleSubnav()
  //     rotateMenuBtnIcon()
  //   }, [])
  return (
    <>
      <section className="pl-0 md:pl-60 lg:pl-[15rem] lg:pt-0 md:pt-0 pt-14">
        <Header
          welcome="Campaign"
          extrab="Campaign / Review Our Product - Soap  / Task Approval /  "
          extra="Rohit Gupta"
        />

        <div className="px-5">
          <div className="bg-white box-shadow-1 rounded-2xl px-4 pt-5 mb-8 pb-10 lg:pb-28">
            <ul id="tabs" className="inline-flex pt-2 px-6 w-full mb-2">
              <li className="bg-white text-gray-800 font-semibold py-1 rounded-t mr-2 sm:mr-2 border-b-2 border-[#FCB43C]">
                <a id="default-tab" href="#first">
                  Task
                </a>
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
                      src={profile}
                      alt="profile"
                      className="mr-4 w-11 h-11  rounded-full"
                    />
                    <h6 className="mr-3 text-lg font-semibold">Rohit Gupta</h6>
                  </div>

                  <div className="block sm:flex items-center mt-2">
                  <Link to={`${process.env.REACT_APP_FRONT_URL}/campaign-details-testimonial-review`} className="bac-3 text-white text-sm font-semibold px-4 py-2 rounded-lg mr-5 mr5 font-11 sm:mr-8 uppercase">
    PRev Revuer
    </Link>
  <Link to={`${process.env.REACT_APP_FRONT_URL}/campaign-details-servey-review`} className="bac-6 font-11 text-white text-sm font-semibold px-4 rounded-lg py-2 uppercase py3"> Next Revuer
                   </Link>
                  </div>
                </div>

                <div className="pb-1">
                  <h5 className="text-lg font-semibold mb-5">
                  Sampling
                  </h5>

                  <div className="accordion" id="accordionExample">
                  <div className="accordion-item ">
    <h2 className="accordion-header mb-0" id="headingTwo">
      <button className="
        accordion-button
        collapsed
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
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
        aria-controls="collapseTwo">
        <h4 className="texe-sm sm:text-base mr-4 lg:mb-0 mb-0 sm:mb-2 w85 lable-color">
                              <span className="font-semibold">Task 1:</span>  Receive the Product
                            </h4>
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
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
      data-bs-parent="#accordionExample">
      <div className="accordion-body py-4 ">
      <div>
                        
                        <p className="w-11/12 text-justify text-sm mb-4">
                                                  Sem nunc fringilla pellentesque a adipiscing et. Nibh elit cras porttitor purus magna sit nisl pellentesque. Vestibulum ut augue orci aliquam eget Sem nunc fringilla pellentesque a adipiscing
                                                  et. Mauris tincidunt dictum ornare tristique sit ultricies pellentesque.
                                              </p>
  
                                              <h5 className="text-base font-semibold mb-3">
                                                  Filled Form Link
                                              </h5>
                                              <div>
                                              <a className="color-2 text-sm font-medium">http:/www.revererform.com
                                              /feedbackform/rohitgupta</a>
                        
                        </div>
                        </div>
      </div>
    </div>
  </div>


  <li className="menu__item w-full list-none">
                    
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
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne-4"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  <h4 className="texe-sm sm:text-base mr-4 lg:mb-0 mb-0 sm:mb-2 font-8 w85 lable-color"><span className="font-semibold">Task 2:</span>Fill Form</h4>
                                                <div className="flex items-center">
                                                    <img src={celendericon} alt="celendericon" className="w-3 lg:w-5 mr-1" />
                                                    <p className="text-xs sm:text-sm font-semibold text-[#2ECC71]">Completed</p>
                                                </div>
                </button>
              </h2>
              <div
                id="collapseOne-4"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample-2"
              >
                <div className="accordion-body py-4">
                <div>
                        
                        <p className="w-11/12 text-justify text-sm mb-4">
                                                  Sem nunc fringilla pellentesque a adipiscing et. Nibh elit cras porttitor purus magna sit nisl pellentesque. Vestibulum ut augue orci aliquam eget Sem nunc fringilla pellentesque a adipiscing
                                                  et. Mauris tincidunt dictum ornare tristique sit ultricies pellentesque.
                                              </p>
  
                                              <h5 className="text-base font-semibold mb-3">
                                                  Filled Form Link
                                              </h5>
                                              <div>
                                              <a className="color-2 text-sm font-medium">http:/www.revererform.com
                                              /feedbackform/rohitgupta</a>
                        
                        </div>
                        </div>
                </div>
              </div>
            </div>
          </div>
                    </li>


</div>

                </div>

              
              </div>

              {/* <div id="second" className="hidden pt-6 text-xs sm:text-sm text-justify px-2 sm:px-6">
                            <div>
                                <div className="flex items-center mt-2 mb-2">
                                    <img src="image/profile-img.svg" className="mr-3 w-7 h-7 border border-black rounded-full" />
                                    <h6 className="mr-2 text-sm font-semibold">Mr.John</h6>
                                    <h5 className="color-3 text-xs font-medium">11/7</h5>
                                </div>
                                <div className="border w-full md:w-6/12 lg:w-3/12 px-6 text-base border-chat py-2.5 ml-4">
                                    I have sent the file.
                                </div>
                            </div>

                            <div className="flex justify-end">
                                <div>
                                    <div className="justify-end flex items-center mt-2 mb-2">
                                        <h6 className="mr-2 text-sm font-semibold">You</h6>
                                        <h5 className="color-3 text-xs mr-2 font-medium">11/7</h5>
                                        <img src="image/profile-img.svg" className="w-7 h-7 border border-black rounded-full" />
                                    </div>
                                    <div className="bac-6 text-white px-6 text-base border-chat-1 py-2.5 mr-4">
                                        I have sent the file.
                                    </div>
                                </div>
                            </div>

                            <div className="mb-5">
                                <div className="flex items-center mt-2 mb-2">
                                    <img src="image/profile-img.svg" className="mr-3 w-7 h-7 border border-black rounded-full" />
                                    <h6 className="mr-2 text-sm font-semibold">Mr.John</h6>
                                    <h5 className="color-3 text-xs font-medium">11/7</h5>
                                </div>
                                <div className="border w-full md:w-8/12 lg:w-2/12 px-6 text-base border-chat py-2.5 ml-4">
                                    No Problem
                                </div>
                            </div>

                            <p className="bac-3 px-2 mx-auto text-center w-20 py-1.5 rounded-full bg-[#E5D9F1] font-semibold text-sm">Today</p>

                            <div className="flex justify-end">
                                <div>
                                    <div className="justify-end flex items-center mt-2 mb-2">
                                        <h6 className="mr-2 text-sm font-semibold">You</h6>
                                        <h5 className="color-3 text-xs mr-2 font-medium">11/7</h5>
                                        <img src="image/profile-img.svg" className="w-7 h-7 border border-black rounded-full" />
                                    </div>
                                    <div className="bac-6 text-white px-6 text-base border-chat-1 py-2.5 mr-4">
                                        Recently ! I have send it campaign details
                                    </div>
                                </div>
                            </div>

                            <div className="mb-8">
                                <div className="flex items-center mt-2 mb-2">
                                    <img src="image/profile-img.svg" className="mr-3 w-7 h-7 border border-black rounded-full" />
                                    <h6 className="mr-2 text-sm font-semibold">Mr.John</h6>
                                    <h5 className="color-3 text-xs font-medium">11/7</h5>
                                </div>
                                <div className="border w-full md:w-6/12 lg:w-3/12 px-6 text-base border-chat py-2.5 ml-4">
                                    Okay Thank you
                                </div>
                            </div>

                            <div className="mb-6">
                                <div className="md:hidden block lg:flex items-center mt-2 mb-2">
                                    <img src="image/profile-img.svg" className="mr-3 w-7 h-7 border border-black rounded-full" />
                                    <h6 className="mr-2 text-sm font-medium"><span className="text-[#FCB43C]">Mr. John</span> is typing...</h6>
                                </div>
                            </div>

                            <div className="flex justify-between items-center">
                                <div className="mr-3 w-full relative">
                                    <textarea className="flex-grow py-2.5 px-4 w-full mr-1 rounded-lg border border-gray-300 resize-none" rows="1" placeholder="@ Start typing..." style={{outline: "none"}}></textarea>
                                    <img src="image/emoji-icon-tying.svg" className="absolute top-3 w-5 right-2" />
                                </div>

                                <div className="bac-6 px-4 rounded-lg py-2.5 mb-2">
                                    <img src={"image/send-icon-chat.svg"} className="w-6" />
                                </div>
                            </div>
                        </div> */}
            </div>
          </div>
        </div>
      </section>

      <Sidebar title="Campaigns" />
    </>
  );
}
export default CampaignDetailsSamplingReview;
