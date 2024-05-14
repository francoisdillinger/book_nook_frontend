export type UserOrdersType = {
	id: string;
	orders: {
		orderId: string;
		book: {
			bookTitle: string;
		};
		quantity: number;
		orderDate: string;
		orderAmount: number;
		orderStatus: string;
	}[];
};

export const orders: UserOrdersType = {
	id: "3e4992a5-bde8-4df2-ae06-051d0b7a1805",
	orders: [
		{
			orderId: "f254e570-a9cf-4319-a7eb-e794b6bb8cc5",
			book: {
				bookTitle: "Go Set a Watchman",
			},
			quantity: 3,
			orderDate: "2023-10-29",
			orderAmount: 14.85,
			orderStatus: "PROCESSING",
		},
		{
			orderId: "f254e570-a9cf-4319-a7eb-e794b6bb8cc5",
			book: {
				bookTitle: "Orlando",
			},
			quantity: 1,
			orderDate: "2023-10-29",
			orderAmount: 4.95,
			orderStatus: "PROCESSING",
		},
		{
			orderId: "f254e570-a9cf-4319-a7eb-e794b6bb8cc5",
			book: {
				bookTitle: "Americanah",
			},
			quantity: 2,
			orderDate: "2023-10-29",
			orderAmount: 9.9,
			orderStatus: "PROCESSING",
		},
		{
			orderId: "f254e570-a9cf-4319-a7eb-e794b6bb8cc5",
			book: {
				bookTitle: "Emma",
			},
			quantity: 2,
			orderDate: "2023-10-29",
			orderAmount: 9.9,
			orderStatus: "PROCESSING",
		},
		{
			orderId: "d1aeed69-3fa2-4f2d-8640-844d60e29dad",
			book: {
				bookTitle: "Madame Bovary",
			},
			quantity: 1,
			orderDate: "2021-10-14",
			orderAmount: 4.95,
			orderStatus: "PROCESSING",
		},
		{
			orderId: "d1aeed69-3fa2-4f2d-8640-844d60e29dad",
			book: {
				bookTitle: "The Tale of Genji",
			},
			quantity: 1,
			orderDate: "2021-10-14",
			orderAmount: 4.95,
			orderStatus: "PROCESSING",
		},
		{
			orderId: "d1aeed69-3fa2-4f2d-8640-844d60e29dad",
			book: {
				bookTitle: "The Sense of an Ending",
			},
			quantity: 1,
			orderDate: "2021-10-14",
			orderAmount: 4.95,
			orderStatus: "PROCESSING",
		},
		{
			orderId: "894ae0e8-b795-4328-97ba-b9bc5cea69dc",
			book: {
				bookTitle: "The Diary of a Young Girl",
			},
			quantity: 4,
			orderDate: "2022-11-21",
			orderAmount: 19.8,
			orderStatus: "PROCESSING",
		},
		{
			orderId: "894ae0e8-b795-4328-97ba-b9bc5cea69dc",
			book: {
				bookTitle: "Murder on the Orient Express",
			},
			quantity: 3,
			orderDate: "2022-11-21",
			orderAmount: 14.85,
			orderStatus: "PROCESSING",
		},
		{
			orderId: "83be24e9-75a0-4362-a868-f28214878675",
			book: {
				bookTitle: "The Talented Mr. Ripley",
			},
			quantity: 3,
			orderDate: "2022-04-05",
			orderAmount: 14.85,
			orderStatus: "PROCESSING",
		},
		{
			orderId: "83be24e9-75a0-4362-a868-f28214878675",
			book: {
				bookTitle: "The Tell-Tale Heart and Other Writings",
			},
			quantity: 4,
			orderDate: "2022-04-05",
			orderAmount: 19.8,
			orderStatus: "PROCESSING",
		},
		{
			orderId: "83be24e9-75a0-4362-a868-f28214878675",
			book: {
				bookTitle: "The Scarlet Letter",
			},
			quantity: 1,
			orderDate: "2022-04-05",
			orderAmount: 4.95,
			orderStatus: "PROCESSING",
		},
		{
			orderId: "83be24e9-75a0-4362-a868-f28214878675",
			book: {
				bookTitle: "The Jungle Book",
			},
			quantity: 5,
			orderDate: "2022-04-05",
			orderAmount: 24.75,
			orderStatus: "PROCESSING",
		},
		{
			orderId: "83be24e9-75a0-4362-a868-f28214878675",
			book: {
				bookTitle: "The Bell Jar",
			},
			quantity: 4,
			orderDate: "2022-04-05",
			orderAmount: 19.8,
			orderStatus: "PROCESSING",
		},
		{
			orderId: "ecdc7e34-0f2f-491f-9b6e-9d6d289ea67a",
			book: {
				bookTitle: "The Importance of Being Earnest",
			},
			quantity: 4,
			orderDate: "2023-04-21",
			orderAmount: 19.8,
			orderStatus: "PROCESSING",
		},
		{
			orderId: "ecdc7e34-0f2f-491f-9b6e-9d6d289ea67a",
			book: {
				bookTitle: "The Man in the High Castle",
			},
			quantity: 4,
			orderDate: "2023-04-21",
			orderAmount: 19.8,
			orderStatus: "PROCESSING",
		},
		{
			orderId: "ecdc7e34-0f2f-491f-9b6e-9d6d289ea67a",
			book: {
				bookTitle: "Cat's Cradle",
			},
			quantity: 3,
			orderDate: "2023-04-21",
			orderAmount: 14.85,
			orderStatus: "PROCESSING",
		},
		{
			orderId: "3dfd15cd-f71f-41b4-bac0-547e0ea66ae2",
			book: {
				bookTitle: "The Death of Ivan Ilyich",
			},
			quantity: 2,
			orderDate: "2021-09-15",
			orderAmount: 9.9,
			orderStatus: "PROCESSING",
		},
		{
			orderId: "3dfd15cd-f71f-41b4-bac0-547e0ea66ae2",
			book: {
				bookTitle: "Warrior of the Light",
			},
			quantity: 5,
			orderDate: "2021-09-15",
			orderAmount: 24.75,
			orderStatus: "PROCESSING",
		},
		{
			orderId: "39fecc1d-957f-4d57-9fbf-c767062782a6",
			book: {
				bookTitle: "Jane Eyre",
			},
			quantity: 5,
			orderDate: "2023-09-04",
			orderAmount: 24.75,
			orderStatus: "PROCESSING",
		},
		{
			orderId: "39fecc1d-957f-4d57-9fbf-c767062782a6",
			book: {
				bookTitle: "The English Patient",
			},
			quantity: 3,
			orderDate: "2023-09-04",
			orderAmount: 14.85,
			orderStatus: "PROCESSING",
		},
		{
			orderId: "39fecc1d-957f-4d57-9fbf-c767062782a6",
			book: {
				bookTitle: "The Alchemist",
			},
			quantity: 4,
			orderDate: "2023-09-04",
			orderAmount: 19.8,
			orderStatus: "PROCESSING",
		},
		{
			orderId: "39fecc1d-957f-4d57-9fbf-c767062782a6",
			book: {
				bookTitle: "Infinite Jest",
			},
			quantity: 4,
			orderDate: "2023-09-04",
			orderAmount: 19.8,
			orderStatus: "PROCESSING",
		},
		{
			orderId: "3aaf3488-7b5c-43a4-875f-049d37904e28",
			book: {
				bookTitle: "The Awakening",
			},
			quantity: 1,
			orderDate: "2022-08-12",
			orderAmount: 4.95,
			orderStatus: "PROCESSING",
		},
		{
			orderId: "9f1ea391-5687-48b5-8855-bf14f6608b7e",
			book: {
				bookTitle: "The Man in the High Castle",
			},
			quantity: 2,
			orderDate: "2024-03-04",
			orderAmount: 9.9,
			orderStatus: "PROCESSING",
		},
		{
			orderId: "9f1ea391-5687-48b5-8855-bf14f6608b7e",
			book: {
				bookTitle: "Harry Potter and the Chamber of Secrets",
			},
			quantity: 3,
			orderDate: "2024-03-04",
			orderAmount: 14.85,
			orderStatus: "PROCESSING",
		},
		{
			orderId: "4e69086b-bfee-4241-bf33-4373a21997ae",
			book: {
				bookTitle: "Commonwealth",
			},
			quantity: 5,
			orderDate: "2022-10-12",
			orderAmount: 24.75,
			orderStatus: "PROCESSING",
		},
		{
			orderId: "4e69086b-bfee-4241-bf33-4373a21997ae",
			book: {
				bookTitle: "My Brilliant Friend",
			},
			quantity: 2,
			orderDate: "2022-10-12",
			orderAmount: 9.9,
			orderStatus: "PROCESSING",
		},
		{
			orderId: "ac015786-a2e7-40ce-bae8-d849568cb36e",
			book: {
				bookTitle: "Go Set a Watchman",
			},
			quantity: 2,
			orderDate: "2022-10-07",
			orderAmount: 9.9,
			orderStatus: "PROCESSING",
		},
		{
			orderId: "ac015786-a2e7-40ce-bae8-d849568cb36e",
			book: {
				bookTitle: "1Q84",
			},
			quantity: 1,
			orderDate: "2022-10-07",
			orderAmount: 4.95,
			orderStatus: "PROCESSING",
		},
		{
			orderId: "05d57a73-bfe9-4bf3-b73c-7de76034598a",
			book: {
				bookTitle: "The Waste Land",
			},
			quantity: 1,
			orderDate: "2023-12-17",
			orderAmount: 4.95,
			orderStatus: "PROCESSING",
		},
		{
			orderId: "05d57a73-bfe9-4bf3-b73c-7de76034598a",
			book: {
				bookTitle: "The Underground Railroad",
			},
			quantity: 2,
			orderDate: "2023-12-17",
			orderAmount: 9.9,
			orderStatus: "PROCESSING",
		},
		{
			orderId: "79de0273-4ca5-4c78-b562-48dcdd27e622",
			book: {
				bookTitle: "The Awakening",
			},
			quantity: 1,
			orderDate: "2022-04-04",
			orderAmount: 4.95,
			orderStatus: "PROCESSING",
		},
		{
			orderId: "79de0273-4ca5-4c78-b562-48dcdd27e622",
			book: {
				bookTitle: "The Road",
			},
			quantity: 4,
			orderDate: "2022-04-04",
			orderAmount: 19.8,
			orderStatus: "PROCESSING",
		},
		{
			orderId: "79de0273-4ca5-4c78-b562-48dcdd27e622",
			book: {
				bookTitle: "Adventures of Huckleberry Finn",
			},
			quantity: 3,
			orderDate: "2022-04-04",
			orderAmount: 14.85,
			orderStatus: "PROCESSING",
		},
		{
			orderId: "79de0273-4ca5-4c78-b562-48dcdd27e622",
			book: {
				bookTitle: "The Picture of Dorian Gray",
			},
			quantity: 5,
			orderDate: "2022-04-04",
			orderAmount: 24.75,
			orderStatus: "PROCESSING",
		},
		{
			orderId: "79de0273-4ca5-4c78-b562-48dcdd27e622",
			book: {
				bookTitle: "Harry Potter and the Chamber of Secrets",
			},
			quantity: 3,
			orderDate: "2022-04-04",
			orderAmount: 14.85,
			orderStatus: "PROCESSING",
		},
		{
			orderId: "028e6759-6153-4258-9abf-fc215d981436",
			book: {
				bookTitle: "A Good Man Is Hard to Find",
			},
			quantity: 2,
			orderDate: "2022-08-16",
			orderAmount: 9.9,
			orderStatus: "PROCESSING",
		},
		{
			orderId: "028e6759-6153-4258-9abf-fc215d981436",
			book: {
				bookTitle: "The Catcher in the Rye",
			},
			quantity: 5,
			orderDate: "2022-08-16",
			orderAmount: 24.75,
			orderStatus: "PROCESSING",
		},
		{
			orderId: "4d73222b-9ab0-4044-a67f-5c3f87b47b47",
			book: {
				bookTitle: "A Doll's House",
			},
			quantity: 4,
			orderDate: "2022-01-30",
			orderAmount: 19.8,
			orderStatus: "PROCESSING",
		},
		{
			orderId: "4d73222b-9ab0-4044-a67f-5c3f87b47b47",
			book: {
				bookTitle: "Pride and Prejudice",
			},
			quantity: 1,
			orderDate: "2022-01-30",
			orderAmount: 4.95,
			orderStatus: "PROCESSING",
		},
		{
			orderId: "d789e008-b159-47e6-913a-49fb221c723d",
			book: {
				bookTitle: "American Gods",
			},
			quantity: 5,
			orderDate: "2023-07-08",
			orderAmount: 24.75,
			orderStatus: "PROCESSING",
		},
		{
			orderId: "d789e008-b159-47e6-913a-49fb221c723d",
			book: {
				bookTitle: "Do Androids Dream of Electric Sheep?",
			},
			quantity: 5,
			orderDate: "2023-07-08",
			orderAmount: 24.75,
			orderStatus: "PROCESSING",
		},
		{
			orderId: "04bd92a5-9878-4da3-b75a-e5506056486e",
			book: {
				bookTitle: "The Stranger",
			},
			quantity: 3,
			orderDate: "2021-12-31",
			orderAmount: 14.85,
			orderStatus: "PROCESSING",
		},
		{
			orderId: "04bd92a5-9878-4da3-b75a-e5506056486e",
			book: {
				bookTitle: "The Turn of the Screw",
			},
			quantity: 3,
			orderDate: "2021-12-31",
			orderAmount: 14.85,
			orderStatus: "PROCESSING",
		},
		{
			orderId: "90f12b08-3279-4799-8aed-8784cf6b1bf5",
			book: {
				bookTitle: "Notes from Underground",
			},
			quantity: 5,
			orderDate: "2024-01-15",
			orderAmount: 24.75,
			orderStatus: "PROCESSING",
		},
		{
			orderId: "90f12b08-3279-4799-8aed-8784cf6b1bf5",
			book: {
				bookTitle: "Oryx and Crake",
			},
			quantity: 5,
			orderDate: "2024-01-15",
			orderAmount: 24.75,
			orderStatus: "PROCESSING",
		},
		{
			orderId: "90f12b08-3279-4799-8aed-8784cf6b1bf5",
			book: {
				bookTitle: "If This Is a Man",
			},
			quantity: 5,
			orderDate: "2024-01-15",
			orderAmount: 24.75,
			orderStatus: "PROCESSING",
		},
		{
			orderId: "90f12b08-3279-4799-8aed-8784cf6b1bf5",
			book: {
				bookTitle: "Atonement",
			},
			quantity: 2,
			orderDate: "2024-01-15",
			orderAmount: 9.9,
			orderStatus: "PROCESSING",
		},
		{
			orderId: "e6073510-efc5-4b87-87b1-a39ec40b5dab",
			book: {
				bookTitle: "My Name Is Red",
			},
			quantity: 5,
			orderDate: "2021-10-03",
			orderAmount: 24.75,
			orderStatus: "PROCESSING",
		},
		{
			orderId: "e6073510-efc5-4b87-87b1-a39ec40b5dab",
			book: {
				bookTitle: "In Search of Lost Time",
			},
			quantity: 3,
			orderDate: "2021-10-03",
			orderAmount: 14.85,
			orderStatus: "PROCESSING",
		},
		{
			orderId: "cf2a3db0-2070-4bf9-837f-50732b628be7",
			book: {
				bookTitle: "Tess of the d'Urbervilles",
			},
			quantity: 2,
			orderDate: "2021-10-21",
			orderAmount: 9.9,
			orderStatus: "PROCESSING",
		},
		{
			orderId: "cf2a3db0-2070-4bf9-837f-50732b628be7",
			book: {
				bookTitle: "In the Night Kitchen",
			},
			quantity: 1,
			orderDate: "2021-10-21",
			orderAmount: 4.95,
			orderStatus: "PROCESSING",
		},
		{
			orderId: "cf2a3db0-2070-4bf9-837f-50732b628be7",
			book: {
				bookTitle: "The Road",
			},
			quantity: 3,
			orderDate: "2021-10-21",
			orderAmount: 14.85,
			orderStatus: "PROCESSING",
		},
		{
			orderId: "d3973e87-83f9-48c4-93d4-419adffa5e20",
			book: {
				bookTitle: "Night",
			},
			quantity: 1,
			orderDate: "2022-07-01",
			orderAmount: 4.95,
			orderStatus: "PROCESSING",
		},
		{
			orderId: "d3973e87-83f9-48c4-93d4-419adffa5e20",
			book: {
				bookTitle: "The Underground Railroad",
			},
			quantity: 5,
			orderDate: "2022-07-01",
			orderAmount: 24.75,
			orderStatus: "PROCESSING",
		},
		{
			orderId: "d3973e87-83f9-48c4-93d4-419adffa5e20",
			book: {
				bookTitle: "Lolita",
			},
			quantity: 4,
			orderDate: "2022-07-01",
			orderAmount: 19.8,
			orderStatus: "PROCESSING",
		},
		{
			orderId: "d3973e87-83f9-48c4-93d4-419adffa5e20",
			book: {
				bookTitle: "Harry Potter and the Chamber of Secrets",
			},
			quantity: 3,
			orderDate: "2022-07-01",
			orderAmount: 14.85,
			orderStatus: "PROCESSING",
		},
		{
			orderId: "d3973e87-83f9-48c4-93d4-419adffa5e20",
			book: {
				bookTitle: "Go Set a Watchman",
			},
			quantity: 4,
			orderDate: "2022-07-01",
			orderAmount: 19.8,
			orderStatus: "PROCESSING",
		},
		{
			orderId: "a5c73ebb-3ef6-4665-8b2e-3cbf0abd0892",
			book: {
				bookTitle: "Lolita",
			},
			quantity: 1,
			orderDate: "2023-08-02",
			orderAmount: 4.95,
			orderStatus: "PROCESSING",
		},
		{
			orderId: "a5c73ebb-3ef6-4665-8b2e-3cbf0abd0892",
			book: {
				bookTitle: "1Q84",
			},
			quantity: 5,
			orderDate: "2023-08-02",
			orderAmount: 24.75,
			orderStatus: "PROCESSING",
		},
		{
			orderId: "a5c73ebb-3ef6-4665-8b2e-3cbf0abd0892",
			book: {
				bookTitle: "The Catcher in the Rye",
			},
			quantity: 2,
			orderDate: "2023-08-02",
			orderAmount: 9.9,
			orderStatus: "PROCESSING",
		},
		{
			orderId: "a5c73ebb-3ef6-4665-8b2e-3cbf0abd0892",
			book: {
				bookTitle: "Ficciones",
			},
			quantity: 2,
			orderDate: "2023-08-02",
			orderAmount: 9.9,
			orderStatus: "PROCESSING",
		},
		{
			orderId: "a5c73ebb-3ef6-4665-8b2e-3cbf0abd0892",
			book: {
				bookTitle: "The Age of Innocence",
			},
			quantity: 1,
			orderDate: "2023-08-02",
			orderAmount: 4.95,
			orderStatus: "PROCESSING",
		},
		{
			orderId: "b2f9ea82-0f9b-4fa0-a648-4af147a705ca",
			book: {
				bookTitle: "The Adventures of Sherlock Holmes",
			},
			quantity: 3,
			orderDate: "2022-09-11",
			orderAmount: 14.85,
			orderStatus: "PROCESSING",
		},
		{
			orderId: "8da69cdc-fa23-42ac-936a-20753847b0d0",
			book: {
				bookTitle: "The Da Vinci Code",
			},
			quantity: 5,
			orderDate: "2022-07-19",
			orderAmount: 24.75,
			orderStatus: "PROCESSING",
		},
		{
			orderId: "353deff6-c421-45c1-a34b-6d5a52af8a13",
			book: {
				bookTitle: "White Teeth",
			},
			quantity: 2,
			orderDate: "2021-11-28",
			orderAmount: 9.9,
			orderStatus: "PROCESSING",
		},
		{
			orderId: "353deff6-c421-45c1-a34b-6d5a52af8a13",
			book: {
				bookTitle: "Where the Wild Things Are",
			},
			quantity: 4,
			orderDate: "2021-11-28",
			orderAmount: 19.8,
			orderStatus: "PROCESSING",
		},
		{
			orderId: "dbac0b94-78c6-4ac2-ad2c-407d91eba3eb",
			book: {
				bookTitle: "My Brilliant Friend",
			},
			quantity: 2,
			orderDate: "2022-10-05",
			orderAmount: 9.9,
			orderStatus: "PROCESSING",
		},
		{
			orderId: "dbac0b94-78c6-4ac2-ad2c-407d91eba3eb",
			book: {
				bookTitle: "Omeros",
			},
			quantity: 4,
			orderDate: "2022-10-05",
			orderAmount: 19.8,
			orderStatus: "PROCESSING",
		},
		{
			orderId: "dbac0b94-78c6-4ac2-ad2c-407d91eba3eb",
			book: {
				bookTitle: "Infinite Jest",
			},
			quantity: 2,
			orderDate: "2022-10-05",
			orderAmount: 9.9,
			orderStatus: "PROCESSING",
		},
		{
			orderId: "dbac0b94-78c6-4ac2-ad2c-407d91eba3eb",
			book: {
				bookTitle: "Moby-Dick",
			},
			quantity: 4,
			orderDate: "2022-10-05",
			orderAmount: 19.8,
			orderStatus: "PROCESSING",
		},
		{
			orderId: "dbac0b94-78c6-4ac2-ad2c-407d91eba3eb",
			book: {
				bookTitle: "Angels & Demons",
			},
			quantity: 4,
			orderDate: "2022-10-05",
			orderAmount: 19.8,
			orderStatus: "PROCESSING",
		},
		{
			orderId: "358ebf8f-fdd9-48cd-9378-f2dc2904b4d8",
			book: {
				bookTitle: "Animal Farm",
			},
			quantity: 1,
			orderDate: "2022-01-31",
			orderAmount: 4.95,
			orderStatus: "PROCESSING",
		},
		{
			orderId: "358ebf8f-fdd9-48cd-9378-f2dc2904b4d8",
			book: {
				bookTitle: "The Count of Monte Cristo",
			},
			quantity: 4,
			orderDate: "2022-01-31",
			orderAmount: 19.8,
			orderStatus: "PROCESSING",
		},
		{
			orderId: "358ebf8f-fdd9-48cd-9378-f2dc2904b4d8",
			book: {
				bookTitle: "The Bell Jar",
			},
			quantity: 5,
			orderDate: "2022-01-31",
			orderAmount: 24.75,
			orderStatus: "PROCESSING",
		},
		{
			orderId: "358ebf8f-fdd9-48cd-9378-f2dc2904b4d8",
			book: {
				bookTitle: "The Awakening",
			},
			quantity: 2,
			orderDate: "2022-01-31",
			orderAmount: 9.9,
			orderStatus: "PROCESSING",
		},
		{
			orderId: "ae1d5fe9-ba71-4c61-8669-c169b96caf05",
			book: {
				bookTitle: "The Stand",
			},
			quantity: 3,
			orderDate: "2023-03-07",
			orderAmount: 14.85,
			orderStatus: "PROCESSING",
		},
		{
			orderId: "f3f99ff6-bd4e-4c45-bc35-94a81b4dc887",
			book: {
				bookTitle: "Go Set a Watchman",
			},
			quantity: 5,
			orderDate: "2022-09-08",
			orderAmount: 24.75,
			orderStatus: "PROCESSING",
		},
		{
			orderId: "f3f99ff6-bd4e-4c45-bc35-94a81b4dc887",
			book: {
				bookTitle: "The Golden Notebook",
			},
			quantity: 1,
			orderDate: "2022-09-08",
			orderAmount: 4.95,
			orderStatus: "PROCESSING",
		},
		{
			orderId: "f3f99ff6-bd4e-4c45-bc35-94a81b4dc887",
			book: {
				bookTitle: "The Importance of Being Earnest",
			},
			quantity: 5,
			orderDate: "2022-09-08",
			orderAmount: 24.75,
			orderStatus: "PROCESSING",
		},
		{
			orderId: "f3f99ff6-bd4e-4c45-bc35-94a81b4dc887",
			book: {
				bookTitle: "A Good Man Is Hard to Find",
			},
			quantity: 4,
			orderDate: "2022-09-08",
			orderAmount: 19.8,
			orderStatus: "PROCESSING",
		},
		{
			orderId: "7ebae26f-ca92-464a-8eec-1eaef2e63b1c",
			book: {
				bookTitle: "The Death of Ivan Ilyich",
			},
			quantity: 1,
			orderDate: "2022-03-26",
			orderAmount: 4.95,
			orderStatus: "PROCESSING",
		},
		{
			orderId: "7ebae26f-ca92-464a-8eec-1eaef2e63b1c",
			book: {
				bookTitle: "Middlemarch",
			},
			quantity: 1,
			orderDate: "2022-03-26",
			orderAmount: 4.95,
			orderStatus: "PROCESSING",
		},
		{
			orderId: "7ebae26f-ca92-464a-8eec-1eaef2e63b1c",
			book: {
				bookTitle: "On the Road",
			},
			quantity: 3,
			orderDate: "2022-03-26",
			orderAmount: 14.85,
			orderStatus: "PROCESSING",
		},
		{
			orderId: "7ebae26f-ca92-464a-8eec-1eaef2e63b1c",
			book: {
				bookTitle: "The Catcher in the Rye",
			},
			quantity: 1,
			orderDate: "2022-03-26",
			orderAmount: 4.95,
			orderStatus: "PROCESSING",
		},
		{
			orderId: "7ebae26f-ca92-464a-8eec-1eaef2e63b1c",
			book: {
				bookTitle: "Life on the Mississippi",
			},
			quantity: 3,
			orderDate: "2022-03-26",
			orderAmount: 14.85,
			orderStatus: "PROCESSING",
		},
		{
			orderId: "6492e68d-d76f-4be4-bb94-e5705a5f58ea",
			book: {
				bookTitle: "Frankenstein",
			},
			quantity: 4,
			orderDate: "2023-01-05",
			orderAmount: 19.8,
			orderStatus: "PROCESSING",
		},
		{
			orderId: "6492e68d-d76f-4be4-bb94-e5705a5f58ea",
			book: {
				bookTitle: "The War of the Worlds",
			},
			quantity: 5,
			orderDate: "2023-01-05",
			orderAmount: 24.75,
			orderStatus: "PROCESSING",
		},
		{
			orderId: "6492e68d-d76f-4be4-bb94-e5705a5f58ea",
			book: {
				bookTitle: "The Second Sex",
			},
			quantity: 5,
			orderDate: "2023-01-05",
			orderAmount: 24.75,
			orderStatus: "PROCESSING",
		},
		{
			orderId: "d2be1054-c798-4928-a43e-0454ed719966",
			book: {
				bookTitle: "Little Women",
			},
			quantity: 3,
			orderDate: "2022-08-31",
			orderAmount: 14.85,
			orderStatus: "PROCESSING",
		},
		{
			orderId: "830672ba-da46-4283-a3c4-a795f0620b58",
			book: {
				bookTitle: "A Good Man Is Hard to Find",
			},
			quantity: 1,
			orderDate: "2021-04-21",
			orderAmount: 4.95,
			orderStatus: "PROCESSING",
		},
		{
			orderId: "830672ba-da46-4283-a3c4-a795f0620b58",
			book: {
				bookTitle: "Where the Wild Things Are",
			},
			quantity: 3,
			orderDate: "2021-04-21",
			orderAmount: 14.85,
			orderStatus: "PROCESSING",
		},
		{
			orderId: "830672ba-da46-4283-a3c4-a795f0620b58",
			book: {
				bookTitle: "Angels & Demons",
			},
			quantity: 1,
			orderDate: "2021-04-21",
			orderAmount: 4.95,
			orderStatus: "PROCESSING",
		},
		{
			orderId: "49587268-fadb-45fb-87a3-f428ff9eccf9",
			book: {
				bookTitle: "The Sound and the Fury",
			},
			quantity: 5,
			orderDate: "2021-05-13",
			orderAmount: 24.75,
			orderStatus: "PROCESSING",
		},
		{
			orderId: "49587268-fadb-45fb-87a3-f428ff9eccf9",
			book: {
				bookTitle: "Pride and Prejudice",
			},
			quantity: 5,
			orderDate: "2021-05-13",
			orderAmount: 24.75,
			orderStatus: "PROCESSING",
		},
		{
			orderId: "49587268-fadb-45fb-87a3-f428ff9eccf9",
			book: {
				bookTitle: "The Collected Poems of Langston Hughes",
			},
			quantity: 4,
			orderDate: "2021-05-13",
			orderAmount: 19.8,
			orderStatus: "PROCESSING",
		},
		{
			orderId: "49587268-fadb-45fb-87a3-f428ff9eccf9",
			book: {
				bookTitle: "Jane Eyre",
			},
			quantity: 3,
			orderDate: "2021-05-13",
			orderAmount: 14.85,
			orderStatus: "PROCESSING",
		},
		{
			orderId: "49587268-fadb-45fb-87a3-f428ff9eccf9",
			book: {
				bookTitle: "Tess of the d'Urbervilles",
			},
			quantity: 4,
			orderDate: "2021-05-13",
			orderAmount: 19.8,
			orderStatus: "PROCESSING",
		},
		{
			orderId: "f2399d80-b05e-4978-aed2-517954796914",
			book: {
				bookTitle: "The Dutch House",
			},
			quantity: 1,
			orderDate: "2022-09-02",
			orderAmount: 4.95,
			orderStatus: "PROCESSING",
		},
		{
			orderId: "f2399d80-b05e-4978-aed2-517954796914",
			book: {
				bookTitle: "The Great Gatsby",
			},
			quantity: 3,
			orderDate: "2022-09-02",
			orderAmount: 14.85,
			orderStatus: "PROCESSING",
		},
		{
			orderId: "b42ce985-2c79-49ba-801a-6233b179022d",
			book: {
				bookTitle: "The Name of the Rose",
			},
			quantity: 1,
			orderDate: "2024-03-06",
			orderAmount: 4.95,
			orderStatus: "PROCESSING",
		},
		{
			orderId: "b42ce985-2c79-49ba-801a-6233b179022d",
			book: {
				bookTitle: "The Collected Poems of Langston Hughes",
			},
			quantity: 4,
			orderDate: "2024-03-06",
			orderAmount: 19.8,
			orderStatus: "PROCESSING",
		},
		{
			orderId: "b42ce985-2c79-49ba-801a-6233b179022d",
			book: {
				bookTitle: "Ficciones",
			},
			quantity: 2,
			orderDate: "2024-03-06",
			orderAmount: 9.9,
			orderStatus: "PROCESSING",
		},
		{
			orderId: "81e60972-9744-4199-8e3d-2d0415e2406e",
			book: {
				bookTitle: "The Angel's Game",
			},
			quantity: 1,
			orderDate: "2023-06-25",
			orderAmount: 4.95,
			orderStatus: "PROCESSING",
		},
		{
			orderId: "81e60972-9744-4199-8e3d-2d0415e2406e",
			book: {
				bookTitle: "Animal Farm",
			},
			quantity: 4,
			orderDate: "2023-06-25",
			orderAmount: 19.8,
			orderStatus: "PROCESSING",
		},
		{
			orderId: "81e60972-9744-4199-8e3d-2d0415e2406e",
			book: {
				bookTitle: "The English Patient",
			},
			quantity: 2,
			orderDate: "2023-06-25",
			orderAmount: 9.9,
			orderStatus: "PROCESSING",
		},
		{
			orderId: "81e60972-9744-4199-8e3d-2d0415e2406e",
			book: {
				bookTitle: "Commonwealth",
			},
			quantity: 3,
			orderDate: "2023-06-25",
			orderAmount: 14.85,
			orderStatus: "PROCESSING",
		},
		{
			orderId: "ba36fbe8-d955-480f-8f0a-ed4b14eeedb5",
			book: {
				bookTitle: "The Collected Poems of Langston Hughes",
			},
			quantity: 5,
			orderDate: "2022-10-09",
			orderAmount: 24.75,
			orderStatus: "PROCESSING",
		},
		{
			orderId: "ba36fbe8-d955-480f-8f0a-ed4b14eeedb5",
			book: {
				bookTitle: "The Da Vinci Code",
			},
			quantity: 5,
			orderDate: "2022-10-09",
			orderAmount: 24.75,
			orderStatus: "PROCESSING",
		},
		{
			orderId: "ba36fbe8-d955-480f-8f0a-ed4b14eeedb5",
			book: {
				bookTitle: "The Great Gatsby",
			},
			quantity: 4,
			orderDate: "2022-10-09",
			orderAmount: 19.8,
			orderStatus: "PROCESSING",
		},
		{
			orderId: "fea0af9e-d0cf-445e-92b5-798749611c2b",
			book: {
				bookTitle: "The Brothers Karamazov",
			},
			quantity: 5,
			orderDate: "2024-02-04",
			orderAmount: 24.75,
			orderStatus: "PROCESSING",
		},
		{
			orderId: "fea0af9e-d0cf-445e-92b5-798749611c2b",
			book: {
				bookTitle: "My Name Is Red",
			},
			quantity: 2,
			orderDate: "2024-02-04",
			orderAmount: 9.9,
			orderStatus: "PROCESSING",
		},
	],
};
