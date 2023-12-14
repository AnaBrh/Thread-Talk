import React, { useEffect, useState } from "react";
import getSingleArticle from "../utils/getSingleArticle";
import { useParams } from "react-router-dom";
import Comments from "./Comments";
import CommentAdder from "./CommentAdder";
import VoteAdder from "./VoteAdder";

const ArticleDetails = () => {
	const { article_id } = useParams();
	const [singleArticle, setSingleArticle] = useState([]);
	const [isError, setIsError] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

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
			</div>
			<VoteAdder
				article_id={singleArticle.article_id}
				initialVotes={singleArticle.votes}
			/>
			<Comments singleArticle={singleArticle} />
		</section>
	);
};

export default ArticleDetails;
