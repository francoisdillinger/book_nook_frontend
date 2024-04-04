import dracula from "../assets/dracula.jpg";
import frankenstein from "../assets/frankenstein.jpg";
import norseGods from "../assets/norse_mythology.jpg";

// export const books = [
// 	{ image: dracula, title: "Dracula", price: "$5.99" },
// 	{ image: frankenstein, title: "Frankenstein", price: "$7.99" },
// 	{ image: norseGods, title: "Norse Gods", price: "$8.99" },
// 	{ image: dracula, title: "Dracula", price: "$5.99" },
// 	{ image: frankenstein, title: "Frankenstein", price: "$7.99" },
// 	{ image: norseGods, title: "Norse Gods", price: "$8.99" },
// 	{ image: dracula, title: "Dracula", price: "$5.99" },
// 	{ image: frankenstein, title: "Frankenstein", price: "$7.99" },
// 	{ image: norseGods, title: "Norse Gods", price: "$8.99" },
// 	{ image: dracula, title: "Dracula", price: "$5.99" },
// ];

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
		}[];
	};
};

export const books: BooksType = {
	data: {
		books: [
			{
				bookTitle: "The Alchemist",
				pageCount: 208,
				publishDate: "1988-05-01",
				price: 14.95,
				description:
					"A philosophical book that tells the story of Santiago, an Andalusian shepherd boy who yearns to travel in search of a worldly treasure.",
				inventoryCount: 12,
				isbn: "9780062315007",
			},
			{
				bookTitle: "Pride and Prejudice",
				pageCount: 432,
				publishDate: "1813-01-28",
				price: 9.99,
				description:
					"The novel follows the character development of Elizabeth Bennet, the dynamic protagonist, who learns about the repercussions of hasty judgments and comes to appreciate the difference between superficial goodness and actual goodness.",
				inventoryCount: 74,
				isbn: "9781503290563",
			},
			{
				bookTitle: "Adventures of Huckleberry Finn",
				pageCount: 366,
				publishDate: "1884-12-10",
				price: 8.99,
				description:
					"Direct sequel to The Adventures of Tom Sawyer. The book is noted for its colorful description of people and places along the Mississippi River.",
				inventoryCount: 81,
				isbn: "9780486400778",
			},
			{
				bookTitle: "Mrs. Dalloway",
				pageCount: 194,
				publishDate: "1925-05-14",
				price: 7.99,
				description:
					"Details a day in the life of Clarissa Dalloway, a fictional high-society woman in post�First World War England. It is one of Woolf's best-known novels.",
				inventoryCount: 87,
				isbn: "9780156628709",
			},
			{
				bookTitle: "Anna Karenina",
				pageCount: 864,
				publishDate: "1877-04-01",
				price: 12.99,
				description:
					"Tolstoy's Anna Karenina tells of the doomed love affair between the sensuous and rebellious Anna and the dashing officer, Count Vronsky.",
				inventoryCount: 67,
				isbn: "9781400079988",
			},
			{
				bookTitle: "Warrior of the Light",
				pageCount: 160,
				publishDate: "2003-03-30",
				price: 16.99,
				description:
					"A manual that teaches the reader, through stories and reflections, how to embrace the warrior of the light within themselves.",
				inventoryCount: 36,
				isbn: "9780060527983",
			},
			{
				bookTitle: "Emma",
				pageCount: 544,
				publishDate: "1815-12-25",
				price: 11.99,
				description:
					"A novel about youthful hubris and the perils of misconstrued romance, the story explores the concerns and difficulties of genteel women living in Georgian�Regency England.",
				inventoryCount: 41,
				isbn: "9780141439587",
			},
			{
				bookTitle: "Life on the Mississippi",
				pageCount: 624,
				publishDate: "1883-01-01",
				price: 13.95,
				description:
					"A memoir of Twain's experiences as a steamboat pilot on the Mississippi River before the American Civil War, and a travel book, recounting his trip down the Mississippi River from St. Louis to New Orleans many years after the War.",
				inventoryCount: 6,
				isbn: "9780486414263",
			},
			{
				bookTitle: "Orlando",
				pageCount: 256,
				publishDate: "1928-10-11",
				price: 14.95,
				description:
					"A semi-biographical novel based in part on the life of Woolf's lover Vita Sackville-West, it is generally considered one of Woolf's most accessible novels.",
				inventoryCount: 36,
				isbn: "9780156701600",
			},
			{
				bookTitle: "The Death of Ivan Ilyich",
				pageCount: 86,
				publishDate: "1886-02-01",
				price: 10,
				description:
					"A novella by Leo Tolstoy, considered one of the masterpieces of his late fiction, written shortly after his religious conversion of the late 1870s.",
				inventoryCount: 29,
				isbn: "9780486435091",
			},
			{
				bookTitle: "The Brothers Karamazov",
				pageCount: 796,
				publishDate: "1880-11-01",
				price: 15.95,
				description:
					"The final novel by Dostoevsky delves into the lives of the troubled Karamazov family, exploring deep philosophical questions of faith, doubt, and reason.",
				inventoryCount: 72,
				isbn: "9780486437913",
			},
			{
				bookTitle: "Notes from Underground",
				pageCount: 136,
				publishDate: "1864-01-01",
				price: 6.95,
				description:
					"A short and powerful novel that introduces Dostoevsky's most important themes�psychological depth, existential despair, and the quest for meaning in a seemingly indifferent world.",
				inventoryCount: 85,
				isbn: "9780486270531",
			},
			{
				bookTitle: "For Whom the Bell Tolls",
				pageCount: 480,
				publishDate: "1940-10-21",
				price: 17,
				description:
					"Set against the backdrop of the Spanish Civil War, Hemingway's novel explores themes of love, loss, and the harsh realities of war.",
				inventoryCount: 63,
				isbn: "9780684803357",
			},
			{
				bookTitle: "A Farewell to Arms",
				pageCount: 332,
				publishDate: "1929-09-01",
				price: 16,
				description:
					"A novel of love and war, telling the story of an American ambulance driver on the Italian front and his passion for a beautiful English nurse.",
				inventoryCount: 57,
				isbn: "9780142437339",
			},
			{
				bookTitle: "The Hobbit",
				pageCount: 310,
				publishDate: "1937-09-21",
				price: 14.99,
				description:
					"Bilbo Baggins, a hobbit enjoying his quiet life, is thrust into an epic quest by the wizard Gandalf and a group of dwarves to reclaim their mountain home from a dragon.",
				inventoryCount: 94,
				isbn: "9780547928227",
			},
			{
				bookTitle: "Animal Farm",
				pageCount: 112,
				publishDate: "1945-08-17",
				price: 9.99,
				description:
					"A farm is taken over by its overworked, mistreated animals. With flaming idealism and stirring slogans, they set out to create a paradise of progress, justice, and equality.",
				inventoryCount: 88,
				isbn: "9780451526342",
			},
			{
				bookTitle: "As I Lay Dying",
				pageCount: 267,
				publishDate: "1930-10-06",
				price: 14.95,
				description:
					"The novel tells the story of the death of Addie Bundren and her poor, rural family's quest and motivations�noble or selfish�to honor her wish to be buried in the town of Jefferson.",
				inventoryCount: 50,
				isbn: "9780679732259",
			},
			{
				bookTitle: "The Sound and the Fury",
				pageCount: 326,
				publishDate: "1929-10-07",
				price: 15,
				description:
					"This novel captures the lives of the Compson family, focusing on the decline of the once-aristocratic clan and the fading of their Southern traditions, seen through the eyes of three brothers.",
				inventoryCount: 77,
				isbn: "9780679732242",
			},
			{
				bookTitle: "Murder on the Orient Express",
				pageCount: 256,
				publishDate: "1934-01-01",
				price: 14.99,
				description:
					"A classic mystery novel featuring the Belgian detective Hercule Poirot, who investigates a murder aboard the famous train. Christie's ingenious plot twists will keep you guessing until the very end.",
				inventoryCount: 90,
				isbn: "9780062693662",
			},
			{
				bookTitle: "Ulysses",
				pageCount: 730,
				publishDate: "1922-02-02",
				price: 23,
				description:
					"Joyce's groundbreaking novel chronicles the peripatetic appointments and encounters of Leopold Bloom in Dublin in the course of an ordinary day, 16 June 1904.",
				inventoryCount: 70,
				isbn: "9780141182803",
			},
			{
				bookTitle: "The Trial",
				pageCount: 304,
				publishDate: "1925-01-01",
				price: 12.95,
				description:
					"Kafka's nightmarish tale of a man arrested and prosecuted by a remote, inaccessible authority, with the nature of his crime revealed neither to him nor the reader.",
				inventoryCount: 80,
				isbn: "9780805209990",
			},
			{
				bookTitle: "Beloved",
				pageCount: 324,
				publishDate: "1987-09-01",
				price: 16,
				description:
					"Morrison's novel examines the haunting legacy of slavery, as a mother makes a horrifying choice out of love that resonates across generations.",
				inventoryCount: 85,
				isbn: "9781400033416",
			},
			{
				bookTitle: "One Hundred Years of Solitude",
				pageCount: 417,
				publishDate: "1967-06-05",
				price: 18.99,
				description:
					"M�rquez's epic tells the story of the Buend�a family over seven generations, blending the magical and the real in a vividly painted Colombian landscape.",
				inventoryCount: 95,
				isbn: "9780060883287",
			},
			{
				bookTitle: "Norwegian Wood",
				pageCount: 296,
				publishDate: "1987-09-04",
				price: 15,
				description:
					"A poignant story of one college student's romantic coming-of-age, Norwegian Wood takes us to that distant place of a young man's first, hopeless, and heroic love.",
				inventoryCount: 85,
				isbn: "9780375704024",
			},
			{
				bookTitle: "1Q84",
				pageCount: 928,
				publishDate: "2009-05-29",
				price: 22.95,
				description:
					"An ode to George Orwell's '1984' told in a world with two moons, 1Q84 is a fascinating, complex novel of love, terror, and longing.",
				inventoryCount: 75,
				isbn: "9780307593313",
			},
			{
				bookTitle: "Harry Potter and the Chamber of Secrets",
				pageCount: 341,
				publishDate: "1998-07-02",
				price: 12.99,
				description:
					"The second installment in the Harry Potter series finds Harry and his friends facing new challenges, including the legend of the Chamber of Secrets.",
				inventoryCount: 93,
				isbn: "9780439064873",
			},
			{
				bookTitle: "The Stand",
				pageCount: 1153,
				publishDate: "1978-10-03",
				price: 18,
				description:
					"Stephen King's apocalyptic vision of a world blasted by plague and embroiled in an elemental struggle between good and evil.",
				inventoryCount: 80,
				isbn: "9780307743688",
			},
			{
				bookTitle: "And Still I Rise",
				pageCount: 67,
				publishDate: "1978-08-17",
				price: 17,
				description:
					"Maya Angelou's third volume of poetry is a powerful collection that spans many years of her life. Her heartfelt and poignant poems speak to the resilience of the human spirit.",
				inventoryCount: 62,
				isbn: "9780394502526",
			},
			{
				bookTitle: "Cat's Cradle",
				pageCount: 304,
				publishDate: "1963-04-11",
				price: 15.95,
				description:
					"Vonnegut's satirical commentary on modern man and his madness. An apocalyptic tale of this planet's ultimate fate, it features a midget as the protagonist.",
				inventoryCount: 88,
				isbn: "9780385333481",
			},
			{
				bookTitle: "Go Set a Watchman",
				pageCount: 278,
				publishDate: "2015-07-14",
				price: 27.99,
				description:
					"Originally written in the mid-1950s, Go Set a Watchman was the novel Harper Lee first submitted to her publishers before To Kill a Mockingbird. It features many of the characters from the latter novel some twenty years later.",
				inventoryCount: 82,
				isbn: "9780062409850",
			},
			{
				bookTitle: "Fahrenheit 451",
				pageCount: 158,
				publishDate: "1953-10-19",
				price: 15.99,
				description:
					"A dystopian novel by American writer Ray Bradbury, about a future American society where books are outlawed and 'firemen' burn any that are found. The novel presents a future American society where books are outlawed and 'firemen' burn any that are found.",
				inventoryCount: 90,
				isbn: "9781451673319",
			},
			{
				bookTitle: "The War of the Worlds",
				pageCount: 192,
				publishDate: "1898-01-01",
				price: 8.99,
				description:
					"An early science fiction work by H.G. Wells that describes an invasion of late Victorian England by Martians equipped with advanced weaponry. It is a seminal depiction of an alien invasion of Earth.",
				inventoryCount: 76,
				isbn: "9780486295060",
			},
			{
				bookTitle: "The Tell-Tale Heart and Other Writings",
				pageCount: 448,
				publishDate: "1982-10-01",
				price: 6.95,
				description:
					"A collection of Poe's most famous tales and poems, featuring 'The Tell-Tale Heart,' 'The Fall of the House of Usher,' 'The Cask of Amontillado,' and others. These tales explore themes of death, decay, and madness.",
				inventoryCount: 65,
				isbn: "9780553212280",
			},
			{
				bookTitle: "Selected Poems of Emily Dickinson",
				pageCount: 256,
				publishDate: "2000-01-01",
				price: 12,
				description:
					"Emily Dickinson's poetry is a profound and largely idiosyncratic exploration of the mysteries of life, death, and nature. This selection includes some of her most famous poems, providing a good introduction to her work.",
				inventoryCount: 50,
				isbn: "9780486411071",
			},
			{
				bookTitle: "The Weary Blues",
				pageCount: 104,
				publishDate: "1926-01-01",
				price: 12,
				description:
					"Hughes's first book of poetry, 'The Weary Blues,' describes the blues as both a major influence on his poetry and a major theme of his work.",
				inventoryCount: 50,
				isbn: "9780486454481",
			},
			{
				bookTitle: "The Collected Poems of Langston Hughes",
				pageCount: 736,
				publishDate: "1994-10-31",
				price: 22,
				description:
					"This collection presents 860 poems written by Hughes, one of the leading voices of the Harlem Renaissance.",
				inventoryCount: 80,
				isbn: "9780679764083",
			},
			{
				bookTitle: "The Bell Jar",
				pageCount: 288,
				publishDate: "1963-01-14",
				price: 17,
				description:
					"Plath's semi-autobiographical novel, which details the descent of Esther Greenwood, a young woman moving to New York City, into mental illness.",
				inventoryCount: 90,
				isbn: "9780060837020",
			},
			{
				bookTitle: "Brave New World",
				pageCount: 311,
				publishDate: "1932-01-01",
				price: 15.99,
				description:
					"Huxley's masterpiece and arguably one of the most prescient dystopian works of the 20th century, imagining a future with a rigidly controlled society.",
				inventoryCount: 70,
				isbn: "9780060850524",
			},
			{
				bookTitle: "Moby-Dick",
				pageCount: 752,
				publishDate: "1851-10-18",
				price: 18,
				description:
					"Melville's epic tale of obsession and revenge on the high seas, as Captain Ahab hunts the white whale, Moby-Dick, who maimed him.",
				inventoryCount: 85,
				isbn: "9780142437247",
			},
			{
				bookTitle: "Little Women",
				pageCount: 449,
				publishDate: "1868-09-30",
				price: 12.95,
				description:
					"Alcott's beloved novel follows the lives of the four March sisters�Meg, Jo, Beth, and Amy�and their journey from childhood to womanhood.",
				inventoryCount: 75,
				isbn: "9780147514011",
			},
			{
				bookTitle: "The Picture of Dorian Gray",
				pageCount: 224,
				publishDate: "1890-06-20",
				price: 10.99,
				description:
					"Oscar Wilde's only novel, it tells the story of a young man named Dorian Gray, who becomes the subject of a painting. As he seeks a life of pleasure and indulgence, he discovers that his portrait ages, reflecting the moral corruption of his choices, while he remains outwardly unchanged.",
				inventoryCount: 80,
				isbn: "9780141439570",
			},
			{
				bookTitle: "The Importance of Being Earnest",
				pageCount: 76,
				publishDate: "1895-02-14",
				price: 6.95,
				description:
					"A farcical comedy in which the protagonists maintain fictitious personae to escape burdensome social obligations. Wilde's most enduringly popular play.",
				inventoryCount: 95,
				isbn: "9780486264784",
			},
			{
				bookTitle: "The Adventures of Sherlock Holmes",
				pageCount: 307,
				publishDate: "1892-10-14",
				price: 12.99,
				description:
					"A collection of twelve short stories featuring Conan Doyle's legendary detective, Sherlock Holmes, and his loyal assistant Dr. Watson, as they solve mysteries in late 19th-century London.",
				inventoryCount: 70,
				isbn: "9780755334507",
			},
			{
				bookTitle: "The Grapes of Wrath",
				pageCount: 464,
				publishDate: "1939-04-14",
				price: 14,
				description:
					"John Steinbeck's epic novel of the Great Depression follows the Joad family as they're driven from their Oklahoma home and journey to California in search of work and a better life.",
				inventoryCount: 85,
				isbn: "9780143039433",
			},
			{
				bookTitle: "The Great Gatsby",
				pageCount: 180,
				publishDate: "1925-04-10",
				price: 15,
				description:
					"F. Scott Fitzgerald's masterpiece, a tragic love story set in the roaring twenties, which explores themes of decadence, idealism, resistance to change, social upheaval, and excess.",
				inventoryCount: 90,
				isbn: "9780743273565",
			},
			{
				bookTitle: "American Gods",
				pageCount: 465,
				publishDate: "2001-06-19",
				price: 19.99,
				description:
					"Neil Gaiman's novel blends Americana, fantasy, and various strands of ancient and modern mythology, all centering on the mysterious and taciturn Shadow.",
				inventoryCount: 88,
				isbn: "9780062572233",
			},
			{
				bookTitle: "Do Androids Dream of Electric Sheep?",
				pageCount: 210,
				publishDate: "1968-03-01",
				price: 14.99,
				description:
					"This novel, set in a post-apocalyptic San Francisco, follows Rick Deckard, a bounty hunter tasked with 'retiring' rogue androids. It explores themes of what it means to be human and the nature of humanity.",
				inventoryCount: 80,
				isbn: "9780345404473",
			},
			{
				bookTitle: "The Man in the High Castle",
				pageCount: 274,
				publishDate: "1962-01-01",
				price: 13.95,
				description:
					"An alternate history novel set in a world where the Axis powers won World War II. The story follows several characters living in the 1960s United States, now divided between Japan and Nazi Germany.",
				inventoryCount: 65,
				isbn: "9780547572482",
			},
			{
				bookTitle: "The Handmaid's Tale",
				pageCount: 311,
				publishDate: "1985-04-01",
				price: 15.95,
				description:
					"In a dystopian future, where a totalitarian regime enforces subservient roles on all women, Offred navigates the dangers of her reality with strength and cunning.",
				inventoryCount: 90,
				isbn: "9780385490818",
			},
			{
				bookTitle: "Oryx and Crake",
				pageCount: 400,
				publishDate: "2003-05-06",
				price: 16.95,
				description:
					"Atwood's speculative fiction masterpiece, exploring genetic engineering and its impacts on humanity through the eyes of its protagonist, Snowman.",
				inventoryCount: 75,
				isbn: "9780385503853",
			},
			{
				bookTitle: "My Name Is Red",
				pageCount: 432,
				publishDate: "1998-01-01",
				price: 17,
				description:
					"Set in late 16th century Istanbul, Pamuk's novel weaves a tale of intrigue and romance, centered around the Ottoman Empire's illustrious miniature artists.",
				inventoryCount: 82,
				isbn: "9780375706851",
			},
			{
				bookTitle: "The House of the Spirits",
				pageCount: 448,
				publishDate: "1982-10-01",
				price: 18,
				description:
					"Allende's debut novel, combining magical realism with political and social insight, it tells the epic story of the Trueba family over several generations.",
				inventoryCount: 70,
				isbn: "9781501117015",
			},
			{
				bookTitle: "Never Let Me Go",
				pageCount: 288,
				publishDate: "2005-04-05",
				price: 16,
				description:
					"Ishiguro's haunting story of Kathy, Tommy, and Ruth, and their journey of memories and the truth about their seemingly idyllic school, Hailsham, which hides a dark secret.",
				inventoryCount: 88,
				isbn: "9781400078774",
			},
			{
				bookTitle: "The Golden Notebook",
				pageCount: 688,
				publishDate: "1962-01-01",
				price: 18,
				description:
					"Lessing's groundbreaking novel interweaves the lives of four women through the diary of one. Exploring themes of communism, women's liberation, and the nuclear scare, it remains a fresh and powerful work today.",
				inventoryCount: 60,
				isbn: "9780060931407",
			},
			{
				bookTitle: "Lolita",
				pageCount: 336,
				publishDate: "1955-08-18",
				price: 14.95,
				description:
					"Nabokov's controversial novel tells the story of Humbert Humbert, a literature professor, and his obsession with the 12-year-old Dolores Haze. Told with a lyrical mastery, Lolita explores dark themes with irony and wit.",
				inventoryCount: 75,
				isbn: "9780679723165",
			},
			{
				bookTitle: "Midnight's Children",
				pageCount: 536,
				publishDate: "1981-04-18",
				price: 19,
				description:
					"Rushdie's novel, winner of the Booker Prize, chronicles the life of Saleem Sinai, born at the moment of India's independence, who finds himself 'handcuffed to history' with bizarre consequences.",
				inventoryCount: 88,
				isbn: "9780812976533",
			},
			{
				bookTitle: "The Road",
				pageCount: 287,
				publishDate: "2006-09-26",
				price: 15.95,
				description:
					"McCarthy's post-apocalyptic novel of a father and son's journey through a burned America is a haunting tale of survival and love.",
				inventoryCount: 70,
				isbn: "9780307387899",
			},
			{
				bookTitle: "The Catcher in the Rye",
				pageCount: 234,
				publishDate: "1951-07-16",
				price: 9.99,
				description:
					"Salinger's classic novel of teenage rebellion and angst. The narrative follows Holden Caulfield's experiences in New York City after being expelled from prep school.",
				inventoryCount: 85,
				isbn: "9780316769488",
			},
			{
				bookTitle: "The Color Purple",
				pageCount: 294,
				publishDate: "1982-06-01",
				price: 18.99,
				description:
					"Alice Walker's groundbreaking novel is a heart-wrenching, yet hopeful tale of a young African American woman's journey through abuse and oppression to find her own voice and power in early 20th century Georgia.",
				inventoryCount: 92,
				isbn: "9780151191536",
			},
			{
				bookTitle: "Things Fall Apart",
				pageCount: 209,
				publishDate: "1958-06-17",
				price: 12.99,
				description:
					"Chinua Achebe's masterpiece tells the story of Okonkwo, a proud and powerful village leader amongst the Igbo in Nigeria, and the tragic unraveling of his life as a result of colonialism.",
				inventoryCount: 80,
				isbn: "9780385474542",
			},
			{
				bookTitle: "The Diary of a Young Girl",
				pageCount: 283,
				publishDate: "1947-06-25",
				price: 10,
				description:
					"Anne Frank's diary offers a compelling and deeply personal account of life under Nazi occupation through the eyes of a young Jewish girl.",
				inventoryCount: 95,
				isbn: "9780553296983",
			},
			{
				bookTitle: "Jane Eyre",
				pageCount: 500,
				publishDate: "1847-10-16",
				price: 9.99,
				description:
					"Charlotte Bront�'s novel is a fiery classic of the Victorian era, telling the tale of Jane Eyre's rise from orphaned child to a woman in her own right, navigating love, morality, and social class.",
				inventoryCount: 88,
				isbn: "9780141441146",
			},
			{
				bookTitle: "Frankenstein",
				pageCount: 280,
				publishDate: "1818-01-01",
				price: 7.95,
				description:
					"Mary Shelley's groundbreaking work of science fiction and horror tells the story of Victor Frankenstein, a young scientist who creates a grotesque creature in an unorthodox scientific experiment.",
				inventoryCount: 76,
				isbn: "9780486282114",
			},
			{
				bookTitle: "The Count of Monte Cristo",
				pageCount: 1276,
				publishDate: "1844-08-01",
				price: 20,
				description:
					"A tale of wrongfully imprisoned Edmond Dant�s who escapes from jail, acquires a fortune, and sets about getting revenge on those responsible for his imprisonment. Dumas' epic adventure offers readers a mix of intrigue, romance, and revenge.",
				inventoryCount: 85,
				isbn: "9780140449266",
			},
			{
				bookTitle: "A Tale of Two Cities",
				pageCount: 544,
				publishDate: "1859-04-30",
				price: 14,
				description:
					"Set in London and Paris before and during the French Revolution, the novel tells the story of a French doctor's release from imprisonment and the complexities of his life that intertwine with the lives of his daughter and others amidst the turmoil of the revolution.",
				inventoryCount: 75,
				isbn: "9780141439600",
			},
			{
				bookTitle: "The Jungle Book",
				pageCount: 240,
				publishDate: "1894-01-01",
				price: 12.99,
				description:
					"A collection of stories by Rudyard Kipling, featuring tales of Mowgli, a boy raised by wolves in the Indian jungle. These stories, which also feature a variety of other jungle animals, are noted for their moral lessons and vivid descriptions.",
				inventoryCount: 90,
				isbn: "9780141325293",
			},
			{
				bookTitle: "Madame Bovary",
				pageCount: 320,
				publishDate: "1856-01-01",
				price: 11.95,
				description:
					"Gustave Flaubert's debut novel is a meticulous depiction of bourgeois triviality and a woman's pursuit of the extraordinary in her life, leading to her eventual downfall.",
				inventoryCount: 60,
				isbn: "9780140449129",
			},
			{
				bookTitle: "The Scarlet Letter",
				pageCount: 256,
				publishDate: "1850-03-16",
				price: 8.95,
				description:
					"Set in Puritan Massachusetts Bay Colony during the years 1642 to 1649, Hawthorne's novel tells the story of Hester Prynne, who conceives a daughter through an affair and struggles to create a new life of repentance and dignity.",
				inventoryCount: 80,
				isbn: "9780486280486",
			},
			{
				bookTitle: "Middlemarch",
				pageCount: 904,
				publishDate: "1871-12-01",
				price: 18,
				description:
					"George Eliot's complex tale of life in a provincial English town, Middlemarch explores the intricate web of relationships and the challenges of making choices that affect the rest of one's life.",
				inventoryCount: 70,
				isbn: "9780141439549",
			},
			{
				bookTitle: "A Doll's House",
				pageCount: 96,
				publishDate: "1879-12-01",
				price: 9.99,
				description:
					"Henrik Ibsen's groundbreaking play challenges the traditional roles of men and women in 19th-century marriage. Nora Helmer's journey to self-discovery and liberation remains a powerful statement on gender norms and individual freedom.",
				inventoryCount: 85,
				isbn: "9780486270623",
			},
			{
				bookTitle: "Tess of the d'Urbervilles",
				pageCount: 592,
				publishDate: "1891-11-01",
				price: 12,
				description:
					"Thomas Hardy's novel traces the life of Tess Durbeyfield, a young woman whose destiny is shaped by the Victorian society in which she lives and the social mores that dictate her fate.",
				inventoryCount: 78,
				isbn: "9780141439594",
			},
			{
				bookTitle: "The Turn of the Screw",
				pageCount: 120,
				publishDate: "1898-10-01",
				price: 6.95,
				description:
					"Henry James's chilling ghost story centers around a governess who becomes convinced that the children in her care are being stalked by malevolent ghosts.",
				inventoryCount: 92,
				isbn: "9780486266849",
			},
			{
				bookTitle: "The Awakening",
				pageCount: 195,
				publishDate: "1899-04-22",
				price: 7.99,
				description:
					"Kate Chopin's novel is a daring exploration of female independence and sexuality. Edna Pontellier's struggle to reconcile her unorthodox views on femininity and motherhood with the prevailing social attitudes of the turn-of-the-century American South is compelling and tragic.",
				inventoryCount: 80,
				isbn: "9780486277868",
			},
			{
				bookTitle: "The Cherry Orchard",
				pageCount: 96,
				publishDate: "1904-01-17",
				price: 10,
				description:
					"Chekhov's last play, a masterpiece of modern drama, portrays the decline of the aristocratic Ranevskaya family and the sale of their estate, including its much-loved cherry orchard.",
				inventoryCount: 70,
				isbn: "9780486275482",
			},
			{
				bookTitle: "The Age of Innocence",
				pageCount: 365,
				publishDate: "1920-09-01",
				price: 14,
				description:
					"Wharton's Pulitzer Prize-winning novel captures the hypocrisy and rigidity of New York high society in the late 19th century through the story of Newland Archer's conflicted desires.",
				inventoryCount: 80,
				isbn: "9780486298030",
			},
			{
				bookTitle: "In Search of Lost Time",
				pageCount: 4215,
				publishDate: "1913-11-01",
				price: 100,
				description:
					"Proust's monumental work, also known as 'Remembrance of Things Past', delves deep into themes of memory, time, and art, narrated in exquisite detail and emotional depth.",
				inventoryCount: 50,
				isbn: "9780679443654",
			},
			{
				bookTitle: "The Waste Land",
				pageCount: 64,
				publishDate: "1922-10-15",
				price: 12,
				description:
					"Eliot's landmark poem, 'The Waste Land', remains one of the 20th century's most influential works, offering a powerful critique of post-World War I disillusionment.",
				inventoryCount: 95,
				isbn: "9780141185154",
			},
			{
				bookTitle: "The Stranger",
				pageCount: 123,
				publishDate: "1942-06-19",
				price: 13.95,
				description:
					"Camus's existential masterpiece tells the story of Meursault, an indifferent French Algerian who commits a random act of violence, reflecting the absurdity of life.",
				inventoryCount: 85,
				isbn: "9780679720201",
			},
			{
				bookTitle: "Waiting for Godot",
				pageCount: 128,
				publishDate: "1953-01-05",
				price: 14,
				description:
					"Beckett's landmark play presents two characters, Vladimir and Estragon, who wait for the arrival of someone named Godot who never arrives, and while waiting they engage in a variety of discussions and encounter three other characters.",
				inventoryCount: 60,
				isbn: "9780571244591",
			},
			{
				bookTitle: "On the Road",
				pageCount: 310,
				publishDate: "1957-09-05",
				price: 16,
				description:
					"Kerouac's seminal novel defined the Beat Generation. It is a largely autobiographical work that is based on the spontaneous road trips of Kerouac and his friends across mid-century America.",
				inventoryCount: 70,
				isbn: "9780140283297",
			},
			{
				bookTitle: "Naked Lunch",
				pageCount: 255,
				publishDate: "1959-01-01",
				price: 15.95,
				description:
					"Burroughs' controversial novel is a surreal, nonlinear narrative that challenges traditional narrative structures while critiquing the drug culture of the 1950s.",
				inventoryCount: 55,
				isbn: "9780802122070",
			},
			{
				bookTitle: "Atonement",
				pageCount: 371,
				publishDate: "2001-09-04",
				price: 18.95,
				description:
					"McEwan's novel is a profound, deeply moving story about love, guilt, and forgiveness, set against the backdrop of World War II. It explores the devastating impact of a young girl's false accusation on herself and on the lives of two lovers.",
				inventoryCount: 65,
				isbn: "9780385721790",
			},
			{
				bookTitle: "The English Patient",
				pageCount: 320,
				publishDate: "1992-11-05",
				price: 14.95,
				description:
					"Ondaatje's Booker Prize-winning novel intertwines the lives of four diverse characters in the aftermath of World War II, centering on the mysterious identity of a badly burned man, the titular English patient.",
				inventoryCount: 80,
				isbn: "9780679745204",
			},
			{
				bookTitle: "The Sense of an Ending",
				pageCount: 163,
				publishDate: "2011-08-04",
				price: 14.95,
				description:
					"Julian Barnes's Man Booker Prize-winning novel is a story of memory and remorse, exploring the unreliability of memory and how it can lead to self-deception.",
				inventoryCount: 80,
				isbn: "9780307957122",
			},
			{
				bookTitle: "The Unbearable Lightness of Being",
				pageCount: 314,
				publishDate: "1984-01-01",
				price: 18,
				description:
					"Milan Kundera�s novel of love and politics in Communist-era Prague explores the lives and loves of a small group of characters, interweaving their personal stories with philosophical musings on existence.",
				inventoryCount: 70,
				isbn: "9780060932138",
			},
			{
				bookTitle: "Infinite Jest",
				pageCount: 1079,
				publishDate: "1996-02-01",
				price: 20,
				description:
					"David Foster Wallace's magnum opus, a vast, encyclopedic novel set in a near-future America, explores themes of addiction, entertainment, and the pursuit of happiness in a consumer society.",
				inventoryCount: 60,
				isbn: "9780316066525",
			},
			{
				bookTitle: "The Tale of Genji",
				pageCount: 1176,
				publishDate: "1001-01-01",
				price: 25,
				description:
					"Written in the 11th century by Murasaki Shikibu, a lady in the Heian court of Japan, The Tale of Genji is considered the world's first novel, offering a richly detailed portrait of courtly life in medieval Japan.",
				inventoryCount: 50,
				isbn: "9780679417385",
			},
			{
				bookTitle: "A Room with a View",
				pageCount: 256,
				publishDate: "1908-01-01",
				price: 12,
				description:
					"E.M. Forster's beloved novel is a social critique and comedy of manners set in Edwardian England, following the romantic travails of a young woman, Lucy Honeychurch.",
				inventoryCount: 75,
				isbn: "9780141183297",
			},
			{
				bookTitle: "The End of the Affair",
				pageCount: 160,
				publishDate: "1951-01-01",
				price: 14.95,
				description:
					"Set in London during and just after the Second World War, the novel revolves around the relationships between Maurice Bendrix and Sarah Miles, and explores themes of love, obsession, and faith.",
				inventoryCount: 85,
				isbn: "9780141441122",
			},
			{
				bookTitle: "Henderson the Rain King",
				pageCount: 352,
				publishDate: "1959-01-01",
				price: 16,
				description:
					"Bellow's novel follows the journey of Eugene Henderson, a wealthy but unsatisfied American, as he seeks fulfillment in Africa. It is a blend of humor, philosophy, and social commentary.",
				inventoryCount: 75,
				isbn: "9780140189421",
			},
			{
				bookTitle: "A Good Man Is Hard to Find",
				pageCount: 256,
				publishDate: "1955-01-01",
				price: 15,
				description:
					"O'Connor's collection of short stories showcases her unique blend of comic and tragic, mundane and grotesque, revealing the human condition and the Southern gothic aesthetic.",
				inventoryCount: 90,
				isbn: "9780156364652",
			},
			{
				bookTitle: "Death of a Naturalist",
				pageCount: 64,
				publishDate: "1966-01-01",
				price: 12,
				description:
					"Heaney's first major published volume explores rural life and childhood, presenting a collection that is both accessible and deeply rooted in the soil of Northern Ireland.",
				inventoryCount: 80,
				isbn: "9780571230839",
			},
			{
				bookTitle: "Omeros",
				pageCount: 325,
				publishDate: "1990-01-01",
				price: 18,
				description:
					"Walcott's epic poem reimagines the Trojan War as a Caribbean narrative, exploring themes of colonization, identity, and the legacy of slavery.",
				inventoryCount: 60,
				isbn: "9780374523503",
			},
			{
				bookTitle: "The Magic Mountain",
				pageCount: 720,
				publishDate: "1924-01-01",
				price: 20,
				description:
					"Thomas Mann's epic novel of ideas follows young Hans Castorp as he visits a Swiss sanatorium, intending to stay for three weeks but ends up being there for seven years, encountering a microcosm of European society on the eve of World War I.",
				inventoryCount: 80,
				isbn: "9780679772873",
			},
			{
				bookTitle: "Ficciones",
				pageCount: 174,
				publishDate: "1944-01-01",
				price: 15,
				description:
					"A collection of short stories by Jorge Luis Borges offering intricate tales of a universe where the boundaries of reality and fiction blur. 'Ficciones' explores themes of labyrinths, mirrors, infinite libraries, and the nature of authorship.",
				inventoryCount: 70,
				isbn: "9780802130303",
			},
			{
				bookTitle: "Invisible Cities",
				pageCount: 165,
				publishDate: "1972-01-01",
				price: 14,
				description:
					"Italo Calvino's imaginative text offers a conversation between the aging emperor Kublai Khan and the young explorer Marco Polo, describing fantastical cities across the empire, exploring themes of memory, desire, and the nature of human experience.",
				inventoryCount: 85,
				isbn: "9780156453806",
			},
			{
				bookTitle: "Blindness",
				pageCount: 352,
				publishDate: "1995-01-01",
				price: 16,
				description:
					"A powerful allegorical novel by Jos� Saramago about a society suffering an epidemic of blindness that reveals both the dignity and depravity of humanity.",
				inventoryCount: 75,
				isbn: "9780156007757",
			},
			{
				bookTitle: "If This Is a Man",
				pageCount: 400,
				publishDate: "1947-01-01",
				price: 14.95,
				description:
					"Primo Levi's memoir of his year spent in Auschwitz is a lucid and sober account of the everyday realities of life in the Holocaust, offering insight into the human condition under the most extreme circumstances.",
				inventoryCount: 60,
				isbn: "9780349100135",
			},
			{
				bookTitle: "The Name of the Rose",
				pageCount: 512,
				publishDate: "1980-01-01",
				price: 18.95,
				description:
					"Umberto Eco's debut novel combines mystery, historical fiction, and semiotics in 1327, where Brother William of Baskerville arrives at a monastery to attend a theological dispute but gets involved in solving a series of mysterious deaths.",
				inventoryCount: 90,
				isbn: "9780151446476",
			},
			{
				bookTitle: "White Teeth",
				pageCount: 448,
				publishDate: "2000-01-01",
				price: 14,
				description:
					"Zadie Smith's acclaimed debut novel is a vibrant, multigenerational story about two families in London, exploring Britain's relationship with people from formerly colonized countries in Africa, Asia, and the Caribbean.",
				inventoryCount: 85,
				isbn: "9780375703867",
			},
			{
				bookTitle: "My Brilliant Friend",
				pageCount: 331,
				publishDate: "2011-01-01",
				price: 17,
				description:
					"The first book in Elena Ferrante's Neapolitan Novels, it chronicles the friendship between Elena Greco and Raffaella Cerullo from their childhoods in a poor neighborhood in Naples through their adult lives.",
				inventoryCount: 80,
				isbn: "9781609450786",
			},
			{
				bookTitle: "Americanah",
				pageCount: 588,
				publishDate: "2013-05-14",
				price: 16,
				description:
					"A powerful story of love, race, and identity from the award-winning author Chimamanda Ngozi Adichie, 'Americanah' is a tale of a young Nigerian woman who emigrates to the United States for a university education and stays for work.",
				inventoryCount: 70,
				isbn: "9780307455925",
			},
			{
				bookTitle: "The Underground Railroad",
				pageCount: 320,
				publishDate: "2016-08-02",
				price: 16.95,
				description:
					"Colson Whitehead's Pulitzer Prize-winning novel is a magnificent, harrowing account of Cora, a slave on a cotton plantation in Georgia, and her journey to freedom via a secret network of tracks and tunnels beneath the Southern soil.",
				inventoryCount: 75,
				isbn: "9780385542364",
			},
			{
				bookTitle: "Nausea",
				pageCount: 178,
				publishDate: "1938-01-01",
				price: 15.95,
				description:
					"Jean-Paul Sartre's philosophical novel that introduces the concept of existentialism through the experience of its protagonist, Antoine Roquentin, who confronts the absurdity of existence.",
				inventoryCount: 90,
				isbn: "9780811220309",
			},
			{
				bookTitle: "The Second Sex",
				pageCount: 800,
				publishDate: "1949-01-01",
				price: 20,
				description:
					"In this seminal work, Simone de Beauvoir analyzes the female condition and the form of oppression known as patriarchy, presenting a detailed discussion of women's roles and status in society.",
				inventoryCount: 80,
				isbn: "9780307277787",
			},
			{
				bookTitle: "Charlie and the Chocolate Factory",
				pageCount: 160,
				publishDate: "1964-01-01",
				price: 7.99,
				description:
					"Roald Dahl's famous story of Charlie Bucket, the five Golden Tickets, and Willy Wonka's mysterious chocolate factory has delighted children and adults alike for generations.",
				inventoryCount: 85,
				isbn: "9780142410318",
			},
			{
				bookTitle: "The Talented Mr. Ripley",
				pageCount: 272,
				publishDate: "1955-01-01",
				price: 14,
				description:
					"Patricia Highsmith's psychological thriller introduces Tom Ripley, a young striver newly arrived in the heady world of Manhattan, who becomes entangled in a complex web of deceit.",
				inventoryCount: 75,
				isbn: "9780393332148",
			},
			{
				bookTitle: "Night",
				pageCount: 120,
				publishDate: "1956-01-01",
				price: 9.95,
				description:
					"Elie Wiesel's masterful work is a poignant and powerful autobiographical account of his survival as a teenager in the Nazi death camps.",
				inventoryCount: 100,
				isbn: "9780374500016",
			},
			{
				bookTitle: "Where the Wild Things Are",
				pageCount: 48,
				publishDate: "1963-11-09",
				price: 8.99,
				description:
					"One night Max puts on his wolf suit and makes mischief of one kind and another, so his mother calls him 'Wild Thing' and sends him to bed without his supper. That night a forest begins to grow in Max's room and an adventure awaits him that is nothing short of magical.",
				inventoryCount: 62,
				isbn: "9780064431781",
			},
			{
				bookTitle: "In the Night Kitchen",
				pageCount: 38,
				publishDate: "1970-10-28",
				price: 7.99,
				description:
					"When Mickey falls out of bed and lands in the Night Kitchen, he travels through an amazing dream adventure filled with bakers made of bread, a wild journey in an empty batter bowl, and some very close calls with the oven's blazing heat.",
				inventoryCount: 47,
				isbn: "9780060266684",
			},
			{
				bookTitle: "The Giving Tree",
				pageCount: 64,
				publishDate: "1964-10-07",
				price: 10.99,
				description:
					"This beloved classic celebrates the gift of giving and the wise generosity of a tree that gives everything it has to a young boy as he grows older. This heartwarming story teaches the importance of selflessness, sacrifice, and unconditional love.",
				inventoryCount: 89,
				isbn: "9780060256654",
			},
			{
				bookTitle: "Where the Sidewalk Ends",
				pageCount: 176,
				publishDate: "1974-01-01",
				price: 12.99,
				description:
					"This classic poetry collection is a celebration of childhood, imagination, and the everyday wonders of life. With whimsical illustrations and playful verses, Shel Silverstein invites readers on a magical journey through a world of wonder and possibility.",
				inventoryCount: 75,
				isbn: "9780060256692",
			},
			{
				bookTitle: "The Shadow of the Wind",
				pageCount: 487,
				publishDate: "2001-10-16",
				price: 16.95,
				description:
					"This gothic novel set in post-war Barcelona follows the journey of a young boy who discovers a mysterious book by an obscure author and becomes obsessed with unraveling the secrets behind the book's shadowy past. A captivating tale of love, literature, and the power of stories.",
				inventoryCount: 32,
				isbn: "9780143034902",
			},
			{
				bookTitle: "The Angel's Game",
				pageCount: 531,
				publishDate: "2008-06-24",
				price: 17.99,
				description:
					"In this Gothic literary thriller set in the turbulent Barcelona of the 1920s, a struggling writer is offered a tantalizing deal by a mysterious publisher, but soon finds himself trapped in a nightmare of his own making. A gripping exploration of the dark side of creativity and the power of storytelling.",
				inventoryCount: 21,
				isbn: "9780142020161",
			},
			{
				bookTitle: "The Da Vinci Code",
				pageCount: 454,
				publishDate: "2003-03-18",
				price: 9.99,
				description:
					"This blockbuster thriller by Dan Brown follows symbologist Robert Langdon as he becomes embroiled in a deadly mystery that unravels the ancient secrets of the Priory of Sion and the truth about the Holy Grail. A pulse-pounding adventure filled with codes, conspiracies, and shocking revelations.",
				inventoryCount: 68,
				isbn: "9780307277671",
			},
			{
				bookTitle: "Angels & Demons",
				pageCount: 736,
				publishDate: "2000-04-01",
				price: 10.99,
				description:
					"In this thrilling novel by Dan Brown, Harvard symbologist Robert Langdon is summoned to a Swiss research facility to analyze a mysterious symbol seared into the chest of a murdered physicist. What follows is a breathtaking adventure that takes Langdon deep into the ancient world of the Illuminati, a legendary secret society with a history of violence and conspiracy.",
				inventoryCount: 55,
				isbn: "9780671027360",
			},
			{
				bookTitle: "The Dutch House",
				pageCount: 337,
				publishDate: "2019-09-24",
				price: 16.99,
				description:
					"This richly moving novel by Ann Patchett spans five decades and explores the bond between two siblings, their complex relationship with their wealthy but dysfunctional family, and the enduring power of the past. A compelling story of love, loss, and the unbreakable ties that bind families together.",
				inventoryCount: 48,
				isbn: "9780062963680",
			},
			{
				bookTitle: "Commonwealth",
				pageCount: 322,
				publishDate: "2016-09-13",
				price: 15.95,
				description:
					"Ann Patchett's masterful novel explores the intertwined lives of two families, bound together by a heartbreaking shared tragedy and the secrets they keep. A profound exploration of the ties that bind us, the illusions that blind us, and the truths that ultimately set us free.",
				inventoryCount: 37,
				isbn: "9780062491817",
			},
		],
	},
};
