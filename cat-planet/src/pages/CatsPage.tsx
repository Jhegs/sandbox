import { ImageList, ImageListItem } from "@mui/material";

const catsList = [
  {
    id: 1,
    name: "Arturito",
    imgURL:
      "https://cdn.shopify.com/s/files/1/0997/4496/articles/Capture_d37ce215-f0b0-4edb-b366-edbf14af3aed.PNG?v=1588962370",
  },
  {
    id: 2,
    name: "chiki",
    imgURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsK6qpQ8uda58F9Ru9Ys3zDrQkvVG-bpBSPw&s",
  },
];

const CatsPage = () => {
  return (
    <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
      {catsList.map((catData) => (
        <ImageListItem key={catData.id}>
          <img
            // srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={catData.imgURL}
            alt={catData.name}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default CatsPage;
