import styled from "@emotion/styled";
import variable from "../../../../style/variable";

export const BaseContainer = styled.div`
	position: relative;
	cursor: pointer;
	background: ${variable.color.gray![500]};
	border-radius: ${variable.radius.md};
`;

export const BaseBodyRating = styled.div`
	color: ${variable.color.green![500]};
	font-weight: ${variable.font.weight.bold};
	margin-left: ${variable.spacing[2]};
`;

export const BaseHoverContainer = styled.div`
	position: absolute;
	background: ${variable.color.gray![200]};
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

export const BaseHoverImageContainer = styled.div`
	overflow: hidden;
	border-radius-top: ${variable.radius.md};
	position: relative;
`;

export const BaseHoverImage = styled.img`
	border-top-radius: ${variable.radius.md};
	width: 100%;
	height: 150px;
	object-fit: cover;
`;

export const AddToCollectionButton = styled.button`
	padding: ${variable.spacing[2]} ${variable.spacing[3]};
	background: ${variable.color.green![500]};
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
		background: ${variable.color.green![600]};
	}
`;

export const BaseHoverBody = styled.div`
	padding: ${variable.spacing[4]};
	color: ${variable.color.gray![900]};
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

export const BaseHoverTitle = styled.div`
	font-size: ${variable.font.size.base};
	font-weight: ${variable.font.weight.semibold};
	margin-bottom: ${variable.spacing[2]};

	&:hover {
		text-decoration: underline;
	}
`;

export const BaseHoverTextFlexContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const BaseHoverText = styled.div`
	font-size: ${variable.font.size.sm};
	font-weight: ${variable.font.weight.semibold};
`;

export const GenresContainer = styled.div`
	display: flex;
	font-size: ${variable.font.size.sm};
	flex-wrap: wrap;
`;

export const Genre = styled.div`
	padding: ${variable.spacing[1]};
	background: ${variable.color.gray![400]};
	margin: ${variable.spacing[2]} ${variable.spacing[2]} 0 0;
	padding: ${variable.spacing[1]};
`;

export const FlexBox = styled.div`
	display: flex;
	align-items: center;
`;
