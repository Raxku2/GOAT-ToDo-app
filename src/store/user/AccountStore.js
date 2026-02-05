import { create } from 'zustand'

const useAccountStore = create((set) => ({
  UserNameS: "User",
  UserLogdS: false,
  UserIdS: "localuser",
  UserThemeS: false,
  TodoCatagoriesS: [],
  UserTodosS: [],
  UserEmailS:"",

  LoginS: (username, userid, usertheme, usertodocatagories,email) => set({
    UserNameS: username,
    UserIdS: userid,
    UserThemeS: usertheme,
    TodoCatagoriesS: usertodocatagories,
    UserLogdS: true,
    UserEmailS:email
  }),
  SetUserThemeS: (usertheme) => set({
    UserThemeS: usertheme
  }),
  SetTodoCatagoriesS: (catagories) => set({
    TodoCatagoriesS: catagories
  }),
  SetUserTodosS: (userTodos) => set({
    UserTodosS: userTodos
  }),
  LogoutS: () => set({
    UserNameS: "User",
    UserLogdS: false,
    UserIdS: "localuser",
    UserThemeS: false,
    TodoCatagoriesS: [],
    UserTodosS: [],
    UserEmailS:""
  })


}))

export default useAccountStore