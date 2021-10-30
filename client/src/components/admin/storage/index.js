import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import axios from 'axios'

import './storage_page.scss'

import socketIOClient from "socket.io-client";
const host = "http://localhost:5000";

export default function StoragePage() {
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
        <div className="storage_page">
            <h3>storage area</h3>
            <div className="data">
                <div className="mixer element">
                    <p>Mixer</p>
                    <div className="chart">

                    </div>
                </div>
                <div className="user_space element">
                    <p>User space</p>
                    <div className="chart">

                    </div>
                </div>
                <div className="temperature element">
                    <p>Temperature</p>
                    <div className="chart">
                    </div>
                </div>
                <div className="history_production element">
                    <p>History production</p>
                    <div className="chart">

                    </div>
                </div>
            </div>
        </div>
    )
}
