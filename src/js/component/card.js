import React from "react";

const Card = (props) => {
    return (
        <div className="card col-12 col-md-3" style={{"width": "18rem"}}>
            <img src={props.item.imgUrl } className="card-img-center" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.item.title}</h5>
                <p className="card-text">{props.item.textCard}</p>
                <a href="#" className="btn btn-primary">Go to more information</a>
            </div>
        </div>
    );
};

export default Card;
