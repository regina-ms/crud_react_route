import React from 'react'
import { Link } from 'react-router-dom'
import { ButtonProps } from '../types';

export default function Button({ link, handler, children }: ButtonProps) {
    children = children.trim();
    const isDeleteBtn = (title: string) => title === 'Удалить' ? 'button delete-btn' : 'button';
    return (
        <button className={isDeleteBtn(children)} onClick={handler}>
            {link ? <Link to={link}>{children}</Link> : children}
        </button>
    )
}
