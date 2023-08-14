import loginLogo from "../../assets/images/login-logo.svg";
import frameIcon1 from "../../assets/images/Frame-1.svg";
import frameIcon2 from "../../assets/images/login-moduls-2.svg";
import frameIcon3 from "../../assets/images/login-moduls-3.svg";
import eyeIcon from "../../assets/images/eye.svg";
import eyeIcon1 from "../../assets/images/view.png";
import { userSignIn } from "../../context/actions/auth";
import { useDispatch } from "react-redux";
import { NavLink as Link, useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import { useForm } from "react-hook-form"
import { brandLogin } from "../../context/actions/auth";

function Login() {


  const { register, handleSubmit, reset } = useForm()

  const dispatch = useDispatch();
  const submitButton = useRef()
  const toastId = useRef(null);
  let navigate = useNavigate();

  const [passwordType, setPasswordType] = useState(false)

  const [emailValidateError, setEmailValidateError] = useState('')
  const [passwordValidateError, setPasswordValidateError] = useState('')

  const emailRegEx = RegExp(/^([a-zA-Z0-9_\-\.]+)\+?([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/);

  const emailValid = (event) => {
    if (event.target.value.trim() != "") {
      if (emailRegEx.test(event.target.value.trim())) {
        setEmailValidateError("")
        event.target.classList.remove("error")
      } else {
        setEmailValidateError("Please Enter Valid Email Address")
        event.target.classList.add("error")
      }
    }
  }

  const passwordValid = (event) => {
    if (event.target.value.trim() == "") {
      setPasswordValidateError("Please Enter Password")
      event.target.classList.add("error")
    } else {
      setPasswordValidateError("")
      event.target.classList.remove("error")
    }
  }

  const onSubmit = (data, event) => {
    const emailID = event.target.querySelector("#email")
    const passwordID = event.target.querySelector("#password")

    const email = data.email;
    const password = data.password;

    if (email.trim() == "") {
      setEmailValidateError("Please Enter Email Address")
      emailID.classList.add("error")
    } else if (!emailRegEx.test(email.trim())) {
      setEmailValidateError("Please Enter Valid Email Address")
      emailID.classList.add("error")
    } else if (password.trim() == "") {
      setEmailValidateError("")
      emailID.classList.remove("error")
      setPasswordValidateError("Please Enter Password")
      event.target.classList.add("error")
    }else{
      setPasswordValidateError("")
      passwordID.classList.remove("error")
      dispatch(brandLogin(data,navigate,submitButton,toastId))
    }
  }

  return (
    <div>
      <div className="md:block lg:flex block">
        <div className="flex-initial w-12/12 md:w-full lg:w-7/12 flex justify-center relative bac-1">
          <div className="slider-bac-1 w-full flex">
            <div className="md:w-[300] lg:w-[500px] mt-auto sm:h-auto">
              <div className="pl-auth-1 pl-5 lg:pl-14 mb-20">
                <div className="flex items-center mb-6">
                  <img alt="icon-text" src={loginLogo} className="w-20 mr-4" />
                  <div className="mt-2">
                    <h5 className="text-3xl font-semibold text-white tracking-wide">
                      RevuER
                    </h5>
                    <p className="text-right text-white text-sm font-medium">
                      by Mishry{" "}
                    </p>
                  </div>
                </div>
                <h4 className="auth-lebal text-white text-xl lg:text-3xl font-semibold tracking-wide mb-4 leading-[45px]">
                  Let's Leverage the Power of Authentic Reviews
                </h4>
              </div>
            </div>

            <div className=" lg:hidden">
              <div className="absolute login-sign-icon  lg:top-[21%] lg:right-10">
                <img alt="icon-page" src={frameIcon1} className="w-16" />
              </div>
              <div className="absolute lg:top-[48%] login-sign-icon-2  lg:right-20">
                <img alt="icon-graph" src={frameIcon2} className="w-16" />
              </div>
              <div className="absolute login-sign-icon-3 lg:top-[72%]  lg:right-40">
                <img alt="icon-search" src={frameIcon3} className="w-14" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex-initial w-12/12 md:w-full lg:w-6/12 flex  h-[64.8vh] lg:h-[100vh] px-8 lg:px-2 py-16 mb-10 lg:mb-0 lg:py-0">
          <div className="grid md:w-[520px] lg:w-[450px] content-center mx-auto lg:mx-0">
            <div>
              <h5 className="text-2xl sm:text-[32px] font-semibold mt-7 mb-8">
                Log In
              </h5>
              <form onSubmit={handleSubmit((data, event) => onSubmit(data, event))} className="theme-form ng-untouched ng-pristine ng-valid">
                <label
                  htmlFor="email"
                  className="mb-4 lable-color text-base font-semibold"
                >
                  {" "}
                  Email Address<span className="text-[#E74C3C]">*</span>
                </label>
                <div className="block relative">
                  <input
                    type="text"
                    id="email"
                    autoComplete="off"
                    name="email"
                    {...register("email")}
                    placeholder=" Enter Email Address"
                    onKeyUp={(event) => emailValid(event)}
                    required=""
                    className="box-shadow-3 h-12 px-4 bg-white rounded-lg border border-[#95A5A6]  mt-2 mb-6 text-sm placeholder-[#001540] w-full focus:outline-none"
                  />
                  {emailValidateError && <label className="error">{emailValidateError}</label>}
                </div>
                <label
                  htmlFor="password"
                  className="mb-4 lable-color text-base font-semibold"
                >
                  {" "}
                  Password
                </label>
                <div className="block relative">
                  <input
                    type={passwordType ? "text" : "password"}
                    id="password"
                    autoComplete="off"
                    name="password"
                    {...register("password")}
                    placeholder="&#9679; &#9679; &#9679; &#9679; &#9679; &#9679;"
                    required=""
                    onKeyUp={(event) => passwordValid(event)}
                    className="box-shadow-3 h-12 px-4 bg-white rounded-lg border border-[#95A5A6] w-full mt-2 mb-2 text-sm placeholder:text-[#001540] focus:outline-none"
                  />
                  {passwordValidateError && <label className="error">{passwordValidateError}</label>}
                  <Link
                    to={`${process.env.REACT_APP_FRONT_URL}/forgot-password`}
                    className="text-sm text-gray-400 float-right italic pr-2 font-medium underline"
                  >
                    Forgot Password?
                  </Link>
                  <span
                    onClick={() => setPasswordType(!passwordType)}
                    toggle="#password-field"
                    className="field-icon toggle-password absolute top-6 right-4"
                  >
                    <img alt="input-eye" src={passwordType ? eyeIcon1 : eyeIcon} className="w-5" />
                  </span>
                </div>
                <button
                  ref={submitButton}
                  className="rounded-lg py-2.5 w-full bac-2 text-white mb-5 mt-6 text-base font-bold uppercase"
                ><i className="fa fa-spin fa-spinner mr-2" id="btn_spinner"></i>
                  Log In
                </button>
              </form>
              <div className="absolute right-6 top-5">
                <h3 className="text-sm sm:text-lg font-normal flex justify-center text-white lg:text-[#001540] mb-4 pb-5 sm:pb-0 items-center">
                  Don’t have an account?
                  <Link
                    to={`${process.env.REACT_APP_FRONT_URL}/register`}
                    className="font-bold text-white lg:text-[#FCB43C] underline"
                  >
                    Create Account.
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

export default Login;
