// Copyright 2017-2025 @polkadot/app-accounts authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Environment } from '../types';

import { ComponentType } from 'react';

import { getEnvironment } from '../util';

const onlyOn = (environment: Environment) => <T extends ComponentType<any>>(component: T): T | (() => null) => {
  if (getEnvironment() === environment) {
    return component;
  }

  // eslint-disable-next-line react/display-name
  return () => null;
};

export const onlyOnWeb = onlyOn('web');
export const onlyOnApp = onlyOn('app');
