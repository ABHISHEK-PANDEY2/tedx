import banner from "../images/banner.jpg";
import mouse from "../images/mouse.svg"
import x from "../images/x.svg"
import { useEffect, useState } from "react";
const Banner = () => {
    const [width,setWidth] = useState(window.innerWidth);
    const [isClicked, setIsClicked] = useState(false);
    
    const widthResize = function(){
        setWidth(window.innerWidth)
    }

    window.onresize = widthResize;
    const styles = {
        wrapper : {
            height: "calc(100vh - 160px)",
            minHeight: "600px",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent : "space-around",
            alignItems : "center"
        },
        banner:{
            boxSizing : "border-box",
            padding:"0px 50px",
            position:"relative",
            height : "20vmin",
            width : "100%",
            background:`url(${banner})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            display:"flex",
            justifyContent:"space-between",
            alignItems:"center",
            fontFamily: "'Poppins', sans-serif",
            fontWeight:"800"
        },
        date:{
            maxWidth : "770px",
            minWidth : "300px",
            height: "60px",
            width:"45%",
            borderRadius : "4px",
            border : "solid white",
            fontFamily: "'Poppins', sans-serif",
            color: "white",
            display:"flex",
            alignItems:"center",
            fontSize:"1.7rem",
            fontWeight:"400"
        },
        register:{
            position:"relative",
            border:"none",
            outline:"none",
            width:"40%",
            height:"100%",
            color:"#F9363A",
            backgroundColor:"white",
            fontSize:"1.7rem",
            fontWeight : "600",
            fontFamily: "'Poppins', sans-serif",
        },
        text:{
            position:"absolute",
            width:"100%",
            left:"60%",
            top:"50%",
            transform:"translate(-50%,-50%)"
        },
        triangle:{
            position:"absolute",
            right:"0%",
            top:"50%",
            transform:"translate(0%,-50%)",
            width: "0", 
            height: "0",
            borderBottom: "30px solid transparent",
            borderTop: "30px solid transparent",
            borderRight: "30px solid #0e061d",
            outlineRight:"1px solid #0e061d"
        },
        x:{
            height:"55vmin",
            width:"30vmax",
            position :"absolute",
            top:"50%",
            left:"50%",
            transform:"translate(-50%,-50%)"
        }
    }
    return ( 
    <div style={styles.wrapper}>
        <div style={styles.banner}>
            <img src={x} style={styles.x} alt="" />
            <span style={{fontSize : "4vmax" ,color:"#ff898b", opacity:"0.7"}}>JSSATE, NOIDA</span>
            <span style={{fontSize : "4vmax", color:"#F9363A", opacity:"0.7"}}>PRESENTS TEDX</span>
        </div>
        <div style={styles.date}>
            <div style={styles.register}>
                <span style={styles.text}>Register Here</span>
                <div style={styles.triangle}></div>
            </div>
            <span style={{margin:"auto"}}>19 March, 2023</span>
        </div>
        <img src={mouse} alt="" />
    </div>
     );
}
 
export default Banner;