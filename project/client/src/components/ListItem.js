import Item from './Item';
import React, { Component, useState, useEffect } from "react";

export default function ListItem(props){

    return (
        <div id = "list">
          <h1>Danh sách Item</h1>
          <table id = "table">
            <thead>
             <tr>
              <th>#</th>
              <th>Name</th>
              <th>Price</th>
              <th>address</th>
              <th>Owner</th>
              <th>state</th>
              <th></th>
             </tr>
            </thead>
            <tbody>
                {props.listItems.map(item =>  (
                  <Item 
                    handCLickPaid = {props.handCLickPaid} 
                    item = {item} key={item.index}
                    handCLickDelivered = {props.handCLickDelivered}
                  />
                ))}
            </tbody>
          </table>
        </div>
    )
}