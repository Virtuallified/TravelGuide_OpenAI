import React from 'react';
import { Container, Row, Col, Card, Spinner } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { FcHighPriority } from "react-icons/fc";
import moment from 'moment';

const WeatherWidget = () => {
  const forecast = useSelector((state) => state.weatherForecast.forecast);
  const isLoading = useSelector((state) => state.weatherForecast.isLoading);
  const error = useSelector((state) => state.weatherForecast.error);

  const dailyForecast = {};
  forecast.forEach((reading) => {
    const date = moment(reading.date).format('YYYY-MM-DD');
    if (!dailyForecast[date]) {
      dailyForecast[date] = reading;
    }
  });
  const dailyForecastData = Object.values(dailyForecast);

  return (
    <Container>
      {isLoading && <p><Spinner animation="border" variant="info" /> Loading...</p>}
      {error && <p>Error: <FcHighPriority className="h5" /> {error}</p>}
      {dailyForecastData.length > 0 && (
        <Row>
          {dailyForecastData.map((reading) => (
            <Col key={reading.date}>
              <Card className='my-3'>
                <Card.Body>
                  <Card.Title>{moment(reading.date).format('dddd, MMMM D')}</Card.Title>
                  <Card.Text>
                    Temperature: {reading.temperature}&deg;C / {Math.round(reading.temperature * 1.8 + 32)}&deg;F<br />
                    Description: {reading.description}
                  </Card.Text>
                  <Card.Img
                    style={{ width: '40%' }}
                    variant='bottom'
                    src={`https://openweathermap.org/img/w/${reading.icon}.png`}
                    alt={reading.description}
                  />
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default WeatherWidget;
