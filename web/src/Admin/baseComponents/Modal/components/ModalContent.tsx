import React, {FC} from 'react';

import { ScrollContainer } from '../../ScrollContainer/ScrollContainer';
import { PendingCloak } from '../../PendingCloak/PendingCloak';

import classes from '../styles/index.module.scss';
import ClassNames from 'classnames';
import {ModelContentType} from '../types';

const ModalContent: FC<ModelContentType> = (
	{
		children,
		isPending,
		className,
		autoHeight,
        extraHeight
	}
) => {
	const componentClassName = ClassNames(
		{
			[classes.modalContent_autoHeight]: autoHeight,
			[classes.modalContent_extraHeight]: extraHeight
		},
		classes.modalContent,
		className
	);

	return (
		<div className={componentClassName}>
			{
				isPending && (
					<PendingCloak />
				)
			}
			<ScrollContainer>
				{ children }
			</ScrollContainer>
		</div>
	);
};

export { ModalContent };
