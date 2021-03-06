import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { workSet } from '../../../../constants/globalConstants';
import { HomeNextSubjectButton } from '../smooth-scroll-buttons/HomeSmoothScrollButtons';

const HomeRecentWorks = () => {
    return (
        <>
            <Container>
                <Row id="homeRecentWorks" className="justify-content-center align-content-center" style={{ height: '55vh' }}>
                    <Col className="col-12">
                        <h2 style={{ fontSize: '2rem', margin: '2rem auto' }}>
                            Recent Works
                        </h2>
                    </Col>
                    <WorkSet workSet={workSet} />
                    <Col className="col-12"><HomeNextSubjectButton subjectId="homeIntroSpa" marginTop="6rem" /></Col>
                </Row>
            </Container>
        </>
    );
}

const WorkSet = ({ workSet }) => {
    return Object.keys(workSet).map(work => {
        let techs = [];
        techs = workSet[work].techs.map(tech => {
            return (
                <Row md="auto" className="border" key={tech.name}>
                    <Col className="text-sm-left">
                        {tech.name}
                    </Col>
                    <Col className="text-sm-left">
                        {tech.items.map(item => <div key={item} className="border">{item}</div>)}
                    </Col>
                </Row>
            );
        });

        return (
            <Col key={work}>
                <Row className="justify-content-center">{work}</Row>
                <Row className="justify-content-center">{workSet[work].des}</Row>
                {techs}
                <Row className="justify-content-center">
                    <a href={workSet[work].link} target="_blank" rel="noopener noreferrer">Link</a>
                </Row>
            </Col >
        );
    });
}

export default HomeRecentWorks;