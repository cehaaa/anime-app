/** @jsxImportSource @emotion/react */

// react library
import { Routes, Route } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

// components
import Container from "./Organism/Container/Container";
import Header from "./Organism/Header/Header";
import Footer from "./Organism/Footer/Footer";

// pages
import Home from "../pages/Home/Home";
import Collection from "../pages/Collection/Collection";
import Folder from "../pages/Folder/Folder";

// styles
import variable from "./../style/variable";

const App = () => {
	const client = new ApolloClient({
		cache: new InMemoryCache(),
		uri: "https://graphql.anilist.co",
	});

	return (
		<div
			css={{
				background: variable.color.gray![200],
			}}
			id='app'>
			<ApolloProvider client={client}>
				<Container>
					<Header />
					<Routes>
						<Route path='/' element={<Home />}></Route>
						<Route path='/collections' element={<Collection />}></Route>
						<Route
							path='/collections/:collectionName'
							element={<Folder />}></Route>
					</Routes>
					<Footer />
				</Container>
			</ApolloProvider>
		</div>
	);
};

export default App;
