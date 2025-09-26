const express = require('express');
const bodyParser = require('body-parser');
const { Sequelize, DataTypes } = require('sequelize');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname)); // To serve addbook.html

// Setup Sequelize connection
const sequelize = new Sequelize('library', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

// Define Book model
const Book = sequelize.define('Book', {
  bookno: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    unique: true,
    validate: {
      min: 1,
      max: 1000
    }
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    validate: {
      min: 0.01
    }
  }
}, {
  tableName: 'books',
  timestamps: false,
  id: false
});

// Sync with database (creates table if not exists)
sequelize.sync()
  .then(() => console.log('Database connected and model synced'))
  .catch(err => console.error('Database sync error:', err));

// POST route to save book
app.post('/savebook', async (req, res) => {
  const { bookno, title, author, price } = req.body;

  try {
    // Create and save book
    await Book.create({
      bookno,
      title,
      author,
      price
    });

    res.send(`<p>Record Saved.</p><a href="/addbook.html">Go to Home Page</a>`);
  } catch (err) {
    if (err.name === 'SequelizeUniqueConstraintError') {
      res.send(`<p>Book number already exists.</p><a href="/addbook.html">Go back</a>`);
    } else {
      res.send(`<p>Error: ${err.message}</p><a href="/addbook.html">Go back</a>`);
    }
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
