import selecticon from "../../assets/images/down-select.svg";
import analaysicon from "../../assets/images/analays-upper-icon.svg";
import { useEffect, useRef } from "react";
import { Header, Sidebar } from "../../layouts";
import { customSelect } from "../../utils/custom-select";
import DoughnutChart from "../../components/Charts/pie";
import { getBrandCampaignReport, getCampignNamesDataIo } from "../../context/actions/analysis"
import { useForm } from "react-hook-form"

import { useDispatch, useSelector } from 'react-redux'
const options1 = {
    responsive: true,
    layout: {
        padding: 25,
    },
    plugins: {
        legend: {
            display: false,
            position: "right",
            align: "start",
            labels: {
                boxWidth: 5,
                usePointStyle: true,
                pointStyle: "circle",
                paddingTop: 50,
            },
        },
        htmlLegend: {
            containerID: "myChartLegend",
        },
        labels: {
            render: (args) => {
                if (args.percentage > 0) {
                    return `${args.percentage}% 
${args.label}`;
                }
            },
            position: "outside",
            fontColor: "rgba(0, 21, 64, 1)",
            fontSize: 10,
            textMargin: 8,
            fontWeight: "bold",
        },
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    },
    aspectRatio: 5 / 3,
    rotation: 300,
};
function App() {
    const dispatch = useDispatch();
    var brandlogin_unique_token = localStorage.getItem("brandlogin_unique_token");
    const brandCampaignReport = useSelector((state) => state.brandCampignReport);
    const brandDataDetails = useSelector((state) => state.brandDetails);
    useEffect(() => {
        dispatch(getCampignNamesDataIo({ token: brandlogin_unique_token }))
        document.getElementsByClassName("select-selected").length == 0 &&
            customSelect();
    }, []);
    const backgroundColorArray = (len = brandCampaignReport?.brandName?.length) => {
        let colors = []
        for (let i = 0; i < len; i++) {
            colors.push(`rgb(${Math.floor((Math.random() * 255) + 1)},${Math.floor((Math.random() * 255) + 1)},${Math.floor((Math.random() * 255) + 1)})`)
        }
        return colors
    }

    const backgroundColor = { impressions: backgroundColorArray(100), engagement: backgroundColorArray(100), comment: backgroundColorArray(100), reach: backgroundColorArray(100), videoView: backgroundColorArray(100) }
    const { register, handleSubmit, reset } = useForm()
    const onSubmit = (data, event) => {
        dispatch(getBrandCampaignReport({ token: brandlogin_unique_token, campaignToken: data.campaign_token }))
    }
    const campignNamesDataIo = useSelector((state) => state.getCampaignNameIo);
    console.log("brandCampaignReport", brandCampaignReport, brandCampaignReport?.length)
    const submitButton = useRef();
    return (
        <>
            <section className="pl-0 md:pl-60 lg:pl-[15rem] lg:pt-0 md:pt-0 pt-14">
                {brandDataDetails.first_name ?
                    <>
                        <Header welcome="Welcome, " name={`${brandDataDetails.first_name}` + ` ${brandDataDetails.last_name} !`} />
                    </>
                    :
                    ''
                }
                <div className="px-7">
                    <div className=" sm:block block md:block lg:flex items-center ">
                        <div className=" flex-initial w-full md:w-full  lg:w-12/12 mr-5  py-6">
                            <div className="  block md:block lg:flex items-center">
                                <div className=" flex-initial w-full box-shadow-1 mb-10 lg:mb-0 rounded-xl md:w-full lg:w-6/12 mr-7 px-6 py-6">
                                    <div className="flex justify-between mt-2 items-center mb-6">
                                        <h6 className="text text-xl font-semibold pl-3">Influencer Outreach</h6>
                                    </div>
                                    <form onSubmit={handleSubmit((data, event) => onSubmit(data, event))} className="theme-form ng-untouched ng-pristine ng-valid" method="post">
                                        <div className="block sm:flex items-center">
                                            <div className="flex-initial w-full sub-width-2 sm:w-12/12 lg:w-12/12 md:w-12/12 mr-6">
                                                <label className="lable-color text-sm tracking-wide font-semibold">
                                                    Select Campaign Name
                                                </label>
                                                <div className="block relative">
                                                    <select id="campaign_token" name="campaign_token"
                                                        {...register("campaign_token")}
                                                        className="mt-2 form-select appearance-none block w-full px-3 h-12 text-sm font-normal lable-color bg-white bg-clip-padding bg-no-repeat rounded-lg border border-[#95A5A6] transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-black focus:outline-none" aria-label="Default select example">
                                                        <option value="All" selected>All</option>
                                                        {campignNamesDataIo?.length > 0 &&
                                                            campignNamesDataIo?.map((item, index) => {
                                                                return (
                                                                    <option value={item.campaign_token} key={index}>{item.campaign_name}</option>
                                                                )
                                                            })}
                                                    </select>
                                                    <img
                                                        src={selecticon}
                                                        alt="selecticon"
                                                        className="w-3 h-2.5 absolute top-[20px] right-2.5  block sm:mr-2 sm:m-none mx-auto"
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex justify-center sm:justify-end mt-7">
                                                <button ref={submitButton} className="bac-6 w-full sm:w-48 py-2.5 flex rounded-lg text-white  text-base font-bold justify-center items-center uppercase" ><i className="fa fa-spin fa-spinner mr-2" id="btn_spinner"></i>submit</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                {/* <div className=" flex-initial w-full box-shadow-1 rounded-xl md:w-full lg:w-6/12 px-10 py-8">
                                    <div className="flex items-center">
                                        <div className="flex items-center mr-3 py-0.5">
                                            <div className="bg-[#FFE5BF] w-16 h-16 flex justify-center items-center rounded-xl">
                                                <img
                                                    src={analaysicon}
                                                    alt="analaysicon"
                                                    className="w-6 block  mx-auto"
                                                />
                                            </div>

                                            <div></div>
                                        </div>
                                        <div>
                                            <h5 className="color-3 text-sm mb-2.5">
                                                Total Campaigns
                                            </h5>
                                            <h3 className="font-semibold text-2xl">{campignNamesDataIo?.length || 0}</h3>
                                            <div></div>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    {(brandCampaignReport?.length !== 0) ?
                        <>
                            <div className=" sm:block block md:block lg:flex items-center mb-2">
                                <div className=" flex-initial w-full md:w-full  lg:w-12/12  py-6">
                                    <div className="box-shadow-1 rounded-xl px-6 py-5 relative">
                                        <div className="pr-5">
                                            <h3 className=" text-sm sm:text-2xl font-bold md:mb-5">
                                                Impressions({brandCampaignReport?.impressionsNumber?.reduce((a, b) => a + b, 0) || 0})
                                            </h3>
                                        </div>
                                        {
                                            console.log("brandCampaignReport?.impressionsNumber", brandCampaignReport?.impressionsNumber)
                                        }
                                        <div className=" sm:pb-0 md:pt-[5.8rem] md:pb-[0rem] lg:py-[1.9rem]">
                                            <div className="mb-5">
                                                <div className="-ml-12 pie-chart" style={{ width: "60%" }}>
                                                    <DoughnutChart chartData={{
                                                        labels: brandCampaignReport?.brandName || ["No Data Found"],
                                                        datasets: [
                                                            {
                                                                label: "# of votes",
                                                                backgroundColor: brandCampaignReport?.impressionsNumber?.filter(n => n != 0).length > 0 ? backgroundColor.impressions : ["#dae0e5"],
                                                                data: brandCampaignReport?.impressionsNumber || ["100"],
                                                                cutout: "100%",
                                                                borderWidth: 0,
                                                                fontColor: "white",
                                                                cutout: "78%",
                                                                datalabels: {
                                                                    color: "#001540",
                                                                    fontWeight: "bold",
                                                                    anchor: "end",
                                                                    offsetX: 45,
                                                                    align: "end",
                                                                    offsetX: 45,
                                                                    textalign: "left",
                                                                    marker: {
                                                                        dataLabel: { visible: true },
                                                                    },
                                                                },
                                                            },
                                                        ],
                                                    }} options={options1} />
                                                </div>
                                            </div>
                                            <div className="absolute pie-chart-label bottom-0 md:top-[5%] lg:top-[30%]  md:right-8  lg:right-20 mt-5">
                                                <div className="block ">
                                                    {brandCampaignReport?.brandName?.map((item, index) => {
                                                        const ref_colors = backgroundColor.impressions
                                                        return (
                                                            <div className="flex sm:block justify-between">
                                                                <div className="flex items-center mb-4">
                                                                    <div className="flex items-center mb-4">
                                                                        <div className={`bg-[${ref_colors[index]}] rounded-full mr-2 h-4 w-4`} style={{ backgroundColor: ref_colors[index] }}></div>
                                                                        <h2 className="text-xs sm:text-sm">
                                                                            {item}
                                                                            <span className="ml-1 font-bold text-sm">
                                                                                {brandCampaignReport?.impressionsNumber[index]}
                                                                            </span>
                                                                        </h2>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" sm:block block md:block lg:flex items-center mb-2">
                                <div className=" flex-initial w-full md:w-full  lg:w-12/12  py-6">
                                    <div className="box-shadow-1 rounded-xl px-6 py-5 relative">
                                        <div className="pr-5">
                                            <h3 className=" text-sm sm:text-2xl font-bold md:mb-5">
                                                Engagement({brandCampaignReport?.engagementNumber?.reduce((a, b) => a + b, 0) || 0})
                                            </h3>
                                        </div>
                                        <div className=" sm:pb-0 md:pt-[5.8rem] md:pb-[0rem] lg:py-[1.9rem]">
                                            <div className="mb-5">
                                                <div className="-ml-12 pie-chart" style={{ width: "60%" }}>
                                                    <DoughnutChart chartData={{
                                                        labels: brandCampaignReport?.brandName || ["No Data Found"],
                                                        datasets: [
                                                            {
                                                                label: "# of votes",
                                                                backgroundColor: brandCampaignReport?.engagementNumber?.filter(n => n != 0).length > 0 ? backgroundColor.engagement : ["#dae0e5"],
                                                                data: brandCampaignReport?.engagementNumber || ["100"],
                                                                cutout: "100%",
                                                                borderWidth: 0,
                                                                fontColor: "white",
                                                                cutout: "78%",
                                                                datalabels: {
                                                                    color: "#001540",
                                                                    fontWeight: "bold",
                                                                    anchor: "end",
                                                                    offsetX: 45,
                                                                    align: "end",
                                                                    offsetX: 45,
                                                                    textalign: "left",
                                                                    marker: {
                                                                        dataLabel: { visible: true },
                                                                    },
                                                                },
                                                            },
                                                        ],
                                                    }} options={options1} />
                                                </div>
                                            </div>
                                            <div className="absolute pie-chart-label bottom-0 md:top-[5%] lg:top-[30%]  md:right-8  lg:right-20 mt-5">
                                                <div className="block ">
                                                    {brandCampaignReport?.brandName?.map((item, index) => {
                                                        const ref_colors = backgroundColor.engagement
                                                        return (
                                                            <div className="flex sm:block justify-between">
                                                                <div className="flex items-center mb-4">
                                                                    <div className="flex items-center mb-4">
                                                                        <div className={`bg-[${ref_colors[index]}] rounded-full mr-2 h-4 w-4`} style={{ backgroundColor: ref_colors[index] }}></div>
                                                                        <h2 className="text-xs sm:text-sm">
                                                                            {item}
                                                                            <span className="ml-1 font-bold text-sm">
                                                                                {brandCampaignReport?.engagementNumber[index]}
                                                                            </span>
                                                                        </h2>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" sm:block block md:block lg:flex items-center mb-2">
                                <div className=" flex-initial w-full md:w-full  lg:w-12/12  py-6">
                                    <div className="box-shadow-1 rounded-xl px-6 py-5 relative">
                                        <div className="pr-5">
                                            <h3 className=" text-sm sm:text-2xl font-bold md:mb-5">
                                                Comments({brandCampaignReport?.commentNumber?.reduce((a, b) => a + b, 0) || 0})
                                            </h3>
                                        </div>
                                        <div className=" sm:pb-0 md:pt-[5.8rem] md:pb-[0rem] lg:py-[1.9rem]">
                                            <div className="mb-5">
                                                <div className="-ml-12 pie-chart" style={{ width: "60%" }}>
                                                    <DoughnutChart chartData={{
                                                        labels: brandCampaignReport?.brandName || ["No Data Found"],
                                                        datasets: [
                                                            {
                                                                label: "# of votes",
                                                                backgroundColor: brandCampaignReport?.commentNumber?.filter(n => n != 0).length > 0 ? backgroundColor.comment : ["#dae0e5"],
                                                                data: brandCampaignReport?.commentNumber || ["100"],
                                                                cutout: "100%",
                                                                borderWidth: 0,
                                                                fontColor: "white",
                                                                cutout: "78%",
                                                                datalabels: {
                                                                    color: "#001540",
                                                                    fontWeight: "bold",
                                                                    anchor: "end",
                                                                    offsetX: 45,
                                                                    align: "end",
                                                                    offsetX: 45,
                                                                    textalign: "left",
                                                                    marker: {
                                                                        dataLabel: { visible: true },
                                                                    },
                                                                },
                                                            },
                                                        ],
                                                    }} options={options1} />
                                                </div>
                                            </div>
                                            <div className="absolute pie-chart-label bottom-0 md:top-[5%] lg:top-[30%]  md:right-8  lg:right-20 mt-5">
                                                <div className="block ">
                                                    {brandCampaignReport?.brandName?.map((item, index) => {
                                                        const ref_colors = backgroundColor.comment
                                                        return (
                                                            <div className="flex sm:block justify-between">
                                                                <div className="flex items-center mb-4">
                                                                    <div className="flex items-center mb-4">
                                                                        <div className={`bg-[${ref_colors[index]}] rounded-full mr-2 h-4 w-4`} style={{ backgroundColor: ref_colors[index] }}></div>
                                                                        <h2 className="text-xs sm:text-sm">
                                                                            {item}
                                                                            <span className="ml-1 font-bold text-sm">
                                                                                {brandCampaignReport?.commentNumber[index]}
                                                                            </span>
                                                                        </h2>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" sm:block block md:block lg:flex items-center mb-2">
                                <div className=" flex-initial w-full md:w-full  lg:w-12/12  py-6">
                                    <div className="box-shadow-1 rounded-xl px-6 py-5 relative">
                                        <div className="pr-5">
                                            <h3 className=" text-sm sm:text-2xl font-bold md:mb-5">
                                                Reach({brandCampaignReport?.reachNumber?.reduce((a, b) => a + b, 0) || 0})
                                            </h3>
                                        </div>
                                        <div className=" sm:pb-0 md:pt-[5.8rem] md:pb-[0rem] lg:py-[1.9rem]">
                                            <div className="mb-5">
                                                <div className="-ml-12 pie-chart" style={{ width: "60%" }}>
                                                    <DoughnutChart chartData={{
                                                        labels: brandCampaignReport?.brandName || ["No Data Found"],
                                                        datasets: [
                                                            {
                                                                label: "# of votes",
                                                                backgroundColor: brandCampaignReport?.reachNumber?.filter(n => n != 0).length > 0 ? backgroundColor.reach : ["#dae0e5"],
                                                                data: brandCampaignReport?.reachNumber || ["100"],
                                                                cutout: "100%",
                                                                borderWidth: 0,
                                                                fontColor: "white",
                                                                cutout: "78%",
                                                                datalabels: {
                                                                    color: "#001540",
                                                                    fontWeight: "bold",
                                                                    anchor: "end",
                                                                    offsetX: 45,
                                                                    align: "end",
                                                                    offsetX: 45,
                                                                    textalign: "left",
                                                                    marker: {
                                                                        dataLabel: { visible: true },
                                                                    },
                                                                },
                                                            },
                                                        ],
                                                    }} options={options1} />
                                                </div>
                                            </div>
                                            <div className="absolute pie-chart-label bottom-0 md:top-[5%] lg:top-[30%]  md:right-8  lg:right-20 mt-5">
                                                <div className="block ">
                                                    {brandCampaignReport?.brandName?.map((item, index) => {
                                                        const ref_colors = backgroundColor.reach
                                                        return (
                                                            <div className="flex sm:block justify-between">
                                                                <div className="flex items-center mb-4">
                                                                    <div className="flex items-center mb-4">
                                                                        <div className={`bg-[${ref_colors[index]}] rounded-full mr-2 h-4 w-4`} style={{ backgroundColor: ref_colors[index] }}></div>
                                                                        <h2 className="text-xs sm:text-sm">
                                                                            {item}
                                                                            <span className="ml-1 font-bold text-sm">
                                                                                {brandCampaignReport?.reachNumber[index]}
                                                                            </span>
                                                                        </h2>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" sm:block block md:block lg:flex items-center mb-2">
                                <div className=" flex-initial w-full md:w-full  lg:w-12/12  py-6">
                                    <div className="box-shadow-1 rounded-xl px-6 py-5 relative">
                                        <div className="pr-5">
                                            <h3 className=" text-sm sm:text-2xl font-bold md:mb-5">
                                                Video View({brandCampaignReport?.videoViewNumber?.reduce((a, b) => a + b, 0) || 0})
                                            </h3>
                                        </div>
                                        <div className=" sm:pb-0 md:pt-[5.8rem] md:pb-[0rem] lg:py-[1.9rem]">
                                            <div className="mb-5">
                                                <div className="-ml-12 pie-chart" style={{ width: "60%" }}>
                                                    <DoughnutChart chartData={{
                                                        labels: brandCampaignReport?.brandName || ["No Data Found"],
                                                        datasets: [
                                                            {
                                                                label: "# of votes",
                                                                backgroundColor: brandCampaignReport?.videoViewNumber?.filter(n => n != 0).length > 0 ? backgroundColor.videoView : ["#dae0e5"],
                                                                data: brandCampaignReport?.videoViewNumber || ["100"],
                                                                cutout: "100%",
                                                                borderWidth: 0,
                                                                fontColor: "white",
                                                                cutout: "78%",
                                                                datalabels: {
                                                                    color: "#001540",
                                                                    fontWeight: "bold",
                                                                    anchor: "end",
                                                                    offsetX: 45,
                                                                    align: "end",
                                                                    offsetX: 45,
                                                                    textalign: "left",
                                                                    marker: {
                                                                        dataLabel: { visible: true },
                                                                    },
                                                                },
                                                            },
                                                        ],
                                                    }} options={options1} />
                                                </div>
                                            </div>
                                            <div className="absolute pie-chart-label bottom-0 md:top-[5%] lg:top-[30%]  md:right-8  lg:right-20 mt-5">
                                                <div className="block ">
                                                    {brandCampaignReport?.brandName?.map((item, index) => {
                                                        const ref_colors = backgroundColor.videoView
                                                        return (
                                                            <div className="flex sm:block justify-between">
                                                                <div className="flex items-center mb-4">
                                                                    <div className="flex items-center mb-4">
                                                                        <div className={`bg-[${ref_colors[index]}] rounded-full mr-2 h-4 w-4`} style={{ backgroundColor: ref_colors[index] }}></div>
                                                                        <h2 className="text-xs sm:text-sm">
                                                                            {item}
                                                                            <span className="ml-1 font-bold text-sm">
                                                                                {brandCampaignReport?.videoViewNumber[index]}
                                                                            </span>
                                                                        </h2>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                        :
                        <div className=" sm:block block md:block lg:flex items-center mb-2">
                            <div className=" flex-initial w-full md:w-full  lg:w-12/12  py-6">
                                <div className="box-shadow-1 rounded-xl px-6 py-5 relative">
                                    <div className="pr-5">
                                        <h6 className="text-center text-sm sm:text-2xl font-bold md:mb-5">
                                            No Data Found
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </section>
            <Sidebar title="Analysis" subtitle="BrandCampignReport" />
        </>
    );
}

export default App;
