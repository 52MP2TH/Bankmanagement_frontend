import { useState } from "react";
import { ThemeContext } from "./TestingSomeCode";
import Header from "./Header";
import Header2 from "./Header2";

function App() {

    const user = {
        name: "John",
        age: 25
    };

    const [count, setCount] = useState(0);

    const increment = () =>{
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    console.log("App compoent rendering");

    return (
        <>
            <button onClick={() => increment()} style={{display: 'block', margin: 2+'px'}}> App increment btn</button>
            <button onClick={() => decrement()} style={{display: 'block', margin: 2+'px'}}> App decrement btn</button>
            <ThemeContext.Provider value={{user, count}}>
                <Header />
                <Header2 />
            </ThemeContext.Provider>
        </>
    );
}

export default App;