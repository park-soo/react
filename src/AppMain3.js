import React, { Component, Fragment } from "react";
import InputFrom from "/component/Input";

class AppMain extends React.Component {
    id = 2;
    state = {
        infoBook: [
            { id: 0, name: "카리나", telno: "010-1111-2222" },
            { id: 1, name: "김우빈", telno: "010-2222-3333" },
        ],
        kwyword: "",
    };
    handleMake = (data) => {
        const { infoBook } = this.state;
        this.setState({
            infoBook: infoBook.concat({ id: this.id++, ...data }),
        });
    };

    render() {
        const { infoBook, keyword } = this.state;
        const filteredList = infoBook.filter((info) => info.name.indexOf(keyword) !== -1);
        return (
            <Fragment>
                <InputFrom onMake={this.handleMake} />
                <p>
                    <input placeholder='검색할 이름을 입력하세요..' onChange={this.handleChange} value={keyword} />
                </p>
                <TelInfoList data={filteredList} onDelete={this.handleDelete} onUpdate={this.handleUpdate} />
            </Fragment>
        );
    }
}
export default AppMain;
