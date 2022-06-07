import { Row, Col } from "rsuite";

export const Photo = (props) => {
  return (
    <Row>
      {props.photos.map((photo) => {
        return (
          <Col md={4} >
            <img
              key={photo.id}
              src={photo.URL}
              alt={photo.name}
              onClick={() => props.setOpenModal(true)}
              
            />
          </Col>
        );
      })}
    </Row>
  );
};