import { useMemo } from "react";
import * as d3 from "d3";
const MARGIN_X = 150;
const MARGIN_Y = 50;
const windowWidth = window.innerWidth
const windowHeight = window.innerHeight
let INFLEXION_PADDING; // space between donut and label inflexion point
if (windowWidth < 600 && windowWidth > 0) {
    INFLEXION_PADDING = 50
} else {
    INFLEXION_PADDING = 100
}
function PieChart({ width, height, data, colors }) {
    const radius = Math.min(width - 2 * MARGIN_X, height - 2 * MARGIN_Y) / 2;

    const pie = useMemo(() => {
        const pieGenerator = d3.pie().value((d) => d);
        return pieGenerator(data);
    }, [data]);

    const arcGenerator = d3.arc();

    const shapes = pie.map((grp, i) => {
        // First arc is for the pie
        let sliceInfo
        if (windowWidth < 600 && windowWidth > 0) {
            sliceInfo = {
                innerRadius: 80,
                outerRadius: radius,
                startAngle: grp.startAngle,
                endAngle: grp.endAngle,
            };
        } else {
            sliceInfo = {
                innerRadius: 150,
                outerRadius: radius,
                startAngle: grp.startAngle,
                endAngle: grp.endAngle,
            };
        }
        const centroid = arcGenerator.centroid(sliceInfo);
        const slicePath = arcGenerator(sliceInfo);

        // Second arc is for the legend inflexion point
        const inflexionInfo = {
            innerRadius: radius + INFLEXION_PADDING,
            outerRadius: radius + INFLEXION_PADDING,
            startAngle: grp.startAngle,
            endAngle: grp.endAngle,
        };
        const inflexionPoint = arcGenerator.centroid(inflexionInfo);
        const isRightLabel = inflexionPoint[0] > 0;
        const labelPosX = inflexionPoint[0] + 60 * (isRightLabel ? 1 : -1);
        const textAnchor = isRightLabel ? "start" : "end";
        const label = grp.value;

        return (
            <g key={i}>
                <path d={slicePath} fill={colors[i + 1]} />
                {(windowWidth < 600 && windowWidth > 0) ?
                    <>
                        {/* <circle cx={centroid[0]} cy={centroid[1]} r={2} />
                        <line
                            x1={centroid[0]}
                            y1={centroid[1]}
                            x2={centroid[0] + 25}
                            y2={centroid[1] + 25}
                            stroke={"black"}
                            fill={"black"}
                        /> */}
                        <text
                            x={centroid[0] + 30}
                            y={centroid[1] + 30}
                            textAnchor={textAnchor}
                            dominantBaseline="middle"
                            fontSize={14}
                        >
                            {label}
                        </text>
                    </>
                    :
                    <>
                        <circle cx={centroid[0]} cy={centroid[1]} r={2} />
                        <line
                            x1={centroid[0]}
                            y1={centroid[1]}
                            x2={inflexionPoint[0]}
                            y2={inflexionPoint[1]}
                            stroke={"black"}
                            fill={"black"}
                        />
                        <line
                            x1={inflexionPoint[0]}
                            y1={inflexionPoint[1]}
                            x2={labelPosX}
                            y2={inflexionPoint[1]}
                            stroke={"black"}
                            fill={"black"}
                        />
                        <text
                            x={labelPosX + (isRightLabel ? 2 : -2)}
                            y={inflexionPoint[1]}
                            textAnchor={textAnchor}
                            dominantBaseline="middle"
                            fontSize={14}
                        >
                            {label}
                        </text>
                    </>
                }
            </g >
        );
    });
    if (windowWidth < 600 && windowWidth > 0) {
        return (
            <svg width={"100%"} height={height - 100} style={{ display: "inline-block" }}>
                <g transform={`translate(${130}, ${height / 2.5})`}>{shapes}</g>
            </svg>
        );
    } else {
        return (
            <svg width={"100%"} height={height} style={{ display: "inline-block" }}>
                <g transform={`translate(${width / 1.2}, ${height / 2})`}>{shapes}</g>
            </svg>
        );
    }
};

export default PieChart;