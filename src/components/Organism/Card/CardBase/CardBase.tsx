/** @jsxImportSource @emotion/react */

// react library
import React, { useState } from "react";

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

export const CardBase: React.FC<CardBaseProps> = ({ children, anime }) => {
	const [isAddToCollectionModalOpen, setIsAddToCollectionModalOpen] =
		useState<boolean>(false);

	const toogleAddToCollectionModal = () => {
		setIsAddToCollectionModalOpen(!isAddToCollectionModalOpen);
	};

	return (
		<>
			{isAddToCollectionModalOpen && (
				<Modal.Base>
					<Modal.Container>
						<Modal.Header>
							<div css={title}>Create a new collection</div>
							<Button.Close onClick={toogleAddToCollectionModal}>
								Close
							</Button.Close>
						</Modal.Header>
						<Modal.Body>
							<div>List</div>
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
