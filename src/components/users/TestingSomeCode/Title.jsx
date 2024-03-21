import { useContext } from "react";
import { ThemeContext } from './TestingSomeCode';

function Title() {

    const { user, count } = useContext(ThemeContext);
    console.log("count: ", count);
    console.log("title component re-rendered");
    return (
        <>
            <h3>{user.name}</h3>
            <h3>{count}</h3>
        </>
    );
}

export default Title;