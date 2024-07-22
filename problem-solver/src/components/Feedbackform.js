import React, { useState } from 'react';
import { Button, Card, CardBody, CardHeader, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import { createFeedback } from '../services/feedback_service';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';

const FeedbackForm = () => {
    const {id}=useParams()
    const [feedback, setFeedback] = useState({
         feedback: "" 
        });

    const handleChange = (e) => {
        setFeedback({ ...feedback, feedback: e.target.value });
    };
    const handleReset=()=>{
        setFeedback({ feedback: "" });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        createFeedback(feedback,id);
        
        toast.success("Feedback Added Successfully");
        handleReset();
    };

    return (
        <Row>
            <Col sm={{ size: 13, offset: 0 }}>
                <Card className="mt-5">
                    <CardHeader>Feedback Form</CardHeader>
                    <CardBody>
                        <Form onSubmit={handleSubmit}>
                            <FormGroup>
                                <Label for="feedbackText">Feedback</Label>
                                <Input
                                    type="textarea"
                                    name="feedback"
                                    id="feedbackText"
                                    placeholder="Enter your feedback here..."
                                    value={feedback.feedback}
                                    onChange={handleChange}
                                />
                            </FormGroup>
                            <Button type="submit" color="primary">Submit</Button>
                        </Form>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    );
};

export default FeedbackForm;
