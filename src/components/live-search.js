import React from 'react';

import SearchInput from './search-input';
import CharacterList from './character-list';

export default class LiveSearch extends React.Component{
  constructor(props){
    super(props);
    this.state={
      searchText:''
    }
  }
  setSearchText(searchText){
    this.setState({searchText})
  }
  render(){
    return (
        <div className="live-search">
            <SearchInput onChange={(text)=>this.setSearchText(text)}/>
            <CharacterList characters={this.props.characters.filter(
                (character)=>String(character.name).includes(this.state.searchText))} />
        </div>
    );
}
}
