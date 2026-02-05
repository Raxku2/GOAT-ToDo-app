import { create } from 'zustand'

const UseEditorStore = create((set) => ({
    TodoTitle_ES: "",
    TodoCatagor_ESy: "",
    TodoDueDate_ES: "",
    TodoPriority_ES: 1,
    TodoDescription_ES: "",
    TodoStatus_ES: 0,
    TodoId: "",

    TodoSave_ES: (
        title,
        catagory,
        due_date,
        priority,
        description,
        status,
        id
    ) => set({
        TodoTitle_ES: title,
        TodoCatagor_ESy: catagory,
        TodoDueDate_ES: due_date,
        TodoPriority_ES: priority,
        TodoDescription_ES: description,
        TodoStatus_ES: status,
        TodoId: id
    }),
    TodoDone_ES: () => set({ TodoStatus_ES: 1 }),
    clearEditor_ES: () => set({
        TodoTitle_ES: "",
        TodoCatagor_ESy: "",
        TodoDueDate_ES: "",
        TodoPriority_ES: 0,
        TodoDescription_ES: "",
        TodoStatus_ES: 0,
        TodoId: "",
    }),
    setTodoTitle_ES: (title) => set({
        TodoTitle_ES: title
    }),
    setTodoCatagor_ESy: (catagory) => set({
        TodoCatagor_ESy: catagory
    }),
    setTodoDueDate_ES: (duedate) => set({
        TodoDueDate_ES: duedate
    }),
    setTodoPriority_ES: (priority) => set({
        TodoPriority_ES: priority
    }),
    setTodoDescription_ES: (description) => set({
        TodoDescription_ES: description
    }),
    setTodoId: (id) => set({
        TodoId: id
    })

}))


export default UseEditorStore
