// https://stackoverflow.com/questions/1997661/unique-object-identifier-in-javascript

var house = [{
    id: 1,
    garden: '10 sq meter',
    parkingSpace: '15 sq meter',
    floorSpace: '50',
    housePrice: 50000,
    apartment: [{
        name: 'LG-00',
        area: '22 sq meter',
        rent: 12000,
        serviceCharge: '1000',
        propertyStatus: 'rent'//sale or rent
    }],
    apartment1: [{
        name: 'LG-06',
        area: '22 sq meter',
        rent: 12000,
        serviceCharge: '1000',
        propertyStatus: 'rent'//sale or rent
    }]
}, {
    id: 2,
    garden: '15 sq meter',
    parkingSpace: '25 sq meter',
    floorSpace: '50',
    housePrice: 70000,
    apartment: [{
        name: 'LG-01',
        area: '32 sq meter',
        rent: 15000,
        serviceCharge: '1000',
        propertyStatus: 'rent'//sale or rent
    }]
}];

var houseObject = [];

for (var key in house) {
    houseObject.push(house[key]);
}
// "Other way to add apartment"
// houseObject[2].apartment2 = [{
//     name: 'LG-05',
//     area: '25 sq meter',
//     rent: 12500,
//     serviceCharge: '1000',
//     propertyStatus: 'rent'//sale or rent
// }] 

// https://www.grantthornton.com.ph/insights/articles-and-updates1/lets-talk-tax/accounting-and-taxation-of-short-term-leases-and-lease-for-low-value-assets/#:~:text=In%20an%20operating%20lease%2C%20the,expanded%20withholding%20tax%20(EWT).