import { route } from "preact-router";
import { useAuth } from "../auth/authenticate";
import { useAccountStore } from "../../store";

const useUsers = () => {
    const API_URL = import.meta.env.VITE_APP_API
    const { LoginS, UserIdS, UserEmailS,
        UserNameS, TodoCatagoriesS } = useAccountStore();
    const { saveUserToLocalStorage } = useAuth();

    const getUserData = async () => {
        try {
            const response = await fetch(`${API_URL}/user/?user_id=${UserIdS}&user_email=${UserEmailS}`)

            const data = await response.json();
            console.log(data);

            if (response.status === 200) {
                saveUserToLocalStorage(data);
            } else {
                console.log("error while get user data");
            }
        } catch (error) {
            console.log(error);
        };
    };

    const modifyUser = async (username = "") => {

        try {
            const response = await fetch(`${API_URL}/user/`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "user_id": UserIdS,
                    "email": UserEmailS,
                    "name": username ? username : UserNameS,
                })
            });

            console.log(
                JSON.stringify({
                    "user_id": UserIdS,
                    "email": UserEmailS,
                    "name": username ? username : UserNameS,
                })
            );
            

            if (response.status === 202) {
                const data = await response.json();
                console.log(data);


            } else {
                console.log(response.status)
                console.log("error while edit user data");

            }
        } catch (error) {
            console.log(error);
        };
    };

    const deleteUser = async () => {

        try {
            const response = await fetch(`${API_URL}/user/`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "user_id": UserIdS,
                    "email": UserEmailS
                })
            });


            if (response.status === 204) {
                // const data = await response.json();
                // console.log(data);
                console.log('deleted');
                route('/');
            } else {
                console.log("error while edit user data");
            }
        } catch (error) {
            console.log(error);
        };
    };

    return {
        deleteUser,
        modifyUser,
        getUserData
    }

};

export { useUsers }