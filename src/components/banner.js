import banner from "../images/banner.jpg";
import mouse from "../images/mouse.svg";
import { useEffect } from "react";
const Banner = () => {
  const styles = {
    wrapper: {
      height: "calc(100vh - 160px)",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      alignItems: "center",
    },
    banner: {
      height: "165px",
      width: "100%",
    },
    date: {
      maxWidth: "770px",
      minWidth: "600px",
      height: "60px",
      width: "45%",
      borderRadius: "4px",
      border: "solid white",
      fontFamily: "'Poppins', sans-serif",
      color: "white",
      display: "flex",
      alignItems: "center",
      fontSize: "1.7rem",
      fontWeight: "400",
    },
    register: {
      position: "relative",
      width: "40%",
      height: "100%",
      color: "#F9363A",
      backgroundColor: "white",
      fontSize: "1.7rem",
      fontWeight: "600",
      fontFamily: "'Poppins', sans-serif",
    },
    text: {
      position: "absolute",
      width: "100%",
      left: "60%",
      top: "50%",
      transform: "translate(-50%,-50%)",
    },
    triangle: {
      position: "absolute",
      right: "0%",
      top: "50%",
      transform: "translate(0%,-50%)",
      width: "0",
      height: "0",
      borderBottom: "30px solid transparent",
      borderTop: "30px solid transparent",
      borderRight: "30px solid #0e061d",
    },
  };
  return (
    <div style={styles.wrapper}>
      <img src={banner} style={styles.banner} alt="" />
      <div style={styles.date}>
        <div style={styles.register}>
          <span style={styles.text}>Register Here</span>
          <div style={styles.triangle}></div>
        </div>
        <span style={{ margin: "auto" }}>19 March, 2023</span>
      </div>
      <img src={mouse} alt="" />
    </div>
  );
};

export default Banner;
