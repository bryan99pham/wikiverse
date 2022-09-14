import React, { useState, useEffect } from 'react';
import { PagesList } from './PagesList';
import { Article } from './Article';

// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = () => {

	const [pages, setPages] = useState([]);
	const [article, setArticle] = useState(null);

	async function fetchPages(){
		try {
			const response = await fetch(`${apiURL}/wiki`);
			const pagesData = await response.json();
			setPages(pagesData);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}
	async function fetchArticleData(slug){
		try {
			const response = await fetch(`${apiURL}/wiki/${slug}`);
			const articleData = await response.json();
			setArticle(articleData);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

	useEffect(() => {
		fetchPages();
	}, []);

	return (
		<main>	
      <h1>WikiVerse</h1>
			<h2>An interesting 📚</h2>
			{
				article ? <Article props={article} handleClick={fetchPages} /> : <PagesList pages={pages} handleClick={fetchArticleData} />
			}
			
		</main>
	)
}