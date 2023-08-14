import loginLogo from "../../assets/images/login-logo.svg"
import frameIcon1 from "../../assets/images/Frame-1.svg"
import frameIcon2 from "../../assets/images/login-moduls-2.svg"
import frameIcon3 from "../../assets/images/login-moduls-3.svg"
import messageSvg from "../../assets/images/messge-box.svg"
import { brandRegister } from "../../context/actions/auth"
import { useDispatch } from "react-redux"
import { NavLink as Link, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react"
import { useForm } from "react-hook-form"

function Register() {

    const dispatch = useDispatch()
    const navigate = useNavigate();
    const submitButton = useRef()
    const toastId = useRef(null);
    const { register, handleSubmit, reset } = useForm()

    const [emailValidateError, setEmailValidateError] = useState('')
	const [firstNameValidateError, setFirstNameValidateError] = useState('')
	const [lastNameValidateError, setLastNameValidateError] = useState('')

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

    const firstNameValid = (event) =>{
		if (event.target.value.trim() == "") {
			setFirstNameValidateError("Please Enter First Name")
		    event.target.classList.add("error")
        }else if(event.target.value.length < 2){
            setFirstNameValidateError("First name must consist of at least 2 characters")
		    event.target.classList.add("error")
        }else{
            setFirstNameValidateError("") 
			event.target.classList.remove("error")
        }
	}

    const lastNameValid = (event) =>{
		if (event.target.value.trim() == "") {
			setLastNameValidateError("Please Enter Last Name")
		    event.target.classList.add("error")
        }else if(event.target.value.length < 2){
            setLastNameValidateError("Last name must consist of at least 2 characters")
		    event.target.classList.add("error")
        }else{
            setLastNameValidateError("") 
			event.target.classList.remove("error")
        }
	}

    const onSubmit = (data,event) => {
        
        const emailID = event.target.querySelector("#email")
        const firstNameId = event.target.querySelector("#first_name")
        const lastNameId = event.target.querySelector("#last_name")

        const email = data.email;
        const first_name = data.first_name;
        const last_name = data.last_name;

        if(email.trim() == ""){
            setEmailValidateError("Please Enter Email Address")
			emailID.classList.add("error")
        }else if(!emailRegEx.test(email.trim())){
            setEmailValidateError("Please Enter Valid Email Address")
			emailID.classList.add("error")
        }else if(first_name.trim() == ""){
            setEmailValidateError("") 
			emailID.classList.remove("error")
            setFirstNameValidateError("Please Enter First Name")
			firstNameId.classList.add("error")
        }else if(first_name.length < 2){
            setFirstNameValidateError("First Name must consist of at least 2 characters")
			firstNameId.classList.add("error")
        }else if(last_name.trim() == ""){
            setFirstNameValidateError("") 
			emailID.classList.remove("error")
            setLastNameValidateError("Please Enter Last Name")
			lastNameId.classList.add("error")
        }else if(last_name.length < 2){
            setLastNameValidateError("Last name must consist of at least 2 characters")
			lastNameId.classList.add("error")
        }else{
            setLastNameValidateError("") 
			emailID.classList.remove("error")
            dispatch(brandRegister(data,navigate,submitButton,toastId))
        }

    }

    return (
        <div>
            <div className="md:block lg:flex block">
                <div className="flex-initial w-12/12 md:w-full lg:w-7/12 flex justify-center relative bac-1">
                    <div className="slider-bac-5 w-full flex relative">
                        <div className="md:w-[300] lg:w-[500px] mt-auto sm:h-auto">
                            <div className="pl-auth-1 pl-5 lg:pl-14 mb-20">
                                <div className="flex items-center mb-6">
                                    <img alt="loginLogo" src={loginLogo} className="w-20 mr-4" />
                                    <div className="mt-2">
                                        <h5 className="text-3xl font-semibold text-white tracking-wide">RevuER</h5>
                                        <p className="text-right text-white text-sm font-medium">by Mishry </p>
                                    </div>

                                </div>
                                <h4 className="auth-lebal text-white text-xl lg:text-3xl font-semibold tracking-wide mb-4 leading-[45px]">Let's Leverage the Power of Authentic Reviews</h4>

                            </div>
                        </div>

                        <div className=" lg:hidden">
                            <div className="absolute login-sign-icon  lg:top-[16%] lg:right-10">
                                <img alt="frameIcon1" src={frameIcon1} className="w-16" />
                            </div>
                            <div className="absolute lg:top-[40%] login-sign-icon-2  lg:right-20">
                                <img alt="frameIcon2" src={frameIcon2} className="w-16" />
                            </div>
                            <div className="absolute login-sign-icon-3 lg:top-[63%]  lg:right-32">
                                <img alt="frameIcon3" src={frameIcon3} className="w-14" />
                            </div>
                        </div>


                    </div>
                </div>

                <div className="flex-initial w-12/12 md:w-full lg:w-6/12 flex lg:pl-14  h-[64.8vh] lg:h-[100vh] px-8 lg:px-2 py-16 mb-10 lg:mb-0 lg:py-0">
                    <div className="grid w-full md:w-[520px] lg:w-[450px] content-center  mx-auto lg:mx-0">
                        <div>
                            <h5 className="text-2xl sm:text-[35px] font-bold mt-16 mb-3">Create Account</h5>
                            <p className="mb-8 text-sm">Please enter your Email Address to receive a verification code.</p>

                            <form onSubmit={handleSubmit((data,event) => onSubmit(data, event))} className="theme-form ng-untouched ng-pristine ng-valid">
                               
                                <label htmlFor="email" className="mb-4 lable-color text-base font-semibold"> Email Address<span className="text-[#E74C3C]">*</span></label>
                                <div className="block relative">
                                    <input type="text" autoComplete="off" onKeyUp={(event)=>emailValid(event)}  id="email" name="email" {...register("email")} placeholder=" Enter Email Address" required="" className="box-shadow-3 h-12 px-4 bg-white rounded-lg border border-[#95A5A6] w-full mt-2 mb-6 text-sm placeholder-[#001540] focus:outline-none" />
                                    <span toggle="#password-field" className="field-icon toggle-password absolute top-6 right-4"><img alt="messageSvg" src={messageSvg} className="w-5" /></span>
                                    {emailValidateError && <label id="email-error" className="error">{emailValidateError}</label>}
                                </div>
                                <label htmlFor="first_name" className="mb-4 lable-color text-base font-semibold"> First Name<span className="text-[#E74C3C]">*</span></label>
                                <div className="block relative">
                                    <input type="text" autoComplete="off" onKeyUp={(event)=>firstNameValid(event)} id="first_name" {...register("first_name")} placeholder="Enter First Name" required="" className="box-shadow-3 h-12 px-4 bg-white rounded-lg border border-[#95A5A6] mt-2 mb-6 text-sm placeholder-[#001540] w-full focus:outline-none" />
                                    {firstNameValidateError && <label id="email-error" className="error">{firstNameValidateError}</label>}
                                </div>
                                <label htmlFor="last_name" className="mb-4 lable-color text-base font-semibold">Last Name<span className="text-[#E74C3C]">*</span></label>
                                <div className="block relative">
                                    <input type="text" autoComplete="off" onKeyUp={(event)=>lastNameValid(event)} id="last_name" {...register("last_name")} placeholder="Enter last Name" required="" className="box-shadow-3 h-12 px-4 bg-white rounded-lg border border-[#95A5A6] w-full mt-2 mb-3 text-sm placeholder-[#001540] focus:outline-none" />
                                    {lastNameValidateError && <label id="email-error" className="error">{lastNameValidateError}</label>}
                                </div>
                                <Link
                                    to={`${process.env.REACT_APP_FRONT_URL}/resend-email`}
                                    className="text-sm text-gray-400 float-right italic pr-2 font-medium underline"
                                >
                                    Resend Verification Email?
                                </Link>
                                <button ref={submitButton} className="rounded-lg py-2.5 w-full bac-2 text-white mb-5 mt-4 text-base font-bold uppercase"><i className="fa fa-spin fa-spinner mr-2" id="btn_spinner"></i>Sign UP</button>

                            </form>
                            <div className="absolute right-6 top-5">
                                <h3 className="text-sm sm:text-xl font-normal flex justify-center text-white lg:text-[#001540] mb-4 pb-5 sm:pb-0 items-center">Already have an account?
                                    <Link to={`${process.env.REACT_APP_FRONT_URL}/login`} className="font-bold text-white lg:text-[#FCB43C] pl-2 underline" > LOG IN
                                    </Link>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
