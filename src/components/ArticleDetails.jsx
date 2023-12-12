import React, { useEffect, useState } from "react";
import getSingleArticle from "../utils/getSingleArticle";
import { useParams } from "react-router-dom";
import getComments from "../utils/getComments";

const ArticleDetails = () => {
	const { article_id } = useParams();
	const [singleArticle, setSingleArticle] = useState([]);
	const [comments, setComments] = useState([]);
	const [isError, setIsError] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		getSingleArticle(article_id)
			.then((article) => {
				setSingleArticle(article);
				setIsLoading(false);
			})
			.catch((err) => {
				setIsError(true);
				setIsLoading(false);
			});

		getComments(article_id)
			.then((comments) => {
				setComments(comments);
			})
			.catch((err) => {
				setIsError(true);
			});
	}, [article_id]);

	if (isLoading) {
		return <p>Loading. Please wait.</p>;
	}
	if (isError) {
		return <p>Error loading the page. Please try again later.</p>;
	}

	const date = new Date(singleArticle.created_at);
	const formattedDate = date.toDateString();

	return (
		<section className="article-view-container">
			<h1 id="article-title">{singleArticle.title}</h1>
			<h3 id="article-author">By: {singleArticle.author}</h3>
			<img src={singleArticle.article_img_url}></img>
			<div className="article-details-box">
				<p id="article-topic">Topic: {singleArticle.topic}</p>
				<p id="article-date">Created: {formattedDate}</p>
				<p id="article-body">{singleArticle.body}</p>
				<p id="article-votes">Votes: {singleArticle.votes}</p>
			</div>
			<div className="comments">
				<h2 id="comments-title">{singleArticle.comment_count} Comments</h2>
				{comments.map((comment) => (
					<div key={comment.comment_id}>
						<p id="comments-author">{comment.author}</p>
						<p id="comments-body">{comment.body}</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default ArticleDetails;
