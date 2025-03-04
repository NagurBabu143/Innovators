
import { Box, Button, Card, CardContent, CardMedia, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const carditems = [
  { id: 1, image: "/images/hp.jpeg", name: "Hp Laptop", prize: "₹44,500", rating: "⭐⭐⭐⭐⭐" },
  { id: 2, image: "/images/moto.jpg", name: "Moto Fusion 50", prize: "₹38,500", rating: "⭐⭐⭐⭐" },
  { id: 3, image: "/images/winterwear.jpg", name: "Snitch New Gen", prize: "₹2,500", rating: "⭐⭐" },
  { id: 4, image: "/images/Fashion.jpg", name: "Fashion Branded new suit", prize: "₹9,500", rating: "⭐⭐⭐" }
];

function Productcard() {
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);

  const handleAddToCart = (item) => {
    setCart([...cart, item]);
    alert(`${item.name} added to cart!`);
  };

  const filtereditem = carditems.filter((carditem) =>
    carditem.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box sx={{ textAlign: "center", padding: "20px", backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
     
      <Typography variant="h5" sx={{ fontWeight: "bold", padding: "10px", marginBottom: "20px", color: "#333" }}>
        Product Search using Material UI
      </Typography>


      <TextField
        label ="Product Search"
        variant="outlined"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        sx={{
          width: "30%",
        //   padding: "8px",
          marginBottom: "20px",
          backgroundColor: "white",
          borderRadius: "5px",
          input: { fontWeight: "bold" },
          label:{ fontSize:"18px"}, fontWeight:"bold"
           
          

        }}
      />


      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px", paddingTop: "20px" }}>
        {filtereditem.length > 0 ? (
          filtereditem.map((item) => (
            <Card
              key={item.id}
              sx={{
                width: "280px",
                backgroundColor: "white",
                borderRadius: "10px",
                boxShadow: "2px 4px 10px rgba(0, 0, 0, 0.2)",
                padding: "10px",
                textAlign: "center"
              }}
            >
       
              <CardMedia
                component="img"
                image={item.image}
                alt={item.name}
                sx={{
                  borderRadius: "10px",
                  width: "100%",
                  height: "220px",
                  objectFit: "cover"
                }}
              />


              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "bold", color: "#333" }}>
                  {item.name}
                </Typography>

                <Typography variant="body1" sx={{ fontWeight: "bold", color: "green", padding: "5px" }}>
                  {item.prize}
                </Typography>

                <Typography variant="body2" sx={{ color: "#555", marginBottom: "10px" }}>
                  {item.rating}
                </Typography>

                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    width: "100%",
                    fontWeight: "bold",
                    borderRadius: "5px",
                    padding: "8px",
                    backgroundColor: "#1976d2",
                    "&:hover": { backgroundColor: "#1565c0" }
                  }}
                  onClick={() => handleAddToCart(item)}
                >
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))
        ) : (
          <Typography sx={{ color: "red", fontWeight: "bold" }}>No products found</Typography>
        )}
      </Box>
    </Box>
  );
}

export default Productcard;
