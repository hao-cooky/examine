
import 'primereact/resources/themes/lara-light-indigo/theme.css'; //theme
import 'primereact/resources/primereact.min.css'; //core css
import 'primeicons/primeicons.css'; //icons
import 'primeflex/primeflex.css'; // flex
import {UsersTable} from "./components/UsersTable.tsx";

function App() {
    return (
        <div className="App">
            <UsersTable/>
        </div>
    );
}

export default App;