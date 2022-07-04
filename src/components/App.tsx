/** @jsxImportSource @emotion/react */

// react library
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

// components
import Container from "./Organism/Container/Container";
import Header from "./Organism/Header/Header";
import Footer from "./Organism/Footer/Footer";

// pages
import Home from "../pages/Home/Home";
import Collection from "../pages/Collection/Collection";

// context
import AppContext from "../context/AppContext";

// interface
import Anime from "../models/Anime";

// styles
import variable from "./../style/variable";
import { Collections } from "../models/Collections";

const App = () => {
	const client = new ApolloClient({
		cache: new InMemoryCache(),
		uri: "https://graphql.anilist.co",
	});

	const [animes, setAnimes] = useState<Anime[]>([]);
	const [collections, setCollections] = useState<Collections>({
		collections: [],
	});

	const [isCreateNewCollectionModal, setIsCreateNewCollectionModal] =
		useState<boolean>(false);

	const appContextValue = {
		animes: animes,
		setAnimes: setAnimes,

		collections: collections,
		setCollections: setCollections,

		isCreateNewCollectionModal: isCreateNewCollectionModal,
		setIsCreateNewCollectionModal: setIsCreateNewCollectionModal,
	};

	return (
		<div
			css={{
				background: variable.color.gray[200],
			}}
			id='app'>
			<ApolloProvider client={client}>
				{/* <AppContext.Provider value={appContextValue}> */}
				<Container>
					<Header />
					<Routes>
						<Route path='/' element={<Home />}></Route>
						<Route path='/collections' element={<Collection />}></Route>
					</Routes>
					<Footer />
				</Container>
				{/* </AppContext.Provider> */}
			</ApolloProvider>
		</div>
	);
};

export default App;
