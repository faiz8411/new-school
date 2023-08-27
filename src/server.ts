import mongoose from 'mongoose'
import config from './config'
import app from './app'

async function bootstrap() {
  try {
    await mongoose.connect(config.database as string)
    console.log('successfully connected  ')
    app.listen(config.port, () => {
      console.log(`school app listening on port ${config.port}`)
    })
  } catch (err) {
    console.log('failed', err)
  }

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

bootstrap()
