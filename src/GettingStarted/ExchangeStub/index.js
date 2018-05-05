import React, { Fragment } from 'react';
import { SecondaryHeading, TertiaryHeading } from '@/shared/headings';
import { MoreInfo } from '@/shared/MoreInfo';
import { Section, Link } from './styles';

export const ExchangeStub = () => (
	<Fragment>
		<SecondaryHeading level={2} isCenter={true}>
			Supported Exchanges
		</SecondaryHeading>
		<p>
			Muscioin is right now supported on{' '}
			<Link href="https://bittrex.com">Bittrex</Link>
			&nbsp;and <Link href="https://bittrex.com">Cryptopia</Link>
		</p>
	</Fragment>
);
