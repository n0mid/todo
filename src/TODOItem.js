/**
 * Created by dusanov on 14/11/2017.
 */
import React from 'react';

const TODOItem = ({item, remove, change}) =>  {
        return (
            <li className="collection-item">
                <div>
                    <input type="checkbox" checked={ item.done } id={ item.id } onChange={ () => change(item.id) } />
                    <label htmlFor={ item.id } className={ item.done ? 'grey-text line-through' : 'black-text' }>{item.title}</label>

                    <a className="secondary-content pointer" onClick={ () => remove(item.id) }><i className="material-icons red-text">delete</i></a>
                </div>
            </li>);
};

export default TODOItem;