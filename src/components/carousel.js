import profile from "../images/profile.jpg"
import arrow from "../images/slider-arrow.svg"
import { useEffect, useState, useRef } from "react"
const Carousel = () => {

    const [width,setWidth] = useState(window.innerWidth);
    const [isClicked, setIsClicked] = useState(false);
    
    const widthResize = function(){
        setWidth(window.innerWidth)
    }

    window.onresize = widthResize;

    const styles = {
        carousel:{
            padding:`80px ${(width > 960) ? 170 : 100}px`,
        },
        p:{
            color:"#ffffff",
            fontFamily: "'Poppins',sans-serif",
            margin:"0",
            fontSize:"1.8rem",
            opacity:"0.7",
            lineHeight: "0"
        },
        speakers:{
            height:"30vmax",
            width:"100%",
            overflowX:"auto",
            display:"flex",
            padding:"30px 0"
        },
        speaker:{
            width:"calc((100% ))",
            padding:"0 40px 0 0"
        },
        photo:{
            width:"auto",
            height:"100%"
        },
        leftArrow: {
            position:"absolute",
            top:"50%",
            left:"-50px",
            transform:"translateY(-50%)",
            backgroundColor:"transparent",
            border:"none",
            cursor:'pointer'
        },
        rightArrow: {
            position:"absolute",
            top:"50%",
            right:"-50px",
            transform:"translateY(-50%) rotate(180deg)",
            backgroundColor:"transparent",
            border:"none",
            cursor:"pointer"
        }
    }

    const speakers = [
        {
            name:"Rahul Singh",
            photo:`${profile}`,
            designation:"CEO,Venus",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur animi reprehenderit quasi, deserunt neque ratione possimus id ullam voluptas quas quia quam adipisci labore nam sunt repellendus porro ipsam fuga!"
        },
        {
            name:"Vikram Shukla",
            photo:`${profile}`,
            designation:"Youtuber",
            description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur animi reprehenderit quasi, deserunt neque ratione possimus id ullam voluptas quas quia quam adipisci labore nam sunt repellendus porro ipsam fuga!"
        },
        {
            name:"Narendra Patil",
            photo:`${profile}`,
            designation:"IPS",
            description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur animi reprehenderit quasi, deserunt neque ratione possimus id ullam voluptas quas quia quam adipisci labore nam sunt repellendus porro ipsam fuga!"
        },
        {
            name:"Mahesh Singh",
            photo:`${profile}`,
            designation:"Motivational Speaker",
            description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur animi reprehenderit quasi, deserunt neque ratione possimus id ullam voluptas quas quia quam adipisci labore nam sunt repellendus porro ipsam fuga!"
        },
        {
            name:"Narayan Kumar",
            photo:`${profile}`,
            designation:"Crickter",
            description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur animi reprehenderit quasi, deserunt neque ratione possimus id ullam voluptas quas quia quam adipisci labore nam sunt repellendus porro ipsam fuga!"
        },
        {
            name:"Yash Kumar",
            photo:`${profile}`,
            designation:"Researcher",
            description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur animi reprehenderit quasi, deserunt neque ratione possimus id ullam voluptas quas quia quam adipisci labore nam sunt repellendus porro ipsam fuga!"
        },
    ]

    
    function left(){
        const scroll = document.querySelector(".speaker").offsetWidth
        const slider = document.getElementById("speakers")
        console.log(scroll);
        slider.scrollBy(-1*(scroll),0)
    }

    function right(){
        const scroll = document.querySelector(".speaker").offsetWidth
        const slider = document.getElementById("speakers")
        console.log(scroll);
        slider.scrollBy(scroll,0)
    }

    return ( 
    <>
        <div style={styles.carousel}>
            <span style={styles.p}>Our</span>
            <h1>Speakers</h1>
            <div style={{position:"relative"}}>
                <button style={styles.leftArrow} onClick={()=>left()}><img src={arrow}/></button>
                <button style={styles.rightArrow} onClick={()=>right()}><img src={arrow}/></button>
            
                <div style={styles.speakers} id="speakers">
                { speakers.map((speaker,i) => {
                    return (<div key={i} style={styles.speaker} className = "speaker">
                        <img src={speaker.photo} style={styles.photo} alt={speaker.name} />
                    </div>)
                }) }
                </div>
                </div>
        </div>
    </>
     );
}
 
export default Carousel;