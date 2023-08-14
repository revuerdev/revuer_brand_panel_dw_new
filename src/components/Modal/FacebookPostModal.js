import Cellularimg from "../../assets/images/Rightsideblack.svg";
import like from "../../assets/images/Like like.svg";
import logolike from "../../assets/images/lovelike.svg";
import facecoment from "../../assets/images/facepost-coment.svg";
import faceshare from "../../assets/images/facesgare.svg";
import facebooktime from "../../assets/images/face-prosesing.svg";
import facetv from "../../assets/images/facepost-tv.svg";
import facelik1 from "../../assets/images/facelike-1.svg";
import face_close from "../../assets/images/face-close.svg";
import closepost from "../../assets/images/closepost-1.svg";
import raulngeimg from "../../assets/images/raul-ange.svg";
import face_like from "../../assets/images/facesearch.svg";
import face_logo from "../../assets/images/Facebook-post.svg";
import user_icon from "../../assets/images/user-icon-face.svg";
import face_humberger from "../../assets/images/face-humberger.svg";
import notifaction_face from "../../assets/images/notifaction-face.svg";
import face_home from "../../assets/images/face-post-home.svg";
import facepostmessage from "../../assets/images/facepostmessage.svg";
import postname from "../../assets/images/Oval.svg";
import facemore from "../../assets/images/facemore.svg";
import { toggleModal9 } from "../../services/edit-modal";

