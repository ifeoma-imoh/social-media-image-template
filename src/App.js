import "./App.css";
import React, { useState } from "react";
import { Image, Transformation } from "cloudinary-react";

function PostTitle({ title, onTitleChange }) {
  return (
    <div className="form-control">
      <label htmlFor="blog title">Blog Title:</label>
      <input
        value={title}
        onChange={onTitleChange}
        type="text"
        placeholder="Enter a post title"
      />
    </div>
  );
}

function Author({ authorName, onNameChange }) {
  return (
    <div className="form-control">
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
  const [authorName, setAuthorName] = useState("");
  const [showBanner, setShowBanner] = useState(false);

  const displayImage = (e) => {
    e.preventDefault();
    if (blogInput && authorName) {
      setShowBanner(true);
    }
  };
  return (
    <div className="wrapper">
      <div className="container">
        <div className="form">
          <form onSubmit={displayImage}>
            <PostTitle
              title={blogInput}
              onTitleChange={(e) => setBlogInput(e.target.value)}
            />
            <Author
              authorName={authorName}
              onNameChange={(e) => setAuthorName(e.target.value)}
            />
            <div className="button-wrapper">
              <button>Generate Social Image</button>
            </div>
          </form>
        </div>
        {showBanner && (
          <div className="display">
            <Image publicId={"social-card"} cloudName="ifeomaimoh">
              <Transformation width="800" height="500" crop="fit" />
              <Transformation
                overlay={{
                  fontFamily: "Arial",
                  fontSize: 40,
                  fontWeight: "bold",
                  letter_spacing: 1,
                  text: `${blogInput}`,
                }}
                color="#FFFFFF"
                width="500"
                height="200"
                crop="fit"
              />
              <Transformation flags="layer_apply" gravity="west" x="40" />
              <Transformation
                overlay={{
                  fontFamily: "Arial",
                  fontSize: 25,
                  text: `Author: ${authorName}`,
                  textAlign: "",
                  fontWeight: "bold",
                }}
                color="#FFFFFF"
                width="500"
                height="100"
                crop="fit"
              />
              <Transformation
                flags="layer_apply"
                gravity="south_west"
                x="40"
                y="50"
              />
            </Image>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
