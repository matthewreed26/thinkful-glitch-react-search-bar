import React from 'react';

export default function SearchInput(props) {
    return <input type="search" name="Search" placeholder="Dale Cooper" 
      onChange={(event)=>props.onChange(event.target.value)}/>;
}
