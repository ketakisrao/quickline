import React from 'react';
import { Card } from 'react-bootstrap';
import './index.scss';


function Cards(props) {
    var info = props.info;
    return (
        <Card style={{ width: '100%', height: '100%' }}>
            <Card.Img variant="top" src={info.img} />
            <Card.Body>
                <Card.Title>{info.title}</Card.Title>
                <Card.Text>
                    {info.desc}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Cards;