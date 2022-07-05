// react library
import React from "react";

// props
import ModalBodyProps from "./ModalBodyProps";

// styles
import { ModalBodyStyled } from "./ModalBodyStyled";

export const ModalBody: React.FC<ModalBodyProps> = ({ children }) => {
	return <ModalBodyStyled>{children}</ModalBodyStyled>;
};

export default ModalBody;
