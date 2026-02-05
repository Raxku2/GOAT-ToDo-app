import { RiAddLine, RiArrowLeftSLine, RiCalendar2Fill, RiCheckboxCircleFill, RiDeleteBin6Fill, RiFileListFill, RiFolderFill } from '@remixicon/react';
import { h, Component } from 'preact';
import { useEffect, useRef, useState } from 'preact/hooks'
import { useAccountStore, UseEditorStore } from '../../store';
import clsx, { } from 'clsx';
import { useTodos } from '../../hooks';
import { route } from 'preact-router';


const Editor = () => {
    const { createNewTodo, updateOneTodo, deleteOneTodo, updateOneTodoStatus } = useTodos();

    const { TodoTitle_ES, setTodoTitle_ES,
        TodoCatagor_ESy, setTodoCatagor_ESy,
        TodoDescription_ES, setTodoDescription_ES,
        TodoDueDate_ES, setTodoDueDate_ES,
        TodoPriority_ES, setTodoPriority_ES, TodoId
    } = UseEditorStore();


    const { TodoCatagoriesS, UserLogdS } = useAccountStore();
    const [todoCatagoryColor, setTodoCatagoryColor] = useState("var(--primary-accent)");

    useEffect(() => {
        if (TodoId) {

            const result = TodoCatagoriesS.find(
                item => item.catagory === TodoCatagor_ESy
            );
            setTodoCatagoryColor("#" + result.color);

        }

    }, [])


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
        <div class="font-display text-white selection:bg-(--primary-accent)/30 min-h-screen relative flex flex-col">
            < div class="fixed inset-0 overflow-hidden pointer-events-none" >
                <div class="orb bg-(--primary-accent) w-64 h-64 -top-20 -left-20"></div>
                <div class="orb bg-purple-600 w-80 h-80 top-1/2 -right-20"></div>
                <div class="orb bg-blue-400 w-72 h-72 bottom-0 left-1/4"></div>
            </div >

            <header class="sticky top-0 z-50 glass border-b border-white/5 px-4 py-4 flex items-center justify-between">
                <button class="flex items-center gap-1 text-white/70 hover:text-white transition-colors"
                    onClick={() => { history.back() }}>
                    <span class="material-symbols-outlined text-2xl"><RiArrowLeftSLine /></span>
                    <span class="font-medium">Back</span>
                </button>
                <h1 class="text-sm font-bold tracking-widest uppercase text-white/40">Edit Task</h1>
                <button class="text-(--primary-accent) font-bold hover:brightness-125 transition-all"
                    onClick={() => {
                        if (TodoId) {
                            updateOneTodo(TodoId);
                            return
                        } else {
                            createNewTodo();
                            return
                        }
                    }}
                >
                    {TodoId ? "Save" : "Add"}
                </button>
            </header>

            <main class="relative z-10 flex-1 px-0 py-6 flex flex-col gap-6 max-w-lg mx-auto w-full">

                <section class="mb-2">
                    <input
                        class="w-full bg-transparent border-none text-3xl font-black tracking-tight p-0 
                    focus:ring-0 focus:outline-none placeholder-white/20 text-white"
                        placeholder="Task Title" type="text" value={TodoTitle_ES}
                        onChange={(e) => { setTodoTitle_ES(e.target.value) }} />
                </section>

                <div class="grid grid-cols-2 gap-3">
                    <div class="glass rounded-2xl p-4 flex flex-col gap-1">
                        <span class="text-[10px] font-bold uppercase tracking-widest text-white/40">Category</span>
                        <div class="flex items-center gap-2">
                            <span class={clsx("material-symbols-outlined text-(--primary-accent) text-xl")} style={{
                                color: todoCatagoryColor
                            }}><RiFolderFill /></span>
                            <select class="bg-transparent border-none p-0 text-sm font-semibold focus:ring-0 w-full appearance-none"
                                onChange={(e) => {
                                    const selected = e.target.value.split('||||');
                                    setTodoCatagoryColor("#" + selected[0])
                                    setTodoCatagor_ESy(selected[1]);

                                }}
                            >
                                {
                                    TodoCatagoriesS.map((e, i) => {
                                        return (
                                            <option index={i} value={e.color + "||||" + e.catagory} selected={TodoCatagor_ESy == e.catagory ? true : false}>{e.catagory}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                    </div>

                    <div class="glass rounded-2xl p-4 flex flex-col gap-1">
                        <span class="text-[10px] font-bold uppercase tracking-widest text-white/40">Due Date</span>
                        <div class="flex items-center gap-2">
                            <span class="material-symbols-outlined text-purple-400 text-xl"><RiCalendar2Fill /></span>
                            {/* <input class="bg-transparent border-none p-0 text-sm font-semibold focus:ring-0 w-full" type="text" value="Oct 24, 2024" /> */}
                            <input type="datetime-local" name="" id="" class="outline-none" value={TodoDueDate_ES} onChange={e => {
                                setTodoDueDate_ES(e.target.value);
                                console.log(e.target.value);


                            }} />
                        </div>
                    </div>
                </div>
                <section class="glass rounded-2xl p-4 flex flex-col gap-3">
                    <span class="text-[10px] font-bold uppercase tracking-widest text-white/40">Priority Level</span>
                    <div class="flex gap-2">
                        <button class={clsx("flex-1 py-2.5 rounded-xl text-xs font-bold border text-white/60 cursor-pointer",
                            TodoPriority_ES == 1 ? "border-(--primary-accent)/30 bg-(--primary-accent)/20 text-(--primary-accent)" : " border-white/5 bg-white/5")}
                            onClick={() => {
                                setTodoPriority_ES(1);
                            }}>Low</button>
                        <button class={clsx("flex-1 py-2.5 rounded-xl text-xs font-bold border text-white/60 cursor-pointer",
                            TodoPriority_ES == 2 ? "border-(--primary-accent)/30 bg-(--primary-accent)/20 text-(--primary-accent)" : " border-white/5 bg-white/5")}
                            onClick={() => {
                                setTodoPriority_ES(2);
                            }}>Medium</button>
                        <button class={clsx("flex-1 py-2.5 rounded-xl text-xs font-bold border text-white/60 cursor-pointer",
                            TodoPriority_ES == 3 ? "border-(--primary-accent)/30 bg-(--primary-accent)/20 text-(--primary-accent)" : " border-white/5 bg-white/5")}
                            onClick={() => {
                                setTodoPriority_ES(3);
                            }}>High</button>
                    </div>
                </section>
                <section class="glass rounded-2xl p-4 flex flex-col gap-3 flex-1 min-h-60">
                    <span class="text-[10px] font-bold uppercase tracking-widest text-white/40">Notes &amp; Description</span>
                    <textarea class="bg-transparent border-none p-0.5 text-base font-normal leading-relaxed focus:ring-0 w-full flex-1 resize-none placeholder-white/20 outline-(--glass-border)/70 outline-2 rounded" placeholder="Start typing details about this task..." value={TodoDescription_ES} onChange={e => { setTodoDescription_ES(e.target.value) }}></textarea>
                </section>
                <button class="mt-8 mb-12 flex items-center justify-center gap-2 text-red-500/80 font-bold text-sm py-4 rounded-2xl hover:bg-red-500/10 transition-colors cursor-pointer"
                    hidden={!TodoId}
                    onClick={() => {
                        deleteOneTodo(TodoId)
                    }}
                >
                    <span class="material-symbols-outlined text-lg"><RiDeleteBin6Fill /></span>
                    Delete Task
                </button>
            </main>
            <div class="sticky bottom-0 z-50 glass border-t border-white/5 px-8 pt-4 pb-8 flex justify-between items-center cursor-pointer"
                onClick={() => {
                    route('/home')
                }}
            >
                <span class="material-symbols-outlined text-white/50  "><RiFileListFill /></span>
                <button class="bg-(--text-primary) size-8 rounded-full flex items-center justify-center shadow-lg shadow-(--primary-accent)/40  cursor-pointer " hidden={!TodoId} onClick={async () => {
                    await updateOneTodoStatus(TodoId, 0);
                    route('/home');
                }}>
                    <span class="material-symbols-outlined text-(--primary-accent) text-sm"><RiCheckboxCircleFill size={40} /></span>
                </button>
            </div>

        </div >
    );
};

export default Editor;