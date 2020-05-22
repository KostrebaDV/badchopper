import React from 'react';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';

import className from 'classnames';
import classes from './styles/index.module.scss';
//import { AdminAppContext } from '../../App/store/AdminAppContext/const';

const Modal = (
	{
		size,
		render,
		isOpen,
        extraHeight,
		handleClose
	}
) => {
    // const { handleShowOverlayCloak, setHandleOverlayClose } = useContext(AdminAppContext);
    //
    // useEffect(() => {
    //     if (isOpen) {
    //         setHandleOverlayClose(() => handleClose);
    //     } else {
    //         setHandleOverlayClose(() => {});
    //     }
    //
    //     handleShowOverlayCloak(isOpen);
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [isOpen]);

	const componentClassName = className(
        classes.modal,
        {
            [classes.modal_small]: size === 'small',
            [classes.modal_medium]: size === 'medium',
            [classes.modal_large]: size === 'large',
            [classes.modal_ultraLarge]: size === 'ultraLarge',
            [classes.modal_extraHeight]: extraHeight
        }
    );

	return (
	    <>
			<CSSTransition
				in={isOpen}
				unmountOnExit
				timeout={300}
				classNames={{
                    enter: classes['modal-enter'],
                    enterActive: classes['modal-enter-active'],
                    exit: classes['modal-exit'],
                    exitActive: classes['modal-exit-active']
                }}
			>
                <>
                    <div className={componentClassName}>
                        { render({ handleClose, extraHeight }) }
                    </div>

                </>
			</CSSTransition>
            {
                isOpen && (
                    <div
                        onClick={handleClose}
                        className={classes.backGround}
                    >
                    </div>
                )
            }
        </>

	);
};

Modal.defaultProps = {
	isOpen: false,
    extraHeight: false,
	size: 'medium',
};

Modal.propTypes = {
	isOpen: PropTypes.bool,
    extraHeight: PropTypes.bool,
	render: PropTypes.func,
	size: PropTypes.string,
	handleClose: PropTypes.func,
};

export { Modal };
