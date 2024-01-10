// Copyright 2017-2024 @polkadot/react-params authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Props } from '../types';

import React from 'react';

import BasicAccountIdBase from './BasicAccountIdBase';

function BasicAccountId32 (props: Props): React.ReactElement<Props> {
  return (
    <BasicAccountIdBase
      {...props}
      bytesLength={32}
    />
  );
}

export default React.memo(BasicAccountId32);
