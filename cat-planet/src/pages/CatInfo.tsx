import { Card, CardContent, Grid, Typography } from "@mui/material";

const CatInfo = ({ info }) => {
  return (
    <Grid size={2}>
      <Card>
        <CardContent sx={{ width: "150px", height: "100%" }}>
          <Typography variant="h5" component="div">
            {info.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {info.origin}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};
export default CatInfo;
