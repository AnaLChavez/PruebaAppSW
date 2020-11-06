import React from 'react';
import { StyleSheet, Text, View } from 'react-native'; 
import { Container, Header, Content, Card, CardItem, Body, Button,Item, Label, Input, Icon} from "native-base";

class Login extends Content{
  render() {
    return (
      <Container>
        <Header />
        <Content padder contentContainerStyle = {misEstilos.content}>
          <Card>
            <CardItem header bordered>
             <Text style= {misEstilos.textCenter}>Inicio de sesión</Text>
            </CardItem>
            <CardItem bordered>
              <Body style = {misEstilos.body}>
                <Item inlineLabel>
                <Icon type= 'FontAwesome' name= 'user'></Icon>
                  <Input placeholder= 'Nombre de usuraio'/>
                </Item>
                <Item inlineLabel last>
                <Icon type= 'FontAwesome' name= 'lock'></Icon>
                  <Input placeholder= 'Contraseña'/>
                </Item>
              </Body>
            </CardItem>
            <CardItem footer bordered>
              <Button primary style ={misEstilos.button}><Text> Ingresar</Text></Button>
            </CardItem>
          </Card>
        </Content>
      </Container>

    
      
    );
  }
}
const misEstilos = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  textCenter:{
    textAlign: 'center',
    width: '100%',
  },
  button: {
    marginLeft: '35%',
  },
  body: {
    paddingVertical: 35,
  }
});
export default Login;