import { Container, Grid, Paper, Rating, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';

const AllReview = () => {

    const [reviews, setReviews] = useState([]);
    // fetch all reviews with ratting
    useEffect(() => {
        fetch('https://nameless-journey-27300.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);
    return (
        <Container>
            <Box>
                <Typography variant="h5" gutterBottom component="div" sx={{ textAlign: 'center', fontWeight: 'bold' }} style={{ marginTop: '60px', marginBottom: '40px' }}>
                    Our Reviews
                </Typography>
                <Grid container spacing={2}>
                    {
                        reviews.map(review => (
                            <Grid item xs={12} md={4} key={review._id}>
                                <Paper elevation={3} sx={{ p: 2 }}>
                                    <Typography variant="h4" gutterBottom component="div">
                                        {review.reviewer}
                                    </Typography>
                                    <Typography variant="h6" gutterBottom component="div">
                                        {review.designation}
                                    </Typography>
                                    <Typography variant="body1" gutterBottom >
                                        {review.reviewDesc}
                                    </Typography>
                                    <Rating name="half-rating" defaultValue={Number(review.ratting)} precision={0.5} />
                                    <Typography>{review.ratting}</Typography>
                                </Paper>
                            </Grid>
                        ))
                    }
                </Grid>
            </Box>
        </Container>
    );
};

export default AllReview;