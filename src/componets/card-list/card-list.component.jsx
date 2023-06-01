import { Component } from "react";
import "./card-list.styles.css";

class CardList extends Component {
    render() {
        const { footbollers } = this.props;
        return (
            <div className="card-list">
                {footbollers.map((footboller) => {
                    const { name, id } = footboller;
                    return (
                        <div className="card-container" key={id}>
                            <img src={require(`./img_${id}.png`)} alt={`footboller ${name}`} width="180" height="180" />
                            <h2>{name}</h2>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default CardList;
