import type { ImageMetadata } from 'astro';

/**
 * Every image under src/assets is collected here at build time, so data files
 * can refer to artwork by filename instead of importing each one by hand.
 * A filename in the data that has no matching file is skipped with a warning
 * rather than breaking the build.
 */
const art = import.meta.glob<{ default: ImageMetadata }>('../assets/art/*.{jpg,jpeg,png,webp,avif}', {
  eager: true,
});
const work = import.meta.glob<{ default: ImageMetadata }>('../assets/work/*.{jpg,jpeg,png,webp,avif}', {
  eager: true,
});

function lookup(
  records: Record<string, { default: ImageMetadata }>,
  dir: string,
  file: string
): ImageMetadata | undefined {
  const hit = records[`../assets/${dir}/${file}`];
  return hit?.default;
}

export const artImage = (file: string) => lookup(art, 'art', file);
export const workImage = (file: string) => lookup(work, 'work', file);
