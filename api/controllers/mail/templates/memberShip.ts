import {requestMemberShipMailType} from '../../../types/mailTypes';

export default ({ name, phone, position }: requestMemberShipMailType) => {
    return (
        `
            <p>имя: ${name}</p>
            <p>телефон: ${phone}</p>
            <p>должность: ${position}</p>
        `
    );
}
