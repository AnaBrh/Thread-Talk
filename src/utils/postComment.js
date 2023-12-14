import axios from "axios";

const api = axios.create({ baseURL: `https://thread-talk.onrender.com/api` });

function postComment(article_id, body, username) {
	return api
		.post(`/articles/${article_id}/comments`, {
			body: body,
			username: username,
		})
		.then((response) => {
			return response.data.comment;
		});
}

export default postComment;
