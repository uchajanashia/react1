import { Component } from "react";
import "./card-list.styles.css";
import Card from "../card/card.componet";

class CardList extends Component {
    render() {
        const { footbollers } = this.props;
        return (
            <div className="card-list">
                {footbollers.map((footboller) => {
                    return <Card footboller={footboller} />;
                })}
            </div>
        );
    }
}

export default CardList;
