// src/components/line.rechart.js

import React from "react";
import { LineChart, Line, YAxis, XAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

class List extends React.Component {

    data = [
        {
            "name": "Jan 2019",
            "Product A": 3432,
            "Product B": 2342,
            "Product C": 2500,
        },
        {
            "name": "Feb 2019",
            "Product A": 2342,
            "Product B": 3246,
            "Product C": 3700,
        },
        {
            "name": "Mar 2019",
            "Product A": 4565,
            "Product B": 4556,
            "Product C": 4800,
        },
        {
            "name": "Apr 2019",
            "Product A": 6654,
            "Product B": 4465,
            "Product C": 5000,
        },
        {
            "name": "May 2019",
            "Product A": 8765,
            "Product B": 4553,
            "Product C": 5500,
        },
        {
          "name": "June 2019",
          "Product A":10765,
          "Product B": 6553,
          "Product C": 7500,
      },
      {
        "name": "July 2019",
        "Product A": 12765,
        "Product B": 7000,
        "Product C": 8500,
    }
    ]

    render() {
        return (
            <LineChart width={1330} height={250} data={this.data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Product A" stroke="#0095FF" />
                <Line type="monotone" dataKey="Product B" stroke="#FF0000" />
                <Line type="monotone" dataKey="Product C" stroke="#00FF00" />
            </LineChart>
        )
    };
}

export default List;