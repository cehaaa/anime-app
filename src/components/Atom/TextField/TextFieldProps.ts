export interface TextFieldProps {
	label: string;
	name: string;
	placeholder: string;
	required?: boolean;
	value: string;
	handleInputChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default TextFieldProps;
