import React, { Fragment } from 'react';
import { SecondaryHeading, TertiaryHeading } from '@/shared/headings';
import { MoreInfo } from '@/shared/MoreInfo';
import { Section, Link } from './styles';

export const MyCryptoStub = () => (
	<Fragment>
		<SecondaryHeading level={2} isCenter={true}>
			MyCrypto Web Interface
		</SecondaryHeading>
		<p>
			Currently in its beta stage, Musicoin is supported on{' '}
			<Link href="http://mycryptobuilds.com/1a5b290fc27e03e71908f281c6071166f914e0c5">
				MyCrypto
			</Link>
			&nbsp;and will be available when MyCrypto goes live with their stable
			version.
		</p>
	</Fragment>
);
