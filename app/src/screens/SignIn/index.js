import React from 'react';
import { Text } from 'react';
import {
     Container,
     InputArea,
     CustomButton,
     CustomButtonText,
     SignMessageButton,
     SignMessageButtonTextBold

     } from './styles';

import BarberLogo from '../../assets/barber.svg'


export default() => {

   return(
      <Container>
        < BarberLogo width= "100%" heigth="160" />

     <InputArea>
           
           
           <CustomButton>
             <CustomButtonText> LOGIN </CustomButtonText>
           </CustomButton>
         

         <SignMessageButton>
            <SignMessageButtonText> Você não possui Cadastro? </SignMessageButtonText>
            <SignMessageButtonTextBold> Cadastre-se </SignMessageButtonTextBold>
         </SignMessageButton>

       
     </InputArea>
      </Container>
    );
}
