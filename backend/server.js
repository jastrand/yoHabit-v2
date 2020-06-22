import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'
import crypto from 'crypto'
import bcrypt from 'bcrypt-nodejs'

const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/yohabit"
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
mongoose.Promise = Promise


const User = mongoose.model('User', {
  name: {
    type: String,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  accessToken: {
    type: String,
    default: () => crypto.randomBytes(128).toString('hex')
  },
  profileImage: {
    type: String,
    default: ''
  },
  personalHabits: [{
    id: Number,
    habit: String,
    category: String
  }]
})


const authenticateUser = async (req, res, next) => {
  const user = await User.findOne({ accessToken: req.header('Authorization') })
  if (user) {
    req.user = user
    next()
  } else {
    res.status(403).json({ message: 'You must log in to use YoHabit' })
  }
}

// Defines the port the app will run on. Defaults to 8080, but can be 
// overridden when starting the server. For example:
//   PORT=9000 npm start
const port = process.env.PORT || 8080
const app = express()

// Add middlewares to enable cors and json body parsing
app.use(cors())
app.use(bodyParser.json())

// Routes goes here

app.get('/', async (req, res) => {
  const users = await User.find()
  res.json(users)
})


app.post('/users', async (req, res) => {
  try {
    const name = req.body.name.charAt(0).toUpperCase() + req.body.name.slice(1).toLowerCase()
    const { email, password } = req.body
    const user = await new User({ name, email, password: bcrypt.hashSync(password) }).save()
    res.status(201).json({ id: user._id, accessToken: user.accessToken, profileImage: user.profileImage, personalHabits: user.personalHabits })
  } catch (err) {
    res.status(400).json({ message: "Could not create user", error: err })
  }
})

app.post('/sessions', async (req, res) => {
  const name = new RegExp(req.body.name, 'i')
  const user = await User.findOne({ name });
  if (user && bcrypt.compareSync(req.body.password, user.password)) {
    res.json({
      userId: user._id,
      accessToken: user.accessToken,
      profileImage: user.profileImage,
      personalHabits: user.personalHabits
    })
  } else {
    res.status(404).json({ error: "Invalid username or password" })
  }
})

app.get('/profile', authenticateUser)
app.get('/profile', async (req, res) => {
  const user = await User.findOne({ accessToken: req.header('Authorization') })
  res.json({ message: `Welcome ${user.name}` })
})

//find user and update profile 
app.post('/users/:id', async (req, res) => {
  const user = await User.findOneAndUpdate({ _id: req.params.id },
    { profileImage: req.body.image }, { new: true })
  res.json({ imageURL: user.profileImage })
})

app.put('/users/:id', async (req, res) => {
  const { habit, category } = req.body
  const title = habit.title
  const habitId = habit.id
  const user = await User.findOneAndUpdate({ _id: req.params.id },
    { $push: { personalHabits: { id: habitId, habit: title, category } } },
    { new: true }
  )
  res.json(user)
})

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})