let products = require('../data/products');

// GET all products
exports.getProducts = (req, res) => {
  const { search, category, minPrice, maxPrice, page = 1, limit = 5 } = req.query;

  let filtered = [...products];

  if (search) filtered = filtered.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));
  if (category) filtered = filtered.filter(p => p.category.toLowerCase() === category.toLowerCase());
  if (minPrice) filtered = filtered.filter(p => p.price >= Number(minPrice));
  if (maxPrice) filtered = filtered.filter(p => p.price <= Number(maxPrice));

  const start = (page - 1) * limit;
  const paginated = filtered.slice(start, start + Number(limit));

  res.json({
    total: filtered.length,
    page: Number(page),
    limit: Number(limit),
    data: paginated
  });
};

// GET one product
exports.getProductById = (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).json({ message: "Product not found" });
  res.json(product);
};

// CREATE product
exports.createProduct = (req, res) => {
  const { name, price, category } = req.body;
  if (!name || !price || !category) {
    return res.status(400).json({ message: "All fields are required" });
  }
  const newProduct = { id: products.length + 1, name, price, category };
  products.push(newProduct);
  res.status(201).json(newProduct);
};

// UPDATE product
exports.updateProduct = (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).json({ message: "Product not found" });

  const { name, price, category } = req.body;
  if (name) product.name = name;
  if (price) product.price = price;
  if (category) product.category = category;

  res.json(product);
};

// DELETE product
exports.deleteProduct = (req, res) => {
  const index = products.findIndex(p => p.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: "Product not found" });

  const deleted = products.splice(index, 1);
  res.json(deleted[0]);
};
