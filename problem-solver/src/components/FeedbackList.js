import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFeedbackFromProblemId } from '../services/feedback_service';
import { Card, CardBody, Row, Col } from 'reactstrap';

const FeedbackList = ({feedback}) => {
   

    return (
        <div className='mt-4'>
            {feedback.length > 0 ? (
                feedback.map((feed, index) => (
                    <Row key={index} className="mb-3">
                        <Col>
                            <Card>
                                <CardBody>
                                    {feed.feedback}
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                ))
            ) : (
                <p>No Feedback Yet</p>
            )}
        </div>
    );
}

export default FeedbackList;
