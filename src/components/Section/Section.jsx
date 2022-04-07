import { FeedBackSection, Tittle } from 'components/Section/Section.styled';



export const Section = ({title, children}) => {
    return (
        <FeedBackSection>
            <Tittle>{title}</Tittle>
            {children}
        </FeedBackSection>
        
    )
}