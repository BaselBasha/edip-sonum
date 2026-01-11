export const products = [
    {
        id: '1',
        name: 'Milkshakes',
        icon: '/shake-img/milkshake.webp',
        items: [
            {
                id: '1_1',
                name: 'Chocolate Milkshake',
                options: [
                    { size: 'Medium', price: 125 },
                    { size: 'Large', price: 150 },
                ],
                icon: '/shake-img/chocolate-milkshake.jpg',
                tags: [
                    { name: "Chocolate", icon: "🍫", color: "bg-neutral-200 text-neutral-800" },
                    { name: "Milk", icon: "🥛", color: "bg-blue-200 text-blue-800" },
                    { name: "Sweet", icon: "🍭", color: "bg-pink-200 text-pink-800" }
                ],
            },
            {
                id: '1_2',
                name: 'Vanilla Milkshake',
                options: [
                    { size: 'Medium', price: 125 },
                    { size: 'Large', price: 150 },
                ],
                icon: '/shake-img/vanilla-milkshake.jpg',
                tags: [
                    { name: "Vanilla", icon: "🍦", color: "bg-yellow-200 text-yellow-800" },
                    { name: "Milk", icon: "🥛", color: "bg-blue-200 text-blue-800" },
                    { name: "Creamy", icon: "🍨", color: "bg-white-200 text-white-800" }
                ],
            },
            {
                id: '1_3',
                name: 'ميلك شيك فراولة',
                options: [
                    { size: 'Medium', price: 125 },
                    { size: 'Large', price: 150 },
                ],
                icon: '/shake-img/strawberry-milkshake.jpg',
                tags: [
                    { name: "Strawberry", icon: "🍓", color: "bg-red-200 text-red-800" },
                    { name: "Milk", icon: "🥛", color: "bg-blue-200 text-blue-800" },
                    { name: "Sweet", icon: "🍭", color: "bg-pink-200 text-pink-800" }
                ],
            },
            {
                id: '1_4',
                name: 'ميلك شيك لوتس',
                options: [
                    { size: 'Medium', price: 125 },
                    { size: 'Large', price: 150 },
                ],
                icon: '/shake-img/lotus-milkshake.jpg',
                tags: [
                    { name: "Lotus", icon: "🍪", color: "bg-neutral-200 text-neutral-800" },
                    { name: "Milk", icon: "🥛", color: "bg-blue-200 text-blue-800" },
                    { name: "Caramel", icon: "🍮", color: "bg-yellow-200 text-yellow-800" }
                ],
            }
            
        ]
    },
    {
        id: '2',
        name: 'Drinks',
        icon: '/drinks-img/drinks.jpg',
        items: [
            {
                id: '2_1',
                name: 'Orange Juice',
                options: [
                    { size: 'Medium', price: 75 },
                    { size: 'Large', price: 125 }
                ],
                icon: '/drinks-img/orange-juice.jpg',
                tags: [
                    { name: "Orange", icon: "🍊", color: "bg-orange-200 text-orange-800" },
                    { name: "Fresh", icon: "🍃", color: "bg-green-200 text-green-800" },
                    { name: "Vitamin C", icon: "💪", color: "bg-green-200 text-green-800" }
                ]
            },
            {
                id: '2_2',
                name: 'Apple Juice',
                options: [
                    { size: 'Medium', price: 75 },
                    { size: 'Large', price: 125 }
                ],
                icon: '/drinks-img/apple-juice.jpg',
                tags: [
                    { name: "Apple", icon: "🍎", color: "bg-red-200 text-red-800" },
                    { name: "Sweet", icon: "🍬", color: "bg-pink-200 text-pink-800" },
                    { name: "Refreshing", icon: "💧", color: "bg-blue-200 text-blue-800" }
                ]
            },
            {
                id: '2_3',
                name: 'Carrot Juice',
                options: [
                    { size: 'Medium', price: 75 },
                    { size: 'Large', price: 125 }
                ],
                icon: '/drinks-img/carrot-juice.jpg',
                tags: [
                    { name: "Carrot", icon: "🥕", color: "bg-orange-300 text-orange-800" },
                    { name: "Vitamin A", icon: "👀", color: "bg-yellow-200 text-yellow-800" },
                    { name: "Healthy", icon: "🥗", color: "bg-green-200 text-green-800" }
                ]
            },
            {
                id: '2_4',
                name: 'Mango Juice',
                options: [
                    { size: 'Medium', price: 125 },
                    { size: 'Large', price: 150 }
                ],
                icon: '/drinks-img/mango-juice.jpg',
                tags: [
                    { name: "Mango", icon: "🥭", color: "bg-yellow-300 text-yellow-800" },
                    { name: "Tropical", icon: "🏝️", color: "bg-teal-200 text-teal-800" },
                    { name: "Sweet", icon: "🍬", color: "bg-pink-200 text-pink-800" }
                ]
            },
            {
                id: '2_5',
                name: 'Strawberry Juice',
                options: [
                    { size: 'Medium', price: 125 },
                    { size: 'Large', price: 150 }
                ],
                icon: '/drinks-img/strawberry-juice.jpg',
                tags: [
                    { name: "Strawberry", icon: "🍓", color: "bg-red-300 text-red-800" },
                    { name: "Sweet", icon: "🍬", color: "bg-pink-200 text-pink-800" },
                    { name: "Fruity", icon: "🍉", color: "bg-green-200 text-green-800" }
                ]
            },
            {
                id: '2_6',
                name: 'Pineapple Juice',
                options: [
                    { size: 'Medium', price: 125 },
                    { size: 'Large', price: 150 }
                ],
                icon: '/drinks-img/pineapple-juice.jpg',
                tags: [
                    { name: "Pineapple", icon: "🍍", color: "bg-yellow-300 text-yellow-800" },
                    { name: "Tropical", icon: "🏝️", color: "bg-teal-200 text-teal-800" },
                    { name: "Sweet", icon: "🍬", color: "bg-pink-200 text-pink-800" }
                ]
            },
            {
                id: '2_7',
                name: 'Pomegranate Juice',
                options: [
                    { size: 'Medium', price: 75 },
                    { size: 'Large', price: 125 }
                ],
                icon: '/drinks-img/pomegranate-juice.jpg',
                tags: [
                    { name: "Pomegranate", icon: "🍷", color: "bg-red-400 text-red-800" },
                    { name: "Healthy", icon: "🌿", color: "bg-green-200 text-green-800" },
                    { name: "Refreshing", icon: "💧", color: "bg-blue-200 text-blue-800" }
                ]
            },
            {
                id: '2_8',
                name: 'Kiwi Juice',
                options: [
                    { size: 'Medium', price: 125 },
                    { size: 'Large', price: 150 }
                ],
                icon: '/drinks-img/kiwi-juice.webp',
                tags: [
                    { name: "Kiwi", icon: "🥝", color: "bg-green-300 text-green-800" },
                    { name: "Exotic", icon: "🌿", color: "bg-teal-200 text-teal-800" },
                    { name: "Vitamin C", icon: "💪", color: "bg-green-200 text-green-800" }
                ]
            },
        ]
    },
    {
        id: '3',
        name: 'Cocktails',
        icon: "/all/Unknown-10.jpeg",
        items: [
            {
                id: '3_1',
                name: 'Fruits Cocktail',
                options: [
                    { size: 'Medium', price: 125 },
                    { size: 'Large', price: 150 }
                ],
                icon: "/cocktels/Unknown.jpeg",
                tags: [
                    { name: 'Fruits', color: 'bg-green-200', icon: '🍇' },
                    { name: 'Mixed', color: 'bg-yellow-200', icon: '🍓' },
                    { name: 'Vegan', color: 'bg-teal-200', icon: '🌿' }
                ]
            },
            {
                id: '3_2',
                name: 'Banana & Milk Cocktail',
                options: [
                    { size: 'Medium', price: 100 },
                    { size: 'Large', price: 125 }
                ],
                icon: "/cocktels/muzlu-sut.jpg.webp",
                tags: [
                    { name: 'Banana', color: 'bg-yellow-200', icon: '🍌' },
                    { name: 'Milk', color: 'bg-white', icon: '🥛' },
                    { name: 'Creamy', color: 'bg-blue-200', icon: '🍦' }
                ]
            },
            {
                id: '3_3',
                name: 'Banana & Milk & Chocolate Cocktail',
                options: [
                    { size: 'Medium', price: 100 },
                    { size: 'Large', price: 125 }
                ],
                icon: "/shake-img/chocolate-banana-smoothie.jpeg",
                tags: [
                    { name: 'Banana', color: 'bg-yellow-200', icon: '🍌' },
                    { name: 'Milk', color: 'bg-white', icon: '🥛' },
                    { name: 'Chocolate', color: 'bg-brown-200', icon: '🍫' }
                ]
            },
            {
                id: '3_4',
                name: 'Banana & Milk & Strawberry Cocktail',
                options: [
                    { size: 'Medium', price: 100 },
                    { size: 'Large', price: 125 }
                ],
                icon: "/cocktels/strawberry-banana-milkshake-truskawkowo-bananowy-everyday-delicious-1-1171x1800.jpeg",
                tags: [
                    { name: 'Banana', color: 'bg-yellow-200', icon: '🍌' },
                    { name: 'Milk', color: 'bg-white', icon: '🥛' },
                    { name: 'Strawberry', color: 'bg-pink-200', icon: '🍓' }
                ]
            },
            {
                id: '3_5',
                name: 'Mango - Milk - Strawberry',
                options: [
                    { size: 'Medium', price: 135 },
                    { size: 'Large', price: 165 }
                ],
                icon: "/cocktels/2018_5_25_18_27_3_397.jpeg",
                tags: [
                  { name: 'Mango', color: 'bg-yellow-200', icon: '🥭' },       
                  { name: 'Milk', color: 'bg-white', icon: '🥛' },             
                  { name: 'Strawberry', color: 'bg-red-300', icon: '🍓' }   
                ]
            },
            {
                id: '3_6',
                name: 'Banana & Milk & Avocado Cocktail',
                options: [
                    { size: 'Medium', price: 125 },
                    { size: 'Large', price: 150 }
                ],
                icon: "/cocktels/9dbeecbfcb5d93ee3d5d607bc9fa85cd_640x640.jpeg",
                tags: [
                    { name: 'Banana', color: 'bg-yellow-200', icon: '🍌' },
                    { name: 'Milk', color: 'bg-white', icon: '🥛' },
                    { name: 'Avocado', color: 'bg-green-200', icon: '🥑' }
                ]
            }
        ]
    },
    {
        "id": "4",
        "name": "Special Cocktails",
        "icon": "/all/Unknown-4.jpeg",
        "items": [
            {
                "id": "4_1",
                "name": "Fruits & Cream & Nut Cocktail",
                "options": [
                    { "size": "Medium", "price": 200 },
                    { "size": "Large", "price": 250 }
                ],
                "icon": "/all/Unknown-7.jpeg",
                "tags": [
                    { "name": "Fruits", "color": "bg-green-200", "icon": "🍇" },
                    { "name": "Cream", "color": "bg-white", "icon": "🍦" },
                    { "name": "Nuts", "color": "bg-brown-200", "icon": "🌰" }
                ]
            },
            {
                "id": "4_2",
                "name": "Mango & Cream & Nut Cocktail",
                "options": [
                    { "size": "Medium", "price": 250 },
                    { "size": "Large", "price": 300 }
                ],
                "icon": "/all/Unknown-4.jpeg",
                "tags": [
                    { "name": "Mango", "color": "bg-yellow-200", "icon": "🥭" },
                    { "name": "Cream", "color": "bg-white", "icon": "🍦" },
                    { "name": "Nuts", "color": "bg-brown-200", "icon": "🌰" }
                ]
            },
            {
                "id": "4_3",
                "name": "Avocado & Cream & Nut Cocktail",
                "options": [
                    { "size": "Medium", "price": 250 },
                    { "size": "Large", "price": 300 }
                ],
                "icon": "/all/Unknown-4.jpeg",
                "tags": [
                    { "name": "Avocado", "color": "bg-green-200", "icon": "🥑" },
                    { "name": "Cream", "color": "bg-white", "icon": "🍦" },
                    { "name": "Nuts", "color": "bg-brown-200", "icon": "🌰" }
                ]
            },
            {
                "id": "4_4",
                "name": "Banana & Milk & Cream & Nut Cocktail",
                "options": [
                    { "size": "Medium", "price": 200 },
                    { "size": "Large", "price": 250 }
                ],
                "icon": "/all/Unknown-4.jpeg",
                "tags": [
                    { "name": "Banana", "color": "bg-yellow-200", "icon": "🍌" },
                    { "name": "Milk", "color": "bg-white", "icon": "🥛" },
                    { "name": "Cream", "color": "bg-white", "icon": "🍦" }
                ]
            },
            {
                "id": "4_5",
                "name": "Banana & Milk & Strawberry & Cream & Nut Cocktail",
                "options": [
                    { "size": "Medium", "price": 225 },
                    { "size": "Large", "price": 275 }
                ],
                "icon": "/all/Unknown-4.jpeg",
                "tags": [
                    { "name": "Banana", "color": "bg-yellow-200", "icon": "🍌" },
                    { "name": "Milk", "color": "bg-white", "icon": "🥛" },
                    { "name": "Strawberry", "color": "bg-pink-200", "icon": "🍓" }
                ]
            },
            {
                "id": "4_6",
                "name": "Banana & Milk & Chocolate & Cream & Nut Cocktail",
                "options": [
                    { "size": "Medium", "price": 225 },
                    { "size": "Large", "price": 275 }
                ],
                "icon": "/all/Unknown-4.jpeg",
                "tags": [
                    { "name": "Banana", "color": "bg-yellow-200", "icon": "🍌" },
                    { "name": "Milk", "color": "bg-white", "icon": "🥛" },
                    { "name": "Chocolate", "color": "bg-brown-200", "icon": "🍫" }
                ]
            }
        ]
    },
    {
        id: '5',
        name: 'Waffle & Cake',
        icon: '/all/Unknown-3.jpeg',
        items: [
            {
                id: '5_1',
                name: 'Waffle',
                icon: '/all/Unknown-18.jpeg',
                items: [
                    {
                        id: '5_1_1',
                        name: 'Chocolate Waffle',
                        options: [
                            { size: 'Normal', price: 250 },
                        ],
                        icon: 'https://via.placeholder.com/128',
                        tags: [
                            { name: 'Chocolate', color: 'bg-neutral-200', icon: '🍫' },
                            { name: 'Waffle', color: 'bg-yellow-200', icon: '🧇' },
                            { name: 'Sweet', color: 'bg-pink-200', icon: '🍭' }
                        ]
                    },
                    {
                        id: '5_1_2',
                        name: 'White Chocolate Waffle',
                        options: [
                            { size: 'Normal', price: 250 },
                        ],
                        icon: 'https://via.placeholder.com/128',
                        tags: [
                            { name: 'White Choc.', color: 'bg-white', icon: '🍫' },
                            { name: 'Waffle', color: 'bg-yellow-200', icon: '🧇' },
                            { name: 'Sweet', color: 'bg-pink-200', icon: '🍭' }
                        ]
                    },
                    {
                        id: '5_1_3',
                        name: 'Fruits Waffle',
                        options: [
                            { size: 'Normal', price: 300 },
                        ],
                        icon: '/all/Unknown-18.jpeg',
                        tags: [
                            { name: 'Fruits', color: 'bg-green-200', icon: '🍓' },
                            { name: 'Waffle', color: 'bg-yellow-200', icon: '🧇' },
                            { name: 'Sweet', color: 'bg-pink-200', icon: '🍭' }
                        ]
                    },
                    {
                        id: '5_1_4',
                        name: 'Banana Waffle',
                        options: [
                            { size: 'Normal', price: 275 },
                        ],
                        icon: 'https://via.placeholder.com/128',
                        tags: [
                            { name: 'Banana', color: 'bg-yellow-200', icon: '🍌' },
                            { name: 'Waffle', color: 'bg-yellow-200', icon: '🧇' },
                            { name: 'Sweet', color: 'bg-pink-200', icon: '🍭' }
                        ]
                    },
                    {
                        id: '5_1_5',
                        name: 'Banana + Cream Waffle',
                        options: [
                            { size: 'Normal', price: 325 },
                        ],
                        icon: 'https://via.placeholder.com/128',
                        tags: [
                            { name: 'Banana', color: 'bg-yellow-200', icon: '🍌' },
                            { name: 'Cream', color: 'bg-white', icon: '🍦' },
                            { name: 'Waffle', color: 'bg-yellow-200', icon: '🧇' }
                        ]
                    },
                    {
                        id: '5_1_6',
                        name: 'Strawberry Waffle',
                        options: [
                            { size: 'Normal', price: 275 },
                        ],
                        icon: '/all/Unknown-3.jpeg',
                        tags: [
                            { name: 'Strawberry', color: 'bg-pink-200', icon: '🍓' },
                            { name: 'Waffle', color: 'bg-yellow-200', icon: '🧇' },
                            { name: 'Sweet', color: 'bg-pink-200', icon: '🍭' }
                        ]
                    },
                    {
                        id: '5_1_7',
                        name: 'لوتس',
                        options: [
                            { size: 'Normal', price: 300 },
                        ],
                        icon: 'https://via.placeholder.com/128',
                        tags: [
                            { name: 'Lotus', color: 'bg-neutral-200', icon: '🍪' },
                            { name: 'Waffle', color: 'bg-yellow-200', icon: '🧇' },
                            { name: 'Sweet', color: 'bg-pink-200', icon: '🍭' }
                        ]
                    },
                    {
                      id: '5_1_7',
                      name: 'كندر',
                      options: [
                          { size: 'Normal', price: 300 },
                      ],
                      icon: 'https://via.placeholder.com/128',
                      tags: [
                          { name: 'Lotus', color: 'bg-neutral-200', icon: '🍪' },
                          { name: 'Waffle', color: 'bg-yellow-200', icon: '🧇' },
                          { name: 'Sweet', color: 'bg-pink-200', icon: '🍭' }
                      ]
                  },
                  {
                    id: '5_1_7',
                    name: 'اوريوا',
                    options: [
                        { size: 'Normal', price: 300 },
                    ],
                    icon: 'https://via.placeholder.com/128',
                    tags: [
                        { name: 'Lotus', color: 'bg-neutral-200', icon: '🍪' },
                        { name: 'Waffle', color: 'bg-yellow-200', icon: '🧇' },
                        { name: 'Sweet', color: 'bg-pink-200', icon: '🍭' }
                    ]
                },
                {
                  id: '5_1_7',
                  name: 'كيت كات',
                  options: [
                      { size: 'Normal', price: 300 },
                  ],
                  icon: 'https://via.placeholder.com/128',
                  tags: [
                      { name: 'Lotus', color: 'bg-neutral-200', icon: '🍪' },
                      { name: 'Waffle', color: 'bg-yellow-200', icon: '🧇' },
                      { name: 'Sweet', color: 'bg-pink-200', icon: '🍭' }
                  ]
              },
              {
                id: '5_1_7',
                name: ' دبي',
                options: [
                    { size: 'Normal', price: 300 },
                ],
                icon: 'https://via.placeholder.com/128',
                tags: [
                    { name: 'Lotus', color: 'bg-neutral-200', icon: '🍪' },
                    { name: 'Waffle', color: 'bg-yellow-200', icon: '🧇' },
                    { name: 'Sweet', color: 'bg-pink-200', icon: '🍭' }
                ]
            }
                ],
            },
            {
                id: '5_2',
                name: 'Waffle Steak',
                icon: '/all/Unknown-16.jpeg',
                items: [
                    {
                        id: '5_2_1',
                        name: 'Chocolate Waffle Steak',
                        options: [
                            { size: 'Normal', price: 250 },
                        ],
                        icon: 'https://via.placeholder.com/128',
                        tags: [
                            { name: 'Chocolate', color: 'bg-neutral-200', icon: '🍫' },
                            { name: 'Waffle', color: 'bg-yellow-200', icon: '🧇' },
                            { name: 'Sweet', color: 'bg-pink-200', icon: '🍭' }
                        ]
                    },
                    {
                        id: '5_2_2',
                        name: 'White Chocolate Waffle Steak',
                        options: [
                            { size: 'Normal', price: 250 },
                        ],
                        icon: 'https://via.placeholder.com/128',
                        tags: [
                            { name: 'White Chocolate', color: 'bg-white', icon: '🍫' },
                            { name: 'Waffle', color: 'bg-yellow-200', icon: '🧇' },
                            { name: 'Sweet', color: 'bg-pink-200', icon: '🍭' }
                        ]
                    },
                    {
                        id: '5_2_3',
                        name: 'Fruits Waffle Steak',
                        options: [
                            { size: 'Normal', price: 300 },
                        ],
                        icon: '/all/Unknown-16.jpeg',
                        tags: [
                            { name: 'Fruits', color: 'bg-green-200', icon: '🍓' },
                            { name: 'Waffle', color: 'bg-yellow-200', icon: '🧇' },
                            { name: 'Sweet', color: 'bg-pink-200', icon: '🍭' }
                        ]
                    },
                    {
                        id: '5_2_4',
                        name: 'Banana Waffle Steak',
                        options: [
                            { size: 'Normal', price: 275 },
                        ],
                        icon: 'https://via.placeholder.com/128',
                        tags: [
                            { name: 'Banana', color: 'bg-yellow-200', icon: '🍌' },
                            { name: 'Waffle', color: 'bg-yellow-200', icon: '🧇' },
                            { name: 'Sweet', color: 'bg-pink-200', icon: '🍭' }
                        ]
                    },
                    {
                        id: '5_2_5',
                        name: 'Banana + Cream Waffle Steak',
                        options: [
                            { size: 'Normal', price: 325 },
                        ],
                        icon: 'https://via.placeholder.com/128',
                        tags: [
                            { name: 'Banana', color: 'bg-yellow-200', icon: '🍌' },
                            { name: 'Cream', color: 'bg-white', icon: '🍦' },
                            { name: 'Sweet', color: 'bg-pink-200', icon: '🍭' }
                        ]
                    },
                    {
                        id: '5_2_6',
                        name: 'Strawberry Waffle Steak',
                        options: [
                            { size: 'Normal', price: 275 },
                        ],
                        icon: 'https://via.placeholder.com/128',
                        tags: [
                            { name: 'Strawberry', color: 'bg-pink-200', icon: '🍓' },
                            { name: 'Waffle', color: 'bg-yellow-200', icon: '🧇' },
                            { name: 'Sweet', color: 'bg-pink-200', icon: '🍭' }
                        ]
                    },
                    {
                      id: '5_1_7',
                      name: 'لوتس',
                      options: [
                          { size: 'Normal', price: 300 },
                      ],
                      icon: 'https://via.placeholder.com/128',
                      tags: [
                          { name: 'Lotus', color: 'bg-neutral-200', icon: '🍪' },
                          { name: 'Waffle', color: 'bg-yellow-200', icon: '🧇' },
                          { name: 'Sweet', color: 'bg-pink-200', icon: '🍭' }
                      ]
                  },
                  {
                    id: '5_1_7',
                    name: 'كندر',
                    options: [
                        { size: 'Normal', price: 300 },
                    ],
                    icon: 'https://via.placeholder.com/128',
                    tags: [
                        { name: 'Lotus', color: 'bg-neutral-200', icon: '🍪' },
                        { name: 'Waffle', color: 'bg-yellow-200', icon: '🧇' },
                        { name: 'Sweet', color: 'bg-pink-200', icon: '🍭' }
                    ]
                },
                {
                  id: '5_1_7',
                  name: 'اوريوا',
                  options: [
                      { size: 'Normal', price: 300 },
                  ],
                  icon: 'https://via.placeholder.com/128',
                  tags: [
                      { name: 'Lotus', color: 'bg-neutral-200', icon: '🍪' },
                      { name: 'Waffle', color: 'bg-yellow-200', icon: '🧇' },
                      { name: 'Sweet', color: 'bg-pink-200', icon: '🍭' }
                  ]
              },
              {
                id: '5_1_7',
                name: 'كيت كات',
                options: [
                    { size: 'Normal', price: 300 },
                ],
                icon: 'https://via.placeholder.com/128',
                tags: [
                    { name: 'Lotus', color: 'bg-neutral-200', icon: '🍪' },
                    { name: 'Waffle', color: 'bg-yellow-200', icon: '🧇' },
                    { name: 'Sweet', color: 'bg-pink-200', icon: '🍭' }
                ]
            },
            {
              id: '5_1_7',
              name: ' دبي',
              options: [
                  { size: 'Normal', price: 300 },
              ],
              icon: 'https://via.placeholder.com/128',
              tags: [
                  { name: 'Lotus', color: 'bg-neutral-200', icon: '🍪' },
                  { name: 'Waffle', color: 'bg-yellow-200', icon: '🧇' },
                  { name: 'Sweet', color: 'bg-pink-200', icon: '🍭' }
              ]
          }
                ],
            },
            {
                id: '5_3',
                name: 'Pancakes',
                icon: '/all/Unknown-9.jpeg',
                items: [
                    {
                        id: '5_3_1',
                        name: 'Chocolate Pancakes',
                        options: [
                            { size: 'Normal', price: 250 },
                        ],
                        icon: '/all/Unknown-9.jpeg',
                        tags: [
                            { name: 'Chocolate', color: 'bg-neutral-200', icon: '🍫' },
                            { name: 'Pancakes', color: 'bg-yellow-100', icon: '🥞' },
                            { name: 'Sweet', color: 'bg-pink-200', icon: '🍭' }
                        ]
                    },
                    {
                        id: '5_3_2',
                        name: 'White Chocolate Pancakes',
                        options: [
                            { size: 'Normal', price: 250 },
                        ],
                        icon: '/all/Unknown-9.jpeg',
                        tags: [
                            { name: 'White Chocolate', color: 'bg-white', icon: '🍫' },
                            { name: 'Pancakes', color: 'bg-yellow-100', icon: '🥞' },
                            { name: 'Sweet', color: 'bg-pink-200', icon: '🍭' }
                        ]
                    },
                    {
                        id: '5_3_3',
                        name: 'Fruits Pancakes',
                        options: [
                            { size: 'Normal', price: 300 },
                        ],
                        icon: '/all/Unknown-9.jpeg',
                        tags: [
                            { name: 'Fruits', color: 'bg-green-200', icon: '🍓' },
                            { name: 'Pancakes', color: 'bg-yellow-100', icon: '🥞' },
                            { name: 'Sweet', color: 'bg-pink-200', icon: '🍭' }
                        ]
                    },
                    {
                        id: '5_3_4',
                        name: 'Banana Pancakes',
                        options: [
                            { size: 'Normal', price: 275 },
                        ],
                        icon: '/all/Unknown-9.jpeg',
                        tags: [
                            { name: 'Banana', color: 'bg-yellow-200', icon: '🍌' },
                            { name: 'Pancakes', color: 'bg-yellow-100', icon: '🥞' },
                            { name: 'Sweet', color: 'bg-pink-200', icon: '🍭' }
                        ]
                    },
                    {
                        id: '5_3_5',
                        name: 'Banana + Cream Pancakes',
                        options: [
                            { size: 'Normal', price: 325 },
                        ],
                        icon: '/all/Unknown-9.jpeg',
                        tags: [
                            { name: 'Banana', color: 'bg-yellow-200', icon: '🍌' },
                            { name: 'Cream', color: 'bg-white', icon: '🍦' },
                            { name: 'Pancakes', color: 'bg-yellow-100', icon: '🥞' }
                        ]
                    },
                    {
                        id: '5_3_6',
                        name: 'Strawberry Pancakes',
                        options: [
                            { size: 'Normal', price: 275 },
                        ],
                        icon: '/all/Unknown-9.jpeg',
                        tags: [
                            { name: 'Strawberry', color: 'bg-pink-200', icon: '🍓' },
                            { name: 'Pancakes', color: 'bg-yellow-100', icon: '🥞' },
                            { name: 'Sweet', color: 'bg-pink-200', icon: '🍭' }
                        ]
                    },
                    {
                        id: '5_3_7',
                        name: 'Lotus Pancakes',
                        options: [
                            { size: 'Normal', price: 300 },
                        ],
                        icon: '/all/Unknown-9.jpeg',
                        tags: [
                            { name: 'Lotus', color: 'bg-neutral-200', icon: '🍪' },
                            { name: 'Pancakes', color: 'bg-yellow-100', icon: '🥞' },
                            { name: 'Sweet', color: 'bg-pink-200', icon: '🍭' }
                        ]
                    },
                    {
                      id: '5_1_7',
                      name: 'لوتس',
                      options: [
                          { size: 'Normal', price: 300 },
                      ],
                      icon: 'https://via.placeholder.com/128',
                      tags: [
                          { name: 'Lotus', color: 'bg-neutral-200', icon: '🍪' },
                          { name: 'Waffle', color: 'bg-yellow-200', icon: '🧇' },
                          { name: 'Sweet', color: 'bg-pink-200', icon: '🍭' }
                      ]
                  },
                  {
                    id: '5_1_7',
                    name: 'كندر',
                    options: [
                        { size: 'Normal', price: 300 },
                    ],
                    icon: 'https://via.placeholder.com/128',
                    tags: [
                        { name: 'Lotus', color: 'bg-neutral-200', icon: '🍪' },
                        { name: 'Waffle', color: 'bg-yellow-200', icon: '🧇' },
                        { name: 'Sweet', color: 'bg-pink-200', icon: '🍭' }
                    ]
                },
                {
                  id: '5_1_7',
                  name: 'اوريوا',
                  options: [
                      { size: 'Normal', price: 300 },
                  ],
                  icon: 'https://via.placeholder.com/128',
                  tags: [
                      { name: 'Lotus', color: 'bg-neutral-200', icon: '🍪' },
                      { name: 'Waffle', color: 'bg-yellow-200', icon: '🧇' },
                      { name: 'Sweet', color: 'bg-pink-200', icon: '🍭' }
                  ]
              },
              {
                id: '5_1_7',
                name: 'كيت كات',
                options: [
                    { size: 'Normal', price: 300 },
                ],
                icon: 'https://via.placeholder.com/128',
                tags: [
                    { name: 'Lotus', color: 'bg-neutral-200', icon: '🍪' },
                    { name: 'Waffle', color: 'bg-yellow-200', icon: '🧇' },
                    { name: 'Sweet', color: 'bg-pink-200', icon: '🍭' }
                ]
            },
            {
              id: '5_1_7',
              name: ' دبي',
              options: [
                  { size: 'Normal', price: 300 },
              ],
              icon: 'https://via.placeholder.com/128',
              tags: [
                  { name: 'Lotus', color: 'bg-neutral-200', icon: '🍪' },
                  { name: 'Waffle', color: 'bg-yellow-200', icon: '🧇' },
                  { name: 'Sweet', color: 'bg-pink-200', icon: '🍭' }
              ]
          }
                ],
            },
            {
                id: '5_4',
                name: 'Bubble Waffle',
                icon: '/all/Unknown.jpeg',
                items: [
                    {
                        id: '5_4_1',
                        name: 'Chocolate Waffle Bubble',
                        options: [
                            { size: 'Normal', price: 250 },
                        ],
                        icon: 'https://via.placeholder.com/128',
                        tags: [
                            { name: 'Chocolate', color: 'bg-neutral-200', icon: '🍫' },
                            { name: 'Waffle Bubble', color: 'bg-yellow-100', icon: '🧇' },
                            { name: 'Sweet', color: 'bg-pink-200', icon: '🍭' }
                        ]
                    },
                    {
                        id: '5_4_2',
                        name: 'White Chocolate Waffle Bubble',
                        options: [
                            { size: 'Normal', price: 250 },
                        ],
                        icon: 'https://via.placeholder.com/128',
                        tags: [
                            { name: 'White Chocolate', color: 'bg-white', icon: '🍫' },
                            { name: 'Waffle Bubble', color: 'bg-yellow-100', icon: '🧇' },
                            { name: 'Sweet', color: 'bg-pink-200', icon: '🍭' }
                        ]
                    },
                    {
                        id: '5_4_3',
                        name: 'Fruits Waffle Bubble',
                        options: [
                            { size: 'Normal', price: 300 },
                        ],
                        icon: '/all/Unknown.jpeg',
                        tags: [
                            { name: 'Fruits', color: 'bg-green-200', icon: '🍓' },
                            { name: 'Waffle Bubble', color: 'bg-yellow-100', icon: '🧇' },
                            { name: 'Sweet', color: 'bg-pink-200', icon: '🍭' }
                        ]
                    },
                    {
                        id: '5_4_4',
                        name: 'Banana Waffle Bubble',
                        options: [
                            { size: 'Normal', price: 275 },
                        ],
                        icon: 'https://via.placeholder.com/128',
                        tags: [
                            { name: 'Banana', color: 'bg-yellow-200', icon: '🍌' },
                            { name: 'Waffle Bubble', color: 'bg-yellow-100', icon: '🧇' },
                            { name: 'Sweet', color: 'bg-pink-200', icon: '🍭' }
                        ]
                    },
                    {
                        id: '5_4_5',
                        name: 'Banana + Cream Waffle Bubble',
                        options: [
                            { size: 'Normal', price: 325 },
                        ],
                        icon: 'https://via.placeholder.com/128',
                        tags: [
                            { name: 'Banana', color: 'bg-yellow-200', icon: '🍌' },
                            { name: 'Cream', color: 'bg-white', icon: '🍦' },
                            { name: 'Waffle Bubble', color: 'bg-yellow-100', icon: '🧇' }
                        ]
                    },
                    {
                        id: '5_4_6',
                        name: 'Strawberry Waffle Bubble',
                        options: [
                            { size: 'Normal', price: 275 },
                        ],
                        icon: 'https://via.placeholder.com/128',
                        tags: [
                            { name: 'Strawberry', color: 'bg-pink-200', icon: '🍓' },
                            { name: 'Waffle Bubble', color: 'bg-yellow-100', icon: '🧇' },
                            { name: 'Sweet', color: 'bg-pink-200', icon: '🍭' }
                        ]
                    },
                    
                    {
                      id: '5_1_7',
                      name: 'لوتس',
                      options: [
                          { size: 'Normal', price: 300 },
                      ],
                      icon: 'https://via.placeholder.com/128',
                      tags: [
                          { name: 'Lotus', color: 'bg-neutral-200', icon: '🍪' },
                          { name: 'Waffle', color: 'bg-yellow-200', icon: '🧇' },
                          { name: 'Sweet', color: 'bg-pink-200', icon: '🍭' }
                      ]
                  },
                  {
                    id: '5_1_7',
                    name: 'كندر',
                    options: [
                        { size: 'Normal', price: 300 },
                    ],
                    icon: 'https://via.placeholder.com/128',
                    tags: [
                        { name: 'Lotus', color: 'bg-neutral-200', icon: '🍪' },
                        { name: 'Waffle', color: 'bg-yellow-200', icon: '🧇' },
                        { name: 'Sweet', color: 'bg-pink-200', icon: '🍭' }
                    ]
                },
                {
                  id: '5_1_7',
                  name: 'اوريوا',
                  options: [
                      { size: 'Normal', price: 300 },
                  ],
                  icon: 'https://via.placeholder.com/128',
                  tags: [
                      { name: 'Lotus', color: 'bg-neutral-200', icon: '🍪' },
                      { name: 'Waffle', color: 'bg-yellow-200', icon: '🧇' },
                      { name: 'Sweet', color: 'bg-pink-200', icon: '🍭' }
                  ]
              },
              {
                id: '5_1_7',
                name: 'كيت كات',
                options: [
                    { size: 'Normal', price: 300 },
                ],
                icon: 'https://via.placeholder.com/128',
                tags: [
                    { name: 'Lotus', color: 'bg-neutral-200', icon: '🍪' },
                    { name: 'Waffle', color: 'bg-yellow-200', icon: '🧇' },
                    { name: 'Sweet', color: 'bg-pink-200', icon: '🍭' }
                ]
            },
            {
              id: '5_1_7',
              name: ' دبي',
              options: [
                  { size: 'Normal', price: 300 },
              ],
              icon: 'https://via.placeholder.com/128',
              tags: [
                  { name: 'Lotus', color: 'bg-neutral-200', icon: '🍪' },
                  { name: 'Waffle', color: 'bg-yellow-200', icon: '🧇' },
                  { name: 'Sweet', color: 'bg-pink-200', icon: '🍭' }
              ]
          }
                ],
            },
        ],
    },
    {
        id: '6',
        name: 'Frozen',
        icon: "/frozen/Unknown-2.jpeg",
        items: [
            {
                id: '6_1',
                name: 'Pina Colada',
                options: [
                    {size: 'Large', price: 150},
                ],
                icon: "/frozen/Unknown-1.jpeg",
                tags: [
                    { name: 'Pineapple', color: 'bg-yellow-300', icon: '🍍' },
                    { name: 'Coconut', color: 'bg-white', icon: '🥥' },
                    { name: 'Sweet', color: 'bg-pink-200', icon: '🍭' }
                ]
            },
            {
                id: '6_2',
                name: 'Jamaica',
                options: [
                    {size: 'Large', price: 150},
                ],
                icon: "/frozen/Unknown-2.jpeg",
                tags: [
                    { name: 'Tropical', color: 'bg-green-300', icon: '🌴' },
                    { name: 'Fruity', color: 'bg-yellow-200', icon: '🍊' },
                    { name: 'Sweet', color: 'bg-pink-200', icon: '🍭' }
                ]
            },
            {
                id: '6_3',
                name: 'Miami',
                options: [
                 
                    {size: 'Large', price: 150},
                ],
                icon: "/frozen/Unknown.jpeg",
                tags: [
                    { name: 'Citrus', color: 'bg-orange-300', icon: '🍊' },
                    { name: 'Refreshing', color: 'bg-blue-200', icon: '💧' },
                    { name: 'Sweet', color: 'bg-pink-200', icon: '🍭' }
                ]
            },
            {
                id: '6_4',
                name: 'Hawaii',
                options: [
                    
                    {size: 'Large', price: 150},
                ],
                icon: "/frozen/Unknown-3.jpeg",
                tags: [
                    { name: 'Tropical', color: 'bg-green-300', icon: '🌴' },
                    { name: 'Pineapple', color: 'bg-yellow-300', icon: '🍍' },
                    { name: 'Sweet', color: 'bg-pink-200', icon: '🍭' }
                ]
            },
            {
                id: '6_5',
                name: 'Polo',
                options: [
                   
                    {size: 'Large', price: 150},
                ],
                icon: "/frozen/Unknown-4.jpeg",
                tags: [
                    { name: 'Fruity', color: 'bg-yellow-200', icon: '🍒' },
                    { name: 'Refreshing', color: 'bg-blue-200', icon: '💧' },
                    { name: 'Sweet', color: 'bg-pink-200', icon: '🍭' }
                ]
            },
            {
                id: '6_6',
                name: 'Lemonade',
                options: [
                    
                    {size: 'Large', price: 150},
                ],
                icon: "/frozen/Unknown-5.jpeg",
                tags: [
                    { name: 'Lemon', color: 'bg-yellow-300', icon: '🍋' },
                    { name: 'Citrus', color: 'bg-orange-300', icon: '🍊' },
                    { name: 'Refreshing', color: 'bg-blue-200', icon: '💧' }
                ]
            }
        ],
    },
      
      {
        id: '7',
        name: 'Fruit Salad',
        icon: "/all/Unknown-13.jpeg",
        items: [
          {
            id: '7_1',
            name: 'Chocolate Fruit Salad',
            options: [
              { size: 'Medium', price: 275 },
              { size: 'Large', price: 325 }
            ],
            icon: "/all/Screen Shot 2025-07-30 at 17.45.40.png",
            tags: [
              { name: 'Chocolate', color: 'bg-brown-300', icon: '🍫' },
              { name: 'Fruit', color: 'bg-red-200', icon: '🍓' },
              { name: 'Sweet', color: 'bg-pink-200', icon: '🍭' }
            ]
          },
          {
            id: '7_2',
            name: 'Honey Cream Fruit Salad',
            options: [
              { size: 'Medium', price: 250 },
              { size: 'Large', price: 300 }
            ],
            icon: "/all/Unknown-13.jpeg",
            tags: [
              { name: 'Honey', color: 'bg-yellow-300', icon: '🍯' },
              { name: 'Cream', color: 'bg-white', icon: '🍦' },
              { name: 'Fruit', color: 'bg-red-200', icon: '🍓' }
            ]
          },
          {
            id: '7_3',
            name: 'Tropical Fruit Salad',
            options: [
              { size: 'Medium', price: 325 },
              { size: 'Large', price: 375 }
            ],
            icon: "/all/Unknown-14.jpeg",
            tags: [
              { name: 'Tropical', color: 'bg-green-300', icon: '🌴' },
              { name: 'Fruit', color: 'bg-red-200', icon: '🍓' },
              { name: 'Fresh', color: 'bg-green-200', icon: '🥝' }
            ]
          },{
            id: '7_4',
            name: 'سلطة فواكه دايت (سادة)',
            options: [
              { size: 'Medium', price: 200 },
              { size: 'Large', price: 250 }
            ],
            icon: "/all/Unknown-13.jpeg",
            tags: [
              { name: 'Tropical', color: 'bg-green-300', icon: '🌴' },
              { name: 'Fruit', color: 'bg-red-200', icon: '🍓' },
              { name: 'Fresh', color: 'bg-green-200', icon: '🥝' }
            ]
          },{
            id: '7_5',
            name: 'سلطة فواكه بسكويت +شوكولا',
            options: [
              { size: 'Medium', price: 300 },
              { size: 'Large', price: 350 }
            ],
            icon: "https://via.placeholder.com/128",
            tags: [
              { name: 'Tropical', color: 'bg-green-300', icon: '🌴' },
              { name: 'Fruit', color: 'bg-red-200', icon: '🍓' },
              { name: 'Fresh', color: 'bg-green-200', icon: '🥝' }
            ]
          }
        ]
      },
      {
        id: '8',
        name: 'Crepe',
        icon: "/all/Unknown-2.jpeg",
        items: [
          {
            id: '8_1',
            name: 'Chocolate Crepe',
            options: [
              { size: 'Normal', price: 250 }
            ],
            icon: '/crep/kreeb.jpeg',
            tags: [
              { name: 'Chocolate', color: 'bg-brown-300', icon: '🍫' },
              { name: 'Crepe', color: 'bg-yellow-200', icon: '🥞' },
              { name: 'Sweet', color: 'bg-pink-200', icon: '🍭' }
            ]
          },
          {
            id: '8_2',
            name: 'White Chocolate Crepe',
            options: [
              { size: 'Normal', price: 250 }
            ],
            icon: '/crep/f9b88baeab392544f50edc87159294b8.jpeg',
            tags: [
              { name: 'White Chocolate', color: 'bg-white', icon: '🍫' },
              { name: 'Crepe', color: 'bg-yellow-200', icon: '🥞' },
              { name: 'Sweet', color: 'bg-pink-200', icon: '🍭' }
            ]
          },
          {
            id: '8_3',
            name: 'Chocolate & Fruits Crepe',
            options: [
              { size: 'Normal', price: 300 }
            ],
            icon: '/crep/maxresdefault.jpeg',
            tags: [
              { name: 'Chocolate', color: 'bg-brown-300', icon: '🍫' },
              { name: 'Fruits', color: 'bg-red-200', icon: '🍓' },
              { name: 'Crepe', color: 'bg-yellow-200', icon: '🥞' }
            ]
          },
          {
            id: '8_4',
            name: 'Banana Crepe',
            options: [
              { size: 'Normal', price: 275 }
            ],
            icon: '/crep/8b71273adc2b5868facd1f17ce097edc_w750_h750.jpeg',
            tags: [
              { name: 'Banana', color: 'bg-yellow-300', icon: '🍌' },
              { name: 'Crepe', color: 'bg-yellow-200', icon: '🥞' },
              { name: 'Sweet', color: 'bg-pink-200', icon: '🍭' }
            ]
          },
          {
            id: '8_5',
            name: 'Banana & Creme Crepe',
            options: [
              { size: 'Normal', price: 325 }
            ],
            icon: '/crep/f17dfb259cf1a630376453845ee687db7481228e.jpeg',
            tags: [
              { name: 'Banana', color: 'bg-yellow-300', icon: '🍌' },
              { name: 'Cream', color: 'bg-white', icon: '🍦' },
              { name: 'Crepe', color: 'bg-yellow-200', icon: '🥞' }
            ]
          },
          {
            id: '8_6',
            name: 'Lotus Crepe',
            options: [
              { size: 'Normal', price: 300 }
            ],
            icon: '/crep/184970-كريب-اللوتس.jpeg',
            tags: [
              { name: 'Lotus', color: 'bg-brown-400', icon: '🍪' },
              { name: 'Crepe', color: 'bg-yellow-200', icon: '🥞' },
              { name: 'Sweet', color: 'bg-pink-200', icon: '🍭' }
            ]
          },
          {
            id: '8_7',
            name: 'Fettuccine',
            options: [
              { size: 'Normal', price: 250 }
            ],
            icon: '/crep/sddefault.jpeg',
            tags: [
              { name: 'Fettuccine', color: 'bg-yellow-200', icon: '🍝' },
              { name: 'Pasta', color: 'bg-red-200', icon: '🍝' },
              { name: 'Savory', color: 'bg-green-200', icon: '🍴' }
            ]
          },
          {
            id: '8_8',
            name: 'Fruits Crepe',
            options: [
              { size: 'Normal', price: 275 }
            ],
            icon: '/crep/maxresdefault.jpeg',
            tags: [
              { name: 'Lotus', color: 'bg-brown-400', icon: '🍪' },
              { name: 'Crepe', color: 'bg-yellow-200', icon: '🥞' },
              { name: 'Sweet', color: 'bg-pink-200', icon: '🍭' }
            ]
          },
          {
            id: '8_9',
            name: 'kinder',
            options: [
              { size: 'Normal', price: 300 }
            ],
            icon: '/crep/f9b88baeab392544f50edc87159294b8.jpeg',
            tags: [
              { name: 'Kinder', color: 'bg-orange-400', icon: '🍫' },
              { name: 'Crepe', color: 'bg-yellow-200', icon: '🥞' },
              { name: 'Sweet', color: 'bg-pink-200', icon: '🍭' }
            ]
          },
          {
            id: '8_10',
            name: 'oreo crepe',
            options: [
              { size: 'Normal', price: 300 }
            ],
            icon: '/crep/Oreo-Crepe-Dolce-Vita-Indianapolis-1024x769.jpeg',
            tags: [
              { name: 'Oreo', color: 'bg-blue-500', icon: '🍪' },
              { name: 'Crepe', color: 'bg-yellow-200', icon: '🥞' },
              { name: 'Sweet', color: 'bg-pink-200', icon: '🍭' }
            ]
          },
          {
            id: '8_11',
            name: 'kitkat crepe',
            options: [
              { size: 'Normal', price: 300 }
            ],
            icon: '/crep/10ecd5bc866fbd8a874200e5e785acd3.webp',
            tags: [
              { name: 'KitKat', color: 'bg-red-500', icon: '🍫' },
              { name: 'Crepe', color: 'bg-yellow-200', icon: '🥞' },
              { name: 'Sweet', color: 'bg-pink-200', icon: '🍭' }
            ]
          },
          {
            id: '8_12',
            name: 'dubai crepe',
            options: [
              { size: 'Normal', price: 300 }
            ],
            icon: "/all/Unknown-2.jpeg",
            tags: [
              { name: 'dubai', color: 'bg-brown-400', icon: '🍪' },
              { name: 'Crepe', color: 'bg-yellow-200', icon: '🥞' },
              { name: 'Sweet', color: 'bg-pink-200', icon: '🍭' }
            ]
          },
          {
            id: '8_14',
            name: 'sushi crepe',
            options: [
              { size: 'Normal', price: 350 }
            ],
            icon: '/crep/sushi_crepe_1714388563295_1714388578928.webp',
            tags: [
              { name: 'sushi', color: 'bg-brown-400', icon: '🍪' },
              { name: 'Crepe', color: 'bg-yellow-200', icon: '🥞' },
              { name: 'Sweet', color: 'bg-pink-200', icon: '🍭' }
            ]
          },
        ]
      },
      
      {
        id: '9',
        name: 'Mojito',
        icon: "/mojedo/Unknown-1.jpeg",
        items: [
          {
            id: '9_1',
            name: 'Lemon Mint Mojito',
            options: [
                { size: 'Normal', price: 150 }
            ],
            icon: '/mojedo/Unknown.jpeg',
            tags: [
              { name: 'Lemon', color: 'bg-yellow-300', icon: '🍋' },
              { name: 'Mint', color: 'bg-green-200', icon: '🌿' },
              { name: 'Ice Cold', color: 'bg-blue-100', icon: '🧊' }
            ]
          },
          {
            id: '9_2',
            name: 'Blue Mojito',
            options: [
                { size: 'Normal', price: 150 }
            ],
            icon: '/mojedo/Unknown-1.jpeg',
            tags: [
              { name: 'Blue', color: 'bg-blue-400', icon: '🔵' },
              { name: 'Ice Cold', color: 'bg-blue-100', icon: '🧊' }
            ]
          },
          {
            id: '9_3',
            name: 'Pomegranate Mojito',
            options: [
                { size: 'Normal', price: 150 }
            ],
            icon: '/mojedo/Unknown-2.jpeg',
            tags: [
              { name: 'Pomegranate', color: 'bg-red-400', icon: '🍎' },
              { name: 'Ice Cold', color: 'bg-blue-100', icon: '🧊' }
            ]
          },
          {
            id: '9_4',
            name: 'Strawberry Mojito',
            options: [
                { size: 'Normal', price: 150 }
            ],
            icon: '/mojedo/Unknown-3.jpeg',
            tags: [
              { name: 'Strawberry', color: 'bg-red-300', icon: '🍓' },
              { name: 'Ice Cold', color: 'bg-blue-100', icon: '🧊' }
            ]
          },
          {
            id: '9_5',
            name: 'Berries Mojito',
            options: [
                { size: 'Normal', price: 150 }
            ],
            icon: '/mojedo/Unknown-4.jpeg',
            tags: [
              { name: 'Berries', color: 'bg-purple-300', icon: '🍇' },
              { name: 'Ice Cold', color: 'bg-blue-100', icon: '🧊' }
            ]
          },
          {
            id: '9_7',
            name: 'Watermelon Mojito',
            options: [
                { size: 'Normal', price: 150 }
            ],
            icon: '/mojedo/Unknown-5.jpeg',
            tags: [
              { name: 'Watermelon', color: 'bg-green-400', icon: '🍉' },
              { name: 'Ice Cold', color: 'bg-blue-100', icon: '🧊' }
            ]
          }
        ]
      },
      {
        id: '10',
        name: 'IceCream',
        icon: "/ıce cream/Screen Shot 2025-07-30 at 14.48.29.png",
        items: [
          {
            id: '10_1',
            name: 'Fruit IceCream',
            options: [
              { size: 'Normal', price: 250 }
            ],
            icon: '/ıce cream/Unknown-2.jpeg',
            tags: [
              { name: 'Fruit', color: 'bg-green-300', icon: '🍓' },
              { name: 'Ice Cream', color: 'bg-pink-200', icon: '🍦' }
            ]
          },
          {
            id: '10_2',
            name: 'Chocolamo IceCream',
            options: [
              { size: 'Normal', price: 250 }
            ],
            icon: '/ıce cream/Unknown-1.jpeg',
            tags: [
              { name: 'Chocolate', color: 'bg-brown-300', icon: '🍫' },
              { name: 'Ice Cream', color: 'bg-pink-200', icon: '🍦' }
            ]
          },
          {
            id: '10_3',
            name: 'Mix IceCream',
            options: [
              { size: 'Normal', price: 200 }
            ],
            icon: '/ıce cream/Screen Shot 2025-07-30 at 14.48.29.png',
            tags: [
              { name: 'Mixed Flavors', color: 'bg-purple-300', icon: '🍨' },
              { name: 'Ice Cream', color: 'bg-pink-200', icon: '🍦' }
            ]
          },
          {
            id: '10_5',
            name: 'كريمة العسل والمكسرات والآيس كريم',
            options: [
              { size: 'Normal', price: 275 }
            ],
            icon: '/ıce cream/Unknown-3.jpeg',
            tags: [
              { name: 'Honey', color: 'bg-yellow-300', icon: '🍯' },
              { name: 'Nuts', color: 'bg-brown-200', icon: '🌰' },
              { name: 'Ice Cream', color: 'bg-pink-200', icon: '🍦' }
            ]
          },
          {
            id: '10_6',
            name: 'ice brost',
            options: [
              { size: 'Normal', price: 275 }
            ],
            icon: '/ıce cream/Unknown-4.jpeg',
            tags: [
              { name: 'Honey', color: 'bg-yellow-300', icon: '🍯' },
              { name: 'Nuts', color: 'bg-brown-200', icon: '🌰' },
              { name: 'Ice Cream', color: 'bg-pink-200', icon: '🍦' }
            ]
          }
        ]
      },
    {
        "id": "10",
        "name": "أصناف DHO",
        "icon": "/all/Unknown-11.jpeg",
        "items": [
          {
            "id": "10_1",
            "name": "كيكة دبي",
            "options": [
              { "size": "Normal", "price": 300 }
            ],
            "icon": "https://via.placeholder.com/128",
            "tags": [
              { "name": "Cake", "color": "bg-yellow-200", "icon": "🍰" }
            ]
          },
          {
            "id": "10_2",
            "name": "كشري شوكولاتة",
            "options": [
              { "size": "Normal", "price": 275 }
            ],
            "icon": "/all/Unknown-12.jpeg",
            "tags": [
              { "name": "Chocolate", "color": "bg-brown-300", "icon": "🍫" },
              { "name": "Koshary", "color": "bg-orange-200", "icon": "🍛" }
            ]
          },
          {
            "id": "10_3",
            "name": "كشري لوتس",
            "options": [
              { "size": "Normal", "price": 300 }
            ],
            "icon": "/all/Unknown-12.jpeg",
            "tags": [
              { "name": "Lotus", "color": "bg-amber-300", "icon": "🌼" },
              { "name": "Koshary", "color": "bg-orange-200", "icon": "🍛" }
            ]
          },
          {
            "id": "10_4",
            "name": "كشري الفستق",
            "options": [
              { "size": "Normal", "price": 275 }
            ],
            "icon": "/all/Unknown-12.jpeg",
            "tags": [
              { "name": "Pistachio", "color": "bg-green-300", "icon": "🥜" },
              { "name": "Koshary", "color": "bg-orange-200", "icon": "🍛" }
            ]
          },
        ]
      }
      
];

export interface ProductOption {
    size: string;
    price: number;
}

export interface ProductItemType {
    id: string;
    name: string;
    description?: string;
    icon: string;
    options: { size: string; price: number }[];
    tags: { name: string; icon: string; color: string }[];
    subcategoryName?: string;
  }
  
  export interface SubcategoryType {
    id: string;
    name: string;
    icon: string;
    items: ProductItemType[];
  }
  
  export interface ProductType {
    id: string;
    name: string;
    icon: string;
    items: ProductItemType[] | SubcategoryType[];
  }
  