import React from 'react';

const Spinner = () => {
    return (
      <div className='text-center my-3'>
        <div className="spinner-border text-primary" style= {{width: "3rem", height: "3rem"}} role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    )
};

export default Spinner;
