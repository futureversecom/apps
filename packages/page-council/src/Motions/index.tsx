// Copyright 2017-2025 @polkadot/app-council authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { DeriveCollectiveProposal } from '@polkadot/api-derive/types';
import type { AccountId } from '@polkadot/types/interfaces';

import React, { useRef } from 'react';

import { Button, Table } from '@polkadot/react-components';
import { useCollectiveMembers } from '@polkadot/react-hooks';

import { useTranslation } from '../translate';
import Motion from './Motion';
import ProposeExternal from './ProposeExternal';
import ProposeMotion from './ProposeMotion';
import Slashing from './Slashing';

interface Props {
  className?: string;
  motions?: DeriveCollectiveProposal[];
  prime?: AccountId | null;
}

function Proposals ({ className = '', motions, prime }: Props): React.ReactElement<Props> {
  const { t } = useTranslation();
  const { isMember, members } = useCollectiveMembers('council');

  const headerRef = useRef<([React.ReactNode?, string?, number?] | false)[]>([
    [t<string>('motions'), 'start', 2],
    [t<string>('threshold')],
    [t<string>('voting end')],
    [t<string>('votes'), 'expand'],
    [],
    [undefined, 'badge'],
    []
  ]);

  return (
    <div className={className}>
      <Button.Group>
        <ProposeMotion
          isMember={isMember}
          members={members}
        />
        <ProposeExternal
          isMember={isMember}
          members={members}
        />
        <Slashing
          isMember={isMember}
          members={members}
        />
      </Button.Group>
      <Table
        empty={motions && t<string>('No council motions')}
        header={headerRef.current}
      >
        {motions?.map((motion: DeriveCollectiveProposal): React.ReactNode => (
          <Motion
            isMember={isMember}
            key={motion.hash.toHex()}
            members={members}
            motion={motion}
            prime={prime}
          />
        ))}
      </Table>
    </div>
  );
}

export default React.memo(Proposals);
