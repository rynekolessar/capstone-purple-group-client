import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Card from 'react-bootstrap/Card';

const GameCard = (props) => {
  const game = props.game;

  return (
    <Card
      bg='dark'
      text='light'
    >
      <Card.Img
        variant="top"
        src={game.imageCover}
        alt="Image Unavailable" />
      <Card.Body>
        <Card.Title>{game.title}</Card.Title>
        <Card.Text>{game.platform}</Card.Text>
        <Card.Link href={`/show-game/${game._id}`}>View Game</Card.Link>
        <Card.Link href={`/create-review/${game._id}`}>Review Game</Card.Link>
      </Card.Body>
    </Card>
  )
};

export default GameCard;