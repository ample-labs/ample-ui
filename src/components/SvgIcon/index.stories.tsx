import React, { FC } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import SvgIcon from './SvgIcon';
import { hideUnnecessaryControls } from '../../helpers/storybookHelper';
import IconCheck from './Icons/IconCheck';
import Text from '../Text/Text';
import Flex from '../Flex/Flex';

export default {
  title: `Components/Icons`,
  component: SvgIcon,
  argTypes: {
    ...hideUnnecessaryControls(),
  },
} as ComponentMeta<typeof SvgIcon>;

export const Default: ComponentStory<typeof SvgIcon> = (props) => (
  <IconCheck {...props} />
);

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const modules = import.meta.glob(`./Icons/*.tsx`, { eager: true });
const components: { [key: string]: any } = Object.keys(modules).reduce(
  (accum, path) => {
    const file = path.substring(2).replace(`.tsx`, ``).replace(`Icons/`, ``);
    return {
      ...accum,
      [file]: modules[path],
    };
  },
  {},
);

export const IconList: FC = () => (
  <Flex justifyContent="start" alignItems="center" flexWrap="wrap">
    {Object.keys(components).map((file) => {
      const Icon = components[file].default;
      return (
        <Flex
          key={file}
          flexDirection="column"
          justifyContent="space-between"
          alignItems="center"
          p="8px"
        >
          <Icon fontSize="30px" />
          <Text variant="caption" fontSize="14px">
            {file}
          </Text>
        </Flex>
      );
    })}
  </Flex>
);
