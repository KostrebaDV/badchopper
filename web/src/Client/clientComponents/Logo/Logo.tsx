import React from 'react';
import ClassNames from 'classnames';
import classes from './styles/index.module.scss';
import {Link} from '../../../Admin/baseComponents/Link/Link';
import logo from "../../../static/images/badchopperLogo.svg";

const Logo = (
    {
        footerLogo
    }
) => {
    const componentClassName = ClassNames(
        classes.logo,
        {
            [classes.logo__column]: footerLogo
        }
    );

    return (
        <div className={componentClassName}>
            <Link link="/">
                <img src={logo} alt="badchopperLogo"/>
            </Link>
            {
                !footerLogo && (
                    <div className={classes.logo__text}>
                        <p>Barbershop 24/7</p>
                        <p>с 10:00 - 20:00</p>
                    </div>
                )
            }
        </div>
    );
};

Logo.defaultProps = {
    footerLogo: false
}

export {Logo};
