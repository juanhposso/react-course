import React from 'react';
import ReactDOM from 'react-dom';

// * CSS
import './index.css';

const Book = ({ src, author, title }) => {
	return (
		<article className="book">
			<img src={src} alt="esto es un test" />
			<h1>{title}</h1>
			<h4>{author}</h4>
		</article>
	);
};

function BookList({ array }) {
	const booksArray = array.map((item) => {
		return (
			<Book
				key={item.id}
				src={item.src}
				author={item.author}
				title={item.title}
			/>
		);
	});

	return <section className="booklist">{booksArray}</section>;
}

const arrayImages = [
	{
		id: '87698',
		src: 'https://images-na.ssl-images-amazon.com/images/I/81aNrT99O6S.jpg',
		author: 'Kat Rosenfield',
		title: 'No One Will Miss Her: A Novel',
	},
	{
		id: '13982',
		src: 'https://images-na.ssl-images-amazon.com/images/I/81lqWON0ASL.jpg',
		author: 'Jane Goodall',
		title: 'The Book Of Hope: A Survival Guide',
	},
	{
		id: '26354',
		src: 'https://images-na.ssl-images-amazon.com/images/I/91raXh8bXtL.jpg',
		author: 'Jonathan Frazen',
		title: 'Crossroads: A Novel',
	},
];

ReactDOM.render(
	<BookList array={arrayImages} />,
	document.getElementById('root')
);
