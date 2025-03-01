import { z } from 'zod';

export const MIN_PASSWORD_LENGTH = 4;
export const MAX_PASSWORD_LENGTH = 48;
export const generatePasswordSchema = z.object({
  length: z
    .number()
    .min(MIN_PASSWORD_LENGTH, {
      message: `Password must be at least ${MIN_PASSWORD_LENGTH} characters`,
    })
    .max(MAX_PASSWORD_LENGTH, {
      message: `Password must be at most ${MAX_PASSWORD_LENGTH} characters`,
    })
    .default(8),
  includeUppercase: z.boolean().default(true),
  includeLowercase: z.boolean().default(true),
  includeNumbers: z.boolean().default(false),
  includeSymbols: z.boolean().default(false),
});

export type GeneratePasswordRequest = z.infer<typeof generatePasswordSchema>;

export const defaultGeneratePasswordRequest: GeneratePasswordRequest =
  generatePasswordSchema.parse({});

export function generatePassword(request: GeneratePasswordRequest): string {
  return '';
}
