import dassbordimg from "../../assets/images/dassbord-white.svg";
import campinimg from "../../assets/images/companig.svg";
import inboximg from "../../assets/images/inbox-icon.svg";
import framimg from "../../assets/images/Frame.svg";
import analayimg from "../../assets/images/dassbord-report-icon.svg";
import dassbordcolorimg from "../../assets/images/dassbord.svg";
import campincolorimg from "../../assets/images/maik-color.svg";

import approvalcolorimg from "../../assets/images/approval-color.png";
import { useNavigate } from "react-router-dom";
import approvalimg from "../../assets/images/request.png";

import inboxcolorimg from "../../assets/images/inbox-white.svg";
import framcolorimg from "../../assets/images/plan-colro.svg";
import analaycolorimg from "../../assets/images/dassbord-report-icon.svg";
import logoimg from "../../assets/images/logo.svg";
import logoImages from "../../assets/images/profile-img.svg";
import { NavLink as Link } from "react-router-dom";

import dropuserimg from "../../assets/images/User.svg"
import logimg from "../../assets/images/log-out.svg"
import dropimg from "../../assets/images/Arrow-drop.svg"
import { useRef, useState } from "react";
import { toggleModalLogoutMobile } from "../../services/edit-modal"

import analysiscolorimg from "../../assets/images/analysis-colorimg.png";
import analysisimg from "../../assets/images/analysis.png";
import dashImg from "../../assets/images/dash-white.png";
import dashYellowImg from "../../assets/images/dash-yellow.png";
import { toast } from "react-toastify"
import { logOutModalModal as LogOutModalModal } from "../../components/Modal";

