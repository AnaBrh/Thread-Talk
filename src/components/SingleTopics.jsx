import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CardGroup from "react-bootstrap/CardGroup";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const SingleTopics = ({ topic }) => {
	return (
        <div className="overall-card-container-topics">
			<CardGroup>
				<Card id="card-container">
					<Card.Body>
						<Card.Title id="card-title-topic">{topic.slug}</Card.Title>
						<Link to={`/topics/${topic.slug}`}>
							<Button id="view-button">View Articles</Button>
						</Link>
					</Card.Body>
					<Card.Footer><Card.Text>Description: {topic.description}</Card.Text></Card.Footer>
				</Card>
			</CardGroup>
		</div>
	);
};

export default SingleTopics;