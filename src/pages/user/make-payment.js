import profilestatus from "../../assets/images/profile-1.svg";
import standerdicon from "../../assets/images/standra-done.svg";
import creditimg from "../../assets/images/Credit Card.svg";
import pluseicon from "../../assets/images/+.svg";
import visaicon from "../../assets/images/visa.svg";
import cardimg from "../../assets/images/Group 24032.png";
import { toggleModal } from "../../services/make-payment";
import { PaymentModal } from "../../components/Modal";
import successModalImg from "../../assets/images/7188144 1.svg";
import successModalImg2 from "../../assets/images/753318 1.svg";
import netbankcencle from "../../assets/images/Bank-cancle.svg";
import netbanksucces from "../../assets/images/bank-sucess.svg";
import selecticon from "../../assets/images/down-select.svg";
import { useEffect, useState } from "react";
import { customSelect } from "../../utils/custom-select";
function MakePayment() {
  document.getElementsByClassName("select-selected").length==0 && customSelect()
  const [modaltem, setModalItem] = useState({});
  const [changePaymentMethod, setChangePaymentMethod] = useState(true);
  return (
    <>
      <section className="w-full md:w-full lg:w-5/6 mx-auto px-3 sub-width-1">
        <div className="block sm:flex justify-center items-center mt-9 mb-14">
          <img
            src={profilestatus}
            alt="profilestatus"
            className="w-16 sm:block hidden sm:mr-2 sm:m-none"
          />
          <img
            src={profilestatus}
            alt="profilestatus"
            className="w-16 block sm:hidden sm:mr-2 sm:m-none mx-auto"
          />
          <div>
            <p className="text-xl font-normal text-center sm:text-left pt-5 sm:pt-0">
              <span className="font-bold pr-2">Welcome,</span>Manan Sharma
            </p>
            <p className="text-center text-sm sm:text-left">
              Ready to access our pool of trained RevueRS? Let’s do it in 3
              quick steps
            </p>
          </div>
        </div>

        <div className="border-b-2 border-dashed border-[#95A5A6] w-5/6 md:5/6  lg:w-[65%] mx-auto relative sm:mb-18 mb-20">
          <div className="absolute top-[-22px]">
            <div className="w-10 h-10 bac-7 rounded-full text-white flex justify-center items-center">
              1
            </div>
          </div>

          <div className="absolute top-[-22px] left-[43%] md:left-[43%] lg:left-[47%]">
            <div className="w-10 h-10 bac-1 rounded-full text-[#95A5A6] border-2 border-[#95A5A6] flex justify-center items-center">
              2
            </div>
          </div>

          <div className="absolute top-[-22px] right-0">
            <div className="w-10 h-10 bac-1 rounded-full text-[#95A5A6] border-2 border-[#95A5A6] flex justify-center items-center">
              3
            </div>
          </div>

          <div className="absolute top-8 left-[-27px] font-semibold text-[9px] sm:text-sm">
            Purchase a plan
          </div>

          <div className="absolute top-8 left-[36%] md:left-[37%] lg:left-[43%] pr-3 font-semibold text-[#95A5A6] text-[9px] sm:text-sm">
            Setup Your Profile
          </div>

          <div className="absolute top-8 right-[-24px] md:right-[-45px] lg:right-[-70px] font-semibold text-[8px] sm:text-sm text-[#95A5A6]">
            Create your first Campaign
          </div>
        </div>

        <div className="block md:block lg:flex  w-full float-right mt-5">
          <div className="flex-initial w-full md:11/12 lg:w-6/12 bac-1 mr-5 mb-10 sm:mb-0">
            <div>
              <h5 className="text-sm sm:text-xl font-semibold flex items-center mb-2">
                Order Summary
              </h5>
              <p className="text-base mb-8">
                Get the planning, more campaigns, and security features you need
                to work more efficiently.
              </p>
            </div>
            <div className="border-2 border-[#FCB43C] rounded-2xl py-5 px-5 md:py-5 lg:py-6 mb-6">
              <p className="text-3xl text-[#FCB43C] font-semibold mb-5 sm:mb-1">
                Standard
              </p>
              <p className="text-3xl font-semibold mb-6">
                ₹1,500.00{" "}
                <span className="text-gray-500 text-base font-normal">
                  {" "}
                  /month
                </span>
              </p>

              <div className="block md:flex lg:flex">
                <ul className="mb-2 mr-24 mr0">
                  <li className="flex text-lg mb-8 items-center">
                    <div className="bg-[#FFF8EC] w-7 h-7 flex justify-center items-center rounded-full">
                      <img
                        src={standerdicon}
                        alt="standerdicon"
                        className="w-4"
                      />
                    </div>
                    <p className=" font-10 text-black ml-3 text-sm font-normal">
                      In pellentesque eu, elementum
                    </p>
                  </li>

                  <li className="flex text-lg mb-8 items-center">
                    <div className="bg-[#FFF8EC] w-7 h-7 flex justify-center items-center rounded-full">
                      <img
                        src={standerdicon}
                        alt="standerdicon"
                        className="w-4"
                      />
                    </div>
                    <p className="text-black font-10 ml-3 text-sm font-normal">
                      Mauris accumsan pulvinar
                    </p>
                  </li>
                  <li className="flex text-lg mb-8 items-center">
                    <div className="bg-[#FFF8EC] w-7 h-7 flex justify-center items-center rounded-full">
                      <img
                        src={standerdicon}
                        alt="standerdicon"
                        className="w-4"
                      />
                    </div>
                    <p className="text-black ml-3 font-10 text-sm font-normal">
                      Sagittis sit eros mattis morbi
                    </p>
                  </li>
                  <li className="flex text-lg mb-1.5  mb0 items-center">
                    <div className="bg-[#FFF8EC] w-7 h-7 flex justify-center items-center rounded-full">
                      <img
                        src={standerdicon}
                        alt="standerdicon"
                        className="w-4"
                      />
                    </div>
                    <p className="text-black ml-3 font-10 text-sm font-normal">
                      In sem commodo maecenas
                    </p>
                  </li>
                </ul>

                <ul className="mb-2">
                  <li className="flex text-lg mb-8 items-center">
                    <div className="bg-[#FFF8EC] w-7 h-7 font-10 flex justify-center items-center rounded-full">
                      <img
                        src={standerdicon}
                        alt="standerdicon"
                        className="w-4"
                      />
                    </div>
                    <p className="text-black ml-3 font-10 text-sm font-normal">
                      A viverra tincidunt
                    </p>
                  </li>

                  <li className="flex text-lg mb-8 items-center">
                    <div className="bg-[#FFF8EC] w-7 h-7 flex justify-center items-center rounded-full">
                      <img
                        src={standerdicon}
                        alt="standerdicon"
                        className="w-4"
                      />
                    </div>
                    <p className="text-black ml-3 font-10 text-sm font-normal">
                      Dictum sit accumsan
                    </p>
                  </li>
                  <li className="flex text-lg mb-8 items-center">
                    <div className="bg-[#FFF8EC] w-7 h-7 flex justify-center items-center rounded-full">
                      <img
                        src={standerdicon}
                        alt="standerdicon"
                        className="w-4"
                      />
                    </div>
                    <p className="text-black ml-3 font-10 text-sm font-normal">
                      Egestas at sit dictum nulla
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <div className=" rounded-xl box-shadow-1 py-5 px-5 md:py-5 lg:py-6 mb-8">
              <div className="flex justify-between mb-5">
                <p className="text-lg">Sub Total</p>
                <p className="text-xl">₹1,500.00</p>
              </div>

              <div className="flex justify-between mb-7">
                <p className="text-lg">Tax</p>
                <p className="text-xl">₹120.00</p>
              </div>

              <div className="flex justify-between">
                <p className="text-lg">Total ( Including Tax )</p>
                <p className="text-xl font-semibold">₹1,620.00</p>
              </div>
            </div>
          </div>

          <div className="flex-initial w-full md:w-full lg:w-6/12 bac-1">
            <div className="box-shadow-1 rounded-xl py-5 px-4 lg:px-10 md:py-5 lg:py-7 mb-8">
              <p className="text-lg font-semibold mb-4">
                Select your payment method:
              </p>

              <div className="flex items-center mb-5">
                <div className="flex items-center mr-4 mb-0">
                  <input
                    id="default-radio-2"
                    type="radio"
                    name="radio"
                    className="hidden"
                    defaultChecked
                    onChange={() => setChangePaymentMethod(true)}
                  />
                  <label
                    htmlFor="default-radio-2"
                    className="flex items-center cursor-pointer mr-5  text-sm font-semibold lable-color"
                  >
                    <span className="w-4 h-4 inline-block mr-1 rounded-full border border-grey"></span>
                    Credit/Debit Card
                  </label>
                </div>
                <div className="flex items-center mr-4 mb-0">
                  <input
                    id="default-radio-1"
                    type="radio"
                    name="radio"
                    className="hidden"
                    onChange={() => setChangePaymentMethod(false)}
                  />
                  <label
                    htmlFor="default-radio-1"
                    className="flex items-center cursor-pointer mr-5 ml-2 text-sm font-semibold lable-color"
                  >
                    <span className="w-4 h-4 inline-block mr-1 rounded-full border border-grey"></span>
                    Net Banking
                  </label>
                </div>
              </div>
              <form className="theme-form ng-untouched ng-pristine ng-valid">
                {changePaymentMethod==true?
                <div className="creditCard">
                  <div className="flex mb-5">
                    <div className="flex-initial w-full md:11/12 lg:w-7/12 bac-1 mr-5">
                      <h5 className="text-[9px] md:text-base lg:text-lg font-semibold mb-2">
                        Current Credit Card
                      </h5>
                      <img src={creditimg} alt="creditimg" />
                    </div>

                    <div className="flex-initial w-full md:11/12 lg:w-7/12 bac-1 ">
                      <h5 className="make-add text-[9px] md:text-base lg:text-lg font-semibold mb-2">
                        Add new Credit/Debit Card
                      </h5>
                      <div className="addplus box-shadow-3 h-[4.8rem] md:h-[9.5rem] lg:h-[7.3rem] rounded-lg flex justify-center items-center">
                        <img src={pluseicon} alt="pluse" />
                      </div>
                    </div>
                  </div>

                  <label
                    htmlFor="email"
                    className="mb-4 lable-color text-sm font-semibold"
                  >
                    {" "}
                    Card Number
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="email"
                      placeholder="Enter Card Number"
                      required=""
                      className="box-shadow-3 h-12 px-4 rounded-lg border border-[#95A5A6]  mt-2 mb-6 text-sm placeholder-gray-500 w-full"
                    />
                    <div className="absolute top-6 right-3">
                      <img src={visaicon} alt="visaicon" />
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex-initial w-full md:11/12 lg:w-7/12 bac-1 mr-2">
                      <label
                        htmlFor="email"
                        className="mb-4 lable-color text-sm font-semibold"
                      >
                        {" "}
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        placeholder="DD/MM"
                        required=""
                        className="box-shadow-3 h-12 px-4 rounded-lg border border-[#95A5A6]  mt-2 mb-6 text-sm placeholder-gray-500 w-full"
                      />
                    </div>
                    <div className="flex-initial w-full md:11/12 lg:w-7/12 bac-1 ml-2">
                      <label
                        htmlFor="email"
                        className="mb-4 lable-color text-sm font-semibold"
                      >
                        CVC/CVV
                      </label>
                      <input
                        type="password"
                        id="password"
                        placeholder="● ● ● "
                        required=""
                        className="box-shadow-3 h-12 px-4 rounded-lg border border-[#95A5A6] w-full placeholder:text-[#001540] mt-2 mb-2 text-sm placeholder-gray-500 "
                      />
                    </div>
                  </div>

                  <label
                    htmlFor="email"
                    className="mb-4 lable-color text-sm font-semibold"
                  >
                    Card Holdername
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="email"
                      placeholder="Enter   Card Holdername"
                      required=""
                      className="box-shadow-3 h-12 px-4 rounded-lg border border-[#95A5A6]  mt-2 mb-6 text-sm placeholder-gray-500 w-full"
                    />
                  </div>
                  <div className="block sm:flex items-center justify-end mb-6 mt-1">
                    <a
                      href="#"
                      className="bac-3 w-full sm:w-48 flex justify-center h-12 items-center text-base font-bold rounded-lg mr-7 uppercase text-white mb-5 sm:mb-0"
                      onClick={() => {
                        setModalItem({
                          img: successModalImg,
                          message:
                            "Are you sure? Do you want to cancel Payment process ?",
                          type: true,
                          status: "Cancel!",
                        });
                        toggleModal();
                      }}
                    >
                      Cancel
                    </a>

                    <a
                      href="#"
                      className="bac-6 w-full sm:w-48 flex justify-center h-12 items-center text-base font-bold text-white rounded-lg mb-10 sm:mb-0 uppercase"
                      onClick={() => {
                        setModalItem({
                          img: successModalImg2,
                          message: "Your payment is successfully done",
                          status: "Payment Success",
                          type: false,
                        });
                        toggleModal();
                      }}
                    >
                      MAKE Payment
                    </a>
                  </div>
                </div>
                :
                <div className="netBanking">
                  <div className="flex mb-5">
                    <div className="flex-initial w-full md:11/12 lg:w-7/12 bac-1 mr-5">
                      <h5 className="text-sm sm:text-lg  font-semibold mb-2">
                        Bank Account
                      </h5>
                      <img src={cardimg} alt="cardimg" />
                    </div>

                    <div className="flex-initial w-full md:11/12 lg:w-7/12 bac-1 ">
                      <h5 className="make-add text-xs sm:text-lg font-semibold mb-2">
                        Add new Bank Account
                      </h5>
                      <div className="border h-[4.8rem] md:h-[10.5rem] lg:h-[7.3rem] rounded-lg flex justify-center items-center">
                        <img src={pluseicon} alt="pluse" />
                      </div>
                    </div>
                  </div>

                  <label
                    htmlFor="email"
                    className="mb-4 lable-color text-sm font-semibold"
                  >
                    {" "}
                    Account Number
                  </label>
                  <div className="relative">
                
                    <select className="box-shadow-3 h-12 px-4 rounded-lg border border-[#95A5A6] mt-2 mb-2 text-sm placeholder-gray-300 w-full">
                      <option selected=""> 58 9876 9876 6543 6543</option>
                      <option value="1">58 9876 9876 6543 6543</option>
                      <option value="2">58 9876 9876 6543 6543</option>
                      <option value="3">58 9876 9876 6543 6543</option>
                    </select>
        
                 
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-4 lable-color text-sm font-semibold"
                    >
                      {" "}
                      IFSC
                    </label>
                    <input
                      type="text"
                      id="email"
                      placeholder="Enter IFSC"
                      required=""
                      className="box-shadow-3 h-12 px-4 rounded-lg border border-[#95A5A6] mt-2 mb-6 text-sm placeholder-gray-500 w-full"
                    />
                  </div>

                  <label
                    htmlFor="email"
                    className="mb-4 lable-color text-sm font-semibold"
                  >
                    Account Holder’s Name{" "}
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="email"
                      placeholder="Enter  Account Holdername"
                      required=""
                      className="box-shadow-3 h-12 px-4 rounded-lg border border-[#95A5A6] mt-2 mb-6 text-sm placeholder-gray-500 w-full"
                    />
                  </div>
                  <div className="block sm:flex items-center justify-end mb-6 mt-1">
                    <a
                      href="#"
                      className="bac-3 w-full sm:w-48 flex justify-center h-12 items-center text-base font-bold rounded-lg mr-7 uppercase text-white mb-5 sm:mb-0"
                      onClick={() => {
                        setModalItem({
                          img: netbankcencle,
                          message:
                            "Are you sure? Do you want to cancel Payment process ?",
                          type: true,
                          status: "Cancel!",
                        });
                        toggleModal();
                      }}
                    >
                      Cancel
                    </a>
                    <a
                      href="#"
                      className="bac-6 w-full sm:w-48 flex justify-center h-12 items-center text-base font-bold text-white rounded-lg mb-10 sm:mb-0 uppercase"
                      onClick={() => {
                        setModalItem({
                          img: netbanksucces,
                          message: "Your payment is successfully done",
                          status: "Payment Success",
                          type: false,
                        });
                        toggleModal();
                      }}
                    >
                      MAKE Payment
                    </a>
                  </div>
                </div>
                }
              </form>
            </div>
          </div>
        </div>
      </section>

      <PaymentModal
        message={modaltem.message}
        type={modaltem.type}
        img={modaltem.img}
        status={modaltem.status}
        onSuccess={toggleModal}
        onFailure={toggleModal}
      />
    </>
  );
}
export default MakePayment;
