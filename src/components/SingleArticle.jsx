import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CardGroup from "react-bootstrap/CardGroup";
import { ListGroup } from "react-bootstrap";

const SingleArticle = ({ article }) => {
	const date = new Date(article.created_at)
	const formattedDate = date.toDateString()
	return (
		<div className="overall-card-container">
			<CardGroup>
				<Card id="card-container">
					<Card.Img variant="top" src={article.article_img_url} />
					<Card.Body>
						<Card.Title id="card-title">{article.title}</Card.Title>
						<ListGroup id="card-list-group">
							<Card.Text>Topic: {article.topic}</Card.Text>
							<Card.Text>Comments: {article.comment_count}</Card.Text>
							<Card.Text>Votes: {article.votes}</Card.Text>
							<Card.Text>Created: {formattedDate}</Card.Text>
						</ListGroup>
						<Button id="view-button">View Article</Button>
					</Card.Body>
				</Card>
			</CardGroup>
		</div>
	);
};

export default SingleArticle;
