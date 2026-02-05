import { route } from "preact-router";
import { useAccountStore } from "../../store";

const useAuth = () => {

    const { LoginS } = useAccountStore();

    const AUTH_APP_URL = import.meta.env.VITE_AUTH_APP;
    const THIS_APP_URL = "https://goat-to-do-app-2.vercel.app/";
    const THIS_APP_NAM = import.meta.env.VITE_THIS_APP_NAME;
    const API_URL = import.meta.env.VITE_APP_API

    const signin_url = `${AUTH_APP_URL}/login?name=${THIS_APP_NAM}&icon=${THIS_APP_URL}/favicon.svg&client=${THIS_APP_URL}&redi=${THIS_APP_URL}/login`
    const signup_url = `${AUTH_APP_URL}/signup?name=${THIS_APP_NAM}&icon=${THIS_APP_URL}/favicon.svg&client=${THIS_APP_URL}&redi=${THIS_APP_URL}/login`

    const signinGOATauth = () => {
        window.location.replace(signin_url)
    };
    const signupGOATauth = () => {
        window.location.replace(signup_url);
    };


    const saveUserToLocalStorage = (data) => {
        const userData = data;

        localStorage.setItem('userData', JSON.stringify(userData));
    };

    const getUserFromLocalStorage = () => {
        const datainstorage = localStorage.getItem('userData');
        const data = datainstorage ? JSON.parse(datainstorage) : null;
        if (data) {
            LoginS(data.name, data._id, data.theme, data.catagory, data.email);
        } else {
            return
        }
    };

    const verify = async (authToken) => {
        try {
            const response = await fetch(`${API_URL}/auth?authToken=${authToken}`);

            const data = await response.json();
            console.log(data);

            if (response.status === 201 || response.status === 302) {

                saveUserToLocalStorage(data);
                LoginS(data.name, data._id, data.theme, data.catagory,data.email);
                window.history.replaceState(null, '', window.location.href);
                route("/home");
            } else {
                window.history.replaceState(null, '', window.location.href);
                route("/");
            }
        } catch (error) {
            console.log(error);
            
            route("/");

        }
    };

    return {
        signinGOATauth,
        signupGOATauth,
        verify, getUserFromLocalStorage
    }

}

export { useAuth }
