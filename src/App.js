import './App.css';
import Navbar from './components/navbar';
import RichTextEditor from './components/richTextEditor';
import { useCreateBlogState } from './customHooks/createBlogStateHook';


// function to check if character is alphanumeric character
function isLetter(val){
  if((val>='a' && val<='z') || (val>='A' && val<='Z') || (val>='0' && val<='9')){
    return true;
  }

  return false;
}


// App componenet
function App() {

  // Use state provided by provider
  const createBlogState = useCreateBlogState();

  // function to handle submit
  const handleSubmit = () => {

    const title = createBlogState.blogTitle;
    const desc = createBlogState.blogDesc;
    const content = createBlogState.blogContent;

    // Check if title is present or not
    if(!title){
      alert("Title is required");
      return;
    }

    // Check if title only contains special characters
    const titleWords = title.trim().split(" ");
    if(titleWords.length===1){
      const initialChar = titleWords[0].charAt(0);
      if(!isLetter(initialChar)){
        alert("Title must start with alphanumeric character!");
        return;
      }
    }

    // check length of description
    const descWords = desc.trim().split(" ");
    if(descWords.length>100){
      alert("Description should be within 100 words!");
      return;
    }

    // check if content is present or not
    if(!content){
      alert("Blog content required!");
      return;
    }

    // check for content's min length
    const contentWords = content.trim().split(" ");
    if(contentWords.length<200){
      alert("Blog content too small. Must be greater than 200 words.");
      return;
    }

  };

  return (

    <div className="App">

      {/* Navbar Component */}
      <Navbar />

      <h1>
        <span className='blog-icon'><i className="fa-solid fa-blog"></i></span>
        Create Your Blog
      </h1>

      <div className='title-desc'>

        <div className='content-in'>
          <label htmlFor="blog-title" >Title</label>
          <br />
          <input id='blog-title' type='text' value={ createBlogState.blogTitle } onChange={ (e) => { createBlogState.setBlogTitle(e.target.value) } } />
        </div>

        <div className='content-in'>
          <label htmlFor="blog-desc" >Description</label>
          <br />
          <textarea 
          id='blog-desc' 
          placeholder='Upto 100 words...' 
          rows={5} 
          value={ createBlogState.blogDesc }
          onChange={ (e) => { createBlogState.setBlogDesc(e.target.value) } }></textarea>
        </div>


        {/* Rich text editor */}
        <div className='content-in'>

          <label>Content</label>
          <br />
          <RichTextEditor />

        </div>

        <div className='submit-div'>
          <button type='button' onClick={ handleSubmit }>Submit</button>
        </div>

      </div>

    </div>
  );
}

export default App;
