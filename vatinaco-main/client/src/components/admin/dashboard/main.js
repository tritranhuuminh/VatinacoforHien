import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import axios from 'axios'


export default function Main() {
    const auth = useSelector(state => state.auth)

    return (
        <div className="main_db ">
            <div className="bg_m">
                <h4></h4>
                <img className="bg ctr" src="/test.svg" />

            </div>

        </div>
    )
}

