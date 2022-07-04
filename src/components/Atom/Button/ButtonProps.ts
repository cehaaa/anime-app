import React from "react";

export interface ButtonProps {
	children?: React.ReactNode;
	onClick?:
		| ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
		| undefined;

	size?: string;
}

export default ButtonProps;
