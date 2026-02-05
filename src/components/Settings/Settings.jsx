import { RiAddLine, RiArrowLeftSLine, RiCloseLine, RiVerifiedBadgeFill } from '@remixicon/react';
import { h, Component } from 'preact';
import { useAccountStore } from '../../store';
import { useEffect, useState } from 'preact/hooks'
import { useUsers } from '../../hooks/user/useropt';
import { clsx } from 'clsx';
import { useUserCatagories } from '../../hooks';
import { route } from 'preact-router';


const Settings = () => {

    const { UserNameS, UserEmailS, TodoCatagoriesS, UserLogdS } = useAccountStore();
    const { newCatagory, deleteCatagory } = useUserCatagories();

    const { modifyUser } = useUsers();
    const [userNameEdit, setUserNameEdit] = useState("");

    const [newCatagoryAccent, setNewCatagoryAccent] = useState("");
    const [newCatagoryTitle, setNewCatagoryTitle] = useState("");
    const [newCatagoryFormVisibility, setNewCatagoryFormVisibility] = useState(false)

    useEffect(() => {
        setUserNameEdit(UserNameS);
    }, []);


    useEffect(() => {
        if (!UserLogdS) {
            route('/');
        }
    }, [])

    useEffect(() => {
        if (!UserLogdS) {
            route('/');
        }
    }, [UserLogdS])


    return (
        <div class="bg-background-dark font-display text-white selection:bg-primary/30 
        min-h-screen relative overflow-hidden">
            <div class="fixed inset-0 overflow-hidden pointer-events-none">
                <div class="orb bg-(--primary-accent) w-64 h-64 -top-20 -left-20"></div>
                <div class="orb bg-purple-600 w-80 h-80 top-1/2 -right-20"></div>
                <div class="orb bg-blue-400 w-72 h-72 bottom-0 left-1/4"></div>
            </div>

            <header class="relative z-20 flex items-center justify-between px-6 py-6">
                <div class="flex items-center gap-3">
                    <button class="w-10 h-10 flex items-center justify-center rounded-xl glass"
                        onClick={() => { history.back() }}>
                        <span class="material-symbols-outlined text-white/70"><RiArrowLeftSLine /></span>
                    </button>
                    <h1 class="text-xl font-bold tracking-tight text-white">Settings</h1>
                </div>
            </header>

            <main class="relative z-10 px-4 pb-32 h-[calc(100vh-100px)] overflow-y-auto custom-scrollbar">
                <div class="flex flex-col gap-6 max-w-2xl mx-auto">
                    <section class="glass rounded-2xl p-6 flex flex-col items-center text-center gap-4">
                        <div class="relative">
                            <div class="w-24 h-24 rounded-full border-2 border-(--primary-accent) 
                            p-1 overflow-hidden content-center">
                                <img alt="User Profile"
                                    class="h-full object-cover rounded-full"
                                    src="https://raw.githubusercontent.com/Raxku2/Animated-Fluent-Emojis/refs/heads/master/Emojis/Animals/Owl.png" />
                            </div>
                        </div>
                        <div class="flex flex-col gap-1">
                            <h2 class="text-xl font-bold tracking-tight">{UserNameS}</h2>
                            <p class="text-(--text-muted) text-sm font-medium">{UserEmailS}</p>
                        </div>
                        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full 
                        bg-(--primary-accent)/20 border border-(--primary-accent)/30">
                            <span class="material-symbols-outlined text-(--primary-accent) 
                            text-sm"><RiVerifiedBadgeFill size={14} /></span>
                            <span class="text-[10px] font-bold uppercase tracking-widest 
                            text-(--primary-accent)">Premium Member</span>
                        </div>
                    </section>
                    <div class="flex flex-col gap-6 pb-6">
                        <div class="glass rounded-2xl overflow-hidden">
                            <div class="px-6 py-4 border-b border-white/5">
                                <h3 class="font-bold text-xs uppercase tracking-widest text-(--text-muted)">
                                    Personal Details

                                </h3>
                            </div>
                            <div class="p-6 flex flex-col gap-5">
                                <div class="flex flex-col gap-2">
                                    <label class="text-xs font-semibold text-(--text-muted) ml-1">
                                        Full Name

                                    </label>
                                    <input
                                        class="w-full bg-white/5 border border-white/10 rounded-xl 
                                    px-4 py-3 text-sm focus:ring-1 focus:ring-(--primary-accent) 
                                    focus:border-(--primary-accent) outline-none text-white 
                                    placeholder-white/20"
                                        type="text"
                                        value={userNameEdit}
                                        onChange={(e) => {
                                            setUserNameEdit(e.target.value);
                                        }} disabled />
                                </div>
                                <div class="flex flex-col gap-2">
                                    <label class="text-xs font-semibold text-(--text-muted) ml-1">
                                        Email Address

                                    </label>
                                    <input class="w-full bg-white/5 border border-white/10 
                                    rounded-xl px-4 py-3 text-sm focus:ring-1 focus:ring-(--primary-accent) 
                                    focus:border-(--primary-accent) outline-none text-white 
                                    placeholder-white/20" type="email" value={UserEmailS} disabled />
                                </div>
                            </div>
                        </div>


                        <div class="glass rounded-2xl overflow-hidden">
                            <div class="px-6 py-4 border-b border-white/5">
                                <h3 class="font-bold text-xs uppercase tracking-widest text-(--text-dim)">
                                    Workspace

                                </h3>
                            </div>
                            <div class="p-6 flex flex-col gap-4">
                                <label class="text-xs font-semibold text-(--text-muted) ml-1">
                                    Default Categories

                                </label>
                                <div class="flex flex-wrap gap-2">

                                    {
                                        TodoCatagoriesS.map((e) => {
                                            return (
                                                <div
                                                    class="flex items-center gap-2 px-3 py-2 rounded-xl
                                                 bg-white/5 border border-white/10">
                                                    <div class="w-2 h-2 rounded-full "
                                                        style={{ backgroundColor: "#" + e.color }}></div>
                                                    <span class="text-xs font-medium">{e.catagory}</span>
                                                    <button class="material-symbols-outlined text-xs
                                                     text-white/30 hover:text-white cursor-pointer"><RiCloseLine size={16}
                                                            onClick={() => {
                                                                deleteCatagory(e.catagory, e.color);
                                                            }}
                                                        />
                                                    </button>
                                                </div>

                                            )
                                        })
                                    }


                                    <div class="glass rounded-2xl p-6 border-white/10 shadow-2xl w-full" hidden={!newCatagoryFormVisibility} id='newCatagoryForm'>
                                        <div class="flex flex-col gap-6">
                                            <div class="flex flex-col gap-2">
                                                <label class="text-[10px] font-bold text-[--text-secondary) uppercase tracking-widest ml-1">Catagory Name</label>
                                                <input class="w-full bg-white/5 border border-white/10 
                                    rounded-xl px-4 py-3 text-sm focus:ring-1 focus:ring-(--primary-accent) 
                                    focus:border-(--primary-accent) outline-none text-white 
                                    placeholder-white/20" placeholder="e.g. Q4 Strategy" type="text"
                                                    value={newCatagoryTitle}
                                                    onChange={(e) => {
                                                        setNewCatagoryTitle(e.target.value);
                                                    }}
                                                />
                                            </div>
                                            <div class="flex flex-col gap-3">
                                                <label class="text-[10px] font-bold text-(--text-secondary) uppercase tracking-widest ml-1">Accent Color</label>
                                                <div class="flex items-center justify-between gap-3"><div class="flex flex-wrap gap-2.5">
                                                    <button
                                                        class={clsx("color-chip border-2 h-6 w-6 rounded-full active bg-linear-to-tr from-blue-600 to-blue-400",
                                                            newCatagoryAccent == "2563EB" ? "border-white/70" : "border-none"
                                                        )}
                                                        onClick={() => {
                                                            setNewCatagoryAccent("2563EB") // blue-600
                                                        }}
                                                    ></button>

                                                    <button
                                                        class={clsx("color-chip border-2 h-6 w-6 rounded-full bg-linear-to-tr from-purple-600 to-purple-400",
                                                            newCatagoryAccent == "9333EA" ? "border-white/70" : "border-none"
                                                        )}
                                                        onClick={() => {
                                                            setNewCatagoryAccent("9333EA") // purple-600
                                                        }}
                                                    ></button>

                                                    <button
                                                        class={clsx("color-chip border-2 h-6 w-6 rounded-full bg-linear-to-tr from-pink-600 to-pink-400",
                                                            newCatagoryAccent == "DB2777" ? "border-white/70" : " border-none"
                                                        )}
                                                        onClick={() => {
                                                            setNewCatagoryAccent("DB2777") // pink-600
                                                        }}
                                                    ></button>

                                                    <button
                                                        class={clsx("color-chip border-2 h-6 w-6 rounded-full bg-linear-to-tr from-rose-600 to-rose-400",
                                                            newCatagoryAccent == "E11D48" ? "border-white/70" : "border-none"
                                                        )}
                                                        onClick={() => {
                                                            setNewCatagoryAccent("E11D48") // rose-600
                                                        }}
                                                    ></button>

                                                    <button
                                                        class={clsx("color-chip border-2 h-6 w-6 rounded-full bg-linear-to-tr from-orange-600 to-orange-400",
                                                            newCatagoryAccent == "EA580C" ? "border-white/70" : "border-none"
                                                        )}
                                                        onClick={() => {
                                                            setNewCatagoryAccent("EA580C") // orange-600
                                                        }}
                                                    ></button>

                                                    <button
                                                        class={clsx("color-chip border-2 h-6 w-6 rounded-full bg-linear-to-tr from-emerald-600 to-emerald-400",
                                                            newCatagoryAccent == "059669" ? "border-white/70" : "border-none"
                                                        )}
                                                        onClick={() => {
                                                            setNewCatagoryAccent("059669") // emerald-600
                                                        }}
                                                    ></button>

                                                    <button
                                                        class={clsx("color-chip border-2 h-6 w-6 rounded-full bg-linear-to-tr from-cyan-600 to-cyan-400",
                                                            newCatagoryAccent == "0891B2" ? "border-white/70" : "border-none"
                                                        )}
                                                        onClick={() => {
                                                            setNewCatagoryAccent("0891B2") // cyan-600
                                                        }}
                                                    ></button>

                                                    <button
                                                        class={clsx("color-chip border-2 h-6 w-6 rounded-full bg-linear-to-tr from-slate-600 to-slate-400",
                                                            newCatagoryAccent == "475569" ? "border-white/70" : "border-none"
                                                        )}
                                                        onClick={() => {
                                                            setNewCatagoryAccent("475569") // slate-600
                                                        }}
                                                    ></button>
                                                </div>

                                                    <div class="h-8 w-px bg-white/10 mx-1"></div>
                                                    {/* <div class="flex items-center gap-2 bg-(--glass-input-bg) border border-white/10 rounded-lg px-2 py-1.5 min-w-21.25">
                                                        <div class="w-4 h-4 rounded-full bg-white/20 border border-white/10"></div>
                                                        <span class="text-[10px] font-mono text-white/60">#HEX</span>
                                                    </div> */}
                                                    <div class="flex">

                                                        <button class="flex items-center  gap-2 bg-(--glass-input-bg) border border-white/10 rounded-lg px-2 py-1.5 min-w-21.25 mr-2 cursor-pointer"
                                                            onClick={async () => {
                                                                await newCatagory(newCatagoryTitle, newCatagoryAccent);
                                                                setNewCatagoryTitle("");
                                                                setNewCatagoryAccent("");
                                                                setNewCatagoryFormVisibility(false);

                                                            }}
                                                        >
                                                            <div class="w-4 h-4 "><RiAddLine size={14} /></div>
                                                            <span class="text-[10px] font-mono text-white/60 uppercase">add</span>
                                                        </button>
                                                        <button class="flex items-center  gap-2 bg-(--glass-input-bg) border border-white/10 rounded-lg px-2 py-1.5 min-w-21.25 cursor-pointer"
                                                            onClick={() => {
                                                                setNewCatagoryTitle("");
                                                                setNewCatagoryAccent("");
                                                                setNewCatagoryFormVisibility(false);

                                                            }}
                                                        >
                                                            <div class="w-4 h-4 "><RiCloseLine size={14} /></div>
                                                            <span class="text-[10px] font-mono text-white/60 uppercase">cancel</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <button class="flex items-center gap-2 px-3 py-2 rounded-xl border border-dashed border-white/20 hover:border-(--primary-accent)/50 transition-colors cursor-pointer"
                                        hidden={newCatagoryFormVisibility}
                                        onClick={() => {
                                            setNewCatagoryTitle("");
                                            setNewCatagoryAccent("");
                                            setNewCatagoryFormVisibility(true);
                                        }}
                                    >
                                        <span class="material-symbols-outlined text-xs"><RiAddLine size={16} /></span>
                                        <span class="text-xs font-medium">Add Category</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <button class="w-full py-4 text-red-400 text-sm font-bold glass rounded-2xl border-red-400/10 hover:bg-red-400/5 transition-colors">
                            Delete Account
                        </button>
                    </div>
                </div>
            </main>
            {/* <div class="fixed bottom-0 left-0 right-0 p-4 bg-background-dark/90 backdrop-blur-xl border-t border-white/5 z-30" >
                <div class="max-w-2xl mx-auto flex gap-3">
                    <button class="flex-1 h-12 rounded-xl border border-white/10 font-bold text-sm flex items-center justify-center text-white/70 hover:bg-white/5 active:scale-95 transition-all">
                        Cancel
                    </button>
                    <button class="flex-2 h-12 bg-(--primary-accent) rounded-xl font-bold text-sm shadow-lg shadow-(--primary-accent)/40 flex items-center justify-center gap-2 hover:brightness-110 active:scale-[0.98] transition-all"
                        onClick={() => {
                            modifyUser(userNameEdit);
                        }}
                    >
                        Save Changes
                    </button>
                </div>
            </div> */}

        </div>
    );
};

export default Settings;