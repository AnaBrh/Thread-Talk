import { useState, useEffect } from "react";
import getAllArticles from "../utils/getAllArticles";
import SingleArticle from "./SingleArticle";

const Articles = () => {
	const [articles, setArticles] = useState([]);
	const [isError, setIsError] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		getAllArticles()
			.then((articles) => {
				setArticles(articles);
				setIsLoading(false);
			})
			.catch((err) => {
				setIsError(err.response.data.msg);
				setIsLoading(false);
			});
	}, []);

	if (isError) {
		return <p>Error loading the articles. {isError}.</p>;
	}

	if (isLoading) {
		return <p>Loading articles. Please wait.</p>;
	}

	return (
		<div className="article-container">
			{articles.map((article) => {
				return <SingleArticle key={article.article_id} article={article}/>;
			})}
		</div>
	);
};

export default Articles;
