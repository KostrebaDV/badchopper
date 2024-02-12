import {IconifyIcon} from "@iconify/react";

export type ButtonType = {
    size?: string;
    icon?: string | IconifyIcon;
    type?: string;
    label?: string;
    className?: string;
    actionName?: string;
    transparent?: boolean;
    noBorder?: boolean;
    isPending?: boolean;
    floatRight?: boolean;
    actionHandler?: (arg1, arg2) => void;
};
