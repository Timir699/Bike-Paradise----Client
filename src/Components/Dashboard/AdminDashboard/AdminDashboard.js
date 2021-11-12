import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Main from './Main/Main';
import Sidebar from './Siderbar/Sidebar';

const AdminDashboard = () => {
    return (
        <div>
             <Container>
                <Row>
                    <Col sm={4}><Sidebar /></Col>
                    <Col sm={8} className=""><Main /></Col>
                </Row>
            </Container>
        </div>
    );
};

export default AdminDashboard;