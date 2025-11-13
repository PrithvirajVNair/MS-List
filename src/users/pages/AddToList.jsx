
// for future (custom list)

const AddToList = () => {


    return (
        <div className='bg-black text-white min-h-screen'>
            <div className='grid grid-cols-3'>
                <div></div>
                <div className='flex flex-col justify-center items-center border rounded bg-white/10 h-screen'>
                    <h2 className="text-3xl mb-10">Add to List</h2>
                    <div className="flex flex-col w-full px-5">
                        <label className="mb-3" htmlFor="title">Title 
                            <input type="text" className="bg-white py-1 px-2 text-black ms-3 w-[400px]"  placeholder="Enter Title"/>
                        </label>
                        <label className="mb-3" htmlFor="title">Title 
                            <input type="text" className="bg-white py-1 px-2 text-black ms-3 w-[400px]"  placeholder="Enter Title"/>
                        </label>
                        <label className="mb-3" htmlFor="title">Title 
                            <input type="text" className="bg-white py-1 px-2 text-black ms-3 w-[400px]"  placeholder="Enter Title"/>
                        </label>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default AddToList