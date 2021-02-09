import React, { Fragment } from 'react';
import { SecondaryHeading } from '@/shared/headings';
import { Link } from './styles';

export const WalletStub = () => (
	<Fragment>
		<SecondaryHeading level={2} isCenter={true}>
			Musicoin Desktop Wallet
		</SecondaryHeading>
		<p>
			The{' '}
			<Link href="https://github.com/musicoin/desktop/releases">
				Musicoin Desktop Wallet
			</Link>
			&nbsp;is the most secure way to interact with the Musicoin Blockchain.
			Developed by the Musicoin Team, the Musicoin Desktop Wallet constantly
			evolves to keep in touch with the best security practices and provides an
			interactive UI for users to interact with the blockchain.
		</p>
	</Fragment>
);
