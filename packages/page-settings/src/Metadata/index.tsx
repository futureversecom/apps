// Copyright 2017-2025 @polkadot/app-settings authors & contributors
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { useApi } from '@polkadot/react-hooks';

import useChainInfo from '../useChainInfo';
import Extensions from './Extensions';
import NetworkSpecs from './NetworkSpecs';

export default function Metadata (): React.ReactElement {
  const { isDevelopment } = useApi();
  const chainInfo = useChainInfo();

  return (
    <>
      {!isDevelopment && (
        <Extensions chainInfo={chainInfo} />
      )}
      <NetworkSpecs chainInfo={chainInfo} />
    </>
  );
}
