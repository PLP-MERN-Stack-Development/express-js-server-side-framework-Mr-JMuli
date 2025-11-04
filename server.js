require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const productRoutes = require('./routes/productRoutes');
const { errorHandler } = require('./middleware/errorHandler');

const app = express();

// Middleware
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use('/api/products', productRoutes);

// Error handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
