import React, { Component } from 'react';
import {
  Image,
  Text,
  StyleSheet,
  View
} from 'react-native';

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
            <Image source={require('../../img/tesoura.png')} />
        }
        {
          escolha == 'pedra' &&
            <Image source={require('../../img/pedra.png')} />
        }
        {
          escolha == 'papel' &&
            <Image source={require('../../img/papel.png')} />
        }
      
      </View>
    );
  }
}

export default Icone;


const styles = StyleSheet.create({
  textWinner: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 20
  },
  containerResult: {
    alignItems: 'center',
    justifyContent: 'center'
  },
});
