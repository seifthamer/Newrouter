import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import StarRatingComponent from 'react-star-rating-component';


function MovieCard({e,deleteMovie}) {
    

  return (
    <div >
        <Card style={{ width: '18rem' }}>
    <Link to={`/Description/${e.id}`} ><Card.Img  variant="top" src= {e.Image}  /></Link>
    <Card.Body>
      <Card.Title>{e.Title}</Card.Title>
     <p>The Best Serie</p>
      <Button variant="primary" onClick={()=>deleteMovie(e.id)}>Delete</Button>
    </Card.Body>
    <StarRatingComponent 
          name="rate2" 
          editing={false}
          value={e.Rate}
        />
  </Card>
  </div>
  )
}

export default MovieCard