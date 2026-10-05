// Monthly Orders Chart

new Chart(
document.getElementById("ordersChart"),
{
    type:'bar',
    data:{
        labels:[
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun'
        ],
        datasets:[{
            label:'Orders',
            data:[20,35,45,60,55,80]
        }]
    }
}
);

// Product Analysis Chart

new Chart(
document.getElementById("productChart"),
{
    type:'bar',
    data:{
        labels:[
            'Laptop',
            'Mobile',
            'Keyboard',
            'Monitor'
        ],
        datasets:[{
            label:'Sales',
            data:[60,80,30,25]
        }]
    }
}
);

// Customer Distribution

new Chart(
document.getElementById("customerChart"),
{
    type:'pie',
    data:{
        labels:[
            'Corporate',
            'Retail',
            'Wholesale'
        ],
        datasets:[{
            data:[45,35,20]
        }]
    }
}
);