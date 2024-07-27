export type BooksData = {
	data: {
		books: {
			id: string;
			bookTitle: string;
			pageCount: number;
			publishDate: string;
			price: number;
			shortDescription: string;
			longDescription: string;
			inventoryCount: number;
			isbn: string;
			author: {
				id: string;
				authorFirstName: string;
				authorLastName: string;
			};
			bookReviews: {
				id: string;
				shortReview: string;
				review: string;
				rating: number;
				user: {
					id: string;
					userName: string;
				};
			}[];
			bookCategories: {
				id: string;
				category: {
					categoryName: string;
				};
			}[];
		}[];
	};
};

export const books: BooksData = {
	data: {
		books: [
			{
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
				author: {
					id: "779fa00a-09d6-444e-9ce8-540e65ac5e19",
					authorFirstName: "Paulo",
					authorLastName: "Coelho",
				},
				bookReviews: [
					{
						id: "c755018d-e4b9-4e77-8c83-e6b0ca99354d",
						shortReview: "Incredible journey!",
						review:
							"The Alchemist is an incredible journey of self-discovery and following one's dreams. Highly recommend it!",
						rating: 5,
						user: {
							id: "3e4992a5-bde8-4df2-ae06-051d0b7a1805",
							userName: "booklover1",
						},
					},
					{
						id: "e6d8806a-bdf2-4c0e-ae6a-557cb8f4fc53",
						shortReview: "Thought-provoking!",
						review:
							"The Alchemist is a thought-provoking book that teaches valuable life lessons. It's definitely worth reading.",
						rating: 4,
						user: {
							id: "8410ebc7-bddd-4cff-a651-24b74f193192",
							userName: "bibliophile",
						},
					},
					{
						id: "b370d54d-86a5-4a06-b801-79a4da29c85e",
						shortReview: "A masterpiece!",
						review:
							"The Alchemist is a masterpiece! It's beautifully written and deeply moving. A must-read for everyone!",
						rating: 5,
						user: {
							id: "7c7a29c9-a713-440b-9b85-eb5033f02641",
							userName: "avidreader7",
						},
					},
					{
						id: "171b5ddc-7c09-44b0-aecb-c8856d421a6f",
						shortReview: "Bit too preachy.",
						review:
							"The Alchemist has some good moments, but overall, I found it to be a bit too preachy for my taste.",
						rating: 3,
						user: {
							id: "7bb8095f-c1a8-4307-b74f-2affe40bae4b",
							userName: "litlover88",
						},
					},
				],
				bookCategories: [
					{
						id: "a93e110b-57d2-4a16-a59c-7f8d02335331",
						category: {
							categoryName: "Inspirational",
						},
					},
					{
						id: "a9c7824b-891b-472c-a26b-59f954e6f80e",
						category: {
							categoryName: "Philosophical Fiction",
						},
					},
					{
						id: "f3d12262-57fb-4cf7-b3c7-a993c789ad79",
						category: {
							categoryName: "Philosophical",
						},
					},
				],
			},
			{
				id: "4e693a90-d582-421b-afbf-a4babf10a68e",
				bookTitle: "Pride and Prejudice",
				pageCount: 432,
				publishDate: "1813-01-28",
				price: 9.99,
				shortDescription:
					"The novel follows the character development of Elizabeth Bennet, the dynamic protagonist, who learns about the repercussions of hasty judgments and comes to appreciate the difference between superficial goodness and actual goodness.",
				longDescription:
					"\"Pride and Prejudice\" begins in the tranquil English countryside, in a time when marriage was often the defining moment of a woman's life. The Bennet family, comprised of five unmarried daughters, is thrown into a flurry of anticipation and anxiety when a wealthy and eligible bachelor, Mr. Bingley, moves into the neighboring estate. The eldest Bennet sister, Jane, is gently nudged into Mr. Bingley's path, while the fiercely intelligent and spirited Elizabeth Bennet crosses swords with Mr. Bingley's aloof and prideful friend, Mr. Darcy. The novel promises an enchanting dance of courtship and scandal, where love and marriage are as much about wealth and social standing as they are about the heart.\n\nElizabeth Bennet's journey takes center stage in this classic story. After enduring a disastrous proposal from her cousin, Mr. Collins, and watching her friend, Charlotte Lucas, accept his subsequent proposal for pragmatic reasons, Elizabeth's views on marriage come into sharp focus. When she rejects the haughty Mr. Darcy's first proposal, citing his arrogance and his role in separating her beloved sister Jane from Mr. Bingley, the plot thickens. The reader is then treated to a transformational journey, where first impressions give way to deeper understanding, and pride and prejudice are defeated by love and humility.\n\n\"Pride and Prejudice\" is a timeless commentary on social norms and the human heart. It is a story of family, love, class, and self-discovery, painted against the backdrop of 19th-century English society. Jane Austen's fine wit and piercing social commentary are on full display as her characters navigate their way through society's expectations and their own hearts' desires. This book promises to captivate readers with its blend of humor, romance, and astute observations about human nature and society.",
				inventoryCount: 74,
				isbn: "9781503290563",
				author: {
					id: "8283a8d6-e43b-4e48-8b4b-229e7a3f9a7f",
					authorFirstName: "Jane",
					authorLastName: "Austen",
				},
				bookReviews: [
					{
						id: "8adb6034-e91b-40b5-a2f4-f854d0f4327d",
						shortReview: "Classic romance.",
						review:
							"Pride and Prejudice is a classic romance with memorable characters. However, I found some parts to be a bit slow.",
						rating: 3,
						user: {
							id: "9c1b9d38-b2df-4a79-8091-8ef8fa821c88",
							userName: "reader123",
						},
					},
					{
						id: "2e5f373e-f46e-4f59-a7e2-d7f0f3800ebc",
						shortReview: "Not my cup of tea.",
						review:
							"Pride and Prejudice was not my cup of tea. I found it to be overly dramatic and lacking depth in character development.",
						rating: 2,
						user: {
							id: "550de341-e5c4-486f-b087-5ef77ff3a72b",
							userName: "bookworm",
						},
					},
					{
						id: "1989cb7e-62eb-4e91-8b45-c5b740bf2036",
						shortReview: "Charming novel.",
						review:
							"Pride and Prejudice is a charming novel with witty dialogue and engaging characters. I thoroughly enjoyed reading it.",
						rating: 4,
						user: {
							id: "671b88b5-2cb1-43ff-9b2d-c19c6e319ef7",
							userName: "bookishgal",
						},
					},
					{
						id: "326b9835-a9a8-4780-9844-23492025e3e6",
						shortReview: "Timeless classic!",
						review:
							"Pride and Prejudice is a timeless classic that never fails to charm readers with its wit and romance. A must-read for any book lover!",
						rating: 5,
						user: {
							id: "85e505f3-d55e-45cb-8d38-f91ae9164d17",
							userName: "jenreads",
						},
					},
				],
				bookCategories: [
					{
						id: "e51242bc-29ba-4d5a-ba25-3313d5bf5a8b",
						category: {
							categoryName: "Classic Romance",
						},
					},
					{
						id: "7ded69e5-50f5-4754-932a-b6eeb46e88f0",
						category: {
							categoryName: "Romance",
						},
					},
					{
						id: "ff3bd864-f730-4a3c-91ab-92594dfaf1d4",
						category: {
							categoryName: "Cultural",
						},
					},
					{
						id: "0654db50-f820-4e86-a378-d1afba622313",
						category: {
							categoryName: "Social Commentary",
						},
					},
				],
			},
			{
				id: "5868f357-1e51-4383-a603-b21dd5881b18",
				bookTitle: "Adventures of Huckleberry Finn",
				pageCount: 366,
				publishDate: "1884-12-10",
				price: 8.99,
				shortDescription:
					"Direct sequel to The Adventures of Tom Sawyer. The book is noted for its colorful description of people and places along the Mississippi River.",
				longDescription:
					"\"Adventures of Huckleberry Finn\" is a captivating tale that unravels the heart of America in the mid-19th century, penned by the renowned author, Mark Twain. This celebrated classic follows the vibrant journey of a young boy named Huckleberry Finn, or Huck, as he escapes from his abusive father and a society trying to civilize him. Along the way, he teams up with Jim, a runaway slave, and together they traverse the mighty Mississippi River on a makeshift raft, encountering a host of colorful characters and navigating through an array of thrilling adventures.\n\nThe narrative is beautifully woven around the themes of friendship, freedom, and morality. Huck's friendship with Jim is truly heartwarming, challenging the racial prejudices of the time. As they sail down the river, they encounter various societal microcosms that present moral dilemmas, testing Huck's conscience and moral growth. Twain masterfully uses the innocence of a child's perspective to critically examine the hypocrisies and flaws of adult society, making the story both moving and thought-provoking.\n\n\"Adventures of Huckleberry Finn\" is not just a simple adventure story. It is a complex exploration of human nature and society, filled with humor, pathos, and a rich depiction of life in the Antebellum South. Twain's signature wit and satire, his knack for dialect, and his vivid descriptions of the American landscape make this novel an unforgettable reading experience. Whether you're a lover of classic literature or a fan of exciting adventure tales, this book promises to be a riveting journey worth embarking upon.",
				inventoryCount: 81,
				isbn: "9780486400778",
				author: {
					id: "78f2351f-8786-45f6-8e8e-78d3dc51e9fa",
					authorFirstName: "Mark",
					authorLastName: "Twain",
				},
				bookReviews: [
					{
						id: "53299f33-8fd8-4a38-a5f7-f41af71ee56c",
						shortReview: "Classic adventure!",
						review:
							"The Adventures of Huckleberry Finn is a classic adventure tale with memorable characters and exciting escapades. Highly recommend it!",
						rating: 4,
						user: {
							id: "3e4992a5-bde8-4df2-ae06-051d0b7a1805",
							userName: "booklover1",
						},
					},
					{
						id: "01c3c7c6-9910-4fe6-a801-c764d56b341b",
						shortReview: "Absolute delight!",
						review:
							"The Adventures of Huckleberry Finn is an absolute delight to read! Twain's storytelling prowess shines through every page.",
						rating: 5,
						user: {
							id: "8410ebc7-bddd-4cff-a651-24b74f193192",
							userName: "bibliophile",
						},
					},
					{
						id: "e8c18b11-328a-42fe-98f3-59540f5c3d78",
						shortReview: "Timeless classic!",
						review:
							"The Adventures of Huckleberry Finn is a timeless classic that never fails to entertain. Twain's wit and humor make it a joy to read.",
						rating: 4,
						user: {
							id: "7c7a29c9-a713-440b-9b85-eb5033f02641",
							userName: "avidreader7",
						},
					},
					{
						id: "41517285-898b-4599-8a83-88abfc84c681",
						shortReview: "Decent read.",
						review:
							"The Adventures of Huckleberry Finn was a decent read. While some parts were engaging, others felt slow and dragged on.",
						rating: 3,
						user: {
							id: "7bb8095f-c1a8-4307-b74f-2affe40bae4b",
							userName: "litlover88",
						},
					},
				],
				bookCategories: [
					{
						id: "1fe5443d-83f3-41fc-9466-c4fc010648e2",
						category: {
							categoryName: "Coming-of-Age",
						},
					},
					{
						id: "014ddaf6-3ecb-4d52-a3c4-ca517373af7a",
						category: {
							categoryName: "Adventure",
						},
					},
					{
						id: "bcb33b99-2b19-4ca8-b99f-ac7ce96f4c07",
						category: {
							categoryName: "War",
						},
					},
				],
			},
			{
				id: "cb16b8cd-82b2-4489-9a7f-7e085051a001",
				bookTitle: "Mrs. Dalloway",
				pageCount: 194,
				publishDate: "1925-05-14",
				price: 7.99,
				shortDescription:
					"Details a day in the life of Clarissa Dalloway, a fictional high-society woman in post�First World War England. It is one of Woolf's best-known novels.",
				longDescription:
					"\"Mrs. Dalloway\" by Virginia Woolf is an enchanting journey into the mind and life of a high-society woman in Post-War England. Set in London, the novel unravels over the course of a single day, exploring the thoughts, emotions, and experiences of Clarissa Dalloway as she prepares for a grand party she's hosting. The narrative elegantly weaves between the present and the past, painting a vivid portrait of Mrs. Dalloway's life and her intricate relationships, all the while offering an intimate look at the internal world of the novel's characters.\n\nThe narrative illuminates the complexities of human consciousness through its innovative use of stream of consciousness storytelling. As Clarissa's thoughts, memories, and observations meander, readers get a glimpse into her life, her regrets, her hopes, and her fears. However, the narrative isn't confined to Clarissa alone. Woolf switches perspectives to other characters, notably Septimus Warren Smith, a World War I veteran suffering from shell shock. The parallel between Clarissa's high-society mental distress and Septimus' post-war trauma provides a profound commentary on the societal and personal implications of mental health.\n\n\"Mrs. Dalloway\" is a deeply emotional and thought-provoking novel that delves into themes of time, memory, love, and existentialism. Virginia Woolf's lyrical prose and her masterful exploration of human consciousness make the book a mesmerizing read. It's not just a story about a woman throwing a party; it's a tale of introspection and the quiet struggles everyone goes through, making it a timeless piece of literature that speaks to readers across generations.",
				inventoryCount: 87,
				isbn: "9780156628709",
				author: {
					id: "a41e87a3-ed5a-432b-88e8-ac5d971f1c36",
					authorFirstName: "Virginia",
					authorLastName: "Woolf",
				},
				bookReviews: [
					{
						id: "c33e16ec-d836-4593-bf22-92c523bb5323",
						shortReview: "Thought-provoking.",
						review:
							"Mrs. Dalloway is a thought-provoking novel that explores the complexities of human consciousness. Worth reading for its literary merit.",
						rating: 3,
						user: {
							id: "9c1b9d38-b2df-4a79-8091-8ef8fa821c88",
							userName: "reader123",
						},
					},
					{
						id: "597206f7-7b70-4501-b63d-3264b48b74ae",
						shortReview: "Not my cup of tea.",
						review:
							"Mrs. Dalloway was not my cup of tea. I found the stream of consciousness style confusing and hard to follow.",
						rating: 2,
						user: {
							id: "550de341-e5c4-486f-b087-5ef77ff3a72b",
							userName: "bookworm",
						},
					},
					{
						id: "0b140bbc-add7-4557-aa62-cf85e73cf77d",
						shortReview: "Modernist masterpiece!",
						review:
							"Mrs. Dalloway is a masterpiece of modernist literature. Woolf's portrayal of consciousness is both innovative and captivating.",
						rating: 5,
						user: {
							id: "671b88b5-2cb1-43ff-9b2d-c19c6e319ef7",
							userName: "bookishgal",
						},
					},
					{
						id: "6fb38836-da13-4f02-924a-a342e5802334",
						shortReview: "Beautifully written.",
						review:
							"Mrs. Dalloway is a beautifully written novel that offers profound insights into the human psyche. Woolf's prose is exquisite.",
						rating: 4,
						user: {
							id: "85e505f3-d55e-45cb-8d38-f91ae9164d17",
							userName: "jenreads",
						},
					},
				],
				bookCategories: [
					{
						id: "838a8e38-b6e7-497a-b04e-1ce1dc1c6ae4",
						category: {
							categoryName: "Modernist",
						},
					},
					{
						id: "d7a607bc-688b-4195-ab97-49313e1b87b2",
						category: {
							categoryName: "Social Commentary",
						},
					},
				],
			},
			{
				id: "81b45f95-dd8b-40b9-a4ef-3754963d5f7a",
				bookTitle: "Anna Karenina",
				pageCount: 864,
				publishDate: "1877-04-01",
				price: 12.99,
				shortDescription:
					"Tolstoy's Anna Karenina tells of the doomed love affair between the sensuous and rebellious Anna and the dashing officer, Count Vronsky.",
				longDescription:
					'"Anna Karenina" is a splendidly crafted tale of love, lust, and societal constraints set in the panoramic landscapes of imperial Russia. The novel, penned by the legendary writer Leo Tolstoy, is a profound exploration of the human condition and a timeless testament to the tragic scope of human relationships. In this monumental work, readers are invited to plunge into the lives of two families, the Oblonskys and the Karenins, whose stories intertwine in an intricate dance of passion and betrayal.\n\nThe narrative primarily revolves around the beautiful and vivacious Anna Karenina, a woman of high social standing who is trapped in a loveless marriage with the stern and distant government official, Alexei Karenin. Anna\'s life takes a dramatic turn when she meets the dashing Count Vronsky, and embarks on a tumultuous affair that sends ripples through the society. Parallel to Anna\'s story, Tolstoy masterfully crafts the tale of Levin, a landowner struggling with existential questions, while he ardently pursues the young Kitty Shcherbatsky. \n\n"Anna Karenina" is a rich tapestry of 19th century Russian society, where family, agriculture, politics, morality, and philosophy are seamlessly woven together to create an unforgettable reading experience. Tolstoy presents a world where societal pressures and personal passions collide, leading to heartbreak and despair. Yet, amidst the tragedy, his characters also experience moments of profound joy and spiritual illumination. Packed with an array of vividly drawn characters, dramatic scenes, and profound insights, "Anna Karenina" is a must-read for anyone seeking to experience the depth and beauty of classic literature.',
				inventoryCount: 67,
				isbn: "9781400079988",
				author: {
					id: "19730510-9a97-4ce9-a39d-506bb7ff1a8f",
					authorFirstName: "Leo",
					authorLastName: "Tolstoy",
				},
				bookReviews: [
					{
						id: "afd6e98a-c100-4be9-85e1-85135e45c172",
						shortReview: "Timeless masterpiece!",
						review:
							"Anna Karenina is a timeless masterpiece that delves deep into the complexities of love and society. Tolstoy's characters are richly developed, and the narrative is beautifully crafted.",
						rating: 5,
						user: {
							id: "3e4992a5-bde8-4df2-ae06-051d0b7a1805",
							userName: "booklover1",
						},
					},
					{
						id: "b01ac4e5-6a00-42f5-8c72-f85a9aa7f0d2",
						shortReview: "Powerful exploration.",
						review:
							"Anna Karenina is a powerful exploration of human emotions and desires. Tolstoy's storytelling prowess shines through every page, making it a compelling read.",
						rating: 4,
						user: {
							id: "8410ebc7-bddd-4cff-a651-24b74f193192",
							userName: "bibliophile",
						},
					},
					{
						id: "efc0f0c0-119c-49ac-9646-f72d691dadae",
						shortReview: "Absolute gem!",
						review:
							"Anna Karenina is an absolute gem of literature! Tolstoy's ability to capture the human condition is unparalleled. A must-read for any book lover.",
						rating: 5,
						user: {
							id: "7c7a29c9-a713-440b-9b85-eb5033f02641",
							userName: "avidreader7",
						},
					},
					{
						id: "22334e5a-5654-41b0-9f2b-8321a9187f9e",
						shortReview: "Mixed bag.",
						review:
							"Anna Karenina was a bit of a mixed bag for me. While I appreciated the depth of the characters, I found the plot to be overly complex and meandering.",
						rating: 3,
						user: {
							id: "7bb8095f-c1a8-4307-b74f-2affe40bae4b",
							userName: "litlover88",
						},
					},
				],
				bookCategories: [
					{
						id: "f044560c-5396-4200-a6e0-fd9a69bcbf26",
						category: {
							categoryName: "Romance",
						},
					},
					{
						id: "0c5d7dba-841a-48c3-9aa9-49a85ca34dd0",
						category: {
							categoryName: "Historical Romance",
						},
					},
					{
						id: "fc216e43-ea4c-4064-9c2a-c14de286a10e",
						category: {
							categoryName: "Cultural",
						},
					},
				],
			},
			{
				id: "6e515ee5-0529-4013-ad25-5c3c5f4d79b1",
				bookTitle: "Warrior of the Light",
				pageCount: 160,
				publishDate: "2003-03-30",
				price: 16.99,
				shortDescription:
					"A manual that teaches the reader, through stories and reflections, how to embrace the warrior of the light within themselves.",
				longDescription:
					'"Warrior of the Light: A Manual" is an inspiring and philosophical journey into the depths of the human spirit, penned by the masterful Paulo Coelho. This book, a collection of philosophical musings and insightful anecdotes, aims to guide readers in the discovery of their inner "Warrior of the Light," a symbol of one\'s capacity for faith, hope, and personal growth amidst life\'s trials. This exploration of the human condition is presented in a simple yet profound format, making it accessible to readers of all backgrounds.\n\nIn the first half of the book, Coelho introduces the concept of the "Warrior of the Light," a person who appreciates the miracle of life, understands the significance of his own actions, and consistently strives for self-improvement. The Warrior, as Coelho explains, knows he has much to be grateful for and acknowledges his victories, but also understands that his failures are what shape and strengthen him. The warrior represents every person who has ever sought to understand the purpose of their life.\n\nThe second half of the book delves more deeply into the spiritual and philosophical teachings that guide the warrior. In this section, Coelho explores complex ideas about destiny, free will, and the nature of good and evil, challenging readers to question their own beliefs and values. Through the journey of the Warrior of the Light, readers are encouraged to reflect on their own lives and to embrace the challenges that come their way with courage, determination, and wisdom. The book ends with a powerful reminder that every person has the potential to be a Warrior of the Light, capable of living with passion and purpose.',
				inventoryCount: 36,
				isbn: "9780060527983",
				author: {
					id: "779fa00a-09d6-444e-9ce8-540e65ac5e19",
					authorFirstName: "Paulo",
					authorLastName: "Coelho",
				},
				bookReviews: [
					{
						id: "d58de802-68f9-489b-b010-d6b4ca222ed3",
						shortReview: "Inspiring but repetitive.",
						review:
							"Warrior of the Light offers some inspiring insights, but overall, I found it to be a bit repetitive. The message is uplifting, but it could have been conveyed more effectively.",
						rating: 3,
						user: {
							id: "9c1b9d38-b2df-4a79-8091-8ef8fa821c88",
							userName: "reader123",
						},
					},
					{
						id: "489e818d-b1ac-4a2d-861a-a130039750bd",
						shortReview: "Disappointing.",
						review:
							"Warrior of the Light was a disappointment for me. I expected more profound wisdom, but it felt shallow and clich�. Not worth the hype.",
						rating: 2,
						user: {
							id: "550de341-e5c4-486f-b087-5ef77ff3a72b",
							userName: "bookworm",
						},
					},
					{
						id: "99c197b9-3539-4239-8938-73503335ee65",
						shortReview: "Valuable life lessons.",
						review:
							"Warrior of the Light provides some valuable life lessons and motivational quotes. It's a quick read that can uplift your spirits when needed.",
						rating: 4,
						user: {
							id: "671b88b5-2cb1-43ff-9b2d-c19c6e319ef7",
							userName: "bookishgal",
						},
					},
					{
						id: "b13375d5-71ed-4368-9014-28a057aca4bb",
						shortReview: "Beacon of hope!",
						review:
							"Warrior of the Light is a beacon of hope in the darkness. Its messages of perseverance and courage are exactly what I needed to hear. Highly recommend it!",
						rating: 5,
						user: {
							id: "85e505f3-d55e-45cb-8d38-f91ae9164d17",
							userName: "jenreads",
						},
					},
				],
				bookCategories: [
					{
						id: "684b1205-1ff8-40f3-a8d0-4482c0a3b32b",
						category: {
							categoryName: "Inspirational",
						},
					},
					{
						id: "21ea7684-46be-410f-84a5-98a2dca20bd5",
						category: {
							categoryName: "Philosophical Fiction",
						},
					},
				],
			},
			{
				id: "efdd1fbe-91bb-4e26-9709-30c863b41cec",
				bookTitle: "Emma",
				pageCount: 544,
				publishDate: "1815-12-25",
				price: 11.99,
				shortDescription:
					"A novel about youthful hubris and the perils of misconstrued romance, the story explores the concerns and difficulties of genteel women living in Georgian�Regency England.",
				longDescription:
					'Immerse yourself in the classic novel "Emma" by Jane Austen, a delightful exploration of the games of love and the intricacies of relationships. The novel unfolds in the small village of Highbury, introducing readers to Emma Woodhouse, a wealthy, pretty, and self-assured young woman who, despite her own declaration of never marrying, relishes in the role of matchmaker for the people around her. Emma\'s well-intentioned plans, however, often lead to misunderstandings, blunders, and complex situations, offering readers an engaging journey into the manners and mores of 19th-century English society.\n\nThe narrative focuses on the transformation of the novel\'s eponymous protagonist from a headstrong, somewhat snobbish young woman to a more empathetic and self-aware individual. Emma\'s growth is spurred by a series of comic misjudgments, where she learns some hard lessons about the dangers of meddling in other people\'s lives. Her misconceptions about others\' feelings, her blindness to her own emotions, and her realization of love form an intricate web of relationships that make the story both entertaining and thought-provoking.\n\n"Emma" is not just a story about love and growing up, but also a sharp critique of the rigid English class system and societal norms of the time. Austen\'s vivid portrayal of her characters, her satirical take on social hierarchy, and her masterful exploration of the human psyche make "Emma" a timeless classic. Its captivating plot, rich characterization, and the charm of Austen\'s wit will keep readers enthralled till the very end. Discover the world of "Emma" where love, friendship, and transformation come together in a beautifully woven tapestry of life in Regency England.',
				inventoryCount: 41,
				isbn: "9780141439587",
				author: {
					id: "8283a8d6-e43b-4e48-8b4b-229e7a3f9a7f",
					authorFirstName: "Jane",
					authorLastName: "Austen",
				},
				bookReviews: [
					{
						id: "e9909fb2-e828-4c26-92d1-b2b75953b251",
						shortReview: "Delightful read!",
						review:
							"Emma is a delightful read with charming characters and witty dialogue. Austen's writing style is captivating, making it a classic.",
						rating: 4,
						user: {
							id: "3e4992a5-bde8-4df2-ae06-051d0b7a1805",
							userName: "booklover1",
						},
					},
					{
						id: "f720c0d9-2f85-4370-a9ae-6e7c59a9eff8",
						shortReview: "Absolute masterpiece!",
						review:
							"Emma is an absolute masterpiece! Austen's portrayal of society and romance is unparalleled. A must-read for any literature enthusiast.",
						rating: 5,
						user: {
							id: "8410ebc7-bddd-4cff-a651-24b74f193192",
							userName: "bibliophile",
						},
					},
					{
						id: "b7e42116-c20c-4068-90de-b72370974ef1",
						shortReview: "Timeless themes.",
						review:
							"Emma is a classic novel with timeless themes of love, friendship, and self-discovery. Austen's characters are vividly drawn, and the plot is engaging.",
						rating: 4,
						user: {
							id: "7c7a29c9-a713-440b-9b85-eb5033f02641",
							userName: "avidreader7",
						},
					},
					{
						id: "a01f4eda-d8b4-4b60-b01f-1f68ae26656e",
						shortReview: "Okay read.",
						review:
							"Emma was an okay read for me. While I appreciated Austen's wit, I found some parts to be a bit slow-paced.",
						rating: 3,
						user: {
							id: "7bb8095f-c1a8-4307-b74f-2affe40bae4b",
							userName: "litlover88",
						},
					},
				],
				bookCategories: [
					{
						id: "8e9ad347-becd-4e46-91e9-fe6a68f8650a",
						category: {
							categoryName: "Classic Romance",
						},
					},
					{
						id: "2fd70715-db0d-4bc5-9902-f6b673153c93",
						category: {
							categoryName: "Romance",
						},
					},
				],
			},
			{
				id: "ae30fc90-3b04-48b1-b3a9-eedabe83457c",
				bookTitle: "Life on the Mississippi",
				pageCount: 624,
				publishDate: "1883-01-01",
				price: 13.95,
				shortDescription:
					"A memoir of Twain's experiences as a steamboat pilot on the Mississippi River before the American Civil War, and a travel book, recounting his trip down the Mississippi River from St. Louis to New Orleans many years after the War.",
				longDescription:
					"\"Life on the Mississippi\" is a vibrant journey through the past and present of one of America's most iconic rivers, as seen through the eyes of renowned author Mark Twain. The first half of the book contains autobiographical reminiscences of Twain's youthful experiences as a steamboat pilot, where he vividly paints the dynamic life along the river, filled with humour, danger, and poignant nostalgia. Twain recounts his training as a steamboat pilot, the science of navigating the ever-changing Mississippi River, and a variety of anecdotes about his experiences on the river, including a riveting tale of a murderous feud on a ship. These intimate memories are a gateway to a bygone era, teeming with colourful characters and a young America's pioneering spirit.\n\nThe second half of the book sees Twain return to the river, two decades after he left it, to find a world transformed by progress. Here, Twain embarks on a journey from St. Louis to New Orleans, chronicling the evolution of the towns and landscapes along the riverbanks. The author observes how the Civil War, industrialization, and the advent of railroads have profoundly altered the river and its communities. In his signature satire, Twain critiques the social changes he encounters, contrasting the romantic river of his youth with the modern world's practicality.\n\n\"Life on the Mississippi\" is more than just a memoir or a travelogue; it is a love letter to a river that defined Twain's life and the nation's history. It is a rich tapestry of Americana, brimming with insightful social commentary, unforgettable characters, and Twain's inimitable wit. This book offers readers an opportunity to sail down the mighty Mississippi with one of America's greatest storytellers, experiencing the river's magic, its transformation, and its timeless allure.",
				inventoryCount: 6,
				isbn: "9780486414263",
				author: {
					id: "78f2351f-8786-45f6-8e8e-78d3dc51e9fa",
					authorFirstName: "Mark",
					authorLastName: "Twain",
				},
				bookReviews: [
					{
						id: "17506e47-69a0-4c8e-96d5-798ca4812080",
						shortReview: "Interesting glimpse.",
						review:
							"Life on the Mississippi provides an interesting glimpse into the life along the river. Twain's anecdotes are amusing, but the narrative feels a bit disjointed.",
						rating: 3,
						user: {
							id: "9c1b9d38-b2df-4a79-8091-8ef8fa821c88",
							userName: "reader123",
						},
					},
					{
						id: "de6f21ce-6951-436f-b5c5-18246df229df",
						shortReview: "Disappointing.",
						review:
							"Life on the Mississippi was a disappointment for me. I expected more engaging storytelling, but it felt tedious and overly descriptive.",
						rating: 2,
						user: {
							id: "550de341-e5c4-486f-b087-5ef77ff3a72b",
							userName: "bookworm",
						},
					},
					{
						id: "feff001d-bdc6-4082-8ac9-a830b3d2530a",
						shortReview: "Fascinating look.",
						review:
							"Life on the Mississippi offers a fascinating look at the river and the people who inhabit its shores. Twain's wit shines through, making it an enjoyable read.",
						rating: 4,
						user: {
							id: "671b88b5-2cb1-43ff-9b2d-c19c6e319ef7",
							userName: "bookishgal",
						},
					},
					{
						id: "90d90825-da03-45bc-b47f-21ad0cd5685c",
						shortReview: "Fascinating blend!",
						review:
							"Life on the Mississippi is a fascinating blend of history, humor, and adventure. Twain's observations are sharp and his storytelling is engaging. Highly recommend it!",
						rating: 5,
						user: {
							id: "85e505f3-d55e-45cb-8d38-f91ae9164d17",
							userName: "jenreads",
						},
					},
				],
				bookCategories: [
					{
						id: "0df2302c-f8d0-427f-b0c5-030357a81b92",
						category: {
							categoryName: "Historical",
						},
					},
					{
						id: "f8424763-30f3-4c96-9598-f5beb21b5700",
						category: {
							categoryName: "Adventure",
						},
					},
				],
			},
			{
				id: "4bad32a8-6fba-4f3e-bff5-68d675149a9b",
				bookTitle: "Orlando",
				pageCount: 256,
				publishDate: "1928-10-11",
				price: 14.95,
				shortDescription:
					"A semi-biographical novel based in part on the life of Woolf's lover Vita Sackville-West, it is generally considered one of Woolf's most accessible novels.",
				longDescription:
					'Immerse yourself in the extraordinary journey of transformation in Virginia Woolf\'s "Orlando: A Biography." This groundbreaking novel is a thrilling exploration of gender, identity, and the undying nature of creativity. The protagonist, Orlando, embarks on a wild expedition across centuries of English history, offering readers a fascinating insight into the evolution of culture, society, and the human spirit.\n\nOrlando begins life in the 16th century as a young nobleman, living a life of opulence and privilege, favoring the company of poets and playwrights. His life takes a dramatic turn when he is chosen as an ambassador and sent to Constantinople. There, during a week of tumultuous rapture, Orlando falls into a sleep and wakes up as a woman. This sudden transformation doesn\'t hinder her spirit; instead, she embraces her new identity and continues her journey through time, experiencing the various roles and restrictions placed on women throughout history.\n\nVirginia Woolf\'s "Orlando" is a richly woven tapestry of satire, romance, and poetic prose. It is a revolutionary novel that challenges societal norms and conventional views on gender and identity. Woolf\'s masterful storytelling and innovative narrative techniques make "Orlando" a pioneering work in modernist literature and feminist thought. The book\'s magical realism and captivating exploration of the fluidity of time and identity will evoke deep thought and broaden your understanding of the human condition.',
				inventoryCount: 36,
				isbn: "9780156701600",
				author: {
					id: "a41e87a3-ed5a-432b-88e8-ac5d971f1c36",
					authorFirstName: "Virginia",
					authorLastName: "Woolf",
				},
				bookReviews: [
					{
						id: "8249fc66-3552-495c-b008-10bc226ec74e",
						shortReview: "Mesmerizing tale!",
						review:
							"Orlando is a mesmerizing tale of transformation and identity. Woolf's prose is enchanting, and the exploration of gender and time is thought-provoking.",
						rating: 5,
						user: {
							id: "3e4992a5-bde8-4df2-ae06-051d0b7a1805",
							userName: "booklover1",
						},
					},
					{
						id: "31832964-82d1-4947-9fed-ec167a5f1fa3",
						shortReview: "Interesting blend.",
						review:
							"Orlando is an interesting blend of fantasy and biography. While the concept is intriguing, I found the execution to be somewhat disjointed.",
						rating: 3,
						user: {
							id: "8410ebc7-bddd-4cff-a651-24b74f193192",
							userName: "bibliophile",
						},
					},
					{
						id: "e80a88b1-30ce-4f8a-8e0d-4d085bc4b8aa",
						shortReview: "Masterpiece!",
						review:
							"Orlando is a masterpiece of modernist literature. Woolf's exploration of gender fluidity and historical narrative is groundbreaking.",
						rating: 5,
						user: {
							id: "7c7a29c9-a713-440b-9b85-eb5033f02641",
							userName: "avidreader7",
						},
					},
					{
						id: "79c46314-d59d-4b30-9c81-906bec115ee9",
						shortReview: "Ambitious but tedious.",
						review:
							"Orlando is an ambitious novel with an interesting premise. However, I found some parts to be tedious and overly descriptive.",
						rating: 3,
						user: {
							id: "7bb8095f-c1a8-4307-b74f-2affe40bae4b",
							userName: "litlover88",
						},
					},
				],
				bookCategories: [
					{
						id: "9c83f497-17ab-4eff-a9c7-b097a10a6a9f",
						category: {
							categoryName: "Feminist Literature",
						},
					},
					{
						id: "5837d637-9831-4bb3-96fb-28cb0bd9c23d",
						category: {
							categoryName: "Modernist",
						},
					},
				],
			},
			{
				id: "ca9e6acc-42f6-4d2c-991c-0741e64667c4",
				bookTitle: "The Adventures of Sherlock Holmes",
				pageCount: 307,
				publishDate: "1892-10-14",
				price: 12.99,
				shortDescription:
					"A collection of twelve short stories featuring Conan Doyle's legendary detective, Sherlock Holmes, and his loyal assistant Dr. Watson, as they solve mysteries in late 19th-century London.",
				longDescription:
					'"The Adventures of Sherlock Holmes" is a collection of twelve mesmerizing detective stories by the legendary author Sir Arthur Conan Doyle. This book introduces us to the world-renowned detective Sherlock Holmes and his loyal friend Dr. John Watson. Each story is a standalone adventure, packed with suspense, mystery, and intellectual prowess that showcases Holmes\' remarkable deductive skills. The duo operates from 221B Baker Street in London, and their journey takes them through the foggy alleyways of the city, grand Victorian mansions, and even across the country, solving the unsolvable and delving into the human psyche\'s darkest corners.\n\nThe book kickstarts with "A Scandal in Bohemia," where Holmes is outsmarted by the clever Irene Adler, followed by intriguing cases like "The Red-Headed League," "The Speckled Band," and "The Blue Carbuncle." Each narrative delivers a unique blend of thrilling drama, cryptic clues, and dramatic revelations. The strength of the book lies in Doyle\'s ability to create complex puzzles and Holmes\'s extraordinary power to unravel them with his sharp observation, logical reasoning, and deep understanding of the criminal mind. The stories also offer a glimpse into the Victorian era\'s social and cultural life, adding a historical layer to the thrilling narratives.\n\n"The Adventures of Sherlock Holmes" is more than just a collection of detective stories. It is a testament to the enduring appeal of a character who, with his deerstalker cap, magnifying glass, and pipe, has become the very epitome of the detective genre. It promises to take readers on a roller coaster ride of emotions, with unexpected twists and turns that keep you on the edge of your seat till the very end. Whether you are a die-hard fan of detective stories or a newcomer to the genre, this book is sure to captivate your imagination, challenge your intellect, and leave you craving for more.',
				inventoryCount: 70,
				isbn: "9780755334507",
				author: {
					id: "fc2a1880-41f4-44f6-8937-472995f0f884",
					authorFirstName: "Arthur Conan",
					authorLastName: "Doyle",
				},
				bookReviews: [
					{
						id: "8ef6e637-efa8-4dc0-ae00-0dc114729fc4",
						shortReview: "Captivating collection.",
						review:
							"The Adventures of Sherlock Holmes is a captivating collection of detective stories that showcases Arthur Conan Doyle's masterful storytelling and keen attention to detail. Each mystery is cleverly crafted, keeping readers on the edge of their seats until the very end.",
						rating: 5,
						user: {
							id: "7c7a29c9-a713-440b-9b85-eb5033f02641",
							userName: "avidreader7",
						},
					},
					{
						id: "6f0d6bb8-ee70-4032-a6a2-747998117a79",
						shortReview: "Classic detective fiction.",
						review:
							"The Adventures of Sherlock Holmes is a classic work of detective fiction that has stood the test of time. Doyle's iconic character, Sherlock Holmes, is brilliantly portrayed, and each story is intricately plotted, making it a must-read for mystery enthusiasts.",
						rating: 4,
						user: {
							id: "671b88b5-2cb1-43ff-9b2d-c19c6e319ef7",
							userName: "bookishgal",
						},
					},
					{
						id: "25be0c86-abbc-47bb-99c9-38dc9febe8e1",
						shortReview: "Engaging mysteries.",
						review:
							"While The Adventures of Sherlock Holmes is undeniably clever and engaging, some readers may find its formulaic structure predictable. However, the charm of Sherlock Holmes and the intrigue of the mysteries still make it a worthwhile read.",
						rating: 3,
						user: {
							id: "7bb8095f-c1a8-4307-b74f-2affe40bae4b",
							userName: "litlover88",
						},
					},
				],
				bookCategories: [
					{
						id: "8e231e4e-8186-421d-9158-6107ffc173af",
						category: {
							categoryName: "Detective Fiction",
						},
					},
					{
						id: "169b3752-121e-47de-b9f5-2560dc835e8d",
						category: {
							categoryName: "Mystery",
						},
					},
				],
			},
			{
				id: "1b1f18d6-05c6-443d-94bf-c42595b16506",
				bookTitle: "The Death of Ivan Ilyich",
				pageCount: 86,
				publishDate: "1886-02-01",
				price: 10,
				shortDescription:
					"A novella by Leo Tolstoy, considered one of the masterpieces of his late fiction, written shortly after his religious conversion of the late 1870s.",
				longDescription:
					"\"The Death of Ivan Ilyich\" is a poignant exploration of life's ultimate mystery: death. This compelling novella by Leo Tolstoy portrays the life and death of Ivan Ilyich Golovin, a high-court judge in 19th century Russia. Tolstoy takes the reader on a spiritual journey, tracing Ivan's life from his carefree days of youth, through his ascension to the upper echelons of society, to his sudden and unexpected confrontation with mortality. The book is a profound reflection on the human condition, presenting a stark contrast between the superficial life Ivan leads and the profound revelation he experiences as death approaches.\n\nIn the midst of his ordinary life of conformity and artificiality, Ivan Ilyich is diagnosed with a terminal illness that forces him to reflect on his life and face the inevitability of death. As he wrestles with his impending doom, the reader is invited to take a closer look at their own mortality and life's true meaning. Through Ivan's introspection and self-discovery, Tolstoy powerfully illustrates the inherent human struggle with mortality, the importance of love, and the quest for authentic living.\n\n\"The Death of Ivan Ilyich\" is a timeless classic that boldly explores the complex emotions surrounding death and the profound effect it has on the living. It is an unflinching examination of society's fear of death and the lengths to which people go to avoid confronting it. The book's powerful narrative and Tolstoy's masterful storytelling make it a compelling read. This thought-provoking masterpiece will leave readers reflecting on their own lives and contemplating the essence of human existence.",
				inventoryCount: 29,
				isbn: "9780486435091",
				author: {
					id: "19730510-9a97-4ce9-a39d-506bb7ff1a8f",
					authorFirstName: "Leo",
					authorLastName: "Tolstoy",
				},
				bookReviews: [
					{
						id: "45e8b346-1c53-4a55-8f8a-407e6559c3dc",
						shortReview: "Profound reflection.",
						review:
							"The Death of Ivan Ilyich is a profound reflection on life and mortality. Tolstoy's examination of existential themes is both haunting and enlightening.",
						rating: 4,
						user: {
							id: "9c1b9d38-b2df-4a79-8091-8ef8fa821c88",
							userName: "reader123",
						},
					},
					{
						id: "ab91d6ec-7b54-44fe-a0d2-1f0219f2e2b8",
						shortReview: "Unsatisfying.",
						review:
							"The Death of Ivan Ilyich left me feeling unsatisfied. The protagonist's journey felt shallow, and the narrative lacked depth.",
						rating: 2,
						user: {
							id: "550de341-e5c4-486f-b087-5ef77ff3a72b",
							userName: "bookworm",
						},
					},
					{
						id: "a8ce610a-180c-446b-a3d4-d6880583909b",
						shortReview: "Profound meditation.",
						review:
							"The Death of Ivan Ilyich offers a profound meditation on the nature of life and death. Tolstoy's writing is deeply introspective and emotionally resonant.",
						rating: 4,
						user: {
							id: "671b88b5-2cb1-43ff-9b2d-c19c6e319ef7",
							userName: "bookishgal",
						},
					},
					{
						id: "0b355d04-a595-4d6e-9586-a7501dc04ecf",
						shortReview: "Haunting portrayal.",
						review:
							"The Death of Ivan Ilyich is a haunting portrayal of mortality and the human condition. Tolstoy's prose is profound and poignant, leaving a lasting impact.",
						rating: 5,
						user: {
							id: "85e505f3-d55e-45cb-8d38-f91ae9164d17",
							userName: "jenreads",
						},
					},
				],
				bookCategories: [
					{
						id: "8d7befa1-010d-46ca-97f9-8ca635aa1da1",
						category: {
							categoryName: "Philosophical Fiction",
						},
					},
					{
						id: "16398743-4467-42e4-88b5-75afb16acb72",
						category: {
							categoryName: "Philosophical",
						},
					},
				],
			},
			{
				id: "d0abc5bc-8dc2-40a2-8670-a57bd1f0ca74",
				bookTitle: "The Brothers Karamazov",
				pageCount: 796,
				publishDate: "1880-11-01",
				price: 15.95,
				shortDescription:
					"The final novel by Dostoevsky delves into the lives of the troubled Karamazov family, exploring deep philosophical questions of faith, doubt, and reason.",
				longDescription:
					"\"The Brothers Karamazov,\" Fyodor Dostoevsky's final and arguably his greatest work, is a dazzling exploration of human passion, morality, and the complexities of the human soul. The narrative revolves around the lives of the three Karamazov brothers – the intellectual Ivan, the passionate Dmitry, and the deeply religious Alyosha. Each brother represents a different aspect of Dostoevsky's philosophical trifecta: faith, reason, and desire. Set against the backdrop of a small Russian town in the late 19th century, the story spirals into a whirlwind of family drama, scandal, and a gripping murder mystery that keeps the readers at the edge of their seats.\n\nDostoevsky delves into the deepest recesses of the human mind, exploring themes of faith, doubt, and reason, and their co-existence within the human soul. The characters find themselves in a constant struggle with their personal beliefs, moral dilemmas, and the tumultuous relationships they share with each other. The story's pivotal point arrives with the murder of the patriarch, Fyodor Pavlovich Karamazov, an event that sends shockwaves through the family and the town, unravelling a series of dark secrets and hidden resentments.\n\nYet, \"The Brothers Karamazov\" is not just a murder mystery; it's a profound philosophical and theological debate, a stirring psychological drama, and an insightful study of human nature. Dostoevsky’s masterful storytelling, combined with his in-depth exploration of existential questions, makes this book a timeless classic. The brilliance of \"The Brothers Karamazov\" lies in its ability to provoke thought, to stir emotions, and to challenge deeply ingrained beliefs. It's a book that will continue to haunt the reader long after they've turned the last page.",
				inventoryCount: 72,
				isbn: "9780486437913",
				author: {
					id: "cc198234-0a02-4299-bd2f-fdba9edfbbf8",
					authorFirstName: "Fyodor",
					authorLastName: "Dostoevsky",
				},
				bookReviews: [
					{
						id: "b2de357e-35c2-4c68-a603-6025b708230c",
						shortReview: "Masterpiece!",
						review:
							"The Brothers Karamazov is a masterpiece of Russian literature. Dostoevsky's exploration of morality, faith, and family dynamics is profound and thought-provoking.",
						rating: 5,
						user: {
							id: "3e4992a5-bde8-4df2-ae06-051d0b7a1805",
							userName: "booklover1",
						},
					},
					{
						id: "ee7b9b37-3a43-4277-af1f-a979bad3c618",
						shortReview: "Challenging read.",
						review:
							"The Brothers Karamazov is a challenging read. While the philosophical themes are intriguing, the narrative can be dense and difficult to follow.",
						rating: 3,
						user: {
							id: "8410ebc7-bddd-4cff-a651-24b74f193192",
							userName: "bibliophile",
						},
					},
					{
						id: "ca8c350a-d1b2-4b64-9389-0183da7a31c9",
						shortReview: "Profound exploration.",
						review:
							"The Brothers Karamazov is a profound exploration of the human condition. Dostoevsky's characters are vividly drawn, and the plot is rich with philosophical depth.",
						rating: 5,
						user: {
							id: "7c7a29c9-a713-440b-9b85-eb5033f02641",
							userName: "avidreader7",
						},
					},
					{
						id: "44a0e467-49ba-454c-8114-3c619e58cf44",
						shortReview: "Classic but verbose.",
						review:
							"The Brothers Karamazov is a classic work, but I found some parts to be overly philosophical and verbose.",
						rating: 3,
						user: {
							id: "7bb8095f-c1a8-4307-b74f-2affe40bae4b",
							userName: "litlover88",
						},
					},
				],
				bookCategories: [
					{
						id: "95159503-e81d-4543-9e4a-8d6175600334",
						category: {
							categoryName: "Philosophical Fiction",
						},
					},
					{
						id: "75866c8c-5b5c-45f8-b760-5a2b0ddf2608",
						category: {
							categoryName: "Philosophical",
						},
					},
				],
			},
			{
				id: "3a9423c9-5500-468d-ad74-871ce83dc158",
				bookTitle: "Notes from Underground",
				pageCount: 136,
				publishDate: "1864-01-01",
				price: 6.95,
				shortDescription:
					"A short and powerful novel that introduces Dostoevsky's most important themes�psychological depth, existential despair, and the quest for meaning in a seemingly indifferent world.",
				longDescription:
					'"Notes from Underground" is a profound and poignant exploration of human consciousness, penned by the legendary Russian author Fyodor Dostoevsky. The novel, divided into two sections, delves deep into the psyche of an unnamed narrator, known only as the \'Underground Man\', who is a retired civil servant living in St. Petersburg. The first section, titled "Underground", is a bitter monologue where the Underground Man ruminates about the inherent contradictions of human nature and society\'s attempts to rationalize life through utopian ideals. \n\nThe second section of the novel, "Apropos of the Wet Snow", narrates incidents from the Underground Man\'s life, showcasing his contradictory character and his confrontations with society. His intense self-loathing, his paradoxical views, and his interactions with other characters like Liza, a compassionate prostitute, create an intricate tapestry of existential despair and moral dilemmas. Through these narratives, Dostoevsky examines the themes of free will, existentialism, and the dichotomy between reason and emotion.\n\n"Notes from Underground" is a fascinating journey into the heart of human existence. Dostoevsky\'s masterful exploration of philosophical ideas through the lens of a deeply flawed yet relatable protagonist makes this novel a timeless classic. Its intricate portrayal of man\'s struggle with societal norms, personal insecurities, and existential crises is sure to captivate any reader who appreciates profound, thought-provoking literature. This book is an essential read for those who desire to understand the human condition in all its complexity.',
				inventoryCount: 85,
				isbn: "9780486270531",
				author: {
					id: "cc198234-0a02-4299-bd2f-fdba9edfbbf8",
					authorFirstName: "Fyodor",
					authorLastName: "Dostoevsky",
				},
				bookReviews: [
					{
						id: "db822deb-97cb-404b-8c1f-00145260094e",
						shortReview: "Compelling read!",
						review:
							"Notes from Underground is a compelling and introspective work. Dostoevsky's portrayal of the human psyche is both unsettling and captivating.",
						rating: 4,
						user: {
							id: "9c1b9d38-b2df-4a79-8091-8ef8fa821c88",
							userName: "reader123",
						},
					},
					{
						id: "2314e8d2-ea82-48e4-831c-1db876924f87",
						shortReview: "Disappointing.",
						review:
							"Notes from Underground left me feeling disappointed. The protagonist's ramblings felt tedious and pretentious.",
						rating: 2,
						user: {
							id: "550de341-e5c4-486f-b087-5ef77ff3a72b",
							userName: "bookworm",
						},
					},
					{
						id: "fba12e53-6651-4c15-82c1-b74fd2a6e996",
						shortReview: "Dark and introspective.",
						review:
							"Notes from Underground is a dark and introspective novel. Dostoevsky's examination of alienation and existential angst is both unsettling and enlightening.",
						rating: 4,
						user: {
							id: "671b88b5-2cb1-43ff-9b2d-c19c6e319ef7",
							userName: "bookishgal",
						},
					},
					{
						id: "564f71ac-de62-4feb-87e2-3c5139f6bfc2",
						shortReview: "Compelling portrayal.",
						review:
							"Notes from Underground is a compelling portrayal of the human psyche. Dostoevsky's insights into the complexities of human nature are unparalleled.",
						rating: 5,
						user: {
							id: "85e505f3-d55e-45cb-8d38-f91ae9164d17",
							userName: "jenreads",
						},
					},
				],
				bookCategories: [
					{
						id: "bafbaf34-fa41-485d-9501-2486fcfa2eb0",
						category: {
							categoryName: "Philosophical Fiction",
						},
					},
					{
						id: "c7d679fa-4a21-4b0c-b6db-65a120d41641",
						category: {
							categoryName: "Philosophical",
						},
					},
				],
			},
			{
				id: "63970168-6e81-4cf4-b388-1052bacf712e",
				bookTitle: "For Whom the Bell Tolls",
				pageCount: 480,
				publishDate: "1940-10-21",
				price: 17,
				shortDescription:
					"Set against the backdrop of the Spanish Civil War, Hemingway's novel explores themes of love, loss, and the harsh realities of war.",
				longDescription:
					"\"For Whom the Bell Tolls\" is a stirring tale of love, loyalty, and conflict, masterfully penned by the incomparable Ernest Hemingway. Set against the tumultuous backdrop of the Spanish Civil War, this epic narrative is a profound exploration of the human spirit and the volatility of war. The protagonist, Robert Jordan, is an American professor turned dynamiter who has volunteered to fight for the Republicans against the Fascists. His mission: to blow up a bridge during an attack on the city of Segovia, a task that is as perilous as it is critical to the success of the Republican cause.\n\nAs the narrative unfolds, Hemingway delves into the complexities of war and the profound emotional turmoil that comes with it. Jordan's rigid commitment to his duty is gradually overshadowed by his love for Maria, a young Spanish woman who has suffered the brutalities of war. Their relationship, although tender and passionate, is constantly threatened by the harsh realities of their surroundings. Hemingway skillfully intertwines this poignant love story with the gritty details of war, creating a compelling narrative that is as heart-wrenching as it is riveting.\n\n\"For Whom the Bell Tolls\" is a testament to Hemingway's literary genius, his remarkable ability to portray the harsh realities of war while simultaneously exploring the depths of human emotion. Through vivid descriptions and complex characters, Hemingway paints a picture of war that is as realistic as it is tragic. The book is a haunting reflection on the fragility of life, the inevitability of death, and the enduring power of love. This timeless classic is more than just a war novel; it's a profound examination of the human condition, a story that will resonate with readers long after they've turned the last page.",
				inventoryCount: 63,
				isbn: "9780684803357",
				author: {
					id: "ae4b05b4-5e7b-44dc-9851-e8be1c36a79d",
					authorFirstName: "Ernest",
					authorLastName: "Hemingway",
				},
				bookReviews: [
					{
						id: "63d10e02-bb86-4731-b346-007b913b2caa",
						shortReview: "Powerful and gripping.",
						review:
							"For Whom the Bell Tolls is a powerful and evocative novel set during the Spanish Civil War. Hemingway's portrayal of the characters' struggles and the brutality of war is gripping.",
						rating: 4,
						user: {
							id: "3e4992a5-bde8-4df2-ae06-051d0b7a1805",
							userName: "booklover1",
						},
					},
					{
						id: "79b48f3f-9f16-4d90-adcc-54c275ae1b20",
						shortReview: "Has its moments.",
						review:
							"For Whom the Bell Tolls has its moments, but I found some parts to be slow-paced. The themes are important, but the execution could have been better.",
						rating: 3,
						user: {
							id: "8410ebc7-bddd-4cff-a651-24b74f193192",
							userName: "bibliophile",
						},
					},
					{
						id: "7dc80cd4-79f6-4bd3-9007-efc2f12dc6f7",
						shortReview: "Masterfully written.",
						review:
							"For Whom the Bell Tolls is a masterfully written novel that captures the essence of wartime struggle and sacrifice. Hemingway's prose is both poignant and profound.",
						rating: 5,
						user: {
							id: "7c7a29c9-a713-440b-9b85-eb5033f02641",
							userName: "avidreader7",
						},
					},
					{
						id: "9a0801db-aff9-4e5b-809f-4fe99fc3aa5f",
						shortReview: "Important but uneven.",
						review:
							"For Whom the Bell Tolls is an important literary work, but I struggled to connect with the characters. The pacing felt uneven at times.",
						rating: 3,
						user: {
							id: "7bb8095f-c1a8-4307-b74f-2affe40bae4b",
							userName: "litlover88",
						},
					},
				],
				bookCategories: [
					{
						id: "87b69c29-4749-4be0-a5ec-0ab1b1ea7352",
						category: {
							categoryName: "War",
						},
					},
					{
						id: "8da5234a-f0ce-4dc0-8a80-4046319143c3",
						category: {
							categoryName: "Science Fiction",
						},
					},
				],
			},
			{
				id: "bf0350e9-25d4-42bb-8c68-ec8f243e1755",
				bookTitle: "A Farewell to Arms",
				pageCount: 332,
				publishDate: "1929-09-01",
				price: 16,
				shortDescription:
					"A novel of love and war, telling the story of an American ambulance driver on the Italian front and his passion for a beautiful English nurse.",
				longDescription:
					"\"A Farewell to Arms\" is a captivating tale of love and war, set against the backdrop of the tumultuous World War I. The protagonist, Frederic Henry, is an American ambulance driver in the Italian army who finds himself entwined in the chaos of war, the complexities of love, and the inevitability of loss. Hemingway’s masterful storytelling captures the essence of war's brutality and the fleeting respite love offers, painting a vivid picture that draws the reader into the heart of the narrative.\n\nThe romance between Frederic and Catherine Barkley, a British nurse, forms the crux of the novel. Their relationship, ignited in the throes of war, blossoms into a profound love that stands as a beacon amidst the surrounding darkness. Catherine's character is a blend of strength and vulnerability, a perfect foil to Frederic's evolution from a disillusioned soldier to a man confronting the harsh realities of life and love. Their romance is a poignant exploration of the human capacity for love and sacrifice, set against the backdrop of a world gripped by devastation.\n\n\"A Farewell to Arms\" is not just a war novel, but an introspective journey into the human spirit's resilience. Hemingway's sparse yet evocative prose, coupled with his stark portrayal of war's horror and the solace found in unexpected places, creates a mesmerizing narrative that resonates with the reader long after the book is closed. This book is a must-read for those who appreciate literature that delves into the complexities of human emotion, the ravages of war, and the transformative power of love.",
				inventoryCount: 57,
				isbn: "9780142437339",
				author: {
					id: "ae4b05b4-5e7b-44dc-9851-e8be1c36a79d",
					authorFirstName: "Ernest",
					authorLastName: "Hemingway",
				},
				bookReviews: [
					{
						id: "f89c982f-b7dd-4035-81e1-d71827f29fd2",
						shortReview: "Timeless classic!",
						review:
							"A Farewell to Arms is a timeless classic that explores the harsh realities of war and the complexities of love. Hemingway's prose is both beautiful and haunting.",
						rating: 5,
						user: {
							id: "9c1b9d38-b2df-4a79-8091-8ef8fa821c88",
							userName: "reader123",
						},
					},
					{
						id: "17d45a11-ff5e-4192-87d4-5c7a8338e8cf",
						shortReview: "Disappointing.",
						review:
							"A Farewell to Arms left me disappointed. The plot felt predictable, and the characters lacked depth.",
						rating: 2,
						user: {
							id: "550de341-e5c4-486f-b087-5ef77ff3a72b",
							userName: "bookworm",
						},
					},
					{
						id: "bb65dc89-35f3-4d36-83b2-5c01eccb619f",
						shortReview: "Compelling narrative.",
						review:
							"A Farewell to Arms is a compelling narrative that beautifully captures the chaos and heartbreak of war. Hemingway's portrayal of love amidst adversity is deeply moving.",
						rating: 4,
						user: {
							id: "671b88b5-2cb1-43ff-9b2d-c19c6e319ef7",
							userName: "bookishgal",
						},
					},
					{
						id: "7eb23f98-85ce-402b-b203-588dde765e87",
						shortReview: "Poignant and heartbreaking.",
						review:
							"A Farewell to Arms is a poignant and heartbreaking tale of love and loss amidst the chaos of war. Hemingway's writing style is both powerful and restrained.",
						rating: 4,
						user: {
							id: "85e505f3-d55e-45cb-8d38-f91ae9164d17",
							userName: "jenreads",
						},
					},
				],
				bookCategories: [
					{
						id: "e50c0459-40ce-43ae-b73b-bc062321ac10",
						category: {
							categoryName: "War",
						},
					},
					{
						id: "7a3c0eea-f240-46b4-87b4-e176111173e1",
						category: {
							categoryName: "Science Fiction",
						},
					},
				],
			},
			{
				id: "af368a43-b2b8-4e26-a947-51b2a7b09696",
				bookTitle: "The Hobbit",
				pageCount: 310,
				publishDate: "1937-09-21",
				price: 14.99,
				shortDescription:
					"Bilbo Baggins, a hobbit enjoying his quiet life, is thrust into an epic quest by the wizard Gandalf and a group of dwarves to reclaim their mountain home from a dragon.",
				longDescription:
					"Dive into the spellbinding world of Middle Earth in J.R.R. Tolkien's timeless classic, \"The Hobbit.\" The story unfolds in the tranquil Shire, home to the hobbits, who are known for their peaceful and uncomplicated lives. Among them is our protagonist, Bilbo Baggins, a respectable hobbit content with his predictable existence, until the arrival of the wizard Gandalf and a group of dwarves turns his world upside down. Bilbo finds himself reluctantly thrust into a perilous adventure across Middle Earth to reclaim the dwarves' homeland from the ferocious dragon Smaug.\n\nThroughout the journey, Bilbo's courage, wisdom, and cunning are consistently put to the test. Each chapter is a riveting tale that sees Bilbo and the company encountering goblins, trolls, giant spiders, and other unspeakable creatures. The story masterfully blends action, humor, and suspense to keep readers on the edge of their seats. It also introduces the iconic character of Gollum and the Ring of Power, which will play a pivotal role in Tolkien's later epic, \"The Lord of the Rings.\"\n\n\"The Hobbit\" is more than just a fantasy adventure. It's a tale of personal growth and bravery, a story where the smallest character can make the biggest difference. It's about friendship, loyalty, treachery, and the eternal battle between good and evil. Tolkien's richly detailed world-building and compelling narrative style make this an unforgettable read, a must for any fantasy lover, and a timeless classic that continues to captivate readers of all ages. Embark on this remarkable journey with Bilbo, and let your imagination soar.",
				inventoryCount: 94,
				isbn: "9780547928227",
				author: {
					id: "b79427dc-0222-4547-8392-07cedf7a3e74",
					authorFirstName: "J.R.R.",
					authorLastName: "Tolkien",
				},
				bookReviews: [
					{
						id: "e4e3dbc4-7553-46e8-b51a-fe30b103f55f",
						shortReview: "Enchanting tale!",
						review:
							"The Hobbit is an enchanting tale filled with adventure and wonder. Tolkien's world-building is exceptional, and the characters are memorable.",
						rating: 5,
						user: {
							id: "3e4992a5-bde8-4df2-ae06-051d0b7a1805",
							userName: "booklover1",
						},
					},
					{
						id: "baaf0cc7-176b-4076-be4a-875cf26f1901",
						shortReview: "Enjoyable but slow-paced.",
						review:
							"The Hobbit was enjoyable, but I found some parts to be slow-paced. Nonetheless, Tolkien's creativity shines through.",
						rating: 3,
						user: {
							id: "8410ebc7-bddd-4cff-a651-24b74f193192",
							userName: "bibliophile",
						},
					},
					{
						id: "5e1ed5aa-c444-483f-914e-c228e5a520a0",
						shortReview: "Timeless classic!",
						review:
							"The Hobbit is a timeless classic that appeals to readers of all ages. Tolkien's imagination transports you to a magical world filled with dragons, elves, and dwarves.",
						rating: 5,
						user: {
							id: "7c7a29c9-a713-440b-9b85-eb5033f02641",
							userName: "avidreader7",
						},
					},
					{
						id: "11b31a5b-55f7-4f05-8c58-c63417231372",
						shortReview: "Classic adventure.",
						review:
							"The Hobbit is a classic adventure, but I found the pacing uneven at times. Nonetheless, Tolkien's world-building is impressive.",
						rating: 3,
						user: {
							id: "7bb8095f-c1a8-4307-b74f-2affe40bae4b",
							userName: "litlover88",
						},
					},
				],
				bookCategories: [
					{
						id: "0e378d4f-c5f7-48c1-906d-83b0b3c3d8f2",
						category: {
							categoryName: "Fantasy",
						},
					},
					{
						id: "4f396adb-2460-44fa-8bc5-aa3cbafabc2f",
						category: {
							categoryName: "Children’s Fantasy",
						},
					},
					{
						id: "bd770428-e983-4885-aacf-4d098c10ccb4",
						category: {
							categoryName: "Adventure",
						},
					},
				],
			},
			{
				id: "4e73e36a-1496-4566-b39a-016b04a2b6c2",
				bookTitle: "Animal Farm",
				pageCount: 112,
				publishDate: "1945-08-17",
				price: 9.99,
				shortDescription:
					"A farm is taken over by its overworked, mistreated animals. With flaming idealism and stirring slogans, they set out to create a paradise of progress, justice, and equality.",
				longDescription:
					'Set against the backdrop of a seemingly idyllic farm, George Orwell\'s "Animal Farm" is a stunning allegorical tale that explores the corrupting influence of power. The story begins when the animals of Manor Farm, tired of their life under the oppressive regime of their human farmer, Mr. Jones, stage a successful rebellion, instigated by the boar Old Major’s dream of an egalitarian society. The animals establish a democratic system based on equality, unity, and communal control of the farm. The pigs, being the most intelligent animals, assume the leadership roles, spearheaded by the crafty and charismatic pigs, Snowball and Napoleon.\n\nHowever, as the narrative unfolds, the utopian dream quickly deteriorates. Napoleon usurps power through cunning and ruthless tactics, driving Snowball away, and instigating a totalitarian regime under the guise of the animal’s original ideals. The Seven Commandments of Animalism, initially established to guide the animals, are gradually manipulated to justify Napoleon\'s selfish actions. The animals, once unified in their pursuit for freedom, find themselves entrapped in a cycle of exploitation and deceit, no better than their previous life under human control.\n\n"Animal Farm" is a masterful critique of political manipulation and a powerful exploration of the complexities of freedom, equality, and tyranny. The tale’s timeless relevance and Orwell\'s poignant symbolism make it an essential read for those interested in understanding the dynamics of power and the dangers of unchecked authority. The story is a grim reminder that absolute power corrupts absolutely, and that it is often the most innocent who suffer the most under such circumstances.',
				inventoryCount: 88,
				isbn: "9780451526342",
				author: {
					id: "2c7320aa-327a-4d3f-bd77-67fd4e9415ce",
					authorFirstName: "George",
					authorLastName: "Orwell",
				},
				bookReviews: [
					{
						id: "a8d9c527-2da6-41e3-a45b-6bba18118fcd",
						shortReview: "Thought-provoking.",
						review:
							"Animal Farm is a thought-provoking allegory that offers insights into politics and human nature. Orwell's writing is concise yet impactful.",
						rating: 4,
						user: {
							id: "9c1b9d38-b2df-4a79-8091-8ef8fa821c88",
							userName: "reader123",
						},
					},
					{
						id: "089ab597-46eb-4906-8ee2-1fa607a871ec",
						shortReview: "Disappointing execution.",
						review:
							"Animal Farm disappointed me. While the allegory is clever, I found the execution lacking. The characters felt one-dimensional.",
						rating: 2,
						user: {
							id: "550de341-e5c4-486f-b087-5ef77ff3a72b",
							userName: "bookworm",
						},
					},
					{
						id: "96099885-e2b0-431a-9da1-bfb32d5473bf",
						shortReview: "Chilling critique.",
						review:
							"Animal Farm is a chilling critique of totalitarianism and corrupt leadership. Orwell's allegorical storytelling is both clever and unsettling.",
						rating: 4,
						user: {
							id: "671b88b5-2cb1-43ff-9b2d-c19c6e319ef7",
							userName: "bookishgal",
						},
					},
					{
						id: "8455df28-73b5-4036-b7e1-4290a085da3f",
						shortReview: "Brilliant satire!",
						review:
							"Animal Farm is a brilliant satire that remains relevant today. Orwell's writing is incisive, and the allegory is executed flawlessly.",
						rating: 5,
						user: {
							id: "85e505f3-d55e-45cb-8d38-f91ae9164d17",
							userName: "jenreads",
						},
					},
				],
				bookCategories: [
					{
						id: "ea910b44-2244-450f-a20f-1ccaef12497c",
						category: {
							categoryName: "Inspirational",
						},
					},
					{
						id: "3703cc61-56b3-40f5-a1f6-0d5a95f090a1",
						category: {
							categoryName: "Satire",
						},
					},
					{
						id: "81242aac-fd13-41e6-856d-513518529e2e",
						category: {
							categoryName: "Social Commentary",
						},
					},
				],
			},
			{
				id: "3744ca10-be97-4822-b661-7c2e8cad5284",
				bookTitle: "As I Lay Dying",
				pageCount: 267,
				publishDate: "1930-10-06",
				price: 14.95,
				shortDescription:
					"The novel tells the story of the death of Addie Bundren and her poor, rural family's quest and motivations�noble or selfish�to honor her wish to be buried in the town of Jefferson.",
				longDescription:
					"\"As I Lay Dying\" is a profound exploration of life and death through the eyes of a poor, rural southern family. The narrative, written by celebrated author William Faulkner, traverses the journey of the Bundren family as they endeavor to fulfill the final wish of their matriarch, Addie Bundren – to be buried in her hometown, Jefferson. The novel unfolds through a series of 59 monologues, each narrated by one of fifteen characters, giving the reader an intimate glimpse into the perspectives and internal struggles of each family member and their individual experiences of grief, duty, and love.\n\nThe journey to Jefferson is fraught with trials and tribulations, mirroring the emotional turmoil within each family member. Faulkner uses the physical landscape and the harshness of their journey as a backdrop to further illuminate the complex dynamics of the Bundren family. The book’s exploration of existential themes through the characters' struggles with their personal demons and their determination to fulfill Addie's last wish, despite all odds, paints a haunting picture of human resilience in the face of adversity. \n\nFaulkner's \"As I Lay Dying\" is not just a narrative about a family's journey to bury their mother, but a profound examination of the human condition. Its unique narrative style, which seamlessly transitions between the subjective realities of its characters, allows the reader to delve deep into the psyche of each character. At the heart of this novel lies a poignant commentary on the impermanence of life, the subjective nature of reality, and the indomitable human spirit. This timeless classic promises to leave its readers with a lingering contemplation of their own existence, making it an essential read for any lover of literature.\n",
				inventoryCount: 50,
				isbn: "9780679732259",
				author: {
					id: "9e668a21-9cd9-4c4f-aa01-76993332fec5",
					authorFirstName: "William",
					authorLastName: "Faulkner",
				},
				bookReviews: [],
				bookCategories: [
					{
						id: "3ddbeb6e-232f-4a07-94ea-4362bbe17f79",
						category: {
							categoryName: "Drama",
						},
					},
					{
						id: "f6b464d2-e713-443b-a771-5aa66a788588",
						category: {
							categoryName: "Philosophical",
						},
					},
					{
						id: "b55aefe2-11f4-4a5d-a91d-0ff3b66c0347",
						category: {
							categoryName: "Feminist Literature",
						},
					},
				],
			},
			{
				id: "79e3a677-fb5d-4fd9-80be-ac66ab17196e",
				bookTitle: "The Sound and the Fury",
				pageCount: 326,
				publishDate: "1929-10-07",
				price: 15,
				shortDescription:
					"This novel captures the lives of the Compson family, focusing on the decline of the once-aristocratic clan and the fading of their Southern traditions, seen through the eyes of three brothers.",
				longDescription:
					"\"The Sound and the Fury\" is a profound and staggering exploration of the human condition as seen through the eyes of the tragic Compson family. Set in the post-Civil War South, William Faulkner masterfully uses stream-of-consciousness techniques to weave a complex narrative that dives into themes of time, innocence, love, and loss. With the backdrop of a changing society, the Compsons, once a prominent Southern family, are caught in a downward spiral of moral decay, financial ruin, and personal despair.\n\nThe story is told through the perspectives of four key characters, each representing a different facet of the Compson family's decline. The tale begins with mentally impaired Benjy Compson, whose disjointed and impressionistic narrative reflects his own fractured understanding of the world. The next section is devoted to Quentin Compson, a Harvard student tormented by the memories of his sister's fall from grace and obsessed with the idea of familial honor. The third section, narrated by the cynical and brutish Jason Compson, reveals the family's economic hardship and moral decline. The final section, told from the perspective of Dilsey, the family's black servant, offers an external perspective on the Compson's tragic downfall.\n\n\"The Sound and the Fury\" is not just a story of a family's downfall; it's an intricate exploration of the human psyche, societal norms, and the weight of history. Faulkner's groundbreaking writing style may be challenging for some, but it's a rewarding literary experience as it provides an intimate portrait of a family's unraveling. This masterpiece of American literature is a must-read for anyone seeking a deep and thought-provoking narrative that will leave an indelible impression long after the final page is turned.",
				inventoryCount: 77,
				isbn: "9780679732242",
				author: {
					id: "9e668a21-9cd9-4c4f-aa01-76993332fec5",
					authorFirstName: "William",
					authorLastName: "Faulkner",
				},
				bookReviews: [
					{
						id: "27d35782-ccd3-479c-82fd-d42074f066b3",
						shortReview: "Complex and rewarding.",
						review:
							"The Sound and the Fury is a complex and challenging read, but it rewards those who persevere. Faulkner's writing style may be difficult to follow at times, but the depth of the characters and themes makes it worthwhile.",
						rating: 4,
						user: {
							id: "3e4992a5-bde8-4df2-ae06-051d0b7a1805",
							userName: "booklover1",
						},
					},
					{
						id: "124e302c-935a-485c-b173-8a65a37145a3",
						shortReview: "Literary masterpiece.",
						review:
							"The Sound and the Fury is a literary masterpiece with its intricate narrative structure and profound exploration of human consciousness. However, its non-linear storytelling may not be for everyone.",
						rating: 3,
						user: {
							id: "550de341-e5c4-486f-b087-5ef77ff3a72b",
							userName: "bookworm",
						},
					},
					{
						id: "5d7eb5e6-86ef-4ef1-b367-05a69b89bb1e",
						shortReview: "Profound insights.",
						review:
							"The Sound and the Fury is a challenging read due to its nonlinear narrative structure, but it offers profound insights into the human condition. Faulkner's writing style is both beautiful and bewildering.",
						rating: 3,
						user: {
							id: "7bb8095f-c1a8-4307-b74f-2affe40bae4b",
							userName: "litlover88",
						},
					},
				],
				bookCategories: [
					{
						id: "da0ab020-2836-4c57-ac59-f3e682f7dbdb",
						category: {
							categoryName: "Drama",
						},
					},
					{
						id: "cb5221de-0cd6-4c9c-b9f9-0f4ff5e03186",
						category: {
							categoryName: "Philosophical",
						},
					},
					{
						id: "44e21f25-73dd-4dfb-94d3-02ebbc8904bb",
						category: {
							categoryName: "Feminist Literature",
						},
					},
				],
			},
			{
				id: "620cdcdc-1f5b-4822-9612-8d82467e9c20",
				bookTitle: "Murder on the Orient Express",
				pageCount: 256,
				publishDate: "1934-01-01",
				price: 14.99,
				shortDescription:
					"A classic mystery novel featuring the Belgian detective Hercule Poirot, who investigates a murder aboard the famous train. Christie's ingenious plot twists will keep you guessing until the very end.",
				longDescription:
					'"Murder on the Orient Express" is an enthralling tale that transports readers back in time to a snowbound train stuck in the Balkan hills. The story is centered around the indomitable detective, Hercule Poirot, who is enlisted to solve a gruesome murder boasting no apparent motive nor a conspicuous culprit. The victim, an American millionaire named Ratchett, is found stabbed to death in his locked compartment. As the Orient Express, usually a symbol of luxury and comfort, transforms into a claustrophobic crime scene, Poirot must rely on his wits and intuition to solve the seemingly unsolvable crime.\n\nIn this exhilarating and knotty tale, Agatha Christie, the queen of mystery, crafts an intricate web of secrets and lies. Each of the passengers on the train, from the impassive butler to the temperamental countess, has a plausible motive, and with the twisting plot, the reader is led down one false path after another. As Poirot delves deeper into the passengers’ backgrounds, he uncovers an array of connections to the victim and a past crime, setting up a thrilling stage for the detective’s famous denouement.\n\n"Murder on the Orient Express" is a definitive murder mystery that has captivated readers for generations, showcasing Christie at her ingenious best. The book delivers an unforgettable journey through deceit, revenge, and redemption. Each revelation brings a new layer of complexity to the narrative, making every page turn a nail-biting experience. This classic detective novel offers not just a whodunit, but a masterful exploration of crime and justice, making it an essential read for any mystery aficionado.',
				inventoryCount: 90,
				isbn: "9780062693662",
				author: {
					id: "f320efd3-ba7d-41ab-bf02-503189318d63",
					authorFirstName: "Agatha",
					authorLastName: "Christie",
				},
				bookReviews: [
					{
						id: "682ae87f-209a-46af-88a2-1e7840387947",
						shortReview: "Thrilling mystery!",
						review:
							"Murder on the Orient Express is a thrilling mystery that keeps you guessing until the end. Agatha Christie's plot twists and intricate characters make it a masterpiece of detective fiction.",
						rating: 5,
						user: {
							id: "9c1b9d38-b2df-4a79-8091-8ef8fa821c88",
							userName: "reader123",
						},
					},
					{
						id: "a14cafe5-34b8-4236-bf6b-d1ed1d29c689",
						shortReview: "Engaging whodunit.",
						review:
							"Murder on the Orient Express is a classic whodunit that keeps readers engaged from start to finish. Agatha Christie's plot twists are expertly crafted, making it a must-read for mystery enthusiasts.",
						rating: 4,
						user: {
							id: "7c7a29c9-a713-440b-9b85-eb5033f02641",
							userName: "avidreader7",
						},
					},
					{
						id: "22e3e191-9e1a-4c05-a1bf-5e0bf0acbc39",
						shortReview: "Captivating mystery.",
						review:
							"Murder on the Orient Express is a captivating mystery with a clever plot and well-developed characters. Agatha Christie's storytelling prowess shines through in this classic novel.",
						rating: 4,
						user: {
							id: "85e505f3-d55e-45cb-8d38-f91ae9164d17",
							userName: "jenreads",
						},
					},
				],
				bookCategories: [
					{
						id: "855aefeb-d6f0-4445-80ee-f14842e2ace3",
						category: {
							categoryName: "Detective Fiction",
						},
					},
					{
						id: "8b0d391c-9ad6-4702-8638-ab6945036f63",
						category: {
							categoryName: "Mystery",
						},
					},
				],
			},
			{
				id: "7fcf3d23-419c-454b-850f-1c07317caf8c",
				bookTitle: "Ulysses",
				pageCount: 730,
				publishDate: "1922-02-02",
				price: 23,
				shortDescription:
					"Joyce's groundbreaking novel chronicles the peripatetic appointments and encounters of Leopold Bloom in Dublin in the course of an ordinary day, 16 June 1904.",
				longDescription:
					'"Ulysses," penned by the literary genius James Joyce, is an epic of twentieth-century literature that intertwines the intricate lives of its characters over the course of a single day - June 16th, 1904, in Dublin, Ireland. This book pays homage to Homer\'s "Odyssey," with each of its 18 chapters mirroring an episode from the ancient Greek epic. Just as Odysseus embarks on a complex journey, so do the novel\'s primary characters: Leopold Bloom, a middle-aged Jewish man; Stephen Dedalus, a young artist who is a representation of Joyce himself; and Molly Bloom, Leopold’s unfaithful wife. Their paths cross and recross, their thoughts, desires, and actions weave into the rich tapestry of human experience, presenting a vibrant portrayal of life in its fullest sense.\n\nThe narrative of "Ulysses" is renowned for its stream-of-consciousness style, where Joyce masterfully delves into the deepest recesses of his characters\' minds, revealing their thoughts in a raw, unfiltered manner. Readers traverse through the labyrinth of inner consciousness, touching upon themes of religion, nationalism, sexuality, and identity. The book is rich in symbols and references, making it an immersive experience that demands the reader\'s engagement and rewards it with profound insights.\n\n"Ulysses" is not merely a book; it is an exploration of life\'s complexities and the human condition. Its innovative narrative style, intricate plot, and the depth of its characters make it a masterpiece that challenges and enriches the reader\'s understanding of literature and life. For those intrigued by the promise of a deep, philosophical journey filled with lyrical prose and complex characters, "Ulysses" offers an unforgettable literary voyage. Embark on this journey and discover the timeless and universal truths hidden in the mundane details of a single day in Dublin.',
				inventoryCount: 70,
				isbn: "9780141182803",
				author: {
					id: "e510348a-d8bd-4b1d-bcde-a4e8f30aef1d",
					authorFirstName: "James",
					authorLastName: "Joyce",
				},
				bookReviews: [
					{
						id: "032385b8-ae71-4be7-8e9c-b6dcc993cd59",
						shortReview: "Ambitious but dense.",
						review:
							"Ulysses is an ambitious and experimental novel, but I found it excessively dense and convoluted. Joyce's stream-of-consciousness style made it difficult for me to connect with the story.",
						rating: 2,
						user: {
							id: "8410ebc7-bddd-4cff-a651-24b74f193192",
							userName: "bibliophile",
						},
					},
					{
						id: "83efb705-5ff7-426f-aec6-fe0fb2b66a5f",
						shortReview: "Innovative storytelling.",
						review:
							"Ulysses is a literary tour de force that pushes the boundaries of conventional storytelling. Joyce's innovative use of language and symbolism creates a rich and immersive reading experience.",
						rating: 5,
						user: {
							id: "671b88b5-2cb1-43ff-9b2d-c19c6e319ef7",
							userName: "bookishgal",
						},
					},
				],
				bookCategories: [
					{
						id: "7e213b79-57a2-4025-9d30-a43e54ca9dd9",
						category: {
							categoryName: "Modernist",
						},
					},
					{
						id: "8e87782b-7738-4c13-a0fb-27bc8c017a19",
						category: {
							categoryName: "Social Commentary",
						},
					},
				],
			},
			{
				id: "b837fef5-40fb-474e-ba91-87c717c37544",
				bookTitle: "The Trial",
				pageCount: 304,
				publishDate: "1925-01-01",
				price: 12.95,
				shortDescription:
					"Kafka's nightmarish tale of a man arrested and prosecuted by a remote, inaccessible authority, with the nature of his crime revealed neither to him nor the reader.",
				longDescription:
					'In "The Trial," Franz Kafka takes readers on a bewildering journey into the life of Josef K., a respectable bank officer who is suddenly and inexplicably arrested one morning. He awakens on his 30th birthday to find two men in his room who inform him that he is under arrest, but they refuse to disclose what crime he\'s allegedly committed or who has accused him. He is not detained, but the arrest marks the beginning of a nightmarish struggle for Josef, as he tries to navigate through an inscrutable, labyrinthine judicial system that seems to be perpetually against him.\n\nThroughout this Kafkaesque narrative, Kafka paints a hauntingly bleak picture of societal bureaucracy and the crushing lack of personal freedom it can impose. Josef K. encounters a series of absurd and surreal situations and characters, from an eccentric lawyer to a seductive court artist. These interactions only seem to deepen his confusion, and his attempts to understand and confront his unknown charges become increasingly futile. The more he fights the system, the more entangled he becomes, culminating in a conclusion that is both shocking and inevitable.\n\n"The Trial" is a powerful exploration of existential angst, the human condition, and the often-dehumanizing effects of an overbearing bureaucratic system. Kafka\'s distinctly surreal storytelling style, combined with his penetrating insight into the absurdity of existence, will leave readers pondering long after they\'ve turned the last page. This novel is not only an unsettling reflection of our own society, but also a timeless masterpiece that challenges readers to question their own freedom, identity, and the very nature of justice itself.',
				inventoryCount: 80,
				isbn: "9780805209990",
				author: {
					id: "ab25f66b-2b22-4f27-ac88-5526e2359d4f",
					authorFirstName: "Franz",
					authorLastName: "Kafka",
				},
				bookReviews: [
					{
						id: "0ca950b8-4306-4efb-8a4a-7c2c9cc14292",
						shortReview: "Thought-provoking.",
						review:
							"The Trial is a thought-provoking novel that explores themes of bureaucracy and existentialism. Kafka's writing style is captivating, although the story can be unsettling at times.",
						rating: 4,
						user: {
							id: "3e4992a5-bde8-4df2-ae06-051d0b7a1805",
							userName: "booklover1",
						},
					},
					{
						id: "a2fa20c8-eb57-4d4a-a780-4b69a4978aab",
						shortReview: "Surreal and thought-provoking.",
						review:
							"The Trial is a surreal journey into the absurdity of modern society. Kafka's portrayal of bureaucracy and the individual's struggle against it is both unsettling and thought-provoking.",
						rating: 4,
						user: {
							id: "550de341-e5c4-486f-b087-5ef77ff3a72b",
							userName: "bookworm",
						},
					},
					{
						id: "acb8519f-3916-4c7f-8363-40552285bc7a",
						shortReview: "Surreal exploration.",
						review:
							"The Trial offers a surreal exploration of the absurdity of the legal system. While Kafka's writing is compelling, the lack of resolution may frustrate some readers.",
						rating: 3,
						user: {
							id: "7bb8095f-c1a8-4307-b74f-2affe40bae4b",
							userName: "litlover88",
						},
					},
				],
				bookCategories: [
					{
						id: "69b21fc6-c7cb-4b80-8932-a9b36b56d206",
						category: {
							categoryName: "Existential Fiction",
						},
					},
					{
						id: "b6835475-4c54-4c94-b2eb-09b3dd6d0762",
						category: {
							categoryName: "Existential Philosophy",
						},
					},
					{
						id: "2a13bd2b-9b54-4513-bedd-c50edd1b51e1",
						category: {
							categoryName: "Absurdist Fiction",
						},
					},
				],
			},
			{
				id: "5c6d507d-0b1f-494f-86b2-61f5a64e1fbe",
				bookTitle: "Beloved",
				pageCount: 324,
				publishDate: "1987-09-01",
				price: 16,
				shortDescription:
					"Morrison's novel examines the haunting legacy of slavery, as a mother makes a horrifying choice out of love that resonates across generations.",
				longDescription:
					"\"Beloved\" by Toni Morrison is a poignant tale of slavery and its traumatic aftermath, set in post-Civil War America. The story revolves around Sethe, a former slave, and her daughter Denver, who live in a haunted house in Cincinnati. Their home is frequented by what they believe is the ghost of Sethe's first daughter, whose tombstone is engraved simply with the word 'Beloved.' The narrative unfolds as the mother and daughter grapple with their chilling reality, exploring themes of motherhood, freedom, and the heavy burden of past horrors.\n\nThe story takes a dramatic turn when Paul D, a fellow slave from the same plantation Sethe escaped from, arrives and dispels the ghost. He brings a semblance of normalcy to their life, triggering hope for a better, peaceful future. However, this hope is short-lived as a mysterious young woman named Beloved appears. With her arrival, old, suppressed memories resurface, forcing Sethe to confront her traumatic past. The enigmatic Beloved, who shares the name with the ghost, becomes a catalyst for change, further intensifying the narrative.\n\nMorrison's \"Beloved\" is a masterful blend of magical realism and historical fiction that delves into the psychological impact of slavery. The powerful narrative, complemented by Morrison's lyrical prose, paints a vivid picture of a woman's journey towards redemption and self-acceptance. Each page of this novel is imbued with emotion and depth, offering readers a profound exploration of a dark period in American history. \"Beloved\" is more than just a story; it is an emotional experience that will stay with readers long after they've turned the last page.",
				inventoryCount: 85,
				isbn: "9781400033416",
				author: {
					id: "60c07ad1-f495-412c-9d6a-268497cc9864",
					authorFirstName: "Toni",
					authorLastName: "Morrison",
				},
				bookReviews: [
					{
						id: "43a27e95-a3b3-4fb3-ba35-afb66d1e3850",
						shortReview: "Powerful and haunting.",
						review:
							"Beloved is a powerful and haunting novel that delves into the legacy of slavery and its impact on individuals and families. Morrison's prose is beautifully crafted, and the story stays with you long after reading.",
						rating: 5,
						user: {
							id: "9c1b9d38-b2df-4a79-8091-8ef8fa821c88",
							userName: "reader123",
						},
					},
					{
						id: "3f3121d2-97b6-4421-ac61-b73201c71bb6",
						shortReview: "Masterful and moving.",
						review:
							"Beloved is a masterful work of literature that confronts the horrors of slavery with raw honesty and empathy. Morrison's storytelling is deeply moving, making this a must-read for all.",
						rating: 5,
						user: {
							id: "7c7a29c9-a713-440b-9b85-eb5033f02641",
							userName: "avidreader7",
						},
					},
					{
						id: "4faec2d1-29a7-4a74-a477-a5fb4ce4bfe5",
						shortReview: "Haunting and evocative.",
						review:
							"Beloved is a haunting and evocative novel that captures the pain and resilience of its characters. Morrison's prose is lyrical, and the story stays with you long after finishing.",
						rating: 4,
						user: {
							id: "85e505f3-d55e-45cb-8d38-f91ae9164d17",
							userName: "jenreads",
						},
					},
				],
				bookCategories: [
					{
						id: "edecd246-7a7d-4e66-95a0-c4e0a2d412f4",
						category: {
							categoryName: "Gender Studies",
						},
					},
					{
						id: "bde0ac98-9ff3-48f8-acd5-57fce2169456",
						category: {
							categoryName: "Feminist Literature",
						},
					},
					{
						id: "fc70bf8d-111b-4be6-8dbc-fb38c099763a",
						category: {
							categoryName: "Literary Fiction",
						},
					},
				],
			},
			{
				id: "cdd9ff82-fbbe-4473-9469-4e639ec6eaf5",
				bookTitle: "One Hundred Years of Solitude",
				pageCount: 417,
				publishDate: "1967-06-05",
				price: 18.99,
				shortDescription:
					"M�rquez's epic tells the story of the Buend�a family over seven generations, blending the magical and the real in a vividly painted Colombian landscape.",
				longDescription:
					"\"Set in the mythical town of Macondo, 'One Hundred Years of Solitude' by Gabriel Garcia Marquez is an epic tale of love, loss, and family. Spanning over a century, the narrative follows the Buendía family, starting with the ambitious patriarch, José Arcadio Buendía, who founds the vibrant town. As time unfolds, the family's members suffer from a variety of tribulations, including unrequited love, insurmountable loneliness, and the curse of recurring mistakes – a mirroring of the cyclical nature of history.\n\nThe novel is a profound exploration of reality through magical realism, a literary style that infuses the ordinary world with fantastical elements. This extraordinary tapestry of the Buendía family's existence is woven with apparitions, prophecies, and miracles, which are accepted as parts of everyday life. These elements not only create a dreamlike quality but also resonate with the universal human experiences of love, despair, and the desire for understanding and connection.\n\n'One Hundred Years of Solitude' is a mesmerizing blend of the mundane and the mystical. It is an exploration not just of a family, but of humanity's collective dreams, tragedies, and follies. Immortalized by Marquez's lyrical prose, the Buendía family's tale is a timeless metaphor for the cyclical nature of history and the human condition. As the family's saga unfolds across generations, readers will be drawn into a world where the lines between reality and magic, between fact and fable, blur and disappear. This masterpiece is an invitation to lose oneself in the labyrinth of time and discover the enchanting beauty of magical realism.\"",
				inventoryCount: 95,
				isbn: "9780060883287",
				author: {
					id: "f3d83e18-6d8d-4e34-a27c-f9a02d26e5ec",
					authorFirstName: "Gabriel García",
					authorLastName: "Márquez",
				},
				bookReviews: [
					{
						id: "1f7735cd-e5e7-495b-bece-9cf6601041b0",
						shortReview: "Ambitious but challenging.",
						review:
							"One Hundred Years of Solitude is an ambitious novel with its intricate storytelling and magical realism. While some may find it enchanting, I struggled to connect with the multitude of characters and their interwoven stories.",
						rating: 3,
						user: {
							id: "8410ebc7-bddd-4cff-a651-24b74f193192",
							userName: "bibliophile",
						},
					},
					{
						id: "77219b52-71e7-4322-82ed-741d09d9f0b7",
						shortReview: "Mesmerizing and enchanting.",
						review:
							"One Hundred Years of Solitude is a mesmerizing tale that spans generations, blending reality with myth and magic. Garc�a M�rquez's prose is enchanting, although the nonlinear narrative may require patience.",
						rating: 4,
						user: {
							id: "671b88b5-2cb1-43ff-9b2d-c19c6e319ef7",
							userName: "bookishgal",
						},
					},
				],
				bookCategories: [
					{
						id: "8e55a86e-1551-4561-80c1-873093cb0870",
						category: {
							categoryName: "Magical Realism",
						},
					},
					{
						id: "de250c4b-92ac-4490-9fa5-42820f9c9d4a",
						category: {
							categoryName: "Social Commentary",
						},
					},
					{
						id: "ca509d49-e46f-4950-890e-77b50d479835",
						category: {
							categoryName: "Cultural",
						},
					},
				],
			},
			{
				id: "206b9fe4-f7c1-4549-9641-c025ce74cf06",
				bookTitle: "Norwegian Wood",
				pageCount: 296,
				publishDate: "1987-09-04",
				price: 15,
				shortDescription:
					"A poignant story of one college student's romantic coming-of-age, Norwegian Wood takes us to that distant place of a young man's first, hopeless, and heroic love.",
				longDescription:
					"Immerse yourself in the emotionally resonant world of \"Norwegian Wood,\" a poignant novel by Japanese author Haruki Murakami. The narrative is set in Tokyo during the late 1960s, a time of global youth-driven turmoil, and follows our protagonist, Toru Watanabe. Toru, a quiet and serious college student, finds himself ensnared in a complex web of relationships, each one unveiling a new layer to the human experience. The novel is an exploration of love, loss, and personal growth, punctuated by the evocative and captivating backdrop of a rapidly changing Japan.\n\nToru's narrative hinges on two women who are polar opposites but equally enchanting - the beautiful yet emotionally fragile Naoko, and the lively, outgoing Midori. Naoko, who is scarred by the tragic suicide of her childhood sweetheart, finds a sense of solace and familiarity in Toru. Their relationship is a delicate dance, haunted by the past and mired in their struggle to cope with their emotional baggage. In contrast, Midori represents life, vivacity, and the present. She is the embodiment of an uninhibited life, unafraid of expressing her desires and feelings. As Toru navigates his deepening connections with these women, he is forced to confront the dichotomy between death and life, past and present, and love and loss.\n\n\"Norwegian Wood\" is not just a novel; it's a journey that plumbs the depths of human emotion and takes readers on a rollercoaster ride through love, grief, and the complexities of growing up. Murakami's storytelling is masterful, drawing readers into this intimate world with his vivid descriptions and captivating characters. The book serves as a stark reminder of the transient nature of life, the enduring impact of loss, and the redeeming power of love. It's a must-read for those who seek to find beauty in melancholy and meaning in the mundane.",
				inventoryCount: 85,
				isbn: "9780375704024",
				author: {
					id: "8d820051-04b1-4d4f-999b-4c762a023286",
					authorFirstName: "Haruki",
					authorLastName: "Murakami",
				},
				bookReviews: [
					{
						id: "a289cb44-6bd8-4863-a9de-71e1921c0cda",
						shortReview: "Beautifully written.",
						review:
							"Norwegian Wood is a beautifully written novel that explores themes of love, loss, and coming of age. Murakami's prose is captivating, and the characters are deeply relatable.",
						rating: 4,
						user: {
							id: "7c7a29c9-a713-440b-9b85-eb5033f02641",
							userName: "avidreader7",
						},
					},
					{
						id: "1ff16177-9d18-4f98-ba9c-b79b69529cc8",
						shortReview: "Poignant but slow pacing.",
						review:
							"Norwegian Wood is a poignant tale of love and loss, but I found the pacing to be a bit slow at times. However, Murakami's introspective narrative style is still engaging.",
						rating: 3,
						user: {
							id: "ca1f6b8e-fa79-4d48-8cbc-dd0ef439327e",
							userName: "lovesbooks",
						},
					},
				],
				bookCategories: [
					{
						id: "5bc907e4-4a7e-4baf-8cb4-6d938edc272f",
						category: {
							categoryName: "Coming-of-Age",
						},
					},
					{
						id: "44c44ce0-b8cd-4c04-ac93-70c6cd0a2340",
						category: {
							categoryName: "Romance",
						},
					},
					{
						id: "e97888b3-2308-436b-b8e8-367da18cb11a",
						category: {
							categoryName: "Existential Fiction",
						},
					},
				],
			},
			{
				id: "d324d5df-fe08-4bf6-9eeb-f1cab73f121b",
				bookTitle: "1Q84",
				pageCount: 928,
				publishDate: "2009-05-29",
				price: 22.95,
				shortDescription:
					"An ode to George Orwell's '1984' told in a world with two moons, 1Q84 is a fascinating, complex novel of love, terror, and longing.",
				longDescription:
					"\"1Q84\" is a meticulously designed narrative masterpiece by Haruki Murakami that effortlessly blends reality and fantasy to create a mesmerizing universe. This hypnotic novel revolves around two protagonists, Aomame and Tengo, whose destinies are mysteriously intertwined in the year 1984. Aomame, a fitness instructor with a secret identity as a deadly assassin, and Tengo, a gifted writer and math teacher, find themselves in a parallel universe, termed '1Q84' by Aomame - where the 'Q' symbolizes a question mark, questioning the reality of the world.\n\nThis parallel universe is a place where the lines between reality and fantasy blur. Two moons hang in the sky, and mysterious 'Little People' emerge from the mouth of a dead goat. In this strange world, both Aomame and Tengo are drawn into a complex plot involving a dyslexic teenage girl, a religious cult, a private investigator, and a feeble old dowager. As the narrative unfolds, the pair's connection becomes evident and their longing to reunite is heartrending, yet their journey is fraught with danger and bizarre occurrences.\n\n\"1Q84\" is a testament to Murakami's imaginative power and unique storytelling ability. It's a complex and thought-provoking book that challenges readers' perceptions of reality, while exploring themes of love, loneliness, and the quest for identity. The novel’s intricate plot and the author's ability to create a tangible sense of unease and suspense will keep readers captivated until the very last page. This book is not just a story, but an immersive experience that will leave readers questioning their understanding of their own realities.",
				inventoryCount: 75,
				isbn: "9780307593313",
				author: {
					id: "8d820051-04b1-4d4f-999b-4c762a023286",
					authorFirstName: "Haruki",
					authorLastName: "Murakami",
				},
				bookReviews: [
					{
						id: "6fa8c3f9-c9e8-482b-bf3b-9d29960f2dd2",
						shortReview: "Masterpiece of storytelling.",
						review:
							"1Q84 is a masterpiece of storytelling, blending elements of fantasy and mystery seamlessly. Murakami's imagination knows no bounds, and the intricate plot keeps you hooked till the end.",
						rating: 5,
						user: {
							id: "8410ebc7-bddd-4cff-a651-24b74f193192",
							userName: "bibliophile",
						},
					},
					{
						id: "d1e26153-3417-42b5-b21e-afffc105e703",
						shortReview: "Enthralling journey.",
						review:
							"1Q84 is an enthralling journey into a surreal world where reality and fantasy intertwine. Murakami's ability to blend genres and create complex characters is unparalleled.",
						rating: 5,
						user: {
							id: "85e505f3-d55e-45cb-8d38-f91ae9164d17",
							userName: "jenreads",
						},
					},
				],
				bookCategories: [
					{
						id: "c9d33c18-a72b-4149-b289-69b96ef2d045",
						category: {
							categoryName: "Postmodern",
						},
					},
					{
						id: "1c80eb2f-8f2b-4464-9835-b1adc96ecec6",
						category: {
							categoryName: "Cultural",
						},
					},
					{
						id: "8d336666-9767-4db7-88ba-cc0c88003f3b",
						category: {
							categoryName: "Social Commentary",
						},
					},
				],
			},
			{
				id: "805bf29a-9afa-4e20-81ab-92c25868a9e2",
				bookTitle: "Harry Potter and the Chamber of Secrets",
				pageCount: 341,
				publishDate: "1998-07-02",
				price: 12.99,
				shortDescription:
					"The second installment in the Harry Potter series finds Harry and his friends facing new challenges, including the legend of the Chamber of Secrets.",
				longDescription:
					"In \"Harry Potter and the Chamber of Secrets\", the second installment of J.K. Rowling's epic seven-part saga, the magic intensifies as young wizard Harry Potter enters his second year at Hogwarts School of Witchcraft and Wizardry. The story begins with Harry struggling through another summer with his dreadful relatives, the Dursleys, who fear and detest magic. However, a house-elf named Dobby appears, warning Harry of the peril that awaits him at Hogwarts. Ignoring the warning, Harry returns to Hogwarts, only to find the school plagued by a series of mysterious attacks and a strange voice haunting him.\n\nThe heart of the story revolves around the 'Chamber of Secrets' — a hidden chamber within the school, reputed to be the home of a monster. Harry, along with his best friends Hermione Granger and Ron Weasley, embarks on a quest to solve the mystery. As students are petrified, Harry finds himself entangled in the dark history of the school. He discovers his unusual ability to speak Parseltongue (snake language), which makes him a prime suspect amongst his peers. Amid the fear and suspicion, the trio uncovers a diary belonging to Tom Riddle, which holds clues to the Chamber’s whereabouts and the monster within.\n\nRowling's narrative is suspenseful, filled with twists that keep readers on the edge of their seats. Harry’s courage, loyalty, and desire for justice intensify, showcasing tremendous growth in his character. The book explores themes of friendship, courage, and the often blurred line between good and evil. \"Harry Potter and the Chamber of Secrets\" is a masterfully crafted tale that weaves mystery, adventure, and a hefty dose of magic, making it an essential read for any fantasy lover.",
				inventoryCount: 93,
				isbn: "9780439064873",
				author: {
					id: "d063d6d6-4fb8-4e3b-9d9a-b8e9a70b2d29",
					authorFirstName: "J.K.",
					authorLastName: "Rowling",
				},
				bookReviews: [
					{
						id: "73a95a37-0e8c-4390-9de4-35e26b56561d",
						shortReview: "Delightful continuation.",
						review:
							"Harry Potter and the Chamber of Secrets is a delightful continuation of the wizarding world saga. Rowling's storytelling remains captivating, and the magical world she creates is enchanting.",
						rating: 4,
						user: {
							id: "550de341-e5c4-486f-b087-5ef77ff3a72b",
							userName: "bookworm",
						},
					},
					{
						id: "0d708dcc-7095-4f6d-b58a-7c437f73aee4",
						shortReview: "Magical adventure.",
						review:
							"Harry Potter and the Chamber of Secrets is a magical adventure that continues to captivate readers of all ages. Rowling's world-building and character development are exceptional.",
						rating: 4,
						user: {
							id: "9c1b9d38-b2df-4a79-8091-8ef8fa821c88",
							userName: "reader123",
						},
					},
				],
				bookCategories: [
					{
						id: "e9181bbd-3639-4f34-90de-a94c9e5ecb32",
						category: {
							categoryName: "Children’s Literature",
						},
					},
					{
						id: "608d2515-1e0c-4fc7-aba1-8b769f6f2fe1",
						category: {
							categoryName: "Children’s Fantasy",
						},
					},
					{
						id: "55b0ac14-56ef-4b47-a4fe-0b150f6fbe79",
						category: {
							categoryName: "Young Adult Fiction",
						},
					},
				],
			},
			{
				id: "52767cd1-098b-46f1-9758-c8d6ceda6a69",
				bookTitle: "The Stand",
				pageCount: 1153,
				publishDate: "1978-10-03",
				price: 18,
				shortDescription:
					"Stephen King's apocalyptic vision of a world blasted by plague and embroiled in an elemental struggle between good and evil.",
				longDescription:
					"\"The Stand\" is an epic post-apocalyptic novel penned by the master of horror, Stephen King. It's a story that begins with a bang, quite literally, as a man-made super flu nicknamed 'Captain Trips' escapes a government lab and decimates 99% of the world's population. As the survivors across the United States grapple with the sudden end of the world as they know it, they find themselves divided into two groups, drawn by dreams of two very different figures: the benevolent 108-year-old Mother Abigail, and the malevolent Randall Flagg, the Dark Man.\n\nThe novel weaves together the stories of a diverse group of characters, each with their own rich backstory and personal struggles. This motley crew includes a quiet everyman from Texas, a talented musician who struggles with addiction, a deaf-mute drifter, and a brilliant sociopath to name a few. As they navigate a world irrevocably changed by the super flu, they are drawn inexorably towards either Mother Abigail in Boulder, Colorado, striving to rebuild society, or Randall Flagg in Las Vegas, reveling in anarchy and destruction.\n\n\"The Stand\" is not just a tale of survival in the face of catastrophe, but a profound exploration of the eternal struggle between good and evil. It's a gripping saga that takes readers on a journey through a desolate landscape filled with chilling encounters, moral dilemmas, and the continual quest for hope amidst despair. This is Stephen King at his finest, blending elements of horror, fantasy, and western, to create a world that is both terrifyingly real and eerily fantastical. A must-read for those who crave a heart-pounding adventure that delves deep into the human psyche.",
				inventoryCount: 80,
				isbn: "9780307743688",
				author: {
					id: "0cab471e-fda3-41f7-a936-cdfcd8f35154",
					authorFirstName: "Stephen",
					authorLastName: "King",
				},
				bookReviews: [
					{
						id: "b50bdd44-4a74-41b9-8800-489f3099f15e",
						shortReview: "Masterful storytelling.",
						review:
							"The Stand is an epic tale of survival and human nature. King's storytelling is masterful, and the characters are richly developed. A must-read for fans of post-apocalyptic fiction.",
						rating: 5,
						user: {
							id: "550de341-e5c4-486f-b087-5ef77ff3a72b",
							userName: "bookworm",
						},
					},
				],
				bookCategories: [
					{
						id: "6fd95de6-1ecd-4d1e-92e5-af4fa2fac9b8",
						category: {
							categoryName: "Horror",
						},
					},
					{
						id: "a4324e22-59f7-480c-9c78-6ba3f6ed657e",
						category: {
							categoryName: "Post-Apocalyptic",
						},
					},
					{
						id: "aec608a8-fc1b-48dc-94ed-65f4d17aa35c",
						category: {
							categoryName: "Dystopian Fiction",
						},
					},
				],
			},
			{
				id: "50617fb5-d986-4002-80f5-161bdf1bd29f",
				bookTitle: "And Still I Rise",
				pageCount: 67,
				publishDate: "1978-08-17",
				price: 17,
				shortDescription:
					"Maya Angelou's third volume of poetry is a powerful collection that spans many years of her life. Her heartfelt and poignant poems speak to the resilience of the human spirit.",
				longDescription:
					"From the profound pen of Maya Angelou comes \"$And Still I Rise,\" an anthem of strength and determination, a clarion call to those seeking resilience amid adversity. Through her lyrical poetry, Angelou embarks on a journey that resonates with the human experience, centering on themes of love, loss, triumph, and the enduring spirit of the individual. Told with remarkable candor and imbued with an unshakeable belief in the power of resilience, this collection is a testament to the human capacity to rise above challenges and face adversity with courage and grace.\n\nThe book is divided into three sections, each capturing a different phase of Angelou's life. The first section delves into the deep-seated prejudices of a racially divided America, portraying Angelou's experiences as a Black woman with heart-wrenching honesty. The second section explores themes of love and loss, while the third encapsulates the theme of triumph, asserting the power of resilience and symbolizing her rise from adversity. \n\n\"$And Still I Rise\" is a potent reminder of the indomitable human spirit, a beacon of hope for those embattled by life's challenges. It's a book that encourages readers to endure, to fight, to rise, offering a timeless message of resilience that transcends the boundaries of race, gender, and social stratum. The depth of Angelou's verse and the resonance of her experiences weave a tapestry of inspiration that is as compelling as it is uplifting. This is more than just a book; it's an empowering journey that promises to leave readers changed, emboldened, and inspired.",
				inventoryCount: 62,
				isbn: "9780394502526",
				author: {
					id: "e1bba2d8-9338-4ced-9f66-9611eee9dbe5",
					authorFirstName: "Maya",
					authorLastName: "Angelou",
				},
				bookReviews: [
					{
						id: "e33a909c-0e4a-4551-9a57-8041532b77ff",
						shortReview: "Powerful and inspiring.",
						review:
							"And Still I Rise is a powerful collection of poems that inspire resilience and strength. Angelou's words resonate deeply, offering hope and empowerment to all who read them.",
						rating: 4,
						user: {
							id: "85e505f3-d55e-45cb-8d38-f91ae9164d17",
							userName: "jenreads",
						},
					},
					{
						id: "690c136c-e518-42ad-8046-5717ae0d6040",
						shortReview: "Empowering masterpiece.",
						review:
							"And Still I Rise is a masterpiece that celebrates the resilience of the human spirit. Angelou's poetry is both empowering and uplifting, inspiring readers to overcome adversity.",
						rating: 5,
						user: {
							id: "7bb8095f-c1a8-4307-b74f-2affe40bae4b",
							userName: "litlover88",
						},
					},
				],
				bookCategories: [
					{
						id: "ed420c09-ffa5-42eb-b7c3-b9c870608222",
						category: {
							categoryName: "Inspirational",
						},
					},
					{
						id: "5733e479-3bc3-4622-ba99-35bb63188827",
						category: {
							categoryName: "Poetry",
						},
					},
				],
			},
			{
				id: "fd2d8199-f285-4b4d-95c4-acd2b8c58023",
				bookTitle: "Cat's Cradle",
				pageCount: 304,
				publishDate: "1963-04-11",
				price: 15.95,
				shortDescription:
					"Vonnegut's satirical commentary on modern man and his madness. An apocalyptic tale of this planet's ultimate fate, it features a midget as the protagonist.",
				longDescription:
					"\"Cats’s Cradle\" is a satirical postmodern novel, with science fiction elements, by American writer Kurt Vonnegut. The narrative chronicles the life of writer John, or Jonah, who embarks on a journey to probe into the life of the late Dr. Felix Hoenikker, a fictional co-creator of the atomic bomb. As he delves deeper, John becomes embroiled in the lives of the eccentric Hoenikker children, a bizarre religion named Bokononism, and a deadly substance called Ice-Nine. Vonnegut artfully weaves themes of science, religion, and human folly into a tapestry of dark humor, raising questions about the advancements of science and the meaning of life.\n\nThe story takes a dramatic turn when John arrives on the Caribbean island of San Lorenzo, a dictatorial banana republic, where the strange religion of Bokononism is practiced in secret. Here, he learns about Ice-Nine, the potentially earth-destroying substance developed by Dr. Hoenikker. The substance, which is capable of freezing any liquid it comes into contact with, is in the hands of Hoenikker's three eccentric children, which leads to calamitous consequences. The book is imbued with Vonnegut’s unique blend of satire and science fiction, creating a somber commentary on the human condition.\n\n\"Cats's Cradle\" is a thought-provoking exploration of the dangers of unbridled technological advancement and the futility of mankind's attempts to control such power. Vonnegut's biting satire and sharp wit entertain and challenge the reader, forcing them to confront uncomfortable truths about society's blind faith in science. The book's distinctive blend of humor, philosophy, and tragedy make it a captivating read that leaves a lasting impression. Dive into the world of \"Cat's Cradle\" and embark on a thrilling journey that will make you question the world around you.",
				inventoryCount: 88,
				isbn: "9780385333481",
				author: {
					id: "a303ae3e-c2be-4a19-80b8-1b28bc6aabeb",
					authorFirstName: "Kurt",
					authorLastName: "Vonnegut",
				},
				bookReviews: [
					{
						id: "b39535c3-74b6-4a36-9490-e9a27e00455c",
						shortReview: "Intriguing but disjointed.",
						review:
							"Cat's Cradle is an intriguing and thought-provoking novel that explores the consequences of science and technology. Vonnegut's satire is sharp, but the plot felt disjointed at times.",
						rating: 3,
						user: {
							id: "ca1f6b8e-fa79-4d48-8cbc-dd0ef439327e",
							userName: "lovesbooks",
						},
					},
				],
				bookCategories: [
					{
						id: "b81ea244-86b4-4ea6-9989-4c8c3e3f4c76",
						category: {
							categoryName: "Postmodern",
						},
					},
					{
						id: "6af8c7df-9fe2-48d5-87d7-e2be3e6d97d7",
						category: {
							categoryName: "Satire",
						},
					},
				],
			},
			{
				id: "ea7c29e2-a0ef-4ccd-8c13-13226fe5f9d0",
				bookTitle: "Go Set a Watchman",
				pageCount: 278,
				publishDate: "2015-07-14",
				price: 27.99,
				shortDescription:
					"Originally written in the mid-1950s, Go Set a Watchman was the novel Harper Lee first submitted to her publishers before To Kill a Mockingbird. It features many of the characters from the latter novel some twenty years later.",
				longDescription:
					'"Go Set a Watchman" by Harper Lee is a thought-provoking masterpiece that delves into the complex themes of morality, family ties, and racial tension. Set in the mid-1950s, the novel unfolds in Maycomb County, Alabama, where Jean Louise Finch, now 26, returns home from New York City to visit her aging father, Atticus Finch. The narrative constructively juxtaposes Jean Louise’s present life with flashbacks from her childhood, revealing a deep exploration of the protagonist\'s character development and her relationships with other characters. \n\nJean Louise\'s homecoming, however, is marred by the unsettling discovery of her town\'s bigotry and her father\'s involvement in a racially prejudiced organization. This revelation shatters her idealized image of her father and forces her to confront the harsh reality of entrenched racism in the South. Atticus Finch, once a paragon of morality and justice in "To Kill a Mockingbird," is portrayed as a man of his time, grappling with the winds of change sweeping across the nation. \n\n"Go Set a Watchman" poses profound questions about conscience, home, and the struggle against inequality. Harper Lee skillfully navigates these heavy themes with the grace of a seasoned storyteller. The book serves as an illuminating exploration of the loss of childhood innocence and the painful journey to self-discovery. It\'s a compelling tapestry of human frailty, strength, and the enduring struggle for justice, making it a must-read for those seeking a profound understanding of American history and the human condition.',
				inventoryCount: 82,
				isbn: "9780062409850",
				author: {
					id: "a98359d9-0d50-469e-9c98-2557d43f9b9c",
					authorFirstName: "Harper",
					authorLastName: "Lee",
				},
				bookReviews: [
					{
						id: "8f8c5572-be57-43e0-b468-35db1e872f90",
						shortReview: "Intriguing sequel.",
						review:
							"Go Set a Watchman is an intriguing sequel to To Kill a Mockingbird, offering readers a glimpse into the complexities of the characters' lives. While it lacks the impact of its predecessor, it still raises thought-provoking questions about identity and family.",
						rating: 3,
						user: {
							id: "9c1b9d38-b2df-4a79-8091-8ef8fa821c88",
							userName: "reader123",
						},
					},
				],
				bookCategories: [
					{
						id: "9648a56a-2377-4150-8cc0-f5d699e93b60",
						category: {
							categoryName: "Coming-of-Age",
						},
					},
					{
						id: "a82702d4-30e4-4e84-86a6-a4e3bd19f004",
						category: {
							categoryName: "Cultural",
						},
					},
					{
						id: "f4a0b539-c9c3-459d-addd-1362915a0b95",
						category: {
							categoryName: "Southern Fiction",
						},
					},
				],
			},
			{
				id: "ebce05f7-237f-410d-9d75-72b00bb1ca8b",
				bookTitle: "Fahrenheit 451",
				pageCount: 158,
				publishDate: "1953-10-19",
				price: 15.99,
				shortDescription:
					"A dystopian novel by American writer Ray Bradbury, about a future American society where books are outlawed and 'firemen' burn any that are found. The novel presents a future American society where books are outlawed and 'firemen' burn any that are found.",
				longDescription:
					'In the thrilling dystopian novel "Fahrenheit 451" by Ray Bradbury, readers are transported into a terrifying future where books are deemed dangerous and are outlawed by a totalitarian government. The protagonist, Guy Montag, is a fireman, a role that has a chillingly different connotation in this society. Instead of extinguishing fires, firemen ignite them, burning books and the homes of those who dare to keep these forbidden items. Montag, initially unquestioning and compliant, is content with his work, until a series of events trigger a profound transformation that leads him to question the system he has been serving.\n\nMontag\'s world is turned upside down when he meets his new neighbor, a spirited and insightful teenager named Clarisse McClellan. Her non-conformist ideas, enthusiasm for the natural world, and love for books spark curiosity within Montag. His growing disillusionment with society\'s ignorance and complacency is further fueled when his wife, Mildred, nearly dies from an overdose of sleeping pills, an event the emotionless, screen-obsessed society around him seems to dismiss with alarming nonchalance. These experiences awaken Montag\'s awareness of the bleakness of his world and the value of the knowledge contained in books, leading him to secretly hoard some of the books he was supposed to burn.\n\n"Fahrenheit 451" takes readers on a gripping journey as Montag becomes a rebel within his own system, seeking knowledge and understanding through the very books he was once employed to destroy. He encounters various characters along the way, such as the wise and book-loving Professor Faber and the menacing fire chief Beatty, who challenge and shape his newfound beliefs. As Montag works to ignite a societal revolution, he must navigate a world where surveillance is omnipresent, and betrayal can come from the unlikeliest of sources. Vivid, thought-provoking, and profoundly moving, "Fahrenheit 451" is a stark exploration of censorship, conformity, and the power of literature, guaranteed to leave readers pondering long after they\'ve turned the final page.',
				inventoryCount: 90,
				isbn: "9781451673319",
				author: {
					id: "ba6835fe-babb-40f4-ab70-9cb04f9efc88",
					authorFirstName: "Ray",
					authorLastName: "Bradbury",
				},
				bookReviews: [
					{
						id: "d5f0d9b6-4745-4df4-bdb6-c73de479307e",
						shortReview: "Compelling and thought-provoking.",
						review:
							"Fahrenheit 451 is a compelling dystopian novel that explores the dangers of censorship and the power of knowledge. Bradbury's writing is both thought-provoking and haunting, leaving a lasting impact on readers.",
						rating: 4,
						user: {
							id: "7bb8095f-c1a8-4307-b74f-2affe40bae4b",
							userName: "litlover88",
						},
					},
					{
						id: "d2ce4b35-d29a-4d11-9b20-336a3d264452",
						shortReview: "Poetic masterpiece.",
						review:
							"Fahrenheit 451 is a thought-provoking masterpiece that explores the dangers of censorship and the importance of intellectual freedom. Bradbury's prose is both poetic and powerful, making it a must-read for all lovers of literature.",
						rating: 5,
						user: {
							id: "de223b1f-28ef-4921-b846-0613747e1cee",
							userName: "iambook",
						},
					},
				],
				bookCategories: [
					{
						id: "ff21d7e6-e33f-4ad8-942a-e3d96ea7e340",
						category: {
							categoryName: "Dystopian Fiction",
						},
					},
					{
						id: "78ddd597-f011-47d5-9318-aa7237d4bcc6",
						category: {
							categoryName: "Satire",
						},
					},
				],
			},
			{
				id: "94b08bcf-57a4-440f-9d04-3997e03bdb2e",
				bookTitle: "The War of the Worlds",
				pageCount: 192,
				publishDate: "1898-01-01",
				price: 8.99,
				shortDescription:
					"An early science fiction work by H.G. Wells that describes an invasion of late Victorian England by Martians equipped with advanced weaponry. It is a seminal depiction of an alien invasion of Earth.",
				longDescription:
					"\"The War of the Worlds\" is a pulse-pounding science fiction novel by H.G. Wells that plunges its readers into a chilling, alien-invaded world. Set in the quiet county of Surrey, England, the book unfurls the cataclysmic event of brutal Martians descending upon Earth in giant, heat-ray-wielding tripods, causing havoc, destruction, and panic. The protagonist, a nameless philosopher-scientist, narrates the terrifying ordeal of mankind, as the advanced extraterrestrial beings demonstrate their indifference towards human life and civilization.\n\nThe narrative masterfully interweaves the protagonist's desperate struggle for survival with vivid and horrifying descriptions of the Martian onslaught. As the Martians consume the land and its inhabitants with their terrifying war machines and poisonous black smoke, the protagonist's journey to London becomes a testament to the resilience of the human spirit in the face of unimaginable horror. With England's military power futile against the formidable alien technology, the story probes the fragility of mankind and the potential consequences of scientific advancements.\n\n\"The War of the Worlds\" is as much a thrilling tale of an alien invasion as it is a profound exploration of evolution, British imperialism, and the human condition. Wells crafts an uncanny and atmospheric setting where readers can feel the dread, chaos, and despair seeping from every page. This seminal work of science fiction, with its enduring themes and spine-chilling narrative, promises an epic, suspenseful reading experience that will leave you questioning humanity's place in the universe.",
				inventoryCount: 76,
				isbn: "9780486295060",
				author: {
					id: "8c87a0c5-c01e-470f-b256-5776ab33dd96",
					authorFirstName: "H.G.",
					authorLastName: "Wells",
				},
				bookReviews: [
					{
						id: "a98d6643-b506-4a38-972e-5171cd2dfe3a",
						shortReview: "Dated and slow-paced.",
						review:
							"The War of the Worlds is a classic science fiction novel that has not aged well. While the concept is interesting, the execution feels dated, and the pacing is slow. Overall, it failed to engage me as a reader.",
						rating: 2,
						user: {
							id: "7c7a29c9-a713-440b-9b85-eb5033f02641",
							userName: "avidreader7",
						},
					},
				],
				bookCategories: [
					{
						id: "01a020a4-c41e-45bc-9ed3-80150dfc5118",
						category: {
							categoryName: "Science Fiction",
						},
					},
					{
						id: "4ddcd658-ed0f-48f1-bd1f-a2a0c5fd515f",
						category: {
							categoryName: "Social Commentary",
						},
					},
				],
			},
			{
				id: "9b22756c-bebf-4cda-a0aa-8fb22d733681",
				bookTitle: "The Tell-Tale Heart and Other Writings",
				pageCount: 448,
				publishDate: "1982-10-01",
				price: 6.95,
				shortDescription:
					"A collection of Poe's most famous tales and poems, featuring 'The Tell-Tale Heart,' 'The Fall of the House of Usher,' 'The Cask of Amontillado,' and others. These tales explore themes of death, decay, and madness.",
				longDescription:
					"\"Dive into the intricate and wildly imaginative world of Edgar Allan Poe with 'The Tell-Tale Heart and Other Writings'. This collection showcases the author’s ability to captivate readers through his immersive tales of mystery and macabre. With a refined blend of suspense and horror, Poe's stories take us on a journey into the minds of individuals wrestling with guilt, madness, and the supernatural, all while exploring the deeper themes of human nature and existence.\n\n'The Tell-Tale Heart' is the centerpiece of this anthology, a chilling narrative of a man who succumbs to insanity under the weight of his own guilt. His desperate attempts to prove his sanity, narrating his meticulous planning and execution of an unthinkable crime, only serve to plunge the reader deeper into the abyss of his madness. This tale of psychological horror is an unflinching exploration into the darker corners of the human mind, cementing Poe's legacy in the genre. \n\nThis collection also features Poe's other masterpieces like 'The Fall of the House of Usher', 'The Cask of Amontillado', and 'The Masque of the Red Death'. Each tale is a fine example of Poe's ability to craft atmospheric settings and complex characters, making this book a must-read for lovers of classic literature and gothic horror. With every page, you'll find yourself enthralled by Poe's unique storytelling, leaving you questioning the fine line between sanity and madness, reality and illusion, life and death. This is a book that compels, haunts, and stays with you long after you've turned the final page.\"",
				inventoryCount: 65,
				isbn: "9780553212280",
				author: {
					id: "eba08f6a-63ae-4808-a778-479ffc4fbb8b",
					authorFirstName: "Edgar Allan",
					authorLastName: "Poe",
				},
				bookReviews: [
					{
						id: "bd853f00-5a8f-43c2-af7d-866549674b09",
						shortReview: "Captivating collection.",
						review:
							"The Tell-Tale Heart and Other Writings is a captivating collection of Edgar Allan Poe's works. Each story is masterfully crafted, drawing readers into the dark and mysterious world of Poe's imagination.",
						rating: 4,
						user: {
							id: "3e4992a5-bde8-4df2-ae06-051d0b7a1805",
							userName: "booklover1",
						},
					},
				],
				bookCategories: [
					{
						id: "d486caa5-ed62-4dee-95b2-10c24ae5d917",
						category: {
							categoryName: "Horror",
						},
					},
					{
						id: "b169b4ad-6f0a-4c06-8ee3-9b2e224ebe90",
						category: {
							categoryName: "Poetry",
						},
					},
				],
			},
			{
				id: "a8d8dbe3-40ff-4784-a3db-05ad1f550185",
				bookTitle: "Selected Poems of Emily Dickinson",
				pageCount: 256,
				publishDate: "2000-01-01",
				price: 12,
				shortDescription:
					"Emily Dickinson's poetry is a profound and largely idiosyncratic exploration of the mysteries of life, death, and nature. This selection includes some of her most famous poems, providing a good introduction to her work.",
				longDescription:
					'In "Selected Poems of Emily Dickinson," readers are invited to step into the enigmatic yet deeply profound world of one of America\'s most celebrated poets. This collection curates a selection of Dickinson\'s most revered works, offering a diverse range of her poignant, thought-provoking poetry. With over a thousand poems to her name, this collection has been meticulously curated to encapsulate Dickinson\'s unique take on life, death, love, nature, and the human condition. Each poem is a testament to her keen observation, her profound introspection, and her uncanny ability to create rich, vivid imagery.\n\nThe book opens the door to Dickinson\'s secluded life in 19th-century New England and her unique approach to poetry. Her work often strays from conventional rules of rhythm and rhyme, instead employing slant rhyme, unconventional punctuation, and idiosyncratic capitalization to convey her thoughts. Her poems are noted for their lyrical quality, imbued with an emotional intensity that ranges from the joyous to the melancholic. The collection includes famous works like "Because I could not stop for Death," "Hope is the thing with feathers," and "I heard a Fly buzz - when I died," showcasing Dickinson\'s distinctive perspective on universal themes.\n\n"Selected Poems of Emily Dickinson" is not merely a book; it is an exploration of a remarkable mind and its unfiltered reflections on existence. The poems, though often short, are packed with layers of meaning that invite readers to delve deeper and ponder over Dickinson\'s musings. This collection is perfect for both seasoned lovers of poetry and newcomers looking to experience the magic of Dickinson\'s verse. It serves as a testament to her enduring influence and relevance, offering a timeless journey through her unique poetic landscape.',
				inventoryCount: 50,
				isbn: "9780486411071",
				author: {
					id: "84b7e973-ece3-4ce3-82ac-34375a69993d",
					authorFirstName: "Emily",
					authorLastName: "Dickinson",
				},
				bookReviews: [
					{
						id: "27acc03f-c2b0-463a-b341-527284576007",
						shortReview: "Beautiful anthology.",
						review:
							"Selected Poems of Emily Dickinson is a beautiful anthology showcasing the poet's unique style and profound insights. Dickinson's poetry touches the soul and leaves a lasting impression on readers.",
						rating: 5,
						user: {
							id: "7bb8095f-c1a8-4307-b74f-2affe40bae4b",
							userName: "litlover88",
						},
					},
					{
						id: "c39fb039-9701-4ab9-8964-2f2750db35d6",
						shortReview: "Thought-provoking.",
						review:
							"Selected Poems of Emily Dickinson is a thought-provoking collection that showcases the poet's mastery of language and deep understanding of the human condition. Each poem offers a glimpse into the complexities of life and emotion.",
						rating: 4,
						user: {
							id: "ca1f6b8e-fa79-4d48-8cbc-dd0ef439327e",
							userName: "lovesbooks",
						},
					},
				],
				bookCategories: [
					{
						id: "d0bd4d49-fb87-43bc-81e1-dcec8f772a70",
						category: {
							categoryName: "Poetry",
						},
					},
					{
						id: "7eb0bed4-420f-4bad-9412-9d8bef3a0f4a",
						category: {
							categoryName: "Philosophical",
						},
					},
				],
			},
			{
				id: "4bca2528-955e-4aec-b96a-5f4afc8d8fc3",
				bookTitle: "The Weary Blues",
				pageCount: 104,
				publishDate: "1926-01-01",
				price: 12,
				shortDescription:
					"Hughes's first book of poetry, 'The Weary Blues,' describes the blues as both a major influence on his poetry and a major theme of his work.",
				longDescription:
					'Immerse yourself in the pulsating rhythm of the Jazz Age with Langston Hughes’ evocative masterpiece, "The Weary Blues". This seminal collection of poems explores the blues theme in its rawest form, narrating tales of love, sorrow, and the incredible resilience of the human spirit. Hughes sets the stage in the Harlem Renaissance, a critical era in American history where the African-American community found their voice through art, literature and music. He deeply delves into the collective consciousness, painting a vivid picture of the struggles and triumphs that define the African-American experience.\n\nIn Hughes\' richly textured narrative, the reader encounters a haunting blend of despair and hope. He weaves his words with a lyrical elegance, his poems resonating with the rhythm of blues. The titular poem, "The Weary Blues", encapsulates this perfectly, illustrating the soulful tunes of a lone blues musician playing through the night. Hughes\' infusion of musical elements into his poetry not only enhances its aesthetic appeal but also powerfully communicates the themes of endurance, despair, and strength, which are central to the lived experiences of his characters.\n\n"The Weary Blues" is more than just a poetry collection; it\'s a profound exploration of life, a stirring amalgamation of music and language that continues to resonate today. Hughes’ work is a testament to the power of poetry and music in articulating the human experience in all its shades. This book is bound to leave you moved, introspective, and with a greater appreciation for the cultural richness of the Harlem Renaissance. If you\'re a lover of poetry, history, or jazz, "The Weary Blues" is a must-have addition to your bookshelf.',
				inventoryCount: 50,
				isbn: "9780486454481",
				author: {
					id: "ae029772-9302-4516-89ba-18dc518b7ae1",
					authorFirstName: "Langston",
					authorLastName: "Hughes",
				},
				bookReviews: [
					{
						id: "99389e3e-a61f-4e38-8ce5-c692f9789c5e",
						shortReview: "Mixed feelings.",
						review:
							"The Weary Blues is an interesting collection of Langston Hughes' poetry, but it lacks the depth and resonance found in some of his other works. While some poems shine, others feel uninspired.",
						rating: 3,
						user: {
							id: "550de341-e5c4-486f-b087-5ef77ff3a72b",
							userName: "bookworm",
						},
					},
				],
				bookCategories: [
					{
						id: "221ef325-3ad5-4768-8d6c-6c10d68dc590",
						category: {
							categoryName: "Poetry",
						},
					},
					{
						id: "0503d68a-c288-4aa2-8925-5274b5b4d6af",
						category: {
							categoryName: "Philosophical",
						},
					},
					{
						id: "49cf6a72-09d6-493b-bc44-dfbbe54cc2eb",
						category: {
							categoryName: "Inspirational",
						},
					},
				],
			},
			{
				id: "bf0f6e2b-2aa4-4668-a18d-5985bc3ed428",
				bookTitle: "The Collected Poems of Langston Hughes",
				pageCount: 736,
				publishDate: "1994-10-31",
				price: 22,
				shortDescription:
					"This collection presents 860 poems written by Hughes, one of the leading voices of the Harlem Renaissance.",
				longDescription:
					"\"The Collected Poems of Langston Hughes\" is an enchanting journey through the rich tapestry of Black American life in the 20th century. This comprehensive collection of Hughes' work is an exploration of his life's poetic output, from the 1920s Harlem Renaissance through the civil rights movement of the 1960s. Hughes' voice resonates with an unapologetic honesty that captures the essence of the African American experience, expressing the joys, sorrows, dreams, and everyday realities of a community often ignored by mainstream literature. \n\nHughes' poetry, with its unique blend of music, humor, and social commentary, paints vivid pictures of the lives he portrays. His words dance off the page, creating an immersive world that invites readers to experience the rhythm of jazz clubs, the warmth of family gatherings, and the fiery passion of political rallies. From the simple beauty of a sunset to the complexities of racial identity, Hughes' work offers a profound insight into the human condition.\n\n\"The Collected Poems of Langston Hughes\" is more than just a book of poetry; it is a testament to a time, a place, and a people. It's a heartfelt hymn of hope and resilience that speaks to the enduring spirit of African Americans. This collection is perfect for those seeking a deeper understanding of American history, or anyone who appreciates the power of poetry to capture the nuances of life. As relevant today as it was on the day of its first publication, Hughes' poetry continues to inspire readers with its timeless message of courage, dignity, and the enduring power of the human spirit.",
				inventoryCount: 80,
				isbn: "9780679764083",
				author: {
					id: "ae029772-9302-4516-89ba-18dc518b7ae1",
					authorFirstName: "Langston",
					authorLastName: "Hughes",
				},
				bookReviews: [
					{
						id: "9a24bec5-148e-4354-b927-a42165cbadad",
						shortReview: "Extraordinary.",
						review:
							"The Collected Poems of Langston Hughes is an extraordinary compilation of his work that beautifully captures the essence of the Harlem Renaissance. Hughes' poetry resonates with timeless themes of identity, struggle, and resilience, making this collection a must-read for poetry enthusiasts.",
						rating: 5,
						user: {
							id: "3e4992a5-bde8-4df2-ae06-051d0b7a1805",
							userName: "booklover1",
						},
					},
					{
						id: "7f2686a4-6e40-4560-aa33-db2dd98eb213",
						shortReview: "Mixed feelings.",
						review:
							"While The Collected Poems of Langston Hughes showcases the poet's talent and cultural significance, some of the poems lack the depth and impact found in his more renowned works. Nonetheless, it offers valuable insights into African American history and identity.",
						rating: 3,
						user: {
							id: "7c7a29c9-a713-440b-9b85-eb5033f02641",
							userName: "avidreader7",
						},
					},
					{
						id: "8c0bd027-f27d-4c60-b18f-e1c644a9b766",
						shortReview: "A treasure trove.",
						review:
							"The Collected Poems of Langston Hughes is a treasure trove of literary gems that celebrate the African American experience with grace and authenticity. Hughes' powerful imagery and poignant storytelling make this collection a timeless classic.",
						rating: 4,
						user: {
							id: "de223b1f-28ef-4921-b846-0613747e1cee",
							userName: "iambook",
						},
					},
				],
				bookCategories: [
					{
						id: "9ebc96c3-624b-4953-90b9-a85bd499d615",
						category: {
							categoryName: "Poetry",
						},
					},
					{
						id: "74523104-8d6a-479f-983d-16ed92d4d2c5",
						category: {
							categoryName: "Philosophical",
						},
					},
					{
						id: "a1f51d00-c143-4ae8-b059-fd922a9505f0",
						category: {
							categoryName: "Cultural",
						},
					},
					{
						id: "208a93e0-5bb8-4e8c-b2f4-1a256ea385f9",
						category: {
							categoryName: "Inspirational",
						},
					},
				],
			},
			{
				id: "594a2650-3005-404d-85db-6a2a33040b56",
				bookTitle: "The Bell Jar",
				pageCount: 288,
				publishDate: "1963-01-14",
				price: 17,
				shortDescription:
					"Plath's semi-autobiographical novel, which details the descent of Esther Greenwood, a young woman moving to New York City, into mental illness.",
				longDescription:
					'In "The Bell Jar," acclaimed writer Sylvia Plath creates an intimate portrait of Esther Greenwood, a young woman on the brink of her future, but trapped in the overwhelming pressures of expectations, societal norms, and her own mental health. Set in the 1950s, the novel paints a vivid picture of Esther’s life as she navigates her way through a prestigious internship in New York City, her return to her family home, and ultimately, her descent into depression. Plath masterfully explores the themes of identity, freedom, and the deep-seated desire to break free from the shackles of the conventional life that has been laid out for her.\n\nEsther\'s journey in "The Bell Jar" is a deep dive into the human psyche, exploring the complexities of mental health and society’s attitudes towards it. As Esther grapples with her increasingly fragile mental state, Plath provides readers with an unflinching look into the realities of depression, the suffocating feeling of being caught in a bell jar, isolated and unable to escape. The novel is also a poignant critique of the expectations placed on women during the mid-20th century, and Esther’s struggle to conform to these expectations reflects the battle many women face in their pursuit of independence and personal fulfillment.\n\n"The Bell Jar" is a powerful, haunting, and deeply moving novel that perfectly encapsulates the struggle of dealing with mental health issues within society’s rigid confines. Plath\'s eloquent prose and the raw honesty of her portrayal of Esther\'s mental decline make this a compelling and poignant read. This novel will resonate with readers who are interested in exploring the complexities of the human mind, feminism, and the effects of societal pressures on individual identity. Its haunting narrative and timeless themes make "The Bell Jar" a classic that continues to captivate and inspire readers around the world.',
				inventoryCount: 90,
				isbn: "9780060837020",
				author: {
					id: "7989698a-1c58-400f-9a2c-3b2ce6a07f15",
					authorFirstName: "Sylvia",
					authorLastName: "Plath",
				},
				bookReviews: [
					{
						id: "e545d2be-ed73-4536-81c7-cd96dd45b745",
						shortReview: "Poignant.",
						review:
							"The Bell Jar offers a poignant portrayal of mental illness and societal pressures through the lens of protagonist Esther Greenwood. Sylvia Plath's prose is hauntingly beautiful, drawing readers into Esther's world of despair and introspection.",
						rating: 4,
						user: {
							id: "9c1b9d38-b2df-4a79-8091-8ef8fa821c88",
							userName: "reader123",
						},
					},
					{
						id: "c178ffed-f005-4508-bee1-1e6818e52e3f",
						shortReview: "Overly dramatic.",
						review:
							"While The Bell Jar explores important themes, such as mental illness and societal expectations, Sylvia Plath's writing style can feel overly dramatic and self-indulgent at times. The protagonist's journey lacks nuance and depth, making it difficult to fully engage with the story.",
						rating: 2,
						user: {
							id: "85e505f3-d55e-45cb-8d38-f91ae9164d17",
							userName: "jenreads",
						},
					},
					{
						id: "95709e02-8c68-44d8-b6f0-62a36c817d50",
						shortReview: "Candid exploration.",
						review:
							"The Bell Jar provides a candid exploration of mental illness and the challenges faced by women in the 1950s. While Sylvia Plath's writing is undeniably evocative, the novel's pacing can feel sluggish, and certain passages lack clarity.",
						rating: 3,
						user: {
							id: "ca1f6b8e-fa79-4d48-8cbc-dd0ef439327e",
							userName: "lovesbooks",
						},
					},
				],
				bookCategories: [
					{
						id: "5fca3b52-5650-4598-957a-a9b9b80f4028",
						category: {
							categoryName: "Psychological Fiction",
						},
					},
					{
						id: "26aa723b-164f-4ddc-9a27-9d23ee9d69ea",
						category: {
							categoryName: "Feminist Literature",
						},
					},
					{
						id: "07e750aa-bc02-4cf8-9f62-a6d99844a137",
						category: {
							categoryName: "Philosophical Fiction",
						},
					},
				],
			},
			{
				id: "316a8af2-1946-44ca-b01d-099130775132",
				bookTitle: "Brave New World",
				pageCount: 311,
				publishDate: "1932-01-01",
				price: 15.99,
				shortDescription:
					"Huxley's masterpiece and arguably one of the most prescient dystopian works of the 20th century, imagining a future with a rigidly controlled society.",
				longDescription:
					'In Aldous Huxley\'s profoundly compelling novel, "Brave New World," readers are plunged into a dystopian future where individualism is subdued and society functions under a rigid, scientifically engineered hierarchy. The novel weaves a fascinating, yet grim narrative of a world state in the year 2540 AD where human beings are bred in hatcheries, their roles and intelligence predetermined, and happiness is maintained through a steady diet of drugs and recreational sex. In this future, the notion of family, cultural diversity, art, literature, and the pursuit of scientific truth have been discarded in favor of stability, conformity, and pleasure.\n\nThe story revolves around Bernard Marx, an Alpha Plus psychologist who, despite his high caste, feels discontented with the monotony and lack of emotional depth in his society. This leads him to bring John, a unique individual raised in a "Savage Reservation" (one of the few places untouched by the World State\'s influence), back to London. John\'s exposure to this new world and his struggle to comprehend and fit into its norms, provides a stark contrast to the mind-numbing uniformity of the World State, thereby highlighting the disturbing realities of this seemingly utopian society.\n\n"Brave New World" is a gripping exploration of the perils of unbridled technological advancement and the loss of individuality, presenting a bleak warning about the potential future of humanity. Through vivid characters and their personal struggles, Huxley raises profound questions on morality, freedom, and the true essence of humanity. This book is a must-read for those who enjoy thought-provoking literature that challenges societal norms and makes one question the price of perceived perfection and uniformity.',
				inventoryCount: 70,
				isbn: "9780060850524",
				author: {
					id: "54de300c-c508-4e55-ba71-e38df42cc218",
					authorFirstName: "Aldous",
					authorLastName: "Huxley",
				},
				bookReviews: [
					{
						id: "c858f916-90f3-49de-843f-9e0dcbf4d50b",
						shortReview: "Thought-provoking dystopia.",
						review:
							"Brave New World is a thought-provoking exploration of a dystopian society where technology and conditioning control every aspect of life. While the novel's themes are compelling, some readers may find its portrayal of human nature and freedom overly pessimistic.",
						rating: 4,
						user: {
							id: "3e4992a5-bde8-4df2-ae06-051d0b7a1805",
							userName: "booklover1",
						},
					},
					{
						id: "59c675e7-42fc-41b2-98e2-52cb883b2544",
						shortReview: "Captivating critique.",
						review:
							"Brave New World is a captivating critique of a society obsessed with consumerism and superficial happiness. Huxley's vision of a world where individuality is sacrificed for stability resonates deeply in today's world, making it a must-read for any lover of dystopian fiction.",
						rating: 5,
						user: {
							id: "7bb8095f-c1a8-4307-b74f-2affe40bae4b",
							userName: "litlover88",
						},
					},
					{
						id: "55f2a9fa-b2be-4e16-a7cd-88851ae26fc7",
						shortReview: "Chilling vision.",
						review:
							"While Brave New World presents a chilling vision of a future society controlled by technology and conditioning, some aspects of the novel feel dated and overly didactic. However, Huxley's exploration of themes such as individuality and conformity still holds relevance today.",
						rating: 3,
						user: {
							id: "85e505f3-d55e-45cb-8d38-f91ae9164d17",
							userName: "jenreads",
						},
					},
				],
				bookCategories: [
					{
						id: "8c7bda9c-6cbe-42a8-9c13-3e1012639c81",
						category: {
							categoryName: "Dystopian Fiction",
						},
					},
					{
						id: "a03b312b-e348-40b2-bfa3-b426419d597e",
						category: {
							categoryName: "Social Commentary",
						},
					},
					{
						id: "f28581a4-035e-48ba-9c76-0466f9c47362",
						category: {
							categoryName: "Post-Apocalyptic",
						},
					},
				],
			},
			{
				id: "aea16536-842b-4108-9d5a-bb0cb5bb8704",
				bookTitle: "Moby-Dick",
				pageCount: 752,
				publishDate: "1851-10-18",
				price: 18,
				shortDescription:
					"Melville's epic tale of obsession and revenge on the high seas, as Captain Ahab hunts the white whale, Moby-Dick, who maimed him.",
				longDescription:
					"\"Moby-Dick\" by Herman Melville is a profound and timeless saga of relentless obsession, humanity's struggle against the unfathomable power of nature, and the fine line between sanity and madness. The novel is set in the 19th century, and chronicles the riveting journey of the Pequod, a whaling ship captained by the brooding and monomaniacal Captain Ahab. The narrative is recounted by Ishmael, a contemplative sailor who invites readers into the heart of the sea, and the soul of a ship and its crew, all united in a single, desperate purpose.\n\nAt the core of this tempestuous journey is Captain Ahab's insatiable quest to seek revenge on Moby Dick, a colossal white sperm whale that had maimed him in a previous encounter. Ahab's obsession with retribution becomes the ship's mission, imbuing the voyage with an aura of foreboding doom. Amidst the howling winds and monstrous waves of the sea, readers catch glimpses of the crew's diverse stories, their camaraderie, fears, and their shared fate. \n\n\"Moby-Dick\" is much more than a tale of a whaling expedition. It is an exploration of the human condition, our obsessions, our fears, and our relationship with the natural world. The sea and the elusive Moby Dick become metaphors for the existential questions that haunt us all. Through its poetic language, intricate symbolism, and exploration of complex themes, Melville's masterpiece will transport you to the heart of the sea and the depths of human nature. This journey will leave you pondering the great white whale long after the last page has been turned.",
				inventoryCount: 85,
				isbn: "9780142437247",
				author: {
					id: "de777e19-98bd-4da0-af06-653de1c60549",
					authorFirstName: "Herman",
					authorLastName: "Melville",
				},
				bookReviews: [
					{
						id: "ff8a0acb-ade2-4ac9-9895-b8ab7980f2d7",
						shortReview: "Epic adventure.",
						review:
							"Moby-Dick is an epic tale that explores the depths of human obsession and the vastness of the sea. Melville's prose is rich and immersive, drawing readers into the world of whaling ships and larger-than-life characters. A must-read for anyone who loves adventure and literary depth.",
						rating: 5,
						user: {
							id: "9c1b9d38-b2df-4a79-8091-8ef8fa821c88",
							userName: "reader123",
						},
					},
					{
						id: "0edf61d1-ddf2-4b50-a3ac-2dfc27c7fa1c",
						shortReview: "Towering achievement.",
						review:
							"Moby-Dick is a towering achievement in American literature, blending adventure, philosophy, and seafaring lore into a gripping narrative. While some may find Melville's digressions and dense prose challenging, the novel's exploration of themes such as fate and revenge make it a rewarding read.",
						rating: 4,
						user: {
							id: "7c7a29c9-a713-440b-9b85-eb5033f02641",
							userName: "avidreader7",
						},
					},
					{
						id: "eac33d70-17fa-4dfd-a6e3-5af50c49dfa0",
						shortReview: "Complex exploration.",
						review:
							"Moby-Dick is a classic work that delves into the complexities of human nature and the relentless pursuit of a goal. While Melville's prose can be dense and verbose at times, the novel's themes of obsession and fate still resonate with readers today.",
						rating: 3,
						user: {
							id: "671b88b5-2cb1-43ff-9b2d-c19c6e319ef7",
							userName: "bookishgal",
						},
					},
				],
				bookCategories: [
					{
						id: "1458073f-1833-4e88-94e2-a79645897714",
						category: {
							categoryName: "Historical",
						},
					},
					{
						id: "3f224c9e-b273-41d5-91b5-f8768235f28f",
						category: {
							categoryName: "Gothic",
						},
					},
					{
						id: "d3537b77-2a7c-40fd-a006-cd2c4ee96d9b",
						category: {
							categoryName: "Adventure",
						},
					},
				],
			},
			{
				id: "798b9ad0-6893-4a78-aaeb-4f979fd69784",
				bookTitle: "Little Women",
				pageCount: 449,
				publishDate: "1868-09-30",
				price: 12.95,
				shortDescription:
					"Alcott's beloved novel follows the lives of the four March sisters�Meg, Jo, Beth, and Amy�and their journey from childhood to womanhood.",
				longDescription:
					'"Little Women," penned by Louisa May Alcott, is a timeless, heart-warming tale centered around the lives of the four March sisters - Meg, Jo, Beth, and Amy. Set against the backdrop of the American Civil War era, the story explores their journey from playful childhood to the responsibilities and challenges of womanhood. With their father away at war and their loving Marmee holding the fort, the sisters navigate societal expectations, personal ambitions, and the simple pleasures and trials of everyday life in 19th-century New England.\n\nThe novel beautifully showcases the contrasting personalities of the four sisters. Meg, the eldest, is maternal and yearns for a life of wealth and societal standing. Jo, fiercely independent and creative, dreams of becoming a successful writer. Beth, the shy and gentle one, is content with her family and home, while Amy, the youngest, aspires to become an artist and marry into high society. Despite their differences, their unshakeable sisterly bond forms the backbone of the plot, making it a compelling family saga.\n\nWith its nuanced exploration of love, loss, and life, "Little Women" is a testament to the resilience and strength of women. The narrative captures the joys and sorrows of growing up, the complexities of familial and romantic relationships, and the struggle of reconciling personal dreams with societal norms. Whether it\'s the magnetic camaraderie of the sisters, their individual pursuits, or their evolving relationships, "Little Women" holds up a mirror to the timeless and universal facets of human experience. This classic tale of the March sisters is sure to captivate, inspire, and tug at the heartstrings of every reader.\n',
				inventoryCount: 75,
				isbn: "9780147514011",
				author: {
					id: "2246b53e-366a-4670-a137-5918f55f480b",
					authorFirstName: "Louisa May",
					authorLastName: "Alcott",
				},
				bookReviews: [
					{
						id: "f302c415-8926-4fb0-80e9-5e4f31ca5edd",
						shortReview: "Heartwarming tale.",
						review:
							"Little Women is a heartwarming tale of sisterhood, love, and resilience. Louisa May Alcott beautifully captures the joys and struggles of growing up, making this classic novel a timeless favorite for readers of all ages.",
						rating: 5,
						user: {
							id: "3e4992a5-bde8-4df2-ae06-051d0b7a1805",
							userName: "booklover1",
						},
					},
					{
						id: "58fb2cf1-a63f-4d75-acf9-eb6ad079fc59",
						shortReview: "Delightful story.",
						review:
							"Little Women is a delightful story that celebrates the bonds of family and the pursuit of dreams. Alcott's characters are relatable and endearing, and her writing style is engaging throughout.",
						rating: 4,
						user: {
							id: "9c1b9d38-b2df-4a79-8091-8ef8fa821c88",
							userName: "reader123",
						},
					},
					{
						id: "ace99d58-d660-40b4-a74e-931a8040c0bc",
						shortReview: "Memorable characters.",
						review:
							"While Little Women is a classic novel with memorable characters and timeless themes, some readers may find its pacing slow and its moral lessons heavy-handed. However, its exploration of sisterhood and female empowerment remains relevant today.",
						rating: 3,
						user: {
							id: "8410ebc7-bddd-4cff-a651-24b74f193192",
							userName: "bibliophile",
						},
					},
				],
				bookCategories: [
					{
						id: "738f644b-6661-4d4d-aee0-59c09f942725",
						category: {
							categoryName: "Coming-of-Age",
						},
					},
					{
						id: "448d627b-f9ed-40e2-bb46-91df321535ca",
						category: {
							categoryName: "Feminist Literature",
						},
					},
					{
						id: "21cf7e26-0ae4-43a2-b285-92860949f9dc",
						category: {
							categoryName: "Family Saga",
						},
					},
				],
			},
			{
				id: "b798c783-331d-461a-b71d-e1a9ae039408",
				bookTitle: "The Picture of Dorian Gray",
				pageCount: 224,
				publishDate: "1890-06-20",
				price: 10.99,
				shortDescription:
					"Oscar Wilde's only novel, it tells the story of a young man named Dorian Gray, who becomes the subject of a painting. As he seeks a life of pleasure and indulgence, he discovers that his portrait ages, reflecting the moral corruption of his choices, while he remains outwardly unchanged.",
				longDescription:
					'"The Picture of Dorian Gray" by Oscar Wilde is a spellbinding tale of vanity, morality, and the human soul. This enduring literary classic introduces us to Dorian Gray, an extraordinarily handsome and charismatic young man living in the decadent high society of London. After having his portrait painted by the artist Basil Hallward, Dorian is introduced to Lord Henry Wotton, a cynic and hedonist who advocates for the pursuit of pleasure above all, which changes Dorian\'s life forever. \n\nIntrigued by Lord Henry\'s philosophy, Dorian wishes for eternal youth and beauty, a desire that mysteriously transfers to his portrait. As Dorian indulges in a life of hedonism and immoral pleasures, his face remains unmarked by the ravages of his lifestyle, while his portrait ages and decays, reflecting the ugliness of his deeds. This terrifying supernatural element transforms the story into a gripping exploration of the depths of human corruption and the destructive consequences of vanity.\n\n"The Picture of Dorian Gray" is not just a novel but a riveting philosophical journey. Oscar Wilde’s masterful storytelling and exquisite prose take the reader through a whirlwind of emotions, exploring themes of vanity, morality, and the true nature of beauty. This novel will leave you questioning the price of eternal youth and the value of the soul. The haunting tale and its unforgettable characters will hold your attention from the first page to the very last, making "The Picture of Dorian Gray" a must-read for any lover of classic literature.',
				inventoryCount: 80,
				isbn: "9780141439570",
				author: {
					id: "ab94b9de-2d6b-4c20-a024-d80d829b7887",
					authorFirstName: "Oscar",
					authorLastName: "Wilde",
				},
				bookReviews: [
					{
						id: "8327794d-bacc-495a-a69c-ce2dce2787e8",
						shortReview: "Gripping tale.",
						review:
							"The Picture of Dorian Gray is a gripping tale of vanity, decadence, and the consequences of unchecked ambition. Oscar Wilde's wit and satire shine through in this haunting exploration of morality and the pursuit of beauty.",
						rating: 5,
						user: {
							id: "7c7a29c9-a713-440b-9b85-eb5033f02641",
							userName: "avidreader7",
						},
					},
					{
						id: "777a3f74-54cc-4ef2-9002-52cb6dabfdb4",
						shortReview: "Mesmerizing novel.",
						review:
							"The Picture of Dorian Gray is a mesmerizing novel that delves into the depths of human desire and the allure of eternal youth. Wilde's prose is both elegant and provocative, making this a captivating read from start to finish.",
						rating: 4,
						user: {
							id: "671b88b5-2cb1-43ff-9b2d-c19c6e319ef7",
							userName: "bookishgal",
						},
					},
					{
						id: "d8d949ab-65e8-47f5-931e-7d81f5d75325",
						shortReview: "Fascinating exploration.",
						review:
							"While The Picture of Dorian Gray offers a fascinating exploration of aestheticism and morality, some readers may find Wilde's philosophical digressions tedious. However, the novel's central premise and vivid imagery make it worth the read.",
						rating: 3,
						user: {
							id: "7bb8095f-c1a8-4307-b74f-2affe40bae4b",
							userName: "litlover88",
						},
					},
				],
				bookCategories: [
					{
						id: "ae217ebf-a39f-4958-a6cc-4432b135bec3",
						category: {
							categoryName: "Gothic",
						},
					},
					{
						id: "724934bf-19e1-4892-b1c5-af9bd2b18d54",
						category: {
							categoryName: "Philosophical Fiction",
						},
					},
					{
						id: "b213921a-4b4b-4f0a-867b-9cf3df07f80d",
						category: {
							categoryName: "Existential Fiction",
						},
					},
				],
			},
			{
				id: "69ce7a43-47fc-410a-8f95-9a16c94b1a87",
				bookTitle: "The Importance of Being Earnest",
				pageCount: 76,
				publishDate: "1895-02-14",
				price: 6.95,
				shortDescription:
					"A farcical comedy in which the protagonists maintain fictitious personae to escape burdensome social obligations. Wilde's most enduringly popular play.",
				longDescription:
					"\"The Importance of Being Earnest\" by Oscar Wilde is a brilliant theatrical narrative that intertwines wit, societal satire, and comedy to explore themes of identity, marriage, and the Victorian English upper class's manners. The story revolves around two friends, Algernon Moncrieff and Jack Worthing, who lead double lives to escape their tiresome social obligations. Jack, who lives in the countryside, invents a brother named 'Earnest' who lives in London and gets into all sorts of mischief, allowing Jack to periodically disappear to 'rescue' him. Simultaneously, Algernon pretends to have a permanently sick friend named Bunbury, providing an excuse to escape from his aunt’s tedious dinner parties.\n\nThe plot thickens when Gwendolen, Algernon's cousin and Jack's love interest, reveals her unwavering fascination for the name 'Earnest.' In an attempt to win her over, Jack decides to get christened as Earnest. Meanwhile, Algernon, intrigued by Jack's tales of his beautiful ward Cecily, decides to impersonate Jack's fictitious brother and win Cecily's heart. Amid the mounting confusion and mistaken identities, Oscar Wilde elegantly unfurls a scintillating comedy of manners, challenging the audience's perception of truth, love, and earnestness.\n\n\"The Importance of Being Earnest\" is a delightful journey that strikes a perfect balance between frivolity and profundity, laced with Wilde's signature wit and humor. It is a scathing critique of the superficiality and hypocrisy of Victorian society, cleverly masked behind a comedic façade. The play's timeless appeal lies in its ability to make you laugh, think, and question societal norms, all at once. This masterpiece's charm lies in its ability to amuse, entertain, and provoke thought in equal measure.\n",
				inventoryCount: 95,
				isbn: "9780486264784",
				author: {
					id: "ab94b9de-2d6b-4c20-a024-d80d829b7887",
					authorFirstName: "Oscar",
					authorLastName: "Wilde",
				},
				bookReviews: [
					{
						id: "abe8e701-1da2-438d-9c35-b58cf68883a0",
						shortReview: "Delightful comedy.",
						review:
							"The Importance of Being Earnest is a delightful comedy filled with wit and humor. Oscar Wilde's sharp dialogue and clever wordplay make it a timeless classic that is sure to entertain readers of all ages.",
						rating: 5,
						user: {
							id: "3e4992a5-bde8-4df2-ae06-051d0b7a1805",
							userName: "booklover1",
						},
					},
					{
						id: "9c6a5472-956e-4967-a03f-eda44b670cd9",
						shortReview: "Brilliant satire.",
						review:
							"The Importance of Being Earnest is a brilliant satire that offers a scathing critique of Victorian society. Wilde's clever observations and witty repartee make it a must-read for fans of classic literature.",
						rating: 4,
						user: {
							id: "9c1b9d38-b2df-4a79-8091-8ef8fa821c88",
							userName: "reader123",
						},
					},
					{
						id: "c770a6c4-8b76-4a6a-b1b3-8e7fa8053ee1",
						shortReview: "Undeniably witty.",
						review:
							"While The Importance of Being Earnest is undeniably witty and entertaining, some readers may find its humor and social commentary dated. However, its timeless themes of love, identity, and societal expectations still resonate today.",
						rating: 3,
						user: {
							id: "8410ebc7-bddd-4cff-a651-24b74f193192",
							userName: "bibliophile",
						},
					},
				],
				bookCategories: [
					{
						id: "6a11caf8-45dc-4fce-a51d-0ee7ac36090a",
						category: {
							categoryName: "Satire",
						},
					},
					{
						id: "8cbe6726-3564-4c0b-aedb-4e0a0d87eedd",
						category: {
							categoryName: "Humor",
						},
					},
					{
						id: "40fa33b6-b21d-4799-b143-2a9af9e27c98",
						category: {
							categoryName: "Romance",
						},
					},
				],
			},
			{
				id: "724047b5-8329-412c-bd73-c3d6c7dc4b5d",
				bookTitle: "The Grapes of Wrath",
				pageCount: 464,
				publishDate: "1939-04-14",
				price: 14,
				shortDescription:
					"John Steinbeck's epic novel of the Great Depression follows the Joad family as they're driven from their Oklahoma home and journey to California in search of work and a better life.",
				longDescription:
					"\"The Grapes of Wrath\" is a powerful, deeply moving narrative that depicts the struggles of the Joad family, a clan of sharecroppers from Oklahoma during the Dust Bowl era of the 1930s. Faced with the loss of their farm due to the Dust Bowl and the Great Depression, the family, like many others, is compelled to embark on a journey west to the promised land of California. The narrative artfully interweaves the personal story of this family’s struggle with broader themes of poverty, injustice, and the indomitable human spirit in the face of insurmountable hardship.\n\nThe Joads' journey is fraught with obstacles and heartbreak, their experiences a stark commentary on the societal failures of the time. Steinbeck's vivid portrayal of every member of the Joad family, as well as the characters they encounter, paints a compelling picture of despair and hope, injustice and endurance. The family's dream of a lush, prosperous life in California quickly shatters as they encounter the bitter reality: thousands of displaced families competing for scarce jobs, exploited by the ruthless greed of wealthy landowners.\n\nDespite the grim circumstances, \"The Grapes of Wrath\" is at its core a tribute to resilience, compassion, and the enduring strength of the human spirit. Steinbeck's masterful storytelling shines through in his exploration of the theme of solidarity among the disenfranchised, and the belief that collective action can serve as a powerful force against oppression. This Pulitzer Prize-winning novel is a timeless piece of literature that holds up a mirror to the societal issues of its time, many of which continue to resonate today.",
				inventoryCount: 85,
				isbn: "9780143039433",
				author: {
					id: "fa4fc70b-9594-461c-b967-a58f58ff8ded",
					authorFirstName: "John",
					authorLastName: "Steinbeck",
				},
				bookReviews: [
					{
						id: "c58e37ea-6f8b-44f4-abcf-26f0a81bcf8e",
						shortReview: "Powerful and poignant.",
						review:
							"The Grapes of Wrath is a powerful and poignant novel that vividly captures the struggles of the Great Depression era. Steinbeck's evocative prose and compelling characters make it a hauntingly beautiful depiction of the human spirit in the face of adversity.",
						rating: 5,
						user: {
							id: "85e505f3-d55e-45cb-8d38-f91ae9164d17",
							userName: "jenreads",
						},
					},
					{
						id: "483303ff-ab5d-4749-b9ba-063544386fed",
						shortReview: "Profound exploration.",
						review:
							"The Grapes of Wrath is a classic American novel that offers a profound exploration of social injustice and the plight of the working class. Steinbeck's vivid descriptions and compelling narrative make it a thought-provoking read.",
						rating: 4,
						user: {
							id: "de223b1f-28ef-4921-b846-0613747e1cee",
							userName: "iambook",
						},
					},
					{
						id: "444ac2e1-8d86-4fa8-8162-0fad8b2b24ae",
						shortReview: "Well-written and thought-provoking.",
						review:
							"While The Grapes of Wrath is undeniably well-written and thought-provoking, some readers may find its pacing slow and its social commentary heavy-handed. However, its themes of resilience and solidarity are still relevant today.",
						rating: 3,
						user: {
							id: "ca1f6b8e-fa79-4d48-8cbc-dd0ef439327e",
							userName: "lovesbooks",
						},
					},
				],
				bookCategories: [
					{
						id: "bbef8d44-0314-4c8b-a5ab-d6ef184af56f",
						category: {
							categoryName: "Cultural",
						},
					},
					{
						id: "e886a832-26cd-4daa-a0d2-5f01d6bd8269",
						category: {
							categoryName: "Social Commentary",
						},
					},
					{
						id: "821a3de1-db93-4229-92fd-77ce84a7acde",
						category: {
							categoryName: "Literary Fiction",
						},
					},
				],
			},
			{
				id: "99dbba88-cf20-4722-869a-887a66ac5f9a",
				bookTitle: "The Great Gatsby",
				pageCount: 180,
				publishDate: "1925-04-10",
				price: 15,
				shortDescription:
					"F. Scott Fitzgerald's masterpiece, a tragic love story set in the roaring twenties, which explores themes of decadence, idealism, resistance to change, social upheaval, and excess.",
				longDescription:
					"\"Immerse yourself in the lavish and treacherous world of 1920s Long Island, New York, in F. Scott Fitzgerald's timeless masterpiece, 'The Great Gatsby'. The story is narrated by the perceptive yet reserved Nick Carraway, who moves east to make his fortune. He finds himself living next door to the mysterious, party-giving millionaire Jay Gatsby, and across the bay from his beautiful cousin Daisy Buchanan and her brutish, blue-blooded husband, Tom. This contrasting setup forms a tableau of tension and extravagance, setting the stage for a tale of love, deceit, and the illusory nature of the American Dream.\n\nThe narrative is a journey through the allure and disillusionment of the Jazz Age, as seen through the eyes of Nick, who, while reserved, is drawn into the world of wealth and deceit. At the heart of the tale is the tragic love story of Gatsby and Daisy. Gatsby, once a poor boy, has amassed a fortune through dubious means, all in a desperate attempt to win back the love of the golden girl, Daisy, who chose wealth over love years ago. Their ill-fated reunion is a dance of desperation, manipulation, and heartbreak, beautifully framed by Fitzgerald's evocative prose.\n\n'The Great Gatsby' is a poignant exploration of the corruption of wealth, the emptiness of fame, and the futility of social pretension. It is a tightly woven tale that delves deeply into the human condition, revealing the hollowness beneath the glittering surface of the high life. Fitzgerald's masterful storytelling, combined with his exquisite characterization and elegant prose, creates a mesmerizing and unforgettable portrait of a society obsessed with status and appearance. The book is not just a novel; it's a haunting reflection of an era that still resonates today.\"",
				inventoryCount: 90,
				isbn: "9780743273565",
				author: {
					id: "873ac726-d4ee-42e6-a0c7-fabc4494d0b2",
					authorFirstName: "F. Scott",
					authorLastName: "Fitzgerald",
				},
				bookReviews: [
					{
						id: "8b51b95b-895c-4d4c-bd0b-2c00688f3af6",
						shortReview: "Captivating novel.",
						review:
							"The Great Gatsby is a captivating novel that beautifully captures the glamour and decadence of the Jazz Age. F. Scott Fitzgerald's prose is both elegant and evocative, transporting readers to a bygone era.",
						rating: 4,
						user: {
							id: "3e4992a5-bde8-4df2-ae06-051d0b7a1805",
							userName: "booklover1",
						},
					},
					{
						id: "a0bc6533-f89a-432b-82fd-0109f69b3b0d",
						shortReview: "Timeless classic.",
						review:
							"The Great Gatsby is a timeless classic that explores themes of love, wealth, and the American Dream. Fitzgerald's vivid characters and lyrical prose make it a must-read for literature enthusiasts.",
						rating: 5,
						user: {
							id: "9c1b9d38-b2df-4a79-8091-8ef8fa821c88",
							userName: "reader123",
						},
					},
					{
						id: "fdc1c811-61ff-417c-8013-03b8aba60383",
						shortReview: "Well-written and atmospheric.",
						review:
							"While The Great Gatsby is undeniably well-written and atmospheric, some readers may find its characters and themes shallow. However, its depiction of the Roaring Twenties is still relevant today.",
						rating: 3,
						user: {
							id: "8410ebc7-bddd-4cff-a651-24b74f193192",
							userName: "bibliophile",
						},
					},
					{
						id: "09331d3e-89e0-4bff-a520-7fef80becdd5",
						shortReview: "Disappointing read.",
						review:
							"The Great Gatsby is a disappointing read that fails to live up to its hype. While the prose is elegant, the characters are unlikable and the plot is shallow.",
						rating: 2,
						user: {
							id: "550de341-e5c4-486f-b087-5ef77ff3a72b",
							userName: "bookworm",
						},
					},
				],
				bookCategories: [
					{
						id: "a91ea119-a5d4-4f1a-8205-73214dee9739",
						category: {
							categoryName: "Realism",
						},
					},
					{
						id: "50a3d8bb-216e-479a-ab2a-d8626c2cefe8",
						category: {
							categoryName: "Modern Classics",
						},
					},
					{
						id: "77ecbcf8-cbb9-417f-841f-8f9e6edca8b9",
						category: {
							categoryName: "Social Commentary",
						},
					},
				],
			},
			{
				id: "90f4c594-fc80-45d3-8948-8687afe57299",
				bookTitle: "American Gods",
				pageCount: 465,
				publishDate: "2001-06-19",
				price: 19.99,
				shortDescription:
					"Neil Gaiman's novel blends Americana, fantasy, and various strands of ancient and modern mythology, all centering on the mysterious and taciturn Shadow.",
				longDescription:
					"\"American Gods\" is a profoundly imaginative and intricately woven tale by acclaimed novelist Neil Gaiman, a masterpiece that blurs the lines between reality, myth, and belief. The story introduces us to Shadow Moon, a convict who is released from prison early due to the tragic death of his wife. As he grapples with his loss, he finds himself drawn into the service of the enigmatic Mr. Wednesday, a charismatic con man who is more than what he seems. Unbeknownst to Shadow, his employer is an incarnation of the All-Father Odin, and he's recruiting an army of old gods for an impending battle.\n\nThe narrative is a journey through the heart of America, but it's an America that's far removed from the familiar. It's a land where ancient gods brought to the New World by immigrants coexist uneasily with new gods of technology, media, and globalization. As Shadow travels with Mr. Wednesday, he encounters these deities living among humans, their power waning as society's beliefs change. Gaiman's vivid storytelling brings to life the unique personalities and histories of these divine beings, from the mysterious Slavic twins Czernobog and Bielebog to the love goddess Bilquis, who feeds on her worshippers' devotion.\n\n\"American Gods\" is more than just a fantasy novel—it's a reflection on faith, identity, and the American Dream. Gaiman explores the idea that gods exist because we believe in them, and their power grows or diminishes based on that belief. It's a thrilling, thought-provoking ride that will keep readers hooked till the last page. With its compelling characters, rich mythology, and intricate plot, \"American Gods\" is a must-read for anyone looking for a novel that's out of the ordinary. It's a testament to Gaiman's storytelling prowess and his ability to spin old myths into new, unforgettable narratives.",
				inventoryCount: 88,
				isbn: "9780062572233",
				author: {
					id: "e126fdfb-6d08-4f72-98fc-900d9ff62890",
					authorFirstName: "Neil",
					authorLastName: "Gaiman",
				},
				bookReviews: [
					{
						id: "b2f7aebd-165e-45b0-a862-63e3b43c354d",
						shortReview: "Mesmerizing blend.",
						review:
							"American Gods is a mesmerizing blend of mythology, fantasy, and Americana. Neil Gaiman's imagination knows no bounds, and his vivid storytelling makes this book an unforgettable journey.",
						rating: 5,
						user: {
							id: "7c7a29c9-a713-440b-9b85-eb5033f02641",
							userName: "avidreader7",
						},
					},
					{
						id: "749d63c0-51b7-444c-a0e8-eef30f17617b",
						shortReview: "Unique and captivating.",
						review:
							"American Gods is a unique and captivating novel that explores the nature of belief and the power of myth. Gaiman's prose is both lyrical and thought-provoking, making it a must-read for fans of fantasy.",
						rating: 4,
						user: {
							id: "671b88b5-2cb1-43ff-9b2d-c19c6e319ef7",
							userName: "bookishgal",
						},
					},
					{
						id: "890fbf8e-3ed9-4fed-896a-9308dfc231b1",
						shortReview: "Ambitious and imaginative.",
						review:
							"While American Gods is undeniably ambitious and imaginative, some readers may find its pacing slow and its plot convoluted. However, its rich mythology and complex characters make it a rewarding read for those who persevere.",
						rating: 3,
						user: {
							id: "7bb8095f-c1a8-4307-b74f-2affe40bae4b",
							userName: "litlover88",
						},
					},
				],
				bookCategories: [
					{
						id: "ad5e6e26-2da5-484d-9137-ccd5b730a442",
						category: {
							categoryName: "Fantasy",
						},
					},
					{
						id: "9982e7e5-1587-4918-85cc-fd316d538b6f",
						category: {
							categoryName: "Social Commentary",
						},
					},
					{
						id: "eb02cbc9-1066-4703-8aab-46c36837ceb2",
						category: {
							categoryName: "Science Fiction",
						},
					},
				],
			},
			{
				id: "7c5443be-10b1-4f70-a30f-58382b6971b0",
				bookTitle: "Do Androids Dream of Electric Sheep?",
				pageCount: 210,
				publishDate: "1968-03-01",
				price: 14.99,
				shortDescription:
					"This novel, set in a post-apocalyptic San Francisco, follows Rick Deckard, a bounty hunter tasked with 'retiring' rogue androids. It explores themes of what it means to be human and the nature of humanity.",
				longDescription:
					'In a post-apocalyptic world, Philip K. Dick\'s "Do Androids Dream of Electric Sheep?" plunges readers into a grim yet fascinating exploration of humanity and what it means to be truly alive. The protagonist, Rick Deckard, is a bounty hunter in a dystopian San Francisco, tasked with retiring (destroying) Nexus-6 androids who have escaped from Mars to Earth. These androids, virtually indistinguishable from humans, blend into the dwindling human population, raising deep questions about identity and authenticity.\n\nThe novel is set in a world devastated by nuclear war, where real animals are a luxury only the affluent can afford and owning an electric imitation is a social obligation. Amid this desolation, a new religion called Mercerism has emerged, emphasizing empathy and connection among all living beings. This doctrine further complicates Deckard\'s mission and forces him to grapple with the morality of his actions, particularly when he encounters an advanced android named Rachael.\n\n"Do Androids Dream of Electric Sheep?" is a compelling blend of science fiction and noir, filled with existential pondering and thrilling action. As Deckard embarks on his quest, the lines between android and human blur, pushing him to the edge of his beliefs and sanity. This thought-provoking tale will keep readers gripped from start to finish, leaving them questioning the nature of consciousness, empathy, and what it truly means to be human.',
				inventoryCount: 80,
				isbn: "9780345404473",
				author: {
					id: "665f841e-75e9-44bb-9cb8-ca78752b4b78",
					authorFirstName: "Philip K.",
					authorLastName: "Dick",
				},
				bookReviews: [
					{
						id: "3ec04f42-d878-4d48-8ebf-8e659604f811",
						shortReview: "Thought-provoking science fiction.",
						review:
							"Do Androids Dream of Electric Sheep? is a thought-provoking science fiction novel that raises important questions about identity, empathy, and the nature of humanity. Philip K. Dick's vision of a dystopian future is both chilling and compelling.",
						rating: 4,
						user: {
							id: "85e505f3-d55e-45cb-8d38-f91ae9164d17",
							userName: "jenreads",
						},
					},
					{
						id: "ec22ac08-5a50-4e1e-8d52-575ccb72826f",
						shortReview: "Fascinating exploration.",
						review:
							"Do Androids Dream of Electric Sheep? is a fascinating exploration of artificial intelligence and what it means to be human. While the pacing can be slow at times, Dick's philosophical insights make it a worthwhile read.",
						rating: 3,
						user: {
							id: "de223b1f-28ef-4921-b846-0613747e1cee",
							userName: "iambook",
						},
					},
					{
						id: "6d7b8f5f-a7c7-4d04-8880-8e8ee2958649",
						shortReview: "Masterpiece of science fiction.",
						review:
							"Do Androids Dream of Electric Sheep? is a masterpiece of science fiction that remains relevant in today's world of advancing technology. Dick's exploration of the blurred lines between man and machine is both thought-provoking and deeply moving.",
						rating: 5,
						user: {
							id: "ca1f6b8e-fa79-4d48-8cbc-dd0ef439327e",
							userName: "lovesbooks",
						},
					},
				],
				bookCategories: [
					{
						id: "6e542664-2a26-4ad9-b785-b6b6ea9c47be",
						category: {
							categoryName: "Science Fiction",
						},
					},
					{
						id: "5964baca-d15d-4580-9115-54cf1c9d5e9d",
						category: {
							categoryName: "Dystopian Fiction",
						},
					},
					{
						id: "91af9dcd-6069-4e44-8394-ed4bc5f709ff",
						category: {
							categoryName: "Post-Apocalyptic",
						},
					},
				],
			},
			{
				id: "a2d912c2-257e-4028-a0ec-9bda804742e5",
				bookTitle: "The Man in the High Castle",
				pageCount: 274,
				publishDate: "1962-01-01",
				price: 13.95,
				shortDescription:
					"An alternate history novel set in a world where the Axis powers won World War II. The story follows several characters living in the 1960s United States, now divided between Japan and Nazi Germany.",
				longDescription:
					'Immerse yourself in the mesmerizing world of Philip K. Dick\'s "The Man in the High Castle." An alternate history novel set in 1962, fifteen years after an alternative ending to World War II, this book presents a world where the Axis Powers emerged victorious. The United States is now divided into three parts - the Greater Nazi Reich in the East, the Japanese Pacific States in the West, and a small neutral zone in the middle. It’s a chilling prospect, where life is dictated by the whims of the victorious imperial forces and freedom is a distant memory.\n\nThe novel rotates around a cast of diverse characters, each navigating the complexities of life under occupation. Among them are a San Francisco antique dealer, a German secret agent, a Japanese trade official, and a Jewish creator of forgeries. Their lives are intertwined by fate and circumstance, leading to a gripping narrative filled with suspense and intrigue. The mysterious titular character, the man in the high castle, is an elusive author of a book within the book, a forbidden novel that offers a vision of the world where the Allies won the war, creating a provocative parallel to their reality.\n\n"The Man in the High Castle" is not just a tale of an alternate history, but also an exploration of the nature of reality, identity, and what it means to be human. It’s an intellectual jigsaw puzzle that challenges readers to question the nature of reality, the course of history, and the power of perception. With its richly detailed settings, complex characters, and thought-provoking themes, "The Man in the High Castle" is a captivating labyrinth of philosophical and metaphysical questions, making it an unforgettable journey for readers looking for a book that offers more than just a story. Dive into this masterpiece and experience a world that could have been, which might just make you appreciate the world that is.\n',
				inventoryCount: 65,
				isbn: "9780547572482",
				author: {
					id: "665f841e-75e9-44bb-9cb8-ca78752b4b78",
					authorFirstName: "Philip K.",
					authorLastName: "Dick",
				},
				bookReviews: [
					{
						id: "fe8b8e5b-6f2d-4f27-9960-33c6a2bc7e42",
						shortReview: "Thought-provoking alternative history.",
						review:
							"The Man in the High Castle is a thought-provoking alternative history novel that explores the consequences of a world where the Axis powers won World War II. Philip K. Dick's imaginative storytelling and attention to detail make it a compelling read.",
						rating: 4,
						user: {
							id: "3e4992a5-bde8-4df2-ae06-051d0b7a1805",
							userName: "booklover1",
						},
					},
					{
						id: "571c23ba-456d-4837-86d9-019eff8518cb",
						shortReview: "Masterpiece of speculative fiction.",
						review:
							"The Man in the High Castle is a masterpiece of speculative fiction that offers a chilling glimpse into a world where the Nazis and Japanese have divided America. Dick's exploration of identity and reality is both profound and unsettling.",
						rating: 5,
						user: {
							id: "9c1b9d38-b2df-4a79-8091-8ef8fa821c88",
							userName: "reader123",
						},
					},
					{
						id: "86f83dfc-7b77-477e-be95-11b63257cb4d",
						shortReview: "Intriguing premise.",
						review:
							"While The Man in the High Castle presents an intriguing premise, some readers may find its pacing uneven and its plot convoluted. However, its exploration of alternate history and moral ambiguity still makes it a worthwhile read.",
						rating: 3,
						user: {
							id: "8410ebc7-bddd-4cff-a651-24b74f193192",
							userName: "bibliophile",
						},
					},
					{
						id: "8ffaee7b-76bd-4986-bbab-66614952f230",
						shortReview: "Disappointing read.",
						review:
							"The Man in the High Castle is a disappointing novel that fails to deliver on its intriguing premise. The narrative lacks coherence, and the characters feel underdeveloped.",
						rating: 2,
						user: {
							id: "550de341-e5c4-486f-b087-5ef77ff3a72b",
							userName: "bookworm",
						},
					},
				],
				bookCategories: [
					{
						id: "41e415d7-08fd-4f7b-b140-114c789659f1",
						category: {
							categoryName: "Science Fiction",
						},
					},
					{
						id: "e9f494b8-ae20-4c1a-9a22-50bea2cda323",
						category: {
							categoryName: "Alternate History",
						},
					},
					{
						id: "23db7b91-809e-46d5-b4c8-83027ff758b5",
						category: {
							categoryName: "Dystopian Fiction",
						},
					},
				],
			},
			{
				id: "eb9a566a-7020-4ef8-b168-3d68aa39d23c",
				bookTitle: "The Handmaid's Tale",
				pageCount: 311,
				publishDate: "1985-04-01",
				price: 15.95,
				shortDescription:
					"In a dystopian future, where a totalitarian regime enforces subservient roles on all women, Offred navigates the dangers of her reality with strength and cunning.",
				longDescription:
					"In the chilling dystopian novel \"The Handmaid's Tale\" by Margaret Atwood, the United States has been transformed into a totalitarian regime known as the Republic of Gilead, where women's rights are severely curtailed. The story unfolds through the eyes of a woman named Offred, a Handmaid whose primary purpose is to bear children for the ruling class in a society facing declining birth rates. Offred's riveting first-person narrative reveals an oppressive world where women are reduced to their reproductive capacities, grappling with dehumanization and survival in a society that values them only for their fertility.\n\nThe novel's power resides in Atwood's ability to create a terrifyingly believable world. Offred's past, where she had a family and a job, is slowly revealed, contrasting starkly with her present life as a Handmaid, and raising thought-provoking questions about freedom, identity, and resistance. The book delves into the politics of reproduction, the commodification of women's bodies, and the dangerous consequences of authoritarianism. Offred's struggle to retain her individuality and memories in a society that strives to erase both offers a sobering exploration of the resilience of the human spirit.\n\n\"The Handmaid's Tale\" is a gripping study of power dynamics, misogyny, and religious fundamentalism. Atwood's haunting prose and richly drawn characters make the narrative deeply compelling, and the vivid imagery serves to underscore the stark reality of life in Gilead. This novel is a stark reminder of the fragility of our freedoms and the importance of resistance in the face of oppression. Its unsettling yet thought-provoking themes make it a must-read for those who value literature that challenges the status quo and provokes intense reflection on societal norms.",
				inventoryCount: 90,
				isbn: "9780385490818",
				author: {
					id: "876dcb7c-c4ab-4f78-bef2-fb8a00980358",
					authorFirstName: "Margaret",
					authorLastName: "Atwood",
				},
				bookReviews: [
					{
						id: "5ca7e050-7296-4bbb-b90b-e4ded2d73e67",
						shortReview: "Chilling dystopian novel.",
						review:
							"The Handmaid's Tale is a chilling dystopian novel that offers a stark warning about the dangers of totalitarianism and the erosion of women's rights. Margaret Atwood's prose is both lyrical and haunting, making it a powerful and unforgettable read.",
						rating: 5,
						user: {
							id: "7c7a29c9-a713-440b-9b85-eb5033f02641",
							userName: "avidreader7",
						},
					},
					{
						id: "bfef4674-5faf-4c51-b962-d82a2455cf7c",
						shortReview: "Provocative and timely.",
						review:
							"The Handmaid's Tale is a provocative and timely novel that explores issues of power, control, and gender oppression. Atwood's stark portrayal of a dystopian society is both unsettling and thought-provoking.",
						rating: 4,
						user: {
							id: "671b88b5-2cb1-43ff-9b2d-c19c6e319ef7",
							userName: "bookishgal",
						},
					},
					{
						id: "eab35310-41f0-48f7-b894-160e1b8d7bae",
						shortReview: "Well-written but slow pacing.",
						review:
							"While The Handmaid's Tale is undeniably well-written and thought-provoking, some readers may find its pacing slow and its narrative structure disjointed. However, its themes of oppression and resistance are still relevant today.",
						rating: 3,
						user: {
							id: "7bb8095f-c1a8-4307-b74f-2affe40bae4b",
							userName: "litlover88",
						},
					},
				],
				bookCategories: [
					{
						id: "7c8e6b2a-4ff3-4b17-8e85-16cca71f577a",
						category: {
							categoryName: "Dystopian Fiction",
						},
					},
					{
						id: "a6b8266e-a2d1-48fc-a537-4873004a0f29",
						category: {
							categoryName: "Feminist Literature",
						},
					},
					{
						id: "afebf78c-6d15-4320-80c1-520b105097cf",
						category: {
							categoryName: "Social Commentary",
						},
					},
				],
			},
			{
				id: "495f4da7-6dda-47c9-b012-8df9fc7538c7",
				bookTitle: "The Golden Notebook",
				pageCount: 688,
				publishDate: "1962-01-01",
				price: 18,
				shortDescription:
					"Lessing's groundbreaking novel interweaves the lives of four women through the diary of one. Exploring themes of communism, women's liberation, and the nuclear scare, it remains a fresh and powerful work today.",
				longDescription:
					"\"Doris Lessing's iconic masterpiece, 'The Golden Notebook,' is a profound exploration of the intricate weave of personal and political lives, and the paradox of the female condition. The story centers around Anna Wulf, a writer who maintains four notebooks, each a different color and each dedicated to a different part of her life - personal experiences, political activism, a novel she's writing, and a personal diary. The Golden Notebook, however, is her attempt to tie all these fragmented parts together, as Anna struggles to maintain her sanity in a world teetering on the brink of chaos.\n\nAnna's struggles are a mirror to the turbulent times she lives in. As a woman, she grapples with the contradictions of her roles - as a mother, lover, writer, and political activist. Her experiences with love and relationships are brutally honest, often intense and painful, reflecting the inherent conflict between her need for emotional connection and her desire for personal autonomy. As a writer, she is tormented by writer's block and the fear of losing her creativity. And as a political activist, she is disillusioned by the Communist Party's betrayals and the horrors of the Cold War.\n\nIn 'The Golden Notebook', Lessing masterfully explores the theme of fragmentation - of the self, society, and even narrative structure. The book itself is divided, mirroring Anna's compartmentalized life, and presents a challenging but rewarding read. It is a fierce and poignant examination of mental breakdown, the struggle for personal freedom, and the quest for wholeness in a fragmented world. As both a seminal feminist work and a key text of postmodern literature, 'The Golden Notebook' remains a read of profound relevance and resonating impact.\"",
				inventoryCount: 60,
				isbn: "9780060931407",
				author: {
					id: "bc952cd7-225f-44b7-a975-6a668a781afb",
					authorFirstName: "Doris",
					authorLastName: "Lessing",
				},
				bookReviews: [
					{
						id: "04c43198-f71c-48c7-9f30-e83afd55d0ab",
						shortReview: "Powerful and thought-provoking.",
						review:
							"The Golden Notebook is a powerful and thought-provoking novel that delves into the complexities of identity and relationships. Doris Lessing's writing is both intimate and insightful, making it a compelling read.",
						rating: 4,
						user: {
							id: "3e4992a5-bde8-4df2-ae06-051d0b7a1805",
							userName: "booklover1",
						},
					},
					{
						id: "046cace1-b811-4d88-a9dc-7868c5a8a2be",
						shortReview: "Literary masterpiece.",
						review:
							"The Golden Notebook is a literary masterpiece that boldly explores themes of feminism, politics, and mental health. Lessing's narrative structure is innovative, and her characters are deeply human and relatable.",
						rating: 5,
						user: {
							id: "9c1b9d38-b2df-4a79-8091-8ef8fa821c88",
							userName: "reader123",
						},
					},
					{
						id: "287a7568-3ac7-476a-8256-38e004105f6f",
						shortReview: "Unique perspective but confusing.",
						review:
							"While The Golden Notebook offers a unique perspective on gender and society, some readers may find its nonlinear narrative confusing. However, its exploration of female identity is still relevant and compelling.",
						rating: 3,
						user: {
							id: "8410ebc7-bddd-4cff-a651-24b74f193192",
							userName: "bibliophile",
						},
					},
					{
						id: "82a12537-db4c-4c16-ad6b-152466662a2b",
						shortReview: "Disappointing and messy.",
						review:
							"The Golden Notebook is a disappointing read with flat characters and a disjointed plot. Lessing's attempt to tackle multiple themes results in a messy narrative that fails to engage.",
						rating: 2,
						user: {
							id: "550de341-e5c4-486f-b087-5ef77ff3a72b",
							userName: "bookworm",
						},
					},
				],
				bookCategories: [
					{
						id: "a2561243-416d-4cdf-b24e-e44cb0344f56",
						category: {
							categoryName: "Feminist Literature",
						},
					},
					{
						id: "52f132c5-c432-4405-98b6-c5ca3b57c54f",
						category: {
							categoryName: "Social Commentary",
						},
					},
					{
						id: "b50679c2-7636-444c-8c2a-773832a02a3a",
						category: {
							categoryName: "Philosophical",
						},
					},
				],
			},
			{
				id: "cb537a82-c01f-47ec-b4f4-6437c2134f93",
				bookTitle: "Oryx and Crake",
				pageCount: 400,
				publishDate: "2003-05-06",
				price: 16.95,
				shortDescription:
					"Atwood's speculative fiction masterpiece, exploring genetic engineering and its impacts on humanity through the eyes of its protagonist, Snowman.",
				longDescription:
					"\"Oryx and Crake\" is a mesmerizing tale set in a not-too-distant future, where biotechnological advancements have reconstructed the world into a dystopian yet eerily recognizable society. The story unfolds through the eyes of Snowman, or Jimmy as he was known before the world was devastated, as he navigates through the desolate landscape filled with peculiar creatures like rakunks and pigoons, products of genetic engineering. He is the last man standing, a reluctant prophet for the Children of Crake, a new breed of humans designed to survive the end of the world, a world that is now devoid of all natural human life.\n  \nAtwood elegantly interweaves the present and the past, using Snowman's memories to draw a vivid picture of the pre-apocalyptic world. These flashbacks introduce us to Crake, Snowman's charismatic and brilliant childhood friend, and Oryx, their mutual love interest, who is as enigmatic as she is beautiful. Crake, a prodigy in the field of genetic engineering, dreams of creating a utopian world cleansed of its flaws, while Oryx, with her mysterious past, becomes a symbol of the world's exploitation and cruelty. \n\n\"Oryx and Crake\" is an engrossing exploration of man's hubris, the consequences of unchecked scientific advancements, and the ethical boundaries of manipulating nature. Margaret Atwood's masterful storytelling, filled with dark humor, unflinching realism, and poignant emotions, invites readers to question their understanding of humanity, love, and morality. This chilling dystopian novel serves as a stark warning of a possible future, making it a must-read for those who dare to peek into what our world could become if we continue down a path of reckless disregard for nature.",
				inventoryCount: 75,
				isbn: "9780385503853",
				author: {
					id: "876dcb7c-c4ab-4f78-bef2-fb8a00980358",
					authorFirstName: "Margaret",
					authorLastName: "Atwood",
				},
				bookReviews: [
					{
						id: "efd85126-c42a-4920-826f-d3ae21a3cf12",
						shortReview: "Compelling and thought-provoking.",
						review:
							"Oryx and Crake is a compelling and thought-provoking dystopian novel that explores the consequences of genetic engineering and corporate greed. Margaret Atwood's vivid imagination and dark humor make it a must-read for fans of speculative fiction.",
						rating: 4,
						user: {
							id: "85e505f3-d55e-45cb-8d38-f91ae9164d17",
							userName: "jenreads",
						},
					},
					{
						id: "099a412b-5c05-4ac8-be0b-b962597f4618",
						shortReview: "Intriguing vision.",
						review:
							"Oryx and Crake presents an intriguing vision of a future ravaged by scientific experimentation and environmental collapse. Atwood's prose is vivid, but the novel's bleak outlook may be too dark for some readers.",
						rating: 3,
						user: {
							id: "de223b1f-28ef-4921-b846-0613747e1cee",
							userName: "iambook",
						},
					},
					{
						id: "5cdbb40e-16c7-40aa-9f73-fc511e0aa4ed",
						shortReview: "Haunting and unforgettable.",
						review:
							"Oryx and Crake is a haunting and unforgettable exploration of humanity's destructive tendencies and the consequences of unchecked scientific progress. Atwood's writing is both beautiful and chilling, making it a standout in the dystopian genre.",
						rating: 5,
						user: {
							id: "ca1f6b8e-fa79-4d48-8cbc-dd0ef439327e",
							userName: "lovesbooks",
						},
					},
				],
				bookCategories: [
					{
						id: "42a28a9f-b372-4c8c-b856-487e41072fb6",
						category: {
							categoryName: "Dystopian Fiction",
						},
					},
					{
						id: "3da17ce1-1f20-4af9-87f3-95542b2361f0",
						category: {
							categoryName: "Science Fiction",
						},
					},
					{
						id: "d272adc0-a0ee-412c-8213-26200af00d32",
						category: {
							categoryName: "Social Commentary",
						},
					},
				],
			},
			{
				id: "5240bed8-6928-4cec-954e-9461038dc774",
				bookTitle: "My Name Is Red",
				pageCount: 432,
				publishDate: "1998-01-01",
				price: 17,
				shortDescription:
					"Set in late 16th century Istanbul, Pamuk's novel weaves a tale of intrigue and romance, centered around the Ottoman Empire's illustrious miniature artists.",
				longDescription:
					"In \"My Name is Red,\" the renowned Turkish author Orhan Pamuk immerses readers into the vibrant and mystical world of Ottoman miniature painters during the late 16th century. The narrative is a beautifully woven tapestry of stories told from multiple perspectives, including the artists, their subjects, and even the color Red. The book, steeped in the rich traditions and culture of the Ottoman Empire, explores the tension between East and West, tradition and innovation, religious piety and the desire for individual expression. It's a story that brings to life the philosophical quandaries of the era, a historical novel that brims with intrigue, love, and a deep meditation on art.\n\nThe plot revolves around the mysterious murder of Elegant, one of the Sultan's miniature painters. As the story unfolds, the reader is drawn into the complex web of deceit, love, and cultural upheaval. The Sultan has commissioned a secret book to celebrate his reign, demanding a style influenced by the 'Frankish' (European) art, a contradiction to the traditional Islamic artistry that forbids the portrayal of human figures. This philosophical conflict of styles, coupled with the murder mystery, forms the crux of the narrative, providing the reader with a riveting blend of art, religion, love, and murder.\n\n\"My Name is Red\" is much more than a historical novel; it's a voyage into the heart of Istanbul in its prime, a deep exploration of what it means to be an artist, and a timeless reflection on love and human mortality. Pamuk's masterful storytelling, combined with his deep understanding of Ottoman and Islamic arts, crafts a truly unique narrative that transports readers into a world rarely explored in literature. The book stands as an enthralling love letter to art and a beautifully complex narrative that will captivate readers who appreciate historical fiction, murder mysteries, and philosophical debates.",
				inventoryCount: 82,
				isbn: "9780375706851",
				author: {
					id: "e06c4323-387e-4ebb-8161-292026077b46",
					authorFirstName: "Orhan",
					authorLastName: "Pamuk",
				},
				bookReviews: [
					{
						id: "e82af615-f5d8-479d-810c-d93ab62ffbbd",
						shortReview: "Captivating historical novel.",
						review:
							"My Name Is Red is a captivating novel that immerses readers in the vibrant world of Ottoman Istanbul. Orhan Pamuk's intricate storytelling and rich descriptions make it a truly memorable read.",
						rating: 4,
						user: {
							id: "3e4992a5-bde8-4df2-ae06-051d0b7a1805",
							userName: "booklover1",
						},
					},
					{
						id: "7d3e151d-03ce-4e99-8b64-35ce411b6cbb",
						shortReview: "Masterpiece of storytelling.",
						review:
							"My Name Is Red is a masterpiece of storytelling that skillfully blends history, mystery, and art. Pamuk's prose is elegant and evocative, transporting readers to a bygone era.",
						rating: 5,
						user: {
							id: "9c1b9d38-b2df-4a79-8091-8ef8fa821c88",
							userName: "reader123",
						},
					},
					{
						id: "716d0dab-a71a-4f9f-96a7-f298c85343db",
						shortReview: "Fascinating but slow-paced.",
						review:
							"While My Name Is Red offers a fascinating glimpse into Ottoman culture and art, some readers may find its pacing slow and its plot overly complex. However, its exploration of love and betrayal still makes it worth reading.",
						rating: 3,
						user: {
							id: "8410ebc7-bddd-4cff-a651-24b74f193192",
							userName: "bibliophile",
						},
					},
					{
						id: "14fca63b-ee1f-45b7-a988-b05fc897b63e",
						shortReview: "Disappointing read.",
						review:
							"My Name Is Red is a disappointing novel that fails to live up to its intriguing premise. The narrative is disjointed, and the characters lack depth, making it a struggle to stay engaged.",
						rating: 2,
						user: {
							id: "550de341-e5c4-486f-b087-5ef77ff3a72b",
							userName: "bookworm",
						},
					},
				],
				bookCategories: [
					{
						id: "35675f80-6dc9-4a19-9339-58437f0458cd",
						category: {
							categoryName: "Cultural",
						},
					},
					{
						id: "0aa660c1-75ac-4e2a-bfcd-371d8b620d6f",
						category: {
							categoryName: "Philosophical Fiction",
						},
					},
					{
						id: "8c22af0a-3cfb-4476-ae64-8d7b3428b777",
						category: {
							categoryName: "Philosophical",
						},
					},
				],
			},
			{
				id: "ef0dd284-1dec-470c-86e4-efa6673688f8",
				bookTitle: "The House of the Spirits",
				pageCount: 448,
				publishDate: "1982-10-01",
				price: 18,
				shortDescription:
					"Allende's debut novel, combining magical realism with political and social insight, it tells the epic story of the Trueba family over several generations.",
				longDescription:
					'"The House of the Spirits" is a captivating family saga that takes readers on a journey through four generations of the Trueba-Del Valle family, set against the backdrop of post-colonial Chile. The narrative unfolds through the eyes of the clairvoyant Alba, who inherits her grandmother Clara\'s ability to communicate with the spirit world. The story starts with the enigmatic Clara predicting her own birth, her sister\'s accidental death, and extends to her marriage with the ambitious, yet volatile, Esteban Trueba. Together they build a majestic house on the cornerstone of their love, dreams, and tragedy - a house that holds the spirits of their past and present. \n\nIsabel Allende\'s "The House of the Spirits" is a symphony of magical realism, seamlessly blending the supernatural elements with the bitter realities of life. At the heart of the narrative lies the tumultuous relationship between the patriarch Esteban and his rebellious granddaughter Alba. As Esteban\'s extreme conservatism clashes with Alba\'s revolutionary ideals, Allende deftly explores the themes of love, revenge, socioeconomic disparity, and political unrest. The narrative is punctuated by the powerful portrayal of resilient women, each embodying a different facet of femininity and rebellion against patriarchal norms. \n\nThe book is not just a narrative, but a rich tapestry of Chilean history. Allende masterfully weaves the personal and the political, chronicling the land reforms, labor strikes, and the eventual rise of a military dictatorship in Chile. "The House of the Spirits" is a poignant exploration of the cyclical nature of history and human lives, a testament to hope, resilience, and the enduring spirit of love. It is a book that promises to haunt the reader long after they have turned the last page.\n',
				inventoryCount: 70,
				isbn: "9781501117015",
				author: {
					id: "ee888d45-4f8c-4818-83d8-83e0db69597f",
					authorFirstName: "Isabel",
					authorLastName: "Allende",
				},
				bookReviews: [
					{
						id: "6eba7a76-7a56-4318-8ea1-9475e43e86c4",
						shortReview: "Mesmerizing family saga.",
						review:
							"The House of the Spirits is a mesmerizing family saga that spans generations and blends magical realism with political upheaval. Isabel Allende's lush prose and vivid characters make it a literary masterpiece.",
						rating: 5,
						user: {
							id: "7c7a29c9-a713-440b-9b85-eb5033f02641",
							userName: "avidreader7",
						},
					},
					{
						id: "2a043540-2d2d-4bcf-8bfe-896bb784cfae",
						shortReview: "Enchanting exploration of love and destiny.",
						review:
							"The House of the Spirits is an enchanting novel that explores themes of love, power, and destiny against the backdrop of political turmoil. Allende's lyrical prose and vivid imagery create a world that lingers in the imagination.",
						rating: 4,
						user: {
							id: "671b88b5-2cb1-43ff-9b2d-c19c6e319ef7",
							userName: "bookishgal",
						},
					},
					{
						id: "570e1b15-c22d-4d00-9058-6d5a623ab4c0",
						shortReview: "Lush prose but meandering plot.",
						review:
							"While The House of the Spirits boasts lush prose and an ambitious narrative, some readers may find its length daunting and its plot meandering. However, its exploration of familial bonds and societal change is still compelling.",
						rating: 3,
						user: {
							id: "7bb8095f-c1a8-4307-b74f-2affe40bae4b",
							userName: "litlover88",
						},
					},
				],
				bookCategories: [
					{
						id: "dd780c1f-c70a-4d24-9d8e-1f26e7077dc3",
						category: {
							categoryName: "Magical Realism",
						},
					},
					{
						id: "bfdfdd65-c039-4221-9e4b-c105b2b1c566",
						category: {
							categoryName: "Cultural",
						},
					},
					{
						id: "1a0ece89-f20e-43f2-96bc-3a3df92feaea",
						category: {
							categoryName: "Social Commentary",
						},
					},
				],
			},
			{
				id: "b8a5caad-d6d7-4f3d-9522-bfcfe0a5f049",
				bookTitle: "Never Let Me Go",
				pageCount: 288,
				publishDate: "2005-04-05",
				price: 16,
				shortDescription:
					"Ishiguro's haunting story of Kathy, Tommy, and Ruth, and their journey of memories and the truth about their seemingly idyllic school, Hailsham, which hides a dark secret.",
				longDescription:
					'"Never Let Me Go" is a profoundly emotional journey penned by the celebrated British author, Kazuo Ishiguro. The narrative revolves around the life of Kathy H., a caretaker at a private boarding school called Hailsham, with an unconventional and unsettling purpose. Kathy, along with her close friends, Ruth and Tommy, gradually uncover the horrifying truth of their existence. The book is a blend of science fiction, drama, and dystopia, but at its heart, it\'s a deep exploration of what it means to be human, the nature of love, friendship, memory, and the inevitable reality of mortality.\n\nThe story unfolds in a non-linear manner, shifting between Kathy’s past and present. While the past recalls the seemingly idyllic days at Hailsham, the present paints a grim picture of their lives as adults. Hailsham is no ordinary school, instead it\'s a place where children are raised to become organ donors. As Kathy, Tommy, and Ruth grow, so does their understanding of their fates. They grapple with their burgeoning feelings of love and jealousy, all under the shadow of the chilling futures that await them. Ishiguro masterfully presents these complexities, making it a heartrending narrative that explores the concept of identity and the ethical boundaries of scientific advancement.\n\nIn "Never Let Me Go," Kazuo Ishiguro presents a poignant commentary on the fragility of life and the power of acceptance. His nuanced storytelling and compelling character development make this book an unforgettable experience. The readers are compelled to reflect on their own lives, their relationships, and their mortality. The book is not just a story, but an immersive experience that leaves the reader with a multitude of emotions and existential questions. It is a poignant reminder of the transient nature of life and the enduring power of love and friendship.',
				inventoryCount: 88,
				isbn: "9781400078774",
				author: {
					id: "24bad126-0f71-4de7-b639-289fb5fa4c27",
					authorFirstName: "Kazuo",
					authorLastName: "Ishiguro",
				},
				bookReviews: [
					{
						id: "4638615d-ee4a-45fb-8647-82a228c52f66",
						shortReview: "Haunting exploration of ethics.",
						review:
							"Never Let Me Go is a haunting and thought-provoking novel that explores the ethics of cloning and the nature of humanity. Kazuo Ishiguro's subtle storytelling and nuanced characters leave a lasting impact on readers.",
						rating: 4,
						user: {
							id: "85e505f3-d55e-45cb-8d38-f91ae9164d17",
							userName: "jenreads",
						},
					},
					{
						id: "c88ff0b9-802b-4ea2-a87e-79440a524111",
						shortReview: "Compelling premise but melancholic tone.",
						review:
							"Never Let Me Go presents a compelling premise and raises important ethical questions, but some readers may find its melancholic tone overwhelming. However, its exploration of love and loss is undeniably moving.",
						rating: 3,
						user: {
							id: "de223b1f-28ef-4921-b846-0613747e1cee",
							userName: "iambook",
						},
					},
					{
						id: "984208d6-dd3b-417c-b582-0668bed702ca",
						shortReview: "Beautiful and haunting.",
						review:
							"Never Let Me Go is a beautiful and haunting novel that delves into the human condition and the fragility of life. Ishiguro's prose is luminous, and his exploration of memory and identity is deeply affecting.",
						rating: 5,
						user: {
							id: "ca1f6b8e-fa79-4d48-8cbc-dd0ef439327e",
							userName: "lovesbooks",
						},
					},
				],
				bookCategories: [
					{
						id: "e6441ddc-80f0-4b2d-9b75-e046a764a127",
						category: {
							categoryName: "Psychological Fiction",
						},
					},
					{
						id: "83eb791d-5294-4ca8-9fa5-d9e5422be3b5",
						category: {
							categoryName: "Social Commentary",
						},
					},
					{
						id: "39f13106-f300-4926-bbc2-00ef1933f4f4",
						category: {
							categoryName: "Science Fiction",
						},
					},
				],
			},
			{
				id: "9c9b218a-a058-487c-8377-f95871c61f44",
				bookTitle: "Lolita",
				pageCount: 336,
				publishDate: "1955-08-18",
				price: 14.95,
				shortDescription:
					"Nabokov's controversial novel tells the story of Humbert Humbert, a literature professor, and his obsession with the 12-year-old Dolores Haze. Told with a lyrical mastery, Lolita explores dark themes with irony and wit.",
				longDescription:
					"\"Lolita\" is a provocative and daring literary journey penned by the master wordsmith, Vladimir Nabokov. The book is a narrative recounted by the deeply flawed protagonist, Humbert Humbert, a man with an unnerving obsession for the 12-year-old Dolores Haze, whom he affectionately calls Lolita. Set in the mid-20th century America, Nabokov's novel delves into the labyrinthine psyche of Humbert, whose attraction towards nymphets, young girls on the brink of adolescence, forms the crux of this controversial masterpiece. His toxic obsession with Lolita is masked by his intellectualism and charming eloquence, making the narrative disturbingly captivating.\n\nThe story unfolds as Humbert, a European scholar, moves to a small town in New England and becomes a lodger in the Haze household. His life takes a perilous turn when he finds himself irresistibly drawn to the precocious and manipulative Lolita. The tragic death of Lolita's mother leaves Humbert with the daunting responsibility of her upbringing, a circumstance he exploits to fulfill his perverse desires. Nabokov's narrative is replete with poetic prose and striking metaphors, painting a vivid picture of Humbert's unsettling fascination for Lolita, their cross-country escapades, and his constant struggle with guilt and self-revulsion.\n\n\"Lolita\" is a compelling exploration of the dark corners of human obsession, manipulation, and self-deception. While the book's subject matter may be distressing to some, Nabokov's exceptional storytelling skills and his uncanny ability to humanize an otherwise loathsome protagonist make the novel an unforgettable reading experience. The book invites readers to reflect on the disturbing realities of society through the lens of a character whose actions are morally reprehensible yet presented with such conviction that one is drawn into his tormented world. A challenging, thought-provoking, and deeply unsettling tale, \"Lolita\" is a testament to Nabokov's genius and a classic in modern literature.",
				inventoryCount: 75,
				isbn: "9780679723165",
				author: {
					id: "6e2fa70c-e7c2-4e26-b49d-754736f4fd5c",
					authorFirstName: "Vladimir",
					authorLastName: "Nabokov",
				},
				bookReviews: [
					{
						id: "b0b42ca4-2c15-471c-afcf-43e94d00e94b",
						shortReview: "Beautiful but disturbing.",
						review:
							"Lolita is a beautifully written but disturbing novel that challenges readers with its provocative subject matter. Vladimir Nabokov's prose is exquisite, and his exploration of obsession and morality is masterful.",
						rating: 5,
						user: {
							id: "7c7a29c9-a713-440b-9b85-eb5033f02641",
							userName: "avidreader7",
						},
					},
					{
						id: "4ec1f51e-b890-4725-9c68-2dd90f7295ad",
						shortReview: "Controversial yet captivating.",
						review:
							"Lolita is a controversial yet captivating novel that showcases Nabokov's unparalleled literary talent. The story's unreliable narrator adds depth to its exploration of taboo subjects, making it a compelling read.",
						rating: 4,
						user: {
							id: "671b88b5-2cb1-43ff-9b2d-c19c6e319ef7",
							userName: "bookishgal",
						},
					},
					{
						id: "5df0c8b2-9763-45df-a9e1-cb68c951f5fd",
						shortReview: "Well-written but unsettling.",
						review:
							"While Lolita is undeniably well-written, some readers may find its subject matter deeply unsettling. Nabokov's lyrical prose cannot fully overshadow the discomfort caused by the novel's themes.",
						rating: 3,
						user: {
							id: "7bb8095f-c1a8-4307-b74f-2affe40bae4b",
							userName: "litlover88",
						},
					},
				],
				bookCategories: [
					{
						id: "6bcf3837-4de1-4e40-922c-7961c317015b",
						category: {
							categoryName: "Cultural",
						},
					},
					{
						id: "cd85748b-b9f8-4e68-9fa9-1b86942b076b",
						category: {
							categoryName: "Postmodern",
						},
					},
					{
						id: "74c83371-7b63-453d-9b20-c2ab3413f741",
						category: {
							categoryName: "Philosophical",
						},
					},
				],
			},
			{
				id: "c1eeea5b-12a6-4044-a2db-88171076226a",
				bookTitle: "Midnight's Children",
				pageCount: 536,
				publishDate: "1981-04-18",
				price: 19,
				shortDescription:
					"Rushdie's novel, winner of the Booker Prize, chronicles the life of Saleem Sinai, born at the moment of India's independence, who finds himself 'handcuffed to history' with bizarre consequences.",
				longDescription:
					"\"Midnight's Children\" is an enchanting whirlwind of magical realism, historic events, and powerful storytelling. It is an epic narrative by Salman Rushdie that revolves around the life of Saleem Sinai, who was born on the stroke of midnight on August 15, 1947, the exact moment India gained its independence from British rule. Saleem, along with one thousand other children born in that initial hour of India's freedom, is imbued with unique and extraordinary powers that link him inextricably to the fate of his nation. His life parallels the political and cultural turmoil of India's journey through independence and partition, capturing a portrait of the country in a manner that is as fantastical as it is authentic.\n\nThe narrative is richly layered, with a narrative that oscillates between past and present, reality and magic, and personal and political spheres. The story unfolds through Saleem's perspective, who, with the aid of his telepathic abilities, weaves together the lives of his fellow midnight children and the wrenching changes their country is undergoing. The plot is packed with elements of magical realism that blend perfectly with the harsh realities of the post-colonial era - a testament to Rushdie's masterful storytelling. \n\n\"Midnight's Children\" is not just a novel; it's an immersive experience that transports readers into the heart of India — its history, its people, its triumphs, and its struggles. It is a book that demands the reader's patience and attention, with the reward of a rich, complex narrative that explores themes of identity, destiny, and the inextricable links between individuals and their nations. This book stands as a mesmerizing exploration of the complexities of human experience set against the backdrop of a country in flux, making it an essential read for anyone interested in post-colonial literature and the compelling power of magical realism.",
				inventoryCount: 88,
				isbn: "9780812976533",
				author: {
					id: "15f351fd-97ef-4291-a7e0-9f1abaa0471a",
					authorFirstName: "Salman",
					authorLastName: "Rushdie",
				},
				bookReviews: [
					{
						id: "10e005ac-2a9c-46ea-a4ff-50c326b75b9f",
						shortReview: "Sprawling and ambitious.",
						review:
							"Midnight's Children is a sprawling and ambitious novel that masterfully blends history with magical realism. Salman Rushdie's vivid imagery and lyrical prose create a vivid tapestry of postcolonial India.",
						rating: 4,
						user: {
							id: "85e505f3-d55e-45cb-8d38-f91ae9164d17",
							userName: "jenreads",
						},
					},
					{
						id: "1f772355-ebcd-4a3f-b5b5-5f50d4f25f65",
						shortReview: "Impressive but challenging.",
						review:
							"Midnight's Children is an impressive literary feat, but its dense prose and convoluted narrative may be challenging for some readers to navigate. Rushdie's exploration of India's history is nonetheless compelling.",
						rating: 3,
						user: {
							id: "de223b1f-28ef-4921-b846-0613747e1cee",
							userName: "iambook",
						},
					},
					{
						id: "5be4e0e0-6735-4f06-a8bf-d45a0d8fcd5f",
						shortReview: "Masterpiece of postcolonial literature.",
						review:
							"Midnight's Children is a masterpiece that captures the tumultuous history of India with grace and imagination. Rushdie's narrative prowess and rich symbolism make it a must-read for fans of postcolonial literature.",
						rating: 5,
						user: {
							id: "ca1f6b8e-fa79-4d48-8cbc-dd0ef439327e",
							userName: "lovesbooks",
						},
					},
				],
				bookCategories: [
					{
						id: "5f667b65-b4d1-4ec7-9f15-8b605c9bbdd1",
						category: {
							categoryName: "Social Commentary",
						},
					},
					{
						id: "cb021fa7-f73f-4574-a4f2-7c713b9da381",
						category: {
							categoryName: "Alternate History",
						},
					},
					{
						id: "4d8cb46f-a068-449f-9ae9-5e47addc92f6",
						category: {
							categoryName: "Post-Colonial Literature",
						},
					},
				],
			},
			{
				id: "c2188b1f-b9be-492f-9b9c-556ab44342b5",
				bookTitle: "The Road",
				pageCount: 287,
				publishDate: "2006-09-26",
				price: 15.95,
				shortDescription:
					"McCarthy's post-apocalyptic novel of a father and son's journey through a burned America is a haunting tale of survival and love.",
				longDescription:
					"\"The Road\" is a chilling post-apocalyptic masterpiece by Cormac McCarthy, a Pulitzer Prize-winning author. The narrative unfurls in an ash-covered, desolate landscape, where the remnants of civilization are far and few between. The protagonist, a father, and his young son traverse this barren world, armed with nothing but a pistol, their undying love for each other, and an unwavering hope for salvation. McCarthy's world-building is hauntingly realistic, immersing the reader in a desolate landscape that speaks to the heart of human fear and isolation.\n\nTheir journey, fraught with peril, is a testament to human endurance and the unyielding spirit of parental love. The father's singular aim is to ensure his son's survival in this unforgiving world, even as they battle hunger, cold, rogue bands of cannibals, and the looming threat of death. The dialogue between the father and son, sparse and poignant, underlines the raw emotion that permeates the narrative. Their conversations, filled with a child's innocence and a father's protective instinct, are as heartrending as they are heartwarming.\n\n\"The Road\" is not merely a tale of survival but an exploration of what it means to retain one's humanity when the world around has lost all semblance of it. It examines the bonds of love and trust that form our social fabric, even in the face of adversity. McCarthy's narrative style, both stark and lyrical, mirrors the bleakness and the untamed beauty of the world he creates, making \"The Road\" a deeply moving, profound read. This book is a must-read for those who appreciate powerful storytelling and the exploration of profound philosophical themes.",
				inventoryCount: 70,
				isbn: "9780307387899",
				author: {
					id: "ce57bca3-ca68-43b9-9102-239ff653438b",
					authorFirstName: "Cormac",
					authorLastName: "McCarthy",
				},
				bookReviews: [
					{
						id: "2189add3-f419-4883-8160-21c0bae14989",
						shortReview: "Haunting and powerful.",
						review:
							"The Road is a haunting and powerful post-apocalyptic novel that explores the depths of human resilience and the bond between father and son. Cormac McCarthy's spare prose style adds to the atmosphere of despair and hope.",
						rating: 4,
						user: {
							id: "3e4992a5-bde8-4df2-ae06-051d0b7a1805",
							userName: "booklover1",
						},
					},
					{
						id: "255ddd47-7336-4cca-af9e-7e29e07304dd",
						shortReview: "Masterpiece of existential dread.",
						review:
							"The Road is a masterpiece that evokes a sense of existential dread while also celebrating the human spirit. McCarthy's prose is poetic and visceral, painting a vivid portrait of a desolate world.",
						rating: 5,
						user: {
							id: "9c1b9d38-b2df-4a79-8091-8ef8fa821c88",
							userName: "reader123",
						},
					},
					{
						id: "26d16807-d1be-4dcc-8bd8-d5037859499a",
						shortReview: "Bleak but thought-provoking.",
						review:
							"While The Road offers a bleak and thought-provoking glimpse into a post-apocalyptic future, some readers may find its narrative too bleak and its themes too heavy-handed. However, McCarthy's prose is undeniably powerful.",
						rating: 3,
						user: {
							id: "8410ebc7-bddd-4cff-a651-24b74f193192",
							userName: "bibliophile",
						},
					},
					{
						id: "7a258856-29aa-42b9-97be-53ab76219fa6",
						shortReview: "Tedious and overrated.",
						review:
							"The Road is a tedious and overrated novel that fails to deliver on its promise of profundity. McCarthy's sparse prose style becomes monotonous, and the story lacks depth and character development.",
						rating: 2,
						user: {
							id: "550de341-e5c4-486f-b087-5ef77ff3a72b",
							userName: "bookworm",
						},
					},
				],
				bookCategories: [
					{
						id: "279fb997-db80-4e1a-bad6-5fe990742533",
						category: {
							categoryName: "Dystopian Fiction",
						},
					},
					{
						id: "9129d725-308c-4c04-b297-0b0a56dd42bb",
						category: {
							categoryName: "Post-Apocalyptic",
						},
					},
					{
						id: "2ae01b36-68e5-41b3-9801-550ce3f910f2",
						category: {
							categoryName: "Social Commentary",
						},
					},
				],
			},
			{
				id: "8811f52e-6e18-424d-95d9-954cebd53302",
				bookTitle: "The Catcher in the Rye",
				pageCount: 234,
				publishDate: "1951-07-16",
				price: 9.99,
				shortDescription:
					"Salinger's classic novel of teenage rebellion and angst. The narrative follows Holden Caulfield's experiences in New York City after being expelled from prep school.",
				longDescription:
					"\"The Catcher in the Rye\" is an iconic journey into the raw and real world of a disenchanted youth, Holden Caulfield, as he navigates through the complexities of adolescence and looming adulthood. Set in the backdrop of 1950s New York City, the narrative captures Holden's candid perspectives, his trials and tribulations, and his struggle to make sense of the world around him. J.D. Salinger's masterful storytelling draws you into Holden’s compelling narrative, creating an intimate connection with the reader, making you a silent companion in Holden's journey.\n\nThroughout the novel, Holden embarks on a series of adventures, encounters diverse characters, and grapples with his own maelstrom of emotions. He is a character who is endearing and exasperating in equal measure - his rebellious nature, his disdain for societal norms, and his desperate quest for meaning and authenticity make him a truly unforgettable figure. Through these adventures, Salinger explores the themes of innocence, identity, loss, and connection, providing a profound and nuanced commentary on the human condition.\n\n\"The Catcher in the Rye\" is more than just a story; it is a profound exploration of the trials of adolescence and the inevitable transition to adulthood. It's a mirror held up to society, reflecting our own fears, hopes, and insecurities. With its vivid, authentic characters, its poignant exploration of universal themes, and its uncensored look into the mind of a young man on the brink of adulthood, this novel is a must-read for anyone seeking to understand the complexities of growing up.",
				inventoryCount: 85,
				isbn: "9780316769488",
				author: {
					id: "0402bda8-1bba-42dd-8fbe-ed48ddc1d491",
					authorFirstName: "J.D.",
					authorLastName: "Salinger",
				},
				bookReviews: [
					{
						id: "ccbd8c12-0b7c-48d8-aa67-50c3f17e92c4",
						shortReview: "Timeless coming-of-age classic.",
						review:
							"The Catcher in the Rye is a timeless coming-of-age novel that resonates with readers of all ages. J.D. Salinger's portrayal of teenage angst and alienation is both poignant and relatable, making it a classic.",
						rating: 5,
						user: {
							id: "7c7a29c9-a713-440b-9b85-eb5033f02641",
							userName: "avidreader7",
						},
					},
					{
						id: "b988a484-4ccc-46e8-aa3c-41414c2145e5",
						shortReview: "Unforgettable voice of youth.",
						review:
							"The Catcher in the Rye captures the disillusionment and rebellion of youth with honesty and authenticity. Holden Caulfield's voice is distinct and unforgettable, making this novel a must-read for teenagers and adults alike.",
						rating: 4,
						user: {
							id: "671b88b5-2cb1-43ff-9b2d-c19c6e319ef7",
							userName: "bookishgal",
						},
					},
					{
						id: "dd77962b-631c-4770-b3f7-53d385fea465",
						shortReview: "Insightful but repetitive.",
						review:
							"While The Catcher in the Rye offers an insightful portrayal of adolescent angst, some readers may find Holden Caulfield's cynicism grating. Salinger's narrative style can be repetitive, but the novel still has its moments.",
						rating: 3,
						user: {
							id: "7bb8095f-c1a8-4307-b74f-2affe40bae4b",
							userName: "litlover88",
						},
					},
				],
				bookCategories: [
					{
						id: "d54e9c02-96ba-459c-ad57-e995f9080980",
						category: {
							categoryName: "Coming-of-Age",
						},
					},
					{
						id: "2a431dae-d274-40da-a4c3-61aba2a5069b",
						category: {
							categoryName: "Social Commentary",
						},
					},
					{
						id: "c09beb43-8229-4e76-ae4c-c3fff27b878a",
						category: {
							categoryName: "Philosophical",
						},
					},
				],
			},
			{
				id: "bc5b3eba-b5a3-4f30-b133-37791b5b0ef4",
				bookTitle: "The Color Purple",
				pageCount: 294,
				publishDate: "1982-06-01",
				price: 18.99,
				shortDescription:
					"Alice Walker's groundbreaking novel is a heart-wrenching, yet hopeful tale of a young African American woman's journey through abuse and oppression to find her own voice and power in early 20th century Georgia.",
				longDescription:
					"\"The Color Purple,\" written by Alice Walker, is a powerful exploration of the female African-American experience, set against the harsh socio-cultural backdrop of the rural South in the early 20th century. This Pulitzer Prize-winning novel is an epistolary journey of Celie, a mistreated, uneducated young girl who pours her hopes, fears, and dreams into letters - first to God, then to her sister Nettie. Celie's brutally honest letters reveal her transformation from a silenced victim to a woman empowered to define her own identity and destiny.\n\nThe narrative unfolds as Celie, horrifically abused by her father and subsequently by her husband, finds solace in her love for her younger sister Nettie, who is taken away from her. It's a story of despair, but it's also a testament to the power of hope, as Celie's life takes a turn when she forms an unlikely friendship with her husband's mistress, Shug Avery. Shug's free-spirited nature and defiance of traditional gender norms inspire Celie to break free from the shackles of her oppressive life. \n\n\"The Color Purple\" is not merely a story, but a poignant social commentary on racism, sexism, and the resilience of the human spirit. Its beauty lies in the raw emotions that Walker portrays through the simplicity of Celie's letters. It is a heart-wrenching, yet inspiring journey of a woman's fierce determination to rise above her circumstances, reclaim her life, and embrace self-love and self-acceptance. The novel is sure to leave the reader deeply moved and instilled with a sense of empathy and understanding for the struggles faced by women like Celie.",
				inventoryCount: 92,
				isbn: "9780151191536",
				author: {
					id: "fc9ced59-aa4e-4617-83e0-3992e0bcbfd9",
					authorFirstName: "Alice",
					authorLastName: "Walker",
				},
				bookReviews: [
					{
						id: "94a0a977-2264-4963-890d-e4d5d3795c10",
						shortReview: "Powerful and deeply moving.",
						review:
							"The Color Purple is a powerful and deeply moving novel that explores themes of race, gender, and identity. Alice Walker's prose is lyrical and evocative, and her characters are unforgettable.",
						rating: 4,
						user: {
							id: "85e505f3-d55e-45cb-8d38-f91ae9164d17",
							userName: "jenreads",
						},
					},
					{
						id: "2e669aad-feea-40b0-b620-57649be3d5b9",
						shortReview: "Sensitive but confusing.",
						review:
							"While The Color Purple tackles important issues with sensitivity and insight, some readers may find its narrative structure confusing. Nonetheless, Alice Walker's storytelling is powerful and emotionally resonant.",
						rating: 3,
						user: {
							id: "de223b1f-28ef-4921-b846-0613747e1cee",
							userName: "iambook",
						},
					},
					{
						id: "31c4411c-d53d-476a-94ae-3de49ba1bf00",
						shortReview: "Triumph of literature.",
						review:
							"The Color Purple is a triumph of literature, tackling difficult themes with grace and humanity. Walker's characters are richly drawn, and her prose is both lyrical and powerful. A must-read for anyone interested in social justice.",
						rating: 5,
						user: {
							id: "ca1f6b8e-fa79-4d48-8cbc-dd0ef439327e",
							userName: "lovesbooks",
						},
					},
				],
				bookCategories: [
					{
						id: "0d56e4bd-866d-481b-87e9-4ee9fa15e075",
						category: {
							categoryName: "Feminist Literature",
						},
					},
					{
						id: "d6a5f2ff-316d-43fa-b0a8-ee85ed11cc4d",
						category: {
							categoryName: "Cultural",
						},
					},
					{
						id: "68af7dd2-4dda-4739-99a7-a895d555fef1",
						category: {
							categoryName: "Social Commentary",
						},
					},
				],
			},
			{
				id: "f6634faa-4159-41a0-9d6e-20f3d51a27f7",
				bookTitle: "The End of the Affair",
				pageCount: 160,
				publishDate: "1951-01-01",
				price: 14.95,
				shortDescription:
					"Set in London during and just after the Second World War, the novel revolves around the relationships between Maurice Bendrix and Sarah Miles, and explores themes of love, obsession, and faith.",
				longDescription:
					"In \"The End of the Affair,\" celebrated author Graham Greene explores themes of love, faith, and betrayal set against the backdrop of war-torn London. The novel, a profound introspection into the human heart, revolves around three central characters - Maurice Bendrix, Sarah Miles, and her husband Henry. Bendrix, the narrator, is a cynical writer who embarks on a passionate, illicit affair with Sarah, a married woman. Their intense relationship, filled with love and jealousy, abruptly ends when a bomb explodes near Bendrix's house during the Blitz, leading Sarah to believe that Bendrix has died. \n\nThe story unfolds years later when Bendrix meets Henry by chance, and learns that Sarah has grown distant. Driven by jealousy and suspicion, Bendrix hires a private investigator to follow Sarah, unveiling a sequence of revelations that deepen the story's complexity. As the investigation proceeds, a series of diary entries reveal Sarah's tormented spiritual journey. She had made a pact with God to end the affair if Bendrix survived the bombing, a promise she felt obliged to keep, causing her to withdraw from her lover without any explanation. \n\n\"The End of the Affair\" is a poignant exploration of love's complexities and the mysteries of the human heart. It is a story about how a fleeting moment can change the course of lives and how faith can lead to unexpected paths. Greene's powerful prose and deep understanding of his characters' inner struggles make this novel a captivating read. The story's conclusion, while heartbreaking, offers a profound insight into the sacrifices made in the name of love and faith. This book would appeal to readers who appreciate introspective narratives, rich character development, and a compelling exploration of existential themes.",
				inventoryCount: 85,
				isbn: "9780141441122",
				author: {
					id: "549c2c00-904a-406f-a9b3-45897b39005f",
					authorFirstName: "Graham",
					authorLastName: "Greene",
				},
				bookReviews: [
					{
						id: "37f23a2f-fb9d-46aa-8db8-79ee0ec714d5",
						shortReview: "Poignant but slow pacing.",
						review:
							"The End of the Affair is a poignant exploration of love, loss, and redemption. Graham Greene's writing is evocative and thought-provoking, but some readers may find the pacing slow and the plot predictable.",
						rating: 3,
						user: {
							id: "9c1b9d38-b2df-4a79-8091-8ef8fa821c88",
							userName: "reader123",
						},
					},
				],
				bookCategories: [
					{
						id: "84368dd1-5146-488d-85c1-94d61fe26205",
						category: {
							categoryName: "Romance",
						},
					},
					{
						id: "87f9f500-ae39-40bc-a01d-2288fc683108",
						category: {
							categoryName: "Historical Romance",
						},
					},
					{
						id: "a0f7f058-bf39-4f05-93ab-cabe7c7be793",
						category: {
							categoryName: "Literary Fiction",
						},
					},
				],
			},
			{
				id: "4de2c275-4077-49d9-9f68-c92621294160",
				bookTitle: "Things Fall Apart",
				pageCount: 209,
				publishDate: "1958-06-17",
				price: 12.99,
				shortDescription:
					"Chinua Achebe's masterpiece tells the story of Okonkwo, a proud and powerful village leader amongst the Igbo in Nigeria, and the tragic unraveling of his life as a result of colonialism.",
				longDescription:
					'"Things Fall Apart", written by the renowned Nigerian author, Chinua Achebe, is an engrossing tale that beautifully entwines elements of life, love, culture, and the inevitable changes that come with time and colonialism. Set in the rich cultural backdrop of the Igbo society in Nigeria, the story follows Okonkwo, a warrior of great repute, his struggles with personal and societal values, and his ultimate downfall. Achebe masterfully presents a vivid portrait of a society, its customs, and beliefs, just on the brink of colonial invasion, through the life of Okonkwo and his tragic journey.\n\nThe first part of the book is dedicated to introducing Okonkwo, his family, and the traditions of the Umuofia clan. Okonkwo, plagued by the fear of weakness and failure, which he associates with his father, strives to be everything his father was not, resulting in a life filled with excessive masculinity and harshness. The second part of the book sees Okonkwo exiled from his clan due to an accidental killing. He is forced to live in his motherland, Mbanta, where he witnesses the first signs of colonial intrusion in the form of Christian missionaries.\n\nThe final part of "Things Fall Apart" is a powerful commentary on the impact of colonialism on indigenous cultures. Okonkwo returns to Umuofia after his exile, only to find his clan deeply altered by the influence of the white man. His desperate attempts to rally his people against the colonizers end in personal tragedy. Achebe, with his poignant and compelling narrative, invites the readers to examine the effects of cultural disruption and the loss of identity, making "Things Fall Apart" a classic read for those interested in post-colonial literature. The book is a striking blend of tragedy, history, and social commentary, guaranteeing an enriching and thought-provoking experience.',
				inventoryCount: 80,
				isbn: "9780385474542",
				author: {
					id: "f968cb73-8eed-4006-9f7f-4ac1ed183aa4",
					authorFirstName: "Chinua",
					authorLastName: "Achebe",
				},
				bookReviews: [
					{
						id: "db22871f-df2e-44cb-b72c-7451cd2e6e7e",
						shortReview: "Poignant portrayal.",
						review:
							"Things Fall Apart is a poignant portrayal of the clash between traditional African culture and colonialism. Chinua Achebe's vivid descriptions and compelling characters make this a must-read for anyone interested in African literature.",
						rating: 4,
						user: {
							id: "3e4992a5-bde8-4df2-ae06-051d0b7a1805",
							userName: "booklover1",
						},
					},
					{
						id: "386f1e49-e8b8-4e0b-9856-ad28b864009d",
						shortReview: "Powerful storytelling.",
						review:
							"Things Fall Apart is a powerful novel that delves into the complexities of Nigerian society before and after colonization. Achebe's storytelling is masterful, and the themes of identity and cultural change resonate deeply.",
						rating: 5,
						user: {
							id: "9c1b9d38-b2df-4a79-8091-8ef8fa821c88",
							userName: "reader123",
						},
					},
					{
						id: "3edebdc9-1564-4cc2-9673-f335cda639df",
						shortReview: "Valuable insights.",
						review:
							"While Things Fall Apart offers valuable insights into Nigerian culture and history, some readers may find the pacing slow and the prose dense. However, Achebe's exploration of colonialism and its impact remains relevant.",
						rating: 3,
						user: {
							id: "8410ebc7-bddd-4cff-a651-24b74f193192",
							userName: "bibliophile",
						},
					},
					{
						id: "c2a1db50-66a3-4d87-8e92-1ba760be3496",
						shortReview: "Failed to engage.",
						review:
							"Things Fall Apart failed to engage me as a reader. The narrative felt disjointed, and the characters lacked depth. While the themes are important, I found the execution lacking.",
						rating: 2,
						user: {
							id: "550de341-e5c4-486f-b087-5ef77ff3a72b",
							userName: "bookworm",
						},
					},
				],
				bookCategories: [
					{
						id: "3ea0d283-3bf3-4cfc-9926-9967c37742de",
						category: {
							categoryName: "Social Commentary",
						},
					},
					{
						id: "d8619214-252f-4a53-b3a0-8a289b0e5911",
						category: {
							categoryName: "Post-Colonial Literature",
						},
					},
					{
						id: "f582a542-e81f-461c-8d61-a64143696ac8",
						category: {
							categoryName: "Existential Philosophy",
						},
					},
				],
			},
			{
				id: "e776150b-cd36-4c0f-8178-079bbd3c6622",
				bookTitle: "The Diary of a Young Girl",
				pageCount: 283,
				publishDate: "1947-06-25",
				price: 10,
				shortDescription:
					"Anne Frank's diary offers a compelling and deeply personal account of life under Nazi occupation through the eyes of a young Jewish girl.",
				longDescription:
					"Set against the backdrop of one of history's darkest periods, \"The Diary of a Young Girl\" offers a deeply personal narrative of life during the Holocaust from the perspective of a vibrant and compelling narrator, Anne Frank. This extraordinary diary begins on Anne's 13th birthday, when she receives a journal as a gift. It charts the intimate thoughts and fears of a Jewish girl forced into hiding with her family in the Secret Annex of an office building in Amsterdam to evade the Nazis.\n\nThe diary reveals Anne's transformation from an ordinary teenage girl, preoccupied with friends and school, into a thoughtful observer of human nature under extraordinary circumstances. It is an account of her daily life: the cramped conditions, the constant threat of discovery, the scarce resources, the petty arguments, and the rare moments of joy. Her writing is characterized by a remarkable honesty and insight, as she grapples with the realities of war, her hidden existence, and the challenges of growing up.\n\n\"The Diary of a Young Girl\" is not just a testament to Anne Frank's indomitable spirit and resilience, but it is also a poignant exploration of the human capacity for hope in the face of atrocity. Her words echo with a profound sense of humanity and wisdom beyond her years, making the book an inspiring and essential read. This deeply moving account serves as a powerful reminder of the horrors of war and persecution, while illuminating the enduring strength of the human spirit.",
				inventoryCount: 95,
				isbn: "9780553296983",
				author: {
					id: "7197a74a-69d4-4661-8372-5f38ed6dc04b",
					authorFirstName: "Anne",
					authorLastName: "Frank",
				},
				bookReviews: [
					{
						id: "ca340070-5bc4-4593-9f37-b272ef3e5baa",
						shortReview: "Harrowing and inspiring.",
						review:
							"The Diary of a Young Girl is a harrowing account of Anne Frank's experiences during the Holocaust. Her courage and resilience in the face of unimaginable adversity are inspiring. Every page is imbued with hope and humanity.",
						rating: 5,
						user: {
							id: "7c7a29c9-a713-440b-9b85-eb5033f02641",
							userName: "avidreader7",
						},
					},
					{
						id: "a5c0bb60-be03-49ea-a1ed-d2cfb31fce30",
						shortReview: "Heartbreaking and hopeful.",
						review:
							"The Diary of a Young Girl offers a unique perspective on the Holocaust through the eyes of a young girl. Anne Frank's diary is both heartbreaking and hopeful, reminding us of the power of resilience and the human spirit.",
						rating: 4,
						user: {
							id: "671b88b5-2cb1-43ff-9b2d-c19c6e319ef7",
							userName: "bookishgal",
						},
					},
					{
						id: "52aecff2-6262-46f7-b72b-32e1660832d8",
						shortReview: "Valuable insights.",
						review:
							"While The Diary of a Young Girl provides valuable insights into the Holocaust, some readers may find Anne Frank's writing style repetitive. Nonetheless, her story remains a poignant reminder of the horrors of war.",
						rating: 3,
						user: {
							id: "7bb8095f-c1a8-4307-b74f-2affe40bae4b",
							userName: "litlover88",
						},
					},
				],
				bookCategories: [
					{
						id: "574be8c9-c2fd-4eb9-9ddf-289d8eb2f651",
						category: {
							categoryName: "Inspirational",
						},
					},
					{
						id: "3d074aa7-922f-4fde-b138-eff4f750a9c5",
						category: {
							categoryName: "Memoir",
						},
					},
					{
						id: "5b9e0705-3b37-49d4-8588-5e1848a8298c",
						category: {
							categoryName: "Social Commentary",
						},
					},
				],
			},
			{
				id: "82411803-f697-4503-bce7-7636bd3a6acc",
				bookTitle: "Jane Eyre",
				pageCount: 500,
				publishDate: "1847-10-16",
				price: 9.99,
				shortDescription:
					"Charlotte Bront�'s novel is a fiery classic of the Victorian era, telling the tale of Jane Eyre's rise from orphaned child to a woman in her own right, navigating love, morality, and social class.",
				longDescription:
					"Step into the world of Jane Eyre, a classic novel penned by English writer Charlotte Brontë, and journey through the life of a young woman grappling with love, morality, and her own self-worth. The narrative begins with Jane's childhood, spent in the harsh environment of Lowood School after enduring the cruelty of her aunt's household. Despite the adversities she faces, Jane's spirit remains unbroken, making her a character that readers can't help but root for. Her resilience and determination guide her through the gloomy corridors of her life, shaping her into an independent, strong-willed woman.\n\nAs Jane grows, she secures a position as a governess at Thornfield Hall, where she meets the enigmatic Mr. Rochester. Their evolving relationship forms the crux of the novel, one filled with passion, power dynamics, and a hint of the supernatural. While Jane is drawn to Mr. Rochester's brooding personality, she constantly battles with her moral compass and her yearning for love and acceptance. The Thornfield Hall, too, is a character in itself, its eerie corridors and hidden rooms echoing with secrets that dramatically impact Jane's life.\n\n\"Jane Eyre\" is not just a love story but a vivid commentary on social and gender norms of the Victorian era. It's a compelling tale of a woman's quest for freedom, both in terms of love and individuality. As Jane asserts her independence in a society that seeks to suppress her, she becomes an enduring symbol of feminism. Embark on this poignant journey with Jane Eyre, where every page is imbued with her courage, her defiance of societal norms, and her unwavering belief in her own self-worth. This classic tale of love, mystery, and self-discovery is sure to captivate, inspire, and linger in the readers' hearts long after the last page has been turned.",
				inventoryCount: 88,
				isbn: "9780141441146",
				author: {
					id: "025bc38c-9ef7-496c-9e95-6d7af056f429",
					authorFirstName: "Charlotte",
					authorLastName: "Brontë",
				},
				bookReviews: [
					{
						id: "eabe0430-12cc-474b-950f-8c2a8614e2af",
						shortReview: "Timeless classic.",
						review:
							"Jane Eyre is a timeless classic that explores themes of love, independence, and social class. Charlotte Bront�'s vivid characters and rich prose make this a captivating read for lovers of Victorian literature.",
						rating: 4,
						user: {
							id: "85e505f3-d55e-45cb-8d38-f91ae9164d17",
							userName: "jenreads",
						},
					},
					{
						id: "b149ed7b-53d3-4492-8b81-ae2e2d7b5750",
						shortReview: "Well-written but slow pacing.",
						review:
							"While Jane Eyre is a well-written novel with complex characters, some readers may find the pacing slow, especially in the early chapters. However, Bront�'s exploration of social issues is still relevant today.",
						rating: 3,
						user: {
							id: "de223b1f-28ef-4921-b846-0613747e1cee",
							userName: "iambook",
						},
					},
					{
						id: "70d26c56-1e25-46d7-8595-415989978104",
						shortReview: "Masterpiece of English literature.",
						review:
							"Jane Eyre is a masterpiece of English literature, blending romance, mystery, and social commentary seamlessly. Bront�'s portrayal of Jane's inner strength and resilience continues to captivate readers of all ages.",
						rating: 5,
						user: {
							id: "ca1f6b8e-fa79-4d48-8cbc-dd0ef439327e",
							userName: "lovesbooks",
						},
					},
				],
				bookCategories: [
					{
						id: "4c0a1714-6ec7-4bdd-ab12-64e627ba783f",
						category: {
							categoryName: "Coming-of-Age",
						},
					},
					{
						id: "b9082479-e66e-48b6-9ca5-2d4c4d3e82f5",
						category: {
							categoryName: "Romance",
						},
					},
					{
						id: "9ee0da06-0d39-4a10-aefa-6292cc1aa696",
						category: {
							categoryName: "Cultural",
						},
					},
					{
						id: "f36595d6-1283-4105-a69d-4837bb7ed448",
						category: {
							categoryName: "Gothic",
						},
					},
				],
			},
			{
				id: "93cf0e9c-5936-4a98-8500-0840bb7b7740",
				bookTitle: "Frankenstein",
				pageCount: 280,
				publishDate: "1818-01-01",
				price: 7.95,
				shortDescription:
					"Mary Shelley's groundbreaking work of science fiction and horror tells the story of Victor Frankenstein, a young scientist who creates a grotesque creature in an unorthodox scientific experiment.",
				longDescription:
					'In Mary Shelley\'s timeless masterpiece, "Frankenstein", we delve into the fascinating and terrifying world of Dr. Victor Frankenstein, a brilliant but hubristic scientist consumed by his obsession to conquer mortality. Driven by his insatiable curiosity and relentless ambition, he unlocks the mysterious secrets of life and death. He creates a formidable creature, pieced together from the stolen remains of the deceased. However, the results are far from the glory he imagined. Instead, he births a grotesque being that haunts him to his very core. \n\nThe creature, despite its monstrous appearance, is initially innocent as a newborn, yearning for love and companionship. However, the world greets him with fear and hatred, leading him down a path of loneliness and despair. The creature\'s emotional journey, layered with rejection, abandonment and the craving for acceptance, forms a poignant commentary on societal norms and human nature. The creature, in his isolation, turns vengeful, leading to a chilling confrontation between creator and creation.\n\n"Frankenstein" is more than a mere horror story—it’s a profound exploration of the boundary between life and death, the moral responsibilities of creation, and the tragic consequences of playing God. Shelley\'s captivating narrative, combined with her thought-provoking themes and complex characterizations, presents an enthralling tale that will keep you engrossed till the very end. It is not just a novel, but an experience that raises questions about ambition, morality, and the very essence of humanity itself.',
				inventoryCount: 76,
				isbn: "9780486282114",
				author: {
					id: "fbe285c2-edac-49e7-b622-8e2bd6e6faf9",
					authorFirstName: "Mary",
					authorLastName: "Shelley",
				},
				bookReviews: [
					{
						id: "b4e1445e-5de5-403e-89be-c3c0cb948765",
						shortReview: "Gripping tale.",
						review:
							"Frankenstein is a gripping tale of science, ambition, and morality. Mary Shelley's exploration of the consequences of playing god is as relevant today as it was when the novel was first published.",
						rating: 4,
						user: {
							id: "3e4992a5-bde8-4df2-ae06-051d0b7a1805",
							userName: "booklover1",
						},
					},
					{
						id: "e2a7bed9-12ff-43e9-bd04-ace654c2826e",
						shortReview: "Timeless classic.",
						review:
							"Frankenstein is a masterpiece of Gothic literature that delves into themes of ambition, isolation, and the nature of humanity. Mary Shelley's prose is both haunting and beautiful, making this a timeless classic.",
						rating: 5,
						user: {
							id: "9c1b9d38-b2df-4a79-8091-8ef8fa821c88",
							userName: "reader123",
						},
					},
					{
						id: "f8d09c17-13f5-45d9-8f3a-6cd586682b53",
						shortReview: "Classic but slow pacing.",
						review:
							"While Frankenstein is undeniably a classic, some readers may find the pacing slow, especially in the middle sections. However, the novel's exploration of scientific ethics remains thought-provoking.",
						rating: 3,
						user: {
							id: "8410ebc7-bddd-4cff-a651-24b74f193192",
							userName: "bibliophile",
						},
					},
					{
						id: "d59d576c-a66b-44a9-a483-aba644376a18",
						shortReview: "Failed to captivate.",
						review:
							"Frankenstein failed to captivate me as a reader. The narrative felt disjointed, and the characters lacked depth. While the premise is intriguing, the execution fell short of my expectations.",
						rating: 2,
						user: {
							id: "550de341-e5c4-486f-b087-5ef77ff3a72b",
							userName: "bookworm",
						},
					},
				],
				bookCategories: [
					{
						id: "d8247183-e7e0-4325-aad4-2998f8894f00",
						category: {
							categoryName: "Horror",
						},
					},
					{
						id: "19c62b43-b7a6-4993-9faf-f22a2fd27dea",
						category: {
							categoryName: "Science Fiction",
						},
					},
					{
						id: "cc418e78-b1e7-4708-b396-56e50f985f3f",
						category: {
							categoryName: "Gothic",
						},
					},
					{
						id: "620df0aa-a194-4cbe-91e1-e7f4ae7fa031",
						category: {
							categoryName: "Philosophical",
						},
					},
					{
						id: "7ea3f171-fec4-4f2e-803d-872e1f43013a",
						category: {
							categoryName: "Social Commentary",
						},
					},
				],
			},
			{
				id: "dd6a3890-d32a-40ee-ba83-4eab184ee48a",
				bookTitle: "The Count of Monte Cristo",
				pageCount: 1276,
				publishDate: "1844-08-01",
				price: 20,
				shortDescription:
					"A tale of wrongfully imprisoned Edmond Dant�s who escapes from jail, acquires a fortune, and sets about getting revenge on those responsible for his imprisonment. Dumas' epic adventure offers readers a mix of intrigue, romance, and revenge.",
				longDescription:
					'Immerse yourself in the breathtaking world of "The Count of Monte Cristo", one of the finest novels by celebrated French writer Alexandre Dumas. This classic tale, set against the vibrant backdrop of 19th century France, is a sweeping saga of treachery, vengeance, romance, and ultimate redemption. The protagonist, Edmond Dantès, a young, promising sailor, is wrongfully accused of treason on his wedding day and sent to languish in the cold, desolate confines of the Château d\'If. His life takes an unexpected turn when he meets an old inmate who reveals the location of a massive treasure hidden on the island of Monte Cristo.\n\nThe plot thickens as Edmond escapes from prison after 14 agonizing years, assumes the identity of the enigmatic Count of Monte Cristo, and sets about exacting revenge on those who wronged him. As the Count, he is no longer a naive youth but a sophisticated and mysterious nobleman who navigates the illustrious Parisian high society with ease. His quest for justice takes him through a labyrinth of suspense, intrigue, and dramatic confrontations. The narrative masterfully interweaves the fates of characters from all walks of life, each grappling with their own passions, fears, and secrets.\n\n"The Count of Monte Cristo" is not merely a story of vengeance but a profound exploration of humanity, justice, and the transformative power of suffering. Dumas paints a vivid picture of French society, its glamor, decadence, and inherent inequalities. The novel\'s rich, nuanced characters and their moral dilemmas resonate with readers, inviting them to question the nature of justice and the human capacity for resilience and change. Embark on this unforgettable journey with Edmond Dantès and experience the thrills, twists, and revelations that have made "The Count of Monte Cristo" an enduring masterpiece of world literature.',
				inventoryCount: 85,
				isbn: "9780140449266",
				author: {
					id: "b91a05d6-1670-43e5-9757-e72b2dfc354e",
					authorFirstName: "Alexandre",
					authorLastName: "Dumas",
				},
				bookReviews: [
					{
						id: "34695b49-f9e4-4c3e-9b89-a0423fdb28b6",
						shortReview: "Epic tale.",
						review:
							"The Count of Monte Cristo is an epic tale of revenge, betrayal, and redemption. Alexandre Dumas's intricate plot and vivid characters kept me on the edge of my seat from beginning to end. A true masterpiece.",
						rating: 5,
						user: {
							id: "7c7a29c9-a713-440b-9b85-eb5033f02641",
							userName: "avidreader7",
						},
					},
					{
						id: "3aabb50f-09eb-4909-8eb1-70fd6fd96e56",
						shortReview: "Riveting adventure.",
						review:
							"The Count of Monte Cristo is a riveting adventure that explores themes of justice and forgiveness. While the story is lengthy, every twist and turn is worth the journey. Dumas's storytelling prowess shines in this classic.",
						rating: 4,
						user: {
							id: "671b88b5-2cb1-43ff-9b2d-c19c6e319ef7",
							userName: "bookishgal",
						},
					},
					{
						id: "8de784ec-8a89-4372-a143-17baa310ce18",
						shortReview: "Engaging but convoluted.",
						review:
							"While The Count of Monte Cristo is an engaging tale, some readers may find the plot convoluted and the pacing uneven. However, the novel's exploration of revenge and forgiveness is thought-provoking.",
						rating: 3,
						user: {
							id: "7bb8095f-c1a8-4307-b74f-2affe40bae4b",
							userName: "litlover88",
						},
					},
				],
				bookCategories: [
					{
						id: "cae4dcfc-bb4d-469e-ad34-db7d4c7a4074",
						category: {
							categoryName: "Historical",
						},
					},
					{
						id: "7030517a-39c7-439c-82ab-39a21b7b0ffe",
						category: {
							categoryName: "Adventure",
						},
					},
					{
						id: "9934e0ac-1caa-48ba-b27e-5bcf75f3c27e",
						category: {
							categoryName: "Family Saga",
						},
					},
					{
						id: "43413c1e-aad6-4f46-8d88-69ec8af81974",
						category: {
							categoryName: "Modern Classics",
						},
					},
					{
						id: "fc89a539-ef99-42c8-88f1-1429648b99a2",
						category: {
							categoryName: "Romance",
						},
					},
				],
			},
			{
				id: "fdce9426-a4f5-4eca-bc9e-6577c007017d",
				bookTitle: "A Tale of Two Cities",
				pageCount: 544,
				publishDate: "1859-04-30",
				price: 14,
				shortDescription:
					"Set in London and Paris before and during the French Revolution, the novel tells the story of a French doctor's release from imprisonment and the complexities of his life that intertwine with the lives of his daughter and others amidst the turmoil of the revolution.",
				longDescription:
					'"A Tale of Two Cities" by Charles Dickens is an unforgettable journey set against the tumultuous backdrop of the French Revolution. It is an epic narrative that intertwines the lives of its characters across two vibrant cities: London and Paris. As you delve deeper into the book, you encounter a world painted with social injustice, sacrifice, and redemption - a world that holds a mirror to the timeless human condition.\n\nThe story pivots around the lives of the virtuous Dr. Manette, his devoted daughter Lucie, and the two men who love her: Charles Darnay, a French aristocrat who rejects his oppressive family legacy, and Sydney Carton, a dissipated English barrister who seeks meaning and redemption. As the French Revolution unfolds, the characters\' lives are irrevocably intertwined. The plot thickens with each page, packed with intense drama, thrilling suspense, and unexpected twists, keeping you on the edge of your seat.\n\nDickens\' "A Tale of Two Cities" is a classic exploration of love, sacrifice, and resilience in the face of monumental societal upheaval. It showcases the best and worst of humanity, the capacity for deep cruelty and profound love, making it a timeless tale. This book is an absolute must-read if you’re in the mood for a compelling narrative that is both a gripping historical saga and a profound exploration of human nature.',
				inventoryCount: 75,
				isbn: "9780141439600",
				author: {
					id: "170cd91c-1dfd-4d74-ab04-65759c44c723",
					authorFirstName: "Charles",
					authorLastName: "Dickens",
				},
				bookReviews: [
					{
						id: "39ce6cd8-fee4-443d-ab51-6546ef927a46",
						shortReview: "Compelling historical novel.",
						review:
							"A Tale of Two Cities is a compelling historical novel set against the backdrop of the French Revolution. Charles Dickens's vivid descriptions and memorable characters make this a must-read for fans of classic literature.",
						rating: 4,
						user: {
							id: "85e505f3-d55e-45cb-8d38-f91ae9164d17",
							userName: "jenreads",
						},
					},
					{
						id: "80ca38d0-707c-4f17-8d7b-fe75ed00cc70",
						shortReview: "Fascinating but verbose.",
						review:
							"While A Tale of Two Cities offers a fascinating glimpse into the French Revolution, some readers may find Dickens's writing style verbose and the plot overly melodramatic. Nonetheless, the novel's themes of sacrifice and redemption are timeless.",
						rating: 3,
						user: {
							id: "de223b1f-28ef-4921-b846-0613747e1cee",
							userName: "iambook",
						},
					},
					{
						id: "5046c79a-f0be-4003-b504-7676964446a2",
						shortReview: "Literary masterpiece.",
						review:
							"A Tale of Two Cities is a literary masterpiece that captures the tumultuous spirit of the French Revolution. Dickens's rich storytelling and poignant themes of sacrifice and resurrection make this a timeless classic.",
						rating: 5,
						user: {
							id: "ca1f6b8e-fa79-4d48-8cbc-dd0ef439327e",
							userName: "lovesbooks",
						},
					},
				],
				bookCategories: [
					{
						id: "67a5193e-b5e2-40c6-8a1a-f04f351af11d",
						category: {
							categoryName: "Historical",
						},
					},
					{
						id: "ec094c35-d984-4aa7-b515-1b2029bb3026",
						category: {
							categoryName: "Romance",
						},
					},
					{
						id: "64bf5632-105a-40d9-8519-856cbdfba601",
						category: {
							categoryName: "Satire",
						},
					},
					{
						id: "f3ae4b97-cfdd-4225-b27e-4ae64b204e0e",
						category: {
							categoryName: "Gothic",
						},
					},
				],
			},
			{
				id: "2afe9fc2-d209-46a4-a4fb-f77d808368e4",
				bookTitle: "The Jungle Book",
				pageCount: 240,
				publishDate: "1894-01-01",
				price: 12.99,
				shortDescription:
					"A collection of stories by Rudyard Kipling, featuring tales of Mowgli, a boy raised by wolves in the Indian jungle. These stories, which also feature a variety of other jungle animals, are noted for their moral lessons and vivid descriptions.",
				longDescription:
					'Immerse yourself in the enchanting world of "The Jungle Book," where the wilds of the Indian jungle come alive under the masterful storytelling of Rudyard Kipling. The book is a collection of mesmerizingly vivid stories and poems, first published in 1894, that plunge readers into the heart of the Indian jungle, introducing them to a host of unforgettable characters and stirring adventures. Readers traverse the rich landscape alongside the book\'s central character, Mowgli, a human boy raised by wolves, and share in his journey of self-discovery and survival.\n\nMowgli\'s story, though central, is but one thread in the rich tapestry of "The Jungle Book." You will be introduced to the law of the jungle, where every creature has a role to play, and survival depends on understanding these unwritten rules. His unique upbringing among the wolves and his tutelage under the wise bear Baloo and the astute black panther Bagheera give him an unparalleled understanding of this law. Yet, his journey is fraught with danger, not least from the fearsome tiger Shere Khan, who sees Mowgli as an affront to the natural order.\n\n"The Jungle Book" is more than an adventure story; it\'s a timeless exploration of the dichotomy between civilization and the natural world. The book imparts age-old wisdom through its narrative, dealing with themes of identity, acceptance, and the value of community. Kipling\'s rich, descriptive prose will transport you straight into the jungle, with its verdant foliage, exotic animals, and the untamed beauty that lies therein. The book promises an enchanting read for both children and adults, filled with action, adventure, life lessons and an unforgettably rich narrative tapestry.',
				inventoryCount: 90,
				isbn: "9780141325293",
				author: {
					id: "7a82c24e-240b-458f-89be-ea81952f721d",
					authorFirstName: "Rudyard",
					authorLastName: "Kipling",
				},
				bookReviews: [
					{
						id: "f0ba6e92-dac1-437c-891a-24ab1e223113",
						shortReview: "Captivating tales.",
						review:
							"The Jungle Book is a classic collection of stories that vividly brings the jungle to life. Rudyard Kipling's imaginative tales captivate readers of all ages with their adventure and charm.",
						rating: 4,
						user: {
							id: "3e4992a5-bde8-4df2-ae06-051d0b7a1805",
							userName: "booklover1",
						},
					},
					{
						id: "7a755ff6-7965-44ff-ba4b-65f0c4b81495",
						shortReview: "Timeless masterpiece.",
						review:
							"The Jungle Book is a timeless masterpiece that transports readers into the heart of the jungle. Kipling's rich descriptions and memorable characters make this a must-read for anyone who loves adventure.",
						rating: 5,
						user: {
							id: "9c1b9d38-b2df-4a79-8091-8ef8fa821c88",
							userName: "reader123",
						},
					},
					{
						id: "808f5252-0c31-4145-b39e-01ba5e2d676e",
						shortReview: "Outdated themes.",
						review:
							"While The Jungle Book is a classic work of literature, some readers may find the language and themes outdated. However, Kipling's storytelling still holds a certain charm that can appeal to those interested in adventure.",
						rating: 3,
						user: {
							id: "8410ebc7-bddd-4cff-a651-24b74f193192",
							userName: "bibliophile",
						},
					},
					{
						id: "81e744f9-a6dc-4cb1-839c-0556bbfc4635",
						shortReview: "Lacked depth.",
						review:
							"The Jungle Book failed to capture my interest. The stories felt disjointed, and the characters lacked depth. While it may have been groundbreaking in its time, it does not resonate with modern readers.",
						rating: 2,
						user: {
							id: "550de341-e5c4-486f-b087-5ef77ff3a72b",
							userName: "bookworm",
						},
					},
				],
				bookCategories: [
					{
						id: "53230fed-90d2-4022-916f-b6fe717b1df4",
						category: {
							categoryName: "Children’s Literature",
						},
					},
					{
						id: "3e9d5112-265b-4b9f-91d4-0d19bb564ba7",
						category: {
							categoryName: "Children’s Fantasy",
						},
					},
					{
						id: "0977b508-a3eb-4652-8526-b4e28e46d0c9",
						category: {
							categoryName: "Young Adult Fiction",
						},
					},
					{
						id: "e4309bfe-a8d9-4264-a7da-384628b6a236",
						category: {
							categoryName: "Mythology",
						},
					},
				],
			},
			{
				id: "80c39dff-06b6-489d-8169-bb58b0ba1f8c",
				bookTitle: "Madame Bovary",
				pageCount: 320,
				publishDate: "1856-01-01",
				price: 11.95,
				shortDescription:
					"Gustave Flaubert's debut novel is a meticulous depiction of bourgeois triviality and a woman's pursuit of the extraordinary in her life, leading to her eventual downfall.",
				longDescription:
					"\"Madame Bovary,\" penned by Gustave Flaubert, is a richly detailed exploration of the human condition, a delicate dance of dreams and despair that is as poignant today as it was upon its release in 1857. The novel revolves around Emma Bovary, a young woman of refined tastes and grand aspirations, trapped in a lackluster marriage to Charles, a country doctor. Emma's quest for passion, fulfillment, and the grandeur of high society, which she has only experienced through romantic novels, sets the stage for a compelling narrative of self-discovery and tragedy.\n\nAs the narrative unfolds, readers are drawn into Emma's increasingly reckless pursuit of the life she dreams of, a life that stands in stark contrast to the mundane realities of her existence. Her disillusionment with her marriage and her longing for excitement lead her into the arms of two different lovers, Rodolphe Boulanger and Léon Dupuis. Emma's extramarital affairs, however, do not provide the satisfaction she seeks. Instead, her romantic escapades set in motion a destructive cycle of debt and deception, ultimately leading to her downfall.\n\nFlaubert's \"Madame Bovary\" is more than a tale of adultery and dissatisfaction; it is a scathing critique of the Romantic ideals of the time and a profound exploration of the consequences of unchecked desire. The novel's masterful realism, its intricate characterizations, and its unflinching depiction of the darker aspects of human nature make it a must-read classic. Embark on a journey with Emma Bovary, through the highs and lows of her life, and experience the timeless power of Flaubert's storytelling.",
				inventoryCount: 60,
				isbn: "9780140449129",
				author: {
					id: "14b0d2b0-e758-41e3-a863-59597b951f41",
					authorFirstName: "Gustave",
					authorLastName: "Flaubert",
				},
				bookReviews: [
					{
						id: "0fb1b85f-37b0-4a5c-84a1-ec02e4d55f72",
						shortReview: "Powerful exploration.",
						review:
							"Madame Bovary is a powerful exploration of desire, betrayal, and societal expectations. Gustave Flaubert's prose is exquisite, painting a vivid portrait of Emma Bovary's tragic life.",
						rating: 5,
						user: {
							id: "7c7a29c9-a713-440b-9b85-eb5033f02641",
							userName: "avidreader7",
						},
					},
					{
						id: "d08dd729-0d71-40f6-bbf0-d74fbfaf88ca",
						shortReview: "Compelling glimpse.",
						review:
							"Madame Bovary offers a compelling glimpse into the complexities of human nature. Flaubert's attention to detail and character development make this a timeless classic that continues to resonate with readers.",
						rating: 4,
						user: {
							id: "671b88b5-2cb1-43ff-9b2d-c19c6e319ef7",
							userName: "bookishgal",
						},
					},
					{
						id: "98a62992-7404-4ad6-8a52-63e26704a905",
						shortReview: "Frustrating protagonist.",
						review:
							"While Madame Bovary is undeniably well-written, I found the protagonist's actions frustrating and the plot slow-paced. However, Flaubert's exploration of societal norms and gender roles is thought-provoking.",
						rating: 3,
						user: {
							id: "7bb8095f-c1a8-4307-b74f-2affe40bae4b",
							userName: "litlover88",
						},
					},
				],
				bookCategories: [
					{
						id: "600b498b-11d4-4757-871b-5a1bc330fc90",
						category: {
							categoryName: "Romance",
						},
					},
					{
						id: "5aa7d78d-d5bc-4679-9405-bfcc5511aa8a",
						category: {
							categoryName: "Literary Realism",
						},
					},
					{
						id: "ba7886ae-3ecf-4812-908d-549fef614f9c",
						category: {
							categoryName: "Postmodern",
						},
					},
					{
						id: "a82fee95-7118-4549-9567-84bc2088fe22",
						category: {
							categoryName: "Gothic",
						},
					},
				],
			},
			{
				id: "2ddb6885-f7de-4302-a0a7-e949d39f3204",
				bookTitle: "The Scarlet Letter",
				pageCount: 256,
				publishDate: "1850-03-16",
				price: 8.95,
				shortDescription:
					"Set in Puritan Massachusetts Bay Colony during the years 1642 to 1649, Hawthorne's novel tells the story of Hester Prynne, who conceives a daughter through an affair and struggles to create a new life of repentance and dignity.",
				longDescription:
					"Step into the world of seventeenth-century Puritan Boston with Nathaniel Hawthorne's \"The Scarlet Letter\", a tale of sin, guilt, and redemption that delves deep into the human heart. The novel opens with Hester Prynne, a young, beautiful woman who is publically shamed and forced to wear a scarlet 'A' on her chest as a symbol of her sin - adultery. Her husband, who has been absent for years and presumed lost at sea, mysteriously appears just in time to witness Hester's public humiliation but remains unrecognized by anyone except Hester. \n\nThe narrative quickly transforms into an intense psychological portrait as Hester refuses to name her child's father, and the town's respected minister, Arthur Dimmesdale, struggles with his private guilt over his hidden sin. As Dimmesdale's guilt consumes him, Hester's estranged husband, now living under the alias Roger Chillingworth, embarks on a vengeful quest to discover the identity of Hester's lover. The story takes an eerie turn as Chillingworth's malevolent intentions become clear and Dimmesdale's health starts to deteriorate under the weight of his guilt.\n\n\"The Scarlet Letter\" is a haunting exploration of the human soul's struggle with guilt, sin, and societal judgement. It is a timeless tale that raises questions about identity, love, and the inherent complexities of the human condition. Nathaniel Hawthorne's evocative prose and deeply drawn characters offer a vivid and unflinching look at the moral values of a society and the individuals within it. \"The Scarlet Letter\" is not just a novel; it is a meditation on the human capacity for sin and redemption, making it a must-read for those who appreciate thought-provoking literature.",
				inventoryCount: 80,
				isbn: "9780486280486",
				author: {
					id: "fcef9d8f-34f5-4e4f-89d1-c003412b3128",
					authorFirstName: "Nathaniel",
					authorLastName: "Hawthorne",
				},
				bookReviews: [
					{
						id: "08a397d2-fb08-4202-b12d-1b9196cde63b",
						shortReview: "Compelling read.",
						review:
							"The Scarlet Letter is a classic novel that delves into themes of sin, guilt, and redemption. Nathaniel Hawthorne's prose is elegant and evocative, making this a compelling read from start to finish.",
						rating: 4,
						user: {
							id: "85e505f3-d55e-45cb-8d38-f91ae9164d17",
							userName: "jenreads",
						},
					},
					{
						id: "1baec5f6-5c4d-4dd0-b9eb-fb64a8e407ab",
						shortReview: "Thought-provoking.",
						review:
							"The Scarlet Letter is a thought-provoking novel that explores the consequences of societal judgment and hypocrisy. While Hawthorne's writing style may be dense for some, the themes remain relevant to contemporary society.",
						rating: 3,
						user: {
							id: "de223b1f-28ef-4921-b846-0613747e1cee",
							userName: "iambook",
						},
					},
					{
						id: "04ed4168-9c0b-4305-9e0e-a30fa42a20dd",
						shortReview: "Timeless masterpiece.",
						review:
							"The Scarlet Letter is a timeless masterpiece that continues to resonate with readers today. Hawthorne's exploration of sin and redemption is profound, and the novel's themes are as relevant now as they were in the 19th century.",
						rating: 5,
						user: {
							id: "ca1f6b8e-fa79-4d48-8cbc-dd0ef439327e",
							userName: "lovesbooks",
						},
					},
				],
				bookCategories: [
					{
						id: "906baf2d-f2a1-489b-8d49-bf11ff34113f",
						category: {
							categoryName: "Gothic",
						},
					},
					{
						id: "0e40dba6-0b6a-4af4-aa71-0bb43339cfc3",
						category: {
							categoryName: "Social Commentary",
						},
					},
					{
						id: "eef0ba9c-8cd0-4ece-bf9b-3372aa3b56ca",
						category: {
							categoryName: "Romance",
						},
					},
					{
						id: "8718d3d2-365d-4d4f-92a8-b3726d0dc3b5",
						category: {
							categoryName: "Feminist Literature",
						},
					},
				],
			},
			{
				id: "5fc4c664-a78e-45d8-964a-530ce1c97049",
				bookTitle: "Middlemarch",
				pageCount: 904,
				publishDate: "1871-12-01",
				price: 18,
				shortDescription:
					"George Eliot's complex tale of life in a provincial English town, Middlemarch explores the intricate web of relationships and the challenges of making choices that affect the rest of one's life.",
				longDescription:
					"In the heart of England, the town of Middlemarch forms the backdrop of George Eliot's magnum opus, a richly textured and intricate tapestry of life in the provincial 19th century. The narrative is populated with a diverse cast of characters, each meticulously and lovingly depicted. Middlemarch is an epic novel of grand scope and vision, exploring the social, political, and religious issues of the time, as well as delving deep into the human heart.\n\nCentral to the narrative are the compelling stories of two young women, Dorothea Brooke and Tertius Lydgate, both yearning for change and meaning in their lives. Dorothea, idealistic and naive, seeks a fulfilling life of intellectual and spiritual purpose, only to become trapped in an oppressive marriage. Dr. Lydgate, a man of science and progress, is ambitious to bring modern medicine to Middlemarch. However, his noble intentions become compromised by love, reputation, and the stifling constraints of society.\n\nEliot's Middlemarch is an unflinching exploration of the complexities of love, marriage, and ambition, the struggle for reform and the resistance to change. It is a profound reflection on the constraints of society, the nature of character, and the intricate interplay of personal desires and broader social forces. With its depth and realism, Middlemarch stands as one of the most accomplished and profound works of English literature, a timeless and poignant journey into the human soul.",
				inventoryCount: 70,
				isbn: "9780141439549",
				author: {
					id: "3d7e1546-5b3b-41ef-87ce-8455f07dbf3e",
					authorFirstName: "George",
					authorLastName: "Eliot",
				},
				bookReviews: [
					{
						id: "1df54307-7d27-40cf-a330-ac3c82e50b70",
						shortReview: "Rich and complex.",
						review:
							"Middlemarch is a rich and complex novel that delves deep into the lives of its characters. George Eliot's insightful commentary on society and human nature makes this a rewarding read.",
						rating: 4,
						user: {
							id: "3e4992a5-bde8-4df2-ae06-051d0b7a1805",
							userName: "booklover1",
						},
					},
					{
						id: "bd49ebc8-0a3c-44c7-a197-e24fe9840904",
						shortReview: "Timeless classic.",
						review:
							"Middlemarch is a masterpiece of Victorian literature. Eliot's vivid portrayal of provincial life and her nuanced characters make this novel a timeless classic.",
						rating: 5,
						user: {
							id: "9c1b9d38-b2df-4a79-8091-8ef8fa821c88",
							userName: "reader123",
						},
					},
					{
						id: "a75a1197-dced-4998-a1fd-191b92bf9789",
						shortReview: "Dense prose.",
						review:
							"While Middlemarch is undoubtedly a well-crafted novel, its length and dense prose may deter some readers. However, those who persevere will find a rewarding exploration of human relationships.",
						rating: 3,
						user: {
							id: "8410ebc7-bddd-4cff-a651-24b74f193192",
							userName: "bibliophile",
						},
					},
					{
						id: "3ba4e68b-250e-4f18-9ba2-022d057652cc",
						shortReview: "Disappointing read.",
						review:
							"Middlemarch was a disappointing read for me. The slow pace and multitude of characters made it difficult to engage with the story. While some may appreciate its depth, I found it tedious.",
						rating: 2,
						user: {
							id: "550de341-e5c4-486f-b087-5ef77ff3a72b",
							userName: "bookworm",
						},
					},
				],
				bookCategories: [
					{
						id: "dc71efaf-830c-4bb7-b636-dc2ce44a7c6b",
						category: {
							categoryName: "Historical",
						},
					},
					{
						id: "6a6fa283-ee00-48dc-a536-9c0eae6756a5",
						category: {
							categoryName: "Literary Realism",
						},
					},
					{
						id: "ab7e1d50-ca07-458b-9f3f-da79ddd45f2c",
						category: {
							categoryName: "Social Commentary",
						},
					},
					{
						id: "8146c871-3eb4-409e-bdc7-cc4b1baed6e2",
						category: {
							categoryName: "Gender Studies",
						},
					},
				],
			},
			{
				id: "ed7998de-e7d2-4c18-a659-174820e7d9b1",
				bookTitle: "A Doll's House",
				pageCount: 96,
				publishDate: "1879-12-01",
				price: 9.99,
				shortDescription:
					"Henrik Ibsen's groundbreaking play challenges the traditional roles of men and women in 19th-century marriage. Nora Helmer's journey to self-discovery and liberation remains a powerful statement on gender norms and individual freedom.",
				longDescription:
					"Immerse yourself in the world of \"A Doll's House,\" an exquisite play written by the renowned Norwegian playwright, Henrik Ibsen. This path-breaking piece, first premiered in 1879, is not just a play but a riveting exploration of the societal norms of the 19th-century, specifically focusing on the role and rights of women in a male-dominated society. The story revolves around the life of Nora Helmer, a seemingly frivolous and naive woman, happily ensconced in her 'dollhouse' life, but beneath this façade, she hides a secret that could shatter her idyllic world.\n\nNora, the protagonist, appears to be living a fairy-tale life with her husband, Torvald, and their three children in a comfortable house. However, the reality is far from perfect. Nora is treated like a doll, her role confined to being a dutiful wife and mother, with no say in her life's matters. The twist in the tale comes when a past decision, taken by Nora to save her husband's life, comes back to haunt her. She had borrowed money illegally, forging her father's signature, and the lender, Krogstad, threatens to expose her. Nora's desperate attempts to keep her secret and protect her 'dollhouse' form the crux of the story.\n\n\"A Doll's House\" delves into the themes of deceit, gender roles, and the quest for identity. Nora's transformation from a 'doll' to an independent woman, questioning societal norms and seeking her own identity, forms the heart of the narrative. The climax, which features Nora slamming the door on her old life, is considered one of the most famous scenes in theatre history. \"A Doll's House\" is not just a play, it is a powerful commentary on the need for individual freedom and self-realization. This book promises to engage the readers, making them question the societal status quo, and leaves them pondering long after they've turned the last page.",
				inventoryCount: 85,
				isbn: "9780486270623",
				author: {
					id: "6cf6bc91-3581-4090-9c07-d4d6ff311897",
					authorFirstName: "Henrik",
					authorLastName: "Ibsen",
				},
				bookReviews: [
					{
						id: "2aa885f0-51c2-4888-9b48-d9e6a57c69ab",
						shortReview: "Groundbreaking play.",
						review:
							"A Doll's House is a groundbreaking play that challenges societal norms and expectations. Henrik Ibsen's exploration of gender roles and identity is as relevant today as it was when the play was first performed.",
						rating: 5,
						user: {
							id: "7c7a29c9-a713-440b-9b85-eb5033f02641",
							userName: "avidreader7",
						},
					},
					{
						id: "1ddb4f08-cffc-46ee-bb6c-6fde918cfaa8",
						shortReview: "Thought-provoking.",
						review:
							"A Doll's House is a thought-provoking play that raises important questions about marriage and individual freedom. Ibsen's skillful storytelling and memorable characters make this a must-read for anyone interested in social issues.",
						rating: 4,
						user: {
							id: "671b88b5-2cb1-43ff-9b2d-c19c6e319ef7",
							userName: "bookishgal",
						},
					},
					{
						id: "20cf6ea4-ea67-45f0-832f-2ca3392e69f8",
						shortReview: "Melodramatic.",
						review:
							"While A Doll's House addresses significant themes, I found the characters and dialogue somewhat melodramatic. However, I appreciate its historical importance and impact on feminist literature.",
						rating: 3,
						user: {
							id: "7bb8095f-c1a8-4307-b74f-2affe40bae4b",
							userName: "litlover88",
						},
					},
				],
				bookCategories: [
					{
						id: "1c549671-d1f9-4887-a0f9-c4aa4164a7e9",
						category: {
							categoryName: "Drama",
						},
					},
					{
						id: "6a5c5657-394e-4a8d-b5f1-1a51c9cba3a4",
						category: {
							categoryName: "Feminist Theory",
						},
					},
					{
						id: "06f5f3b2-65df-48a1-abf7-9fba09a7c923",
						category: {
							categoryName: "Feminist Literature",
						},
					},
					{
						id: "2058133f-0f49-4baa-bfb4-fbf25fce5c7e",
						category: {
							categoryName: "Romance",
						},
					},
				],
			},
			{
				id: "b113c266-e5d3-47fd-92ab-6112915d21f8",
				bookTitle: "Tess of the d'Urbervilles",
				pageCount: 592,
				publishDate: "1891-11-01",
				price: 12,
				shortDescription:
					"Thomas Hardy's novel traces the life of Tess Durbeyfield, a young woman whose destiny is shaped by the Victorian society in which she lives and the social mores that dictate her fate.",
				longDescription:
					"\"Tess of the d'Urbervilles\" is a captivating exploration of life, love, betrayal, and tragedy, penned by the acclaimed author Thomas Hardy. Set against the rural backdrop of Wessex, this stirring narrative follows the life of Tess Durbeyfield, a young woman of extraordinary beauty and captivating innocence. When a local parson reveals that the Durbeyfields are descendants of the noble d'Urberville family, Tess’s life takes a turn. Her unemployed father, in a bid to improve the family's fortunes, sends Tess to claim kinship with the wealthy d'Urbervilles, unwittingly setting the stage for his daughter's profound trials.\n\nAt the d'Urbervilles, Tess encounters her 'cousin' Alec, who, infatuated by her beauty, seduces and betrays her, leading to her bearing a child out of wedlock. This shocking event in Tess's life is a turning point, leading to shame, the death of her child, and her ostracization from society. However, Tess’s resilience shines through as she seeks employment elsewhere and strives to live a life of dignity, far from her past.\n\nIn a twist of fate, Tess meets Angel Clare, a man who cherishes her soul's pure essence rather than her sullied reputation. Their deep love offers Tess a chance at redemption and happiness. Yet, the shadow of her past haunts her, threatening to shatter her newfound bliss. Hardy's novel, filled with metaphor and symbolism, is a poignant examination of Victorian society's hypocrisy and the unforgiving double standards for women. \"Tess of the d'Urbervilles,\" with its unforgettable heroine and profound reflections on the human condition, promises a reading experience that will both challenge and move you.",
				inventoryCount: 78,
				isbn: "9780141439594",
				author: {
					id: "8944c8bb-b36a-4707-88b6-7512799b3f7f",
					authorFirstName: "Thomas",
					authorLastName: "Hardy",
				},
				bookReviews: [
					{
						id: "f75289f6-3842-412c-b46e-08e4e1b1cdf6",
						shortReview: "Tragic yet compelling.",
						review:
							"Tess of the d'Urbervilles is a tragic yet compelling tale of innocence lost and societal injustice. Thomas Hardy's poetic prose and vivid descriptions bring the English countryside to life.",
						rating: 4,
						user: {
							id: "85e505f3-d55e-45cb-8d38-f91ae9164d17",
							userName: "jenreads",
						},
					},
					{
						id: "926fc70d-cdf0-4252-834b-ede18abccaf2",
						shortReview: "Somber novel.",
						review:
							"Tess of the d'Urbervilles is a somber novel that highlights the harsh realities faced by women in Victorian England. While Hardy's writing is beautiful, the bleakness of the story may be off-putting for some.",
						rating: 3,
						user: {
							id: "de223b1f-28ef-4921-b846-0613747e1cee",
							userName: "iambook",
						},
					},
					{
						id: "3edea765-469e-4173-b406-5c0787789b8c",
						shortReview: "Masterpiece.",
						review:
							"Tess of the d'Urbervilles is a masterpiece of English literature. Hardy's exploration of themes such as fate, morality, and the plight of women is both profound and moving. A must-read for lovers of classic literature.",
						rating: 5,
						user: {
							id: "ca1f6b8e-fa79-4d48-8cbc-dd0ef439327e",
							userName: "lovesbooks",
						},
					},
				],
				bookCategories: [
					{
						id: "e68b6417-5fb4-4f2e-b18b-55f6e2a4b8a0",
						category: {
							categoryName: "Social Commentary",
						},
					},
					{
						id: "2472373a-b83b-4d2a-ad9a-5d5a08f9adf9",
						category: {
							categoryName: "Gender Studies",
						},
					},
					{
						id: "0c254665-6606-471c-9a33-ce8db65539e1",
						category: {
							categoryName: "Feminist Literature",
						},
					},
					{
						id: "85461c63-2355-4253-81d8-9f8f1ebb2550",
						category: {
							categoryName: "Romance",
						},
					},
				],
			},
			{
				id: "2888a4bb-9c18-4bf5-b512-61e9c4fd659f",
				bookTitle: "The Turn of the Screw",
				pageCount: 120,
				publishDate: "1898-10-01",
				price: 6.95,
				shortDescription:
					"Henry James's chilling ghost story centers around a governess who becomes convinced that the children in her care are being stalked by malevolent ghosts.",
				longDescription:
					"In the chilling classic, \"The Turn of the Screw,\" by Henry James, a young, impressionable governess is entrusted with the caretaking of two mysteriously orphaned children at a grand, isolated manor in the English countryside. The book opens with a gathering of friends sharing ghost stories, setting the stage for the tale's eerie tone. Among them, a man named Douglas presents our governess's story, an old manuscript that documents her haunting experiences. This narrative within a narrative spirals the reader into a tale of chilling encounters and lurking specters, further blurring the line between reality and the supernatural.\n\nAs the governess settles into her new role, she begins to notice strange occurrences and apparitions of a man and woman around the estate, whom she later identifies as the previous governess, Miss Jessel, and the valet, Peter Quint, both deceased. Her charges, the angelic Flora and the charismatic Miles, seem eerily connected to these phantoms. The governess becomes convinced that they are under the spectral influence of Jessel and Quint, leading her into a desperate struggle to save their innocent souls. The book becomes a psychological thriller, as readers grapple with the governess's reliability. Is she a heroine battling against unseen forces, or is she a woman spiraling into her own madness?\n\n\"The Turn of the Screw\" is a masterfully crafted blend of Victorian-era drama and gothic horror. It embodies Henry James's signature style of intricate, suspenseful storytelling that leaves readers questioning their perception. The book's ambiguous ending only adds to its allure, making it a subject of debate and analysis for generations. This haunting tale of psychological suspense and the supernatural invites readers into a world where nothing is as it seems. As you navigate through the shadowy corridors of Bly Manor and the human mind, you'll find yourself questioning: Are these apparitions genuine, or are they the product of a disturbed imagination? The mystery of \"The Turn of the Screw\" awaits your discovery.\n",
				inventoryCount: 92,
				isbn: "9780486266849",
				author: {
					id: "ab019136-649b-451b-85b7-cef10d56495c",
					authorFirstName: "Henry",
					authorLastName: "James",
				},
				bookReviews: [
					{
						id: "a77b6709-a7ec-4ea9-96b3-92fdb8bf1ccb",
						shortReview: "Chilling tale.",
						review:
							"The Turn of the Screw is a chilling tale that keeps you on the edge of your seat. Henry James's mastery of suspense and psychological horror makes this a classic ghost story.",
						rating: 4,
						user: {
							id: "3e4992a5-bde8-4df2-ae06-051d0b7a1805",
							userName: "booklover1",
						},
					},
					{
						id: "59ec2f20-ef9a-4410-b983-2c958d518259",
						shortReview: "Masterpiece of ambiguity.",
						review:
							"The Turn of the Screw is a masterpiece of ambiguity and suspense. Henry James's exploration of the supernatural and the psychological is both gripping and thought-provoking.",
						rating: 5,
						user: {
							id: "9c1b9d38-b2df-4a79-8091-8ef8fa821c88",
							userName: "reader123",
						},
					},
					{
						id: "31f89f51-3477-433c-bab9-ab853cd1c4e0",
						shortReview: "Frustrating ambiguity.",
						review:
							"While The Turn of the Screw has its moments of suspense, I found the ambiguity frustrating. The lack of clarity regarding the supernatural elements detracted from my enjoyment of the story.",
						rating: 3,
						user: {
							id: "8410ebc7-bddd-4cff-a651-24b74f193192",
							userName: "bibliophile",
						},
					},
					{
						id: "36e6df27-da4b-46c6-854f-13226aa2faaa",
						shortReview: "Underwhelming.",
						review:
							"The Turn of the Screw left me feeling underwhelmed. The pacing was slow, and the plot felt disjointed. While I appreciate its literary significance, I struggled to connect with the story.",
						rating: 2,
						user: {
							id: "550de341-e5c4-486f-b087-5ef77ff3a72b",
							userName: "bookworm",
						},
					},
				],
				bookCategories: [
					{
						id: "6e6b3696-207d-494f-8152-ea5a9fcf4bb0",
						category: {
							categoryName: "Horror",
						},
					},
					{
						id: "7eb50347-e078-40da-ba74-2d20e09fbed8",
						category: {
							categoryName: "Psychological Thriller",
						},
					},
					{
						id: "b93806f4-1fb4-4653-8696-3699d538db92",
						category: {
							categoryName: "Psychological Fiction",
						},
					},
				],
			},
			{
				id: "dcd8068f-afad-476e-9496-be37f63b341d",
				bookTitle: "The Awakening",
				pageCount: 195,
				publishDate: "1899-04-22",
				price: 7.99,
				shortDescription:
					"Kate Chopin's novel is a daring exploration of female independence and sexuality. Edna Pontellier's struggle to reconcile her unorthodox views on femininity and motherhood with the prevailing social attitudes of the turn-of-the-century American South is compelling and tragic.",
				longDescription:
					"Immerse yourself in the profoundly moving narrative of \"The Awakening\" by Kate Chopin, a timeless classic that delves into the intricacies of personal freedom, self-expression, and the confines of societal norms. The novel, set in the late 19th century, propels readers into the life of Edna Pontellier, a young woman who finds herself trapped in the confines of societal expectations and a loveless marriage. As she vacations in Grand Isle, Louisiana, she embarks on a journey of self-discovery and self-assertion, bravely challenging the traditional boundaries of her time.\n\nIn the summer heat of the idyllic Grand Isle, Edna finds herself drawn to the charismatic Robert Lebrun, a relationship that awakens her dormant desires and longing for freedom. This illicit love affair serves as the catalyst for Edna's transformation, igniting a flame of defiance against her life's monotonous routine and societal norms. Through Chopin's exquisite narrative, readers witness the evolution of Edna from a dutiful wife and mother to a woman who dares to pursue her dreams and desires, even if they stand in stark contrast to the societal expectations of her time.\n\n\"The Awakening\" is not just a novel; it's a bold statement about a woman's right to emotional and personal freedom. It grapples with themes of feminism, identity, and sexuality, wrapped in the poetic prose of Chopin. This novel, with its daring exploration of a woman's gradual liberation from societal constraints, is sure to resonate with anyone who has ever felt the need to break free. Experience the stirring journey of Edna Pontellier, as she bravely defies the norms in pursuit of her own happiness, and, in the process, awakens to her true self.",
				inventoryCount: 80,
				isbn: "9780486277868",
				author: {
					id: "2d7532d3-6f13-4805-b900-0a934d58c725",
					authorFirstName: "Kate",
					authorLastName: "Chopin",
				},
				bookReviews: [
					{
						id: "6fe54472-3570-46ec-949a-9dcc3d1730e1",
						shortReview: "Powerful and poignant.",
						review:
							"The Awakening is a powerful and poignant novel that explores themes of female independence and self-discovery. Kate Chopin's lyrical prose and insightful portrayal of Edna Pontellier's journey make this a timeless classic.",
						rating: 5,
						user: {
							id: "7c7a29c9-a713-440b-9b85-eb5033f02641",
							userName: "avidreader7",
						},
					},
					{
						id: "bce393a0-5fd6-4303-8705-4f204eb18792",
						shortReview: "Thought-provoking.",
						review:
							"The Awakening is a thought-provoking novel that challenges societal norms and expectations. Kate Chopin's exploration of female identity and desire is as relevant today as it was when the book was first published.",
						rating: 4,
						user: {
							id: "671b88b5-2cb1-43ff-9b2d-c19c6e319ef7",
							userName: "bookishgal",
						},
					},
					{
						id: "d08e9748-b1ba-4fd3-9d13-743c1823be72",
						shortReview: "Frustrating protagonist.",
						review:
							"While The Awakening addresses important themes, I found the protagonist's actions to be frustrating at times. However, Chopin's exploration of women's roles in society is still relevant today.",
						rating: 3,
						user: {
							id: "7bb8095f-c1a8-4307-b74f-2affe40bae4b",
							userName: "litlover88",
						},
					},
				],
				bookCategories: [
					{
						id: "b6671015-412f-4891-87cf-9745fcfb0f59",
						category: {
							categoryName: "Social Commentary",
						},
					},
					{
						id: "6ea6e64b-0434-44ad-b81a-e234c0303377",
						category: {
							categoryName: "Feminist Literature",
						},
					},
					{
						id: "5a4b321e-d72e-4277-b9cc-35ecadd6bc49",
						category: {
							categoryName: "Drama",
						},
					},
				],
			},
			{
				id: "32ee910b-5b89-4b37-a8ae-8843dba9510d",
				bookTitle: "The Cherry Orchard",
				pageCount: 96,
				publishDate: "1904-01-17",
				price: 10,
				shortDescription:
					"Chekhov's last play, a masterpiece of modern drama, portrays the decline of the aristocratic Ranevskaya family and the sale of their estate, including its much-loved cherry orchard.",
				longDescription:
					"Immerse yourself in the timeless, evocative world of Anton Chekhov's \"The Cherry Orchard\". This masterpiece of modernist literature transports readers to the heart of Russia at the turn of the 20th century, during a period of seismic social and political change. Through the eyes of the aristocratic Ranevskaya family and their devoted servants, Chekhov expertly explores the themes of memory, loss, and social upheaval, painting a vivid portrait of a society on the brink of revolution.\n\nIn \"The Cherry Orchard\", Madame Ranevskaya, a noblewoman, returns to her family estate in Russia, including its magnificent, but financially draining cherry orchard. Ranevskaya's nostalgic attachment to the orchard, which symbolizes her family's history and social status, prevents her from accepting the reality of her dire financial situation. As she and her family grapple with the impending loss of their estate to debtors, a former serf-turned-wealthy merchant, Lopakhin, offers a solution that could save them from ruin but at the cost of their treasured orchard. The struggle between past and future, between preservation and progress, fuels the narrative's tension, resulting in a story that's both deeply personal and universally resonant.\n\n\"The Cherry Orchard\" is more than just a tale of a fading aristocracy; it's a profound exploration of how people cope with change. Each character, from the nostalgic Madame Ranevskaya to the pragmatic Lopakhin, embodies a different response to the shifting societal landscape. Chekhov's genius lies in his ability to create deeply flawed, utterly human characters whose struggles reflect the broader changes happening in their world. As the cherry trees fall, readers are left to ponder the cost of progress and the price of holding onto the past. This thought-provoking, emotionally rich narrative will linger in your thoughts long after you've turned the last page.",
				inventoryCount: 70,
				isbn: "9780486275482",
				author: {
					id: "cde3152c-07a3-402a-8324-76ce14975f91",
					authorFirstName: "Anton",
					authorLastName: "Chekhov",
				},
				bookReviews: [
					{
						id: "c5d2f894-f5a4-4862-a7ea-898acb3da2cb",
						shortReview: "Poignant tragicomedy.",
						review:
							"The Cherry Orchard is a poignant and tragicomedy that offers a profound commentary on social change and the passage of time. Anton Chekhov's characters are richly drawn, and his dialogue is sharp and insightful.",
						rating: 4,
						user: {
							id: "85e505f3-d55e-45cb-8d38-f91ae9164d17",
							userName: "jenreads",
						},
					},
					{
						id: "0d78df78-3077-40fc-91a4-3a990705bc06",
						shortReview: "Masterpiece of Russian literature.",
						review:
							"The Cherry Orchard is a masterpiece of Russian literature. Chekhov's exploration of themes such as class, change, and loss is both profound and timeless. A must-read for anyone interested in drama.",
						rating: 5,
						user: {
							id: "de223b1f-28ef-4921-b846-0613747e1cee",
							userName: "iambook",
						},
					},
					{
						id: "3df800d0-d0ed-4e28-969c-cc733a5dc550",
						shortReview: "Moments of brilliance.",
						review:
							"While The Cherry Orchard has moments of brilliance, I found some parts of the play to be slow and meandering. However, Chekhov's keen observation of human nature shines through, making it worth the read.",
						rating: 3,
						user: {
							id: "ca1f6b8e-fa79-4d48-8cbc-dd0ef439327e",
							userName: "lovesbooks",
						},
					},
				],
				bookCategories: [
					{
						id: "88df480a-9003-4f97-a2ea-35aadb837dfc",
						category: {
							categoryName: "Drama",
						},
					},
					{
						id: "7e3ed4f4-3766-4245-9c47-6ca97a667439",
						category: {
							categoryName: "Social Commentary",
						},
					},
					{
						id: "e1520b19-22f8-4f9e-9d8f-f6188a3140ac",
						category: {
							categoryName: "Historical",
						},
					},
				],
			},
			{
				id: "aab4e42b-f568-4b36-9625-fcdbcec3151d",
				bookTitle: "The Age of Innocence",
				pageCount: 365,
				publishDate: "1920-09-01",
				price: 14,
				shortDescription:
					"Wharton's Pulitzer Prize-winning novel captures the hypocrisy and rigidity of New York high society in the late 19th century through the story of Newland Archer's conflicted desires.",
				longDescription:
					"Immerse yourself in \"The Age of Innocence,\" a captivating journey penned by the Pulitzer Prize-winning author, Edith Wharton. Set in the 1870s, the narrative unfolds in the opulent and pompous society of New York City, where social status dictates the course of one's life. It's an intricate tale of love, betrayal, and societal pressures, told through the eyes of Newland Archer, a privileged lawyer betrothed to the innocent and docile May Welland. His life takes an unpredictable turn when he meets and falls in love with May's scandalous cousin, the Countess Ellen Olenska. \n\nThe novel artfully portrays the dichotomy between the restrictive norms of society and personal desires. As Newland is torn between his commitment to May and his passion for Ellen, readers are drawn into the emotional turmoil and the harsh realities of choosing duty over desire. Wharton brilliantly highlights the consequences of challenging societal norms, painting a vivid picture of the sacrifices made in the name of honor and reputation. \n\n\"The Age of Innocence\" is not merely a love story; it's an exploration of the human condition amidst the rigid customs of a bygone era. Wharton's delicate handling of her characters' emotions, her sharp critique of societal expectations, and her vivid descriptions of the Gilded Age make this novel a compelling read. The book will resonate with readers who enjoy thought-provoking literature and those fascinated by the intersection of love, society, and individual freedom.",
				inventoryCount: 80,
				isbn: "9780486298030",
				author: {
					id: "a49c3520-f9a5-4ec3-8870-903a4de34791",
					authorFirstName: "Edith",
					authorLastName: "Wharton",
				},
				bookReviews: [
					{
						id: "bf5731f6-3c85-4c5d-8ad3-d42ff58b5f04",
						shortReview: "Captivating portrayal.",
						review:
							"The Age of Innocence is a captivating novel that provides a vivid portrayal of New York society in the late 19th century. Edith Wharton's prose is elegant and her characters are intricately developed.",
						rating: 4,
						user: {
							id: "3e4992a5-bde8-4df2-ae06-051d0b7a1805",
							userName: "booklover1",
						},
					},
					{
						id: "0d434a33-5e2b-48e8-8190-ef2169898865",
						shortReview: "Masterpiece of literature.",
						review:
							"The Age of Innocence is a masterpiece of American literature. Wharton's exploration of love, duty, and societal expectations is both timeless and thought-provoking.",
						rating: 5,
						user: {
							id: "9c1b9d38-b2df-4a79-8091-8ef8fa821c88",
							userName: "reader123",
						},
					},
				],
				bookCategories: [
					{
						id: "a04bbb68-f125-49fe-9519-9a662b7f9e38",
						category: {
							categoryName: "Social Commentary",
						},
					},
					{
						id: "6f346f3e-3a24-4a80-9f1e-a1c8db52ccf5",
						category: {
							categoryName: "Romance",
						},
					},
					{
						id: "1fe84864-71fc-4f75-9c0a-fa8aa034c2d6",
						category: {
							categoryName: "Cultural",
						},
					},
					{
						id: "fed65f64-8096-49ef-89ee-1b6c4f1d7b37",
						category: {
							categoryName: "Historical",
						},
					},
				],
			},
			{
				id: "55f429ca-96a2-4824-9d4c-cdbe1d0fee8a",
				bookTitle: "The Angel's Game",
				pageCount: 531,
				publishDate: "2008-06-24",
				price: 17.99,
				shortDescription:
					"In this Gothic literary thriller set in the turbulent Barcelona of the 1920s, a struggling writer is offered a tantalizing deal by a mysterious publisher, but soon finds himself trapped in a nightmare of his own making. A gripping exploration of the dark side of creativity and the power of storytelling.",
				longDescription:
					"In \"The Angel's Game,\" written by the master storyteller Carlos Ruiz Zafón, we are taken on a mesmerizing journey through the winding streets of early 20th century Barcelona. The narrative is centered around the life of David Martín, a young, struggling writer who is haunted by a tragic past and an uncertain future. The book beautifully weaves together elements of romance, mystery, and a touch of the supernatural, making it a perfect read for those who enjoy thrilling, thought-provoking literature.\n\nDavid Martín, despite his hardships, finds success writing lurid pulp fiction under a pseudonym. However, his aspiration to create more meaningful literature is continuously thwarted, pushing him into a state of despair. When a mysterious French publisher, Andreas Corelli, offers him a book deal of a lifetime - to write a religion that could shape the world - David is drawn into a labyrinth of intrigue and danger. As he delves deeper into this project, strange happenings occur around him, ultimately leading him to question his sanity and the very nature of reality.\n\n\"The Angel's Game\" is not just a tale of suspense and magic realism, but also an exploration of the human condition and the power of stories. Zafón's vivid prose paints an unforgettable picture of Barcelona's Gothic Quarter, while the intricately woven plot keeps readers on the edge of their seats until the very end. This book is a compelling exploration of love, madness, and the consequences of ambition. It's a haunting page-turner that will captivate readers with its atmospheric setting and intricate storytelling.",
				inventoryCount: 21,
				isbn: "9780142020161",
				author: {
					id: "0a36b922-1b36-4200-a103-282b03a29fb4",
					authorFirstName: "Carlos Ruiz",
					authorLastName: "Zafón",
				},
				bookReviews: [
					{
						id: "18b230a2-a13a-4a6e-bcc1-ab9c54b966c1",
						shortReview: "Compelling and immersive.",
						review:
							"The Angel's Game is a compelling read that immerses readers into a world of mystery and intrigue. Carlos Ruiz Zaf�n's descriptive prose and intricate plot make this book a must-read for fans of suspense.",
						rating: 4,
						user: {
							id: "ca1f6b8e-fa79-4d48-8cbc-dd0ef439327e",
							userName: "lovesbooks",
						},
					},
					{
						id: "5017ce46-8e08-48d2-906d-c708481af95c",
						shortReview: "Captivating thriller.",
						review:
							"The Angel's Game is a captivating thriller with intricate plot twists and well-developed characters. Carlos Ruiz Zaf�n's storytelling keeps readers on the edge of their seats until the very end.",
						rating: 4,
						user: {
							id: "8410ebc7-bddd-4cff-a651-24b74f193192",
							userName: "bibliophile",
						},
					},
					{
						id: "396c6d07-fe26-48be-a1b0-865b3b8922ec",
						shortReview: "Masterpiece of suspense.",
						review:
							"The Angel's Game is a masterpiece of suspense and mystery. Carlos Ruiz Zaf�n's writing is mesmerizing, and the story unfolds with unexpected twists and turns that keep readers guessing until the end.",
						rating: 5,
						user: {
							id: "550de341-e5c4-486f-b087-5ef77ff3a72b",
							userName: "bookworm",
						},
					},
					{
						id: "816dbc26-3373-420d-85ac-ef89fe317e67",
						shortReview: "Intriguing but slow-paced.",
						review:
							"The Angel's Game is an intriguing novel with a complex plot and vivid imagery. While the story keeps readers engaged, some may find the pacing slow at times.",
						rating: 3,
						user: {
							id: "7c7a29c9-a713-440b-9b85-eb5033f02641",
							userName: "avidreader7",
						},
					},
				],
				bookCategories: [
					{
						id: "836ba30f-9d7f-4006-ae79-7b7f3f7bac7c",
						category: {
							categoryName: "Science Fiction",
						},
					},
					{
						id: "4c2dc07d-4f65-4fb5-bae8-896b45c298ba",
						category: {
							categoryName: "Magical Realism",
						},
					},
					{
						id: "8a398967-3f9b-4307-a7ba-d7432a5b075d",
						category: {
							categoryName: "Cultural",
						},
					},
				],
			},
			{
				id: "db373c49-8d18-4e2c-83a4-8d174decd087",
				bookTitle: "The Da Vinci Code",
				pageCount: 454,
				publishDate: "2003-03-18",
				price: 9.99,
				shortDescription:
					"This blockbuster thriller by Dan Brown follows symbologist Robert Langdon as he becomes embroiled in a deadly mystery that unravels the ancient secrets of the Priory of Sion and the truth about the Holy Grail. A pulse-pounding adventure filled with codes, conspiracies, and shocking revelations.",
				longDescription:
					"Dive into the heart of an enthralling enigma with Dan Brown's \"The Da Vinci Code\". The book transports you on a breathtaking journey where renowned symbologist Robert Langdon and cryptologist Sophie Neveu are thrust into a labyrinth of codes, secrets, and an age-old conspiracy. The adventure commences when Langdon receives an urgent late-night phone call while in Paris: the elderly curator of the Louvre has been brutally murdered inside the museum, a cryptic cipher found near his body. Thus, begins a thrilling race against time that spirals Langdon and Neveu from France to England, chasing clues embedded in the works of Leonardo Da Vinci, each hint bringing them closer to a shocking historical truth.\n\nIn the middle layer of this multi-tiered narrative, Brown masterfully entwines the secret society of Priory of Sion, the divinity of the sacred feminine, and the hidden truths within Leonardo Da Vinci's masterpieces, forging a riveting tale of suspense. The book challenges the reader, questioning established beliefs about art, religion, and history. As Langdon and Neveu decode the riddles, they come face to face with a clandestine battle between the Opus Dei and the Priory of Sion. Who can be trusted in this world where art and science fuse, history is mutable, and codes conceal earth-shattering secrets?\n\n\"The Da Vinci Code\" is not merely a novel; it's a thought-provoking exploration of the blurred line between faith and sacrilege, truth and conspiracy, overlaid with a tapestry of art, history, and symbolism. As the reader, you're not just an observer but a participant, piecing together the clues alongside Langdon and Neveu. Every page reveals a new twist, a new mystery unraveled, a new question raised. By the end of this exhilarating expedition, you'll not only have traversed continents and centuries, but also the intricate corridors of the human psyche, faith, and the eternal feminine. Dan Brown's \"The Da Vinci Code\" is a book that will leave you questioning, contemplating, and inevitably, craving for more.",
				inventoryCount: 68,
				isbn: "9780307277671",
				author: {
					id: "40134642-8951-49b0-8a4c-6772c4b421dd",
					authorFirstName: "Dan",
					authorLastName: "Brown",
				},
				bookReviews: [
					{
						id: "ad42c17c-5767-4d18-8eaa-e749c0e0b78b",
						shortReview: "Overrated and contrived.",
						review:
							"The Da Vinci Code is an overrated novel that fails to live up to its hype. While the premise is intriguing, the execution feels contrived, and the writing lacks depth.",
						rating: 2,
						user: {
							id: "3e4992a5-bde8-4df2-ae06-051d0b7a1805",
							userName: "booklover1",
						},
					},
					{
						id: "e9435c1f-b292-49e8-b4c1-2575b09a9f19",
						shortReview: "Entertaining but not groundbreaking.",
						review:
							"The Da Vinci Code is an entertaining thriller that keeps readers engaged with its fast-paced plot and historical mysteries. While not groundbreaking, it's a decent read for fans of the genre.",
						rating: 3,
						user: {
							id: "9c1b9d38-b2df-4a79-8091-8ef8fa821c88",
							userName: "reader123",
						},
					},
					{
						id: "31038a1a-393e-4581-8a77-c666200c79a1",
						shortReview: "Gripping page-turner.",
						review:
							"The Da Vinci Code is a gripping page-turner that seamlessly blends history, religion, and conspiracy. Dan Brown's storytelling keeps readers hooked from start to finish, making it a thrilling read.",
						rating: 4,
						user: {
							id: "7bb8095f-c1a8-4307-b74f-2affe40bae4b",
							userName: "litlover88",
						},
					},
					{
						id: "bbc3f0db-6526-4756-a366-6d8d304c6a1a",
						shortReview: "Riveting adventure.",
						review:
							"The Da Vinci Code is a riveting adventure that combines mystery, history, and suspense seamlessly. Dan Brown's storytelling prowess shines in this thrilling tale that keeps readers guessing until the very end.",
						rating: 5,
						user: {
							id: "85e505f3-d55e-45cb-8d38-f91ae9164d17",
							userName: "jenreads",
						},
					},
				],
				bookCategories: [
					{
						id: "2b4cc71e-408f-4861-9f76-753318534fd7",
						category: {
							categoryName: "Mystery",
						},
					},
					{
						id: "f6ff6b3a-b0a0-43f9-a2d3-145283920e05",
						category: {
							categoryName: "Historical",
						},
					},
				],
			},
			{
				id: "cf407f4a-2a5d-4caa-ac4f-a2e88d626295",
				bookTitle: "In Search of Lost Time",
				pageCount: 4215,
				publishDate: "1913-11-01",
				price: 100,
				shortDescription:
					"Proust's monumental work, also known as 'Remembrance of Things Past', delves deep into themes of memory, time, and art, narrated in exquisite detail and emotional depth.",
				longDescription:
					"\"In Search of Lost Time\", a towering masterpiece by Marcel Proust, is a sweeping exploration of life, love, memory, and time. The narrative unfolds through the eyes of an unnamed protagonist, a man who embarks on a profound journey of self-discovery as he reflects on his past, contemplates his present, and dreams of his future. The narrative brims with vivid characters, each intricately woven into the tapestry of the protagonist's life, each shaping his experiences in their unique ways. This is a story that delves beyond the surface layers of life, reaching into the core of human existence to explore the themes of time, memory, and the subjective nature of reality.\n\nThe narrative is an intricate labyrinth of memories, dreams, and reflections, each layer contributing to the richly textured mosaic of the protagonist's life. Proust's exquisite narrative style paints a vivid picture of his characters and settings, drawing the reader into the protagonist's world with an intensity that is both compelling and captivating. From the allure of high society to the simplicity of childhood memories, from the ecstasy of love to the anguish of loss, every aspect of life is dissected with a keen eye and a deep understanding of the human condition.\n\n\"In Search of Lost Time\" is not merely a book; it is an exploration of the very essence of life. It is a journey through time and memory, a dive into the depths of human consciousness, and a quest for understanding that transcends the boundaries of conventional narrative. As you traverse the labyrinthine pathways of the protagonist's mind, you will find yourself questioning your own perceptions of time, memory, and reality. This is a book that demands your engagement, a book that will leave you enriched, enlightened, and forever changed.",
				inventoryCount: 50,
				isbn: "9780679443654",
				author: {
					id: "26516908-c1f5-421e-afae-3b1fade413ed",
					authorFirstName: "Marcel",
					authorLastName: "Proust",
				},
				bookReviews: [
					{
						id: "cd92998f-961b-46cb-8d9d-2daab811e74d",
						shortReview: "Monumental work.",
						review:
							"In Search of Lost Time is a monumental work that delves into the intricacies of memory, time, and identity. Marcel Proust's prose is dense and philosophical, requiring patience and reflection.",
						rating: 3,
						user: {
							id: "8410ebc7-bddd-4cff-a651-24b74f193192",
							userName: "bibliophile",
						},
					},
					{
						id: "507b01b8-fd89-4fe5-ab44-c4b59aa75f63",
						shortReview: "Challenging read.",
						review:
							"In Search of Lost Time is a challenging read due to its length and dense prose. While Proust's exploration of memory is profound, the narrative can be slow-paced and meandering.",
						rating: 2,
						user: {
							id: "550de341-e5c4-486f-b087-5ef77ff3a72b",
							userName: "bookworm",
						},
					},
				],
				bookCategories: [
					{
						id: "50f7950d-fd85-4289-8ac5-bba43090d4cf",
						category: {
							categoryName: "Postmodern",
						},
					},
					{
						id: "d3c159d6-d36a-45a8-b973-3f30b5d8fa75",
						category: {
							categoryName: "Social Commentary",
						},
					},
					{
						id: "40ad17bd-4a79-47a6-ac6d-57b6557d89ab",
						category: {
							categoryName: "Philosophical",
						},
					},
					{
						id: "cb683cd9-59b4-412d-81be-d049a90ab4cb",
						category: {
							categoryName: "Cultural",
						},
					},
				],
			},
			{
				id: "e8cecd24-15d5-4395-bf73-2dbdd8c79d6e",
				bookTitle: "The Waste Land",
				pageCount: 64,
				publishDate: "1922-10-15",
				price: 12,
				shortDescription:
					"Eliot's landmark poem, 'The Waste Land', remains one of the 20th century's most influential works, offering a powerful critique of post-World War I disillusionment.",
				longDescription:
					'Immerse yourself in "The Waste Land," a profound and enigmatic masterpiece by T.S. Eliot, one of the most influential poets of the twentieth century. This monumental work offers a journey through the bleak landscape of post-war disillusionment. Eliot\'s kaleidoscopic verses, filled with literary and cultural references, paint a hauntingly desolate world, shattered by the destructive forces of modernity and yearning for spiritual redemption.\n\nThe book is divided into five sections, each a self-contained poem yet interconnected in theme and imagery. The opening section, "The Burial of The Dead," presents a desolate world marked by death and decay. This is followed by "A Game of Chess," depicting the futile attempts at connection in a world devoid of genuine intimacy. "The Fire Sermon" delivers a powerful critique of physical lust and emotional barrenness. "Death by Water" portrays the image of a drowned sailor, symbolizing the destructive power of time and nature. The final section, "What the Thunder Said," culminates in a spiritual quest for redemption in a broken world.\n\n"The Waste Land" is a complex tapestry of voices, languages, and literary references, demanding an active engagement from the reader. Eliot masterfully blends elements from a range of cultural and historical periods, from ancient mythologies to contemporary popular culture. The reader is invited to embark on a challenging yet rewarding exploration of the human condition in the modern world. This book is a must-read for anyone who appreciates poetry\'s power to mirror and critique society and the human experience.',
				inventoryCount: 95,
				isbn: "9780141185154",
				author: {
					id: "0e93f6c6-a239-4260-a2b6-6e044beacc7e",
					authorFirstName: "T.S.",
					authorLastName: "Eliot",
				},
				bookReviews: [
					{
						id: "7d3ca9aa-3ec9-401f-b8dd-bf182201556d",
						shortReview: "Groundbreaking poem.",
						review:
							"The Waste Land is a groundbreaking poem that captures the disillusionment and fragmentation of the post-World War I era. T.S. Eliot's use of imagery and symbolism is masterful, making this poem a seminal work of modernist literature.",
						rating: 5,
						user: {
							id: "7c7a29c9-a713-440b-9b85-eb5033f02641",
							userName: "avidreader7",
						},
					},
					{
						id: "2d9d9844-c004-4a96-930f-962d1e7d145b",
						shortReview: "Thought-provoking poem.",
						review:
							"The Waste Land is a complex and thought-provoking poem that requires multiple readings to fully appreciate. Eliot's use of literary allusions and fragmented structure adds layers of meaning to the text.",
						rating: 4,
						user: {
							id: "671b88b5-2cb1-43ff-9b2d-c19c6e319ef7",
							userName: "bookishgal",
						},
					},
				],
				bookCategories: [
					{
						id: "59ec562d-e222-49e7-ab28-26a24e988875",
						category: {
							categoryName: "Poetry",
						},
					},
					{
						id: "300f8366-7313-4f5d-b71e-43fa0a65f0a0",
						category: {
							categoryName: "Philosophical",
						},
					},
					{
						id: "69063a2b-5ad1-4bbd-9ddb-049502b77166",
						category: {
							categoryName: "Modernist",
						},
					},
				],
			},
			{
				id: "4011081b-fe69-48fc-b938-1b4afeb61d0a",
				bookTitle: "The Stranger",
				pageCount: 123,
				publishDate: "1942-06-19",
				price: 13.95,
				shortDescription:
					"Camus's existential masterpiece tells the story of Meursault, an indifferent French Algerian who commits a random act of violence, reflecting the absurdity of life.",
				longDescription:
					"\"The Stranger,\" a gripping novel penned by the famed French author Albert Camus, is a riveting exploration of existential philosophy wrapped in the garb of an engrossing narrative. The protagonist, Meursault, is a French Algerian whose apathetic reactions to life get an unusual spotlight in this thought-provoking tale. The story begins with the death of Meursault’s mother, an event to which he responds with surprising indifference, setting the tone for his character's peculiarly impassive approach to life's significant moments.\n\nAs the narrative unfolds, Meursault's life takes an unexpected turn when he becomes embroiled in a violent conflict, leading to the murder of an Arab man. The act itself, borne more out of disorientation than intent, results in Meursault's arrest. The subsequent trial, however, is less about the crime and more about Meursault's inability to conform to societal norms, his emotional detachment, and his refusal to exhibit expected grief over his mother's demise. The trial's focus shifts from the act of murder to scrutinizing Meursault's character, painting a vivid picture of societal expectations and the consequences of defying them.\n\n\"The Stranger\" is not just a tale of a man and a murder, but a deep dive into the human psyche, exploring themes of existentialism, freedom, and the meaning of life. It challenges conventional wisdom about morality, emotion, and societal expectations, making readers question the essence of human existence itself. This book is a must-read for those who appreciate philosophical discussions and complex psychological character portraits. It's a journey into the world of a man who chooses to live life on his own terms, indifferent to societal pressures, and pays the price for his radical freedom.",
				inventoryCount: 85,
				isbn: "9780679720201",
				author: {
					id: "d54293d0-48ac-449b-9e99-1b0e198fb629",
					authorFirstName: "Albert",
					authorLastName: "Camus",
				},
				bookReviews: [
					{
						id: "ff0e4c4d-fdef-4372-9edd-2b34223a38ac",
						shortReview: "Compelling existential novel.",
						review:
							"The Stranger is a compelling existential novel that challenges conventional notions of morality and identity. Albert Camus's sparse prose and detached narration create an atmosphere of absurdity and alienation.",
						rating: 4,
						user: {
							id: "7bb8095f-c1a8-4307-b74f-2affe40bae4b",
							userName: "litlover88",
						},
					},
					{
						id: "2d462dbf-cd57-416d-ad99-0cba6d5bc5a8",
						shortReview: "Interesting exploration.",
						review:
							"While The Stranger offers an interesting exploration of existential themes, I found the protagonist's detachment to be off-putting at times. However, Camus's writing style is undeniably impactful.",
						rating: 3,
						user: {
							id: "85e505f3-d55e-45cb-8d38-f91ae9164d17",
							userName: "jenreads",
						},
					},
				],
				bookCategories: [
					{
						id: "14a87b4f-bf2d-4192-ac13-1db44da40db9",
						category: {
							categoryName: "Existential Fiction",
						},
					},
					{
						id: "06e3fbc8-41a1-49be-bfb8-e1fbf04e96b6",
						category: {
							categoryName: "Social Commentary",
						},
					},
					{
						id: "1d613be6-892b-4d6f-8e5d-b825f03d5c1c",
						category: {
							categoryName: "Cultural",
						},
					},
				],
			},
			{
				id: "588a4ec6-e7bd-451d-bfb6-44460683bb10",
				bookTitle: "Waiting for Godot",
				pageCount: 128,
				publishDate: "1953-01-05",
				price: 14,
				shortDescription:
					"Beckett's landmark play presents two characters, Vladimir and Estragon, who wait for the arrival of someone named Godot who never arrives, and while waiting they engage in a variety of discussions and encounter three other characters.",
				longDescription:
					'"Waiting for Godot," a seminal work by Samuel Beckett, is an enigmatic yet profoundly influential play that plunges its readers into an exploration of existential themes. The narrative unfurls through the interactions of two main characters, Estragon and Vladimir, who are found habitually waiting on a barren, lonely road for the arrival of an entity named Godot. Their endless waiting, punctuated by their comical and philosophical exchanges, mirrors the human condition, weaving together a tale of despair, hope, and the relentless passage of time.\n\nIn this timeless piece of absurdist theatre, the wait for Godot becomes a metaphor for the often futile human quest for meaning and certainty. As Estragon and Vladimir persist in their wait, they engage in a series of repetitive, mundane activities, their dialogue often brimming with existential angst, philosophical musings, and a deep-seated sense of uncertainty. The introduction of secondary characters, Pozzo and Lucky, further intensifies the absurdity and existential dread that pervades the play. \n\nHowever, "Waiting for Godot" is not all gloom and despair. Beckett masterfully infuses humor into the dialogues and situations, creating a strange amalgamation of comedy and tragedy. The interactions between the characters are often marked by slapstick humor, wordplay, and irony, offering a sense of comic relief in an otherwise bleak setting. The play\'s unconventional narrative structure, minimalistic setting, and the profound themes it grapples with make it a compelling read for those who seek to explore the boundaries of human existence and the absurdity of life.',
				inventoryCount: 60,
				isbn: "9780571244591",
				author: {
					id: "585560b5-8ca1-437f-923d-d29a7a6a72d2",
					authorFirstName: "Samuel",
					authorLastName: "Beckett",
				},
				bookReviews: [
					{
						id: "37a7cafa-08e4-4db3-877c-7c42cc0e5696",
						shortReview: "Thought-provoking play.",
						review:
							"Waiting for Godot is a thought-provoking play that explores themes of existentialism and the human condition. Samuel Beckett's minimalist style and absurdist dialogue create a unique theatrical experience.",
						rating: 4,
						user: {
							id: "3e4992a5-bde8-4df2-ae06-051d0b7a1805",
							userName: "booklover1",
						},
					},
					{
						id: "b130ff7e-a5de-4e49-bdf4-c8857e743c3c",
						shortReview: "Masterpiece of theater.",
						review:
							"Waiting for Godot is a masterpiece of modern theater. Beckett's exploration of the futility of human existence is both profound and darkly humorous. A must-read for anyone interested in existentialist literature.",
						rating: 5,
						user: {
							id: "9c1b9d38-b2df-4a79-8091-8ef8fa821c88",
							userName: "reader123",
						},
					},
				],
				bookCategories: [
					{
						id: "4a8f00d0-3da9-430a-b79d-35a8092aa5cf",
						category: {
							categoryName: "Drama",
						},
					},
					{
						id: "fef2a092-c4e8-4ece-8cdc-904006dd8f8d",
						category: {
							categoryName: "Postmodern",
						},
					},
					{
						id: "9e09f271-46b0-4bcd-a63c-71ac6ce39bc3",
						category: {
							categoryName: "Social Commentary",
						},
					},
				],
			},
			{
				id: "755dcd0e-9ed8-4879-8f69-9474e246d7ed",
				bookTitle: "On the Road",
				pageCount: 310,
				publishDate: "1957-09-05",
				price: 16,
				shortDescription:
					"Kerouac's seminal novel defined the Beat Generation. It is a largely autobiographical work that is based on the spontaneous road trips of Kerouac and his friends across mid-century America.",
				longDescription:
					"Immerse yourself in the throbbing heart of post-war America in Jack Kerouac's legendary novel, \"On the Road.\" This raw, intensely evocative narrative follows the frenzied cross-country adventures of Sal Paradise, an aspiring writer, and Dean Moriarty, a reckless and charismatic ex-con. As they crisscross the country, they encounter a kaleidoscope of unforgettable characters, each of whom impacts their journey in unforgettable ways, painting a vivid picture of a nation in transition.\n\nIn the throes of their exploration, Sal and Dean are driven by a restless desire to experience life to the fullest extent, seeking everything from jazz and drugs to love and spirituality. Their journey is not just physical, but also an exploration of self and the American dream. Kerouac's free-flowing prose mirrors the improvisational nature of their travels, a technique that came to be known as spontaneous prose, which provides an immersive reading experience that's as unpredictable as the journey itself.\n\n\"On the Road\" is a breathtaking ode to freedom, youth, and the enduring spirit of discovery. It captures a pivotal moment in American history, reflecting the cultural shift of the Beat Generation. This novel is not just a story, but a timeless symbol of rebellion and the search for truth. Step into Sal and Dean's shoes, rev up the engine, and prepare yourself for an unforgettable journey across the vibrant landscape of 1950s America. It's a ride you won't want to miss.",
				inventoryCount: 70,
				isbn: "9780140283297",
				author: {
					id: "040669fa-5a20-4c57-bd98-06e9f7a358db",
					authorFirstName: "Jack",
					authorLastName: "Kerouac",
				},
				bookReviews: [
					{
						id: "8490425c-c907-423e-9a7e-ca9c728e3512",
						shortReview: "Captures the Beat spirit.",
						review:
							"On the Road is a classic novel that captures the spirit of the Beat Generation. Jack Kerouac's spontaneous prose and vivid descriptions of the American landscape make this a compelling read, although the lack of a cohesive plot may deter some readers.",
						rating: 3,
						user: {
							id: "8410ebc7-bddd-4cff-a651-24b74f193192",
							userName: "bibliophile",
						},
					},
					{
						id: "4e82ef6d-a02f-46a3-8fe6-4773621f884f",
						shortReview: "Overrated wanderlust.",
						review:
							"On the Road is an overrated novel that glorifies aimless wanderlust. While Kerouac's prose captures the spontaneity of the Beat Generation, the lack of character development and coherent plot make it a frustrating read.",
						rating: 2,
						user: {
							id: "550de341-e5c4-486f-b087-5ef77ff3a72b",
							userName: "bookworm",
						},
					},
				],
				bookCategories: [
					{
						id: "975de483-f766-4983-9e81-1174bfd672fb",
						category: {
							categoryName: "Beat Generation",
						},
					},
					{
						id: "3599fcf5-1694-4df7-8aad-a3f49445519f",
						category: {
							categoryName: "Road Novel",
						},
					},
					{
						id: "5ff15b1e-4a5b-48ab-9b9e-bb0a10b96c53",
						category: {
							categoryName: "Travel Literature",
						},
					},
				],
			},
			{
				id: "105a4621-d03d-46d9-a297-9f7e08f68c96",
				bookTitle: "Naked Lunch",
				pageCount: 255,
				publishDate: "1959-01-01",
				price: 15.95,
				shortDescription:
					"Burroughs' controversial novel is a surreal, nonlinear narrative that challenges traditional narrative structures while critiquing the drug culture of the 1950s.",
				longDescription:
					'"Buckle up for a journey into the surreal world of William S. Burroughs\' "Naked Lunch," a landmark of the Beat Generation literature. A narrative that defies the conventional, this book takes readers on a hallucinatory rollercoaster ride through the mind of its troubled protagonist, William Lee, an alter ego of Burroughs himself. The book lays bare the raw underbelly of addiction, in all its gruesome yet hypnotically fascinating details, plunging readers into a dizzying descent into the depths of human perversity, obsession and despair. \n\n"Naked Lunch" is a whirlpool of shifting vignettes, non-linear narrative, and fragmented scenes, featuring an array of bizarre characters from Lee\'s drug-induced universe. Dr. Benway, the sadistic, drug-pushing doctor; AJ, the insect-humanoid typewriter; and a mélange of junkies, hustlers, and psychopaths - all come alive in this phantasmagorical landscape. The book, while focusing on the protagonist\'s drug addiction, also satirically takes on various societal institutions such as law enforcement, medical establishment, and the concept of control, thereby holding a grotesque mirror to the society it critiques.\n\nProvocative, disturbing, and yet strangely compelling, "Naked Lunch" is not for the faint-hearted. It\'s a literary experiment that explores the darkest corners of human existence, a work of art that creates a kaleidoscope of grotesque imagery with a potent mix of satire, science fiction, and an in-your-face narrative. Burroughs challenges, stirs, and provokes readers, taking them on a terrifying, visceral journey through the mind of an addict. This book will leave you questioning the nature of reality, addiction, and the thin veneer of civilization we wear. Dive in if you dare to experience a literary trip like no other.',
				inventoryCount: 55,
				isbn: "9780802122070",
				author: {
					id: "7458ca3a-b8d6-4baa-a9aa-83bda28b904c",
					authorFirstName: "William S.",
					authorLastName: "Burroughs",
				},
				bookReviews: [
					{
						id: "309f4a83-9f81-41b2-a0d0-31098aa7c0ab",
						shortReview: "Challenging but rewarding.",
						review:
							"Naked Lunch is a challenging yet rewarding novel that pushes the boundaries of traditional narrative structure. William S. Burroughs's surrealistic prose and vivid imagery create a disturbing but fascinating exploration of addiction and alienation.",
						rating: 4,
						user: {
							id: "7c7a29c9-a713-440b-9b85-eb5033f02641",
							userName: "avidreader7",
						},
					},
					{
						id: "51d98bca-fda7-4f3a-ba26-52d561214886",
						shortReview: "Groundbreaking literature.",
						review:
							"Naked Lunch is a groundbreaking work of literature that defies categorization. Burroughs's stream-of-consciousness style and surrealistic imagery create a hallucinatory experience that challenges the reader's perceptions.",
						rating: 5,
						user: {
							id: "671b88b5-2cb1-43ff-9b2d-c19c6e319ef7",
							userName: "bookishgal",
						},
					},
				],
				bookCategories: [
					{
						id: "7d3c0b02-70ee-4b86-bdc2-17f0520d21e4",
						category: {
							categoryName: "Modernist",
						},
					},
					{
						id: "b606b139-b879-4f89-a5a9-639abc4bf01c",
						category: {
							categoryName: "Social Commentary",
						},
					},
					{
						id: "5486faf2-a4d0-433b-a3ac-d6c24b08a8fb",
						category: {
							categoryName: "Postmodern",
						},
					},
				],
			},
			{
				id: "308c5307-f281-4d97-914f-d73529f1c436",
				bookTitle: "Atonement",
				pageCount: 371,
				publishDate: "2001-09-04",
				price: 18.95,
				shortDescription:
					"McEwan's novel is a profound, deeply moving story about love, guilt, and forgiveness, set against the backdrop of World War II. It explores the devastating impact of a young girl's false accusation on herself and on the lives of two lovers.",
				longDescription:
					'In "Atonement," critically acclaimed novelist Ian McEwan delivers a spellbinding narrative brimming with love, guilt, and the dire consequences of misunderstood intentions. The narrative begins on a hot summer\'s day in 1935, at an English country manor. Here, we meet 13-year-old Briony Tallis, an aspiring writer with a vivid imagination. This imaginative quality, however, leads to a catastrophic misunderstanding that completely alters the lives of her sister, Cecilia, and Robbie Turner, the son of the manor\'s housekeeper and a childhood friend. Briony\'s innocent lie spirals out of control and results in Robbie being accused of a crime he didn\'t commit. \n\nThe second part of the novel takes us to the battlefields of World War II, following Robbie Turner, who has been freed from prison on the condition that he joins the army. His only solace amidst the chaos of Dunkirk is the hope of one day returning to Cecilia, who is waiting for him in London, having realized the truth of Briony\'s deception. Meanwhile, Briony, now 18 and training to be a nurse, begins to comprehend the gravity of the damage her youthful misinterpretation has caused. \n\n"Atonement" is a sweeping tale that examines the nuances of truth, the power of art, and the devastating impact of false accusations. With a shocking twist that will leave readers questioning the reliability of the narrator, McEwan explores the idea of atonement and whether true forgiveness can ever be achieved. His sophisticated prose and immense storytelling prowess make "Atonement" a must-read novel, a poignant exploration of love, war, and the weight of remorse.',
				inventoryCount: 65,
				isbn: "9780385721790",
				author: {
					id: "30063476-55f5-4ff8-8203-268905d540cb",
					authorFirstName: "Ian",
					authorLastName: "McEwan",
				},
				bookReviews: [
					{
						id: "d43e4794-1d99-45c2-bbb0-3dc6bd4444ee",
						shortReview: "Beautifully written.",
						review:
							"Atonement is a beautifully written novel that explores the complexities of guilt, forgiveness, and redemption. Ian McEwan's prose is elegant and evocative, drawing the reader into the lives of the characters and their interconnected stories.",
						rating: 5,
						user: {
							id: "3e4992a5-bde8-4df2-ae06-051d0b7a1805",
							userName: "booklover1",
						},
					},
					{
						id: "24bc4c6f-40ba-47e5-8d1d-5238b2f58b03",
						shortReview: "Captivating story.",
						review:
							"Atonement is a captivating novel that explores the consequences of a single lie. McEwan's masterful storytelling and rich character development make this a compelling read from start to finish.",
						rating: 4,
						user: {
							id: "9c1b9d38-b2df-4a79-8091-8ef8fa821c88",
							userName: "reader123",
						},
					},
				],
				bookCategories: [
					{
						id: "0db749ac-c9f9-45f0-8d50-a94c12ae10a9",
						category: {
							categoryName: "Drama",
						},
					},
					{
						id: "df6598b7-27ea-4a93-a791-3e3bb635b695",
						category: {
							categoryName: "Romance",
						},
					},
					{
						id: "93692b2b-7286-4fa8-a52a-ad1d89c10a14",
						category: {
							categoryName: "Social Commentary",
						},
					},
				],
			},
			{
				id: "ec9bf649-1ad2-41eb-b264-bd10c80687ee",
				bookTitle: "The English Patient",
				pageCount: 320,
				publishDate: "1992-11-05",
				price: 14.95,
				shortDescription:
					"Ondaatje's Booker Prize-winning novel intertwines the lives of four diverse characters in the aftermath of World War II, centering on the mysterious identity of a badly burned man, the titular English patient.",
				longDescription:
					"Immerse yourself in the hauntingly beautiful tale of \"The English Patient,\" an exquisite novel by Michael Ondaatje. Set against the stark yet stunning backdrop of World War II, this narrative interweaves the lives of four diverse characters in a war-ravaged Italian villa. At the heart of the story is the English Patient, a mysterious, nameless man, burnt beyond recognition, whose past is as enigmatic as his identity. His nurse, Hana, a woman scarred by the horrors of war, and two other intruders, David Caravaggio and Kirpal Singh, complete the quartet. As the story unravels, each character's past is intricately revealed, offering glimpses into their profound experiences, relationships, and losses.\n\nThe novel delves deep into the human psyche, exploring themes of love, identity, and the devastating effects of war. Ondaatje's lyrical prose takes readers on a journey through the English Patient's past, revealing a passionate love affair that crosses boundaries of nationality and convention. As Hana tends to her patient, she discovers solace in her solitary existence, while Caravaggio, a thief turned Allied spy, seeks revenge for his maimed hands. Kirpal Singh, a sapper with the British army, confronts his own demons, struggling with loyalty, courage, and love.\n\n\"The English Patient\" is more than just a novel; it's an exploration of the human condition, a testament to the resilience of the human spirit amid the chaos of war. It is a poignant meditation on love and loss, memory and identity, and the indelible scars left by war. Ondaatje's masterful storytelling and richly detailed narrative will transport readers to a time and place marked by conflict, yet brimming with the potential for redemption and healing. This book is a must-read for those who appreciate eloquent prose, complex characters, and a story that resonates long after the last page is turned.",
				inventoryCount: 80,
				isbn: "9780679745204",
				author: {
					id: "3cc83653-8655-4395-b14e-6126e7446fc2",
					authorFirstName: "Michael",
					authorLastName: "Ondaatje",
				},
				bookReviews: [
					{
						id: "b365d0e1-b7ab-40fc-8fe9-4f03b1f4c81a",
						shortReview: "Well-written but confusing.",
						review:
							"The English Patient is a well-written novel with beautiful prose and vivid descriptions of wartime Europe. However, the nonlinear narrative structure may confuse some readers and detract from the overall enjoyment of the story.",
						rating: 3,
						user: {
							id: "7c7a29c9-a713-440b-9b85-eb5033f02641",
							userName: "avidreader7",
						},
					},
				],
				bookCategories: [
					{
						id: "f906f2ed-00d2-4eec-9c96-0af723859814",
						category: {
							categoryName: "Drama",
						},
					},
					{
						id: "46c7eeb7-aa23-4176-bbb4-fe9e70e04b7c",
						category: {
							categoryName: "Romance",
						},
					},
					{
						id: "530b34f6-ebf7-45d1-8ba3-6ec9227867da",
						category: {
							categoryName: "Social Commentary",
						},
					},
				],
			},
			{
				id: "a2663654-96bf-44f4-8285-01f8d61a2193",
				bookTitle: "The Sense of an Ending",
				pageCount: 163,
				publishDate: "2011-08-04",
				price: 14.95,
				shortDescription:
					"Julian Barnes's Man Booker Prize-winning novel is a story of memory and remorse, exploring the unreliability of memory and how it can lead to self-deception.",
				longDescription:
					"\"The Sense of an Ending,\" written by Julian Barnes, is a contemplative work of fiction that explores the depths of human memory and perception. Unfolding through the eyes of Tony Webster, a retired and seemingly content man, the narrative takes us on a journey through his ordinary life, with extraordinary revelations. Tony's life is disrupted when he unexpectedly inherits a diary from the mother of his former girlfriend, Veronica, pulling him back into a past filled with regret, unresolved relationships, and unanswered questions.\n\nThe first part of the book traces Tony's youth in 1960s London, his friendships and his first love, Veronica. As we delve into Tony's past, we learn of his friendship with the intellectually superior and enigmatic Adrian Finn, and the tragic event that forever marks their lives. Tony's recollections of his past are filled with a sense of nostalgia, but also hint at his unreliability as a narrator. As he navigates through his memories, the readers are left questioning the accuracy of Tony's remembrance, thus, highlighting Barnes's exploration of the subjective nature of memory.\n\nIn the second part of the novel, Tony's past comes rushing back when he is propelled into a quest for truth after inheriting the diary. Here, Barnes masterfully depicts the stark difference between how we remember our past and the reality of what actually transpired. As Tony uncovers the unsettling truth about his past, he is forced to confront his own shortcomings and realize the devastating impact of his actions on others. \"The Sense of an Ending\" is a thought-provoking exploration of memory, time, and the narratives we construct about our lives, challenging the readers to question their own perceptions of their past.",
				inventoryCount: 80,
				isbn: "9780307957122",
				author: {
					id: "9d345051-b205-4cdd-9711-a9150a3f8fe4",
					authorFirstName: "Julian",
					authorLastName: "Barnes",
				},
				bookReviews: [
					{
						id: "4cb12205-c449-43a5-9214-454b44ccd8f2",
						shortReview: "Thought-provoking.",
						review:
							"The Sense of an Ending is a thought-provoking and introspective novel that explores memory, identity, and the passage of time. Julian Barnes's writing is sharp and insightful, leaving a lasting impression on the reader.",
						rating: 5,
						user: {
							id: "671b88b5-2cb1-43ff-9b2d-c19c6e319ef7",
							userName: "bookishgal",
						},
					},
				],
				bookCategories: [
					{
						id: "5f0851bf-a51e-4bd9-bb19-d845216e9c51",
						category: {
							categoryName: "Drama",
						},
					},
					{
						id: "6cfa3ee3-c0c0-4770-aee4-01463ead4aad",
						category: {
							categoryName: "Postmodern",
						},
					},
					{
						id: "bd0ecaae-787b-4983-9c82-560f7bd78f09",
						category: {
							categoryName: "Philosophical",
						},
					},
				],
			},
			{
				id: "144c7663-377a-42b2-a074-578a1e32cb8d",
				bookTitle: "The Unbearable Lightness of Being",
				pageCount: 314,
				publishDate: "1984-01-01",
				price: 18,
				shortDescription:
					"Milan Kundera�s novel of love and politics in Communist-era Prague explores the lives and loves of a small group of characters, interweaving their personal stories with philosophical musings on existence.",
				longDescription:
					"\"The Unbearable Lightness of Being\" is an evocative exploration of human existence, love, passion, and the ephemeral nature of life, set against the backdrop of Prague Spring of 1968. Milan Kundera, in his timeless philosophical novel, introduces us to four main characters - the womanizer Tomas, his wife Tereza, his mistress Sabina, and her lover Franz. The characters, each embodying unique perspectives about love, freedom, and loyalty, find themselves entangled in a complex web of emotional and philosophical dilemmas, resulting in a captivating narrative that transcends the boundaries of common literary themes.\n\nThe book delves into the paradox of existence, where every decision made by the characters is weighed against the Nietzschean concept of 'eternal return.' Tomas, a successful surgeon, is continually torn between his undying love for Tereza and his uncontrollable desire for other women, especially his free-spirited mistress Sabina. On the other hand, Tereza, the embodiment of innocence and vulnerability, grapples with Tomas's infidelities yet remains inexplicably drawn towards him. Their lives are set on a tumultuous journey, embodying the 'lightness' and 'heaviness' of being.\n\n\"The Unbearable Lightness of Being\" is more than just a compelling tale of love and betrayal. It's a profound commentary on political ideologies, the dichotomy of body and soul, and the existential angst that defines human life. Readers are invited to embark on a journey that is not just about navigating through the characters' lives but also delving deep into introspection about existence, meaning, and choice. Kundera's novel, rich in metaphor and philosophical insights, offers an intensely thought-provoking, and soul-stirring reading experience.",
				inventoryCount: 70,
				isbn: "9780060932138",
				author: {
					id: "29f6e97e-b42a-4e6d-9b0e-2dc8e601eb51",
					authorFirstName: "Milan",
					authorLastName: "Kundera",
				},
				bookReviews: [
					{
						id: "41bec4ff-69e9-4735-8971-405eb3f3b9ed",
						shortReview: "Poetic and thought-provoking.",
						review:
							"The Unbearable Lightness of Being is a philosophical novel that delves into the complexities of love, identity, and existence. Milan Kundera's writing style is both poetic and thought-provoking, making this a compelling read for those who enjoy introspective literature.",
						rating: 4,
						user: {
							id: "3e4992a5-bde8-4df2-ae06-051d0b7a1805",
							userName: "booklover1",
						},
					},
				],
				bookCategories: [
					{
						id: "acd1631f-a132-497b-9f2e-0d38786af2ad",
						category: {
							categoryName: "Existential Fiction",
						},
					},
					{
						id: "0e26e373-1133-442b-a6fd-f966e23d36d8",
						category: {
							categoryName: "Philosophical Fiction",
						},
					},
					{
						id: "ad2d6734-4649-40cf-8ce2-6f25ab254a04",
						category: {
							categoryName: "Philosophical",
						},
					},
				],
			},
			{
				id: "179fcde5-031d-401c-99e1-75d7858c1668",
				bookTitle: "Infinite Jest",
				pageCount: 1079,
				publishDate: "1996-02-01",
				price: 20,
				shortDescription:
					"David Foster Wallace's magnum opus, a vast, encyclopedic novel set in a near-future America, explores themes of addiction, entertainment, and the pursuit of happiness in a consumer society.",
				longDescription:
					'"Infinite Jest", a modern magnum opus by David Foster Wallace, is a complex multi-layered narrative that intricately weaves together an array of characters and subplots, all set against the backdrop of a dystopian future North America. The story oscillates between a tennis academy for gifted adolescents and a halfway house for recovering addicts, exploring the lives of its inhabitants with extraordinary depth. Infused with irony, humor, and deep, philosophical musings, Wallace\'s novel is a study of the human condition in a world consumed by entertainment, addiction, and the search for happiness.\n\nThe narrative is primarily centered around two characters: Hal Incandenza, a prodigiously talented tennis player struggling with inner emptiness, and Don Gately, a recovering Demerol addict finding redemption in the grueling path towards sobriety. As the narrative unfolds, Wallace seamlessly interweaves these two disparate lives, painting a vivid picture of our society’s obsession with pleasure and the ensuing emptiness it often brings. The novel’s elusive "Infinite Jest" is a film made by Hal’s father that is so entertaining it leaves its viewers in a state of catatonic bliss, a symbol of the potential dangers of indulging in mindless excess.\n\n"Infinite Jest" is a challenging read, with its complex narrative structure, extensive footnotes, and philosophical undertones. But beneath its complexity lies a story of profound beauty and depth that explores the complexities of life, addiction, entertainment and the pursuit of happiness. It is a testament to Wallace\'s genius that he was able to intertwine such a vast array of themes into a single narrative. "Infinite Jest" is not just a book, but an experience, a journey that promises to change the way you perceive the world around you.',
				inventoryCount: 60,
				isbn: "9780316066525",
				author: {
					id: "ac3fdc65-fe7a-4985-86ff-3476d7cf6cc9",
					authorFirstName: "David Foster",
					authorLastName: "Wallace",
				},
				bookReviews: [
					{
						id: "ea906cbf-766b-4e24-a3da-2505c0dc7c29",
						shortReview: "Challenging but not engaging.",
						review:
							"Infinite Jest is a challenging and ambitious novel that explores various themes such as addiction, entertainment, and the search for meaning. However, its nonlinear narrative structure and extensive footnotes may deter some readers from fully engaging with the story.",
						rating: 2,
						user: {
							id: "9c1b9d38-b2df-4a79-8091-8ef8fa821c88",
							userName: "reader123",
						},
					},
				],
				bookCategories: [
					{
						id: "a7e4cb7a-8072-42eb-8823-f872872e5906",
						category: {
							categoryName: "Postmodern",
						},
					},
					{
						id: "e4d23486-987a-4120-b7e5-e81596781f79",
						category: {
							categoryName: "Social Commentary",
						},
					},
					{
						id: "b2c77745-3ada-490c-86c0-5fa1f5234e36",
						category: {
							categoryName: "Modernist",
						},
					},
				],
			},
			{
				id: "4d4915f8-ef78-482b-a865-7f31ab798c9a",
				bookTitle: "The Tale of Genji",
				pageCount: 1176,
				publishDate: "1001-01-01",
				price: 25,
				shortDescription:
					"Written in the 11th century by Murasaki Shikibu, a lady in the Heian court of Japan, The Tale of Genji is considered the world's first novel, offering a richly detailed portrait of courtly life in medieval Japan.",
				longDescription:
					"The \"Tale of Genji,\" penned by noblewoman Murasaki Shikibu, is a classic and monumental work of Japanese literature that explores the nuances of courtly life in Heian-era Japan. The narrative, often considered the world's first novel, revolves around the life and times of Hikaru Genji, the son of an emperor, demoted to a commoner, yet still navigating the complexities of aristocracy. With a rich tapestry of characters and interwoven subplots, the story offers an immersive and vivid depiction of Genji's romantic escapades, political rivalries, and personal introspection, as he grapples with the impermanence of life and the elusive pursuit of aesthetic beauty.\n\nThroughout the sprawling novel, readers find themselves privy to the intimate details of Genji's relationships with a myriad of women, each unique in temperament and status. These connections, often tinged with melancholy and unrequited affection, provide a profound exploration of Heian courtly love, enabling readers to perceive the delicate balance between emotion and duty, love and decorum. Yet, the tale is not confined to Genji's romantic pursuits alone. It also provides a compelling portrayal of political manoeuvrings and social norms within the intricate hierarchy of the Heian court. \n\nHowever, at its core, 'The Tale of Genji' is a book of deep human understanding, exploring themes of mortality, spirituality, and the ephemeral nature of beauty. The story is imbued with a sense of mono no aware – a poignant awareness of the transience of things and a bittersweet appreciation of the fleeting beauty of the world. As Genji's life unfolds, readers are invited to delve deeper into the contemplation of human existence, making this masterpiece not just a historical or cultural artifact, but a timeless reflection on the human condition. The \"Tale of Genji\" is a must-read for those seeking to understand not only the cultural heritage of Japan, but also the universal themes that bind all of humanity together.",
				inventoryCount: 50,
				isbn: "9780679417385",
				author: {
					id: "bd610b47-b38c-4928-87f7-038048156b1b",
					authorFirstName: "Murasaki",
					authorLastName: "Shikibu",
				},
				bookReviews: [
					{
						id: "f620e771-da0c-42cb-b6f2-7f7ac5b94076",
						shortReview: "Timeless classic.",
						review:
							"The Tale of Genji is a masterpiece of Japanese literature, offering a fascinating glimpse into the courtly life of Heian-era Japan. Murasaki Shikibu's vivid descriptions and intricate characterizations make this epic tale a timeless classic that continues to captivate readers centuries after its initial publication.",
						rating: 5,
						user: {
							id: "7c7a29c9-a713-440b-9b85-eb5033f02641",
							userName: "avidreader7",
						},
					},
					{
						id: "508b551f-b344-429d-af4e-e6ef2038197c",
						shortReview: "Rich and immersive.",
						review:
							"The Tale of Genji is a rich and immersive reading experience that transports readers to a different time and place. Murasaki Shikibu's narrative skill and attention to detail bring the characters and settings to life, making it a must-read for fans of classic literature.",
						rating: 4,
						user: {
							id: "671b88b5-2cb1-43ff-9b2d-c19c6e319ef7",
							userName: "bookishgal",
						},
					},
				],
				bookCategories: [
					{
						id: "d1d094be-336d-47ec-86a2-ee114a1b118a",
						category: {
							categoryName: "Epic",
						},
					},
					{
						id: "8ca35a49-6510-4b86-8f7c-882f57d1e5bc",
						category: {
							categoryName: "Cultural",
						},
					},
					{
						id: "b39829c1-0999-4aba-91a3-cc991496ea39",
						category: {
							categoryName: "Historical",
						},
					},
				],
			},
			{
				id: "92bbd1f2-069b-4828-bd02-6f6afe3de195",
				bookTitle: "A Room with a View",
				pageCount: 256,
				publishDate: "1908-01-01",
				price: 12,
				shortDescription:
					"E.M. Forster's beloved novel is a social critique and comedy of manners set in Edwardian England, following the romantic travails of a young woman, Lucy Honeychurch.",
				longDescription:
					'In E.M. Forster\'s captivating novel "A Room with a View," readers are transported to the early 20th century, where they follow the journey of the young and impressionable Lucy Honeychurch. Lucy, a traditional English woman, finds herself torn between the societal expectations of her homeland and the enchanting allure of Italy, where she experiences an awakening of her spirit and a deepening of her understanding of her own desires. Her journey starts as a conventional English tourist in Florence, Italy, where a chance encounter with the unconventional Emersons, father and son duo, sets her off on a path of self-discovery.\n\nThe foundation of the story is Lucy\'s struggle between her duty and her heart\'s desire. Her heart is set aflutter by George Emerson, a man who challenges her conventional mindset and urges her to listen to her heart. However, she is betrothed to Cecil Vyse, a man who embodies the conventional and repressed Edwardian society, which values intellect over emotion. This conflict is perfectly encapsulated in the contrasting settings of vibrant Italy and stuffy England. The lush, passionate landscape of Italy represents freedom and authenticity, while the rigid structure of English society symbolizes societal constraints and repression.\n\n"A Room with a View" is a poignant exploration of societal expectations, the constraints they place on individuals, and the courage it takes to break free from them. It’s a romantic novel, but it also questions and challenges the social, cultural, and class norms of the time. Through Lucy, Forster explores themes of independence, integrity, and the importance of being true to oneself. This book is for readers who enjoy carefully crafted characters, thought-provoking themes, and a richly detailed setting. It is a timeless classic that continues to resonate with readers today, inviting them to question societal norms and encouraging them to live authentically.',
				inventoryCount: 75,
				isbn: "9780141183297",
				author: {
					id: "8ac0cd63-3c60-4e7e-b39a-665011161c68",
					authorFirstName: "E.M.",
					authorLastName: "Forster",
				},
				bookReviews: [
					{
						id: "f865234b-f71c-4560-887d-ce589b96ab52",
						shortReview: "Charming and insightful.",
						review:
							"A Room with a View is a delightful novel that explores themes of love, social class, and freedom. E.M. Forster's writing is both charming and insightful, making this book a timeless classic that continues to resonate with readers today.",
						rating: 4,
						user: {
							id: "3e4992a5-bde8-4df2-ae06-051d0b7a1805",
							userName: "booklover1",
						},
					},
					{
						id: "efa2b0bb-5317-428d-bb37-963ce49ca717",
						shortReview: "Beautifully written.",
						review:
							"A Room with a View is a beautifully written novel that transports readers to the idyllic landscapes of Italy. E.M. Forster's exploration of romance and societal expectations is both poignant and thought-provoking.",
						rating: 4,
						user: {
							id: "671b88b5-2cb1-43ff-9b2d-c19c6e319ef7",
							userName: "bookishgal",
						},
					},
				],
				bookCategories: [
					{
						id: "94bd2ffe-caef-4a21-a057-eca178167c95",
						category: {
							categoryName: "Romance",
						},
					},
					{
						id: "e896f690-33f9-4f69-bfca-8dbdb413eda0",
						category: {
							categoryName: "Classic Romance",
						},
					},
					{
						id: "da7a32d7-60d9-49c4-8b3a-d06142d2ec98",
						category: {
							categoryName: "Cultural",
						},
					},
				],
			},
			{
				id: "cdcadae9-09a4-4820-892a-8a2e28f35ddb",
				bookTitle: "Henderson the Rain King",
				pageCount: 352,
				publishDate: "1959-01-01",
				price: 16,
				shortDescription:
					"Bellow's novel follows the journey of Eugene Henderson, a wealthy but unsatisfied American, as he seeks fulfillment in Africa. It is a blend of humor, philosophy, and social commentary.",
				longDescription:
					"In \"Henderson the Rain King,\" Saul Bellow invites readers into the chaotic and philosophical journey of the protagonist, Eugene Henderson. Henderson, a millionaire suffering from an existential crisis, embarks on a wild quest to Africa, seeking meaning amidst his seemingly empty affluence. Through his unique narrative style, Bellow masterfully crafts a tale that is as much a physical adventure as it is a deep, philosophical exploration of life's purpose, making it an enthralling reading experience.\n\nAgainst the backdrop of the captivating African landscape, Henderson finds himself thrust into tribal cultures and age-old traditions, which challenges his Western perspectives. Henderson's immersion into the tribal life leads him to the title of \"Rain King\" in the Wariri tribe, where he is expected to bring rain for the crops. This role brings Henderson face-to-face with his fears, desires, and the ever-pressing quest for a meaningful life. The novelist's portrayal of Henderson's internal struggles, coupled with the rich, cultural backdrop, makes for an electrifying narrative where readers can't help but question their own life's purpose.\n\n\"Henderson the Rain King\" is a potent blend of humor and profundity, making it a timeless classic. Bellow's skilled character development and brilliant storytelling make Henderson's journey a compelling exploration of self-discovery, cultural understanding, and existential introspection. The novel's intricate plot, combined with its vibrant setting and deeply human themes, promises an unforgettable reading experience, making it a must-read for those seeking a novel that is both entertaining and thought-provoking.",
				inventoryCount: 75,
				isbn: "9780140189421",
				author: {
					id: "2e15976a-ebae-4e00-8f79-1faa2db9a582",
					authorFirstName: "Saul",
					authorLastName: "Bellow",
				},
				bookReviews: [
					{
						id: "164ae1a8-eaf4-4cc0-a5b0-c7b1a610b433",
						shortReview: "Wild and whimsical.",
						review:
							"Henderson the Rain King is a wild and whimsical adventure that defies categorization. Saul Bellow's vivid prose and eccentric characters make this novel a captivating read from start to finish.",
						rating: 5,
						user: {
							id: "7c7a29c9-a713-440b-9b85-eb5033f02641",
							userName: "avidreader7",
						},
					},
				],
				bookCategories: [
					{
						id: "ee9a55d8-fdc3-4b25-9277-2e739d2e34d0",
						category: {
							categoryName: "Coming-of-Age",
						},
					},
					{
						id: "75ef2b95-93e1-48a6-b225-8e7ed81a22b2",
						category: {
							categoryName: "Social Commentary",
						},
					},
					{
						id: "4e558e42-525d-4d59-91d7-b702f30c1249",
						category: {
							categoryName: "Modernist",
						},
					},
				],
			},
			{
				id: "37d2da2f-1a3b-4a01-ab38-162100a833af",
				bookTitle: "A Good Man Is Hard to Find",
				pageCount: 256,
				publishDate: "1955-01-01",
				price: 15,
				shortDescription:
					"O'Connor's collection of short stories showcases her unique blend of comic and tragic, mundane and grotesque, revealing the human condition and the Southern gothic aesthetic.",
				longDescription:
					'"A Good Man Is Hard to Find" by Flannery O’Connor is a captivating collection of short stories that explore the human spirit\'s complexity, the concept of grace, and the potential for redemption. The title story, "A Good Man Is Hard to Find," takes readers on a suspenseful and tragic journey with the eccentric, southern grandmother and her family. The grandmother\'s attempts to manipulate her son into a nostalgic trip to an old plantation lead them down a deadly path, resulting in an unexpected encounter with an escaped convict known as The Misfit. O\'Connor\'s skilled storytelling and masterful character development keep readers on the edge of their seats, revealing the darkness that lurks beneath the surface of everyday lives.\n\nThe collection\'s other stories encompass a range of eccentric characters, each navigating their own moral dilemmas and spiritual reckonings. In "The River," a young boy seeks baptism as an escape from his neglectful home life, while "The Life You Save May Be Your Own" follows a one-armed drifter who finds himself in a morally ambiguous situation involving a vulnerable mother and her daughter. O’Connor’s vivid, stark writing style, combined with her ability to infuse her characters with authenticity and depth, creates a poignant exploration of the human condition.\n\n"Good Man Is Hard to Find" is not just a book; it is a window into the heart of humanity, revealing our capacity for both good and evil. O\'Connor\'s poignant narratives, filled with irony, humor, and tragedy, expose the profound truths of the human experience. The stories within this collection offer a compelling exploration of morality, grace, and redemption, challenging readers to confront their own preconceptions, fears, and beliefs. Readers will be left in contemplation long after turning the final page, making "A Good Man Is Hard to Find" a must-read for those seeking a thought-provoking and deeply moving literary experience.',
				inventoryCount: 90,
				isbn: "9780156364652",
				author: {
					id: "9b6a996e-273d-40e5-b6d6-133c7aa25b06",
					authorFirstName: "Flannery",
					authorLastName: "O'Connor",
				},
				bookReviews: [
					{
						id: "f09d5918-bc40-4eec-9b5c-17fe4e667c96",
						shortReview: "Haunting and insightful.",
						review:
							"A Good Man Is Hard to Find is a gripping collection of short stories that delves into the complexities of human nature. Flannery O'Connor's writing is both haunting and insightful, leaving a lasting impression on readers.",
						rating: 4,
						user: {
							id: "3e4992a5-bde8-4df2-ae06-051d0b7a1805",
							userName: "booklover1",
						},
					},
					{
						id: "01cb3075-f8db-4bdb-af14-38d5ab831f4c",
						shortReview: "Engaging but uneven.",
						review:
							"A Good Man Is Hard to Find offers a glimpse into the darker aspects of life through its intriguing characters and unexpected plot twists. While some stories are more engaging than others, Flannery O'Connor's masterful storytelling shines throughout.",
						rating: 3,
						user: {
							id: "9c1b9d38-b2df-4a79-8091-8ef8fa821c88",
							userName: "reader123",
						},
					},
					{
						id: "f26c4e70-7429-47fd-a6f4-56d2737541cf",
						shortReview: "Masterful and vivid.",
						review:
							"A Good Man Is Hard to Find is a literary masterpiece that skillfully blends elements of humor, tragedy, and morality. Flannery O'Connor's vivid imagery and sharp wit make this collection a must-read for fans of Southern Gothic fiction.",
						rating: 5,
						user: {
							id: "8410ebc7-bddd-4cff-a651-24b74f193192",
							userName: "bibliophile",
						},
					},
				],
				bookCategories: [
					{
						id: "f7e60f90-3f9d-4fd7-af90-1807d93fd419",
						category: {
							categoryName: "Horror",
						},
					},
					{
						id: "ae3696e0-2d80-4350-b805-e8f825f99384",
						category: {
							categoryName: "Political Satire",
						},
					},
					{
						id: "d8d72ec1-82e7-4f1c-8b84-09f836930253",
						category: {
							categoryName: "Southern Gothic",
						},
					},
				],
			},
			{
				id: "17aa4df7-f547-46d4-a60d-ddb68d89ce2d",
				bookTitle: "Death of a Naturalist",
				pageCount: 64,
				publishDate: "1966-01-01",
				price: 12,
				shortDescription:
					"Heaney's first major published volume explores rural life and childhood, presenting a collection that is both accessible and deeply rooted in the soil of Northern Ireland.",
				longDescription:
					'"Death of a Naturalist" is a captivating collection of poetry by the renowned poet, Seamus Heaney. This remarkable compilation, which marked Heaney\'s debut in the literary world, is a beautiful exploration of rural and personal life, interwoven with deep, intimate reflections of his Irish homeland. Heaney\'s poetry is a bridge between past and present, where every word is steeped in rich Irish history, yet echoes with the universal experiences of growth, loss, and awakening.\n\nIn the first half of the collection, Heaney takes readers on a vivid journey through his childhood experiences in County Derry, Ireland. He unveils the magic of his rural surroundings with poems like "Blackberry-Picking" and "Death of a Naturalist", where he paints a rich tapestry of life in the Irish countryside. His boyhood interactions with nature and its inhabitants are described in meticulous detail, revealing the innocence of his early years and his growing awareness of the harsh realities of life.\n\nThe latter half of the collection shifts towards a more mature perspective, reflecting on the political upheavals and cultural shifts in his homeland. Poems like "At a Potato Digging" and "Follower" provide a profound commentary on the hard life of the Irish peasantry and the violent history of Ireland. Throughout the collection, Heaney’s powerful use of language and imagery invites readers to immerse themselves in the raw beauty and stark realities of rural Irish life. "Death of a Naturalist" is more than poetry; it\'s a journey through the soul of one of Ireland\'s most influential poets, a journey that will leave readers enriched and enlightened.',
				inventoryCount: 80,
				isbn: "9780571230839",
				author: {
					id: "44d67304-f6d5-4ea5-bb58-f5067104b107",
					authorFirstName: "Seamus",
					authorLastName: "Heaney",
				},
				bookReviews: [
					{
						id: "850bff04-61b3-4bce-9d9e-ad1e91c7b79f",
						shortReview: "Lyrical but repetitive.",
						review:
							"Death of a Naturalist offers a lyrical exploration of nature and childhood memories. Seamus Heaney's poetry is evocative, but some readers may find the themes repetitive.",
						rating: 3,
						user: {
							id: "550de341-e5c4-486f-b087-5ef77ff3a72b",
							userName: "bookworm",
						},
					},
					{
						id: "c45147b7-3a9f-4c08-abcd-8b2f6dbcdf11",
						shortReview: "Captivating and moving.",
						review:
							"Death of a Naturalist is a poignant collection of poems that captures the beauty and brutality of the natural world. Seamus Heaney's imagery is vivid, and his exploration of Irish rural life is both captivating and moving.",
						rating: 5,
						user: {
							id: "7c7a29c9-a713-440b-9b85-eb5033f02641",
							userName: "avidreader7",
						},
					},
					{
						id: "ca9c15c3-b7d0-46d9-9704-b43f660a3306",
						shortReview: "Compelling and nostalgic.",
						review:
							"Death of a Naturalist is a compelling collection of poems that skillfully juxtaposes the beauty and harshness of nature. Seamus Heaney's poetic language transports readers to the Irish countryside, evoking a sense of nostalgia and wonder.",
						rating: 4,
						user: {
							id: "671b88b5-2cb1-43ff-9b2d-c19c6e319ef7",
							userName: "bookishgal",
						},
					},
				],
				bookCategories: [
					{
						id: "60084030-4227-4b30-8148-16909f22551f",
						category: {
							categoryName: "Poetry",
						},
					},
					{
						id: "968f87c5-8a52-491c-b150-9cfd905f0e0f",
						category: {
							categoryName: "Philosophical",
						},
					},
				],
			},
			{
				id: "61e48b82-ca50-4e17-9b66-7b007eb2218c",
				bookTitle: "Omeros",
				pageCount: 325,
				publishDate: "1990-01-01",
				price: 18,
				shortDescription:
					"Walcott's epic poem reimagines the Trojan War as a Caribbean narrative, exploring themes of colonization, identity, and the legacy of slavery.",
				longDescription:
					'In the poetic masterpiece, "Omeros," Nobel laureate Derek Walcott weaves an intricate tapestry of emotions, cultures, and histories. Set primarily in the Caribbean island of St. Lucia, this epic poem is a reimagining of Homer\'s Iliad and Odyssey, juxtaposed against the backdrop of postcolonial West Indies. The narrative unfolds through the experiences of its central characters: Achille, a humble fisherman who is torn between his African roots and the new world he inhabits, Hector, a charismatic yet tragic figure, and Helen, the embodiment of alluring beauty and the bone of contention between the two men. \n\nWalcott\'s "Omeros" is a profound exploration of identity, memory, and belonging. It delves into the complex realities of the Caribbean, a land marked by the scars of colonial past, the struggles of the present, and the uncertainties of the future. The narrative skillfully interweaves the personal journeys of its characters with the collective memory of a people, navigating through time and space, from the sun-drenched shores of St. Lucia to the war-ridden landscapes of Africa and the icy terrains of North America. The poem\'s rich imagery, lush descriptions, and musicality encapsulate the diverse voices, cultures, and histories of the Caribbean people.\n\nThis isn\'t just a book; it\'s an immersive experience that transports readers into a world that is at once familiar and alien. "Omeros" is a compelling testament to Walcott\'s mastery over language and his nuanced understanding of the human condition. It invites readers to embark on an epic journey, one that is fraught with passion, conflict, and redemption. Whether you\'re a lover of poetry, a history buff, or a reader seeking a profound, thought-provoking read, "Omeros" is a literary treasure that promises to leave an indelible mark on your psyche.',
				inventoryCount: 60,
				isbn: "9780374523503",
				author: {
					id: "2cfab642-6e50-4c9a-9863-8d86d4fdc6d1",
					authorFirstName: "Derek",
					authorLastName: "Walcott",
				},
				bookReviews: [
					{
						id: "df42cd54-ea69-4c87-9116-e40fec2a542b",
						shortReview: "Rich and immersive.",
						review:
							"Omeros is an epic poem that weaves together themes of history, identity, and mythology. Derek Walcott's lyrical prose transports readers to the Caribbean, offering a rich and immersive reading experience.",
						rating: 4,
						user: {
							id: "7bb8095f-c1a8-4307-b74f-2affe40bae4b",
							userName: "litlover88",
						},
					},
					{
						id: "32d9cdac-e18b-439c-bcc8-b05f74f14a9d",
						shortReview: "Breathtaking and mesmerizing.",
						review:
							"Omeros is a breathtaking work of literature that blends mythology with the harsh realities of Caribbean life. Derek Walcott's poetic language and vivid imagery create a mesmerizing narrative that stays with the reader long after the final page.",
						rating: 5,
						user: {
							id: "85e505f3-d55e-45cb-8d38-f91ae9164d17",
							userName: "jenreads",
						},
					},
					{
						id: "0ca5b7af-166a-43c4-8764-a4062e8eb97f",
						shortReview: "Beautiful but challenging.",
						review:
							"Omeros is a complex and ambitious poem that explores themes of identity, colonization, and cultural heritage. While Derek Walcott's writing is undeniably beautiful, the structure of the poem can be difficult to follow at times.",
						rating: 3,
						user: {
							id: "de223b1f-28ef-4921-b846-0613747e1cee",
							userName: "iambook",
						},
					},
				],
				bookCategories: [
					{
						id: "697e1952-1f9f-4c56-a27d-7835436de9e8",
						category: {
							categoryName: "Poetry",
						},
					},
					{
						id: "8926e863-ec5b-446e-bdf2-ec00df0a3436",
						category: {
							categoryName: "Cultural",
						},
					},
					{
						id: "bedfe27b-4966-4930-94fd-189e7dc5691f",
						category: {
							categoryName: "Epic",
						},
					},
				],
			},
			{
				id: "51fab1f5-e7c9-47fc-965a-15027bb7c2d3",
				bookTitle: "The Magic Mountain",
				pageCount: 720,
				publishDate: "1924-01-01",
				price: 20,
				shortDescription:
					"Thomas Mann's epic novel of ideas follows young Hans Castorp as he visits a Swiss sanatorium, intending to stay for three weeks but ends up being there for seven years, encountering a microcosm of European society on the eve of World War I.",
				longDescription:
					'"The Magic Mountain" by Thomas Mann is a captivating exploration of the human condition set against the backdrop of an isolated tuberculosis sanatorium in the Swiss Alps. The novel traces the journey of Hans Castorp, a young Hamburg engineer, who visits his tubercular cousin in the sanatorium for a short stay but ends up spending seven years, drawn into the microcosm of the mountain.\n\nThe narrative weaves an intricate tapestry of philosophical debates, intellectual discussions, and personal dynamics among the sanatorium\'s inhabitants. Castorp\'s life in the sanatorium is marked by a labyrinth of time, where days transform into years, and he engages in profound dialogues about love, life, death, and time with fellow patients, particularly the rational Settembrini and the passionate Naphta. Mann brilliantly uses the metaphor of illness to mirror the decay and dilemmas of European society on the brink of World War I.\n\n"The Magic Mountain" is more than just a novel; it is a profound meditation on the complexities of human existence. Mann’s evocative descriptions of the Swiss Alps, the variegated characters, and the profound philosophical dialogues create a mesmerizing and thought-provoking reading experience. A masterpiece of European literature, this novel is a rich and rewarding journey that will leave you contemplating the intricacies of life and the inexorable passage of time. It is a must-read for anyone seeking a deeper understanding of humanity\'s eternal struggle between reason and passion, life and death, and the relative nature of time.',
				inventoryCount: 80,
				isbn: "9780679772873",
				author: {
					id: "8e741b61-72c5-4e4e-a8af-9cf8eef5c0a8",
					authorFirstName: "Thomas",
					authorLastName: "Mann",
				},
				bookReviews: [
					{
						id: "87704ffa-8965-4ea9-8801-4852239f1966",
						shortReview: "Thought-provoking and rewarding.",
						review:
							"The Magic Mountain is a thought-provoking novel that explores complex philosophical ideas within the confines of a sanatorium. Thomas Mann's intricate prose and rich character development make this book a rewarding but challenging read.",
						rating: 4,
						user: {
							id: "ca1f6b8e-fa79-4d48-8cbc-dd0ef439327e",
							userName: "lovesbooks",
						},
					},
					{
						id: "6f3b4add-09c2-4051-be2f-3dc45d22cc5f",
						shortReview: "Immersive and profound.",
						review:
							"The Magic Mountain is an immersive journey into the human psyche, set against the backdrop of a tuberculosis sanatorium. Thomas Mann's prose is dense but rewarding, offering profound insights into life, death, and the search for meaning.",
						rating: 5,
						user: {
							id: "3e4992a5-bde8-4df2-ae06-051d0b7a1805",
							userName: "booklover1",
						},
					},
					{
						id: "70e6b36c-d05b-4bf1-94e5-e2cbd1c9570a",
						shortReview: "Challenging but worthwhile.",
						review:
							"The Magic Mountain is a challenging yet ultimately rewarding novel that delves into the complexities of human existence. While Thomas Mann's philosophical musings can be dense at times, the depth of his insights makes this book a worthwhile read.",
						rating: 3,
						user: {
							id: "9c1b9d38-b2df-4a79-8091-8ef8fa821c88",
							userName: "reader123",
						},
					},
				],
				bookCategories: [
					{
						id: "3627f066-3dca-4f68-ab26-29c1b91a78c2",
						category: {
							categoryName: "Modernist",
						},
					},
					{
						id: "e896a2c6-a4d2-4815-88a7-8f2545cb6c6f",
						category: {
							categoryName: "Philosophical Fiction",
						},
					},
					{
						id: "bd37a977-235d-4d43-9a8c-31a8c36c151b",
						category: {
							categoryName: "Existential Fiction",
						},
					},
				],
			},
			{
				id: "d3a4f48f-8243-49e3-8250-452fb38225a1",
				bookTitle: "Ficciones",
				pageCount: 174,
				publishDate: "1944-01-01",
				price: 15,
				shortDescription:
					"A collection of short stories by Jorge Luis Borges offering intricate tales of a universe where the boundaries of reality and fiction blur. 'Ficciones' explores themes of labyrinths, mirrors, infinite libraries, and the nature of authorship.",
				longDescription:
					'Immerse yourself in the labyrinthine world of "Ficciones", a collection of short stories by the renowned Argentine author, Jorge Luis Borges. This masterwork of literature, first published in 1944, is a mesmerizing journey through a landscape of the surreal, the fantastical, and the utterly extraordinary. Borges weaves reality and illusion together so seamlessly that the line between them blurs and vanishes, leaving you questioning the very nature of existence.\n\nIn "Ficciones", Borges explores an array of peculiar universes, each one more mesmerizing than the last. You\'ll traverse an infinite library filled with every book that ever has and ever could be written, get lost in a garden of forking paths that represents the various outcomes of your life, and stumble upon a man who can remember every detail of his past but is incapable of thought. Borges\' stories are not merely tales; they are thought experiments that challenge your understanding of time, memory, infinity, and reality.\n\nYet, Borges\' writing is not just intellectually stimulating; it is also emotionally resonant. His characters, despite their surreal circumstances, are deeply human. Their struggles with identity, destiny, and the pursuit of knowledge reflect our own, making "Ficciones" more than just a collection of stories. It is a mirror held up to humanity, a profound exploration of the human condition that will leave you contemplating long after you\'ve turned the final page. Dive into "Ficciones", and lose yourself in the enigmatic world of Borges\' imagination.',
				inventoryCount: 70,
				isbn: "9780802130303",
				author: {
					id: "7f82a43c-a83c-4f0d-9932-bbf49f591fab",
					authorFirstName: "Jorge Luis",
					authorLastName: "Borges",
				},
				bookReviews: [
					{
						id: "466f52dc-5926-43d9-b581-af87547041df",
						shortReview: "Mesmerizing and thought-provoking.",
						review:
							"Ficciones is a mesmerizing collection of short stories that showcases Jorge Luis Borges' unparalleled imagination and intellect. Each story is a labyrinth of ideas, inviting readers to explore philosophical concepts and existential dilemmas.",
						rating: 5,
						user: {
							id: "3e4992a5-bde8-4df2-ae06-051d0b7a1805",
							userName: "booklover1",
						},
					},
					{
						id: "b45bdd95-d5b9-4dab-9e4b-b5abb98b1819",
						shortReview: "Innovative and mind-bending.",
						review:
							"Ficciones is a literary masterpiece that blurs the lines between reality and fiction. Jorge Luis Borges' innovative narrative techniques and intricate plots make this collection a must-read for lovers of mind-bending literature.",
						rating: 4,
						user: {
							id: "9c1b9d38-b2df-4a79-8091-8ef8fa821c88",
							userName: "reader123",
						},
					},
					{
						id: "5ffae82f-47e8-497c-9563-d5a70f6e3bcf",
						shortReview: "Intellectually stimulating but inaccessible.",
						review:
							"Ficciones is an intellectually stimulating collection of stories that challenges readers to question the nature of reality. While Jorge Luis Borges' writing is undeniably brilliant, some stories may feel inaccessible to casual readers.",
						rating: 3,
						user: {
							id: "8410ebc7-bddd-4cff-a651-24b74f193192",
							userName: "bibliophile",
						},
					},
				],
				bookCategories: [
					{
						id: "fbe2da61-4ebb-4d67-bdd8-c2c9ff2a4c66",
						category: {
							categoryName: "Postmodern",
						},
					},
					{
						id: "68f2ad8b-31a3-4dd1-a27d-bc91f3cabe17",
						category: {
							categoryName: "Philosophical",
						},
					},
					{
						id: "2d6ea8d6-ebb8-45df-8b2b-9051e513613a",
						category: {
							categoryName: "Existential Fiction",
						},
					},
				],
			},
			{
				id: "c78ebd24-9e96-4e84-9843-7016a9602323",
				bookTitle: "Invisible Cities",
				pageCount: 165,
				publishDate: "1972-01-01",
				price: 14,
				shortDescription:
					"Italo Calvino's imaginative text offers a conversation between the aging emperor Kublai Khan and the young explorer Marco Polo, describing fantastical cities across the empire, exploring themes of memory, desire, and the nature of human experience.",
				longDescription:
					'In the heart of the beautifully enigmatic novel "Invisible Cities," author Italo Calvino weaves a captivating symphony of imaginary urban landscapes through the eyes of the legendary explorer Marco Polo. As the young Venetian adventurer narrates his travels to the Mongol emperor Kublai Khan, readers are whisked away on a mesmerizing journey through cities of memory, desire, signs, the dead, and more. Each city is a vibrant, complex universe unto itself, reflecting aspects of human nature and society that will provoke contemplation long after turning the final page.\n\nThe narrative takes place in the grandeur of Kublai Khan\'s garden, where Marco Polo\'s vivid descriptions of the cities prompt a series of philosophical conversations about the nature of perception, language, and human existence. These cities, 55 in all, are not just architectural constructs, but are living, breathing entities pulsating with life, each with its unique blend of melancholy, joy, despair, and hope. Marco Polo\'s tales are poetic, rich in metaphor, and often surreal, providing a dreamlike quality that blurs the lines between reality and imagination.\n\n"Invisible Cities" is more than just a novel; it\'s a thought-provoking exploration of the human condition, a meditation on the complexity of communication, and a celebration of the power of storytelling. This book challenges the reader to look beyond the surface, to question their perceptions of their own cities and lives. As you journey through the labyrinth of "Invisible Cities," you will discover that each city—each story—is a reflection of yourself, making this not just a book to be read, but an experience to be lived.\n',
				inventoryCount: 85,
				isbn: "9780156453806",
				author: {
					id: "57d0e7d4-b3a6-4823-948e-8580640d8a55",
					authorFirstName: "Italo",
					authorLastName: "Calvino",
				},
				bookReviews: [
					{
						id: "fc348907-8426-4e48-8092-7a23179e5cda",
						shortReview: "Breathtaking and vivid.",
						review:
							"Invisible Cities is a breathtaking exploration of imagination and urban landscapes. Italo Calvino's prose is lyrical and evocative, painting vivid portraits of imaginary cities that linger in the mind long after the book is finished.",
						rating: 4,
						user: {
							id: "550de341-e5c4-486f-b087-5ef77ff3a72b",
							userName: "bookworm",
						},
					},
					{
						id: "a18d23fc-59b8-48c5-8ac3-f11921b20e84",
						shortReview: "Mesmerizing and poetic.",
						review:
							"Invisible Cities is a literary marvel that transcends the boundaries of traditional storytelling. Italo Calvino's imaginative vision and poetic language create a mesmerizing journey through fantastical cities that defy logic and convention.",
						rating: 5,
						user: {
							id: "7c7a29c9-a713-440b-9b85-eb5033f02641",
							userName: "avidreader7",
						},
					},
					{
						id: "21d91cba-901d-4a66-9192-fb9fadb0739d",
						shortReview: "Ambitious but uneven.",
						review:
							"Invisible Cities is an ambitious work that showcases Italo Calvino's boundless creativity. While some sections are beautifully crafted, others may feel disjointed or overly abstract, making the reading experience uneven.",
						rating: 3,
						user: {
							id: "671b88b5-2cb1-43ff-9b2d-c19c6e319ef7",
							userName: "bookishgal",
						},
					},
				],
				bookCategories: [
					{
						id: "b7544a94-8e9f-4ca8-90f8-34a2de67b881",
						category: {
							categoryName: "Postmodern",
						},
					},
					{
						id: "bdf4957a-6467-400c-aca7-b77faa3a360d",
						category: {
							categoryName: "Cultural",
						},
					},
					{
						id: "1392281e-1a9e-4dd7-a718-ebbc623aa94e",
						category: {
							categoryName: "Social Commentary",
						},
					},
				],
			},
			{
				id: "9b5427ed-badb-4e4e-82f3-478ab7d8e0c4",
				bookTitle: "Blindness",
				pageCount: 352,
				publishDate: "1995-01-01",
				price: 16,
				shortDescription:
					"A powerful allegorical novel by Jos� Saramago about a society suffering an epidemic of blindness that reveals both the dignity and depravity of humanity.",
				longDescription:
					'In "Blindness," by Jose Saramago, an inexplicable contagion of sudden sightlessness seizes the inhabitants of an unnamed city, marking the beginning of an existential nightmare. The first victim is a man behind the wheel, struck blind while waiting at a traffic light. His world turns to an engulfing, milky haze. This terrifying phenomenon rapidly spreads, plunging the city into chaos. The government responds by isolating the afflicted in an abandoned mental asylum - a grim makeshift quarantine. In this setting, the veneer of civilization is quickly stripped away exposing the darkest aspects of human nature.\n\nSaramago masterfully weaves an allegorical tale featuring a woman who has somehow remained sighted. She is the wife of an ophthalmologist, who has been struck blind like the rest. She feigns blindness to accompany her husband to the quarantine. The sighted woman becomes the group\'s guide and protector, leading them through the horrors of the asylum where hygiene and living conditions have rapidly deteriorated. As society outside crumbles, inside the quarantine, the sighted woman\'s band grapples with the primal fears of darkness and the collapse of social order, struggling to maintain their humanity against all odds.\n\n"Blindness" is a grim and thought-provoking exploration of human nature, a chilling portrait of a society in freefall. It forces the reader to question: How fragile is our civilization? What is left when the structures of society are stripped away? With his powerful narrative and profound philosophical insights, Saramago paints a haunting image of mankind\'s vulnerability, making us reflect on the human condition and our own resilience. This is a book that will stay with the reader long after the last page has been turned.',
				inventoryCount: 75,
				isbn: "9780156007757",
				author: {
					id: "2e42da73-e564-4c84-88a6-74109563c342",
					authorFirstName: "Jose",
					authorLastName: "Saramago",
				},
				bookReviews: [
					{
						id: "a0b59ef3-ade0-4ddd-8e62-2a5279789737",
						shortReview: "Haunting and relentless.",
						review:
							"Blindness is a haunting exploration of human nature and society's response to crisis. Jose Saramago's stark prose and relentless narrative pull readers into a dystopian world where the loss of sight reveals the darkness within us all.",
						rating: 4,
						user: {
							id: "7bb8095f-c1a8-4307-b74f-2affe40bae4b",
							userName: "litlover88",
						},
					},
					{
						id: "e7bdc038-c21a-44d3-a238-cb2b8353cd3e",
						shortReview: "Powerful and thought-provoking.",
						review:
							"Blindness is a powerful allegory that exposes the fragility of civilization and the resilience of the human spirit. Jose Saramago's unflinching portrayal of societal collapse is both harrowing and thought-provoking, leaving a profound impact on readers.",
						rating: 5,
						user: {
							id: "85e505f3-d55e-45cb-8d38-f91ae9164d17",
							userName: "jenreads",
						},
					},
					{
						id: "a68e6b0d-273d-4e43-a5fe-b81b5ef6d4c4",
						shortReview: "Disturbing but powerful.",
						review:
							"Blindness is a disturbing yet compelling novel that explores the darkest depths of human nature. While Jose Saramago's writing is undeniably powerful, the relentless bleakness of the narrative may be overwhelming for some readers.",
						rating: 3,
						user: {
							id: "de223b1f-28ef-4921-b846-0613747e1cee",
							userName: "iambook",
						},
					},
				],
				bookCategories: [
					{
						id: "71b18da2-912c-40f9-896c-c37e48de88a2",
						category: {
							categoryName: "Psychological Thriller",
						},
					},
					{
						id: "edd25b0a-7869-4bd9-9be0-0ffd30210bac",
						category: {
							categoryName: "Existential Fiction",
						},
					},
					{
						id: "a7f8fe9e-b017-4adf-9e35-7c8d0c7dada7",
						category: {
							categoryName: "Psychological Fiction",
						},
					},
				],
			},
			{
				id: "fabe6dd1-fa38-457c-9f9d-6676ef7002d6",
				bookTitle: "If This Is a Man",
				pageCount: 400,
				publishDate: "1947-01-01",
				price: 14.95,
				shortDescription:
					"Primo Levi's memoir of his year spent in Auschwitz is a lucid and sober account of the everyday realities of life in the Holocaust, offering insight into the human condition under the most extreme circumstances.",
				longDescription:
					"\"‘If This Is A Man’ is an unflinchingly stark and striking memoir penned by Italian author, Primo Levi, a survivor of the Auschwitz Concentration Camp. The narrative unfolds as a visceral exploration of the human condition, grappling with the darkest corners of despair, dehumanization, and the struggle for survival under the brutalities of the Holocaust. Levi tells his story not with a melodramatic flourish, but with a scientist’s observant eye and a poet’s sensitivity, offering an insight into the horrific realities of life in a concentration camp, while also exploring profound questions of humanity, morality and the indomitable spirit of survival.\n\nLevi, a chemist by training, was captured by the Fascist Militia in 1943. He was only 24 then. The book chronicles his tumultuous journey from his arrest, transportation to Auschwitz, life in the camp, to his eventual liberation by the Red Army in 1945. The narrative is filled with vivid and haunting descriptions of the daily horrors of camp life - from starvation and disease to the constant threat of arbitrary execution. Yet, amidst the bleakness, Levi also sheds light on the moments of camarity, compassion and stubborn hope that punctuated the prisoners' lives, making the book a triumphant testament to human resilience.\n\n‘If This Is A Man’ is not just a memoir, but a profound philosophical reflection on the nature of humanity under extreme duress. Levi’s stark yet poignant prose compels the reader to confront the darkest abysses of human nature, while also highlighting the enduring power of hope and human spirit. This book is a compelling read, providing an enlightening perspective on one of the darkest chapters in human history. It is a testament to human resilience and a stark reminder of the horrors that mankind is capable of inflicting upon itself. If you are a reader seeking a profound, thought-provoking book that delves into the depths of human nature and the history of the Holocaust, ‘If This Is A Man’ cannot be missed.",
				inventoryCount: 60,
				isbn: "9780349100135",
				author: {
					id: "816c5d26-a35f-4746-bafa-5765da151ba8",
					authorFirstName: "Primo",
					authorLastName: "Levi",
				},
				bookReviews: [
					{
						id: "4416b61c-253d-41ec-93c3-b58b11db334b",
						shortReview: "Harrowing and honest.",
						review:
							"If This Is a Man is a harrowing memoir that offers a stark portrayal of survival and resilience in the face of unimaginable suffering. Primo Levi's unflinching honesty and introspection make this book a haunting testament to the human spirit.",
						rating: 4,
						user: {
							id: "ca1f6b8e-fa79-4d48-8cbc-dd0ef439327e",
							userName: "lovesbooks",
						},
					},
				],
				bookCategories: [
					{
						id: "ccc51a61-ada3-4bc9-b6bd-85157aa7bb4d",
						category: {
							categoryName: "Memoir",
						},
					},
					{
						id: "f6cf2f17-ee52-45d1-a691-907ceb984c23",
						category: {
							categoryName: "Historical",
						},
					},
					{
						id: "33235b52-0586-4f44-9c3c-c7ccd923d49d",
						category: {
							categoryName: "Philosophical",
						},
					},
				],
			},
			{
				id: "507a7709-0beb-4795-8ac8-de908803bbaa",
				bookTitle: "The Name of the Rose",
				pageCount: 512,
				publishDate: "1980-01-01",
				price: 18.95,
				shortDescription:
					"Umberto Eco's debut novel combines mystery, historical fiction, and semiotics in 1327, where Brother William of Baskerville arrives at a monastery to attend a theological dispute but gets involved in solving a series of mysterious deaths.",
				longDescription:
					"Immerse yourself in the intricate world of \"The Name of the Rose\" by Umberto Eco, a masterful blend of intellectual mystery, historical fiction, and ecclesiastical intrigue. Set in the 14th century, the story follows the erudite Franciscan friar William of Baskerville and his young apprentice Adso as they arrive at a wealthy Italian abbey. The abbey, a repository of the world's greatest knowledge, is rife with secrets and tensions, and the duo soon finds themselves embroiled in a complex labyrinth of mystery when monks start to die under suspicious circumstances.\n\nAs William and Adso delve deeper, they discover that the murders are connected to the abbey's impressive library, a place as labyrinthine and enigmatic as the crimes themselves. While attempting to navigate this maze of forbidden knowledge, the pair stumbles upon subversive theological debates and dangerous political dynamics. The abbey's labyrinth is a metaphor for the vast complexities of truth, knowledge, and faith, and the monks within wrestle with the power they hold, the secrets they keep, and the heresies they risk exposing.\n\n\"The Name of the Rose\" is not just a suspenseful detective saga, but also a rich exploration of medieval philosophy, semiotics, and the conflict between faith and reason. Eco's intricate plotting and profound understanding of the period create a vivid and atmospheric backdrop to this intellectual thriller. As you turn the pages, you will be drawn into a world of intellectual battles, where every corner holds a secret and every secret holds the power to shake the foundations of faith and power. This book is a must-read for those who love their mysteries steeped in historical details, philosophical debates, and rich, atmospheric settings.\n",
				inventoryCount: 90,
				isbn: "9780151446476",
				author: {
					id: "fd7b8f70-ec74-410b-869b-55838004b03f",
					authorFirstName: "Umberto",
					authorLastName: "Eco",
				},
				bookReviews: [
					{
						id: "11746a3c-5256-4b11-8ce3-3c3f829c395c",
						shortReview: "Captivating and intelligent.",
						review:
							"The Name of the Rose is a captivating historical mystery that combines elements of theology, philosophy, and suspense. Umberto Eco's meticulous attention to detail and rich character development make this novel a must-read for fans of intelligent fiction.",
						rating: 5,
						user: {
							id: "7c7a29c9-a713-440b-9b85-eb5033f02641",
							userName: "avidreader7",
						},
					},
					{
						id: "e620f6ff-ea67-4c2f-97b1-6a29a84cf57e",
						shortReview: "Intriguing but overwhelming.",
						review:
							"The Name of the Rose is an intriguing blend of historical fiction and murder mystery. Umberto Eco's erudite prose and intricate plot keep readers engaged until the very end, though some may find the theological discussions overwhelming at times.",
						rating: 4,
						user: {
							id: "85e505f3-d55e-45cb-8d38-f91ae9164d17",
							userName: "jenreads",
						},
					},
					{
						id: "cf7799e0-dc8b-4216-bf35-9b4e5cec7ea9",
						shortReview: "Ambitious but alienating.",
						review:
							"The Name of the Rose is an ambitious novel that delves deep into the realms of history, religion, and philosophy. While Umberto Eco's prose is undeniably masterful, the dense philosophical discussions may alienate some readers.",
						rating: 3,
						user: {
							id: "de223b1f-28ef-4921-b846-0613747e1cee",
							userName: "iambook",
						},
					},
					{
						id: "2298b107-85fc-4cfc-b428-eaf846a7cb52",
						shortReview: "Thought-provoking and immersive.",
						review:
							"The Name of the Rose is a thought-provoking novel that challenges readers to explore complex themes of faith, knowledge, and power. Umberto Eco's narrative skill and historical depth create an immersive reading experience that lingers long after the book is finished.",
						rating: 4,
						user: {
							id: "ca1f6b8e-fa79-4d48-8cbc-dd0ef439327e",
							userName: "lovesbooks",
						},
					},
				],
				bookCategories: [
					{
						id: "191dc240-b9dc-471d-9069-00096da808d5",
						category: {
							categoryName: "Detective Fiction",
						},
					},
					{
						id: "300b0f27-88a6-4ddf-b5a8-78a158dd580d",
						category: {
							categoryName: "Mystery",
						},
					},
					{
						id: "c972962a-6eb0-4a19-a648-64fe01618f8e",
						category: {
							categoryName: "Alternate History",
						},
					},
				],
			},
			{
				id: "66eece62-7a93-46a3-85c4-4ba15e646bd0",
				bookTitle: "White Teeth",
				pageCount: 448,
				publishDate: "2000-01-01",
				price: 14,
				shortDescription:
					"Zadie Smith's acclaimed debut novel is a vibrant, multigenerational story about two families in London, exploring Britain's relationship with people from formerly colonized countries in Africa, Asia, and the Caribbean.",
				longDescription:
					"$White Teeth, penned by the prodigious Zadie Smith, is an expansive, profound, and laugh-out-loud funny chronicle of contemporary multicultural London, told through the lives of two families – the Joneses and the Iqbals. The narrative weaves together a rich tapestry of characters that are quintessentially British, and yet, global in their shared histories and experiences. The novel explores an impressive range of themes including identity, race, class, friendship, cultural difference, familial ties, and the immigrant experience, all with an intoxicating blend of wit, intelligence, and compassion.\n\nThe narrative begins with Archie Jones, a middle-aged Englishman who has just been saved from a suicide attempt, and Samad Iqbal, a Bengali Muslim from Bangladesh, who both served together in World War II. Their lives are further intertwined when Archie marries Clara, a Jamaican woman half his age, and Samad marries Alsana, a woman chosen for him from back home. The storyline further extends to their children - Archie's daughter Irie, and Samad's twin sons, Magid and Millat. These characters, each intriguingly flawed and relatable, grapple with their cultural heritage and struggle to forge their individual identities in a society that often seems intent on boxing them into stereotypes. \n\n$White Teeth is more than just a saga of two families; it's a vibrant portrayal of the tumultuous, diverse city of London and its inhabitants. The novel pulses with the rhythms of the city and the voices of its people, capturing the multicultural melting pot that is modern-day London. Zadie Smith masterfully intertwines the personal and the political, blending humor and pathos, to tell a story that is at once epic in its scope and intimate in its human moments. The readers will be captivated by the sharp humor, intricate plot, and the vivid, unforgettable characters. It's a book that will make you laugh, think, and above all, recognize the universal human experience in its pages.",
				inventoryCount: 85,
				isbn: "9780375703867",
				author: {
					id: "e5b3b407-d66e-430e-bc05-8e74bdfea0a7",
					authorFirstName: "Zadie",
					authorLastName: "Smith",
				},
				bookReviews: [
					{
						id: "586dd64d-e1b2-4862-924e-e12b4f5c86e5",
						shortReview: "Ambitious but overwhelming.",
						review:
							"White Teeth is a sprawling epic that navigates themes of identity, culture, and belonging. Zadie Smith's ambitious storytelling and vivid characterizations make this novel a compelling read, although some may find its length and multiple narratives overwhelming.",
						rating: 3,
						user: {
							id: "3e4992a5-bde8-4df2-ae06-051d0b7a1805",
							userName: "booklover1",
						},
					},
					{
						id: "14f4c115-f21c-4791-9ec0-cc3cbd2f76e2",
						shortReview: "Brilliant and vibrant.",
						review:
							"White Teeth is a brilliant exploration of multiculturalism and the complexities of modern life. Zadie Smith's sharp wit and keen observation create a vibrant tapestry of characters and stories that resonate with readers from diverse backgrounds.",
						rating: 4,
						user: {
							id: "9c1b9d38-b2df-4a79-8091-8ef8fa821c88",
							userName: "reader123",
						},
					},
					{
						id: "bb994355-89a0-4145-9051-139116b3216e",
						shortReview: "Exhilarating and masterful.",
						review:
							"White Teeth is an exhilarating literary journey that captures the essence of multicultural London. Zadie Smith's sharp social commentary and richly drawn characters make this novel a true masterpiece of modern literature.",
						rating: 5,
						user: {
							id: "7bb8095f-c1a8-4307-b74f-2affe40bae4b",
							userName: "litlover88",
						},
					},
					{
						id: "67924c1e-742d-4783-848f-0213306c448f",
						shortReview: "Complex but overwhelming.",
						review:
							"White Teeth is a complex and ambitious novel that explores the intricacies of identity and culture. While Zadie Smith's writing is undeniably powerful, the sprawling narrative and multitude of characters may overwhelm some readers.",
						rating: 3,
						user: {
							id: "671b88b5-2cb1-43ff-9b2d-c19c6e319ef7",
							userName: "bookishgal",
						},
					},
				],
				bookCategories: [
					{
						id: "cd1ec4c9-0d4c-4810-9553-28d9507f2544",
						category: {
							categoryName: "Social Commentary",
						},
					},
					{
						id: "59fcddf4-f612-416a-82e8-d21757bb5331",
						category: {
							categoryName: "Cultural",
						},
					},
					{
						id: "94ee1ee0-1911-4201-8c87-25f49cf7162c",
						category: {
							categoryName: "Coming-of-Age",
						},
					},
				],
			},
			{
				id: "1e0c4f7a-c46c-4dad-97be-06061010c73a",
				bookTitle: "My Brilliant Friend",
				pageCount: 331,
				publishDate: "2011-01-01",
				price: 17,
				shortDescription:
					"The first book in Elena Ferrante's Neapolitan Novels, it chronicles the friendship between Elena Greco and Raffaella Cerullo from their childhoods in a poor neighborhood in Naples through their adult lives.",
				longDescription:
					'"My Brilliant Friend" by Elena Ferrante is a fascinating journey into the depths of a friendship that transcends the boundaries of time, space, and circumstance. The story unfolds in a poor yet vibrant neighborhood on the outskirts of post-war Naples, Italy. It is here that we meet our protagonists: Elena Greco, the book\'s narrator, a studious girl with a thirst for knowledge, and Raffaella "Lila" Cerullo, Elena\'s best friend, an uncannily brilliant and defiant child whose charisma and intelligence bewitch everyone around her.\n\nElena and Lila\'s friendship is a blend of rivalry and mutual admiration. Their lives are intertwined, their fortunes and misfortunes are shared. As they grow from girls to young women, they navigate their way through love, education, family crises, and the complexities of the world around them. Ferrante\'s storytelling is so vivid that readers can almost feel the cobblestones of the Neapolitan streets beneath their feet, hear the cacophony of the marketplace, and smell the comforting aroma of Italian cuisine wafting from the houses.\n\n"My Brilliant Friend" is more than just a story about friendship. It is an exploration of a post-war Italian society, a commentary on the role of women in that society, and a deep dive into the human psyche. It is the first novel in Ferrante\'s Neapolitan quartet, and it sets the stage for an epic saga of friendship, love, and the relentless march of time. The prose is lyrical, the characters are unforgettable, and the narrative is as compelling as it is emotional. This book is a testament to the power of female friendship and the indestructible bonds that tie us to our past.',
				inventoryCount: 80,
				isbn: "9781609450786",
				author: {
					id: "287c9417-f8c5-4967-9ee6-9df2f746a56a",
					authorFirstName: "Elena",
					authorLastName: "Ferrante",
				},
				bookReviews: [
					{
						id: "fdaee9fe-fda7-495a-b770-e4ea02523d16",
						shortReview: "Captivating and poignant.",
						review:
							"My Brilliant Friend is a captivating exploration of friendship, identity, and societal expectations. Elena Ferrante's richly textured prose and intimate portrayal of female friendship make this novel a poignant and unforgettable read.",
						rating: 4,
						user: {
							id: "550de341-e5c4-486f-b087-5ef77ff3a72b",
							userName: "bookworm",
						},
					},
				],
				bookCategories: [
					{
						id: "e34b95ac-8f48-4625-ae85-193c944af1a5",
						category: {
							categoryName: "Coming-of-Age",
						},
					},
					{
						id: "c57e7cc4-5222-43fa-87a0-63f53dac9799",
						category: {
							categoryName: "Cultural",
						},
					},
					{
						id: "d9d367f8-0b4b-4e44-a229-b320e587d656",
						category: {
							categoryName: "Literary Fiction",
						},
					},
				],
			},
			{
				id: "dca253be-4e17-4028-ab11-85fb94f33e98",
				bookTitle: "Angels & Demons",
				pageCount: 736,
				publishDate: "2000-04-01",
				price: 10.99,
				shortDescription:
					"In this thrilling novel by Dan Brown, Harvard symbologist Robert Langdon is summoned to a Swiss research facility to analyze a mysterious symbol seared into the chest of a murdered physicist. What follows is a breathtaking adventure that takes Langdon deep into the ancient world of the Illuminati, a legendary secret society with a history of violence and conspiracy.",
				longDescription:
					"In \"Angels & Demons,\" author Dan Brown plunges readers into an exhilarating fusion of history, science, and suspense. The protagonist, Robert Langdon, a renowned Harvard symbologist, is summoned to a Swiss research facility (CERN) to decode a mysterious symbol seared into the chest of a murdered physicist. What Langdon uncovers is unthinkable: the resurgence of an ancient secret brotherhood known as the Illuminati, a clandestine organization rumored to have surfaced from the shadows to carry out the final phase of its legendary vendetta against its sworn enemy, the Catholic Church.\n\nThe narrative takes a thrilling turn when it is revealed that the Illuminati have planted a time bomb in the heart of Vatican City. With the cardinals in conclave to elect the new Pope, the whole world is watching closely. Langdon, accompanied by the beautiful and enigmatic Vittoria Vetra, embarks on a frantic hunt through the crypts, catacombs, and forgotten cathedrals of Rome, following a 400-year-old trail of ancient symbols to the Illuminati's secret lair.\n\n\"Angels & Demons\" is a riveting, intellectual thriller that marries the eerie realms of science and religion. It's a heart-pounding race against time that challenges the reader's knowledge of history and symbols while questioning the very balance between faith and reason. With rich characterizations, meticulous research, and a plot that never lets the reader catch their breath, Dan Brown delivers a story that keeps us questioning until the very last page. This book is not just a novel; it's an immersive experience that will leave readers breathless and yearning for more.",
				inventoryCount: 55,
				isbn: "9780671027360",
				author: {
					id: "40134642-8951-49b0-8a4c-6772c4b421dd",
					authorFirstName: "Dan",
					authorLastName: "Brown",
				},
				bookReviews: [
					{
						id: "e52b37e7-b3c5-412a-9aac-d20d3a6a2eba",
						shortReview: "Fast-paced thriller.",
						review:
							"Angels & Demons is a fast-paced thriller that keeps readers on the edge of their seats. Dan Brown's intricate plot and suspenseful writing make this book a thrilling ride from start to finish.",
						rating: 4,
						user: {
							id: "de223b1f-28ef-4921-b846-0613747e1cee",
							userName: "iambook",
						},
					},
				],
				bookCategories: [
					{
						id: "997d340b-074a-4141-9a86-b085bab23d93",
						category: {
							categoryName: "Mystery",
						},
					},
					{
						id: "3369ee9b-bf23-4154-bdea-f43e0769d8a8",
						category: {
							categoryName: "Historical",
						},
					},
				],
			},
			{
				id: "fa66508f-11e2-44a9-9a69-8adb628df522",
				bookTitle: "Americanah",
				pageCount: 588,
				publishDate: "2013-05-14",
				price: 16,
				shortDescription:
					"A powerful story of love, race, and identity from the award-winning author Chimamanda Ngozi Adichie, 'Americanah' is a tale of a young Nigerian woman who emigrates to the United States for a university education and stays for work.",
				longDescription:
					'"Americanah" is a powerful tale of love, race, and identity by celebrated author Chimamanda Ngozi Adichie. It\'s a captivating narrative that primarily revolves around Ifemelu and Obinze, two young Nigerians who share a deep bond but are separated by the stark realities of their homeland and the world beyond. Their stories, which begin in military-ruled Lagos and extend to the bustling cities of America and London, offer a profound exploration of modern cultural experiences. Adichie\'s novel is a multi-layered, character-driven exploration of individuality and nationality, making it a must-read for those seeking to understand the varied human experience across different cultures.\n\nIfemelu, the novel\'s heroine, migrates to the United States for university studies, where she grapples with what it means to be black in a country fraught with racial tensions. Her journey is both external and internal, navigating the challenges of American culture while wrestling with her identity. This journey also leads her to start a successful blog, offering a critical, insightful, and often humorous commentary on race in America. In contrast, Obinze, who dreams of joining Ifemelu in America, finds himself undocumented and destitute in London, offering readers a poignant look at the often harsh realities faced by immigrants.\n\n"Americanah" is not just a story about love and longing, or immigration and identity, but also a profound social commentary on race and the idea of belonging. Adichie weaves a compelling narrative that is both heartwarming and heartbreaking, painting a vivid picture of our contemporary world. This novel provides an immersive reading experience that will resonate with readers, challenging their perspectives and leaving them with a deeper understanding of the intricacies of human experience and the complexities of cultural identity. Purchase "Americanah" to embark on a journey of love, self-discovery, and enlightenment.',
				inventoryCount: 70,
				isbn: "9780307455925",
				author: {
					id: "806eb25a-bd93-41ba-87ea-e2796f8be8ee",
					authorFirstName: "Chimamanda Ngozi",
					authorLastName: "Adichie",
				},
				bookReviews: [],
				bookCategories: [
					{
						id: "457bc8bc-62c5-4804-8b8a-e406d5b93d1b",
						category: {
							categoryName: "Cultural",
						},
					},
					{
						id: "0c6a95c6-72a4-4a35-9d23-e6b90194e59a",
						category: {
							categoryName: "Social Commentary",
						},
					},
					{
						id: "08bca267-c823-4f36-96af-4577a63c9b29",
						category: {
							categoryName: "Post-Colonial Literature",
						},
					},
				],
			},
			{
				id: "88814018-1039-4f93-aeac-dda2e321b287",
				bookTitle: "The Underground Railroad",
				pageCount: 320,
				publishDate: "2016-08-02",
				price: 16.95,
				shortDescription:
					"Colson Whitehead's Pulitzer Prize-winning novel is a magnificent, harrowing account of Cora, a slave on a cotton plantation in Georgia, and her journey to freedom via a secret network of tracks and tunnels beneath the Southern soil.",
				longDescription:
					"In \"The Underground Railroad\", renowned author Colson Whitehead crafts a haunting narrative of America's historical bedrock - slavery. This Pulitzer Prize-winning novel is not your standard historical tale; it boldly reimagines the Underground Railroad, the clandestine network that aided escaped slaves, as a literal subterranean train system. The story follows a young slave woman named Cora, who escapes her brutal existence on a Georgia cotton plantation, daringly boarding a northbound train on the Underground Railroad in search of freedom.\n\nCora's quest for freedom is a harrowing journey through different states, each representing a unique and surreal snapshot of racial inequality and injustice. From a South Carolina town with seemingly progressive racial policies but dark undercurrents of eugenics, to a North Carolina where black people are outlawed entirely, Whitehead paints a vivid, often brutal, picture of America's past. As Cora moves from state to state, she experiences the varied horrors and occasional kindnesses of an America distorted by white supremacy.\n\n\"The Underground Railroad\" is an engrossing blend of historical fiction and magical realism. It's a riveting exploration of the enduring impact of America's original sin, told through the lens of one woman’s desperate quest for freedom. Through Cora, Whitehead challenges us to confront the past and question the narratives we've been taught. This profound and powerful novel is not just a story of survival, but also a testament to the unquenchable human spirit's quest for freedom, dignity, and justice. It's a literary journey that promises to leave readers moved and enlightened.",
				inventoryCount: 75,
				isbn: "9780385542364",
				author: {
					id: "21ce8037-6c63-4a1e-9a4a-7300d12ff77d",
					authorFirstName: "Colson",
					authorLastName: "Whitehead",
				},
				bookReviews: [
					{
						id: "35bf80d4-00f2-420a-ab3d-b62773b59f1a",
						shortReview: "Powerful and moving.",
						review:
							"The Underground Railroad is a powerful and moving novel that offers a gripping portrayal of the horrors of slavery in America. Colson Whitehead's writing is both haunting and lyrical, making this book a must-read for anyone interested in American history.",
						rating: 5,
						user: {
							id: "7c7a29c9-a713-440b-9b85-eb5033f02641",
							userName: "avidreader7",
						},
					},
					{
						id: "cb3ded68-6dff-4ebd-a4a6-93382c12cf50",
						shortReview: "Compelling and thought-provoking.",
						review:
							"The Underground Railroad is a compelling and thought-provoking novel that explores the harsh realities of slavery in America. Colson Whitehead's vivid storytelling and well-developed characters make this book an engrossing read from start to finish.",
						rating: 4,
						user: {
							id: "de223b1f-28ef-4921-b846-0613747e1cee",
							userName: "iambook",
						},
					},
					{
						id: "a124fefe-91be-44d8-a5f7-232ae6f31cbb",
						shortReview: "Important but confusing.",
						review:
							"The Underground Railroad is an important and impactful novel that sheds light on a dark chapter of American history. While Colson Whitehead's prose is undeniably powerful, the nonlinear narrative may be confusing for some readers.",
						rating: 3,
						user: {
							id: "ca1f6b8e-fa79-4d48-8cbc-dd0ef439327e",
							userName: "lovesbooks",
						},
					},
					{
						id: "e8693a9e-2cc7-41f0-b4fc-f7ec9d286aa7",
						shortReview: "Masterfully crafted and profound.",
						review:
							"The Underground Railroad is a masterfully crafted novel that vividly captures the struggles of enslaved people seeking freedom. Colson Whitehead's storytelling prowess and vivid imagery make this book a profound and unforgettable read.",
						rating: 5,
						user: {
							id: "550de341-e5c4-486f-b087-5ef77ff3a72b",
							userName: "bookworm",
						},
					},
				],
				bookCategories: [
					{
						id: "ddf3e3bf-222a-4259-9501-7848cd0b438d",
						category: {
							categoryName: "Historical",
						},
					},
					{
						id: "94f5cd3a-5268-476d-87b3-d32238bd4544",
						category: {
							categoryName: "Social Commentary",
						},
					},
					{
						id: "0c883930-9f72-473c-9f02-2d0f5c238428",
						category: {
							categoryName: "Historical Fiction",
						},
					},
				],
			},
			{
				id: "6201dafd-9788-4181-9eea-20719a9653df",
				bookTitle: "Nausea",
				pageCount: 178,
				publishDate: "1938-01-01",
				price: 15.95,
				shortDescription:
					"Jean-Paul Sartre's philosophical novel that introduces the concept of existentialism through the experience of its protagonist, Antoine Roquentin, who confronts the absurdity of existence.",
				longDescription:
					'"Nausea" is a thought-provoking novel by Jean-Paul Sartre, one of the leading figures in 20th-century French philosophy and a pioneer of existentialism. The book is a meticulous exploration of the human condition and our relationship with the world around us. It centers around Antoine Roquentin, a French writer who is grappling with a profound existential crisis. Perhaps one of the most potent portrayals of human alienation and existential dread, Roquentin\'s journey through the abyss of existential nausea is as harrowing as it is enlightening.\n\nRoquentin, the protagonist, lives in the small French seaport town of Bouville, spending his time in a solitary exploration of his memories. His life takes a dramatic turn when he begins to be afflicted by a condition he refers to as "Nausea". This peculiar sensation is a profound and overpowering sense of absurdity and meaningless, a deep-seated realization of the raw, indifferent existence of the world that surrounds him. This feeling of existential Nausea forces Roquentin to question his beliefs, his existence, and the very fabric of reality itself.\n\n"Nausea" is a brilliantly written novel that plunges its readers into the depths of existential philosophy. Sartre\'s masterful blend of vivid prose, profound philosophical insights, and a compelling narrative makes this book a must-read for anyone interested in philosophy or French literature. Though the themes explored in the novel are undeniably heavy, the eloquence of Sartre\'s writing and the relatability of Roquentin\'s existential crisis make "Nausea" a deeply engaging and thought-provoking read. Whether you\'re a seasoned philosopher or a casual reader, "Nausea" is bound to leave you with a new perspective on life, existence, and the human condition.\n',
				inventoryCount: 90,
				isbn: "9780811220309",
				author: {
					id: "703688cc-7bd1-4f94-bbf2-fb77519301b8",
					authorFirstName: "Jean-Paul",
					authorLastName: "Sartre",
				},
				bookReviews: [],
				bookCategories: [
					{
						id: "4a30db61-b4da-4c23-a097-5efd6dedbdd0",
						category: {
							categoryName: "Philosophical",
						},
					},
					{
						id: "646c8404-1289-42e7-988c-9deb7ddaaed2",
						category: {
							categoryName: "Existential Fiction",
						},
					},
					{
						id: "399d236f-07cb-4a31-9d99-ad2e5c709455",
						category: {
							categoryName: "Philosophical Fiction",
						},
					},
				],
			},
			{
				id: "980a7310-f81e-4e5f-9cde-ee0a440c0335",
				bookTitle: "The Second Sex",
				pageCount: 800,
				publishDate: "1949-01-01",
				price: 20,
				shortDescription:
					"In this seminal work, Simone de Beauvoir analyzes the female condition and the form of oppression known as patriarchy, presenting a detailed discussion of women's roles and status in society.",
				longDescription:
					'"The Second Sex," penned by the influential philosopher Simone de Beauvoir, is a groundbreaking exploration of women\'s oppression throughout history, a seminal piece of feminist literature that has shaped and continues to inform our discourse on gender. The book is a powerful examination of how societies, across time and cultures, have systematically devalued and marginalized women, relegating them to the role of \'the other\' in relation to men. Beauvoir\'s extensive research and eloquent prose delve into areas such as biology, psychoanalysis, mythology, and literature, incorporating a vast array of sources to support her arguments.\n\nThe book is divided into two enriching volumes: "Facts and Myths" and "Lived Experience." The first volume explores the perception and treatment of women as the \'other,\' examining historical, scientific, and cultural perspectives. Here, Beauvoir explores how biological, psychological, and social factors have been used to justify the inferior status of women in society. She dissects various myths surrounding femininity, shedding light on the ways in which they have been used to perpetuate women\'s oppression. \n\nThe second volume, "Lived Experience," investigates the lived realities of women from birth through old age, providing an unflinchingly honest depiction of the female condition. Beauvoir discusses the stages of a woman\'s life in a male-dominated society, from childhood to adolescence, from adulthood to old age. Each stage is examined in relation to the societal expectations and limitations placed on women. "The Second Sex" is not only a critique of the patriarchal system but also a call to arms, urging women to transcend societal constructs and assert their freedom. This book is essential and compelling reading for anyone interested in gender studies, philosophy, and sociology.',
				inventoryCount: 80,
				isbn: "9780307277787",
				author: {
					id: "6cc2d004-0350-47ef-b9dc-c75ae56236c7",
					authorFirstName: "Simone de",
					authorLastName: "Beauvoir",
				},
				bookReviews: [
					{
						id: "0328e2a2-a296-4b20-a822-8685912e9d07",
						shortReview: "Groundbreaking and relevant.",
						review:
							"The Second Sex is a groundbreaking work that remains relevant in its exploration of gender and society. Simone de Beauvoir's thorough analysis and critical insights make this book essential reading for anyone interested in feminist theory.",
						rating: 4,
						user: {
							id: "9c1b9d38-b2df-4a79-8091-8ef8fa821c88",
							userName: "reader123",
						},
					},
					{
						id: "28bde212-5528-4d53-8ff4-c0388b03e3a4",
						shortReview: "Comprehensive but challenging.",
						review:
							"The Second Sex offers a comprehensive examination of the status of women in society, but its dense philosophical prose may be challenging for some readers to digest. Simone de Beauvoir's insights, however, are invaluable for understanding the complexities of gender.",
						rating: 3,
						user: {
							id: "85e505f3-d55e-45cb-8d38-f91ae9164d17",
							userName: "jenreads",
						},
					},
					{
						id: "23a675c5-08ff-4dee-9fc5-71ad1210f739",
						shortReview: "Essential and timeless.",
						review:
							"The Second Sex is an essential feminist text that offers a profound analysis of the oppression of women throughout history. Simone de Beauvoir's eloquent prose and incisive critique make this book a timeless classic that continues to inspire generations of readers.",
						rating: 5,
						user: {
							id: "3e4992a5-bde8-4df2-ae06-051d0b7a1805",
							userName: "booklover1",
						},
					},
				],
				bookCategories: [
					{
						id: "25c4bddd-d083-4d22-b345-db7858db8ff8",
						category: {
							categoryName: "Feminist Theory",
						},
					},
					{
						id: "70c4cc53-c68e-45bd-9144-5c060903c623",
						category: {
							categoryName: "Feminist Literature",
						},
					},
					{
						id: "b8c682d7-8400-468e-80cc-c0691638e7b7",
						category: {
							categoryName: "Philosophical",
						},
					},
				],
			},
			{
				id: "4f7ceba9-7c72-44dc-8e18-28b2fc3a4553",
				bookTitle: "Charlie and the Chocolate Factory",
				pageCount: 160,
				publishDate: "1964-01-01",
				price: 7.99,
				shortDescription:
					"Roald Dahl's famous story of Charlie Bucket, the five Golden Tickets, and Willy Wonka's mysterious chocolate factory has delighted children and adults alike for generations.",
				longDescription:
					'Welcome to the enchanting and whimsical world of “Charlie and the Chocolate Factory” by Roald Dahl. This timeless tale begins with the introduction of Charlie Bucket, a young boy living in abject poverty, with his parents and four bedridden grandparents. Their house, on the edge of a great town, is tiny and they struggle for meals, but their love for each other is plentiful. Nearby, a colossal chocolate factory, owned by the eccentric and mysterious chocolatier Willy Wonka, operates without any workers visible, yet produces the most marvelous chocolates and candies in the entire world. The factory, a source of wonder and intrigue, is shrouded in mystery as it has remained closed to the public for years.\n\nThe story takes an exciting turn when Mr. Willy Wonka announces a contest, five golden tickets hidden inside his famous Wonka bars, with winners getting a lifetime supply of chocolates and a tour of the elusive factory. The world is gripped by a frenzied obsession to find these tickets, and one by one, they are found by four spoiled and obnoxious children from different parts of the world. Amidst the mayhem, Charlie, with a stroke of luck, finds the last golden ticket, soon to embark on an adventure that would change his life forever.\n\nInside the factory, they discover a realm of pure imagination, filled with chocolate rivers, edible landscapes, and Oompa Loompas, the factory’s diminutive and joyous workers. As the tour progresses, the four ill-mannered children meet their comedic comeuppances due to their greed and disobedience. Dahl\'s vivid imagination and his cautionary tales about the consequences of greed and selfishness come alive, all the while Charlie’s humility and kindness shine through, catching the attention of Mr. Wonka. This book, filled with magic, laughter, and life lessons, will transport you to a world of sweetness, where dreams really do come true. Step into the pages of "Charlie and the Chocolate Factory" and embark on this delectable adventure!',
				inventoryCount: 85,
				isbn: "9780142410318",
				author: {
					id: "a600fd74-47d9-46dd-82e0-2e6fdd14b8b7",
					authorFirstName: "Roald",
					authorLastName: "Dahl",
				},
				bookReviews: [
					{
						id: "26474bff-82fe-4fad-a44a-ee0c8611575e",
						shortReview: "Delightful and whimsical.",
						review:
							"Charlie and the Chocolate Factory is a delightful and whimsical tale that sparks the imagination. Roald Dahl's colorful characters and imaginative world-building make this book a timeless classic for readers of all ages.",
						rating: 4,
						user: {
							id: "7bb8095f-c1a8-4307-b74f-2affe40bae4b",
							userName: "litlover88",
						},
					},
				],
				bookCategories: [
					{
						id: "86a234da-bc1e-4f77-a021-2a2ca5ca960b",
						category: {
							categoryName: "Children’s Literature",
						},
					},
					{
						id: "6fd0a487-d1e7-4bcd-a69e-be97b2ab0243",
						category: {
							categoryName: "Children’s Fantasy",
						},
					},
					{
						id: "c9333bc8-be0d-4b3d-958f-62583797e444",
						category: {
							categoryName: "Satire",
						},
					},
				],
			},
			{
				id: "cac758ad-3381-4182-a6ea-0022b083495a",
				bookTitle: "The Talented Mr. Ripley",
				pageCount: 272,
				publishDate: "1955-01-01",
				price: 14,
				shortDescription:
					"Patricia Highsmith's psychological thriller introduces Tom Ripley, a young striver newly arrived in the heady world of Manhattan, who becomes entangled in a complex web of deceit.",
				longDescription:
					'The "Talented Mr. Ripley" by Patricia Highsmith is a gripping tale of deception, identity theft, and psychological manipulation that will keep readers on their toes from the first page to the last. The story introduces us to Tom Ripley, a charming, intelligent, but also deeply flawed character who leads a life of petty theft and deception in 1950s New York. When a wealthy shipbuilder, Herbert Greenleaf, mistakenly believes Tom to be a close friend of his wayward son, Dickie, he offers Tom an all-expense-paid trip to Italy to persuade Dickie to return home. An offer which Tom sees as an opportunity to escape his dreary life and step into a world of wealth and opulence. \n\nIn the sunny, picturesque locales of Italy, Tom starts to get a taste of Dickie’s affluent lifestyle, and he becomes enamored with it. He grows close to Dickie and his friend, Marge, but his obsessive desire to maintain his new life leads him down a dark path. When it becomes apparent that Dickie is growing tired of him and intends to cut him off, Tom makes a chilling decision. He murders Dickie and takes over his identity, living off the latter\'s wealth and effectively erasing his previous existence as a small-time con artist. \n\n"The Talented Mr. Ripley" is an enthralling exploration of a sociopath\'s mind, a suspenseful narrative that examines the lengths to which one man will go to attain a life of luxury. Highsmith’s writing is sharp, her characters are well-developed, and the atmosphere she creates is both intoxicating and unsettling. This book is a must-read for anyone who enjoys psychological thrillers with complex characters and intricate plot twists. As you dive into this world of deceit, murder, and stolen identity, you\'ll find yourself questioning your moral compass and sympathizing with the devilishly talented Mr. Ripley.',
				inventoryCount: 75,
				isbn: "9780393332148",
				author: {
					id: "388a8a87-65ea-4e60-ad1b-2e2fc6131f44",
					authorFirstName: "Patricia",
					authorLastName: "Highsmith",
				},
				bookReviews: [
					{
						id: "781dac89-a557-4b31-92ac-0a69fe716315",
						shortReview: "Gripping and masterful.",
						review:
							"The Talented Mr. Ripley is a gripping psychological thriller that keeps you on the edge of your seat. Patricia Highsmith's masterful storytelling and complex characters make this book a must-read for fans of the genre.",
						rating: 4,
						user: {
							id: "3e4992a5-bde8-4df2-ae06-051d0b7a1805",
							userName: "booklover1",
						},
					},
					{
						id: "4fad9f3f-2d54-4fbb-8874-4283439da87b",
						shortReview: "Intriguing but slow-paced.",
						review:
							"The Talented Mr. Ripley is an intriguing novel with a unique premise, but the pacing may feel slow for some readers. Patricia Highsmith's exploration of identity and morality, however, is thought-provoking.",
						rating: 3,
						user: {
							id: "8410ebc7-bddd-4cff-a651-24b74f193192",
							userName: "bibliophile",
						},
					},
					{
						id: "e66d8709-55a1-4a62-9ea3-84b14abafa2c",
						shortReview: "Masterpiece of suspense.",
						review:
							"The Talented Mr. Ripley is a masterpiece of suspense and psychological tension. Patricia Highsmith's portrayal of Tom Ripley's descent into amorality is both chilling and captivating, making this book an unforgettable read.",
						rating: 5,
						user: {
							id: "550de341-e5c4-486f-b087-5ef77ff3a72b",
							userName: "bookworm",
						},
					},
					{
						id: "b27227b3-b8d8-4ea3-a083-bec8501e7b40",
						shortReview: "Riveting and unsettling.",
						review:
							"The Talented Mr. Ripley is a riveting and unsettling thriller that delves into the depths of human nature. Patricia Highsmith's exploration of obsession and deception is as thought-provoking as it is chilling.",
						rating: 4,
						user: {
							id: "85e505f3-d55e-45cb-8d38-f91ae9164d17",
							userName: "jenreads",
						},
					},
				],
				bookCategories: [
					{
						id: "2ce9d7ec-03d1-45e2-8241-21473f9003e1",
						category: {
							categoryName: "Mystery",
						},
					},
					{
						id: "056ecca5-68cc-4227-a1d1-8610dc0bc0b7",
						category: {
							categoryName: "Psychological Thriller",
						},
					},
					{
						id: "65acd61e-82b5-46f1-97a2-28a455b7676e",
						category: {
							categoryName: "Psychological Fiction",
						},
					},
				],
			},
			{
				id: "744ebc9e-f9bc-436e-8fbc-358b21caf417",
				bookTitle: "Night",
				pageCount: 120,
				publishDate: "1956-01-01",
				price: 9.95,
				shortDescription:
					"Elie Wiesel's masterful work is a poignant and powerful autobiographical account of his survival as a teenager in the Nazi death camps.",
				longDescription:
					'In "Night" by Elie Wiesel, readers are plunged into the dark abyss of the Holocaust through the eyes of a teenage boy. This memoir unfolds the harrowing journey of Wiesel and his father as they struggle against the monstrous machinery of the Nazi concentration camps. The story begins in Wiesel\'s hometown of Sighet, Transylvania, where he lived a quiet, religious life studying the Talmud and Kabbalah. However, this tranquil existence is shattered when the Nazis invade, and Wiesel, his family, and the rest of the Jewish community are transported to Auschwitz, the first of many concentration camps they would endure.\n\nIn Auschwitz, Wiesel\'s mother and youngest sister are immediately taken to the gas chambers, leaving him and his father alone in a world that has lost all humanity. The narrative follows their heart-wrenching fight for survival, as they grapple with brutal conditions, starvation, disease, and the ever-present specter of death. Wiesel’s narrative is an unflinching portrayal of the horrors inflicted by the Nazis, the agonizing loss of faith, and the transformation of relationships under extreme duress. The bond between Wiesel and his father intensifies, becoming the lifeline that keeps both men alive, though it is a connection fraught with guilt, anguish, and a desperate, clawing hope.\n\n"Night" is more than just a historical account; it is a profound exploration of the human capacity for both unimaginable cruelty and unbreakable spirit. Wiesel’s sparse, haunting prose captures the unspeakable atrocities of the Holocaust while also exploring existential questions about God, humanity, and individual identity. This powerful memoir is not just a testament to the survivors of the Holocaust, but a call to all readers to remember this dark period in human history, to learn from it, and to uphold the dignity and value of all human life.\n',
				inventoryCount: 100,
				isbn: "9780374500016",
				author: {
					id: "cbcf1268-c931-4696-a833-b0fa6dbc28b0",
					authorFirstName: "Elie",
					authorLastName: "Wiesel",
				},
				bookReviews: [
					{
						id: "ccc77deb-1388-4add-99d4-925fdc6282e0",
						shortReview: "Powerful and haunting.",
						review:
							"Night is a powerful and haunting memoir that offers a firsthand account of the horrors of the Holocaust. Elie Wiesel's prose is both eloquent and deeply moving, making this book an essential read for understanding the human experience during wartime.",
						rating: 5,
						user: {
							id: "ca1f6b8e-fa79-4d48-8cbc-dd0ef439327e",
							userName: "lovesbooks",
						},
					},
					{
						id: "99ed6abf-2979-45ce-9e45-8edb1f0866df",
						shortReview: "Harrowing and unforgettable.",
						review:
							"Night is a harrowing and unforgettable memoir that vividly captures the atrocities of the Holocaust. Elie Wiesel's firsthand account of survival and loss serves as a stark reminder of the resilience of the human spirit.",
						rating: 4,
						user: {
							id: "7c7a29c9-a713-440b-9b85-eb5033f02641",
							userName: "avidreader7",
						},
					},
				],
				bookCategories: [
					{
						id: "48f70493-8248-41c2-8868-e2e28d9c71ec",
						category: {
							categoryName: "Coming-of-Age",
						},
					},
					{
						id: "484db4af-b217-4d28-b919-c371dbd8a53d",
						category: {
							categoryName: "Memoir",
						},
					},
					{
						id: "4ee3b227-2b9a-465a-a51a-075e5471bf92",
						category: {
							categoryName: "Tragedy",
						},
					},
				],
			},
			{
				id: "bcbec230-2e3f-42fc-86ad-77888be36f86",
				bookTitle: "Where the Wild Things Are",
				pageCount: 48,
				publishDate: "1963-11-09",
				price: 8.99,
				shortDescription:
					"One night Max puts on his wolf suit and makes mischief of one kind and another, so his mother calls him 'Wild Thing' and sends him to bed without his supper. That night a forest begins to grow in Max's room and an adventure awaits him that is nothing short of magical.",
				longDescription:
					"\"Where the Wild Things Are\" is a captivating exploration of the vibrant world of a child's imagination. The story follows Max, a young boy with a mischievous spirit and boundless energy. After a day filled with unruly behavior and dressing up as a wolf, Max is sent to his room without supper. But instead of this being the end of his adventures, it’s the beginning of a magical journey, as his room transforms into a mysterious, wild jungle, teeming with strange creatures and exotic landscapes.\n\nIn this new world, Max is not a mere boy; he is a king. He encounters the Wild Things, towering and terrifying beasts that, instead of posing a threat, become subjects in Max's kingdom. As a ruler, Max leads the creatures in wild rumpuses, exploring the untamed lands of his kingdom, and basking in the freedom his imagination has gifted him. However, soon Max finds that being a king isn't all about wild adventures and starts to yearn for the warmth and comfort of home.\n\n\"Where the Wild Things Are\" is more than just a children's book; it's a profound exploration of emotions, rebellion, and the power of imagination. Maurice Sendak, the author, beautifully blends the lines between fantasy and reality, capturing the essence of childhood through stunning illustrations and simple yet poetic text. This timeless masterpiece is an invitation for readers of all ages to discover and embrace the wild thing within themselves. Delve into the pages and embark on a fantastical journey that celebrates the wild, wonderful world of childhood imagination.",
				inventoryCount: 62,
				isbn: "9780064431781",
				author: {
					id: "36c3a32c-7c4a-459e-a5d1-ecb0b0f2fc9a",
					authorFirstName: "Maurice",
					authorLastName: "Sendak",
				},
				bookReviews: [
					{
						id: "8c27a4f9-af30-454c-aa9f-47b575b758c4",
						shortReview: "Whimsical but simplistic.",
						review:
							"Where the Wild Things Are is a whimsical and imaginative children's book that sparks the imagination. Maurice Sendak's illustrations are charming, but the story may be too simplistic for older readers.",
						rating: 3,
						user: {
							id: "9c1b9d38-b2df-4a79-8091-8ef8fa821c88",
							userName: "reader123",
						},
					},
					{
						id: "6c61b5e2-3eba-42ce-bd23-6e02b134d65f",
						shortReview: "Timeless classic.",
						review:
							"Where the Wild Things Are is a timeless classic that celebrates the power of imagination. Maurice Sendak's whimsical illustrations and heartfelt story resonate with readers of all ages, making this book a beloved favorite.",
						rating: 5,
						user: {
							id: "7bb8095f-c1a8-4307-b74f-2affe40bae4b",
							userName: "litlover88",
						},
					},
				],
				bookCategories: [
					{
						id: "2290691a-6edf-4513-958e-3659f84f9b7d",
						category: {
							categoryName: "Children’s Literature",
						},
					},
					{
						id: "61fc09fc-07de-479a-ad7e-dff790984cb0",
						category: {
							categoryName: "Children’s Fantasy",
						},
					},
					{
						id: "22a6da30-92a0-4b40-b568-06ce2a519715",
						category: {
							categoryName: "Satire",
						},
					},
				],
			},
			{
				id: "13e2d36c-fca8-4efc-8612-d12bd473c31c",
				bookTitle: "In the Night Kitchen",
				pageCount: 38,
				publishDate: "1970-10-28",
				price: 7.99,
				shortDescription:
					"When Mickey falls out of bed and lands in the Night Kitchen, he travels through an amazing dream adventure filled with bakers made of bread, a wild journey in an empty batter bowl, and some very close calls with the oven's blazing heat.",
				longDescription:
					'"In the Night Kitchen" is an enchanting, dreamy tale that transports young readers into the magical world of the Night Kitchen where anything is possible. Maurice Sendak, the award-winning author and illustrator, masterfully crafts this surreal adventure that captures the imagination and curiosity of children. The story follows a little boy named Mickey, who embarks on a fantastical journey in his dreams, taking the readers through a landscape filled with whimsical details that are sure to captivate their attention.\n\nOne night, Mickey is awoken by a loud noise and suddenly finds himself tumbling into the Night Kitchen. He is then transformed into a dough by three amusing bakers who mistake him for milk, intending to bake him into their morning cake. With quick thinking and courage, Mickey manages to escape from this sticky situation and embarks on a remarkable adventure. He soars through a cityscape made of pantry items, piloting a plane made of bread dough, in a quest to find milk for the hungry bakers.\n\n"In the Night Kitchen" is not merely a bedtime story; it\'s a celebration of a child\'s imagination, resilience, and ingenuity. Sendak\'s distinctive illustrations, filled with delightful and curious details, perfectly complement the narrative, making this book a visual treat. The story has a rhythmic, musical quality to it, making it an enjoyable read-aloud experience. This book is sure to stir the imagination of young readers, and make them look forward to their dreams, where they too can embark on their own extraordinary adventures.',
				inventoryCount: 47,
				isbn: "9780060266684",
				author: {
					id: "36c3a32c-7c4a-459e-a5d1-ecb0b0f2fc9a",
					authorFirstName: "Maurice",
					authorLastName: "Sendak",
				},
				bookReviews: [
					{
						id: "c49a0239-03e3-45d9-877d-d969250becb9",
						shortReview: "Delightful and imaginative.",
						review:
							"In the Night Kitchen is a delightful children's book with stunning illustrations and a whimsical storyline. Maurice Sendak's creativity shines through in this imaginative tale that captures the magic of childhood.",
						rating: 5,
						user: {
							id: "3e4992a5-bde8-4df2-ae06-051d0b7a1805",
							userName: "booklover1",
						},
					},
					{
						id: "f56e4706-bfcf-4e8e-8366-2547b0446eca",
						shortReview: "Charming and captivating.",
						review:
							"In the Night Kitchen is a charming book that sparks the imagination and encourages creativity. Maurice Sendak's illustrations are captivating, and the story is both entertaining and educational.",
						rating: 4,
						user: {
							id: "9c1b9d38-b2df-4a79-8091-8ef8fa821c88",
							userName: "reader123",
						},
					},
					{
						id: "5f71bb51-75ad-4292-aa9c-c1a5620e7d5d",
						shortReview: "Interesting but confusing.",
						review:
							"In the Night Kitchen is an interesting book with unique illustrations, but the storyline may be confusing for young readers. Maurice Sendak's creativity is evident, but the execution falls short in some aspects.",
						rating: 3,
						user: {
							id: "8410ebc7-bddd-4cff-a651-24b74f193192",
							userName: "bibliophile",
						},
					},
					{
						id: "a7da365a-64d1-44b6-8359-15de2e5a50ac",
						shortReview: "Classic and vibrant.",
						review:
							"In the Night Kitchen is a classic children's book that stands the test of time. Maurice Sendak's imaginative storytelling and vibrant illustrations make this book a must-read for children of all ages.",
						rating: 5,
						user: {
							id: "550de341-e5c4-486f-b087-5ef77ff3a72b",
							userName: "bookworm",
						},
					},
				],
				bookCategories: [
					{
						id: "0897cdd3-4932-4edd-aaf3-44a650360dea",
						category: {
							categoryName: "Children’s Literature",
						},
					},
					{
						id: "8a615bce-e4e2-4677-b5ff-01411e6e278e",
						category: {
							categoryName: "Children’s Fantasy",
						},
					},
					{
						id: "9cced08a-75f0-4365-b6e3-2dd018172cfa",
						category: {
							categoryName: "Satire",
						},
					},
				],
			},
			{
				id: "53e2bf04-958a-49c4-a21a-191a3e8a5e1d",
				bookTitle: "The Giving Tree",
				pageCount: 64,
				publishDate: "1964-10-07",
				price: 10.99,
				shortDescription:
					"This beloved classic celebrates the gift of giving and the wise generosity of a tree that gives everything it has to a young boy as he grows older. This heartwarming story teaches the importance of selflessness, sacrifice, and unconditional love.",
				longDescription:
					"\"The Giving Tree\" is a poignant tale of an unswerving bond and enduring love between a tree and a boy, told in the gentle narrative style of Shel Silverstein. This heartfelt story begins when the boy is young, and the tree willingly provides everything it has to offer to keep the boy happy. The tree gives the boy its apples to sell, its branches to build with, and its trunk to carve a boat, always sacrificing its own needs for the boy's happiness. The reader is taken on a journey through the boy's life, exploring themes of friendship, selflessness, and the tender complexities of love.\n\nAs the boy grows older and his needs change, so does the tree's offering. The tree's selfless acts of love manifest in Silverstein's simple yet powerful illustrative style, evoking a range of emotions from joy to sorrow. The tree, which once stood tall and full of life, gradually becomes a stump, having given everything it had to the boy it loved so dearly. Yet, the tree continues to find joy in being able to provide, no matter how small the offering may be. \n\n\"The Giving Tree\" is a timeless story that transcends age and generation, resonating with both children and adults. It is a profound exploration of love and sacrifice, serving as a reminder of the importance of giving, receiving, and appreciating. This beautifully written and illustrated book challenges readers to reflect upon their relationships and the nature of unconditional love. The blend of simplicity and depth makes \"The Giving Tree\" an absolute must-read that will tug at your heartstrings and stay with you long after you've turned the last page.",
				inventoryCount: 89,
				isbn: "9780060256654",
				author: {
					id: "c9d35043-73dc-4dcb-8ff4-8f16968e6c56",
					authorFirstName: "Shel",
					authorLastName: "Silverstein",
				},
				bookReviews: [
					{
						id: "c6fbc565-29e4-4949-a24e-b04814c94cd3",
						shortReview: "Heartwarming and profound.",
						review:
							"The Giving Tree is a heartwarming story that teaches valuable lessons about selflessness and generosity. Shel Silverstein's simple yet profound tale resonates with readers of all ages, making it a timeless classic.",
						rating: 5,
						user: {
							id: "7c7a29c9-a713-440b-9b85-eb5033f02641",
							userName: "avidreader7",
						},
					},
					{
						id: "9c21d355-5e97-459e-82cd-29084ea451a1",
						shortReview: "Touching and memorable.",
						review:
							"The Giving Tree is a touching story that explores themes of love and sacrifice. Shel Silverstein's poignant illustrations and simple prose make this book a memorable read for both children and adults.",
						rating: 4,
						user: {
							id: "671b88b5-2cb1-43ff-9b2d-c19c6e319ef7",
							userName: "bookishgal",
						},
					},
					{
						id: "e82396e7-a298-490c-ac2e-ae4d1e3fb117",
						shortReview: "Bittersweet with beautiful illustrations.",
						review:
							"The Giving Tree is a bittersweet story with beautiful illustrations, but the narrative may feel overly simplistic for adult readers. Shel Silverstein's message of selflessness is clear, but the execution lacks depth.",
						rating: 3,
						user: {
							id: "7bb8095f-c1a8-4307-b74f-2affe40bae4b",
							userName: "litlover88",
						},
					},
				],
				bookCategories: [
					{
						id: "cc1f85e8-df3d-4c91-8343-707e5df5cb43",
						category: {
							categoryName: "Children’s Literature",
						},
					},
					{
						id: "d72b010d-69b5-4f23-bb13-5b283b2c12e9",
						category: {
							categoryName: "Inspirational",
						},
					},
				],
			},
			{
				id: "048fe0a4-b73f-41b0-8c70-e82c7dd9c401",
				bookTitle: "Where the Sidewalk Ends",
				pageCount: 176,
				publishDate: "1974-01-01",
				price: 12.99,
				shortDescription:
					"This classic poetry collection is a celebration of childhood, imagination, and the everyday wonders of life. With whimsical illustrations and playful verses, Shel Silverstein invites readers on a magical journey through a world of wonder and possibility.",
				longDescription:
					"\"Where the Sidewalk Ends\" is a whimsical journey through the magical world of poetry penned by the renowned author, Shel Silverstein. This enchanting collection of poems and illustrations is a feast for the imagination, transporting readers both young and old to a place where fantasy and reality blend seamlessly, and every page turn reveals a new adventure. Silverstein's unique blend of humor, pathos, and insight is sure to captivate readers, making this book a timeless classic that has the power to ignite the spark of creativity and imagination in anyone who dares to journey to the place where the sidewalk ends.\n\nThe book is a glorious mix of different styles of poetry, each accompanied by Silverstein's own quirky, monochromatic illustrations. From the hilarious antics of Sarah Cynthia Sylvia Stout who would not take the garbage out, to the profound wisdom of The Giving Tree, Silverstein delves into a variety of themes that touch the heart and provoke the mind. His ability to weave intricate tales with simple verses is truly remarkable, making each poem a treasure trove of discovery. Whether it's exploring the absurdity of everyday life or confronting the complexities of human emotions, Silverstein's poems are a delightful blend of wit, wisdom, and whimsy.\n\n\"Where the Sidewalk Ends\" is more than just a book of poems. It's a journey into the depths of imagination, a celebration of childhood innocence, and a reflection on life's profound truths. It's a book that encourages readers to look at the world with a sense of wonder and curiosity, to question, to dream, and to believe in the impossible. With Silverstein as your guide, you're invited to embark on an unforgettable journey to a world where the mundane meets the magical, where the ordinary becomes extraordinary, and where the sidewalk ends. This is a book that promises to enchant, inspire, and delight readers of all ages, making it a must-have addition to any book collection.",
				inventoryCount: 75,
				isbn: "9780060256692",
				author: {
					id: "c9d35043-73dc-4dcb-8ff4-8f16968e6c56",
					authorFirstName: "Shel",
					authorLastName: "Silverstein",
				},
				bookReviews: [
					{
						id: "742aa735-3154-49b1-9451-870ef3edb2ed",
						shortReview: "Whimsical and delightful.",
						review:
							"Where the Sidewalk Ends is a whimsical collection of poems that delights readers with its imaginative language and playful illustrations. Shel Silverstein's wit and charm shine through in each poem, making this book a joy to read.",
						rating: 4,
						user: {
							id: "85e505f3-d55e-45cb-8d38-f91ae9164d17",
							userName: "jenreads",
						},
					},
					{
						id: "e34c43a6-0188-477a-90f7-774210f5a05c",
						shortReview: "Timeless classic.",
						review:
							"Where the Sidewalk Ends is a timeless classic that sparks the imagination and encourages creativity in readers of all ages. Shel Silverstein's whimsical poems and illustrations captivate the heart and mind, making this book a beloved favorite.",
						rating: 5,
						user: {
							id: "de223b1f-28ef-4921-b846-0613747e1cee",
							userName: "iambook",
						},
					},
				],
				bookCategories: [
					{
						id: "6e14e89f-e7db-472e-acf5-9a2f672222ac",
						category: {
							categoryName: "Poetry",
						},
					},
					{
						id: "623f902c-3850-4b99-8711-8484e5ffc918",
						category: {
							categoryName: "Children’s Poetry",
						},
					},
				],
			},
			{
				id: "e530e7ea-7b05-43bd-950f-2d2317ec8a12",
				bookTitle: "The Shadow of the Wind",
				pageCount: 487,
				publishDate: "2001-10-16",
				price: 16.95,
				shortDescription:
					"This gothic novel set in post-war Barcelona follows the journey of a young boy who discovers a mysterious book by an obscure author and becomes obsessed with unraveling the secrets behind the book's shadowy past. A captivating tale of love, literature, and the power of stories.",
				longDescription:
					"In the heart of post-war Barcelona, a young Daniel Sempere is led by his father to a secret and sacred 'Cemetery of Forgotten Books', a labyrinthine library of old, abandoned stories. Here, Daniel is allowed to choose one book, and he selects \"The Shadow of the Wind\" by Julian Carax. Enthralled by the mysterious novel, Daniel embarks on a quest to find the rest of Carax's works, only to discover that someone has been systematically destroying every copy of every book this author has ever written. In fact, Daniel may have the last of Carax's books in existence. Intrigued and disturbed, Daniel begins a journey to uncover the secrets of the author’s life, a journey that will take him into the depths of Barcelona's hidden past.\n\nAs Daniel plunges deeper into the enigma of Carax’s life, he stumbles upon a story of passion, revenge, and tragedy. He learns that Carax returned to Barcelona during the Spanish Civil War, only to vanish. His books, once celebrated, were condemned. His love, the captivating Penelope, met an untimely death. As these stories from the past bleed into Daniel's present, he finds his life becoming increasingly entwined with that of Carax, mirroring the tragic narrative he found so captivating.\n\n\"The Shadow of the Wind\" is a gothic tale of love, literature, and revenge that sprawls across generations, offering a rich, labyrinthine journey through the streets of a beautifully depicted, darkly atmospheric Barcelona. It's a story of the power of books and the lengths people will go to protect them. As Daniel uncovers the layers of Carax's life, readers are enticed to join him in solving the intricate puzzle that is Julian Carax's life, and in doing so, exploring the shadows of their own.",
				inventoryCount: 32,
				isbn: "9780143034902",
				author: {
					id: "0a36b922-1b36-4200-a103-282b03a29fb4",
					authorFirstName: "Carlos Ruiz",
					authorLastName: "Zafón",
				},
				bookReviews: [],
				bookCategories: [
					{
						id: "ff471aea-efda-4b3f-b6dd-a99e0b30444d",
						category: {
							categoryName: "Science Fiction",
						},
					},
					{
						id: "beb212bc-5eff-4f29-8912-e50795898581",
						category: {
							categoryName: "Magical Realism",
						},
					},
					{
						id: "7771c4a3-1403-43e9-9ee2-3a53ed29de46",
						category: {
							categoryName: "Cultural",
						},
					},
				],
			},
			{
				id: "7b122235-11f9-41f2-80e7-da776e1813f2",
				bookTitle: "The Dutch House",
				pageCount: 337,
				publishDate: "2019-09-24",
				price: 16.99,
				shortDescription:
					"This richly moving novel by Ann Patchett spans five decades and explores the bond between two siblings, their complex relationship with their wealthy but dysfunctional family, and the enduring power of the past. A compelling story of love, loss, and the unbreakable ties that bind families together.",
				longDescription:
					"\"The Dutch House\" is a mesmerizing narrative that unfolds the lives of the Conroy family, set against the backdrop of a lavishly opulent mansion in suburban Philadelphia. The story intricately weaves the complex bond of siblings, Danny and Maeve Conroy, their shared disillusionment, and their unshakeable reliance on each other through the trials and tribulations of life. The Dutch House, an exquisite estate from which the book derives its name, stands as a haunting metaphor throughout the narrative; it is a symbol of their father's striving ambition, their stepmother's cold disdain, their mother's absence, and an unchanging monument to their twisted familial relationships.\n\nThe story is narrated by Danny, the younger of the two siblings, whose life is profoundly marked by his mother's early abandonment and the cruel expulsion from the Dutch House by their wicked stepmother after their father's sudden demise. Danny and Maeve are left to rely on each other, and their bond becomes the centerpiece of the story, spotlighting their shared nostalgia, their longing for their lost home, and their relentless quest for reconciliation and redemption.\n\n\"The Dutch House\" is a captivating exploration of family, memory, and the indelible impacts of the past. Ann Patchett's brilliant storytelling and character development takes the readers on a poignant journey of love, loss, and the complexities of human relationships, all beautifully ensnared within the walls of the Dutch House. This is one of those books that tugs at your heartstrings, invoking a whirlpool of emotions, making it a must-read for anyone who enjoys a well-crafted, deeply engaging family saga.",
				inventoryCount: 48,
				isbn: "9780062963680",
				author: {
					id: "7579612e-eb59-450d-9587-838b92964a6d",
					authorFirstName: "Ann",
					authorLastName: "Patchett",
				},
				bookReviews: [
					{
						id: "4a4e9818-e7cb-42b8-a9f4-e5b54b492f14",
						shortReview: "Beautifully written.",
						review:
							"The Dutch House is a beautifully written novel that explores themes of family, loss, and resilience. Ann Patchett's storytelling draws readers into the lives of the characters, making it a compelling and emotional read.",
						rating: 5,
						user: {
							id: "8410ebc7-bddd-4cff-a651-24b74f193192",
							userName: "bibliophile",
						},
					},
					{
						id: "63827237-f01a-488b-a759-f6bc343672d6",
						shortReview: "Poignant and immersive.",
						review:
							"The Dutch House is a poignant story about the complexities of family dynamics. Ann Patchett's prose is elegant and evocative, creating a richly immersive reading experience.",
						rating: 4,
						user: {
							id: "550de341-e5c4-486f-b087-5ef77ff3a72b",
							userName: "bookworm",
						},
					},
					{
						id: "55992e91-1511-4257-ba96-94fdf6281a2b",
						shortReview: "Nuanced portrayal.",
						review:
							"The Dutch House offers a nuanced portrayal of familial relationships and their lasting impact. While the writing is skillful, the pacing may feel slow for some readers.",
						rating: 3,
						user: {
							id: "671b88b5-2cb1-43ff-9b2d-c19c6e319ef7",
							userName: "bookishgal",
						},
					},
					{
						id: "60e1f64d-36c2-4e4b-8c5e-d0539f6897da",
						shortReview: "Masterfully crafted.",
						review:
							"The Dutch House is a masterfully crafted novel that delves deep into the complexities of human emotion. Ann Patchett's prose is both elegant and moving, making it a truly unforgettable read.",
						rating: 5,
						user: {
							id: "7bb8095f-c1a8-4307-b74f-2affe40bae4b",
							userName: "litlover88",
						},
					},
				],
				bookCategories: [
					{
						id: "0fe36023-7a62-4c35-afed-144a85390326",
						category: {
							categoryName: "Drama",
						},
					},
					{
						id: "b1cc24c5-ab56-4aa8-b680-0d72de5b1219",
						category: {
							categoryName: "Family Saga",
						},
					},
				],
			},
			{
				id: "46016ef3-cc7c-4439-9aec-580fddc43a58",
				bookTitle: "Commonwealth",
				pageCount: 322,
				publishDate: "2016-09-13",
				price: 15.95,
				shortDescription:
					"Ann Patchett's masterful novel explores the intertwined lives of two families, bound together by a heartbreaking shared tragedy and the secrets they keep. A profound exploration of the ties that bind us, the illusions that blind us, and the truths that ultimately set us free.",
				longDescription:
					'"Commonwealth" is a masterfully woven narrative by acclaimed author Ann Patchett, that explores the intricate dynamics of a blended American family. The story ignites in 1960s Los Angeles, when a romantic indiscretion at a christening party leads to the dissolution of two marriages. The fallout from this event results in the joining of two families, a complex network of six step-siblings, navigating their way through broken familial bonds, forced camaraderie, and shared resentment.\n\nThe novel then embarks on a five-decade journey, unraveling the profound impact of this single event on each family member\'s life. Uniquely switching perspectives and timeframes, Patchett illuminates each character\'s struggle for identity, belonging, and understanding within the confines of their new family structure. The step-siblings form a commonwealth, a shared bond of secrets and personal tragedies that they hide from their parents, forming their unique relationships and defining their individual paths.\n\n"Commonwealth" is not just a tale of a fractured family, but also a penetrating examination of the nature of storytelling and the thin line between public and private lives. When one of the siblings shares their family history with a renowned author, their shared past becomes a bestselling novel, subsequently forcing them to confront their memories, their relationships, and their own culpability in the family\'s disarray. With her characteristic depth, sensitivity, and insight, Ann Patchett presents a poignant, thought-provoking novel that delves into the complexities of family, love, and the narratives we construct about our own lives.',
				inventoryCount: 37,
				isbn: "9780062491817",
				author: {
					id: "7579612e-eb59-450d-9587-838b92964a6d",
					authorFirstName: "Ann",
					authorLastName: "Patchett",
				},
				bookReviews: [
					{
						id: "ae24ece9-db76-4895-b381-a0b95f576957",
						shortReview: "Disappointing and underdeveloped.",
						review:
							"Commonwealth is a disappointing read with underdeveloped characters and a disjointed narrative. While the premise had potential, the execution fell short of expectations.",
						rating: 2,
						user: {
							id: "3e4992a5-bde8-4df2-ae06-051d0b7a1805",
							userName: "booklover1",
						},
					},
					{
						id: "56731d6f-d696-4767-83bb-092b690b1d32",
						shortReview: "Engaging but confusing.",
						review:
							"Commonwealth is an interesting exploration of family dynamics and secrets. While the storytelling is engaging, some may find the nonlinear narrative confusing.",
						rating: 3,
						user: {
							id: "85e505f3-d55e-45cb-8d38-f91ae9164d17",
							userName: "jenreads",
						},
					},
					{
						id: "449217ef-dc51-4ddb-9365-3a7228213cae",
						shortReview: "Thought-provoking and captivating.",
						review:
							"Commonwealth is a thought-provoking novel that skillfully weaves together multiple perspectives and timelines. Ann Patchett's storytelling prowess shines in this captivating exploration of family and forgiveness.",
						rating: 4,
						user: {
							id: "de223b1f-28ef-4921-b846-0613747e1cee",
							userName: "iambook",
						},
					},
				],
				bookCategories: [
					{
						id: "009451c8-4fc3-46e3-8a68-53d0a5bef45e",
						category: {
							categoryName: "Drama",
						},
					},
					{
						id: "51490f3f-d73b-4063-bf2c-cb2342c3a159",
						category: {
							categoryName: "Family Saga",
						},
					},
				],
			},
		],
	},
};
