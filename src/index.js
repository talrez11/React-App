import React from 'react';
import ReactDOM from 'react-dom';

const Book = ({title, author, pages}) => {
    return (
        <section>
            <h2>{title}</h2>
            <p>Author: {author}</p>
            <p>Page: {pages}</p>
        </section>
    )
};

const Library = () => {
    return (
        <div>
            <Book title='The sun rise' author='T.Vegas' pages={345} />
            <Book title='Magic Sppon' author='M.R.C yellow' pages={145} />
            <Book title='Splinter' author='Jenny nooe' pages={915} />
        </div>
    )
};

ReactDOM.render(
    <Library/>,
    document.getElementById('root')
);