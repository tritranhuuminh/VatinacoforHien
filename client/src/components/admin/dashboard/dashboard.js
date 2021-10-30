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

    const [data, setData] = useState({ mixer: 0 })

    const socketRef = useRef()
    useEffect(() => {
        socketRef.current = socketIOClient.connect(host)
        socketRef.current.on('sendDataServer', data => {
            setData({ mixer: data.tempCulture1.toFixed(2) });
            console.log(data)
        })
        return () => {
            socketRef.current.disconnect();
        };
    }, []);
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

                <Environment />
                <Energy />
                <History />
            </div>
        </div>
    )
}
