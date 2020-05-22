import {getAllDepartmentsModel} from '../../models/departments/departments';
import navigationModel from '../../models/navigation/const';
import normalizeNavigationData from '../../utils/navigation/normalizeNavigationData';

export const navigationListService = (client) => {
    return getAllDepartmentsModel(client)
        .then(data => {
            return normalizeNavigationData(navigationModel, data);
        });
};
