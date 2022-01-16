import {useState} from 'react';
import React from "react";

export default function ListItem(props){
    const [step, setStep] = useState(props.item.step);

    function convertStep(step){
        let str = '';
        switch (step){
            case '1': 
                str = 'Paided';
                break;
            case '2': 
                str = 'Delivered'
                break;
            default:
                str = 'Create';
                break;
        }
        return str;
    }

    return (
        <tr>
            <td>{props.item.index}</td>
            <td>{props.item.identifier}</td>
            <td>{props.item.price}</td>
            <td>{props.item.addressItem}</td>
            <td>{props.item.ownerAddress}</td>
            <td>{
                convertStep(step)
            }</td>
            <td>
                {
                    step == '0' ? <button onClick={()=> props.handCLickPaid(props.item)}>Paid</button> 
                    : step == '1' ? <button onClick={()=> props.handCLickDelivered(props.item)} >Deliver</button> :''
                }
            </td>
        </tr>
    )
}