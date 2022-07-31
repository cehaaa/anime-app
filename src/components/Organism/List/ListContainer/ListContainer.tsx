// react library
import React from "react";

// props
import ListContainerProps from "./ListContainerProps";

// styled
import { ListContainerStyled } from "./ListContainerStyled";

const ListContainer: React.FC<ListContainerProps> = ({ children }) => {
	return <ListContainerStyled>{children}</ListContainerStyled>;
};

export default ListContainer;
