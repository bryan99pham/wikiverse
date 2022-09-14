import React from 'react';

export const Article = ({props, handleClick}) => {
//use map for tags
  return <>
    <h3>Title: {props.title}</h3>
    <h3>Author: {props.author.name}</h3>
    <h3>Content: {props.content}</h3>
    {/* <h3>Tags: {props.tags.map((tag, idx) => 
        <div>{tag}</div>)}</h3>  */}
    <h3>Date Published: {props.createdAt}</h3>
    <button onClick={handleClick}>Back to Wiki List</button>
  </>
} 
	