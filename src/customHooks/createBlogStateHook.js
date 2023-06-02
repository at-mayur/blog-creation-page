import { useContext, useState } from "react";
import { createBlogContext } from "../providers/createBlogProvider";


// custom hook to use context state within components
export const useCreateBlogState = () => {
    return useContext(createBlogContext);
};


// custom hook which return state for context Provider
export const useCreateBlogProvider = () => {

    const [blogTitle, setBlogTitle] = useState("");
    const [blogDesc, setBlogDesc] = useState("");
    const [blogContent, setBlogContent] = useState("");
    const [blogContentValue, setBlogContentValue] = useState("");

    return {
        blogTitle, blogDesc, blogContent, blogContentValue, setBlogTitle, setBlogDesc, setBlogContent, setBlogContentValue
    };
};