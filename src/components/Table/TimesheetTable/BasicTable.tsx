import Button from 'components/Button';
import Link from 'next/link';
import React from 'react';
import { TableOptions, useFlexLayout, useTable } from 'react-table';
import styled from 'styled-components';

const BasicTable: React.FC<TableOptions<{}>> = ({ columns, data }) => {

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
      } = useTable(
            { 
              columns, 
              data 
            },
            useFlexLayout,
            hooks => {
                hooks.allColumns.push(col => [
                    ...col, 
                    {
                        id: 'action',
                        Header: 'Action',
                        Cell: ({row}) => (
                            <Link href='/details' passHref>
                                <Button variant='outline' size='small' color='neutral'>
                                    Edit
                                </Button>
                            </Link>
                        ),
                        width: 45
                    },
                ])
            }
        )

    return (
        <Style>
        <div className="table_wrap">
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {
                                headerGroup.headers.map(column => (
                                    <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                                ))
                            }
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {
                        rows.map((row, i) => {
                            prepareRow(row);
                            return (
                                <tr {...row.getRowProps()}>
                                    {
                                        row.cells.map(cell => {
                                            return (
                                                <td {...cell.getCellProps()}>
                                                    {cell.render('Cell')}
                                                </td>
                                            )
                                        })
                                    }
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
        </Style>
    )
}

export default BasicTable;

const Style = styled.div`
    display: block;
    max-width: 100%;

    /* This will make the table scrollable when it gets too small */
    .table_wrap {
        display: block;
        max-width: 100%;
        overflow-x: auto;
        overflow-y: hidden;
        
        table {
            width: 100%;
            border-spacing: 0;
        }

        th {
            margin: 0;
            padding: 1rem;
            color: ${({theme}) => theme.pallete.text.primary};
            border-bottom: ${({theme}) => `1px solid ${theme.pallete.devider}`};
        }
    
        td {
            margin: 0;
            padding: 1.5rem 1rem;
            color: ${({theme}) => theme.pallete.text.primary};
        }

        tr {
            border-bottom: ${({theme}) => `1px solid ${theme.pallete.devider}`};
            align-items: center;

            &:last-child {
                border-bottom: none;
            }
        }
    }
`
