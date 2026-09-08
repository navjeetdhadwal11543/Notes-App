import { useState, useEffect } from 'react'
import './App.css'
import type { Note } from './Interface/Notes'
import Header from './Components/Header'
import Box from '@mui/material/Box'
import NotesInput from './Components/NoteInput'
import NoteList from './Components/NoteList'

const App = () => {
  const [note, setNote] = useState<Note[]>(() => {
    const savedNote = localStorage.getItem('notes')
    return savedNote ? JSON.parse(savedNote) : []
  })
  useEffect(() => {
    try {
      localStorage.setItem('notes', JSON.stringify(note))
    } catch (error) {
      console.error(
        'Errore durante il salvataggio delle note in localStorage, poiché lo spazio è pieno:',
        error,
      )
    }
  }, [note])

  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100%',
        py: { xs: 3, sm: 6 },
        px: { xs: 2, sm: 4 },
        bgcolor: '#f1f5f9',
      }}
    >
      <Box
        sx={{
          maxWidth: { xs: '100%', sm: 500, md: 600, lg: 650 },
          mx: 'auto',
          p: { xs: 3, sm: 4, md: 5 },
          borderRadius: 4,
          background: 'linear-gradient(135deg, #a5b4fc 0%, #c4b5fd 100%)',
          boxShadow:
            '0 35px 80px rgba(82, 78, 160, 0.55), 0 20px 40px rgba(93, 89, 179, 0.4), 0 10px 20px rgba(0, 0, 0, 0.15)',
          border: '1px solid #a5b4fc',
        }}
      >
        <Header />
        <NotesInput setNote={setNote} />
        <NoteList note={note} />
      </Box>
    </Box>
  )
}
export default App
