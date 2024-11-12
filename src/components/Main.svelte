<script>
    import { onMount } from 'svelte';
    import Step from "./Step.svelte";
    import Swiper from 'swiper';
    import { Navigation, Pagination } from 'swiper/modules';
    
    import 'swiper/swiper-bundle.css';

    let swiper;
    
    onMount(() => {
        swiper = new Swiper('.mySwiper', {
            modules: [Navigation, Pagination],
            spaceBetween: 30,
            slidesPerView: 1,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                1024: {
                    slidesPerView: 3,
                },
                768: {
                    slidesPerView: 2,
                },
            }
        });
    });

    let steps = [
        {
            name: "Testify",
            icon: "fa-solid fa-comments",
            description:
                "Testify is a modern, flexible solution for businesses to gather and manage customer feedback. It offers <strong>customizable forms</strong>, <strong>multi-language support</strong>, and <strong>rich media integration</strong>. This platform simplifies the process of collecting authentic testimonials, helping businesses showcase their value through the voices of their satisfied customers.",
            href: "https://testify.tech",
        },
        {
            name: "Qnexus",
            icon: "fa-solid fa-cart-shopping",
            description:
                "QNexus is a <strong>gamified educational platform</strong>, designed to blend fun and learning into a seamless experience. It is built with <strong>SvelteKit</strong>, <strong>TailwindCSS</strong>, and <strong>Firebase/Firestore</strong>.",
            href: "https://github.com/lakshay007/Qnexus",
        },
        {
            name: "AgeEase",
            icon: "fa-solid fa-list-check",
            description:
                "AgeEase, a web application designed to cater to the needs of elderly individuals (hosted on vercel), providing features that enhance their daily lives. AgeEase focuses on <strong>reddit-like community engagement</strong>, <strong>medicine reminders</strong>, <strong>voice chatbot</strong>, and <strong>virtual doctor appointments</strong>.",
            href: "https://age-ease.vercel.app",
        },
        {
            name: "BookMyCeleb",
            icon: "fa-solid fa-diagram-project",
            description:
                "Platform used to <strong>book celebrities for college events</strong>. Built with <strong>SvelteKit</strong>, <strong>TailwindCSS</strong>, and <strong>NodeJS + ExpressJS + MySQL</strong>.",
            href: "https://github.com/lakshay007/DBSProject",
        },
    ];

    let benefits = [
        {
            metric: "10x",
            name: "a problem solver",
            description:
                "Problem solving is at the core of everything I do. Whether it's figuring out the best algorithm for computer vision tasks, optimizing biomedical imaging processes, or solving challenging coding problems in online competitions, I thrive on tackling challenging problems and finding efficient, elegant solutions.",
        },
        {
            name: "an ML enthusiast",
            description:
                "I have a strong passion for machine learning and artificial intelligence. I have worked as research intern at Indian Institute of Science(Bangalore) at AI and robotics park, I've also worked as an Undergraduate researcher at my college MIT Manipal. I am always eager to learn more and apply my knowledge to real-world problems.",
        },
        {
            name: "an excellent communicator",
            description:
                "Communication is key and it's a paramount value of mine. I believe in transparency and attentive listening above all else. This helps me develop deep relationships and ensures my effectiveness and productivity in any work space with any team.",
        },
    ];
</script>

