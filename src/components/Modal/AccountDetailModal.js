import Bhargaviimg from "../../assets/images/done-pop.svg";
import close from "../../assets/images/close-pop.svg"
import selecticon from "../../assets/images/down-select.svg";
import { toggleModal2 } from "../../services/edit-modal"
import { useEffect, useState } from "react";
import { customSelect1 } from '../../utils/custom-select1';
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from 'react-redux'
import { getCategoryList } from "../../context/actions/category"
import { brandProfileEmailOtp, brandProfileDataUpdate, socialDataUpdate } from "../../context/actions/brand";

export const AccountDetailModal = ({ top, left, brandicon, none, block, firstName, aboutimg, firstimg, lastimg, modalName, firstNamePlaceholder, lastName, lastNamePlaceholder, aboutName, aboutNamePlaceholder, firstNameValue, lastNameValue, aboutUsValue, action_type, modalShowHide = false, formData }) => {

    const { register, handleSubmit, reset } = useForm()
    const dispatch = useDispatch();
    var brandlogin_unique_token = localStorage.getItem("brandlogin_unique_token");

    var session_old_email_otp = localStorage.getItem("old_email_otp");
    var session_new_email_otp = localStorage.getItem("new_email_otp");
    var session_change_new_email = localStorage.getItem("change_new_email");

    const [verifyValue, setVerifyValue] = useState(1)
    const [displayOtp, setDisplayOtp] = useState(false)

    const [firstNameValidateError, setFirstNameValidateError] = useState('')
    const [lastNameValidateError, setLastNameValidateError] = useState('')
    const [aboutUsValidateError, setAboutUsValidateError] = useState('')
    const [oldPasswordValidateError, setOldPasswordValidateError] = useState('')
    const [newPasswordValidateError, setNewPasswordValidateError] = useState('')
    const [confPasswordValidateError, setConfPasswordValidateError] = useState('')
    const [newEmailValidateError, setNewEmailValidateError] = useState('')
    const [newEmailOTPValidateError, setNewEmailOTPValidateError] = useState('')
    const [oldEmailOTPValidateError, setOldEmailOTPValidateError] = useState('')

    const categoryListData = useSelector((state) => state.categoryList);

    const passwordRegEx = RegExp(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,50}$/);

    const emailRegEx = RegExp(/^([a-zA-Z0-9_\-\.]+)\+?([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/);

    useEffect(() => {
        document.getElementsByClassName("select-selected-1").length == 0 &&
            customSelect1();
        dispatch(getCategoryList())
    }, []);
    const [validationError, setValidationError] = useState({ instagram: '', facebook: '', linkedin: '', youtube: '' })
    const brandProfileUpdate = () => {
        if (action_type == 1) {
            var firstNameId = document.getElementById("first_name");
            var firstName = firstNameId.value;

            var lastNameId = document.getElementById("last_name")
            var lastName = lastNameId.value;

            if (firstName.trim() == "" || firstName.length < 2) {
                setFirstNameValidateError("Please Enter First Name")
                firstNameId.classList.add("error")
            } else {
                setFirstNameValidateError("")
                firstNameId.classList.remove("error")
            }

            if (lastName.trim() == "" || lastName.length < 2) {
                setLastNameValidateError("Please Enter Last Name")
                lastNameId.classList.add("error")
            } else {
                setLastNameValidateError("")
                lastNameId.classList.remove("error")
            }

            if (firstName.trim() != "" && firstName.length > 2 && lastName.trim() != "" && lastName.length > 0) {

                const mainData = {
                    first_name: firstName,
                    last_name: lastName,
                    brandlogin_unique_token: brandlogin_unique_token,
                    action_type: action_type
                }
                dispatch(brandProfileDataUpdate(mainData))
                setTimeout(function () {
                    window.location.reload(1);
                }, 2000);
            }

        } else if (action_type == 2) {
            var brandNameId = document.getElementById("brand_name");
            var brandName = brandNameId.value;

            var brandDescriptionId = document.getElementById("brand_description");
            var brandDescription = brandDescriptionId.value;

            var categoryId = document.getElementById("category");
            var category = categoryId.value;

            if (brandName.trim() == "" || brandName.length < 2) {
                setFirstNameValidateError("Please Enter Brand Name")
                brandNameId.classList.add("error")
            } else {
                setFirstNameValidateError("")
                brandNameId.classList.remove("error")
            }

            if (brandName.trim() != "" && brandName.length > 2) {

                const mainData = {
                    brand_name: brandName,
                    brand_description: brandDescription,
                    category: category,
                    brandlogin_unique_token: brandlogin_unique_token,
                    action_type: action_type
                }
                dispatch(brandProfileDataUpdate(mainData))
                setTimeout(function () {
                    window.location.reload(1);
                }, 2000);
            }
        } else if (action_type == 3) {
            var oldPasswordId = document.getElementById("old_password");
            var oldPassword = oldPasswordId.value;

            var newPasswordId = document.getElementById("new_password");
            var newPassword = newPasswordId.value;

            var confirmPasswordId = document.getElementById("confirm_password");
            var confirmPassword = confirmPasswordId.value;

            if (oldPassword.trim() == "") {
                setOldPasswordValidateError("Please Enter Old Password")
                oldPasswordId.classList.add("error")
            } else {
                setOldPasswordValidateError("")
                oldPasswordId.classList.remove("error")
            }

            if (!passwordRegEx.test(newPassword.trim())) {
                setNewPasswordValidateError("Please Enter valid Password")
                newPasswordId.classList.add("error")
            } else {
                setNewPasswordValidateError("")
                newPasswordId.classList.remove("error")
            }

            if (newPassword != confirmPassword) {
                setConfPasswordValidateError("New Password and Confirm Password not matched")
                confirmPasswordId.classList.add("error")
            } else {
                setConfPasswordValidateError("")
                confirmPasswordId.classList.remove("error")
            }

            if (oldPassword.trim() != "" && passwordRegEx.test(newPassword.trim()) && (newPassword == confirmPassword)) {
                const mainData = {
                    old_password: oldPassword,
                    new_password: newPassword,
                    brandlogin_unique_token: brandlogin_unique_token,
                    action_type: action_type
                }
                dispatch(brandProfileDataUpdate(mainData))
            }

        } else if (action_type == 4) {

            var verifyValueId = document.getElementById("verify_value")
            var verifyValue = verifyValueId.value

            var newEmailId = document.getElementById("new_email")
            var newEmail = newEmailId.value

            if (verifyValue == 1) {

                if (newEmail.trim() == "" && !emailRegEx.test(newEmail.trim())) {
                    setNewEmailValidateError("Please Enter valid email")
                    newEmailId.classList.add("error")
                } else {
                    setNewEmailValidateError("")
                    newEmailId.classList.remove("error")
                }

                if (newEmail.trim() != "" && emailRegEx.test(newEmail.trim())) {
                    const mainData = {
                        new_email: newEmail,
                        old_email: firstNameValue,
                        brandlogin_unique_token: brandlogin_unique_token,
                        action_type: action_type
                    }
                    dispatch(brandProfileEmailOtp(mainData))
                    setVerifyValue(2)
                    setDisplayOtp(true)
                }

            } else {
                var oldEmailOtpId = document.getElementById("old_email_otp")
                var oldEmailOtp = oldEmailOtpId.value

                var newEmailOtpId = document.getElementById("new_email_otp")
                var newEmailOtp = newEmailOtpId.value

                if (newEmail.trim() == "" && !emailRegEx.test(newEmail.trim())) {
                    setNewEmailValidateError("Please Enter valid email")
                    newEmailId.classList.add("error")
                } else {
                    setNewEmailValidateError("")
                    newEmailId.classList.remove("error")
                }

                if (oldEmailOtp.trim() == "") {
                    setOldEmailOTPValidateError("Please Enter old email OTP")
                    oldEmailOtpId.classList.add("error")
                } else {
                    setOldEmailOTPValidateError("")
                    oldEmailOtpId.classList.remove("error")
                }

                if (newEmailOtp.trim() == "") {
                    setNewEmailOTPValidateError("Please Enter new email OTP")
                    newEmailOtpId.classList.add("error")
                } else {
                    setNewEmailOTPValidateError("")
                    newEmailOtpId.classList.remove("error")
                }

                if (oldEmailOtp.trim() != "" && newEmailOtp.trim() != "" && newEmail.trim() != "") {
                    if (newEmail != session_change_new_email) {
                        setNewEmailValidateError("Wrong Email")
                        newEmailId.classList.add("error")
                    } else {
                        setNewEmailValidateError("")
                        newEmailId.classList.remove("error")
                    }

                    if (oldEmailOtp != session_old_email_otp) {
                        setOldEmailOTPValidateError("Old email OTP did not matched")
                        oldEmailOtpId.classList.add("error")
                    } else {
                        setOldEmailOTPValidateError("d")
                        oldEmailOtpId.classList.remove("error")
                    }

                    if (newEmailOtp != session_new_email_otp) {
                        setNewEmailOTPValidateError("New email OTP did not matched")
                        newEmailOtpId.classList.add("error")
                    } else {
                        setNewEmailOTPValidateError("")
                        newEmailOtpId.classList.remove("error")
                    }

                    if ((newEmail == session_change_new_email) && (oldEmailOtp == session_old_email_otp) && (newEmailOtp == session_new_email_otp)) {
                        const mainData = {
                            new_email: newEmail,
                            brandlogin_unique_token: brandlogin_unique_token,
                            action_type: action_type
                        }
                        dispatch(brandProfileDataUpdate(mainData))
                    }
                }
            }
        } else if (action_type == 5) {
            var instaId = document.getElementById("instagram_url");
            var fbId = document.getElementById("facebook_url");
            var linkedinId = document.getElementById("linkedin_url");
            var youtubeId = document.getElementById("youtube_url");
            const instagramUrlRegEx = RegExp(/(?:(?:http|https):\/\/)?(?:www.)?(?:instagram.com|instagr.am|instagr.com)\/(\w+)/);
            const facebookUrlRegEx = RegExp(/^(https?:\/\/)?((w{3}\.)?)facebook.com\/.*/);
            const linkedINUrlRegEx = RegExp(/(ftp|http|https):\/\/?(?:www\.)?linkedin.com(\w+:{0,1}\w*@)?(\S+)(:([0-9])+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/);
            const youTubeUrlRegEx = RegExp(/^(https?\:\/\/)?(www\.youtube\.com|youtu\.be)\/.+$/);


            if (instaId.value.trim() == "") {
                setValidationError(prev => ({ ...prev, instagram: "Please Enter Instagram Url" }))
                instaId.classList.add("error")
            } else if (!instagramUrlRegEx.test(instaId.value.trim())) {
                setValidationError(prev => ({ ...prev, instagram: "Please enter valid URL" }))
                instaId.classList.add("error")
            } else {
                setValidationError(prev => ({ ...prev, instagram: '' }))
                instaId.classList.remove("error")
            }
            if (fbId.value.trim() == "") {
                setValidationError(prev => ({ ...prev, facebook: "Please Enter Facebook Url" }))
                fbId.classList.add("error")
            } else if (!facebookUrlRegEx.test(fbId.value.trim())) {
                setValidationError(prev => ({ ...prev, facebook: "Please enter valid URL" }))
                fbId.classList.add("error")
            } else {
                setValidationError(prev => ({ ...prev, facebook: '' }))
                fbId.classList.remove("error")
            }
            if (linkedinId.value.trim() == "") {
                setValidationError(prev => ({ ...prev, linkedin: "Please Enter LinkedIn Url" }))
                linkedinId.classList.add("error")
            } else if (!linkedINUrlRegEx.test(linkedinId.value.trim())) {
                setValidationError(prev => ({ ...prev, linkedin: "Please enter valid URL" }))
                linkedinId.classList.add("error")
            } else {
                setValidationError(prev => ({ ...prev, linkedin: '' }))
                linkedinId.classList.remove("error")
            }
            if (youtubeId.value.trim() == "") {
                setValidationError(prev => ({ ...prev, youtube: "Please Enter YouTube Url" }))
                youtubeId.classList.add("error")
            } else if (!youTubeUrlRegEx.test(youtubeId.value.trim())) {
                setValidationError(prev => ({ ...prev, youtube: "Please enter valid URL" }))
                youtubeId.classList.add("error")
            } else {
                setValidationError(prev => ({ ...prev, youtube: '' }))
                youtubeId.classList.remove("error")
            }
            if ((instaId.value.trim() != "") && (fbId.value.trim() != "") && (linkedinId.value.trim() != "") && (youtubeId.value.trim() != "") && (instagramUrlRegEx.test(instaId.value.trim())) && (facebookUrlRegEx.test(fbId.value.trim())) && (linkedINUrlRegEx.test(linkedinId.value.trim())) && (youTubeUrlRegEx.test(youtubeId.value.trim()))) {
                const mainData = {
                    instagram_link: instaId.value,
                    facebook_link: fbId.value,
                    linkedin_link: linkedinId.value,
                    youtube_link: youtubeId.value,
                    brandlogin_unique_token: formData.brandlogin_unique_token
                }
                dispatch(socialDataUpdate(mainData))
            }
        }
    }
    return (
        <div className={`fixed z-10 overflow-y-auto edit-modal-positions  w-full ${modalShowHide ? '' : 'hidden'}`} id="modal-2">
            <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 transition-opacity">
                    <div className="absolute inset-0 bg-gray-900 opacity-75" />
                </div>
                <span className=" sm:inline-block sm:align-middle h-screen">&#8203;</span>
                <div
                    className="inline-block align-center bg-white rounded-2xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-[37.3rem]  w-[90%] sm:w-full absolute lg:left-[16.6rem] left-5 md:left-[14%] top-28"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="modal-headline"
                >
                    <div className="bg-white">
                        <div className="border border-[#d6d6d6] rounded-lg py-8 px-2.5 sm:px-5">

                            {action_type == 1 &&
                                <>
                                    <div className="flex justify-between items-center mb-8 px-5">
                                        <div>
                                            <h4 className="text-lg sm:text-2xl lable-color font-semibold bac-1">{modalName}</h4>
                                        </div>

                                        <div className="flex">
                                            <div onClick={toggleModal2} className="w-8 h-8 bac-3 rounded-full items-center flex justify-center right-14 lg:right-18 mr-3 cursor-pointer">
                                                <img src={close} alt="close" className="w-3" />
                                            </div>

                                            <div onClick={brandProfileUpdate} className="w-8 h-8 bac-6 rounded-full items-center flex justify-center right-2 lg:right-0 cursor-pointer">
                                                <img src={Bhargaviimg} alt="Bhargaviimg" className="w-3" />
                                            </div>
                                        </div>
                                    </div>
                                    <form className="theme-form ng-untouched ng-pristine ng-valid">
                                        <div className="block md:block lg:flex px-5 mb-2">
                                            <div className="flex-initial w-full md:full lg:w-6/12 mr-10 mb-2 md:mb-4 lg:mb-0">
                                                <label className="lable-color text-base font-semibold">{firstName}</label>
                                                <div className="block relative">
                                                    <input type="text" id="first_name" name="first_name" {...register("first_name")} defaultValue={firstNameValue} placeholder={firstNamePlaceholder} required="" className="box-shadow-3 h-11  px-2 rounded-lg border border-[#001540] bg-white w-full mt-2 mb-2 text-sm placeholder-black focus:outline-none" />
                                                    <div className={`absolute ${brandicon} top-[1.2rem] right-3`}>
                                                        <img src={firstimg} className="w-6" />
                                                    </div>
                                                    {firstNameValidateError && <label className="error">{firstNameValidateError}</label>}
                                                </div>
                                            </div>
                                            <div className={`flex-initial w-full ${block} md:full lg:w-6/12 mb-2 md:mb-4 lg:mb-0`}>
                                                <label className="lable-color text-base font-semibold">{lastName}</label>
                                                <div className="block relative">
                                                    <input type="text" id="last_name" name="last_name" {...register("last_name")} defaultValue={lastNameValue} placeholder={lastNamePlaceholder} required="" className="box-shadow-3 h-11 px-2 rounded-lg border border-[#001540] bg-white w-full mt-2 mb-2 text-sm placeholder-black focus:outline-none" />
                                                    <div className="absolute top-[1.1rem] right-3">
                                                        <img src={lastimg} className="w-6" />
                                                    </div>
                                                    {lastNameValidateError && <label className="error">{lastNameValidateError}</label>}
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </>
                            }
                            {action_type == 2 &&
                                <>
                                    <div className="flex justify-between items-center mb-8 px-5">
                                        <div>
                                            <h4 className="text-lg sm:text-2xl lable-color font-semibold bac-1">{modalName}</h4>
                                        </div>

                                        <div className="flex">
                                            <div onClick={() => { toggleModal2(); modalShowHide = false }} className="w-8 h-8 bac-3 rounded-full items-center flex justify-center right-14 lg:right-18  mr-3 cursor-pointer">
                                                <img src={close} alt="close" className="w-3" />
                                            </div>

                                            <div onClick={brandProfileUpdate} className="w-8 h-8 bac-6 rounded-full items-center flex justify-center right-2 lg:right-0 cursor-pointer">
                                                <img src={Bhargaviimg} alt="Bhargaviimg" className="w-3" />
                                            </div>
                                        </div>
                                    </div>
                                    <form className="theme-form ng-untouched ng-pristine ng-valid">
                                        <div className="block md:block lg:flex px-5 mb-2">
                                            <div className="flex-initial w-full md:full lg:w-6/12 mr-10 mb-2 md:mb-4 lg:mb-0">
                                                <label className="lable-color text-base font-semibold">{firstName}</label>
                                                <div className="block relative">
                                                    <input type="text" id="brand_name" placeholder={firstNamePlaceholder} name="brand_name" {...register("brand_name")} defaultValue={firstNameValue} required="" className="box-shadow-3 h-11  px-2 rounded-lg border border-[#001540] bg-white w-full mt-2 mb-2 text-sm placeholder-black focus:outline-none" />
                                                    <div className={`absolute ${brandicon} top-[1.2rem] right-3`}>
                                                        <img src={firstimg} className="w-6" />
                                                    </div>
                                                    {firstNameValidateError && <label className="error">{firstNameValidateError}</label>}
                                                </div>
                                            </div>
                                            <div className={`flex-initial w-full ${none} md:full lg:w-6/12 mb-2 md:mb-4 lg:mb-0`}>
                                                <label className="lable-color text-base font-semibold">{lastName}</label>
                                                <div className="block relative">
                                                    <select {...register("category")} id="category" name="category" className="mt-2 form-select appearance-none block w-full px-3 h-12 text-sm font-normal lable-color bg-white bg-clip-padding bg-no-repeat rounded-lg border border-[#95A5A6] transition ease-in-out m-0 sm:m-2 focus:text-gray-700 focus:bg-white focus:border-black focus:outline-none" aria-label="Default select example focus:outline-none" >
                                                        {categoryListData.map((item, index) => {
                                                            return (
                                                                <option key={item._id} value={item._id} selected={item._id == lastNameValue ? "selected" : ""} >{item.name}</option>
                                                            )
                                                        })}
                                                    </select>
                                                    <img
                                                        src={selecticon}
                                                        alt="selecticon"
                                                        className="w-3 h-2.5 absolute top-[20px] right-2.5  block sm:mr-2 sm:m-none mx-auto"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="px-5">
                                            <label className="lable-color text-base font-semibold">{aboutName}</label>
                                            <div className="block relative">
                                                <input type="text" id="brand_description" name="brand_description" defaultValue={aboutUsValue} {...register("brand_description")} placeholder={aboutNamePlaceholder} required="" className="box-shadow-3 h-11 px-2 rounded-lg border border-[#001540] bg-white w-full mt-2 mb-2 text-sm placeholder-black focus:outline-none" />
                                                <div className="absolute top-[1.2rem] right-3">
                                                    <img src={aboutimg} />
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </>
                            }
                            {action_type == 3 &&
                                <>
                                    <div className="flex justify-between items-center mb-8 px-5">
                                        <div>
                                            <h4 className="text-lg sm:text-2xl lable-color font-semibold bac-1">{modalName}</h4>
                                        </div>

                                        <div className="flex">
                                            <div onClick={toggleModal2} className="w-8 h-8 bac-3 rounded-full items-center flex justify-center right-14 lg:right-18  mr-3 cursor-pointer">
                                                <img src={close} alt="close" className="w-3" />
                                            </div>

                                            <div onClick={brandProfileUpdate} className="w-8 h-8 bac-6 rounded-full items-center flex justify-center right-2 lg:right-0 cursor-pointer">
                                                <img src={Bhargaviimg} alt="Bhargaviimg" className="w-3" />
                                            </div>
                                        </div>
                                    </div>
                                    <form className="theme-form ng-untouched ng-pristine ng-valid">
                                        <div className="block md:block lg:flex px-5 mb-2">
                                            <div className="flex-initial w-full md:full relative lg:w-6/12 mr-10 mb-2 md:mb-4 lg:mb-0">
                                                <label className="lable-color text-base font-semibold">{firstName}</label>
                                                <div className="block relative">
                                                    <input type="text" autoComplete="off" id="old_password" placeholder={firstNamePlaceholder} name="old_password" {...register("old_password")} required="" className="box-shadow-3 h-11  px-2 rounded-lg border border-[#001540] bg-white w-full mt-2 mb-2 text-sm placeholder-black focus:outline-none" />
                                                    <div className={`absolute ${brandicon} top-[1.2rem] right-3`}>
                                                        <img src={firstimg} className="w-6" />
                                                    </div>
                                                    {oldPasswordValidateError && <label className="error">{oldPasswordValidateError}</label>}
                                                </div>
                                            </div>

                                            <div className={`flex-initial w-full md:full relative lg:w-6/12 mb-2 md:mb-4 lg:mb-0`}>
                                                <label className="lable-color text-base font-semibold">{lastName}</label>
                                                <div className="block relative">
                                                    <input type="text" id="new_password" autoComplete="off" name="new_password" {...register("new_password")} placeholder={lastNamePlaceholder} required="" className="box-shadow-3 h-11 px-2 rounded-lg border border-[#001540] bg-white w-full mt-2 mb-2 text-sm placeholder-black focus:outline-none" />
                                                    <div className="absolute top-[1.1rem] right-3">
                                                        <img src={lastimg} className="w-6" />
                                                    </div>
                                                    {newPasswordValidateError && <label className="error">{newPasswordValidateError}</label>}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="px-5 relative">
                                            <label className="lable-color text-base font-semibold">{aboutName}</label>
                                            <div className="block relative">
                                                <input type="text" id="confirm_password" autoComplete="off" name="confirm_password" {...register("confirm_password")} placeholder={aboutNamePlaceholder} required="" className="box-shadow-3 h-11 px-2 rounded-lg border border-[#001540] bg-white w-full mt-2 mb-2 text-sm placeholder-black focus:outline-none" />
                                                <div className="absolute top-[1.2rem] right-3">
                                                    <img src={aboutimg} />
                                                </div>
                                                {confPasswordValidateError && <label className="error">{confPasswordValidateError}</label>}
                                            </div>
                                        </div>
                                    </form>
                                </>
                            }
                            {action_type == 4 &&
                                <>
                                    <input type="hidden" readOnly name="verify_value" id="verify_value" value={verifyValue} />
                                    <div className="flex justify-between items-center mb-8 px-5">
                                        <div>
                                            <h4 className="text-lg sm:text-2xl lable-color font-semibold bac-1">{modalName}</h4>
                                        </div>

                                        <div className="flex">
                                            <div onClick={toggleModal2} className="w-8 h-8 bac-3 rounded-full items-center flex justify-center right-14 lg:right-18 mr-3 cursor-pointer">
                                                <img src={close} alt="close" className="w-3" />
                                            </div>

                                            <div onClick={brandProfileUpdate} className="w-8 h-8 bac-6 rounded-full items-center flex justify-center right-2 lg:right-0 cursor-pointer">
                                                <img src={Bhargaviimg} alt="Bhargaviimg" className="w-3" />
                                            </div>
                                        </div>
                                    </div>
                                    <form className="theme-form ng-untouched ng-pristine ng-valid">

                                        <div className="block md:block lg:flex px-5 mb-2">
                                            <div className="flex-initial w-full md:full lg:w-6/12 mr-10 mb-2 md:mb-4 lg:mb-0">
                                                <label className="lable-color text-base font-semibold">{firstName}</label>
                                                <div className="block relative">
                                                    <input type="text" id="old_email" defaultValue={firstNameValue} disabled placeholder={firstNamePlaceholder} name="old_email" {...register("old_email")} required="" className="box-shadow-3 h-11  px-2 rounded-lg border border-[#001540] bg-white w-full mt-2 mb-2 text-sm placeholder-black focus:outline-none" />
                                                    <div className={`absolute ${brandicon} top-[1.2rem] right-3`}>
                                                        <img src={firstimg} className="w-6" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className={`flex-initial w-full md:full lg:w-6/12 mb-2 md:mb-4 lg:mb-0`}>
                                                <label className="lable-color text-base font-semibold">{lastName}</label>
                                                <div className="block relative">
                                                    <input type="text" id="new_email" name="new_email" {...register("new_email")} placeholder={lastNamePlaceholder} required="" className="box-shadow-3 h-11 px-2 rounded-lg border border-[#001540] bg-white w-full mt-2 mb-2 text-sm placeholder-black focus:outline-none" />
                                                    <div className="absolute top-[1.1rem] right-3">
                                                        <img src={lastimg} className="w-6" />
                                                    </div>
                                                    {newEmailValidateError && <label className="error">{newEmailValidateError}</label>}
                                                </div>
                                            </div>
                                        </div>
                                        {
                                            displayOtp ?
                                                <>
                                                    <div className="block md:block lg:flex px-5 mb-2 gap-5">
                                                        <div className={`flex-initial w-full md:full lg:w-6/12 mb-2 md:mb-4 mr-10 lg:mb-0`}>
                                                            <label className="lable-color text-base font-semibold">Old Email OTP</label>
                                                            <div className="block relative">
                                                                <input type="text" id="old_email_otp" name="old_email_otp" {...register("old_email_otp")} placeholder="Enter Old Email OTP" required="" className="box-shadow-3 h-11 px-2 rounded-lg border border-[#001540] bg-white w-full mt-2 mb-2 text-sm placeholder-black focus:outline-none" />
                                                                <div className="absolute top-[1.1rem] right-3">
                                                                    <img src={lastimg} className="w-6" />
                                                                </div>
                                                                {oldEmailOTPValidateError && <label className="error">{oldEmailOTPValidateError}</label>}
                                                            </div>
                                                        </div>
                                                        <div className={`flex-initial relative w-full md:full lg:w-6/12 mb-2 md:mb-4 lg:mb-0`}>
                                                            <label className="lable-color text-base font-semibold">New Email OTP</label>
                                                            <div className="block relative">
                                                                <input type="text" id="new_email_otp" name="new_email_otp" {...register("new_email_otp")} placeholder="Enter New Email OTP" required="" className="box-shadow-3 h-11 px-2 rounded-lg border border-[#001540] bg-white w-full mt-2 mb-2 text-sm placeholder-black focus:outline-none" />
                                                                <div className="absolute top-[1.1rem] right-3">
                                                                    <img src={lastimg} className="w-6" />
                                                                </div>
                                                                {newEmailOTPValidateError && <label className="error">{newEmailOTPValidateError}</label>}
                                                            </div>
                                                        </div>

                                                    </div>
                                                </>
                                                : ""
                                        }
                                    </form>
                                </>
                            }
                            {action_type == 5 &&
                                <>
                                    <div className="flex justify-between items-center mb-8 px-5">
                                        <div>
                                            <h4 className="text-lg sm:text-2xl lable-color font-semibold bac-1">{modalName}</h4>
                                        </div>

                                        <div className="flex">
                                            <div onClick={() => { toggleModal2(); modalShowHide = false }} className="w-8 h-8 bac-3 rounded-full items-center flex justify-center right-14 lg:right-18  mr-3 cursor-pointer">
                                                <img src={close} alt="close" className="w-3" />
                                            </div>
                                            <div onClick={brandProfileUpdate} className="w-8 h-8 bac-6 rounded-full items-center flex justify-center right-2 lg:right-0 cursor-pointer">
                                                <img src={Bhargaviimg} alt="Bhargaviimg" className="w-3" />
                                            </div>
                                        </div>
                                    </div>
                                    <form className="theme-form ng-untouched ng-pristine ng-valid">
                                        <div className="block md:block lg:flex px-5 mb-2">
                                            <div className="flex-initial w-full md:full lg:w-6/12 mr-10 mb-2 md:mb-4 lg:mb-0">
                                                <label className="lable-color text-base font-semibold">Instagram</label>
                                                <div className="block relative">
                                                    <input type="text" id="instagram_url" name="instagram_url" defaultValue={formData?.instagram} {...register("instagram_url")} placeholder={"Enter Instargram Url"} required="" className="box-shadow-3 h-11 px-2 rounded-lg border border-[#001540] bg-white w-full mt-2 mb-2 text-sm placeholder-black focus:outline-none" />
                                                    {validationError.instagram && <label className="error">{validationError.instagram}</label>}
                                                </div>
                                            </div>
                                            <div className={`flex-initial w-full ${none} md:full lg:w-6/12 mb-2 md:mb-4 lg:mb-0`}>
                                                <label className="lable-color text-base font-semibold">Facebook</label>
                                                <div className="block relative">
                                                    <input type="text" id="facebook_url" name="facebook_url" defaultValue={formData?.facebook} {...register("facebook_url")} placeholder={"Enter Facebook Url"} required="" className="box-shadow-3 h-11 px-2 rounded-lg border border-[#001540] bg-white w-full mt-2 mb-2 text-sm placeholder-black focus:outline-none" />
                                                    {validationError.facebook && <label className="error">{validationError.facebook}</label>}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="block md:block lg:flex px-5 mb-2">
                                            <div className="flex-initial w-full md:full lg:w-6/12 mr-10 mb-2 md:mb-4 lg:mb-0">
                                                <label className="lable-color text-base font-semibold">LinkedIn</label>
                                                <div className="block relative">
                                                    <input type="text" id="linkedin_url" name="linkedin_url" defaultValue={formData?.linkedin} {...register("linkedin_url")} placeholder={"Enter LinkedIn Url"} required="" className="box-shadow-3 h-11 px-2 rounded-lg border border-[#001540] bg-white w-full mt-2 mb-2 text-sm placeholder-black focus:outline-none" />
                                                    {validationError.linkedin && <label className="error">{validationError.linkedin}</label>}
                                                </div>
                                            </div>
                                            <div className={`flex-initial w-full ${none} md:full lg:w-6/12 mb-2 md:mb-4 lg:mb-0`}>
                                                <label className="lable-color text-base font-semibold">Youtube</label>
                                                <div className="block relative">
                                                    <input type="text" id="youtube_url" name="youtube_url" defaultValue={formData?.youtube} {...register("youtube_url")} placeholder={"Enter YouTube Url"} required="" className="box-shadow-3 h-11 px-2 rounded-lg border border-[#001540] bg-white w-full mt-2 mb-2 text-sm placeholder-black focus:outline-none" />
                                                    {validationError.youtube && <label className="error">{validationError.youtube}</label>}
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </>
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AccountDetailModal