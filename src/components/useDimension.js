import { useEffect, useState } from "react";

const useDimension = () => {

    const [width,setWidth] = useState(window.innerWidth);
    const [height,setHeight] = useState(window.innerHeight)
    // const [isClicked, setIsClicked] = useState(false);
    
    useEffect(()=>{
        const widthResize = function(){
            setWidth(window.innerWidth)
            setHeight(window.innerHeight)
        }
    
        window.onresize = widthResize;  
    })
    return ({
        height:height,
        width:width
    });
}

export default useDimension