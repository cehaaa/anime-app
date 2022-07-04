import { gql } from "@apollo/client";

import { randomNumber } from "./../utils/utils";

// Page(page: ${randomNumber(1, 50)}, perPage: 10) {
export const GET_ANIMES = gql`
	{
    Page(page: ${randomNumber(1, 3)}, perPage: 10) {
			media(type: ANIME) {
				id
				title {
					romaji
					english
					native
					userPreferred
				}
				coverImage {
					extraLarge
					large
					medium
					color
				}
				bannerImage
				episodes
				averageScore
				startDate {
					year
				}
				countryOfOrigin
				genres
				volumes
			}
		}
	}
`;

// export const GET_ANIME = gql``;
