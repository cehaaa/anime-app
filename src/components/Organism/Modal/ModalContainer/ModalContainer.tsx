// react library
import React from "react";

// props
import ModalContainerProps from "./ModalContainerProps";

// styles
import { ModalContainerStyled } from "./ModalContainerStyled";

const ModalContainer: React.FC<ModalContainerProps> = ({ children }) => {
	return <ModalContainerStyled>{children}</ModalContainerStyled>;
};

// ModalContainer.propTypes = {}

export default ModalContainer;
