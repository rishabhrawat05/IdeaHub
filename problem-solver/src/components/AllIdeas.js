import React, { useState, useEffect } from 'react';
import IdeaCard from './IdeaCard';
import '../css/AllIdeas.css';
import { Spinner } from 'reactstrap';


const AllIdeas = ({ problems, loading }) => {
 

  return (
    <div className='problem-container'>
      {loading && 
      <div className='text-center mt-5'>
                    <Spinner color='primary' />
                    <p>Loading...</p>
      </div>}
      {
        (problems.length > 0) ?
          problems.map((problem, index) => (
            <IdeaCard
              key={index}
              problem={problem}
            />
          ))
          : ""
      }
    </div>
  );
};

export default AllIdeas;