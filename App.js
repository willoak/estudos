import React, {Fragment, Component} from 'react';
import {StyleSheet,View,Text,TextInput,Button, Image} from 'react-native';
import { bold } from 'ansi-colors';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      inputTexto:'',
      texto:'',
      novoTexto:'',
      texto1:'',
      texto2: '',
    }
    this.mudarTexto = this.mudarTexto.bind(this);
    this.apertou = this.apertou.bind(this);
    this.escrever = this.escrever.bind(this);

  }

  mudarTexto(t){
    let s = this.state;
    if(t.length > 0) {
      s.texto = 'Olá, ' + t;
    } else {
      s.texto = '';
    }
    this.setState(s);
  }

  apertou(){
    let ss = this.state;
    if(ss.inputTexto == 'Willian'){
      ss.novoTexto = 'Você descobriu o nome secreto';
    } else {
      ss.novoTexto = 'Tente novamente';
    }
    this.setState(ss);
  }

  mudarVogais(texto){
    let novo = texto.toLowerCase();
    novo = novo.replace(/(a|e|i|o|u)/g,'i');
    novo = novo.replace(/(á|à|ã|â)/g,'i');
    novo = novo.replace(/(é|ê|ê)/g,'i');
    novo = novo.replace(/(í|ì)/g,'i');
    novo = novo.replace(/(ú|ù|û)/g,'i');
    novo = novo.replace(/(ó|ò|ô)/g,'i');
    return novo;
  }

  escrever(t){
    let e = this.state;
    e.texto1 = t;
    e.texto2 = this.mudarVogais(t);
    this.setState(e);
  }

  render() {
    return (
      <Fragment>
        <View style={{padding: 40}}>
          <Text>Mostrar texto digitado</Text>
          <TextInput 
            autoCapitalize='none'
            autoCorrect={false}
            style={styles.input} 
            placeholder='Digite seu nome' 
            onChangeText={this.mudarTexto} 
          />
          <Text style={styles.campoTexto}>{this.state.texto}</Text>

        <Text>Acao com botao</Text>
        <TextInput 
          autoCapitalize='none'
          autoCorrect={false}
          style={styles.input} 
          placeholder='Adivinhe o nome' 
          onChangeText={( inputTexto ) => this.setState({inputTexto})}
        />
        <Button style={styles.btn} title='Acerte o nome' onPress={this.apertou}/>
        <Text style={styles.campoTexto}>{this.state.novoTexto}</Text>
      </View>

      <View>
      <TextInput 
          autoCapitalize='none'
          autoCorrect={false}
          style={styles.input} 
          placeholder='Digite seu mimimi' 
          onChangeText={this.escrever}
        />
        <Text style={[styles.textos,styles.texto1]}>{this.state.texto1}</Text>
        <Image style={styles.guri} source={require('./images/mimimi.jpg')} />
        <Text style={[styles.textos,styles.texto2]}>{this.state.texto2}</Text>
      </View>

    </Fragment>
    );

  }
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#cccccc',
    height: 40,
    padding: 5,
    marginTop: 10,
  },
  campoTexto: {
    fontSize: 20,
    padding:10,
    textAlign: 'center',
    color: 'green',
  },
  btn: {
    backgroundColor: 'green',
    color: '#ffffff',
  },
  guri: {
    width: 400,
    height:300,
    marginTop: -70,
    zIndex: 0
  },
  textos: {
    textAlign: 'center',
    fontSize: 20,
    textTransform: 'uppercase',
    height: 70,
    padding: 10,
    color: 'white',
    fontWeight: 'bold',
  },
  texto1:{
    zIndex: 1
  },
  texto2: {
    marginTop: -70
  }
});

