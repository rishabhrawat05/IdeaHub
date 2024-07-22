import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardBody, CardHeader, Col, Row, Spinner, Table } from 'reactstrap';
import { getProblemByUser } from '../services/problem_service';

const ShowIdeas = () => {
    const [ideas, setIdeas] = useState([]);
    const { id } = useParams();
    const [selectedIdeaId, setSelectedIdeaId] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProblemByUser(id).then((response) => {
            setIdeas(response);
            setSelectedIdeaId(response[0]?.id);
            setLoading(false); 
        }).catch((error) => {
            console.error("Error fetching ideas:", error);
            setLoading(false); 
        });
    }, [id]);

    function truncate(str, maxlength) {
        return str.length > maxlength ? str.slice(0, maxlength - 1) + '…' : str;
    }

    return (
        <div>
            {loading ? (
                <div className='text-center mt-5'>
                    <Spinner color='primary' />
                    <p>Loading...</p>
                </div>
            ) : (
                <Row>
                    <Col sm={{ size: 10, offset: 1 }}>
                        <Card className='mt-4'>
                            <CardHeader className='text-center' style={{ fontSize: '2vw', fontWeight: '700' }}>My Ideas</CardHeader>
                            <CardBody>
                                <Table>
                                    <thead>
                                        <tr>
                                            <th>Idea ID</th>
                                            <th>Name</th>
                                            <th>Title</th>
                                            <th>Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {ideas.map((idea, index) => (
                                            <tr key={index}>
                                                <td>{idea.id}</td>
                                                <td>{idea.user.name}</td>
                                                <td>{idea.title}</td>
                                                <td>{truncate(idea.description, 30)}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            )}
        </div>
    );
}

export default ShowIdeas;
