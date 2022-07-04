// react library
import React from "react";
import styled from "@emotion/styled";

// props
import ButtonProps from "./ButtonProps";

// styles
import variable from "../../../style/variable";

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
	const Button = styled.button`
		border: none;
		background: ${variable.color.green[600]};
		color: white;
		padding: ${variable.spacing[4]} ${variable.spacing[5]};
		font-size: ${variable.font.size.sm};
		font-weight: ${variable.font.weight.medium};
		transition-duration: 200ms;
		cursor: pointer;
		border-radius: 0.25rem;
		font-size: ${variable.font.size.base};

		&:hover {
			background: ${variable.color.green[700]};
		}
	`;

	return (
		<Button type='submit' onClick={onClick}>
			{children}
		</Button>
	);
};

export default Button;
