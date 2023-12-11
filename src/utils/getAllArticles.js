import axios from "axios";

const api = axios.create({ baseURL: `https://thread-talk.onrender.com/api` });

function getAllArticles() {
	return api.get(`/articles`).then((response) => {
		return response.data.articles;
	});
}

export default getAllArticles;
