import { c as create_ssr_component, b as add_attribute, d as escape, v as validate_component, e as each } from "../../chunks/ssr.js";
const Step = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { step } = $$props;
  if ($$props.step === void 0 && $$bindings.step && step !== void 0)
    $$bindings.step(step);
  return `<a${add_attribute("href", step.href, 0)} target="_blank" class="p-4 sm:p-6 md:p-8 flex flex-col gap-4 rounded-lg border border-solid border-violet-700 text-center cursor-pointer group hover:border-violet-400 duration-200"><div class="bg-slate-950 grid place-items-center px-4 text-5xl md:text-6xl -mt-10 sm:-mt-12 md:-mt-14 lg:-mt-16 mx-auto duration-200"><i${add_attribute("class", step.icon, 0)}></i></div> <h3 class="font-medium text-xl sm:text-2xl md:text-3xl">${escape(step.name)}</h3> ${slots.default ? slots.default({}) : ``} <div class="flex-1 flex justify-betweeen gap-4 items-end" data-svelte-h="svelte-o55gl8"><div class="ml-auto cursor-pointer hover:text-slate-950 duration-200 relative after:absolute after:top-0 after:h-0 after:right-full after:bg-white after:w-full after:h-full after:duration-200 hover:after:translate-x-full after:z-[-1] overflow-hidden"><p class="z-4">Go to →</p></div></div></a>`;
});
const Main = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let steps = [
    {
      name: "Qnexus",
      icon: "fa-solid fa-cart-shopping",
      description: "QNexus is a gamified educational platform, designed to blend fun and learning into a seamless experience. It is built with SvelteKit, TailwindCSS, and Firebase/Firestore.",
      href: "https://github.com/lakshay007/Qnexus"
    },
    {
      name: "AgeEase",
      icon: "fa-solid fa-list-check",
      description: "AgeEase, a web application designed to cater to the needs of elderly individuals(hosted on vercel), providing features that enhance their daily lives. AgeEase focuses on reddit like community engagement, medicine reminders, a voice chatbot, and virtual doctor appointments.",
      href: "https://age-ease.vercel.app"
    },
    {
      name: "BookMyCeleb",
      icon: "fa-solid fa-diagram-project",
      description: "Platform used to book celebrities for college events",
      href: "https://github.com/lakshay007/DBSProject"
    }
  ];
  let benefits = [
    {
      metric: "10x",
      name: "a problem solver",
      description: "Problem solving is at the core of everything I do. Whether it's figuring out the best algorithm for computer vision tasks, optimizing biomedical imaging processes, or solving challenging coding problems in online competitions, I thrive on tackling challenging problems and finding efficient, elegant solutions."
    },
    {
      name: "an ML enthusiast",
      description: "I have a strong passion for machine learning and artificial intelligence. I have worked as research intern at Indian Institute of Science(Bangalore) at AI and robotics park, I've also worked as an Undergraduate researcher at my college MIT Manipal. I am always eager to learn more and apply my knowledge to real-world problems."
    },
    {
      name: "an excellent communicator",
      description: "Communication is key and it's a paramount value of mine. I believe in transparency and attentive listening above all else. This helps me develop deep relationships and ensures my effectiveness and productivity in any work space with any team."
    }
  ];
  return `<main class="flex flex-col flex-1 p-4"><section id="introPage" class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14" data-svelte-h="svelte-qk6f0d"><div class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10"><h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl">Hi! I&#39;m <span class="poppins text-violet-400">Lakshay</span> Chauhan
                <br></h2> <p class="text-base sm:text-lg md:text-xl">I dabble between AI and development. In the AI realm, I&#39;m particularly interested in computer vision, motion planning, and biomedical imaging. On the development side, I specialize in full-stack development using JavaScript (React.JS or SvelteKit), TailwindCSS, Node.js + Express.js, and databases like PostgreSQL,MongoDB or Firebase/Firestore!</p> <button class="blueShadow mx-auto lg:mr-auto lg:ml-0 text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950"><div class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"></div> <h4 class="relative z-9"><a href="https://www.linkedin.com/in/lakshay-chauhan-ba828b239">Get in touch →</a></h4></button></div> <div class="relative shadow-2xl grid place-items-center"><img${add_attribute("src", "images/386745.jpg", 0)} alt="Zetane Engine" class="object-cover z-[2] max-h-[70vh]"></div> </section> <section class="py-20 lg:py-32 flex flex-col gap-24" id="projects"><div class="flex flex-col gap-2 text-center" data-svelte-h="svelte-ilbkv3"><h6 class="text-large sm:text-xl md:text-2xl">A few of my creative endeavors.</h6> <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">Curious to <span class="poppins text-violet-400">see</span> my work?</h3></div> <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">${validate_component(Step, "Step").$$render($$result, { step: steps[0] }, {}, {
    default: () => {
      return `<p data-svelte-h="svelte-wfqoqx">QNexus is a gamified educational platform, designed to blend fun and learning into a seamless experience. It is built with <strong class="text-violet-400">SvelteKit,TailwindCSS and Firebase/Firestore</strong></p>`;
    }
  })} ${validate_component(Step, "Step").$$render($$result, { step: steps[1] }, {}, {
    default: () => {
      return `<p data-svelte-h="svelte-1865ewe">AgeEase(hosted on vercel), a web application(desktop) designed to cater to the needs of elderly individuals, providing features that enhance their daily lives. AgeEase focuses on reddit like community engagement,medicine reminders, a voice chatbot, and virtual doctor appointments. It is built using <strong class="text-violet-400">SvelteKit,TailwindCSS and NodeJS+ExpressJS+MongoDB</strong></p>`;
    }
  })} ${validate_component(Step, "Step").$$render($$result, { step: steps[2] }, {}, {
    default: () => {
      return `<p data-svelte-h="svelte-1f8y8mk">BookMyCeleb is a <strong class="text-violet-400">SvelteKit,TailwindCSS and NodeJS+ExpressJS+MySQL</strong>
                    web applicatio, it is used to book celebrities for college events.
                    It was Database management system project.</p>`;
    }
  })}</div></section> <section id="about" class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative"> <div class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4" data-svelte-h="svelte-1v5l3ql"><h6 class="text-large sm:text-xl md:text-2xl">Want to know more?</h6> <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">A bit <span class="poppins text-violet-400">about</span> me.</h3></div> <p class="mx-auto poppins font-semibold text-lg sm:text-xl md:text-2xl" data-svelte-h="svelte-1q8im4p">I am . . .</p> <div class="flex flex-col gap-20 w-full mx-auto max-w-[800px]">${each(benefits, (benefit, index) => {
    return ` <div class="flex gap-6 sm:gap-8"><p class="poppins text-4xl sm:text-5xl md:text-6xl text-slate-500 font-semibold">0${escape(index + 1)}</p> <div class="flex flex-col gap-6 sm:gap-8"><h3 class="text-2xl sm:text-3xl md:text-5xl">${escape(benefit.name)}</h3> <p>${escape(benefit.description)}</p></div> </div>`;
  })}</div> <h5${add_attribute("class", " text-2xl sm:text-3xl font-semibold text-center poppins ", 0)} data-svelte-h="svelte-11psba3">The <span class="text-violet-400">Complete</span> Package</h5> <div class="flex flex-col overflow-x-scroll gap-10 max-w-[800px] mx-auto w-full" data-svelte-h="svelte-1hp7xmr"><table class="bg-white text-slate-700 rounded text-center"><thead${add_attribute("class", "border-b border-solid border-slate-200  ", 0)}><tr class=""><th></th> <th class="whitespace-nowrap p-2 px-4">Candidate #1</th> <th class="whitespace-nowrap p-2 px-4">Candidate #2</th> <th class="whitespace-nowrap p-2 px-4">Candidate #3</th> <th class="bg-violet-700 text-white whitespace-nowrap p-4 px-8">Me</th></tr></thead> <tbody><tr class="border-b border-solid border-slate-200"><td class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm">Dedication</td> <td><i class="fa-solid fa-xmark text-slate-500"></i></td> <td><i class="fa-solid fa-check text-slate-500"></i></td> <td><i class="fa-solid fa-xmark text-slate-500"></i></td> <td><i class="fa-solid fa-check text-green-500"></i></td></tr> <tr class="border-b border-solid border-slate-200"><td class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm">Critical Thought</td> <td><i class="fa-solid fa-xmark text-slate-500"></i></td> <td><i class="fa-solid fa-check text-slate-500"></i></td> <td><i class="fa-solid fa-check text-slate-500"></i></td> <td><i class="fa-solid fa-check text-green-500"></i></td></tr> <tr><td class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm">Interpersonal Skills</td> <td><i class="fa-solid fa-check text-slate-500"></i></td> <td><i class="fa-solid fa-check text-slate-500"></i></td> <td><i class="fa-solid fa-xmark text-slate-500"></i></td> <td><i class="fa-solid fa-check text-green-500"></i></td></tr> <tr class="border-t border-solid border-slate-200"><td class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm">Progamming Ability</td> <td><i class="fa-solid fa-check text-slate-500"></i></td> <td><i class="fa-solid fa-xmark text-slate-500"></i></td> <td><i class="fa-solid fa-check text-slate-500"></i></td> <td><i class="fa-solid fa-check text-green-500"></i></td></tr></tbody></table></div> <div class="mx-auto -mt-12 italic sm:hidden opacity-50" data-svelte-h="svelte-zp0ubu"><p>Scroll to see more →</p></div> </section></main>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Main, "Main").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
