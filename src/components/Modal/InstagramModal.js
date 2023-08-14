import bomiImages from "../../assets/images/bambi-corro.svg";
import danialimg from "../../assets/images/daniel-apodaca.svg";
import iphoneimg from "../../assets/images/Battery.svg";
import Cellularimg from "../../assets/images/Cellular Connection.svg";
import wifiimg from "../../assets/images/Wifi.svg";
import jesusimg from "../../assets/images/jesus-santos.svg";
import joseImages from "../../assets/images/jose-alejandro.svg";
import Rufflesimg from "../../assets/images/Ruffles.svg";
import MessengerImages from "../../assets/images/Messenger.svg";
import Likeimg from "../../assets/images/Like.svg";
import logoinstaimg from "../../assets/images/logo-insta.svg";
import moreimg from "../../assets/images/more-icon.svg";
import raulngeimg from "../../assets/images/raul-ange.svg";
import closepost from "../../assets/images/closepost-1.svg";
import Bookmarkimg from "../../assets/images/Bookmark.svg";
import Commentimg from "../../assets/images/Comment.svg";
import Heartimg from "../../assets/images/Heart.svg";
import Shareimg from "../../assets/images/Share.svg";
import icon_homeimg from "../../assets/images/icon_home.svg";
import icon_mediaimg from "../../assets/images/icon_media.svg";
import icon_searchimg from "../../assets/images/icon_search.svg";
import icon_shopimg from "../../assets/images/icon_shop.svg";
import avatartimg from "../../assets/images/avatar.svg";
import { toggleModal6} from "../../services/edit-modal"


