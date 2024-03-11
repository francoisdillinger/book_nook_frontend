export type BooksType = {
	data: {
		books: {
			bookTitle: string;
			pageCount: number;
			publishDate: string;
			price: number;
			description: string;
			inventoryCount: number;
			isbn: string;
			author: {
				authorFirstName: string;
				authorLastName: string;
			};
		}[];
	};
};

export const books: BooksType = {
	data: {
		books: [
			{
				bookTitle: "1984",
				pageCount: 328,
				publishDate: "1949-06-08",
				price: 19.84,
				description: "A dystopian novel by English novelist George Orwell.",
				inventoryCount: 120,
				isbn: "978-0451524935",
				author: {
					authorFirstName: "George",
					authorLastName: "Orwell",
				},
			},
			{
				bookTitle: "Animal Farm",
				pageCount: 112,
				publishDate: "1945-08-17",
				price: 12.99,
				description:
					"A fairy story by George Orwell, portraying a revolution by farm animals against humans.",
				inventoryCount: 100,
				isbn: "978-0451526342",
				author: {
					authorFirstName: "George",
					authorLastName: "Orwell",
				},
			},
			{
				bookTitle: "To the Lighthouse",
				pageCount: 209,
				publishDate: "1927-05-05",
				price: 15.2,
				description:
					"The Ramsays and their eight children vacation with an assortment of scholarly and artistic houseguests by the sea.",
				inventoryCount: 85,
				isbn: "978-0156907392",
				author: {
					authorFirstName: "Virginia",
					authorLastName: "Woolf",
				},
			},
			{
				bookTitle: "Mrs Dalloway",
				pageCount: 194,
				publishDate: "1925-05-14",
				price: 13.95,
				description:
					"The novel details a day in the life of Clarissa Dalloway, a fictional high-society woman in post–First World War England.",
				inventoryCount: 75,
				isbn: "978-0156628709",
				author: {
					authorFirstName: "Virginia",
					authorLastName: "Woolf",
				},
			},
			{
				bookTitle: "The Old Man and The Sea",
				pageCount: 128,
				publishDate: "1952-09-01",
				price: 15,
				description:
					"The story of an old Cuban fisherman and his supreme ordeal: a relentless, agonizing battle with a giant marlin far out in the Gulf Stream.",
				inventoryCount: 100,
				isbn: "978-0684801223",
				author: {
					authorFirstName: "Ernest",
					authorLastName: "Hemingway",
				},
			},
			{
				bookTitle: "A Farewell to Arms",
				pageCount: 332,
				publishDate: "1929-10-28",
				price: 17,
				description:
					"A novel written by Ernest Hemingway set during the Italian campaign of World War I.",
				inventoryCount: 80,
				isbn: "978-0684801469",
				author: {
					authorFirstName: "Ernest",
					authorLastName: "Hemingway",
				},
			},
			{
				bookTitle: "Ulysses",
				pageCount: 730,
				publishDate: "1922-02-02",
				price: 24.95,
				description:
					"The novel imitates registers of centuries of English literature and is highly allusive.",
				inventoryCount: 60,
				isbn: "978-0679722762",
				author: {
					authorFirstName: "James",
					authorLastName: "Joyce",
				},
			},
			{
				bookTitle: "Finnegans Wake",
				pageCount: 628,
				publishDate: "1939-05-04",
				price: 22.95,
				description:
					"A work of fiction by Irish writer James Joyce, significant for its experimental style.",
				inventoryCount: 40,
				isbn: "978-0141181264",
				author: {
					authorFirstName: "James",
					authorLastName: "Joyce",
				},
			},
			{
				bookTitle: "Wuthering Heights",
				pageCount: 464,
				publishDate: "1847-12-01",
				price: 14.99,
				description:
					"A novel by Emily Bronte, it follows the life of Heathcliff, a mysterious gypsy-like person.",
				inventoryCount: 50,
				isbn: "978-0553212587",
				author: {
					authorFirstName: "Emily",
					authorLastName: "Bronte",
				},
			},
			{
				bookTitle: "Pride and Prejudice",
				pageCount: 279,
				publishDate: "1813-01-28",
				price: 9.99,
				description: "A romantic novel of manners written by Jane Austen.",
				inventoryCount: 120,
				isbn: "978-1503290563",
				author: {
					authorFirstName: "Jane",
					authorLastName: "Austen",
				},
			},
			{
				bookTitle: "Emma",
				pageCount: 368,
				publishDate: "1815-12-23",
				price: 12.99,
				description:
					"A novel about youthful hubris and romantic misunderstandings. It is set in the fictional country village of Highbury and the surrounding estates of Hartfield, Randalls, and Donwell Abbey.",
				inventoryCount: 70,
				isbn: "978-0141439587",
				author: {
					authorFirstName: "Jane",
					authorLastName: "Austen",
				},
			},
			{
				bookTitle: "Great Expectations",
				pageCount: 544,
				publishDate: "1861-08-01",
				price: 10.99,
				description:
					"The novel, written by Charles Dickens, is a bildungsroman, a coming-of-age story, and it is a classic work of Victorian literature.",
				inventoryCount: 85,
				isbn: "978-0141439563",
				author: {
					authorFirstName: "Charles",
					authorLastName: "Dickens",
				},
			},
			{
				bookTitle: "Oliver Twist",
				pageCount: 368,
				publishDate: "1838-02-01",
				price: 11.99,
				description:
					"The novel tells the story of an orphan boy and his experiences with crime and hardship in London.",
				inventoryCount: 65,
				isbn: "978-0486424538",
				author: {
					authorFirstName: "Charles",
					authorLastName: "Dickens",
				},
			},
			{
				bookTitle: "Adventures of Huckleberry Finn",
				pageCount: 224,
				publishDate: "1884-12-10",
				price: 9.99,
				description:
					"A novel by Mark Twain, it is commonly named among the Great American Novels. The work is among the first in major American literature to be written throughout in vernacular English.",
				inventoryCount: 90,
				isbn: "978-0486449900",
				author: {
					authorFirstName: "Mark",
					authorLastName: "Twain",
				},
			},
			{
				bookTitle: "The Adventures of Tom Sawyer",
				pageCount: 184,
				publishDate: "1876-06-01",
				price: 8.99,
				description:
					"The novel is set in the 1840s in the town of St. Petersburg, which is based on Hannibal, Missouri where Twain lived as a boy.",
				inventoryCount: 80,
				isbn: "978-0486400778",
				author: {
					authorFirstName: "Mark",
					authorLastName: "Twain",
				},
			},
			{
				bookTitle: "To Kill a Mockingbird",
				pageCount: 281,
				publishDate: "1960-07-11",
				price: 14.99,
				description:
					"The novel is renowned for its warmth and humor, despite dealing with serious issues of rape and racial inequality.",
				inventoryCount: 120,
				isbn: "978-0446310789",
				author: {
					authorFirstName: "Harper",
					authorLastName: "Lee",
				},
			},
			{
				bookTitle: "Go Set a Watchman",
				pageCount: 278,
				publishDate: "2015-07-14",
				price: 15.99,
				description:
					"Written in the mid-1950s, the novel was published by Harper Lee in 2015, as a follow-up to To Kill a Mockingbird.",
				inventoryCount: 70,
				isbn: "978-0062409850",
				author: {
					authorFirstName: "Harper",
					authorLastName: "Lee",
				},
			},
			{
				bookTitle: "The Catcher in the Rye",
				pageCount: 277,
				publishDate: "1951-07-16",
				price: 8.99,
				description:
					"The novel's protagonist, Holden Caulfield, has become an icon for teenage rebellion and angst.",
				inventoryCount: 95,
				isbn: "978-7543321724",
				author: {
					authorFirstName: "J.D.",
					authorLastName: "Salinger",
				},
			},
			{
				bookTitle: "Nine Stories",
				pageCount: 198,
				publishDate: "1953-04-06",
				price: 10.99,
				description:
					"A collection of short stories by J.D. Salinger. It includes two of his most famous short stories, 'A Perfect Day for Bananafish' and 'For Esmé – with Love and Squalor'.",
				inventoryCount: 75,
				isbn: "978-0316769495",
				author: {
					authorFirstName: "J.D.",
					authorLastName: "Salinger",
				},
			},
			{
				bookTitle: "Franny and Zooey",
				pageCount: 201,
				publishDate: "1961-09-12",
				price: 12.99,
				description:
					"The book comprises his short story 'Franny' and novella 'Zooey', both of which revolve around the two youngest members of the Glass family.",
				inventoryCount: 65,
				isbn: "978-0316769495",
				author: {
					authorFirstName: "J.D.",
					authorLastName: "Salinger",
				},
			},
		],
	},
};
