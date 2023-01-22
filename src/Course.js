import React from "react";

export const Course = ({image, title, description }) => {
  // const title =props.title;
  // const description =props.description;
  // const {title, description}=props;
  return (
    <div>
      <img src={image} alt=""/>
      <div>{title}</div>
      <div>{description}</div>
    </div>
  );
};
