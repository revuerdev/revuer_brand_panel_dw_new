import iphoneimg from "../../assets/images/Battery.svg";
import Cellularimg from "../../assets/images/Cellular Connection.svg";
import wifiimg from "../../assets/images/Wifi.svg";
import instareals from "../../assets/images/instareals.mp4";
import volansoft from "../../assets/images/volan-soft.mp4";
import instawhitepro from "../../assets/images/instawhitepro.svg";
import facebooktime from "../../assets/images/facebook-time.svg";
import facetv from "../../assets/images/face-tv.svg";
import face_more from "../../assets/images/face-more.svg";
import closepost from "../../assets/images/closepost-1.svg";
import face_share from "../../assets/images/face-share.svg";
import face_comment from "../../assets/images/face-comment.svg";
import face_like from "../../assets/images/face-like.svg";
import user_icon from "../../assets/images/user-icon-face.svg";
import face_humberger from "../../assets/images/face-humberger.svg";
import notifaction_face from "../../assets/images/notifaction-face.svg";
import face_home from "../../assets/images/face-home.svg";
import faceserach from "../../assets/images/face-serch.svg";
import { toggleModal8} from "../../services/edit-modal"


export const FacebookModal = () => {
    return (
        <>
            <div className="fixed z-10 overflow-y-auto top-0 w-full left-0 hidden" id="insta-modal-2">
                <div className="flex items-center sm:mt-0 mt-16 justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <div className="fixed inset-0 transition-opacity " onClick={toggleModal8}>
                        <div className="absolute inset-0 bg-gray-900 opacity-[0.5]" />
                    </div>
                    <span className="hidden sm:inline-block sm:align-middle h-screen">&#8203;</span>
                    <div  onClick={toggleModal8} className="fixed top-5 right-5 w-9 h-9 rounded-full flex justify-center items-center bg-white"> <img
                          src={closepost}
                          alt="closepost"
                          className="w-3"
                        /></div>
                    <div
                        className="inline-block align-center  rounded-2xl text-left overflow-hidden shadow-xl transform transition-all  sm:align-middle sm:max-w-[21.7rem] sm:w-full w-[100%] "
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="modal-headline"
                    >
                          <div className="bg-[#080A0B] box-shadow-3 w-[21.7rem] relative  mt-0.5 rounded-3xl ">
          <div className="flex justify-between py-3 px-5  w-full">
            <div>
              <h4 className="text-white text-xs font-medium">9:41</h4>
            </div>
            <div className="flex">
              <img src={Cellularimg} alt="Cellularimg" className="w-4 mr-1" />
              <img src={wifiimg} alt="wifiimg" className="w-4 mr-1" />
              <img src={iphoneimg} alt="iphoneimg" className="w-6" />
            </div>
          </div>
          <div className="px-5  bg-[#3C3C3C] flex justify-between items-center">
            <div className="py-4">
            <img src={face_home} alt="face_home" className="w-6 " />
            </div>
            <div className="py-4 border-b border-[#3455ff]  w-12 flex justify-center text-center">
            <img src={facetv} alt="facetv" className="w-6" />
            </div>
            <img src={facebooktime} alt="facebooktime" className="w-6" />
            <img
              src={notifaction_face}
              alt="notifaction_face"
              className="w-6"
            />
            <img src={face_humberger} alt="face_humberger" className="w-6" />
          </div>

          <div className="flex justify-between items-center py-3 px-4 fixed top-28 w-full">
            <div>
              <h4 className="text-white text-base font-bold ">Watch</h4>
            </div>
            <div className="flex items-center">
              <img src={user_icon} alt="user_icon" className="w-4 mr-5" />
              <img src={faceserach} alt="faceserach" className="w-5 mr-1" />
            </div>
          </div>

          <div className="h-[38.5rem] overflow-y-auto insta">
            <div>
              <div className="instareals-video">
                <video autoPlay muted loop id="myVideo-f">
                  <source src={volansoft} type="video/mp4" />
                  Your browser does not support HTML5 video.
                </video>
              </div>
            </div>

            <div>
              <div className="instareals-video">
                <video autoPlay muted loop id="myVideo-f">
                  <source src={instareals} type="video/mp4" />
                  Your browser does not support HTML5 video.
                </video>
              </div>
            </div>
          </div>

          <div class="content-f">
            <div className="flex  items-center mb-4 justify-between relative">
              <div className="flex items-center">
                <img
                  src={instawhitepro}
                  alt="instawhitepro"
                  className="w-8 mr-3"
                />
                <h5 className="text-sm font-semibold mr-3">divya_shah</h5>
                <button className="border-2 px-4 rounded-lg font-semibold py-1 text-xs border-white">
                  Follow
                </button>
              </div>

              <div>
                <img src={face_more} alt="face_more" className="w-6 mr-3" />
              </div>
            </div>

            <div className="flex items-center">
              <p className="text-xs font-normal mb-3 mx-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor numbas sator...
              </p>
            </div>

            <div className="flex items-center justify-between px-2">
              <div className="flex items-center">
                <div className="flex justify-between mr-3">
                  <div className="flex items-center">
                    <img
                      src={face_like}
                      alt="face_like"
                      className="w-5 mr-1.5"
                    />
                    <p className="font-medium text-sm mt-1.5">112</p>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="flex items-center mt-1.5">
                    <img
                      src={face_comment}
                      alt="face_comment"
                      className="w-5 mr-1.5"
                    />
                    <p className="font-medium text-sm">56</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="flex justify-between mr-3">
                  <div className="flex items-center">
                    <img
                      src={face_share}
                      alt="face_share"
                      className="w-5 mr-1.5"
                    />
                  </div>
                </div>

                <div className="flex justify-between">
                  <div className="flex items-center mt-1.5">
                    <img
                      src={face_comment}
                      alt="face_comment"
                      className="w-5 mr-4"
                    />
                  </div>
                </div>

                <div className="flex justify-between">
                  <div className="flex items-center ">
                    <img src={face_like} alt="face_like" className="w-5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

                     
                    </div>
                </div>
            </div>


        </>
    );
};
export default FacebookModal;