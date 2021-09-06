import ListaUsuarios from "./components/pages/ListaUsuarios";
import Usuarios from "./components/pages/Usuarios";
import UserState from "./context/User/UserState";

function App() {
  return (
    <UserState>
      <div className="container p-1">
        <div className="row">
          <div className="col-8 col-md-8">
            <Usuarios />
          </div>
          <div className="col-4  col-md-4">
            <ListaUsuarios />
          </div>
        </div>
      </div>
    </UserState>
  );
}

export default App;
