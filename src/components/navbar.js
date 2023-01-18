import { useState, useEffect } from "react";
import logo from "../images/logo-white.png";
import menu from "../images/menu.svg";
import useDimension from "./useDimension";
const Navbar = () => {
    const width = useDimension().width
    sessionStorage.setItem("width",`${width}`)
    

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
        },
        a:{
            textDecoration:'none',
            color:'white'
          }
    }

    const links = [
        {
            item : "Regestration",
            link:"/reg"
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
    
    

    return ( 
        <>
            <nav style={styles.nav}>
                <a href="/"><img src={logo} style={styles.logo} alt="" /></a>
                {
                    (width > 1000 )?(
                    <ul className="links" style={styles.links}>
                        {
                            links.map((link,i) => <li style={styles.linkItem} key={i}><a className="nav-link" style={styles.a} href={link.link}>{link.item}</a></li>)
                        }
                    </ul>
                    ):(
                        <img src={menu}  />
                    )
                }
            </nav>
        </> 
        );
}
 
export default Navbar;