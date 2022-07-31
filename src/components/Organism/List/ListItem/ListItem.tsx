// react library
import React from "react";

// props
import ListItemProps from "./ListItemProps";

// styled
import { ListItemStyled } from "./ListItemStyled";

const ListItem: React.FC<ListItemProps> = ({ children }) => {
	return <ListItemStyled>{children}</ListItemStyled>;
};

export default ListItem;
