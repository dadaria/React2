import React from 'react';
import { Link } from 'react-router-dom';

export default class Profile extends React.Component {
   render() {
       return (
           <div>
               <h1>Твой профиль</h1>
               <Link to='/'>Назад</Link>
           </div>
       )
   }
}