// Copyright 2017-2025 @polkadot/app-contracts authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { UseTranslationResponse } from 'react-i18next';

import { useTranslation as useTranslationBase, withTranslation } from 'react-i18next';

export function useTranslation (): UseTranslationResponse<'app-contracts', undefined> {
  return useTranslationBase('app-contracts');
}

export default withTranslation(['app-contracts']);
