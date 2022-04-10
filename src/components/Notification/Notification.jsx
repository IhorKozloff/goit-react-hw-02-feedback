import { Notify } from 'components/Notification/Notification.styled';


export const Notification = ({message}) => {
    return (
        <Notify className="notify">
            {message}
        </Notify>
    )
};