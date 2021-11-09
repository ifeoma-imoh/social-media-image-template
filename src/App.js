import React, { useState } from "react";
import { Image, Transformation } from "cloudinary-react";

function BlogTitle({ blogInput, onTitleChange }) {
  return (
    <div>
      <label htmlFor="blog title">Blog Title:</label>
      <input
        value={blogInput}
        onChange={onTitleChange}
        type="text"
        placeholder="Enter a post title"
      />
    </div>
  );
}

function Author({ authorName, onNameChange }) {
  return (
    <div>
      <label>Author:</label>
      <input
        value={authorName}
        onChange={onNameChange}
        type="text"
        placeholder="Enter author's name"
      />
    </div>
  );
}

const App = () => {
  const [blogInput, setBlogInput] = useState("");
  const [showBanner, setShowBanner] = useState(false);

  const [authorName, setAuthorName] = useState("");

  const renderOutput = (e) => {
    e.preventDefault();
    if (blogInput && authorName) {
      setShowBanner(true);
    }
  };

  return (
    <div className="wrapper">
      <div className="entire-form">
        <div className="form-only">
          <form onSubmit={renderOutput}>
            <BlogTitle
              blogInput={blogInput}
              onTitleChange={(e) => setBlogInput(e.target.value)}
            />
            <Author
              authorName={authorName}
              onNameChange={(e) => setAuthorName(e.target.value)}
            />
            <button>Generate Social Image</button>
          </form>
        </div>
        {showBanner && (
          <div className="display">
            <Image publicId={"social-card"} cloudName="ifeomaimoh">
              <Transformation width="800" height="500" crop="fit" />
              <Transformation
                overlay={{
                  fontFamily: "Arial",
                  fontSize: 27,
                  text: blogInput,
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
                  text: authorName,
                }}
                color="#FFFFFF"
                width="500"
                crop="fit"
              />
            </Image>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
