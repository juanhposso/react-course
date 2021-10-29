import React from 'react';
import reactDom from 'react-dom';

// * CSS
import './index.css';

const Image = () => {
	return (
		<img
			src="https://images-na.ssl-images-amazon.com/images/I/81lqWON0ASL.jpg"
			alt="book cover"
		/>
	);
};

const Title = () => {
	return <h1>The Book Of Hope</h1>;
};

const Author = () => {
	return <h4>Jane Goodall</h4>;
};

const Book = () => {
	return (
		<article className="book">
			<Image />
			<Title />
			<Author />
		</article>
	);
};

function BookList() {
	return (
		<section className="booklist">
			<Book />
			<Book />
			<Book />
			<Book />
			<Book />
			<Book />
		</section>
	);
}

reactDom.render(<BookList />, document.getElementById('root'));
