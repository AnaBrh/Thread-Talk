import axios from "axios";

const api = axios.create({ baseURL: `https://thread-talk.onrender.com/api` });

function getArticlesByTopic(slug) {
	return api.get(`/articles?topic=${slug}`).then((response) => {
		return response.data.articles;
	});
}

export default getArticlesByTopic;
