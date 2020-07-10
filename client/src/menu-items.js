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
                    id: 'Calendar',
                    title: 'Calendar',
                    type: 'collapse',
                    icon: 'feather icon-clock',
                    children: [
                        {
                            id: 'today',
                            title: 'Today',
                            type: 'item',
                            url: '/Order/Today',
                            breadcrumbs: false
                        },
                        {
                            id: 'week',
                            title: 'This Week',
                            type: 'item',
                            url: '/Order/Week',
                            breadcrumbs: false
                        },
                       
                        {
                            id: 'month',
                            title: 'This Month',
                            type: 'item',
                            url: '/Order/Month',
                            breadcrumbs: false
                        },
                      
                       
                    ]
                },
                {
                    id: '/AddOrder',
                    title: 'Order',
                    type: 'collapse',
                    icon: 'feather icon-codepen',

                    children: [
                        {
                            id: 'ListOrder',
                            title: 'List Order',
                            type: 'item',
                            url: '/Order/ListOrder',
                            breadcrumbs: false
                        }

                    ]
                },
            ]
        },
    ]
}

