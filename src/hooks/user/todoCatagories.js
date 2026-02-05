import { useAccountStore } from "../../store";

const useUserCatagories = () => {

    const API_URL = import.meta.env.VITE_APP_API;
    const { LoginS, UserIdS, UserEmailS, UserNameS, TodoCatagoriesS, SetTodoCatagoriesS } = useAccountStore();

    const getAllCatagories = async () => {
        try {
            const response = await fetch(`${API_URL}/user/catagory?user_id=${UserIdS}`)

            if (response.status === 200) {
                const data = await response.json();
                SetTodoCatagoriesS(data.catagory)
            } else {
                console.log("error while get user catagorys");
            }
        } catch (error) {
            console.log(error);
        };
    };

    const newCatagory = async (catagory_title, catagory_color) => {

        try {
            const response = await fetch(`${API_URL}/user/catagory`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "user_id": UserIdS,
                    "catagory_data": {
                        "catagory": catagory_title,
                        "color": catagory_color
                    }
                })
            });


            if (response.status === 201) {
                await getAllCatagories();
                return true
            } else {
                console.log("error while create new catagory");
            }
        } catch (error) {
            console.log(error);
        };
    };

    const deleteCatagory = async (catagory, color) => {
        try {
            const response = await fetch(`${API_URL}/user/catagory`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "user_id": UserIdS,
                    "catagory_data": {
                        "catagory": catagory,
                        "color": color
                    }
                })
            })


            if (response.status === 204) {
                await getAllCatagories();
                console.log('deleted');
            } else {
                console.log("error while celete catagory");
            }
        } catch (error) {
            console.log(error);
        };

    }



    return {
        getAllCatagories,
        newCatagory,
        deleteCatagory
    }


}

export { useUserCatagories }