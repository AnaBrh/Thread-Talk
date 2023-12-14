import BasicMenu from "./Menu";
import { UserContext, useUser } from "../contexts/UserContext";
import { useContext } from "react";


const Header = () => {
	const { currentUser } = useContext(UserContext)
	console.log(currentUser)
	
	return (
		<header className="header">
			<h1 id="title">Thread Talk</h1>
			<div className="menu-currentuser">
				<p id="current-user">
					{currentUser
						? `Hello, ${currentUser}`
						: "Nobody is logged in"}
				</p>
				<BasicMenu />
			</div>
		</header>
	);
};

export default Header;
