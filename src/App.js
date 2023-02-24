"use strict";
exports.__esModule = true;
// // import Application from "./Components/Application/Application";
// // import Counter from "./Components/Counter/Counter";
// // import CounterTwo from "./Components/CounterTwo/CounterTwo";
// // import MuiMode from "./Components/Mui/MuiMode";
// // import Skills from "./Components/Skill/skill";
var Users_1 = require("./Components/users/Users");
// import AppProvider from "./Providers/AppProvider";
function App() {
    // return ;
    return (<>
      {/* <Application /> */}
      {/* <Skills skills={["hi", "bi"]} />; */}
      {/* <Counter /> */}
      {/* <AppProvider>
          <MuiMode />
        // </AppProvider> */}
      {/* <CounterTwo count={20} /> */}
      <Users_1["default"] />
    </>);
}
exports["default"] = App;
