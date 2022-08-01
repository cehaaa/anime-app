import styled from "@emotion/styled";

import variable from "../../../../style/variable";

export const VerticalCollectionContainerStyled = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;
	> * {
		margin-top: ${variable.spacing[5]};
		text-decoration: none;
	}
`;
