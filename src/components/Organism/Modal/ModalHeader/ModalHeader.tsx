// react library
import React from "react";

// props
import ModalHeaderProps from "./ModalHeaderProps";

// styles
import { ModalHeaderStyled } from "./ModalHeaderStyled";

export const ModalHeader: React.FC<ModalHeaderProps> = ({ children }) => {
	return <ModalHeaderStyled>{children}</ModalHeaderStyled>;
};

export default ModalHeader;
