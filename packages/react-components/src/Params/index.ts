// Copyright 2017-2025 @polkadot/app-extrinsics authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ComponentMap } from '@polkadot/react-params/types';

import Call from './Call';
import OpaqueCall from './OpaqueCall';
import Proposal from './Proposal';

const components: ComponentMap = {
  Call,
  OpaqueCall,
  Proposal,
  RuntimeCall: Call
};

export default components;
