import { h, Component } from 'preact';
import { RiArrowRightLine, RiFlashlightFill, RiStackFill, RiVerifiedBadgeFill } from '@remixicon/react'
import NavBar1 from '../NavBar/Nav1';
import { route } from 'preact-router';
import { useEffect, useState } from 'preact/hooks'
import useAccountStore from '../../store/user/AccountStore';

const Landing = () => {
    const { UserLogdS } = useAccountStore();
    


    return (
        <div class="w-full h-full ">
            <div class="fixed inset-0 overflow-hidden pointer-events-none">
                <div class="orb bg-(--primary-accent) w-80 h-80 -top-20 -left-20"></div>
                <div class="orb bg-purple-600 w-96 h-96 top-1/2 -right-40"></div>
                <div class="orb bg-blue-400 w-72 h-72 bottom-0 left-1/4"></div>
            </div>
            <NavBar1 />

            <main class="relative z-10 px-6 pt-12 pb-20 flex flex-col items-center">
                <div class="text-center max-w-md mx-auto mb-12">
                    <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full glass mb-8">
                        <span class="flex h-2 w-2 rounded-full bg-(--primary-accent)"></span>
                        <span class="text-[10px] font-bold uppercase tracking-widest text-(--primary-accent)">Business Grade Productivity</span>
                    </div>
                    <h1 class="text-white text-5xl font-black leading-[1.1] tracking-tight mb-6">
                        Master Your <br />
                        <span class="text-transparent bg-clip-text bg-linear-to-r from-(--primary-accent) to-blue-300">Workflow</span>
                    </h1>
                    <div class="glass rounded-2xl p-6 mb-10 text-left border-white/10 shadow-xl">
                        <div class="flex items-start gap-4">
                            <div class="bg-(--primary-accent)/20 p-2 rounded-lg mt-1">
                                <span class="material-symbols-outlined text-(--primary-accent) text-2xl">
                                    <RiVerifiedBadgeFill />
                                </span>
                            </div>
                            <div>
                                <h3 class="text-white font-bold text-lg mb-1">Unmatched Clarity</h3>
                                <p class="text-white/60 text-sm leading-relaxed">
                                    Experience a unified workspace designed for elite performance and seamless team collaboration.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col gap-4">
                        <button class="bg-(--primary-accent) text-white h-14 rounded-2xl font-bold text-lg shadow-xl shadow-primary/30 flex items-center justify-center gap-2 w-full transition-transform active:scale-[0.98]"
                            onClick={() => {
                                !UserLogdS ? route('/login') : route('/home');
                            }}>
                            <span>Get Started</span>
                            <span class="material-symbols-outlined"><RiArrowRightLine /></span>
                        </button>
                    </div>
                </div>
            </main>
            <section class="relative z-10 py-6">
                <p class="text-white/40 text-[10px] font-bold uppercase tracking-[0.3em] text-center mb-8">Trusted by Users</p>
                <div class="flex items-center justify-center -space-x-3">
                    <img alt="Team 1" class="w-12 h-12 rounded-full border-4 border-black object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuANCX_6v79Bm2Z6wXEkNQ9naEzDoNGb-fJIBy3GejcySHXC-7Be6VmvM1QJOsQe4Uk8V2Ox4z-i-1s-9VNwmhi9swYLDkPXcTUV9RVKUs1r2P22BoeBNKiU0gUD9nHj_e0Ba8zbEBEBpHuksfWM24V1hBgwxbHLLxtNQuVwqr5XhBWZQtBxMoTZBwBzy91SnSx82b4qY4Js213UtdoSPbBThh-pLPwHjiWjimHCZCzcc0f1ZpM0z9tqi6rbo84Bipw6WqI5RowXSTQ9" />
                    <img alt="Team 2" class="w-12 h-12 rounded-full border-4 border-black object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmJ461_MctwhvbcBqOvavblw1Q65CxThBGbILEiLiwyvM6XDcqdOHoo2Eds-Qpyl7qJ4t3_7Kg4rUkmbbq0CdUwsdqI-FBeNBeWONoNZ0EaURFoMvxL6dYBWTfDhcW0iIbrWRLDUf5IwQCL_MQhkfaHsWYXQUVvBgy4Fbb0EVYZC1-vEgXsz-lsWk78xWEfm03LH47UxTkAMDvNlpPNNCDfSzdFBwtAUCtijRLi_FfLa8gCjiDpjZ9cKwBvqA9Ln6aJ2eghZfz5Gis" />
                    <img alt="Team 3" class="w-12 h-12 rounded-full border-4 border-black object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEqZ6q0Kk2diYjdAKYyG-ryQs08gJjJR7UbJKfTkQkg23xrKaE-U-dGGFAc1pxts8x1oHIeB7HCUih-DcbCddndqfN5oaxzym0t78KHToXaJ_HqkAtSyyoz-pKa_0OjZpf4GbpZV84uqm0MNNe96MQVmJKYtlqe-t9gJOHyMdvlRpOTN841xjTpbMHhcQdBlkYanmDISM9VbKNe164Y8shDinNujGpg063N0vGDVteS0xtYnM2ogDA2CK3YwgLKRffp72N50d9xN9H" />
                    <img alt="Team 4" class="w-12 h-12 rounded-full border-4 border-black object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDK9sv4PbPZKRGC3CTDK8TK4lzen7kr8ouZgHG2TrrXwtEH2cnuPYs7QM05jFVW6zMNNPLndFLCt5-INE-ewx6q_ADcO1wC25Z_IN8d1NaHdzQBz9vh2PAr4Wo9MzuqI3KnM073qAu4U37eF-S8Tsf7s0It6LslmEOlWAfs8vaf-o3hcMPt6CYVHcKWDlD0nc9KMT72G0FkMThyqFPNyj6q-6-Ulo_B3ioY0OwG8IKcwzBScTm7KDV1vRqFgpa9K7IwTcOt97_WyR6e" />
                    <div class="w-12 h-12 rounded-full border-4 border-black bg-zinc-900 flex items-center justify-center text-[10px] font-bold text-primary">
                        +500
                    </div>
                </div>
            </section>
            <section class="relative z-10 px-6 py-20 @container">
                <div class="grid grid-cols-1 gap-4">
                    <div class="glass p-8 rounded-3xl flex flex-col gap-4">
                        <div class="bg-(--primary-accent)/10 text-(--primary-accent) w-14 h-14 rounded-2xl flex items-center justify-center">
                            <span class="material-symbols-outlined text-3xl"><RiFlashlightFill /></span>
                        </div>
                        <h3 class="text-xl font-bold">Lightning Speed</h3>
                        <p class="text-white/50 leading-relaxed">Built for instant response. Manage complex roadmaps without a second of latency.</p>
                    </div>
                    <div class="glass p-8 rounded-3xl flex flex-col gap-4">
                        <div class="bg-(--primary-accent)/10 text-(--primary-accent) w-14 h-14 rounded-2xl flex items-center justify-center">
                            <span class="material-symbols-outlined text-3xl"><RiStackFill /></span>
                        </div>
                        <h3 class="text-xl font-bold">Deep Integration</h3>
                        <p class="text-white/50 leading-relaxed">Connects seamlessly with your existing enterprise stack and developer tools.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Landing;