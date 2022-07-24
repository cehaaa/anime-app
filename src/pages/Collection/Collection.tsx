/** @jsxImportSource @emotion/react */

// react library
import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

// components
import Body from "../../components/Organism/Body/Body";

// props
import CollectionProps from "./CollectionProps";
import Collections from "../../models/Collections";

// styles
import { title } from "../../style/styles";
import variable from "../../style/variable";

// utils
import ls from "../../utils/LocalStorage";

export const Collection: React.FC<CollectionProps> = ({ children }) => {
	const [collections, setCollections] = useState<Collections[]>([]);

	useEffect(() => {
		setCollections(ls.getCollections());
	}, []);

	const CollectionsContainer = styled.div`
		display: flex;
		flex-direction: column;
		height: 100vh;
		> * {
			margin-top: ${variable.spacing[5]};
			text-decoration: none;
		}
	`;

	const CollectionList = styled.div`
		display: flex;
		background: white;
		padding: ${variable.spacing[4]};
		border-radius: ${variable.radius.rounded};
		cursor: pointer;
		transition: 200ms ease-in-out;
		align-items: center;
		justify-content: space-between;
		font-size: ${variable.font.size["base"]};
		font-weight: ${variable.font.weight.bold};
		color: ${variable.color.gray![800]};
		text-decoration: none;

		&:hover {
			transform: translateY(-5px);
		}
	`;

	return (
		<Body>
			<div css={title}>Your Collections</div>
			<CollectionsContainer>
				{collections.map((collection, index) => {
					return (
						<Link to={`/collections/${collection.name}`} key={index}>
							<CollectionList>
								{/* <svg
								xmlns='http://www.w3.org/2000/svg'
								className='folder-icon'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
								strokeWidth={2}>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z'
								/>
							</svg> */}
								<div>{collection.name}</div>
								<div>{collection.animes.length} Anime</div>
							</CollectionList>
						</Link>
					);
				})}
			</CollectionsContainer>
		</Body>
	);
};

export default Collection;
