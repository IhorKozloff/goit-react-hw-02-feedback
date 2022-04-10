import { BtnList, BtnItem, Btn} from 'components/FeedbackOptions/FeedbackOptions.styled';

export const FeedbackOptions = ({options, onLeaveFeedback}) => {
    
    return (
        <BtnList className="btn-list">
           
            {options.map(item => {
               
                return (
                    <BtnItem key={item} className="btn-item">
                        <Btn key={item} className="btn" type="button" onClick={() => {
                            onLeaveFeedback(item);
                        }}>{item.replace(item[0], item[0].toUpperCase())}</Btn> 
                    </BtnItem>  
                )
            })}
        </BtnList>
    );
};
