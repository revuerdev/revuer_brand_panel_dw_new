import profile from "../../assets/images/rohit-1.svg";
import celendericon from "../../assets/images/done-fill.svg";
import uploadicon from "../../assets/images/rewis-screenshot.svg";
import successModalImg2 from "../../assets/images/Rectangle 580.svg";
import successModalImg3 from "../../assets/images/Rectangle 581.svg";
import facebook from "../../assets/images/facebook-icon.svg";
import instagram from "../../assets/images/instagram-icon.svg";
import send from "../../assets/images/send.svg";
import { Header, Sidebar } from "../../layouts";
import { NavLink as Link } from "react-router-dom";
import { toggleModal6 } from "../../services/edit-modal";
import { InstagramModal } from "../../components/Modal";
import { useEffect } from "react";
function CampaignDetailsProductReview() {
  // useEffect(() => {
  //     toggleSubnav()
  //     rotateMenuBtnIcon()
  //   }, [])
  return (
    <>
      <section className="pl-0 md:pl-60 lg:pl-[15rem] lg:pt-0 md:pt-0 pt-14">
        <Header
          welcome="Campaign"
          extrab="Campaign / Review Our Product - Soap  / Task Approval /"
          extra="   Rohit Gupta"
        />

        <div className="px-8">
          <div className="bg-white box-shadow-1 rounded-2xl px-4 pt-5 mb-10 pb-10 lg:pb-14">
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
                className="pt-2 text-xs sm:text-sm text-justify px-2 lg:px-6 pb-10"
              >
                <div className="block lg:flex justify-between items-center mb-3 lg:mb-7 pb-0 lg:pb-4">
                  <div className="block sm:flex items-center mt-2">
                    <img
                      src={profile}
                      alt="profile"
                      className="mr-4 w-9 h-9  rounded-full"
                    />
                    <h6 className="mr-3 text-lg font-semibold">Rohit Gupta</h6>
                  </div>

                  <div className="block sm:flex items-center mt-2">
                    <button className="bac-3 text-white text-sm font-semibold px-4 py-2 rounded-lg mr-5 mr5 font-11 sm:mr-8 uppercase">
                      PRev Revuer
                    </button>
                    <Link
                      to={`${process.env.REACT_APP_FRONT_URL}/campaign-details-video-review`}
                      className="bac-6 font-11 text-white text-sm font-semibold px-4 rounded-lg py-2 uppercase py3"
                    >
                      {" "}
                      Next Revuer
                    </Link>
                  </div>
                </div>

                <div className="pb-1">
                  <h5 className="text-lg font-semibold mb-5">Product Review</h5>

                  <li className="menu__item w-full list-none mb-3 mt-3">
                    <div class="accordion" id="accordionExample-1">
                      <div class="accordion-item bg-white">
                        <h2 class="accordion-header mb-0" id="headingOne">
                          <button
                            class="
                  accordion-button
                 aroow-class 
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
                            data-bs-target="#collapseOne-3"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            <h4 className="texe-sm sm:text-base mr-4 lg:mb-0 mb-0 sm:mb-2 font-8">
                              <span className="font-semibold">Task 1:</span> Buy
                            </h4>
                            <div className="flex items-center">
                              <img
                                src={celendericon}
                                alt="celendericon"
                                className="w-3 lg:w-5 mr-1"
                              />
                              <p className="text-xs sm:text-sm font-semibold text-[#2ECC71]">
                                Completed
                              </p>
                            </div>
                          </button>
                        </h2>
                        <div
                          id="collapseOne-3"
                          class="accordion-collapse collapse show"
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordionExample-1"
                        >
                          <div class="accordion-body py-4">
                            <div>
                              <p className="w-11/12 text-justify text-sm mb-4">
                                Sem nunc fringilla pellentesque a adipiscing et.
                                Nibh elit cras porttitor purus magna sit nisl
                                pellentesque. Vestibulum ut augue orci aliquam
                                eget Sem nunc fringilla pellentesque a
                                adipiscing et. Nibh elitcras porttitor purus
                                magna sit nisl pellentesque. Vestibulum ut augue
                                orci aliquam eget ultrices arcu id maecenas.
                                Mauris tincidunt dictum ornare tristique sit
                                ultricies pellentesque.
                              </p>

                              <h5 className="text-base font-semibold font-8">
                                Purchased Product Screenshot
                              </h5>

                              <div className="flex mb-2">
                                <div className="mr-10">
                                  <img src={uploadicon} alt="uploadicon" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                  <hr />

                  <li className="menu__item w-full list-none mb-3 mt-3">
                    <div class="accordion" id="accordionExample-2">
                      <div class="accordion-item bg-white">
                        <h2 class="accordion-header mb-0" id="headingOne">
                          <button
                            class="
                  accordion-button
                 aroow-class 
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
                            <h4 className="texe-sm sm:text-base mr-4 lg:mb-0 mb-0 sm:mb-2 font-8">
                              <span className="font-semibold">Task 2:</span>{" "}
                              Review
                            </h4>
                            <div className="flex items-center">
                              <img
                                src={celendericon}
                                alt="celendericon"
                                className="w-3 lg:w-5 mr-1"
                              />
                              <p className="text-xs sm:text-sm font-semibold text-[#2ECC71]">
                                Completed
                              </p>
                            </div>
                          </button>
                        </h2>
                        <div
                          id="collapseOne-4"
                          class="accordion-collapse collapse show"
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordionExample-2"
                        >
                          <div class="accordion-body py-4">
                            <div>
                              <p className="w-11/12 text-justify text-sm mb-6">
                                Sem nunc fringilla pellentesque a adipiscing et.
                                Nibh elit cras porttitor purus magna sit nisl
                                pellentesque. Vestibulum ut augue orci aliquam
                                eget Sem nunc fringilla pellentesque a
                                adipiscing et. Nibh elit cras porttitor purus
                                magna sit nisl pellentesque. Vestibulum ut augue
                                orci aliquam eget ultrices arcu id maecenas.
                                Mauris tincidunt dictum ornare tristique sit
                                ultricies pellentesque.
                              </p>

                              <div className="block lg:flex">
                                <div className="mr-24">
                                  <h5 className="text-base font-semibold mb-5 font-8">
                                    Already Posted Screenshots
                                  </h5>

                                  <div className="flex mb-8">
                                    <div className="mr-6 relative" onClick={toggleModal6}>
                                      <img
                                        src={successModalImg2}
                                        alt="successModalImg2"
                                      />
                                      <div className="absolute -top-2 -right-2">
                                        <img
                                          src={instagram}
                                          alt="instagram"
                                          className="w-5"
                                        />
                                      </div>
                                    </div>

                                    <div className="relative" onClick={toggleModal6}>
                                      <img
                                        src={successModalImg3}
                                        alt="successModalImg2"
                                      />
                                      <div className="absolute -top-2 -right-2">
                                        <img
                                          src={facebook}
                                          alt="facebook"
                                          className="w-5"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div>
                                  <h5 className="text-base font-semibold mb-5">
                                    Posted review links
                                  </h5>

                                  <div className="flex block-1 font-10 items-center mb-4">
                                    <img
                                      src={instagram}
                                      alt="instagram"
                                      className="w-7 mr-2"
                                    />
                                    <a className="font-medium color-2" href="#">
                                      http:/www.instagram.com/rogitgupta/post2
                                    </a>
                                  </div>
                                  <div className="flex block-1 font-10 items-center mb-2">
                                    <img
                                      src={facebook}
                                      alt="facebook"
                                      className="w-7 mr-2"
                                    />
                                    <a className="font-medium color-2" href="#">
                                      http:/www.facebook.com/rogitgupta/post2
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Sidebar title="Campaigns" />
      <InstagramModal />
    </>
  );
}
export default CampaignDetailsProductReview;
