// import { useState, useEffect } from "react";
// import getAllUsers from "../utils/getAllUsers";
// import SingleUser from "./SingleUser";

// const Users = () => {
// 	const [users, setUsers] = useState([]);
// 	const [isError, setIsError] = useState(false);

// 	useEffect(() => {
// 		getAllUsers()
// 			.then((users) => {
//                 setUsers(users);
// 			})
// 			.catch((err) => {
//                 setIsError(true);
// 			});
//         }, []);
        
//         return (
//             <div className="user-container">
// 			{users.map((user) => {
//                 console.log(user, "<--user")
//                 return (
//                 <SingleUser key={user.name} user={user} />
//                 );
// 			})}
// 		</div>
// 	);
// };

// export default Users;
