/** @jsxImportSource @emotion/react */

// react library
import React, { useState } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Link } from "react-router-dom";

// styles
import variable from "../../../style/variable";
import { title } from "../../../style/styles";

// props
import HeaderProps from "./HeaderProps";

// components
import Button from "../../Atom/Button/Button";
import Modal from "../Modal/Modal";

import TextField from "../../Atom/TextField/TextField";

const Header: React.FC<HeaderProps> = () => {
	const [isCreateNewCollectionModal, setIsCreateNewCollectionModal] =
		useState<boolean>(false);

	const [collectionTitle, setCollectionTitle] = useState<string>("");

	const Header = styled.div`
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: ${variable.spacing[5]} ${variable.spacing[10]};
		box-shadow: 1px 4px 33px -11px rgba(0, 0, 0, 0.34);
		-webkit-box-shadow: 1px 4px 33px -11px rgba(0, 0, 0, 0.34);
		-moz-box-shadow: 1px 4px 33px -11px rgba(0, 0, 0, 0.34);
	`;

	const headerTitle = css`
		font-size: ${variable.font.size["2xl"]};
		font-weight: ${variable.font.weight.bold};
		color: ${variable.color.gray[800]};
		text-decoration: none;
	`;

	const toogleCreateNewCollectionModal = () => {
		setIsCreateNewCollectionModal(!isCreateNewCollectionModal);
	};

	return (
		<>
			{isCreateNewCollectionModal && (
				<Modal.Base>
					<Modal.Container>
						<Modal.Header>
							<div css={title}>Create a new collection</div>
							<Button.Close onClick={toogleCreateNewCollectionModal}>
								Close
							</Button.Close>
						</Modal.Header>
						<Modal.Body>
							<TextField
								label='Name'
								name='title'
								placeholder='Title'
								required
								value={collectionTitle}
								handleInputChange={e => setCollectionTitle(e.target.value)}
							/>

							<div>{collectionTitle}</div>

							{/* <TextField
								label='Description'
								name='description'
								placeholder='Description'
								value={collectionTitle}
								handleInputChange={e => setCollectionTitle(e.target.value)}
							/> */}

							<Button.Basic size='sm'>Create</Button.Basic>
						</Modal.Body>
					</Modal.Container>
				</Modal.Base>
			)}

			<Header>
				<Link to='/' css={headerTitle}>
					Anime App
				</Link>

				<div
					css={{
						display: "flex",
					}}>
					<div
						css={{
							marginRight: variable.spacing[5],
						}}>
						<Button.Basic onClick={toogleCreateNewCollectionModal}>
							Make Collection
						</Button.Basic>
					</div>
					<Link to='/collections'>
						<Button.Basic>View my collection</Button.Basic>
					</Link>
				</div>
			</Header>
		</>
	);
};

export default Header;
