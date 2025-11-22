// Jerk Riley's Menu Data with High-Quality Images
const menuData = {
    appetizers: [
        {
            name: "Jerk's Sampler",
            price: 16.00,
            description: "The ultimate appetizer platter featuring crispy mozzarella sticks, tangy buffalo wings, golden fried pickles, and loaded potato skins. Perfect for sharing!",
            image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&h=600&fit=crop",
            tags: ["Popular", "Shareab le"]
        },
        {
            name: "Loaded Nachos",
            price: 14.00,
            description: "Mountain of crispy tortilla chips smothered in melted cheese, topped with seasoned beef, jalapeños, pico de gallo, sour cream, and guacamole.",
            image: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=800&h=600&fit=crop",
            tags: []
        },
        {
            name: "Buffalo Dip",
            price: 12.00,
            description: "Creamy buffalo chicken dip loaded with tender shredded chicken, tangy hot sauce, and melted cheese. Served bubbling hot with tortilla chips.",
            image: "https://images.unsplash.com/photo-1541529086526-db283c563270?w=800&h=600&fit=crop",
            tags: []
        },
        {
            name: "Spinach Dip",
            price: 12.00,
            description: "Rich and creamy spinach artichoke dip with a blend of cheeses, served warm with crispy pita chips and fresh vegetables for dipping.",
            image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=800&h=600&fit=crop",
            tags: ["Vegetarian"]
        },
        {
            name: "Street Corn Dip",
            price: 12.00,
            description: "Mexican-inspired roasted corn dip with cotija cheese, lime, chili powder, and cilantro. Served with warm tortilla chips.",
            image: "https://images.unsplash.com/photo-1551574162-0eb1db2ff562?w=800&h=600&fit=crop",
            tags: ["Vegetarian"]
        },
        {
            name: "Tater Kegs",
            price: 12.00,
            description: "Crispy barrel-shaped potato bites stuffed with melted cheese and bacon, served with ranch dipping sauce.",
            image: "https://images.unsplash.com/photo-1618040996337-56904b7850b9?w=800&h=600&fit=crop",
            tags: []
        },
        {
            name: "Loaded Cheese & Bacon Fries",
            price: 12.00,
            description: "Golden crispy fries piled high with melted cheddar cheese, crispy bacon bits, green onions, and a drizzle of ranch.",
            image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=800&h=600&fit=crop",
            tags: []
        },
        {
            name: "Celtic Knot",
            price: 10.00,
            description: "Warm pretzel knots brushed with garlic butter and sea salt, served with our signature beer cheese dip.",
            image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&h=600&fit=crop",
            tags: []
        },
        {
            name: "Fried Pickles",
            price: 10.00,
            description: "Crispy breaded dill pickle chips fried golden brown and served with zesty ranch dressing for dipping.",
            image: "https://images.unsplash.com/photo-1626200419199-391ae4be7a41?w=800&h=600&fit=crop",
            tags: []
        },
        {
            name: "Mozzarella Sticks",
            price: 9.00,
            description: "Six golden-fried mozzarella sticks with a crispy exterior and gooey melted cheese center. Served with marinara sauce.",
            image: "https://images.unsplash.com/photo-1548340748-6d2b7d7da280?w=800&h=600&fit=crop",
            tags: []
        },
        {
            name: "Chips Salsa & Queso",
            price: 8.00,
            description: "Crispy tortilla chips served with house-made salsa and warm, creamy queso dip.",
            image: "https://images.unsplash.com/photo-1613514785940-daed07799d9b?w=800&h=600&fit=crop",
            tags: ["Vegetarian"]
        },
        {
            name: "Deviled Eggs",
            price: 7.00,
            description: "Classic deviled eggs with a creamy filling, topped with paprika and fresh chives.",
            image: "https://images.unsplash.com/photo-1621744968804-54c05a89e2c9?w=800&h=600&fit=crop",
            tags: []
        }
    ],
    wings: [
        {
            name: "(10) Traditional Wings",
            price: 13.00,
            description: "Ten crispy, juicy chicken wings tossed in your choice of sauce. Served with celery sticks and blue cheese or ranch dressing.",
            image: "https://images.unsplash.com/photo-1608039755401-742074f0548d?w=800&h=600&fit=crop",
            tags: [],
            sauces: "Buffalo, Hot, Carolina Reaper, Hot Honey, Honey BBQ, Spicy BBQ, Bourbon, General Tso, Teriyaki, Jerk, Cajun Dry Rub, Carolina Gold"
        },
        {
            name: "(10) Boneless Wings",
            price: 11.00,
            description: "Ten tender boneless chicken pieces perfectly fried and coated in your favorite sauce.",
            image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=800&h=600&fit=crop",
            tags: []
        },
        {
            name: "(5) Traditional Wings",
            price: 7.00,
            description: "Five crispy traditional wings with your choice of signature sauce.",
            image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=800&h=600&fit=crop",
            tags: []
        },
        {
            name: "(5) Boneless Wings",
            price: 6.00,
            description: "Five boneless wings tossed in your choice of sauce.",
            image: "https://images.unsplash.com/photo-1624726175512-19b9baf9fbd1?w=800&h=600&fit=crop",
            tags: []
        }
    ],
    burgers: [
        {
            name: "Riley's Smasher",
            price: 12.00,
            description: "Our signature smash burger with two crispy-edged patties, American cheese, special sauce, lettuce, pickles, and onions on a toasted brioche bun. Served with fries.",
            image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=600&fit=crop",
            tags: ["Signature"]
        },
        {
            name: "Guinness Burger",
            price: 12.00,
            description: "Juicy beef patty topped with Irish cheddar, Guinness-caramelized onions, bacon, and garlic aioli. A true Irish-American fusion. Served with fries.",
            image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=600&fit=crop",
            tags: ["Irish Classic"]
        }
    ],
    sandwiches: [
        {
            name: "The Big Jerk",
            price: 15.00,
            description: "Triple-stacked club sandwich loaded with turkey, ham, bacon, lettuce, tomato, and mayo on toasted sourdough. A meal in itself!",
            image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=800&h=600&fit=crop",
            tags: ["Popular"]
        },
        {
            name: "The Jerkwich",
            price: 15.00,
            description: "Our namesake sandwich featuring Caribbean jerk-spiced chicken, pineapple salsa, and chipotle mayo on a ciabatta roll.",
            image: "https://images.unsplash.com/photo-1619683039213-7d0c7b3c2927?w=800&h=600&fit=crop",
            tags: []
        },
        {
            name: "Reuben",
            price: 12.00,
            description: "Classic Reuben with tender corned beef, Swiss cheese, tangy sauerkraut, and Thousand Island dressing on grilled marble rye.",
            image: "https://images.unsplash.com/photo-1621862069068-c58f5a836876?w=800&h=600&fit=crop",
            tags: ["Irish Classic"]
        },
        {
            name: "Pub Steak",
            price: 12.00,
            description: "Thin-sliced ribeye steak with grilled onions, peppers, and provolone on a hoagie roll.",
            image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=800&h=600&fit=crop",
            tags: []
        },
        {
            name: "Pub Chicken",
            price: 12.00,
            description: "Grilled chicken breast with bacon, cheddar, lettuce, tomato, and honey mustard on a brioche bun.",
            image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=800&h=600&fit=crop",
            tags: []
        },
        {
            name: "Fish Sandwich",
            price: 12.00,
            description: "Beer-battered cod fillet with lettuce, tomato, and tartar sauce on a toasted bun.",
            image: "https://images.unsplash.com/photo-1625944230945-1b7dd3b949ab?w=800&h=600&fit=crop",
            tags: []
        },
        {
            name: "Chicken Wrap",
            price: 10.00,
            description: "Grilled chicken, lettuce, tomato, cheddar, and ranch wrapped in a flour tortilla.",
            image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=800&h=600&fit=crop",
            tags: []
        },
        {
            name: "Club Wrap",
            price: 10.00,
            description: "Turkey, ham, bacon, lettuce, tomato, and mayo in a warm tortilla wrap.",
            image: "https://images.unsplash.com/photo-1600628840732-7c5b5e3d0d91?w=800&h=600&fit=crop",
            tags: []
        },
        {
            name: "Philly Wrap",
            price: 10.00,
            description: "Shaved steak, peppers, onions, and cheese sauce wrapped tight.",
            image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=800&h=600&fit=crop",
            tags: []
        }
    ],
    pizzas: [
        {
            name: "Pepperoni Pizza",
            price: 15.00,
            description: "Classic hand-tossed pizza loaded with mozzarella and generous pepperoni.",
            image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=800&h=600&fit=crop",
            tags: []
        },
        {
            name: "Pub Steak Pizza",
            price: 15.00,
            description: "Thinly sliced steak, caramelized onions, peppers, and mozzarella on our signature crust.",
            image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&h=600&fit=crop",
            tags: []
        },
        {
            name: "Banger Pizza",
            price: 15.00,
            description: "Irish sausage, caramelized onions, and mozzarella with a drizzle of Guinness reduction.",
            image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96800?w=800&h=600&fit=crop",
            tags: []
        },
        {
            name: "5 Cheese Pizza",
            price: 13.00,
            description: "A cheese lover's dream with mozzarella, cheddar, provolone, parmesan, and blue cheese.",
            image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&h=600&fit=crop",
            tags: ["Vegetarian"]
        }
    ],
    entrees: [
        {
            name: "Fish & Chips",
            price: 14.00,
            description: "Traditional beer-battered cod served with golden fries, coleslaw, lemon wedges, and house-made tartar sauce. A pub classic done right.",
            image: "https://images.unsplash.com/photo-1579208575657-c595a05383b7?w=800&h=600&fit=crop",
            tags: ["Signature"]
        },
        {
            name: "Bangers & Mash",
            price: 14.00,
            description: "Authentic Irish sausages served over creamy mashed potatoes with rich onion gravy and mushy peas. Straight from the Emerald Isle.",
            image: "https://images.unsplash.com/photo-1599487488831-57e79a68f4f1?w=800&h=600&fit=crop",
            tags: ["Irish Classic"]
        },
        {
            name: "Shepherd's Pie",
            price: 14.00,
            description: "Hearty ground lamb slow-cooked with vegetables in savory gravy, topped with fluffy mashed potatoes and baked until golden brown.",
            image: "https://images.unsplash.com/photo-1643647294194-341b27b68b20?w=800&h=600&fit=crop",
            tags: ["Irish Classic"]
        }
    ],
    desserts: [
        {
            name: "Boston Cream Pie",
            price: 5.00,
            description: "Classic New England dessert with layers of sponge cake, creamy custard filling, and rich chocolate ganache.",
            image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&h=600&fit=crop",
            tags: []
        },
        {
            name: "Apple Pie",
            price: 5.00,
            description: "Warm apple pie with cinnamon-spiced apples in a buttery crust. Served with vanilla ice cream.",
            image: "https://images.unsplash.com/photo-1535920527002-b35e96722eb9?w=800&h=600&fit=crop",
            tags: []
        }
    ]
};
