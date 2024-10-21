import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia'; 

export default function CustomCard({ id, title, description, moreDescription, image }) {
    const [showMore, setShowMore] = useState(false);
    const navigate = useNavigate();

    const handleLearnMore = (event) => {
        event.stopPropagation(); 
        setShowMore(!showMore);  
    };

    const handleCardClick = () => {
        navigate(`/details/${id}`);
    };

    return (
        <Card style={{ height: '100vh' }}
            sx={{
                position: 'relative',
                minWidth: 275,
                height: '100',
                marginBottom: 2,               
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                
            }}
            onClick={handleCardClick}
        >
           
            <CardMedia
                component="img"
                image={image}
                alt={title}
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    height: '100%',
                    width: '100%',
                    zIndex: 1,
                    objectFit: 'cover' 
                }}
            />
           
            <CardContent
                sx={{
                    position: 'relative',
                    zIndex: 2,
                    color: 'white',  
                    background: 'rgba(0, 0, 0, 0.5)', 
                    padding: 2
                }}
            >
                <Typography gutterBottom sx={{ fontSize: 14 }}>
                    {title}
                </Typography>
                <Typography variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2">
                    {description}
                </Typography>
                {showMore && (
                    <Typography variant="body2" sx={{ marginTop: 2 }}>
                        {moreDescription}
                    </Typography>
                )}
            </CardContent>
            <CardActions sx={{ position: 'relative', zIndex: 2 }}>
                <Button size="small" onClick={handleLearnMore} sx={{ color: 'white' }}>
                    {showMore ? 'Show Less' : 'Learn More'}
                </Button>
            </CardActions>
        </Card>
    );
}
