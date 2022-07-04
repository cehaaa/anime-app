// react library
import React from "react";
import styled from "@emotion/styled";

// props
import ContainerProps from "./ContainerProps";
import variable from "../../../style/variable";

const Container: React.FC<ContainerProps> = ({ children }) => {
	const Container = styled.div`
		width: 66.666667%;
		margin: 0 auto;
		background: ${variable.color.gray[100]};
		color: ${variable.color.gray[800]};
		height: 100%;
	`;

	return <Container>{children}</Container>;
};

export default Container;