export const Sidebar = ({ title, subtitle }) => {
  const [profileMenu, setOpenProfileMenu] = useState(false)
  const [menuSubmenu, setOpenMenuSubmenu] = useState(false)
  const [modal, setModal] = useState({ status_title: "Logout Session" })
  const toastId = useRef(null);
  let navigate = useNavigate();
  const logoutSession = () => {
    setModal({
      status_title: 'Logout Session', message: "Are you sure you want to log out...", onSuccess: () => {
        localStorage.clear();
        if (!toast.isActive(toastId.current)) { toastId.current = toast.success("Logout Successfully...") }
        setTimeout(() => {
          navigate(`/revuer-brand/login`, { replace: true });
        }, 1000);
      }
    })
    toggleModalLogoutMobile();
  }
  return (
    <>


      <div className="relative  md:flex" data-dev-hint="container">
        <input type="checkbox" id="menu-open" className="hidden" />

        <aside id="sidebar" className="fixed top-4 sm:top-0   text-gray-100 md:w-64 w-3/4 space-y-6 px-0   transform  md:translate-x-0 transition duration-200 ease-in-out  md:flex md:flex-col md:justify-between overflow-y-auto" data-dev-hint="sidebar; px-0 for frameless; px-2 for visually inset the navigation">


          <div className=" bac-7 w-60 min-74vh lg:min-h-screen	 sm:block relative ">
            <div className="text-center sm:pt-0 pt-10 text-white flex justify-center mr-4 mt-10 mb-10 font-medium text-3xl">
              <img src={logoimg} alt="logoimg" />
            </div>
            <div className="">
              <ul className="mb-80">
                <li className="flex items-center  min-h-[60px]  px-9 relative">
                  <img
                    src={title == "Dashboard" ? dassbordcolorimg : dassbordimg}
                    alt="daseimg"
                    className="w-5 h-5 object-cover mr-5"
                  />
                  <Link
                    to={`${process.env.REACT_APP_FRONT_URL}/dashboard`}
                    className={`text-sm font-medium ${title == "Dashboard" ? "text-[#FCB43C]" : "text-[#fff]"
                      }`}
                  >
                    Dashboard
                  </Link>
                  {title == "Dashboard" ? (
                    <div
                      className={`w-1 ml-[2px] h-[55px] bac-6 absolute left-0 rounded-sm`}
                    ></div>
                  ) : null}
                </li>

                <li className="flex items-center min-h-[60px]  px-9">
                  <img
                    src={title == "Campaigns" ? campincolorimg : campinimg}
                    alt="campinimg"
                    className="w-5 h-5 object-cover mr-5"
                  />
                  <Link
                    to={`${process.env.REACT_APP_FRONT_URL}/campaign-menegment-active`}
                    className={`text-sm font-medium ${title == "Campaigns" ? "text-[#FCB43C]" : "text-[#fff]"
                      }`}
                  >
                    Campaigns
                  </Link>
                  {title == "Campaigns" ? (
                    <div
                      className={`w-1 ml-[2px] h-[55px] bac-6 absolute left-0 rounded-sm`}
                    ></div>
                  ) : null}
                </li>

                <li className="flex items-center min-h-[60px]  px-9">
                  <img
                    src={title == "inbox" ? inboxcolorimg : inboximg}
                    alt="inboximg"
                    className="w-5 h-5 object-cover mr-5"
                  />
                  <Link
                    to={`${process.env.REACT_APP_FRONT_URL}/inbox`}
                    className={`text-sm text-white  font-medium ${title == "inbox" ? "text-[#FCB43C]" : "text-[#fff]"
                      }`}
                  >
                    Inbox
                  </Link>
                  {title == "inbox" ? (
                    <div
                      className={`w-1 ml-[2px] h-[55px] bac-6 absolute left-0 rounded-sm`}
                    ></div>
                  ) : null}
                </li>
                <li className="flex items-center min-h-[60px]  ">

                  <div className="dropdown inline-block relative">
                    <button className="px-9 items-center flex justify-center" onClick={() => setOpenMenuSubmenu(!menuSubmenu)}>
                      <img
                        src={title == "Analysis" ? analysiscolorimg : analysisimg}
                        alt="analysis_report"
                        className="w-5 h-5 object-cover mr-5"
                      />
                      <div
                        className={`text-sm text-white  font-medium ${title == "Analysis" ? "text-[#FCB43C]" : "text-[#fff]"
                          }`}
                      >
                        Analytics
                      </div>
                      {title == "Analysis" ? (
                        <div
                          className={`w-1 ml-[2px] h-[55px] bac-6 absolute left-0 rounded-sm`}
                        ></div>
                      ) : null}
                    </button>
                    <ul className={`dropdown-menu absolute left-[4rem] z-10 top-5 ${(subtitle == "Brand" || subtitle == "Participants" || subtitle == "BrandCampignReport" || subtitle == "OngoingReport") ? "" : !menuSubmenu && "hidden"} text-gray-700 pt-1`}>
                      <li className="flex items-center px-5 rounded-t-lg">
                        {/* <img src={subtitle == "Brand" ? dashYellowImg : dashImg} alt="dashimage" className="mr-4 h-5 w-5" /> */}
                        <Link to={`${process.env.REACT_APP_FRONT_URL}/all-my-campaigns`} className={`rounded-t ${subtitle == "Brand" ? "text-[#FCB43C]" : "text-[#fff]"
                          } py-2 w-36 block whitespace-no-wrap text-sm hover:text-[#FCB43C]`}>All My Campaigns</Link>
                      </li>
                      <li className="flex items-center px-5 rounded-t-lg">
                        {/* <img src={subtitle == "Brand" ? dashYellowImg : dashImg} alt="dashimage" className="mr-4 h-5 w-5" /> */}
                        <Link to={`${process.env.REACT_APP_FRONT_URL}/all-my-revuers`} className={`rounded-t ${subtitle == "Participants" ? "text-[#FCB43C]" : "text-[#fff]"
                          } py-2 w-36 block whitespace-no-wrap text-sm hover:text-[#FCB43C]`}>All My RevuERs</Link>
                      </li>
                      <li className="flex items-center px-5 rounded-t-lg">
                        {/* <img src={subtitle == "Brand" ? dashYellowImg : dashImg} alt="dashimage" className="mr-4 h-5 w-5" /> */}
                        <Link to={`${process.env.REACT_APP_FRONT_URL}/influencer-outreach`} className={`rounded-t ${subtitle == "BrandCampignReport" ? "text-[#FCB43C]" : "text-[#fff]"
                          } py-2 w-36 block whitespace-no-wrap text-sm hover:text-[#FCB43C]`}>Influencer Outreach</Link>
                      </li>
                      <li className="flex items-center px-5 rounded-t-lg">
                        {/* <img src={subtitle == "Brand" ? dashYellowImg : dashImg} alt="dashimage" className="mr-4 h-5 w-5" /> */}
                        <Link to={`${process.env.REACT_APP_FRONT_URL}/ongoing-report`} className={`rounded-t ${subtitle == "OngoingReport" ? "text-[#FCB43C]" : "text-[#fff]"
                          } py-2 w-36 block whitespace-no-wrap text-sm hover:text-[#FCB43C]`}>Ongoing Report</Link>
                      </li>
                    </ul>
                  </div>

                </li>


                {/* <li className="flex items-center min-h-[60px]  px-9">
  <img
    src={title == "Approvals" ? approvalcolorimg : approvalimg}
    alt="Approvals"
    className="w-5 h-5 object-cover mr-5"
  />
  <Link
    to={`${process.env.REACT_APP_FRONT_URL}/campaign-menegment-active-request`}
    className={`text-sm font-medium ${
      title == "Approvals" ? "text-[#FCB43C]" : "text-[#fff]"
    }`}
  >
    Approvals
  </Link>
  {title == "Approvals" ? (
    <div
      className={`w-1 ml-[2px] h-[55px] bac-6 absolute left-0 rounded-sm`}
    ></div>
  ) : null}
</li> */}

              </ul>

            </div>
            <li className="flex items-center min-h-[60px] block absolute bottom-12 md:hidden lg:hidden px-9">
              <button className="h-8 rounded-full bac-7 items-center flex justify-center text-[9px]">
                <Link to={`${process.env.REACT_APP_FRONT_URL}/campaign-page`} className="w232  font-semibold bac-6 text-white uppercase px-6 py-2 rounded-lg mr-0">Create New Campaign   </Link>
              </button>
            </li>
          </div>


        </aside>

        <header className="bac-7 fixed top-0  w-full text-gray-100 flex justify-between md:hidden" data-dev-hint="mobile menu bar">
          <a href="#" className="block p-4 text-white font-bold whitespace-nowrap truncate">
            RevuER
          </a>



          <div className="flex items-center">
            <label for="menu-open" id="mobile-menu-button" className="m-2 p-2 focus:outline-none hover:text-white hover:bg-gray-700 rounded-md">
              <svg id="menu-open-icon" className="h-6 w-6 transition duration-200 ease-in-out" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg id="menu-close-icon" className="h-6 w-6 transition duration-200 ease-in-out" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </label>
            <div className="dropdown inline-block relative mr-3">
              <button className="w-6 h-6 rounded-full bg-white items-center flex justify-center" onClick={() => setOpenProfileMenu(!profileMenu)}>
                <i class="fa fa-angle-down text-black" aria-hidden="true"></i>
              </button>
              <ul className={`dropdown-menu absolute right-0 z-10 top-14 ${!profileMenu && "hidden"} text-gray-700 pt-1`}>
                <li className="flex bac-6 px-5 rounded-t-lg box-shadow-1">
                  <img src={dropuserimg} alt="dropuserimg" className="mr-4" />
                  {/* <Link to={`${process.env.REACT_APP_FRONT_URL}/my-account`} className="rounded-t text-white py-4 w-36 block whitespace-no-wrap"> My Account</Link> */}
                  <Link to={`${process.env.REACT_APP_FRONT_URL}/my-account`} className="rounded-t text-white py-4 w-36 block whitespace-no-wrap"> My Account</Link>
                </li>
                <li className="flex bg-white box-shadow-1 px-5 rounded-b-lg">
                  <img src={logimg} alt="logimg" className="mr-4" />
                  <button
                    onClick={logoutSession}
                    className="rounded-t text-gray-400 py-4 w-36 block whitespace-no-wrap text-left" > Log Out
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </header>




      </div>
      <LogOutModalModal id="mobile-modal-logout" status_title={modal.status_title} message={modal.message} onFailure={toggleModalLogoutMobile} onSuccess={modal.onSuccess} action_type={modal.action_type} />

    </>
  );
};

export default Sidebar;
