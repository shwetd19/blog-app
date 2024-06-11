"use client"

import { addPost } from '@/lib/action';
import React from 'react'
import { useFormState } from "react-dom";

const AdminPostForm = ({ }) => {

    const [state, formAction] = useFormState(addPost, undefined);

    const refresh = () => {
        window.location.href = '/addpost';
    }

    return (
        <form className='form' action={formAction}>
            <h3>Add New Post</h3>
            {/* <input type="hidden" name="userId" value={userId} /> */}
            <input type="text" name="title" placeholder="Title" />
            <input type="text" name="slug" placeholder="Slug" />
            <input type="text" name="img" placeholder="Img Url" />
            <textarea type="text" name="desc" placeholder="Desc" rows={10} />
            <button onClick={refresh}>Add</button>
            {state?.error && <div style={{ marginBottom: '13px', marginTop: '13px', textAlign: "center" }} className='error'> {state.error}  </div>}
        </form>
    )
}

export default AdminPostForm
