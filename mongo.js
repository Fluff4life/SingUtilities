const mongoose = require('mongoose')
const mongoPath = 'mongodb+srv://singpiano6:singutil@singutilities.laofwst.mongodb.net/?retryWrites=true&w=majority'


module.exports = async () => {
    await mongoose.connect(mongoPath, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })

    return mongoose
}