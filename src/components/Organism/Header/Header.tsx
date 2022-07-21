/** @jsxImportSource @emotion/react */

// react library
import React, { useState } from "react";
import { Link } from "react-router-dom";

// styles
import variable from "../../../style/variable";
import { title } from "../../../style/styles";
import { HeaderStyled, headerTitle } from "./HeaderStyled";

// props
import HeaderProps from "./HeaderProps";

// components
import Button from "../../Atom/Button/Button";
import Modal from "../Modal/Modal";
import TextField from "../../Atom/TextField/TextField";

// utils
import ls from "../../../utils/LocalStorage";

const Header: React.FC<HeaderProps> = () => {
	const [isCreateNewCollectionModal, setIsCreateNewCollectionModal] =
		useState<boolean>(false);

	const [collectionTitle, setCollectionTitle] = useState<string>("");
	const [collectionDescription, setCollectionDescription] =
		useState<string>("");

	const toogleCreateNewCollectionModal = () => {
		setIsCreateNewCollectionModal(!isCreateNewCollectionModal);
	};

	const createNewCollection = () => {
		ls.createNewCollection(collectionTitle, collectionDescription);
		// console.log(collectionTitle, collectionDescription);
		alert("Collection created successfully");

		setIsCreateNewCollectionModal(false);
		setCollectionTitle("");
		setCollectionDescription("");
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

							<TextField
								label='Description'
								name='description'
								placeholder='Description'
								value={collectionDescription}
								handleInputChange={e =>
									setCollectionDescription(e.target.value)
								}
							/>
							<Button.Basic size='sm' onClick={createNewCollection}>
								Create
							</Button.Basic>
						</Modal.Body>
					</Modal.Container>
				</Modal.Base>
			)}

			<HeaderStyled>
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
			</HeaderStyled>
		</>
	);
};

export default Header;
