// react library
import React from "react";

// props
import VerticalCollectionListProps from "./VerticalCollectionListProps";

// styled
import { VerticalCollectionListStyled } from "./VerticalCollectionListStyled";

const VerticalCollectionList: React.FC<VerticalCollectionListProps> = ({
	children,
}) => {
	return (
		<VerticalCollectionListStyled>{children}</VerticalCollectionListStyled>
	);
};

export default VerticalCollectionList;
