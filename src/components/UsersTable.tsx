import { VirtualScrollTable, type ColumnDefinition } from './VirtualScrollTable';
import type {User} from "../core/services/UserService.ts";
import {useUsersData} from "./useUsersData.ts";

export function UsersTable() {
    const { users, loading, error } = useUsersData();

    const columns: ColumnDefinition<User>[] = [
        { field: 'id', header: 'Id', style: { width: '20%' } },
        { field: 'name', header: 'Name', style: { width: '25%' } },
        { field: 'language', header: 'Language', style: { width: '20%' } },
        { field: 'bio', header: 'Bio', style: { width: '30%' } },
        { field: 'version', header: 'Version', style: { width: '5%' } }
    ];

    if(error){
        return <div className="p-3 text-red-500">{error}</div>;
    }

    return (
        <div className="card">
            <VirtualScrollTable<User>
                value={users}
                columns={columns}
                loading={loading}
            />
        </div>
    );
}