import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function card() {
    return (
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
            </Typography>
            <Typography variant="h5" component="div">
              short length
            </Typography>
            <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>$60</Typography>
            <Typography variant="body2">
              no added length 
              <br />
              {'no design fee'}
              {'up to 2 charms before an extra fee'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      );
}

export function PriceCard1() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
        </Typography>
        <Typography variant="h5" component="div">
          short length
        </Typography>
        <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>$60</Typography>
        <Typography variant="body2">
          no added length 
          <br />
          {bull}no design fee
          <br />
          {bull}up to 2 charms before an extra fee
        </Typography>
      </CardContent>
      <CardActions>
          <Button size="small">see examples</Button>
        </CardActions>
    </Card>
  );
}

export function PriceCard2() {
    return (
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
          </Typography>
          <Typography variant="h5" component="div">
            medium length
          </Typography>
          <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>$65</Typography>
          <Typography variant="body2">
            added length
            <br />
            {bull}no design fee
            <br />
            {bull}up to 2 charms before an extra fee
        </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">see examples</Button>
        </CardActions>
      </Card>
    );
}

export function PriceCard3() {
    return (
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            long length
          </Typography>
          <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>$70</Typography>
          <Typography variant="body2">
            extra added length
            <br />
            {bull}no design fee
            <br />
            {bull}up to 2 charms before an extra fee
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">see examples</Button>
        </CardActions>
      </Card>
    );
}

export function PriceCard4() {
    return (
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            builder gel
          </Typography>
          <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>$45</Typography>
          <Typography variant="body2">
            gel polish and no added length
            <br />
            {bull}no design fee
            <br />
            {bull}up to 2 charms before an extra fee
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">see examples</Button>
        </CardActions>
      </Card>
    );
  }