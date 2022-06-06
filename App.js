import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

export default function App (){

  const [sexo, setSexo] = useState ('Unknown')
  const [limite, setLimite] = useState (0)
  


  return (
<View style={styles.container}>

  <View style={styles.containerBanco}>

  <Text style={styles.textoBanco}>Banco Sujeito</Text>

  </View>
  

  <View style={styles.background}>
    
    <View
      style={{

        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'

      }}   
    >

      <Text style={{fontSize: 18, fontWeight: '400', marginTop: 40, marginLeft: 10, fontSize: 15, color: 'black', fontWeight:'bold'}}>Nome: </Text>
      <TextInput 
      
        style={{

          flex:1,
          height:35,
          backgroundColor:'white',
          color: 'black',
          marginLeft: 10,
          marginRight: 15,
          borderRadius: 8,
          paddingHorizontal: 10,
          marginTop: 40,
          fontSize: 13,
          fontWeight:'bold'
        }}
      />


    </View>

    <View
      style={{

        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'

      }}   
    >

      <Text style={{fontSize: 18, fontWeight: '400', marginTop: 20, marginLeft: 10, fontSize: 15, color: 'black', fontWeight:'bold'}}>Email:  </Text>
      <TextInput 
      
        style={{

          flex:1,
          height:35,
          backgroundColor:'white',
          color: 'black',
          marginLeft: 10,
          marginRight: 15,
          borderRadius: 8,
          paddingHorizontal: 10,
          marginTop: 20,
          fontSize: 13,
          fontWeight:'bold'
        }}
      />


    </View>

    <View
      style={{

        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'

      }}   
    >

      <Text style={{fontSize: 18, fontWeight: '400', marginTop: 20, marginLeft: 10, fontSize: 15, color: 'black', fontWeight:'bold'}}>Senha: </Text>
      <TextInput 
      
        style={{

          flex:1,
          height:35,
          backgroundColor:'white',
          color: 'black',
          marginLeft: 10,
          marginRight: 15,
          borderRadius: 8,
          paddingHorizontal: 10,
          marginTop: 20,
          fontSize: 13,
          fontWeight: 'bold'
        }}

        returnKeyType='go'
        secureTextEntry
        autoCorrect={false}
        
        
        

      />


    </View>

    <View
      style={{

        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'

      }}   
    >

      <Text style={{fontSize: 18, fontWeight: '400', marginTop: 20, marginLeft: 10, fontSize: 15, color: 'black', fontWeight:'bold'}}>Idade:  </Text>
      <TextInput 
      
        style={{

          flex:1,
          height:35,
          backgroundColor:'white',
          color: 'black',
          marginLeft: 10,
          marginRight: 275,
          borderRadius: 8,
          paddingHorizontal: 10,
          marginTop: 20,
          fontSize: 13,
          fontWeight: 'bold'
        }}

        returnKeyType='go'
        
        autoCorrect={false}
        
        
        

      />


    </View>

    <View
      style={{

        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'

      }}   
    >

<Text style={styles.text}>Sexo: </Text>
      <Picker
        selectedValue={sexo}
        onValueChange={(value, index) => setSexo(value)}
        mode="dropdown"
        style={styles.picker}
      >
        <Picker.Item label="Selecione seu Sexo" value="Unknown" />
        <Picker.Item label="Masculino" value="Masculino" />
        <Picker.Item label="Feminino" value="Feminino" />
        
      </Picker>
      


    </View>

    <View
      style={{

        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'

      }}   
    >
      <Text style={{fontSize: 18, fontWeight: '400', marginTop: 15, marginLeft: 10, fontSize: 15, color: 'black', fontWeight:'bold'}}>Seu limite: </Text>

    <Slider style={styles.picker}
    
    minimumValue={0}
    maximumValue={3000}
    value={limite}
    onValueChange={ (limiteSelecionado) => setLimite (limiteSelecionado) }
    maximumTrackTintColor='black'
    minimumTrackTintColor='green'
    thumbTintColor='black'
    
    />   

    </View>

    <View>

    <Text style={{textAlign:'center', fontSize:15, marginTop:-10}}>R$: {limite.toFixed(0)} </Text>

    </View>

    <View  
    
    
    style={{

      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center'

    }}
      >

        <TouchableOpacity style={{
          
          alignItems: 'center',
          flex:1,
          shadowOffset: {width:2, height:2},
          shadowOpacity: 0.25,
          shadowRadius: 3.5,
          backgroundColor:'black',
          color: 'black',
          borderRadius: 1000,
          paddingHorizontal: 50,
          paddingVertical: 20,
          marginLeft: 80,
          marginRight: 80,
          marginTop: 60,
          fontSize: 20,
          fontWeight: 'bold',
          shadowColor: 'white'
          }}>

            <Text style={styles.buttonText}> ABRIR CONTA </Text>


        </TouchableOpacity>
      
      </View>


        

  </View>
  
 
</View>
  )
};

const styles = StyleSheet.create ({

container: {

  backgroundColor: 'black',
  flex:1

},


containerBanco: {
  
  backgroundColor:'#149CDC',
  height: 75,
  justifyContent:'center',
  borderRadius: 10,
  marginTop: 4
  
  
},

textoBanco: {

color: 'white',
fontSize: 22,
textAlign: 'center',
fontWeight: 'bold'

},

background: {

backgroundColor:'#149CDC',
borderRadius: 10,
height: '80%',
margin:15


},

text: {
  fontSize: 18, 
  fontWeight: '400',
  marginTop: 20,
  marginLeft: 10,
  fontSize: 15,
  color: 'black',
  fontWeight:'bold'
},
picker: {
  marginLeft: 15,
  marginRight: 10,
  marginTop: 15,
  width: 217,
  padding: 10,
  
},

buttonText: {

 color:'white',
 fontWeight: 'bold',
 fontSize: 15


}


})