import React, { Component } from 'react';
import {
  Image,
  Text,
  Button,
  StyleSheet,
  View
} from 'react-native';
import jokenpo from './img/jokenpo.png';
import pedra from './img/pedra.png';
import papel from './img/papel.png';
import tesoura from './img/tesoura.png';
import { bold } from 'ansi-colors';

export default class App extends Component{

  constructor(props){
    super(props);

    this.state = {  
      escolhaUsuario : '', 
      escolhaComputador : '', 
      resultado : ''
    }
  }

  computerNumber() {
    //gera número aleatório ( 0, 1, 2)
    var numAleatorio = Math.floor(Math.random() * 3);
    
    switch(numAleatorio){
      case 0: return 'pedra';
      case 1: return 'papel';
      case 2: return 'tesoura';
    }
  }
  
  jokenpo(escolhaUsuario){
    
    let escolhaComputador = this.computerNumber();
    var resultado = '';

    if(escolhaComputador == 'pedra'){
      if(escolhaUsuario == 'pedra'){
        resultado = 'Empate';
      }

      if(escolhaUsuario == 'papel'){
        resultado = 'Você ganhou';
      }

      if(escolhaUsuario == 'tesoura'){
        resultado = 'Você Perdeu';
      }
    }

    if(escolhaComputador == 'papel'){
      if(escolhaUsuario == 'papel'){
        resultado = 'Empate';
      }

      if(escolhaUsuario == 'tesoura'){
        resultado = 'Você ganhou';
      }

      if(escolhaUsuario == 'pedra'){
        resultado = 'Você Perdeu';
      }
    }

    if(escolhaComputador == 'tesoura'){
      if(escolhaUsuario == 'tesoura'){
        resultado = 'Empate';
      }

      if(escolhaUsuario == 'pedra'){
        resultado = 'Você ganhou';
      }

      if(escolhaUsuario == 'papel'){
        resultado = 'Você Perdeu';
      }
    }

    this.setState({ 
      escolhaUsuario : escolhaUsuario,
      escolhaComputador : escolhaComputador,
      resultado : resultado
    });


  }

  render(){
    return (
      <View>
        <View>
          <Image source={jokenpo} style={styles.image} />
        </View>

        <View style={styles.buttonsContainer}>
          <Button title=" pedra " style={styles.buttons} onPress={ () => { this.jokenpo('pedra')}} />
          <Button title=" papel " style={styles.buttons} onPress={ () => { this.jokenpo('papel')}} />
          <Button title="tesoura" style={styles.buttons} onPress={ () => { this.jokenpo('tesoura')}} />
        </View>

        <View style={styles.palco}>
          <Text style={styles.resultado}>{this.state.resultado}</Text>

          {!this.state.escolhaUsuario &&
            <Text style={styles.info}>Escolha uma das opções acima</Text>
          }

          <Icone escolha={this.state.escolhaComputador} jogador='Computador' />
          <Icone escolha={this.state.escolhaUsuario} jogador='Você' />         
          
        </View>
      </View>
    );
  }
}

class Icone extends Component {
  render() {
    const { escolha, jogador } = this.props;
    return (
      <View style={styles.containerResult}>
        {
          escolha != '' &&
            <Text style={styles.textWinner}>{jogador}</Text>
        }
        {
          escolha == 'tesoura' && 
            <Image source={require('./img/tesoura.png')} />
        }
        {
          escolha == 'pedra' &&
            <Image source={require('./img/pedra.png')} />
        }
        {
          escolha == 'papel' &&
            <Image source={require('./img/papel.png')} />
        }
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: 'auto'
  },
  buttonsContainer: {
    width: 'auto',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 20
  },
  palco: {
    alignItems: 'center'
  },
  resultado: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'red',
    height: 60
  },
  textWinner: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 20
  },
  containerResult: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  info: {
    fontSize: 22,
    color: 'blue',
    fontWeight: 'bold',
  }
});
