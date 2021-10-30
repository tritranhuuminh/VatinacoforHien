import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Radar } from "react-chartjs-2"
import axios from 'axios'


export default function Energy() {
    const auth = useSelector(state => state.auth)

    return (
        <div className="col_left it energy">
            <p>Energy</p>
            <div className="chart">

                <Radar
                    data={{
                        labels: [
                            'Jan',
                            'Feb',
                            'Mar',
                            'Apr',
                            'May',
                            'Jun'
                        ],
                        datasets: [{
                            data: [60, 50, 90, 80, 50, 50],
                            fill: true,
                            backgroundColor: 'rgba(255, 255, 255, 0)',
                            borderColor: 'rgb(255, 99, 132)',
                            pointBackgroundColor: 'rgb(255, 99, 132)',
                            pointBorderColor: '#fff',
                            pointHoverBackgroundColor: '#fff',
                            pointHoverBorderColor: 'rgb(255, 99, 132)'
                        }]
                    }}
                    options={{
                        maintainAspectRatio: false,
                        // responsive: true,
                        elements: {
                            line: {
                                borderWidth: 2
                            }
                        },
                        plugins: {
                            tooltip: {
                                enabled: true,
                                titleColor: "#fff",
                                bodyColor: "#fff"
                            },
                            legend: {
                                display: false,
                                labels: {
                                    font: {
                                        size: 12
                                    }
                                }
                            }
                        },
                        scales: {
                            r: {
                                max: 100,
                                min: 0,
                                ticks: {
                                    stepSize: 10,
                                    backdropColor: "rgba(255, 255, 255, 0)",
                                    color: "white",
                                    backdropPadding: 5,
                                    z: 2,
                                    textStrokeColor: "blue",
                                    font :{
                                        size: 12
                                    }
                                },
                                grid: {
                                    color: 'rgba(255, 255, 255, 0.6)',
                                    borderColor: 'rgba(255, 255, 255, 0.6)',
                                    tickColor: 'white'
                                },
                                angleLines: {
                                    color: 'rgba(255, 255, 255, 0.6)'
                                },
                                pointLabels: {
                                    color: 'white',
                                    font: {
                                        size: 10
                                    },
                                    backdropPadding: 5
                                }
                            }
                        }
                    }}
                />
            </div>
        </div>
    )
}

