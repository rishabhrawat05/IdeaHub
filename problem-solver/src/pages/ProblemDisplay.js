import React, { useEffect, useState } from 'react';
import Base from '../components/Base';
import { Button, Card, CardBody, CardFooter, CardHeader, Col, Container, Row, Spinner } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { getProblemById, updateProblem } from '../services/problem_service';
import Feedbackform from '../components/Feedbackform'
import FeedbackList from '../components/FeedbackList';
import { getFeedbackFromProblemId } from '../services/feedback_service';

const ProblemDisplay = () => {
    const [problem, setProblem] = useState({});
    const [loading, setLoading] = useState(true); 
    const { id } = useParams();
    const [feedback, setFeedback] = useState([]);

    useEffect(() => {
        getFeedbackFromProblemId(id).then((response) => {
            setFeedback(response);
            console.log(response);
        }).catch(error => {
            console.error('Error fetching feedback:', error);
        });
    }, [id]);
    useEffect(() => {
        getProblemById(id).then((response) => {
            setProblem(response);
            setLoading(false); 
            console.log(response);
        });
    }, [id]);

    const handleUpvote = () => {
        const updatedProblem = { ...problem, upvote: (problem.upvote || 0) + 1 };
        setProblem(updatedProblem);
        updateProblem(updatedProblem);
    };

    const handleDownvote = () => {
        const updatedProblem = { ...problem, downvote: (problem.downvote || 0) + 1 };
        setProblem(updatedProblem);
        updateProblem(updatedProblem);
    };

    return (
        <div className='overflow-hidden'>
            <Base />
            {loading ? ( 
                <div className='text-center mt-5'>
                    <Spinner color='primary' />
                    <p>Loading...</p>
                </div>
            ) : (
                <Row>
                    <Col sm={{ size: 10, offset: 1 }}>
                        <Card className='mt-3'>
                            <CardHeader style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                                posted By&nbsp;<h5 className='mt-2'>{problem.user.name}</h5>
                                <Container style={{ position: 'relative', left: '38%', display: 'flex', alignItems: 'center', justifyContent: 'space-around', width: '150px' }}>
                                    <h6 className='mt-2'>{problem.upvote ? problem.upvote : 0}</h6>
                                    <Button style={{ marginRight: '5px' }} onClick={handleUpvote}>
                                        <i className="ri-arrow-up-line"></i>
                                    </Button>
                                    <Button onClick={handleDownvote}>
                                        <i className="ri-arrow-down-line"></i>
                                    </Button>
                                    <h6 className='mt-2'>{problem.downvote ? problem.downvote : 0}</h6>
                                </Container>
                            </CardHeader>
                            <CardBody>
                                <h1 className='text-center'>{problem.title}</h1>
                                <p>{problem.description}</p>
                            </CardBody>
                            <CardFooter>
                                <Feedbackform/>
                                <Container>
                                    <FeedbackList feedback={feedback}/>
                                </Container>
                            </CardFooter>
                        </Card>
                    </Col>
                </Row>
            )}
        </div>
    );
};

export default ProblemDisplay;
