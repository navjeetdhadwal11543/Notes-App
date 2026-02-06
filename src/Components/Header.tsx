import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
const Header = () => {
  return (
    <Box
      sx={{
        height: 64,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        mb: 4,
        borderRadius: 2,
        boxShadow: 3,
        color: ' #ffffff',
        bgcolor: '#505050',
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
