/**
 * Visual art plates, in the order they appear on /art — newest first.
 *
 * Adding a piece:
 *   1. drop the file into src/assets/art/
 *   2. add an entry below with its filename
 * Astro handles resizing, WebP conversion and responsive srcsets from there.
 *
 * `title` renders at the left of the caption and `year` at the right, as a
 * gallery label. Both are optional: a piece with no title falls back to
 * "Plate NN", and the nine older drawings carry no date because the Wix site
 * recorded none.
 */
export interface Plate {
  /** Filename inside src/assets/art/ */
  file: string;
  alt: string;
  title?: string;
  medium?: string;
  year?: string;
}

export const plates: Plate[] = [
  {
    file: 'art-13-summer-spoils.webp',
    title: 'Summer Spoils, Fort Mason',
    year: 'June 2026',
    alt: 'Watercolor study of halved heirloom tomatoes with basil leaves, with soft violet cast shadows on white paper',
  },
  {
    file: 'art-12-fireflies.webp',
    title: 'Ballet of Fireflies, NY',
    year: 'August 2026',
    alt: 'A meadow at dusk with sunbeams falling through trees, a fawn standing beside a winding path, a gazebo at the right and fireflies scattered through the grass',
  },
  {
    file: 'art-11-montauk.webp',
    title: 'End of the World, Montauk',
    year: 'August 2026',
    alt: 'A lighthouse and clapboard houses on a grassy headland, seen between dark trees with fireflies among the leaves, painted in blues and greens under a pale sunset over the sea',
  },
  {
    file: 'art-10-seventh-ave.webp',
    title: 'Seventh Ave, Greenwich Village',
    year: 'August 2026',
    alt: 'A sidewalk cafe under a red umbrella on a Greenwich Village street, painted in saturated reds and oranges, with diners seated at tables and figures walking past in low evening light',
  },

  { file: 'art-04.jpg', title: 'Card Players', alt: 'Two animal-headed figures in hats and overcoats playing cards at a table, after Cezanne' },
  { file: 'art-08.jpg', title: 'Hen-ry VIII', alt: 'A rooster-headed figure in Renaissance courtly dress, standing on a patterned carpet in a palace interior' },
  { file: 'art-06.jpg', title: 'Oiled Hands', alt: 'A pelican rising from choppy water with its wings spread wide' },
  { file: 'art-09.jpg', title: 'Metamorphosis', alt: 'A dolphin leaping in front of a red sun above cresting stylized waves' },
  { file: 'art-02.jpg', title: 'still life', alt: 'Still life in acrylic: a blue kettle, a plate of apples, a wine bottle and a champagne glass on draped cloth' },
  { file: 'art-05.jpg', title: 'Portrait Study 2', alt: 'Graphite portrait of a young woman with long dark hair and a turtleneck' },
  { file: 'art-03.jpg', title: 'Portrait Study', alt: 'Graphite portrait of an older man in a collared shirt, looking off to one side' },
  { file: 'art-01.jpg', title: 'Cleanliness is Next to Godliness', alt: 'Three hands meeting, with water pouring over them, drawn on toned paper' },
  { file: 'art-07.jpg', title: 'Creation', alt: 'Two hands reaching upward toward a golden sun, wrapped in ribbons of colored light' },
];
