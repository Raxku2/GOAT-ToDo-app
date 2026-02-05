import { RiArrowLeftLine, RiCheckboxCircleLine } from '@remixicon/react';
import { h, Component } from 'preact';
import { route } from 'preact-router';
import { useAuth } from '../../hooks';
import { useEffect, useState } from 'preact/hooks';

const Login = () => {
    const { signinGOATauth, signupGOATauth, verify } = useAuth();
    const [signupVisibility, setSignupVisibility] = useState(true);

    useEffect( () => {
        const params = new URLSearchParams(window.location.search);
        if (params.get('authToken')) {
            verify(params.get("authToken"));
            setSignupVisibility(false);
        }
    }, []);





    return (
        <div class="font-display text-white min-h-screen relative overflow-hidden flex flex-col items-center justify-center p-6">
            <div class="fixed inset-0 overflow-hidden pointer-events-none">
                <div class="orb bg-(--primary-accent) w-80 h-80 -top-20 -left-20"></div>
                <div class="orb bg-purple-600 w-96 h-96 top-1/2 -right-40"></div>
                <div class="orb bg-blue-400 w-72 h-72 bottom-0 left-1/4"></div>
            </div>


            <div class="relative z-10 w-full max-w-sm" hidden={!signupVisibility}>
                <div class="flex flex-col items-center gap-4 mb-8">
                    <div class="bg-(--primary-accent) p-3 rounded-2xl flex items-center justify-center shadow-xl shadow-(--primary-accent)/20">
                        <span class="material-symbols-outlined text-white text-3xl"><RiCheckboxCircleLine /></span>
                    </div>
                    <div class="text-center">
                        <h1 class="text-2xl font-black tracking-tight mb-1">Welcome Back</h1>
                        <p class="text-white/50 text-sm">Sign in to your GOAT account</p>
                    </div>
                </div>
                <div class="glass rounded-4xl p-8 border-white/10 shadow-2xl">
                    <div class="space-y-5">
                        <button class="w-full bg-linear-to-r from-(--primary-accent) to-blue-500 hover:from-blue-600 hover:to-blue-400 text-white h-14 rounded-xl font-bold text-base shadow-xl shadow-(--primary-accent)/30 transition-all active:scale-[0.98] mt-2" onClick={signinGOATauth}>
                            Sign In
                        </button>
                        {/* <button class="w-full bg-linear-to-r from-(--primary-accent) to-blue-500 hover:from-blue-600 hover:to-blue-400 text-white h-14 rounded-xl font-bold text-base shadow-xl shadow-(--primary-accent)/30 transition-all active:scale-[0.98] mt-2" type="submit">
                            Sign Up
                        </button> */}
                    </div>
                </div>
                <p class="mt-8 text-center text-white/40 text-sm"
                    onClick={signupGOATauth}>
                    Don't have an account?
                    <a class="text-primary font-bold hover:underline ml-1" href="#">Sign Up</a>
                </p>
            </div>


            <button class="fixed top-6 left-6 flex items-center justify-center w-10 h-10 glass rounded-full text-white/50 hover:text-white transition-colors"
                onClick={() => {
                    history.back();
                }}>
                <span class="material-symbols-outlined text-xl"><RiArrowLeftLine /></span>
            </button>
            <footer class="absolute bottom-6 left-0 right-0 text-center">
                <p class="text-white/20 text-[10px] font-bold uppercase tracking-widest">© 2026 Pinaka </p>
            </footer>

        </div>
    );
};

export default Login;