require('./servers/mongoServer') //connect to mongo server
const app = require('./servers/apiServer') // run api server
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

app.use(userRouter)
app.use(taskRouter)



