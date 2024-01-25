import React, { useState } from "react";
import "./Grid.css";
import CloseIcon from "@mui/icons-material/Close";

const Grid = ({ photos }) => {
  const [model, setModel] = useState(false);
  const [tempimgsrc, setTempImgSrc] = useState("");
  const getImg = (photo) => {
    console.warn(photo);
    setTempImgSrc(photo);
    setModel(true);
  };

  return (
    <>
      <div className={model ? "model open" : "model"}>
        <img
          src={`http://localhost:4000/uploads/${tempimgsrc}`}
          alt="select_img"
        />
        <CloseIcon onClick={() => setModel(false)} />
      </div>
      {/* <h2>Our Gallery</h2> */}
      <div className="grid">
        {photos.map(({ photo, _id }) => (
          <div key={_id} className="grid_item" onClick={() => getImg(photo)}>
            <img
              src={`http://localhost:4000/uploads/${photo}`}
              alt="grid_image"
              style={{ width: "100%" }}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Grid;