<main class="flex flex-col flex-1 p-4">
    <section
        id="introPage"
        class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14"
    >
        <div
            class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10"
        >
            <h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl">
                Hi! I'm <span class="poppins text-violet-400">Lakshay</span> 
                <br />
            </h2>
            <p class="text-base sm:text-lg md:text-xl">
                I dabble between AI and development. In the AI realm, I'm particularly interested in <span class="poppins text-violet-400">computer vision, motion planning, and biomedical imaging</span>. On the development side, I specialize in full-stack development using <span class="poppins text-violet-400">JavaScript (React.JS or SvelteKit), TailwindCSS, Node.js + Express.js</span>, and databases like PostgreSQL,MongoDB or Firebase/Firestore!
                
            </p>
            <button
                class="blueShadow mx-auto lg:mr-auto lg:ml-0 text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950"
            >
                <div
                    class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"
                />
                <h4 class="relative z-9"><a href = 'https://www.linkedin.com/in/lakshay-chauhan-ba828b239'>Get in touch &rarr;</a></h4>
            </button>
        </div>
        <div class="relative shadow-2xl grid place-items-center">
            <img
                src={"images/386745.jpg"}
                alt="Zetane Engine"
                class="object-cover z-[2] max-h-[70vh] rounded-3xl"
            />
        </div>
        <!-- <div  class="flex p-0.5 relative max-w-[700px] w-full mx-auto">
            <div
                class="absolute inset-0 overflow-hidden rounded-md flex items-center justify-center"
            >
                <div
                    class="bg-gradient-to-r absolute inset-[-20px]  from-violet-800 to-indigo-800 specialSpin"
                />
            </div>

            <img
                src={"images/zetane-engine.jpeg"}
                alt="Zetane Engine"
                class="w-full h-full object-cover z-[2]"
            />
        </div> -->
    </section>
    <section class="py-20 lg:py-32 flex flex-col gap-24" id="projects">
        <div class="flex flex-col gap-2 text-center">
            <h6 class="text-large sm:text-xl md:text-2xl">
                A few of my creative endeavors.
            </h6>
            <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
                Passionate about building <span class="poppins text-violet-400">extraordinary</span> things
            </h3>
        </div>
       
        <div class="w-full">
            <div class="swiper mySwiper">
                <div class="swiper-wrapper">
                    {#each steps as step}
                        <div class="swiper-slide">
                            <Step {step}>
                                <p>
                                    {@html step.description}
                                </p>
                            </Step>
                        </div>
                    {/each}
                </div>
                <div class="swiper-pagination"></div>
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
            </div>
        </div>
    </section>
    <section
        id="about"
        class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative"
    >
        <!-- <div class="z-[-1] bg-violet-950 w-screen left-1/2 -translate-x-1/2 top-0 h-full absolute"> </div> -->
        <div
            class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4"
        >
          
            <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
                A bit <span class="poppins text-violet-400">about</span> me.
            </h3>
        </div>
        <p class="mx-auto poppins font-semibold text-lg sm:text-xl md:text-2xl">
            I am . . .
        </p>
        <div class="flex flex-col gap-20 w-full mx-auto max-w-[800px]">
            {#each benefits as benefit, index}
                <!-- <div class="flex flex-col gap-2 mx-auto">
                    <div class="flex items-end gap-4">
                        <p
                            class="poppins text-6xl sm:text-7xl md:text-8xl text-slate-500 font-medium"
                        >
                            {benefit.metric}
                        </p>
                        <p
                            class="text-xl sm:text-2xl md:text-3xl capitalize pb-2"
                        >
                            {benefit.name}
                        </p>
                    </div>
                    <p class="text-center italic">- {benefit.description}</p>
                </div> -->
                <div class="flex gap-6 sm:gap-8">
                    <p
                        class="poppins text-4xl sm:text-5xl md:text-6xl text-slate-500 font-semibold"
                    >
                        0{index + 1}
                    </p>
                    <div class="flex flex-col gap-6 sm:gap-8">
                        <h3 class="text-2xl sm:text-3xl md:text-5xl">
                            {benefit.name}
                        </h3>
                        <p>{benefit.description}</p>
                    </div>
                </div>
            {/each}
        </div>
       
        <!-- <p class="mx-auto">So why not invest?</p> -->
    </section>
</main>

<style>
    :global(.swiper-button-next),
    :global(.swiper-button-prev) {
        color: rgb(167 139 250) !important;
    }

    :global(.swiper-pagination-bullet-active) {
        background: rgb(167 139 250) !important;
    }

    :global(.swiper) {
        padding: 2rem !important;
    }

    :global(.swiper-slide) {
        height: auto !important;
    }

    :global(.swiper-slide > *) {
        height: 100%;
    }

    :global(.card) {
        display: flex;
        flex-direction: column;
        height: 100%;
        min-height: 400px; /* Adjust this value as needed */
    }
</style>
