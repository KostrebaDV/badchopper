import React from 'react';
import PropTypes from 'prop-types';
import {GridLayout} from '../GridLayout/GridLayout';
import {GridLayoutRow} from '../GridLayout';
import {Typography} from '../Typography/Typography';
import classes from './styles/index.module.scss';
import ClassNames from 'classnames';
import {PaddingBox} from '../PaddingBox/PaddingBox';

const FormLayoutItemGroup = (
    {
        children,
        inline,
        grid,
        gridColumn,
        label,
        singleItem,
        noPadding
    }
) => {
    const componentClassName = ClassNames(
        {
            [classes.formLayoutItemGroup_inline]: inline,
            [classes.formLayoutItemGroup_noPadding]: noPadding
        },
        classes.formLayoutItemGroup
    );

	return (
	    <div className={componentClassName}>
            {
                !inline
                    ? children
                    : (
                        <>
                            {
                                label && (
                                    <PaddingBox bTiny>
                                        <Typography bold='600'>
                                            {label}
                                        </Typography>
                                    </PaddingBox>
                                )
                            }
                            <GridLayout>
                                <GridLayoutRow gridColumn={gridColumn} grid={grid}>
                                    {singleItem ? [children] : children}
                                </GridLayoutRow>
                            </GridLayout>
                        </>
                    )
            }
        </div>
    )
};

FormLayoutItemGroup.defaultProps = {
    inline: false,
    singleItem: false,
    noPadding: false
};

FormLayoutItemGroup.propTypes = {
    grid: PropTypes.string,
    label: PropTypes.string,
    gridColumn: PropTypes.number,
	inline: PropTypes.bool,
    noPadding: PropTypes.bool,
    singleItem: PropTypes.bool,
	children: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.array
	]),
};

export { FormLayoutItemGroup };
