
import React, { useState } from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';
  
  
const Piechart = ({data}) => {
  
// Sample data
console.log(data)
const piedata=[
  {name:"pos",value:data.pos,color:"rgb(97,249,97)"},
  {name:"nut",value:data.nut,color:"white"},
  {name:"neg",value:data.neg,color:"red"}
]

const COLORS = ["#0B98BA",'#FFFFFF',"#FF0000"];
  
  
return (
        <PieChart width={800} height={200}>

<Pie data={piedata}
                  outerRadius={80}
                  innerRadius={30}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  fill="#8884d8"
                  label={({ cx, cy, midAngle, innerRadius, outerRadius, value, index }) => {
                    const RADIAN = Math.PI / 180;
                    const radius = 25 + innerRadius + (outerRadius - innerRadius);
                    const x = cx + radius * Math.cos(-midAngle * RADIAN);
                    const y = cy + radius * Math.sin(-midAngle * RADIAN);
          
                    return (
                      <text
                        x={x}
                        y={y}
                        fill={COLORS[index % COLORS.length]}
                        textAnchor={x > cx ? 'start' : 'end'}
                        dominantBaseline="central"
                      >
                        {Math.round(piedata[index].value*100)/100}
                      </text>
                    );
                  }}
                >
                  {piedata.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Legend />
                <Tooltip />
              </PieChart>
);
}
  
export default Piechart;


{/* <Pie data={piedata[0].data} dataKey="value" outerRadius={250} fill="green" /> */}

