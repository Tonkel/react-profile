import { Outlet } from "react-router-dom";

import Nav from "c:/Users/19149/Desktop/sandbox/react-profile/Client/src/components/Nav/index";

function App() {
  return (
    <div className="container">
      <Nav />
      <Outlet />
    </div>
  );
}

export default App;
