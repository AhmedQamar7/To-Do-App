"use client"
import { useState } from "react";

export default function Home() {

    // define state 

    const [todos, setTodos] = useState([
        { task: "Home Work", id: 1 },
        { task: "Play Game", id: 2 },
    ]); // array of todos

    const [inputVal, setInput] = useState("");
    const [id, setId] = useState(0);

    // function to add todo

    const addItem = () => {
        let obj: any = todos.find(todo => todo.id == id)

        if (obj) {
            let newArray = todos.filter(todo => todo.id !== obj.id)
            setTodos([...newArray, { task: inputVal, id: id }])
            setInput("")
            setId(0)
            return
        }

        setTodos([...todos, { task: inputVal, id: id }])
        setInput("")
        setId(0)
    }



    const editItem = (id: any) => {
        let obj: any = todos.find((todo) => todo.id === id);
        setInput(obj.task);
        setId(obj.id);
    }

    const delItem = (id:any) => {
        let newArray = todos.filter((todo) => todo.id !== id)
        setTodos([...newArray]);
    }

    return (

        <div className="bg-gray-700 max-w-4xl mx-auto p-5 mt-3 rounded">

            <h1 className="text-center text-[30px] text-gray-200 font-bold">
                To-Do App
            </h1>

            {/* Start Input Div  */}

            <div className="flex justify-evenly gap-4 mt-5">

                <input
                    placeholder="Add a task"
                    type="text"
                    value={inputVal}
                    onChange={(e) => setInput(e.target.value)}
                    className="w-[70%] bg-slate-400 p-2 text-lg border border-1 border-black text-black rounded"
                />

                <input
                    placeholder="ID"
                    type="number"
                    value={id}
                    onChange={(e: any) => setId(e.target.value)}
                    className="w-[10%] bg-slate-400 p-2 text-lg border border-1 border-black text-black rounded"
                />

                <br /><br />

                <button onClick={addItem}
                    className="bg-gray-400 hover:bg-gray-500 text-gray-200 font-bold p-2 rounded">
                    Add Task
                </button>

            </div>


            {/* End Input Div  */}

            {/* Start List Div  */}

            <div>

                <h2 className="text-center text-[30px] text-gray-200 font-bold mt-5">
                    Task List
                </h2>

                <div className="grid grid-col gap-2 mt-5">

                    {/* Grid Item  */}

                    {
                        todos.map((todo: any, index: any) => {
                            return (
                                <div className="bg-gray-200 p-4" key={index}>
                                    <div className="flex justify-between">
                                        <span
                                            className="bg-gray-400 w-6 h-6 text-center rounded-full">
                                            {index + 1}
                                        </span>
                                        <span
                                            onClick={()=>delItem(todo.id)}
                                            className="bg-gray-400 w-6 h-6 text-center text-red-900 rounded-full cursor-pointer">
                                            x
                                        </span>
                                    </div>
                                    <div>
                                        <h3 className="text-gray-400 font-bold text-lg mt-3">
                                            {todo.task}
                                        </h3>
                                    </div>
                                    <div>
                                        <h2 onClick={() => editItem(todo.id)} className="text-right cursor-pointer">
                                            Edit
                                        </h2>
                                    </div>
                                </div>
                            )
                        })
                    }


                </div>

            </div>

        </div>

    )
}