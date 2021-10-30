import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Bar } from 'react-chartjs-2'
import axios from 'axios'


export default function Schedule() {
    const auth = useSelector(state => state.auth)

    return (
        <div className="col_right it schedule">
            <p>Schedule</p>
            <div className="chart">
            <Bar
                    data={{
                        labels: ["2015-01", "2015-02", "2015-03", "2015-04", "2015-05", "2015-06", "2015-07", "2015-08", "2015-09", "2015-10", "2015-11", "2015-12"],
                        datasets: [
                            {
                                backgroundColor: "#008FFB",
                                data: [12, 19, 30, 50, 20, 30, 100, 30, 50, 60, 20, 10],
                                borderRadius: 10,
                                borderWidth: 2,
                                borderColor: "#77c4fff5",
                                barPercentage: 0.6,

                            }
                        ]
                    }}
                    options={{
                        maintainAspectRatio: false,
                        responsive: true,
                        plugins: {
                            tooltip: {
                                enabled: true,
                                titleColor: "#fff",
                                bodyColor: "#fff"
                            },
                            legend: {
                                display: false
                            }
                        },
                         scales: {
                             y: {
                                max: 100,
                                min: 0,
                                ticks: {
                                    stepSize: 20,
                                    color: "white"
                                }
                             },
                             x: {
                                //  display: false
                                ticks: {
                                    color: "white"
                                },
                                grid: {
                                    display: false
                                }
                             }
                         }
                    }}
                />
            </div>
        </div>
    )
}

