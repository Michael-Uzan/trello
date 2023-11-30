import { useState, useEffect, useRef } from 'react';
import { LRUCache } from 'lru-cache';

export const loadedImagesCache = new LRUCache({
  // A reasonable amount of images to cover all UI elements + a single story.
  max: 150,
});

export function useImage(src: string): HTMLImageElement | null {
  const loadedDefault: boolean = wasImageLoaded(src);
  const [loaded, setLoaded] = useState<boolean>(loadedDefault);
  const imageRef = useRef<HTMLImageElement | null>(
    loadedDefault ? preloadedImageObject(src) : null,
  );

  useEffect(() => {
    if (!src || loaded) {
      return undefined;
    }

    imageRef.current = new Image();
    const image = imageRef.current;

    if (image) {
      image.onload = () => {
        setLoaded(true);
        loadedImagesCache.set(src, true);
      };
      image.onerror = () => {
        setTimeout(() => {
          image.src = src;
        }, 500);
      };

      image.src = src;
    }

    return () => {
      if (image) {
        image.onload = null;
        image.onerror = null;
      }
    };
  }, [src, loaded]);

  return loaded && src ? imageRef.current : null;
}

export function wasImageLoaded(src: string): boolean {
  return !!(
    src &&
    (src.startsWith('data:image') || loadedImagesCache.get(src))
  );
}

function preloadedImageObject(src: string): HTMLImageElement {
  const image = new Image();
  image.src = src;
  return image;
}
