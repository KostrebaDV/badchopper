import React, { FC } from 'react';

import { Link as RouteLink, NavLink } from 'react-router-dom';

import classes from './styles/index.module.scss';
import ClassNames from 'classnames';
import { LinkType } from './types';

const Link: FC<LinkType> = (
	{
		link,
		children,
        underline,
		hasRoute,
		className,
		activeLinkClass
	}
) => {
    const nativeLinkClassName = ClassNames(
        {
            [classes.link__underline]: underline
        },
        classes.link,
        className
    );

    const routeLinkClassName = ClassNames(
        {
            [classes.link__underline]: underline
        },
        className
    );

	const getRouteLink = () => {
		return activeLinkClass
			? (
				<NavLink
					to={link}
					className={className}
					activeClassName={activeLinkClass}
				>
					{children}
				</NavLink>
			)
			: (
				<RouteLink
					to={link}
					className={routeLinkClassName}
				>
					{children}
				</RouteLink>
			);
	};

	const getLink = () => {
		return hasRoute
			? getRouteLink()
			: <a className={nativeLinkClassName} href={link}>{children}</a>;
	};

	return <>{getLink()}</>;
};

Link.defaultProps = {
	hasRoute: true,
    underline: false
};


export { Link };
