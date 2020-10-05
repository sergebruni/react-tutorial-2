const initialState = {
  characters: [
    { name: 'Sergio', job: 'Developer' },
    { name: 'Luis', job: 'Salesman' },
    { name: 'Ben', job: 'Janitor' }, 
    { name: 'Sophia', job: 'Bouncer' },
    { name: 'Penny', job: 'Aspring actress' },
    { name: 'Walter', job: 'Bartender'},
  ]
}
  
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CHARACTER":
      return { 
        ...state, 
        ...{characters: [...state.characters, action.payload]} 
      }
    case "REMOVE_CHARACTER":
      return {
        ...state,
        ...{characters: [
          ...state.characters.slice(0, action.payload), 
          ...state.characters.slice(action.payload + 1)
        ]}
      }
    case "UPDATE_CHARACTER": 
      return {
        ...state,
        ...{characters: [
          ...state.characters.slice(0, action.payload.index),
          action.payload.data,
          ...state.characters.slice(action.payload.index + 1)
        ]}
      }
    default:
      return state
  }
}

export default rootReducer