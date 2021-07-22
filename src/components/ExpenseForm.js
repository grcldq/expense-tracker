import React, { useState } from 'react';
import { formConstants } from '../constants/form';

// react-bootstrap
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// react-nice-dates
import { enGB } from 'date-fns/locale';
import { DatePicker } from 'react-nice-dates';
import 'react-nice-dates/build/style.css';

function ExpenseForm(props) {
  const [date, setDate] = useState(new Date());

  return (
    <Form onSubmit={props.handleSubmit}>
      <Form.Group as={Row} className='mb-3' controlId='date'>
        <Form.Label>Date</Form.Label>
        <DatePicker date={date} onDateChange={setDate} locale={enGB} format='MMM dd, yyyy'>
          {({ inputProps }) => (
            <Form.Control
              type='text'
              style={{ width: '83%' }}
              required
              {...inputProps}
            />
          )}
        </DatePicker>
      </Form.Group>
      {formConstants.map((form) => (
        <Form.Group as={Row} className='mb-3' controlId={form.id} key={form.id}>
          <Form.Label>{form.label}</Form.Label>
          <Col sm={10}>
            {form.type === 'select' ? (
              <Form.Select defaultValue=''>
                <option value=''>-</option>
                {form.options.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.label}
                  </option>
                ))}
              </Form.Select>
            ) : (
              <Form.Control
                step={form.type === 'number' ? '0.01' : ''}
                type={form.type}
                placeholder={form.placeholder}
                required={form.required}
              />
            )}
          </Col>
        </Form.Group>
      ))}
      <Button
        type='submit'
        style={{
          backgroundColor: '#3c6e71',
          borderColor: '#3c6e71',
          marginTop: '1rem',
        }}>
        Submit
      </Button>
    </Form>
  );
}

export default ExpenseForm;
