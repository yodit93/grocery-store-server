CREATE TABLE buys (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  product_id INTEGER REFERENCES products(id),
  quantity INTEGER NOT NULL,
  purchase_date TIMESTAMP DEFAULT NOW()
);
