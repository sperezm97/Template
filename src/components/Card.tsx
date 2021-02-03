import { Theme } from 'theme';

import {
  createRestyleComponent,
  createVariant,
  spacing,
  SpacingProps,
  VariantProps,
} from '@shopify/restyle';

type Props = SpacingProps<Theme> & VariantProps<Theme, 'cardVariants'>;
const Card = createRestyleComponent<Props>([spacing, createVariant({ themeKey: 'cardVariants' })]);

export default Card;
