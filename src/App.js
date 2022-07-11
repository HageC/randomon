import { Fragment } from "react";
import { Navbar, SearchBar, List, Listitem } from "./components/index";
function App() {
  return (
    <Fragment>
      <Navbar />
      <SearchBar />
      <List />
      <Listitem />
    </Fragment>
  );
}

export default App;
