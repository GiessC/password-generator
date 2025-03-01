import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import { useController, useFormContext } from "react-hook-form";
import { MAX_PASSWORD_LENGTH, MIN_PASSWORD_LENGTH } from "../../features/password/api/generatePassword";

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
          {field.value}
        </Typography>
        <Slider
          value={field.value}
          onChange={field.onChange}
          name={field.name}
          disabled={field.disabled}
          defaultValue={DEFAULT_LENGTH}
          min={MIN_PASSWORD_LENGTH}
          max={MAX_PASSWORD_LENGTH}
          step={1}
        />
      </Box>
    </>
  );
}