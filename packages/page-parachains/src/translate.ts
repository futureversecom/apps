// Copyright 2017-2024 @polkadot/app-parachains authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { UseTranslationResponse } from 'react-i18next';

import { useTranslation as useTranslationBase } from 'react-i18next';

export function useTranslation (): UseTranslationResponse<'app-parachains', undefined> {
  return useTranslationBase('app-parachains');
}
