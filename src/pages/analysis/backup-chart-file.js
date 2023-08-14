import selecticon from "../../assets/images/down-select.svg";
import analaysicon from "../../assets/images/analays-upper-icon.svg";
import { useEffect, useState } from "react";
import { Header, Sidebar } from "../../layouts";
import { customSelect } from "../../utils/custom-select";
import BarChart from "../../components/Charts/bar";
import DoughnutChart from "../../components/Charts/pie";
import HorBarChart from "../../components/Charts/horbar";
import { getBrandCampaignReport } from "../../context/actions/analysis"

import { useDispatch, useSelector } from 'react-redux'
const options = {
    responsive: true,
    resizeDelay: 100,
    scales: {
        x: {
            ticks: {
                font: {
                    size: 11,
                },
                autoSkip: false,
                maxRotation: 0,
                minRotation: 0,
                beginAtZero: true,
            },
            grid: {
                display: false,
                drawBorder: false,
            },
            min: 0,
            /*max:5 */
        },
        y: {
            ticks: {
                font: {
                    size: 12,
                },
            },
            grid: {
                display: false,
                drawBorder: false,
                beginAtZero: true,
            },
        },
    },
    layout: {
        padding: {
            top: 20,
        }
    },
    barValueSpacing: 0,
    plugins: {
        legend: {
            display: false,
            position: "right",
            align: "start",
            labels: {
                boxWidth: 10,
                usePointStyle: true,
                pointStyle: "circle",
                fontSize: 5,
                PaddingBottom: 50,
                color: "#001540",
            },
        },
    },
};
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
const options12 = {
    maintainAspectRatio: false,
    responsive: true,
    indexAxis: "y",
    scales: {
        x: {
            ticks: {
                font: {
                    size: 11,
                },
                autoSkip: false,
                maxRotation: 0,
                minRotation: 0,
                beginAtZero: true,
            },

            grid: {
                display: false,
                drawBorder: false,
            },
            min: 0,
            /*max:5 */
        },
        y: {
            ticks: {
                font: {
                    size: 12,
                },
            },
            grid: {
                display: false,
                drawBorder: false,
                beginAtZero: true,
            },
        },
    },
    plugins: {
        legend: {
            display: false,
            position: "right",
            align: "start",
            labels: {
                boxWidth: 10,
                usePointStyle: true,
                pointStyle: "circle",
                fontSize: 5,
                PaddingBottom: 50,
                color: "#001540",
            },
        },
    },
};

