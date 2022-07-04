// react library
import React from "react";
import styled from "@emotion/styled";

// props
import ModalContainerProps from "./ModalContainerProps";

// styles
import variable from "./../../../../style/variable";

const ModalContainer: React.FC<ModalContainerProps> = ({ children }) => {
	const ModalContainer = styled.div`
		background: white;
		border-radius: ${variable.radius.md};
		width: 40%;
		position: relative;
	`;

	return <ModalContainer>{children}</ModalContainer>;
};

// ModalContainer.propTypes = {}

export default ModalContainer;
