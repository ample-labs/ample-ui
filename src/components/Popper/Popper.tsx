import React, {
  FC,
  HTMLAttributes,
  PropsWithChildren,
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { createPortal } from 'react-dom';
import styled, { CSSObject } from 'styled-components';
import { createPopper, Instance, Options, Placement } from '@popperjs/core';
import { Transition, TransitionStatus } from 'react-transition-group';
import createTransition from '../../utils/createTransition';

export interface PopperProps extends HTMLAttributes<HTMLDivElement> {
  anchorEl: HTMLElement | null;
  open?: boolean;
  placement?: Placement;
  modifiers?: Options['modifiers'];
}

const PopperTooltip = styled.div``;

const transitionTimeout = 200;
const getScale = (value: number) => `scale(${value}, ${value ** 2})`;
const transitionStyles: Partial<Record<TransitionStatus, CSSObject>> = {
  entering: {
    opacity: 1,
    transform: getScale(1),
  },
  entered: {
    opacity: 1,
    transform: `none`,
  },
};

const Popper: FC<PropsWithChildren<PopperProps>> = ({
  anchorEl,
  open,
  placement,
  modifiers,
  children,
  ...props
}) => {
  const tooltipRef = useRef<HTMLDivElement>(null);
  const popperRef = useRef<Instance | null>(null);
  const [exited, setExited] = useState(true);

  const handleEnter = useCallback(() => {
    setExited(false);
  }, []);

  const handleExited = useCallback(() => {
    setExited(true);
  }, []);

  useLayoutEffect(() => {
    if (!anchorEl || exited) {
      return undefined;
    }

    if (!tooltipRef.current) {
      return undefined;
    }

    const popper = createPopper(anchorEl, tooltipRef.current, {
      placement,
      modifiers,
    });

    popperRef.current = popper;

    return () => {
      popper.destroy();
      popperRef.current = null;
    };
  }, [anchorEl, exited, modifiers, placement]);

  if (!open && exited) {
    return null;
  }

  return createPortal(
    <PopperTooltip ref={tooltipRef} {...props}>
      <Transition
        appear
        in={open}
        onEnter={handleEnter}
        onExited={handleExited}
        timeout={transitionTimeout}
        unmountOnExit
      >
        {(state) => {
          if (React.isValidElement(children)) {
            return React.cloneElement(children, {
              style: {
                transition: [
                  createTransition(
                    [`opacity`],
                    `200ms`,
                    `cubic-bezier(0.4, 0, 0.2, 1) 0ms`,
                  ),
                  createTransition(
                    [`transform`],
                    `133ms`,
                    `cubic-bezier(0.4, 0, 0.2, 1) 0ms`,
                  ),
                ].join(`,`),
                opacity: 0,
                transform: getScale(0.75),
                ...transitionStyles[state],
                ...children.props.style,
              },
            });
          }
          return children;
        }}
      </Transition>
    </PopperTooltip>,
    document.body,
  );
};

Popper.defaultProps = {
  placement: `bottom`,
  modifiers: [],
};

export default Popper;
