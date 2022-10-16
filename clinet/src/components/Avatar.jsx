
import React from "react";

function Avatar(props) {
  return <img  src={`http://localhost:3000/${props.img}`} alt="avatar_img" />;
}

export default Avatar;
