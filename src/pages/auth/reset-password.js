import logoSvg from "../../assets/images/login-logo.svg";
import frameIcon1 from "../../assets/images/Frame-1.svg";
import frameIcon2 from "../../assets/images/login-moduls-2.svg";
import frameIcon3 from "../../assets/images/login-moduls-3.svg";
import eyeIcon from "../../assets/images/eye.svg";
import eyeIcon1 from "../../assets/images/view.png";
import { useState, useRef } from "react";
import { useDispatch } from "react-redux"
import { useForm } from "react-hook-form"
import { brandResetPassword } from "../../context/actions/auth"

function ResetPassword() {
  
  const pathname = window.location.pathname;
	const segment = pathname.substring(pathname.lastIndexOf('/') + 1);

  const [passwordType, setPasswordType] = useState(false);
  const [confirmPasswordType, setConfirmPasswordType] = useState(false);

  const { register, handleSubmit, reset } = useForm()
  const dispatch = useDispatch();
  const submitButton = useRef()
  const toastId = useRef(null);

  const [passwordValidateError, setPasswordValidateError] = useState('')
  const [cpasswordValidateError, setCPasswordValidateError] = useState('')

  const passwordRegEx = RegExp(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,50}$/);

  const passwordValid = (event) => {
    if (event.target.value.trim() == "") {
      setPasswordValidateError("Please Enter Password")
      event.target.classList.add("error")
    } else if (event.target.value.length < 6) {
      setPasswordValidateError("Password must contain at least 6 character")
      event.target.classList.add("error")
    } else if (!passwordRegEx.test(event.target.value.trim())) {
      setPasswordValidateError("Password must one number and one special character")
      event.target.classList.add("error")
    } else {
      setPasswordValidateError("")
      event.target.classList.remove("error")
    }
  }

  const onSubmit = (data, event) => {
    const passwordId = event.target.querySelector("#password")
    const cpasswordId = event.target.querySelector("#cpassword")

    const password = data.password;
    const cpassword = data.cpassword;

    if (password.trim() == "") {
      setPasswordValidateError("Please Enter Password")
      passwordId.classList.add("error")
    } else if (password.length < 6) {
      setPasswordValidateError("Password must contain at least 6 character")
      passwordId.classList.add("error")
    } else if (!passwordRegEx.test(password.trim())) {
      setPasswordValidateError("Password must one number and one special character")
      passwordId.classList.add("error")
    } else if (password.trim() != cpassword.trim()) {
      setPasswordValidateError("")
      passwordId.classList.remove("error")
      setCPasswordValidateError("Confirm Password not matched")
      cpasswordId.classList.add("error")
    } else {
      setCPasswordValidateError("")
      cpasswordId.classList.remove("error")
      data.token = segment;
      dispatch(brandResetPassword(data, submitButton, toastId))
      reset()
    }
  }

  return (
    <div>
      <div className="md:block lg:flex block">
        <div className="flex-initial w-12/12 md:w-full lg:w-7/12 flex justify-center relative bac-1">
          <div className="slider-bac-2 w-full flex">
            <div className="md:w-[300] lg:w-[500px] mt-auto sm:h-auto">
              <div className="pl-auth pl-5 lg:pl-14 mb-20">
                <div className="flex items-center mb-6">
                  <img src={logoSvg} alt="logoSvg" className="w-20 mr-4" />
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
                  India's First Professional Pool of Revuers
                </h4>
              </div>
            </div>

            <div className=" lg:hidden">
              <div className="absolute login-sign-icon  lg:top-1/4 lg:right-10">
                <img src={frameIcon1} alt="frameIcon1" className="w-16" />
              </div>
              <div className="absolute lg:top-[45%] login-sign-icon-2  lg:right-20">
                <img src={frameIcon2} alt="frameIcon2" className="w-16" />
              </div>
              <div className="absolute login-sign-icon-3 lg:top-2/3  lg:right-36">
                <img src={frameIcon3} alt="frameIcon3" className="w-14" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex-initial w-12/12 md:w-full lg:w-6/12 flex h-[64.8vh] lg:h-[100vh] px-8 lg:px-2">
          <div className="grid w-full md:w-[520px] lg:w-[450px] content-center  mx-auto lg:mx-0 lg:-ml-2.5">
            <div>
              <h5 className="text-2xl sm:text-[35px] font-bold mt-0 mb-10 lable-color">
                Reset Your Password
              </h5>

              <form onSubmit={handleSubmit((data, event) => onSubmit(data, event))} className="theme-form ng-untouched ng-pristine ng-valid">
                <label
                  htmlFor="email"
                  className="mb-4 lable-color text-base font-semibold relative"
                >
                  Password
                </label>
                <div className="block relative">
                  <input
                    type={passwordType ? "text" : "password"}
                    id="password"
                    placeholder="Enter Password"
                    required=""
                    name="password"
                    {...register("password")}
                    onKeyUp={(event) => passwordValid(event)}
                    className="box-shadow-3 h-12 px-4 bg-white rounded-lg border border-[#95A5A6] w-full mt-2 mb-2 text-sm placeholder:text-[#001540] focus:outline-none"
                  />
                  {passwordValidateError && <label className="error">{passwordValidateError}</label>}
                  <span
                    onClick={() => setPasswordType(!passwordType)}
                    toggle="#password-field"
                    className="field-icon toggle-password absolute top-6 right-4"
                  >
                    <img
                      alt="input-eye"
                      src={passwordType ? eyeIcon1 : eyeIcon}
                      className="w-5"
                    />
                  </span>{" "}
                </div>

                <label
                  htmlFor="cpassword"
                  className="mb-4 lable-color text-base font-semibold relative"
                >
                  Confirm Password
                </label>
                <div className="block relative">
                  <input
                    type={confirmPasswordType ? "text" : "password"}
                    id="cpassword"
                    placeholder="Enter Confirm password"
                    required=""
                    name="cpassword"
                    {...register("cpassword")}
                    className="box-shadow-3 h-12 px-4 bg-white rounded-lg border border-[#95A5A6] w-full mt-2 mb-2 text-sm placeholder:text-[#001540] focus:outline-none"
                  />
                  {cpasswordValidateError && <label className="error">{cpasswordValidateError}</label>}
                  <span
                    onClick={() => setConfirmPasswordType(!confirmPasswordType)}
                    toggle="#password-field"
                    className="field-icon toggle-password absolute top-6 right-4"
                  >
                    <img
                      alt="input-eye"
                      src={confirmPasswordType ? eyeIcon1 : eyeIcon}
                      className="w-5"
                    />
                  </span>{" "}
                </div>

                <button ref={submitButton} className="rounded-lg py-2.5 w-full bac-2 text-white mb-5 mt-6 text-base font-bold uppercase"><i className="fa fa-spin fa-spinner mr-2" id="btn_spinner"></i>
                  reset password
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ResetPassword;
