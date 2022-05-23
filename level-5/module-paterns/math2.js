const { __esModule } = require("uuid")

//revealing module pattern; some functionalities will be revealed, others kept private
const factor = 2
function multiplyBy2(num) {
    return num * factor
}

module.exports = multiplyBy2