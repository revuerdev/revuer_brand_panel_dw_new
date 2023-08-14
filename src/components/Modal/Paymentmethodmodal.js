import { useState } from "react";
import { toggleModal2, toggleModal } from "../../services/edit-modal";
import creditimg from "../../assets/images/Credit Card.svg";
import pluseicon from "../../assets/images/+.svg";
import visaicon from "../../assets/images/visa.svg";
import cardimg from "../../assets/images/Group 24032.png";
import successModalImg from "../../assets/images/7188144 1.svg";
import successModalImg2 from "../../assets/images/753318 1.svg";
import netbankcencle from "../../assets/images/Bank-cancle.svg";
import netbanksucces from "../../assets/images/bank-sucess.svg";
export const PaymentMethodModal = () => {
  const [modaltem, setModalItem] = useState({});
  const [changePaymentMethod, setChangePaymentMethod] = useState(true);
  return (
    <>
      <div
        className="fixed z-10 overflow-y-auto top-0 w-full left-0 hidden"
        id="modal"
      >
        <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity">
            <div className="absolute inset-0 bg-gray-900 opacity-75" />
          </div>
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen">
            &#8203;
          </span>
          <div
            className="inline-block align-center bg-white rounded-2xl text-left overflow-hidden shadow-xl transform transition-all sm:mt-5 sm:mb-2 sm:align-middle max-w-xl md:max-w-2xl lg:max-w-3xl sm:w-full w-[90%] "
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
              <div className="box-shadow-1 rounded-xl py-5 px-4 lg:px-10 md:py-5 lg:py-7">
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
                    for="default-radio-2"
                    className="flex items-center cursor-pointer mr-5 text-[10px] sm:text-sm font-semibold lable-color"
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
                    for="default-radio-1"
                    className="flex items-center cursor-pointer mr-5 ml-2 text-[10px] sm:text-sm font-semibold lable-color"
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
      </div>
    </>
  );
};
export default PaymentMethodModal;
