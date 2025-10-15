
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import {UsersTable} from "./components/UsersTable.tsx";

function App() {
    return (
        <div className="App">
            <UsersTable/>
        </div>
    );
}

export default App;