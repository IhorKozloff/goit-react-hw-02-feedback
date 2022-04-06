import React, { Component } from "react";
import { Tittle, BtnList, BtnItem, Btn, ResultList, ResultItem, ResultValue } from 'components/FeedBack/FeedBack.styled';

export class FeedBack extends Component {
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
        return this.state.good * 100 / this.countTotalFeedback();
    }

    
    render() {
        
        return (
            <>
                <Tittle>Please leave feedback</Tittle>

                <BtnList className="btn-list">
                    <BtnItem className="btn-item">
                        <Btn onClick={this.incrementResultGood} className="btn" type="button">Good</Btn>
                    </BtnItem>
                    <BtnItem className="btn-item">
                        <Btn onClick={this.incrementResultNeutral} className="btn" type="button">Neutral</Btn>
                    </BtnItem>
                    <BtnItem className="btn-item">
                        <Btn onClick={this.incrementResultBad} className="btn" type="button">Bad</Btn>
                    </BtnItem>
                </BtnList>

                <Tittle>Statistic</Tittle>

                <ResultList className="result-list">
                    <ResultItem className="result-item">
                        Good:
                        <ResultValue className="result-content">{this.state.good}</ResultValue>
                    </ResultItem>
                    <ResultItem className="result-item">
                        Neutral:
                        <ResultValue className="result-content">{this.state.neutral}</ResultValue>
                    </ResultItem>
                    <ResultItem className="result-item">
                        Bad:
                        <ResultValue className="result-content">{this.state.bad}</ResultValue>
                    </ResultItem>
                    <ResultItem className="result-item">
                        Total:
                        <ResultValue className="result-content">{this.countTotalFeedback()}</ResultValue>
                    </ResultItem>
                    <ResultItem className="result-item">
                        Positive feedback:
                        <ResultValue className="result-content">{this.countPositiveFeedbackPercentage()}</ResultValue>
                        %
                    </ResultItem>
                </ResultList>
            </>
        )
    }
}