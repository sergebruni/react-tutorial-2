import React from 'react'
import Form from './Components/Form'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

const Create = props => {
  const history = useHistory()
  const dispatch = useDispatch()

  const onSubmit = payload => {
    dispatch({type: "ADD_CHARACTER", payload: payload})
    history.push('/')
  }

  const onReturn = () => history.goBack()

  return (
    <div style={{width: '50%', margin: 'auto'}}>
      <h3>New Character</h3>
      <Form onSubmit={onSubmit} onReturn={onReturn}/>
    </div>
  )
}

export default Create