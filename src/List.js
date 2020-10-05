import React from 'react';
import { compose } from 'redux'
import { connect, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Table from './Components/Table'

const List = ({characters}) => {
  const history = useHistory()
  const dispatch = useDispatch()

  const columns = ['', 'Name', 'Job', '']

  const addCharacter = () => history.push('/character')

  const updateCharacter = (id) => history.push(`/character/${id}`)

  const removeCharacter = index => dispatch({type: 'REMOVE_CHARACTER', payload: index})

  return (
    <div className="container">
      <h3>Characters</h3>
      <button onClick={addCharacter}>NEW</button>
      <Table
        columns={columns}
        characters={characters}
        updateCharacter={updateCharacter}
        removeCharacter={removeCharacter}
      />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    characters: state.characters,
  }
}

export default compose(
  connect(mapStateToProps, null)
)(List)
