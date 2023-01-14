import profile from "../images/profile.jpg"
import arrow from "../images/slider-arrow.svg"
const Carousel = () => {
    const styles = {
        carousel:{
            padding:"80px 170px",
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
            width:"100%",
            overflowX:"auto",
            display:"flex",
            gap:"40px",
            padding:"30px 0"
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

    const slider = document.getElementById("speakers");
    const sliderWidth = slider.offsetWidth;
    function left(){
        slider.scrollBy(-170,0)
    }

    function right(){
        slider.scrollBy(170,0)
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
                    return (<div key={i}>
                        <img src={speaker.photo} alt={speaker.name} />
                    </div>)
                }) }
                </div>
                </div>
        </div>
    </>
     );
}
 
export default Carousel;