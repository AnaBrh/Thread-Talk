import { useState, useEffect } from "react";
import getAllTopics from "../utils/getAllTopics";
import SingleTopics from "./SingleTopics";

const Topics = () => {
	const [topics, setTopics] = useState([]);
	const [isError, setIsError] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		getAllTopics()
			.then((topics) => {
				setTopics(topics);
				setIsLoading(false);
			})
			.catch((err) => {
				setIsError(true);
				setIsLoading(false);
			});
	}, []);

	if (isError) {
		return <p>Error loading the topics. Please try again later.</p>;
	}
	if (isLoading) {
		return <p>Loading topics. Please wait.</p>;
	}

	return (
		<div className="articles-container">
			<h1 id="topics-title">Topics</h1>
			{topics.map((topic) => {
				return <SingleTopics key={topic.slug} topic={topic} />;
			})}
		</div>
	);
};

export default Topics;
