import { ResultList, ResultItem, ResultValue } from 'components/Statistics/Statistics.styled';

export const Statistic = ({good, neutral, bad, total, positivePercentage}) => {
return (
    <ResultList className="result-list">
        <ResultItem className="result-item">
            Good:
            <ResultValue className="result-content">{good}</ResultValue>
        </ResultItem>
        <ResultItem className="result-item">
            Neutral:
            <ResultValue className="result-content">{neutral}</ResultValue>
        </ResultItem>
        <ResultItem className="result-item">
            Bad:
            <ResultValue className="result-content">{bad}</ResultValue>
        </ResultItem>
        <ResultItem className="result-item">
            Total:
            <ResultValue className="result-content">{total}</ResultValue>
        </ResultItem>
        <ResultItem className="result-item">
            Positive feedback:
            <ResultValue className="result-content">{positivePercentage}%</ResultValue>
        </ResultItem>
    </ResultList>
)
}

