// react library
import React from "react";

// props
import TextFieldProps from "./TextFieldProps";

// styled component
import {
	InputGroup,
	Label,
	RequiredStar,
	TextFieldStyled,
} from "./TextFieldStyled";

export const TextField: React.FC<TextFieldProps> = ({
	label,
	placeholder,
	required,
	value,
	handleInputChange,
}) => {
	return (
		<>
			<InputGroup>
				<Label htmlFor={label}>
					{label}
					{required && <RequiredStar>*</RequiredStar>}
				</Label>
				<div>
					<TextFieldStyled
						type='text'
						id={label}
						placeholder={placeholder}
						value={value}
						onChange={handleInputChange}
					/>
				</div>
			</InputGroup>
		</>
	);
};

export default TextField;
