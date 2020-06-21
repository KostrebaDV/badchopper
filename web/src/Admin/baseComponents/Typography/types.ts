import React from 'react';

export type TypographyType = {
    bold?: string;
    variant?: string;
    lineHeight?: string;
    className?: string;
    children: React.ReactNode;
    displayBlock?: boolean;
    upperCase?: boolean;
    light?: boolean;
};
