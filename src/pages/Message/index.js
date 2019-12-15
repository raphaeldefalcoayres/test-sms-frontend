import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdAdd } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';
import { Container, Card, Title, RowForm, RowTable } from './styles';
import api from '~/services/api';

import { createMessageRequest } from '~/store/modules/message/actions';
import { createNumberRequest } from '~/store/modules/number/actions';

export default function Message() {
  const dispatch = useDispatch();
  const inputMessage = useSelector(state => state.message);
  const inputNumber = useSelector(state => state.number);
  const [messages, setMessages] = useState([]);
  const [numbers, setNumbers] = useState([]);

  async function loadMessages() {
    const response = await api.get('messages');
    setMessages(response.data);
  }

  async function loadNumbers() {
    const response = await api.get('numbers');
    setNumbers(response.data);
  }

  function handleSubmitMessage({ message }, { resetForm }) {
    dispatch(createMessageRequest(message));
    resetForm({ message: '' });
  }

  function handleSubmitNumber({ number }, { resetForm }) {
    dispatch(createNumberRequest(number));
    resetForm({ number: '' });
  }

  useEffect(() => {
    loadMessages();
  }, [inputMessage]);

  useEffect(() => {
    loadNumbers();
  }, [inputNumber]);

  return (
    <Container>
      <Title>Lista de mensagens SMS ({messages.length})</Title>
      <Card>
        <RowForm>
          <Form onSubmit={handleSubmitMessage}>
            <Input
              name="message"
              placeholder="Adicione uma mensagem para converter em números de SMS..."
            />

            <button type="submit">
              <MdAdd size="20" color="#fff" />
              Adicionar mensagem
            </button>
          </Form>
        </RowForm>
        <RowTable>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>IP Usuário</th>
                <th>Mensagem</th>
                <th>Números</th>
                <th>Data</th>
              </tr>
            </thead>
            <tbody>
              {messages.length === 0 ? (
                <tr>
                  <td colSpan="10">Nenhum registro encontrado...</td>
                </tr>
              ) : (
                messages.map((message, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{message.user}</td>
                    <td>{message.content}</td>
                    <td>{message.numbers}</td>
                    <td>{message.createdAt}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </RowTable>
      </Card>
      <Title>Lista de números SMS ({messages.length})</Title>
      <Card>
        <RowForm>
          <Form onSubmit={handleSubmitNumber}>
            <Input
              name="number"
              placeholder="Adicione os números para converter em uma mensagem de SMS..."
            />

            <button type="submit">
              <MdAdd size="20" color="#fff" />
              Adicionar números
            </button>
          </Form>
        </RowForm>
        <RowTable>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>IP Usuário</th>
                <th>Números</th>
                <th>Mensagem</th>
                <th>Data</th>
              </tr>
            </thead>
            <tbody>
              {numbers.length === 0 ? (
                <tr>
                  <td colSpan="10">Nenhum registro encontrado...</td>
                </tr>
              ) : (
                numbers.map((number, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{number.user}</td>
                    <td>{number.content}</td>
                    <td>{number.message}</td>
                    <td>{number.createdAt}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </RowTable>
      </Card>
    </Container>
  );
}
