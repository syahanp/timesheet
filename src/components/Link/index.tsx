import React from 'react'
import styled from 'styled-components';
import Link from 'next/link';
import { AnchorLinkProps, AnchorVariant } from './type';

const Links: React.FC<AnchorLinkProps> = ({
    children,
    href,
    onClick,
    variant = 'primary'
}) => {
    return (
        <Link href={href}>
            <Anchor variant={variant} onClick={onClick}>
                {children}
            </Anchor>
        </Link>
    )
}

export default Links;

const Anchor = styled.a<AnchorVariant>`
    color: ${({theme, variant}) => {
        if (variant === 'danger') {
            return theme.pallete.color.danger
        }
        if (variant === 'primary') {
            return theme.pallete.color.primary
        }
        else {
            return 'inherit'
        }
    }};

    text-decoration: ${({variant}) => variant === 'neutral' ? 'none' : 'underline'};
    cursor: pointer;
`
