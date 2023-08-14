import bomiImages from "../../assets/images/bambi-corro.svg";
import danialimg from "../../assets/images/daniel-apodaca.svg";
import iphoneimg from "../../assets/images/Battery.svg";
import Cellularimg from "../../assets/images/Cellular Connection.svg";
import wifiimg from "../../assets/images/Wifi.svg";
import icon_homeimg from "../../assets/images/icon_home.svg";
import icon_mediaimg from "../../assets/images/icon_media.svg";
import icon_searchimg from "../../assets/images/icon_search.svg";
import icon_shopimg from "../../assets/images/icon_shop.svg";
import closepost from "../../assets/images/closepost-1.svg";
import avatartimg from "../../assets/images/avatar.svg";
import instareals from "../../assets/images/instareals.mp4";
import volansoft from "../../assets/images/volan-soft.mp4";
import camraimg from "../../assets/images/Camera-Icon.svg";
import divyarectingleimg from "../../assets/images/divya-rectingle.svg";
import icon_morewhiteimg from "../../assets/images/icon_morewhite.svg";
import Sharewhiteimg from "../../assets/images/Sharewhite.svg";
import Commentwhite from "../../assets/images/Commentwhite.svg";
import Heartwhite from "../../assets/images/Heartwhite.svg";
import instawhitepro from "../../assets/images/instawhitepro.svg";
import musie from "../../assets/images/musie.svg";
import { toggleModal7 } from "../../services/edit-modal"
import dropuserimg from "../../assets/images/User.svg"


