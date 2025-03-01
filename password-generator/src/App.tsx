import { Box, Button, CardContent, Checkbox, Divider, FormControlLabel, FormGroup, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import LengthSlider from "./components/password-generator/LengthSlider";
import Form from "./components/form/Form";
import { defaultGeneratePasswordRequest, GeneratePasswordRequest, generatePasswordSchema } from "./features/password/api/generatePassword";
import { Controller } from "react-hook-form";
import { PropsWithChildren } from "react";
import { cn } from "./utils/cn";

function App() {
  return (
    <Box className='w-full h-full flex justify-center items-center'>
      <PasswordGenerator />
    </Box>
  )
}

export default App;

function PasswordGenerator() {
  function onSubmit(formValues: GeneratePasswordRequest) {
    console.log(formValues);
  }

  return (
    <Card className='w-96'>
      <CardContent>
        <Typography variant='h5'>Generate Password</Typography>
        <Divider />
        <Form
          className="mt-2"
          onSubmit={onSubmit}
          schema={generatePasswordSchema}
          options={{ defaultValues: defaultGeneratePasswordRequest }}
        >
          {({ control, formState: { defaultValues } }) => (
            <>
              <FormGroup>
                <LengthSlider name="length" />
              </FormGroup>
              <CheckboxFormGroup>
                    <FormControlLabel
                      label="Uppercase"
                      control={
                        <Controller
                          name="includeUppercase"
                          control={control}
                          render={({ field }) => (
                            <Checkbox
                              {...field}
                              defaultChecked={defaultValues?.includeUppercase}
                              checked={field.value}
                              onChange={(_, checked) => field.onChange(checked)}
                            />
                          )}
                        />
                      }
                    />
              </CheckboxFormGroup>
              <CheckboxFormGroup>
                <Controller
                  name="includeLowercase"
                  render={({ field }) => (
                    <FormControlLabel
                      label="Lowercase"
                      control={
                        <Checkbox
                          {...field}
                          disabled={field.disabled}
                          checked={field.value}
                          onChange={(_, checked) => field.onChange(checked)}
                        />
                      }
                    />
                  )}
                />
              </CheckboxFormGroup>
              <CheckboxFormGroup>
                <Controller
                  name="includeNumbers"
                  render={({ field }) => (
                    <FormControlLabel
                      label="Numbers"
                      control={
                        <Checkbox
                          {...field}
                          disabled={field.disabled}
                          checked={field.value}
                          onChange={(_, checked) => field.onChange(checked)}
                        />
                      }
                    />
                  )}
                />
              </CheckboxFormGroup>
              <CheckboxFormGroup className="mb-4!">
                <Controller
                  name="includeSymbols"
                  render={({ field }) => (
                    <FormControlLabel
                      label="Symbols"
                      control={
                        <Checkbox
                          {...field}
                          disabled={field.disabled}
                          checked={field.value}
                          onChange={(_, checked) => field.onChange(checked)}
                        />
                      }
                    />
                  )}
                />
              </CheckboxFormGroup>
              <Button type='submit' variant='contained' fullWidth>
                Generate
              </Button>
            </>
          )}
        </Form>
      </CardContent>
    </Card>
  )
}

function CheckboxFormGroup({ children, className }: { className?: string } & PropsWithChildren) {
  return (
    <FormGroup className={cn(className, 'm-0')}>
      {children}
    </FormGroup>
  );
}