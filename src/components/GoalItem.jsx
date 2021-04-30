import React, { Component } from 'react';
import { connect } from 'react-redux';
import { completeGoalRef, goalRef } from '../firebase';
import './GoalItem.css'


class GoalItem extends Component
{
    completeGoal()
    {
        //add to complete goals on the database
        //remove this goal from the goals reference
        const { email } = this.props.user;
        const { title, serverKey } = this.props.goal;
        goalRef.child(serverKey).remove();
        completeGoalRef.push({email, title});
        
    }
    render()
    {
        const { email, title } = this.props.goal;
        return(
            <div style={{margin: '10px'}}>
                <h4><srong>{title}</srong></h4>
                <span style={{marginRight: '5px'}}> posted by <em>{email}</em></span>
                <button
                style={{margin: '5px'}}
                className="btn btn-sm btn-primary button-laptop"
                onClick={() => this.completeGoal()}>
                    Complete
                </button>
                <button
                style={{margin: '5px'}}
                className="btn btn-sm btn-primary button-phone"
                onClick={() => this.completeGoal()}>
                    ✔
                </button>
            </div>
        )
    }
}

function mapStateToProps(state)
{
    const {user} = state;
    return {
        user
    }
}
export default connect(mapStateToProps, null)(GoalItem);