function App() {
    const dispatch = useDispatch();
    var brandlogin_unique_token = localStorage.getItem("brandlogin_unique_token");
    const brandCampaignReport = useSelector((state) => state.brandCampignReport);
    const brandDataDetails = useSelector((state) => state.brandDetails);
    useEffect(() => {
        dispatch(getBrandCampaignReport({ token: brandlogin_unique_token }))
        document.getElementsByClassName("select-selected").length == 0 &&
            customSelect();
    }, []);
    return (
        <>
            <section className="pl-0 md:pl-60 lg:pl-[15rem] lg:pt-0 md:pt-0 pt-14">
                <Header welcome="Analysis Report " />
                <div className="px-7">
                    <div className=" sm:block block md:block lg:flex items-center ">
                        <div className=" flex-initial w-full md:w-full  lg:w-7/12 mr-5  py-6">
                            <div className="  block md:block lg:flex items-center">
                                <div className=" flex-initial w-full box-shadow-1 mb-10 lg:mb-0 rounded-xl md:w-full lg:w-6/12 mr-7 px-6 py-6">
                                    <div className="py-3">
                                        <h5 className="text-base font-semibold tracking-wide lable-color mb-2">
                                            Brand Name
                                        </h5>
                                        <div className="relative">
                                            {brandDataDetails.first_name} {brandDataDetails.last_name}
                                        </div>
                                    </div>
                                </div>
                                <div className=" flex-initial w-full box-shadow-1 rounded-xl md:w-full lg:w-6/12 px-10 py-8">
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
                                            <h3 className="font-semibold text-2xl">{brandCampaignReport?.brandName?.length || 0}</h3>
                                            <div></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className=" sm:block block md:block lg:flex items-center ">
                        <div className=" flex-initial w-full md:w-full  lg:w-6/12 mr-5  py-6">
                            <div className="box-shadow-1 rounded-xl px-6 py-5">
                                <div className="flex justify-between pr-0 sm:pr-5 items-center mb-8">
                                    <h3 className="text-sm sm:text-2xl font-bold">Impressions</h3>
                                </div>
                                <div className=" sm:pb-0 md:pt-[5.8rem] md:pb-[0rem] lg:py-[1.9rem]">
                                    <div className="mb-5">
                                        <div className="-ml-12 pie-chart" style={{ width: 400 }}>
                                            <DoughnutChart chartData={{
                                                labels: brandCampaignReport?.brandName || [],
                                                datasets: [
                                                    {
                                                        label: "# of votes",
                                                        backgroundColor: [
                                                            "#F50057",
                                                            "#2ECC71",
                                                            "#95A5A6",
                                                            "#FCB43C",
                                                            "#3498DB",
                                                            "#6200EA",
                                                        ],
                                                        data: brandCampaignReport?.engagementNumber || [],
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
                                                const ref_colors = [
                                                    "#F50057",
                                                    "#2ECC71",
                                                    "#95A5A6",
                                                    "#FCB43C",
                                                    "#3498DB",
                                                    "#6200EA",
                                                ]
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
                                {/* <div className="App chartWrapper">
                                    <div style={{ width: 575, position: "relative" }}>
                                        <BarChart chartData={{
                                            labels: brandCampaignReport?.brandName || [],
                                            datasets: [
                                                {
                                                    label: "",
                                                    // data: UserData.map((data) => data.userGain),
                                                    backgroundColor: "rgba(252, 180, 60, 1)",
                                                    borderWidth: 0,
                                                    borderRadius: 50,
                                                    barThickness: 10,
                                                    barBottomMargin: 40,
                                                    borderSkipped: false,
                                                    data: brandCampaignReport?.impressionsNumber || [],
                                                    display: false,
                                                },
                                            ],
                                        }} options={options} />
                                    </div>
                                </div> */}
                            </div>
                        </div>

                        <div className=" flex-initial w-full md:w-full  lg:w-6/12  py-6">
                            <div className="box-shadow-1 rounded-xl px-6 py-5 relative">
                                <div className=" pr-5">
                                    <h3 className=" text-sm sm:text-2xl font-bold md:mb-5">
                                        Engagement
                                    </h3>
                                </div>
                                <div className=" sm:pb-0 md:pt-[5.8rem] md:pb-[0rem] lg:py-[1.9rem]">
                                    <div className="mb-5">
                                        <div className="-ml-12 pie-chart" style={{ width: 400 }}>
                                            <DoughnutChart chartData={{
                                                labels: brandCampaignReport?.brandName || [],
                                                datasets: [
                                                    {
                                                        label: "# of votes",
                                                        backgroundColor: [
                                                            "#F50057",
                                                            "#2ECC71",
                                                            "#95A5A6",
                                                            "#FCB43C",
                                                            "#3498DB",
                                                            "#6200EA",
                                                        ],
                                                        data: brandCampaignReport?.engagementNumber || [],
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
                                                const ref_colors = [
                                                    "#F50057",
                                                    "#2ECC71",
                                                    "#95A5A6",
                                                    "#FCB43C",
                                                    "#3498DB",
                                                    "#6200EA",
                                                ]
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

                    <div className=" sm:block block md:block lg:flex items-center ">
                        <div className=" flex-initial w-full md:w-full  lg:w-6/12 mr-5  py-6">
                            <div className="box-shadow-1 rounded-xl px-6 py-5">
                                <div className="flex justify-between pr-0 sm:pr-5 items-center mb-8">
                                    <h3 className="text-sm sm:text-2xl font-bold">Comment</h3>
                                </div>

                                <div className="App chartWrapper">
                                    <div style={{ width: 575 }}>
                                        <BarChart chartData={{
                                            labels: brandCampaignReport?.brandName || [],
                                            datasets: [
                                                {
                                                    label: "",
                                                    // data: UserData.map((data) => data.userGain),
                                                    backgroundColor: "rgba(252, 180, 60, 1)",
                                                    borderWidth: 0,
                                                    borderRadius: 50,
                                                    barThickness: 10,
                                                    barBottomMargin: 40,
                                                    borderSkipped: false,
                                                    data: brandCampaignReport?.commentNumber || [],
                                                    display: false,
                                                },
                                            ],
                                        }} options={options} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="box-shadow-3 rounded-xl px-7 py-7 ">
                        <div className="flex justify-between   items-center mb-8 ">
                            <h3 className="text-2xl font-bold">Reach</h3>
                        </div>

                        <div className="chartWrapper1">
                            <div className="h-[23rem] md:pr-10">
                                <HorBarChart chartData={{
                                    labels: brandCampaignReport?.brandName || [],
                                    datasets: [
                                        {
                                            data: brandCampaignReport?.reachNumber || [],
                                            backgroundColor: "rgba(252, 180, 60, 1)",
                                            borderWidth: 0,
                                            borderRadius: 50,
                                            barThickness: 12,
                                            borderSkipped: false,
                                            datalabels: {
                                                color: "#001540",
                                                fontWeight: "400",
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
                                }} options={options12} />
                            </div>
                        </div>
                    </div>

                    <div className="box-shadow-3 rounded-xl px-7 py-7 mt-5">
                        <div className="flex justify-between   items-center mb-8 ">
                            <h3 className="text-2xl font-bold">Video View</h3>
                        </div>

                        <div className="chartWrapper1">
                            <div className="h-[23rem] md:pr-10">
                                <HorBarChart chartData={{
                                    labels: brandCampaignReport?.brandName || [],
                                    datasets: [
                                        {
                                            data: brandCampaignReport?.videoViewNumber || [],
                                            backgroundColor: "rgba(252, 180, 60, 1)",
                                            borderWidth: 0,
                                            borderRadius: 50,
                                            barThickness: 12,
                                            borderSkipped: false,
                                            datalabels: {
                                                color: "#001540",
                                                fontWeight: "400",
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
                                }} options={options12} />
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <Sidebar title="Analysis" subtitle="BrandCampignReport" />
        </>
    );
}

export default App;
