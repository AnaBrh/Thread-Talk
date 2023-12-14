import React, { useEffect, useState } from "react";
import getComments from "../utils/getComments"
import { useParams } from "react-router-dom";
import CommentAdder from "./CommentAdder";

const Comments = ({singleArticle}) => {
	const { article_id } = useParams();
	const [comments, setComments] = useState([]);
    const [isError, setIsError] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		getComments(article_id)
			.then((comments) => {
				setComments(comments);
				setIsLoading(false);
			})
			.catch((err) => {
				setIsError(true);
				setIsLoading(false);
			});
	}, [article_id]);

	const addComment = (newComment) => {
		setComments((prevComments) => [newComment, ...prevComments])
	}

	if (isLoading) {
		return <p>Loading. Please wait.</p>;
	}
	if (isError) {
		return <p>Error loading the page. Please try again later.</p>;
	}

	return (
		<div className="comments">
			<h2 id="comments-title">{singleArticle.comment_count} Comments</h2>
			<CommentAdder article_id={article_id} addComment={addComment} />
			{comments.map((comment) => (
				<div key={comment.comment_id}>
					<p id="comments-author">{comment.author}</p>
					<p id="comments-body">{comment.body}</p>
					<div className="comments-votes-box">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							height="24px"
							viewBox="0 0 24 24"
							width="24px"
							fill="#000000"
						>
							<path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none" />
							<path d="M9 21h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.58 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2zM9 9l4.34-4.34L12 10h9v2l-3 7H9V9zM1 9h4v12H1z" />
						</svg>
						<p id="comment-votes">{comment.votes}</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default Comments;
