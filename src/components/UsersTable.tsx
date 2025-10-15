import { VirtualScrollTable, type ColumnDefinition } from './VirtualScrollTable';
import type {User} from "../core/services/UserService.ts";
import {useUsersData} from "./useUsersData.ts";

export function UsersTable() {
    const { users, loading, error } = useUsersData();

    const columns: ColumnDefinition<User>[] = [
        { field: 'name', header: 'Name', className: 'font-bold',frozen: true },
        { field: 'id', header: 'Id',  },
        { field: 'language', header: 'Language',  },
        { field: 'bio', header: 'Bio', },
        { field: 'version', header: 'Version' }
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
                scrollHeight={'calc(100vh - 16px)'}
            />
        </div>
    );
}