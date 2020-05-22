import React, { FC } from 'react';

import { Link as RouteLink, NavLink } from 'react-router-dom';

import classes from './styles/index.module.scss';
import ClassNames from 'classnames';
import { LinkType } from './types';

const Link: FC<LinkType> = (
	{
		link,
		children,
		hasRoute,
		className,
		activeLinkClass
	}
) => {
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
					className={className}
				>
					{children}
				</RouteLink>
			);
	};

	const linkClassName = ClassNames(
		classes.link,
		className
	);

	const getLink = () => {
		return hasRoute
			? getRouteLink()
			: <a className={linkClassName} href={link}>{children}</a>;
	};

	return <>{getLink()}</>;
};

Link.defaultProps = {
	hasRoute: true
};


export { Link };
