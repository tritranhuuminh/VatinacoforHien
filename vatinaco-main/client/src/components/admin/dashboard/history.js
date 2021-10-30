import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import axios from 'axios'


export default function History() {
    const auth = useSelector(state => state.auth)

    return (
        <div className="datasheet it">
            <p>History</p>
            <table>
                <thead>
                    <div>
                    <tr>
                        <th className="id">ID</th>
                        <th className="data_time">Time</th>
                        <th className="data_quantity">Quantity</th>
                        <th className="data_performance">Performance</th>
                        <th className="data_code">Code</th>
                    </tr>
                    </div>
                </thead>
                <tbody>
                    <div>
                    <tr className="tr1">
                        <td className="id">1</td>
                        <td className="data_time">2020-05-06 12:50:01</td>
                        <td className="data_quantity">2000</td>
                        <td className="data_performance">Good</td>
                        <td className="data_code">12341235213</td>
                    </tr>
                    <tr className="tr2">
                        <td className="id">2</td>
                        <td className="data_time">2020-05-06 12:50:01</td>
                        <td className="data_quantity">3000</td>
                        <td className="data_performance">Good</td>
                        <td className="data_code">12341235214</td>
                    </tr>
                    <tr className="tr1">
                        <td className="id">3</td>
                        <td className="data_time">2020-05-06 12:50:01</td>
                        <td className="data_quantity">2500</td>
                        <td className="data_performance">Good</td>
                        <td className="data_code">12341235215</td>
                    </tr>
                    <tr className="tr2">
                        <td className="id">4</td>
                        <td className="data_time">2020-05-06 12:50:01</td>
                        <td className="data_quantity">3000</td>
                        <td className="data_performance">Good</td>
                        <td className="data_code">12341235216</td>
                    </tr>
                    <tr className="tr1">
                        <td className="id">5</td>
                        <td className="data_time">2020-05-06 12:50:01</td>
                        <td className="data_quantity">3000</td>
                        <td className="data_performance">Good</td>
                        <td className="data_code">12341235216</td>
                    </tr>
                    <tr className="tr2">
                        <td className="id">6</td>
                        <td className="data_time">2020-05-06 12:50:01</td>
                        <td className="data_quantity">3000</td>
                        <td className="data_performance">Good</td>
                        <td className="data_code">12341235216</td>
                    </tr>
                    </div>
                </tbody>
            </table>
        </div>
    )
}

