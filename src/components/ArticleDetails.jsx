import React, { useEffect, useState } from "react";
import getSingleArticle from "../utils/getSingleArticle";
import { useParams } from "react-router-dom";
import SingleArticle from "./SingleArticle";

const ArticleDetails = () => {
	const { article_id } = useParams();
	const [singleArticle, setSingleArticle] = useState([]);
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
	}, [article_id]);

	if (isLoading) {
		return <p>Loading articles. Please wait.</p>;
	}
	if (isError) {
		return <p>Error loading the articles. Please try again later.</p>;
	}

	const date = new Date(singleArticle.created_at);
	const formattedDate = date.toDateString();

	return (
		<section className="article-view-container">
			<h1 id="article-title">{singleArticle.title}</h1>
			<h2 id="article-author">Written by: {singleArticle.author}</h2>
			<img src={singleArticle.article_img_url}></img>
			<p>Created: {formattedDate}</p>
			<p>Votes: {singleArticle.votes}</p>
			<p>Topic: {singleArticle.topic}</p>
			<p>Comments: {singleArticle.comment_count}</p>
			<p>{singleArticle.body}</p>
		</section>
	);
};

export default ArticleDetails;
