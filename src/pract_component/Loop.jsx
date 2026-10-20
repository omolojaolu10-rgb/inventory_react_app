import { useState } from "react"


const Loop = () => {
    const [count, setCount] = useState(0)
    const clickMe = () => {
        alert('Welcome student')
    }
    const courses = ["React", "Python", "JavaScript", "Node.js"];
    return (
        <div>
            <h1>{ count }</h1>

            <button onClick={() => {
                setCount(count + 1)
                console.log(count);
                
            }}>
                Increase
            </button>
            <button onClick={() => {
                setCount(count - 1)
                console.log(count);
                
            }}>
                Deccrease
            </button>

            <button onClick={() => {
                setCount(0)
                console.log(count);
                
            }}>
                Reset
            </button>
            <button onClick={clickMe}>
                Click me!
            </button>

            <ul>
            {courses.map((course) => (
                <li key={course}>{course}</li>
            ))}
            </ul>
        </div>
    )
}
export default Loop