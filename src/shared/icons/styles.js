import React from 'react';
import styled from 'styled-components';

/**
* Use a styled component to wrap all icons so that styles can be applied to any
* icon type from within a parent component, e.g:
*
* const Button = styled.button`
*   ${Icon} {
*     margin-left: 4px;
*   }
* `
*/
export const Icon = styled(({ title, children, ...props }) => (
	<svg viewBox="0 0 36 36" {...props}>
		{title && <title>{title}</title>}
		{children}
	</svg>
))``;

Icon.defaultProps = {
	width: '1em',
	height: '1em',
	color: 'inherit',
};
