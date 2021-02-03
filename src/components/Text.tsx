import { Theme } from 'theme';

import { createText } from '@shopify/restyle';

// In a component
// <Text variant="header">Header</Text>
const Text = createText<Theme>();

export default Text;
