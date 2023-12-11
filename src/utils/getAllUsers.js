import axios from "axios";

const api = axios.create({ baseURL: `https://thread-talk.onrender.com/api` });

function getAllUsers() {
	return api.get(`/users`).then((response) => {
		return response.data.users;
	});
}

export default getAllUsers;
