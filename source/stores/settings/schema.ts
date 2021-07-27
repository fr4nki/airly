import {
  boolean,
  Infer,
  object,
  StructError,
} from 'superstruct';

export const settingsSchema = object({
  linerVisible: boolean(),
});

export type SettingsSchema = Infer<typeof settingsSchema>;

export const settingsSchemaValidate = (schema: unknown): [StructError, undefined] | [undefined, SettingsSchema] => (
  settingsSchema.validate(schema)
);
