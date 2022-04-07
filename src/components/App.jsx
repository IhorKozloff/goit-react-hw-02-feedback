
import React, { Component } from "react";
import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistic } from 'components/Statistics/Statistics';




export class App extends Component {
  state = {
      good: 0,
      neutral: 0,
      bad: 0
  }

 
  incrementResultGood = () => {
      this.setState(oldValue => {
          return {good: oldValue.good + 1}
      })
  }
  incrementResultNeutral = () => {
      this.setState(oldValue => {
          return {neutral: oldValue.neutral + 1}
      })
  }
  incrementResultBad = () => {
      this.setState(oldValue => {
          return {bad: oldValue.bad + 1}
      })
  }

  countTotalFeedback () {
      return this.state.good + this.state.neutral + this.state.bad
  }

  countPositiveFeedbackPercentage() {
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
                onLeaveFeedback={{
                    onGoodBtn: this.incrementResultGood,
                    onNeutralBtn: this.incrementResultNeutral,
                    onBadBtn: this.incrementResultBad,
                }} 
            /> 
        </Section>
            
              
        <Section title="Statistics">
            <Statistic 
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={this.countTotalFeedback()}
                positivePercentage={this.countPositiveFeedbackPercentage()}
            />
        </Section>
            
              
        </>
      )
  }
}