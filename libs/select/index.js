const selectBusiness = new Select("#personal_messages", {
    placeholder: "Мгновенно",
    // placeholder: data[0].value,
    data: [{
        id: "1",
        value: "Мгновенно"
    }, {
        id: "2",
        value: "1 раз в день"
    }, {
        id: "3",
        value: "Отключить"
    }]
});




const buildingHomes = new Select("#building_homes", {
    placeholder: "Мгновенно",
    data: [{
        id: "1",
        value: "Мгновенно"
    }, {
        id: "2",
        value: "1 раз в день"
    }, {
        id: "3",
        value: "Отключить"
    }]
});


window.s = selectBusiness, buildingHomes;