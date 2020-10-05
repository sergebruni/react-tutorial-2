import React from 'react'

const TableHeader = ({columns}) => {
  return (
    <thead>
      <tr>
        {columns.map((col, i) => (<td key={i}>{col}</td>))}
      </tr>
    </thead>
  )
}

const TableBody = ({characters, updateCharacter, removeCharacter}) => {
  return (
    <tbody>
      {characters.map((character, i) => (
        <tr key={i}>
          <td>
            <img alt={character.name + ' avatar'} 
              src={`https://api.adorable.io/avatars/50/${i + character.name}@adorable.png`} />
          </td>
          <td>{character.name}</td>
          <td>{character.job}</td>
          <td>
            <button onClick={e => updateCharacter(i)}>UPDATE</button>
            <button onClick={e => removeCharacter(i)}>REMOVE</button>
          </td>
        </tr>
      ))}
    </tbody>
  )
}

const Table = props => {
  const { columns, characters, updateCharacter, removeCharacter } = props

  return (
  <div style={{width: '100%'}}>
    <table>
      <TableHeader columns={columns} />
      <TableBody
        characters={characters}
        updateCharacter={updateCharacter}
        removeCharacter={removeCharacter} />
    </table>
  </div>
  )
}

export default Table