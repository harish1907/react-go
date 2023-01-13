import Home from './components/Home'

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="mt-3">Go Watch a Movie!</h1>
        </div>
        <div className="col text-end">
          <a href="#!"><span className="badge bg-success">Login</span></a>
        </div>
        <hr className="md-3" />
      </div>

      <div className="row">
        <div className="col-md-2">
          <nav>
            <div className="list-group">
              <a href="#!" className="list-group-item list-group-item-action">Home</a>
              <a href="#!" className="list-group-item list-group-item-action">Movie</a>
              <a href="#!" className="list-group-item list-group-item-action">Genres</a>
              <a href="#!" className="list-group-item list-group-item-action">Add Movie</a>
              <a href="#!" className="list-group-item list-group-item-action">Manage Catalogue</a>
              <a href="#!" className="list-group-item list-group-item-action">GraphQL</a>
            </div>
          </nav>
        </div>
        <div className="col-md-10">
          <Home/>
        </div>
      </div>
    </div>
  );
}

export default App;
