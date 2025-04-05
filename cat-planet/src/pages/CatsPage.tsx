import { Container, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import CatInfo from "./CatInfo";

const API_URL = "http://api.thecatapi.com/v1/breeds";

const CatsPage = () => {
  const [catsList, setCatList] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setCatList(data);
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
          <CatInfo info={catData} />
        ))}
      </Grid>
    </Container>
  );
};

export default CatsPage;
