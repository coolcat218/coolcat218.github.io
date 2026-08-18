/**
 * Visual art plates, in the order they appear on /art.
 *
 * Adding a piece:
 *   1. drop the file into src/assets/art/
 *   2. add an entry below with its filename
 * Astro handles resizing, WebP conversion and responsive srcsets from there.
 *
 * `col` is a CSS grid-column on a 12-column grid — this is what creates the
 * deliberate asymmetry down the page. Edit freely.
 *
 * `title` is the title from the old Wix site, recovered from the still-live Wix
 * edge and matched back to these files by pixel comparison. `medium` and `year`
 * are blank because the Wix site never carried them per piece — it stated the
 * media once, for the whole page ("acrylic, watercolor, charcoal and pencil").
 * Fill either in and it renders in the caption automatically.
 */
export interface Plate {
  /** Filename inside src/assets/art/ */
  file: string;
  col: string;
  alt: string;
  title?: string;
  medium?: string;
  year?: string;
}

export const plates: Plate[] = [
  { file: 'art-07.jpg', col: '2 / span 6', title: 'Creation', alt: 'Two hands reaching upward toward a golden sun, wrapped in ribbons of colored light' },
  { file: 'art-01.jpg', col: '9 / span 4', title: 'Cleanliness is Next to Godliness', alt: 'Three hands meeting, with water pouring over them, drawn on toned paper' },
  { file: 'art-03.jpg', col: '1 / span 5', title: 'Portrait Study', alt: 'Graphite portrait of an older man in a collared shirt, looking off to one side' },
  { file: 'art-05.jpg', col: '7 / span 5', title: 'Portrait Study 2', alt: 'Graphite portrait of a young woman with long dark hair and a turtleneck' },
  { file: 'art-02.jpg', col: '3 / span 8', title: 'still life', alt: 'Still life in acrylic: a blue kettle, a plate of apples, a wine bottle and a champagne glass on draped cloth' },
  { file: 'art-09.jpg', col: '2 / span 5', title: 'Metamorphosis', alt: 'A dolphin leaping in front of a red sun above cresting stylized waves' },
  { file: 'art-06.jpg', col: '8 / span 4', title: 'Oiled Hands', alt: 'A pelican rising from choppy water with its wings spread wide' },
  { file: 'art-08.jpg', col: '1 / span 4', title: 'Hen-ry VIII', alt: 'A rooster-headed figure in Renaissance courtly dress, standing on a patterned carpet in a palace interior' },
  { file: 'art-04.jpg', col: '6 / span 7', title: 'Card Players', alt: 'Two animal-headed figures in hats and overcoats playing cards at a table, after Cezanne' },

  // --- Paintings: drop these three files into src/assets/art/ under these names ---
  { file: 'art-10-cafe.jpg',       col: '1 / span 8', alt: 'A sidewalk cafe under a red umbrella in warm evening light, figures passing on the street' },
  { file: 'art-11-lighthouse.jpg', col: '4 / span 9', alt: 'A lighthouse and clapboard houses seen through trees at dusk, painted in blues and greens' },
  { file: 'art-12-tomatoes.jpg',   col: '2 / span 6', alt: 'Watercolor study of halved heirloom tomatoes with basil leaves' },
];
