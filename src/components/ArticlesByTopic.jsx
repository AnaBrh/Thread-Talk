// ArticlesByTopic.jsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import getArticlesByTopic from "../utils/getArticlesByTopic";
import { Container, Card, CardGroup, ListGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ArticlesByTopic = () => {
	const { slug } = useParams();
	const [articles, setArticles] = useState([]);
	const [isError, setIsError] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		getArticlesByTopic(slug)
			.then((articles) => {
				setArticles(articles);
				setIsLoading(false);
			})
			.catch((err) => {
				setIsError(true);
				setIsLoading(false);
			});
	}, [slug]);

	if (isError) {
		return <p>Error loading articles for this topic. Please try again later.</p>;
	}
	if (isLoading) {
		return <p>Loading articles. Please wait.</p>;
	}

	return (
		<Container className="articles-container">
			<h1 id="articles-title">Articles on {slug}</h1>
			{articles.map((article) => (
				<div key={article.article_id} className="overall-card-container">
					<CardGroup>
						<Card id="card-container">
							<Card.Img variant="top" src={article.article_img_url} />
							<Card.Body>
								<Card.Title id="card-title">{article.title}</Card.Title>
								<ListGroup id="card-list-group">
									<Card.Text>Topic: {article.topic}</Card.Text>
									<Card.Text>Comments: {article.comment_count}</Card.Text>
									<Card.Text>Votes: {article.votes}</Card.Text>
									<Card.Text>
										Created:{" "}
										{new Date(article.created_at).toLocaleDateString(undefined, {
											year: "numeric",
											month: "long",
											day: "numeric",
										})}
									</Card.Text>
								</ListGroup>
								<Link to={`/articles/${article.article_id}`}>
									<Button id="view-button">View Article</Button>
								</Link>
							</Card.Body>
						</Card>
					</CardGroup>
				</div>
			))}
		</Container>
	);
};

export default ArticlesByTopic;
