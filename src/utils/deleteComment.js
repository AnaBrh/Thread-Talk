import axios from "axios";

const api = axios.create({ baseURL: `https://thread-talk.onrender.com/api` });

function deleteComment(comment_id) {
	return api.delete(`/comments/${comment_id}`).then((response) => {
		return response.data;
	});
}

export default deleteComment;
