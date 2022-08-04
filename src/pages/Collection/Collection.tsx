/** @jsxImportSource @emotion/react */

// react library
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// components
import Body from "../../components/Organism/Body/Body";
import VerticalCollection from "../../components/Organism/VerticalCollections/VerticalCollection";

// props
import CollectionProps from "./CollectionProps";
import Collections from "../../models/Collections";

// styles
import { title } from "../../style/styles";

// utils
import ls from "../../utils/LocalStorage";

export const Collection: React.FC<CollectionProps> = ({ children }) => {
	const [collections, setCollections] = useState<Collections[]>([]);

	useEffect(() => {
		setCollections(ls.getCollections());
	}, []);

	return (
		<Body>
			<div css={title}>Your Collections</div>
			<VerticalCollection.Container>
				{collections.map((collection, index) => {
					return (
						<Link to={`/collections/${collection.name}`} key={index}>
							<VerticalCollection.List>
								<div>{collection.name}</div>
								<div>{collection.animes.length} Anime</div>
							</VerticalCollection.List>
						</Link>
					);
				})}
			</VerticalCollection.Container>
		</Body>
	);
};

export default Collection;
