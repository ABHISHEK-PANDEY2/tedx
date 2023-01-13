import React from 'react';

const PageNotFound = () => {
  return (
    <div style={{display:'flex', flexDirection:'column', alignItems:'center', color:'white', fontFamily:'poppines', margin: 0, gap:'0.5rem'}}>
      <h2>Page not Found.</h2>
      <p>Please enter correct url.</p>
      <a href='/'>Go to Home</a>
    </div>
  )
}

export default PageNotFound;
