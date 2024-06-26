export type AuthorsDataType = {
	data: {
		authors: {
			authorFirstName: string;
			authorLastName: string;
		}[];
	};
};

export const author_data = {
	data: {
		authors: [
			{
				authorFirstName: "George",
				authorLastName: "Orwell",
			},
			{
				authorFirstName: "Virginia",
				authorLastName: "Woolf",
			},
			{
				authorFirstName: "Ernest",
				authorLastName: "Hemingway",
			},
			{
				authorFirstName: "James",
				authorLastName: "Joyce",
			},
			{
				authorFirstName: "Emily",
				authorLastName: "Bronte",
			},
			{
				authorFirstName: "Jane",
				authorLastName: "Austen",
			},
			{
				authorFirstName: "Charles",
				authorLastName: "Dickens",
			},
			{
				authorFirstName: "Mark",
				authorLastName: "Twain",
			},
			{
				authorFirstName: "Harper",
				authorLastName: "Lee",
			},
			{
				authorFirstName: "J.D.",
				authorLastName: "Salinger",
			},
		],
	},
};