export const InstagramModal = () => {
    return (
        <>
            <div className="fixed z-10 overflow-y-auto top-0 w-full left-0 hidden" id="insta-modal">
                <div className="flex items-center sm:mt-0 mt-16 justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <div className="fixed inset-0 transition-opacity " onClick={toggleModal6}>
                        <div className="absolute inset-0 bg-gray-900 opacity-[0.5]" />
                    </div>
                    <span className="hidden sm:inline-block sm:align-middle h-screen">&#8203;</span>
                    <div  onClick={toggleModal6} className="fixed top-5 right-5 w-9 h-9 rounded-full flex justify-center items-center bg-white"> <img
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
                         <div className="bg-[#080A0B] box-shadow-3 w-[21.7rem]   rounded-3xl ">
          <div className="flex justify-between py-3 px-4">
            <div>
              <h4 className="text-white text-xs font-medium">9:41</h4>
            </div>
            <div className="flex">
              <img src={Cellularimg} alt="Cellularimg" className="w-4 mr-1" />
              <img src={wifiimg} alt="wifiimg" className="w-4 mr-1" />
              <img src={iphoneimg} alt="iphoneimg" className="w-6" />
            </div>
          </div>
          <div className="flex justify-between items-center  px-3 pb-2 mb-2">
            <div>
              <img
                src={logoinstaimg}
                alt="logoinstaimg"
                className="w-20 mr-1"
              />
            </div>
            <div className="flex items-center">
              <img src={Likeimg} alt="Likeimg" className="w-6 mr-2" />
              <img
                src={MessengerImages}
                alt="MessengerImages"
                className="w-5 mr-1"
              />
            </div>
          </div>
          <div className="w-[20.9rem] insta overflow-x-scroll">
            <div className="flex justify-between items-center px-4 pb-1">
              <div className="mr-2">
                <div className="border-2 rounded-full w-14 h-14 flex justify-center mb-2 items-center">
                  <img
                    src={Rufflesimg}
                    alt="Rufflesimg"
                    className=" w-11 h-11 rounded-full object-cover"
                  />
                </div>
                <p className="text-white text-[9px] text-center">Ruffles</p>
              </div>
              <div className="mr-2">
                <div className="border-2 rounded-full w-14 h-14 flex justify-center mb-2 items-center">
                  <img
                    src={bomiImages}
                    alt="bomiImages"
                    className=" w-11 h-11 rounded-full object-cover"
                  />
                </div>
                <p className="text-white text-[9px] text-center">HypeSun_98</p>
              </div>
              <div className="mr-2">
                <div className="border-2 rounded-full w-14 h-14 flex justify-center mb-2 items-center">
                  <img
                    src={danialimg}
                    alt="danialimg"
                    className=" w-11 h-11 rounded-full object-cover"
                  />
                </div>
                <p className="text-white text-[9px] text-center">KarolBary</p>
              </div>
              <div className="mr-2">
                <div className="border-2 rounded-full w-14 h-14 flex justify-center mb-2 items-center">
                  <img
                    src={joseImages}
                    alt="joseImages"
                    className=" w-11 h-11 rounded-full object-cover"
                  />
                </div>
                <p className="text-white text-[9px] text-center">Waggles</p>
              </div>
              <div className="mr-2">
                <div className="border-2 rounded-full w-14 h-14 flex justify-center mb-2 items-center">
                  <img
                    src={jesusimg}
                    alt="jesusimg"
                    className=" w-11 h-11 rounded-full object-cover"
                  />
                </div>
                <p className="text-white text-[9px] text-center">Cherine_001</p>
              </div>
              <div className="mr-2">
                <div className="border-2 rounded-full w-14 h-14 flex justify-center mb-2 items-center">
                  <img
                    src={Rufflesimg}
                    alt="Rufflesimg"
                    className=" w-11 h-11 rounded-full object-cover"
                  />
                </div>
                <p className="text-white text-[9px] text-center">Ruffles</p>
              </div>
              <div className="mr-2">
                <div className="border-2 rounded-full w-14 h-14 flex justify-center mb-2 items-center">
                  <img
                    src={bomiImages}
                    alt="bomiImages"
                    className=" w-11 h-11 rounded-full object-cover"
                  />
                </div>
                <p className="text-white text-[9px] text-center">HypeSun_98</p>
              </div>
            </div>
          </div>

          <div className="h-[29.1rem] overflow-y-auto insta">
            <div className="bg-white pb-1 pt-0.5">
              <div className="px-2 py-2 flex justify-between items-center">
                <div className="flex items-center">
                  <img
                    src={Rufflesimg}
                    alt="Rufflesimg"
                    className=" w-6 h-6 rounded-full object-cover mr-2"
                  />
                  <p className="text-xs font-semibold">Ruffles</p>
                </div>

                <div>
                  <img src={moreimg} alt="moreimg" />
                </div>
              </div>

              <div>
                <img
                  src={raulngeimg}
                  alt="raulngeimg"
                  className="h-96 w-full object-cover"
                />
              </div>

              <div className="px-2 py-2 flex justify-between items-center">
                <div className="flex items-center">
                  <img
                    src={Heartimg}
                    alt="Bookmarkimg"
                    className=" w-5 h-5 mr-3"
                  />

                  <img
                    src={Commentimg}
                    alt="Bookmarkimg"
                    className=" w-5 h-5 mr-3"
                  />
                  <img
                    src={Shareimg}
                    alt="Commentimg"
                    className=" w-5 h-5 mt-0.5 mr-3"
                  />
                </div>

                <div>
                  <img src={Bookmarkimg} alt="Bookmarkimg" className="w-4" />
                </div>
              </div>
            </div>
            <div className="bg-white pb-1 pt-0.5">
              <div className="px-2 py-2 flex justify-between items-center">
                <div className="flex items-center">
                  <img
                    src={Rufflesimg}
                    alt="Rufflesimg"
                    className=" w-6 h-6 rounded-full object-cover mr-2"
                  />
                  <p className="text-xs font-semibold">Ruffles</p>
                </div>

                <div>
                  <img src={moreimg} alt="moreimg" />
                </div>
              </div>

              <div>
                <img
                  src={raulngeimg}
                  alt="raulngeimg"
                  className="h-96 w-full object-cover"
                />
              </div>

              <div className="px-2 py-2 flex justify-between items-center">
                <div className="flex items-center">
                  <img
                    src={Heartimg}
                    alt="Bookmarkimg"
                    className=" w-5 h-5 mr-3"
                  />

                  <img
                    src={Commentimg}
                    alt="Bookmarkimg"
                    className=" w-5 h-5 mr-3"
                  />
                  <img
                    src={Shareimg}
                    alt="Commentimg"
                    className=" w-5 h-5 mt-0.5 mr-3"
                  />
                </div>

                <div>
                  <img src={Bookmarkimg} alt="Bookmarkimg" className="w-4" />
                </div>
              </div>
            </div>
          </div>

          <div className="px-5 py-4 flex justify-between items-center pb-9">
            <img src={icon_homeimg} alt="icon_homeimg" className="w-6 " />
            <img src={icon_searchimg} alt="icon_searchimg" className="w-6" />
            <img src={icon_mediaimg} alt="icon_mediaimg" className="w-6" />
            <img src={icon_shopimg} alt="icon_shopimg" className="w-6" />
            <img src={avatartimg} alt="avatartimg" className="w-6" />
          </div>
        </div>

                     
                    </div>
                </div>
            </div>


        </>
    );
};
export default InstagramModal;