// react library
import React from "react";
import styled from "@emotion/styled";

// props
import CardImageProps from "./CardImageProps";

// styles
import variable from "./../../../../style/variable";

export const CardImage: React.FC<CardImageProps> = ({ cover }) => {
	const CardImageWrapper = styled.div`
		overflow: hidden;
		height: 320px;
		border-radius: ${variable.radius.md};
		// margin-bottom: ${variable.spacing[2]};
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
	`;

	const Image = styled.img`
		width: 100%;
		height: 320px;
		cursor: pointer;
		transition: 200ms ease-in-out;
	`;

	return (
		<CardImageWrapper>
			<Image src={cover} />
		</CardImageWrapper>
	);
};

export default CardImage;
