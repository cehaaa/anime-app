// react librart
import React from "react";

// props
import VerticalCollectionContainerProps from "./VerticalCollectionContainerProps";

import { VerticalCollectionContainerStyled } from "./VerticalCollectionContainerStyled";

export const VerticalCollectionContainer: React.FC<
	VerticalCollectionContainerProps
> = ({ children }) => {
	return (
		<VerticalCollectionContainerStyled>
			{children}
		</VerticalCollectionContainerStyled>
	);
};

export default VerticalCollectionContainer;
