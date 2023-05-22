
import React, { useState } from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';
  
  
const Piechart = (props) => {
  
// Sample data
console.log(props)
const data=[
  {name:"urbun",value:props.mean[0],color:"rgb(97,249,97)"},
  {name:"agriculture",value:props.mean[1],color:"white"},
  {name:"rangeland",value:props.mean[2],color:"red"},
  {name:"forest",value:props.mean[3],color:"green"},
  {name:"water",value:props.mean[4],color:"blue"},
  {name:"barrenland",value:props.mean[5],color:"yellow"},
  {name:"others",value:props.mean[6],color:"red"}
]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042','#ff00ff','#ffffff','#000000'];

  
console.log(data)
  
return (
        <PieChart width={800} height={200}>

<Pie data={data}
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
                        {Math.round(data[index].value*100)/100}
                      </text>
                    );
                  }}
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Legend />
                <Tooltip />
              </PieChart>
            );
          };
  
export default Piechart;


{/* <Pie data={piedata[0].data} dataKey="value" outerRadius={250} fill="green" /> */}

