import React, { useState } from 'react'
import type { NotesProps, Note } from '../Interface/Notes'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'

const NoteInput: React.FC<NotesProps> = ({ setNote }) => {
  const [titleInput, setTitleInput] = useState<string>('')
  const [contentInput, setContentInput] = useState<string>('')

  const handleInput = () => {
    if (titleInput.trim() === '' && contentInput.trim() === '') return

    const newNote: Note = {
      id: Date.now(),
      title: titleInput,
      content: contentInput,
      date: new Date().toString(),
    }
    setNote((prev) => [...prev, newNote])

    console.log(newNote)

    setTitleInput('')
    setContentInput('')
  }
  return (
    <Box>
      <Card
        sx={{
          p: 3,
          borderRadius: 3,
          bgcolor: '#f8fafc',
          border: '1px solid #c7d2fe',
          boxShadow:
            '0 40px 80px rgba(79, 70, 229, 0.6), 0 25px 45px rgba(79, 70, 229, 0.45), 0 12px 20px rgba(0, 0, 0, 0.25), 0 4px 8px rgba(0, 0, 0, 0.2)',
          mx: 'auto',
        }}
      >
        <Box sx={{ mb: 2 }}>
          <Typography
            variant='h6'
            sx={{ fontWeight: 'bold', mb: 1, textAlign: 'left' }}
          >
            Titolo:
          </Typography>
          <TextField
            fullWidth
            label=' * Titolo'
            type='text'
            value={titleInput}
            onChange={(e) => setTitleInput(e.target.value)}
            placeholder='Digita qui il tuo titolo...'
            sx={{
              flex: 1,
              '& .MuiOutlinedInput-root': {
                height: 50,
                borderRadius: 2,
                mb: 2,
                color: 'black',
                bgcolor: '#ffffff',
              },
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#94a3b8',
              },
              '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline':
                {
                  borderColor: '#6366f1',
                },
              '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
                {
                  borderColor: '#4f46e5',
                  borderWidth: '2px',
                },
            }}
          />
        </Box>
        <Box sx={{ mb: 2 }}>
          <Typography
            variant='h6'
            sx={{ fontWeight: 'bold', mb: 1, textAlign: 'left' }}
          >
            Contenuto:
          </Typography>
          <TextField
            fullWidth
            label=' * Contenuto'
            type='text'
            value={contentInput}
            onChange={(e) => setContentInput(e.target.value)}
            placeholder='Digita qui il tuo contenuto...'
            sx={{
              flex: 1,
              '& .MuiOutlinedInput-root': {
                height: 50,
                borderRadius: 2,
                mb: 2,
                color: 'black',
                bgcolor: '#ffffff',
              },
              '& .MuiOutlinedInput-input': {
                padding: '12px 14px',
              },
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#94a3b8',
              },
              '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline':
                {
                  borderColor: '#6366f1',
                },
              '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
                {
                  borderColor: '#4f46e5',
                  borderWidth: '2px',
                },
            }}
          />
        </Box>

        <Button
          variant='contained'
          onClick={handleInput}
          sx={{
            height: 50,
            width: 140,
            borderRadius: 3,
            textTransform: 'none',

            background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
            color: '#ffffff',
            fontWeight: 700,
            letterSpacing: 0.5,

            boxShadow: '0 4px 14px rgba(79, 70, 229, 0.4)',

            transition: 'all 0.25s ease',

            '&:hover': {
              background: 'linear-gradient(135deg, #4338ca 0%, #6d28d9 100%)',
              transform: 'translateY(-3px)',
              boxShadow: '0 6px 20px rgba(79, 70, 229, 0.55)',
            },

            '&:active': {
              transform: 'translateY(0px)',
            },
          }}
        >
          Add Note
        </Button>
      </Card>
    </Box>
  )
}
export default NoteInput
