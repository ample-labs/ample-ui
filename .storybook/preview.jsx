import { addParameters } from '@storybook/react';
import { withThemesProvider } from 'themeprovider-storybook';
import createCuiTheme from '../src/utils/createCuiTheme';
import ResetCSS from '../src/utils/ResetCSS';


export const parameters = {
  viewMode: 'docs',
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    values: [
      {
        name: 'grey',
        value: '#EDEDED',
      },
    ],
  },
}

const globalDecorator = (StoryFn) => (
  <>
    <ResetCSS />
    <StoryFn />
  </>
);

const themes = [
  {
    name: "Light",
    ...createCuiTheme({})
  },
  {
    name: "Dark",
    ...createCuiTheme({})
  },
];

export const decorators = [globalDecorator, withThemesProvider(themes)];