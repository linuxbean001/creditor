export default {
    items: [
        {
            id: 'navigation',
            title: 'Navigation',
            type: 'group',
            icon: 'icon-navigation',
            children: [

                {
                    id: 'DashBoard',
                    title: 'DashBoard',
                    type: 'item',
                    url: '/dashboard',
                    icon: 'feather icon-home',
                    breadcrumbs: false
                },

                {
                    id: '/AddOrder',
                    title: 'Order',
                    type: 'collapse',
                    icon: 'feather icon-codepen',

                    children: [
                        {
                            id: 'AddOrder',
                            title: 'Add Order',
                            type: 'item',
                            url: '/Order/Add',
                            breadcrumbs: false
                        },
                        {
                            id: 'ListOrder',
                            title: 'List Order',
                            type: 'item',
                            url: '/Order/List',
                            breadcrumbs: false
                        }

                    ]
                },

            ]
        },
    ]
}