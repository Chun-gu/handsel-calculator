import color from '@/styles/theme/color';

import keyClassfier from './keyClassifier';

export default function findKeyColor(value: string) {
  if (keyClassfier.isClear(value)) return [color.red5, color.red7];
  else if (keyClassfier.isOperator(value))
    return [color.yellow5, color.yellow7];
  else return [color.slate3, color.slate5];
}
