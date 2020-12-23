import { LinkProps } from 'next/link';

interface AnchorVariant {
    variant?: 'primary' | 'danger' | 'neutral'
}

interface AnchorLinkProps extends LinkProps, AnchorVariant {
    onClick? : () => void
}