// react library
import React from "react";
import styled from "@emotion/styled";

// props
import ButtonProps from "../ButtonProps";

// styles
import variable from "../../../../style/variable";

// button utils
import { buttonSize } from "../ButtonUtils";

const CloseButton: React.FC<ButtonProps> = ({
	children,
	onClick,
	size = "base",
}) => {
	const CloseButton = styled.button`
		border: none;
		background: ${variable.color.gray![200]};
		color: ${variable.color.gray![500]};
		padding: ${buttonSize(size)};
		font-size: ${variable.font.size.sm};
		transition-duration: 200ms;
		cursor: pointer;
		border-radius: 0.25rem;
		font-size: ${variable.font.size.base};

		&:hover {
			background: ${variable.color.gray![300]};
		}
	`;

	return (
		<CloseButton type='submit' onClick={onClick}>
			{children}
		</CloseButton>
	);
};

export default CloseButton;
