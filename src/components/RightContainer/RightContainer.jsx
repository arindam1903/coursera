import React from 'react';
import './RightContainer.css';

export default function RightContainer(props){
    return(
        <div id='rightContainer-main'>
            <img src={props.url} alt={props.title}/>
            <div id='right-text'>
                <div id='right-header'>{props.header}</div>
                <div id='right-title'>{props.title}</div>
                <div id='right-body'>
{props.body}
                </div>
                
            </div>
            
        </div>
    )
}