import React, { Component } from 'react';
import userForm from './userForm';
import { FloatingButton, Item } from "react-floating-button";
import AddNew from '../utility/images/AddIcon.jpg';
import AddNewUser from './addNewUser';



export default class userList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpenNewUser: false,
        }
    }

    render() {
        return (
            <div className="container-fluid">
                <div styles={{ height: '500px', overflowY: 'scroll' }}>
                    ...
                </div>
                <div styles={{ height: '500px', overflowY: 'scroll' }}>
                    ...
                </div>
                <FloatingButton
                    >
                        <Item
                            imgSrc={AddNew}
                            backgroundColor='#3265CE'
                            onClick={() => this.setAddNewUser(true)}
                        />
                </FloatingButton>
                <AddNewUser show={this.state.isOpenNewUser} onHide={() => this.setAddNewUser(false)} />
            </div>
        );
    }

    setAddNewUser(value) {
        this.setState({
            isOpenNewUser: value
        })
    }

}