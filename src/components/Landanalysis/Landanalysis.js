import { useEffect, useState } from "react";
import { MapContainer } from "./MapContainer";
import Output from "./Output";
import React from 'react'
import LandA from "./Landanalysis.module.css"

const Landanalysis = () => {

    const [inputtype,setInputtype]=useState("Map")
    const [toggle,setToggle]=useState(0)


    const [longitude,setLongitude]=useState(0)
    const [latitude,setLatitude]=useState(0)
    const [submit,setSubmit]=useState(false)
    const [latitudemain,setLatitudemain]=useState(0)
    const [longitudemain,setLongitudemain]=useState(0)
    const [date1,setdate1]=useState("2018-07-02")    
    const [date2,setdate2]=useState("2018-07-02")
    const [area,setarea]=useState(5)

    function submitinput(e){
        e.preventDefault();
        setSubmit(true);
        setLatitudemain(latitude);
        setLongitudemain(longitude);
        apicaller();
        setToggle(1)
        
    }

    const handleBack=()=>{
        setToggle(0)
    }

    const [error,setError]=useState(null);
    const [pending,setPending]=useState(false);
    const [data,setData]= useState(false);
    
        
        
    const controller=new AbortController();
    function apicaller(){
        var body_data=JSON.stringify({"date1":date1,"date2": date2,"lat":latitude,"long":longitude})
        console.log(body_data)
        setPending(true)
        fetch("/landanalysis",
        {signal:controller.signal,
            method:"POST",
            headers:{
                "Accept":"application/json",
                "Content-type":"application/json"
            },
            body:body_data
        })
            .then(response => {
                if(!response.ok){
                    throw Error("Could not get data")
                }
            return response.json()
            })
            .then(json => {
            setData(json.response)
            setPending(false)
            setError(null)
            console.log(json)
            })
            .catch((err)=>{
                if(err.name==="AbortError"){
                    console.log("fetch aborted")
                }
                else{
                    setError(err.message)
                    setPending(false)
                }
            }
            )
     }

    useEffect(()=>{
        console.log(latitude,longitude)
    },[latitude,longitude])

    return ( 
        <div className="Landanalysis">
            <br></br>
            <h1>Land Analysis</h1>
            <div className="Landanalysis-body">
                <br></br>
            {toggle==0 && <div className="Landanalysis-input">
            <div className={LandA.dt1}>
                <p>Start Date: </p>
                <input required="true" type="date" onChange={(e)=>{setdate1(e.target.value)}} value={date1}/>
            </div>
            <div className={LandA.dt2}>
                <p>End Date: </p>
                <input required="true" type="date" onChange={(e)=>{setdate2(e.target.value)}} value={date2}/>
            </div>
                
                
                    <br></br>
                    <br></br>
                <div className={LandA.cord}>
                    Cordinates
                </div>
                <br></br>
                <div className={LandA.cordi}>
                    <div className={LandA.longitude}>
                   <input id= "input1" required="true" type="number" name="longitude" className="longitude" placeholder="Longitude" 
                    onChange={(e)=>{setLongitude(e.target.value)}} value={longitude}/>
                    </div>
                    <div className={LandA.latitude}>
                    <input id = "input2" required="true" type="number"  name="latitude" className="latitude" placeholder="Latitude"
                    onChange={(e)=>{setLatitude(e.target.value)}} value={latitude}/>
                    </div>
                    <div className={LandA.btn}>
                    <input id = "input3" claasName = "submit"onClick={(e)=>submitinput(e)} type="submit"/>
                    </div>
                </div>
                <div>
                    <MapContainer latitude={latitude} longitude={longitude} setLatitude={setLatitude} setLongitude={setLongitude}></MapContainer>
                </div>
                </div>}
                {toggle==1 && <div className="Landanalysis-output">
                    <Output data={data} handleBack={handleBack}></Output>
                </div>}
            </div>
        </div>
     );
}
 
export default Landanalysis;