import React, {
  FC,
  FocusEventHandler,
  isValidElement,
  PropsWithChildren,
  useCallback,
  useMemo,
  useState,
} from 'react';
import styled from 'styled-components';
import { Placement } from '@popperjs/core';
import Popper from '../Popper/Popper';
import hexToRgb from '../../utils/hexToRgb';
import Text from '../Text/Text';

export interface TooltipProps {
  title: string;
  placement?: Placement;
}

const TooltipContent = styled.div`
  max-width: 300px;
  padding: 8px 16px;
  border-radius: 4px;
  background-color: rgba(
    ${({ theme }) => hexToRgb(theme.palette.primary.dark || `#003187`)},
    0.85
  );
  color: ${({ theme }) => theme.palette.primary.contrastText};
  overflow-wrap: break-word;
  position: relative;
`;

const arrowDistance = `12px`;
const arrowWidth = `10px`;
const arrowHeight = `7.1px`; /* = width / sqrt(2) = (length of the hypotenuse) */

const TooltipArrow = styled.span`
  overflow: hidden;
  position: absolute;
  width: ${arrowWidth};
  height: ${arrowHeight};
  box-sizing: border-box;
  color: rgba(
    ${({ theme }) => hexToRgb(theme.palette.primary.dark || `#003187`)},
    0.8
  );

  &::before {
    content: '';
    margin: auto;
    display: block;
    width: 100%;
    height: 100%;
    background-color: currentColor;
    transform: rotate(45deg);
  }
`;

const StyledPopper = styled(Popper)`
  &[data-popper-placement*='top'] {
    ${TooltipContent} {
      margin-bottom: ${arrowDistance};
    }
    ${TooltipArrow} {
      bottom: -${arrowHeight};
      &::before {
        transform-origin: 100% 0;
      }
    }
  }
  &[data-popper-placement*='bottom'] {
    ${TooltipContent} {
      margin-top: ${arrowDistance};
    }
    ${TooltipArrow} {
      top: -${arrowHeight};
      &::before {
        transform-origin: 0 100%;
      }
    }
  }
  &[data-popper-placement*='left'] {
    ${TooltipContent} {
      transform-origin: right center;
      margin-right: ${arrowDistance};
    }
    ${TooltipArrow} {
      right: -${arrowHeight};
      height: ${arrowWidth};
      width: ${arrowHeight};
      &::before {
        transform-origin: 0 0;
      }
    }
  }
  &[data-popper-placement*='right'] {
    ${TooltipContent} {
      transform-origin: left center;
      margin-left: ${arrowDistance};
    }
    ${TooltipArrow} {
      left: -${arrowHeight};
      height: ${arrowWidth};
      width: ${arrowHeight};
      &::before {
        transform-origin: 100% 100%;
      }
    }
  }
`;

const Tooltip: FC<PropsWithChildren<TooltipProps>> = ({
  title,
  children,
  placement,
  ...props
}) => {
  const [childNode, setChildNode] = useState<HTMLElement | null>(null);
  const [arrowEl, setArrowEl] = useState<HTMLElement | null>(null);
  const [open, setOpen] = useState(false);

  const handleFocus = useCallback<FocusEventHandler<HTMLElement>>(
    (e) => {
      if (!childNode) {
        setChildNode(e.currentTarget);
      }
      setOpen(true);
    },
    [childNode],
  );

  const handleBlur = useCallback<FocusEventHandler<HTMLElement>>(() => {
    setOpen(false);
  }, []);

  const modifiers = useMemo(
    () => [
      {
        name: `arrow`,
        enabled: Boolean(arrowEl),
        options: {
          element: arrowEl,
        },
      },
    ],
    [arrowEl],
  );

  return (
    <>
      {isValidElement(children) &&
        React.cloneElement(children, {
          onFocus: handleFocus,
          onBlur: handleBlur,
        })}
      <StyledPopper
        {...props}
        modifiers={modifiers}
        anchorEl={childNode}
        open={open}
        placement={placement}
      >
        <TooltipContent>
          <Text variant="tooltip">{title}</Text>
          <TooltipArrow ref={setArrowEl} />
        </TooltipContent>
      </StyledPopper>
    </>
  );
};

Tooltip.defaultProps = {
  placement: `top`,
};

export default Tooltip;
