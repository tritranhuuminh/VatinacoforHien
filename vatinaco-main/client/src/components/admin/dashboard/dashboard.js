import React, { useEffect, useState } from 'react'
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


export default function Dashboard() {
    const auth = useSelector(state => state.auth)
    const [timeString, setTimeString] = useState('')

    useEffect(() => {
        const clockInterval = setInterval(() => {
            const now = new Date();
            const newTimeString = formatDate(now);
            setTimeString(newTimeString);
        }, 1000)
        return () => {
            clearInterval(clockInterval)
        };
    }, []);

    const formatDate = (date) => {
        if (!date) return "";
        const hours = `0${date.getHours()}`.slice(-2);
        const minutes = `0${date.getMinutes()}`.slice(-2);
        const seconds = `0${date.getSeconds()}`.slice(-2);

        return `${hours}:${minutes}:${seconds}`;
    }


    return (
        <div className="dashboard">
            <h3>Manufacturing Nanocovax Vaccine</h3>
            <h2>{timeString}</h2>
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
