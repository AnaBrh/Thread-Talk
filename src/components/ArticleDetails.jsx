import React, { useEffect, useState } from "react";
import getSingleArticle from "../utils/getSingleArticle";
// import ArticleCard from "./ArticleCard";
import { useParams } from "react-router-dom";
import SingleArticle from "./SingleArticle";

const ArticleDetails = () => {
    // const date = new Date(article.created_at);
	// const formattedDate = date.toDateString();

    const {article_id} = useParams()

    const [singleArticle, setSingleArticle] = useState([])
	const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
		getSingleArticle(article_id)
        .then((article) => {
            setSingleArticle(article);
            console.log(article, "<-use effect article")
				setIsLoading(false);
			})
			.catch((err) => {
				setIsError(true);
				setIsLoading(true);
			});
	}, [article_id]);

    if (isLoading) {
		return <p>Loading articles. Please wait.</p>;
	}
    if (isError) {
		return <p>Error loading the articles. Please try again later.</p>;
	}

	return (
		<section className="article-view-container">
            <p>{singleArticle.title}</p>
            <img src={singleArticle.article_img_url}></img>
			<h1>{singleArticle.title}</h1>
			<h2>Written by: {singleArticle.author}</h2>
			{/* <p>Created: {formattedDate}</p> */}
			<p>Votes: {singleArticle.votes}</p>
			<p>Topic: {singleArticle.topic}</p>
			<p>Comments: {singleArticle.comment_count}</p>
			<p>{singleArticle.body}</p>
		</section>
	);
};

export default ArticleDetails;
