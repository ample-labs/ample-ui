import { ComponentMeta } from '@storybook/react';
import React from 'react';
import {
  Box,
  Button,
  Card,
  Text,
  TextField,
  CardContent,
  CardHeader,
} from '../..';

import Checkbox from '../../components/Checkbox/Checkbox';
import Flex from '../../components/Flex/Flex';
import FormControl from '../../components/FormControl/FormControl';
import FormControlLabel from '../../components/FormControlLabel/FormControlLabel';

export default {
  title: `Examples/LoginForm`,
} as ComponentMeta<typeof Box>;

export const Default = () => (
  <Flex height="100vh" justifyContent="center" alignItems="center">
    <Card minWidth="420px" pb="40px">
      <CardHeader px={4} py={5}>
        <Text variant="h4" color="primary" as="div" mb="8px">
          Sign in
        </Text>
        <Text variant="subtitle" color="dark1" as="div">
          You must sign in to see this page.
        </Text>
      </CardHeader>
      <CardContent px={4}>
        <form>
          <Box>
            <FormControl control={<TextField placeholder="ID" />} mb="16px" />
            <FormControl
              control={<TextField type="password" placeholder="Password" />}
              mb="16px"
            />
            <FormControlLabel
              mb="32px"
              control={<Checkbox />}
              label="Stay signed in"
            />
            <FormControl control={<Button fullWidth>Sign in</Button>} />
          </Box>
        </form>
        <Flex justifyContent="space-around" mt="32px">
          <Text variant="p2" color="dark1">
            Sign up
          </Text>
          <Text variant="p2" color="dark1">
            Forgot password
          </Text>
        </Flex>
      </CardContent>
    </Card>
  </Flex>
);
