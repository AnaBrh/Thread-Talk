import React, { useState } from "react";
import postComment from "../utils/postComment";

const CommentAdder = ({ article_id, addComment }) => {
	const [body, setBody] = useState("");
	const [username, setUsername] = useState("");
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submissionStatus, setSubmissionStatus] = useState(null);

	const handleCommentSubmit = (event) => {
		event.preventDefault();
		setIsSubmitting(true);

		postComment(article_id, body, username)
			.then((newComment) => {
				addComment(newComment);
				setBody("");
				setUsername("");
				setSubmissionStatus("success");
			})
			.catch((error) => {
				setSubmissionStatus("error");
			})
			.finally(() => {
				setIsSubmitting(false);
			});
	};

	return (
		<div className="comment-adder">
			<form onSubmit={handleCommentSubmit}>
				<textarea
					value={body}
					onChange={(event) => setBody(event.target.value)}
					placeholder="Add your comment..."
					required
				/>
				<input
					type="text"
					value={username}
					onChange={(event) => setUsername(event.target.value)}
					placeholder="Your username..."
					required
				/>
				<button type="submit" disabled={isSubmitting}>
					{isSubmitting ? "Submitting..." : "Submit Comment"}
				</button>
				{submissionStatus === "success" && (
					<p style={{ color: "green" }}> Comment submitted successfully! </p>
				)}
				{submissionStatus === "error" && (
					<p style={{ color: "red" }}> Error submitting comment. Please try again. </p>
				)}
			</form>
		</div>
	);
};

export default CommentAdder;
