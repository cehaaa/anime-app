// react library
import React from "react";
import styled from "@emotion/styled";

// props
import TextFieldProps from "./TextFieldProps";

// styles
import variable from "../../../style/variable";

export const TextField: React.FC<TextFieldProps> = ({
	label,
	placeholder,
	required,
	value,
	handleInputChange,
}) => {
	const InputGroup = styled.div`
		margin-bottom: ${variable.spacing[4]};
	`;

	const Label = styled.label`
		font-size: ${variable.font.size.md};
		font-weight: ${variable.font.weight.semibold};
	`;

	const RequiredStar = styled.span`
		color: red;
	`;

	const TextField = styled.input`
		border: none;
		background: ${variable.color.gray[200]};
		border-radius: ${variable.radius.rounded};
		width: 100%;
		padding: ${variable.spacing[3]};
		font-size: ${variable.font.size.base};
		transition-duration: 100ms;
		margin: ${variable.spacing[2]} 0 0 0;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

		&:hover {
			outline-offset: 2px;
			outline: solid 2px ${variable.color.green[500]};
		}

		&:focus {
			outline-offset: 2px;
			outline: solid 2px ${variable.color.green[500]};
		}
	`;

	return (
		<>
			<InputGroup>
				<Label htmlFor={label}>
					{label}
					{required && <RequiredStar>*</RequiredStar>}
				</Label>
				<div>
					<TextField
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
