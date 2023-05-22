import React, { useEffect, useRef, useState } from "react";
import Ins from "./Inspection.module.css"
import {RxCross2} from "react-icons/rx"

const Input = (props) => {



    const onSelectFile = (event) => {
        let onselectfile = event.target.files
        const onselectfileArray = Array.from(onselectfile)
        let lastval = 0
        if (props.selectedImages.length > 0) {
            console.log(props.selectedImages)
            lastval = props.selectedImages[props.selectedImages.length - 1].index
            lastval = lastval.replace("image[", "")
            lastval = parseInt(lastval.replace("]", "")) + 1

        }
        const imageArray = onselectfileArray.map((file, i) => {
            return { url: URL.createObjectURL(file), file: file, index: `image[${i + lastval}]` }
        })
        props.setselectedImages((previousImages) => previousImages.concat(imageArray))
    }

    const ImageInput = useRef(null)
    const handleRefresh = () => {
        ImageInput.current.value = null
        ImageInput.current.focus()
    }
    return (
        <div>
            <br></br>
            <div className={Ins.all}>            
            <p1>Add Images</p1>
            <span>
                <p2>Add upto 10 photos</p2>
            </span>
            </div>

            <div className={Ins.Ubtn}>

                <input ref={ImageInput} hidden  id="fileInput" type="file" name="images" multiple onChange={onSelectFile} accept="image" />
                <label for="fileInput" className="label-file-input" >Choose Files</label>
                <span>{props.selectedImages.length} file choosen</span>
                <button onClick={props.handleSubmit}>Upload {props.selectedImages.length} Photos</button>
            </div>
            <div className={Ins.imageContainer}>
                {props.selectedImages && props.selectedImages.map((element, index) => {
                    return (
                        <div className ={Ins.ph}key={element.index}>
                            <img src={element.url} height={100} />
                            <button onClick={() => {
                                handleRefresh()
                                props.setselectedImages(props.selectedImages.filter((e) => e != element))
                            }}><RxCross2/></button>
                        </div>)
                })}
            </div>
        </div>
    );
}

export default Input;

