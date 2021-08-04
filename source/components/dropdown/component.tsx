import {
  FC,
  memo,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

import { IconArrow } from '@/components/icons';

import Option from './components/option';

import { DropdownItem } from './types';
import { findByValueFromList } from './helpers';

import * as styles from './styles';

interface Props {
  className?: string;
  defaultSelected?: DropdownItem['value'] | DropdownItem;
  prefix?: string | ReactNode;
  items: DropdownItem[];
  onChange: (selected: DropdownItem) => void;
}

const Dropdown: FC<Props> = ({
  className,
  prefix,
  items,
  defaultSelected,
  onChange,
}) => {
  const optionsRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [current, setCurrent] = useState<DropdownItem>(findByValueFromList(defaultSelected, items));
  const [optionsVisible, setOptionsVisible] = useState(false);

  useEffect(() => {
    if (optionsRef.current && optionsVisible) {
      (optionsRef.current.firstElementChild as HTMLElement).focus();
    }
  }, [optionsRef, optionsVisible]);

  const outerClickCallback = useCallback((e) => {
    if (!dropdownRef.current || !dropdownRef.current.contains(e.target)) {
      setOptionsVisible(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('click', outerClickCallback);

    return () => {
      document.removeEventListener('click', outerClickCallback);
    };
  }, []);

  return (
    <div {...{
      className,
      css: styles.dropdown(optionsVisible),
      ref: dropdownRef,
    }}>
      <Option {...{
        css: styles.dropdownSelected,
        value: current.value,
        onClick: () => {
          setOptionsVisible(!optionsVisible);
        },
      }}>
        {
          prefix && (
            <span {...{
              css: styles.dropdownSelectedPrefix,
            }}>
              {prefix}
            </span>
          )
        }

        <span {...{
          css: styles.dropdownSelectedText,
        }}>
          {current.text}
        </span>

        <IconArrow {...{
          css: styles.dropdownSelectedArrow(optionsVisible),
        }} />
      </Option>

      <div {...{
        ref: optionsRef,
        css: styles.dropdownContent(optionsVisible),
      }}>
        {
          items.map((item) => (
            <Option {...{
              className: item.className,
              css: styles.dropdownContentItem,
              key: item.value,
              value: item.value,
              onClick: () => {
                setCurrent(item);
                onChange(item);
                setOptionsVisible(false);
              },
            }}>
              {item.text}
            </Option>
          ))
        }
      </div>
    </div>
  );
};

export default memo(Dropdown);
