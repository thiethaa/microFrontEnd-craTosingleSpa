import React, { Component } from 'react'
import {Button,Table} from 'react-bootstrap';

export default class TodoList extends Component {
    render() {
        const {id,title,date,time,complete} = this.props.todo

        const style ={
            textDecoration : (complete)? 'line-through':'none',
            color : (complete)? 'rgb(163,132,68)':'gold',
            textAlign: 'center',
            background: 'darkgrey'
        }
        const style2 ={
            color : (complete)? 'gold':'white',
            background : 'rgba(44, 42, 48, 0.9)'
        }

        const checkBtn ={
            background : (complete)? 'grey' :'green',
            border :'none'
        }
        const checkBtn2 ={
            background : (complete)? 'red' :'grey',
            border :'none'
        }

        return (
            <div>
                <Table striped hover variant="dark">
                <tbody>
                    <tr>
                    <td style ={style2}>Title</td> 
                    <td style ={style}>{title}</td>
                    <td style ={style2}>Date</td>
                    <td style ={style}>{date}</td>
                    <td style ={style2}>Time</td>
                    <td style ={style}>{time}</td>
                    <td>
                        <Button style={checkBtn} disabled ={(complete)} type="submit"  variant="success" size="sm" onClick={this.props.completeTodo.bind(this,id)}><i className="fas fa-check-square"></i>Done</Button>
                        <Button style={checkBtn2} disabled ={(!complete)} type="submit" variant="danger" size="sm" onClick={this.props.deleteTodo.bind(this,id)} ><i className="fas fa-trash-alt"></i>Delete</Button>
                    </td>
                    </tr>
                </tbody>
                </Table>
            </div>
        )
    }
}
