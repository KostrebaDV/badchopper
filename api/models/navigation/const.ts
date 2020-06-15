export default [
    {
        label: 'Филиалы',
        icon: 'department',
        route: '/adminPanel/departments/list',
        items: [],
        hasRoute: true
    },
    {
        label: 'Сотрудники',
        route: '/adminPanel/staff/',
        icon: 'employee',
        hasRoute: false,
        items: [
            {
                label: 'Мастера',
                route: '/adminPanel/staff/barbers/',
                id: 1,
                hasRoute: true,
                items: []
            },
            {
                label: 'Менеджеры',
                route: '/adminPanel/staff/managers/',
                id: 2,
                hasRoute: true,
                items: []
            }
        ]
    },
    {
        label: 'Услуги',
        route: '/adminPanel/assistance',
        icon: 'assistance',
        hasRoute: true,
        items: []
    },
    {
        label: 'Отзывы',
        route: '/adminPanel/feedbacks',
        icon: 'feedbacks',
        hasRoute: true,
        items: []
    },
    {
        label: 'Медиа',
        route: '/adminPanel/media',
        icon: 'fileImageOutline',
        hasRoute: true,
        items: []
    }
]

