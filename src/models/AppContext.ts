// react library
import { Dispatch, SetStateAction } from "react";

// interface
import Anime from "./Anime";
// import { Library } from "./Library";

export interface AppContextInterface {
	animes: Anime[];
	setAnimes: Dispatch<SetStateAction<Anime[]>>;

	// collections: Collections;
	// setCollections: Dispatch<SetStateAction<Collections>>;

	isCreateNewCollectionModal: boolean;
	setIsCreateNewCollectionModal: Dispatch<SetStateAction<boolean>>;
}

export default AppContextInterface;
