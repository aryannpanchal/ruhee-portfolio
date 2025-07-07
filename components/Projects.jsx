import React from 'react'

const Projects = () => {
  return (
    <section>
          
    <div class="relative items-center w-full px-5 py-4 mx-auto md:px-12 lg:px-24 max-w-7xl">
       <p id='stats' className='font-bold font-world text-center md:text-4xl sm:text-3xl pb-8 sm:pt-24'>
        Projects
      </p> <div class="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-3">
    
            <div class="p-6">
            
                <img id='Bridge' class=" w-full mb-8 lg:h-48 md:h-36 rounded-xl" src="/COVER_Page_1.png" alt="blog" />

                <h1 class="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">Bridging the gap (Residential School)</h1>
                <p class="mx-auto text-base leading-relaxed text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>                <div class="mt-4">
                    <a href="#" class="inline-flex items-center mt-4 font-semibold text-black lg:mb-0 hover:text-neutral-600" title="read more"> Read More » </a>
                </div>
            </div>
            <div class="p-6">
                <img class="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl" src="/Irshalpada 21299_Page_1.png" alt="blog" />

                <h1 class="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">Irshalpada (Rehabilition Project)</h1>
                <p class="mx-auto text-base leading-relaxed text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>                <div class="mt-4">
                    <a href="#" class="inline-flex items-center mt-4 font-semibold text-black lg:mb-0 hover:text-neutral-600" title="read more"> Read More » </a>
                </div>
            </div>
            <div class="p-6">
                <img class="w-full mb-8 lg:h-48 md:h-36 rounded-xl" src="/SETTT_merged (1)_compressed_Page_01.png" alt="blog" />

                <h1 class="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">Working Drawing</h1>
                <p class="mx-auto text-base leading-relaxed text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>                <div class="mt-4">
                    <a href="#" class="inline-flex items-center mt-4 font-semibold text-black lg:mb-0 hover:text-neutral-600" title="read more"> Read More » </a>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Projects