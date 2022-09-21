import React, { forwardRef, InputHTMLAttributes, useState } from 'react';
// import useEventCallback from `use-event-callback`;
import styled from 'styled-components';
import {
  SliderVariant,
  sliderVariants,
  SliderColor,
  sliderColors,
} from './types';

const INTENTIONAL_DRAG_COUNT_THRESHOLD = 10;

const SliderContainer = styled.div`
  position: relative;
  outline: 0px;
  margin: auto;
  display: flex;
  justify-content: center;
  padding: 24px;
  border-width: 1px 0px;
  border-style: solid;
  border-color: rgba(194, 224, 255, 0.08);
  border-image: initial;
`;

const SliderWarpper = styled.div`
  width: 100%;
`;

const SliderSpan = styled.span`
  border-radius: 12px;
  box-sizing: content-box;
  display: inline-block;
  position: relative;
  cursor: inherit;
  touch-action: none;
  color: #003187;
  height: 4px;
  width: 100%;
  padding: 13px 0px;
  cursor: pointer;
`;

const FullRangeSpan = styled.span`
  display: block;
  position: absolute;
  border-radius: inherit;
  background-color: currentColor;
  color: #d9d9d9;
  opacity: 0.38;
  width: 100%;
  height: inherit;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
`;

const SetRangeSpan = styled.span`
  display: flex;
  position: absolute;
  border-radius: inherit;
  border: 1px solid currentColor;
  background-color: currentColor;
  height: inherit;
  top: 50%;
  transform: translateY(-50%);
`;
const Circle = styled.span`
  position: absolute;
  width: 15px;
  height: 15px;
  box-sizing: border-box;
  border-radius: 50%;
  outline: 0px;
  background-color: currentcolor;
  display: flex;

  align-items: center;

  justify-content: center;
  transition: box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    left 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    bottom 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  top: 50%;
  transform: translate(-50%, -50%);
`;
const PointerSpan = styled.span`
  position: absolute;
  width: 15px;
  height: 15px;
  box-sizing: border-box;
  border-radius: 50%;
  outline: 0px;
  background-color: currentcolor;
  display: flex;

  align-items: center;

  justify-content: center;
  transition: box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    left 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    bottom 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const SliderInput = styled.input`
  border: 0;
  height: 100%;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 100%;
  cursor: pointer;
  background: transparent;
  clip: rect(0 0 0 0);
`;

const ValueLabelContainer = styled.span`
  top: 50%;
  transform: translateY(-200%) scale(1);
