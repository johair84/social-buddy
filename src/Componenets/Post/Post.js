import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles({
  root: {
    maxWidth: 500,
  },
  media: {
    height: 140,
  },
});

const Post = (props) => {
    const {title, id} = props.post;
    const classes = useStyles();
    return (
            
            <Card className={classes.root}>
                <CardActionArea >
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                        {title}
                        </Typography>  
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Link to ={`/post/${id}`}>
                    <Button size="small" color="primary">
                        See More
                    </Button>
                    </Link>
                </CardActions>
            </Card>
            
        
    );
};

export default Post;