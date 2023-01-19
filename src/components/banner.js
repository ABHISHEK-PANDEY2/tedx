import banner from "../images/banner.svg";
import mouse from "../images/mouse.svg"
import x from "../images/x.svg"
// import useDimension from "./useDimension";
const Banner = () => {
    // const [width,setWidth] = useState(window.innerWidth);
    // // const [isClicked, setIsClicked] = useState(false);
    // const [font,setFont] = useState("1.7rem");

    // useEffect(()=>{
    //     const widthResize = function(){
    //         setWidth(window.innerWidth)
    //         if(window.innerWidth<700){
    //             setFont("1rem")
    //         }
    //         console.log(font);
    //         console.log(width);
    //     }
    
    //     window.onresize = widthResize;
    // },[width])

   const width = sessionStorage.getItem("width")
   const font = "1.4rem"

    
    const styles = {
        mouse:{
            position:"absolute",
            bottom:"12px",
            left:"50%",
            transform:"translate(-50%,-12px)"
        },
        wrapper : {
            position:"relative",
            height: "calc(100vh - 100px)",
            minHeight: "400px",
            width: "100%",
        },
        content:{
            width:"100%",
            height:"100%",
            position:"absolute",
            top:"45%",
            left:"50%",
            transform:"translate(-50%,-55%)",
            display: "flex",
            flexDirection: "column",
            gap:"20vh",
            alignItems : "center",
            justifyContent:"center"
        },
        banner:{
            boxSizing : "border-box",
            padding:"0px 5vw",
            position:"relative",
            height : "20vh",
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
            width:"80%",
            borderRadius : "4px",
            border : "solid white",
            fontFamily: "'Poppins', sans-serif",
            color: "white",
            display:"flex",
            alignItems:"center",
            fontSize:"2vw",
            fontWeight:"400"
        },
        register:{
            position:"relative",
            border:"none",
            outline:"none",
            width:"50%",
            height:"100%",
            color:"#F9363A",
            backgroundColor:"white",
            fontWeight : "600",
            fontFamily: "'Poppins', sans-serif",
        },
        text:{
            position:"absolute",
            width:"100%",
            left:"50%",
            top:"50%",
            display:"flex",
            justifyContent:"center",
            transform:"translate(-50%,-50%)",
            color:"#F9363A"
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
            height:"50vh",
            // width:"30vw",
            position :"absolute",
            top:"50%",
            left:"50%",
            transform:"translate(-50%,-50%)"
        },
        
    }
    return ( 
    <div style={{position:"relative",display:"flex",alignItems:"center"}}>
    <img style={styles.mouse} src={mouse} alt="" />
    <div style={styles.wrapper}>
        <div style={styles.content}>
        <div className="banner" style={styles.banner}>
            <img className="x" src={x} style={styles.x} alt="" />
            <span style={{fontSize : "4vw" ,color:"#ff898b", opacity:"0.7"}}>JSSATE, NOIDA</span>
            <span style={{fontSize : "4vw", color:"#F9363A", opacity:"0.7"}}>PRESENTS TEDX</span>
        </div>
        <div className="dates" style={styles.date}>
            <div style={styles.register}>
            <a href="/reg"><div className="text" style={styles.text}>Register Here</div></a>
                <div className="triangle" style={styles.triangle}></div>
            </div>
            <div  style={{margin:"auto"}}>19 March, 2023</div>
        </div>
    </div>
    </div>
    </div>
     );
}
 
export default Banner;