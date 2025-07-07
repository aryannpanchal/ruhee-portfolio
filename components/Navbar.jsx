import React from 'react'

const Navbar = () => {
  return (
    <>
    <header
    class="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md  py-3 backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg">
    <div class="px-4">
        <div class="flex items-center justify-between">
            <div class="flex shrink-0">
                  <div class="hidden md:flex md:items-center md:justify-center md:gap-5">
                <a aria-current="page"
                    class="inline-block rounded-lg px-2 py-1 text-sm font-medium text-black transition-all duration-200 hover:bg-gray-100 hover:text-gray-900 bg-[#f3efe8]"
                    href="#">Home</a>
                <a class="inline-block rounded-lg px-2 py-1 text-sm font-medium text-black transition-all duration-200 hover:bg-gray-100 hover:text-gray-900 bg-[#f3efe8]"
                    href="#">Projects</a>
            </div>
                {/* <a aria-current="page" class="flex items-center" href="/">
                    <img class="h-7 w-auto" src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="" />
                    <p class="sr-only">Website Title</p>
                </a> */}
                
            </div>
          
            <div class="flex items-center justify-end gap-3">
                <a class="inline-flex items-center justify-center rounded-xl bg-black px-3 py-2 text-sm font-thin text-white shadow-sm transition-all duration-150 hover:bg-gray-700 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-gray-700"
                   target='__blank' href="https://wa.me/918390950033?text=I%20wish%20to%20reach%20out%20to%20you%20%5Bwebsite%20lead%5D">Reach out</a>
            </div>
            
        </div>
    </div>
</header>
</>
  )
}

export default Navbar