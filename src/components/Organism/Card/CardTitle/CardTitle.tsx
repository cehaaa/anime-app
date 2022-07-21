// react library
import React from "react";
import styled from "@emotion/styled";

// props
import CardTitleProps from "./CardTitleProps";

// styles
import variable from "./../../../../style/variable";

export const CardTitle: React.FC<CardTitleProps> = ({ title }) => {
	const Title = styled.div`
		font-size: ${variable.font.size.base};
		font-weight: ${variable.font.weight.semibold};
	`;

	return <Title> {title} </Title>;
};

export default CardTitle;
