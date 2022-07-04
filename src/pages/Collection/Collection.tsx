// react library
import React from "react";

// components
import Body from "../../components/Organism/Body/Body";

// props
import CollectionProps from "./CollectionProps";

export const Collection: React.FC<CollectionProps> = ({ children }) => {
	return (
		<Body>
			<div>collection</div>
		</Body>
	);
};

export default Collection;
