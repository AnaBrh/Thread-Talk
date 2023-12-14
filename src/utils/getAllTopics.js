import axios from "axios";

const api = axios.create({ baseURL: `https://thread-talk.onrender.com/api` });

function getAllTopics() {
	return api
	.get(`/topics`)
	.then((response) => {
		return response.data.topics;
	});
}

export default getAllTopics;
