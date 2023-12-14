import axios from "axios";

const api = axios.create({ baseURL: `https://thread-talk.onrender.com/api` });

function getComments(article_id) {
	return api
    .get(`/articles/${article_id}/comments`)
    .then((response) => {
		const comments = response.data.comments;

		if (!comments || !Array.isArray(comments)) {
			return [];
		}
		return comments;
	});
}

export default getComments;
