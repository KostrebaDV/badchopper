export default (navigationModel, departmentsModel) => {
    const departments = departmentsModel.map((item) => {
        return {
            id: item._id,
            label: item.name,
            route: `/adminPanel/departments/department/${item._id}`,
            items: []
        }
    });

    const assignNavigationModel = [...navigationModel];

    assignNavigationModel[0].items = [...departments];

    return assignNavigationModel;
}
