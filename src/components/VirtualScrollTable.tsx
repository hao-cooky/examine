// components/VirtualScrollTable.tsx
import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

export interface ColumnDefinition<T extends object> {
    field: keyof T | string;
    header: string;
    style?: React.CSSProperties;
    body?: (data: T) => React.ReactNode;
    className?: string;
    frozen?: boolean;
}

interface VirtualScrollTableProps<T extends object> {
    value: T[];
    columns: ColumnDefinition<T>[];
    loading: boolean;
    itemSize?: number;
    scrollHeight?: string;
}

export function VirtualScrollTable<T extends object>({
                                                         value,
                                                         columns,
                                                         loading,
                                                         itemSize = 46,
                                                         scrollHeight = "400px"
                                                     }: VirtualScrollTableProps<T>) {
    return (
        <DataTable
            resizableColumns
            showGridlines
            value={value}
            loading={loading}
            scrollable
            scrollHeight={scrollHeight}
            virtualScrollerOptions={{ itemSize }}
            tableStyle={{ minWidth: '50rem' }}
        >
            {columns.map(col => (
                <Column
                    key={String(col.field)}
                    field={String(col.field)}
                    className={col.className}
                    header={col.header}
                    style={col.style}
                    body={col.body}
                    frozen={col.frozen}
                />
            ))}
        </DataTable>
    );
}