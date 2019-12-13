import React from 'react';

import { Link } from 'react-router-dom';
import { MdAdd } from 'react-icons/md';
import { Container, Card, Title, Actions } from './styles';

export default function Message() {
  return (
    <Container>
      <Title>
        Messages list
        <Actions>
          <Link to="/">
            <button type="button">
              <MdAdd size="20" color="#fff" />
              Add message
            </button>
          </Link>
        </Actions>
      </Title>
      <Card>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>User</th>
              <th>Message</th>
              <th>Numbers</th>
              <th>Data</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="10" style={{ textAlign: 'center' }}>
                No records found...
              </td>
            </tr>
          </tbody>
        </table>
      </Card>
      <Title>
        Numbers list
        <Actions>
          <Link to="/">
            <button type="button">
              <MdAdd size="20" color="#fff" /> Add number
            </button>
          </Link>
        </Actions>
      </Title>
      <Card>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>User</th>
              <th>Numbers</th>
              <th>Message</th>
              <th>Data</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="10" style={{ textAlign: 'center' }}>
                No records found...
              </td>
            </tr>
          </tbody>
        </table>
      </Card>
    </Container>
  );
}
