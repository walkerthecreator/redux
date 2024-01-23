


function Nav(){
    return <nav className="flex w-full justify-around items-center border-b-2 p-1">
        <h2 className="font-medium text-xl">Youtube</h2>
        <input type="text" placeholder="Search for Videos" className="border p-1 px-6 rounded-full "/>
        <button className="p-1 px-2 rounded-md bg-red-100 text-sm">login</button>
    </nav>
}

export default Nav