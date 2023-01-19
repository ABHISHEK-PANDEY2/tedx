import { useState, useEffect } from "react";
import logo from "../images/logo-white.png";
import menu from "../images/menu.svg";
import useDimension from "./useDimension";
const Navbar = () => {
  const width = useDimension().width;
  const [isClicked, setIsClicked] = useState(false);
  useEffect(() => {
    if (width > 1000) {
      setIsClicked(false);
    }
  }, [isClicked]);

  function toggle() {
    const expand = document.querySelector(".expand");
    if (isClicked) {
      expand.style.transform = "translateY(165px)";
    } else {
      expand.style.transform = "translateY(-200px)";
    }
  }

  const styles = {
    place: {
      height: "100px",
    },
    nav: {
      position: `${width < 1000 ? "fixed" : "relative"}`,
      zIndex: "1000",
      top: "0",
      width: "100%",
      boxSizing: "border-box",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "20px 50px 20px 50px",
      backgroundColor: `${width < 1000 ? "#090414" : "#0e061d"}`,
    },
    logo: {
      // height:"60px",
      width: "20vw",
      minWidth: "150px",
    },
    links: {
      display: "flex",
      gap: "5vw",
      fontFamily: "'Poppins', sans-serif",
      listStyleType: "none",
      color: "white",
      fontSize: "1.1rem",
    },
    linkItem: {
      cursor: "pointer",
    },
    a: {
      textDecoration: "none",
      color: "white",
    },
    expandNav: {
      position: "absolute",
      display: `${width > 1000 ? "none" : "block"}`,
      width: "100%",
      left: "0%",
      bottom: "0%",
      zIndex: "100",
      backgroundColor: `${width < 1000 ? "#090414" : "#0e061d"}`,
      transform: "translateY(-200px)",
      transition: "all 1s",
    },
    expand: {
      margin: "0",
      padding: "10px 0 10px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "10px",
      fontFamily: "'Poppins', sans-serif",
      listStyleType: "none",
      color: "white",
      fontSize: "1.1rem",
    },
  };

  const links = [
    {
      item: "Regestration",
      link: "/reg",
    },
    {
      item: "Speakers",
      link: "#speakers",
    },
    {
      item: "Schedule",
      link: "#schedule",
    },
    {
      item: "Team",
      link: "/team",
    },
    {
      item: "About",
      link: "#about",
    },
  ];

  return (
    <>
      {width < 1000 ? <div style={styles.place}></div> : null}
      <div
        style={{
          position: `${width < 1000 ? "fixed" : "relative"}`,
          zIndex: "100000",
          width: "100%",
        }}
      >
        <nav style={styles.nav}>
          <a href="/">
            <img src={logo} style={styles.logo} alt="" />
          </a>
          {width > 1000 ? (
            <ul className="links" style={styles.links}>
              {links.map((link, i) => (
                <li style={styles.linkItem} key={i}>
                  <a className="nav-link" style={styles.a} href={link.link}>
                    {link.item}
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <>
              <img
                src={menu}
                onClick={() => {
                  setIsClicked(!isClicked);
                  toggle();
                }}
              />
            </>
          )}
        </nav>
        <div style={styles.expandNav} className="expand">
          <ul style={styles.expand}>
            {links.map((link, i) => {
              return (
                <li className="nav-link" key={i}>
                  <a style={styles.a} href={link.link}>
                    {" "}
                    {link.item}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
