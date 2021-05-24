import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Card from 'react-bootstrap/Card';

const ReviewCard = (props) => {
    const review = props.review;

    return (
        <Card
            bg='dark'
            text='light'
            style={{
                width: '100%'
            }}
        >
            <Card.Header>{review.rating}/5</Card.Header>
            <Card.Body>
                <Card.Text>"{review.review}"</Card.Text>
            </Card.Body>
        </Card>
    )
};

export default ReviewCard;