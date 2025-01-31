import React from "react";

const Card = () => {
  return (
    <div className="card rounded-0 bg-ivory mt-2" style={{ width: "18rem" }}>
      <img src="https://i.imgur.com/ntOoeVo.png" className="card-img-top rounded-0" alt="Aquí debería haber un placeholder" />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque suscipit mollis sem sed pellentesque. Vivamus vitae justo massa. Donec et sollicitudin nulla, nec condimentum elit. Fusce et luctus turpis.
        </p>
        <a href="#" className="btn btn-primary">
Find Out More!       </a>
      </div>
    </div>
  );
};

export default Card;