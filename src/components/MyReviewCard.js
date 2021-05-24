import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Card from 'react-bootstrap/Card';

const MyReviewCard = (props) => {
    const review = props.review;

    return (
        <Card
            bg='dark'
            text='light'
            style={{
                width: '100%'
            }}
        >
            <Card.Header>{review.game}</Card.Header>
            <Card.Body>
                <Card.Text>{review.rating}/5</Card.Text>
                <Card.Text>"{review.review}"</Card.Text>
                <Card.Link href={``}>Edit Review</Card.Link>
                <Card.Link href={``}>Delete Review</Card.Link>

            </Card.Body>
        </Card>
    )
};

export default MyReviewCard;