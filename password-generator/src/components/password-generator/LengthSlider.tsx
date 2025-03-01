import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import { useController, useFormContext } from "react-hook-form";

interface LengthSliderProps {
  name: string;
}

const DEFAULT_LENGTH: number = 8;

export default function LengthSlider({ name }: LengthSliderProps) {
  const { control } = useFormContext();
  const { field } = useController({
    name,
    control,
    defaultValue: DEFAULT_LENGTH,
  });

  return (
    <>
      <Typography variant='subtitle1'>Length</Typography>
      <Box className='flex text-center items-center'>
        <Typography className='pr-8' variant='body1'>
          8
        </Typography>
        <Slider
          value={field.value}
          onChange={field.onChange}
          name={field.name}
          disabled={field.disabled}
          defaultValue={DEFAULT_LENGTH}
          min={8}
          max={24}
          step={1}
        />
      </Box>
    </>
  );
}