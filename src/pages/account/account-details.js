import logoImages from "../../assets/images/profile-img.svg";
import vectorimg from "../../assets/images/Vector.svg";
import dropuserimg from "../../assets/images/User.svg";
import logimg from "../../assets/images/log-out.svg";
import Bhargaviimg from "../../assets/images/image 110.svg";
import usercolorimg from "../../assets/images/details-user.svg";
import celenderimg from "../../assets/images/calendar-152.svg";
import genderimg from "../../assets/images/gender-c.svg";
import Riyaiimg from "../../assets/images/map-pin.svg";
import mailimg from "../../assets/images/mail.svg";
import erningimg from "../../assets/images/erning-b.svg";
import leaderimg from "../../assets/images/leader-bord.svg";
import phoneimg from "../../assets/images/details-phone.svg";
import { Header, Sidebar } from "../../layouts";
import { AddLibrary } from "../../utils";
import Swiper from "../../components/Swiper";

function Accountdetails() {


  
  return (
    <>
      <section className="pl-0 md:pl-60 lg:pl-[15rem] lg:pt-0 md:pt-0 pt-14">
      <Header
          welcome="Revuer Details"
          extrab="Inbox / /  "
          extra=" Divya Shah"
        />


        <div className="block sm:flex text-center sm:justify-end mr-8 mb-5 mt-4 sm:mt-0">
          <button className="bac-3 px-10 text-white py-3 rounded-lg mr-0 sm:mr-5 text-sm font-bold uppercase sm:mb-0 mb-5">
            Decline Request
          </button>
          <button className="bac-6 px-10 text-white py-3 rounded-lg text-sm font-bold uppercase">
            Accept Request
          </button>
        </div>

        <div className="md:block lg:flex block px-8">
          <div className="flex-initial w-12/12 sm:w-full lg:w-8/12 bac-1 pl-5 sm:pl-7 pr-3 pt-6 pb-12 rounded-xl box-shadow-1 mr-2 mb-8 md:mb-5">
            <h6 className="text-xl font-semibold mb-5 ml-2">Personal Information</h6>
            <div className="md:block lg:flex block social-break">
              <div className="flex-initial w-full sm:w-full lg:w-3/12 bac-1 mr-8 w43">
                <img
                  src={Bhargaviimg}
                  alt="Bhargaviimg"
                  className="h-44 w-full object-cover "
                />
              </div>

              <div className="flex-initial w-12/12 md:w-full lg:w-9/12 bac-1 ">
                <div className="sm:flex block mb-0 sm:mb-14 mt-8 ">
                  <div className="flex-initial w-12/12 md:w-full lg:w-3/12 bac-1 mb-5 sm:mb-0 mr-10">
                    <div className="flex">
                      <div className="mr-2">
                        <img
                          src={usercolorimg}
                          alt="usercolorimg"
                          className="w-4 mt-[3px]"
                        />
                      </div>
                      <div>
                        <h5 className="text-xs text-gray-400">First Name</h5>
                        <p className="text-sm font-medium">Divya</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex-initial w-12/12 sm:w-full lg:w-3/12 bac-1 mb-5 sm:mb-0 mr-10">
                    <div className="flex">
                      <div className="mr-2">
                        <img
                          src={usercolorimg}
                          alt="usercolorimg"
                          className="w-4 mt-[3px]"
                        />
                      </div>
                      <div>
                        <h5 className="text-xs text-gray-400">Last Name</h5>
                        <p className="text-sm font-medium">Shah</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex-initial w-12/12 sm:w-full mb-5 sm:mb-0 lg:w-6/12 bac-1">
                    <div className="flex">
                      <div className="mr-2 mt-[3px]">
                        <img src={celenderimg} alt="celenderimg" className="w-4" />
                      </div>
                      <div>
                        <h5 className="text-xs text-gray-400">DOB</h5>
                        <p className="text-sm font-medium">10 July 1988</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="sm:flex block">
                  <div className="flex-initial w-12/12 sm:w-full lg:w-3/12 bac-1 mb-5 sm:mb-0 mr-5">
                    <div className="flex">
                      <div className="mr-2 mt-[3px]">
                        <img src={genderimg} alt="genderimg" className="w-3" />
                      </div>
                      <div>
                        <h5 className="text-xs text-gray-400">Gender</h5>
                        <p className="text-sm font-medium">Female</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex-initial w-12/12 sm:w-full lg:w-3/12 bac-1 mb-5 sm:mb-0 mr-5">
                    <div className="flex">
                      <div className="mr-2 mt-[3px]">
                        <img src={Riyaiimg} alt="Riyaiimg" className="w-4" />
                      </div>
                      <div>
                        <h5 className="text-xs text-gray-400">Location</h5>
                        <p className="text-sm font-medium">Gujarat</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex-initial w-12/12 sm:w-full lg:w-6/12 mb-5 sm:mb-0 bac-1">
                    <div className="flex">
                      <div className="mr-2">
                        <img src={mailimg} alt="mailimg" className="w-4 mt-[3px]" />
                      </div>
                      <div>
                        <h5 className="text-xs text-gray-400">E-mail ID</h5>
                        <p className="text-sm font-medium">
                          divyashah@testmail.com
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-initial w-12/12 sm:w-full lg:w-5/12 bac-1 md:pl-0 lg:pl-6">
            <div className="box-shadow-1  px-5 py-6 rounded-xl lg:mb-6 mb-10">
              <h5 className="text-xl font-semibold mb-5">Analytics</h5>

              <div className="block sm:flex justify-between social-break ">
                <div className="flex mb-5 sm:mb-0 py152">
                  <div className="mr-2">
                    <img src={erningimg} alt="erningimg" className="w-4 mt-[3px]" />
                  </div>
                  <div>
                    <h5 className="text-xs text-gray-400">Total Earning</h5>
                    <p className="text-sm font-medium">$1000.00</p>
                  </div>
                </div>

                <div className="flex mr-5">
                  <div className="mr-2">
                    <img src={leaderimg} alt="leaderimg" className="w-4 mt-[3px]" />
                  </div>
                  <div>
                    <h5 className="text-xs text-gray-400">Leadearboard rank</h5>
                    <p className="text-sm font-medium">#3</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="box-shadow-1  px-5 py-7 rounded-xl">
              <h5 className="text-xl font-semibold mb-5">Contact Details</h5>

              <div className="block sm:flex justify-between social-break">
                <div className="flex mb-5 sm:mb-0 py152">
                  <div className="mr-2">
                    <img src={mailimg} alt="mailimg" className="w-4 mt-[3px]" />
                  </div>
                  <div>
                    <h5 className="text-xs text-gray-400">E-mail ID</h5>
                    <p className="text-sm font-medium">divyashah@testmail.com</p>
                  </div>
                </div>

                <div className="flex mr-2">
                  <div className="mr-2">
                    <img src={phoneimg} alt="phoneimg" className="w-4 mt-[4px]" />
                  </div>
                  <div>
                    <h5 className="text-xs text-gray-400">Contact Number</h5>
                    <p className="text-sm font-medium">+1800 123 456</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 px-10 mb-8">
          <h3 className="text-black text-xl pl-1 sm:mb-0 mb-20 font-bold tracking-wide text-center sm:text-left">
            Active Campaign
          </h3>
          <Swiper />
        </div>
        <div className="mt-10 px-10 mb-8">
          <h3 className="text-black text-xl pl-1 sm:mb-0 mb-20 font-bold tracking-wide text-center sm:text-left">
            Total Participated Campaign
          </h3>
          <Swiper />
        </div>
      </section>

      <Sidebar />
    </>
  );
}
export default Accountdetails;
