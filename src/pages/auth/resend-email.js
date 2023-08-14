import loginLogo from "../../assets/images/login-logo.svg"
import frameIcon1 from "../../assets/images/Frame-1.svg"
import frameIcon2 from "../../assets/images/login-moduls-2.svg"
import frameIcon3 from "../../assets/images/login-moduls-3.svg"
import messageSvg from "../../assets/images/messge-box.svg"
import { useDispatch } from "react-redux"
import { NavLink as Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"
import { useRef, useState } from "react";
import { brandResendEmail } from "../../context/actions/auth"

function ForgotPassword() {

    const dispatch = useDispatch()
   
    let navigate = useNavigate();

    const { register, handleSubmit, reset } = useForm()
    const submitButton = useRef()
    const toastId = useRef(null);

    const [emailValidateError, setEmailValidateError] = useState('')

    const emailRegEx = RegExp(/^([a-zA-Z0-9_\-\.]+)\+?([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/);

    const emailValid = (event) =>{
		if (event.target.value.trim() != "") {
			if(emailRegEx.test(event.target.value.trim())){
				setEmailValidateError("") 
				event.target.classList.remove("error")
			}else{
				setEmailValidateError("Please Enter Valid Email Address")
				event.target.classList.add("error")
			}
        }
	}
    
    const onSubmit = (data,event) => {
        const emailID = event.target.querySelector("#email")

        const email = data.email;

        if(email.trim() == ""){
            setEmailValidateError("Please Enter Email Address")
			emailID.classList.add("error")
        }else if(!emailRegEx.test(email.trim())){
            setEmailValidateError("Please Enter Valid Email Address")
			emailID.classList.add("error")
        }else{
            setEmailValidateError("") 
			emailID.classList.remove("error")
            dispatch(brandResendEmail(data,navigate,submitButton,toastId))
            reset()
        }
    }

    return (
        <div>
            <div className="md:block lg:flex block">
                <div className="flex-initial w-12/12 md:w-full lg:w-7/12 flex relative bac-1">
                    <div className="slider-bac-3 w-full flex">
                        <div className="md:w-[300] lg:w-[520px] mt-auto sm:h-auto">
                            <div className="pl-auth-1 pl-5 lg:pl-14 mb-20">
                                <div className="flex items-center mb-6">
                                    <img src={loginLogo} alt="loginLogo" className="w-20 mr-4" />
                                    <div className="mt-2">
                                        <h5 className="text-3xl font-semibold text-white tracking-wide">RevuER</h5>
                                        <p className="text-right text-white text-sm font-medium">by Mishry </p>
                                    </div>

                                </div>
                                <h4 className="auth-lebal text-white text-xl lg:text-3xl font-semibold tracking-wide mb-4 leading-[45px]">Find Super-Users Among Our Review-Centric Community</h4>

                            </div>
                        </div>

                        <div className=" lg:hidden">
                            <div className="absolute login-sign-icon  lg:top-[25%] lg:right-8">
                                <img src={frameIcon1} alt="frameIcon1" className="w-16" />
                            </div>
                            <div className="absolute lg:top-[50%] login-sign-icon-2  lg:right-24">
                                <img src={frameIcon2} alt="frameIcon2" className="w-16" />
                            </div>
                            <div className="absolute login-sign-icon-3 lg:top-[73%]  lg:right-40">
                                <img src={frameIcon3} alt="frameIcon3" className="w-14" />
                            </div>
                        </div>



                    </div>
                </div>

                <div className="flex-initial w-12/12 md:w-full lg:w-6/12 flex h-[64.8vh] lg:h-[100vh] px-8 lg:px-2 py-16 mb-10 lg:mb-0 lg:py-0">
                    <div className="grid md:w-[520px] lg:w-[450px] content-center  mx-auto lg:mx-0">
                        <div>
                            <h5 className="text-2xl sm:text-[35px] font-bold -mt-10 mb-5 lable-color">Resend Verification Email</h5>
                            <p className="mb-8 text-sm">Enter your Email Id associated with your account</p>
                            <form onSubmit={handleSubmit((data, event) => onSubmit(data, event))} className="theme-form ng-untouched ng-pristine ng-valid">
                                <label htmlFor="email" className="mb-4 lable-color text-base font-semibold"> Email Address<span className="text-[#E74C3C]">*</span></label>
                                <div className="block relative">
                                    <input type="text" autoComplete="off" name="email" {...register("email")} id="email" onKeyUp={(event)=>emailValid(event)} placeholder="Enter Email Address" required="" className="box-shadow-3 h-12 px-4 bg-white rounded-lg border border-[#95A5A6] mt-2 mb-6 text-sm placeholder-gray-500 w-full focus:outline-none" />
                                    {emailValidateError && <label className="error">{emailValidateError}</label>}
                                    <span toggle="#password-field" className="field-icon toggle-password absolute top-6 right-4"><img src={messageSvg} alt="messageSvg" className="w-5" /></span>
                                </div>
                                <button ref={submitButton} className="py-2.5 w-full bac-2 text-white mb-5 mt-6 text-base font-bold rounded-lg uppercase"><i className="fa fa-spin fa-spinner mr-2" id="btn_spinner"></i>Send Verification Email</button>
                            </form>
                            <div className="absolute right-6 top-5">
                                <h3 className="text-sm sm:text-lg font-normal flex justify-center text-white lg:text-[#001540] mb-4 pb-5 sm:pb-0 items-center">
                                    Don’t have an account?
                                    <Link to={`${process.env.REACT_APP_FRONT_URL}/register`} className="font-bold text-white lg:text-[#FCB43C] pl-2 underline" >Create a new Account
                                    </Link>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default ForgotPassword;
