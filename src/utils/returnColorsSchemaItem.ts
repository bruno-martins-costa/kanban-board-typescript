import { tagColorsSchema } from '../schemas/tagColorsSchema';

export function returnColorSchemaItem(type: string) {
  if (type === 'Backend') return tagColorsSchema.Backend;
  if (type === 'Bug') return tagColorsSchema.Bug;
  if (type === 'Business') return tagColorsSchema.Business;
  if (type === 'Frontend') return tagColorsSchema.Frontend;
  if (type === 'Devops') return tagColorsSchema.Devops;
  if (type === 'Mobile') return tagColorsSchema.Mobile;
  if (type === 'QA') return tagColorsSchema.QA;
  if (type === 'UX/UI') return tagColorsSchema['UX/UI'];
}
