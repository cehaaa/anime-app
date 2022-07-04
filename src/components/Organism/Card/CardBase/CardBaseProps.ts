import React from "react";
import Anime from "../../../../models/Anime";

export interface CardBaseProps {
	children: React.ReactNode;
	anime: Anime;
}

export default CardBaseProps;
