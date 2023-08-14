import profilestatus from "../../assets/images/profile-step-2-i.svg";
import standerdicon from "../../assets/images/profile-done.svg";
import selectimg from "../../assets/images/brand-icon.svg";
import pluseicon from "../../assets/images/paste (1) 1 (Traced).svg";
import instaicon from "../../assets/images/instagram.step-2.svg";
import facebookicon from "../../assets/images/facebook.step-2.svg";
import linicon from "../../assets/images/lindin.step-2.svg";
import youicon from "../../assets/images/youtube.step-2.svg";
import userform from "../../assets/images/user-form.svg";
import uploadicon from "../../assets/images/upload.svg";
import messageicon from "../../assets/images/messge-box.svg";
import phoneicon from "../../assets/images/phone-form-icon.svg";
import selecticon from "../../assets/images/down-select.svg";
import { useEffect, useState, useRef } from "react";
import { customSelect } from "../../utils/custom-select"
import { NavLink as Link, useNavigate } from "react-router-dom";
import { getCategoryList } from "../../context/actions/category"
import { getBrandDetails } from "../../context/actions/brand"
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from "react-hook-form"
import { brandDetailsUpdate } from "../../context/actions/brand";
import { toast } from "react-toastify";

function SetupBrandDetails() {


    const dispatch = useDispatch();
    let navigate = useNavigate();

    var brandlogin_unique_token = localStorage.getItem("brandlogin_unique_token");
    const categoryListData = useSelector((state) => state.categoryList);

    const brandDataDetails = useSelector((state) => state.brandDetails);

    const { register, handleSubmit, reset } = useForm()
    const submitButton = useRef();
    const toastId = useRef(null);

    const [imageUpload, setImageUpload] = useState(false);
    const [afterUploadicon, setAfterUploadicon] = useState({ filename: "", imageSrc: "", imageObj: {} });

    const [brandValidateError, setBrandValidateError] = useState("");
    const [productValidateError, setProductValidateError] = useState("");
    const [websiteurlValidateError, setWebsiteurlValidateError] = useState("");
    const [categoryValidateError, setCategoryValidateError] = useState("");
    const [instaValidateError, setInstaValidateError] = useState("");
    const [linkedValidateError, setLinkedValidateError] = useState("");
    const [facebookValidateError, setFacebookValidateError] = useState("");
    const [youtubeValidateError, setYoutubeValidateError] = useState("");
    const [firstnameValidateError, setFirstnameValidateError] = useState("");
    const [lastnameValidateError, setLastnameValidateError] = useState("");
    const [brandImageValidateError, setBrandImageBrandValidateError] = useState("");
    const [emailValidateError, setEmailValidateError] = useState("");
    const [phoneValidateError, setPhoneValidateError] = useState("");

    const webUrlRegEx = RegExp(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/);
    const instagramUrlRegEx = RegExp(/(?:(?:http|https):\/\/)?(?:www.)?(?:instagram.com|instagr.am|instagr.com)\/(\w+)/);
    const facebookUrlRegEx = RegExp(/^(https?:\/\/)?((w{3}\.)?)facebook.com\/.*/);
    const linkedINUrlRegEx = RegExp(/(ftp|http|https):\/\/?(?:www\.)?linkedin.com(\w+:{0,1}\w*@)?(\S+)(:([0-9])+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/);
    // const youTubeUrlRegEx = RegExp(/^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/);

    const youTubeUrlRegEx = RegExp(/^(https?\:\/\/)?(www\.youtube\.com|youtu\.be)\/.+$/);


    const phoneNumberRegEx = RegExp(/^\d{10}$/);

    const brandNameValid = (event) => {
        if (event.target.value.trim() == "") {
            setBrandValidateError("Please Enter Brand Name")
            event.target.classList.add("error")
        } else if (event.target.value.length < 2) {
            setBrandValidateError("Brand Name must consist of at least 2 characters")
            event.target.classList.add("error")
        } else {
            setBrandValidateError("")
            event.target.classList.remove("error")
        }
    }

    const productNameValid = (event) => {
        if (event.target.value.trim() == "") {
            setProductValidateError("Please Enter Product Name")
            event.target.classList.add("error")
        } else if (event.target.value.length < 2) {
            setProductValidateError("Product Name must consist of at least 2 characters")
            event.target.classList.add("error")
        } else {
            setProductValidateError("")
            event.target.classList.remove("error")
        }
    }

    const websiteUrlValid = (event) => {
        if (event.target.value.trim() == "") {
            setWebsiteurlValidateError("Please Enter Web Site URL")
            event.target.classList.add("error")
        } else if (!webUrlRegEx.test(event.target.value.trim())) {
            setWebsiteurlValidateError("Please enter valid URL")
            event.target.classList.add("error")
        } else {
            setWebsiteurlValidateError("")
            event.target.classList.remove("error")
        }
    }

    const instaLinkValid = (event) => {
        if (event.target.value.trim() == "") {
            setInstaValidateError("Please Enter instagram Link")
            event.target.classList.add("error")
        } else if (!instagramUrlRegEx.test(event.target.value.trim())) {
            setInstaValidateError("Please enter valid instagram link")
            event.target.classList.add("error")
        } else {
            setInstaValidateError("")
            event.target.classList.remove("error")
        }
    }

    const linkedInValid = (event) => {
        if (event.target.value.trim() == "") {
            setLinkedValidateError("Please Enter linkedin Link")
            event.target.classList.add("error")
        } else if (!linkedINUrlRegEx.test(event.target.value.trim())) {
            setLinkedValidateError("Please enter valid linkedin link")
            event.target.classList.add("error")
        } else {
            setLinkedValidateError("")
            event.target.classList.remove("error")
        }
    }

    const facebookValid = (event) => {
        if (event.target.value.trim() == "") {
            setFacebookValidateError("Please Enter facebook Link")
            event.target.classList.add("error")
        } else if (!facebookUrlRegEx.test(event.target.value.trim())) {
            setFacebookValidateError("Please enter valid facebook link")
            event.target.classList.add("error")
        } else {
            setFacebookValidateError("")
            event.target.classList.remove("error")
        }
    }

    const youTubeValid = (event) => {
        if (event.target.value.trim() == "") {
            setYoutubeValidateError("Please Enter youtube Link")
            event.target.classList.add("error")
        } else if (!youTubeUrlRegEx.test(event.target.value.trim())) {
            setYoutubeValidateError("Please enter valid youtube link")
            event.target.classList.add("error")
        } else {
            setYoutubeValidateError("")
            event.target.classList.remove("error")
        }
    }

    const firstNameValid = (event) => {
        if (event.target.value.trim() == "") {
            setFirstnameValidateError("Please Enter first name")
            event.target.classList.add("error")
        } else if (event.target.value.length < 2) {
            setFirstnameValidateError("First Name must consist of at least 2 characters")
            event.target.classList.add("error")
        } else {
            setFirstnameValidateError("")
            event.target.classList.remove("error")
        }
    }

    const lastNameValid = (event) => {
        if (event.target.value.trim() == "") {
            setLastnameValidateError("Please Enter last name")
            event.target.classList.add("error")
        } else if (event.target.value.length < 2) {
            setLastnameValidateError("Last Name must consist of at least 2 characters")
            event.target.classList.add("error")
        } else {
            setLastnameValidateError("")
            event.target.classList.remove("error")
        }
    }

    const phoneNumberValid = (event) => {
        if (event.target.value.trim() == "") {
            setPhoneValidateError("Please Enter phone number")
            event.target.classList.add("error")
        } else if (!phoneNumberRegEx.test(event.target.value.trim())) {
            setPhoneValidateError("Please enter valid phone number")
            event.target.classList.add("error")
        } else {
            setPhoneValidateError("")
            event.target.classList.remove("error")
        }
    }

    const onSubmit = (data, event) => {
        const category = data.category;
        const facebook_url = data.facebook_url;
        const first_name = data.first_name;
        const insta_link = data.insta_link;
        const last_name = data.last_name;
        const linkedIn = data.linkedIn;
        const name = data.name;
        const phone_number = data.phone_number;
        const product_name = data.product_name;
        const website_url = data.website_url;
        const youtube_url = data.youtube_url;

        const categoryId = event.target.querySelector("#category");
        const facebookurlId = event.target.querySelector("#facebook_url");
        const firstnameId = event.target.querySelector("#first_name");
        const instalinkId = event.target.querySelector("#insta_link");
        const lastnameId = event.target.querySelector("#last_name");
        const linkedInId = event.target.querySelector("#linkedIn");
        const nameId = event.target.querySelector("#name");
        const phonenumberId = event.target.querySelector("#phone_number");
        const productnameId = event.target.querySelector("#product_name");
        const websiteurlId = event.target.querySelector("#website_url");
        const youtubeurlId = event.target.querySelector("#youtube_url");
        const brand_image = document.getElementById("brand_image");



        if (name.trim() == "") {
            setBrandValidateError("Please Enter Brand Name")
            nameId.classList.add("error")
        } else if (name.length < 2) {
            setBrandValidateError("Brand Name must consist of at least 2 characters")
            nameId.classList.add("error")
        } else if (website_url.trim() == "") {
            setBrandValidateError("")
            nameId.classList.remove("error")
            setWebsiteurlValidateError("Please Enter Web Site URL")
            websiteurlId.classList.add("error")
        } else if (!webUrlRegEx.test(website_url.trim())) {
            setWebsiteurlValidateError("Please enter valid URL")
            websiteurlId.classList.add("error")
        } else if (product_name.trim() == "") {
            setWebsiteurlValidateError("")
            websiteurlId.classList.remove("error")
            setProductValidateError("Please Enter Product Name")
            productnameId.classList.add("error")
        } else if (product_name.length < 2) {
            setProductValidateError("Product Name must consist of at least 2 characters")
            productnameId.classList.add("error")
        } else if (category == "") {
            setProductValidateError("")
            productnameId.classList.remove("error")
            setCategoryValidateError("Please select category")
            categoryId.classList.add("error")
        } else if (insta_link.trim() == "") {
            setCategoryValidateError("")
            categoryId.classList.remove("error")
            setInstaValidateError("Please Enter instagram Link")
            instalinkId.classList.add("error")
        } else if (!instagramUrlRegEx.test(insta_link.trim())) {
            setInstaValidateError("Please enter valid instagram link")
            instalinkId.classList.add("error")
        } else if (facebook_url.trim() == "") {
            setInstaValidateError("")
            instalinkId.classList.remove("error")
            setFacebookValidateError("Please Enter facebook Link")
            facebookurlId.classList.add("error")
        } else if (!facebookUrlRegEx.test(facebook_url.trim())) {
            setFacebookValidateError("Please enter valid facebook link")
            facebookurlId.classList.add("error")
        } else if (linkedIn.trim() == "") {
            setFacebookValidateError("")
            facebookurlId.classList.remove("error")
            setLinkedValidateError("Please Enter linkedin Link")
            linkedInId.classList.add("error")
        } else if (!linkedINUrlRegEx.test(linkedIn.trim())) {
            setLinkedValidateError("Please enter valid linkedin link")
            linkedInId.classList.add("error")
        } else if (youtube_url.trim() == "") {
            setLinkedValidateError("")
            linkedInId.classList.remove("error")
            setYoutubeValidateError("Please Enter youtube Link")
            youtubeurlId.classList.add("error")
        } else if (!youTubeUrlRegEx.test(youtube_url.trim())) {
            setYoutubeValidateError("Please enter valid youtube link")
            youtubeurlId.classList.add("error")
        }
        // } else if (first_name.trim() == "") {
        //     setYoutubeValidateError("")
        //     youtubeurlId.classList.remove("error")
        //     setFirstnameValidateError("Please Enter first name")
        //     firstnameId.classList.add("error")
        // } else if (first_name.length < 2) {
        //     setFirstnameValidateError("First Name must consist of at least 2 characters")
        //     firstnameId.classList.add("error")
        // } else if (last_name.trim() == "") {
        //     setFirstnameValidateError("")
        //     firstnameId.classList.remove("error")
        //     setLastnameValidateError("Please Enter last name")
        //     lastnameId.classList.add("error")
        // } else if (last_name.length < 2) {
        //     setLastnameValidateError("Last Name must consist of at least 2 characters")
        //     lastnameId.classList.add("error")
        // } 
        else if (phone_number.trim() == "") {
            setYoutubeValidateError("")
            youtubeurlId.classList.remove("error")
            setPhoneValidateError("Please Enter phone number")
            phonenumberId.classList.add("error")
        } else if (!phoneNumberRegEx.test(phone_number.trim())) {
            setPhoneValidateError("Please enter valid phone number")
            phonenumberId.classList.add("error")
        } else if (afterUploadicon.imageSrc == "") {
            setPhoneValidateError("")
            phonenumberId.classList.remove("error")
            setBrandImageBrandValidateError("Please select brand image");
            brand_image?.classList.add("error");
        } else {
            setBrandImageBrandValidateError("");
            brand_image?.classList.remove("error");
            setBrandValidateError("")
            nameId.classList.remove("error")
            setWebsiteurlValidateError("")
            websiteurlId.classList.remove("error")
            setProductValidateError("")
            productnameId.classList.remove("error")
            setCategoryValidateError("")
            categoryId.classList.remove("error")
            setInstaValidateError("")
            instalinkId.classList.remove("error")
            setFacebookValidateError("")
            facebookurlId.classList.remove("error")
            setLinkedValidateError("")
            linkedInId.classList.remove("error")
            setYoutubeValidateError("")
            youtubeurlId.classList.remove("error")
            setPhoneValidateError("")
            phonenumberId.classList.remove("error")
            data.brand_image = afterUploadicon.imageObj;
            data.image_name = afterUploadicon.filename;
            data.brandlogin_unique_token = brandlogin_unique_token;
            dispatch(brandDetailsUpdate(data, navigate, submitButton, toastId));
            reset()
        }
    }

    const imageUploader = (e) => {
        if (Math.floor(e.target.files[0].size / 1024) > 50) {
            toast.error("Image size is to large only 50KB is allowed");
            return;
        } else {
            const myImageArray = e.target.files[0].name.split(".");
            const imageExtension = myImageArray[1].toLowerCase()

            if (imageExtension != 'jpg' && imageExtension != 'jpeg' && imageExtension != 'png') {
                toast.error("Invalid file type (only .jpeg,.jpg,.png allowed)");
                return;
            } else {
                setImageUpload(true);
                const blobURL = URL.createObjectURL(e.target.files[0]);
                const file = e.target.files[0],
                    reader = new FileReader();
                reader.onloadend = function () {
                    setAfterUploadicon({ filename: file.name, imageSrc: blobURL, imageObj: reader.result.replace(/^data:.+;base64,/, "") });
                };
                reader.readAsDataURL(file);
                if (blobURL.complete) {
                    URL.revokeObjectURL(blobURL);
                }
            }
        }
    };
    const imageRemover = () => {
        setImageUpload(false);
        setAfterUploadicon({ imageSrc: "", imageObj: {} });
    };

    useEffect(() => {
        document.getElementsByClassName("select-selected").length == 0 &&
            customSelect();
        dispatch(getCategoryList())
        dispatch(getBrandDetails({ brandlogin_unique_token: brandlogin_unique_token }))
    }, []);

    return (
        <>
            <section className="w-full md:w-10/12 lg:w-5/6 sub-width-1 mx-auto">


                <div className="block sm:flex justify-center items-center mt-9 mb-10 px-2">
                    {/* <img src={profilestatus} alt="profilestatus" className="w-16 sm:block hidden sm:mr-2 sm:m-none" />
                    <img src={profilestatus} alt="profilestatus" className="w-16 block sm:hidden sm:mr-2 sm:m-none mx-auto" /> */}
                    <div className="w-11 h-11 bac-6 rounded-full flex justify-center items-center text-white mr-2">{brandDataDetails?.first_name?.split("")[0].toUpperCase()}</div>
                    <div>
                        <p className="text-xl font-normal text-center sm:text-left pt-5 sm:pt-0"><span className="font-bold pr-2">Welcome,</span>{brandDataDetails.first_name} {brandDataDetails.last_name}</p>
                        <p className="text-center text-sm sm:text-left">Ready to access our pool of trained RevueRS? Let’s do it in 3 quick steps</p>
                    </div>
                </div>

                <div className="relative w-5/6 md:5/6 lg:w-[65%] mx-auto">
                    <div className="flex">
                        <div className="border-b-2 border-dashed w-[50%] mr-2 border-[#001540] sm:mb-14 mb-24">
                        </div>
                        <div className="border-b-2 border-dashed w-[50%] border-[#95a5a6]  sm:mb-14 mb-24">
                        </div>

                    </div>

                    <div className="absolute top-[-22px]">
                        <div className="w-10 h-10 bac-6 rounded-full flex justify-center items-center">
                            <img src={standerdicon} alt="standerdicon" />
                        </div>
                    </div>

                    <div className="absolute top-[-22px] left-[43%] md:left-[43%] lg:left-[47%]">
                        <div className="w-10 h-10 bac-7 rounded-full text-white flex justify-center items-center">
                            2
                        </div>
                    </div>

                    <div className="absolute top-[-22px] right-0">
                        <div className="w-10 h-10 bac-1 rounded-full text-[#95A5A6] border-2 border-[#95A5A6] flex justify-center items-center">
                            3
                        </div>
                    </div>

                    <div className="absolute top-8 left-[-5%] lg:left-[-35px] font-semibold text-[9px] sm:text-sm">
                        Create An Account
                    </div>

                    <div className="absolute top-8 left-[36%] md:left-[37%] lg:left-[42%] pr-3 font-semibold text-black text-[9px] sm:text-sm">
                        Setup Your Profile
                    </div>

                    <div className="absolute top-8 right-[-25px] md:right-[-45px] lg:right-[-70px] font-semibold text-[8px] sm:text-sm text-[#95A5A6]">
                        Create your first Campaign
                    </div>
                </div>
                <form onSubmit={handleSubmit((data, event) => onSubmit(data, event))} className="theme-form ng-untouched ng-pristine ng-valid" method="post">
                    <div>
                        <div className="block md:block lg:flex  w-full float-right px-4 md:px-0 lg:px-0 mt-5">
                            <div className="flex-initial w-full md:11/12 lg:w-6/12 bac-1 mr-5 mb-10 sm:mb-0">
                                <h4 className="text-xl font-semibold mb-3 sm:mb-5">Brand Details<span className="text-[#E74C3C]">*</span></h4>
                                <div className="box-shadow-1 px-8 pb-4 py-10 rounded-2xl mb-10">
                                    <div className="sm:block lg:flex block mb-1">
                                        <div className="flex-initial w-full md:11/12 lg:w-7/12 bac-1 py-5 md:py-5 lg:py-0 mr-5 mb-0 md:mb-0 lg:mb-0">
                                            <label className="text-black text-base font-semibold">Brand Name</label>
                                            <div className="block relative mb-5">
                                                <input type="text" name="name" {...register("name")} onKeyUp={(event) => brandNameValid(event)} id="name" placeholder="Shoppers" required="" className="box-shadow-3 h-12 px-2 rounded-lg border border-[#95A5A6] placeholder:text-[#001540] bg-white w-full mt-2 mb-1 text-sm focus:outline-none" />
                                                <div className="absolute top-6 right-5">
                                                    <img src={selectimg} alt=" selectimg" />
                                                </div>
                                                {brandValidateError && <label className="error">{brandValidateError}</label>}
                                            </div>

                                            <label className="text-black text-base font-semibold">Add Product</label>
                                            <div className="block relative mb-5">
                                                <input
                                                    type="text"
                                                    id="product_name"
                                                    name="product_name"
                                                    placeholder="Product Name"
                                                    {...register("product_name")}
                                                    onKeyUp={(event) => productNameValid(event)}
                                                    required=""
                                                    className="box-shadow-3 h-12 px-2 rounded-lg border border-[#95A5A6] placeholder:text-[#001540] bg-white w-full mt-2 mb-1 text-sm focus:outline-none"
                                                />
                                                <div className="absolute top-6 right-5">
                                                    <img src={selectimg} alt=" selectimg" />
                                                </div>
                                                {productValidateError && <label className="error">{productValidateError}</label>}
                                            </div>
                                        </div>

                                        <div className="flex-initial w-full md:11/12 lg:w-7/12 bac-1 py-2 md:py-5 lg:py-0  mb-0 md:mb-0 lg:mb-0">
                                            <label className="text-black text-sm font-semibold">Website URL</label>
                                            <div className="block relative mb-5">
                                                <input
                                                    type="text"
                                                    id="website_url"
                                                    name="website_url"
                                                    {...register("website_url")}
                                                    placeholder="https://yourbrandwebsite.com/"
                                                    onKeyUp={(event) => websiteUrlValid(event)}
                                                    required=""
                                                    className="box-shadow-3 h-12 px-2 placeholder:text-[#001540] rounded-lg border border-[#95A5A6] bg-white w-full mt-2 mb-1 text-sm pr-11 focus:outline-none"
                                                />
                                                <div className="absolute top-6 right-5">
                                                    <img src={pluseicon} alt="pluseicon" />
                                                </div>
                                                {websiteurlValidateError && <label className="error">{websiteurlValidateError}</label>}
                                            </div>

                                            <label className="text-black text-base font-semibold">Category</label>

                                            <div className="block relative mb-5">
                                                <div className="block relative">
                                                    <select id="category"
                                                        name="category"
                                                        {...register("category")} className="mt-2 form-select appearance-none block w-full px-3 h-12 text-sm font-normal lable-color bg-white bg-clip-padding bg-no-repeat rounded-lg border border-[#95A5A6] transition ease-in-out m-2 focus:text-gray-700 focus:bg-white focus:border-black focus:outline-none" aria-label="Default select example focus:outline-none">
                                                        <option value="">Select Category</option>
                                                        {categoryListData.map((item, index) => {
                                                            return (
                                                                <option key={item._id} value={item._id}>{item.name}</option>
                                                            )
                                                        })}
                                                    </select>
                                                    <img
                                                        src={selecticon}
                                                        alt="selecticon"
                                                        className="w-3 h-2.5 absolute top-[20px] right-2.5  block sm:mr-2 sm:m-none mx-auto"
                                                    />
                                                    {categoryValidateError && <label className="error">{categoryValidateError}</label>}
                                                </div>

                                            </div>

                                        </div>
                                    </div>

                                    <h5 className="text-xl font-semibold mb-0 lg:mb-3">Social Handles</h5>
                                    <div className="block sm:block lg:flex">
                                        <div className="flex-initial w-full md:11/12 lg:w-7/12 bac-1 py-2 md:py-5 lg:py-0 mr-5 mb-0 md:mb-0 lg:mb-0">
                                            <label className="text-black text-sm font-semibold">Instagram</label>
                                            <div className="block relative mb-5">
                                                <input type="text" id="insta_link" {...register("insta_link")} name="insta_link" placeholder="instagram URL" onKeyUp={(event) => instaLinkValid(event)} required="" className="box-shadow-3 h-12 pl-14 px-2 rounded-lg border border-[#95A5A6] placeholder:text-[#001540] bg-white w-full mt-2 mb-1 text-sm focus:outline-none" />
                                                <div className="absolute top-[22px] left-5">
                                                    <img src={instaicon} alt="instaicon" className="w-5" />
                                                </div>
                                                {instaValidateError && <label className="error">{instaValidateError}</label>}
                                            </div>

                                            <label className="text-black text-sm font-semibold">Linkedin</label>
                                            <div className="block relative mb-5">
                                                <input type="text" id="linkedIn" name="linkedIn" {...register("linkedIn")} placeholder="linkedin URL" onKeyUp={(event) => linkedInValid(event)} required="" className="box-shadow-3 h-12 pl-14 px-2 rounded-lg border border-[#95A5A6] placeholder:text-[#001540] bg-white w-full mt-2 mb-1 text-sm focus:outline-none" />
                                                <div className="absolute top-[19px] left-5">
                                                    <img src={linicon} alt="linicon" className="w-5" />
                                                </div>
                                                {linkedValidateError && <label className="error">{linkedValidateError}</label>}
                                            </div>
                                        </div>

                                        <div className="flex-initial w-full md:11/12 lg:w-7/12 bac-1 py-0 md:py-5 lg:py-0  mb-0 md:mb-0 lg:mb-0">
                                            <label className="text-black text-sm font-semibold">Facebook</label>
                                            <div className="block relative mb-5">
                                                <input type="text" id="facebook_url" name="facebook_url" {...register("facebook_url")} placeholder="Facebook URL" onKeyUp={(event) => facebookValid(event)} required="" className="box-shadow-3 h-12 pl-14 px-2 rounded-lg border border-[#95A5A6] placeholder:text-[#001540] bg-white w-full mt-2 mb-1 text-sm focus:outline-none" />
                                                <div className="absolute top-[23px] left-5">
                                                    <img src={facebookicon} alt="facebookicon" className="w-3" />
                                                </div>
                                                {facebookValidateError && <label className="error">{facebookValidateError}</label>}
                                            </div>

                                            <label className="text-black text-sm font-semibold">Youtube</label>
                                            <div className="block relative mb-5">
                                                <input type="text" id="youtube_url" name="youtube_url" {...register("youtube_url")} placeholder="Youtube URL" required="" onKeyUp={(event) => youTubeValid(event)} className="box-shadow-3 h-12 pl-14 px-2 rounded-lg border border-[#95A5A6] placeholder:text-[#001540] bg-white w-full mt-2 mb-1 text-sm focus:outline-none" />
                                                <div className="absolute top-[24px] left-5">
                                                    <img src={youicon} alt="youicon" className="w-5" />
                                                </div>
                                                {youtubeValidateError && <label className="error">{youtubeValidateError}</label>}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex-initial w-full md:11/12 lg:w-6/12 bac-1 mr-5 mb-10 sm:mb-0">
                                <h4 className="text-xl font-semibold mb-3 sm:mb-5">Personal Details</h4>
                                <div className="box-shadow-1 px-8 pb-5 py-0 pt-10 rounded-2xl mb-10">
                                    <div className="block sm:block lg:flex  mt-0">
                                        <div className="flex-initial w-full md:11/12 lg:w-7/12 bac-1 py-0   md:py-5 lg:py-0 mr-5 mb-0 md:mb-0 lg:mb-0">
                                            <label className="text-black text-sm font-semibold">First Name</label>
                                            <div className="block relative mb-4">
                                                <input type="text" id="first_name" name="first_name" {...register("first_name")} placeholder=" Enter First Name" defaultValue={brandDataDetails.first_name} required="" onKeyUp={(event) => firstNameValid(event)} className="box-shadow-3 h-12 px-2 rounded-lg border border-[#95A5A6] bg-white w-full mt-2 placeholder:text-[#001540] mb-1 text-sm focus:outline-none" />
                                                <div className="absolute top-5 right-5">
                                                    <img src={userform} alt="userform" />
                                                </div>
                                                {firstnameValidateError && <label className="error">{firstnameValidateError}</label>}
                                            </div>

                                            <label className="text-black text-sm font-semibold">Last Name</label>
                                            <div className="block relative mb-5">
                                                <input type="text" id="last_name" name="last_name" {...register("last_name")} placeholder="Enter Last Name" defaultValue={brandDataDetails.last_name} required="" onKeyUp={(event) => lastNameValid(event)} className="box-shadow-3 h-12 px-2 rounded-lg border border-[#95A5A6] bg-white w-full mt-2 mb-1 text-sm placeholder:text-[#001540] focus:outline-none" />
                                                <div className="absolute top-5 right-5">
                                                    <img src={userform} alt="userform" />
                                                </div>
                                                {lastnameValidateError && <label className="error">{lastnameValidateError}</label>}
                                            </div>
                                        </div>

                                        <div className="flex-initial w-full md:11/12 lg:w-7/12 bac-1 py-5 md:py-5 lg:py-0  mb-0 md:mb-0 lg:mb-0 lg:mt-0">
                                            <label className="text-black text-sm font-semibold">Profile Photo</label>
                                            <div className="block relative mb-5">
                                                {!imageUpload ? (
                                                    <div className="flex w-full justify-center bg-grey-lighter mt-2">
                                                        <label
                                                            className={`w-full flex flex-col items-center px-4 py-12 ${brandImageValidateError ? "border-[#d95c5c]" : "border-gray-500"
                                                                } text-blue rounded-lg  border-dashed tracking-wide  border-2 border-blue cursor-pointer`}
                                                        >
                                                            <img src={uploadicon} className="" alt="uploadicon" />
                                                            <span className="mt-2 text-[11px]">Drag & Drop or browse to choose a file</span>
                                                            <input type="file" onChange={(e) => imageUploader(e)} className="box-shadow-3 hidden" />
                                                        </label>
                                                        <input id="brand_image" type="hidden" />
                                                        {brandImageValidateError && <label className="error">{brandImageValidateError}</label>}
                                                    </div>
                                                ) : (
                                                    <div className="relative flex w-full justify-center bg-grey-lighter mt-2">
                                                        <img src={afterUploadicon.imageSrc} className="h-[9.3rem] w-[20.5rem] object-fill" alt="uploaded" />
                                                        <div onClick={imageRemover} className="cursor-pointer absolute top-[-13px] right-0 bac-6 w-8 h-8 rounded-full flex justify-center items-center">
                                                            <i className="text-lg text-white fa-solid fa-xmark"></i>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-11">
                                        <label className="text-black text-sm font-semibold">E-Mail Address</label>
                                        <div className="block relative mb-5">
                                            <input type="text" id="email" defaultValue={brandDataDetails.email} readOnly name="email" {...register("email")} placeholder="Enter E-Mail Address" required="" className="box-shadow-3 h-12 px-2 rounded-lg border border-[#95A5A6] bg-white w-full mt-2 mb-1 text-sm placeholder:text-[#001540] focus:outline-none" />
                                            <div className="absolute top-6 right-5">
                                                <img src={messageicon} alt="messageicon" />
                                            </div>
                                            {emailValidateError && <label className="error">{emailValidateError}</label>}
                                        </div>

                                        <label className="text-black text-sm font-semibold">Phone</label>
                                        <div className="block relative mb-4">
                                            <input type="number" id="phone_number" onKeyUp={(event) => phoneNumberValid(event)} name="phone_number" {...register("phone_number")} placeholder="Enter Phone" required="" className="box-shadow-3 h-12 px-2 rounded-lg border border-[#95A5A6] bg-white w-full mt-2 mb-1 text-sm placeholder:text-[#001540] focus:outline-none" />
                                            <div className="absolute top-5 right-5">
                                                <img src={phoneicon} alt="phoneicon" />
                                            </div>
                                            {phoneValidateError && <label className="error">{phoneValidateError}</label>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="block text-center sm:text-right mb-16 items-center">
                        <div>
                            <button ref={submitButton} className="mt-3 bac-6 px-12 py-2.5 text-white font-base font-bold rounded-lg tracking-widest uppercase ml-2  mr-4">
                                <i className="fa fa-spin fa-spinner mr-2" id="btn_spinner"></i>Next
                            </button>
                        </div>
                    </div>
                </form>
            </section>


        </>
    )
}
export default SetupBrandDetails