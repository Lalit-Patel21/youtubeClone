import "./App.css";
import { Provider } from "react-redux";
import Header from "./components/Header";
import Body from "./components/Body";
import store from "./utils/store";

function App() {
  return (
    <Provider store={store}>
      <div>
        {/* <h1 class="text-3xl font-bold underline">Hello world!</h1> */}
        <Header />
        <Body />
      </div>
    </Provider>
  );
}

export default App;

/* Head
   Body
    sidebar
     Menubar
    maincontainer
     ButtonsList
     VideoContainer
       videoCard


  */
