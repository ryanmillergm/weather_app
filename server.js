if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const DARK_SKY_API_KEY = process.env.DARK_SKY_API_KEY
