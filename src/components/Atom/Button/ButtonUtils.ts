import variable from "../../../style/variable";

export const buttonSize = (size: string) => {
	switch (size) {
		case "sm":
			return `${variable.spacing[2]} ${variable.spacing[3]}`;
		case "base":
			return `${variable.spacing[4]} ${variable.spacing[5]}`;
		default:
			return `${variable.spacing[4]} ${variable.spacing[5]}`;
	}
};
