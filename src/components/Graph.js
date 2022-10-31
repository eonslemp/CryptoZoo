import React from 'react'
import '../App.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


const Graph = (props) => {

    const graphData  = props.data
    console.log(graphData)
    console.log(props)

  return (
    <div className='graph'>
        <LineChart
          width={500}
          height={300}
          data={graphData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Date" stroke="white" tick={{ fill: 'white' }} tickLine={{ stroke: 'white' }}/>
          <YAxis stroke="white" tick={{ fill: 'white' }} tickLine={{ stroke: 'white' }} />
          <Tooltip stroke='black'/>
          <Legend />
          <Line type="monotone" dataKey="Price" stroke="#f4f4ea" />
        </LineChart>
    </div>
  )
}

export default Graph