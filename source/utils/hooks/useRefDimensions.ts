import {
  MutableRefObject,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { debounce } from 'lodash-es';

type Dimensions = {
  height: number;
  width: number;
};

const getDimensionsFromBoundingClientRect = (element: HTMLElement | null): Dimensions => {
  const rect: Dimensions = {
    height: 0,
    width: 0,
  };

  if (element) {
    const elementRect = element.getBoundingClientRect();

    rect.height = elementRect.height;
    rect.width = elementRect.width;
  }

  return rect;
};

export const useRefDimensions = <T extends MutableRefObject<HTMLDivElement | null>>(ref: T): Dimensions => {
  const defaultDimension = getDimensionsFromBoundingClientRect(ref.current);
  const [dimensions, setDimensions] = useState<Dimensions>(defaultDimension);

  const onResizeHandler = useCallback(debounce(() => {
    if (ref.current) {
      setDimensions(getDimensionsFromBoundingClientRect(ref.current));
    }
  }, 100), [ref]);

  useEffect(() => {
    if (!ref.current) {
      return () => {
        // Nothing to do here
      };
    }

    if (typeof ResizeObserver === 'function') {
      const resizeObserver = new ResizeObserver(() => {
        onResizeHandler();
      });

      resizeObserver.observe(ref.current);

      return () => {
        resizeObserver.disconnect();
      };
    }
    window.addEventListener('resize', onResizeHandler);

    return () => {
      window.removeEventListener('resize', onResizeHandler);
    };
  }, [ref?.current]);

  return dimensions;
};
