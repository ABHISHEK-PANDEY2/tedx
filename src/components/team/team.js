import style from "./style.module.css"
import Navbar from "../navbar";
import profile from "../../images/profile.jpg"
import lalit from "../../images/lalit.jpeg"
import aayush from "../../images/aayush.jpg"
import vivek from "../../images/vivek.jpg"
import yogita from "../../images/yogita.jpeg"
const Team = () => {
    const team = [
        {
            name:"Anant Mishra",
            post:"Organizing Head",
            profile:profile
        },
        {
            name:"Vivek Singh",
            post:"Designer",
            profile:vivek
        },
        {
            name:"Yogita Singh",
            post:"Designer",
            profile:yogita
        },
        {
            name:"Abhishek Pandey",
            post:"Developer",
            profile:profile
        },
        {
            name:"Aayush Aryan",
            post:"Developer",
            profile:aayush
        },
        {
            name:"Dhruv",
            post:"Developer",
            profile:profile
        },
        {
            name:"Lalit",
            post:"Developer",
            profile:lalit
        }
    ]
    return ( 
        <>
        <Navbar/>
        <div style={{margin:"40px 0"}} className="wrapper-container" >
            <div className="heading" style={{paddingTop : "10px"}}>
                <p>Our</p>
                <h1>Team</h1>
            </div>
            <div className={style.hod} >
                <div className={style.member}>
                    <div className={style.details}>
                    <p style={{fontWeight:"600"}}>Mayank Singh</p>
                    <p><i>HOD,CSE</i></p>
                    </div>
                    <img className={style.profile} src={profile} alt="" />
                </div>
            </div>
            <div className={style.gridContainer}>

                {
                    team.map((item,i) => {
                        return(
                            <div className={style.member} key={i}>
                             <div className={style.details}>
                                <p style={{fontWeight:"600"}}>{item.name}</p>
                                <p><i>{item.post}</i></p>
                             </div>
                             <img className={style.profile} src={item.profile} alt="" />
                            </div>
                        )
                    })
                
                }
            </div>
        </div>
        </>
     );
}
 
export default Team;