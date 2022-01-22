import { useState } from "react";
import { supabase } from "../utils/supabaseClient";

const Write = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const upload = async () => {
    const { data, error } = await supabase
      .from("Blogs")
      .insert([{ title, content }]);

    error ? console.log(error) : console.log(data);
  };

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      <h1>Write</h1>
      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
        className="text-black"
      />
      <textarea
        value={content}
        onChange={e => setContent(e.target.value)}
        className="text-black"
      />
      <button onClick={upload}>Upload</button>
    </div>
  );
};

export default Write;
