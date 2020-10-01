import {requestFeedbackMailType} from '../../../types/mailTypes';

export default ({ name, email, feedback }: requestFeedbackMailType) => {
    return (
        `
            <p>имя: ${name}</p>
            <p>email: ${email}</p>
            <p>отзыв: ${feedback}</p>
        `
    );
}
