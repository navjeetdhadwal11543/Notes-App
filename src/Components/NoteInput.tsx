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
  const [nextId, setNextId] = useState<number>(1)

  const handleInput = () => {
    if (titleInput.trim() === '' && contentInput.trim() === '') return

    const newNote: Note = {
      id: nextId,
      title: titleInput,
      content: contentInput,
      date: new Date().toLocaleString(),
    }
    setNote((prev) => [...prev, newNote])

    setNextId((prev) => prev + 1)
    console.log(newNote)

    setTitleInput('')
    setContentInput('')
  }
  return (
    <Box>
      <Card
        sx={{
          p: 2,
          borderRadius: 2,
          bgcolor: 'rgba(255,255,255,0.9)',
          boxShadow: 3,
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
                borderColor: 'black',
                mb: 2,
                color: 'black ',
                bgcolor: '#ffffff',
              },
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: 'black',
              },
              '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
                {
                  borderColor: 'black',
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
                borderColor: 'black',
                mb: 2,
                color: 'black ',
                bgcolor: '#ffffff',
              },
              '& .MuiOutlinedInput-input': {
                padding: '12px 14px',
              },
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: 'black',
              },
              '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
                {
                  borderColor: 'black',
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

            background: 'linear-gradient(135deg, #f7d774, #E3B23C)',
            color: '#1a1a1a',
            fontWeight: 700,
            letterSpacing: 0.5,

            boxShadow: '0 4px 14px rgba(227,178,60,0.4)',

            transition: 'all 0.25s ease',

            '&:hover': {
              background: 'linear-gradient(135deg, #E3B23C, #c8962b)',
              transform: 'translateY(-3px)',
              boxShadow: '0 6px 20px rgba(227,178,60,0.6)',
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
