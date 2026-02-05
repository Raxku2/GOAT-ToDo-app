import { useAccountStore, UseEditorStore } from "../../store";
import { route } from "preact-router";


const useTodos = () => {
    const API_URL = import.meta.env.VITE_APP_API
    const { UserIdS, SetUserTodosS } = useAccountStore();
    const { TodoTitle_ES, TodoDescription_ES, TodoDueDate_ES, TodoPriority_ES, TodoCatagor_ESy, TodoStatus_ES, TodoSave_ES } = UseEditorStore();

    const getOneTodo = async (todo_id) => {
        try {
            const response = await fetch(`${API_URL}/todo/one?user_id=${UserIdS}&todo_id=${todo_id}`);

            if (response.status == 302) {
                const data = await response.json();
                TodoSave_ES(data.title, data.catagory, data.due_date, data.priority, data.desc, data.status, todo_id)
                console.log(data);


            } else {
                console.log("err on api while");

            }
        } catch {
            console.log("err while ");
            return
        };
    }

    const getAllTodo = async () => {
        try {
            const response = await fetch(`${API_URL}/todo/?user_id=${UserIdS}`)

            if (response.status == 302) {
                const data = await response.json();
                SetUserTodosS(data)
                console.log(data);
                
            } else {
                SetUserTodosS(null)
                console.log("err on api while");

            }
        } catch {
            console.log("err while ");
            return
        };
    }

    const createNewTodo = async () => {
        try {
            const response = await fetch(`${API_URL}/todo/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "title": TodoTitle_ES,
                    "desc": TodoDescription_ES,
                    "due_date": TodoDueDate_ES,
                    "priority": TodoPriority_ES,
                    "catagory": TodoCatagor_ESy,
                    "status": 1,
                    "user_id": UserIdS
                })

            })

            if (response.status == 201) {
                const data = await response.json();
                await getAllTodo();
                route('/home')
                console.log(data);


            } else {
                console.log("err on api while create new todo");

            }
        } catch {
            console.log("err while create new todo");
            return
        };
    }

    const updateOneTodo = async (todo_id) => {
        try {
            const response = await fetch(`${API_URL}/todo/`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "title": TodoTitle_ES,
                    "desc": TodoDescription_ES,
                    "due_date": TodoDueDate_ES,
                    "priority": TodoPriority_ES,
                    "catagory": TodoCatagor_ESy,
                    "status": TodoStatus_ES,
                    "user_id": UserIdS,
                    "todo_id": todo_id
                })
            })

            if (response.status == 200) {
                // const data = await response.json();
                await getAllTodo();
                route('/home');
                // console.log(data);


            } else {
                console.log("err on api while update one todo");

            }
        } catch (error) {
            console.log(error);

            console.log("err while update one todo");
            return
        };
    }

    const updateOneTodoStatus = async (todo_id,status) => {
        try {
            const response = await fetch(`${API_URL}/todo/status`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "status": status,
                    "user_id": UserIdS,
                    "todo_id": todo_id
                })
            })

            if (response.status == 200) {
                await getAllTodo();
                const data = await response.json();
                console.log(data);

            } else {
                console.log("err on api while update one todo status");

            }
        } catch {
            console.log("err while update one todo status");
            return
        };
    }


    const markAllTodoDone = async () => {
        try {
            const response = await fetch(`${API_URL}/todo/all?user_id=${UserIdS}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                }
            })

            if (response.status == 200) {
                const data = await response.json();
                console.log(data);

            } else {
                console.log("err on api while mark all todo done");

            }
        } catch {
            console.log("err while mark all todo done");
            return
        };


    }

    const deleteOneTodo = async (todo_id) => {
        try {
            const response = await fetch(`${API_URL}/todo/`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "user_id": UserIdS,
                    "todo_id": todo_id
                })
            })

            if (response.status == 204) {
                await getAllTodo()
                route('/home')
            } else {
                console.log("err on api while delete one todo");

            }
        } catch {
            console.log("err while delete one todo");
            return
        };
    }

    const deleteAllDone = async () => {
        try {
            const response = await fetch(`${API_URL}/todo/done?user_id=${UserIdS}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            })
            if (response.status == 204) {
                // const data = await response.json();
                // console.log(data);
                await getAllTodo();


            } else {
                console.log("err on api while delete marked todo");

            }
        } catch {
            console.log("err while delete marked todo");
            return
        };
    }

    return {
        getOneTodo,
        getAllTodo,
        createNewTodo,
        updateOneTodo,
        updateOneTodoStatus,
        markAllTodoDone,
        deleteOneTodo,
        deleteAllDone
    }

}

export { useTodos }