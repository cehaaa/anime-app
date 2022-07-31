import styled from "@emotion/styled";

import variable from "../../../../style/variable";

export const ListItemStyled = styled.div`
	display: flex;
	padding: ${variable.spacing[3]} 0;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1px solid ${variable.color.gray![200]};

	> div {
		font-size: ${variable.font.size["base"]};
		font-weight: ${variable.font.weight.bold};
		color: ${variable.color.gray![800]};
	}
`;
