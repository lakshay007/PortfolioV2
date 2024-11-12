<script>
    export let step;
</script>

<div
    class="card bg-slate-950 border border-slate-800 rounded-lg px-8 py-8 flex flex-col"
>
    <div
        class="bg-slate-950 grid place-items-center px-4 text-5xl md:text-6xl -mt-10 sm:-mt-12 md:-mt-14 lg:-mt-16 mx-auto duration-200"
    >
        <i class={step.icon} />
    </div>
    <h3 class="font-medium text-xl sm:text-2xl md:text-3xl text-violet-400">
        {step.name}
    </h3>
    <div class="project-description">
        <slot />
    </div>
    <div class="flex-1 flex justify-betweeen gap-4 items-end">
        <a href={step.href} target="_blank" rel="noopener noreferrer"
            class="ml-auto cursor-pointer group relative px-4 py-2 overflow-hidden"
        >
            <span class="relative z-10 text-white group-hover:text-slate-950 duration-200">
                Go to &rarr;
            </span>
            <div class="absolute inset-0 bg-violet-400 transform translate-y-full group-hover:translate-y-0 transition-transform duration-200"></div>
        </a>
    </div>
</div>

<style>
    :global(.project-description strong) {
        color: rgb(167 139 250);
        font-weight: 600;
    }

    .project-description {
        margin: 1rem 0;
        line-height: 1.6;
    }
</style>
