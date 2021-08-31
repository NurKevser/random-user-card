import axios from 'axios';
import { useState, useEffect } from 'react';
import email from '../../assets/email.svg';
import location from '../../assets/location.svg';
import phone from '../../assets/phone.svg';

const User = () => {
    const [users, setUsers] = useState("");



    const initilaizeUser = () => {

        axios.get('https://randomuser.me/api/')
            .then(function (response) {
                console.log(response.data.results);
                setUsers(response.data.results[0])
            });
    }
    useEffect(() => {
        initilaizeUser();
    }, [])





    return (
        <div className="container">

            <div className="user">
                <div className="image">
                    <img src={users.picture?.large} alt="" />
                    <p className="info">{users.name?.title} {users.name?.first} {users.name?.last}</p>
                </div>
                <div className="image">
                    <img className="logo" src={email} alt="" />
                    <p className="info">{users.email}</p>
                </div>
                <div className="image">
                    <img className="logo" src={phone} alt="{phone}" />
                    <p className="info">{users.phone}</p>
                </div>
                <div className="image">
                    <img className="logo" src={location} alt="{location}" />
                    <p className="info">{users.location?.city} - {users.location?.country}</p>
                </div>
                <div className="info2">Age: {users.dob?.age}</div>
                <div className="info2">Registered Date: {users.registered?.date.slice(0, 10)}</div>
            </div>
            <button className="btn">Random User</button>
        </div>
    )
};
export default User;

