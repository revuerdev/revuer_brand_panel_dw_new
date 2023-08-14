import logoImages from "../../assets/images/login-logo.svg";
import frameIcon1 from "../../assets/images/Frame-1.svg"
import frameIcon2 from "../../assets/images/login-moduls-2.svg"
import frameIcon3 from "../../assets/images/login-moduls-3.svg"
import emailVerify from "../../assets/images/email-vere.svg"
import { Link } from "react-router-dom";
function EmailVerify() {
    return (
        <div>
            <div className="md:block lg:flex block">
                <div className="flex-initial w-12/12 md:w-full lg:w-7/12 flex justify-center relative bac-1">
                    <div className="slider-bac-4 w-full flex">
                        <div className="md:w-[300] lg:w-[530px] mt-auto sm:h-auto">
                            <div className="pl-auth pl-5 lg:pl-14 mb-20">
                                <div className="flex items-center mb-6">
                                    <img src={logoImages} alt="logo-svg" className="w-20 mr-4" />
                                    <div className="mt-2">
                                        <h5 className="text-3xl font-semibold text-white tracking-wide">RevuER</h5>
                                        <p className="text-right text-white text-sm font-medium">by Mishry </p>
                                    </div>

                                </div>
                                <h4 className="auth-lebal text-white text-xl lg:text-3xl font-semibold tracking-wide mb-4 leading-[45px]">Find Super-Users Among Our Review-Centric Community</h4>

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

                <div className="flex-initial w-12/12 md:w-full lg:w-6/12 flex h-[64.8vh] lg:h-[100vh] px-8 lg:px-2 py-16 mb-10 lg:mb-0 lg:py-0">
                    <div className="grid md:w-[520px] lg:w-[460px] content-center mx-10 md:mx-auto lg:mx-0">

                        <div className="-mt-32">
                            <img src={emailVerify} alt="emailVerify" className="w-20" />
                            <h5 className="text-2xl sm:text-[35px] font-bold mt-7 mb-4 lable-color">Verify your email</h5>
                            <p className="mb-5 text-sm font-normal sm:text-sm">Please check your registered email address to verify the account.</p>

                           
                            <div className="absolute right-6 top-5">
                                <h3 className="text-sm sm:text-lg font-normal flex justify-center text-white lg:text-[#001540] mb-4 pb-5 sm:pb-0 items-center">Already have an account?
                                    <Link to={`${process.env.REACT_APP_FRONT_URL}/login`} className="underline font-bold text-white lg:text-[#FCB43C] pl-2" > LOG IN
                                    </Link>
                                </h3>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div >
    )
}
export default EmailVerify