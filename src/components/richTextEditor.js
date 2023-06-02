import { Editor } from "@tinymce/tinymce-react";
import { useCreateBlogState } from "../customHooks/createBlogStateHook";


// Rich text editor component
function RichTextEditor(){

    // use state
    const createBlogState = useCreateBlogState();

    // handle text editor update
    const handleUpdate = (newValue, editor) => {
    
        const editorContent = editor.getContent({ format: 'text' });
        createBlogState.setBlogContentValue(newValue);
        createBlogState.setBlogContent(editorContent);

    };

    return (
        <Editor
        value={ createBlogState.blogContentValue }
        init={{
            branding: false,
            menubar: true,
            plugins: ['image', 'table', 'preview', 'fullscreen', 'media'],
            toolbar: "redo undo | bold italic underline strikethrough | forecolor backcolor blockquote | alignleft aligncenter alignright alignjustify | numlist bullist outdent indent"
        }}
        onEditorChange={ handleUpdate }
        />
    );
    
}


export default RichTextEditor;