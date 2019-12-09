import React from 'react';
import style from './UserIcon.module.css';

const UserIcon = () => {
    return (
        <div className={style.userIcon}>
            <img src='https://www.meme-arsenal.com/memes/55da8b744d5190f8f7835d5581ba2a80.jpg' alt='img' />
            Юзер
        </div>
    );
}

export default UserIcon;