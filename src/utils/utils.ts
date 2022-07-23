import { LocalStorage } from "./LocalStorage";

// generate random number range
export const randomNumber = (min: number, max: number): number => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

// find specific element in localStorage
export const findCollection = (collectionName: string) => {
	const listOfCollections = new LocalStorage().getCollections();

	return listOfCollections.find(element => element.name === collectionName);
};
