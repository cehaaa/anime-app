/** @jsxImportSource @emotion/react */

// react library
import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

// styles
import variable from "../../../style/variable";

// props
import FooterProps from "./FooterProps";

// components
import Button from "../../Atom/Button/Button";

const Footer: React.FC<FooterProps> = ({ children }) => {
	const Footer = styled.div`
		display: flex;
		justify-content: center;
		align-items: center;
		padding: ${variable.spacing[5]} ${variable.spacing[10]};
		border-top: 1px solid ${variable.color.gray[200]};
		font-weight: ${variable.font.weight.semibold};
	`;

	return (
		<Footer>
			<div>Made with ❤️ by Christian.</div>
		</Footer>
	);
};

export default Footer;
