import React, { Component } from "react";
import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistic } from 'components/Statistics/Statistics';
import { Notification } from "components/Notification/Notification";




export class App extends Component {
  state = {
      good: 0,
      neutral: 0,
      bad: 0
  }

 
    changeStatesValue = (valueName) => {
        
        this.setState(oldValue => {
            
            return {[valueName]: oldValue[valueName] + 1}
        })
    }
    countTotalFeedback () {
        return this.state.good + this.state.neutral + this.state.bad
    }

    countPositiveFeedbackPercentage () {
        const percentResult = Math.round(this.state.good * 100 / this.countTotalFeedback());
        return isNaN(percentResult) ? 0 : percentResult;  
    }

  
    render() {
      const btnNames = Object.keys(this.state);
    
      return (
        <>
        <Section title="Please leave feedback">
            <FeedbackOptions 
                options = {btnNames}
                onLeaveFeedback={this.changeStatesValue} 
            /> 
        </Section>
            
              
        <Section title="Statistics">



            {this.countTotalFeedback() === 0 
                ?   <Notification message="There is no feedback"/> 
                :   <Statistic 
                        data={this.state}
                        total={this.countTotalFeedback()}
                        positivePercentage={this.countPositiveFeedbackPercentage()}
                    />
            }
            
        </Section>
            
              
        </>
      )
  }
}