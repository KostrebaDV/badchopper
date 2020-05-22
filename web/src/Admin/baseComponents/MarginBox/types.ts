import React from 'react';

export type MarginBoxType = {
    tiny?: boolean;
    small?: boolean;
    normal?: boolean;
    large?: boolean;

    vrUltraTiny?: boolean;
    hrUltraTiny?: boolean;
    tUltraTiny?: boolean;
    rUltraTiny?: boolean;
    bUltraTiny?: boolean;
    lUltraTiny?: boolean;

    vrTiny?: boolean;
    hrTiny?: boolean;
    tTiny?: boolean;
    rTiny?: boolean;
    bTiny?: boolean;
    lTiny?: boolean;

    vrSmall?: boolean;
    hrSmall?: boolean;
    tSmall?: boolean;
    rSmall?: boolean;
    bSmall?: boolean;
    lSmall?: boolean;

    vrNormal?: boolean;
    hrNormal?: boolean;
    tNormal?: boolean;
    rNormal?: boolean;
    bNormal?: boolean;
    lNormal?: boolean;

    vrLarge?: boolean;
    hrLarge?: boolean;
    tLarge?: boolean;
    rLarge?: boolean;
    bLarge?: boolean;
    lLarge?: boolean;

    className?: string;
    children: React.ReactNode;
}
