import React from 'react'

const AddBookForm = () => {
    return (
        <div>
            <form className="flex gap-2">
                <input className="p-2 text-black outline-none rounded-lg" type="text" placeholder="Book Title" />
                <input className="p-2 text-black outline-none rounded-lg" type="text" placeholder="Book Author" />
                <input className="bg-fuchsia-500 p-2 cursor-pointer rounded-lg" type="button" value="ADD BOOK" />
            </form>
        </div>
    )
}

export default AddBookForm