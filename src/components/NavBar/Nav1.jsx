import { h, Component } from 'preact';
import useAccountStore from '../../store/user/AccountStore';
import { useEffect, useState } from 'preact/hooks';
import { route } from 'preact-router';
import { useAuth } from '../../hooks';

const NavBar1 = () => {
    const { UserLogdS } = useAccountStore();
    const [loginBtnVisibility, setLoginBtnVisibility] = useState(true);
    const { signinGOATauth } = useAuth();


    useEffect(() => {
        setLoginBtnVisibility(!UserLogdS)
    }, []);

    
    return (

        <nav class="w-full sticky top-0 z-50 glass px-6 py-4">
            <div class="flex items-center justify-between max-w-7xl mx-auto">
                <div class="flex items-center gap-2">
                    <h2
                        class="text-white text-lg font-extrabold tracking-tight">
                        GOAT
                    </h2>
                </div>
                <div class="flex items-center gap-6">
                    <button
                        class="text-white/80 text-sm font-semibold hover:text-white 
                        transition-colors cursor-pointer"
                        hidden={!loginBtnVisibility}
                        onClick={() => {
                            signinGOATauth();
                        }}
                    >
                        Login</button>
                    <button
                        class="bg-(--primary-accent) text-white px-5 py-2 rounded-full 
                        text-sm font-bold shadow-lg shadow-primary/20 cursor-pointer"
                        hidden={!loginBtnVisibility}
                        onClick={() => { route('/login') }}>
                        Join
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default NavBar1;