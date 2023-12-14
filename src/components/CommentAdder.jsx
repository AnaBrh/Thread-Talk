import React, { useContext, useState } from "react";
import postComment from "../utils/postComment";
import { UserContext, useUser } from "../contexts/UserContext";

const CommentAdder = ({ article_id, addComment, deleteComment }) => {
	const [body, setBody] = useState("");
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submissionStatus, setSubmissionStatus] = useState(null);
	const { currentUser } = useContext(UserContext)


	const handleCommentSubmit = (event) => {
		event.preventDefault();
		setIsSubmitting(true);

		postComment(article_id, body, currentUser)
			.then((newComment) => {
				addComment(newComment);
				setBody("");
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
				<button type="submit" disabled={isSubmitting}>
					{isSubmitting ? "Submitting..." : "Submit Comment"}
				</button>
				{submissionStatus === "success" && (
					<p style={{ color: "green" }}> Comment submitted successfully! </p>
				)}
				{submissionStatus === "error" && (
					<p style={{ color: "red" }}>
						{" "}
						Error submitting comment. Please try again.{" "}
					</p>
				)}
			</form>
		</div>
	);
};

export default CommentAdder;
