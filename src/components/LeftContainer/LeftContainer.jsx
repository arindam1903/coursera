import React from 'react';
import './LeftContainer.css';

export default function LeftContainer(props){
    return(
        <div id='leftContainer-main'>
            <div id='left-text'>
                <div id='left-header'>{props.header}</div>
                <div id='left-title'>{props.title}</div>
                <div id='left-body'>
{props.body}
                </div>
                
            </div>
            <img src={props.url} alt={props.title}/>
        </div>
    )
}