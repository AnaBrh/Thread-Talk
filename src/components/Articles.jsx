import { useState, useEffect } from "react";
import getAllArticles from "../utils/getAllArticles";
import SingleArticle from "./SingleArticle";

const Articles = () => {
	const [articles, setArticles] = useState([]);
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		getAllArticles()
			.then((articles) => {
                setArticles(articles);
			})
			.catch((err) => {
                setIsError(true);
			});
        }, []);
        
        return (
            <div className="article-container">
			{articles.map((article) => {
                return (
                <SingleArticle key={article.article_id} article={article} />
                );
			})}
		</div>
	);
};

export default Articles;