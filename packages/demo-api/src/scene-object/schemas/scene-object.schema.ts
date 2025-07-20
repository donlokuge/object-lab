import { z } from 'zod';

export const vector3Schema = z.object({
  x: z.number(),
  y: z.number(),
  z: z.number(),
});

export const createSceneObjectSchema = z.object({
  type: z.enum(['cube', 'sphere']),
  position: vector3Schema,
  scale: vector3Schema,
  color: z.string().regex(/^#([0-9A-Fa-f]{6})$/, 'Invalid hex color'),
});

export const updateSceneObjectSchema = createSceneObjectSchema.partial();

export type CreateSceneObjectInput = z.infer<typeof createSceneObjectSchema>;
export type UpdateSceneObjectInput = z.infer<typeof updateSceneObjectSchema>;
