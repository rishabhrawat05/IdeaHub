import React, { useState } from 'react';
import { Button, Card, CardBody, CardSubtitle, CardTitle, Container } from 'reactstrap';
import { NavLink as ReactLink } from 'react-router-dom';


const IdeaCard = ({ problem, }) => {
  



 

  function truncate(str, maxlength) {
    return str.length > maxlength ? str.slice(0, maxlength - 1) + '…' : str;
  }

  return (
    <Card
      body
      border
      className="ms-4 mt-4"
      style={{ width: '17rem' }}
    >
      {problem.image &&
        <img
          alt="Sample"
          src={problem.image}
          style={{ height: '220px', width: '220px', borderRadius: '10px', objectFit: 'contain' }}
        />
      }
      <CardBody>
        
        <CardTitle tag="h6">
          {problem.title}
        </CardTitle>
        <CardSubtitle>
          {truncate(problem.description, 100)}
        </CardSubtitle>
        <Button color='danger' className='mt-3' tag={ReactLink} to={`/problem/${problem.id}`}>
          View Idea
        </Button>
      </CardBody>
    </Card>
  );
};

export default IdeaCard;
