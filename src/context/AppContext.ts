import React from "react";

// interface
import AppContextInterface from "../models/AppContext";

export const AppContext = React.createContext<AppContextInterface>({
	// animes
	animes: [],
	setAnimes: () => {},

	// collections
	collections: {
		collections: [],
	},
	setCollections: () => {},

	// modal
	isCreateNewCollectionModal: false,
	setIsCreateNewCollectionModal: () => {},
});

export default AppContext;
