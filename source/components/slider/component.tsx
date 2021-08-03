import {
  FC,
  memo,
  useCallback, useEffect,
  useRef,
  useState,
} from 'react';
import { debounce } from 'lodash-es';

import { findClosestValueFromPercentage, numsToPercents } from './helpers';
import { KEY_LEFT, KEY_RIGHT } from './constants';
import * as styles from './styles';

interface Props {
  min?: number;
  max?: number;
  debounceTimeout?: number;
  defaultValue: number;
  onChange: (value: number) => void;
  className?: string;
}

const Slider: FC<Props> = ({
  debounceTimeout,
  min = 1,
  max = 100,
  defaultValue = min,
  onChange,
  className,
}) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);

  const isDragging = useRef(false);

  const [position, setPosition] = useState({
    percentage: numsToPercents(defaultValue - min, max - min),
    value: defaultValue,
  });

  const onChangeDebouncedCallback = useCallback(
    debounce((newValue: number) => {
      onChange(newValue);
    }, debounceTimeout),
    [],
  );

  const onTrackClick = useCallback((e) => {
    if (!trackRef.current) {
      return;
    }

    const { width } = trackRef.current.getBoundingClientRect();
    const { left } = e.target.getBoundingClientRect();
    const fromStart = e.clientX - left;

    const currentPercentage = numsToPercents(fromStart, width);
    const [nextValue, nextPercentage] = findClosestValueFromPercentage(max - min, currentPercentage);

    if (nextPercentage !== position.percentage) {
      setPosition({
        percentage: nextPercentage,
        value: nextValue + min,
      });

      onChangeDebouncedCallback(nextValue + min);
    }
  }, [onChange, position, min]);

  const onSliderKeydown = useCallback((e) => {
    if (e.code === KEY_LEFT || e.code === KEY_RIGHT) {
      e.preventDefault();
      e.stopPropagation();

      const newValue = {
        percentage: numsToPercents(position.value - 1 - min, max - min),
        value: position.value - 1,
      };

      if (position.value - 1 < min) {
        newValue.percentage = 0;
        newValue.value = min;
      }

      if (e.code === KEY_RIGHT) {
        newValue.percentage = numsToPercents(position.value + 1 - min, max - min);
        newValue.value = position.value + 1;

        if (position.value + 1 > max) {
          newValue.percentage = 100;
          newValue.value = max;
        }
      }

      if (newValue.value !== position.value) {
        setPosition(newValue);
        onChangeDebouncedCallback(newValue.value);
      }
    }
  }, [onChange, position, min]);

  const onThumbMouseDown = useCallback(() => {
    isDragging.current = true;
  }, []);

  useEffect(() => {
    const onDocMouseUp = () => {
      isDragging.current = false;
    };

    const onDocMouseMove = (e: MouseEvent) => {
      if (isDragging.current && trackRef.current) {
        e.preventDefault();
        e.stopPropagation();

        const { clientX } = e;
        const { left, right, width } = trackRef.current.getBoundingClientRect();

        if (clientX < left || clientX > right) {
          return;
        }

        const fromStart = e.clientX - left;

        const currentPercentage = numsToPercents(fromStart, width);
        const [nextValue, nextPercentage] = findClosestValueFromPercentage(max - min, currentPercentage);

        if (nextPercentage !== position.percentage) {
          setPosition({
            percentage: nextPercentage,
            value: nextValue + min,
          });

          onChangeDebouncedCallback(nextValue + min);
        }
      }
    };

    document.addEventListener('mouseup', onDocMouseUp);
    document.addEventListener('mousemove', onDocMouseMove);

    return () => {
      document.removeEventListener('mouseup', onDocMouseUp);
      document.removeEventListener('mousemove', onDocMouseMove);
    };
  }, [position]);

  return (
    <div {...{
      className,
      css: styles.slider,
      role: 'slider',
      ref: sliderRef,
      'aria-valuemin': min,
      'aria-valuemax': max,
      'aria-valuenow': position.value,
      tabIndex: 0,
      onKeyDown: onSliderKeydown,
    }}>
      <div {...{
        ref: thumbRef,
        css: styles.sliderThumb(position.percentage),
        onMouseDown: onThumbMouseDown,
      }} />

      <div {...{
        css: styles.sliderTrack,
        ref: trackRef,
        onMouseUp: onTrackClick,
      }}>
        <div {...{
          css: styles.sliderTrackActive(position.percentage),
        }} />
        <div {...{
          css: styles.sliderTrackInactive,
        }} />
      </div>
    </div>
  );
};

export default memo(Slider);
