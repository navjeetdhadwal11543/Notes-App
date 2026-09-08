import React from 'react'
import type { NoteListProps } from '../Interface/Notes'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Button } from '@mui/material'
const NoteList: React.FC<NoteListProps> = ({ note }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        mt: 2,
        mb: 2,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'left',
        width: '100%',
      }}
    >
      {note.map((n) => (
        <Box
          key={n.id}
          sx={{
            borderRadius: 2,
            bgcolor: '#f8fafc',
            border: '1px solid #c7d2fe',
            boxShadow:
              '0 40px 80px rgba(94, 90, 163, 0.3), 0 25px 45px rgba(101, 97, 172, 0.45), 0 12px 20px rgba(0, 0, 0, 0.25), 0 4px 8px rgba(0, 0, 0, 0.2)',
            p: 2,
            mb: 2,
          }}
        >
          <Typography
            variant='h6'
            sx={{ fontWeight: 'bold', mb: 1, textAlign: 'left' }}
          >
            {' '}
            {n.title}
          </Typography>
          <Typography variant='body1' sx={{ textAlign: 'left' }}>
            {n.content}
          </Typography>
          <Typography
            variant='caption'
            sx={{ mt: 1, display: 'block', textAlign: 'left' }}
          >
            {n.date}
          </Typography>
          <Button
            variant='contained'
            sx={{
              borderRadius: 3,
              mt: 2,
              textTransform: 'none',
            }}
            color='error'
          >
            Delete
          </Button>
        </Box>
      ))}
    </Box>
  )
}
export default NoteList
