// Copyright 2017-2025 @polkadot/apps-routing authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { TFunction } from 'i18next';
import type { Route } from './types';

import Component from '@polkadot/app-signing';

export default function create (t: TFunction): Route {
  return {
    Component,
    display: {
      needsAccounts: true,
      needsApi: []
    },
    group: 'developer',
    icon: 'signature',
    name: 'signing',
    text: t<string>('nav.signing', 'Sign and verify', { ns: 'apps-routing' })
  };
}
