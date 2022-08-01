import styled from "@emotion/styled";

import variable from "../../../../style/variable";

export const VerticalCollectionListStyled = styled.div`
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
