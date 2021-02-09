import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { omit } from 'lodash-es';
import { scaleLinear } from 'd3-scale';
import {
	Wrapper,
	Input,
	Rail,
	Handle,
} from './styles';

export class InputRange extends Component {
	handleNode = null;

	static propTypes = {
		step: PropTypes.number,
		value: PropTypes.number,
		defaultValue: PropTypes.number,
		onChange: PropTypes.func,
	};

	static defaultProps = {
		step: 1,
		min: 0,
		max: 3,
		onChange: () => {},
		format: '0,0[.]0 a',
	};

	state = {
		value: this.getInitialValue(),
		active: null,
	};

	componentWillReceiveProps(nextProps) {
		if (this.isControlled() && this.props.value !== nextProps.value) {
			this.setState({ value: nextProps.value });
		}
	}

	render() {
		const {
			step,
			min,
			max,
			format,
			disabled,
			inputRef,
			...props
		} = this.props;
		const { value, active } = this.state;
		const percent = this.getPercentScale(min, max);
		const leftPos = percent(value);
		// If `onChange` is passed along it fires when any of the internal
		// inputs are changed. We do not want this because we want to
		// control when this event fires based on whether the component is
		// `controlled` or `uncontrolled`.
		const innerProps = omit(props, ['onChange', 'value']);

		return (
			<Wrapper
				{...innerProps}
				onTouchStart={this.handleTouchStart}
				onMouseDown={this.handleMouseDown}
			>
				<Input
					type="range"
					min={min}
					max={max}
					step={step}
					value={value}
					onChange={this.handleChange}
					onBlur={this.handleBlur}
					disabled={disabled}
					innerRef={inputRef}
				/>
				<Rail>
					<Handle
						innerRef={ref => (this.handleNode = ref)}
						active={!disabled && active}
						style={{ left: `${leftPos}%` }}
					/>
				</Rail>
			</Wrapper>
		);
	}

	handleBlur = () => {
		this.setState({ active: false });
	};

	handleChange = event => {
		const value = Number(event.target.value);

		if (this.isControlled()) {
			this.props.onChange(value);
		} else {
			this.setState({ value });
		}
	};

	handleMouseDown = ({ target, clientX }) => {
		this.setState({ active: true });
	};

	handleTouchStart = ({ target, touches }) => {
		this.setState({ active: true });
		target.focus();
	};

	isControlled() {
		return 'value' in this.props;
	}

	getInitialValue() {
		const { defaultValue, value, min } = this.props;
		return defaultValue || value || min;
	}

	getPercentScale(min, max) {
		return scaleLinear()
			.domain([min, max])
			.range([0, 100]);
	}
}
