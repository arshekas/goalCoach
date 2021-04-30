import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firebaseApp } from '../firebase';
import AddGoal from './AddGoal';
import GoalList from './GoalList';
import CompleteGoalList from './CompleteGoalList';
import './App.css'

class App extends Component{
    signOut(){
        firebaseApp.auth().signOut();
    }
    render()
    {
        return(
            <div className="goalCoach" style={{margin: '5px'}}>
                <div>
                    <AddGoal />
                    <hr />
                    <h3>Goals</h3>
                    <GoalList />
                    <hr />
                    <h4>Complete Goals</h4>
                    <CompleteGoalList />
                    <hr />
                </div>
                <div className="signOut">
                    <button 
                    className="btn btn-danger signOut"
                    onClick={()=> this.signOut()}>
                        Sign Out
                    </button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state)
{
    // console.log(this.state);
    return{}
}
export default connect(mapStateToProps, null)(App);