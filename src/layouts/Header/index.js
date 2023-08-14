import logoImages from "../../assets/images/profile-img.svg";
import vectorimg from "../../assets/images/Vector.svg"
import dropuserimg from "../../assets/images/User.svg"
import logimg from "../../assets/images/log-out.svg"
import dropimg from "../../assets/images/Arrow-drop.svg"
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect, useRef } from "react";
import { NavLink as Link } from "react-router-dom";
import { logOutModalModal as LogOutModalModal } from "../../components/Modal";
import { toggleModalLogout } from "../../services/edit-modal"
import { getBrandDetails } from "../../context/actions/brand"
import { toast } from "react-toastify"

export const Header = ({ none, block, welcome, name, extra, extrab, showCampaign = true }) => {
    const toastId = useRef(null);
    const [modal, setModal] = useState({ status_title: "Logout Session" })
    const [profileMenu, setOpenProfileMenu] = useState(false)
    let navigate = useNavigate();
    const dispatch = useDispatch();
    var brandlogin_unique_token = localStorage.getItem("brandlogin_unique_token");
    const brandDataDetails = useSelector((state) => state.brandDetails);
    useEffect(() => {
        dispatch(getBrandDetails({ brandlogin_unique_token: brandlogin_unique_token }))
    }, [])
    const logoutSession = () => {
        setModal({
            status_title: 'Logout Session', message: "Are you sure you want to log out.", onSuccess: () => {
                localStorage.clear();
                if (!toast.isActive(toastId.current)) { toastId.current = toast.success("Logout Successfully...") }
                setTimeout(() => {
                    navigate(`/revuer-brand/login`, { replace: true });
                }, 1000);
            }
        })
        toggleModalLogout();
    }
    return (
        <>
            <div className="hidden sm:block  md:flex lg:flex items-center py-3 mb-8 lg:mb-5 px-2 md:px-5 lg:px-8 md:py-5 lg:py-5 box-shadow-1">
                <div className="md:flex justify-between flex-initial w-full md:w-full lg:w-7/12 sub-width-3 mr-5">
                    <div>
                        <h4 className={`text-[20px] ${block} font-normal`}><span className="font-bold pr-1">{welcome} </span>{name}</h4>
                        <p className={`${none}text-xs font-semibold`}> <span className="color-3 font-normal">{extrab}</span> {extra}</p>
                    </div>
                </div>

                <div className="flex-initial w-full md:w-3/12 lg:w-8/12">
                    <div className="hidden sm:block md:flex lg:flex items-center lg:justify-end">
                        {showCampaign &&
                            <Link to={`${process.env.REACT_APP_FRONT_URL}/campaign-page`} className="w232 hidden md:hidden lg:block text-sm font-semibold bac-6 text-white uppercase px-6 py-2 rounded-lg mr-10">Create New Campaign   </Link>
                        }
                        {/* <div className="relative border-r-2  w-11 md:mr-5 lg:mr-6 h-10 flex align-center ">
                        <img src={vectorimg} alt="vectorimg" className=" w-5" />
                    </div> */}
                        <div className="flex justify-between items-center">
                            <div className="md:hidden block lg:flex items-center">
                                {brandDataDetails.first_name ?
                                    <>
                                        <img src={`${process.env.BRANDS_IMAGE_URL}/${brandDataDetails.user_profile}`} alt="logoImages" className="mr-3 w-10 h-10 border border-black rounded-full" />
                                        {/* <Link to={`${process.env.REACT_APP_FRONT_URL}/my-account`} className="mr-3">{brandDataDetails.first_name} {brandDataDetails.last_name} </Link> */}
                                        <Link to={`${process.env.REACT_APP_FRONT_URL}/my-account`} className="mr-3">{brandDataDetails.first_name} {brandDataDetails.last_name} </Link>
                                    </> :
                                    ''
                                }
                            </div>

                            <div className="dropdown inline-block relative">
                                <button className="w-8 h-8 rounded-full bac-7 items-center flex justify-center" onClick={() => setOpenProfileMenu(!profileMenu)}>
                                    <img src={dropimg} alt="dropimg" className=" w-[16px]" />
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
                    </div>
                </div>
            </div>
            <LogOutModalModal status_title={modal.status_title} message={modal.message} onFailure={toggleModalLogout} onSuccess={modal.onSuccess} action_type={modal.action_type} />
        </>
    )
}
export default Header