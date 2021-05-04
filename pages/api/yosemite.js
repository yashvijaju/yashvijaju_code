export default async (req, res) => {

    let nodemailer = require('nodemailer')
    
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
            user: 'yashvijajubot@gmail.com',
            pass: process.env.BOT_PASS,
        },
        secure: true,
    });

    const mailData = {
        from: 'yashvijajubot@gmail.com',
        to: 'yashvijaju@gmail.com',
        subject: 'Message From Yashvi Jaju Bot',
        text: "A slot has opened for crater lake or yosemite! book asap",
        html: "<div>A slot has opened for crater lake / yosemite! book asap</div>"
    }


    await fetch("https://reservations.ahlsmsworld.com/Yosemite/Search/GetInventoryCountData?callback=$.wxa.on_datepicker_general_availability_loaded&CresPropCode=000000&MultiPropCode=B&UnitTypeCode=&StartDate=Tue+Aug+03+2021&EndDate=Sat+Aug+07+2021&_=1620073570940")
    .then(response => response.text())
    .then(data => {
        var temp = data.substr(48);
        temp = temp.substr(0,temp.length-2);
        var json_temp = JSON.parse(temp)

        for (var i = 0; i < json_temp.length; i++) {
            if (json_temp[i].AvailableCount > 0) {
                transporter.sendMail(mailData, function (err, info) {
                    if(err)
                      console.log(err)
                    else
                      console.log(info)
                })
            } 
        }
    })
    .catch(error => console.log(error))

    await fetch("https://reservations.ahlsmsworld.com/Yosemite/Search/GetInventoryCountData?callback=$.wxa.on_datepicker_general_availability_loaded&CresPropCode=000000&MultiPropCode=D&UnitTypeCode=&StartDate=Tue+Aug+03+2021&EndDate=Sat+Aug+07+2021&_=1620073570940")
    .then(response => response.text())
    .then(data => {
        var temp = data.substr(48);
        temp = temp.substr(0,temp.length-2);
        var json_temp = JSON.parse(temp)

        for (var i = 0; i < json_temp.length; i++) {
            if (json_temp[i].AvailableCount > 0) {
                transporter.sendMail(mailData, function (err, info) {
                    if(err)
                      console.log(err)
                    else
                      console.log(info)
                })
            } 
        }
    })

    await fetch("https://reservations.ahlsmsworld.com/Yosemite/Search/GetInventoryCountData?callback=$.wxa.on_datepicker_general_availability_loaded&CresPropCode=000000&MultiPropCode=Y&UnitTypeCode=&StartDate=Tue+Aug+03+2021&EndDate=Sat+Aug+07+2021&_=1620073570940")
    .then(response => response.text())
    .then(data => {
        var temp = data.substr(48);
        temp = temp.substr(0,temp.length-2);
        var json_temp = JSON.parse(temp)

        for (var i = 0; i < json_temp.length; i++) {
            if (json_temp[i].AvailableCount > 0) {
                transporter.sendMail(mailData, function (err, info) {
                    if(err)
                      console.log(err)
                    else
                      console.log(info)
                })
            } 
        }
    })

    await fetch("https://reservations.ahlsmsworld.com/CraterLake/Search/GetInventoryCountData?callback=$.wxa.on_datepicker_general_availability_loaded&CresPropCode=CRATER&MultiPropCode=C&UnitTypeCode=&StartDate=Sat+Aug+14+2021&EndDate=Sun+Aug+15+2021&_=1620073329698")
    .then(response => response.text())
    .then(data => {
        var temp = data.substr(48);
        temp = temp.substr(0,temp.length-2);
        var json_temp = JSON.parse(temp)

        for (var i = 0; i < json_temp.length; i++) {
            if (json_temp[i].AvailableCount > 0) {
                transporter.sendMail(mailData, function (err, info) {
                    if(err)
                      console.log(err)
                    else
                      console.log(info)
                })
            } 
        }
    })

    await fetch("https://reservations.ahlsmsworld.com/CraterLake/Search/GetInventoryCountData?callback=$.wxa.on_datepicker_general_availability_loaded&CresPropCode=CRATER&MultiPropCode=R&UnitTypeCode=&StartDate=Sat+Aug+14+2021&EndDate=Sun+Aug+15+2021&_=1620073329698")
    .then(response => response.text())
    .then(data => {
        var temp = data.substr(48);
        temp = temp.substr(0,temp.length-2);
        var json_temp = JSON.parse(temp)
        
        if (json_temp[0].AvailableCount > 0) {
            transporter.sendMail(mailData, function (err, info) {
                if(err)
                  console.log(err)
                else
                  console.log(info)
            })
        } 

        if (json_temp[1].AvailableCount > 0) {
            transporter.sendMail(mailData, function (err, info) {
                if(err)
                  console.log(err)
                else
                  console.log(info)
            })
        } 
    })

    res.status(200)

    res.send({
        "code": 200,
        "message": "voila"
    })
};