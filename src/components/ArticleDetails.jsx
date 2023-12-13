import React, { useEffect, useState } from "react";
import getSingleArticle from "../utils/getSingleArticle";
import { useParams } from "react-router-dom";
import Comments from "./Comments";

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
			<div className="article-votes">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					height="24px"
					viewBox="0 0 24 24"
					width="24px"
					fill="#000000"
				>
					<path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none" />
					<path d="M9 21h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.58 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2zM9 9l4.34-4.34L12 10h9v2l-3 7H9V9zM1 9h4v12H1z" />
				</svg>
				<p id="article-votes-num">{singleArticle.votes}</p>
			</div>
			<Comments singleArticle={singleArticle}/>
		</section>
	);
};

export default ArticleDetails;
