import { TrimmedBookType } from "../components/AdminBooks";

export const book: TrimmedBookType = {
	id: "94214347-e2c1-4fa4-872f-2b02dfaccfef",
	bookTitle: "The Alchemist",
	pageCount: 208,
	publishDate: "1988-05-01",
	price: 14.95,
	description:
		"A philosophical book that tells the story of Santiago, an Andalusian shepherd boy who yearns to travel in search of a worldly treasure.",
	longDescription:
		"The Alchemist by Paulo Coelho is a timeless tale of adventure, self-discovery, and the pursuit of one's dreams. Set in the exotic landscapes of Andalusia, Spain, the story follows Santiago, a young shepherd boy who embarks on a journey to find his Personal Legend, his true calling in life. Along the way, Santiago encounters a series of obstacles and challenges that test his courage, determination, and faith in the universe.\n\nGuided by a recurring dream and the wisdom of a mysterious king, Santiago learns the importance of listening to his heart and following the signs that lead him toward his destiny. As he travels through deserts, oases, and bustling marketplaces, Santiago encounters a colorful cast of characters who impart valuable lessons and insights, including a wise alchemist who teaches him the secrets of the universe.",
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
