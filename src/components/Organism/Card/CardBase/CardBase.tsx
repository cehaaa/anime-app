// react library
import React from "react";
import styled from "@emotion/styled";

// props
import CardBaseProps from "./CardBaseProps";

// styles
import variable from "./../../../../style/variable";

import { StarIcon } from "@heroicons/react/solid";

export const CardBase: React.FC<CardBaseProps> = ({ children, anime }) => {
	const BaseContainer = styled.div`
		position: relative;
		cursor: pointer;
		background: ${variable.color.gray[500]};
		border-radius: ${variable.radius.md};
	`;

	const BaseBodyRating = styled.div`
		color: ${variable.color.green[500]};
		font-weight: ${variable.font.weight.bold};
		margin-left: ${variable.spacing[2]};
	`;

	const BaseHoverContainer = styled.div`
		position: absolute;
		background: ${variable.color.gray[200]};
		z-index: 1;
		width: 260px;
		height: 320px;
		opacity: 0;
		top: -5px;
		right: -26px;
		border-radius: ${variable.radius.md};
		color: white;
		transition: 200ms ease-in-out;
		overflow: hidden;
		transform: scale(0.8);

		&:hover {
			opacity: 1;
			transform: scale(1.1);
		}
	`;

	const BaseHoverImageContainer = styled.div`
		overflow: hidden;
		border-radius-top: ${variable.radius.md};
		position: relative;
	`;

	const BaseHoverImage = styled.img`
		border-top-radius: ${variable.radius.md};
		width: 100%;
		height: 150px;
		object-fit: cover;
	`;

	const AddToCollectionButton = styled.button`
		padding: ${variable.spacing[2]} ${variable.spacing[3]};
		background: ${variable.color.green[500]};
		position: absolute;
		bottom: 0;
		right: 0;
		border: 0;
		cursor: pointer;
		color: white;
		duration: 200ms;
		margin: ${variable.spacing[3]} ${variable.spacing[2]};
		border-radius: ${variable.radius.rounded};

		&:hover {
			background: ${variable.color.green[600]};
		}
	`;

	const BaseHoverBody = styled.div`
		padding: ${variable.spacing[4]};
		color: ${variable.color.gray[900]};
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	`;

	const BaseHoverTitle = styled.div`
		font-size: ${variable.font.size.md};
		font-weight: ${variable.font.weight.semibold};
		margin-bottom: ${variable.spacing[2]};

		&:hover {
			text-decoration: underline;
		}
	`;

	const BaseHoverTextFlexContainer = styled.div`
		display: flex;
		align-items: center;
		justify-content: space-between;
	`;

	const BaseHoverText = styled.div`
		font-size: ${variable.font.size.sm};
		font-weight: ${variable.font.weight.semibold};
	`;

	const GenresContainer = styled.div`
		display: flex;
		font-size: ${variable.font.size.sm};
		flex-wrap: wrap;
	`;

	const Genre = styled.div`
		padding: ${variable.spacing[1]};
		background: ${variable.color.gray[400]};
		margin: ${variable.spacing[2]} ${variable.spacing[2]} 0 0;
		padding: ${variable.spacing[1]};
	`;

	const FlexBox = styled.div`
		display: flex;
		align-items: center;
	`;

	const openAddToCollectionModal = () => {
		const isAddToCollectionModalOpen = true;
	};

	return (
		<BaseContainer>
			<BaseHoverContainer>
				<BaseHoverImageContainer>
					<AddToCollectionButton onClick={openAddToCollectionModal}>
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
	);
};

export default CardBase;
