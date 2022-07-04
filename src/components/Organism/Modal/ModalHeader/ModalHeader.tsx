import styled from "@emotion/styled";
import React from "react";

// props
import ModalHeaderProps from "./ModalHeaderProps";

// styles
import variable from "../../../../style/variable";

export const ModalHeader: React.FC<ModalHeaderProps> = ({ children }) => {
	const ModalHeader = styled.div`
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1px solid ${variable.color.gray[200]};
		padding: ${variable.spacing[5]};
	`;

	return <ModalHeader>{children}</ModalHeader>;
};

export default ModalHeader;
