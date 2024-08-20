// import React from 'react'

function Portfolio() {
  return (
<div className='body-conatainer bg-stone-950 px-5 py-3'>
    {/* <div className=" w-full px-10 bg-stone-800"> scroll</div> */}
    <div className="grid-container">
        <div className="header">Header</div>
        <div className="sidebar overflow-y-auto px-3">
        <h1 className="capitalize font-bold text-xl sticky top-0 bg-black py-3 w-full">about me</h1>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&rsquo;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
        </div>
        <div className="main-content overflow-y-auto ">
            <div className="flex gap-4 w-full overflow-hidden sticky bg-black top-0  py-3 px-3">
                <button className="capitalize py-[7px] px-4 border-stone-800 border-solid border-[3px] rounded-xl">personal project</button>
                <button className="capitalize py-[7px] px-4 border-stone-800 border-solid border-[3px] rounded-xl">client work</button>
            </div>
            <div className="px-3 py-3 h-full overflow-x-auto grid gap-3">
                <div className=" border-solid border-[2px] border-stone-800 w-full h-[300px] rounded-lg flex flex-col overflow-hidden">  
                    <div className="bg-white flex-1"></div>
                    <div className="bg-black h-20 px-2 py-3">
                        <h1>Deeds</h1>
                        <p>shopify store - html, css, liquid</p>
                    </div>
                </div>
                <div className=" border-solid border-[2px] border-stone-800 w-full h-[300px] rounded-lg flex flex-col overflow-hidden">  
                    <div className="bg-white flex-1"></div>
                    <div className="bg-black h-20 px-2 py-3">
                        <h1>Deeds</h1>
                        <p>shopify store - html, css, liquid</p>
                    </div>
                </div>
                <div className=" border-solid border-[2px] border-stone-800 w-full h-[300px] rounded-lg flex flex-col overflow-hidden">  
                    <div className="bg-white flex-1"></div>
                    <div className="bg-black h-20 px-2 py-3">
                        <h1>Deeds</h1>
                        <p>shopify store - html, css, liquid</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer overflow-y-auto px-3 ">
        <h1 className="capitalize font-bold text-xl sticky top-0 bg-black py-3 w-full">contact me</h1>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&rsquo;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
        </div>
    </div>
    <div className="w-full text-center py-5">
        alexander preye
    </div>
</div>
  )
}

export default Portfolio