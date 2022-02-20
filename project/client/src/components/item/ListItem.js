import Item from './Item';
import React, { Component, useState, useEffect } from "react";
import './itemStyle.css';

export default function ListItem(props){
    return (
      <>
        <p className = "list-item__title">Danh sách item hiện tại</p>              
          <div id="list" className="container">
            {props.listItems.map(item =>  (
              <Item 
                account = {props.account}
                handCLickPaid = {props.handCLickPaid} 
                item = {item} 
                key={item.index}
                handCLickDelivered = {props.handCLickDelivered}
              />
             ))}
          </div>
      </>
        
    )
}