export const FacebookPostModal = () => {
  const d = new Date();
  const dateText = d.toTimeString().split(" ")[0].split(":");
  const date = dateText[0] + ":" + dateText[1];
  return (
    <>
      <div
        className="fixed z-10 overflow-y-auto top-0 w-full left-0 hidden"
        id="face-modal-2"
      >
       
        <div className="flex items-center sm:mt-0 mt-16 justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div
            className="fixed inset-0 transition-opacity "
           
          >
            
            <div className="absolute inset-0 bg-gray-900 opacity-[0.5]" />
          </div>
          <span className="hidden sm:inline-block sm:align-middle h-screen">
            &#8203;
          </span>
          <div  onClick={toggleModal9} className="fixed top-5 right-5 w-9 h-9 rounded-full flex justify-center items-center bg-white"> <img
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
            <div className="bg-white box-shadow-3 w-[21.7rem] relative  mt-0.5 rounded-3xl ">
              <div className="flex justify-between py-3 px-5  w-full">
                <div>
                  <h4 className="text-black text-sm font-semibold">{date}</h4>
                </div>
                <div className="flex">
                  <img src={Cellularimg} alt="Cellularimg" className="w mr-1" />
                </div>
              </div>

              <div className="flex justify-between pb-4 px-5  w-full  items-center">
                <div>
                  <img src={face_logo} alt="face_logo" className="w mr-1" />
                </div>
                <div className="flex">
                  <div className="bg-[#d9d9d9] rounded-full p-2 flex justify-center w-8 h-8 mr-3">
                    <img src={face_like} alt="face_logo" className="w-4 " />
                  </div>
                  <div className="bg-[#d9d9d9] rounded-full p-2 w-8 h-8">
                    <img
                      src={facepostmessage}
                      alt="facepostmessage"
                      className="w-5"
                    />
                  </div>
                </div>
              </div>

              <div className="px-5 mb-2 bg-white border-b flex justify-between items-center">
                <div className="py-2 px-2 border-[#3455ff]  border-b-2 ">
                  <img src={face_home} alt="face_home" className="w-6 " />
                </div>
                <div className="py-2 w-12 flex justify-center text-center">
                  <img src={facetv} alt="facetv" className="w-6" />
                </div>
                <img src={facebooktime} alt="facebooktime" className="w-6" />
                <img
                  src={notifaction_face}
                  alt="notifaction_face"
                  className="w-6"
                />
                <img
                  src={face_humberger}
                  alt="face_humberger"
                  className="w-6"
                />
              </div>

              <div className="overflow-y-auto h-[35rem] insta">
                <div className="mb-3">
                  <div className="px-4">
                    <div className="flex items-center mb-4">
                      <div className="flex  items-center">
                        <img
                          src={postname}
                          alt="postname"
                          className="w-9 mr-3"
                        />
                        <div className="mr-6">
                          <p className="text-[#999] text-xs">
                            <span className="font-semibold text-[#000]">
                              Divya shah
                            </span>{" "}
                            is with{" "}
                            <span className="font-semibold text-[#000]">
                              Mahesh Joshi.
                            </span>
                          </p>
                          <p className="text-[9px] font-medium text-[#999]">
                            1 h . Mumbai, Maharastra .
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <img
                          src={facemore}
                          alt="facemore"
                          className="w-5 mr-3"
                        />
                        <img
                          src={face_close}
                          alt="face_close"
                          className="w-4"
                        />
                      </div>
                    </div>

                    <p className="text-xs font-medium pb-1">
                      Bioglow body creame is so good
                    </p>
                  </div>
                  <div>
                    <img
                      src={raulngeimg}
                      alt="raulngeimg"
                      className="w-full h-[20rem] mb-3 object-cover"
                    />
                  </div>
                  <div className="px-5 flex items-center">
                    <div className="flex items-center mt-1 border-b-2 pb-1.5">
                      <div className="relative  mr-8">
                        <div className="flex items-center">
                          <div className="relative mr-4 ">
                            <img
                              src={logolike}
                              alt="logolike"
                              className="w-4"
                            />

                            <img
                              src={like}
                              alt="like"
                              className="w-4 absolute top-[0px] left-[11px]"
                            />
                          </div>

                          <div>
                            <p className="text-[#999] text-[11px]">
                              Sachin Kamble and 155 others
                            </p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <p className="text-[#999] text-[11px]">46 comments</p>
                      </div>
                    </div>
                  </div>

                  <div className="">
                    <div className="flex px-7 py-2 justify-between items-center border-b-2">
                      <div className="flex items-center">
                        <img
                          src={facelik1}
                          alt="facelik1"
                          className="mr-1.5 -mt-1 w-4"
                        />
                        <p className="text-[#999] text-[11px] mt-[4px]">Like</p>
                      </div>

                      <div className="flex items-center">
                        <img
                          src={facecoment}
                          alt="facecoment"
                          className="mr-1.5 w-4"
                        />
                        <p className="text-[#999] text-[11px] mt-[0px]">
                          comments
                        </p>
                      </div>

                      <div className="flex items-center">
                        <img
                          src={faceshare}
                          alt="faceshare"
                          className="mr-1.5 w-4"
                        />
                        <p className="text-[#999] text-[11px] mt-[2px]">
                          Share
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  <div className="px-4">
                    <div className="flex items-center mb-4">
                      <div className="flex  items-center">
                        <img
                          src={postname}
                          alt="postname"
                          className="w-9 mr-3"
                        />
                        <div className="mr-6">
                          <p className="text-[#999] text-xs">
                            <span className="font-semibold text-[#000]">
                              Divya shah
                            </span>{" "}
                            is with{" "}
                            <span className="font-semibold text-[#000]">
                              Mahesh Joshi.
                            </span>
                          </p>
                          <p className="text-[9px] font-medium text-[#999]">
                            1 h . Mumbai, Maharastra .
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <img
                          src={facemore}
                          alt="facemore"
                          className="w-5 mr-3"
                        />
                        <img
                          src={face_close}
                          alt="face_close"
                          className="w-4"
                        />
                      </div>
                    </div>

                    <p className="text-xs font-medium pb-1">
                      Bioglow body creame is so good
                    </p>
                  </div>
                  <div>
                    <img
                      src={raulngeimg}
                      alt="raulngeimg"
                      className="w-full h-[20rem] mb-3 object-cover"
                    />
                  </div>
                  <div className="px-5 flex items-center">
                    <div className="flex items-center mt-1 border-b-2 pb-1.5">
                      <div className="relative  mr-8">
                        <div className="flex items-center">
                          <div className="relative mr-4 ">
                            <img
                              src={logolike}
                              alt="logolike"
                              className="w-4"
                            />

                            <img
                              src={like}
                              alt="like"
                              className="w-4 absolute top-[0px] left-[11px]"
                            />
                          </div>

                          <div>
                            <p className="text-[#999] text-[11px]">
                              Sachin Kamble and 155 others
                            </p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <p className="text-[#999] text-[11px]">46 comments</p>
                      </div>
                    </div>
                  </div>

                  <div className="">
                    <div className="flex px-7 py-2 justify-between items-center border-b-2 ">
                      <div className="flex items-center">
                        <img
                          src={facelik1}
                          alt="facelik1"
                          className="mr-1.5 -mt-1 w-4"
                        />
                        <p className="text-[#999] text-[11px] mt-[4px]">Like</p>
                      </div>

                      <div className="flex items-center">
                        <img
                          src={facecoment}
                          alt="facecoment"
                          className="mr-1.5 w-4"
                        />
                        <p className="text-[#999] text-[11px] mt-[0px]">
                          comments
                        </p>
                      </div>

                      <div className="flex items-center">
                        <img
                          src={faceshare}
                          alt="faceshare"
                          className="mr-1.5 w-4"
                        />
                        <p className="text-[#999] text-[11px] mt-[2px]">
                          Share
                        </p>
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
export default FacebookPostModal;
