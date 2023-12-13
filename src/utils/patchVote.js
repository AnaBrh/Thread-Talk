import axios from "axios";

const api = axios.create({ baseURL: `https://thread-talk.onrender.com/api` });

function patchVote(article_id) {
	return api
    .patch(`/articles/${article_id}`, {inc_votes: 1})
    .then((response) => {
		console.log(response.data.article)
		return response.data.article;
	});
}

export default patchVote;
