import {
  forwardRef,
  memo,
  useEffect,
  useRef, useState,
} from 'react';

import { useUserStylesStore } from '@/stores/userStyles';
import { useContentStore } from '@/stores/content';
import { useFontStore } from '@/stores/fonts';

import {
  clearAllHandlers,
  createFragment,
  setAllHandlers,
} from './helpers';

import * as styles from './styles';

interface Props {
  className?: string;
}

const PreviewContent = forwardRef<HTMLDivElement, Props>(({
  className,
}, ref) => {
  const [isLoading, setIsLoading] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const { userStyles } = useUserStylesStore();
  const { content: rawContent } = useContentStore();
  const { fetchFont } = useFontStore();

  const content = new DOMParser()
    .parseFromString(rawContent, 'text/html')
    .body;

  useEffect(() => {
    if (contentRef.current) {
      clearAllHandlers(contentRef.current);

      contentRef.current.innerHTML = '';

      contentRef.current.appendChild(
        setAllHandlers(
          createFragment(content),
        ),
      );
    }

    return () => {
      if (contentRef.current) {
        clearAllHandlers(contentRef.current);
      }
    };
  }, [content.innerHTML]);

  useEffect(() => {
    setIsLoading(true);

    fetchFont(userStyles.font)
      .finally(() => { setIsLoading(false); });
  }, [userStyles.font]);

  return (
    <div {...{
      className,
      ref,
      css: [styles.previewContainer, styles.applyConfigTheme(userStyles)],
    }}>
      {
        isLoading && (
          <p>loading here!</p>
        )
      }

      <div {...{
        ref: contentRef,
      }} />
    </div>
  );
});

export default memo(PreviewContent);
