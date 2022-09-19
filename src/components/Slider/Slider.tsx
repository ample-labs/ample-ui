import React, { forwardRef, InputHTMLAttributes } from 'react';
import styled from 'styled-components';
import {
  SliderVariant,
  sliderVariants,
  SliderColor,
  sliderColors,
} from './types';

const SliderContainer = styled.div`
  position: relative;
  outline: 0px;
  margin: auto;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  padding: 24px;
  border-width: 1px 0px;
  border-style: solid;
  border-color: rgba(194, 224, 255, 0.08);
  border-image: initial;
`;

const SliderWarpper = styled.div`
  width: 320px;
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
`;

const FullRangeSpan = styled.span`
  isplay: block;
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
  display: block;
  position: absolute;
  border-radius: inherit;
  border: 1px solid currentColor;
  background-color: currentColor;
  height: inherit;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -moz-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
`;

const PointerSpan = styled.span`
  height: 24px;
  width: 24px;
  background-color: rgb(255, 255, 255);
  color: #003187;
`;

const SliderInput = styled.input`
  border-radius: 12px;
  box-sizing: content-box;
  display: inline-block;
  position: absolute;
  top: 0px;
  width: 15px;
  height: 15px;
  cursor: inherit;
  touch-action: none;
  height: 2px;
  width: 100%;
  padding: 13px 0px;
`;

const ValueLabelContainer = styled.span``;
const ValueLabel = styled.span`
  font-color: #f8f8f8;
`;

export interface SliderProps {
  ariaLabel?: SliderVariant;
  min: number;
  max: number;
  step?: number;
  value: number;
  valueLabelDisplay?: string;
  color?: SliderColor;
  onChange?: (e: any) => void;
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
      { className, ariaLabel, min, max, value, color, onChange, ...props },
      ref,
    ) => {
      const [newValue, setNewValue] = React.useState(value);
      const valueRange = React.useCallback(
        (value: number, min: number, max: number) => {
          console.log((value - min) / (max - min));
          return (value - min) / (max - min);
        },
        [],
      );
      const percentLabel = React.useCallback((value: number) => {
        return `${(value * 100).toFixed(1)}%`;
      }, []);

      return (
        <SliderContainer color={color}>
          <SliderWarpper>
            <SliderSpan>
              <FullRangeSpan />
              <SetRangeSpan
                style={{
                  width: `${valueRange(newValue, min, max) * 100}%`,
                }}
              ></SetRangeSpan>
              <PointerSpan
                style={{ left: `${valueRange(newValue, min, max)}%` }}
              >
                <SliderInput
                  type="range"
                  min={min}
                  max={max}
                  value={newValue}
                  ref={ref}
                  onChange={(e) => {
                    setNewValue(e.target.valueAsNumber);
                  }}
                  {...props}
                />
                <ValueLabelContainer>
                  <ValueLabel>
                    {percentLabel(valueRange(newValue, min, max))}
                  </ValueLabel>
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
