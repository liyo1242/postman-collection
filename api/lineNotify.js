const axios = require('axios')
var FormData = require('form-data');

async function lineNotify(messagecontent) {
    const token = process.env.LINE_TOKEN;

    const form_data = new FormData();
    form_data.append("message", messagecontent);

    const headers = Object.assign({
        'Authorization': `Bearer LINE_TOKEN`
    }, form_data.getHeaders());

    axios({
        method: 'post',
        url: 'https://notify-api.line.me/api/notify',
        data: form_data,
        headers: headers
    }).then(function (response) {
        console.log("HTTP狀態碼:" + response.status);
        console.log(response.data);
    }).catch(function (error) {
        console.error("LINE通知發送失敗");
        if (error.response) {
            console.error("HTTP狀態碼:" + error.response.status);
            console.error(error.response.data);
        } else {
            console.error(error);
        }
    });
}
module.exports.lineNotify = lineNotify;
