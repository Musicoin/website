import React, { Fragment } from 'react';
import { SecondaryHeading } from '@/shared/headings';
import { Link } from './styles';

export const ExchangeStub = () => (
	<Fragment>
		<SecondaryHeading level={2} isCenter={true}>
			Supported Exchanges
		</SecondaryHeading>
		<p>
			Muscioin is right now supported on{' '}
			<Link href="https://bittrex.com">Bittrex</Link> and{' '}
			<Link href="https://dovewallet.com">Dove Wallet</Link>
		</p>
	</Fragment>
);
