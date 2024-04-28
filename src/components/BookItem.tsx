import React, { useState, useEffect } from "react";
import { TrimmedBookType } from "./AdminBooks";
import { book } from "../data/bookItem";
import alchemist from "../assets/alchemist.jpg";
import StaticStarRating from "./StaticStarRating";
import BookItemBadges from "./BookItemBadges";

const totalRating = (book: TrimmedBookType): number => {
	const length = book.bookReviews ? book.bookReviews?.length : 1;
	const totalRating = book.bookReviews
		? book.bookReviews.reduce(
				(accumulator, review) => accumulator + review.rating,
				0
		  )
		: 1;

	return parseFloat((totalRating / length).toFixed(1));
};

export default function BookItem() {
	const [bookItem, setBookItem] = useState<null | TrimmedBookType>();
	const [bookRating, setBookRating] = useState<number>(0);

	useEffect(() => {
		setBookItem(book);
		setBookRating(totalRating(book));
	}, [book]);
	return (
		<React.Fragment>
			<div className="w-10/12 m-auto flex flex-col md:flex-row pt-12 pb-8">
				<div className="w-1/2 md:w-1/4 m-auto">
					<img
						className=""
						src={alchemist}
						alt={`Image for ${bookItem?.bookTitle}`}
					/>
				</div>
				<div className="w-full md:w-1/2 flex flex-col justify-between px-8">
					<div className="text-center md:text-left">
						<h1 className="text-4xl text-gray-500">{bookItem?.bookTitle}</h1>
						<h2 className="text-xl text-gray-400 pb-2">
							{book.author.authorFirstName + " " + book.author.authorLastName}
						</h2>
						<div className="flex items-center justify-center md:justify-start">
							<p className="text-xl text-gray-500">{bookRating}</p>
							<span className="pl-2">
								<StaticStarRating
									rating={bookRating}
									width={7}
									height={7}
								/>
							</span>
							<p className="text-md text-gray-400 font-medium pl-6">
								{bookItem?.bookReviews?.length} ratings
							</p>
						</div>
					</div>
					<div className="pb-6">
						<p className="text-lg text-gray-500 pb-8 xl:pb-24">
							{bookItem?.description}
						</p>
						<div className="flex flex-wrap">
							{bookItem?.bookCategories?.map((category) => (
								<div className="p-2 bg-logo opacity-90 m-1 rounded-lg text-gray-50 text-sm">
									{category.category.categoryName}
								</div>
							))}
						</div>
					</div>
				</div>
				<div className="w-full md:w-1/4 ">
					<div className="py-4 md:py-0 bg-gray-100 rounded-t-lg w-full flex flex-col items-center h-1/2">
						<h3 className="text-logo text-3xl pt-8 pb-12">
							${book.price.toFixed(2)}
						</h3>
						<div className="text-gray-600 bg-yellow-400 p-2 rounded-lg hover:bg-yellow-300 w-28 text-center cursor-pointer">
							Add To Cart
						</div>
					</div>
					<div className="h-1/2 py-4 md:py-0 bg-logoLight rounded-b-lg flex flex-col items-center justify-center">
						<h3 className="text-xl font-medium text-gray-500 mb-6">
							Add to Wishlist
						</h3>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							className={`w-12 h-12 fill-gray-100 stroke stroke-gray-500`}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
							/>
						</svg>
					</div>
				</div>
			</div>
			<BookItemBadges bookItem={bookItem} />
			<div className="p-8">
				<h2 className="text-4xl text-gray-500 font-medium text-center pb-8">
					Synopsis
				</h2>
				<p className="text-lg text-gray-500">
					{book
						? "\"The Alchemist\" is a spellbinding tale of a young Andalusian shepherd named Santiago who yearns for adventure and treasures beyond the mundane routine of his pastoral life. Paulo Coelho's masterpiece takes you on an enchanting journey of self-discovery, as Santiago dreams of a hidden treasure near the Egyptian pyramids. Guided by a mysterious dream interpreter and a series of omens, Santiago decides to defy his fate and follow his dream, setting off on an expedition from his native Spain to the exotic markets of Tangiers and across the Egyptian desert. \n\nThe narrative is a rich tapestry of encounters and experiences that Santiago faces along his path. He meets an ageless alchemist who guides him towards spiritual enlightenment, a beautiful Englishwoman who shares his love for the desert, and a wise king who instills in him the importance of following one's Personal Legend. The novel interweaves elements of magic, mysticism, and philosophy, subtly alluding to the timeless wisdom of listening to our hearts and recognizing opportunity as it unfolds before us. \n\n\"The Alchemist\" is not just a novel; it's a journey of self-discovery, a guide to following your heart and fulfilling your destiny. It celebrates the idea that the universe conspires in helping those in pursuit of their dreams. Every twist and turn in Santiago's journey symbolizes life's trials and tribulations, teaching invaluable lessons about hope, love, and self-belief. Coelho's evocative prose and profound wisdom make \"The Alchemist\" a truly transformative reading experience that will certainly touch the hearts of those who dare to dream."
								.split("\n")
								.map((line) => (
									<span className="pl-8">
										{line}
										<br />
										{/* <br /> */}
									</span>
								))
						: " "}
					{/* "The Alchemist" by Paulo Coelho is a mesmerizing tale that transports
					readers to the sun-drenched landscapes of Andalusia, Spain. At its
					core, the story follows Santiago, a young shepherd boy who embarks on
					a profound journey of self-discovery and enlightenment. Driven by an
					unwavering desire to pursue his dreams, Santiago sets out on a quest
					to uncover the secrets of the universe and fulfill his destiny. Along
					the way, he encounters a diverse array of characters and experiences,
					each offering valuable insights and lessons that shape his
					understanding of life's mysteries. Through Santiago's adventures
					across deserts and bustling marketplaces, Coelho weaves a narrative
					that resonates with themes of courage, perseverance, and the
					transformative power of faith. <br />
					<br /> As Santiago navigates the twists and turns of his journey, he
					learns to listen to the whispers of his heart and decipher the omens
					that guide him toward his Personal Legend. Through encounters with
					wise sages, enigmatic mystics, and ordinary people who impart
					extraordinary wisdom, Santiago gains a deeper understanding of the
					interconnectedness of all things and the universal language of the
					soul. "The Alchemist" is a timeless fable that invites readers to
					embark on their own quest for purpose and meaning, reminding them that
					the true treasure lies not in the destination, but in the journey
					itself. With its lyrical prose and profound insights, Coelho's
					masterpiece continues to inspire readers to follow their dreams and
					pursue the path of their own destiny. */}
					{/* "\nThe Alchemist by Paulo Coelho is a captivating and thought-provoking 
					novel that will take readers on a journey of self-discovery and personal growth. 
					Set in the exotic and mysterious land of Egypt, the story follows the journey 
					of a young shepherd named Santiago as he embarks on a quest to fulfill his destiny 
					and find his true purpose in life.\n\nAs Santiago travels through the desert, 
					he encounters a wise alchemist who teaches him the ways of the universe and the 
					power of following one's dreams. Along the way, he faces challenges and obstacles 
					that test his faith and determination. With beautiful prose and rich symbolism, 
					Coelho weaves a tale that explores the themes of courage, perseverance, and the 
					pursuit of one's personal legend. The Alchemist is a timeless masterpiece that 
					will leave readers inspired and enlightened, making it a must-read for anyone 
					seeking a deeper understanding of life's journey." */}
				</p>
			</div>
		</React.Fragment>
	);
}
