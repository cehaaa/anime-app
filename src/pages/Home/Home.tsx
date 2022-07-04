/** @jsxImportSource @emotion/react */

// react library
import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useQuery } from "@apollo/client";

// garaphql
import { GET_ANIMES } from "../../graphql/Queries";

// props
import HomeProps from "./HomeProps";

// styles
import { title } from "../../style/styles";

// interface
import Anime from "../../models/Anime";

// components
import Body from "../../components/Organism/Body/Body";
import Card from "../../components/Organism/Card/Card";
import Button from "../../components/Atom/Button/Button";
import Modal from "../../components/Organism/Modal/Modal";
import TextField from "../../components/Atom/TextField/TextField";

const Home: React.FC<HomeProps> = () => {
	const { loading, data } = useQuery(GET_ANIMES);

	const [animes, setAnimes] = useState<Anime[]>([]);

	useEffect(() => {
		data && setAnimes(data.Page.media);
	}, [data]);

	const GridList = styled.div`
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 1rem;
		margin-top: 1rem;
	`;

	const LoadingScreen = styled.div`
		display: flex;
		justify-content: center;
		width: 100%;
		align-items: center;
		height: 100vh;
	`;

	return (
		<Body>
			<div css={title}>Tranding Anime</div>
			{loading ? (
				<LoadingScreen>
					<div css={title}>Loading...</div>
				</LoadingScreen>
			) : (
				<GridList>
					{animes.map((anime, index) => {
						return (
							<Card.Base key={index} anime={anime}>
								<Card.Image cover={anime.coverImage.large}></Card.Image>
							</Card.Base>
						);
					})}
				</GridList>
			)}
		</Body>
	);
};

export default Home;
