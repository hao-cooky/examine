import {VirtualScrollTable, type ColumnDefinition} from './VirtualScrollTable';
import type {User} from "../core/services/UserService.ts";
import {useUsersData} from "./useUsersData.ts";

export function UsersTable() {
    const {users, loading, error} = useUsersData();

    const renderVersion = (data: User) => {
        const color: string = getColorOfVersion(data.version);
        return <span className={`bg-${color} text-white p-2 rounded`}>{data.version}</span>;
    };

    const getColorOfVersion = (version: number) => {
        if (version < 1.0) {
            return 'red-500';
        } else if (version < 2.0) {
            return 'orange-500';
        } else if (version < 3.0) {
            return 'yellow-500';
        } else if (version < 4.0) {
            return 'green-500';
        } else if (version < 5.0) {
            return 'blue-500';
        } else {
            return 'purple-500';
        }
    }

    const renderState = (data: User) => {
        const state: string = data.name.split(' ').map((word) => word[0]).join('').toUpperCase();
        return <span>{state}</span>;
    }

    const renderDate = () => {
        const date: string = randomDate(new Date(2020, 0, 1), new Date()).toLocaleDateString();
        return <span>{date}</span>;
    }
    const  randomDate = (start: Date, end: Date) =>{
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    }

    const columns: ColumnDefinition<User>[] = [
        {field: 'name', header: 'Name', className: 'font-bold', frozen: true, sortable: true},
        {field: 'id', header: 'Id', sortable: true},
        {field: 'language', header: 'Language', sortable: true},
        {field: 'state', header: 'State', sortable: true, body: renderState},
        {field: 'date', header: 'Date', sortable: true, body: renderDate},
        {field: 'version', header: 'Version', sortable: true, body: renderVersion},
        {field: 'bio', header: 'Bio', sortable: true},
    ];

    if (error) {
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