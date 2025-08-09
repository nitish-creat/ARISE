// backend/server.js

const express = require('express');
const sql = require('mssql');
const config = require('./dbConfig');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Test DB connection
sql.connect(config)
  .then(pool => {
    if (pool.connected) {
      console.log('✅ Connected to SQL Server');
    }

    // Example route
    app.get('/api/users', async (req, res) => {
      try {
        const result = await pool.request().query('SELECT * FROM Users'); // Make sure 'Users' table exists
        res.json(result.recordset);
      } catch (err) {
        res.status(500).send({ error: err.message });
      }
    });

  })
  .catch(err => console.error('❌ DB Connection Failed:', err));

app.listen(5000, () => console.log('🌐 Server running on port 5000'));
