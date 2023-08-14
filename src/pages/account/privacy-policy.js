import editimg from "../../assets/images/edit-2.svg";
import deletimg from "../../assets/images/trash.svg";
import makilimg from "../../assets/images/dassbord-maik.svg";
import rewieimg from "../../assets/images/rewie-dassbord.svg";
import amitimg from "../../assets/images/amit.svg";
import Divyaimg from "../../assets/images/divya.svg";
import { NavLink as Link } from "react-router-dom";
import Bhargaviimg from "../../assets/images/Bhargavi-kirubasankar.svg";
import { switchMainTabs } from "../../services/switch-tab";
import { Header, Sidebar } from "../../layouts";
import { useEffect } from "react";
function PravaciPolicy() {
  return (
    <>
      <div className="bac-6 h-64 flex justify-center items-center">
        <div>
          <h2 className="text-4xl font-bold text-white ">Privacy Policy</h2>
          <Link to={`${process.env.REACT_APP_FRONT_URL}/register`} className="bac-6 w-48 py-2.5 flex rounded-lg text-white  text-sm font-bold justify-center items-center uppercase"
          >

            Home
          </Link>
        </div>
      </div>

      <div className="mt-10 mb-5">
        <div className="  mb-6 px-5 md:px-8 lg:px-20">
          <p className="text-justify">
            RevuER by Mishry, owned and run by Fried and Tasted Review Solutions Private Limited, is committed to protecting the privacy of its users. Unless provided
            expressly, the use of the terms “I/We/Us” and other similar personal pronouns shall refer to Fried and Tasted Review Solutions Private Limited, and the use of terms like “You/Your/You’re” and other similar words
            shall hereinafter refer to any user, individually or collectively, of RevuER, regardless of the device, platform, or operating system or any other intermediary
            infrastructure that the said user may deploy to access the same (“User” or “Users”).
          </p>
        </div>
        <div className="text-justify px-5 md:px-8 lg:px-20">
          <p className="text-justify">
            The statements included herein disclose the privacy practices (“Privacy Policy”) of RevuER by Mishry for the purposes of its Platforms (defined below) and govern Users’ access to the same. This Privacy Policy is
            intended to help Users of RevuER by Mishry understand what information we collect, how we handle it, and what rights Users have on their information when sharing it with RevuER by Mishry. The Mishry websites,
            subdomains and mobile application and any other platform or website authorized by Fried and Tasted Review Solutions Private Limited from time to time for the purposes of validly accessing RevuER by Mishry are
            hereinafter collectively referred to as “Platforms”.
          </p>
        </div>

      </div>

      <div className="px-5 md:px-8 lg:px-20">
        <div className="accordion" id="accordionExample">

          <div className="accordion-item ">
            <h2 className="accordion-header mb-0" id="headingOne">
              <button className="
        accordion-button
        relative
        flex
        items-center
        w-full
         text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
        font-bold text-lg mt-5 mb-5
      " type="button" aria-expanded="true">
                Section 1: Personal Information Collected By Fried and Tasted Review Solutions Private Limited And Its Purposes
              </button>
            </h2>
            <div className="accordion-collapse" aria-labelledby="headingOne">
              <div className="accordion-body py-4 ">
                <div>
                  <div >
                    <p className="text-justify mb-5">
                      To avail of certain features on our Platforms, Users voluntarily provide us certain information, i.e. name, email address, phone number, age, gender, interests, occupation, and the like, as part of the registration
                      process whether as a visitor, contributor, subscriber, or sponsored service. This information helps us improve our services by enabling us to customize our Platforms to cater to your personal interests and make them
                      more useful and relevant to you. Further, your details are required to create and maintain your accounts with us and for us to contact you in case you need support. As a User accessing the Platforms, you voluntarily
                      agree that your information may be collected, used, managed, shared, and disposed off, by Fried and Tasted Review Solutions Private Limited as detailed in this Policy.
                      <br />
                      <br />
                      We may ask for and collect the following information about you when you use the Platforms and without this information, we may not be able to provide you with all the requested services. The information collected by
                      Fried and Tasted Review Solutions Private Limited may be classified into three broad categories:
                    </p>
                  </div>

                  <div className=" mb-5">
                    <h4 className="text-lg font-medium"> 1. Personal Data:</h4>
                    <p className="text-justify mb-2">
                      1 User Provided Data – The following categories of information may be sought directly from the User. This information is essential for availing of certain features on our Platform, and extends to primary contact
                      information including but not limited to the following:
                    </p>
                    <p className="mb-1.5">• Name</p>
                    <p className="mb-1.5">• Date of Birth</p>

                    <p className="mb-1.5">• Address</p>

                    <p className="mb-1.5">• Phone</p>

                    <p className="mb-1.5">• Email</p>

                    <p className="mb-1.5">• Age</p>

                    <p className="mb-1.5">• Interests</p>

                    <p className="mb-1.5">• Gender</p>
                  </div>

                  <div className=" mb-5">
                    <h4 className="text-lg font-medium"> 2. Mobile Device Permissions:</h4>
                    <p className="text-justify mb-2">
                      We may further collect and record the following individual information, either through the mobile application or other relevant platforms. This information allows us to provide customized feeds, and maintain a user
                      profile, to enable you to submit pictures or videos from your phone for the completion of brand campaigns. This information is including but not limited to:
                    </p>
                    <p className="mb-1.5">• Contacts</p>
                    <p className="mb-1.5">• Phone</p>

                    <p className="mb-1.5">• Camera</p>

                    <p className="mb-1.5">• Gallery</p>

                    <p className="mb-1.5">• Microphone</p>

                    <p className="mb-1.5">• SMS</p>

                    <p className="mb-1.5">Permissions to these settings may sometimes be essential for the satisfactory running of the features, and platforms as you access them through your own device.</p>
                  </div>
                  <div className=" mb-5">
                    <h4 className="text-lg font-medium"> 3. Information you provide us voluntarily:</h4>
                    <p className="text-justify mb-2">
                      This extends to personal correspondence, such as emails or letters sent by the User or through participating in brand campaigns. We may also collect additional information at other times, for example, when you
                      provide feedback(s), post on the Platforms, respond to surveys, or communicate with us. This information may include your name, e-mail ID, mobile number, location, etc. This information is generally used for either
                      personalizing a user’s experience on the platform or connecting users to suitable brand campaigns or for establishing that the user fulfills the campaign criteria or other related purposes and as such, may be shared
                      with third parties where necessary.
                    </p>
                  </div>
                  <div className="  mb-5">
                    <h4 className="text-lg font-medium"> 4. Third Party Information :</h4>
                    <p className="text-justify mb-2">
                      Fried and Tasted Review Solutions Private Limited may also receive information about you through other Users or by third parties with whom the User has consented to share correspondence about their activities
                      (“TPI”). It is clarified that Fried and Tasted Review Solutions Private Limited does not undertake any obligation to verify if the User has consented to third parties sharing TPI with Fried and Tasted Review
                      Solutions Private Limited and damages arising to the User thereto shall be a matter solely and exclusively between the User and the concerned third party.
                    </p>
                  </div>

                  <div className=" mb-5">
                    <h4 className="text-lg font-medium mb-3"> 5. Information we collect automatically :</h4>
                    <p className="text-justify mb-4">
                      We collect information about you and your use of our services, your interactions with us, as well as information regarding your devices, used to access our services (such as mobile devices, tablets, and other viewing
                      devices). This information includes, but is not limited to:
                    </p>
                    <p className="text-justify mb-4">• Activities on our Platforms, such as type of pages and campaigns viewed, time spent on pages, etc.;</p>
                    <p className="text-justify mb-4">• Your interactions with our email, campaign managers, and via chats on messaging platforms.</p>
                    <p className="text-justify mb-4"> • Information collected via the use of cookies and other technologies.</p>
                    <p className="text-justify mb-4">
                      {" "}
                      To improve the responsiveness of the platforms for all our Users, we may use cookies or similar electronic tools to collect information to assign each visitor a unique, random number as a user identification to
                      understand the user's particular interests using the identified device. Unless you voluntarily identify yourself (through registration, for example), we would not know who you are, even if and when we assign a cookie
                      to your device. The only personal information which a cookie can hold is the information you supply. Our advertisers may also assign their own cookies to your browser(s) (if you click on their advertisements), a
                      process that we do not control.
                    </p>
                  </div>

                  <div className=" mb-5">
                    <h4 className="text-lg font-medium mb-3"> 6. User Experience and Support :</h4>
                    <p className="text-justify mb-4">
                      We identify and use your internet protocol (“IP”) address to help diagnose any problems with our server and to administer our application without technical glitches. Your IP address is also used to help identify you
                      and to gather broad demographic information to customize your experience on our Platforms. We will occasionally ask you to complete optional online surveys. These surveys may ask you for information such as contact
                      information and demographic information (like pin code, age, etc.). We use such data to customize the overall experience on the platforms, providing you with content and campaigns that we believe you might be
                      interested in and to display content and campaigns according to your preferences.
                    </p>
                  </div>

                  <div className=" mb-5">
                    <h4 className="text-lg font-medium mb-3"> 7. Information we collect through third parties :</h4>
                    <p className="text-justify mb-4">
                      When you register with us using other accounts, i.e., Facebook, Google etc., we retrieve information from such accounts to continue to interact with you and to continue providing the services. We collect general
                      information from the respective social media platforms, including but not limited to public information, name, email ID, friend list (or their platform equivalent), etc.
                    </p>
                  </div>

                  <div className=" mb-5">
                    <h4 className="text-lg font-medium mb-3"> 1. Sensitive Personal Data:</h4>
                    <p className="text-justify mb-4">
                      When you register with us using other accounts, i.e., Facebook, Google etc., we retrieve information from such accounts to continue to interact with you and to continue providing the services. We collect general
                      information from the respective social media platforms, including but not limited to public information, name, email ID, friend list (or their platform equivalent), etc.
                    </p>

                    <h4 className="text-lg font-medium mb-3"> A: Payment information :</h4>
                    <p className="text-justify mb-4">
                      We do not collect any payment information from the Users except for details relating to bank accounts and payment wallets. Such details are required for RevuER by Mishry to transfer payments to its Users in
                      accordance with the Terms of Use of the RevuER by Mishry Platform.
                    </p>

                    <h4 className="text-lg font-medium mb-3"> b: Tax Details :</h4>
                    <p className="text-justify mb-4">All details associated with the above payment modalities to pay and deposit tax with the requisite authorities.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="accordion-item">
            <h2 className="accordion-header mb-0" id="headingTwo">
              <button className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
       
        font-bold text-lg mt-5 mb-5
        first-letter: text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button"
                aria-controls="collapseTwo">
                Section 2: Information Use Cases
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse" aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample">
              <div className="accordion-body py-4">
                <div>
                  <div className="">
                    <p className="text-justify mb-5">
                      Without prejudice to any use cases of information detailed in Section 1 above, Fried and Tasted Review Solutions Private Limited retains the right to use the User’s information for the following purposes:{" "}
                    </p>
                    <p className="mb-1.5">
                      • Making available relevant content and campaigns based on your interest for an improved experience, i.e., if you are a baker, we will show you content and campaigns related to baking, and brands that sell products
                      in this category.{" "}
                    </p>

                    <p className="mb-1.5">• Analyze and understand our audience, enhance our services (including our user interface experiences), and optimize content choice, recommendation algorithms, and delivery; </p>

                    <p className="mb-1.5">• Perform analysis and research to improve our Platforms; </p>

                    <p className="mb-1.5">• Advertise Users to participate in interactive features offered through the services; </p>

                    <p className="mb-1.5">• Notify users about the change in terms of service; and, </p>
                    <p className="mb-1.5">• Send you updates on appropriate content and campaigns </p>
                    <p className="mb-1.5">• Providing payments under the RevuER by Mishry program. </p>

                    <p className="mb-1.5">
                      However, any personal information provided by you will not be considered sensitive if it is freely available and/or accessible in the public domain like any comments, messages, blog posts or scribbles, etc. available
                      on social media platforms such as Facebook, Twitter etc.
                    </p>

                    <p className="mb-1.5">
                      Any information posted/ uploaded/ conveyed/ communicated by users on the public sections of the Platform becomes published content. In case you choose to decline to submit any information envisaged under this Privacy
                      Policy, we may not be able to provide certain services to you. In any case, we will not be liable and/or responsible for our denial of certain services to you for the absence of you providing the necessary personal
                      information. When you register with our services, we shall contact you from time to time about updating your personal information to enable us to provide the users with such features that we believe may
                      benefit/interest you.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="accordion-item ">
            <h2 className="accordion-header mb-0" id="headingThree">
              <button className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
     
        font-bold text-lg mt-5 mb-5 text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse"
                aria-controls="collapseThree">
                Section 3: Data Security
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse" aria-labelledby="headingThree">
              <div className="accordion-body py-4 ">
                <div>

                  <div >
                    <p className="text-justify mb-5">
                      We know how much you care about the privacy and security of your personal information, and we are committed to fully protecting your privacy and your information shared with us from any unauthorized access or loss.
                      All information gathered on our Platforms is securely stored within the Fried and Tasted Review Solutions Private Limited controlled database. The database is stored on the servers secured behind a firewall and
                      access to these servers is password protected and is strictly limited. If you know or have reason to believe that your account credentials have been lost, stolen, altered, or otherwise compromised, please write to us
                      at Info@Mishry.com and our team will assist you quickly.
                    </p>
                    <p className="text-justify mb-5">
                      However, it is also pertinent to mention here that transmission of information via the internet is never fully impenetrable. Hence, users should also take requisite steps to protect their personal information against
                      any unauthorized access. Such steps include choosing a strong password, signing off after using a shared device, and keeping your login details, especially your password, private. We shall not be held responsible for
                      any lost, stolen, or compromised information or for any activity on your account via unauthorized password usage.{" "}
                    </p>
                    <p className="text-justify mb-5">
                      You are requested to adhere to these guidelines while using our Platforms. Non-adherence to any of the following guidelines by a user shall be deemed unauthorized access of our Platforms and render the said User
                      liable for prosecution under law. Further, Fried and Tasted Review Solutions Private Limited disclaims all liability arising out of the breach of a User’s data in the event the said User fails to follow or knowingly
                      breaches the below-mentioned guidelines for access.
                    </p>
                    <p className="mb-1.5">
                      • Making available relevant content and campaigns based on your interest for an improved experience, i.e., if you are a baker, we will show you content and campaigns related to baking, and brands that sell products
                      in this category.{" "}
                    </p>

                    <h3 className="font-semibold text-lg">Access Guidelines for Users:</h3>
                    <p className="mb-1.5">• Don’t break our security measures or test the vulnerability of our systems or networks.</p>

                    <p className="mb-1.5">
                      • Don’t access or use the Platforms using any mechanism or technology which conceals your actual geo-location or provides incorrect details of your location (for example, use a virtual private network (VPN) to access
                      the services).
                    </p>

                    <p className="mb-1.5">• Don’t try to interfere with our networks, like sending a virus, overloading, or spamming.</p>

                    <p className="mb-1.5">• Don’t collect or store personally identifiable information of people on the Platforms. </p>
                    <p className="mb-1.5">• Don’t provide any unauthorized personal information of third parties while supplying or contributing any user-generated content on the Platform.</p>
                    <p className="mb-1.5">• Don’t share your password, allow anyone to access your account or do anything that might put your account at risk. </p>

                    <p className="mb-1.5">• Don’t attempt to buy or sell access to your account, or usernames, or otherwise transfer account features for compensation. </p>

                    <p className="mb-1.5">
                      {" "}
                      <p className="mb-1.5">• Don’t attempt to buy or sell access to your account, or usernames, or otherwise transfer account features for compensation. </p>
                    </p>
                    <p className="mb-1.5">• Don't link your web browser to websites that are unsafe, deceptive, untrustworthy, unoriginal, or that facilitate or encourage spam.</p>

                    <p className="mb-1.5">• Don't send unsolicited messages or make irrelevant comments on the content of the Platforms.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="accordion-item ">
            <h2 className="accordion-header mb-0" id="headingThree1">
              <button className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
     
        font-bold text-lg mt-5 mb-5 text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" >
                Section 4: User Controls & Choices
              </button>
            </h2>
            <div id="collapseThree1" className="accordion-collapse" aria-labelledby="headingThree1"
              data-bs-parent="#accordionExample">
              <div className="accordion-body py-4">
                <div>
                  <div>
                    <p className="text-justify mb-5">
                      Rectification of Inaccurate or Incomplete Information: You may ask us to correct inaccurate or incomplete personal information concerning you (this is the information that you cannot update yourself within your
                      account) by sending us an e-mail. You can access and update some of your personal information through your account settings yourself as well. If you have chosen to connect your profile to a third-party application,
                      like Facebook or Google, etc., you can change your settings and remove permission for the Platform(s) by changing your account settings. You are responsible for keeping your personal information up-to-date. Fried and
                      Tasted Review Solutions Private Limited may send you periodic reminders via e-mail to maintain the accuracy of your personal information.
                    </p>
                    <p className="text-justify mb-5">
                      Data Retention and Erasure: We retain your personal information as long as necessary for the legitimate business interests of Fried and Tasted Review Solutions Private Limited to provide you with the services and for
                      us to comply with our legal obligations. If you no longer want us to use your information, then you can request that we erase your personal information and close your account. Please note that if you request the
                      erasure of your personal information, we may:
                    </p>
                    <p className="text-justify mb-5">
                      • Still retain some of your personal information as necessary for our legitimate business interests, such as fraud detection, prevention, and enhancing safety. For example, if we suspend an account for fraud or
                      safety reasons, we may retain certain information from that account to prevent that user from opening a new account in the future.
                    </p>
                    <p className="mb-1.5">
                      • Still retain and use your personal information to the extent necessary to comply with our legal obligations. For example, we may keep some of your information for taxation, legal reporting, and auditing
                      obligations.
                    </p>

                    <p className="mb-1.5">Information that you have shared with others (e.g., reviews, forum postings) may continue to be publicly visible on the Platforms, even after your account is revoked or removed. </p>

                    <p className="mb-1.5">
                      Additionally, some copies of your information (e.g., log records) may remain in our database, but are disassociated from personal identifiers. As we maintain copies of personal information to protect from accidental
                      or malicious loss and destruction and hence residual copies of your personal information may not be removed from our backup systems for a limited time.
                    </p>

                    <p className="mb-1.5">
                      Withdrawing Consent and Restriction of Processing: For withdrawing your consent at any time during the tenure of your services with us, you may choose to do so by sending us an e-mail. We shall review your request
                      and may ask you to verify your identity. Post verification we will withdraw the consent for which request was made by you and stop any further processing of your personal information.
                    </p>

                    <p className="mb-1.5">
                      Where your personal information is processed for direct marketing purposes, you may, at any point in time ask us to cease processing your data for these direct marketing purposes by sending an e-mail to us. Please be
                      aware that if you do not allow us to collect personal information from you, we may not be able to deliver certain experiences, products, and services to you, and some of our services may not be able to take account
                      of your interests and preferences. If you have questions about the specific personal information about you that we process or retain, and your rights regarding that personal information, please contact our customer
                      support team.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="accordion-item ">
            <h2 className="accordion-header mb-0" id="headingThree7">
              <button className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
    
        font-bold text-lg mt-5 mb-5 text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button">
                Section 5: Personal Information Of Minors
              </button>
            </h2>
            <div id="collapseThree7" className="accordion-collapse" aria-labelledby="headingThree7"
              data-bs-parent="#accordionExample">
              <div className="accordion-body py-4 ">
                <div>
                  <div>
                    <p className="text-justify mb-5">
                      Fried and Tasted Review Solutions Private Limited does not seek or intend to seek or receive any personal information from children. Hence, children under 18 years are not allowed to register on our Platforms. If
                      Fried and Tasted Review Solutions Private Limited becomes aware that any personally identifiable information of persons less than 18 years of age has been collected on the Platforms without verified parental consent,
                      then Fried and Tasted Review Solutions Private Limited will take the appropriate steps to delete any such information and notify the parent. However, we consider it the responsibility of parents to monitor their
                      children's use of our services. Nevertheless, it is our policy not to collect and process any personal information from children below 18 years of age or offer to send any promotional materials to persons in that
                      category. Should a parent or guardian have reasons to believe that a minor has provided Fried and Tasted Review Solutions Private Limited with personal information without their prior consent, please contact us at
                      Info@mishry.com to ensure that the personal information is removed from the Platforms.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="accordion-item ">
            <h2 className="accordion-header mb-0" id="headingThree3">
              <button className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
       
        font-bold text-lg mt-5 mb-5 text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button"
                aria-controls="collapseThree2">
                Section 6: Disclosure, Data Transfer, Storage & Processing
              </button>
            </h2>
            <div id="collapseThree3" className="accordion-collapse" aria-labelledby="headingThree3"
              data-bs-parent="#accordionExample">
              <div className="accordion-body py-4 ">
                <div>
                  <div>
                    <h3 className="font-semibold">General Disclosure:</h3>
                    <p className="text-justify mb-5">
                      We may transfer your personal information to individual companies, affiliated companies, or third parties in locations around the world for the purposes described in this Privacy Policy. Wherever your personal
                      information is transferred, stored, or processed by us, we will take reasonable steps in accordance with prevailing technology to safeguard the privacy of your personal information. A User may request to cease such
                      disclosure by writing to us subject to the protocol described in Section 4 above.
                    </p>

                    <h3 className="font-semibold">Advertising:</h3>
                    <p className="text-justify mb-5">
                      When we present information to our advertisers to help them understand our audience and confirm the value of advertising on our Platforms, it is usually in the form of aggregated statistics on traffic to various
                      pages/ content within our Platforms. We use third-party advertising companies to serve ads when you visit our Platforms. These companies may use information about your visits to this and other websites or
                      applications, in order to provide advertisements about goods and services of interest to you.
                    </p>

                    <h3 className="font-semibold">Business Transfers:</h3>
                    <p className="text-justify mb-5">
                      We provide personal information to our affiliates and other trusted businesses or persons to process it for us, based on our instructions and in compliance with our Privacy Policy and any other appropriate
                      confidentiality and security measures. For example, we may use service providers to help us with customer support. In the event, Fried and Tasted Review Solutions Private Limited is merged with or acquired by another
                      company or in case of re-organization or re-structuring of business, we and our affiliates may share your personal information, wholly or in part, with another business entity. In no case shall such sharing of data
                      be void for want of disclosure about the said transitions.
                    </p>

                    <h3 className="font-semibold">Service Providers:</h3>
                    <p className="text-justify mb-5">
                      At times, Fried and Tasted Review Solutions Private Limited may make certain personal information available to its third party strategic partners, or other third parties that help Fried and Tasted Review Solutions
                      Private Limited in marketing and research. When you register with our Platforms, you authorize Fried and Tasted Review Solutions Private Limited to exchange the information you provide for the purpose of provision of
                      the services as well as to improve the services and for our marketing aspects. Such exchange of information by Fried and Tasted Review Solutions Private Limited shall be governed by our Privacy Policy.
                      <br /> <br />
                      Fried and Tasted Review Solutions Private Limited may also carefully select other companies to send you information about their products or services which are related to the services but are not necessary to its
                      operation (“Extended Service”).
                    </p>

                    <h3 className="font-semibold">Legal:</h3>
                    <p className="text-justify mb-5">
                      Fried and Tasted Review Solutions Private Limited may disclose personally identifiable information if required to do so by law or in good faith belief that such action is necessary to:
                    </p>
                    <p className="text-justify mb-4">• Comply with legal process or proceedings or judicial order served on the Platform or its owners.</p>
                    <p className="text-justify mb-4">• Protect and defend the rights or property of the Platform owners or of the users of the Platforms, or</p>
                    <p className="text-justify mb-4">• Act under exigent circumstances to protect the personal safety of users of the Platforms, its owners, or the public.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="accordion-item ">
            <h2 className="accordion-header mb-0" id="headingThree4">
              <button className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
      
        font-bold text-lg mt-5 mb-5 text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button">
                Section 7: Amendment To Privacy Policy
              </button>
            </h2>
            <div id="collapseThree4" className="accordion-collapse" aria-labelledby="headingThree4"
              data-bs-parent="#accordionExample">
              <div className="accordion-body py-4">
                <div>
                  <div>
                    <p className="text-justify mb-5">
                      This Privacy Policy is subject to amendment from time to time. We reserve the right, at our sole discretion, to modify the terms of this Privacy Policy from time to time in order to ensure compliance with applicable
                      laws and changing technological needs (“Updated Terms”). The Updated Terms shall be effective immediately and shall supersede the terms of this Privacy Policy. We will notify you of any changes to this privacy policy
                      if required by law. You shall be solely responsible for reviewing the Privacy Policy from time to time for any modifications. By continuing to use the Platforms after the Updated Terms have been published, you affirm
                      your agreement to the Updated Terms.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="accordion-item ">
            <h2 className="accordion-header mb-0" id="headingThree5">
              <button className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        
        font-bold text-lg mt-5 mb-5 text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" >
                Section 8: Contact Information & Miscellaneous
              </button>
            </h2>
            <div id="collapseThree5" className="accordion-collapse" aria-labelledby="headingThree5"
              data-bs-parent="#accordionExample">
              <div className="accordion-body py-4">
                <div>
                  <div>
                    <h4 className="font-semibold text-lg">Support:</h4>
                    <p className="text-justify mb-5">
                      If you require any information or clarification regarding the use of your personal information or this privacy policy or grievances concerning the use of your personal information, please email us at Info@mishry.com
                      Conditions of Use: Please note that if you decide to visit our Platforms, your visit and any possible dispute over privacy are subject to the Platforms’ Privacy Policy, Cookie Policy, and Terms and Conditions
                    </p>
                    <h4 className="font-semibold text-lg">Conditions of Use:</h4>
                    <p className="text-justify mb-5">
                      Please note that if you decide to visit our Platforms, your visit and any possible dispute over privacy are subject to the Platforms’ Privacy Policy, Cookie Policy, and Terms and Conditions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>



        </div>
      </div>

    </>
  );
}
export default PravaciPolicy;
