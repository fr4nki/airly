import {
  enums,
  Infer,
  number,
  object,
  string,
  StructError,
} from 'superstruct';

export const userStylesSchema = object({
  gap: number(),
  font: string(),
  fontSize: enums(['small', 'medium', 'big']),
});

export type UserStylesSchema = Infer<typeof userStylesSchema>;

export const configSchemaValidate = (schema: unknown): [StructError, undefined] | [undefined, UserStylesSchema] => (
  userStylesSchema.validate(schema)
);
