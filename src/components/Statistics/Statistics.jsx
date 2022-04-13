import { ResultList, ResultItem, ResultValue } from 'components/Statistics/Statistics.styled';

export const Statistic = ({data, total, positivePercentage}) => {
return (
    <ResultList className="result-list">
           
        {
            Object.keys(data).map(item => {
                
                return (
                    <ResultItem key={item} className="result-item">
                        {item}:
                        <ResultValue className="result-content">{data[item]}</ResultValue>
                    </ResultItem>
                )
            })
        }

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

