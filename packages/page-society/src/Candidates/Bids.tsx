// Copyright 2017-2025 @polkadot/app-society authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { PalletSocietyBid } from '@polkadot/types/lookup';

import React, { useRef } from 'react';

import { Table } from '@polkadot/react-components';
import { useApi, useCall } from '@polkadot/react-hooks';

import { useTranslation } from '../translate';
import BidRow from './Bid';

interface Props {
  className?: string;
}

function Bids ({ className }: Props): React.ReactElement<Props> {
  const { t } = useTranslation();
  const { api } = useApi();
  const bids = useCall<PalletSocietyBid[]>(api.query.society.bids);

  const headerRef = useRef<[React.ReactNode?, string?, number?][]>([
    [t<string>('bids'), 'start'],
    [t<string>('bid kind'), 'start'],
    [t<string>('value')],
    [t<string>('tip')]
  ]);

  return (
    <Table
      className={className}
      empty={bids && t<string>('No bids')}
      header={headerRef.current}
    >
      {bids?.map((bid, index): React.ReactNode => (
        <BidRow
          index={index}
          key={bid.who.toString()}
          value={bid}
        />
      ))}
    </Table>
  );
}

export default React.memo(Bids);
