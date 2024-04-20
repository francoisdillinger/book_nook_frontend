import { TrimmedBookType } from "../components/AdminBooks";

export const book: TrimmedBookType = {
	id: "94214347-e2c1-4fa4-872f-2b02dfaccfef",
	bookTitle: "The Alchemist",
	pageCount: 208,
	publishDate: "1988-05-01",
	price: 14.95,
	description:
		"A philosophical book that tells the story of Santiago, an Andalusian shepherd boy who yearns to travel in search of a worldly treasure.",
	inventoryCount: 12,
	isbn: "9780062315007",
	bookReviews: [
		{
			rating: 5,
			review:
				"The Alchemist is an incredible journey of self-discovery and following one's dreams. Highly recommend it!",
			shortReview: "Incredible journey!",
		},
		{
			rating: 4,
			review:
				"The Alchemist is a thought-provoking book that teaches valuable life lessons. It's definitely worth reading.",
			shortReview: "Thought-provoking!",
		},
		{
			rating: 5,
			review:
				"The Alchemist is a masterpiece! It's beautifully written and deeply moving. A must-read for everyone!",
			shortReview: "A masterpiece!",
		},
		{
			rating: 3,
			review:
				"The Alchemist has some good moments, but overall, I found it to be a bit too preachy for my taste.",
			shortReview: "Bit too preachy.",
		},
	],
	author: {
		authorFirstName: "Paulo",
		authorLastName: "Coelho",
	},
	bookCategories: [
		{
			category: {
				categoryName: "Inspirational",
			},
		},
		{
			category: {
				categoryName: "Philosophical Fiction",
			},
		},
		{
			category: {
				categoryName: "Philosophical",
			},
		},
	],
};
