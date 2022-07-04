// react library
import React from "react";
import styled from "@emotion/styled";

// props
import ModalBaseProps from "./ModalBaseProps";

// styles
import variable from "./../../../../style/variable";

export const ModalBase: React.FC<ModalBaseProps> = ({ children }) => {
	const ModalBase = styled.div`
		position: absolute;
		background: rgba(107, 114, 128, 0.5);
		width: 100%;
		height: 100%;
		z-index: 100;
		top: 0;
		left: 0;
		display: flex;
		justify-content: center;
		align-items: center;
	`;

	return <ModalBase>{children}</ModalBase>;
};

export default ModalBase;
