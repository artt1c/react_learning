import React, {FC} from 'react';
import {IUser} from "../../models/IUsers";
import './User.css'

type IUserProps = {
  user: IUser;
  userPosts: (user:IUser) => void;
}

const User:FC<IUserProps> = ({user, userPosts}) => {
  const {address, bank, company, crypto} = user;

  return (
    <>
      <div className="header">
        <div className="header__img-block" style={{backgroundImage: `url(${user.image})`}}>
          <span>{user.id}</span>
        </div>
        <ul className="header__list">
          <li className="header__item">First Name: <b>{user.firstName}</b></li>
          <li className="header__item">Maiden Name: <b>{user.maidenName || '------'}</b></li>
          <li className="header__item">Last Name: <b>{user.lastName}</b></li>
          <li className="header__item header__item-gender">Gender: {user.gender.toUpperCase()}</li>
          <li className="header__item">Age: <span>{user.age}</span></li>
        </ul>
      </div>
      <hr/>
      <div className="main">

        <p className="main__birth-date">Date of Birth: <b>{user.birthDate.replaceAll('-', '.')}</b></p>
        <p>Blood Group: <b>{user.bloodGroup}</b></p>

        <div className="main__account">
          <h4>Account</h4><br/>
          User Name: <b>{user.username}</b><br/>
          Password: <b>{user.password}</b><br/>
          Phone: <b>{user.phone}</b><br/>
          Email: <b>{user.email}</b><br/>
          IP: <b>{user.ip}</b><br/>
        </div>

        <ul className="main__appearance-list">
          <li className="main__appearance-item">
            Height: <b className="space">{user.height}</b>
            Weight: <b>{user.weight}</b>
          </li>
          <li className="main__appearance-item">Eye Color: <b>{user.eyeColor}</b></li>
          <li className="main__appearance-item main__appearance-item-hair">
            Hair:
            <span>Type: <b>{user.hair.type}</b></span>
            <span>Color: <b>{user.hair.color}</b></span>
          </li>
        </ul>

        <hr/>

        <ul className="main__address-list droplist">
          <li className="main__address-item droplist-title">Address: <b>{address.address}</b></li>
          <li className="main__address-item droplist-preview">(hover to view all information)</li>
          <li className="main__address-item droplist-item">City <b>{address.city}</b></li>
          <li className="main__address-item droplist-item">State: <b>{address.state}</b></li>
          <li className="main__address-item droplist-item">State Code: <b>{address.stateCode}</b></li>
          <li className="main__address-item droplist-item">Postal Code:	<b>{address.postalCode}</b></li>
          <li className="main__address-item droplist-item">Coordinates: <span>LAT: <b>{address.coordinates.lat}</b></span>  <span>LNG: <b>{address.coordinates.lng}</b></span></li>
          <li className="main__address-item droplist-item">Country:	<b>{address.country}</b></li>
        </ul>

        <p className="main__mac-address">Mac Address: <b>{user.macAddress}</b></p>
        <p className="main__university">University: <b>{user.university}</b></p>

        <ul className="main__bank-list droplist">
          <li className="main__address-item droplist-title"><b>BANK</b></li>
          <li className="main__address-item droplist-preview">(hover to view all information)</li>
          <li className="main__bank-item droplist-item">Card Type: <b>{bank.cardType}</b></li>
          <li className="main__bank-item droplist-item">Currency: <b>{bank.currency}</b></li>
          <li className="main__bank-item droplist-item">Card Number: <b>{bank.cardNumber}</b></li>
          <li className="main__bank-item droplist-item">Card Expire: <b>{bank.cardExpire}</b></li>
          <li className="main__bank-item droplist-item">Iban:	<b>{bank.iban}</b></li>
        </ul>
        <hr/>
        <ul className="main__company-list droplist">
          <li className="main__address-item droplist-title"><b>COMPANY</b></li>
          <li className="main__address-item droplist-preview">(hover to view all information)</li>
          <li className="main__company-item droplist-item">Name:	<b>{company.name}</b></li>
          <li className="main__company-item droplist-item">Department:	<b>{company.department}</b></li>
          <li className="main__company-item droplist-item">Title: <b>{company.title}</b></li>

          <ul className="main__company-address-list droplist-item">
            <li className="main__company-address-item droplist-item">Address <b>{company.address.address}</b></li>
            <li className="main__company-address-item droplist-item">City <b>{company.address.city}</b></li>
            <li className="main__company-address-item droplist-item">State: <b>{company.address.state}</b></li>
            <li className="main__company-address-item droplist-item">State Code: <b>{company.address.stateCode}</b></li>
            <li className="main__company-address-item droplist-item">Postal Code:	<b>{company.address.postalCode}</b></li>
            <li className="main__company-address-item droplist-item">Coordinates: <span>LAT: <b>{company.address.coordinates.lat}</b></span>  <span>LNG: <b>{company.address.coordinates.lng}</b></span></li>
            <li className="main__company-address-item droplist-item">Country:	<b>{company.address.country}</b></li>
          </ul>

        </ul>

        <p>EIN: <b>{user.ein}</b></p>
        <p>SSN: <b>{user.ssn}</b></p>
        <hr/>
        <p>User Agent: <b>{user.userAgent}</b></p>
        <hr/>

        <ul className="main__crypto-list droplist">
          <li className="main__address-item droplist-title">Crypto: <b>{crypto.coin}</b></li>
          <li className="main__address-item droplist-preview">(hover to view all information)</li>
          <li className="main__crypto-list droplist-item">Network: <b>{crypto.network}</b></li>
          <li className="main__crypto-list droplist-item">Wallet: <b>{crypto.wallet}</b></li>
        </ul>

        <p>Role: <b>{user.role}</b></p>
      </div>

      <div className="footer">
        <button onClick={() => {
          userPosts(user)
        }}>
          Check all user post
        </button>
      </div>
    </>
  );
};

export default User;