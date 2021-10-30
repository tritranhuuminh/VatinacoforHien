import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import axios from 'axios'

import Culter from "./culter"
import Energy from "./energy";
import Environment from "./environment";
import Main from "./main";
import Performance from "./performance";
import Schedule from "./schedule";
import Storage from "./storage";
import History from "./history"

import './dashboard.scss'

import socketIOClient from "socket.io-client";
const host = "http://localhost:5000";

export default function Dashboard() {
    const auth = useSelector(state => state.auth)

    const [data, setData] = useState({
        timeProcessOut1: 0,
        timeProcessOut2: 0,
        O2: 0,
        CO2: 0,
        Humidity: 0,
        PH: 0,
        D0: 0,
        Temp: 0,
        OEE: 0
    })

    const socketRef = useRef()
    useEffect(() => {
        socketRef.current = socketIOClient.connect(host)
        socketRef.current.on('sendDataServer', data => {
            const dataWrap = {
                timeProcessOut1: data.tempCulture1.toFixed(2),
                timeProcessOut2: data.timeProcessOut2.toFixed(2),
                O2: data.O2.toFixed(2),
                CO2: data.CO2.toFixed(2),
                Humidity: data.Humidity.toFixed(2),
                PH: data.PH.toFixed(2),
                D0: data.D0.toFixed(2),
                Temp: data.Temp.toFixed(2),
                OEE: data.OEE.toFixed(2)
            }
            setData(dataWrap);
        })
        return () => {
            socketRef.current.disconnect();
        };
    }, []);
    const timeProcessOut = {
        O2: data.timeProcessOut1,
        CO2: data.timeProcessOut1,
    }
    return (
        <div className="dashboard">
            <div className="tb_lf">
                <Culter />
                <Main />
                <div className="tb_rt">
                    <Performance />
                    <Schedule />
                    <Storage />
                </div>

                <Environment data={timeProcessOut} />
                <Energy />
                <History />
            </div>
        </div>
    )
}
