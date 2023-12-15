import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CardGroup from "react-bootstrap/CardGroup";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const SingleArticle = ({ article }) => {
	const date = new Date(article.created_at);
	const formattedDate = date.toDateString();

	return (
		<CardGroup className="overall-card-container">
			<Card id="card-container">
				<Card.Header>
					<Card.Img variant="top" src={article.article_img_url} />
				</Card.Header>
				<Card.Body>
					<Card.Title id="card-title">{article.title}</Card.Title>
					<ListGroup id="card-list-group">
						<Card.Text>Topic: {article.topic}</Card.Text>
						<Card.Text>Comments: {article.comment_count}</Card.Text>
						<Card.Text>Votes: {article.votes}</Card.Text>
					</ListGroup>
					<Link to={`/articles/${article.article_id}`}>
						<Button id="view-button">View Article</Button>
					</Link>
					<Card.Footer id="card-footer">
						<small>Created: {formattedDate}</small>
					</Card.Footer>
				</Card.Body>
			</Card>
		</CardGroup>
	);
};

export default SingleArticle;
