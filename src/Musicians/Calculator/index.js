import React, { Component, Fragment } from 'react';
import { PrettyText } from '@/shared/PrettyText';
import { Numeral } from '@/shared/Numeral';
import { SecondaryHeading } from '@/shared/headings';
import { Content } from '@/shared/Content';
import { Box } from '@/shared/Box';
import { CalculatorQuery } from './CalculatorQuery';
import { Group, PlaysLabel, PlaysInput, EarningsLabel } from './styles';

export class Calculator extends Component {
	inputNode;

	state = {
		plays: '',
	};

	render() {
		const { plays } = this.state;

		return (
			<CalculatorQuery
				render={({ priceUsd }) => (
					<Fragment>
						<Content>
							<SecondaryHeading level={2}>
								Discover how much you could get paid
							</SecondaryHeading>
							<p>
								Musicians are paid with $MUSIC tokens that can be easily
								exchanged for any other cryptocurrecy or fiat money on crypto
								trading platforms.
							</p>
						</Content>
						<Box>
							<Group>
								<div>
									<PlaysLabel>Enter track plays</PlaysLabel>
									<PlaysInput
										type="tel"
										placeholder="Enter amount"
										value={plays}
										onChange={this.handlePlaysChange}
									/>
								</div>
								<div>
									<EarningsLabel>You earn a minimum of</EarningsLabel>
									<PrettyText key={plays}>
										$<Numeral format="0[.]00">{plays * 0.011}</Numeral>
									</PrettyText>
								</div>
							</Group>
						</Box>
					</Fragment>
				)}
			/>
		);
	}

	handlePlaysChange = event => {
		const value = event.target.value;
		let plays = value ? Number(value) : value;

		if (plays < 10000000) {
			this.setState({ plays });
		}
	};
}
