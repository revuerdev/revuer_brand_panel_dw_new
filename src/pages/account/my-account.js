import logimg from "../../assets/images/detals-close.svg";
import Bhargaviimg from "../../assets/images/edit-pancel.svg";
import Socialicon01 from "../../assets/images/socialicon01.png";
import Socialicon02 from "../../assets/images/socialicon02.png";
import Socialicon03 from "../../assets/images/socialicon03.png";
import Socialicon04 from "../../assets/images/socialicon04.png";
import close1 from "../../assets/images/123-detail.svg"
import mail from "../../assets/images/email-account-icon.svg"
import useriimg from "../../assets/images/user-form.svg";
import message from "../../assets/images/password-account-icon.svg"
import about from "../../assets/images/about-icon.svg"
import { toggleModal2, toggleModal, toggleModal4 } from "../../services/edit-modal"
import { Header, Sidebar } from "../../layouts";
import { AccountDetailModal } from "../../components/Modal";
import { PaymentMethodModal } from "../../components/Modal";
import { switchMainTabs } from "../../services/switch-tab"
import { InboxModal } from "../../components/Modal";
import { useState, useEffect } from "react";
import { useSelector } from 'react-redux'
function Myaccount() {
  const [modaltem, setModalItem] = useState({})

  const brandDataDetails = useSelector((state) => state.brandDetails);
  var brandlogin_unique_token = localStorage.getItem("brandlogin_unique_token");
  useEffect(() => {
    switchMainTabs()
  }, [])
  return (
    <>
      <section className="pl-0 md:pl-60 lg:pl-[15rem] lg:pt-0 md:pt-0 pt-14">
        <Header
          welcome="My Acccount"
        />
        <div className="block md:block lg:flex px-5 mb-8">
          <div className="flex-initial w-full md:full lg:w-6/12 mr-8 mb-10 md:mb-10 lg:mb-0 mt-8 md:mt-5 lg:mt-0">
            <div>
              <div className="relative">
                <div className="box-shadow-2 rounded-2xl py-10 px-10">
                  <div className="flex justify-between items-center mb-8">
                    <h4 className="text-lg sm:text-xl lable-color font-semibold bac-1">
                      Personal Information
                    </h4>
                    <div
                      className="w-8 h-8 bac-6 rounded-full items-center flex justify-center cursor-pointer"
                      onClick={() => { setModalItem({ top: "-top-10", none: "hidden", brandicon: "top-[1.1rem]", block: "block", modalName: "Personal Information", left: "left-0", firstName: "First Name", firstNamePlaceholder: "Enter First Name", lastName: "Last Name", lastNamePlaceholder: "Enter Last Name", aboutName: "Email", aboutNamePlaceholder: "Enter Email Address", lastimg: useriimg, firstimg: useriimg, aboutimg: message, type: true, status: "Cancel!", firstNameValue: brandDataDetails.first_name ? brandDataDetails.first_name : "", lastNameValue: brandDataDetails.last_name ? brandDataDetails.last_name : "", aboutUsValue: '', action_type: 1, status: true }); toggleModal2() }}>
                      <img src={Bhargaviimg} alt="Bhargaviimg" className="w-3" />
                    </div>
                  </div>

                  <div className="flex justify-between w-4/6 mb-4">
                    <h4 className="text-sm font-normal text-[#797979]">
                      First Name
                    </h4>
                    <h4 className="text-sm font-normal  text-[#797979]">
                      Last Name
                    </h4>
                  </div>

                  <div className="flex justify-between w-4/6 mb-4">
                    <h4 className="text-base font-medium lable-color">{brandDataDetails.first_name ? brandDataDetails.first_name : ""}</h4>
                    <h4 className="text-base font-medium lable-color mr-2">
                      {brandDataDetails.last_name ? brandDataDetails.last_name : ""}
                    </h4>
                  </div>

                  <h4 className="text-sm font-normal text-[#797979] mb-4">Email</h4>
                  <h4 className="text-sm font-medium lable-color text-black">
                    {brandDataDetails.email ? brandDataDetails.email : ""}
                  </h4>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-initial w-full md:full lg:w-6/12">
            <div>
              <div className="relative">
                <div className="box-shadow-2 rounded-2xl py-10 px-10">
                  <div className="flex justify-between items-center mb-8">
                    <h4 className="text-lg sm:text-xl lable-color font-semibold bac-1">
                      Brand Information
                    </h4>
                    <div


                      className="w-8 h-8 bac-6 rounded-full items-center flex justify-center cursor-pointer "
                      onClick={() => { setModalItem({ top: "-top-10", none: "block", block: "hidden", modalName: "Brand Information", left: "right-[3%] md:right-[3%] lg:right-[-41%]", brandicon: "top-[22px]", firstName: "Brand Name", firstNamePlaceholder: "Enter Brand Name", lastName: "Category", lastNamePlaceholder: "Enter Last Name", aboutName: "About", aboutNamePlaceholder: "Enter About details", lastimg: useriimg, firstimg: about, type: true, status: "Cancel!", firstNameValue: brandDataDetails.brand_name ? brandDataDetails.brand_name : "", lastNameValue: brandDataDetails.category_id ? brandDataDetails.category_id : "", aboutUsValue: brandDataDetails.brand_description ? brandDataDetails.brand_description : "", action_type: 2, status: true }); toggleModal2() }}>
                      <img src={Bhargaviimg} alt="Bhargaviimg" className="w-3" />
                    </div>
                  </div>

                  <div className="flex justify-between w-4/6 mb-4">
                    <h4 className="text-sm font-normal text-[#797979]">
                      Brand Name
                    </h4>
                    <h4 className="text-sm font-normal  text-[#797979]">
                      Category
                    </h4>
                  </div>

                  <div className="flex justify-between w-6/6 mb-4">
                    <h4 className="text-base font-medium lable-color">{brandDataDetails.brand_name ? brandDataDetails.brand_name : ""}</h4>
                    <h4 className="text-base font-medium lable-color mr-2 sm:mr-[7.3rem]">
                      {brandDataDetails && brandDataDetails.category_name}
                    </h4>
                  </div>

                  <h4 className="text-sm text-[#797979] mb-4">About us</h4>
                  <h4 className="text-xs lg:text-[13px] lable-color font-medium">
                    {brandDataDetails.brand_description ? brandDataDetails.brand_description : ""}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="block md:block lg:flex px-5 mb-5">
          <div className="flex-initial w-full md:full lg:w-6/12 mr-8 mb-10 md:mb-10 lg:mb-0 mt-8 md:mt-5 lg:mt-0">
            <div className="relative">
              <div className="box-shadow-2 rounded-2xl py-10 px-10">
                <h4 className="text-lg sm:text-xl font-semibold mb-5">
                  Security Setting
                </h4>
                {/* 
                <p className="text-sm font-medium lable-color mt-5 mb-8">
                  Two factor authentication is enabled. You’ll need to enter
                  your PIN when registering your E-mail with RevuER again.
                </p> */}

                <div className="flex items-center mb-7">
                  <div>
                    <img src={close1} alt="close" className="mr-8 w-5" />
                  </div>
                  <div className="cursor-pointer ">
                    <h5 className="text-sm text-[#ffa204] font-medium" onClick={() => { setModalItem({ top: "-top-10", none: "block", block: "block", modalName: "Change Password", left: "left-0", brandicon: "top-[22px]", firstName: "Enter Old Password", firstNamePlaceholder: "*********", lastName: "Enter New Passowrd", lastNamePlaceholder: "*********", aboutName: "Enter Confirm Password", aboutNamePlaceholder: "*********", lastimg: useriimg, firstimg: about, type: true, status: "Cancel!", firstNameValue: "", lastNameValue: "", aboutUsValue: "", action_type: 3, status: true }); toggleModal2() }} >Change Password</h5>
                  </div>
                </div>
                <div className="flex items-center mb-7">
                  <div>
                    <img src={mail} alt="mail" className="mr-8 w-5" />
                  </div>
                  <div className="cursor-pointer ">
                    <h5 className="text-sm text-[#ffa204] font-medium" onClick={() => { setModalItem({ top: "-top-10", none: "block", block: "block", modalName: "Change Email", left: "left-0", brandicon: "top-[22px]", firstName: "Old Email", firstNamePlaceholder: "Enter Old Email", lastName: "New Email", lastNamePlaceholder: "Enter New Email", aboutName: "", aboutNamePlaceholder: "", lastimg: useriimg, firstimg: about, type: true, status: "Cancel!", firstNameValue: brandDataDetails.email ? brandDataDetails.email : "", lastNameValue: "", aboutUsValue: "", action_type: 4, status: true }); toggleModal2() }} >Change email address</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-initial w-full md:full lg:w-6/12">
            <div className="relative">
              <div className="box-shadow-2 rounded-2xl py-10 px-10 pb-[5rem]">
                <div className="flex justify-between items-center mb-8">
                  <h4 className="text-lg sm:text-xl lable-color font-semibold bac-1">
                    Social Connection
                  </h4>
                  <div
                    className="w-8 h-8 bac-6 rounded-full items-center flex justify-center cursor-pointer "
                    onClick={() => {
                      setModalItem({});
                      setModalItem({
                        top: "top-60", none: "block", block: "hidden", modalName: "Social Connections", left: "right-[3%] md:right-[3%] lg:right-[-41%]", brandicon: "top-[22px]",
                        formData: { instagram: brandDataDetails.instagram_link, facebook: brandDataDetails.facebook_link, linkedin: brandDataDetails.linkedin_link, youtube: brandDataDetails.youtube_link, brandlogin_unique_token }, lastimg: useriimg, firstimg: about, type: true, status: "Cancel!", action_type: 5, status: true
                      }); toggleModal2()
                    }}>
                    <img src={Bhargaviimg} alt="Bhargaviimg" className="w-3" />
                  </div>
                  {/* <div
                    className="w-8 h-8 bac-6 rounded-full items-center flex justify-center cursor-pointer "
                    onClick={() => { setModalItem({ top: "top-60", none: "block", block: "hidden", modalName: "Brand Information", left: "right-[3%] md:right-[3%] lg:right-[-41%]", brandicon: "top-[22px]", firstName: "Instagram", firstNamePlaceholder: "Enter Instagram Url", lastName: "Category", lastNamePlaceholder: "Enter Last Name", aboutName: "About", aboutNamePlaceholder: "Enter About details", lastimg: useriimg, firstimg: about, type: true, status: "Cancel!", firstNameValue: brandDataDetails.brand_name ? brandDataDetails.brand_name : "", lastNameValue: brandDataDetails.category_id ? brandDataDetails.category_id : "", aboutUsValue: brandDataDetails.brand_description ? brandDataDetails.brand_description : "", action_type: 5, status: true }); toggleModal2() }}>
                    <img src={Bhargaviimg} alt="Bhargaviimg" className="w-3" />
                  </div> */}
                </div>
                <div className="flex justify-between w-6/6 mb-4">
                  <h4 className="text-sm font-normal text-[#797979]">
                    Social Handles
                  </h4>
                  <div className="flex justify-between text-sm font-normal m-auto text-[#797979]">
                    {brandDataDetails.instagram_link && <a href={brandDataDetails.instagram_link} target="_blank"><img src={Socialicon01} alt="Socialicon01" className="w-10 px-2" /></a>}
                    {brandDataDetails.facebook_link && <a href={brandDataDetails.facebook_link} target="_blank"><img src={Socialicon02} alt="Socialicon02" className="w-10 px-2" /></a>}
                    {brandDataDetails.linkedin_link && <a href={brandDataDetails.linkedin_link} target="_blank"><img src={Socialicon03} alt="Socialicon03" className="w-10 px-2" /></a>}
                    {brandDataDetails.youtube_link && <a href={brandDataDetails.youtube_link} target="_blank"><img src={Socialicon04} alt="Socialicon04" className="w-10 px-2" /></a>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AccountDetailModal none={modaltem.none} brandicon={modaltem.brandicon} modalName={modaltem.modalName} block={modaltem.block} firstNamePlaceholder={modaltem.firstNamePlaceholder} lastimg={modaltem.lastimg} firstimg={modaltem.firstimg} aboutimg={modaltem.aboutimg} top={modaltem.top} left={modaltem.left} firstName={modaltem.firstName} lastName={modaltem.lastName} aboutName={modaltem.aboutName} lastNamePlaceholder={modaltem.lastNamePlaceholder} aboutNamePlaceholder={modaltem.aboutNamePlaceholder} firstNameValue={modaltem.firstNameValue} lastNameValue={modaltem.lastNameValue} aboutUsValue={modaltem.aboutUsValue} action_type={modaltem.action_type} modalShowHide={modaltem.status} formData={modaltem.formData} />
      <PaymentMethodModal />
      < InboxModal />

      <Sidebar />
    </>
  );
}
export default Myaccount;
