import React from "react";
import { Provider } from "react-redux";
import Profile from "./Components/Profile/Profile";
import store from "./Store/Store";

function App() {
  return (
   <>
   <Provider store={store}>
     <Profile />
   </Provider> 
   </>
  );
}

export default App;
