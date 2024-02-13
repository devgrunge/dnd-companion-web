import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Divider,
  Grid,
  Skeleton,
  Typography,
} from "@mui/material";

export const SkeletonCard: React.FC = () => (
  <Card sx={{ maxWidth: "100%" }}>
    <CardActionArea>
      <Skeleton variant="rectangular" height={140} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <Skeleton />
        </Typography>
        <Grid container spacing={2} columns={{ xs: 12, sm: 12, md: 12 }}></Grid>
        <Divider sx={{ width: "100%", marginTop: 2, marginBottom: 2 }} />
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button size="small" color="primary" disabled>
        Edit Character
      </Button>
    </CardActions>
  </Card>
);
