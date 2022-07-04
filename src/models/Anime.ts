import Title from "../types/Title";
import CoverImage from "../types/CoverImage";

export interface Anime {
	id: number;
	title: Title;
	coverImage: CoverImage;
	bannerImage: string;
	episodes: number;
	averageScore: number;
	startDate: {
		year: number;
	};
	countryOfOrigin: string;
	genres: string[];
	volumes: number;
}

export default Anime;
