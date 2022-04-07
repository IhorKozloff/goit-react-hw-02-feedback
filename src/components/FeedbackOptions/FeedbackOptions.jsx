import { BtnList, BtnItem, Btn} from 'components/FeedbackOptions/FeedbackOptions.styled';

export const FeedbackOptions = ({options, onLeaveFeedback}) => {
    const {onGoodBtn, onNeutralBtn, onBadBtn} = onLeaveFeedback;
    
    return (
        <BtnList className="btn-list">
            <BtnItem className="btn-item">
                <Btn  onClick={onGoodBtn} className="btn" type="button">{options[0]}</Btn>
            </BtnItem>

            <BtnItem className="btn-item">
                <Btn  onClick={onNeutralBtn} className="btn" type="button">{options[1]}</Btn> 
            </BtnItem>

            <BtnItem className="btn-item">
                <Btn  onClick={onBadBtn} className="btn" type="button">{options[2]}</Btn>
            </BtnItem>
        </BtnList>
    );
};
