import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import ProductCard from "../components/content/ProductCard";
import {
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
  Button,
  Form,
} from "react-bootstrap";
import { CardsData } from "../Data/CardsData";
import "../style/ProductCatalog.css";

const filterByPriceRange = (price, range) => {
  switch (range) {
    case "0-50":
      return price >= 0 && price <= 50;
    case "50-100":
      return price > 50 && price <= 100;
    case "150-200":
      return price >= 150 && price <= 200;
    case "200-plus":
      return price > 200;
    default:
      return true;
  }
};

function Catalog(props) {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(CardsData);
  const [priceRange, setPriceRange] = useState("all");
  const [sortBy, setSortBy] = useState("none");
  const [sortByName, setSortByName] = useState("none");

  useEffect(() => {
    props.updateCartCount();
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);

    const filtered = CardsData.filter(
      (product) =>
        product.title.toLowerCase().includes(query.toLowerCase()) &&
        (priceRange === "all" || filterByPriceRange(product.price, priceRange))
    );

    sortFilteredProducts(filtered, sortBy, sortByName);
    setFilteredProducts(filtered);
  };

  const handlePriceRangeChange = (event) => {
    const selectedRange = event.target.value;
    setPriceRange(selectedRange);

    const filtered = CardsData.filter(
      (product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (selectedRange === "all" ||
          filterByPriceRange(product.price, selectedRange))
    );

    sortFilteredProducts(filtered, sortBy, sortByName);
    setFilteredProducts(filtered);
  };

  const handleSortChange = (event) => {
    const selectedSortBy = event.target.value;
    setSortBy(selectedSortBy);

    sortFilteredProducts(filteredProducts, selectedSortBy, sortByName);
  };

  const handleSortByNameChange = (event) => {
    const selectedSortByName = event.target.value;
    setSortByName(selectedSortByName);

    sortFilteredProducts(filteredProducts, sortBy, selectedSortByName);
  };

  const sortFilteredProducts = (products, sortingOption, sortingByName) => {
    switch (sortingOption) {
      case "price-low-high":
        products.sort((a, b) => a.price - b.price);
        break;
      case "price-high-low":
        products.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    switch (sortingByName) {
      case "name-ascending":
        products.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "name-descending":
        products.sort((a, b) => b.title.localeCompare(a.title));
        break;
      default:
        break;
    }
  };

  let cardStyle = {
    width: "15rem",
    margin: "auto",
    height: "20rem",
  };

  let imgStyle = {
    height: "35vh",
  };

  return (
    <div>
      <Container className="mt-4">
        {/* <div className="product-card"> */}
        <Row>
          <Col md={12} className="center-content">
            <h5 id="title" className="text-center mt-4 mb-4">
              Let's Explore Our Delicious Pizza Products
            </h5>
          </Col>
        </Row>
        <Row>
          <Col md={9}>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Search products..."
                onChange={(e) => handleSearch(e.target.value)}
              />
              <Button
                variant="primary"
                onClick={() => handleSearch(searchQuery)}
                className="ms-2"
              >
                Search
              </Button>
            </InputGroup>
            <div className="product-list">
              {filteredProducts.length === 0 ? (
                <p class="typewriter">
                  No products found. Sorry, not available.
                </p>
              ) : (
                <Row>
                  {filteredProducts.map((product) => (
                    <Col
                      key={product.id}
                      lg={4}
                      md={6}
                      sm={6}
                      xs={12}
                      className="mb-3 "
                    >
                      <ProductCard
                        data={product}
                        style={cardStyle}
                        imgStyle={imgStyle}
                      />
                    </Col>
                  ))}
                </Row>
              )}
            </div>
          </Col>
          <Col md={3} sm={0} className="filter-sort">
            <div className="mb-3">
              <Form.Label className="head">Filter by Price Range:</Form.Label>
              <div className="radio-group">
                <Form.Check
                  label="All"
                  type="radio"
                  id="price-all"
                  value="all"
                  checked={priceRange === "all"}
                  onChange={handlePriceRangeChange}
                />
                <Form.Check
                  label="0 - 50"
                  type="radio"
                  id="price-0-50"
                  value="0-50"
                  checked={priceRange === "0-50"}
                  onChange={handlePriceRangeChange}
                />
                <Form.Check
                  label="50 - 100"
                  type="radio"
                  id="price-50-100"
                  value="50-100"
                  checked={priceRange === "50-100"}
                  onChange={handlePriceRangeChange}
                />
                <Form.Check
                  label="150 - 200"
                  type="radio"
                  id="price-150-200"
                  value="150-200"
                  checked={priceRange === "150-200"}
                  onChange={handlePriceRangeChange}
                />
                <Form.Check
                  label="+200"
                  type="radio"
                  id="price-200-plus"
                  value="200-plus"
                  checked={priceRange === "200-plus"}
                  onChange={handlePriceRangeChange}
                />
              </div>
            </div>
            <div className="mb-3">
              <Form.Label className="head">Sort by Price:</Form.Label>
              <div className="radio-group">
                <Form.Check
                  label="Low to High"
                  type="radio"
                  id="sort-price-low-high"
                  value="price-low-high"
                  checked={sortBy === "price-low-high"}
                  onChange={handleSortChange}
                />
                <Form.Check
                  label="High to Low"
                  type="radio"
                  id="sort-price-high-low"
                  value="price-high-low"
                  checked={sortBy === "price-high-low"}
                  onChange={handleSortChange}
                />
              </div>
            </div>
            <div className="mb-3">
              <Form.Label className="head">Sort by Name:</Form.Label>
              <div className="radio-group">
                <Form.Check
                  label="A to Z"
                  type="radio"
                  id="sort-name-ascending"
                  value="name-ascending"
                  checked={sortByName === "name-ascending"}
                  onChange={handleSortByNameChange}
                />
                <Form.Check
                  label="Z to A"
                  type="radio"
                  id="sort-name-descending"
                  value="name-descending"
                  checked={sortByName === "name-descending"}
                  onChange={handleSortByNameChange}
                />
              </div>
            </div>
          </Col>
        </Row>
        {/* </div> */}
      </Container>
      <Footer />
    </div>
  );
}

export default Catalog;
