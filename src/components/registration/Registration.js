import React, { useEffect, useState } from "react";
import regStyle from "./style.module.css";
import CheckIcon from "@mui/icons-material/Check";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import WarningRoundedIcon from "@mui/icons-material/WarningRounded";
import { useNavigate } from "react-router-dom";
import Navbar from "../navbar";

const Registration = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [college, setCollege] = useState("");
  const [sem, setSem] = useState("");
  const [semError, setSemError] = useState("white");
  const [nameError, setNameError] = useState("white");
  const [numberError, setNumberError] = useState("white");
  const [emailError, setEmailError] = useState("white");
  const [collegeError, setCollegeError] = useState("white");
  const [foc, setFoc] = useState(0);
  const [fullWidth, setFullWidth] = useState(false);
  const [errorText, setErrorText] = useState(null);

  const moveDown = () => {
    if (foc < 4) {
      setFoc((f) => f + 1);
    }
  };
  const moveUp = () => {
    if (foc > 0) {
      setFoc((f) => f - 1);
    }
  };

  const error = (err, mess) => {
    if (err === "name") {
      setNameError("red");
      setErrorText(mess);
    }
    if (err === "number") {
      setNumberError("red");
      setErrorText(mess);
    }
    if (err === "email") {
      setEmailError("red");
      setErrorText(mess);
    }
    if (err === "college") {
      setCollegeError("red");
      setErrorText(mess);
    }
    if (err === "sem") {
      setSemError("red");
      setErrorText(mess);
    }
  };

  const handleOK = (e, val) => {
    if (e === "name") {
      if (name?.trim() || val?.trim()) {
        moveDown();
      } else {
        error("name", "Please fill in");
      }
    } else if (e === "number") {
      if (number?.trim() || val?.trim()) {
        if (
          number?.match(/\d/g)?.length === number?.length ||
          val?.match(/\d/g)?.length === val?.length
        ) {
          if (number?.length === 10 || val?.length === 10) {
            moveDown();
          } else {
            error("number", "Please enter 10 digit number");
          }
        } else {
          error("number", "Please fill correct format");
        }
      } else {
        error("number", "Please fill in");
      }
    } else if (e === "email") {
      if (email?.trim() || val?.trim()) {
        if (
          email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) ||
          val.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
        ) {
          moveDown();
        } else {
          error("email", "Please fill correct format");
        }
      } else {
        error("email", "Please fill in");
      }
    } else if (e === "college") {
      if (college?.trim() || val?.trim()) {
        moveDown();
      } else {
        error("college", "Please fill in");
      }
    } else if (e === "sem") {
      if (sem?.trim() || val?.trim()) {
        if (val?.trim()) {
          alert("Click on submit button.");
        } else if (name && sem && number && email && college) {
          console.log("Submitting and redirecting to home page.");
          setTimeout(() => {
            navigate("/");
          }, 1000);
        } else {
          alert("please fill all input fields.");
        }
      } else {
        error("college", "Please fill in");
      }
    } else {
      console.log("done");
    }
  };

  useEffect(() => {
    document.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        console.log(e.target.value);
        handleOK(e.target.name.toString(), e.target.value);
      }
    });
    window.addEventListener('resize', (e) => {
      if(e.currentTarget.innerWidth < 480){                
       setFullWidth(false);
      }else if(e.currentTarget.innerWidth >= 480){               
        setFullWidth(true);
      }
         });
  }, []);

  useEffect(() => {
    console.log(foc);
    var inputBoxs = document.querySelectorAll("input");
    var spanBoxs = document.querySelectorAll("section");
    if(fullWidth){
      inputBoxs[foc].focus();
    }else{
      spanBoxs[foc].scrollIntoView();
    }
  }, [foc]);

  return (
    <>
      <div className={regStyle.nav}>
        <Navbar />
      </div>
      <div className={regStyle.registration}>
        <div className={regStyle.slider} id="reg">
          <section id="1">
            <div className={regStyle.que}>
              <p className={regStyle.p}>
                <span>
                  1
                  <ArrowForwardRoundedIcon
                    style={{
                      width: "15px",
                      height: "15px",
                      margin: "0 0.6rem 0 0.3rem",
                      fontWeight: "bold",
                    }}
                  />
                </span>
                Before we start, can we get your full name? *
              </p>
              <div>
                <input
                  autoFocus
                  value={name}
                  name="name"
                  type="text"
                  placeholder="Type your name here..."
                  required
                  autoComplete="off"
                  onBlur={() => setNameError("white")}
                  onChange={(e) => {
                    if (nameError === "red") {
                      setNameError("white");
                    }
                    setName(e.target.value);
                  }}
                  style={{
                    borderBottom: `1.5px solid ${nameError}`,
                    boxSizing: "border-box",
                  }}
                />
                {nameError === "red" ? (
                  <p className={regStyle.errorMessage}>
                    <WarningRoundedIcon />
                    {errorText}
                  </p>
                ) : (
                  <button onClick={() => handleOK("name")}>
                    OK
                    <CheckIcon />
                  </button>
                )}
              </div>
            </div>
          </section>
          <section id="2">
            <div className={regStyle.que}>
              <p className={regStyle.p}>
                <span>
                  2
                  <ArrowForwardRoundedIcon
                    style={{
                      width: "15px",
                      height: "15px",
                      margin: "0 0.6rem 0 0.3rem",
                      fontWeight: "bold",
                    }}
                  />
                </span>
                And what's your Phone number? *
              </p>
              <div>
                <input
                  value={number}
                  name="number"
                  type="text"
                  placeholder="6393417511"
                  required
                  autoComplete="off"
                  onBlur={() => setNameError("white")}
                  onChange={(e) => {
                    if (numberError === "red") {
                      setNumberError("white");
                    }
                    setNumber(e.target.value);
                  }}
                  style={{
                    borderBottom: `1px solid ${numberError}`,
                    boxSizing: "border-box",
                  }}
                />
                {numberError === "red" ? (
                  <p className={regStyle.errorMessage}>
                    <WarningRoundedIcon />
                    {errorText}
                  </p>
                ) : (
                  <button onClick={() => handleOK("number")}>
                    OK
                    <CheckIcon />
                  </button>
                )}
              </div>
            </div>
          </section>
          <section id="3">
            <div className={regStyle.que}>
              <p className={regStyle.p}>
                <span>
                  3
                  <ArrowForwardRoundedIcon
                    style={{
                      width: "15px",
                      height: "15px",
                      margin: "0 0.6rem 0 0.3rem",
                      fontWeight: "bold",
                    }}
                  />
                </span>
                And what's your E-mail id? *
              </p>
              <div>
                <input
                  value={email}
                  name="email"
                  type="email"
                  placeholder="name@example.com"
                  required
                  autoComplete="off"
                  onBlur={() => setNameError("white")}
                  onChange={(e) => {
                    if (emailError === "red") {
                      setEmailError("white");
                    }
                    setEmail(e.target.value);
                  }}
                  style={{
                    borderBottom: `1px solid ${emailError}`,
                    boxSizing: "border-box",
                  }}
                />
                {emailError === "red" ? (
                  <p className={regStyle.errorMessage}>
                    <WarningRoundedIcon />
                    {errorText}
                  </p>
                ) : (
                  <button onClick={() => handleOK("email")}>
                    OK
                    <CheckIcon />
                  </button>
                )}
              </div>
            </div>
          </section>
          <section id="4">
            <div className={regStyle.que}>
              <p className={regStyle.p}>
                <span>
                  4
                  <ArrowForwardRoundedIcon
                    style={{
                      width: "15px",
                      height: "15px",
                      margin: "0 0.6rem 0 0.3rem",
                      fontWeight: "bold",
                    }}
                  />
                </span>
                And what's your College name? *
              </p>
              <div>
                <input
                  value={college}
                  name="college"
                  type="text"
                  placeholder="Type your college name here..."
                  autoComplete="off"
                  required
                  onBlur={() => setNameError("white")}
                  onChange={(e) => {
                    if (collegeError === "red") {
                      setCollegeError("white");
                    }
                    setCollege(e.target.value);
                  }}
                  style={{
                    borderBottom: `1px solid ${collegeError}`,
                    boxSizing: "border-box",
                  }}
                />
                {collegeError === "red" ? (
                  <p className={regStyle.errorMessage}>
                    <WarningRoundedIcon />
                    {errorText}
                  </p>
                ) : (
                  <button onClick={() => handleOK("college")}>
                    OK
                    <CheckIcon />
                  </button>
                )}
              </div>
            </div>
          </section>
          <section id="5">
            <div className={regStyle.que}>
              <p className={regStyle.p}>
                <span>
                  5
                  <ArrowForwardRoundedIcon
                    style={{
                      width: "15px",
                      height: "15px",
                      margin: "0 0.6rem 0 0.3rem",
                      fontWeight: "bold",
                    }}
                  />
                </span>
                And what's your current Semester? *
              </p>
              <div>
                <input
                  value={sem}
                  name="sem"
                  type="text"
                  placeholder="Third"
                  autoComplete="off"
                  required
                  onBlur={() => setNameError("white")}
                  onChange={(e) => {
                    if (semError === "red") {
                      setSemError("white");
                    }
                    setSem(e.target.value);
                  }}
                  style={{
                    borderBottom: `1px solid ${semError}`,
                    boxSizing: "border-box",
                  }}
                />
                {semError === "red" ? (
                  <p className={regStyle.errorMessage}>
                    <WarningRoundedIcon />
                    {errorText}
                  </p>
                ) : (
                  <button onClick={() => handleOK("sem")}>Submit</button>
                )}
              </div>
            </div>
          </section>
        </div>
        <div className={regStyle.slideButton}>
          <span onClick={moveUp}>
            <KeyboardArrowUpRoundedIcon />
          </span>
          <span onClick={moveDown}>
            <KeyboardArrowDownRoundedIcon />
          </span>
        </div>
      </div>
    </>
  );
};

export default Registration;
