import React from 'react';

export type LinkType = {
    link: string,
    hasRoute?: boolean,
    underline?: boolean,
    className?: string,
    activeLinkClass?: string

    children?: React.ReactNode
}
