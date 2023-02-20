import Card from 'react-bootstrap/Card';

function TextCard(props) {
    return (
        <Card className="shadow" style={{ width: props.width }} >

            <Card.Body>
                <Card.Text style={{ fontSize: "50px" }}>
                    {props.body}</Card.Text>
                <Card.Text>{props.title}</Card.Text>



            </Card.Body>
        </Card>
    );
}

export default TextCard;