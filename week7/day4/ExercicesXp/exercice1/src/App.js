import "./App.css";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";

function App() {

  function Home() {
    return <h1>Home</h1>;
  }

  function Profile() {
    return <h1>Profile</h1>;
  }

  function Shop() {
    throw new Error("An error has occurred in Shop component");
  }

  return (
    <BrowserRouter>
      <div className="App">
        <NavLink to="/">Home</NavLink>{" "}
        <NavLink to="/profile">Profile</NavLink>{" "}
        <NavLink to="/shop">Shop</NavLink>

        <Routes>
          <Route
            path="/"
            element={
              <ErrorBoundary>
                <Home />
              </ErrorBoundary>
            }
          />

          <Route
            path="/profile"
            element={
              <ErrorBoundary>
                <Profile />
              </ErrorBoundary>
            }
          />

          <Route
            path="/shop"
            element={
              <ErrorBoundary>
                <Shop />
              </ErrorBoundary>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
