import React from "react";
import "./Grid.css";

const Grid = ({ photos }) => {
  return (
    <>
      <h1>Our Gallery</h1>
      <div className="grid">
        {photos.map(({ photo, _id }) => (
          <div key={_id} className="grid_item">
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