export const InstagramReal = ({ reeldata }) => {
  console.log("reeldata", reeldata)
  return (
    <>
      <div className="fixed z-10 overflow-y-auto top-0 w-full left-0 hidden " id="insta-modal-1">
        <div className="flex items-center sm:mt-0 mt-16 justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity " onClick={toggleModal7}>
            <div className="absolute inset-0 bg-gray-900 opacity-[0.5]" />
          </div>
          <span className="hidden sm:inline-block sm:align-middle h-screen">&#8203;</span>
          <div onClick={toggleModal7} className="fixed top-5 right-5 w-9 h-9 rounded-full flex justify-center items-center bg-white"> <img
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

              <div className="h-[38.5rem] overflow-y-auto insta">

                <div>
                  <div className="flex justify-between py-3 px-4 absolute	 top-1 w-full">
                    <div>
                      <h4 className="text-white text-xs font-medium">9:41</h4>
                    </div>
                    <div className="flex">
                      <img src={Cellularimg} alt="Cellularimg" className="w-4 mr-1" />
                      <img src={wifiimg} alt="wifiimg" className="w-4 mr-1" />
                      <img src={iphoneimg} alt="iphoneimg" className="w-6" />
                    </div>
                  </div>
                  <div className="flex justify-between py-3 px-4 absolute	 top-10 w-full">
                    <div>
                      <h4 className="text-white text-base font-bold ">Reels</h4>
                    </div>
                    <div className="flex">
                      <img src={camraimg} alt="camraimg" className="w-5 mr-1" />
                    </div>
                  </div>
                  <div className="instareals-video">
                    <video autoPlay loop id="myVideo" className="rounded-t-3xl ">
                      {/* <source src={volansoft} type="video/mp4"  /> */}
                      Your browser does not support HTML5 video.
                    </video>

                    <div class="content">
                      <div className="flex  items-center mb-4 justify-between relative">

                        <div className="flex items-center">
                          <img
                            src={reeldata?.revuer_profile != "" ? process.env.REVUER_IMAGE_URL + "/" + reeldata?.revuer_profile : dropuserimg}
                            alt="instawhitepro"
                            className={reeldata?.revuer_profile != "" ? "mr-4 w-11 h-11 border border-black rounded-full" : "mr-4 w-11 h-11 border border-black rounded-full bg-[#616161] p-2"}
                          />
                          <h5 className="text-sm font-semibold mr-3">{reeldata?.revuerName}</h5>
                          {/* <button className="border-2 px-4 rounded-lg font-semibold py-1 text-xs border-white">
                            Follow
                          </button> */}
                        </div>
                        <div>
                          <img
                            src={Sharewhiteimg}
                            alt="Sharewhiteimg"
                            className="w-6 mr-3"
                          />

                        </div>
                        <div className="absolute bottom-12 right-0">
                          <div className=" mb-5">
                            <img
                              src={Heartwhite}
                              alt="Heartwhite"
                              className="w-6 mr-3 mb-1.5"
                            />
                            {/* <p className="text-xs font-normal">122k</p> */}
                          </div>
                          <div className=" mb-0">
                            <img
                              src={Commentwhite}
                              alt="Commentwhite"
                              className="w-6 mr-3 mb-1.5"
                            />
                            {/* <p className="text-xs font-normal">420</p> */}

                          </div>



                        </div>

                      </div>

                      {/* <div className="flex items-center">
                        <p className="text-xs font-normal mb-3">
                          Lorem ipsum dolor sit , adipiscing elit, sed do eiusmod tempor
                          numbas sator... more
                        </p>
                        <img
                          src={icon_morewhiteimg}
                          alt="icon_morewhiteimg"
                          className="w-1 mr-5 mb-6"
                        />
                      </div> */}

                      {/* <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <img src={musie} alt="musie" className="w-3 mr-2" />
                          <p className="font-medium text-xs">
                            Don Omar • Danza Kuduro (fe
                            <span className="text-[10px] font-normal">T O K Y O </span>
                          </p>
                        </div>
                        <div>
                          <img
                            src={divyarectingleimg}
                            alt="divyarectingleimg"
                            className="w-8 mr-2 border-2 rounded-lg"
                          />
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between py-3 px-4 absolute	 top-1 w-full">
                    <div>
                      <h4 className="text-white text-xs font-medium">9:41</h4>
                    </div>
                    <div className="flex">
                      <img src={Cellularimg} alt="Cellularimg" className="w-4 mr-1" />
                      <img src={wifiimg} alt="wifiimg" className="w-4 mr-1" />
                      <img src={iphoneimg} alt="iphoneimg" className="w-6" />
                    </div>
                  </div>
                  <div className="flex justify-between py-3 px-4 absolute	 top-10 w-full">
                    <div>
                      <h4 className="text-white text-base font-bold ">Reels</h4>
                    </div>
                    <div className="flex">
                      <img src={camraimg} alt="camraimg" className="w-5 mr-1" />
                    </div>
                  </div>
                  {/* <div className="instareals-video">
  <video autoPlay muted loop id="myVideo" className="rounded-t-3xl ">
    <source src={instareals} type="video/mp4"  />
    Your browser does not support HTML5 video.
  </video>

  <div class="content">
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
        <img
          src={Sharewhiteimg}
          alt="Sharewhiteimg"
          className="w-6 mr-3"
        />
        
      </div>
      <div className="absolute bottom-12 right-0">
      <div className=" mb-5">
        <img
          src={Heartwhite}
          alt="Heartwhite"
          className="w-6 mr-3 mb-1.5"
        />  
        <p className="text-xs font-normal">122k</p>
       </div>
       <div className=" mb-0">
       <img
          src={Commentwhite}
          alt="Commentwhite"
          className="w-6 mr-3 mb-1.5"
        />
          <p className="text-xs font-normal">420</p>
         
       </div>
         
        
        
      </div>

    </div>

    <div className="flex items-center">
      <p className="text-xs font-normal mb-3">
        Lorem ipsum dolor sit , adipiscing elit, sed do eiusmod tempor
        numbas sator... more
      </p>
      <img
        src={icon_morewhiteimg}
        alt="icon_morewhiteimg"
        className="w-1 mr-5 mb-6"
      />
    </div>

    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <img src={musie} alt="musie" className="w-3 mr-2" />
        <p className="font-medium text-xs">
          Don Omar • Danza Kuduro (fe
          <span className="text-[10px] font-normal">T O K Y O </span>
        </p>
      </div>
      <div>
        <img
          src={divyarectingleimg}
          alt="divyarectingleimg"
          className="w-8 mr-2 border-2 rounded-lg"
        />
      </div>
    </div>
  </div>
</div> */}
                </div>

              </div>

              <div className="px-5 py-4 flex justify-between items-center">
                <img src={icon_homeimg} alt="icon_homeimg" className="w-6 " />
                <img src={icon_searchimg} alt="icon_searchimg" className="w-6" />
                <img src={icon_mediaimg} alt="icon_mediaimg" className="w-6" />
                <img src={icon_shopimg} alt="icon_shopimg" className="w-6" />
                <img src={avatartimg} alt="avatartimg" className="w-6" />
              </div>
              <div>
                <p className="text-slate-500 text-center text-xs pb-2">This frame is only for illustration purpose.</p>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  );
};
export default InstagramReal;