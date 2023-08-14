import siranimg from "../../assets/images/siran.svg";
import celendericon from "../../assets/images/calendar-black.svg";
import uploadicon from "../../assets/images/camping-details-img.png";
import linkicon from "../../assets/images/paste (1) 1 (Traced).svg";
import whiteiicon from "../../assets/images/+-white.svg";
import selecticon from "../../assets/images/down-select.svg";
import successModalImg2 from "../../assets/images/753318 1.svg"
import { toggleModal5, } from "../../services/edit-modal"
import { toggleModal, changePaymentMethod } from "../../services/make-payment"
import { PaymentModal } from "../../components/Modal";
import { AddcardModal } from "../../components/Modal";
import { Header, Sidebar } from "../../layouts";
import { NavLink as Link, useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { customSelect } from '../../utils/custom-select';
import { useDispatch, useSelector } from 'react-redux'
import { addDays } from 'date-fns';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { changeDateFormate } from "../../services/edit-modal"
import { DateRange } from 'react-date-range';
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"
import Moment from 'moment';

import { getCamapignType } from "../../context/actions/campaign"
import { getRevuerLimit } from "../../context/actions/revuerlimit"
import { getInterests } from "../../context/actions/interests"
import { getCampaignDetails } from "../../context/actions/campaign"
import { brandCampaignUpdate } from "../../context/actions/campaign"
import { getVideoDuration } from "../../context/actions/videoduration"
import { element } from "prop-types";

function CampaignDetailsPage() {

  const pathname = window.location.pathname;
  const campaign_token = pathname.substring(pathname.lastIndexOf('/') + 1);

  var brandlogin_unique_token = localStorage.getItem("brandlogin_unique_token");

  const dispatch = useDispatch();
  const ref = useRef(null);
  const submitButton = useRef();
  let navigate = useNavigate();
  const toastId = useRef(null);



  const { register, handleSubmit, reset } = useForm()

  const compaignDetailsData = useSelector((state) => state.detailsCampaignData);
  const campaignTypeList = useSelector((state) => state.campaignData);
  const revuerLimitList = useSelector((state) => state.revuerLimitList);
  const interestsList = useSelector((state) => state.interestsList);
  const videoDurationList = useSelector((state) => state.videoDurationList);
  const campaignAllData = useSelector((state) => state.detailsCampaignData);
  const getCampaignDetailsData = campaignAllData.getCampaignDetailsData
  const getCampaignDetailsDataInterests = getCampaignDetailsData ? getCampaignDetailsData.interests : ""
  const camp_type = campaignAllData.camp_type
  const campaignTaskData = campaignAllData.campaignTaskData
  var start_date = getCampaignDetailsData ? getCampaignDetailsData.start_date : ""
  var last_date = getCampaignDetailsData ? getCampaignDetailsData.last_date : ""
  const [checked, setChecked] = useState({ buy: true, review: true, buugest: true, facebook: true, instagram: true, videobuy: true, videoreview: true, videodraft: true, videopublish: true, testimonialbuy: true, testimonialreview: true, testimonialvideo: true, testimonialpublish: true, samplingvideo: true, influencerbuyimage: true, influencerreviewimage: true, influencerscriptimage: true, influencerdraftimage: true, influencerpublishvideo: true, visualButtonChecked: true, videoButtonChecked: false, testimonialBuyYesButtonChecked: true, testimonialBuyNoButtonChecked: false, influencerBuyYesButtonChecked: true, influencerBuyNoButtonChecked: false, testimonialTaskNoBuyYesButtonChecked: false, testimonialTaskNoBuyNoButtonChecked: true, influencerTaskYesBuyYesButtonChecked: false, influencerTaskNoBuyNoButtonChecked: true });
  const myArray = start_date.split("/");
  const year = myArray[2]
  const month = myArray[1]
  const date = myArray[0]
  var finalStartDate = new Date(year + "-" + month + "-" + date)
  const [showDateRange, setshowDateRange] = useState(false)
  const [state, setState] = useState([
    {
      startDate: new Date("2022-11-24"),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
  const [displaySocialMedial, setDisplaySocialMedial] = useState(false);
  const [displaySocialMedialIcon, setDisplaySocialMedialIcon] = useState(false);
  const webUrlRegEx = RegExp(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/);

  const [afterUploadicon, setAfterUploadicon] = useState({ filename: '', imageSrc: "", imageObj: {} })

  const [imageUpload, setImageUpload] = useState(false)


  const [samplingAfterUploadicon, setSamplingAfterUploadicon] = useState({ filename: '', imageSrc: "", imageObj: {} })
  const [samplingImageUpload, setSamplingImageUpload] = useState(false)

  const [surveyAfterUploadicon, setSurveyAfterUploadicon] = useState({ filename: '', imageSrc: "", imageObj: {} })
  const [surveyImageUpload, setSurveyImageUpload] = useState(false)

  const [nameValidateError, setNameValidateError] = useState('')
  const [campObjectiveValidateError, setCampObjectiveValidateError] = useState('')
  const [campTypeValidateError, setCampTypeValidateError] = useState('')
  const [campaignImageImageValidateError, setCampaignImageImageValidateError] = useState('')
  const [selectDateValidateError, setSelectDateValidateError] = useState('')
  const [budgetValidateError, setBudgetValidateError] = useState('')
  const [revuerLimitValidateError, setrevuerLimitValidateError] = useState('')
  const [socialValidateError, setSocialValidateError] = useState('')
  const [interestsValidateError, setInterestsValidateError] = useState('')
  const [socialMediaValidateError, setSocialMediaValidateError] = useState('')

  const [productBuyDetailsValidateError, setProductBuyDetailsValidateError] = useState('')
  const [productBuyLinkValidateError, setProductBuyLinkValidateError] = useState('')
  const [productReviewValidateError, setProductReviewValidateError] = useState('')

  const [videoBuyProductDetailsValidateError, setVideoBuyProductDetailsValidateError] = useState('')
  const [videoBuyProductLinkValidateError, setVideoBuyProductLinkValidateError] = useState('')
  const [videoReviewDetailsValidateError, setVideoReviewDetailsValidateError] = useState('')
  const [videoScriptApprovalValidateError, setVideoScriptApprovalValidateError] = useState('')
  const [videoDraftUploadValidateError, setVideoDraftUploadValidateError] = useState('')
  const [videoPublishApprovalValidateError, setVideoPublishApprovalValidateError] = useState('')
  const [videoVisualDurationValidateError, setVideoVisualDurationValidateError] = useState('')

  const [testimonialBuyProductDetailsValidateError, setTestimonialBuyProductDetailsValidateError] = useState('')
  const [testimonialProductLinkValidateError, setTestimonialProductLinkValidateError] = useState('')
  const [testimonialReviewDetailsValidateError, setTestimonialReviewDetailsValidateError] = useState('')
  const [testimonialDraftUploadValidateError, setTestimonialDraftUploadValidateError] = useState('')
  const [testimonialPublishDetailsValidateError, setTestimonialPublishDetailsValidateError] = useState('')
  const [testimonialVideoDurationValidateError, setTestimonialVideoDurationValidateError] = useState('')
  const [testimonialDraftUploadTypeValidateError, setTestimonialDraftUploadTypeValidateError] = useState('')

  const [samplingReceiveSampleValidateError, setSamplingReceiveSampleValidateError] = useState('')
  const [samplingReceiveFormLinkValidateError, setSamplingReceiveFormLinkValidateError] = useState('')
  const [samplingFormLinkValidateError, setSamplingFormLinkValidateError] = useState('')
  const [samplingImageImageValidateError, setSamplingImageImageValidateError] = useState('')

  const [surveyFormLinkValidateError, setSurveyFormLinkValidateError] = useState('')
  const [surveyImageImageValidateError, setSurveyImageImageValidateError] = useState('')

  const [influencerBuyProductDetailsValidateError, setInfluencerBuyProductDetailsValidateError] = useState('')
  const [influencerProductLinkValidateError, setInfluencerProductLinkValidateError] = useState('')
  const [influencerReviewDetailsValidateError, setInfluencerReviewDetailsValidateError] = useState('')
  const [influencerScriptApprovalValidateError, setInfluencerScriptApprovalValidateError] = useState('')
  const [influencerDraftUploadValidateError, setInfluencerDraftUploadValidateError] = useState('')
  const [influencerPublishDetailsValidateError, setInfluencerPublishDetailsValidateError] = useState('')
  const [influencerDurationValidateError, setInfluencerDurationValidateError] = useState('')

  const [surveyFormLinkDisabled, setSurveyFormLinkDisabled] = useState(true)
  const [surveyFormUploadDisabled, setSurveyFormUploadDisabled] = useState(true)

  const [surveyTaskFormTypeValidateError, setSurveyTaskFormTypeValidateError] = useState('')

  const displaySurveyFormTask = (event) => {
    if (event.target.value == 1) {

      const survey_form_link = document.getElementById("survey_form_link")
      survey_form_link.setAttribute('disabled', '');

      const survey_image_disabled = document.getElementById("survey_image_disabled")
      survey_image_disabled.removeAttribute('disabled');

    } else {
      const survey_form_link = document.getElementById("survey_form_link")
      survey_form_link.removeAttribute('disabled');

      const survey_image_disabled = document.getElementById("survey_image_disabled")
      survey_image_disabled.setAttribute('disabled', '');
    }
  }

  const [samplingFormLinkDisabled, setSamplingFormLinkDisabled] = useState(true)
  const [samplingReceiveFormLinkDisabled, setSamplingReceiveFormLinkDisabled] = useState(false)
  const [samplingFormUploadDisabled, setSamplingFormUploadDisabled] = useState(true)

  const [samplingTaskFormTypeValidateError, setSamplingTaskFormTypeValidateError] = useState('')

  const displaySamplingFormTask = (event) => {

    if (event.target.value == 1) {

      const sampling_form_link = document.getElementById("sampling_form_link")
      sampling_form_link.setAttribute('disabled', '');

      const sampling_image_disabled = document.getElementById("sampling_image_disabled")
      sampling_image_disabled.removeAttribute('disabled');

    } else {

      const sampling_form_link = document.getElementById("sampling_form_link")
      sampling_form_link.removeAttribute('disabled');

      const sampling_image_disabled = document.getElementById("sampling_image_disabled")
      sampling_image_disabled.setAttribute('disabled', '');

    }
  }

  const displaySamplingFormLink = (event) => {
    if (event.target.checked) {
      setSamplingReceiveFormLinkDisabled(true)
      const firstNameInput = document.getElementById('sampling_receive_form_link');
      firstNameInput.value = '';
    } else {
      setSamplingReceiveFormLinkDisabled(false)
    }
  }


  const [testimonialVideoDurationDisabled, setTestimonialVideoDurationDisabled] = useState(true)
  const [testimonialVideoDraftVideoDurationDisabled, setTestimonialVideoDraftVideoDurationDisabled] = useState(false)

  const displayTestimonialVideoDuration = (event) => {
    if (event.target.value == 1) {

      var divClassDraftVideoUpload = document.getElementById('testimonial_draft_video_display');
      divClassDraftVideoUpload.classList.add("draft-upload-display-none")
      var divClassDraftVideoCheck = document.getElementById('testimonial_draft_video_check_display');
      divClassDraftVideoCheck.classList.add("draft-upload-display-none")

      setTestimonialVideoDurationDisabled(true)
      setTestimonialVideoDraftVideoDurationDisabled(true)
    } else {

      var divClassDraftVideoUpload = document.getElementById('testimonial_draft_video_display');
      divClassDraftVideoUpload.classList.remove("draft-upload-display-none")
      var divClassDraftVideoCheck = document.getElementById('testimonial_draft_video_check_display');
      divClassDraftVideoCheck.classList.remove("draft-upload-display-none")

      setTestimonialVideoDurationDisabled(false)
      setTestimonialVideoDraftVideoDurationDisabled(false)
    }
  }

  const [testimonialProductDetailsyDisabled, setTestimonialProductDetailsDisabled] = useState(false)
  const [testimonialProductLinkDisabled, setTestimonialProductLinkDisabled] = useState(false)
  const [testimonialProductImageDisabled, setTestimonialProductImageDisabled] = useState(false)
  const [testimonialProductReviewDetailsDisabled, setTestimonialProductReviewDetailsDisabled] = useState(false)
  const [testimonialProductReviewImageDisabled, setTestimonialProductReviewImageDisabled] = useState(false)


  const [testimonialTaskNoProductDetailsyDisabled, setTestimonialTaskNoProductDetailsyDisabled] = useState(true)
  const [testimonialTaskNoProductImageDisabled, setTestimonialTaskNoProductImageDisabled] = useState(true)
  const [testimonialTaskNoProductLinkDisabled, setTestimonialTaskNoProductLinkDisabled] = useState(true)
  const [testimonialTaskNoProductReviewDetailsDisabled, setTestimonialTaskNoProductReviewDetailsDisabled] = useState(true)
  const [testimonialTaskNoProductReviewImageDisabled, setTestimonialTaskNoProductReviewImageDisabled] = useState(true)

  const displayTestimonialTaskVisiable = (event) => {
    if (event.target.value == 1) {

      var divClassVisiable1 = document.getElementById('testimonial_task_1_visiable');
      var divClassVisiable2 = document.getElementById('testimonial_task_2_visiable');
      divClassVisiable1.classList.remove("task-visiable-class")
      divClassVisiable2.classList.remove("task-visiable-class")

      setTestimonialProductDetailsDisabled(false)
      setTestimonialProductLinkDisabled(false)
      setTestimonialProductImageDisabled(false)
      setTestimonialProductReviewDetailsDisabled(false)
      setTestimonialProductReviewImageDisabled(false)

      setTestimonialTaskNoProductDetailsyDisabled(false)
      setTestimonialTaskNoProductImageDisabled(false)
      setTestimonialTaskNoProductLinkDisabled(false)
      setTestimonialTaskNoProductReviewDetailsDisabled(false)
      setTestimonialTaskNoProductReviewImageDisabled(false)

    } else {

      var divClassVisiable1 = document.getElementById('testimonial_task_1_visiable');
      var divClassVisiable2 = document.getElementById('testimonial_task_2_visiable');
      divClassVisiable1.classList.add("task-visiable-class")
      divClassVisiable2.classList.add("task-visiable-class")

      setTestimonialProductDetailsDisabled(true)
      setTestimonialProductLinkDisabled(true)
      setTestimonialProductImageDisabled(true)
      setTestimonialProductReviewDetailsDisabled(true)
      setTestimonialProductReviewImageDisabled(true)

      const testimonialProductDetails = document.getElementById('testimonial_buy_product_details');
      testimonialProductDetails.value = '';
      const testimonialProductLink = document.getElementById('testimonial_product_link');
      testimonialProductLink.value = '';
      const testimonialReviewDetails = document.getElementById('testimonial_review_details');
      testimonialReviewDetails.value = '';
      const testimonialBuyImage = document.getElementById('testimonial_buy_image');
      testimonialBuyImage.checked = false;
      const testimonialProductImage = document.getElementById('testimonial_product_image');
      testimonialProductImage.checked = false;


      setTestimonialTaskNoProductDetailsyDisabled(true)
      setTestimonialTaskNoProductImageDisabled(true)
      setTestimonialTaskNoProductLinkDisabled(true)
      setTestimonialTaskNoProductReviewDetailsDisabled(true)
      setTestimonialTaskNoProductReviewImageDisabled(true)

    }
  }

  const [influencerProductDetailsyDisabled, setInfluencerProductDetailsyDisabled] = useState(false)
  const [influencerProductLinkDisabled, setInfluencerProductLinkDisabled] = useState(false)
  const [influencerProductImageDisabled, setInfluencerProductImageDisabled] = useState(false)
  const [influencerProductReviewDetailsDisabled, setInfluencerProductReviewDetailsDisabled] = useState(false)
  const [influencerProductReviewImageDisabled, setInfluencerProductReviewImageDisabled] = useState(false)


  const [influencerTaskNoProductDetailsyDisabled, setInfluencerTaskNoProductDetailsyDisabled] = useState(true)
  const [influencerTaskNoProductImageDisabled, setInfluencerTaskNoProductImageDisabled] = useState(true)
  const [influencerTaskNoProductLinkDisabled, setInfluencerTaskNoProductLinkDisabled] = useState(true)
  const [influencerTaskNoProductReviewDetailsDisabled, setInfluencerTaskNoProductReviewDetailsDisabled] = useState(true)
  const [influencerTaskNoProductReviewImageDisabled, setInfluencerTaskNoProductReviewImageDisabled] = useState(true)

  const displayInfluencerTaskVisiable = (event) => {
    if (event.target.value == 1) {

      var divClassVisiable1 = document.getElementById('influencer_task_1_visiable');
      var divClassVisiable2 = document.getElementById('influencer_task_2_visiable');
      divClassVisiable1.classList.remove("task-visiable-class")
      divClassVisiable2.classList.remove("task-visiable-class")

      setInfluencerProductDetailsyDisabled(false)
      setInfluencerProductLinkDisabled(false)
      setInfluencerProductImageDisabled(false)
      setInfluencerProductReviewDetailsDisabled(false)
      setInfluencerProductReviewImageDisabled(false)

      setInfluencerTaskNoProductDetailsyDisabled(false)
      setInfluencerTaskNoProductImageDisabled(false)
      setInfluencerTaskNoProductLinkDisabled(false)
      setInfluencerTaskNoProductReviewDetailsDisabled(false)
      setInfluencerTaskNoProductReviewImageDisabled(false)

    } else {

      var divClassVisiable1 = document.getElementById('influencer_task_1_visiable');
      var divClassVisiable2 = document.getElementById('influencer_task_2_visiable');
      divClassVisiable1.classList.add("task-visiable-class")
      divClassVisiable2.classList.add("task-visiable-class")

      setInfluencerProductDetailsyDisabled(true)
      setInfluencerProductLinkDisabled(true)
      setInfluencerProductImageDisabled(true)
      setInfluencerProductReviewDetailsDisabled(true)
      setInfluencerProductReviewImageDisabled(true)

      setInfluencerTaskNoProductDetailsyDisabled(true)
      setInfluencerTaskNoProductImageDisabled(true)
      setInfluencerTaskNoProductLinkDisabled(true)
      setInfluencerTaskNoProductReviewDetailsDisabled(true)
      setInfluencerTaskNoProductReviewImageDisabled(true)

      const influencerProductDetails = document.getElementById('influencer_buy_product_details');
      influencerProductDetails.value = '';
      const influencerProductLink = document.getElementById('influencer_product_link');
      influencerProductLink.value = '';
      const influencerReviewDetails = document.getElementById('influencer_review_details');
      influencerReviewDetails.value = '';
      const influencerBuyImage = document.getElementById('influencer_buy_product_image');
      influencerBuyImage.checked = false;
      const influencerProductImage = document.getElementById('influencer_receive_product_image');
      influencerProductImage.checked = false;

    }
  }


  const [visualProductReviewDetailsDisabled, setVisualProductReviewDetailsDisabled] = useState(false)
  const [visualProductReviewImageDisabled, setVisualProductReviewImageDisabled] = useState(false)
  const [visualScriptDetailsDisabled, setVisualScriptDetailsDisabled] = useState(true)
  const [visualDraftDetailsDisabled, setVisualDraftDetailsDisabled] = useState(true)
  const [visualDraftImageDisabled, setVisualDraftImageDisabled] = useState(true)
  const [visualVideoDurationDisabled, setVisualVideoDurationDisabled] = useState(true)

  const [visualVideoProductReviewDetailsDisabled, setVisualVideoProductReviewDetailsDisabled] = useState(true)
  const [visualVideoProductReviewImageDisabled, setVisualVideoProductReviewImageDisabled] = useState(true)
  const [visualVideoScriptDetailsDisabled, setVisualVideoScriptDetailsDisabled] = useState(false)
  const [visualVideoDraftDetailsDisabled, setVisualVideoDraftDetailsDisabled] = useState(false)
  const [visualVideoDraftImageDisabled, setVisualVideoDraftImageDisabled] = useState(false)
  const [visualMainVideoDurationDisabled, setVisualMainVideoDurationDisabled] = useState(false)



  const displayVisualVideoTaskVisiable = (event) => {
    if (event.target.value == 1) {

      var divClassVisiable2 = document.getElementById('visual_video_task_2_visiable');
      var divClassVisiable3 = document.getElementById('visual_video_task_3_visiable');
      var divClassVisiable4 = document.getElementById('visual_video_task_4_visiable');
      var divClassVisiable5 = document.getElementById('visual_video_task_5_visiable');


      divClassVisiable2.classList.remove("task-visiable-class")
      divClassVisiable3.classList.add("task-visiable-class")
      divClassVisiable4.classList.add("task-visiable-class")
      divClassVisiable5.classList.add("task-visiable-class")


      setVisualProductReviewDetailsDisabled(false)
      setVisualProductReviewImageDisabled(false)
      setVisualScriptDetailsDisabled(true)
      setVisualDraftDetailsDisabled(true)
      setVisualDraftImageDisabled(true)
      setVisualVideoDurationDisabled(true)


      setVisualVideoProductReviewDetailsDisabled(false)
      setVisualVideoProductReviewImageDisabled(false)
      setVisualVideoScriptDetailsDisabled(true)
      setVisualVideoDraftDetailsDisabled(true)
      setVisualVideoDraftImageDisabled(true)
      setVisualMainVideoDurationDisabled(true)

    } else {


      var divClassVisiable2 = document.getElementById('visual_video_task_2_visiable');
      var divClassVisiable3 = document.getElementById('visual_video_task_3_visiable');
      var divClassVisiable4 = document.getElementById('visual_video_task_4_visiable');
      var divClassVisiable5 = document.getElementById('visual_video_task_5_visiable');


      divClassVisiable2.classList.add("task-visiable-class")
      divClassVisiable3.classList.remove("task-visiable-class")
      divClassVisiable4.classList.remove("task-visiable-class")
      divClassVisiable5.classList.remove("task-visiable-class")

      setVisualProductReviewDetailsDisabled(true)
      setVisualProductReviewImageDisabled(true)
      setVisualScriptDetailsDisabled(false)
      setVisualDraftDetailsDisabled(false)
      setVisualDraftImageDisabled(false)
      setVisualVideoDurationDisabled(false)

      setVisualVideoProductReviewDetailsDisabled(true)
      setVisualVideoProductReviewImageDisabled(true)
      setVisualVideoScriptDetailsDisabled(false)
      setVisualVideoDraftDetailsDisabled(false)
      setVisualVideoDraftImageDisabled(false)
      setVisualMainVideoDurationDisabled(false)

    }
  }

  const campaignNameValid = (event) => {
    if (event.target.value.trim() == "") {
      setNameValidateError("Please Enter Campaign Name")
      event.target.classList.add("error")
    } else if (event.target.value.length < 2) {
      setNameValidateError("Campaign Name must consist of at least 2 characters")
      event.target.classList.add("error")
    } else {
      setNameValidateError("")
      event.target.classList.remove("error")
    }
  }

  const campaignObjectiveValid = (event) => {
    if (event.target.value.trim() == "") {
      setCampObjectiveValidateError("Please Enter Campaign Objective")
      event.target.classList.add("error")
    } else if (event.target.value.length < 20) {
      setCampObjectiveValidateError("Campaign Objective must consist of at least 20 characters")
      event.target.classList.add("error")
    } else {
      setCampObjectiveValidateError("")
      event.target.classList.remove("error")
    }
  }

  const campaignBudgetValid = (event) => {
    if (event.target.value.trim() == "") {
      setBudgetValidateError("Please Enter Budget")
      event.target.classList.add("error")
    } else if (event.target.value < 1) {
      setBudgetValidateError("Budget can not less than 1")
      event.target.classList.add("error")
    } else {
      setBudgetValidateError("")
      event.target.classList.remove("error")
    }
  }


  const [coverImageEditValue, setCoverImageEditValue] = useState(1)
  const [surveyImageEditValue, setSurveyImageEditValue] = useState(1)

  const onSubmit = (data, event) => {

    console.log("MAin Data : ", data)

    const cover_image_edit = event.target.querySelector("#cover_image_edit").value

    const nameId = event.target.querySelector("#name");
    const name = nameId.value;

    const campObjectiveId = event.target.querySelector("#campObjective");
    const campObjective = campObjectiveId.value;

    const calenderSelectId = event.target.querySelector("#calender_select");
    const calender_select_value = calenderSelectId.value;

    const revuerlimitId = event.target.querySelector("#revuerlimit");
    const revuerlimit = revuerlimitId.value;

    var campaign_image = document.getElementById("campaign_image");

    const dosId = event.target.querySelector("#do");
    const dos = dosId.value


    const dontId = event.target.querySelector("#dont");
    const dont = dontId.value

    // const additionalsId = event.target.querySelector("#additionals");
    // const additionals = additionalsId.value

    const budgetId = event.target.querySelector("#budget");
    const budget = budgetId.value;

    let socialMedia = event.target.querySelectorAll('input[name="social_media"]:checked');
    let socialValues = [];
    socialMedia.forEach((checkbox) => {
      socialValues.push(checkbox.value);
    });
    var main_social_media = JSON.stringify(socialValues);

    let checkboxesInterests = event.target.querySelectorAll('input[name="interests"]:checked');
    let interestsValues = [];
    checkboxesInterests.forEach((checkbox) => {
      interestsValues.push(checkbox.value);
    });
    data.interests = JSON.stringify(interestsValues);

    let draftUploadType = event.target.querySelectorAll('input[name="draft_upload_type"]:checked');
    let draftUploadTypeValues = [];
    draftUploadType.forEach((checkbox) => {
      draftUploadTypeValues.push(checkbox.value);
    });
    data.draft_upload_type = JSON.stringify(draftUploadTypeValues);

    var campaignPostStatusIDLength = event.target.querySelectorAll('input[name="campaign_post_status"]:checked');
    if(campaignPostStatusIDLength.length == 0){
     var campaignPostStatusID = true;
    }else{
     var campaignPostStatusID = false;
    }
    //const campaignPostStatusID = event.target.querySelector("#campaign_post_status");
    const campaign_post_status = campaignPostStatusID

    console.log("campaign_post_status",campaign_post_status)

    if (name.trim() == "" || name.length < 2) {
      setNameValidateError("Please Enter Campaign Name and must consist of at least 2 characters")
      nameId.classList.add("error")
    } else {
      setNameValidateError("")
      nameId.classList.remove("error")
    }

    if (campObjective.trim() == "" || campObjective.length < 20) {
      setCampObjectiveValidateError("Please Enter Campaign Objective and must consist of at least 20 characters")
      campObjectiveId.classList.add("error")
    } else {
      setCampObjectiveValidateError("")
      campObjectiveId.classList.remove("error")
    }

    if (afterUploadicon.imageSrc == "" && cover_image_edit == 2) {
      setCampaignImageImageValidateError("Please select campaign image");
      campaign_image?.classList.add("error");
    } else {
      setCampaignImageImageValidateError("");
      campaign_image?.classList.remove("error");
    }

    if (calender_select_value == "") {
      setSelectDateValidateError("Select Date Range")
      calenderSelectId.classList.add("error")
    } else {
      setSelectDateValidateError("")
      calenderSelectId.classList.remove("error")
    }

    if (budget.trim() == "" || budget < 1) {
      setBudgetValidateError("Please enter budget can not less than 1")
      budgetId.classList.add("error")
    } else {
      setBudgetValidateError("")
      budgetId.classList.remove("error")
    }

    if (revuerlimit == "") {
      setrevuerLimitValidateError("Please select revuer limit")
      revuerlimitId.classList.add("error")
    } else {
      setrevuerLimitValidateError("")
      revuerlimitId.classList.remove("error")
    }

    if (interestsValues.length == 0) {
      setInterestsValidateError("Please select at least one interest")
    } else {
      setInterestsValidateError("")
    }


    // Product Review
    if (camp_type == 1) {
      var productBuyImageId = event.target.querySelector("#product_buy_image");
      var product_buy_image = productBuyImageId.checked

      var productBuyProductDetailsId = event.target.querySelector("#product_buy_product_details");
      var product_buy_product_details = productBuyProductDetailsId.value

      var productBuyProductLinkId = event.target.querySelector("#product_buy_product_link");
      var product_buy_product_link = productBuyProductLinkId.value

      var productReviewDetailsId = event.target.querySelector("#product_review_details");
      var product_review_details = productReviewDetailsId.value

      var productReviewImageId = event.target.querySelector("#product_review_image");
      var product_review_image = productReviewImageId.checked

      if (camp_type == 1 && (product_buy_product_details.trim() == "" || product_buy_product_details.length < 20)) {
        setProductBuyDetailsValidateError("Please enter product details and must consist of at least 20 characters")
        productBuyProductDetailsId.classList.add("error")
      } else {
        setProductBuyDetailsValidateError("")
        productBuyProductDetailsId.classList.remove("error")
      }

      if (camp_type == 1 && (product_buy_product_link.trim() == "" || !webUrlRegEx.test(product_buy_product_link.trim()))) {
        setProductBuyLinkValidateError("Please enter valid product link")
        productBuyProductLinkId.classList.add("error")
      } else {
        setProductBuyLinkValidateError("")
        productBuyProductLinkId.classList.remove("error")
      }

      if (camp_type == 1 && (product_review_details.trim() == "" || product_review_details.length < 20)) {
        setProductReviewValidateError("Please enter review details and must consist of at least 20 characters")
        productReviewDetailsId.classList.add("error")
      } else {
        setProductReviewValidateError("")
        productReviewDetailsId.classList.remove("error")
      }
    }

    // Survey Form Task
    if (camp_type == 5) {
      var surveyFormLinkId = event.target.querySelector("#survey_form_link");
      var survey_form_link = surveyFormLinkId.value
      var survey_image = document.getElementById("survey_image");

      var survey_form_task_type = event.target.querySelectorAll('input[name="survey_form_task_type"]:checked');

      let survey_form_task_type_value = [];
      survey_form_task_type.forEach((checkbox) => {
        survey_form_task_type_value.push(checkbox.value);
      });
      survey_form_task_type = survey_form_task_type_value.toString();

      if (camp_type == 5 && survey_form_task_type == undefined) {
        setSurveyTaskFormTypeValidateError("Please select fill form type");
      } else {
        setSurveyTaskFormTypeValidateError("");
      }
      if (camp_type == 5 && survey_form_task_type == 1 && surveyAfterUploadicon.imageSrc == '') {
        setSurveyImageImageValidateError("Please select fill form image");
        survey_image?.classList.add("error");
      } else {
        setSurveyImageImageValidateError("");
        survey_image?.classList.remove("error");
      }

      if (camp_type == 5 && survey_form_task_type == 2 && (survey_form_link == "" || !webUrlRegEx.test(survey_form_link))) {
        setSurveyFormLinkValidateError("Please enter valid form link")
        surveyFormLinkId.classList.add("error")
      } else {
        setSurveyFormLinkValidateError("")
        surveyFormLinkId.classList.remove("error")
      }
    }

    //Sampling Form Task
    if (camp_type == 4) {
      var samplingReveiveProductSampleId = event.target.querySelector("#sampling_reveive_product_sample");
      var sampling_reveive_product_sample = samplingReveiveProductSampleId.value

      var sampling_form_task_type = event.target.querySelectorAll('input[name="sampling_form_task_type"]:checked');
      let sampling_form_task_type_value = [];
      sampling_form_task_type.forEach((checkbox) => {
        sampling_form_task_type_value.push(checkbox.value);
      });
      sampling_form_task_type = sampling_form_task_type_value.toString();

      var samplingFormLinkId = event.target.querySelector("#sampling_form_link")
      var sampling_form_link = samplingFormLinkId.value

      var sampling_image = document.getElementById("sampling_image");

      var samplingProductImageId = event.target.querySelector("#sampling_product_image");
      var sampling_product_image = samplingProductImageId.checked

      var samplingReceiveFormLink = event.target.querySelector("#sampling_receive_form_link")
      var sampling_receive_form_link = samplingReceiveFormLink.value

      if (camp_type == 4 && (sampling_reveive_product_sample.trim == "" || sampling_reveive_product_sample.length < 20)) {
        setSamplingReceiveSampleValidateError("Please enter sample product details and must consist of at least 20 characters")
        samplingReveiveProductSampleId.classList.add("error")
      } else {
        setSamplingReceiveSampleValidateError("")
        samplingReveiveProductSampleId.classList.remove("error")
      }

      if (camp_type == 4 && sampling_form_task_type == undefined) {
        setSamplingTaskFormTypeValidateError("Please select fill form type");
      } else {
        setSamplingTaskFormTypeValidateError("");
      }

      if (camp_type == 4 && sampling_form_task_type == 1 && samplingAfterUploadicon.imageSrc == "") {
        setSamplingImageImageValidateError("Please select fill form image");
        sampling_image?.classList.add("error");
      } else {
        setSamplingImageImageValidateError("");
        sampling_image?.classList.remove("error");
      }

      if (camp_type == 4 && sampling_form_task_type == 2 && (sampling_form_link == '' || !webUrlRegEx.test(sampling_form_link))) {
        setSamplingFormLinkValidateError("Please enter valid upload form link")
        samplingFormLinkId.classList.add("error")
      } else {
        setSamplingFormLinkValidateError("")
        samplingFormLinkId.classList.remove("error")
      }
    }

    //Visual & Video Task
    if (camp_type == 2) {
      var visual_video_task_visiable = event.target.querySelectorAll('input[name="visual_video_task_visiable"]:checked');
      let visual_video_task_visiable_value = [];
      visual_video_task_visiable.forEach((checkbox) => {
        visual_video_task_visiable_value.push(checkbox.value);
      });
      visual_video_task_visiable = visual_video_task_visiable_value.toString();

      var videoBuyProductDetailsId = event.target.querySelector("#video_buy_product_details");
      var video_buy_product_details = videoBuyProductDetailsId.value

      var videoBuyProductLinkId = event.target.querySelector("#video_buy_product_link");
      var video_buy_product_link = videoBuyProductLinkId.value

      var videoBuyImageId = event.target.querySelector("#video_buy_image");
      var video_buy_image = videoBuyImageId.checked

      var videoReviewDetailsId = event.target.querySelector("#video_review_details");
      const videoScriptApprovalId = event.target.querySelector("#video_script_approval");
      const videoDraftUploadId = event.target.querySelector("#video_draft_upload");
      const visualVideoDurationId = event.target.querySelector("#visual_video_duration");
      var visual_video_duration = visualVideoDurationId.value

      if (visual_video_task_visiable == 1) {
        var video_review_details = videoReviewDetailsId.value
        var video_script_approval = ''
        var video_draft_upload = ''
      } else {
        var video_review_details = ''
        var video_script_approval = videoScriptApprovalId.value
        var video_draft_upload = videoDraftUploadId.value
      }

      var videoDraftImageId = event.target.querySelector("#video_draft_image");
      var video_draft_image = videoDraftImageId.checked

      var videoPublishApprovalId = event.target.querySelector("#video_publish_approval");
      var video_publish_approval = videoPublishApprovalId.value

      var videoReviewImageId = event.target.querySelector("#video_review_image");
      var video_review_image = videoReviewImageId.checked

      if (camp_type == 2 && video_buy_product_details.trim == "" || video_buy_product_details.length < 20) {
        setVideoBuyProductDetailsValidateError("Please enter product details and must consist of at least 20 characters")
        videoBuyProductDetailsId.classList.add("error")
      } else {
        setVideoBuyProductDetailsValidateError("")
        videoBuyProductDetailsId.classList.remove("error")
      }

      if (camp_type == 2 && video_buy_product_link.trim == "" || !webUrlRegEx.test(video_buy_product_link.trim())) {
        setVideoBuyProductLinkValidateError("Please enter valid product link")
        videoBuyProductLinkId.classList.add("error")
      } else {
        setVideoBuyProductLinkValidateError("")
        videoBuyProductLinkId.classList.remove("error")
      }

      if (camp_type == 2 && visual_video_task_visiable == 1 && (video_review_details.trim == "" || video_review_details.length < 20)) {
        setVideoReviewDetailsValidateError("Please enter review details and must consist of at least 20 characters")
        videoReviewDetailsId.classList.add("error")
      } else {
        setVideoReviewDetailsValidateError("")
        videoReviewDetailsId.classList.remove("error")
      }

      if (camp_type == 2 && visual_video_task_visiable == 2 && (video_script_approval.trim() == "" || video_script_approval.length < 20)) {
        setVideoScriptApprovalValidateError("Please enter script approval and must consist of at least 20 characters")
        videoScriptApprovalId.classList.add("error")
      } else {
        setVideoScriptApprovalValidateError("")
        videoScriptApprovalId.classList.remove("error")
      }

      if (camp_type == 2 && visual_video_task_visiable == 2 && (video_draft_upload.trim == "" || video_draft_upload.length < 20)) {
        setVideoDraftUploadValidateError("Please enter draft upload details and must consist of at least 20 characters")
        videoDraftUploadId.classList.add("error")
      } else {
        setVideoDraftUploadValidateError("")
        videoDraftUploadId.classList.remove("error")
      }

      if (camp_type == 2 && video_publish_approval.trim() == "" || video_publish_approval.length < 20) {
        setVideoPublishApprovalValidateError("Please enter publish details and must consist of at least 20 characters")
        videoPublishApprovalId.classList.add("error")
      } else {
        setVideoPublishApprovalValidateError("")
        videoPublishApprovalId.classList.remove("error")
      }

      if (camp_type == 2 && visual_video_duration == "" && visual_video_task_visiable == 2) {
        setVideoVisualDurationValidateError("Please select video duration")
        visualVideoDurationId.classList.add("error")
      } else {
        setVideoVisualDurationValidateError("")
        visualVideoDurationId.classList.remove("error")
      }
    }

    //Testimonial Task
    if (camp_type == 3) {
      let testimonialTaskVisiable = event.target.querySelectorAll('input[name="task_visiable"]:checked');
      let TestimonialTask = [];
      testimonialTaskVisiable.forEach((checkbox) => {
        TestimonialTask.push(checkbox.value);
      });
      var task_visiable = TestimonialTask.toString();

      var testimonialBuyProductDetailsId = event.target.querySelector("#testimonial_buy_product_details");
      var testimonialProductLinkId = event.target.querySelector("#testimonial_product_link");
      var testimonialReviewDetailsId = event.target.querySelector("#testimonial_review_details");

      if (task_visiable == 1) {
        var testimonial_buy_product_details = testimonialBuyProductDetailsId.value
        var testimonial_product_link = testimonialProductLinkId.value
        var testimonial_review_details = testimonialReviewDetailsId.value
      } else {
        var testimonial_buy_product_details = ''
        var testimonial_product_link = ''
        var testimonial_review_details = ''
      }

      var testimonialBuyImageId = event.target.querySelector("#testimonial_buy_image");
      var testimonial_buy_image = testimonialBuyImageId.checked

      var testimonialProductImageId = event.target.querySelector("#testimonial_product_image");
      var testimonial_product_image = testimonialProductImageId.checked

      var testimonialDraftUploadId = event.target.querySelector("#testimonial_draft_upload");
      var testimonial_draft_upload = testimonialDraftUploadId.value

      let draftUploadType = event.target.querySelectorAll('input[name="draft_upload_type"]:checked');
      let draftUploadTypeValues = [];
      draftUploadType.forEach((checkbox) => {
        draftUploadTypeValues.push(checkbox.value);
      });
      var draft_upload_type = JSON.stringify(draftUploadTypeValues);

      var testimonialDraftVideoUploadId = event.target.querySelector("#testimonial_draft_video_upload");
      var testimonial_draft_video_upload = testimonialDraftVideoUploadId.checked

      var testimonialPublishApprovalDetailsId = event.target.querySelector("#testimonial_publish_approval_details");
      var testimonial_publish_approval_details = testimonialPublishApprovalDetailsId.value

      var testimonialVideoDurationId = event.target.querySelector("#testimonial_video_duration");
      var testimonial_video_duration = testimonialVideoDurationId.value

      if (camp_type == 3 && task_visiable == 1 && (testimonial_buy_product_details.trim() == "" || testimonial_buy_product_details.length < 20)) {
        setTestimonialBuyProductDetailsValidateError("Please enter product details and must consist of at least 20 characters")
        testimonialBuyProductDetailsId.classList.add("error")
      } else {
        setTestimonialBuyProductDetailsValidateError("")
        testimonialBuyProductDetailsId.classList.remove("error")
      }

      if (camp_type == 3 && task_visiable == 1 && (testimonial_product_link.trim() == "" || !webUrlRegEx.test(testimonial_product_link.trim()))) {
        setTestimonialProductLinkValidateError("Please enter valid product link")
        testimonialProductLinkId.classList.add("error")
      } else {
        setTestimonialProductLinkValidateError("")
        testimonialProductLinkId.classList.remove("error")
      }

      if (camp_type == 3 && task_visiable == 1 && (testimonial_review_details.trim() == "" || testimonial_review_details.length < 20)) {
        setTestimonialReviewDetailsValidateError("Please enter review details and must consist of at least 20 charactersf")
        testimonialReviewDetailsId.classList.add("error")
      } else {
        setTestimonialReviewDetailsValidateError("")
        testimonialReviewDetailsId.classList.remove("error")
      }

      if (camp_type == 3 && testimonial_draft_upload.trim() == "" || testimonial_draft_upload.length < 20) {
        setTestimonialDraftUploadValidateError("Please enter draft upload details and must consist of at least 20 characters")
        testimonialDraftUploadId.classList.add("error")
      } else {
        setTestimonialDraftUploadValidateError("")
        testimonialDraftUploadId.classList.remove("error")
      }

      if (camp_type == 3 && draftUploadTypeValues.length == 0) {
        setTestimonialDraftUploadTypeValidateError("Please select draft upload type")
      } else {
        setTestimonialDraftUploadTypeValidateError("")
      }

      if (camp_type == 3 && testimonial_publish_approval_details.trim() == "" || testimonial_publish_approval_details.length < 20) {
        setTestimonialPublishDetailsValidateError("Please enter publish details and must consist of at least 20 characters")
        testimonialPublishApprovalDetailsId.classList.add("error")
      } else {
        setTestimonialPublishDetailsValidateError("")
        testimonialPublishApprovalDetailsId.classList.remove("error")
      }

      if (camp_type == 3 && draft_upload_type == 2 && testimonial_video_duration == "") {
        setTestimonialVideoDurationValidateError("Please select video duration")
        testimonialVideoDurationId.classList.add("error")
      } else {
        setTestimonialVideoDurationValidateError("")
        testimonialVideoDurationId.classList.remove("error")
      }
    }

    //Influencer Task
    if (camp_type == 7) {
      let influencerTaskVisiable = event.target.querySelectorAll('input[name="influencer_task_visiable"]:checked');
      let influencerTask = [];
      influencerTaskVisiable.forEach((checkbox) => {
        influencerTask.push(checkbox.value);
      });
      var influencer_task_visiable = influencerTask.toString();

      var influencerBuyProductDetailsId = event.target.querySelector("#influencer_buy_product_details");

      var influencerProductLinkId = event.target.querySelector("#influencer_product_link");

      var influencerReviewDetailsId = event.target.querySelector("#influencer_review_details");

      if (influencer_task_visiable == 1) {
        var influencer_buy_product_details = influencerBuyProductDetailsId.value
        var influencer_product_link = influencerProductLinkId.value
        var influencer_review_details = influencerReviewDetailsId.value
      } else {
        var influencer_buy_product_details = ''
        var influencer_product_link = ''
        var influencer_review_details = ''
      }

      var influencerBuyProductImageId = event.target.querySelector("#influencer_buy_product_image");
      var influencer_buy_product_image = influencerBuyProductImageId.checked

      var influencerReceiveProductImageId = event.target.querySelector("#influencer_receive_product_image");
      var influencer_receive_product_image = influencerReceiveProductImageId.checked

      var influencerScriptApprovalId = event.target.querySelector("#influencer_script_approval");
      var influencer_script_approval = influencerScriptApprovalId.value

      var influencerDraftUploadId = event.target.querySelector("#influencer_draft_upload");
      var influencer_draft_upload = influencerDraftUploadId.value

      var influencerPublishDetailsId = event.target.querySelector("#influencer_publish_details");
      var influencer_publish_details = influencerPublishDetailsId.value

      var influencerPublishVideoId = event.target.querySelector("#influencer_publish_video");
      var influencer_publish_video = influencerPublishVideoId.checked

      var influencerVideoDurationId = event.target.querySelector("#influencer_video_duration");
      var influencer_video_duration = influencerVideoDurationId.value

      var influencerDraftUploadImageId = event.target.querySelector("#influencer_draft_upload_image");
      var influencer_draft_upload_image = influencerDraftUploadImageId.checked

      if (camp_type == 7 && influencer_task_visiable == 1 && (influencer_buy_product_details.trim() == "" || influencer_buy_product_details.length < 20)) {
        setInfluencerBuyProductDetailsValidateError("Please enter product details and must consist of at least 20 characters")
        influencerBuyProductDetailsId.classList.add("error")
      } else {
        setInfluencerBuyProductDetailsValidateError("")
        influencerBuyProductDetailsId.classList.remove("error")
      }

      if (camp_type == 7 && influencer_task_visiable == 1 && (influencer_product_link.trim() == "" || !webUrlRegEx.test(influencer_product_link.trim()))) {
        setInfluencerProductLinkValidateError("Please enter valid product link")
        influencerProductLinkId.classList.add("error")
      } else {
        setInfluencerProductLinkValidateError("")
        influencerProductLinkId.classList.remove("error")
      }

      if (camp_type == 7 && influencer_task_visiable == 1 && (influencer_review_details.trim() == "" || influencer_review_details.length < 20)) {
        setInfluencerReviewDetailsValidateError("Please enter review details and must consist of at least 20 characters")
        influencerReviewDetailsId.classList.add("error")
      } else {
        setInfluencerReviewDetailsValidateError("")
        influencerReviewDetailsId.classList.remove("error")
      }

      if (camp_type == 7 && influencer_script_approval.trim() == "" || influencer_script_approval.length < 20) {
        setInfluencerScriptApprovalValidateError("Please enter script approval and must consist of at least 20 characters")
        influencerScriptApprovalId.classList.add("error")
      } else {
        setInfluencerScriptApprovalValidateError("")
        influencerScriptApprovalId.classList.remove("error")
      }

      if (camp_type == 7 && influencer_draft_upload.trim() == "" || influencer_draft_upload.length < 20) {
        setInfluencerDraftUploadValidateError("Please enter draft upload details and must consist of at least 20 characters")
        influencerDraftUploadId.classList.add("error")
      } else {
        setInfluencerDraftUploadValidateError("")
        influencerDraftUploadId.classList.remove("error")
      }

      if (camp_type == 7 && socialValues.length == 0) {
        setSocialMediaValidateError("Please select social media")
      } else {
        setSocialMediaValidateError("")
      }

      if (camp_type == 7 && influencer_publish_details.trim() == "" || influencer_publish_details.length < 20) {
        setInfluencerPublishDetailsValidateError("Please enter publish details and must consist of at least 20 characters")
        influencerPublishDetailsId.classList.add("error")
      } else {
        setInfluencerPublishDetailsValidateError("")
        influencerPublishDetailsId.classList.remove("error")
      }

      if (camp_type == 7 && influencer_video_duration == "") {
        setInfluencerDurationValidateError("Please select video duration")
        influencerVideoDurationId.classList.add("error")
      } else {
        setInfluencerDurationValidateError("")
        influencerVideoDurationId.classList.remove("error")
      }
    }


    if (camp_type == 1) {

      if (name.trim() != "" && name.length > 2 && campObjective.trim() != "" && campObjective.length > 20 && calender_select_value != "" && budget.trim() != "" && budget > 1 && revuerlimit != "" && interestsValues.length > 0 && product_buy_product_details.trim() != "" && product_buy_product_details.length > 20 && product_buy_product_link.trim() != "" && webUrlRegEx.test(product_buy_product_link.trim()) && product_review_details.trim() != "" && product_review_details.length > 20) {

        const old_name = getCampaignDetailsData ? getCampaignDetailsData.campaign_name : ""

        const mainData = {
          name: name,
          old_name: old_name,
          campObjective: campObjective,
          campType: camp_type,
          campaign_image: afterUploadicon.imageObj,
          image_name: afterUploadicon.filename,
          calender_select: calender_select_value,
          dos: dos,
          dont: dont,
          // additionals: additionals,
          interests: interestsValues,
          budget: budget,
          revuerlimit: revuerlimit,
          campaign_post_status: campaign_post_status,
          product_buy_product_details: product_buy_product_details,
          product_buy_product_link: product_buy_product_link,
          product_buy_image: product_buy_image,
          product_review_details: product_review_details,
          product_review_image: product_review_image,
          campaign_token: campaign_token,
          brandlogin_unique_token: brandlogin_unique_token,
          cover_image_edit: cover_image_edit
        }
        dispatch(brandCampaignUpdate(mainData, navigate, submitButton, toastId))
      } else {
        toast.error("Please check all validate fields should be fill")
      }

    } else if (camp_type == 2) {

      if (name.trim() != "" && name.length > 2 && campObjective.trim() != "" && campObjective.length > 20 && calender_select_value != "" && budget.trim() != "" && budget > 1 && revuerlimit != "" && interestsValues.length > 0 && video_buy_product_details.trim != "" && video_buy_product_link.trim != "" && video_publish_approval.trim != "" && video_publish_approval.length > 20) {
        if (visual_video_task_visiable == 1) {
          if (video_review_details.trim != "" && video_review_details.length > 20) {


            const old_name = getCampaignDetailsData ? getCampaignDetailsData.campaign_name : ""

            const mainData = {
              name: name,
              old_name: old_name,
              campObjective: campObjective,
              campType: camp_type,
              campaign_image: afterUploadicon.imageObj,
              image_name: afterUploadicon.filename,
              calender_select: calender_select_value,
              dos: dos,
              dont: dont,
              // additionals: additionals,
              interests: interestsValues,
              budget: budget,
              revuerlimit: revuerlimit,
              campaign_post_status: campaign_post_status,
              visual_video_task_visiable: visual_video_task_visiable,
              video_buy_product_details: video_buy_product_details,
              video_buy_product_link: video_buy_product_link,
              video_buy_image: video_buy_image,
              video_review_details: video_review_details,
              video_script_approval: video_script_approval,
              video_draft_upload: video_draft_upload,
              visual_video_duration: visual_video_duration,
              video_draft_image: video_draft_image,
              video_publish_approval: video_publish_approval,
              video_review_image: video_review_image,
              social_media: main_social_media,
              campaign_token: campaign_token,
              brandlogin_unique_token: brandlogin_unique_token,
              cover_image_edit: cover_image_edit
            }
            dispatch(brandCampaignUpdate(mainData, navigate, submitButton, toastId))
            console.log("Visual Main Data: ", mainData)
          } else {
            toast.error("Please check all validate fields should be fill")
          }
        } else {
          if (video_script_approval.trim != "" && video_script_approval.length > 20 && video_draft_upload.trim != "" && video_draft_upload.length > 20) {

            const old_name = getCampaignDetailsData ? getCampaignDetailsData.campaign_name : ""

            const mainData = {
              name: name,
              old_name: old_name,
              campObjective: campObjective,
              campType: camp_type,
              campaign_image: afterUploadicon.imageObj,
              image_name: afterUploadicon.filename,
              calender_select: calender_select_value,
              dos: dos,
              dont: dont,
              // additionals: additionals,
              interests: interestsValues,
              budget: budget,
              revuerlimit: revuerlimit,
              campaign_post_status: campaign_post_status,
              visual_video_task_visiable: visual_video_task_visiable,
              video_buy_product_details: video_buy_product_details,
              video_buy_product_link: video_buy_product_link,
              video_buy_image: video_buy_image,
              video_review_details: video_review_details,
              video_script_approval: video_script_approval,
              video_draft_upload: video_draft_upload,
              visual_video_duration: visual_video_duration,
              video_draft_image: video_draft_image,
              video_publish_approval: video_publish_approval,
              video_review_image: video_review_image,
              social_media: main_social_media,
              campaign_token: campaign_token,
              brandlogin_unique_token: brandlogin_unique_token,
              cover_image_edit: cover_image_edit
            }
            dispatch(brandCampaignUpdate(mainData, navigate, submitButton, toastId))
            console.log("Video Main Data: ", mainData)
          } else {
            toast.error("Please check all validate fields should be fill")
          }
        }
      } else {
        toast.error("Please check all validate fields should be fill")
      }

    } else if (camp_type == 3) {

      if (name.trim() != "" && name.length > 2 && campObjective.trim() != "" && campObjective.length > 20 && calender_select_value != "" && budget.trim() != "" && budget > 1 && revuerlimit != "" && interestsValues.length > 0 && socialValues.length > 0 && testimonial_publish_approval_details.trim != "" && testimonial_publish_approval_details.length > 20 && draftUploadTypeValues.length > 0 && testimonial_draft_upload.trim != "" && testimonial_draft_upload.length > 20) {

        if (task_visiable == 1) {
          if (testimonial_buy_product_details.trim != "" && testimonial_buy_product_details.length > 20 && testimonial_product_link.trim() != "" && testimonial_review_details.trim != "" && testimonial_review_details.length > 20) {
            if (draft_upload_type == 1) {

              const old_name = getCampaignDetailsData ? getCampaignDetailsData.campaign_name : ""

              const mainData = {
                name: name,
                old_name: old_name,
                campObjective: campObjective,
                campType: camp_type,
                campaign_image: afterUploadicon.imageObj,
                image_name: afterUploadicon.filename,
                calender_select: calender_select_value,
                dos: dos,
                dont: dont,
                // additionals: additionals,
                interests: interestsValues,
                budget: budget,
                revuerlimit: revuerlimit,
                campaign_post_status: campaign_post_status,
                task_visiable: task_visiable,
                testimonial_buy_product_details: testimonial_buy_product_details,
                testimonial_product_link: testimonial_product_link,
                testimonial_review_details: testimonial_review_details,
                testimonial_buy_image: testimonial_buy_image,
                testimonial_product_image: testimonial_product_image,
                testimonial_draft_upload: testimonial_draft_upload,
                draft_upload_type: draft_upload_type,
                testimonial_draft_video_upload: testimonial_draft_video_upload,
                testimonial_publish_approval_details: testimonial_publish_approval_details,
                testimonial_video_duration: testimonial_video_duration,
                social_media: main_social_media,
                campaign_token: campaign_token,
                brandlogin_unique_token: brandlogin_unique_token,
                cover_image_edit: cover_image_edit
              }
              dispatch(brandCampaignUpdate(mainData, navigate, submitButton, toastId))
              console.log("Testimonial: ", mainData)

            } else {
              if (testimonial_video_duration != "") {
                const old_name = getCampaignDetailsData ? getCampaignDetailsData.campaign_name : ""

                const mainData = {
                  name: name,
                  old_name: old_name,
                  campObjective: campObjective,
                  campType: camp_type,
                  campaign_image: afterUploadicon.imageObj,
                  image_name: afterUploadicon.filename,
                  calender_select: calender_select_value,
                  dos: dos,
                  dont: dont,
                  // additionals: additionals,
                  interests: interestsValues,
                  budget: budget,
                  revuerlimit: revuerlimit,
                  campaign_post_status: campaign_post_status,
                  task_visiable: task_visiable,
                  testimonial_buy_product_details: testimonial_buy_product_details,
                  testimonial_product_link: testimonial_product_link,
                  testimonial_review_details: testimonial_review_details,
                  testimonial_buy_image: testimonial_buy_image,
                  testimonial_product_image: testimonial_product_image,
                  testimonial_draft_upload: testimonial_draft_upload,
                  draft_upload_type: draft_upload_type,
                  testimonial_draft_video_upload: testimonial_draft_video_upload,
                  testimonial_publish_approval_details: testimonial_publish_approval_details,
                  testimonial_video_duration: testimonial_video_duration,
                  social_media: main_social_media,
                  campaign_token: campaign_token,
                  brandlogin_unique_token: brandlogin_unique_token,
                  cover_image_edit: cover_image_edit
                }
                dispatch(brandCampaignUpdate(mainData, navigate, submitButton, toastId))
                console.log("Testimonial: ", mainData)
              } else {
                toast.error("Please check all validate fields should be fill")
              }
            }
          } else {
            toast.error("Please check all validate fields should be fill")
          }
        } else {
          if (draft_upload_type == 1) {
            const old_name = getCampaignDetailsData ? getCampaignDetailsData.campaign_name : ""

            const mainData = {
              name: name,
              old_name: old_name,
              campObjective: campObjective,
              campType: camp_type,
              campaign_image: afterUploadicon.imageObj,
              image_name: afterUploadicon.filename,
              calender_select: calender_select_value,
              dos: dos,
              dont: dont,
              // additionals: additionals,
              interests: interestsValues,
              budget: budget,
              revuerlimit: revuerlimit,
              campaign_post_status: campaign_post_status,
              task_visiable: task_visiable,
              testimonial_buy_product_details: testimonial_buy_product_details,
              testimonial_product_link: testimonial_product_link,
              testimonial_review_details: testimonial_review_details,
              testimonial_buy_image: testimonial_buy_image,
              testimonial_product_image: testimonial_product_image,
              testimonial_draft_upload: testimonial_draft_upload,
              draft_upload_type: draft_upload_type,
              testimonial_draft_video_upload: testimonial_draft_video_upload,
              testimonial_publish_approval_details: testimonial_publish_approval_details,
              testimonial_video_duration: testimonial_video_duration,
              social_media: main_social_media,
              campaign_token: campaign_token,
              brandlogin_unique_token: brandlogin_unique_token,
              cover_image_edit: cover_image_edit
            }
            dispatch(brandCampaignUpdate(mainData, navigate, submitButton, toastId))
            console.log("Testimonial: ", mainData)
          } else {
            if (testimonial_video_duration != "") {
              const old_name = getCampaignDetailsData ? getCampaignDetailsData.campaign_name : ""

              const mainData = {
                name: name,
                old_name: old_name,
                campObjective: campObjective,
                campType: camp_type,
                campaign_image: afterUploadicon.imageObj,
                image_name: afterUploadicon.filename,
                calender_select: calender_select_value,
                dos: dos,
                dont: dont,
                // additionals: additionals,
                interests: interestsValues,
                budget: budget,
                revuerlimit: revuerlimit,
                campaign_post_status: campaign_post_status,
                task_visiable: task_visiable,
                testimonial_buy_product_details: testimonial_buy_product_details,
                testimonial_product_link: testimonial_product_link,
                testimonial_review_details: testimonial_review_details,
                testimonial_buy_image: testimonial_buy_image,
                testimonial_product_image: testimonial_product_image,
                testimonial_draft_upload: testimonial_draft_upload,
                draft_upload_type: draft_upload_type,
                testimonial_draft_video_upload: testimonial_draft_video_upload,
                testimonial_publish_approval_details: testimonial_publish_approval_details,
                testimonial_video_duration: testimonial_video_duration,
                social_media: main_social_media,
                campaign_token: campaign_token,
                brandlogin_unique_token: brandlogin_unique_token,
                cover_image_edit: cover_image_edit
              }
              dispatch(brandCampaignUpdate(mainData, navigate, submitButton, toastId))
              console.log("Testimonial: ", mainData)
            } else {
              toast.error("Please check all validate fields should be fill")
            }
          }
        }
      }
      else {
        toast.error("Please check all validate fields should be fill")
      }


    } else if (camp_type == 4) {
      if (name.trim() != "" && name.length > 2 && campObjective.trim() != "" && campObjective.length > 20 && calender_select_value != "" && budget.trim() != "" && budget > 1 && revuerlimit != "" && interestsValues.length > 0 && sampling_form_task_type != undefined && sampling_reveive_product_sample != "" && sampling_reveive_product_sample.length > 20) {
        if (sampling_form_task_type == 1) {
          if (samplingAfterUploadicon.imageSrc != '') {

            const old_name = getCampaignDetailsData ? getCampaignDetailsData.campaign_name : ""

            const mainData = {
              name: name,
              old_name: old_name,
              campObjective: campObjective,
              campType: camp_type,
              campaign_image: afterUploadicon.imageObj,
              image_name: afterUploadicon.filename,
              calender_select: calender_select_value,
              dos: dos,
              dont: dont,
              // additionals: additionals,
              interests: interestsValues,
              budget: budget,
              revuerlimit: revuerlimit,
              campaign_post_status: campaign_post_status,
              sampling_image: samplingAfterUploadicon.imageObj,
              sampling_image_name: samplingAfterUploadicon.filename,
              sampling_reveive_product_sample: sampling_reveive_product_sample,
              sampling_receive_form_link: sampling_receive_form_link,
              sampling_form_task_type: sampling_form_task_type,
              sampling_form_link: sampling_form_link,
              sampling_product_image: sampling_product_image,
              campaign_token: campaign_token,
              brandlogin_unique_token: brandlogin_unique_token,
              cover_image_edit: cover_image_edit
            }
            dispatch(brandCampaignUpdate(mainData, navigate, submitButton, toastId))
          } else {
            toast.error("Please check all validate fields should be fill")
          }
        } else {
          if (sampling_form_link != "") {
            const old_name = getCampaignDetailsData ? getCampaignDetailsData.campaign_name : ""

            const mainData = {
              name: name,
              old_name: old_name,
              campObjective: campObjective,
              campType: camp_type,
              campaign_image: afterUploadicon.imageObj,
              image_name: afterUploadicon.filename,
              calender_select: calender_select_value,
              dos: dos,
              dont: dont,
              // additionals: additionals,
              interests: interestsValues,
              budget: budget,
              revuerlimit: revuerlimit,
              campaign_post_status: campaign_post_status,
              sampling_image: samplingAfterUploadicon.imageObj,
              sampling_image_name: samplingAfterUploadicon.filename,
              sampling_reveive_product_sample: sampling_reveive_product_sample,
              sampling_receive_form_link: sampling_receive_form_link,
              sampling_form_task_type: sampling_form_task_type,
              sampling_form_link: sampling_form_link,
              sampling_product_image: sampling_product_image,
              campaign_token: campaign_token,
              brandlogin_unique_token: brandlogin_unique_token,
              cover_image_edit: cover_image_edit
            }
            dispatch(brandCampaignUpdate(mainData, navigate, submitButton, toastId))
          } else {
            toast.error("Please check all validate fields should be fill")
          }
        }
      } else {
        toast.error("Please check all validate fields should be fill")
      }
    } else if (camp_type == 5) {

      if (name.trim() != "" && name.length > 2 && campObjective.trim() != "" && campObjective.length > 20 && calender_select_value != "" && budget.trim() != "" && budget > 1 && revuerlimit != "" && interestsValues.length > 0 && survey_form_task_type != undefined) {

        if (survey_form_task_type == 1) {
          if (surveyAfterUploadicon.imageSrc != '') {

            const old_name = getCampaignDetailsData ? getCampaignDetailsData.campaign_name : ""

            const mainData = {
              name: name,
              old_name: old_name,
              campObjective: campObjective,
              campType: camp_type,
              campaign_image: afterUploadicon.imageObj,
              image_name: afterUploadicon.filename,
              calender_select: calender_select_value,
              dos: dos,
              dont: dont,
              // additionals: additionals,
              interests: interestsValues,
              budget: budget,
              revuerlimit: revuerlimit,
              campaign_post_status: campaign_post_status,
              survey_image: surveyAfterUploadicon.imageObj,
              survey_image_name: surveyAfterUploadicon.filename,
              survey_form_task_type: survey_form_task_type,
              survey_form_link: survey_form_link,
              campaign_token: campaign_token,
              brandlogin_unique_token: brandlogin_unique_token,
              cover_image_edit: cover_image_edit
            }
            dispatch(brandCampaignUpdate(mainData, navigate, submitButton, toastId))
          } else {
            toast.error("Please check all validate fields should be fill")
          }
        } else {
          if (survey_form_link != "") {

            const old_name = getCampaignDetailsData ? getCampaignDetailsData.campaign_name : ""

            const mainData = {
              name: name,
              old_name: old_name,
              campObjective: campObjective,
              campType: camp_type,
              campaign_image: afterUploadicon.imageObj,
              image_name: afterUploadicon.filename,
              calender_select: calender_select_value,
              dos: dos,
              dont: dont,
              // additionals: additionals,
              interests: interestsValues,
              budget: budget,
              revuerlimit: revuerlimit,
              campaign_post_status: campaign_post_status,
              survey_image: surveyAfterUploadicon.imageObj,
              survey_image_name: surveyAfterUploadicon.filename,
              survey_form_task_type: survey_form_task_type,
              survey_form_link: survey_form_link,
              campaign_token: campaign_token,
              brandlogin_unique_token: brandlogin_unique_token,
              cover_image_edit: cover_image_edit
            }
            dispatch(brandCampaignUpdate(mainData, navigate, submitButton, toastId))
          } else {
            toast.error("Please check all validate fields should be fill")
          }
        }
      } else {
        toast.error("Please check all validate fields should be fill")
      }

    } else if (camp_type == 6) {

    } else if (camp_type == 7) {
      if (name.trim() != "" && name.length > 2 && campObjective.trim() != "" && campObjective.length > 20 && calender_select_value != "" && budget.trim() != "" && budget > 1 && revuerlimit != "" && interestsValues.length > 0 && socialValues.length > 0 && influencer_script_approval.trim() != "" && influencer_script_approval.length > 20 && influencer_draft_upload.trim() != "" && influencer_draft_upload.length > 20 && influencer_publish_details.trim() != "" && influencer_publish_details.length > 20 && influencer_video_duration != "") {
        if (influencer_task_visiable == 1) {
          if (influencer_buy_product_details.trim() != "" && influencer_buy_product_details.length > 20 && influencer_product_link.trim() != "" && influencer_review_details.trim() != "" && influencer_review_details.length > 20) {
            const old_name = getCampaignDetailsData ? getCampaignDetailsData.campaign_name : ""

            const mainData = {
              name: name,
              old_name: old_name,
              campObjective: campObjective,
              campType: camp_type,
              campaign_image: afterUploadicon.imageObj,
              image_name: afterUploadicon.filename,
              calender_select: calender_select_value,
              dos: dos,
              dont: dont,
              // additionals: additionals,
              interests: interestsValues,
              budget: budget,
              revuerlimit: revuerlimit,
              campaign_post_status: campaign_post_status,
              influencer_task_visiable: influencer_task_visiable,
              influencer_buy_product_details: influencer_buy_product_details,
              influencer_product_link: influencer_product_link,
              influencer_review_details: influencer_review_details,
              influencer_buy_product_image: influencer_buy_product_image,
              influencer_receive_product_image: influencer_receive_product_image,
              influencer_script_approval: influencer_script_approval,
              influencer_draft_upload: influencer_draft_upload,
              influencer_publish_details: influencer_publish_details,
              influencer_publish_video: influencer_publish_video,
              influencer_video_duration: influencer_video_duration,
              influencer_draft_upload_image: influencer_draft_upload_image,
              social_media: main_social_media,
              campaign_token: campaign_token,
              brandlogin_unique_token: brandlogin_unique_token,
              cover_image_edit: cover_image_edit
            }
            dispatch(brandCampaignUpdate(mainData, navigate, submitButton, toastId))
            console.log("Influencer: ", mainData)
          } else {
            toast.error("Please check all validate fields should be fill")
          }
        } else {
          const old_name = getCampaignDetailsData ? getCampaignDetailsData.campaign_name : ""

          const mainData = {
            name: name,
            old_name: old_name,
            campObjective: campObjective,
            campType: camp_type,
            campaign_image: afterUploadicon.imageObj,
            image_name: afterUploadicon.filename,
            calender_select: calender_select_value,
            dos: dos,
            dont: dont,
            // additionals: additionals,
            interests: interestsValues,
            budget: budget,
            revuerlimit: revuerlimit,
            campaign_post_status: campaign_post_status,
            influencer_task_visiable: influencer_task_visiable,
            influencer_buy_product_details: influencer_buy_product_details,
            influencer_product_link: influencer_product_link,
            influencer_review_details: influencer_review_details,
            influencer_buy_product_image: influencer_buy_product_image,
            influencer_receive_product_image: influencer_receive_product_image,
            influencer_script_approval: influencer_script_approval,
            influencer_draft_upload: influencer_draft_upload,
            influencer_publish_details: influencer_publish_details,
            influencer_publish_video: influencer_publish_video,
            influencer_video_duration: influencer_video_duration,
            influencer_draft_upload_image: influencer_draft_upload_image,
            social_media: main_social_media,
            campaign_token: campaign_token,
            brandlogin_unique_token: brandlogin_unique_token,
            cover_image_edit: cover_image_edit
          }
          dispatch(brandCampaignUpdate(mainData, navigate, submitButton, toastId))
          console.log("Influencer: ", mainData)
        }
      } else {
        toast.error("Please check all validate fields should be fill")
      }
    } else {
      toast.error("Something is wrong...Please refresh page...")
    }

  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setshowDateRange(false)
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    document.getElementsByClassName("select-selected").length == 0 &&
      customSelect();
    dispatch(getCampaignDetails({ campaign_token: campaign_token, brandlogin_unique_token: brandlogin_unique_token }, navigate))
    dispatch(getCamapignType())
    dispatch(getRevuerLimit())
    dispatch(getInterests())
    dispatch(getVideoDuration())
    { console.log("first", getCampaignDetailsData?.start_date) }
  }, []);

  const imageUploader = (e) => {
    if (Math.floor(e.target.files[0].size / 1024) > 50) {
      toast.error("Image size is to large only 50KB is allow")
      return
    } else {
      const myImageArray = e.target.files[0].name.split(".");
      const imageExtension = myImageArray[1].toLowerCase()

      if (imageExtension != 'jpg' && imageExtension != 'jpeg' && imageExtension != 'png') {
        toast.error("Invalid file type (only .jpeg,.jpg,.png allowed)");
        return;
      } else {
        setCoverImageEditValue(2)
        setImageUpload(true)
        const blobURL = URL.createObjectURL(e.target.files[0])
        console.log("blobURL", blobURL)
        const file = e.target.files[0],
          reader = new FileReader();
        reader.onloadend = function () {
          setAfterUploadicon({ filename: file.name, imageSrc: blobURL, imageObj: reader.result.replace(/^data:.+;base64,/, '') })
        };
        reader.readAsDataURL(file);
        if (blobURL.complete) {
          URL.revokeObjectURL(blobURL);
        }
      }
    }

  }
  const imageRemover = () => {
    setCoverImageEditValue(1)
    setImageUpload(false)
    setAfterUploadicon({ filename: '', imageSrc: "", imageObj: {} })
  }

  const samplingImageUploader = (e) => {
    if (Math.floor(e.target.files[0].size / 1024) > 50) {
      toast.error("Image size is to large only 50KB is allow")
      return
    } else {
      const myImageArray = e.target.files[0].name.split(".");
      const imageExtension = myImageArray[1].toLowerCase()

      if (imageExtension != 'docx' && imageExtension != 'doc') {
        toast.error("Invalid file type (only .docx allowed)");
        return;
      } else {
        setSamplingImageUpload(true)
        const blobURL = URL.createObjectURL(e.target.files[0])
        const file = e.target.files[0],
          reader = new FileReader();
        reader.onloadend = function () {
          setSamplingAfterUploadicon({ filename: file.name, imageSrc: "https://revueradmin.mishry.com/uploads/campaigns/document.png", imageObj: reader.result.replace(/^data:.+;base64,/, '') })
        };

        reader.readAsDataURL(file);
        if (blobURL.complete) {
          URL.revokeObjectURL(blobURL);
        }
      }
    }
  }
  const samplingImageRemover = () => {
    setSamplingImageUpload(false)
    setSamplingAfterUploadicon({ filename: '', imageSrc: "", imageObj: {} })
  }

  const surveyImageUploader = (e) => {
    if (Math.floor(e.target.files[0].size / 1024) > 50) {
      toast.error("Image size is to large only 50KB is allow")
      return
    } else {
      const myImageArray = e.target.files[0].name.split(".");
      const imageExtension = myImageArray[1].toLowerCase()

      if (imageExtension != 'docx' && imageExtension != 'doc') {
        toast.error("Invalid file type (only .docx allowed)");
        return;
      } else {
        setSurveyImageUpload(true)
        const blobURL = URL.createObjectURL(e.target.files[0])

        const file = e.target.files[0],
          reader = new FileReader();
        reader.onloadend = function () {
          setSurveyAfterUploadicon({ filename: file.name, imageSrc: "https://revueradmin.mishry.com/uploads/campaigns/document.png", imageObj: reader.result.replace(/^data:.+;base64,/, '') })
        };

        reader.readAsDataURL(file);
        if (blobURL.complete) {
          URL.revokeObjectURL(blobURL);
        }
      }
    }
  }
  const surveyImageRemover = () => {
    setSurveyImageUpload(false)
    setSurveyAfterUploadicon({ filename: '', imageSrc: "", imageObj: {} })
  }

  return (
    <>

      <section className="pl-0 md:pl-60 lg:pl-[15rem] lg:pt-0 md:pt-0 pt-14">
        <Header welcome="Campaign " extra="Update Campaign " showCampaign={false} />

        <form onSubmit={handleSubmit((data, event) => onSubmit(data, event))} className="theme-form ng-untouched ng-pristine ng-valid" method="post">

          <div className="px-4 sm:px-8">
            <div className="mb-10 mt-8 sm:mt-0">
              <h5 className="text-xl tracking-wide font-semibold lable-color mb-3">
                Campaign Details<span className="text-[#E74C3C]">*</span>
              </h5>
              <div className="md:block lg:flex block box-shadow-1 rounded-2xl pt-8">
                <div className="flex-initial w-full md:full lg:w-7/12 bac-1 py-0 px-3 sm:px-8 pr-4 md:py-5 lg:py-0 mr-2 mb-0 md:mb-2 lg:mb-5">
                  <label className="mt-6 lable-color text-sm tracking-wide font-semibold">
                    Campaign Name{" "}
                  </label>
                  <div className="block mb-4 relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      {...register("name")}
                      defaultValue={getCampaignDetailsData ? getCampaignDetailsData.campaign_name : ""}
                      onKeyUp={(event) => campaignNameValid(event)}
                      placeholder="Campaign Name"
                      required=""
                      className="box-shadow-3 mb-1 h-12 px-2 rounded-lg border border-[#95A5A6] bg-white w-full mt-2 text-sm focus:outline-none"
                    />
                    <div className="absolute top-5 right-4">
                      <img src={siranimg} alt="siranimg" className="w-7" />
                    </div>
                    {nameValidateError && <label className="error">{nameValidateError}</label>}
                  </div>


                  <input type="hidden" name="cover_image_edit" value={coverImageEditValue} {...register("cover_image_edit")} id="cover_image_edit" />


                  <label className="mt-6 lable-color text-sm tracking-wide font-semibold">
                    Campaign Objective
                  </label>
                  <div className="block relative">
                    <textarea
                      className="resize-none mb-5 h-20 py-3 px-2 box-shadow-3 rounded-lg border border-[#95A5A6] bg-white w-full mt-2 text-sm focus:outline-none"
                      name="campObjective"
                      {...register("campObjective")}
                      id="campObjective"
                      defaultValue={getCampaignDetailsData ? getCampaignDetailsData.campaign_obj : ""}
                      onKeyUp={(event) => campaignObjectiveValid(event)}
                      rows="3"
                      placeholder="Write From here"
                    ></textarea>
                    {campObjectiveValidateError && <label className="error">{campObjectiveValidateError}</label>}
                  </div>

                  <div className="sm:flex block w-full social-break float-right mb-5 sm:mb-2">
                    <div className="flex-initial sub-width-2 w-full sm:w-6/12 mr-5">
                      <label className="lable-color text-sm tracking-wide font-semibold">
                        Campaign Type
                      </label>
                      <div className="block relative">
                        <select disabled id="campType" name="campType" {...register("campType")}
                          className="mt-2 form-select appearance-none block w-full px-3 h-12 text-sm font-normal lable-color bg-white bg-clip-padding bg-no-repeat rounded-lg border border-[#95A5A6] transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-black focus:outline-none" aria-label="Default select example">
                          <option value="">Select Campaign Type</option>
                          <option value=""> Campaign Type</option>
                          {campaignTypeList.map((item, index) => {
                            return (
                              <option key={item._id} value={item._id + '&&' + item.cam_type} selected={getCampaignDetailsData ? getCampaignDetailsData.camp_type_id == item._id ? "selected" : "" : ""} >{item.name}</option>
                            )
                          })}

                        </select>
                        <img
                          src={selecticon}
                          alt="selecticon"
                          className="w-3 h-2.5 absolute top-[20px] right-2.5  block sm:mr-2 sm:m-none mx-auto"
                        />
                        {campTypeValidateError && <label className="error">{campTypeValidateError}</label>}
                      </div>
                    </div>

                    <div className="flex-initial sub-width-2 w-full sm:w-6/12" ref={ref}>
                      <label className="lable-color text-sm tracking-wide font-semibold">
                        Campaign Date Range
                      </label>
                      <div className="block relative">
                        <input
                          type="text"
                          id="calender_select"
                          name="calender_select"
                          {...register("calender_select")}
                          value={
                            getCampaignDetailsData ? changeDateFormate(getCampaignDetailsData?.start_date) + " to " + changeDateFormate(getCampaignDetailsData?.last_date) : changeDateFormate(state[0].startDate) + " to " + changeDateFormate(state[0].endDate)
                          }
                          onClick={() => setshowDateRange(!showDateRange)}
                          placeholder="dd/mm/yyyy  to  dd/mm/yyyy "
                          required=""
                          className="box-shadow-3 h-12 px-2 rounded-lg border border-[#95A5A6] bg-white w-full mt-2 mb-1 lable-color font-medium text-sm pr-10 focus:outline-none"
                        />
                        {showDateRange &&
                          <DateRange
                            editableDateInputs={true}
                            onChange={item => setState([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={
                              getCampaignDetailsData ?
                                [
                                  {
                                    startDate: new Date(getCampaignDetailsData?.start_date.split("/")[1] + "-" + getCampaignDetailsData?.start_date.split("/")[0] + "-" + getCampaignDetailsData?.start_date.split("/")[2]),
                                    endDate: new Date(getCampaignDetailsData?.last_date.split("/")[1] + "-" + getCampaignDetailsData?.last_date.split("/")[0] + "-" + getCampaignDetailsData?.last_date.split("/")[2]),
                                    key: 'selection'
                                  }
                                ] :
                                state
                            }
                            showDateDisplay={false}
                            className="box-shadow-1 rounded-xl z-10 absolute top-16 left-0"
                            rangeColors={"#000"}
                          />
                        }
                        <div className="absolute top-[1.4rem] right-4">
                          <img
                            src={celendericon}
                            alt="celendericon"
                            className="w-5"
                          />
                        </div>
                        {selectDateValidateError && <label className="error">{selectDateValidateError}</label>}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex-initial w-full md:11/12 lg:w-6/12 bac-1 py-5 px-3 sm:px-8 lg::px-2 md:py-5 lg:py-0 mr-5 mb-0 md:mb-2 sm:mb-0">
                  <h4 className="text-sm tracking-wide font-semibold mb-3 sm:mb-1">
                    Cover Image<span className="text-[#E74C3C]">*</span>
                  </h4>
                  <div className="block relative mb-5">
                    {!imageUpload ?
                      <div className="flex w-full justify-center bg-grey-lighter">
                        <label className={`w-full flex flex-col items-center px-4 py-5 box-shadow-3 ${campaignImageImageValidateError ? "border-[#d95c5c]" : "border-[#95a5a6]"} text-blue rounded-lg border-2 border-dashed tracking-wide  border-blue cursor-pointer`}>
                          <img src={`${process.env.CAMPAIGN_IMAGE_URL}/${getCampaignDetailsData?.image}`} alt="uploadicon" className="h-213 w-full object-fill" />
                          <span className="mt-4 text-base leading-normal lable-color">
                            Drag & Drop or browse to choose a file
                          </span>
                          <input type="file" onChange={(e) => imageUploader(e)} className="hidden box-shadow-3" />
                        </label>
                        <input id="campaign_image" type="hidden" />
                        {campaignImageImageValidateError && <label className="error">{campaignImageImageValidateError}</label>}
                      </div>
                      :
                      <div className="relative flex w-full justify-center bg-grey-lighter mt-2">
                        <img src={afterUploadicon.imageSrc} className="h-[9.3rem] w-[34.5rem] object-cover" alt="uploaded" />
                        <div onClick={imageRemover} className="cursor-pointer absolute top-[-13px] right-0 bac-6 w-8 h-8 rounded-full flex justify-center items-center">
                          <i className="text-lg text-white fa-solid fa-xmark"></i>
                        </div>
                      </div>
                    }
                  </div>

                </div>
              </div>
            </div>


            {
              camp_type == 1 ?
                campaignTaskData.map((proitem, index) => {
                  return (
                    <>
                      {
                        proitem.task_number == 1 ?
                          <>

                            <div className="mb-10">
                              <h5 className="text-lg tracking-wide font-semibold lable-color mb-3">
                                Task 1: Buy<span className="text-[#E74C3C]">*</span>
                              </h5>
                              <div className="box-shadow-1 rounded-2xl mb-6 sm:mb-0 pb-5 py-2 sm:py-2 px-3 sm:px-4 sm:px-4">
                                <div className="md:block lg:flex block  pt-3 sm:pt-8  relative">
                                  <div className="flex-initial w-full md:11/12 lg:w-7/12 bac-1 py-2 sm:py-12 px-2 pr-4 md:py-5 lg:py-0 mr-2 mb-0 md:mb-2 lg:mb-5">
                                    <label className="mt-10 mb-2 lable-color text-sm tracking-wide font-semibold">
                                      Product Details
                                    </label>
                                    <div className="block mb-2 relative">
                                      <textarea
                                        className="resize-none mb-2 h-32 py-3 px-2 rounded-lg border box-shadow-3 border-[#95A5A6] bg-white w-full mt-2 text-sm placeholder-[#95A5A6] focus:outline-none"
                                        id="product_buy_product_details"
                                        name="product_buy_product_details"
                                        {...register("product_buy_product_details")}
                                        rows="3"
                                        placeholder="Product Details"
                                        defaultValue={proitem.details}
                                      ></textarea>
                                      {productBuyDetailsValidateError && <label className="error">{productBuyDetailsValidateError}</label>}
                                    </div>
                                  </div>

                                  <div className="flex-initial w-full md:11/12 lg:w-6/12 bac-1 py-2 sm:py-12 px-4 sm:px-2 pr-4 md:py-5 lg:py-0 mb-0 md:mb-2 lg:mb-5">
                                    <div className="md:block lg:flex block mb-1 rounded-lg relative">
                                      <div className="flex-initial w-full md:11/12 lg:w-12/12 bac-1 mr-6">
                                        <label className="mt-6 mb-4 lable-color text-sm tracking-wide font-semibold">
                                          Product Link{" "}
                                        </label>
                                        <div className="block mb-2 relative">
                                          <input
                                            type="text"
                                            id="product_buy_product_link"
                                            name="product_buy_product_link"
                                            placeholder="http:/www.amazon.com/product"
                                            required=""
                                            {...register("product_buy_product_link")}
                                            defaultValue={proitem.link}
                                            className="box-shadow-3 mb-3 h-12 px-4 rounded-lg border border-[#95A5A6] bg-white lable-color w-full mt-2  text-sm placeholder-[#001540] pr-12 focus:outline-none"
                                          />
                                          <div className="absolute top-[1.4rem] right-4">
                                            <img
                                              src={linkicon} alt="linkicon"
                                              className="w-4"
                                            />
                                          </div>
                                          {productBuyLinkValidateError && <label className="error">{productBuyLinkValidateError}</label>}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="form-check form-check-inline flex items-center mr-5 mb-2 sm:mb-5">
                                  <input
                                    defaultChecked={proitem.screen_shot == 1 ? checked : !checked.buy}

                                    onChange={() => setChecked({ buy: !checked.buy })}
                                    className="form-check-input appearance-none h-4 w-4 border border-black rounded bg-white checked:bg-[#FCB43C] checked:border-none focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                    type="checkbox"
                                    id="product_buy_image"
                                    value="1"
                                    name="product_buy_image"
                                    {...register("product_buy_image")}
                                  />
                                  <label
                                    className="form-check-label text-[9px] font-medium inline-block text-black sm:text-sm"
                                    htmlFor="product_buy_image"
                                  >
                                    Ask revuer to upload a purchased product screenshot.
                                  </label>
                                </div>
                              </div>
                            </div>
                          </>
                          :
                          proitem.task_number == 2 ?
                            <>
                              <div className="mb-10">
                                <h5 className="text-lg tracking-wide font-semibold lable-color mb-3">
                                  Task 2: Review<span className="text-[#E74C3C]">*</span>
                                </h5>
                                <div className="md:block lg:flex block box-shadow-1 rounded-2xl pt-1 sm:pt-7 relative">
                                  <div className="flex-initial w-full bac-1 py-5 sm:py-8 px-3 sm:px-8 pr-4 md:py-5 lg:py-0 mr-2 mb-0 md:mb-2 lg:mb-5">
                                    <label className="mt-10 mb-2 lable-color text-sm tracking-wide font-semibold">
                                      Review Details
                                    </label>
                                    <div className="block mb-2 relative">
                                      <textarea
                                        className="resize-none box-shadow-3 mb-2 h-28 pl-5 pr-14 py-3 px-2 rounded-lg border border-[#95A5A6] bg-white w-full mt-2  text-sm placeholder-[#001540] focus:outline-none"
                                        rows="3"
                                        id="product_review_details"
                                        name="product_review_details"
                                        {...register("product_review_details")}
                                        placeholder="Review Details"
                                        defaultValue={proitem.details}
                                      ></textarea>
                                      {productReviewValidateError && <label className="error">{productReviewValidateError}</label>}
                                    </div>
                                    <div className="form-check form-check-inline flex items-center mr-5 mb-3 sm:mb-8 lg:mb-3">
                                      <input
                                        defaultChecked={proitem.screen_shot == 1 ? checked : !checked.review}
                                        onChange={() => setChecked({ review: !checked.review })}
                                        className="form-check-input appearance-none h-4 w-4 border border-black rounded bg-white checked:bg-[#FCB43C] checked:border-none focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                        type="checkbox"
                                        id="product_review_image"
                                        value="1"
                                        name="product_review_image"
                                        {...register('product_review_image')}
                                      />
                                      <label
                                        className="form-check-label text-[9px] font-medium inline-block text-black sm:text-sm"
                                        htmlFor="product_review_image"
                                      >
                                        Ask revuer to upload a review screenshot.
                                      </label>
                                    </div>
                                  </div>

                                </div>
                              </div>
                            </>
                            :
                            ""
                      }
                    </>
                  )
                })
                :
                camp_type == 2 ?

                  getCampaignDetailsData
                    ?
                    getCampaignDetailsData.task_visiable == 1
                      ?
                      campaignTaskData.map((proitem, index) => {
                        return (
                          <>
                            {
                              proitem.task_number == 3 ?
                                <>
                                  <div className="mb-10">
                                    <div className=" box-shadow-1 rounded-2xl pt-3 sm:pt-7 mb-6 sm:mb-8 px-4 sm:px-4 relative">
                                      <label className="font-bold">Select Visual and Video type</label>

                                      <div className="block sm:flex socila-mb socila-mb1 mt-4">
                                        <div className="flex items-center mr-3 mb-0">
                                          <input
                                            id="buy_visual_visiable"
                                            type="radio"
                                            name="visual_video_task_visiable"
                                            className="hidden"
                                            value="1"
                                            defaultChecked={getCampaignDetailsData ? getCampaignDetailsData.task_visiable == 1 ? checked : "" : ""}
                                            onClick={(event) => displayVisualVideoTaskVisiable(event)}
                                            {...register('visual_video_task_visiable')}
                                          />
                                          <label
                                            htmlFor="buy_visual_visiable"
                                            className="flex items-center cursor-pointer  ml-2 text-[11px] sm:text-xs font-medium lable-color"
                                          >
                                            <span className="w-4 h-4 inline-block mr-1 text-xs rounded-full border border-grey"></span>
                                            Visual
                                          </label>
                                        </div>

                                        <div className="flex items-center mr-3 mb-0">
                                          <input
                                            id="buy_video_visiable"
                                            type="radio"
                                            name="visual_video_task_visiable"
                                            className="hidden"
                                            value="2"
                                            defaultChecked={getCampaignDetailsData ? getCampaignDetailsData.task_visiable == 2 ? checked : "" : ""}
                                            onClick={(event) => displayVisualVideoTaskVisiable(event)}
                                            {...register('visual_video_task_visiable')}
                                          />
                                          <label
                                            htmlFor="buy_video_visiable"
                                            className="flex items-center cursor-pointer  ml-2 text-[11px] sm:text-xs font-medium lable-color"
                                          >
                                            <span className="w-4 h-4 inline-block mr-1 rounded-full border border-grey"></span>
                                            Video
                                          </label>
                                        </div>
                                      </div>

                                    </div>



                                    <h5 className="text-lg tracking-wide font-semibold lable-color mb-4">Task 1: Buy<span
                                      className="text-[#E74C3C]">*</span></h5>
                                    <div className="md:block lg:flex block box-shadow-1 rounded-2xl pt-3 sm:pt-7 mb-6 sm:mb-8 px-4 sm:px-4 relative">
                                      <div
                                        className="flex-initial w-full md:11/12 lg:w-7/12 bac-1 py-2 sm:py-12 px-2 pr-4 md:py-5 lg:py-0 mr-2 mb-0 md:mb-2 lg:mb-5">
                                        <label className="mt-10 mb-2 lable-color text-sm tracking-wide font-semibold">Product
                                          Details</label>
                                        <div className="block mb-2 relative">
                                          <textarea
                                            className="resize-none mb-2 h-32 py-3 box-shadow-3 px-2 rounded-lg border border-[#95A5A6] bg-white w-full mt-2 text-sm placeholder-[#95A5A6] focus:outline-none"
                                            name="video_buy_product_details"
                                            id="video_buy_product_details"
                                            {...register("video_buy_product_details")}
                                            defaultValue={proitem.details}
                                            rows="3" placeholder="Write from here"></textarea>
                                          {videoBuyProductDetailsValidateError && <label className="error">{videoBuyProductDetailsValidateError}</label>}
                                        </div>

                                        <div className="form-check form-check-inline flex items-center mr-5 mb-2 sm:mb-5">
                                          <input
                                            defaultChecked={proitem.screen_shot == 1 ? checked : !checked.videobuy}
                                            onChange={() => setChecked({ videobuy: !checked.videobuy })}
                                            className="form-check-input appearance-none h-4 w-4 border border-black rounded bg-white
checked:bg-[#FCB43C] checked:border-none focus:outline-none transition duration-200
align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                            type="checkbox"
                                            id="video_buy_image"
                                            name="video_buy_image"
                                            {...register("video_buy_image")}
                                            value="1"
                                          />
                                          <label
                                            className="form-check-label text-[9px] font-medium inline-block text-black sm:text-sm"
                                            htmlFor="video_buy_image">Ask revuer to upload a product images.</label>
                                        </div>
                                      </div>

                                      <div
                                        className="flex-initial w-full md:11/12 lg:w-6/12 bac-1 py-2 sm:py-12 px-4 sm:px-2 pr-4 md:py-5 lg:py-0 mb-0 md:mb-2 lg:mb-5">
                                        <div className="md:block lg:flex block mb-1 rounded-lg relative">
                                          <div className="flex-initial w-full md:11/12 lg:w-12/12 bac-1 mr-3">
                                            <label className="mt-6 mb-4 lable-color text-sm tracking-wide font-semibold">
                                              Product Link </label>
                                            <div className="block mb-2 relative">
                                              <input defaultValue={proitem.link} type="text" id="video_buy_product_link" name="video_buy_product_link" {...register('video_buy_product_link')} placeholder="Paste link here" required=""
                                                className="box-shadow-3 mb-3 h-10 px-4 rounded-lg border border-[#95A5A6] bg-white lable-color w-full mt-2 text-sm placeholder-[#95A5A6] focus:outline-none" />
                                              <div className="absolute top-[1.2rem] right-4">
                                                <img src={linkicon} alt="linkicon" className="w-4" />
                                              </div>
                                              {videoBuyProductLinkValidateError && <label className="error">{videoBuyProductLinkValidateError}</label>}
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </>
                                :
                                proitem.task_number == 4 ?
                                  <>
                                    <div className="" id="visual_video_task_2_visiable">
                                      <div className="mb-10">
                                        <h5 className="text-lg tracking-wide font-semibold lable-color mb-3">Task 2: Review<span
                                          className="text-[#E74C3C]">*</span></h5>
                                        <div className="md:block lg:flex block box-shadow-1 rounded-2xl pt-1 sm:pt-7 relative">
                                          <div
                                            className="flex-initial w-full md:11/12 lg:w-full bac-1 py-5 sm:py-12 px-8 pr-4 md:py-5 lg:py-0 mr-2 mb-0 md:mb-2 lg:mb-5">
                                            <label className="mt-10 mb-2 lable-color text-sm tracking-wide font-semibold"> Review
                                              Details</label>
                                            <div className="block mb-2 relative">
                                              <textarea
                                                className="resize-none mb-2 h-32 py-3 px-2 box-shadow-3 rounded-lg border border-[#95A5A6] bg-white w-full mt-2 text-sm placeholder-[#95A5A6] focus:outline-none"
                                                disabled={visualProductReviewDetailsDisabled}
                                                defaultValue={proitem.details}
                                                id="video_review_details" {...register("video_review_details")} name="video_review_details" rows="3" placeholder="Write from here"></textarea>
                                              {videoReviewDetailsValidateError && <label className="error">{videoReviewDetailsValidateError}</label>}
                                            </div>

                                            <div className="form-check form-check-inline flex items-center mr-5 mb-3  sm:mb-5">
                                              <input defaultChecked={proitem.screen_shot == 1 ? checked : !checked.videoreview} onChange={() => setChecked({ videoreview: !checked.videoreview })}
                                                className="form-check-input appearance-none h-4 w-4 border border-black rounded bg-white
                                  checked:bg-[#FCB43C] checked:border-none focus:outline-none transition duration-200
                                  align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                                type="checkbox"
                                                id="video_review_image"
                                                value="1"
                                                disabled={visualProductReviewImageDisabled}
                                                name="video_review_image"
                                                {...register('video_review_image')}
                                              />
                                              <label
                                                className="form-check-label text-[9px] font-medium inline-block text-black sm:text-sm"
                                                htmlFor="video_review_image">Ask revuer to upload a product images.</label>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    <div className="task-visiable-class" id="visual_video_task_3_visiable">
                                      <div className="mb-10">
                                        <h5 className="text-lg tracking-wide font-semibold lable-color mb-3">Task 3: Script Approval<span
                                          className="text-[#E74C3C]">*</span></h5>
                                        <div className="md:block lg:flex block box-shadow-1 rounded-2xl pt-1 sm:pt-7 relative">
                                          <div
                                            className="flex-initial w-full md:11/12 lg:w-full bac-1 py-5 sm:py-12 px-8 pr-4 md:py-5 lg:py-0 mr-2 mb-0 md:mb-2 lg:mb-5">
                                            <label className="mt-10 mb-2 lable-color text-sm tracking-wide font-semibold"> Script
                                              Details</label>
                                            <div className="block mb-2 relative">
                                              <textarea
                                                className="resize-none mb-2 h-32 py-3 px-2 box-shadow-3 rounded-lg border border-[#95A5A6] bg-white w-full mt-2 text-sm placeholder-[#95A5A6] focus:outline-none"
                                                disabled={visualScriptDetailsDisabled}
                                                id="video_script_approval" name="video_script_approval" {...register('video_script_approval')} rows="3" placeholder="Write from here"></textarea>
                                              {videoScriptApprovalValidateError && <label className="error">{videoScriptApprovalValidateError}</label>}
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    <div className="task-visiable-class" id="visual_video_task_4_visiable">
                                      <div className="mb-10">
                                        <h5 className="text-lg tracking-wide font-semibold lable-color mb-3">Task 4: Draft Upload<span
                                          className="text-[#E74C3C]">*</span></h5>
                                        <div className="md:block lg:flex block box-shadow-1 rounded-2xl pt-1 sm:pt-7 relative">
                                          <div
                                            className="flex-initial w-full md:11/12 lg:w-full bac-1 py-5 sm:py-12 px-8 pr-4 md:py-5 lg:py-0 mr-2 mb-0 md:mb-2 lg:mb-5">
                                            <label className="mt-10 mb-2 lable-color text-sm tracking-wide font-semibold">Draft upload
                                              Details</label>
                                            <div className="block mb-2 relative">
                                              <textarea
                                                className="resize-none mb-2 h-32 py-3 px-2 box-shadow-3 rounded-lg border border-[#95A5A6] bg-white w-full mt-2 text-sm placeholder-[#95A5A6] focus:outline-none"
                                                disabled={visualDraftDetailsDisabled}
                                                id="video_draft_upload" name="video_draft_upload" {...register('video_draft_upload')} rows="3" placeholder="Write from here"></textarea>
                                              {videoDraftUploadValidateError && <label className="error">{videoDraftUploadValidateError}</label>}
                                            </div>

                                            <div className="form-check form-check-inline flex items-center mr-5 mb-3 sm:mb-5">
                                              <input defaultValue={checked.videodraft} onChange={() => setChecked({ videodraft: !checked.videodraft })}
                                                className="form-check-input appearance-none h-4 w-4 border border-black rounded bg-white
                                  checked:bg-[#FCB43C] checked:border-none focus:outline-none transition duration-200
                                  align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                                type="checkbox"
                                                id="video_draft_image"
                                                value="1"
                                                disabled={visualDraftImageDisabled}
                                                name="video_draft_image"
                                                {...register('video_draft_image')}
                                              />
                                              <label
                                                className="form-check-label text-[9px] font-medium inline-block text-black sm:text-sm"
                                                htmlFor="video_draft_image">Ask revuer to upload a video.</label>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </>
                                  :
                                  proitem.task_number == 7 ?
                                    <>
                                      <div className="mb-10">
                                        <h5 className="text-lg tracking-wide font-semibold lable-color mb-3">Task 5: Publish upon
                                          Approval<span className="text-[#E74C3C]">*</span></h5>
                                        <div
                                          className="md:block lg:flex block box-shadow-1 rounded-2xl pt-1 sm:pt-7 pb-10 lg:pb-0 relative">
                                          <div
                                            className="flex-initial w-full md:11/12 lg:w-6/12 bac-1 py-5 sm:py-12 px-8 pr-4 md:py-5 lg:py-0 mr-2 mb-0 md:mb-2 lg:mb-5">
                                            <label className="mt-10 mb-2 lable-color text-base font-semibold">Publish Details</label>
                                            <div className="block mb-2 relative">
                                              <textarea
                                                className="resize-none mb-2 h-32 py-3 px-2 rounded-lg box-shadow-3 border border-[#95A5A6] bg-white w-full mt-2 text-sm placeholder-[#95A5A6] focus:outline-none"
                                                id="video_publish_approval" name="video_publish_approval" {...register('video_publish_approval')} rows="3"
                                                defaultValue={proitem.details} placeholder="Write from here"></textarea>
                                              {videoPublishApprovalValidateError && <label className="error">{videoPublishApprovalValidateError}</label>}
                                            </div>
                                          </div>
                                          <div id="visual_video_task_5_visiable"
                                            className="flex-initial w-full md:11/12 lg:w-6/12 bac-1 py-5 sm:py-12 px-2 pr-4 md:py-5 lg:py-0 mb-0 md:mb-2 lg:mb-5 task-visiable-class">
                                            <label className="mt-6 lable-color text-base font-semibold mb-2">Video Duration<span
                                              className="text-[#E74C3C]">*</span></label>
                                            <div className="block relative">
                                              <select id="visual_video_duration"
                                                name="visual_video_duration"
                                                disabled={visualVideoDurationDisabled}
                                                {...register("visual_video_duration")} className="mt-2 form-select appearance-none block w-full px-3 h-12 text-sm font-normal lable-color bg-white bg-clip-padding bg-no-repeat rounded-lg border border-[#95A5A6] transition ease-in-out m-2 focus:text-gray-700 focus:bg-white focus:border-black focus:outline-none" aria-label="Default select example focus:outline-none">
                                                {videoDurationList.map((item, index) => {
                                                  return (
                                                    <option key={item._id} value={item._id}>{item.name}</option>
                                                  )
                                                })}
                                              </select>
                                              <img src={selecticon} alt="selecticon"
                                                className="w-3 h-2.5 absolute top-[20px] right-2.5  block sm:mr-2 sm:m-none mx-auto" />
                                              {videoVisualDurationValidateError && <label className="error">{videoVisualDurationValidateError}</label>}
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </>
                                    :
                                    ""
                            }
                          </>
                        )
                      })
                      :
                      campaignTaskData.map((proitem, index) => {
                        return (
                          <>
                            {
                              proitem.task_number == 3 ?
                                <>
                                  <div className="mb-10">
                                    <div className=" box-shadow-1 rounded-2xl pt-3 sm:pt-7 mb-6 sm:mb-8 px-4 sm:px-4 relative">
                                      <label className="font-bold">Select Visual and Video type</label>

                                      <div className="block sm:flex socila-mb socila-mb1 mt-4">
                                        <div className="flex items-center mr-3 mb-0">
                                          <input
                                            id="buy_visual_visiable"
                                            type="radio"
                                            name="visual_video_task_visiable"
                                            className="hidden"
                                            value="1"
                                            defaultChecked={getCampaignDetailsData ? getCampaignDetailsData.task_visiable == 1 ? checked : "" : ""}
                                            onClick={(event) => displayVisualVideoTaskVisiable(event)}
                                            {...register('visual_video_task_visiable')}
                                          />
                                          <label
                                            htmlFor="buy_visual_visiable"
                                            className="flex items-center cursor-pointer  ml-2 text-[11px] sm:text-xs font-medium lable-color"
                                          >
                                            <span className="w-4 h-4 inline-block mr-1 text-xs rounded-full border border-grey"></span>
                                            Visual
                                          </label>
                                        </div>

                                        <div className="flex items-center mr-3 mb-0">
                                          <input
                                            id="buy_video_visiable"
                                            type="radio"
                                            name="visual_video_task_visiable"
                                            className="hidden"
                                            value="2"
                                            defaultChecked={getCampaignDetailsData ? getCampaignDetailsData.task_visiable == 2 ? checked : "" : ""}
                                            onClick={(event) => displayVisualVideoTaskVisiable(event)}
                                            {...register('visual_video_task_visiable')}
                                          />
                                          <label
                                            htmlFor="buy_video_visiable"
                                            className="flex items-center cursor-pointer  ml-2 text-[11px] sm:text-xs font-medium lable-color"
                                          >
                                            <span className="w-4 h-4 inline-block mr-1 rounded-full border border-grey"></span>
                                            Video
                                          </label>
                                        </div>
                                      </div>

                                    </div>



                                    <h5 className="text-lg tracking-wide font-semibold lable-color mb-4">Task 1: Buy<span
                                      className="text-[#E74C3C]">*</span></h5>
                                    <div className="md:block lg:flex block box-shadow-1 rounded-2xl pt-3 sm:pt-7 mb-6 sm:mb-8 px-4 sm:px-4 relative">
                                      <div
                                        className="flex-initial w-full md:11/12 lg:w-7/12 bac-1 py-2 sm:py-12 px-2 pr-4 md:py-5 lg:py-0 mr-2 mb-0 md:mb-2 lg:mb-5">
                                        <label className="mt-10 mb-2 lable-color text-sm tracking-wide font-semibold">Product
                                          Details</label>
                                        <div className="block mb-2 relative">
                                          <textarea
                                            className="resize-none mb-2 h-32 py-3 box-shadow-3 px-2 rounded-lg border border-[#95A5A6] bg-white w-full mt-2 text-sm placeholder-[#95A5A6] focus:outline-none"
                                            name="video_buy_product_details"
                                            id="video_buy_product_details"
                                            {...register("video_buy_product_details")}
                                            defaultValue={proitem.details}
                                            rows="3" placeholder="Write from here"></textarea>
                                          {videoBuyProductDetailsValidateError && <label className="error">{videoBuyProductDetailsValidateError}</label>}
                                        </div>

                                        <div className="form-check form-check-inline flex items-center mr-5 mb-2 sm:mb-5">
                                          <input
                                            defaultChecked={proitem.screen_shot == 1 ? checked : !checked.videobuy}
                                            onChange={() => setChecked({ videobuy: !checked.videobuy })}
                                            className="form-check-input appearance-none h-4 w-4 border border-black rounded bg-white
checked:bg-[#FCB43C] checked:border-none focus:outline-none transition duration-200
align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                            type="checkbox"
                                            id="video_buy_image"
                                            name="video_buy_image"
                                            {...register("video_buy_image")}
                                            value="1"
                                          />
                                          <label
                                            className="form-check-label text-[9px] font-medium inline-block text-black sm:text-sm"
                                            htmlFor="video_buy_image">Ask revuer to upload a product images.</label>
                                        </div>
                                      </div>

                                      <div
                                        className="flex-initial w-full md:11/12 lg:w-6/12 bac-1 py-2 sm:py-12 px-4 sm:px-2 pr-4 md:py-5 lg:py-0 mb-0 md:mb-2 lg:mb-5">
                                        <div className="md:block lg:flex block mb-1 rounded-lg relative">
                                          <div className="flex-initial w-full md:11/12 lg:w-12/12 bac-1 mr-3">
                                            <label className="mt-6 mb-4 lable-color text-sm tracking-wide font-semibold">
                                              Product Link </label>
                                            <div className="block mb-2 relative">
                                              <input defaultValue={proitem.link} type="text" id="video_buy_product_link" name="video_buy_product_link" {...register('video_buy_product_link')} placeholder="Paste link here" required=""
                                                className="box-shadow-3 mb-3 h-10 px-4 rounded-lg border border-[#95A5A6] bg-white lable-color w-full mt-2 text-sm placeholder-[#95A5A6] focus:outline-none" />
                                              <div className="absolute top-[1.2rem] right-4">
                                                <img src={linkicon} alt="linkicon" className="w-4" />
                                              </div>
                                              {videoBuyProductLinkValidateError && <label className="error">{videoBuyProductLinkValidateError}</label>}
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="task-visiable-class" id="visual_video_task_2_visiable">
                                    <div className="mb-10">
                                      <h5 className="text-lg tracking-wide font-semibold lable-color mb-3">Task 2: Review<span
                                        className="text-[#E74C3C]">*</span></h5>
                                      <div className="md:block lg:flex block box-shadow-1 rounded-2xl pt-1 sm:pt-7 relative">
                                        <div
                                          className="flex-initial w-full md:11/12 lg:w-full bac-1 py-5 sm:py-12 px-8 pr-4 md:py-5 lg:py-0 mr-2 mb-0 md:mb-2 lg:mb-5">
                                          <label className="mt-10 mb-2 lable-color text-sm tracking-wide font-semibold"> Review
                                            Details</label>
                                          <div className="block mb-2 relative">
                                            <textarea
                                              className="resize-none mb-2 h-32 py-3 px-2 box-shadow-3 rounded-lg border border-[#95A5A6] bg-white w-full mt-2 text-sm placeholder-[#95A5A6] focus:outline-none"
                                              disabled={visualVideoProductReviewDetailsDisabled}
                                              id="video_review_details" {...register("video_review_details")} name="video_review_details" rows="3" placeholder="Write from here"></textarea>
                                            {videoReviewDetailsValidateError && <label className="error">{videoReviewDetailsValidateError}</label>}
                                          </div>

                                          <div className="form-check form-check-inline flex items-center mr-5 mb-3  sm:mb-5">
                                            <input defaultValue={checked.videoreview} onChange={() => setChecked({ videoreview: !checked.videoreview })}
                                              className="form-check-input appearance-none h-4 w-4 border border-black rounded bg-white
                                  checked:bg-[#FCB43C] checked:border-none focus:outline-none transition duration-200
                                  align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                              type="checkbox"
                                              id="video_review_image"
                                              value="1"
                                              disabled={visualVideoProductReviewImageDisabled}
                                              name="video_review_image"
                                              {...register('video_review_image')}
                                            />
                                            <label
                                              className="form-check-label text-[9px] font-medium inline-block text-black sm:text-sm"
                                              htmlFor="video_review_image">Ask revuer to upload a product images.</label>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </>
                                :
                                proitem.task_number == 5 ?
                                  <>
                                    <div className="" id="visual_video_task_3_visiable">
                                      <div className="mb-10">
                                        <h5 className="text-lg tracking-wide font-semibold lable-color mb-3">Task 3: Script Approval<span
                                          className="text-[#E74C3C]">*</span></h5>
                                        <div className="md:block lg:flex block box-shadow-1 rounded-2xl pt-1 sm:pt-7 relative">
                                          <div
                                            className="flex-initial w-full md:11/12 lg:w-full bac-1 py-5 sm:py-12 px-8 pr-4 md:py-5 lg:py-0 mr-2 mb-0 md:mb-2 lg:mb-5">
                                            <label className="mt-10 mb-2 lable-color text-sm tracking-wide font-semibold"> Script
                                              Details</label>
                                            <div className="block mb-2 relative">
                                              <textarea
                                                className="resize-none mb-2 h-32 py-3 px-2 box-shadow-3 rounded-lg border border-[#95A5A6] bg-white w-full mt-2 text-sm placeholder-[#95A5A6] focus:outline-none"
                                                defaultValue={proitem.details}
                                                disabled={visualVideoScriptDetailsDisabled}
                                                id="video_script_approval" name="video_script_approval" {...register('video_script_approval')} rows="3" placeholder="Write from here"></textarea>
                                              {videoScriptApprovalValidateError && <label className="error">{videoScriptApprovalValidateError}</label>}
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </>
                                  :
                                  proitem.task_number == 6 ?
                                    <>
                                      <div className="" id="visual_video_task_4_visiable">
                                        <div className="mb-10">
                                          <h5 className="text-lg tracking-wide font-semibold lable-color mb-3">Task 4: Draft Upload<span
                                            className="text-[#E74C3C]">*</span></h5>
                                          <div className="md:block lg:flex block box-shadow-1 rounded-2xl pt-1 sm:pt-7 relative">
                                            <div
                                              className="flex-initial w-full md:11/12 lg:w-full bac-1 py-5 sm:py-12 px-8 pr-4 md:py-5 lg:py-0 mr-2 mb-0 md:mb-2 lg:mb-5">
                                              <label className="mt-10 mb-2 lable-color text-sm tracking-wide font-semibold">Draft upload
                                                Details</label>
                                              <div className="block mb-2 relative">
                                                <textarea
                                                  className="resize-none mb-2 h-32 py-3 px-2 box-shadow-3 rounded-lg border border-[#95A5A6] bg-white w-full mt-2 text-sm placeholder-[#95A5A6] focus:outline-none"
                                                  defaultValue={proitem.details}
                                                  disabled={visualVideoDraftDetailsDisabled}
                                                  id="video_draft_upload" name="video_draft_upload" {...register('video_draft_upload')} rows="3" placeholder="Write from here"></textarea>
                                                {videoDraftUploadValidateError && <label className="error">{videoDraftUploadValidateError}</label>}
                                              </div>

                                              <div className="form-check form-check-inline flex items-center mr-5 mb-3 sm:mb-5">
                                                <input defaultChecked={proitem.screen_shot == 1 ? checked : !checked.videodraft} onChange={() => setChecked({ videodraft: !checked.videodraft })}
                                                  className="form-check-input appearance-none h-4 w-4 border border-black rounded bg-white
                                  checked:bg-[#FCB43C] checked:border-none focus:outline-none transition duration-200
                                  align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                                  type="checkbox"
                                                  id="video_draft_image"
                                                  value="1"
                                                  disabled={visualVideoDraftImageDisabled}
                                                  name="video_draft_image"
                                                  {...register('video_draft_image')}
                                                />
                                                <label
                                                  className="form-check-label text-[9px] font-medium inline-block text-black sm:text-sm"
                                                  htmlFor="video_draft_image">Ask revuer to upload a video.</label>
                                              </div>
                                            </div>



                                          </div>
                                        </div>
                                      </div>
                                    </>
                                    :
                                    proitem.task_number == 7 ?
                                      <>
                                        <div className="mb-10">
                                          <h5 className="text-lg tracking-wide font-semibold lable-color mb-3">Task 5: Publish upon
                                            Approval<span className="text-[#E74C3C]">*</span></h5>
                                          <div
                                            className="md:block lg:flex block box-shadow-1 rounded-2xl pt-1 sm:pt-7 pb-10 lg:pb-0 relative">
                                            <div className="flex-initial w-full md:11/12 lg:w-6/12 bac-1 py-5 sm:py-12 px-3 sm:px-8 pr-4 md:py-5 lg:py-0 mr-2 mb-0 md:mb-2 lg:mb-5">
                                              <label className="mt-10 mb-2 lable-color text-base font-semibold">Publish Details</label>
                                              <div className="block mb-2 relative">
                                                <textarea
                                                  className="resize-none mb-2 h-32 py-3 px-2 rounded-lg box-shadow-3 border border-[#95A5A6] bg-white w-full mt-2 text-sm placeholder-[#95A5A6] focus:outline-none"
                                                  id="video_publish_approval" name="video_publish_approval" {...register('video_publish_approval')} rows="3" defaultValue={proitem.details} placeholder="Write from here"></textarea>
                                                {videoPublishApprovalValidateError && <label className="error">{videoPublishApprovalValidateError}</label>}
                                              </div>
                                            </div>
                                            <div id="visual_video_task_5_visiable"
                                              className="flex-initial w-full md:11/12 lg:w-6/12 bac-1 py-5 sm:py-12 px-2 pr-4 md:py-5 lg:py-0 mb-0 md:mb-2 lg:mb-5">
                                              <label className="mt-6 lable-color text-base font-semibold mb-2">Video Duration<span
                                                className="text-[#E74C3C]">*</span></label>
                                              <div className="block relative">
                                                <select id="visual_video_duration"
                                                  name="visual_video_duration"
                                                  disabled={visualMainVideoDurationDisabled}
                                                  {...register("visual_video_duration")} className="mt-2 form-select appearance-none block w-full px-3 h-12 text-sm font-normal lable-color bg-white bg-clip-padding bg-no-repeat rounded-lg border border-[#95A5A6] transition ease-in-out m-2 focus:text-gray-700 focus:bg-white focus:border-black focus:outline-none" aria-label="Default select example focus:outline-none">
                                                  {videoDurationList.map((item, index) => {
                                                    return (
                                                      <option key={item._id} value={item._id} selected={item._id == proitem.video_duration_id ? "selected" : ""} >{item.name}</option>
                                                    )
                                                  })}
                                                </select>
                                                <img src={selecticon} alt="selecticon"
                                                  className="w-3 h-2.5 absolute top-[20px] right-2.5  block sm:mr-2 sm:m-none mx-auto" />
                                                {videoVisualDurationValidateError && <label className="error">{videoVisualDurationValidateError}</label>}
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </>
                                      :
                                      ""
                            }
                          </>
                        )
                      })
                    : ""
                  :
                  camp_type == 3 ?

                    getCampaignDetailsData ?
                      getCampaignDetailsData.task_visiable == 1 ?
                        campaignTaskData.map((proitem, index) => {
                          return (
                            <>
                              {
                                proitem.task_number == 8 ?
                                  <>
                                    <div className="mb-10">
                                      <div className=" box-shadow-1 rounded-2xl pt-3 sm:pt-7 mb-6 sm:mb-8 px-4 sm:px-4 relative">
                                        <label className="font-bold">Is Product Buy Link available?</label>

                                        <div className="block sm:flex socila-mb socila-mb1 mt-4">
                                          <div className="flex items-center mr-3 mb-0">
                                            <input
                                              id="buy_review_visiable"
                                              type="radio"
                                              name="task_visiable"
                                              className="hidden"
                                              value="1"
                                              onClick={(event) => displayTestimonialTaskVisiable(event)}
                                              defaultChecked={checked.testimonialBuyYesButtonChecked}
                                              {...register('task_visiable')}
                                            />
                                            <label
                                              htmlFor="buy_review_visiable"
                                              className="flex items-center cursor-pointer  ml-2 text-[11px] sm:text-xs font-medium lable-color"
                                            >
                                              <span className="w-4 h-4 inline-block mr-1 text-xs rounded-full border border-grey"></span>
                                              Yes
                                            </label>
                                          </div>

                                          <div className="flex items-center mr-3 mb-0">
                                            <input
                                              id="buy_review_not_visiable"
                                              type="radio"
                                              name="task_visiable"
                                              className="hidden"
                                              value="2"
                                              defaultChecked={checked.testimonialBuyNoButtonChecked}
                                              onClick={(event) => displayTestimonialTaskVisiable(event)}
                                              {...register('task_visiable')}
                                            />
                                            <label
                                              htmlFor="buy_review_not_visiable"
                                              className="flex items-center cursor-pointer  ml-2 text-[11px] sm:text-xs font-medium lable-color"
                                            >
                                              <span className="w-4 h-4 inline-block mr-1 rounded-full border border-grey"></span>
                                              No
                                            </label>
                                          </div>
                                        </div>

                                      </div>

                                      <div className="" id="testimonial_task_1_visiable">
                                        <h5 className="text-lg tracking-wide font-semibold lable-color mb-4">Task 1: Buy<span className="text-[#E74C3C]">*</span></h5>
                                        <div className="md:block lg:flex block box-shadow-1 rounded-2xl pt-3 sm:pt-7 mb-6 sm:mb-8 px-4 sm:px-4 relative">

                                          <div className="flex-initial w-full md:11/12 lg:w-7/12 bac-1 py-2 sm:py-12 px-2 pr-4 md:py-5 lg:py-0 mr-2 mb-0 md:mb-2 lg:mb-5">

                                            <label className="mt-10 mb-2 lable-color text-sm tracking-wide font-semibold">Product Details</label>
                                            <div className="block mb-2 relative">
                                              <textarea
                                                className="resize-none mb-2 h-32 py-3 box-shadow-3 px-2 rounded-lg border border-[#95A5A6] bg-white w-full mt-2 text-sm placeholder-[#95A5A6] focus:outline-none"
                                                id="testimonial_buy_product_details"
                                                name="testimonial_buy_product_details"
                                                {...register('testimonial_buy_product_details')}
                                                rows="3"
                                                disabled={testimonialProductDetailsyDisabled}
                                                placeholder="Write from here"
                                                defaultValue={proitem.details}
                                              ></textarea>
                                              {testimonialBuyProductDetailsValidateError && <label className="error">{testimonialBuyProductDetailsValidateError}</label>}
                                            </div>

                                            <div className="form-check form-check-inline flex items-center mr-5 mb-2 sm:mb-5">
                                              <input
                                                defaultChecked={proitem.screen_shot == 1 ? checked : !checked.testimonialbuy}
                                                onChange={() => setChecked({ testimonialbuy: !checked.testimonialbuy })}
                                                className="form-check-input appearance-none h-4 w-4 border border-black rounded bg-white checked:bg-[#FCB43C] checked:border-none focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                                type="checkbox"
                                                id="testimonial_buy_image"
                                                name="testimonial_buy_image"
                                                disabled={testimonialProductImageDisabled}
                                                {...register('testimonial_buy_image')}
                                                value="1"
                                              />
                                              <label className="form-check-label text-[9px] font-medium inline-block text-black sm:text-sm" htmlFor="testimonial_buy_image">Ask revuer to upload a product images.</label>
                                            </div>
                                          </div>

                                          <div className="flex-initial w-full md:11/12 lg:w-6/12 bac-1 py-2 sm:py-12 px-3 sm:px-4 sm:px-2 pr-4 md:py-5 lg:py-0 mb-0 md:mb-2 lg:mb-5">
                                            <div className="md:block lg:flex block mb-1 rounded-lg relative">
                                              <div className="flex-initial w-full md:11/12 lg:w-12/12 bac-1 mr-3">
                                                <label className="mt-6 mb-4 lable-color text-sm tracking-wide font-semibold">Product Link </label>
                                                <div className="block mb-2 relative">
                                                  <input type="text" defaultValue={proitem.link} disabled={testimonialProductLinkDisabled} id="testimonial_product_link" name="testimonial_product_link" {...register('testimonial_product_link')} placeholder="Paste link here" required="" className="box-shadow-3 mb-3 h-10 px-4 rounded-lg border border-[#95A5A6] bg-white lable-color w-full mt-2 text-sm placeholder-[#95A5A6] focus:outline-none" />
                                                  <div className="absolute top-[1.2rem] right-4">
                                                    <img src={linkicon} alt="linkicon" className="w-4" />
                                                  </div>
                                                  {testimonialProductLinkValidateError && <label className="error">{testimonialProductLinkValidateError}</label>}
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </>
                                  :
                                  proitem.task_number == 9 ?
                                    <>
                                      <div className="" id="testimonial_task_2_visiable">
                                        <div className="mb-10">
                                          <h5 className="text-lg tracking-wide font-semibold lable-color mb-3">Task 2: Review<span className="text-[#E74C3C]">*</span></h5>
                                          <div className="md:block lg:flex block box-shadow-1 rounded-2xl pt-1 sm:pt-7 relative">
                                            <div className="flex-initial w-full md:11/12 lg:w-full bac-1 py-5 sm:py-12 px-8 pr-4 md:py-5 lg:py-0 mr-2 mb-0 md:mb-2 lg:mb-5">
                                              <label className="mt-10 mb-2 lable-color text-sm tracking-wide font-semibold"> Review Details</label>
                                              <div className="block mb-2 relative">
                                                <textarea
                                                  className="resize-none mb-2 h-32 py-3 px-2 box-shadow-3 rounded-lg border border-[#95A5A6] bg-white w-full mt-2 text-sm placeholder-[#95A5A6] focus:outline-none"
                                                  id="testimonial_review_details"
                                                  name="testimonial_review_details"
                                                  disabled={testimonialProductReviewDetailsDisabled}
                                                  {...register('testimonial_review_details')}
                                                  rows="3"
                                                  defaultValue={proitem.details}
                                                  placeholder="Write from here"
                                                ></textarea>
                                                {testimonialReviewDetailsValidateError && <label className="error">{testimonialReviewDetailsValidateError}</label>}
                                              </div>

                                              <div className="form-check form-check-inline flex items-center mr-5 mb-3  sm:mb-5">
                                                <input
                                                  defaultChecked={proitem.screen_shot == 1 ? checked : !checked.testimonialreview}
                                                  onChange={() => setChecked({ testimonialreview: !checked.testimonialreview })}
                                                  className="form-check-input appearance-none h-4 w-4 border border-black rounded bg-white checked:bg-[#FCB43C] checked:border-none focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                                  type="checkbox"
                                                  id="testimonial_product_image"
                                                  name="testimonial_product_image"
                                                  {...register('testimonial_product_image')}
                                                  disabled={testimonialProductReviewImageDisabled}
                                                  value="1"
                                                />
                                                <label className="form-check-label text-[9px] font-medium inline-block text-black sm:text-sm" htmlFor="inlineCheckbox1">Ask revuer to upload a product images.</label>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </>
                                    :
                                    proitem.task_number == 10 ?
                                      <>
                                        <div className="mb-10">
                                          <h5 className="text-lg tracking-wide font-semibold lable-color mb-3">Task 3: Draft Upload<span className="text-[#E74C3C]">*</span></h5>
                                          <div className="md:block lg:flex block box-shadow-1 rounded-2xl pt-1 sm:pt-7 relative">
                                            <div className="flex-initial w-full md:11/12 lg:w-full bac-1 py-5 sm:py-12 px-8 pr-4 md:py-5 lg:py-0 mr-2 mb-0 md:mb-2 lg:mb-5">
                                              <div className="relative">
                                                <label className="mt-10 mb-2 lable-color text-base font-semibold ">Draft Upload Type</label>
                                              </div>
                                              <div className="block sm:flex socila-mb socila-mb1 mt-2 mb-2">
                                                <div className="flex items-center mr-3 mb-0">
                                                  <input
                                                    id="text_testimonial"
                                                    type="radio"
                                                    name="draft_upload_type"
                                                    className="hidden"
                                                    value="1"
                                                    onClick={(event) => displayTestimonialVideoDuration(event)}
                                                    defaultChecked={getCampaignDetailsData ? getCampaignDetailsData.draft_upload_type == 1 ? checked : "" : ""}
                                                    {...register('draft_upload_type')}
                                                  />
                                                  <label
                                                    htmlFor="text_testimonial"
                                                    className="flex items-center cursor-pointer  ml-2 text-[11px] sm:text-xs font-medium lable-color"
                                                  >
                                                    <span className="w-4 h-4 inline-block mr-1 text-xs rounded-full border border-grey"></span>
                                                    Text Testimonial
                                                  </label>
                                                </div>

                                                <div className="flex items-center mr-3 mb-0">
                                                  <input
                                                    id="video_testimonial"
                                                    type="radio"
                                                    name="draft_upload_type"
                                                    className="hidden"
                                                    value="2"
                                                    onClick={(event) => displayTestimonialVideoDuration(event)}
                                                    defaultChecked={getCampaignDetailsData ? getCampaignDetailsData.draft_upload_type == 2 ? checked : "" : ""}
                                                    {...register('draft_upload_type')}
                                                  />
                                                  <label
                                                    htmlFor="video_testimonial"
                                                    className="flex items-center cursor-pointer  ml-2 text-[11px] sm:text-xs font-medium lable-color"
                                                  >
                                                    <span className="w-4 h-4 inline-block mr-1 rounded-full border border-grey"></span>
                                                    Video Testimonial
                                                  </label>
                                                </div>
                                                {testimonialDraftUploadTypeValidateError && <label className="error">{testimonialDraftUploadTypeValidateError}</label>}
                                              </div>

                                              <label className="mt-10 mb-2 lable-color text-sm tracking-wide font-semibold">Draft upload Details</label>
                                              <div className="block mb-2 relative">
                                                <textarea
                                                  className="resize-none mb-2 h-32 py-3 px-2 box-shadow-3 rounded-lg border border-[#95A5A6] bg-white w-full mt-2 text-sm placeholder-[#95A5A6] focus:outline-none"
                                                  id="testimonial_draft_upload"
                                                  name="testimonial_draft_upload"
                                                  {...register('testimonial_draft_upload')}
                                                  rows="3"
                                                  defaultValue={proitem.details}
                                                  placeholder="Write from here"
                                                ></textarea>
                                                {testimonialDraftUploadValidateError && <label className="error">{testimonialDraftUploadValidateError}</label>}
                                              </div>


                                              {getCampaignDetailsData ? getCampaignDetailsData.draft_upload_type == 1 ?
                                                <>
                                                  <div className="form-check form-check-inline flex items-center mr-5 mb-3 sm:mb-5 draft-upload-display-none" id="testimonial_draft_video_check_display">
                                                    <input
                                                      defaultChecked={proitem.screen_shot == 1 ? checked : !checked.testimonialvideo}
                                                      onChange={() => setChecked({ testimonialvideo: !checked.testimonialvideo })}
                                                      className="form-check-input appearance-none h-4 w-4 border border-black rounded bg-white checked:bg-[#FCB43C] checked:border-none focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                                      type="checkbox"
                                                      id="testimonial_draft_video_upload"
                                                      name="testimonial_draft_video_upload"
                                                      {...register('testimonial_draft_video_upload')}
                                                      value="1"
                                                    />
                                                    <label className="form-check-label text-[9px] font-medium inline-block text-black sm:text-sm" htmlFor="testimonial_draft_video_upload">Ask revuer to upload a video.</label>
                                                  </div>
                                                </>
                                                :
                                                <>
                                                  <div className="form-check form-check-inline flex items-center mr-5 mb-3 sm:mb-5" id="testimonial_draft_video_check_display">
                                                    <input
                                                      defaultChecked={proitem.screen_shot == 1 ? checked : !checked.testimonialvideo}
                                                      onChange={() => setChecked({ testimonialvideo: !checked.testimonialvideo })}
                                                      className="form-check-input appearance-none h-4 w-4 border border-black rounded bg-white checked:bg-[#FCB43C] checked:border-none focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                                      type="checkbox"
                                                      id="testimonial_draft_video_upload"
                                                      name="testimonial_draft_video_upload"
                                                      {...register('testimonial_draft_video_upload')}
                                                      value="1"
                                                    />
                                                    <label className="form-check-label text-[9px] font-medium inline-block text-black sm:text-sm" htmlFor="testimonial_draft_video_upload">Ask revuer to upload a video.</label>
                                                  </div>
                                                </>
                                                : ""}
                                            </div>
                                          </div>
                                        </div>
                                      </>
                                      :
                                      proitem.task_number == 11 ?
                                        <>
                                          <div className="mb-10">
                                            <h5 className="text-lg tracking-wide font-semibold lable-color mb-3">Task 4: Publish upon Approval<span className="text-[#E74C3C]">*</span></h5>
                                            <div className="md:block lg:flex block box-shadow-1 rounded-2xl pt-1 sm:pt-7 pb-10 lg:pb-0 relative">
                                              <div className="flex-initial w-full md:11/12 lg:w-6/12 bac-1 py-5 sm:py-12 px-8 pr-4 md:py-5 lg:py-0 mr-2 mb-0 md:mb-2 lg:mb-5">
                                                <label className="mt-10 mb-2 lable-color text-base font-semibold">Publish Details</label>
                                                <div className="block mb-2 relative">
                                                  <textarea
                                                    className="resize-none mb-2 h-32 py-3 px-2 rounded-lg box-shadow-3 border border-[#95A5A6] bg-white w-full mt-2 text-sm placeholder-[#95A5A6] focus:outline-none"
                                                    id="testimonial_publish_approval_details"
                                                    name="testimonial_publish_approval_details"
                                                    {...register('testimonial_publish_approval_details')}
                                                    rows="3"
                                                    placeholder="Write from here"
                                                    defaultValue={proitem.details}
                                                  ></textarea>
                                                  {testimonialPublishDetailsValidateError && <label className="error">{testimonialPublishDetailsValidateError}</label>}
                                                </div>
                                              </div>

                                              {
                                                getCampaignDetailsData ? getCampaignDetailsData.draft_upload_type == 1 ?
                                                  <>
                                                    <div className="flex-initial w-full md:11/12 lg:w-6/12 bac-1 py-5 sm:py-12 px-2 pr-4 md:py-5 lg:py-0 mb-0 md:mb-2 lg:mb-5 draft-upload-display-none" id="testimonial_draft_video_display">
                                                      <label className="mt-6 lable-color text-base font-semibold mb-2">Video Duration</label>
                                                      <div className="block relative">
                                                        <select disabled={testimonialVideoDraftVideoDurationDisabled} id="testimonial_video_duration"
                                                          name="testimonial_video_duration"
                                                          {...register("testimonial_video_duration")} className="mt-2 form-select appearance-none block w-full px-3 h-12 text-sm font-normal lable-color bg-white bg-clip-padding bg-no-repeat rounded-lg border border-[#95A5A6] transition ease-in-out m-2 focus:text-gray-700 focus:bg-white focus:border-black focus:outline-none" aria-label="Default select example focus:outline-none">

                                                          {videoDurationList.map((item, index) => {
                                                            return (
                                                              <option key={item._id} value={item._id} selected={item._id == proitem.video_duration_id ? "selected" : ""} >{item.name}</option>
                                                            )
                                                          })}
                                                        </select>
                                                        <img
                                                          src={selecticon}
                                                          alt="selecticon"
                                                          className="w-3 h-2.5 absolute top-[20px] right-2.5  block sm:mr-2 sm:m-none mx-auto"
                                                        />
                                                        {testimonialVideoDurationValidateError && <label className="error">{testimonialVideoDurationValidateError}</label>}
                                                      </div>
                                                    </div>
                                                  </>
                                                  :
                                                  <>
                                                    <div className="flex-initial w-full md:11/12 lg:w-6/12 bac-1 py-5 sm:py-12 px-2 pr-4 md:py-5 lg:py-0 mb-0 md:mb-2 lg:mb-5" id="testimonial_draft_video_display">
                                                      <label className="mt-6 lable-color text-base font-semibold mb-2">Video Duration</label>
                                                      <div className="block relative">
                                                        <select disabled={testimonialVideoDraftVideoDurationDisabled} id="testimonial_video_duration"
                                                          name="testimonial_video_duration"
                                                          {...register("testimonial_video_duration")} className="mt-2 form-select appearance-none block w-full px-3 h-12 text-sm font-normal lable-color bg-white bg-clip-padding bg-no-repeat rounded-lg border border-[#95A5A6] transition ease-in-out m-2 focus:text-gray-700 focus:bg-white focus:border-black focus:outline-none" aria-label="Default select example focus:outline-none">

                                                          {videoDurationList.map((item, index) => {
                                                            return (
                                                              <option key={item._id} value={item._id} selected={item._id == proitem.video_duration_id ? "selected" : ""} >{item.name}</option>
                                                            )
                                                          })}
                                                        </select>
                                                        <img
                                                          src={selecticon}
                                                          alt="selecticon"
                                                          className="w-3 h-2.5 absolute top-[20px] right-2.5  block sm:mr-2 sm:m-none mx-auto"
                                                        />
                                                        {testimonialVideoDurationValidateError && <label className="error">{testimonialVideoDurationValidateError}</label>}
                                                      </div>
                                                    </div>
                                                  </>
                                                  :
                                                  ""
                                              }
                                            </div>
                                          </div>
                                        </>
                                        : ""
                              }
                            </>
                          )
                        })
                        :
                        campaignTaskData.map((proitem, index) => {
                          return (
                            <>
                              {
                                proitem.task_number == 10 ?
                                  <>
                                    <div className="mb-10">
                                      <div className=" box-shadow-1 rounded-2xl pt-3 sm:pt-7 mb-6 sm:mb-8 px-4 sm:px-4 relative">
                                        <label className="font-bold">Is Product Buy Link available?</label>

                                        <div className="block sm:flex socila-mb socila-mb1 mt-4">
                                          <div className="flex items-center mr-3 mb-0">
                                            <input
                                              id="buy_review_visiable"
                                              type="radio"
                                              name="task_visiable"
                                              className="hidden"
                                              value="1"
                                              onClick={(event) => displayTestimonialTaskVisiable(event)}
                                              defaultChecked={checked.testimonialTaskNoBuyYesButtonChecked}
                                              {...register('task_visiable')}
                                            />
                                            <label
                                              htmlFor="buy_review_visiable"
                                              className="flex items-center cursor-pointer  ml-2 text-[11px] sm:text-xs font-medium lable-color"
                                            >
                                              <span className="w-4 h-4 inline-block mr-1 text-xs rounded-full border border-grey"></span>
                                              Yes
                                            </label>
                                          </div>

                                          <div className="flex items-center mr-3 mb-0">
                                            <input
                                              id="buy_review_not_visiable"
                                              type="radio"
                                              name="task_visiable"
                                              className="hidden"
                                              value="2"
                                              defaultChecked={checked.testimonialTaskNoBuyNoButtonChecked}
                                              onClick={(event) => displayTestimonialTaskVisiable(event)}
                                              {...register('task_visiable')}
                                            />
                                            <label
                                              htmlFor="buy_review_not_visiable"
                                              className="flex items-center cursor-pointer  ml-2 text-[11px] sm:text-xs font-medium lable-color"
                                            >
                                              <span className="w-4 h-4 inline-block mr-1 rounded-full border border-grey"></span>
                                              No
                                            </label>
                                          </div>
                                        </div>

                                      </div>

                                      <div className="task-visiable-class" id="testimonial_task_1_visiable">
                                        <h5 className="text-lg tracking-wide font-semibold lable-color mb-4">Task 1: Buy<span className="text-[#E74C3C]">*</span></h5>
                                        <div className="md:block lg:flex block box-shadow-1 rounded-2xl pt-3 sm:pt-7 mb-6 sm:mb-8 px-4 sm:px-4 relative">

                                          <div className="flex-initial w-full md:11/12 lg:w-7/12 bac-1 py-2 sm:py-12 px-2 pr-4 md:py-5 lg:py-0 mr-2 mb-0 md:mb-2 lg:mb-5">

                                            <label className="mt-10 mb-2 lable-color text-sm tracking-wide font-semibold">Product Details</label>
                                            <div className="block mb-2 relative">
                                              <textarea
                                                className="resize-none mb-2 h-32 py-3 box-shadow-3 px-2 rounded-lg border border-[#95A5A6] bg-white w-full mt-2 text-sm placeholder-[#95A5A6] focus:outline-none"
                                                id="testimonial_buy_product_details"
                                                name="testimonial_buy_product_details"
                                                {...register('testimonial_buy_product_details')}
                                                rows="3"
                                                disabled={testimonialTaskNoProductDetailsyDisabled}
                                                placeholder="Write from here"
                                              ></textarea>
                                              {testimonialBuyProductDetailsValidateError && <label className="error">{testimonialBuyProductDetailsValidateError}</label>}
                                            </div>

                                            <div className="form-check form-check-inline flex items-center mr-5 mb-2 sm:mb-5">
                                              <input
                                                defaultValue={checked.testimonialbuy}
                                                onChange={() => setChecked({ testimonialbuy: !checked.testimonialbuy })}
                                                className="form-check-input appearance-none h-4 w-4 border border-black rounded bg-white checked:bg-[#FCB43C] checked:border-none focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                                type="checkbox"
                                                id="testimonial_buy_image"
                                                name="testimonial_buy_image"
                                                disabled={testimonialTaskNoProductImageDisabled}
                                                {...register('testimonial_buy_image')}
                                                value="1"
                                              />
                                              <label className="form-check-label text-[9px] font-medium inline-block text-black sm:text-sm" htmlFor="testimonial_buy_image">Ask revuer to upload a product images.</label>
                                            </div>
                                          </div>

                                          <div className="flex-initial w-full md:11/12 lg:w-6/12 bac-1 py-2 sm:py-12 px-4 sm:px-2 pr-4 md:py-5 lg:py-0 mb-0 md:mb-2 lg:mb-5">
                                            <div className="md:block lg:flex block mb-1 rounded-lg relative">
                                              <div className="flex-initial w-full md:11/12 lg:w-12/12 bac-1 mr-3">
                                                <label className="mt-6 mb-4 lable-color text-sm tracking-wide font-semibold">Product Link </label>
                                                <div className="block mb-2 relative">
                                                  <input type="text" disabled={testimonialTaskNoProductLinkDisabled} id="testimonial_product_link" name="testimonial_product_link" {...register('testimonial_product_link')} placeholder="Paste link here" required="" className="box-shadow-3 mb-3 h-10 px-4 rounded-lg border border-[#95A5A6] bg-white lable-color w-full mt-2 text-sm placeholder-[#95A5A6] focus:outline-none" />
                                                  <div className="absolute top-[1.2rem] right-4">
                                                    <img src={linkicon} alt="linkicon" className="w-4" />
                                                  </div>
                                                  {testimonialProductLinkValidateError && <label className="error">{testimonialProductLinkValidateError}</label>}
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    <div className="task-visiable-class" id="testimonial_task_2_visiable">
                                      <div className="mb-10">
                                        <h5 className="text-lg tracking-wide font-semibold lable-color mb-3">Task 2: Review<span className="text-[#E74C3C]">*</span></h5>
                                        <div className="md:block lg:flex block box-shadow-1 rounded-2xl pt-1 sm:pt-7 relative">
                                          <div className="flex-initial w-full md:11/12 lg:w-full bac-1 py-5 sm:py-12 px-8 pr-4 md:py-5 lg:py-0 mr-2 mb-0 md:mb-2 lg:mb-5">
                                            <label className="mt-10 mb-2 lable-color text-sm tracking-wide font-semibold"> Review Details</label>
                                            <div className="block mb-2 relative">
                                              <textarea
                                                className="resize-none mb-2 h-32 py-3 px-2 box-shadow-3 rounded-lg border border-[#95A5A6] bg-white w-full mt-2 text-sm placeholder-[#95A5A6] focus:outline-none"
                                                id="testimonial_review_details"
                                                name="testimonial_review_details"
                                                disabled={testimonialTaskNoProductReviewDetailsDisabled}
                                                {...register('testimonial_review_details')}
                                                rows="3"
                                                placeholder="Write from here"
                                              ></textarea>
                                              {testimonialReviewDetailsValidateError && <label className="error">{testimonialReviewDetailsValidateError}</label>}
                                            </div>

                                            <div className="form-check form-check-inline flex items-center mr-5 mb-3  sm:mb-5">
                                              <input
                                                defaultValue={checked.testimonialreview}
                                                onChange={() => setChecked({ testimonialreview: !checked.testimonialreview })}
                                                className="form-check-input appearance-none h-4 w-4 border border-black rounded bg-white checked:bg-[#FCB43C] checked:border-none focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                                type="checkbox"
                                                id="testimonial_product_image"
                                                name="testimonial_product_image"
                                                {...register('testimonial_product_image')}
                                                disabled={testimonialTaskNoProductReviewImageDisabled}
                                                value="1"
                                              />
                                              <label className="form-check-label text-[9px] font-medium inline-block text-black sm:text-sm" htmlFor="inlineCheckbox1">Ask revuer to upload a product images.</label>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="mb-10">
                                      <h5 className="text-lg tracking-wide font-semibold lable-color mb-3">Task 3: Draft Upload<span className="text-[#E74C3C]">*</span></h5>
                                      <div className="md:block lg:flex block box-shadow-1 rounded-2xl pt-1 sm:pt-7 relative">
                                        <div className="flex-initial w-full md:11/12 lg:w-full bac-1 py-5 sm:py-12 px-8 pr-4 md:py-5 lg:py-0 mr-2 mb-0 md:mb-2 lg:mb-5">
                                          <div className="relative">
                                            <label className="mt-10 mb-2 lable-color text-base font-semibold ">Draft Upload Type</label>
                                          </div>
                                          <div className="block sm:flex socila-mb socila-mb1 mt-2 mb-2">
                                            <div className="flex items-center mr-3 mb-0">
                                              <input
                                                id="text_testimonial"
                                                type="radio"
                                                name="draft_upload_type"
                                                className="hidden"
                                                value="1"
                                                onClick={(event) => displayTestimonialVideoDuration(event)}
                                                defaultChecked={getCampaignDetailsData ? getCampaignDetailsData.draft_upload_type == 1 ? checked : "" : ""}
                                                {...register('draft_upload_type')}
                                              />
                                              <label
                                                htmlFor="text_testimonial"
                                                className="flex items-center cursor-pointer  ml-2 text-[11px] sm:text-xs font-medium lable-color"
                                              >
                                                <span className="w-4 h-4 inline-block mr-1 text-xs rounded-full border border-grey"></span>
                                                Text Testimonial
                                              </label>
                                            </div>

                                            <div className="flex items-center mr-3 mb-0">
                                              <input
                                                id="video_testimonial"
                                                type="radio"
                                                name="draft_upload_type"
                                                className="hidden"
                                                value="2"
                                                onClick={(event) => displayTestimonialVideoDuration(event)}
                                                defaultChecked={getCampaignDetailsData ? getCampaignDetailsData.draft_upload_type == 2 ? checked : "" : ""}
                                                {...register('draft_upload_type')}
                                              />
                                              <label
                                                htmlFor="video_testimonial"
                                                className="flex items-center cursor-pointer  ml-2 text-[11px] sm:text-xs font-medium lable-color"
                                              >
                                                <span className="w-4 h-4 inline-block mr-1 rounded-full border border-grey"></span>
                                                Video Testimonial
                                              </label>
                                            </div>
                                            {testimonialDraftUploadTypeValidateError && <label className="error">{testimonialDraftUploadTypeValidateError}</label>}
                                          </div>

                                          <label className="mt-10 mb-2 lable-color text-sm tracking-wide font-semibold">Draft upload Details</label>
                                          <div className="block mb-2 relative">
                                            <textarea
                                              className="resize-none mb-2 h-32 py-3 px-2 box-shadow-3 rounded-lg border border-[#95A5A6] bg-white w-full mt-2 text-sm placeholder-[#95A5A6] focus:outline-none"
                                              id="testimonial_draft_upload"
                                              name="testimonial_draft_upload"
                                              {...register('testimonial_draft_upload')}
                                              rows="3"
                                              defaultValue={proitem.details}
                                              placeholder="Write from here"
                                            ></textarea>
                                            {testimonialDraftUploadValidateError && <label className="error">{testimonialDraftUploadValidateError}</label>}
                                          </div>

                                          {getCampaignDetailsData ? getCampaignDetailsData.draft_upload_type == 1 ?
                                            <>
                                              <div className="form-check form-check-inline flex items-center mr-5 mb-3 sm:mb-5 draft-upload-display-none" id="testimonial_draft_video_check_display">
                                                <input
                                                  defaultChecked={proitem.screen_shot == 1 ? checked : !checked.testimonialvideo}
                                                  onChange={() => setChecked({ testimonialvideo: !checked.testimonialvideo })}
                                                  className="form-check-input appearance-none h-4 w-4 border border-black rounded bg-white checked:bg-[#FCB43C] checked:border-none focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                                  type="checkbox"
                                                  id="testimonial_draft_video_upload"
                                                  name="testimonial_draft_video_upload"
                                                  {...register('testimonial_draft_video_upload')}
                                                  value="1"
                                                />
                                                <label className="form-check-label text-[9px] font-medium inline-block text-black sm:text-sm" htmlFor="testimonial_draft_video_upload">Ask revuer to upload a video.</label>
                                              </div>
                                            </>
                                            :
                                            <>
                                              <div className="form-check form-check-inline flex items-center mr-5 mb-3 sm:mb-5" id="testimonial_draft_video_check_display">
                                                <input
                                                  defaultChecked={proitem.screen_shot == 1 ? checked : !checked.testimonialvideo}
                                                  onChange={() => setChecked({ testimonialvideo: !checked.testimonialvideo })}
                                                  className="form-check-input appearance-none h-4 w-4 border border-black rounded bg-white checked:bg-[#FCB43C] checked:border-none focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                                  type="checkbox"
                                                  id="testimonial_draft_video_upload"
                                                  name="testimonial_draft_video_upload"
                                                  {...register('testimonial_draft_video_upload')}
                                                  value="1"
                                                />
                                                <label className="form-check-label text-[9px] font-medium inline-block text-black sm:text-sm" htmlFor="testimonial_draft_video_upload">Ask revuer to upload a video.</label>
                                              </div>
                                            </>
                                            : ""}
                                        </div>
                                      </div>
                                    </div>
                                  </>
                                  :
                                  proitem.task_number == 11 ?
                                    <>
                                      <div className="mb-10">
                                        <h5 className="text-lg tracking-wide font-semibold lable-color mb-3">Task 4: Publish upon Approval<span className="text-[#E74C3C]">*</span></h5>
                                        <div className="md:block lg:flex block box-shadow-1 rounded-2xl pt-1 sm:pt-7 pb-10 lg:pb-0 relative">
                                          <div className="flex-initial w-full md:11/12 lg:w-6/12 bac-1 py-5 sm:py-12 px-8 pr-4 md:py-5 lg:py-0 mr-2 mb-0 md:mb-2 lg:mb-5">
                                            <label className="mt-10 mb-2 lable-color text-base font-semibold">Publish Details</label>
                                            <div className="block mb-2 relative">
                                              <textarea
                                                className="resize-none mb-2 h-32 py-3 px-2 rounded-lg box-shadow-3 border border-[#95A5A6] bg-white w-full mt-2 text-sm placeholder-[#95A5A6] focus:outline-none"
                                                id="testimonial_publish_approval_details"
                                                name="testimonial_publish_approval_details"
                                                {...register('testimonial_publish_approval_details')}
                                                rows="3"
                                                placeholder="Write from here"
                                                defaultValue={proitem.details}
                                              ></textarea>
                                              {testimonialPublishDetailsValidateError && <label className="error">{testimonialPublishDetailsValidateError}</label>}
                                            </div>
                                          </div>

                                          {
                                            getCampaignDetailsData ? getCampaignDetailsData.draft_upload_type == 1 ?
                                              <>
                                                <div className="flex-initial w-full md:11/12 lg:w-6/12 bac-1 py-5 sm:py-12 px-2 pr-4 md:py-5 lg:py-0 mb-0 md:mb-2 lg:mb-5 draft-upload-display-none" id="testimonial_draft_video_display">
                                                  <label className="mt-6 lable-color text-base font-semibold mb-2">Video Duration</label>
                                                  <div className="block relative">
                                                    <select disabled={testimonialVideoDraftVideoDurationDisabled} id="testimonial_video_duration"
                                                      name="testimonial_video_duration"
                                                      {...register("testimonial_video_duration")} className="mt-2 form-select appearance-none block w-full px-3 h-12 text-sm font-normal lable-color bg-white bg-clip-padding bg-no-repeat rounded-lg border border-[#95A5A6] transition ease-in-out m-2 focus:text-gray-700 focus:bg-white focus:border-black focus:outline-none" aria-label="Default select example focus:outline-none">
                                                      {videoDurationList.map((item, index) => {
                                                        return (
                                                          <option key={item._id} value={item._id} selected={item._id == proitem.video_duration_id ? "selected" : ""} >{item.name}</option>
                                                        )
                                                      })}
                                                    </select>
                                                    <img
                                                      src={selecticon}
                                                      alt="selecticon"
                                                      className="w-3 h-2.5 absolute top-[20px] right-2.5  block sm:mr-2 sm:m-none mx-auto"
                                                    />
                                                    {testimonialVideoDurationValidateError && <label className="error">{testimonialVideoDurationValidateError}</label>}
                                                  </div>
                                                </div>
                                              </>
                                              :
                                              <>
                                                <div className="flex-initial w-full md:11/12 lg:w-6/12 bac-1 py-5 sm:py-12 px-2 pr-4 md:py-5 lg:py-0 mb-0 md:mb-2 lg:mb-5" id="testimonial_draft_video_display">
                                                  <label className="mt-6 lable-color text-base font-semibold mb-2">Video Duration</label>
                                                  <div className="block relative">
                                                    <select disabled={testimonialVideoDraftVideoDurationDisabled} id="testimonial_video_duration"
                                                      name="testimonial_video_duration"
                                                      {...register("testimonial_video_duration")} className="mt-2 form-select appearance-none block w-full px-3 h-12 text-sm font-normal lable-color bg-white bg-clip-padding bg-no-repeat rounded-lg border border-[#95A5A6] transition ease-in-out m-2 focus:text-gray-700 focus:bg-white focus:border-black focus:outline-none" aria-label="Default select example focus:outline-none">
                                                      {videoDurationList.map((item, index) => {
                                                        return (
                                                          <option key={item._id} value={item._id} selected={item._id == proitem.video_duration_id ? "selected" : ""} >{item.name}</option>
                                                        )
                                                      })}
                                                    </select>
                                                    <img
                                                      src={selecticon}
                                                      alt="selecticon"
                                                      className="w-3 h-2.5 absolute top-[20px] right-2.5  block sm:mr-2 sm:m-none mx-auto"
                                                    />
                                                    {testimonialVideoDurationValidateError && <label className="error">{testimonialVideoDurationValidateError}</label>}
                                                  </div>
                                                </div>
                                              </>
                                              :
                                              ""
                                          }

                                        </div>
                                      </div>
                                    </>
                                    : ""
                              }
                            </>
                          )
                        })
                      : ""
                    :
                    camp_type == 4 ?

                      campaignTaskData.map((proitem, index) => {
                        return (
                          <>
                            {
                              proitem.task_number == 12 ?
                                <>
                                  <div className="mb-10">
                                    <h5 className="text-lg tracking-wide font-semibold lable-color mb-4">Task 1: Receive the sample Product<span className="text-[#E74C3C]">*</span></h5>
                                    <div className="md:block lg:flex block box-shadow-1 rounded-2xl pt-3 sm:pt-7 mb-6 sm:mb-8 px-4 sm:px-4 relative">
                                      <div className="flex-initial w-full md:11/12 lg:w-7/12 bac-1 py-2 sm:py-12 px-2 pr-4 md:py-5 lg:py-0 mr-2 mb-0 md:mb-2 lg:mb-5">
                                        <label className="mt-10 mb-2 lable-color text-sm tracking-wide font-semibold">Get a sample Product Details</label>
                                        <div className="block mb-2 relative">
                                          <textarea
                                            className="resize-none mb-2 h-[8.6rem] py-3 px-2 box-shadow-3 rounded-lg border border-[#95A5A6] bg-white w-full mt-2 text-sm placeholder-[#95A5A6] focus:outline-none"
                                            id="sampling_reveive_product_sample"
                                            rows="3"
                                            name="sampling_reveive_product_sample"
                                            defaultValue={proitem.details}
                                            {...register('sampling_reveive_product_sample')}
                                            placeholder="Write from here"
                                          ></textarea>
                                          {samplingReceiveSampleValidateError && <label className="error">{samplingReceiveSampleValidateError}</label>}
                                        </div>
                                      </div>

                                      <div
                                        className="flex-initial w-full md:11/12 lg:w-6/12 bac-1 py-2 sm:py-12 px-4 sm:px-2 pr-4 md:py-5 lg:py-0 mb-0 md:mb-2 lg:mb-5">
                                        <label className="mt-10 mb-2 lable-color text-base font-semibold"> Buy Link/ Link</label>
                                        <div className="block mb-2 relative">
                                          <input type="text" id="sampling_receive_form_link" readOnly={samplingReceiveFormLinkDisabled} name="sampling_receive_form_link" {...register('sampling_receive_form_link')} placeholder="Paste here" required="" className="box-shadow-3 h-12 px-4 rounded-lg border border-[#95A5A6] bg-white lable-color w-full mt-2 mb-1 text-sm placeholder-[#95A5A6] focus:outline-none" defaultValue={proitem.link} />
                                          {samplingReceiveFormLinkValidateError && <label className="error">{samplingReceiveFormLinkValidateError}</label>}
                                        </div>

                                        <div className="form-check form-check-inline flex items-center mr-5 mb-2 sm:mb-5">
                                          <input
                                            defaultChecked={proitem.link == "" ? checked : !checked.samplingvideo}
                                            onChange={() => setChecked({ samplingvideo: !checked.samplingvideo })}
                                            className="form-check-input appearance-none h-4 w-4 border border-black rounded bg-white checked:bg-[#FCB43C] checked:border-none focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                            type="checkbox"
                                            id="sampling_product_image"
                                            value="1"
                                            onClick={(event) => displaySamplingFormLink(event)}
                                            name="sampling_product_image"
                                            {...register('sampling_product_image')}
                                          />
                                          <label className="form-check-label mb-0 text-[9px] font-medium inline-block text-black sm:text-sm" htmlFor="inlineCheckbox1">Get product delivered to revuERs directly.</label>
                                        </div>
                                      </div>

                                    </div>
                                  </div>
                                </>
                                :
                                proitem.task_number == 13 ?
                                  <>
                                    <div className="mb-10">
                                      <h5 className="text-lg tracking-wide font-semibold lable-color mb-3">Task 2: Fill The Form<span className="text-[#E74C3C]">*</span></h5>
                                      <div className="box-shadow-1 rounded-2xl pt-3 px-6 sm:pt-7 mb-6 sm:mb-0 ">

                                        <div className="flex items-center mb-3 relative">
                                          <div className="flex items-center mr-4 mb-0">
                                            <input
                                              id="default-radio-4"
                                              type="radio"
                                              name="sampling_form_task_type"
                                              {...register('sampling_form_task_type')}
                                              className="hidden sampling-display-task"
                                              onClick={(event) => displaySamplingFormTask(event)}
                                              value="1"
                                              defaultChecked={proitem.fill_form_image != "" ? checked : ""}
                                            />
                                            <label
                                              htmlFor="default-radio-4"
                                              className="flex items-center cursor-pointer mr-5  text-[10px] sm:text-sm font-semibold lable-color"
                                            >
                                              <span className="w-4 h-4 inline-block mr-1 rounded-full border border-grey"></span>
                                              Fill The Form Details
                                            </label>
                                          </div>
                                          <div className="flex items-center mr-4 mb-0">
                                            <input
                                              id="default-radio-3"
                                              type="radio"
                                              name="sampling_form_task_type"
                                              className="hidden sampling-display-task"
                                              {...register('sampling_form_task_type')}
                                              onClick={(event) => displaySamplingFormTask(event)}
                                              value="2"
                                              defaultChecked={proitem.link != "" ? checked : ""}
                                            />
                                            <label
                                              htmlFor="default-radio-3"
                                              className="flex items-center cursor-pointer mr-5 ml-2 text-[11px] sm:text-sm font-semibold lable-color"
                                            >
                                              <span className="w-4 h-4 inline-block mr-1 rounded-full border border-grey"></span>
                                              Form Link
                                            </label>
                                          </div>
                                          {samplingTaskFormTypeValidateError && <label className="error">{samplingTaskFormTypeValidateError}</label>}
                                        </div>

                                        <div
                                          className="md:block lg:flex block relative">

                                          <div
                                            className="flex-initial w-full md:11/12 lg:w-7/12 bac-1 py-2 sm:py-12 px-2 pr-4 md:py-5 lg:py-0 mr-2 mb-0 md:mb-2 lg:mb-5">


                                            <label className="mt-10 lable-color text-base font-semibold">Fill The Form Details </label>

                                            {!samplingImageUpload ?
                                              <div className="flex w-full justify-center bg-grey-lighter">
                                                <label className={`w-full flex flex-col items-center px-4 py-14 box-shadow-3 ${samplingImageImageValidateError ? "border-[#d95c5c]" : "border-[#95a5a6]"} text-blue rounded-lg border-2 border-dashed tracking-wide  border-blue cursor-pointer`}>




                                                  {
                                                    proitem.fill_form_image == "" ?
                                                      <>
                                                        <img src={uploadicon} className="w-[100px]" alt="uploadicon" />
                                                      </>
                                                      :
                                                      <>
                                                        <img src="https://revueradmin.mishry.com/uploads/campaigns/document.png" className="w-[100px]" alt="uploadicon" />
                                                      </>
                                                  }

                                                  <span className="mt-4 text-base leading-normal lable-color">
                                                    Drag & Drop or browse to choose a file
                                                  </span>
                                                  <input type="file" id="sampling_image_disabled" disabled={proitem.fill_form_image == "" ? samplingFormUploadDisabled : ""} onChange={(e) => samplingImageUploader(e)} className="hidden box-shadow-3" />
                                                </label>
                                                <input id="sampling_image" type="hidden" />
                                                {samplingImageImageValidateError && <label className="error">{samplingImageImageValidateError}</label>}
                                              </div>
                                              :
                                              <div className="relative flex w-full justify-center bg-grey-lighter mt-2">
                                                <img src={samplingAfterUploadicon.imageSrc} className="h-[9.3rem] w-[34.5rem] object-contain" alt="uploaded" />
                                                <div onClick={samplingImageRemover} className="cursor-pointer absolute top-[-13px] right-0 bac-6 w-8 h-8 rounded-full flex justify-center items-center">
                                                  <i className="text-lg text-white fa-solid fa-xmark"></i>
                                                </div>
                                              </div>
                                            }


                                          </div>

                                          <div
                                            className="flex-initial w-full md:11/12 lg:w-6/12 bac-1 py-2 sm:py-12 px-4 sm:px-2 pr-4 md:py-5 lg:py-0 mb-0 md:mb-2 lg:mb-5">
                                            <label className="mt-10 mb-2 lable-color text-base font-semibold"> Form Link</label>
                                            <div className="block mb-2 relative">
                                              <input type="text" defaultValue={proitem.link} readOnly={proitem.link == "" ? samplingFormLinkDisabled : ""} id="sampling_form_link" name="sampling_form_link" {...register('sampling_form_link')} placeholder="Paste here" required="" className="box-shadow-3 h-12 px-4 rounded-lg border border-[#95A5A6] bg-white lable-color w-full mt-2 mb-1 text-sm placeholder-[#95A5A6] focus:outline-none" />
                                              {samplingFormLinkValidateError && <label className="error">{samplingFormLinkValidateError}</label>}
                                            </div>

                                            {
                                            proitem.fill_form_image == "" ? ""
                                            :
                                            <>
                                            <div className="block relative">
                                              <label className="mt-10 mb-2 lable-color text-base font-semibold"> Download File</label>
                                              <div className="block mb-2 relative">
                                                {/* <input type="text" defaultValue={proitem.link} disabled={proitem.link == "" ? surveyFormLinkDisabled : ""} id="survey_form_link" name="survey_form_link" {...register('survey_form_link')} placeholder="Image Url..." readOnly required=""
                                                  className="cursor-pointer box-shadow-3 h-10 px-4 rounded-lg border border-[#95A5A6] bg-white lable-color w-full mt-2 mb-1 text-sm placeholder-[#95A5A6] focus:outline-none" />
                                                {surveyFormLinkValidateError && <label className="error">{surveyFormLinkValidateError}</label>} */}
                                                <a href={`${process.env.CAMPAIGN_IMAGE_URL}/${proitem.fill_form_image}`} className="bac-6 w-48 py-2.5 flex rounded-lg text-white text-base font-bold justify-center items-center uppercase" >Download<i className="ml-2 fa fa-copy mr-2"></i></a>
                                              </div>
                                            </div>
                                            </>
                                          }

                                          </div>

                                          

                                        </div>

                                      </div>
                                    </div>
                                  </>
                                  :
                                  ""
                            }
                          </>
                        )
                      })

                      :
                      camp_type == 5 ?
                        campaignTaskData.map((proitem, index) => {
                          return (
                            <>
                              {
                                proitem.task_number == 14 ?
                                  <>
                                    <div className="mb-10">
                                      <h5 className="text-lg tracking-wide font-semibold lable-color mb-3">Task 1: Fill The Form<span
                                        className="text-[#E74C3C]">*</span></h5>


                                      <div className="box-shadow-1 rounded-2xl pt-3 px-6 sm:pt-7 mb-6 sm:mb-0 ">

                                        <div className="flex items-center mb-3 relative">
                                          <div className="flex items-center mr-4 mb-0">
                                            <input
                                              id="default-radio-2"
                                              type="radio"
                                              name="survey_form_task_type"
                                              {...register('survey_form_task_type')}
                                              className="hidden survey-display-task"
                                              onClick={(event) => displaySurveyFormTask(event)}
                                              defaultChecked={proitem.fill_form_image != "" ? checked : ""}
                                              value="1"
                                            />
                                            <label
                                              htmlFor="default-radio-2"
                                              className="flex items-center cursor-pointer mr-5  text-[10px] sm:text-sm font-semibold lable-color"
                                            >
                                              <span className="w-4 h-4 inline-block mr-1 rounded-full border border-grey"></span>
                                              Fill The Form Details
                                            </label>
                                          </div>
                                          <div className="flex items-center mr-4 mb-0">
                                            <input
                                              id="default-radio-1"
                                              type="radio"
                                              name="survey_form_task_type"
                                              className="hidden survey-display-task"
                                              {...register('survey_form_task_type')}
                                              onClick={(event) => displaySurveyFormTask(event)}
                                              value="2"
                                              defaultChecked={proitem.link != "" ? checked : ""}
                                            />
                                            <label
                                              htmlFor="default-radio-1"
                                              className="flex items-center cursor-pointer mr-5 ml-2 text-[11px] sm:text-sm font-semibold lable-color"
                                            >
                                              <span className="w-4 h-4 inline-block mr-1 rounded-full border border-grey"></span>
                                              Form Link
                                            </label>
                                          </div>
                                          {surveyTaskFormTypeValidateError && <label className="error">{surveyTaskFormTypeValidateError}</label>}
                                        </div>

                                        <div
                                          className="md:block lg:flex block relative">

                                          <div
                                            className="flex-initial w-full md:11/12 lg:w-7/12 bac-1 py-2 sm:py-12 px-2 pr-4 md:py-5 lg:py-0 mr-2 mb-0 md:mb-2 lg:mb-5">


                                            <label className="mt-10 lable-color text-base font-semibold">Fill The Form Details </label>

                                            {!surveyImageUpload ?
                                              <div className="flex w-full justify-center bg-grey-lighter">
                                                <label className={`w-full flex flex-col items-center px-4 py-14 box-shadow-3 ${surveyImageImageValidateError ? "border-[#d95c5c]" : "border-[#95a5a6]"} text-blue rounded-lg border-2 border-dashed tracking-wide  border-blue cursor-pointer`}>
                                                  {
                                                    proitem.fill_form_image == "" ?
                                                      <>
                                                        <img src={uploadicon} className="w-[100px]" alt="uploadicon" />
                                                      </>
                                                      :
                                                      <>
                                                        <img src="https://revueradmin.mishry.com/uploads/campaigns/document.png" className="w-[100px]" alt="uploadicon" />
                                                      </>
                                                  }

                                                  <span className="mt-4 text-base leading-normal lable-color">
                                                    Drag & Drop or browse to choose a file
                                                  </span>
                                                  <input type="file" id="survey_image_disabled" disabled={proitem.fill_form_image == "" ? surveyFormUploadDisabled : ""} onChange={(e) => surveyImageUploader(e)} className="hidden box-shadow-3" />
                                                </label>
                                                <input id="survey_image" type="hidden" />
                                                {surveyImageImageValidateError && <label className="error">{surveyImageImageValidateError}</label>}
                                              </div>
                                              :
                                              <div className="relative flex w-full justify-center bg-grey-lighter mt-2">
                                                <img src={surveyAfterUploadicon.imageSrc} className="h-[9.3rem] w-[34.5rem] object-contain" alt="uploaded" />
                                                <div onClick={surveyImageRemover} className="cursor-pointer absolute top-[-13px] right-5 bac-6 w-8 h-8 rounded-full flex justify-center items-center">
                                                  <i className="text-lg text-white fa-solid fa-xmark"></i>
                                                </div>
                                              </div>
                                            }


                                          </div>
                                          <div className="flex-initial w-full md:11/12 lg:w-6/12 bac-1 py-2 sm:py-12 px-4 sm:px-2 pr-4 md:py-5 lg:py-0 mb-0 md:mb-2 lg:mb-5">
                                            <div
                                              className="">
                                              <label className="mt-10 mb-2 lable-color text-base font-semibold">Survey link</label>
                                              <div className="block mb-2 relative">
                                                <input type="text" defaultValue={proitem.link} disabled={proitem.link == "" ? surveyFormLinkDisabled : ""} id="survey_form_link" name="survey_form_link" {...register('survey_form_link')} placeholder="Paste here" required=""
                                                  className="box-shadow-3 h-10 px-4 rounded-lg border border-[#95A5A6] bg-white lable-color w-full mt-2 mb-1 text-sm placeholder-[#95A5A6] focus:outline-none" />
                                                {surveyFormLinkValidateError && <label className="error">{surveyFormLinkValidateError}</label>}
                                              </div>
                                            </div>

                                            {
                                              proitem.fill_form_image == "" ? ""
                                              :
                                              <>
                                              <div className="block relative">
                                                <label className="mt-10 mb-2 lable-color text-base font-semibold"> Download File</label>
                                                <div className="block mb-2 relative">
                                                  {/* <input type="text" defaultValue={proitem.link} disabled={proitem.link == "" ? surveyFormLinkDisabled : ""} id="survey_form_link" name="survey_form_link" {...register('survey_form_link')} placeholder="Image Url..." readOnly required=""
                                                    className="cursor-pointer box-shadow-3 h-10 px-4 rounded-lg border border-[#95A5A6] bg-white lable-color w-full mt-2 mb-1 text-sm placeholder-[#95A5A6] focus:outline-none" />
                                                  {surveyFormLinkValidateError && <label className="error">{surveyFormLinkValidateError}</label>} */}
                                                  <a href={`${process.env.CAMPAIGN_IMAGE_URL}/${proitem.fill_form_image}`} className="bac-6 w-48 py-2.5 flex rounded-lg text-white text-base font-bold justify-center items-center uppercase" >Download<i className="ml-2 fa fa-copy mr-2"></i></a>
                                                </div>
                                              </div>
                                              </>
                                            }
                                            


                                          </div>
                                        </div>

                                      </div>
                                    </div>
                                  </>
                                  :
                                  ""
                              }
                            </>
                          )
                        })
                        :
                        camp_type == 6 ?
                          <>
                            <div className="mb-10">
                              <div className="mb-10">

                                <div className="flex items-center justify-center h-44">
                                  <h5 className="text-2xl font-semibold text-black">Coming Soon</h5>
                                </div>

                              </div>
                            </div>
                          </>
                          :
                          camp_type == 7 ?
                            getCampaignDetailsData ?
                              getCampaignDetailsData.task_visiable == 1 ?
                                campaignTaskData.map((proitem, index) => {
                                  return (
                                    <>
                                      {
                                        proitem.task_number == 15 ?
                                          <>
                                            <div className="mb-10">

                                              <div className=" box-shadow-1 rounded-2xl pt-3 sm:pt-7 mb-6 sm:mb-8 px-4 sm:px-4 relative">
                                                <label className="font-bold">Is Product Buy Link available? </label>

                                                <div className="block sm:flex socila-mb socila-mb1 mt-4">
                                                  <div className="flex items-center mr-3 mb-0">
                                                    <input
                                                      id="influ_buy_review_visiable"
                                                      type="radio"
                                                      name="influencer_task_visiable"
                                                      className="hidden"
                                                      value="1"
                                                      onClick={(event) => displayInfluencerTaskVisiable(event)}
                                                      defaultChecked={checked.influencerBuyYesButtonChecked}
                                                      {...register('influencer_task_visiable')}
                                                    />
                                                    <label
                                                      htmlFor="influ_buy_review_visiable"
                                                      className="flex items-center cursor-pointer  ml-2 text-[11px] sm:text-xs font-medium lable-color"
                                                    >
                                                      <span className="w-4 h-4 inline-block mr-1 text-xs rounded-full border border-grey"></span>
                                                      Yes
                                                    </label>
                                                  </div>

                                                  <div className="flex items-center mr-3 mb-0">
                                                    <input
                                                      id="influ_buy_review_not_visiable"
                                                      type="radio"
                                                      name="influencer_task_visiable"
                                                      className="hidden"
                                                      value="2"
                                                      defaultChecked={checked.influencerBuyNoButtonChecked}
                                                      onClick={(event) => displayInfluencerTaskVisiable(event)}
                                                      {...register('influencer_task_visiable')}
                                                    />
                                                    <label
                                                      htmlFor="influ_buy_review_not_visiable"
                                                      className="flex items-center cursor-pointer  ml-2 text-[11px] sm:text-xs font-medium lable-color"
                                                    >
                                                      <span className="w-4 h-4 inline-block mr-1 rounded-full border border-grey"></span>
                                                      No
                                                    </label>
                                                  </div>
                                                </div>

                                              </div>

                                              <div className="" id="influencer_task_1_visiable">
                                                <h5 className="text-lg tracking-wide font-semibold lable-color mb-4">Task 1: Buy<span
                                                  className="text-[#E74C3C]">*</span></h5>
                                                <div className="md:block lg:flex block box-shadow-1 rounded-2xl pt-3 sm:pt-7 mb-6 sm:mb-8 px-4 sm:px-4 relative">
                                                  <div
                                                    className="flex-initial w-full md:11/12 lg:w-7/12 bac-1 py-2 sm:py-12 px-2 pr-4 md:py-5 lg:py-0 mr-2 mb-0 md:mb-2 lg:mb-5">
                                                    <label className="mt-10 mb-2 lable-color text-sm tracking-wide font-semibold">Product
                                                      Details</label>
                                                    <div className="block mb-2 relative">
                                                      <textarea
                                                        className="resize-none mb-2 h-32 py-3 px-2 rounded-lg border box-shadow-3 border-[#95A5A6] bg-white w-full mt-2 text-sm placeholder-[#95A5A6] focus:outline-none"
                                                        id="influencer_buy_product_details" name="influencer_buy_product_details" {...register('influencer_buy_product_details')} rows="3" defaultValue={proitem.details} disabled={influencerProductDetailsyDisabled} placeholder="Write from here"></textarea>
                                                      {influencerBuyProductDetailsValidateError && <label className="error">{influencerBuyProductDetailsValidateError}</label>}
                                                    </div>

                                                    <div className="form-check form-check-inline flex items-center mr-5 mb-2 sm:mb-5">
                                                      <input defaultChecked={proitem.screen_shot == 1 ? checked : !checked.influencerbuyimage} onChange={() => setChecked({ influencerbuyimage: !checked.influencerbuyimage })}
                                                        className="form-check-input appearance-none h-4 w-4 border border-black rounded bg-white
                            checked:bg-[#FCB43C] checked:border-none focus:outline-none transition duration-200
                            align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                                        type="checkbox"
                                                        disabled={influencerProductImageDisabled}
                                                        id="influencer_buy_product_image"
                                                        value="1"
                                                        name="influencer_buy_product_image"
                                                        {...register('influencer_buy_product_image')}
                                                      />
                                                      <label
                                                        className="form-check-label text-[9px] font-medium inline-block text-black sm:text-sm"
                                                        htmlFor="influencer_buy_product_image">Ask revuer to upload a product images.</label>
                                                    </div>
                                                  </div>

                                                  <div
                                                    className="flex-initial w-full md:11/12 lg:w-6/12 bac-1 py-2 sm:py-12 px-4 sm:px-2 pr-4 md:py-5 lg:py-0 mb-0 md:mb-2 lg:mb-5">
                                                    <div className="md:block lg:flex block mb-1 rounded-lg relative">
                                                      <div className="flex-initial w-full md:11/12 lg:w-12/12 bac-1 mr-3">
                                                        <label className="mt-6 mb-4 lable-color text-sm tracking-wide font-semibold">
                                                          Product Link </label>
                                                        <div className="block mb-2 relative">
                                                          <input type="text" defaultValue={proitem.link} id="influencer_product_link" disabled={influencerProductLinkDisabled} name="influencer_product_link" {...register('influencer_product_link')} placeholder="Paste link here" required=""
                                                            className="box-shadow-3 mb-3 h-10 px-4 rounded-lg border border-[#95A5A6] bg-white lable-color w-full mt-2 text-sm placeholder-[#95A5A6] focus:outline-none" />
                                                          <div className="absolute top-[1.2rem] right-4">
                                                            <img src={linkicon} alt="linkicon" className="w-4" />
                                                          </div>
                                                          {influencerProductLinkValidateError && <label className="error">{influencerProductLinkValidateError}</label>}
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </>
                                          :
                                          proitem.task_number == 16 ?
                                            <>
                                              <div className="" id="influencer_task_2_visiable">
                                                <div className="mb-10">
                                                  <h5 className="text-lg tracking-wide font-semibold lable-color mb-3">Task 2: Review<span
                                                    className="text-[#E74C3C]">*</span></h5>
                                                  <div className="md:block lg:flex block box-shadow-1 rounded-2xl pt-1 sm:pt-7 relative">
                                                    <div
                                                      className="flex-initial w-full md:11/12 lg:w-full bac-1 py-5 sm:py-12 px-8 pr-4 md:py-5 lg:py-0 mr-2 mb-0 md:mb-2 lg:mb-5">
                                                      <label className="mt-10 mb-2 lable-color text-sm tracking-wide font-semibold">Review
                                                        Details</label>
                                                      <div className="block mb-2 relative">
                                                        <textarea
                                                          className="resize-none mb-2 h-32 py-3 px-2 rounded-lg box-shadow-3 border border-[#95A5A6] bg-white w-full mt-2 text-sm placeholder-[#95A5A6] focus:outline-none"
                                                          id="influencer_review_details" defaultValue={proitem.details} disabled={influencerProductReviewDetailsDisabled} name="influencer_review_details" {...register('influencer_review_details')} rows="3" placeholder="Write from here"></textarea>
                                                        {influencerReviewDetailsValidateError && <label className="error">{influencerReviewDetailsValidateError}</label>}
                                                      </div>

                                                      <div className="form-check form-check-inline flex items-center mr-5 mb-3  sm:mb-5">
                                                        <input defaultChecked={proitem.screen_shot == 1 ? checked : !checked.influencerreviewimage}
                                                          onChange={() => setChecked({ influencerreviewimage: !checked.influencerreviewimage })}
                                                          className="form-check-input appearance-none h-4 w-4 border border-black rounded bg-white
                                checked:bg-[#FCB43C] checked:border-none focus:outline-none transition duration-200
                                align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                                          type="checkbox"
                                                          disabled={influencerProductReviewImageDisabled}
                                                          id="influencer_receive_product_image"
                                                          value="1"
                                                          name="influencer_receive_product_image"
                                                          {...register('influencer_receive_product_image')}
                                                        />
                                                        <label
                                                          className="form-check-label text-[9px] font-medium inline-block text-black sm:text-sm"
                                                          htmlFor="influencer_receive_product_image">Ask revuer to upload a product images.</label>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </>
                                            :
                                            proitem.task_number == 17 ?
                                              <>
                                                <div className="mb-10">
                                                  <h5 className="text-lg tracking-wide font-semibold lable-color mb-3">Task 3: Script Approval<span
                                                    className="text-[#E74C3C]">*</span></h5>
                                                  <div className="md:block lg:flex block box-shadow-1 rounded-2xl pt-1 sm:pt-7 relative">
                                                    <div
                                                      className="flex-initial w-full md:11/12 lg:w-full bac-1 py-5 sm:py-12 px-8 pr-4 md:py-5 lg:py-0 mr-2 mb-0 md:mb-2 lg:mb-5">
                                                      <label className="mt-10 mb-2 lable-color text-sm tracking-wide font-semibold">Script
                                                        Details</label>
                                                      <div className="block mb-2 relative">
                                                        <textarea
                                                          className="resize-none h-32 py-3 px-2 rounded-lg border box-shadow-3 border-[#95A5A6] bg-white w-full mt-2 mb-1 text-sm placeholder-[#95A5A6] focus:outline-none"
                                                          id="influencer_script_approval" defaultValue={proitem.details} name="influencer_script_approval" {...register('influencer_script_approval')} rows="3" placeholder="Write from here"></textarea>
                                                        {influencerScriptApprovalValidateError && <label className="error">{influencerScriptApprovalValidateError}</label>}
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </>
                                              :
                                              proitem.task_number == 18 ?
                                                <>
                                                  <div className="mb-10">
                                                    <h5 className="text-lg tracking-wide font-semibold lable-color mb-3">Task 4: Draft Upload<span
                                                      className="text-[#E74C3C]">*</span></h5>
                                                    <div className="md:block lg:flex block box-shadow-1 rounded-2xl pt-1 sm:pt-7 relative">
                                                      <div
                                                        className="flex-initial w-full md:11/12 lg:w-full bac-1 py-5 sm:py-12 px-8 pr-4 md:py-5 lg:py-0 mr-2 mb-0 md:mb-2 lg:mb-5">
                                                        <label className="mt-10 mb-2 lable-color text-sm tracking-wide font-semibold">Draft upload
                                                          Details</label>
                                                        <div className="block mb-2 relative">
                                                          <textarea
                                                            className="resize-none mb-2 h-32 py-3 px-2 rounded-lg border box-shadow-3 border-[#95A5A6] bg-white w-full mt-2 text-sm placeholder-[#95A5A6]"
                                                            id="influencer_draft_upload" defaultValue={proitem.details} name="influencer_draft_upload" {...register('influencer_draft_upload')} rows="3" placeholder="Write from here"></textarea>
                                                          {influencerDraftUploadValidateError && <label className="error">{influencerDraftUploadValidateError}</label>}
                                                        </div>

                                                        <div className="form-check form-check-inline flex items-center mr-5 mb-3 sm:mb-5">
                                                          <input defaultChecked={proitem.screen_shot == 1 ? checked : !checked.influencerdraftimage} onChange={() => setChecked({ influencerdraftimage: !checked.influencerdraftimage })}
                                                            className="form-check-input appearance-none h-4 w-4 border border-black rounded bg-white
                                checked:bg-[#FCB43C] checked:border-none focus:outline-none transition duration-200
                                align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                                            type="checkbox"
                                                            id="influencer_draft_upload_image"
                                                            value="1"
                                                            name="influencer_draft_upload_image"
                                                            {...register('influencer_draft_upload_image')}
                                                          />
                                                          <label
                                                            className="form-check-label text-[9px] font-medium inline-block text-black sm:text-sm"
                                                            htmlFor="influencer_draft_upload_image">Ask revuer to upload a video.</label>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </>
                                                :
                                                proitem.task_number == 19 ?
                                                  <>
                                                    <div className="mb-10">
                                                      <h5 className="text-lg tracking-wide font-semibold lable-color mb-3">Task 5: Publish upon
                                                        Approval<span className="text-[#E74C3C]">*</span></h5>
                                                      <div
                                                        className="md:block lg:flex block box-shadow-1 rounded-2xl pt-1 sm:pt-7 pb-10 lg:pb-0 relative">
                                                        <div
                                                          className="flex-initial w-full md:11/12 lg:w-6/12 bac-1 py-5 sm:py-12 px-8 pr-4 md:py-5 lg:py-0 mr-2 mb-0 md:mb-2 lg:mb-5">
                                                          <label className="mt-10 mb-2 lable-color text-base font-semibold">Publish Details</label>
                                                          <div className="block mb-2 relative">
                                                            <textarea
                                                              className="resize-none mb-2 h-32 py-3 px-2 rounded-lg box-shadow-3 border border-[#95A5A6] bg-white w-full mt-2 text-sm placeholder-[#95A5A6] focus:outline-none"
                                                              id="influencer_publish_details" defaultValue={proitem.details} name="influencer_publish_details" {...register('influencer_publish_details')} rows="3" placeholder="Write from here"></textarea>
                                                            {influencerPublishDetailsValidateError && <label className="error">{influencerPublishDetailsValidateError}</label>}
                                                          </div>
                                                          <div className="form-check form-check-inline flex items-center mr-5 mb-3 sm:mb-5">
                                                            <input defaultChecked={proitem.screen_shot == 1 ? checked : !checked.influencerpublishvideo} onChange={() => setChecked({ influencerpublishvideo: !checked.influencerpublishvideo })}
                                                              className="form-check-input appearance-none h-4 w-4 border border-black rounded bg-white
                                checked:bg-[#FCB43C] checked:border-none focus:outline-none transition duration-200
                                align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                                              type="checkbox"
                                                              id="influencer_publish_video"
                                                              value="1"
                                                              name="influencer_publish_video"
                                                              {...register('influencer_publish_video')}
                                                            />
                                                            <label
                                                              className="form-check-label text-[9px] font-medium inline-block text-black sm:text-xs"
                                                              htmlFor="influencer_publish_video">Ask revuer to submit a published video</label>
                                                          </div>
                                                        </div>
                                                        <div
                                                          className="flex-initial w-full md:11/12 lg:w-6/12 bac-1 py-5 sm:py-12 px-2 pr-4 md:py-5 lg:py-0 mb-0 md:mb-2 lg:mb-5">
                                                          <label className="mt-6 lable-color text-base font-semibold mb-2">Video Duration<span
                                                            className="text-[#E74C3C]">*</span></label>
                                                          <div className="block relative">
                                                            <select id="influencer_video_duration"
                                                              name="influencer_video_duration"
                                                              {...register("influencer_video_duration")} className="mt-2 form-select appearance-none block w-full px-3 h-12 text-sm font-normal lable-color bg-white bg-clip-padding bg-no-repeat rounded-lg border border-[#95A5A6] transition ease-in-out m-2 focus:text-gray-700 focus:bg-white focus:border-black focus:outline-none" aria-label="Default select example focus:outline-none">
                                                              {videoDurationList.map((item, index) => {
                                                                return (
                                                                  <option key={item._id} value={item._id} selected={item._id == proitem.video_duration_id ? "selected" : ""} >{item.name}</option>
                                                                )
                                                              })}
                                                            </select>
                                                            <img src={selecticon} alt="selecticon"
                                                              className="w-3 h-2.5 absolute top-[20px] right-2.5  block sm:mr-2 sm:m-none mx-auto" />
                                                            {influencerDurationValidateError && <label className="error">{influencerDurationValidateError}</label>}
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </>
                                                  :
                                                  ""
                                      }
                                    </>
                                  )
                                })
                                :
                                campaignTaskData.map((proitem, index) => {
                                  return (
                                    <>
                                      {
                                        proitem.task_number == 17 ?
                                          <>
                                            <div className="mb-10">

                                              <div className=" box-shadow-1 rounded-2xl pt-3 sm:pt-7 mb-6 sm:mb-8 px-4 sm:px-4 relative">
                                                <label className="font-bold">Is Product Buy Link available? </label>

                                                <div className="block sm:flex socila-mb socila-mb1 mt-4">
                                                  <div className="flex items-center mr-3 mb-0">
                                                    <input
                                                      id="influ_buy_review_visiable"
                                                      type="radio"
                                                      name="influencer_task_visiable"
                                                      className="hidden"
                                                      value="1"
                                                      onClick={(event) => displayInfluencerTaskVisiable(event)}
                                                      defaultChecked={checked.influencerTaskYesBuyYesButtonChecked}
                                                      {...register('influencer_task_visiable')}
                                                    />
                                                    <label
                                                      htmlFor="influ_buy_review_visiable"
                                                      className="flex items-center cursor-pointer  ml-2 text-[11px] sm:text-xs font-medium lable-color"
                                                    >
                                                      <span className="w-4 h-4 inline-block mr-1 text-xs rounded-full border border-grey"></span>
                                                      Yes
                                                    </label>
                                                  </div>

                                                  <div className="flex items-center mr-3 mb-0">
                                                    <input
                                                      id="influ_buy_review_not_visiable"
                                                      type="radio"
                                                      name="influencer_task_visiable"
                                                      className="hidden"
                                                      value="2"
                                                      defaultChecked={checked.influencerTaskNoBuyNoButtonChecked}
                                                      onClick={(event) => displayInfluencerTaskVisiable(event)}
                                                      {...register('influencer_task_visiable')}
                                                    />
                                                    <label
                                                      htmlFor="influ_buy_review_not_visiable"
                                                      className="flex items-center cursor-pointer  ml-2 text-[11px] sm:text-xs font-medium lable-color"
                                                    >
                                                      <span className="w-4 h-4 inline-block mr-1 rounded-full border border-grey"></span>
                                                      No
                                                    </label>
                                                  </div>
                                                </div>

                                              </div>

                                              <div className="task-visiable-class" id="influencer_task_1_visiable">
                                                <h5 className="text-lg tracking-wide font-semibold lable-color mb-4">Task 1: Buy<span
                                                  className="text-[#E74C3C]">*</span></h5>
                                                <div className="md:block lg:flex block box-shadow-1 rounded-2xl pt-3 sm:pt-7 mb-6 sm:mb-8 px-4 sm:px-4 relative">
                                                  <div
                                                    className="flex-initial w-full md:11/12 lg:w-7/12 bac-1 py-2 sm:py-12 px-2 pr-4 md:py-5 lg:py-0 mr-2 mb-0 md:mb-2 lg:mb-5">
                                                    <label className="mt-10 mb-2 lable-color text-sm tracking-wide font-semibold">Product
                                                      Details</label>
                                                    <div className="block mb-2 relative">
                                                      <textarea
                                                        className="resize-none mb-2 h-32 py-3 px-2 rounded-lg border box-shadow-3 border-[#95A5A6] bg-white w-full mt-2 text-sm placeholder-[#95A5A6] focus:outline-none"
                                                        id="influencer_buy_product_details" name="influencer_buy_product_details" {...register('influencer_buy_product_details')} rows="3" disabled={influencerTaskNoProductDetailsyDisabled} placeholder="Write from here"></textarea>
                                                      {influencerBuyProductDetailsValidateError && <label className="error">{influencerBuyProductDetailsValidateError}</label>}
                                                    </div>

                                                    <div className="form-check form-check-inline flex items-center mr-5 mb-2 sm:mb-5">
                                                      <input defaultValue={checked.influencerbuyimage} onChange={() => setChecked({ influencerbuyimage: !checked.influencerbuyimage })}
                                                        className="form-check-input appearance-none h-4 w-4 border border-black rounded bg-white
          checked:bg-[#FCB43C] checked:border-none focus:outline-none transition duration-200
          align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                                        type="checkbox"
                                                        disabled={influencerTaskNoProductImageDisabled}
                                                        id="influencer_buy_product_image"
                                                        value="1"
                                                        name="influencer_buy_product_image"
                                                        {...register('influencer_buy_product_image')}
                                                      />
                                                      <label
                                                        className="form-check-label text-[9px] font-medium inline-block text-black sm:text-sm"
                                                        htmlFor="influencer_buy_product_image">Ask revuer to upload a product images.</label>
                                                    </div>
                                                  </div>

                                                  <div
                                                    className="flex-initial w-full md:11/12 lg:w-6/12 bac-1 py-2 sm:py-12 px-4 sm:px-2 pr-4 md:py-5 lg:py-0 mb-0 md:mb-2 lg:mb-5">
                                                    <div className="md:block lg:flex block mb-1 rounded-lg relative">
                                                      <div className="flex-initial w-full md:11/12 lg:w-12/12 bac-1 mr-3">
                                                        <label className="mt-6 mb-4 lable-color text-sm tracking-wide font-semibold">
                                                          Product Link </label>
                                                        <div className="block mb-2 relative">
                                                          <input type="text" id="influencer_product_link" disabled={influencerTaskNoProductLinkDisabled} name="influencer_product_link" {...register('influencer_product_link')} placeholder="Paste link here" required=""
                                                            className="box-shadow-3 mb-3 h-10 px-4 rounded-lg border border-[#95A5A6] bg-white lable-color w-full mt-2 text-sm placeholder-[#95A5A6] focus:outline-none" />
                                                          <div className="absolute top-[1.2rem] right-4">
                                                            <img src={linkicon} alt="linkicon" className="w-4" />
                                                          </div>
                                                          {influencerProductLinkValidateError && <label className="error">{influencerProductLinkValidateError}</label>}
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>

                                            <div className="task-visiable-class" id="influencer_task_2_visiable">
                                              <div className="mb-10">
                                                <h5 className="text-lg tracking-wide font-semibold lable-color mb-3">Task 2: Review<span
                                                  className="text-[#E74C3C]">*</span></h5>
                                                <div className="md:block lg:flex block box-shadow-1 rounded-2xl pt-1 sm:pt-7 relative">
                                                  <div
                                                    className="flex-initial w-full md:11/12 lg:w-full bac-1 py-5 sm:py-12 px-8 pr-4 md:py-5 lg:py-0 mr-2 mb-0 md:mb-2 lg:mb-5">
                                                    <label className="mt-10 mb-2 lable-color text-sm tracking-wide font-semibold">Review
                                                      Details</label>
                                                    <div className="block mb-2 relative">
                                                      <textarea
                                                        className="resize-none mb-2 h-32 py-3 px-2 rounded-lg box-shadow-3 border border-[#95A5A6] bg-white w-full mt-2 text-sm placeholder-[#95A5A6] focus:outline-none"
                                                        id="influencer_review_details" disabled={influencerTaskNoProductReviewDetailsDisabled} name="influencer_review_details" {...register('influencer_review_details')} rows="3" placeholder="Write from here"></textarea>
                                                      {influencerReviewDetailsValidateError && <label className="error">{influencerReviewDetailsValidateError}</label>}
                                                    </div>

                                                    <div className="form-check form-check-inline flex items-center mr-5 mb-3  sm:mb-5">
                                                      <input defaultValue={checked.influencerreviewimage}
                                                        onChange={() => setChecked({ influencerreviewimage: !checked.influencerreviewimage })}
                                                        className="form-check-input appearance-none h-4 w-4 border border-black rounded bg-white
              checked:bg-[#FCB43C] checked:border-none focus:outline-none transition duration-200
              align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                                        type="checkbox"
                                                        disabled={influencerTaskNoProductReviewImageDisabled}
                                                        id="influencer_receive_product_image"
                                                        value="1"
                                                        name="influencer_receive_product_image"
                                                        {...register('influencer_receive_product_image')}
                                                      />
                                                      <label
                                                        className="form-check-label text-[9px] font-medium inline-block text-black sm:text-sm"
                                                        htmlFor="influencer_receive_product_image">Ask revuer to upload a product images.</label>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="mb-10">
                                              <h5 className="text-lg tracking-wide font-semibold lable-color mb-3">Task 3: Script Approval<span
                                                className="text-[#E74C3C]">*</span></h5>
                                              <div className="md:block lg:flex block box-shadow-1 rounded-2xl pt-1 sm:pt-7 relative">
                                                <div
                                                  className="flex-initial w-full md:11/12 lg:w-full bac-1 py-5 sm:py-12 px-8 pr-4 md:py-5 lg:py-0 mr-2 mb-0 md:mb-2 lg:mb-5">
                                                  <label className="mt-10 mb-2 lable-color text-sm tracking-wide font-semibold">Script
                                                    Details</label>
                                                  <div className="block mb-2 relative">
                                                    <textarea
                                                      className="resize-none h-32 py-3 px-2 rounded-lg border box-shadow-3 border-[#95A5A6] bg-white w-full mt-2 mb-1 text-sm placeholder-[#95A5A6] focus:outline-none"
                                                      id="influencer_script_approval" defaultValue={proitem.details} name="influencer_script_approval" {...register('influencer_script_approval')} rows="3" placeholder="Write from here"></textarea>
                                                    {influencerScriptApprovalValidateError && <label className="error">{influencerScriptApprovalValidateError}</label>}
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </>
                                          :
                                          proitem.task_number == 18 ?
                                            <>
                                              <div className="mb-10">
                                                <h5 className="text-lg tracking-wide font-semibold lable-color mb-3">Task 4: Draft Upload<span
                                                  className="text-[#E74C3C]">*</span></h5>
                                                <div className="md:block lg:flex block box-shadow-1 rounded-2xl pt-1 sm:pt-7 relative">
                                                  <div
                                                    className="flex-initial w-full md:11/12 lg:w-full bac-1 py-5 sm:py-12 px-8 pr-4 md:py-5 lg:py-0 mr-2 mb-0 md:mb-2 lg:mb-5">
                                                    <label className="mt-10 mb-2 lable-color text-sm tracking-wide font-semibold">Draft upload
                                                      Details</label>
                                                    <div className="block mb-2 relative">
                                                      <textarea
                                                        className="resize-none mb-2 h-32 py-3 px-2 rounded-lg border box-shadow-3 border-[#95A5A6] bg-white w-full mt-2 text-sm placeholder-[#95A5A6]"
                                                        id="influencer_draft_upload" defaultValue={proitem.details} name="influencer_draft_upload" {...register('influencer_draft_upload')} rows="3" placeholder="Write from here"></textarea>
                                                      {influencerDraftUploadValidateError && <label className="error">{influencerDraftUploadValidateError}</label>}
                                                    </div>

                                                    <div className="form-check form-check-inline flex items-center mr-5 mb-3 sm:mb-5">
                                                      <input defaultChecked={proitem.screen_shot == 1 ? checked : !checked.influencerdraftimage} onChange={() => setChecked({ influencerdraftimage: !checked.influencerdraftimage })}
                                                        className="form-check-input appearance-none h-4 w-4 border border-black rounded bg-white
                                checked:bg-[#FCB43C] checked:border-none focus:outline-none transition duration-200
                                align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                                        type="checkbox"
                                                        id="influencer_draft_upload_image"
                                                        value="1"
                                                        name="influencer_draft_upload_image"
                                                        {...register('influencer_draft_upload_image')}
                                                      />
                                                      <label
                                                        className="form-check-label text-[9px] font-medium inline-block text-black sm:text-sm"
                                                        htmlFor="influencer_draft_upload_image">Ask revuer to upload a video.</label>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </>
                                            :
                                            proitem.task_number == 19 ?
                                              <>
                                                <div className="mb-10">
                                                  <h5 className="text-lg tracking-wide font-semibold lable-color mb-3">Task 5: Publish upon
                                                    Approval<span className="text-[#E74C3C]">*</span></h5>
                                                  <div
                                                    className="md:block lg:flex block box-shadow-1 rounded-2xl pt-1 sm:pt-7 pb-10 lg:pb-0 relative">
                                                    <div
                                                      className="flex-initial w-full md:11/12 lg:w-6/12 bac-1 py-5 sm:py-12 px-8 pr-4 md:py-5 lg:py-0 mr-2 mb-0 md:mb-2 lg:mb-5">
                                                      <label className="mt-10 mb-2 lable-color text-base font-semibold">Publish Details</label>
                                                      <div className="block mb-2 relative">
                                                        <textarea
                                                          className="resize-none mb-2 h-32 py-3 px-2 rounded-lg box-shadow-3 border border-[#95A5A6] bg-white w-full mt-2 text-sm placeholder-[#95A5A6] focus:outline-none"
                                                          id="influencer_publish_details" defaultValue={proitem.details} name="influencer_publish_details" {...register('influencer_publish_details')} rows="3" placeholder="Write from here"></textarea>
                                                        {influencerPublishDetailsValidateError && <label className="error">{influencerPublishDetailsValidateError}</label>}
                                                      </div>
                                                      <div className="form-check form-check-inline flex items-center mr-5 mb-3 sm:mb-5">
                                                        <input defaultChecked={proitem.screen_shot == 1 ? checked : !checked.influencerpublishvideo} onChange={() => setChecked({ influencerpublishvideo: !checked.influencerpublishvideo })}
                                                          className="form-check-input appearance-none h-4 w-4 border border-black rounded bg-white
                                checked:bg-[#FCB43C] checked:border-none focus:outline-none transition duration-200
                                align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                                          type="checkbox"
                                                          id="influencer_publish_video"
                                                          value="1"
                                                          name="influencer_publish_video"
                                                          {...register('influencer_publish_video')}
                                                        />
                                                        <label
                                                          className="form-check-label text-[9px] font-medium inline-block text-black sm:text-xs"
                                                          htmlFor="influencer_publish_video">Ask revuer to submit a published video</label>
                                                      </div>
                                                    </div>
                                                    <div
                                                      className="flex-initial w-full md:11/12 lg:w-6/12 bac-1 py-5 sm:py-12 px-2 pr-4 md:py-5 lg:py-0 mb-0 md:mb-2 lg:mb-5">
                                                      <label className="mt-6 lable-color text-base font-semibold mb-2">Video Duration<span
                                                        className="text-[#E74C3C]">*</span></label>
                                                      <div className="block relative">
                                                        <select id="influencer_video_duration"
                                                          name="influencer_video_duration"
                                                          {...register("influencer_video_duration")} className="mt-2 form-select appearance-none block w-full px-3 h-12 text-sm font-normal lable-color bg-white bg-clip-padding bg-no-repeat rounded-lg border border-[#95A5A6] transition ease-in-out m-2 focus:text-gray-700 focus:bg-white focus:border-black focus:outline-none" aria-label="Default select example focus:outline-none">
                                                          {videoDurationList.map((item, index) => {
                                                            return (
                                                              <option key={item._id} value={item._id} selected={item._id == proitem.video_duration_id ? "selected" : ""} >{item.name}</option>
                                                            )
                                                          })}
                                                        </select>
                                                        <img src={selecticon} alt="selecticon"
                                                          className="w-3 h-2.5 absolute top-[20px] right-2.5  block sm:mr-2 sm:m-none mx-auto" />
                                                        {influencerDurationValidateError && <label className="error">{influencerDurationValidateError}</label>}
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </>
                                              :
                                              ""
                                      }
                                    </>
                                  )
                                })
                              :
                              ""
                            :
                            ""
            }

            <h5 className="text-xl font-semibold lable-color mb-2">Other</h5>
            <div className="mb-10 box-shadow-1 rounded-2xl pt-9 px-3 sm:px-8 pb-8">
              <div className="md:block lg:flex block">
                <div className="flex-initial w-full md:11/12 lg:w-7/12 bac-1 py-2 lg:py-2 pr-4 md:py-5  mr-2 mb-0 md:mb-2 lg:mb-0">
                  <label className="mt-6 lable-color text-base font-semibold">
                    Do’s
                  </label>
                  <div className="block">
                    <textarea
                      className="resize-none mb-0 h-20 py-3 px-2 rounded-lg border box-shadow-3 border-[#95A5A6] bg-white w-full mt-2 text-sm"
                      id="do"
                      rows="3"
                      name="do"
                      defaultValue={getCampaignDetailsData ? getCampaignDetailsData.dos : ""}
                      {...register("do")}
                      placeholder="Write From here"
                    ></textarea>
                  </div>
                </div>

                <div className="flex-initial w-full md:11/12 lg:w-6/12 bac-1 py-2  lg:py-2 md:pl-0 lg:pl-2 md:py-5  mb-0 md:mb-2 lg:mb-0">
                  <label className="mt-6 lable-color text-base font-semibold">
                    Dont’s
                  </label>
                  <div className="block">
                    <textarea
                      className="resize-none mb-0 h-20 py-3 px-2 rounded-lg border box-shadow-3 border-[#95A5A6] bg-white w-full mt-2  text-sm"
                      id="dont"
                      rows="3"
                      name="dont"
                      {...register("dont")}
                      defaultValue={getCampaignDetailsData ? getCampaignDetailsData.donts : ""}
                      placeholder="Write From here"
                    ></textarea>
                  </div>
                </div>
              </div>
              {/* <div>
                <label className="mt-6 lable-color text-base font-semibold">
                  Any Additional Details
                </label>
                <div className="block">
                  <textarea
                    className="resize-none mb-8 h-20 py-3 px-2 rounded-lg border box-shadow-3 border-[#95A5A6] bg-white w-full mt-2  text-sm"
                    id="additionals"
                    name="additionals"
                    {...register("additionals")}
                    rows="3"
                    defaultValue={getCampaignDetailsData ? getCampaignDetailsData.additionals : ""}
                    placeholder="Write From here"
                  ></textarea>
                </div>

              </div> */}

              <label className="mt-2 lable-color text-base font-semibold">
                {" "}
                Interests<span className="text-[#E74C3C]">*</span>
              </label>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 grid-set gap-1 mt-1 relative">

                {interestsList.map((item, index) => {
                  return (
                    <div className="w-52 sm:w-full">
                      <div className="ram">
                        <div>
                          <input id={'toggle' + index} name="interests[]" defaultChecked={getCampaignDetailsDataInterests ? getCampaignDetailsDataInterests.find(element => element == item.id) ? "checked" : "" : ""} value={item.id} {...register("interests")} type="checkbox" />
                          <label htmlFor={'toggle' + index}>{item.name}</label>
                        </div>
                      </div>
                    </div>
                  )
                })}
                {interestsValidateError && <label className="error">{interestsValidateError}</label>}
              </div>

            </div>

            <div className="md:block lg:flex block mb-5">
              <div className="flex-initial w-full md:11/12 lg:w-7/12 bac-1 py-2 sm:py-8 px-2 pr-4 md:py-5 lg:py-0 mr-2 mb-0 md:mb-2 lg:mb-5">
                <h5 className="text-lg tracking-wide font-semibold lable-color mb-2">
                  Campaign Budget & Revuer Limit
                  <span className="text-[#E74C3C]">*</span>
                </h5>

                <div className="box-shadow-1 rounded-xl py-[1.6rem] px-6 sm:px-9">
                  <div className="md:block lg:flex block mb-3">
                    <div className="flex-initial w-full md:11/12 lg:w-7/12 bac-1 mr-6 mb-0">
                      <label className="mt-6 lable-color text-sm tracking-wide font-semibold">
                        Campaign Budget
                      </label>
                      <div className="block relative">
                        <input
                          type="number"
                          id="budget"
                          name="budget"
                          {...register("budget")}
                          onKeyUp={(event) => campaignBudgetValid(event)}
                          placeholder="Enter Budget"
                          defaultValue={getCampaignDetailsData ? getCampaignDetailsData.budget : ""}
                          required=""
                          className="box-shadow-3 h-12 px-2 rounded-lg border border-[#95A5A6] bg-white w-full mt-2 mb-2 placeholder:text-[#95a5a6] text-sm pl-20 focus:outline-none"
                        />
                        <div className="absolute top-2 left-0 py-3 px-6 border-r border-[#95A5A6]">
                          ₹
                        </div>
                        {budgetValidateError && <label className="error">{budgetValidateError}</label>}
                      </div>
                    </div>

                    <div className="flex-initial w-full md:11/12 lg:w-7/12 bac-1">
                      <label className="mt-6 lable-color text-sm tracking-wide font-semibold">
                        Revuer Limit
                      </label>
                      <div className="block relative">
                        <select name="revuerlimit" id="revuerlimit" {...register('revuerlimit')}
                          className="mt-2 form-select appearance-none block w-full px-3 h-12 text-sm font-normal lable-color bg-white bg-clip-padding bg-no-repeat rounded-lg border border-[#95A5A6] transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-black focus:outline-none" aria-label="Default select example">
                          <option value="">None</option>
                          {revuerLimitList.map((item, index) => {
                            return (
                              <option key={item._id} value={item._id} selected={getCampaignDetailsData ? getCampaignDetailsData.revuerLimit == item._id ? "selected" : "" : ""} >{item.revuers_count}</option>
                            )
                          })}
                        </select>
                        <img
                          src={selecticon}
                          alt="selecticon"
                          className="w-3 h-2.5 absolute top-[20px] right-2.5  block sm:mr-2 sm:m-none mx-auto"
                        />
                        {revuerLimitValidateError && <label className="error">{revuerLimitValidateError}</label>}
                      </div>
                    </div>
                  </div>
                </div>
              </div>



              <div className="pointer-events-none blur-[3px] flex-initial sub-width-2 w-full md:11/12 lg:w-7/12 bac-1 py-6 md:py-5 lg:py-0 mb-0 md:mb-2 lg:mb-5">
                <h5 className="text-lg tracking-wide font-semibold lable-color mb-2">
                  Campaign Payment<span className="text-[#E74C3C]">*</span>
                </h5>
                <div className="box-shadow-1 rounded-xl py-6 px-9">
                  <h4 className="text-base font-semibold lable-color mb-4">
                    Pay with
                  </h4>
                  <div className="flex items-center mb-3">
                    <div className="flex items-center mr-4 mb-0">
                      <input
                        id="default-radio-2"
                        type="radio"
                        name="radio"
                        className="hidden"
                        checked
                      />
                      <label
                        htmlFor="default-radio-2"
                        className="flex items-center cursor-pointer mr-5  text-[10px] sm:text-sm font-semibold lable-color"
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
                      />
                      <label
                        htmlFor="default-radio-1"
                        className="flex items-center cursor-pointer mr-5 ml-2 text-[11px] sm:text-sm font-semibold lable-color"
                      >
                        <span className="w-4 h-4 inline-block mr-1 rounded-full border border-grey"></span>
                        Net Banking
                      </label>
                    </div>
                  </div>

                  <div className="lg:flex block ">
                    <div className="flex-initial relative w-full md:11/12 lg:w-6/12 bac-1 py-2 sm:py-8 md:py-5 lg:py-0 mr-4 mb-0 md:mb-0 lg:mb-0">
                      <div className="custom-select ">
                        <select>
                          <option className="select-options color-3" value="0">
                            Select saved card
                          </option>
                          <option value="1">Visa ****1234 Manan Sharma</option>
                          <option value="2">Mater ****4444 Manan Sharma</option>
                          <option value="3">Rupay ****1010 Manan Sharma</option>
                          <option value="4">Visa ****0987 Manan Sharma</option>
                        </select>
                      </div>
                      <img
                        src={selecticon}
                        alt="selecticon"
                        className="w-3 h-2.5 absolute top-[28px] md:top-[40px] lg:top-[20px] right-2.5  block sm:mr-2 sm:m-none mx-auto"
                      />
                    </div>

                    <div className="flex-initial w-full md:11/12 flex items-center lg:w-6/12 bac-1 py-2 sm:py-8 md:py-5 lg:py-0 mb-0 md:mb-2 lg:mb-0">
                      <div className="flex items-center">
                        <button className="add-button text-sm uppercase font-semibold rounded h-10 bac-3 px-4 py-2 mr-6 text-white">
                          Add new card
                        </button>
                        <button className="uppercase bac-3 px-8 py-2 text-sm font-semibold h-10 text-white rounded">
                          Pay
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <div className="md:block lg:flex block mb-5">
              {
                camp_type == 2 || camp_type == 3 || camp_type == 7
                  ?
                  <>
                    <div className="flex-initial w-full md:11/12 lg:w-6/12 bac-1 py-2 lg:py-2 px-2 pr-4 md:py-5 mr-2 mb-0 md:mb-2 lg:mb-5">
                      <h5 className="text-xl tracking-wide font-semibold lable-color mb-2">
                        Select Social Platform<span className="text-[#E74C3C]">{camp_type == 7 ? "*" : ""}</span>
                      </h5>
                      {/* <div className="box-shadow-1 rounded-xl py-8 py-s px-4 relative">
                        <div className="block lg:flex social-break">
                          <div className="block sm:flex socila-mb socila-mb1">
                            <div className="flex items-center mr-3 mb-0">
                              <input
                                id="social_facebook"
                                type="radio"
                                name="social_media"
                                className="hidden"
                                value="1"
                                defaultChecked={getCampaignDetailsData ? getCampaignDetailsData.social_icon == "1" ? "checked" : "" : ""}
                                {...register('social_media')}
                              />
                              <label
                                htmlFor="social_facebook"
                                className="flex items-center cursor-pointer  ml-2 text-[11px] sm:text-xs font-medium lable-color"
                              >
                                <span className="w-4 h-4 inline-block mr-1 text-xs rounded-full border border-grey"></span>
                                Facebook
                              </label>
                            </div>

                            <div className="flex items-center mr-3 mb-0">
                              <input
                                id="social_instagram"
                                type="radio"
                                name="social_media"
                                className="hidden"
                                value="2"
                                defaultChecked={getCampaignDetailsData ? getCampaignDetailsData.social_icon == "2" ? "checked" : "" : ""}
                                {...register('social_media')}
                              />
                              <label
                                htmlFor="social_instagram"
                                className="flex items-center cursor-pointer  ml-2 text-[11px] sm:text-xs font-medium lable-color"
                              >
                                <span className="w-4 h-4 inline-block mr-1 rounded-full border border-grey"></span>
                                Instagram
                              </label>
                            </div>

                            <div className="flex items-center mr-3 mb-0">
                              <input
                                id="social_twitter"
                                type="radio"
                                name="social_media"
                                className="hidden"
                                value="3"
                                defaultChecked={getCampaignDetailsData ? getCampaignDetailsData.social_icon == "3" ? "checked" : "" : ""}
                                {...register('social_media')}
                              />
                              <label
                                htmlFor="social_twitter"
                                className="flex items-center cursor-pointer  ml-2 text-[11px] sm:text-xs font-medium lable-color"
                              >
                                <span className="w-4 h-4 inline-block mr-1 rounded-full border border-grey"></span>
                                Twitter
                              </label>
                            </div>
                          </div>

                          <div className="block sm:flex ">
                            <div className="flex items-center mr-3 mb-0">
                              <input
                                id="social_youtube"
                                type="radio"
                                name="social_media"
                                className="hidden"
                                value="4"
                                defaultChecked={getCampaignDetailsData ? getCampaignDetailsData.social_icon == "4" ? "checked" : "" : ""}
                                {...register('social_media')}
                              />
                              <label
                                htmlFor="social_youtube"
                                className="flex items-center cursor-pointer ml-2 text-[11px] sm:text-xs font-medium lable-color"
                              >
                                <span className="w-4 h-4 inline-block mr-1 rounded-full border border-grey"></span>
                                Youtube
                              </label>
                            </div>

                            <div className="flex items-center mr-3 mb-0">
                              <input
                                id="social_pinterest"
                                type="radio"
                                name="social_media"
                                className="hidden"
                                value="5"
                                defaultChecked={getCampaignDetailsData ? getCampaignDetailsData.social_icon == "5" ? "checked" : "" : ""}
                                {...register('social_media')}
                              />
                              <label
                                htmlFor="social_pinterest"
                                className="flex items-center cursor-pointer ml-2 text-[11px] sm:text-xs font-medium lable-color"
                              >
                                <span className="w-4 h-4 inline-block mr-1 rounded-full border border-grey"></span>
                                Pinterest
                              </label>
                            </div>

                            <div className="flex items-center mr-3 mb-0">
                              <input
                                id="social_linked"
                                type="radio"
                                name="social_media"
                                className="hidden"
                                value="6"
                                defaultChecked={getCampaignDetailsData ? getCampaignDetailsData.social_icon == "6" ? "checked" : "" : ""}
                                {...register('social_media')}
                              />
                              <label
                                htmlFor="social_linked"
                                className="flex items-center cursor-pointer ml-2 text-[11px] sm:text-xs font-medium lable-color"
                              >
                                <span className="w-4 h-4 inline-block mr-1 rounded-full border border-grey"></span>
                                LinkedIn
                              </label>
                            </div>
                          </div>
                        </div>
                        {socialMediaValidateError && <label className="error">{socialMediaValidateError}</label>}
                      </div> */}
                      <div className="box-shadow-1 rounded-xl py-8 py-s px-4 relative">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
                          <div className="flex items-center mr-3 mb-0">
                            <input
                              id="social_facebook"
                              type="radio"
                              name="social_media"
                              className="hidden"
                              value="1"
                              defaultChecked={getCampaignDetailsData ? getCampaignDetailsData.social_icon == "1" ? "checked" : "" : ""}
                              {...register('social_media')}
                            />
                            <label
                              htmlFor="social_facebook"
                              className="flex items-center cursor-pointer  ml-2 text-[11px] sm:text-xs font-medium lable-color"
                            >
                              <span className="w-4 h-4 inline-block mr-1 text-xs rounded-full border border-grey"></span>
                              Facebook
                            </label>
                          </div>

                          <div className="flex items-center mr-3 mb-0">
                            <input
                              id="social_instagram"
                              type="radio"
                              name="social_media"
                              className="hidden"
                              value="2"
                              defaultChecked={getCampaignDetailsData ? getCampaignDetailsData.social_icon == "2" ? "checked" : "" : ""}
                              {...register('social_media')}
                            />
                            <label
                              htmlFor="social_instagram"
                              className="flex items-center cursor-pointer  ml-2 text-[11px] sm:text-xs font-medium lable-color"
                            >
                              <span className="w-4 h-4 inline-block mr-1 rounded-full border border-grey"></span>
                              Instagram
                            </label>
                          </div>

                          <div className="flex items-center mr-3 mb-0">
                            <input
                              id="social_twitter"
                              type="radio"
                              name="social_media"
                              className="hidden"
                              value="3"
                              defaultChecked={getCampaignDetailsData ? getCampaignDetailsData.social_icon == "3" ? "checked" : "" : ""}
                              {...register('social_media')}
                            />
                            <label
                              htmlFor="social_twitter"
                              className="flex items-center cursor-pointer  ml-2 text-[11px] sm:text-xs font-medium lable-color"
                            >
                              <span className="w-4 h-4 inline-block mr-1 rounded-full border border-grey"></span>
                              Twitter
                            </label>
                          </div>
                          <div className="flex items-center mr-3 mb-0">
                            <input
                              id="social_youtube"
                              type="radio"
                              name="social_media"
                              className="hidden"
                              value="4"
                              defaultChecked={getCampaignDetailsData ? getCampaignDetailsData.social_icon == "4" ? "checked" : "" : ""}
                              {...register('social_media')}
                            />
                            <label
                              htmlFor="social_youtube"
                              className="flex items-center cursor-pointer ml-2 text-[11px] sm:text-xs font-medium lable-color"
                            >
                              <span className="w-4 h-4 inline-block mr-1 rounded-full border border-grey"></span>
                              Youtube
                            </label>
                          </div>

                          <div className="flex items-center mr-3 mb-0">
                            <input
                              id="social_pinterest"
                              type="radio"
                              name="social_media"
                              className="hidden"
                              value="5"
                              defaultChecked={getCampaignDetailsData ? getCampaignDetailsData.social_icon == "5" ? "checked" : "" : ""}
                              {...register('social_media')}
                            />
                            <label
                              htmlFor="social_pinterest"
                              className="flex items-center cursor-pointer ml-2 text-[11px] sm:text-xs font-medium lable-color"
                            >
                              <span className="w-4 h-4 inline-block mr-1 rounded-full border border-grey"></span>
                              Pinterest
                            </label>
                          </div>

                          <div className="flex items-center mr-3 mb-0">
                            <input
                              id="social_linked"
                              type="radio"
                              name="social_media"
                              className="hidden"
                              value="6"
                              defaultChecked={getCampaignDetailsData ? getCampaignDetailsData.social_icon == "6" ? "checked" : "" : ""}
                              {...register('social_media')}
                            />
                            <label
                              htmlFor="social_linked"
                              className="flex items-center cursor-pointer ml-2 text-[11px] sm:text-xs font-medium lable-color"
                            >
                              <span className="w-4 h-4 inline-block mr-1 rounded-full border border-grey"></span>
                              LinkedIn
                            </label>
                          </div>
                        </div>
                        {socialMediaValidateError && <label className="error">{socialMediaValidateError}</label>}
                      </div>
                    </div>
                  </>
                  :
                  ''
              }
              <div className="flex-initial w-full md:11/12 lg:w-6/12 bac-1  px-2  md:py-5 lg:py-0  mb-0 md:mb-2 lg:mb-5">
                <div className="box-shadow-1 rounded-xl py-5 sm:py-7 py-0152 mt-9 px-6">
                  <div className="block social-break sm:flex justify-between">
                    <h5 className="py152 text-lg tracking-wide font-semibold font-sm lable-color mb-6 sm:mb-0">
                      Campaign Post Status
                    </h5>

                    <div className="flex items-center">
                      <label
                        htmlFor="toggle"
                        className="text-base font-medium text-black mr-5"
                      >
                        Active
                      </label>
                      <div className="relative inline-block w-[3.2rem] mr-2 align-middle select-none transition duration-200 ease-in campaign_post_status_check">
                        <input
                          type="checkbox"
                          name="campaign_post_status"
                          id="toggle"
                          {...register("campaign_post_status")}
                          className="toggle-checkbox absolute ml-1 block w-5 h-5 mt-[3px] rounded-full bg-white appearance-none cursor-pointer"
                        />
                        <label
                          htmlFor="toggle"
                          className="toggle-label block overflow-hidden h-[26px] rounded-full bac-7 cursor-pointer"
                        ></label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex justify-center sm:justify-end">
                <Link
                  to={`${process.env.REACT_APP_FRONT_URL}/dashboard`}
                  className="mr-8 bac-3 w-48 py-2.5 rounded-lg text-white uppercase text-base font-bold flex justify-center items-center"
                >
                  Cancel
                </Link>
                <button ref={submitButton} className="bac-6 w-48 py-2.5 flex rounded-lg text-white  text-base font-bold justify-center items-center uppercase" ><i className="fa fa-spin fa-spinner mr-2" id="btn_spinner"></i>submit</button>
              </div>
            </div>
          </div>
        </form>
      </section>

      <Sidebar title="Campaigns" />
    </>
  );
}
export default CampaignDetailsPage;
