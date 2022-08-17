import React, {
  forwardRef,
  InputHTMLAttributes,
  MouseEventHandler,
  ReactElement,
  RefCallback,
  useCallback,
  useMemo,
  useRef,
  useState,
} from 'react';
import styled from 'styled-components';
import IconChevronDown from '../SvgIcon/Icons/IconChevronDown';
import Input from '../Input/Input';
import Menu from '../Menu/Menu';
import MenuItem from '../Menu/MenuItem';
import { cssSelect } from './theme';
import { SelectProps } from './types';

const SelectContainer = styled.div`
  display: inline-flex;
  position: relative;
`;

const InputElement = styled(Input)`
  position: absolute;
  bottom: 0;
  left: 0;
  opacity: 0;
  pointer-events: none;
  width: 100%;
  box-sizing: border-box;
`;

const SelectIcon = styled(IconChevronDown)`
  position: absolute;
  top: calc(50% - 0.5em);
  right: 12px;
  pointer-events: none;
  ${InputElement}:focus + & {
    color: ${({ theme }) => theme.palette.primary.main};
  }
  ${InputElement}:disabled + & {
    color: ${({ theme }) => theme.palette.light3.main};
  }
`;

const SelectDisplay = styled.div`
  ${cssSelect}
`;

const getValueFromElement = (el: ReactElement) => {
  if (el.props.value !== undefined) {
    return el.props.value;
  }
  return el.props.children;
};

const Select = styled(
  forwardRef<
    HTMLInputElement,
    Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> & SelectProps
  >(
    (
      { className, children, disabled, readOnly, value, errored, ...props },
      ref,
    ) => {
      const displayRef = useRef<HTMLDivElement | null>(null);
      const inputRef = useRef<HTMLInputElement | null>(null);
      const [displayNode, setDisplayNode] = useState<
        HTMLDivElement | undefined
      >();
      const [displayValue, setDisplayValue] = useState<string>(``);
      const [open, setOpen] = useState(false);
      const childrenArray = useMemo(
        () => React.Children.toArray(children),
        [children],
      );

      const handleMouseDown = useCallback<MouseEventHandler<HTMLDivElement>>(
        (event) => {
          // Ignore everything but left-click
          if (event.button !== 0) {
            return;
          }
          // Hijack the default focus behavior.
          event.preventDefault();
          displayRef.current?.focus();

          setOpen(true);
        },
        [],
      );

      const handleDisplayRef = useCallback<RefCallback<HTMLDivElement>>(
        (node) => {
          displayRef.current = node;

          if (node) {
            setDisplayNode(node);
          }
        },
        [],
      );

      const handleInputRef = useCallback<RefCallback<HTMLInputElement>>(
        (node) => {
          inputRef.current = node;
          if (ref) {
            if (typeof ref === `function`) {
              ref(node);
            } else {
              ref.current = node;
            }
          }
        },
        [ref],
      );

      const handleMenuClose = useCallback(() => {
        setOpen(false);
      }, []);

      const handleItemClick = useCallback<MouseEventHandler<HTMLElement>>(
        (e) => {
          const node = e.currentTarget;
          if (!node.parentNode) {
            console.error(`Select parent not exists`);
            return;
          }
          if (!inputRef.current) {
            console.error(`Select input not properly initialized`);
            return;
          }
          const index = Array.prototype.indexOf.call(
            node.parentNode.childNodes,
            node,
          );

          if (index < 0) {
            console.error(`Select child not found`);
            return;
          }

          const child = childrenArray[index];
          const childValue = React.isValidElement(child)
            ? getValueFromElement(child)
            : child;

          inputRef.current.value = childValue || ``;
          setDisplayValue(childValue);
          handleMenuClose();
        },
        [childrenArray, handleMenuClose],
      );

      const childrenAsMenuItem = useMemo(
        () =>
          childrenArray.map((child) => {
            if (React.isValidElement(child)) {
              return (
                <MenuItem
                  key={child.key}
                  {...child.props}
                  onClick={handleItemClick}
                />
              );
            }
            return null;
          }),
        [childrenArray, handleItemClick],
      );

      return (
        <SelectContainer className={className}>
          <SelectDisplay
            ref={handleDisplayRef}
            onMouseDown={disabled || readOnly ? undefined : handleMouseDown}
            tabIndex={0}
            errored={errored}
          >
            {displayValue || <>&nbsp;</>}
          </SelectDisplay>
          <InputElement
            ref={handleInputRef}
            disabled={disabled}
            readOnly={readOnly}
            tabIndex={-1}
            {...props}
          />
          <SelectIcon />
          <Menu anchorEl={displayNode} open={open} onClose={handleMenuClose}>
            {childrenAsMenuItem}
          </Menu>
        </SelectContainer>
      );
    },
  ),
)``;

Select.defaultProps = {};

export default Select;
