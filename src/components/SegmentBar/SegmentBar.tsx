import React, {
  FC,
  MouseEvent,
  MouseEventHandler,
  PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import styled, { CSSObject } from 'styled-components';
import SegmentButton from './SegmentButton';
import { SegmentBarColor, segmentBarColors } from './types';

const SegmentBarContainer = styled.div``;

const SegmentScroller = styled.div<{ fixed?: boolean }>`
  position: relative;
  display: inline-block;
  flex: 1 1 auto;
  white-space: nowrap;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  > ${SegmentButton} {
    z-index: 1;
  }
`;

const Indicator = styled.span<Pick<SegmentBarProps, 'color'>>`
  position: absolute;
  height: 100%;
  bottom: 0;
  width: 100%;
  background-color: ${({ theme, color }) =>
    color && theme.palette[color].light};
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 8px;
`;

export interface SegmentBarProps {
  color?: SegmentBarColor;
  selectedIndex: number;
  onChange?: (e: MouseEvent<HTMLDivElement>, index: number) => void;
}

const SegmentBar: FC<PropsWithChildren<SegmentBarProps>> = ({
  children,
  color,
  selectedIndex,
  onChange,
  ...props
}) => {
  const listRef = useRef<HTMLDivElement | null>(null);
  const [indicatorStyle, setIndicatorStyle] = useState<CSSObject>({});

  const updateIndicatorState = useCallback(() => {
    const listEl = listRef.current;
    if (listEl && listEl.children.length > 0) {
      const tab = listEl.children[selectedIndex];
      const listRect = listEl.getBoundingClientRect();
      const tabRect = tab.getBoundingClientRect();

      setIndicatorStyle({
        left: tabRect.left - listRect.left,
        width: tabRect.width,
      });
    }
  }, [selectedIndex]);

  useEffect(() => {
    updateIndicatorState();
  }, [updateIndicatorState]);

  const handleListClick = useCallback<MouseEventHandler<HTMLDivElement>>(
    (e) => {
      if (listRef.current) {
        const node = e.target;
        const index = Array.prototype.indexOf.call(
          listRef.current.children,
          node,
        );

        if (index > -1) {
          onChange?.(e, index);
          return;
        }
      }
      console.warn(`child not found`);
    },
    [onChange],
  );

  const newChildren = useMemo(
    () =>
      React.Children.map(children, (child, i) => {
        if (!React.isValidElement(child)) {
          return null;
        }

        return React.cloneElement(child, {
          selected: selectedIndex === i,
        });
      }),
    [children, selectedIndex],
  );

  return (
    <SegmentBarContainer {...props}>
      <SegmentScroller>
        <Indicator color={color} style={indicatorStyle} />
        <FlexContainer ref={listRef} onClick={handleListClick}>
          {newChildren}
        </FlexContainer>
      </SegmentScroller>
    </SegmentBarContainer>
  );
};

SegmentBar.defaultProps = {
  color: segmentBarColors.PRIMARY,
};

export default SegmentBar;
