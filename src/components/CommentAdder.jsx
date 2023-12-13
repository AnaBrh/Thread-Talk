import React, { useState } from "react";
import postComment from "../utils/postComment";

const CommentAdder = ({ article_id, addComment }) => {
	const [body, setBody] = useState("");
	const [username, setUsername] = useState("");

	const handleCommentSubmit = (event) => {
		event.preventDefault();

		postComment(article_id, body, username)
			.then((newComment) => {
				addComment(newComment);
				setBody("");
				setUsername("");
			})
			.catch((error) => {
				console.error("Error posting comment", error);
			});
	};

	return (
		<div className="comment-adder">
			<form onSubmit={handleCommentSubmit}>
				<textarea
					value={body}
					onChange={(event) => setBody(event.target.value)}
					placeholder="Add your comment..."
				/>
				<input
					type="text"
					value={username}
					onChange={(event) => setUsername(event.target.value)}
					placeholder="Your username..."
				/>
				<button type="submit">Submit Comment</button>
			</form>
		</div>
	);
};

export default CommentAdder;
