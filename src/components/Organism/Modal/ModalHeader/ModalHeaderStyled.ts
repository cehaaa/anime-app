import styled from "@emotion/styled";

import variable from "../../../../style/variable";

export const ModalHeaderStyled = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1px solid ${variable.color.gray![200]};
	padding: ${variable.spacing[5]};
`;
