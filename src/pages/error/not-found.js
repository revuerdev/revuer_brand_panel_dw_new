import brokenBulb from "../../assets/images/bulb-404.png"
import { NavLink as Link, useNavigate } from "react-router-dom";
function NotFound() {
    return (
        <>
            <div className="overflow-x-hidden">
                <div className="md:block lg:flex block">
                    <div
                        className="flex-initial w-12/12 md:w-full lg:w-6/12 flex justify-center relative bac-1"
                    >
                        <div className="image flex">
                            <img src={brokenBulb} className="m-auto w-full sm:w-10/12 p-10" alt="" srcset="" />
                        </div>
                    </div>

                    <div
                        className="flex-initial w-12/12 md:w-full lg:w-6/12 flex items-center justify-center h-[30.8vh] lg:h-[100vh] px-8 lg:px-2 mb-10 lg:mb-0 lg:py-0"
                    >
                        <div className="notfound_text text-center lg:text-left md:text-left">
                            <h1 className="text-9xl sm:text-[10rem] font-bold text-[#FCB43C] leading-tight">404</h1>
                            <p className="text-base"><b className="uppercase">Looks like you are lost</b></p>
                            <p className="text-base">The page you are looking for is not Available</p>
                            <Link
                                to={`${process.env.REACT_APP_FRONT_URL}/login`}
                                className="block mt-[50px] text-sm text-[#FCB43C] font-medium"
                            >
                                Go to Home  <i className="fa-solid fa-arrow-right-long"></i>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>

        </>
    );
}
export default NotFound;
