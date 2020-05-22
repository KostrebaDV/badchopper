export default {
    user: {
        name: 'Sebastian'
    },
    navigation: [
        {
            label: 'Филиалы',
            route: '',
            icon: 'department',
            items: [
                {
                    label: 'Chopper 1',
                    route: '/adminPanel/departments/department/1',
                    items: []
                },
                {
                    label: 'Chopper 2',
                    route: '/adminPanel/departments/department/2',
                    items: []
                },
                {
                    label: 'Chopper 3',
                    route: '/adminPanel/departments/department/3',
                    items: []
                }
            ]
        },
        {
            label: 'Сотрудники',
            route: '',
            icon: 'employee',
            items: [
                {
                    label: 'Мастера',
                    route: '/adminPanel/employee/barbers/',
                    items: []
                },
                {
                    label: 'Менеджеры',
                    route: '/adminPanel/employee/stuff/',
                    items: []
                }
            ]
        },
        {
            label: 'Услуги',
            route: '/adminPanel/assistance',
            icon: 'assistance',
            items: []
        },
        {
            label: 'Отзывы',
            route: '/adminPanel/feedbacks',
            icon: 'feedbacks',
            items: []
        }

    ]
}
