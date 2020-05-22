import React, { FC } from 'react';

import { PaddingBoxType } from './types';
import classNames from 'classnames';
import classes from './styles/index.module.scss';

const PaddingBox: FC<PaddingBoxType> = ({ children,
                        tiny, small, normal, large,
						vrUltraTiny, hrUltraTiny, tUltraTiny, rUltraTiny, bUltraTiny, lUltraTiny,
                        vrTiny, hrTiny, tTiny, rTiny, bTiny, lTiny,
                        vrSmall, hrSmall, tSmall, rSmall, bSmall, lSmall,
                        vrNormal, hrNormal, tNormal, rNormal, bNormal, lNormal,
                        vrLarge, hrLarge, tLarge, rLarge, bLarge, lLarge,
						className
}) => {
    const componentClassName = classNames(
        {
            [classes.padding_tiny]: tiny,
            [classes.padding_small]: small,
            [classes.padding_normal]: normal,
            [classes.padding_large]: large,

			[classes.padding_ultraVrTiny]: vrUltraTiny,
			[classes.padding_ultraHrTiny]: hrUltraTiny,
			[classes.padding_ultraTTiny]: tUltraTiny,
			[classes.padding_ultraRTiny]: rUltraTiny,
			[classes.padding_ultraBTiny]: bUltraTiny,
			[classes.padding_ultraLTiny]: lUltraTiny,

            [classes.padding_vrTiny]: vrTiny,
            [classes.padding_hrTiny]: hrTiny,
            [classes.padding_tTiny]: tTiny,
            [classes.padding_rTiny]: rTiny,
            [classes.padding_bTiny]: bTiny,
            [classes.padding_lTiny]: lTiny,

            [classes.padding_vrSmall]: vrSmall,
            [classes.padding_hrSmall]: hrSmall,
            [classes.padding_tSmall]: tSmall,
            [classes.padding_rSmall]: rSmall,
            [classes.padding_bSmall]: bSmall,
            [classes.padding_lSmall]: lSmall,

            [classes.padding_vrNormal]: vrNormal,
            [classes.padding_hrNormal]: hrNormal,
            [classes.padding_tNormal]: tNormal,
            [classes.padding_rNormal]: rNormal,
            [classes.padding_bNormal]: bNormal,
            [classes.padding_lNormal]: lNormal,

            [classes.padding_vrLarge]: vrLarge,
            [classes.padding_hrLarge]: hrLarge,
            [classes.padding_tLarge]: tLarge,
            [classes.padding_rLarge]: rLarge,
            [classes.padding_bLarge]: bLarge,
            [classes.padding_lLarge]: lLarge,
        },
		className
    );

    return (
        <div className={componentClassName}>{ children }</div>
    );
};

export { PaddingBox };
