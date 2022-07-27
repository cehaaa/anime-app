/** @jsxImportSource @emotion/react */

// react library
import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useParams } from "react-router-dom";

// components
import Body from "../../components/Organism/Body/Body";
import Card from "../../components/Organism/Card/Card";

// styles
import { title } from "../../style/styles";

// utils
import { findCollection } from "../../utils/utils";
import Collections from "../../models/Collections";

const Folder = () => {
	const { collectionName } = useParams();

	const [collection, setCollection] = useState<Collections>();

	useEffect(() => {
		setCollection(findCollection(collectionName!));
	}, []);

	const GridList = styled.div`
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 1rem;
		margin-top: 1rem;
	`;

	return (
		<Body>
			<div css={title}> {collection?.name} </div>
			<div> {collection?.description} </div>

			<GridList>
				{collection?.animes.map((anime, index) => {
					return (
						<Card.Base key={index} anime={anime}>
							<Card.Image cover={anime.coverImage.large}></Card.Image>
						</Card.Base>
					);
				})}
			</GridList>
		</Body>
	);
};

export default Folder;
