import * as fs from 'fs';
import chroma from 'chroma-js';
import { materialColors } from './colors';

const description = `GIMP Palette\nName: Material Design Colors\n# By Philipp Kief\n\n`;

const init = () => {
  let result = description;
  materialColors.forEach((color) => {
    const rgb = chroma(color.hex).rgb();
    result += `${format(rgb[0])} ${format(rgb[1])} ${format(rgb[2])}  ${
      color.hex
    }\n`;
  });
  fs.writeFileSync('material-design-colors.gpl', result);
};

/**
 * Transforms number into string with a reserved space of 3 characters.
 * @param n Number value
 */
const format = (n: number): string => n.toString().padStart(3, ' ');

try {
  init();
} catch (error) {
  console.error(error);
}
