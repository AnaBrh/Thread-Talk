import axios from "axios";

const api = axios.create({ baseURL: `https://thread-talk.onrender.com/api` });

function getSingleArticle(article_id) {
	return api
    .get(`/articles/${article_id}`)
    .then((response) => {
		return response.data.article;
	});
}

export default getSingleArticle;
