// Copyright 2017-2025 @polkadot/app-signing authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { UseTranslationResponse } from 'react-i18next';

import { useTranslation as useTranslationBase } from 'react-i18next';

export function useTranslation (): UseTranslationResponse<'app-signing', undefined> {
  return useTranslationBase('app-signing');
}
