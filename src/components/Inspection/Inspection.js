import { useState } from "react";
import React from 'react'

import Input from "./Input";
import Output from "./Output";

const Inspection = () => {

    const [selectedImages,setselectedImages]=useState([])
    const [toggle,setToggle] = useState(0)

    const handleUpload=(e)=>{
        console.log(e)
    }

    const handleBack=()=>{
        setselectedImages([])
        setToggle(0)
    }

    const handleSubmit=(event)=>{
        event.preventDefault()
        apicaller()
        setToggle(1)
    } 


    
    const [error,setError]=useState(null);
    const [pending,setPending]=useState(false);
    const [data,setData]= useState(false);        
        
    const controller=new AbortController();
    
    function apicaller(){

         
        const formData=new FormData()
        for(let i=0; i<selectedImages.length;i++){
            formData.append(selectedImages[i].index,selectedImages[i].file)
        }
        console.log(selectedImages)
        console.log(formData)

        setPending(true)
        fetch("/damageinspection",
        {signal:controller.signal,
            method:"POST",
            body:formData
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


    return ( 
        <div className="Inspection">
            <br></br>
            <h2>Damage Inspection</h2>
            {toggle==0 && <Input 
            selectedImages={selectedImages} 
            setselectedImages={setselectedImages}
            handleSubmit={handleSubmit}
            ></Input>}
            {toggle==1 && <Output 
            data={data}
            selectedImages={selectedImages} 
            handleBack={handleBack}
            ></Output>}
        </div>
     );
}
 
export default Inspection;