import React, { useMemo } from 'react'
import BasicTable from './BasicTable';
import { useTheme } from 'styled-components';

const TimesheetTable: React.FC = () => {

    const theme = useTheme();

    // typescript has strict styling element
    const text = {
        fontMedium: theme.font.weight.medium as 'bold',
        fontLight: theme.font.weight.light as 'lighter',
        colorSecondary: theme.pallete.text.secondary
    }

    const column = useMemo(() => [
        {
            Header: 'Activity',
            accessor: 'title',
            Cell: ({row}) => {
                return (
                    <div>
                        <div style={{fontWeight: text.fontMedium}}> 
                            {row.original.title} 
                        </div>
                        <div style={{fontWeight: text.fontLight, color: text.colorSecondary}}> 
                            {row.original.description} 
                        </div>
                    </div>
                )
            }
        },
        {
            Header: 'Duration',
            accessor: 'duration',
            width: 55
        },
        {
            Header: 'Start',
            accessor: 'start',
            width: 55
        },
        {
            Header: 'End',
            accessor: 'end',
            width: 55
        }
    ], [])

    const data = [
        {
            title: 'UX Design',
            description: 'Menggambar alur kerja dari aplikasi timesheet',
            duration: '1h 17m',
            start: '07:00 AM',
            end: '07:17 AM'
        },
        {
            title: 'Design Mockup',
            description: 'Membuat mockup untuk aplikasi timesheet dengan ...',
            duration: '1h 17m',
            start: '07:00 AM',
            end: '07:17 AM'
        },
        {
            title: 'Development Process',
            description: 'Membangun sistem frontend aplikasi dengan React dan Node.js',
            duration: '1h 17m',
            start: '07:00 AM',
            end: '07:17 AM'
        },
        {
            title: 'Quality Checks',
            description: 'Memeriksa seluruh kinerja aplikasi untuk melihat bugs yang ada',
            duration: '1h 17m',
            start: '07:00 AM',
            end: '07:17 AM'
        }
    ]
    
    return (
        <div>
            <BasicTable columns={column} data={data} />
        </div>
    )
}

export default TimesheetTable;
