import React, { Fragment, useContext, useState } from "react";
import Header from "../Header/Header";
import "./Create.css";
import { AuthContext, FireBaseContext } from "../../store/Context";
const Create = () => {
  const {firebase}=useContext(FireBaseContext)
  const {user}=useContext(AuthContext)
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const handleNameChange = () => {
    firebase.storage().ref(`/image/${image.name}`).put(image).then(({ref})=>{
      ref.getDownloadURL().then((url)=>{
        console.log(url)
      })
    })
  };
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };
  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };
  const handleImageChange = (e) => {
    if (e.target.value > 0) {
      setImage(e.target.files[0]);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
          <label htmlFor="fname">Name</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            name="Name"
            onChange={handleNameChange}
          />
          <br />
          <label htmlFor="fname">Category</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            name="category"
            onChange={handleCategoryChange}
          />
          <br />
          <label htmlFor="fname">Price</label>
          <br />
          <input
            className="input"
            type="number"
            id="fname"
            name="price"
            onChange={handlePriceChange}
          />
          <br />
          <br />
          <img
            alt="posts"
            width="200px"
            height="200px"
            src=""
            onChange={handleImageChange}
          ></img>
          <br />
          <input type="file" />
          <br />
          <button onClick={handleSubmit} className="uploadBtn">Upload And Submit</button>
          <br />
          {image && (
            <img
              alt="posts"
              width="200px"
              height="200px"
              src={URL.createObjectURL(image)}
            />
          )}
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
