import Collections from "./../models/Collections";

export class LocalStorage {
	storageName: string;
	collections: Collections[];

	constructor() {
		this.storageName = "anime-app-collections";

		this.collections =
			JSON.parse(localStorage.getItem(this.storageName)!) || [];
	}

	getCollections(): Collections[] {
		return this.collections;
	}

	createNewCollection(name: string, description: string): void {
		const collection = {
			name,
			description,
			animes: [],
		};

		this.collections.push(collection);

		this.save();
	}

	save(): void {
		localStorage.setItem(this.storageName, JSON.stringify(this.collections));

		// if(JSON.parse(localStorage.getItem(this.storageName)))
	}
}

export const ls = new LocalStorage();

export default ls;
