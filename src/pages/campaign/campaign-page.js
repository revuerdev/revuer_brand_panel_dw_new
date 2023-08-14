import siranimg from "../../assets/images/siran.svg";
import celendericon from "../../assets/images/calendar-black.svg";
import uploadicon from "../../assets/images/upload.svg";
import selecticon from "../../assets/images/down-select.svg";
import linkicon from "../../assets/images/paste (1) 1 (Traced).svg";
import { Header, Sidebar } from "../../layouts";
import { NavLink as Link, useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { customSelect } from "../../utils/custom-select";
import { addDays } from 'date-fns';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { changeDateFormate } from "../../services/edit-modal"
import { DateRange } from 'react-date-range';
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"

import { getBrandDetails } from "../../context/actions/brand"
import { getCamapignType } from "../../context/actions/campaign"
import { getRevuerLimit } from "../../context/actions/revuerlimit"
import { getInterests } from "../../context/actions/interests"
import { brandCampaignCreate } from "../../context/actions/campaign"
import { getVideoDuration } from "../../context/actions/videoduration"

function Campaignpage() {

  const dispatch = useDispatch();
  const ref = useRef(null);
  const submitButton = useRef();
  let navigate = useNavigate();
  const toastId = useRef(null);

  const [showDateRange, setshowDateRange] = useState(false)
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection'
    }
  ]);

  const { register, handleSubmit, reset } = useForm()

  const [checked, setChecked] = useState({ buy: true, review: true, buugest: true, facebook: true, instagram: true, videobuy: true, videoreview: true, videodraft: true, videopublish: true, testimonialbuy: true, testimonialreview: true, testimonialvideo: true, testimonialpublish: true, samplingvideo: true, influencerbuyimage: true, influencerreviewimage: true, influencerscriptimage: true, influencerdraftimage: true, influencerpublishvideo: true, visualButtonChecked: true, videoButtonChecked: false, testimonialBuyYesButtonChecked: true, testimonialBuyNoButtonChecked: false, influencerBuyYesButtonChecked: true, influencerBuyNoButtonChecked: false });

  const [displayProductCampaignTypeTask, setDisplayProductCampaignTypeTask] = useState(false);
  const [displayVisualVideoCampaignTypeTask, setDisplayVisualVideoCampaignTypeTask] = useState(false);
  const [displayTestimonialCampaignTypeTask, setDisplayTestimonialCampaignTypeTask] = useState(false);
  const [displaySamplingCampaignTypeTask, setDisplaySamplingCampaignTypeTask] = useState(false);
  const [displaySurveysCampaignTypeTask, setDisplaySurveysCampaignTypeTask] = useState(false);
  const [displayMarketResearchCampaignTypeTask, setDisplayMarketResearchCampaignTypeTask] = useState(false);
  const [displayInfluencerCampaignTypeTask, setDisplayInfluencerCampaignTypeTask] = useState(false);

  const [displaySocialMedial, setDisplaySocialMedial] = useState(false);
  const [displaySocialMedialIcon, setDisplaySocialMedialIcon] = useState(false);

  var brandlogin_unique_token = localStorage.getItem("brandlogin_unique_token");
  const brandDataDetails = useSelector((state) => state.brandDetails);
  const campaignTypeList = useSelector((state) => state.campaignData);
  const revuerLimitList = useSelector((state) => state.revuerLimitList);
  const interestsList = useSelector((state) => state.interestsList);
  const videoDurationList = useSelector((state) => state.videoDurationList);

  const webUrlRegEx = RegExp(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/);

  const displayCamTypeTask = (event) => {

    const MainCamType = event.target.value.split('&&')
    if (MainCamType[1] == "0") {
      setDisplayProductCampaignTypeTask(false)
      setDisplayVisualVideoCampaignTypeTask(false)
      setDisplayTestimonialCampaignTypeTask(false)
      setDisplaySamplingCampaignTypeTask(false)
      setDisplaySurveysCampaignTypeTask(false)
      setDisplayMarketResearchCampaignTypeTask(false)
      setDisplayInfluencerCampaignTypeTask(false)
      setDisplaySocialMedial(false)
      setDisplaySocialMedialIcon(false)
    } else if (MainCamType[1] == "1") {
      setDisplayProductCampaignTypeTask(true)
      setDisplayVisualVideoCampaignTypeTask(false)
      setDisplayTestimonialCampaignTypeTask(false)
      setDisplaySamplingCampaignTypeTask(false)
      setDisplaySurveysCampaignTypeTask(false)
      setDisplayMarketResearchCampaignTypeTask(false)
      setDisplayInfluencerCampaignTypeTask(false)
      setDisplaySocialMedial(false)
      setDisplaySocialMedialIcon(false)
    } else if (MainCamType[1] == "2") {
      setDisplayProductCampaignTypeTask(false)
      setDisplayVisualVideoCampaignTypeTask(true)
      setDisplayTestimonialCampaignTypeTask(false)
      setDisplaySamplingCampaignTypeTask(false)
      setDisplaySurveysCampaignTypeTask(false)
      setDisplayMarketResearchCampaignTypeTask(false)
      setDisplayInfluencerCampaignTypeTask(false)
      setDisplaySocialMedial(true)
      setDisplaySocialMedialIcon(false)
    } else if (MainCamType[1] == "3") {
      setDisplayProductCampaignTypeTask(false)
      setDisplayVisualVideoCampaignTypeTask(false)
      setDisplayTestimonialCampaignTypeTask(true)
      setDisplaySamplingCampaignTypeTask(false)
      setDisplaySurveysCampaignTypeTask(false)
      setDisplayMarketResearchCampaignTypeTask(false)
      setDisplayInfluencerCampaignTypeTask(false)
      setDisplaySocialMedial(true)
      setDisplaySocialMedialIcon(false)
    } else if (MainCamType[1] == "4") {
      setDisplayProductCampaignTypeTask(false)
      setDisplayVisualVideoCampaignTypeTask(false)
      setDisplayTestimonialCampaignTypeTask(false)
      setDisplaySamplingCampaignTypeTask(true)
      setDisplaySurveysCampaignTypeTask(false)
      setDisplayMarketResearchCampaignTypeTask(false)
      setDisplayInfluencerCampaignTypeTask(false)
      setDisplaySocialMedial(false)
      setDisplaySocialMedialIcon(false)
    } else if (MainCamType[1] == "5") {
      setDisplayProductCampaignTypeTask(false)
      setDisplayVisualVideoCampaignTypeTask(false)
      setDisplayTestimonialCampaignTypeTask(false)
      setDisplaySamplingCampaignTypeTask(false)
      setDisplaySurveysCampaignTypeTask(true)
      setDisplayMarketResearchCampaignTypeTask(false)
      setDisplayInfluencerCampaignTypeTask(false)
      setDisplaySocialMedial(false)
      setDisplaySocialMedialIcon(false)
    } else if (MainCamType[1] == "6") {
      setDisplayProductCampaignTypeTask(false)
      setDisplayVisualVideoCampaignTypeTask(false)
      setDisplayTestimonialCampaignTypeTask(false)
      setDisplaySamplingCampaignTypeTask(false)
      setDisplaySurveysCampaignTypeTask(false)
      setDisplayMarketResearchCampaignTypeTask(true)
      setDisplayInfluencerCampaignTypeTask(false)
      setDisplaySocialMedial(false)
      setDisplaySocialMedialIcon(false)
    } else if (MainCamType[1] == "7") {
      setDisplayProductCampaignTypeTask(false)
      setDisplayVisualVideoCampaignTypeTask(false)
      setDisplayTestimonialCampaignTypeTask(false)
      setDisplaySamplingCampaignTypeTask(false)
      setDisplaySurveysCampaignTypeTask(false)
      setDisplayMarketResearchCampaignTypeTask(false)
      setDisplayInfluencerCampaignTypeTask(true)
      setDisplaySocialMedial(true)
      setDisplaySocialMedialIcon(true)
    } else {
      setDisplayProductCampaignTypeTask(false)
      setDisplayVisualVideoCampaignTypeTask(false)
      setDisplayTestimonialCampaignTypeTask(false)
      setDisplaySamplingCampaignTypeTask(false)
      setDisplaySurveysCampaignTypeTask(false)
      setDisplayMarketResearchCampaignTypeTask(false)
      setDisplayInfluencerCampaignTypeTask(false)
      setDisplaySocialMedial(false)
      setDisplaySocialMedialIcon(false)
    }
  }

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
      setSurveyFormLinkDisabled(true)
      setSurveyFormUploadDisabled(false)
    } else {
      setSurveyFormUploadDisabled(true)
      setSurveyFormLinkDisabled(false)
    }
  }

  const [samplingFormLinkDisabled, setSamplingFormLinkDisabled] = useState(true)
  const [samplingReceiveFormLinkDisabled, setSamplingReceiveFormLinkDisabled] = useState(false)
  const [samplingFormUploadDisabled, setSamplingFormUploadDisabled] = useState(true)

  const [samplingTaskFormTypeValidateError, setSamplingTaskFormTypeValidateError] = useState('')

  const displaySamplingFormTask = (event) => {

    if (event.target.value == 1) {
      setSamplingFormLinkDisabled(true)
      setSamplingFormUploadDisabled(false)
    } else {
      setSamplingFormUploadDisabled(true)
      setSamplingFormLinkDisabled(false)
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
  const displayTestimonialVideoDuration = (event) => {
    if (event.target.value == 1) {

      var divClassDraftVideoUpload = document.getElementById('testimonial_draft_video_display');
      divClassDraftVideoUpload.classList.add("draft-upload-display-none")
      var divClassDraftVideoCheck = document.getElementById('testimonial_draft_video_check_display');
      divClassDraftVideoCheck.classList.add("draft-upload-display-none")

      setTestimonialVideoDurationDisabled(true)
    } else {

      var divClassDraftVideoUpload = document.getElementById('testimonial_draft_video_display');
      divClassDraftVideoUpload.classList.remove("draft-upload-display-none")
      var divClassDraftVideoCheck = document.getElementById('testimonial_draft_video_check_display');
      divClassDraftVideoCheck.classList.remove("draft-upload-display-none")

      setTestimonialVideoDurationDisabled(false)
    }
  }

  const [testimonialProductDetailsyDisabled, setTestimonialProductDetailsDisabled] = useState(false)
  const [testimonialProductLinkDisabled, setTestimonialProductLinkDisabled] = useState(false)
  const [testimonialProductImageDisabled, setTestimonialProductImageDisabled] = useState(false)
  const [testimonialProductReviewDetailsDisabled, setTestimonialProductReviewDetailsDisabled] = useState(false)
  const [testimonialProductReviewImageDisabled, setTestimonialProductReviewImageDisabled] = useState(false)
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
    }
  }

  const [influencerProductDetailsyDisabled, setInfluencerProductDetailsyDisabled] = useState(false)
  const [influencerProductLinkDisabled, setInfluencerProductLinkDisabled] = useState(false)
  const [influencerProductImageDisabled, setInfluencerProductImageDisabled] = useState(false)
  const [influencerProductReviewDetailsDisabled, setInfluencerProductReviewDetailsDisabled] = useState(false)
  const [influencerProductReviewImageDisabled, setInfluencerProductReviewImageDisabled] = useState(false)

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

  const onSubmit = (data, event) => {

    const name = data.name;
    const campObjective = data.campObjective;
    const campType = data.campType;
    const dos = data.do;
    const dont = data.dont;
    const revuerlimit = data.revuerlimit;
    const campaign_post_status = data.campaign_post_status;
    const additionals = data.additionals;
    const budget = data.budget;

    const product_buy_image = data.product_buy_image
    const product_buy_product_details = data.product_buy_product_details
    const product_buy_product_link = data.product_buy_product_link
    const product_review_details = data.product_review_details
    const product_review_image = data.product_review_image

    let visualVideoTaskVisiable = event.target.querySelectorAll('input[name="visual_video_task_visiable"]:checked');
    let VisualVideoTask = [];
    visualVideoTaskVisiable.forEach((checkbox) => {
      VisualVideoTask.push(checkbox.value);
    });
    data.visual_video_task_visiable = VisualVideoTask.toString();

    var video_buy_product_details = data.video_buy_product_details
    var video_buy_product_link = data.video_buy_product_link
    if (data.visual_video_task_visiable == 1) {
      var video_review_details = data.video_review_details
      var video_script_approval = ''
      var video_draft_upload = ''
      var visual_video_duration = ''
    } else {
      var video_review_details = ''
      var video_script_approval = data.video_script_approval
      var video_draft_upload = data.video_draft_upload
      var visual_video_duration = data.visual_video_duration
    }

    const video_buy_image = data.video_buy_image
    const video_draft_image = data.video_draft_image
    const video_publish_approval = data.video_publish_approval
    const video_review_image = data.video_review_image



    let testimonialTaskVisiable = event.target.querySelectorAll('input[name="task_visiable"]:checked');
    let TestimonialTask = [];
    testimonialTaskVisiable.forEach((checkbox) => {
      TestimonialTask.push(checkbox.value);
    });
    data.task_visiable = TestimonialTask.toString();
    const draft_upload_type = data.draft_upload_type
    const testimonial_buy_image = data.testimonial_buy_image
    const testimonial_buy_product_details = data.testimonial_buy_product_details
    const testimonial_draft_upload = data.testimonial_draft_upload
    const testimonial_draft_video_upload = data.testimonial_draft_video_upload
    const testimonial_product_image = data.testimonial_product_image
    const testimonial_product_link = data.testimonial_product_link
    const testimonial_publish_approval_details = data.testimonial_publish_approval_details
    const testimonial_review_details = data.testimonial_review_details
    const testimonial_video_duration = data.testimonial_video_duration


    const sampling_form_link = data.sampling_form_link
    const sampling_receive_form_link = data.sampling_receive_form_link
    const sampling_product_image = data.sampling_product_image
    const sampling_reveive_product_sample = data.sampling_reveive_product_sample
    const sampling_form_task_type = data.sampling_form_task_type;

    const survey_form_link = data.survey_form_link
    const survey_form_task_type = data.survey_form_task_type;

    const influencer_task_visiable = data.influencer_task_visiable


    let influencerTaskVisiable = event.target.querySelectorAll('input[name="influencer_task_visiable"]:checked');
    let influencerTask = [];
    influencerTaskVisiable.forEach((checkbox) => {
      influencerTask.push(checkbox.value);
    });
    data.influencer_task_visiable = influencerTask.toString();
    const influencer_buy_product_details = data.influencer_buy_product_details
    const influencer_buy_product_image = data.influencer_buy_product_image
    const influencer_draft_upload = data.influencer_draft_upload
    const influencer_product_link = data.influencer_product_link
    const influencer_publish_details = data.influencer_publish_details
    const influencer_publish_video = data.influencer_publish_video
    const influencer_receive_product_image = data.influencer_receive_product_image
    const influencer_review_details = data.influencer_review_details
    const influencer_script_approval = data.influencer_script_approval
    const influencer_video_duration = data.influencer_video_duration


    if (campType != "") {
      var MainCamType = campType.split('&&')
    }

    const nameId = event.target.querySelector("#name");
    const campObjectiveId = event.target.querySelector("#campObjective");
    const campTypeId = event.target.querySelector("#campType");
    const calenderSelectId = event.target.querySelector("#calender_select");
    const dosId = event.target.querySelector("#dos");
    const dontId = event.target.querySelector("#dont");
    const revuerlimitId = event.target.querySelector("#revuerlimit");
    var campaign_image = document.getElementById("campaign_image");
    const productnameId = event.target.querySelector("#campaign_post_status");
    const additionalsId = event.target.querySelector("#additionals");
    const budgetId = event.target.querySelector("#budget");
    let socialMedia = event.target.querySelectorAll('input[name="social_media"]:checked');
    let draftUploadType = event.target.querySelectorAll('input[name="draft_upload_type"]:checked');

    let socialValues = [];
    socialMedia.forEach((checkbox) => {
      socialValues.push(checkbox.value);
    });
    data.social_media = JSON.stringify(socialValues);

    const calender_select_value = calenderSelectId.value;

    let checkboxesInterests = event.target.querySelectorAll('input[name="interests"]:checked');
    let interestsValues = [];
    checkboxesInterests.forEach((checkbox) => {
      interestsValues.push(checkbox.value);
    });
    data.interests = JSON.stringify(interestsValues);

    let draftUploadTypeValues = [];
    draftUploadType.forEach((checkbox) => {
      draftUploadTypeValues.push(checkbox.value);
    });
    data.draft_upload_type = JSON.stringify(draftUploadTypeValues);

    const productBuyImageId = event.target.querySelector("#product_buy_image");
    const productBuyProductDetailsId = event.target.querySelector("#product_buy_product_details");
    const productBuyProductLinkId = event.target.querySelector("#product_buy_product_link");
    const productReviewDetailsId = event.target.querySelector("#product_review_details");
    const productReviewImageId = event.target.querySelector("#product_review_image");

    const videoBuyImageId = event.target.querySelector("#video_buy_image");
    const videoBuyProductDetailsId = event.target.querySelector("#video_buy_product_details");
    const videoBuyProductLinkId = event.target.querySelector("#video_buy_product_link");
    const videoDraftImageId = event.target.querySelector("#video_draft_image");
    const videoDraftUploadId = event.target.querySelector("#video_draft_upload");
    const videoPublishApprovalId = event.target.querySelector("#video_publish_approval");
    const videoPublishImageId = event.target.querySelector("#video_publish_image");
    const videoReviewImageId = event.target.querySelector("#video_review_image");
    const videoScriptApprovalId = event.target.querySelector("#video_script_approval");
    const visualVideoDurationId = event.target.querySelector("#visual_video_duration");
    const videoReviewDetailsId = event.target.querySelector("#video_review_details");


    const testimonialBuyImageId = event.target.querySelector("#testimonial_buy_image");
    const testimonialBuyProductDetailsId = event.target.querySelector("#testimonial_buy_product_details");
    const testimonialDraftUploadId = event.target.querySelector("#testimonial_draft_upload");
    const testimonialDraftVideoUploadId = event.target.querySelector("#testimonial_draft_video_upload");
    const testimonialProductImageId = event.target.querySelector("#testimonial_product_image");
    const testimonialProductLinkId = event.target.querySelector("#testimonial_product_link");
    const testimonialPublishApprovalDetailsId = event.target.querySelector("#testimonial_publish_approval_details");
    const testimonialReviewDetailsId = event.target.querySelector("#testimonial_review_details");
    const testimonialVideoDurationId = event.target.querySelector("#testimonial_video_duration");

    const samplingFormLinkId = event.target.querySelector("#sampling_form_link");
    const samplingProductImageId = event.target.querySelector("#sampling_product_image");
    const samplingReveiveProductSampleId = event.target.querySelector("#sampling_reveive_product_sample");
    var sampling_image = document.getElementById("sampling_image");

    const surveyFormLinkId = event.target.querySelector("#survey_form_link");
    var survey_image = document.getElementById("survey_image");

    const influencerBuyProductDetailsId = event.target.querySelector("#influencer_buy_product_details");
    const influencerBuyProductImageId = event.target.querySelector("#influencer_buy_product_image");
    const influencerDraftUploadId = event.target.querySelector("#influencer_draft_upload");
    const influencerProductLinkId = event.target.querySelector("#influencer_product_link");
    const influencerPublishDetailsId = event.target.querySelector("#influencer_publish_details");
    const influencerPublishVideoId = event.target.querySelector("#influencer_publish_video");
    const influencerReceiveProductImageId = event.target.querySelector("#influencer_receive_product_image");
    const influencerReviewDetailsId = event.target.querySelector("#influencer_review_details");
    const influencerScriptApprovalId = event.target.querySelector("#influencer_script_approval");
    const influencerVideoDurationId = event.target.querySelector("#influencer_video_duration");

    if (name.trim() == "") {
      setNameValidateError("Please Enter Campaign Name")
      nameId.classList.add("error")
    } else if (name.length < 2) {
      setNameValidateError("Campaign Name must consist of at least 2 characters")
      nameId.classList.add("error")
    } else if (campObjective.trim() == "") {
      setNameValidateError("")
      nameId.classList.remove("error")
      setCampObjectiveValidateError("Please Enter Campaign Objective")
      campObjectiveId.classList.add("error")
    } else if (campObjective.length < 20) {
      setCampObjectiveValidateError("Campaign Objective must consist of at least 20 characters")
      campObjectiveId.classList.add("error")
    } else if (campType == "") {
      setCampObjectiveValidateError("")
      campObjectiveId.classList.remove("error")
      setCampTypeValidateError("Select Campaign Type")
      campTypeId.classList.add("error")
    } else if (afterUploadicon.imageSrc == "") {
      setCampTypeValidateError("")
      campTypeId.classList.remove("error")
      setCampaignImageImageValidateError("Please select campaign image");
      campaign_image?.classList.add("error");
    } else if (calender_select_value == "") {
      setCampaignImageImageValidateError("");
      campaign_image?.classList.remove("error");
      setSelectDateValidateError("Select Date Range")
      calenderSelectId.classList.add("error")
    } else if (MainCamType[1] == 1 && product_buy_product_details.trim() == "") {
      setSelectDateValidateError("")
      calenderSelectId.classList.remove("error")
      setProductBuyDetailsValidateError("Please enter product details")
      productBuyProductDetailsId.classList.add("error")
    } else if (MainCamType[1] == 1 && product_buy_product_details.length < 20) {
      setProductBuyDetailsValidateError("Product details must consist of at least 20 characters")
      productBuyProductDetailsId.classList.add("error")
    } else if (MainCamType[1] == 1 && product_buy_product_link.trim() == "") {
      setProductBuyDetailsValidateError("")
      productBuyProductDetailsId.classList.remove("error")
      setProductBuyLinkValidateError("Please enter product link")
      productBuyProductLinkId.classList.add("error")
    } else if (MainCamType[1] == 1 && !webUrlRegEx.test(product_buy_product_link.trim())) {
      setProductBuyLinkValidateError("Please enter valid product link")
      productBuyProductLinkId.classList.add("error")
    } else if (MainCamType[1] == 1 && product_review_details.trim() == "") {
      setProductBuyLinkValidateError("")
      productBuyProductLinkId.classList.remove("error")
      setProductReviewValidateError("Please enter review details")
      productReviewDetailsId.classList.add("error")
    } else if (MainCamType[1] == 1 && product_review_details.length < 20) {
      setProductReviewValidateError("Review details must consist of at least 20 characters")
      productReviewDetailsId.classList.add("error")
    }


    else if (MainCamType[1] == 2 && video_buy_product_details.trim() == "") {
      setSelectDateValidateError("")
      calenderSelectId.classList.remove("error")
      setVideoBuyProductDetailsValidateError("Please enter product details")
      videoBuyProductDetailsId.classList.add("error")
    } else if (MainCamType[1] == 2 && video_buy_product_details.length < 20) {
      setVideoBuyProductDetailsValidateError("Product details must consist of at least 20 characters")
      videoBuyProductDetailsId.classList.add("error")
    } else if (MainCamType[1] == 2 && video_buy_product_link.trim() == "") {
      setVideoBuyProductDetailsValidateError("")
      videoBuyProductDetailsId.classList.remove("error")
      setVideoBuyProductLinkValidateError("Please enter product link")
      videoBuyProductLinkId.classList.add("error")
    } else if (MainCamType[1] == 2 && !webUrlRegEx.test(video_buy_product_link.trim()) && data.visual_video_task_visiable == 1) {
      setVideoBuyProductLinkValidateError("Please enter valid product link")
      videoBuyProductLinkId.classList.add("error")
    } else if (MainCamType[1] == 2 && video_review_details.trim() == "" && data.visual_video_task_visiable == 1) {
      setVideoBuyProductLinkValidateError("")
      videoBuyProductLinkId.classList.remove("error")
      setVideoReviewDetailsValidateError("Please enter review details")
      videoReviewDetailsId.classList.add("error")
    } else if (MainCamType[1] == 2 && video_review_details.length < 20 && data.visual_video_task_visiable == 1) {
      setVideoReviewDetailsValidateError("Review details must consist of at least 20 characters")
      videoReviewDetailsId.classList.add("error")
    } else if (MainCamType[1] == 2 && video_script_approval.trim() == "" && data.visual_video_task_visiable == 2) {
      setVideoBuyProductLinkValidateError("")
      videoBuyProductLinkId.classList.remove("error")
      setVideoScriptApprovalValidateError("Please enter script approval")
      videoScriptApprovalId.classList.add("error")
    } else if (MainCamType[1] == 2 && video_script_approval.length < 20 && data.visual_video_task_visiable == 2) {
      setVideoScriptApprovalValidateError("Script approval must consist of at least 20 characters")
      videoScriptApprovalId.classList.add("error")
    } else if (MainCamType[1] == 2 && video_draft_upload.trim() == "" && data.visual_video_task_visiable == 2) {
      setVideoScriptApprovalValidateError("")
      videoScriptApprovalId.classList.remove("error")
      setVideoDraftUploadValidateError("Please enter draft upload details")
      videoDraftUploadId.classList.add("error")
    } else if (MainCamType[1] == 2 && video_draft_upload.length < 20 && data.visual_video_task_visiable == 2) {
      setVideoDraftUploadValidateError("Draft upload details must consist of at least 20 characters")
      videoDraftUploadId.classList.add("error")
    }
    else if (MainCamType[1] == 2 && video_publish_approval.trim() == "") {
      setVideoDraftUploadValidateError("")
      videoDraftUploadId.classList.remove("error")
      setVideoPublishApprovalValidateError("Please enter publish details")
      videoPublishApprovalId.classList.add("error")
    } else if (MainCamType[1] == 2 && video_publish_approval.length < 20) {
      setVideoPublishApprovalValidateError("Publish details must consist of at least 20 characters")
      videoPublishApprovalId.classList.add("error")
    } else if (MainCamType[1] == 2 && visual_video_duration.trim() == "" && data.visual_video_task_visiable == 2) {
      setVideoPublishApprovalValidateError("")
      videoPublishApprovalId.classList.remove("error")
      setVideoVisualDurationValidateError("Please select video duration")
      visualVideoDurationId.classList.add("error")
    }
    // else if (MainCamType[1] == 2 && socialValues.length == 0) {
    //   setVideoVisualDurationValidateError("")
    //   visualVideoDurationId.classList.remove("error")
    //   setSocialMediaValidateError("Please select social media")
    // }


    else if (MainCamType[1] == 3 && testimonial_buy_product_details.trim() == "" && data.task_visiable == 1) {
      setSelectDateValidateError("")
      calenderSelectId.classList.remove("error")
      setTestimonialBuyProductDetailsValidateError("Please enter product details")
      testimonialBuyProductDetailsId.classList.add("error")
    } else if (MainCamType[1] == 3 && testimonial_buy_product_details.length < 20 && data.task_visiable == 1) {
      setTestimonialBuyProductDetailsValidateError("Product details must consist of at least 20 characters")
      testimonialBuyProductDetailsId.classList.add("error")
    } else if (MainCamType[1] == 3 && testimonial_product_link.trim() == "" && data.task_visiable == 1) {
      setTestimonialBuyProductDetailsValidateError("")
      testimonialBuyProductDetailsId.classList.remove("error")
      setTestimonialProductLinkValidateError("Please enter product link")
      testimonialProductLinkId.classList.add("error")
    } else if (MainCamType[1] == 3 && !webUrlRegEx.test(testimonial_product_link.trim()) && data.task_visiable == 1) {
      setTestimonialProductLinkValidateError("Please enter valid product link")
      testimonialProductLinkId.classList.add("error")
    } else if (MainCamType[1] == 3 && testimonial_review_details.trim() == "" && data.task_visiable == 1) {
      setTestimonialProductLinkValidateError("")
      testimonialProductLinkId.classList.remove("error")
      setTestimonialReviewDetailsValidateError("Please enter review details")
      testimonialReviewDetailsId.classList.add("error")
    } else if (MainCamType[1] == 3 && testimonial_review_details.length < 20 && data.task_visiable == 1) {
      setTestimonialReviewDetailsValidateError("Review details must consist of at least 20 characters")
      testimonialReviewDetailsId.classList.add("error")
    } else if (MainCamType[1] == 3 && testimonial_draft_upload.trim() == "") {
      setTestimonialReviewDetailsValidateError("")
      testimonialReviewDetailsId.classList.remove("error")
      setTestimonialDraftUploadValidateError("Please enter draft upload details")
      testimonialDraftUploadId.classList.add("error")
    } else if (MainCamType[1] == 3 && testimonial_draft_upload.length < 20) {
      setTestimonialDraftUploadValidateError("Draft upload details must consist of at least 20 characters")
      testimonialDraftUploadId.classList.add("error")
    } else if (MainCamType[1] == 3 && draftUploadTypeValues.length == 0) {
      setTestimonialDraftUploadValidateError("")
      testimonialDraftUploadId.classList.remove("error")
      setTestimonialDraftUploadTypeValidateError("Please select draft upload type")
    } else if (MainCamType[1] == 3 && testimonial_publish_approval_details.trim() == "") {
      setTestimonialDraftUploadTypeValidateError("")
      setTestimonialPublishDetailsValidateError("Please enter publish details")
      testimonialPublishApprovalDetailsId.classList.add("error")
    } else if (MainCamType[1] == 3 && testimonial_publish_approval_details.length < 20) {
      setTestimonialPublishDetailsValidateError("Publish details must consist of at least 20 characters")
      testimonialPublishApprovalDetailsId.classList.add("error")
    } else if (MainCamType[1] == 3 && testimonial_video_duration == "" && draft_upload_type == 2) {
      setTestimonialPublishDetailsValidateError("")
      testimonialPublishApprovalDetailsId.classList.remove("error")
      setTestimonialVideoDurationValidateError("Please select video duration")
      testimonialVideoDurationId.classList.add("error")
    }

    else if (MainCamType[1] == 4 && sampling_reveive_product_sample.trim() == "") {
      setSelectDateValidateError("")
      calenderSelectId.classList.remove("error")
      setSamplingReceiveSampleValidateError("Please enter sample product details")
      samplingReveiveProductSampleId.classList.add("error")
    }
    else if (MainCamType[1] == 4 && sampling_reveive_product_sample.length < 20) {
      setSamplingReceiveSampleValidateError("Sample product details must consist of at least 20 characters")
      samplingReveiveProductSampleId.classList.add("error")
    }

    else if (MainCamType[1] == 4 && sampling_form_task_type == undefined) {
      setSamplingReceiveSampleValidateError("")
      samplingReveiveProductSampleId.classList.remove("error")
      setSamplingTaskFormTypeValidateError("Please select fill form type");
    }

    else if (MainCamType[1] == 4 && sampling_form_task_type == 1 && samplingAfterUploadicon.imageSrc == "") {
      setSamplingFormLinkValidateError("")
      samplingFormLinkId.classList.remove("error")
      setSamplingTaskFormTypeValidateError("")
      setSamplingImageImageValidateError("Please select fill form image");
      sampling_image?.classList.add("error");
    }

    else if (MainCamType[1] == 4 && sampling_form_link == "" && sampling_form_task_type == 2) {
      setSamplingTaskFormTypeValidateError("")
      setSamplingImageImageValidateError("");
      sampling_image?.classList.remove("error");
      setSamplingFormLinkValidateError("Please enter upload form link")
      samplingFormLinkId.classList.add("error")
    }
    else if (MainCamType[1] == 4 && !webUrlRegEx.test(sampling_form_link) && sampling_form_task_type == 2) {
      setSamplingFormLinkValidateError("Please enter valid upload form link")
      samplingFormLinkId.classList.add("error")
    }

    else if (MainCamType[1] == 5 && survey_form_task_type == undefined) {
      setSelectDateValidateError("")
      calenderSelectId.classList.remove("error")
      setSurveyTaskFormTypeValidateError("Please select fill form type");
    }
    else if (MainCamType[1] == 5 && survey_form_task_type == 1 && surveyAfterUploadicon.imageSrc == "") {
      setSurveyTaskFormTypeValidateError("")
      setSurveyFormLinkValidateError("")
      surveyFormLinkId.classList.remove("error")
      setSurveyImageImageValidateError("Please select fill form image");
      survey_image?.classList.add("error");
    } else if (MainCamType[1] == 5 && survey_form_link == "" && survey_form_task_type == 2) {
      setSurveyTaskFormTypeValidateError("")
      setSurveyImageImageValidateError("");
      survey_image?.classList.remove("error");
      setSurveyFormLinkValidateError("Please enter form link")
      surveyFormLinkId.classList.add("error")
    } else if (MainCamType[1] == 5 && survey_form_task_type == 2 && !webUrlRegEx.test(survey_form_link)) {
      setSurveyImageImageValidateError("");
      setSurveyTaskFormTypeValidateError("")
      survey_image?.classList.remove("error");
      setSurveyFormLinkValidateError("Please enter valid form link")
      surveyFormLinkId.classList.add("error")
    }


    else if (MainCamType[1] == 7 && influencer_buy_product_details.trim() == "" && data.influencer_task_visiable == 1) {
      setSelectDateValidateError("")
      calenderSelectId.classList.remove("error")
      setInfluencerBuyProductDetailsValidateError("Please enter product details")
      influencerBuyProductDetailsId.classList.add("error")
    } else if (MainCamType[1] == 7 && influencer_buy_product_details.length < 20 && data.influencer_task_visiable == 1) {
      setInfluencerBuyProductDetailsValidateError("Product details must consist of at least 20 characters")
      influencerBuyProductDetailsId.classList.add("error")
    } else if (MainCamType[1] == 7 && influencer_product_link.trim() == "" && data.influencer_task_visiable == 1) {
      setInfluencerBuyProductDetailsValidateError("")
      influencerBuyProductDetailsId.classList.remove("error")
      setInfluencerProductLinkValidateError("Please enter product link")
      influencerProductLinkId.classList.add("error")
    } else if (MainCamType[1] == 7 && !webUrlRegEx.test(influencer_product_link.trim()) && data.influencer_task_visiable == 1) {
      setInfluencerProductLinkValidateError("Please enter valid product link")
      influencerProductLinkId.classList.add("error")
    } else if (MainCamType[1] == 7 && influencer_review_details.trim() == "" && data.influencer_task_visiable == 1) {
      setInfluencerProductLinkValidateError("")
      influencerProductLinkId.classList.remove("error")
      setInfluencerReviewDetailsValidateError("Please enter review details")
      influencerReviewDetailsId.classList.add("error")
    } else if (MainCamType[1] == 7 && influencer_review_details.length < 20 && data.influencer_task_visiable == 1) {
      setInfluencerReviewDetailsValidateError("Review details must consist of at least 20 characters")
      influencerReviewDetailsId.classList.add("error")
    } else if (MainCamType[1] == 7 && influencer_script_approval.trim() == "") {
      setInfluencerReviewDetailsValidateError("")
      influencerReviewDetailsId.classList.remove("error")
      setInfluencerScriptApprovalValidateError("Please enter script approval")
      influencerScriptApprovalId.classList.add("error")
    } else if (MainCamType[1] == 7 && influencer_script_approval.length < 20) {
      setInfluencerScriptApprovalValidateError("Script approval must consist of at least 20 characters")
      influencerScriptApprovalId.classList.add("error")
    } else if (MainCamType[1] == 7 && influencer_draft_upload.trim() == "") {
      setInfluencerScriptApprovalValidateError("")
      influencerScriptApprovalId.classList.remove("error")
      setInfluencerDraftUploadValidateError("Please enter draft upload details")
      influencerDraftUploadId.classList.add("error")
    } else if (MainCamType[1] == 7 && influencer_draft_upload.length < 20) {
      setInfluencerDraftUploadValidateError("Draft upload details must consist of at least 20 characters")
      influencerDraftUploadId.classList.add("error")
    } else if (MainCamType[1] == 7 && socialValues.length == 0) {
      setInfluencerDraftUploadValidateError("")
      influencerDraftUploadId.classList.remove("error")
      setSocialMediaValidateError("Please select social media")
    } else if (MainCamType[1] == 7 && influencer_publish_details.trim() == "") {
      setSocialMediaValidateError("")
      setInfluencerPublishDetailsValidateError("Please enter publish details")
      influencerPublishDetailsId.classList.add("error")
    } else if (MainCamType[1] == 7 && influencer_publish_details.length < 20) {
      setInfluencerPublishDetailsValidateError("Publish details must consist of at least 20 characters")
      influencerPublishDetailsId.classList.add("error")
    } else if (MainCamType[1] == 7 && influencer_video_duration == "") {
      setInfluencerPublishDetailsValidateError("")
      influencerPublishDetailsId.classList.remove("error")
      setInfluencerDurationValidateError("Please select video duration")
      influencerVideoDurationId.classList.add("error")
    }


    else if (budget.trim() == "") {
      if (MainCamType[1] == 1) {
        setProductReviewValidateError("")
        productReviewDetailsId.classList.remove("error")
      } else if (MainCamType[1] == 2) {
        setVideoVisualDurationValidateError("")
        visualVideoDurationId.classList.remove("error")
        setSocialMediaValidateError("")
      } else if (MainCamType[1] == 3) {
        setTestimonialVideoDurationValidateError("")
        testimonialVideoDurationId.classList.remove("error")
      } else if (MainCamType[1] == 4) {
        setSamplingFormLinkValidateError("")
        samplingFormLinkId.classList.remove("error")
      } else if (MainCamType[1] == 5) {
        setSurveyFormLinkValidateError("")
        surveyFormLinkId.classList.remove("error")
      } else if (MainCamType[1] == 7) {
        setInfluencerDurationValidateError("")
        influencerVideoDurationId.classList.remove("error")
      } else {
        setSelectDateValidateError("")
        calenderSelectId.classList.remove("error")
      }
      setBudgetValidateError("Please enter budget")
      budgetId.classList.add("error")
    } else if (budget < 1) {
      setBudgetValidateError("Budget can not less than 1")
      budgetId.classList.add("error")
    } else if (revuerlimit == "") {
      setBudgetValidateError("")
      budgetId.classList.remove("error")
      setrevuerLimitValidateError("Please select revuer limit")
      revuerlimitId.classList.add("error")
    } else if (interestsValues.length == 0) {
      setrevuerLimitValidateError("")
      revuerlimitId.classList.remove("error")
      setInterestsValidateError("Please select at least one interest")
    } else {
      setInterestsValidateError("")
      setNameValidateError("")
      nameId.classList.remove("error")
      setCampObjectiveValidateError("")
      campObjectiveId.classList.remove("error")
      setCampTypeValidateError("")
      campTypeId.classList.remove("error")
      setCampaignImageImageValidateError("");
      campaign_image?.classList.remove("error");
      setSelectDateValidateError("")
      calenderSelectId.classList.remove("error")

      if (MainCamType[1] == 1) {
        setProductBuyDetailsValidateError("")
        productBuyProductDetailsId.classList.remove("error")
        setProductBuyLinkValidateError("")
        productBuyProductLinkId.classList.remove("error")
        setProductReviewValidateError("")
        productReviewDetailsId.classList.remove("error")
      }
      if (MainCamType[1] == 2) {
        setVideoBuyProductDetailsValidateError("")
        videoBuyProductDetailsId.classList.remove("error")
        setVideoBuyProductLinkValidateError("")
        videoBuyProductLinkId.classList.remove("error")
        setVideoBuyProductLinkValidateError("")
        videoBuyProductLinkId.classList.remove("error")
        setVideoScriptApprovalValidateError("")
        videoScriptApprovalId.classList.remove("error")
        setVideoDraftUploadValidateError("")
        videoDraftUploadId.classList.remove("error")
        setVideoPublishApprovalValidateError("")
        videoPublishApprovalId.classList.remove("error")
        setVideoVisualDurationValidateError("")
        visualVideoDurationId.classList.remove("error")
        setSocialMediaValidateError("")
      }
      if (MainCamType[1] == 3) {
        setTestimonialBuyProductDetailsValidateError("")
        testimonialBuyProductDetailsId.classList.remove("error")
        setTestimonialProductLinkValidateError("")
        testimonialProductLinkId.classList.remove("error")
        setTestimonialReviewDetailsValidateError("")
        testimonialReviewDetailsId.classList.remove("error")
        setTestimonialDraftUploadValidateError("")
        testimonialDraftUploadId.classList.remove("error")
        setTestimonialPublishDetailsValidateError("")
        testimonialPublishApprovalDetailsId.classList.remove("error")
        setTestimonialVideoDurationValidateError("")
        testimonialVideoDurationId.classList.remove("error")
        setTestimonialDraftUploadTypeValidateError("")
        setSocialMediaValidateError("")
      }
      if (MainCamType[1] == 4) {
        setSamplingReceiveSampleValidateError("")
        samplingReveiveProductSampleId.classList.remove("error")
        setSamplingFormLinkValidateError("")
        samplingFormLinkId.classList.remove("error")
        setSamplingTaskFormTypeValidateError("")
        setSamplingImageImageValidateError("");
        sampling_image?.classList.remove("error");
        samplingFormLinkId.classList.remove("error")
      }
      if (MainCamType[1] == 5) {
        setSurveyFormLinkValidateError("")
        surveyFormLinkId.classList.remove("error")
        setSurveyTaskFormTypeValidateError("")
        setSurveyImageImageValidateError("");
        survey_image?.classList.remove("error");
      }
      if (MainCamType[1] == 7) {
        setInfluencerBuyProductDetailsValidateError("")
        influencerBuyProductDetailsId.classList.remove("error")
        setInfluencerProductLinkValidateError("")
        influencerProductLinkId.classList.remove("error")
        setInfluencerReviewDetailsValidateError("")
        influencerReviewDetailsId.classList.remove("error")
        setInfluencerScriptApprovalValidateError("")
        influencerScriptApprovalId.classList.remove("error")
        setInfluencerDraftUploadValidateError("")
        influencerDraftUploadId.classList.remove("error")
        setInfluencerPublishDetailsValidateError("")
        influencerPublishDetailsId.classList.remove("error")
        setInfluencerDurationValidateError("")
        influencerVideoDurationId.classList.remove("error")
        setSocialMediaValidateError("")
      }
      setBudgetValidateError("")
      budgetId.classList.remove("error")
      setrevuerLimitValidateError("")
      revuerlimitId.classList.remove("error")


      data.calender_select = calender_select_value
      data.campaign_image = afterUploadicon.imageObj
      data.image_name = afterUploadicon.filename
      data.sampling_image = samplingAfterUploadicon.imageObj
      data.sampling_image_name = samplingAfterUploadicon.filename
      data.survey_image = surveyAfterUploadicon.imageObj
      data.survey_image_name = surveyAfterUploadicon.filename
      data.brandlogin_unique_token = brandlogin_unique_token;

      dispatch(brandCampaignCreate(data, navigate, submitButton, toastId))
      reset()
      setDisplayProductCampaignTypeTask(false)
      setDisplayVisualVideoCampaignTypeTask(false)
      setDisplayTestimonialCampaignTypeTask(false)
      setDisplaySamplingCampaignTypeTask(false)
      setDisplaySurveysCampaignTypeTask(false)
      setDisplayMarketResearchCampaignTypeTask(false)
      setDisplayInfluencerCampaignTypeTask(false)
      setDisplaySocialMedial(false)
      setImageUpload(false)
      setAfterUploadicon({ filename: '', imageSrc: "", imageObj: {} })
      setSamplingImageUpload(false)
      setSamplingAfterUploadicon({ filename: '', imageSrc: "", imageObj: {} })
      setSurveyImageUpload(false)
      setSurveyAfterUploadicon({ filename: '', imageSrc: "", imageObj: {} })
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
    dispatch(getBrandDetails({ brandlogin_unique_token: brandlogin_unique_token }))
    dispatch(getCamapignType())
    dispatch(getRevuerLimit())
    dispatch(getInterests())
    dispatch(getVideoDuration())
  }, [state]);

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
        setImageUpload(true)
        const blobURL = URL.createObjectURL(e.target.files[0])
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
          setSamplingAfterUploadicon({ filename: file.name, imageSrc: "http://34.247.213.73/uploads/campaigns/document.png", imageObj: reader.result.replace(/^data:.+;base64,/, '') })
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
          setSurveyAfterUploadicon({ filename: file.name, imageSrc: "http://34.247.213.73/uploads/campaigns/document.png", imageObj: reader.result.replace(/^data:.+;base64,/, '') })
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
        <Header
          welcome="Campaign "
          extra="Create New Campaign "
          showCampaign={false}
        />
        <form onSubmit={handleSubmit((data, event) => onSubmit(data, event))} className="theme-form ng-untouched ng-pristine ng-valid" method="post">
          <div className="px-5 sm:px-8">
            <div className="mb-10 mt-6 sm:mt-0">
              <h5 className="text-xl font-semibold tracking-wide lable-color mb-2">
                Campaign Details <span className="text-[#E74C3C]">*</span>
              </h5>
              <div className="md:block lg:flex block box-shadow-1 rounded-2xl pt-8">
                <div className="flex-initial w-full md:full lg:w-7/12 bac-1 py-8 px-8 md:pr-8 lg:pr-4 md:py-5 lg:py-0 mr-2 mb-0 md:mb-2 lg:mb-5">
                  <label className="mt-6 lable-color text-sm tracking-wide font-semibold">
                    Campaign Name{" "}
                  </label>
                  <div className="block mb-4 relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      {...register("name")}
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

                  <label className="mt-6 lable-color text-sm tracking-wide font-semibold">
                    Campaign Objective
                  </label>
                  <div className="block relative">
                    <textarea
                      className="resize-none mb-5 h-20 py-3 px-2 box-shadow-3 rounded-lg border border-[#95A5A6] bg-white w-full mt-2 text-sm focus:outline-none"
                      name="campObjective"
                      {...register("campObjective")}
                      id="campObjective"
                      onKeyUp={(event) => campaignObjectiveValid(event)}
                      rows="3"
                      placeholder="Write From here"
                    ></textarea>
                    {campObjectiveValidateError && <label className="error">{campObjectiveValidateError}</label>}
                  </div>

                  <div className="sm:flex block w-full social-break float-right mb-2">
                    <div className="flex-initial w-full sub-width-2 sm:w-6/12 mr-6">
                      <label className="lable-color text-sm tracking-wide font-semibold">
                        Campaign Type
                      </label>
                      <div className="block relative">
                        <select id="campType" name="campType" {...register("campType")}
                          onChange={(event) => displayCamTypeTask(event)}
                          className="mt-2 form-select appearance-none block w-full px-3 h-12 text-sm font-normal lable-color bg-white bg-clip-padding bg-no-repeat rounded-lg border border-[#95A5A6] transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-black focus:outline-none" aria-label="Default select example">
                          <option value="">Select Campaign Type</option>
                          {campaignTypeList.map((item, index) => {
                            return (
                              <option key={item._id} value={item._id + '&&' + item.cam_type}>{item.name}</option>
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
                          value={changeDateFormate(state[0].startDate) + " to " + changeDateFormate(state[0].endDate)}
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
                            ranges={state}
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

                <div className="flex-initial w-full md:11/12 lg:w-6/12 bac-1 py-5 px-8 sm:px-2 md:py-5 lg:py-0 mr-5 mb-0 md:mb-2 sm:mb-0">
                  <h4 className="text-sm tracking-wide font-semibold mb-3 sm:mb-3">
                    Cover Image
                  </h4>

                  <div className="block relative mb-5">
                    {!imageUpload ?
                      <div className="flex w-full justify-center bg-grey-lighter">
                        <label className={`w-full flex flex-col items-center px-4 py-[6.8rem] box-shadow-3 ${campaignImageImageValidateError ? "border-[#d95c5c]" : "border-[#95a5a6]"} text-blue rounded-lg border-2 border-dashed tracking-wide  border-blue cursor-pointer`}>
                          <img src={uploadicon} alt="uploadicon" />
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
                        <img src={afterUploadicon.imageSrc} className="h-[280px] w-full object-fill" alt="uploaded" />
                        <div onClick={imageRemover} className="cursor-pointer absolute top-[-13px] right-0 bac-6 w-8 h-8 rounded-full flex justify-center items-center">
                          <i className="text-lg text-white fa-solid fa-xmark"></i>
                        </div>
                      </div>
                    }
                  </div>
                </div>
              </div>
            </div>


            {displayProductCampaignTypeTask
              ?
              <>
                <div className="mb-10">
                  <h5 className="text-lg tracking-wide font-semibold lable-color mb-3">
                    Task 1: Buy<span className="text-[#E74C3C]">*</span>
                  </h5>
                  <div className="box-shadow-1 rounded-2xl mb-6 sm:mb-0 pb-5 py-2 sm:py-2 px-4 sm:px-4">
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
                        defaultValue={checked.buy}
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

                <div className="mb-10">
                  <h5 className="text-lg tracking-wide font-semibold lable-color mb-3">
                    Task 2: Review<span className="text-[#E74C3C]">*</span>
                  </h5>
                  <div className="md:block lg:flex block box-shadow-1 rounded-2xl pt-1 sm:pt-7 relative">
                    <div className="flex-initial w-full bac-1 py-5 sm:py-8 px-8 pr-4 md:py-5 lg:py-0 mr-2 mb-0 md:mb-2 lg:mb-5">
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
                        ></textarea>
                        {productReviewValidateError && <label className="error">{productReviewValidateError}</label>}
                      </div>
                      <div className="form-check form-check-inline flex items-center mr-5 mb-3 sm:mb-8 lg:mb-3">
                        <input
                          defaultValue={checked.review}
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
              : ''
            }

            {displayVisualVideoCampaignTypeTask
              ?
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
                          defaultChecked={checked.visualButtonChecked}
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
                          defaultChecked={checked.videoButtonChecked}
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
                          rows="3" placeholder="Write from here"></textarea>
                        {videoBuyProductDetailsValidateError && <label className="error">{videoBuyProductDetailsValidateError}</label>}
                      </div>

                      <div className="form-check form-check-inline flex items-center mr-5 mb-2 sm:mb-5">
                        <input defaultValue={checked.videobuy}
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
                            <input type="text" id="video_buy_product_link" name="video_buy_product_link" {...register('video_buy_product_link')} placeholder="Paste link here" required=""
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
                          id="video_publish_approval" name="video_publish_approval" {...register('video_publish_approval')} rows="3" placeholder="Write from here"></textarea>
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
              ''
            }

            {displayTestimonialCampaignTypeTask
              ?
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
                            disabled={testimonialProductImageDisabled}
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
                              <input type="text" disabled={testimonialProductLinkDisabled} id="testimonial_product_link" name="testimonial_product_link" {...register('testimonial_product_link')} placeholder="Paste link here" required="" className="box-shadow-3 mb-3 h-10 px-4 rounded-lg border border-[#95A5A6] bg-white lable-color w-full mt-2 text-sm placeholder-[#95A5A6] focus:outline-none" />
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

                <div className="" id="testimonial_task_2_visiable">
                  <div className="mb-10">
                    <h5 className="text-lg tracking-wide font-semibold lable-color mb-3">Task 2: Upload Product Images<span className="text-[#E74C3C]">*</span></h5>
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
                            disabled={testimonialProductReviewImageDisabled}
                            value="1"
                          />
                          <label className="form-check-label text-[9px] font-medium inline-block text-black sm:text-sm" htmlFor="inlineCheckbox1">Ask revuer to upload a product images.</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-10">
                  <h5 className="text-lg tracking-wide font-semibold lable-color mb-3">Task 3: Sampling Feedback<span className="text-[#E74C3C]">*</span></h5>
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
                          placeholder="Write from here"
                        ></textarea>
                        {testimonialDraftUploadValidateError && <label className="error">{testimonialDraftUploadValidateError}</label>}
                      </div>

                      <div className="form-check form-check-inline flex items-center mr-5 mb-3 sm:mb-5" id="testimonial_draft_video_check_display">
                        <input
                          defaultValue={checked.testimonialvideo}
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
                    </div>
                  </div>
                </div>
                <div className="mb-10">
                  <h5 className="text-lg tracking-wide font-semibold lable-color mb-3">Task 4: Upload Published Review Screenshot<span className="text-[#E74C3C]">*</span></h5>
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
                        ></textarea>
                        {testimonialPublishDetailsValidateError && <label className="error">{testimonialPublishDetailsValidateError}</label>}
                      </div>
                    </div>

                    <div className="flex-initial w-full md:11/12 lg:w-6/12 bac-1 py-5 sm:py-12 px-2 pr-4 md:py-5 lg:py-0 mb-0 md:mb-2 lg:mb-5" id="testimonial_draft_video_display">
                      <label className="mt-6 lable-color text-base font-semibold mb-2">Video Duration</label>
                      <div className="block relative">
                        <select disabled={testimonialVideoDurationDisabled} id="testimonial_video_duration"
                          name="testimonial_video_duration"
                          {...register("testimonial_video_duration")} className="mt-2 form-select appearance-none block w-full px-3 h-12 text-sm font-normal lable-color bg-white bg-clip-padding bg-no-repeat rounded-lg border border-[#95A5A6] transition ease-in-out m-2 focus:text-gray-700 focus:bg-white focus:border-black focus:outline-none" aria-label="Default select example focus:outline-none">
                          {videoDurationList.map((item, index) => {
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
                        {testimonialVideoDurationValidateError && <label className="error">{testimonialVideoDurationValidateError}</label>}
                      </div>
                    </div>
                  </div>
                </div>
              </>
              :
              ''
            }

            {displaySamplingCampaignTypeTask
              ?
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
                        <input type="text" id="sampling_receive_form_link" readOnly={samplingReceiveFormLinkDisabled} name="sampling_receive_form_link" {...register('sampling_receive_form_link')} placeholder="Paste here" required="" className="box-shadow-3 h-12 px-4 rounded-lg border border-[#95A5A6] bg-white lable-color w-full mt-2 mb-1 text-sm placeholder-[#95A5A6] focus:outline-none" />
                        {samplingReceiveFormLinkValidateError && <label className="error">{samplingReceiveFormLinkValidateError}</label>}
                      </div>

                      <div className="form-check form-check-inline flex items-center mr-5 mb-2 sm:mb-5">
                        <input
                          defaultValue={checked.samplingvideo}
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
                              <img src={uploadicon} alt="uploadicon" />
                              <span className="mt-4 text-base leading-normal lable-color">
                                Drag & Drop or browse to choose a file
                              </span>
                              <input type="file" disabled={samplingFormUploadDisabled} onChange={(e) => samplingImageUploader(e)} className="hidden box-shadow-3" />
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
                          <input type="text" id="sampling_form_link" readOnly={samplingFormLinkDisabled} name="sampling_form_link" {...register('sampling_form_link')} placeholder="Paste here" required="" className="box-shadow-3 h-12 px-4 rounded-lg border border-[#95A5A6] bg-white lable-color w-full mt-2 mb-1 text-sm placeholder-[#95A5A6] focus:outline-none" />
                          {samplingFormLinkValidateError && <label className="error">{samplingFormLinkValidateError}</label>}
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </>
              :
              ''
            }

            {displaySurveysCampaignTypeTask
              ?
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
                              <img src={uploadicon} alt="uploadicon" />
                              <span className="mt-4 text-base leading-normal lable-color">
                                Drag & Drop or browse to choose a file
                              </span>
                              <input type="file" disabled={surveyFormUploadDisabled} onChange={(e) => surveyImageUploader(e)} className="hidden box-shadow-3" />
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

                      <div
                        className="flex-initial w-full md:11/12 lg:w-6/12 bac-1 py-2 sm:py-12 px-4 sm:px-2 pr-4 md:py-5 lg:py-0 mb-0 md:mb-2 lg:mb-5">
                        <label className="mt-10 mb-2 lable-color text-base font-semibold"> Survey link</label>
                        <div className="block mb-2 relative">
                          <input type="text" readOnly={surveyFormLinkDisabled} id="survey_form_link" name="survey_form_link" {...register('survey_form_link')} placeholder="Paste here" required=""
                            className="box-shadow-3 h-10 px-4 rounded-lg border border-[#95A5A6] bg-white lable-color w-full mt-2 mb-1 text-sm placeholder-[#95A5A6] focus:outline-none" />
                          {surveyFormLinkValidateError && <label className="error">{surveyFormLinkValidateError}</label>}
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </>
              :
              ''
            }

            {displayMarketResearchCampaignTypeTask
              ?
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
              ''
            }

            {displayInfluencerCampaignTypeTask
              ?
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
                            id="influencer_buy_product_details" name="influencer_buy_product_details" {...register('influencer_buy_product_details')} rows="3" disabled={influencerProductDetailsyDisabled} placeholder="Write from here"></textarea>
                          {influencerBuyProductDetailsValidateError && <label className="error">{influencerBuyProductDetailsValidateError}</label>}
                        </div>

                        <div className="form-check form-check-inline flex items-center mr-5 mb-2 sm:mb-5">
                          <input defaultValue={checked.influencerbuyimage} onChange={() => setChecked({ influencerbuyimage: !checked.influencerbuyimage })}
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
                              <input type="text" id="influencer_product_link" disabled={influencerProductLinkDisabled} name="influencer_product_link" {...register('influencer_product_link')} placeholder="Paste link here" required=""
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
                            id="influencer_review_details" disabled={influencerProductReviewDetailsDisabled} name="influencer_review_details" {...register('influencer_review_details')} rows="3" placeholder="Write from here"></textarea>
                          {influencerReviewDetailsValidateError && <label className="error">{influencerReviewDetailsValidateError}</label>}
                        </div>

                        <div className="form-check form-check-inline flex items-center mr-5 mb-3  sm:mb-5">
                          <input defaultValue={checked.influencerreviewimage}
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
                          id="influencer_script_approval" name="influencer_script_approval" {...register('influencer_script_approval')} rows="3" placeholder="Write from here"></textarea>
                        {influencerScriptApprovalValidateError && <label className="error">{influencerScriptApprovalValidateError}</label>}
                      </div>
                    </div>
                  </div>
                </div>

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
                          id="influencer_draft_upload" name="influencer_draft_upload" {...register('influencer_draft_upload')} rows="3" placeholder="Write from here"></textarea>
                        {influencerDraftUploadValidateError && <label className="error">{influencerDraftUploadValidateError}</label>}
                      </div>

                      <div className="form-check form-check-inline flex items-center mr-5 mb-3 sm:mb-5">
                        <input defaultValue={checked.influencerdraftimage} onChange={() => setChecked({ influencerdraftimage: !checked.influencerdraftimage })}
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
                          id="influencer_publish_details" name="influencer_publish_details" {...register('influencer_publish_details')} rows="3" placeholder="Write from here"></textarea>
                        {influencerPublishDetailsValidateError && <label className="error">{influencerPublishDetailsValidateError}</label>}
                      </div>
                      <div className="form-check form-check-inline flex items-center mr-5 mb-3 sm:mb-5">
                        <input defaultValue={checked.influencerpublishvideo} onChange={() => setChecked({ influencerpublishvideo: !checked.influencerpublishvideo })}
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
                              <option key={item._id} value={item._id}>{item.name}</option>
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
              ''
            }


            <h5 className="text-xl font-semibold lable-color mb-2">Other</h5>
            <div className="mb-10 box-shadow-1 rounded-2xl pt-9 px-4 sm:px-8 pb-8">
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
                          <input id={'toggle' + index} name="interests[]" value={item.id} {...register("interests")} type="checkbox" />
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
                              <option key={item._id} value={item._id}>{item.revuers_count}</option>
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
                displaySocialMedial
                  ?
                  <>
                    <div className="flex-initial w-full md:11/12 lg:w-6/12 bac-1 py-2 lg:py-2 px-2 pr-4 md:py-5 mr-2 mb-0 md:mb-2 lg:mb-5">
                      <h5 className="text-xl tracking-wide font-semibold lable-color mb-2">
                        Select Social Platform<span className="text-[#E74C3C]">{displaySocialMedialIcon ? "*" : ""}</span>
                      </h5>
                      <div className="box-shadow-1 rounded-xl py-8 py-s px-4 relative">
                        <div className="block lg:flex social-break">
                          <div className="block sm:flex socila-mb socila-mb1">
                            <div className="flex items-center mr-3 mb-0">
                              <input
                                id="social_facebook"
                                type="radio"
                                name="social_media"
                                className="hidden"
                                value="1"
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
                      <div className="relative inline-block w-[3.2rem] mr-2 align-middle select-none transition duration-200 ease-in">
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
export default Campaignpage;
