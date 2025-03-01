import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";

export default function LengthSlider() {
    return (
      <>
        <Typography variant='subtitle1'>Length</Typography>
        <Box className='flex text-center items-center'>
          <Typography className='pr-8' variant='body1'>
            8
          </Typography>
          <Slider
            defaultValue={8}
            min={8}
            max={24}
            step={1}
          />
        </Box>
      </>
    )
  }