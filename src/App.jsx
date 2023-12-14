import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Articles from "./components/Articles";
import ArticleDetails from "./components/ArticleDetails";
import Users from "./components/Users";
import { UserProvider } from "./contexts/UserContext";
import Topics from "./components/Topics"
import ArticlesByTopic from "./components/ArticlesByTopic";

function App() {
	return (
			<UserProvider>
				<Header />
				<Routes>
					<Route path="/" element={<Articles />} />
					<Route path="/articles/:article_id" element={<ArticleDetails />} />
					<Route path="/users" element={<Users />} />
					<Route path="/topics" element={<Topics />} />
					<Route path="/topics/:slug" element={<ArticlesByTopic />} />
				</Routes>
			</UserProvider>
	);
}

export default App;
