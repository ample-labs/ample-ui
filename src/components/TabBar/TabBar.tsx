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
import { TabBarColor, tabBarColors } from './types';

const TabBarContainer = styled.div``;

const TabScroller = styled.div<{ fixed?: boolean }>`
  position: relative;
  display: inline-block;
  flex: 1 1 auto;
  white-space: nowrap;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Underline = styled.span`
  position: absolute;
  height: 1px;
  bottom: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.palette.grey2.main};
`;

const Indicator = styled.span<Pick<TabBarProps, 'color'>>`
  position: absolute;
  height: 3px;
  bottom: 0;
  width: 100%;
  background-color: ${({ theme, color }) => color && theme.palette[color].main};
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`;

export interface TabBarProps {
  color?: TabBarColor;
  selectedIndex: number;
  onChange?: (e: MouseEvent<HTMLDivElement>, index: number) => void;
}

const TabBar: FC<PropsWithChildren<TabBarProps>> = ({
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
    <TabBarContainer {...props}>
      <TabScroller>
        <FlexContainer ref={listRef} onClick={handleListClick}>
          {newChildren}
        </FlexContainer>
        <Underline />
        <Indicator color={color} style={indicatorStyle} />
      </TabScroller>
    </TabBarContainer>
  );
};

TabBar.defaultProps = {
  color: tabBarColors.PRIMARY,
};

export default TabBar;
