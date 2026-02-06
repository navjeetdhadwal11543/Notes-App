import { useState } from 'react'
import './App.css'
import type { Note } from './Interface/Notes'
import Header from './Components/Header'
import Box from '@mui/material/Box'
import NotesInput from './Components/NoteInput'
import NoteList from './Components/NoteList'

const App = () => {
  const [note, setNote] = useState<Note[]>([])

  return (
    <Box
      sx={{
        width: { xs: '90%', sm: '400px' },
        mx: 'auto',
        my: 6,
        p: 4,
        borderRadius: 3,
        bgcolor: '#90caf9',
        boxShadow: 4,
      }}
    >
      <Header />
      <NotesInput note={note} setNote={setNote} />
      <NoteList note={note} setNote={setNote} />
    </Box>
  )
}
export default App
