import React, { useEffect } from 'react';
import regStyle from './style.module.css';
import CheckIcon from '@mui/icons-material/Check';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';

const Registration = () => {

  useEffect(() => {
    var a = document.getElementById("1");  
    var b = document.getElementById("2");  
    var c = document.getElementById("3");  
    var d = document.getElementById("4");  
    var id = 1;
    a.scrollIntoView();
    console.log(a.scrollIntoView());
    window.addEventListener('scroll', () => {
      if(a.getBoundingClientRect().top < 600 && a.getBoundingClientRect().top > -600 && id != 1){
        a.scrollIntoView();
        id = 1
      }
      if(b.getBoundingClientRect().top < 600 && b.getBoundingClientRect().top > -600 && id != 2){
        b.scrollIntoView();
        id = 2
      }
      if(c.getBoundingClientRect().top < 600 && c.getBoundingClientRect().top > -600 && id != 3){
        c.scrollIntoView();
        id = 3
      }
      if(d.getBoundingClientRect().top < 600 && d.getBoundingClientRect().top > -600 && id != 4){
        d.scrollIntoView();
        id = 4
      }
      console.log(window.scroll, id);
    });
  }, []);

  return (
    <div className={regStyle.registration}>
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
                type='text'
                placeholder='Type your name here...'
                autoFocus
                />
                <button>OK<CheckIcon/></button>
            </div>
        </div>
      </section>
      <section id='2'>
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
            Number
            </p>
            <div>
                <input 
                type='text'
                placeholder='Type your name here...'
                autoFocus
                />
                <button>OK<CheckIcon/></button>
            </div>
        </div>
      </section>
      <section id='3'>
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
            Why
            </p>
            <div>
                <input 
                type='text'
                placeholder='Type your name here...'
                autoFocus
                />
                <button>OK<CheckIcon/></button>
            </div>
        </div>
      </section>
      <section id='4'>
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
            Go
            </p>
            <div>
                <input 
                type='text'
                placeholder='Type your name here...'
                autoFocus
                />
                <button>OK<CheckIcon/></button>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Registration;
