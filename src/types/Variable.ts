import Font from "./Font";
import Spacing from "./Spacing";
import Radius from "./Radius";
import Colors from "./Colors";

export type Variable = {
	color: Partial<Colors>;
	font: Font;
	spacing: Spacing;
	radius: Radius;
};

export default Variable;
