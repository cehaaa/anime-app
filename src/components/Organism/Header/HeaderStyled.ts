import styled from "@emotion/styled";
import { css } from "@emotion/react";

import variable from "../../../style/variable";

export const HeaderStyled = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: ${variable.spacing[5]} ${variable.spacing[10]};
	box-shadow: 1px 4px 33px -11px rgba(0, 0, 0, 0.34);
	-webkit-box-shadow: 1px 4px 33px -11px rgba(0, 0, 0, 0.34);
	-moz-box-shadow: 1px 4px 33px -11px rgba(0, 0, 0, 0.34);
`;

export const headerTitle = css`
	font-size: ${variable.font.size["2xl"]};
	font-weight: ${variable.font.weight.bold};
	color: ${variable.color.gray![800]};
	text-decoration: none;
`;
