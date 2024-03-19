import { useEffect, useState } from 'react'
import './App.css'
import List from './components/List'
import Form from './components/Form'
import {Sub} from './types'

interface AppState {
  subs: Sub[]
  newSubsNumber: number
}

const INITIAL_STATE = [
  {
    nick: 'dapelu',
    subMonths: 3,
    avatar: "https://i.pravatar.cc/300",
    description: "Dapelu descripción"
  },
  {
    nick: 'Sergio',
    subMonths: 7,
    avatar: "https://i.pravatar.cc/300",
  }
] 



function App() {
  const [subs, setSubs] = useState<AppState["subs"]>([])
  const [newSubsNumber, setNewSUbsNumber] = useState<AppState["newSubsNumber"]>(0)

  useEffect(() => {
    setSubs(INITIAL_STATE)
  }, [])

  const handleNewSub = (newSub: Sub): void => {
    setSubs(subs => [...subs, newSub])
  }

  return (
    <div class="App">
      <h1>minu subs</h1>
      <List subs={subs} >
      </List>
      <Form onNewSub={handleNewSub} />
    </div>
  )
}

export default App
