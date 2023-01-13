import React from 'react';
import regStyle from './style.module.css';
import CheckIcon from '@mui/icons-material/Check';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';

const Registration = () => {
  return (
    <div className={regStyle.registration}>
      <section id='name'>
        <div className={regStyle.que}>
            <p className={regStyle.p}>
                <span>
                    1
                    <ArrowForwardRoundedIcon
                      style={{
                        width:'15px', 
                        height:'15px', 
                        fontWeight:'900',
                        margin: '0 0.6rem 0 0.3rem'
                        }}
                    />
                </span>
            Before we start, can we get your full name? *
            </p>
            <div>
                <input 
                type='text'
                placeholder='Type your name here...'
                />
                <button>Ok<CheckIcon/></button>
            </div>
        </div>
      </section>
      {/* <section id='number'>

      </section>
      <section id='email'>

      </section>
      <section id='description'>

      </section> */}
    </div>
  )
}

export default Registration;
