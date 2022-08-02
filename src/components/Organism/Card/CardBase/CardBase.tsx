/** @jsxImportSource @emotion/react */

// react library
import React, { useState, useEffect } from "react";

// props
import CardBaseProps from "./CardBaseProps";

// styles
import {
	BaseContainer,
	BaseBodyRating,
	BaseHoverContainer,
	BaseHoverImageContainer,
	BaseHoverImage,
	AddToCollectionButton,
	BaseHoverBody,
	BaseHoverTitle,
	BaseHoverTextFlexContainer,
	BaseHoverText,
	GenresContainer,
	Genre,
	FlexBox,
} from "./CardBaseStyled";
import { StarIcon } from "@heroicons/react/solid";
import { title } from "../../../../style/styles";

// components
import Modal from "../../Modal/Modal";
import Button from "../../../Atom/Button/Button";
import List from "../../List/List";

// utils
import ls from "../../../../utils/LocalStorage";

// types
import Collections from "../../../../models/Collections";

export const CardBase: React.FC<CardBaseProps> = ({ children, anime }) => {
	const [isAddToCollectionModalOpen, setIsAddToCollectionModalOpen] =
		useState<boolean>(false);

	const [collections, setCollections] = useState<Collections[]>([]);

	const toogleAddToCollectionModal = () => {
		setIsAddToCollectionModalOpen(!isAddToCollectionModalOpen);
	};

	useEffect(() => {
		setCollections(ls.getCollections());
	}, []);

	const addToCollection = (collectionName: string) => {
		const collection = collections.find(
			collection => collection.name === collectionName
		);

		if (collection) {
			collection.animes.push(anime);

			collections.forEach((collection, index) => {
				if (collection.name === collectionName) {
					collections[index] = collection;
				}
			});
		}

		ls.setCollection(collections);
		setIsAddToCollectionModalOpen(false);
	};

	return (
		<>
			{isAddToCollectionModalOpen && (
				<Modal.Base>
					<Modal.Container>
						<Modal.Header>
							<div css={title}>Create a new collection</div>
							<Button.Close size='sm' onClick={toogleAddToCollectionModal}>
								Close
							</Button.Close>
						</Modal.Header>
						<Modal.Body>
							<List.Container>
								{collections.map((collection, index) => {
									return (
										<List.Item key={index}>
											<div> {collection.name} </div>
											<div>
												<Button.Basic
													size='sm'
													onClick={() => addToCollection(collection.name)}>
													Add to collection
												</Button.Basic>
											</div>
										</List.Item>
									);
								})}
							</List.Container>
						</Modal.Body>
					</Modal.Container>
				</Modal.Base>
			)}

			<BaseContainer>
				<BaseHoverContainer>
					<BaseHoverImageContainer>
						<AddToCollectionButton onClick={toogleAddToCollectionModal}>
							Add to collection
						</AddToCollectionButton>
						<BaseHoverImage src={anime.bannerImage} />
					</BaseHoverImageContainer>

					<BaseHoverBody>
						<BaseHoverTitle> {anime.title.english} </BaseHoverTitle>

						<BaseHoverTextFlexContainer>
							<BaseHoverText> Episodes: {anime.episodes} </BaseHoverText>

							<FlexBox>
								<StarIcon className='icon star' />
								<BaseBodyRating> {anime.averageScore} </BaseBodyRating>
							</FlexBox>
						</BaseHoverTextFlexContainer>

						<GenresContainer>
							{anime.genres.map((genre, index) => {
								return <Genre key={index}> {genre} </Genre>;
							})}
						</GenresContainer>
					</BaseHoverBody>
				</BaseHoverContainer>
				<div>{children}</div>
			</BaseContainer>
		</>
	);
};

export default CardBase;
