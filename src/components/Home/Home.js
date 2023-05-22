import { useEffect, useState } from "react";
import React from 'react'
import Design from "./Home.module.css"
import {Link} from "react-router-dom"

function Home(){
        

return (
    <div className="Home">
        <br></br>
        <a href="http://localhost:3000/inspection">
        <div className={Design.para1}>
            <h1>Damage Inspection</h1>
            <br></br>
            <p1>
            Damage inspection after a disaster involves assessing the extent and severity of structural and property damage caused by the event. Trained professionals evaluate the affected areas, identifying structural weaknesses, safety hazards, and the overall condition of buildings and infrastructure. They document the damage, capturing photographs and collecting relevant data to support insurance claims and recovery efforts. The inspection helps prioritize restoration and repair activities, ensuring the safety of residents and facilitating the allocation of resources. The assessment is crucial in estimating the financial and logistical requirements for recovery and aids in determining if structures are safe for occupancy or require demolition.
            </p1>
        </div>
        </a>
         <a href="http://localhost:3000/sentiment">
            <div className= {Design.para2}>
            
            <h1>Land Analysis</h1>
            <br></br>
            <p>Land analysis by a machine learning model involves the application of advanced algorithms to analyze and interpret various data sources related to land characteristics. The model utilizes machine learning techniques to identify patterns, trends, and relationships within the data, providing valuable insights for land management and decision-making.
              The model typically takes into account multiple variables, such as satellite imagery, topographic data, soil composition, land use records, and other relevant geospatial information. By analyzing these inputs, the model can perform tasks such as land cover classification, land suitability assessment, vegetation monitoring, and change detection.
             For example, the model can classify land cover types, distinguishing between forests, agricultural fields, urban areas, and water bodies. It can also assess land suitability for specific purposes, such as determining suitable locations for agriculture, urban development, or conservation efforts. The model can provide information on vegetation health and detect changes in land cover over time, facilitating monitoring of deforestation, urban expansion, or natural disasters.
             Machine learning models excel at handling large volumes of data and can process complex relationships between variables. They can make accurate predictions and support evidence-based decision-making in land management, urban planning, environmental conservation, and disaster response. However, it's important to ensure the model is trained on high-quality data and regularly validated to maintain reliability and accuracy.</p>
       
         </div>
        </a>
        <a href="http://localhost:3000/sentiment">
        <div className={Design.para3}>
            <h1>Sentiment Analysis</h1>
            <br></br>
            <p>
            Sentiment analysis using machine learning models involves the use of algorithms to analyze text data and determine the sentiment or emotional tone expressed within the text. The model is trained on labeled data, where text samples are assigned sentiment labels such as positive, negative, or neutral. By learning patterns and linguistic cues from the labeled data, the model can then predict the sentiment of new, unlabeled text. Sentiment analysis helps businesses understand customer opinions, public sentiment on social media, and feedback from reviews or surveys. It enables companies to gain insights, make data-driven decisions, and tailor their strategies accordingly.
            </p>
        </div>
        </a>
    </div>
)
};

export default Home;