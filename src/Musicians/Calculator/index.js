import React, { Component } from 'react';
import { number } from 'prop-types';
import { Wrapper, PlaysLabel, PlaysInput, EarningsLabel } from './styles';
import { PrettyText } from '@/shared/PrettyText';
import { Numeral } from '@/shared/Numeral';

export class Calculator extends Component {
	inputNode;

	state = {
		plays: '',
	};

	render() {
		const { rate } = this.props;
		const { plays } = this.state;

		return (
			<Wrapper>
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
					<EarningsLabel>You will earn</EarningsLabel>
					<PrettyText key={plays}>
						$<Numeral format="0[.]00">{plays * rate}</Numeral>
					</PrettyText>
				</div>
			</Wrapper>
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

Calculator.propTypes = {
	rate: number,
};

Calculator.defaultProps = {
	rate: 0.01,
};
