import React, { useState } from "react";
import { Image, Transformation } from "cloudinary-react";

const App = () => {
  const [blogInput, setBlogInput] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [displayInput, setDisplayInput] = useState(blogInput);
  const [displayAutorName, setDisplayAutorName] = useState(authorName);

  const renderOutput = (e) => {
    e.preventDefault();
    setDisplayInput(blogInput);
    setDisplayAutorName(authorName);
  };

  function BlogTitle(blogInput, onTitleChange) {
    return (
      <div>
        <label htmlFor="blog title">Blog Title:</label>
        <input
          value={blogInput}
          onchange={onTitleChange}
          type="text"
          placeholder="Enter a blog title"
        />
      </div>
    );
  }

  function Author(authorName, onNameChange) {
    return (
      <div>
        <label htmlFor="Author's name">Author:</label>
        <input
          value={authorName}
          onchange={onNameChange}
          type="text"
          placeholder="Enter author's name"
        />
      </div>
    );
  }

  return (
    <div className="wrapper">
      <div className="entire-form">
        <div className="form-only">
          <form onSubmit={renderOutput}>
            <BlogTitle
              title={blogInput}
              onTitleChange={(e) => setBlogInput(e.target.value)}
            />
            <Author
              authorName={blogInput}
              onNameChange={(e) => setAuthorName(e.target.value)}
            />
            <button>Generate Social Image</button>
          </form>
        </div>
        <div className="display">
          <Image publicId={"social-card"} cloudName="ifeomaimoh">
            <Transformation width="800" height="500" crop="fit" />
            <Transformation
              overlay={{
                fontFamily: "Arial",
                fontSize: 27,
                text: displayInput,
              }}
              color="#FFFFFF"
              width="500"
              crop="fit"
            />
            <Transformation flags="layer_apply" gravity="west" x="40" />
            <Transformation
              overlay={{
                fontFamily: "Arial",
                fontSize: 27,
                text: displayAutorName,
              }}
              color="#FFFFFF"
              width="500"
              crop="fit"
            />
          </Image>
        </div>
      </div>
    </div>
  );
};

export default App;
