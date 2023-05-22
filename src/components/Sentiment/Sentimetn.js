import { useState } from "react";
import Piechart from "./Piechart";
import React from 'react'
import senti from "./Sentimetn.module.css"

const Sentiment = () => {
    const maxNoOfTweets=500
    const minNoOfTweets=10

    const [keyword,setKeyword]=useState("")
    const [noOfTweets,setNoOfTweets]=useState(100)
    const [error,setError]=useState(null);
    const [pending,setPending]=useState(false);
    const [data,setData]= useState(false);
    
        
        
    const controller=new AbortController();
    function apicaller(){
        setPending(true)
        fetch("/sentimentanalysis",
        {signal:controller.signal,
            method:"POST",
            headers:{
                "Accept":"application/json",
                "Content-type":"application/json"
            },
            body:JSON.stringify({"keyword":keyword,"numoftweets":noOfTweets})
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

     function analyse(e){
        e.preventDefault()
        apicaller()
     }


    return ( 
        <div>
            <div className={senti.head}>
                <h2>Sentiment Analysis</h2>
                <br></br>
            </div>
            <div>
                <div className={senti.search}>
                    <input disabled={pending} id ="mySearch" type="text" placeholder="  Search here" value={keyword} onChange={(e)=>setKeyword(e.target.value)}/>
                    <div className={senti.clear}>
                        <span onClick={() => { document.getElementById("mySearch").value = null; }}></span>
                    </div>
                </div>
                
                <br></br>
                <div className={senti.range}>
                    <p>Current val: {noOfTweets}</p>
                    <div className={senti.mod}>
                    <p1>{minNoOfTweets}</p1>
                    <input disabled={pending} type="range" max={maxNoOfTweets} min={minNoOfTweets}  value={noOfTweets} onChange={(e)=>setNoOfTweets(e.target.value)}/>
                    <p2> {maxNoOfTweets}</p2>
                    </div>
                </div>
                <br></br>
                <br></br>
                <div className={senti.btn}>
                    <button disabled={pending} onClick={(e)=>analyse(e)}>
                        Analyse
                    </button>
                   
                </div>
                <br></br>
            </div>
            {(pending===false && data!=false) && <div>
                <div className={senti.vote}>
                <div className={senti.pos}>
                    <p>Posetive:{data.pos}</p>
                </div>
                <div className={senti.neu}>
                    <p>Neutral:{data.nut}</p>
                </div>
                <div className={senti.neg}>
                    <p>Negetive:{data.neg}</p>
                </div>
                </div>
                <div>
                    <Piechart data={data}></Piechart>
                </div>
            </div>}
        </div>
     );
}
 
export default Sentiment;