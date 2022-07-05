import styled from "@emotion/styled";
import variable from "../../../style/variable";

export const InputGroup = styled.div`
	margin-bottom: ${variable.spacing[4]};
`;

export const Label = styled.label`
	font-size: ${variable.font.size.md};
	font-weight: ${variable.font.weight.semibold};
`;

export const RequiredStar = styled.span`
	color: red;
`;

export const TextFieldStyled = styled.input`
	border: none;
	background: ${variable.color.gray[200]};
	border-radius: ${variable.radius.rounded};
	width: 100%;
	padding: ${variable.spacing[3]};
	font-size: ${variable.font.size.base};
	transition-duration: 100ms;
	margin: ${variable.spacing[2]} 0 0 0;
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

	&:hover {
		outline-offset: 2px;
		outline: solid 2px ${variable.color.green[500]};
	}

	&:focus {
		outline-offset: 2px;
		outline: solid 2px ${variable.color.green[500]};
	}
`;
