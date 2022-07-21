// react library
import React from "react";
import styled from "@emotion/styled";

// props
import ButtonProps from "../ButtonProps";

// styles
import variable from "../../../../style/variable";

const BasicButton: React.FC<ButtonProps> = ({
	children,
	onClick,
	size = "base",
}) => {
	const buttonSizeClass = () => {
		switch (size) {
			case "sm":
				return `${variable.spacing[3]} ${variable.spacing[4]}`;
			case "base":
				return `${variable.spacing[4]} ${variable.spacing[5]}`;
			// case "lg":
			// 	return "font-size: " + variable.font.size.lg;
			default:
				return `${variable.spacing[4]} ${variable.spacing[5]}`;
		}
	};

	const BasicButton = styled.button`
		border: none;
		background: ${variable.color.green![600]};
		color: white;
		padding: ${buttonSizeClass()};
		font-size: ${variable.font.size.sm};
		font-weight: ${variable.font.weight.medium};
		transition-duration: 200ms;
		cursor: pointer;
		border-radius: 0.25rem;
		font-size: ${variable.font.size.base};

		&:hover {
			background: ${variable.color.green![700]};
		}
	`;

	return (
		<BasicButton type='submit' onClick={onClick}>
			{children}
		</BasicButton>
	);
};

export default BasicButton;
