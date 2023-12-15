import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { ListGroup } from "react-bootstrap";
import { useState, useEffect } from "react";
import getAllUsers from "../utils/getAllUsers";
import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const Users = () => {
	const { setCurrentUser } = useContext(UserContext)
	const [users, setUsers] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(null);

	const handleUserClick = (username) => {
		setCurrentUser(username);
	};

	useEffect(() => {
		getAllUsers()
			.then((users) => {
				setUsers(users);
				setIsLoading(false);
			})
			.catch((err) => {
				setIsError(err.response.data.msg);
			});
	}, [setCurrentUser]);

	if (isError) {
		return <p>Error loading the users. {isError}.</p>;
	}
	if (isLoading) {
		return <p>Loading users. Please wait.</p>;
	}

	return (
		<div className="user-container">
			<h1 id="topics-title">Choose a user to login</h1>
			{users.map((user) => {
				return (
					<li key={user.username}>
						<CardGroup className="user-cards" onClick={() => handleUserClick(user.username)}>
							<Card>
								<Card.Img variant="top" src={user.avatar_url} />
								<Card.Body>
									<Card.Title>{user.name}</Card.Title>
									<ListGroup>
										<Card.Text>{user.username}</Card.Text>
									</ListGroup>
								</Card.Body>
							</Card>
						</CardGroup>
					</li>
				);
			})}
		</div>
	);
};

export default Users;
