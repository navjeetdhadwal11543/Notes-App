import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
const Header = () => {
  return (
    <Box
      sx={{
        height: 72,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        mb: 4,
        borderRadius: 3,
        color: '#ffffff',
        background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
        boxShadow:
          '0 25px 50px rgba(93, 88, 194, 0.6), 0 12px 24px rgba(88, 84, 165, 0.45), 0 6px 10px rgba(0, 0, 0, 0.2)',
      }}
    >
      <Typography
        variant='h4'
        sx={{ fontWeight: 'bold', alignItems: 'center', textAlign: 'center' }}
      >
        Notes-App
      </Typography>
    </Box>
  )
}
export default Header
