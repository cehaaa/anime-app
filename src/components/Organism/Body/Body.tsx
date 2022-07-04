// react library
import React from "react";
import styled from "@emotion/styled";

// props
import BodyProps from "./BodyProps";

// styles
import variable from "../../../style/variable";

export const Body: React.FC<BodyProps> = ({ children }) => {
	const Body = styled.div`
		padding: ${variable.spacing[5]} ${variable.spacing[10]};
		// height: 100vh;
	`;

	return <Body>{children}</Body>;
};

export default Body;
