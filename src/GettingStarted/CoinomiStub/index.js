import React, { Fragment } from 'react';
import { SecondaryHeading, TertiaryHeading } from '@/shared/headings';
import { MoreInfo } from '@/shared/MoreInfo';
import { Section, Link } from './styles';

export const CoinomiStub = () => (
	<Fragment>
		<SecondaryHeading level={2} isCenter={true}>
			Coinomi Mobile Wallet
		</SecondaryHeading>
		<p>
			You can now use the <Link href="https://coinomi.com">Coinomi</Link>
			&nbsp;Mobile App to store and transfer Musicoins to an exchange or
			transfer them to your web wallet to tip your favorite musicians.
		</p>
	</Fragment>
);
