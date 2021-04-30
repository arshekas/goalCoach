import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCompleted } from '../actions';
import { completeGoalRef } from '../firebase';
import './CompleteGoals.css'
class completeGoalList extends Component
{
    componentDidMount()
    {
        completeGoalRef.on('value', snap => {
            let completeGoals = [];
            snap.forEach(completeGoal => {
                const { email, title } = completeGoal.val();
                completeGoals.push({ email, title })
            })
            this.props.setCompleted(completeGoals);
        })
    }
    clearCompleted()
    {
        completeGoalRef.set([]);
    }
    render()
    {
        console.log(this.props.completeGoals);
        return(
            <div>
                {
                    this.props.completeGoals.map((completeGoal, index) =>
                    {
                        const { title,  email } = completeGoal;
                        return(
                            <div style={{marginBottom: '0.5rem'}} key = {index}>
                                <strong>{title}</strong><span> Completed by <em>{email}</em></span>
                            </div>
                        )
                    })
                }
                <button
                className="btn btn-primary"
                onClick={() => this.clearCompleted()}
                style={{margin:'5px'}}>
                    Clear All
                </button>
            </div>
        )
    }
}

function mapStateToProps(state)
{
    const { completeGoals } = state;
    return{
        completeGoals
    }
}
 export default connect(mapStateToProps, { setCompleted })(completeGoalList);