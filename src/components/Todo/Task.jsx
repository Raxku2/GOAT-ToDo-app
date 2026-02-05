import { RiAddCircleFill, RiAddLine, RiArrowRightSLine, RiCalendarLine, RiCheckboxCircleFill, RiCheckboxCircleLine, RiDeleteBin6Fill, RiSettings3Fill, RiVerifiedBadgeFill } from '@remixicon/react';
import { h, Component } from 'preact';
import { route } from 'preact-router';
import { useAccountStore, UseEditorStore } from '../../store';
import { useEffect, useState } from 'preact/hooks';
import clsx from 'clsx';
import { hexToRgba, useRelativeDate, useTodos } from '../../hooks';

const Task = () => {

    const { UserTodosS, TodoCatagoriesS, UserLogdS } = useAccountStore();
    const { clearEditor_ES } = UseEditorStore();
    const { getOneTodo, deleteAllDone } = useTodos();

    const [filter, setFilter] = useState(1);
    const [clearDoneBtnVisibility, setClearDoneBtnVisibility] = useState(false);

    useEffect(() => {
        console.log(UserTodosS);
    }, [UserTodosS]);

    useEffect(() => {
        if (!UserLogdS) {
            route('/');
        }
        setClearDoneBtnVisibility(false);
    }, [])

    useEffect(() => {
        if (!UserLogdS) {
            route('/');
        }
    }, [UserLogdS])

    const loadTodoCards = () => {
        if (UserTodosS) {
            return (
                UserTodosS.map(e => {
                    if (filter == 2) {
                        if (e.status == 0) {
                            return
                        }
                    } else if (filter == 3) {
                        if (!e.status == 0) {
                            return
                        }
                        setClearDoneBtnVisibility(true);
                    } else {

                        setClearDoneBtnVisibility(false);
                    }
                    const result = TodoCatagoriesS.find(
                        item => item.catagory === e.catagory
                    );


                    return (

                        <div class={clsx(" p-4 rounded-2xl border-white/10 flex items-start gap-4 hover:border-white/20 transition-all group ", e.status == 0 ? "opacity-50 cursor-not-allowed" : "opacity-100 cursor-pointer ")}
                            style={{
                                background: e.status == 0 ? "none" : "var(--glass-bg)",
                                backdrop: " blur(16px)",
                                border: "1px solid var(--glass-border)",
                            }}
                            onClick={async () => {
                                if (e.status == 0) {
                                    return
                                }
                                await getOneTodo(e._id);
                                route('/editor')
                            }}
                        >
                            <div class="mt-1" hidden={e.status == 0 ? false : true}>
                                <div class="w-6 h-6 rounded-full bg-(--text-primary) flex items-center justify-center p-0">
                                    <span class="material-symbols-outlined text-(--primary-accent) text-[16px] font-bold"><RiCheckboxCircleFill size={30} /></span>
                                </div>
                            </div>
                            <div class="mt-1" hidden={e.status == 1 ? false : true}>
                                <div class="w-6 h-6 rounded-full border-2 border-(--primary-accent)/40 flex items-center justify-center group-hover:border-(--primary-accent) transition-all">
                                    <div class="w-3 h-3 rounded-full bg-(--primary-accent) opacity-0 group-hover:opacity-100 transition-all"></div>
                                </div>
                            </div>
                            <div class="flex-1">
                                <h3 class={clsx("font-bold text-sm mb-1", e.status == 0 ? "line-through" : "no-underline")}>{e.title}</h3>
                                <div class="flex items-center gap-3">
                                    <span class={"text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded"} hidden={e.status == 0 ? true : false}
                                        style={{ backgroundColor: result ? hexToRgba(result.color, 0.2) : "white", color: result ? "#" + result.color : "white" }}
                                    >{e.catagory}</span>
                                    <span class="text-[10px] text-white/30 flex items-center gap-1">
                                        <span class="material-symbols-outlined text-xs"><RiCalendarLine size={16} /></span>
                                        {useRelativeDate(e.due_date)}
                                    </span>
                                </div>
                            </div>
                            <span class="material-symbols-outlined text-white/20"><RiArrowRightSLine /></span>
                        </div >
                    )
                })
            )
        } else {
            setClearDoneBtnVisibility(false);
            return (
                <section class="flex-1 flex flex-col items-center justify-center px-8 py-4 text-center">
                    <div class="relative mb-8">
                        <div class="absolute inset-0 bg-(--primary-accent)/20 blur-3xl rounded-full"></div>
                        <div class="relative w-32 h-32 md:w-40 md:h-40 glass rounded-[2.5rem] flex items-center justify-center border-white/10 animate-soft-pulse">
                            <span class="material-symbols-outlined text-6xl md:text-7xl text-(--primary-accent) bg-clip-text"><RiVerifiedBadgeFill size={75} /></span>
                        </div>
                    </div>
                    <h2 class="text-3xl font-black mb-3 tracking-tight">All Clear!</h2>
                    <p class="text-white/50 text-base md:text-lg max-w-xs md:max-w-md mx-auto mb-10 leading-relaxed">
                        You've conquered your tasks for now. Ready to start something new?
                    </p>
                    <button class="bg-linear-to-r from-(--primary-accent) to-blue-400 text-white font-bold px-8 py-4 rounded-2xl flex items-center gap-3 shadow-lg hover:shadow-primary/40 transition-all glow-blue group active:scale-95 cursor-pointer"
                        onClick={() => {
                            route('/editor')
                        }}
                    >
                        <span class="material-symbols-outlined group-hover:rotate-90 transition-transform"><RiAddCircleFill /></span>
                        Create Your First Task
                    </button>
                </section>
            )
        }
    }


    return (
        <div class="font-display text-white selection:bg-(--primary-accent)/30 h-screen w-full overflow-hidden relative">
            <div class="fixed inset-0 overflow-hidden pointer-events-none">
                <div class="orb bg-(--primary-accent) w-96 h-96 -top-20 -left-20 animate-pulse"></div>
                <div class="orb bg-purple-600 w-80 h-80 top-1/2 -right-20"></div>
                <div class="orb bg-blue-400 w-72 h-72 bottom-0 left-1/4"></div>
            </div>



            <div class="relative z-10 flex h-full w-full">
                <main class="flex-1 flex flex-col h-full glass border-r border-white/5 relative">
                    <header class="p-6 pb-2">
                        <div class="flex items-center justify-between mb-6">
                            <div>
                                <h1 class="text-2xl font-black tracking-tight">Tasks</h1>
                                <p class="text-xs text-white/40 font-bold uppercase tracking-widest">Active Roadmap</p>
                            </div>
                            <button class="bg-(--primary-accent) hover:bg-(--primary-accent)/80 text-white w-10 h-10 rounded-xl flex items-center justify-center shadow-lg shadow-primary/20 transition-all"
                                onClick={() => {

                                    clearEditor_ES();
                                    route('/editor');
                                }}>
                                <span class="material-symbols-outlined font-bold"><RiAddLine /></span>
                            </button>
                        </div>


                        <div class="flex gap-2 p-1 bg-white/5 rounded-xl border border-white/5">
                            <button class={clsx("flex-1 py-2 text-xs font-bold rounded-lg text-white shadow-sm transition-all", filter == 1 ? "bg-white/10" : "bg-none")}
                                onClick={() => {
                                    setFilter(1);
                                }}
                            >All</button>
                            <button class={clsx("flex-1 py-2 text-xs font-bold rounded-lg text-white shadow-sm transition-all", filter == 2 ? "bg-white/10" : "bg-none")}
                                onClick={() => {
                                    setFilter(2);
                                }}
                            >Todo</button>
                            <button class={clsx("flex-1 py-2 text-xs font-bold rounded-lg text-white shadow-sm transition-all", filter == 3 ? "bg-white/10" : "bg-none")}
                                onClick={() => {
                                    setFilter(3);
                                }}
                            >Done</button>
                        </div>

                    </header>


                    <section class="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3">
                        {
                            loadTodoCards()
                        }
                        <button class="mt-8 mb-12 flex items-center justify-center gap-2 text-red-500/80 font-bold text-sm py-4 rounded-2xl hover:bg-red-500/10 transition-colors cursor-pointer"
                            hidden={!(filter === 3 && clearDoneBtnVisibility)}
                            onClick={() => {
                                deleteAllDone()
                            }}
                        >
                            <span class="material-symbols-outlined text-lg"><RiDeleteBin6Fill /></span>
                            CLEAR DONE
                        </button>
                    </section>


                    <nav class=" glass border-t border-white/10 flex items-center justify-around py-4 px-2">
                        <button class="flex flex-col items-center gap-1 text-(--primary-accent)">
                            <span class="material-symbols-outlined"><RiCheckboxCircleLine /></span>
                            <span class="text-[10px] font-bold uppercase tracking-widest">Tasks</span>
                        </button>
                        <button class="flex flex-col items-center gap-1 text-white/40 cursor-pointer"
                            onClick={() => { route('/settings') }}
                        >
                            <span class="material-symbols-outlined"><RiSettings3Fill /></span>
                            <span class="text-[10px] font-bold uppercase tracking-widest">Settings</span>
                        </button>
                    </nav>

                </main>

            </div>

        </div>
    );
};

export default Task;