const express = require("express");
const app = express();
const axios = require("axios")
app.use(express.json());
const port = 3000;

app.post('/test/register', async(req,res) => {
  const response = await axios.get("https://20.244.56.144/test/register")
  res.json(response.data)

})

app.post('/test/register', async(req,res) => {
  const response = await axios.get("https://20.244.56.144/test/auth")
  res.json(response.data)

})

app.listen(port , () => {
  console.log("Server started at 3000")
})

app.get('/test/companies/:companyname/categories/:categoryname/products?top=9&minPrice=300&maxPrice=2000', (req, res) => {
  const { companyname, categoryname } = req.params;
  const { top, minPrice, maxPrice } = req.query;


  let filteredProducts = productsData.filter(product => {
      return product.company === companyname && 
             product.category === categoryname &&
             product.price >= minPrice &&
             product.price <= maxPrice;
  });
  console.log(filteredProducts)

  if (req.query.sortBy) {
      const sortBy = req.query.sortBy;
      const sortOrder = req.query.sortOrder === 'desc' ? -1 : 1;

      filteredProducts.sort((a, b) => {
          if (a[sortBy] < b[sortBy]) return -1 * sortOrder;
          if (a[sortBy] > b[sortBy]) return 1 * sortOrder;
          return 0;
      });
  } else {
      filteredProducts.sort((a, b) => a.price - b.price);
  }
  const limit = top ? parseInt(top) : 10;
  const paginatedProducts = filteredProducts.slice(0, limit);

  res.json(paginatedProducts);
});


