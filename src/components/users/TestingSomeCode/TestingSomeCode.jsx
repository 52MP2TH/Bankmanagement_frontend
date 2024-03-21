import { createContext } from "react";
import App from './App';
function TestingSomeCode(){

    console.log("TestingSomeCode compoent re-render");
    return(
        <>
            <h1>Hello Sam from TestingSomeCode</h1>
            <App />
        </>
    )

}

export const ThemeContext = createContext();

export default TestingSomeCode;
