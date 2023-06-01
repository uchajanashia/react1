import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { render } from "react-dom";

import CardList from "./componets/card-list/card-list.component";
import SearchBox from "./componets/search-box/search-box.component";

class App extends Component {
    constructor() {
        super();

        this.state = {
            footbollers: [
                {
                    id: 1,
                    name: "ხვიჩა კვარაცხელია",
                },
                {
                    id: 2,
                    name: "ვაკო ყაზაიშვილი",
                },
                {
                    id: 3,
                    name: "ნიკა კვეკვესკირი",
                },
                {
                    id: 4,
                    name: "გიორგი ლორია",
                },
                {
                    id: 5,
                    name: "გურამ კაშია",
                },
                {
                    id: 6,
                    name: "ლუკა ლოჩოშვილი",
                },
                {
                    id: 7,
                    name: "გიორგი ოქრიაშვილი",
                },
                {
                    id: 8,
                    name: "გიორგი ჩაკვეტაძე",
                },
                {
                    id: 9,
                    name: "ჟორჟ მიქაულტაძე",
                },
                {
                    id: 10,
                    name: "გიორგი მამარდაშვილი",
                },
            ],
            searchFeild: "",
        };
    }
    // componentDidMount() {
    //     fetch("https://jsonplaceholder.typicode.com/users")
    //         .then((response) => response.json())
    //         .then((users) =>
    //             this.setState(
    //                 () => {
    //                     return { footbollers: users };
    //                 },
    //                 () => {
    //                     return console.log(users);
    //                 }
    //             )
    //         );
    // }

    onSearchChange = (event) => {
        const searchFeild = event.target.value.toLocaleLowerCase();
        this.setState(() => {
            return { searchFeild };
        });
    };
    render() {
        const { footbollers, searchFeild } = this.state;
        const { onSearchChange } = this;
        const filtredfootboller = footbollers.filter((footboller) => {
            return footboller.name.toLocaleLowerCase().includes(searchFeild);
        });

        return (
            <div className="App">
                <h1 className="app-title"> Georgian footbollers</h1>
                <SearchBox
                    onChangeHandler={onSearchChange}
                    placeholder={"search footboller"}
                    className={"search-box"}
                />
                <CardList footbollers={filtredfootboller} />
            </div>
        );
    }
}

export default App;
