// src/components/ui/Skeleton.jsx
import React from 'react';
import clsx from 'clsx';

function Skeleton({
    className = '',
    rounded = 'rounded-md',
    as: Tag = 'div',
    children,
    ...rest
}) {
    return (
        <Tag
            className={clsx(
                'animate-pulse bg-gray-200 dark:bg-gray-700',
                rounded,
                className
            )}
            {...rest}
        >
            {children}
        </Tag>
    );
}

export default Skeleton;