`;
const ValueLabel = styled.span``;

export interface SliderProps {
  ariaLabel?: SliderVariant;
  min: number;
  max: number;
  step?: number;
  value: number;
  valueLabelDisplay?: string;
  color?: SliderColor;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeCommitted?: (
    event: React.SyntheticEvent | Event,
    value: number | number[],
  ) => void;
  disabled?: boolean;
}

const Slider = styled(
  forwardRef<
    HTMLInputElement,
    Omit<
      InputHTMLAttributes<HTMLInputElement>,
      'type' | 'aria-label' | `color` | 'size'
    > &
      SliderProps
  >(
    (
      {
        className,
        ariaLabel,
        min,
        max,
        value,
        color,
        onChange,
        onChangeCommitted,
        disabled,
        ...props
      },
      ref,
    ) => {
      const [range, setRange] = useState((value - min) / (max - min));
      const sliderSpanRef = React.useRef<HTMLSpanElement>(null);
      const moveCount = React.useRef(0);
      const [valueState, setValueState] = useState<string>(value.toString());
      const touchId = React.useRef<number>();
      // We can't use the :active browser pseudo-classes.
      // - The active state isn't triggered when clicking on the rail.
      // - The active state isn't transferred when inversing a range slider.
      const [active, setActive] = React.useState(-1);
      const [dragging, setDragging] = React.useState(false);

      const stopListening = React.useCallback(() => {
        // const doc = window.document.ownerDocument(sliderRef.current);
        const doc: any = sliderSpanRef.current?.ownerDocument;
        // doc.removeEventListener('mousemove', handleTouchMove);
        doc.removeEventListener('mouseup', handleTouchEnd);
        // doc.removeEventListener('touchmove', handleTouchMove);
        doc.removeEventListener('touchend', handleTouchEnd);
      }, []);

      // Total Range between min and max
      const valueRange = React.useCallback(
        (getValue: number, min: number, max: number) => {
          return (getValue - min) / (max - min);
        },
        [],
      );

      // Label Percentage Calculation
      const percentLabel = React.useCallback((range: number) => {
        return (range * 100).toFixed(1);
      }, []);

      const trackFinger = (
        event: TouchEvent | MouseEvent | React.MouseEvent,
        touchId: React.RefObject<any>,
      ) => {
        // The event is TouchEvent
        if (
          touchId.current !== undefined &&
          (event as TouchEvent).changedTouches
        ) {
          const touchEvent = event as TouchEvent;
          for (let i = 0; i < touchEvent.changedTouches.length; i += 1) {
            const touch = touchEvent.changedTouches[i];
            if (touch.identifier === touchId.current) {
              return {
                x: touch.clientX,
                y: touch.clientY,
              };
            }
          }

          return false;
        }

        // The event is MouseEvent
        return {
          x: (event as MouseEvent).clientX,
          y: (event as MouseEvent).clientY,
        };
      };

      const percentToValue = (percent: number, min: number, max: number) => {
        return (max - min) * percent + min;
      };

      const getFingerNewValue = ({
        finger,
      }: {
        finger: { x: number; y: number };
      }) => {
        const { current: slider } = sliderSpanRef;
        const { width, height, bottom, left } = slider!.getBoundingClientRect();
        let percent;
        percent = (finger.x - left) / width;

        let newValue;
        newValue = percentToValue(percent, min, max);
        if (newValue < min) {
          newValue = min;
        }
        if (newValue > max) {
          newValue = max;
        }
        return { newValue };
      };

      const handleChange =
        onChange &&
        ((event: Event | React.SyntheticEvent) => {
          // Redefine target to allow name and value to be read.
          // This allows seamless integration with the most popular form libraries.
          // https://github.com/mui/material-ui/issues/13485#issuecomment-676048492
          // Clone the event to not override `target` of the original event.
          const nativeEvent =
            (event as React.SyntheticEvent).nativeEvent || event;
          // @ts-ignore The nativeEvent is function, not object
          const clonedEvent = new nativeEvent.constructor(
            nativeEvent.type,
            nativeEvent,
          );

          Object.defineProperty(clonedEvent, 'target', {
            writable: true,
            value: { value, name },
          });

          onChange(clonedEvent);
        });

      const focusThumb = ({
        sliderSpanRef,
        setActive,
      }: {
        sliderSpanRef: React.RefObject<any>;
        setActive?: (num: number) => void;
      }) => {
        const doc = sliderSpanRef.current.ownerDocument;
        if (!sliderSpanRef.current?.contains(doc.activeElement))
          if (setActive) {
            setActive(0);
          }
      };

      const handleTouchMove = React.useCallback(
        (nativeEvent: TouchEvent | MouseEvent) => {
          const finger = trackFinger(nativeEvent, touchId);

          if (!finger) {
            return;
          }

          moveCount.current += 1;

          // Cancel move in case some other element consumed a mouseup event and it was not fired.
          // @ts-ignore buttons doesn't not exists on touch event
          if (nativeEvent.type === 'mousemove' && nativeEvent.buttons === 0) {
            // eslint-disable-next-line @typescript-eslint/no-use-before-define
            handleTouchEnd(nativeEvent);
            return;
          }

          const { newValue } = getFingerNewValue({
            finger,
          });

          focusThumb({ sliderSpanRef, setActive });
          setValueState(newValue.toFixed(1).toString());

          if (
            !dragging &&
            moveCount.current > INTENTIONAL_DRAG_COUNT_THRESHOLD
          ) {
            setDragging(true);
          }

          if (handleChange) {
            handleChange(nativeEvent);
          }
        },
        [],
      );

      const handleTouchEnd = React.useCallback(
        (nativeEvent: TouchEvent | MouseEvent) => {
          const finger = trackFinger(nativeEvent, touchId);

          if (!finger) {
            return;
          }

          const { newValue } = getFingerNewValue({ finger });

          if (onChangeCommitted) {
            onChangeCommitted(nativeEvent, newValue);
          }

          touchId.current = undefined;

          // eslint-disable-next-line @typescript-eslint/no-use-before-define
          stopListening();
        },
        [],
      );

      const createHandleMouseDown = React.useCallback(
        (event: React.MouseEvent<HTMLSpanElement>) => {
          if (disabled) {
            return;
          }

          if (event.defaultPrevented) {
            return;
          }

          // Only handle left clicks
          if (event.button !== 0) {
            return;
          }

          // Avoid text selection
          event.preventDefault();
          const finger = trackFinger(event, touchId);
          if (finger !== false) {
            const { newValue } = getFingerNewValue({
              finger,
            });
            focusThumb({ sliderSpanRef, setActive });
            console.log(`newValue = `, newValue);
            setValueState(newValue.toFixed(1).toString());

            if (handleChange) {
              handleChange(event);
            }
          }

          moveCount.current = 0;
          const doc: any = sliderSpanRef.current?.ownerDocument;
          doc.addEventListener('mousemove', handleTouchMove);
          doc.addEventListener('mouseup', handleTouchEnd);
        },
        [],
      );

      React.useEffect(() => {
        setRange(valueRange(Number(valueState), min, max));
        console.log(`range======`, range);
      }, [valueState, dragging]);

      return (
        <SliderContainer color={color}>
          <SliderWarpper>
            <SliderSpan
              onClick={(e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
                console.log(`=======`, valueState);
                createHandleMouseDown(e);
              }}
              ref={sliderSpanRef}
            >
              <FullRangeSpan />
              <SetRangeSpan
                style={{
                  width: `${range * 100}%`,
                }}
              ></SetRangeSpan>
              <PointerSpan style={{ left: `${range * 100}%` }}>
                <SliderInput
                  type="range"
                  min={min}
                  max={max}
                  ref={ref}
                  onChange={(e) => {
                    onChange(e);
                  }}
                  {...props}
                />
                <ValueLabelContainer>
                  <ValueLabel>{percentLabel(range)}%</ValueLabel>
                </ValueLabelContainer>
              </PointerSpan>
            </SliderSpan>
          </SliderWarpper>
        </SliderContainer>
      );
    },
  ),
)``;

Slider.defaultProps = {
  ariaLabel: sliderVariants.BASIC,
  color: sliderColors.PRIMARY,
  step: 1,
  min: 0,
  max: 100,
  value: 20,
};

export default Slider;
