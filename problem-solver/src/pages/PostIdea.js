import React,{useState} from 'react';
import Base from '../components/Base';
import { Button, Card, CardBody, CardHeader, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap';

import { postProblem } from '../services/problem_service';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';

const PostIdea = () => {
    const {id}=useParams();
    const [problem, setProblem] =useState({
        title: "",
        description: "",

    });

    const handleChange = (e, field) => {
        setProblem({ ...problem, [field]: e.target.value });
    };

    const handleReset = () => {
        setProblem({ title: "", description: "" });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        postProblem(problem,id);  
        toast.success("Idea has been posted successfully");
        handleReset();
       
    };

    return (
        <div>
            <Base />
            <Container>
                <Row className="mt-4">
                    <Col sm={{ size: 6, offset: 3 }}>
                        <Card outline color="dark">
                            <CardHeader className="text-center">
                                <h1>Post Your Idea</h1>
                            </CardHeader>
                            <CardBody>
                                <Form onSubmit={handleSubmit}>
                                    <FormGroup>
                                        <Label for="title">Enter post title</Label>
                                        <Input
                                            autoComplete="off"
                                            type="text"
                                            placeholder="Enter post title"
                                            id="title"
                                            value={problem.title}
                                            onChange={(e) => handleChange(e, 'title')}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="description">Enter Post Description</Label>
                                        <Input
                                            type="textarea"
                                            placeholder="Enter Post Description"
                                            id="description"
                                            value={problem.description}
                                            onChange={(e) => handleChange(e, 'description')}
                                            style={{
                                                height: '150px',
                                                resize: 'none'
                                            }}
                                        />
                                    </FormGroup>
                                    <Container className="text-center">
                                        <Button color="dark" type='submit'>Post</Button>
                                        <Button color="secondary" className="ms-2" onClick={handleReset}>Reset</Button>
                                    </Container>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default PostIdea;
