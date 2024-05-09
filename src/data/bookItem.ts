import { TrimmedBookType } from "../components/AdminBooks";

export const book: TrimmedBookType = {
	id: "94214347-e2c1-4fa4-872f-2b02dfaccfef",
	bookTitle: "The Alchemist",
	pageCount: 208,
	publishDate: "1988-05-01",
	price: 14.95,
	shortDescription:
		"A philosophical book that tells the story of Santiago, an Andalusian shepherd boy who yearns to travel in search of a worldly treasure.",
	longDescription:
		"\"The Alchemist\" is a spellbinding tale of a young Andalusian shepherd named Santiago who yearns for adventure and treasures beyond the mundane routine of his pastoral life. Paulo Coelho's masterpiece takes you on an enchanting journey of self-discovery, as Santiago dreams of a hidden treasure near the Egyptian pyramids. Guided by a mysterious dream interpreter and a series of omens, Santiago decides to defy his fate and follow his dream, setting off on an expedition from his native Spain to the exotic markets of Tangiers and across the Egyptian desert. \n\nThe narrative is a rich tapestry of encounters and experiences that Santiago faces along his path. He meets an ageless alchemist who guides him towards spiritual enlightenment, a beautiful Englishwoman who shares his love for the desert, and a wise king who instills in him the importance of following one's Personal Legend. The novel interweaves elements of magic, mysticism, and philosophy, subtly alluding to the timeless wisdom of listening to our hearts and recognizing opportunity as it unfolds before us. \n\n\"The Alchemist\" is not just a novel; it's a journey of self-discovery, a guide to following your heart and fulfilling your destiny. It celebrates the idea that the universe conspires in helping those in pursuit of their dreams. Every twist and turn in Santiago's journey symbolizes life's trials and tribulations, teaching invaluable lessons about hope, love, and self-belief. Coelho's evocative prose and profound wisdom make \"The Alchemist\" a truly transformative reading experience that will certainly touch the hearts of those who dare to dream.",
	inventoryCount: 12,
	isbn: "9780062315007",
	bookReviews: [
		{
			rating: 5,
			review:
				"The Alchemist is an incredible journey of self-discovery and following one's dreams. Highly recommend it!",
			shortReview: "Incredible journey!",
			user: {
				userName: "booklover1",
			},
		},
		{
			rating: 4,
			review:
				"The Alchemist is a thought-provoking book that teaches valuable life lessons. It's definitely worth reading.",
			shortReview: "Thought-provoking!",
			user: {
				userName: "bibliophile",
			},
		},
		{
			rating: 5,
			review:
				"The Alchemist is a masterpiece! It's beautifully written and deeply moving. A must-read for everyone!",
			shortReview: "A masterpiece!",
			user: {
				userName: "avidreader7",
			},
		},
		{
			rating: 3,
			review:
				"The Alchemist has some good moments, but overall, I found it to be a bit too preachy for my taste.",
			shortReview: "Bit too preachy.",
			user: {
				userName: "litlover88",
			},
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
