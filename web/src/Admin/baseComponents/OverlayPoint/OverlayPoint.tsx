import React, {Component, createRef, ReactNode} from 'react';
import { createPortal } from 'react-dom';

import { AdminAppContext } from '../../App/store/AdminAppContext/const';
import classes from './styles/index.module.scss';
import { OVERLAY_PORTAL } from './consts';
import { getGeneralPosition, getDropdownPosition } from './utils';
import { noScroll } from '../../../utils';

const overlayPortalNode = document.getElementsByClassName(OVERLAY_PORTAL)[0];

type OverlayPointState = {
    hasMounted: boolean;
}

type OverlayPointProps = {
    render: (object) => ReactNode;
    onClose: () => void;
    position?: string;
    componentRef: any;
    overlayBehavior?: string;
}

//@ts-ignore
class OverlayPoint extends Component<OverlayPointProps, OverlayPointState> {
    static contextType = AdminAppContext;

	constructor (props) {
		super(props);

		this.state = {
			hasMounted: false
		};
		this.layoutRef = createRef();
	}

    layoutRef: { current: any };

	componentDidMount () {
		const { showOverlayCloak } = this.context;

		if (!showOverlayCloak) noScroll(true);

		this.setState({ hasMounted: true });
	}

	componentWillUnmount () {
		const { showOverlayCloak } = this.context;

		if (!showOverlayCloak) noScroll(false);
	}

	render () {
		const {
			render,
			onClose,
			position,
			componentRef,
			overlayBehavior,
		} = this.props;

		let style;

		const { width: parentWidth } = componentRef.getBoundingClientRect();

		if (this.state.hasMounted) {
			if (overlayBehavior === 'dropdown') {
				style = getDropdownPosition(componentRef, this.layoutRef.current);
			} else {
				style = getGeneralPosition(componentRef, this.layoutRef.current, position);
			}
		}

		return createPortal(
			<>
				<div
					style={style}
					ref={this.layoutRef}
					className={classes.layout}
				>
					{ render({ parentWidth, onClose }) }
				</div>
				<div
					onClick={onClose}
					className={classes.substrate}
				>
				</div>
			</>,
			overlayPortalNode
		);
	}
}

export { OverlayPoint };
