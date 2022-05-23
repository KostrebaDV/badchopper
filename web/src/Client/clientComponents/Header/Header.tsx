import React from 'react';
import classes from './styles/index.module.scss';
import {Typography} from '../../../Admin/baseComponents/Typography/Typography';
import {Button} from '../Button/Button';
import {isMobile} from "react-device-detect";
import ClassNames from 'classnames';
import {translate} from '../../../utils';
import {codes} from '../../../static/translations/codes';
import {yClientsUrl} from '../../../const';
import {BasePageLayout} from '../BasePageLayout/BasePageLayout';
import {BasePageLayoutRight} from '../BasePageLayout/BasePageLayoutRight';
import {BasePageLayoutLeft} from "../BasePageLayout/BasePageLayoutLeft";

const Header = (
    {
        label,
        content,
        showButton,
        className,
        firstLetterUppercase
    }
) => {
    const componentClassName = ClassNames(
        classes.header,
        className
    );

    const headerLabelClassName = ClassNames(
        {
            [classes.header__label_marginOffset]: content && isMobile,
            [classes.header__label_firstLetterUppercase]: firstLetterUppercase
        },
        classes.header__label
    );

    return (
        <BasePageLayout className={componentClassName}>
            <BasePageLayoutLeft>
                <Typography
                    displayBlock
                    lineHeight="1"
                    className={headerLabelClassName}
                >
                    {label}
                </Typography>
            </BasePageLayoutLeft>
            {
                (content || showButton) && (
                    <BasePageLayoutRight>
                        <>
                            {
                                content && (
                                    <Typography
                                        displayBlock
                                        variant="20"
                                        className={classes.header__description}
                                    >
                                        {content}
                                    </Typography>
                                )
                            }
                            {
                                showButton && (
                                    <Button
                                        className={classes.header__button}
                                        labelUppercase
                                        label={translate(codes.bookNow)}
                                        onClick={() => {
                                            window.open(yClientsUrl, '_blank');
                                        }}
                                    />
                                )
                            }
                        </>
                    </BasePageLayoutRight>
                )
            }
        </BasePageLayout>
    );
};

Header.defaultProps = {
    showButton: false,
    firstLetterUppercase: false,
    content: '',
    className: ''
};

export {Header};
