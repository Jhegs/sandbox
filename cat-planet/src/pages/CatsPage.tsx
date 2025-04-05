import { Card, CardContent, Container, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const API_URL = "http://api.thecatapi.com/v1/breeds";
// const API_URL = "https://api.thecatapi.com/v1/images/search";

// const catsList_OLD = [
//   {
//     id: 1,
//     name: "Arturito",
//     imgURL:
//       "https://cdn.shopify.com/s/files/1/0997/4496/articles/Capture_d37ce215-f0b0-4edb-b366-edbf14af3aed.PNG?v=1588962370",
//   },
//   {
//     id: 2,
//     name: "chiki",
//     imgURL:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsK6qpQ8uda58F9Ru9Ys3zDrQkvVG-bpBSPw&s",
//   },
// ];

const CatsPage = () => {
  const [catsList, setCatList] = useState([]);

  // Fetching data from the API
  useEffect(() => {
    const getCats = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setCatList(data);
        console.log("Cats data:", data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getCats();
  }, []);

  return (
    <Container sx={{ padding: "20px", width: "100%" }}>
      <Grid container spacing={2}>
        {catsList.map((catData) => (
          <Grid size={2}>
            <Card>
              <CardContent sx={{ width: "150px", height: "100%" }}>
                <Typography variant="h5" component="div">
                  {catData.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {catData.origin}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CatsPage;
