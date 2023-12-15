import React, { useContext, useState } from "react";
import postComment from "../utils/postComment";
import { UserContext } from "../contexts/UserContext";

// COMMENT COUNTER CHARS
// USER FEEDBACK -> NEED TO BE LOGGED IN TO COMMENT
// ADD VOTING BUTTON FOR COMMENTS + DOWNVOTE

const CommentAdder = ({ article_id, addComment }) => {
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
						Failed to post comment. You need to be logged in.{" "}
					</p>
				)}
			</form>
		</div>
	);
};

export default CommentAdder;
