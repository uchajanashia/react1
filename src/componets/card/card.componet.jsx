import { Component } from "react";

import "./card.styles.css";

class Card extends Component {
    render() {
        const { id, name } = this.props.footboller;
        return (
            <div className="card-container" key={id}>
                <img src={require(`./img_${id}.png`)} alt={`footboller ${name}`} width="180" height="180" />
                <h2>{name}</h2>
            </div>
        );
    }
}

export default Card;
