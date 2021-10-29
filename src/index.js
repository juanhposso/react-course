import React from 'react';
import reactDom from 'react-dom';

// * CSS
import './index.css';

const Book = ({ Author, Title, age }) => {
	//const Title = 'The Book Of Hope';
	//const Author = 'Jane Goodall';

	return (
		<article className="book">
			<img
				src="https://images-na.ssl-images-amazon.com/images/I/81lqWON0ASL.jpg"
				alt="Book Cover"
			/>
			<h1>{Title}</h1>
			<h4>
				{Author.toUpperCase()} {age ? <span>{age}</span> : null}
			</h4>
		</article>
	);
};

function BookList() {
	return (
		<section className="booklist">
			<Book Author="Jane Goodall" Title="The Book Of Hope" age={28} />
			<Book Author="Fabian" Title="The Book Of Hope" />
			<Book Author="Juan david" Title="The Book Of Hope" />
		</section>
	);
}

reactDom.render(<BookList />, document.getElementById('root'));
