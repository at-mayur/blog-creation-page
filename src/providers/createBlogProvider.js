import { createContext } from "react";
import { useCreateBlogProvider } from "../customHooks/createBlogStateHook";


// Initial state for Provider
const initialCreateState = {
    blogTitle: "",
    blogDesc: "",
    blogContent: "",
    blogContentValue: "",
    setBlogTitle: () => {},
    setBlogDesc: () => {},
    setBlogContent: () => {},
    setBlogContentValue: () => {}
};


// create context with initial state
export const createBlogContext = createContext(initialCreateState);


// CreateBlogProvider component
function CreateBlogProvider({ children }){

    // get state for provider using useCreateBlogProvider custom hook
    const createBlogState = useCreateBlogProvider();

    return (
        <createBlogContext.Provider value={ createBlogState }>
            { children }
        </createBlogContext.Provider>
    );

}

export default CreateBlogProvider;