import React from 'react';
import Card from 'react-bootstrap/Card';

function Home() {
  return (
    <Card className="text-center" style={{backgroundColor: "white"}}>
      <Card.Header>Your Bank</Card.Header>
      <Card.Body>
        <Card.Title>Welcome to Your Bank</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        {/* <Button variant="primary" disabled="true">Go somewhere</Button> */}
      </Card.Body>
      <Card.Footer className="text-muted">Have a nice day..!!</Card.Footer>
    </Card>

     
  );
}

export default Home;



