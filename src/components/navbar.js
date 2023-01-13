import { useState, useEffect } from "react";
import logo from "../images/logo-white.png";
import menu from "../images/menu.svg";
const Navbar = () => {

    const styles = {
        nav : {
            display:"flex",
            justifyContent:"space-between",
            alignItems:"center",
            padding: "40px 50px 60px 50px"
        },
        logo : {
            height:"60px",
            width:"260px"
        },
        links : {
            display : "flex",
            gap : "5vw",
            fontFamily: "'Poppins', sans-serif",
            listStyleType:"none",
            color:"white",
            fontSize:"1.1rem"
        },
        linkItem: {
            cursor:"pointer"
        }
    }

    const links = [
        {
            item : "Regestration",
            link:""
        },
        {
            item : "Speakers",
            link:""
        },
        {
            item : "Schedule",
            link:""
        },
        {
            item : "Team",
            link:""
        },
        {
            item : "About",
            link:""
        }
    ]
    
    const [width,setWidth] = useState(window.innerWidth);
    const [isClicked, setIsClicked] = useState(false);
    
    const widthResize = function(){
        setWidth(window.innerWidth)
    }

    window.onresize = widthResize;

    return ( 
    <>
        <nav style={styles.nav}>
            <img src={logo} style={styles.logo} alt="" />
            {
                (width > 1000 )?(
                <ul className="links" style={styles.links}>
                    {
                        links.map((link,i) => <li style={styles.linkItem} key={i}>{link.item}</li>)
                    }
                </ul>
                ):(
                    <img src={menu}  onClick={()=>{setIsClicked(true)}}/>
                )
            }
        </nav>
    </> 
    );
}
 
export default Navbar;