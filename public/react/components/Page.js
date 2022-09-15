import React from 'react';

export const Page = (props, {handleSubmit}) => {
  
  return <>
    <h3 onClick={() => props.handleClick(props.page.slug)}>
      {props.page.title}
    </h3>
  </>
} 
	