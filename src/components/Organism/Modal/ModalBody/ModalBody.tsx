// react library
import React from "react";
import styled from "@emotion/styled";

// props
import ModalBodyProps from "./ModalBodyProps";

// styles
import variable from "./../../../../style/variable";

export const ModalBody: React.FC<ModalBodyProps> = ({ children }) => {
	const ModalBody = styled.div`
		padding: ${variable.spacing[5]};
	`;

	return <ModalBody>{children}</ModalBody>;
};

export default ModalBody;
