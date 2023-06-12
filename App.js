import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, Image, Alert } from 'react-native';

const Cadastro = () => {
  // Estados para armazenar os valores dos campos do formulário
  const [nome, setNome] = useState('');
  const [endereco, setEndereco] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [interesse, setInteresse] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');

  // Expressão regular para validação do email
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  // Função para validar o formulário
  const validarCadastro = () => {
    if (nome.trim() === '') {
      Alert.alert('Erro', 'Favor inserir um nome válido.');
      return;
    }
    if (!/^\d{11}$/.test(telefone)) {
      Alert.alert('Erro', 'Inserir um telefone válido.');
      return;
    }
    if (!emailRegex.test(email)) {
      Alert.alert('Erro', 'Digite um email válido.');
      return;
    }
    if (dataNascimento === '') {
      Alert.alert('Erro', 'Digite uma data de nascimento válida.');
      return;
    }

    const dataAtual = new Date();
    const dataNasc = new Date(dataNascimento);

    if (dataNasc >= dataAtual) {
      Alert.alert('Erro', 'Por favor, insira uma data de nascimento válida.');
      return;
    }

    console.log('Dados do cadastro:');
    console.log(`Nome: ${nome}`);
    console.log(`Endereço: ${endereco}`);
    console.log(`Telefone: ${telefone}`);
    console.log(`Email: ${email}`);
    console.log(`Interesse: ${interesse}`);
    console.log(`Data de Nascimento: ${dataNascimento}`);

    limparFormulario();
  };

  // Função para limpar o formulário
  const limparFormulario = () => {
    setNome('');
    setEndereco('');
    setTelefone('');
    setEmail('');
    setInteresse('');
    setDataNascimento('');
  };

  // Função para formatar a data no formato DD/MM/AAAA
  const formatarData = (data) => {
    let dataFormatada = data.replace(/\D/g, ''); // Remove caracteres não numéricos
    if (dataFormatada.length > 8) {
      dataFormatada = dataFormatada.substr(0, 8); // Limita a 8 caracteres (DDMMAAAA)
    }
    dataFormatada = dataFormatada.replace(/(\d{2})(\d)/, '$1/$2'); // Adiciona a barra após os dois primeiros dígitos
    dataFormatada = dataFormatada.replace(/(\d{2})(\d)/, '$1/$2'); // Adiciona a barra após os quatro primeiros dígitos
    return dataFormatada;
  };

  // Função para lidar com a alteração do campo de data de nascimento
  const handleDataNascimentoChange = (value) => {
    const formattedValue = formatarData(value);
    setDataNascimento(formattedValue);
  };

  return (
    <View style={styles.container}>
      {/* Campos do formulário */}
      <TextInput
        value={nome}
        onChangeText={setNome}
        placeholder="Nome"
        style={styles.input}
      />
      <TextInput
        value={endereco}
        onChangeText={setEndereco}
        placeholder="Endereço"
        style={styles.input}
      />
      <TextInput
        value={telefone}
        onChangeText={setTelefone}
        placeholder="Telefone"
        style={styles.input}
      />
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        style={styles.input}
      />
      <TextInput
        value={interesse}
        onChangeText={setInteresse}
        placeholder="Interesse"
        style={styles.input}
      />
      <View style={styles.dateInputContainer}>
        <TextInput
          value={dataNascimento}
          onChangeText={handleDataNascimentoChange}
          placeholder="Data de Nascimento (DDMMAAAA)"
          style={styles.dateInput}
        />
      </View>

      {/* Imagem */}
      <Image
        style={styles.image}
        source={{ uri: 'https://via.placeholder.com/200' }}
      />

      {/* Botão para enviar o formulário */}
      <Button title="Enviar" onPress={validarCadastro} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  input: {
    marginBottom: 12,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
  },
  dateInputContainer: {
    marginBottom: 12,
  },
  dateInput: {
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 12,
  },
});

export default Cadastro;
