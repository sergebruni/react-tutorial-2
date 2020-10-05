import React, {useState, useEffect} from 'react'

const Form = ({character, onSubmit, onReturn}) => {
  const [name, setName] = useState('')
  const [job, setJob] = useState('')

  useEffect(() => {
    if (character){
      setName(character.name)
      setJob(character.job)
    }
  }, [character])

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({ name: name, job: job })
  }

  const handleBack = (e) => {
    onReturn()
  }

  return(
    <form>
      <label htmlFor="name">Name</label>
      <input 
        type='text' name="name"
        value={name} onChange={e => setName(e.target.value)} />

      <label htmlFor="job">Job</label>
      <input
        type='text' name="job"
        value={job} onChange={e => setJob(e.target.value)} />
      <button onClick={handleSubmit}>SAVE</button>
      <button onClick={handleBack} type="button">BACK</button>
    </form>
  )
}

export default Form