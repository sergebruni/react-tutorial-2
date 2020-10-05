import React from 'react'
import Form from './Components/Form'
import { useDispatch, useStore } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'

const Update = props => {
  const dispatch = useDispatch()
  const history = useHistory()
  const store = useStore()

  const { id } = useParams()
  const character = store.getState().characters[id]

  const onSubmit = payload => {
    dispatch({type: "UPDATE_CHARACTER", payload: {index: parseInt(id), data: payload}})
    history.push('/')
  }

  const onReturn = () => history.goBack()

  return (
    <div style={{width: '50%', margin: 'auto'}}>
      <h3>Update Character</h3>
      <Form character={character} onSubmit={onSubmit} onReturn={onReturn}/>
    </div>
  )
}

export default Update