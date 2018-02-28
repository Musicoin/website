import React, { Component } from 'react';
import { Wrapper, Title, Plays } from './styles';
import { PrettyText } from '@/shared/PrettyText';
import { InputRange } from '@/shared/InputRange';

export class Calculator extends Component {
	inputNode;

	state = {
		plays: 1000,
	};

	render() {
		const { plays } = this.state;
		return (
			<Wrapper>
				<Title>
					<PrettyText>How much will you get paid?</PrettyText>
				</Title>
				<Plays>{plays}</Plays>
				<InputRange
					min={0}
					max={50000}
					value={plays}
					onChange={this.handlePlaysChange}
				/>
			</Wrapper>
		);
	}

	handlePlaysChange = plays => {
		this.setState({ plays });
	};
}
