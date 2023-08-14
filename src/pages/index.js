import { NavLink as Link, useNavigate } from "react-router-dom";
var aesEcb = require('aes-ecb');
var keyString = 'KeyMustBe16ByteOR24ByteOR32Byte!';
var input = 'RevuEr';

import profilestatus from "../assets/images/app-logo.png";
import standerdicon from "../assets/images/1.png";
import creditimg from "../assets/images/2.png";
import pluseicon from "../assets/images/3.png";
import visaicon from "../assets/images/12.png";
import cardimg from "../assets/images/13.png";
import card1img from "../assets/images/14.png";
import { toggleModal } from "../services/make-payment";
import { PaymentModal } from "../components/Modal";

import successModalImg from "../assets/images/mishry_amzn-removebg-preview.png";

import { ResubmitModal } from "../components/Modal";
// var postcss = require('postcss')
// var removePrefixes = require('postcss-remove-prefixes')
// postcss([ removePrefixes() ]).process("../frontassets/css/styles.css").css
var encrypt = aesEcb.encrypt(keyString, input);
var decrypt = aesEcb.decrypt(keyString, encrypt);
function Home() {

    const navigate = useNavigate();
    // window.location.href = 'https://revuerbranddev.mishry.com/revuer-brand/login';
    window.location.href = 'http://127.0.0.1:4000/revuer-brand/';

    // logger.warn("hello file")
//     return (
//         <>
// 				<header class="text-center">
//             <div class="header-content p-1">
//                 <a id="logo-image" href="https://revuer.mishry.com/" title="RevuER by Mishry">
//                     <img src={successModalImg} alt="RevuER by Mishry"/>
//                 </a>
//                 <div id="logo-text">
//                     <div id="logo-title">RevuER</div>
//                     <div id="logo-sponsor">by Mishry</div>
//                 </div>
//             </div>
//         </header>

//         <div className="px-6 md:px-16 lg:px-[7.2rem]">
//         <div className="block md:flex lg:flex  py-152">

//           <div className="flex-initial w-full md:7/12 lg:w-7/12 py-152 ">
//           <h2 class="para-heading">Share your voice and get paid for it</h2>
//                         <p class="para-text my-145 Telegraf-Re">Join <strong>RevuER</strong> and earn a steady income by sharing your experience of using a product!</p>
//                         <a class="btn btn-warning mt-2" href="https://play.google.com/store/apps/details?id=com.mishry.revuer" role="button">Download RevuER</a>
//             </div>
//             <div className="flex-initial w-full md:7/12 lg:w-5/12 p-125">
//             <img src={card1img} alt="card1img" class="img-fluid "/>
//             </div>

//             </div>

//             <div className="block md:flex lg:flex  py-152">

// <div className="flex-initial w-full md:7/12 lg:w-7/12 py-152 ">
// <h2 class="para-heading">It's so easy!</h2>
//                         <p class="para-text my-145">Browse live campaigns, select the ones that appeal to you, and simply apply.</p>
//                         <p class="para-text my-145">Follow task timelines, and upload posts directly through the app</p>
//                         <p class="para-text my-145">Keep track of your earnings through our easy payments tab.</p>
//   </div>
//   <div className="flex-initial w-full md:7/12 lg:w-5/12 p-125 py-152 ">
//   <img src={cardimg} alt="cardimg" class="img-fluid "/>
//   </div>

//   </div>

//   <div className="block md:block lg:flex text-center ">

// <div className="flex-initial w-full md:7/12 lg:w-full ">
// <img id="brand-logo" src={successModalImg} alt="RevuER Logo" className="mx-auto" />
//                         <h2 id="text3a" class="para-heading mt-152">For Brands</h2>
//                         <p id="text3b" class="para-text my-2">Legit RevuERs in one place</p>
//                         </div>
  

//   </div>


//   <div className="block md:flex lg:flex text-center py-153 highlights ">

// <div className="flex-initial w-full md:7/12 lg:w-4/12 ">
// <img src={standerdicon} class="img-fluid" alt="check image" />
//                             <p class="highlight-text">Build Campaigns</p>

//                         </div>


//                         <div className="flex-initial w-full md:7/12 lg:w-4/12 ">
// <img src={standerdicon} class="img-fluid" alt="check image" />
//                             <p class="highlight-text">Approve Submissions</p>
//                         </div>

//                         <div className="flex-initial w-full md:7/12 lg:w-4/12 ">
//                         <img src={standerdicon} class="img-fluid" alt="check image" />
//                             <p class="highlight-text">Access Insights</p>
//                         </div>
  

//   </div>
  
//   <div className="block md:flex lg:flex  py-152">


//   <div className="flex-initial w-full md:7/12 lg:w-5/12 p-125 ">
//             <img src={visaicon} alt="visaicon"/>
//             </div>


//           <div className="flex-initial w-full md:7/12 lg:w-7/12 p-125 lg:text-center">
//          <h2 class="para-heading py-152">Get in Touch</h2>
//                         <p class="my-3"><a class="btn btn-warning" target="_blank" href="https://play.google.com/store/apps/details?id=com.mishry.revuer" role="button">I want to join RevuER</a></p>
//                         <p class="my-3"><a class="btn btn-warning" href="https://revuer.mishry.com/revuer-brand/login" role="button" target="_blank">I am a Brand</a></p>
                       
//                         <div className="block md:flex lg:flex  text-start py-152">

//                         <div className="flex-initial w-full md:7/12 lg:w-2/12 ">
//                                 <img src={profilestatus} class="app-logo" />
//                             </div>

//                             <div className="flex-initial w-full md:7/12 lg:w-5/12 ">
//                             <a href="https://revuer.mishry.com/privacy-policy" title="Privacy Policy" class="footer-link">Privacy Policy</a>
//                             </div>
                            
//                             <div className="flex-initial w-full md:7/12 lg:w-5/12 ">
//                                                               <a href="https://mishry.com/contact-us" title="Contact Us" class="footer-link" target="_blank">Contact Us</a>
//                                 <div class="mailer-content">
//                                     <img src={creditimg} alt="mail icon" class="mail-icon"/>
//                                     <a href="mailto:info@mishry.com">info@mishry.com</a>
//                                 </div>
//                                 <div class="phone-content">
//                                     <img src={pluseicon} alt="phone icon" class="mail-icon"/>
//                                     <a href="tel:+91-9560081264">+91-9560081264</a>
//                                 </div>
//                             </div>

                                
//                         </div>
//             </div>
           

//             </div>  

    
//     </div>
// 		</>
//     ); 
}

export default Home;
