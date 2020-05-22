import React, { PureComponent } from 'react';

import ClassNames from 'classnames';
import classes from './styles/index.module.scss';
import { getBooleanCookie, noScroll } from '../../../utils';
import {OverlayCloakTypes} from './types';

class OverlayCloak extends PureComponent<OverlayCloakTypes> {
	state = {
		isReady: false,
		show: false
	};

	componentDidUpdate () {
		if (this.props.show) {
			noScroll(true);

			this.handleCloakShow(true, 0);
			this.handleCloakReady(true);
		} else {
			noScroll(false);

			this.handleCloakShow(false);
			this.handleCloakReady(false, 0);
		}
	}

	handleCloakReady = (ready, delay = 50) => {
		setTimeout(() => this.setState({ isReady: ready }), delay);
	};

	handleCloakShow = (ready, delay = 300) => {
		setTimeout(() => this.setState({ show: ready }), delay);
	};


	render () {
		const componentClassName = ClassNames(
			classes.overlay_cloak,
			{
				[classes.overlay_cloak__show]: this.state.show,
				[classes.overlay_cloak__appeared]: this.state.isReady,
				[classes.overlay_cloak__collapsed]: getBooleanCookie(this.props.isCollapsed)
			}
		);

		return (
			<div
				className={componentClassName}
				onClick={this.props.handleOverlayClose}
			>
			</div>
		);
	}
}

export { OverlayCloak };
