import React, { Component } from 'react';
import UserForm from './userForm';
import { FloatingButton, Item } from "react-floating-button";
import AddNew from '../utility/images/AddIcon.jpg';
import AddNewUser from './addNewUser';
import { getUserByRole } from '../../services/users';



export default class userList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpenNewUser: false,
            mechanicUsers: [],
            ownerUsers: [],
        }
    }

    async componentDidMount(){
        await getUserByRole("Owner").then((ResponseJson) => {
            console.log(ResponseJson);
            this.setState({
                ownerUsers: ResponseJson
            })
        });
        await getUserByRole("Mechanic").then((ResponseJson) => {
            this.setState({
                mechanicUsers: ResponseJson
            })
        })
    }

    render() {
        return (
            <div className="container-fluid">
                <div styles={{ height: '500px', overflowY: 'scroll' }}>
                    <UserForm data={this.state.ownerUsers} user={"Owners"} />
                </div>
                <br/>
                <br/>
                <div styles={{ height: '500px', overflowY: 'scroll' }}>
                    <UserForm data={this.state.mechanicUsers} user={"Mechanics"} />
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
                <br/>
                <br/>
            </div>
        );
    }

    setAddNewUser(value) {
        this.setState({
            isOpenNewUser: value
        })
    }

}