module.exports = {
  extends: ['@ample-labs/eslint-config-ample', 'plugin:storybook/recommended'],
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  rules: {
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: ['**/*.stories.tsx'] },
    ],
    'guard-for-in': 'off',
    'react/default-props-match-prop-types': 'off',
  },
};
