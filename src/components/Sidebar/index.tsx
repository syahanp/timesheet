import Links from 'components/Link';
import { rgba } from 'polished';
import React from 'react'
import styled from 'styled-components';

interface ListItemProps {
    active: boolean
}

const Sidebar = () => {
    let active = false

    return (
        <Div>
            <ListItem className="sidebar_item" active={active}>
                <Links href='/dashboard' variant='neutral'>Dashboard</Links>
            </ListItem>
        </Div>
    )
}

export default Sidebar;

const Div = styled.ul`
    padding: 1.5rem;
    list-style: none;
    background-color: ${({theme}) => theme.pallete.background.body};
    border-right: ${({theme}) => `1px solid ${theme.pallete.devider}`};
    height: 100%;
`

const ListItem = styled.li<ListItemProps>`
    cursor: pointer;
    color: ${({theme}) => rgba(theme.pallete.text.primary, .7)};
    font-weight: ${({theme}) => theme.font.weight.medium};
    padding: .75rem;
    margin-bottom: .2rem;
    border-radius: 5px;
    font-size: 17px;

    &:hover {
        color: ${({theme}) => rgba(theme.pallete.text.primary, 1)};
        background-color: ${({theme}) => rgba(theme.pallete.devider, .4)};
    }

    a:hover {
        color: ${({theme}) => rgba(theme.pallete.text.primary, 1)};
        background-color: ${({theme}) => rgba(theme.pallete.devider, .4)};
    }
`
