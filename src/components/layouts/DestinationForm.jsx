import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { useDispatch, useSelector } from 'react-redux';
import { submitForm } from '../../store/slices/destinationSlice';
import { Form, Card, Button } from 'react-bootstrap';
import './destinationForm.style.css'; // import the CSS file

const validate = values => {
  const errors = {};
  if (!values.destination) {
    errors.destination = 'Required';
  }
  if (!values.duration) {
    errors.duration = 'Required';
  }
  return errors;
};

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <Form.Group controlId={input.name} className={touched && error ? 'form-group has-error' : 'form-group'}>
    <Form.Label className="form-label">{label}</Form.Label>
    <Form.Control className={`form-control ${touched && error ? 'form-control-danger' : ''}`} {...input} type={type} />
    {touched && error && <span className="form-error">{error}</span>}
  </Form.Group>
);

const DestinationForm = ({ handleSubmit, submitting, pristine }) => {
  const dispatch = useDispatch();
  const { loading, tips, error: tipsError } = useSelector((state) => state.travelTips);
  const { isLoading, itinerary, error: itineraryError } = useSelector((state) => state.travelItinerary);

  const submit = values => {
    dispatch(submitForm(values));
  };

  return (
    <>
      <Form className="form-container" onSubmit={handleSubmit(submit)}>
        <Field name="destination" component={renderField} label="Destination Name" type="text" />
        <Field name="duration" component={renderField} label="Duration of Stay (Days)" type="text" />
        <Button className="btn-submit" type="submit" disabled={submitting || pristine}>Submit</Button>
      </Form>

      <Card border="info">
        <Card.Header as="h6">ITINERARY</Card.Header>
        <Card.Body>
          <Card.Text>
            {isLoading && <p>Loading itinerary...</p>}
            {itinerary && <p>{itinerary}</p>}
            {itineraryError && <p>{itineraryError}</p>}
          </Card.Text>
        </Card.Body>
      </Card>

      <br />
      <Card border="warning">
        <Card.Header as="h6">TRAVEL TIPS</Card.Header>
        <Card.Body>
          <Card.Text>
            {loading && <p>Loading tips...</p>}
            {tips && <p>{tips}</p>}
            {tipsError && <p>{tipsError}</p>}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default reduxForm({
  form: 'destinationForm',
  validate,
  enableReinitialize: true // enable form values to be updated
})(DestinationForm);
