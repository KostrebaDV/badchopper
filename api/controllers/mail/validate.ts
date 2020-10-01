import {isEmptyString, isNullOrUndefined} from '../../../web/src/utils';

export default (req, res, next) => {
    const { body } = req;

    const hasInvalidFields = Object.values(body).some(x => isEmptyString(x) || isNullOrUndefined(x))

    if (hasInvalidFields) {
        return res
            .status(500)
            .send("feel required field(s)");
    }

    next();
}
