// react library
import React from "react";

// props
import ModalBaseProps from "./ModalBaseProps";

// styles
import { ModalBaseStyled } from "./ModalBaseStyled";

export const ModalBase: React.FC<ModalBaseProps> = ({ children }) => {
	return <ModalBaseStyled>{children}</ModalBaseStyled>;
};

export default ModalBase;
