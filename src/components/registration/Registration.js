import React, { useEffect, useState } from 'react';
import regStyle from './style.module.css';
import CheckIcon from '@mui/icons-material/Check';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';

const Registration = () => {

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [college, setCollege] = useState('');
  const [sem, setSem] = useState('');
  const [semError, setSemError] = useState('white');
  const [nameError, setNameError] = useState('white');
  const [numberError, setNumberError] = useState('white');
  const [emailError, setEmailError] = useState('white');
  const [collegeError, setCollegeError] = useState('white');

  const moveDown = () => {
    // console.log("MoveDown");
    document.querySelectorAll('section').forEach((s) => {
      // console.log("MoveDown");
      if(parseFloat(s.style.bottom)<400){
      // console.log(s.style.bottom);
      s.style.bottom = parseFloat(s.style.bottom) + 100 + '%';
      }     
    });
  }

  const moveUp = () => {
    // console.log("MoveUp");
    document.querySelectorAll('section').forEach((s) => {
      if(parseFloat(s.style.bottom)>0){
      // console.log(s.style.bottom);
      s.style.bottom = parseFloat(s.style.bottom) - 100 + '%';
      }
     });
  }

  
  const error = (err) => {
    if(err === 'name'){
      setNameError('red');
    }
    if(err === 'number'){
      setNumberError('red');
    }
    if(err === 'email'){
      setEmailError('red');
    }
    if(err === 'college'){
      setCollegeError('red');
    }
    if(err === 'sem'){
      setSemError('red');
    }
  } 

  const handleOK = (e) => {
    if(e === 'name'){
      name.trim() ? moveDown() : error('name')
    }
    if(e === 'number'){
      number.trim() ? moveDown() : error('number')
    }
    if(e === 'email'){
      email.trim() ? moveDown() : error('email')
    }
    if(e === 'college'){
      college.trim() ? moveDown() : error('college')
    }
    if(e === 'sem'){
      sem.trim() ? moveDown() : error('sem')
    }
  }

  useEffect(() => {
    // console.log(name);
  }, [name]);


  useEffect(() => {
    document.querySelectorAll('section').forEach((s) => {
      // console.log(s.style.bottom);
      s.style.bottom = '0%';
     });

    document.addEventListener('keypress', (e) => {
      if(e.key === 'Enter'){
        // console.log('Enter', e.target.name === 'name');
        e.target.value ? moveDown() : error(e.target.name)
      }
    });
  },[]);

  return (
    <div className={regStyle.registration}>
      <div className={regStyle.slider}>
      <section id='1'>
        <div className={regStyle.que}>
            <p className={regStyle.p}>
                <span>
                    1
                    <ArrowForwardRoundedIcon
                      style={{
                        width:'15px', 
                        height:'15px', 
                        margin: '0 0.6rem 0 0.3rem',
                        fontWeight:'bold'
                        }}
                    />
                </span>
            Before we start, can we get your full name? *
            </p>
            <div>
                <input 
                value={name}
                name='name'
                type='text'
                placeholder='Type your name here...'
                autoFocus
                required
                onChange={(e) => {
                  if(nameError === 'red'){
                    setNameError('white');
                  }
                  setName(e.target.value)
                }}
                style={{
                  borderBottom: `1.5px solid ${nameError}`,
                  boxSizing: 'border-box'
                }}
                />
                <button onClick={() => handleOK('name')}>OK<CheckIcon/></button>
            </div>
        </div>
      </section>
      <section id='2'>
        <div className={regStyle.que}>
            <p className={regStyle.p}>
                <span>
                    2
                    <ArrowForwardRoundedIcon
                      style={{
                        width:'15px', 
                        height:'15px', 
                        margin: '0 0.6rem 0 0.3rem',
                        fontWeight:'bold'
                        }}
                    />
                </span>
            And what's your Phone number? *
            </p>
            <div>
                <input 
                value={number}
                name='number'
                type='text'
                placeholder='6393417511'
                required
                onChange={(e) => {
                  if(numberError === 'red'){
                    setNumberError('white');
                  }
                  setNumber(e.target.value)}}
                style={{
                  borderBottom: `1px solid ${numberError}`,
                  boxSizing: 'border-box'
                }}
                />
                <button onClick={() => handleOK('number')}>OK<CheckIcon/></button>
            </div>
        </div>
      </section>
      <section id='3'>
        <div className={regStyle.que}>
            <p className={regStyle.p}>
                <span>
                    3
                    <ArrowForwardRoundedIcon
                      style={{
                        width:'15px', 
                        height:'15px', 
                        margin: '0 0.6rem 0 0.3rem',
                        fontWeight:'bold'
                        }}
                    />
                </span>
            And what's your E-mail id? *
            </p>
            <div>
                <input 
                value={email}
                name='email'
                type='email'
                placeholder='name@example.com'
                required
                onChange={(e) => {
                  if(emailError === 'red'){
                    setEmailError('white');
                  }
                  setEmail(e.target.value)
                }}
                style={{
                  borderBottom: `1px solid ${emailError}`,
                  boxSizing: 'border-box'
                }}
                />
                <button onClick={() => handleOK('email')}>OK<CheckIcon/></button>
            </div>
        </div>
      </section>
      <section id='4'>
        <div className={regStyle.que}>
            <p className={regStyle.p}>
                <span>
                    4
                    <ArrowForwardRoundedIcon
                      style={{
                        width:'15px', 
                        height:'15px', 
                        margin: '0 0.6rem 0 0.3rem',
                        fontWeight:'bold'
                        }}
                    />
                </span>
            And what's your College name?
            </p>
            <div>
                <input 
                value={college}
                name='college'
                type='text'
                placeholder='Type your college name here...'
                onChange={(e) => {
                  if(collegeError === 'red'){
                    setCollegeError('white');
                  }
                  setCollege(e.target.value)
                }}
                style={{
                  borderBottom: `1px solid ${collegeError}`,
                  boxSizing: 'border-box'
                }}
                />
                <button onClick={() => handleOK('college')}>OK<CheckIcon/></button>
            </div>
        </div>
      </section>
      <section id='5'>
        <div className={regStyle.que}>
            <p className={regStyle.p}>
                <span>
                    5
                    <ArrowForwardRoundedIcon
                      style={{
                        width:'15px', 
                        height:'15px', 
                        margin: '0 0.6rem 0 0.3rem',
                        fontWeight:'bold'
                        }}
                    />
                </span>
            And what's your current Semester?
            </p>
            <div>
                <input 
                value={sem}
                name='sem'
                type='text'
                placeholder='Third'
                onChange={(e) => {
                  if(semError === 'red'){
                    setSemError('white');
                  }
                  setSem(e.target.value)
                }}
                style={{
                  borderBottom: `1px solid ${semError}`,
                  boxSizing: 'border-box'
                }}
                />
                <button onClick={() => handleOK('sem')}>OK<CheckIcon/></button>
            </div>
        </div>
      </section>
      </div>
      <div className={regStyle.slideButton}>
        <span onClick={moveUp}><KeyboardArrowUpRoundedIcon/></span>
        <span onClick={moveDown}><KeyboardArrowDownRoundedIcon/></span>
      </div>
    </div>
  )
}

export default Registration;
