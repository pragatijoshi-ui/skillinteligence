import React from 'react';

const Content = ({ heading, description }) => {
  return (
    <div className="content">
      <h1 className='font-56 be-vietnam-pro-medium mb-12'>{heading}</h1>
      <p className='font-16 be-vietnam-pro-regular mb-0'>{description}</p>
    </div>
  );
};

export default Content;
