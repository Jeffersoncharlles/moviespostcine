import React from 'react';


import {
    Container,
    BackButton,
    Name,
    Closed,
    Navegador
} from './styles';

interface ModalProps{
    link:string;
    title:string;
    closeModal():void
}

export const ModalLink = ({link,title,closeModal}:ModalProps) => {

    return(
        <>
            <BackButton onPress={closeModal}>
                <Closed name="x"/>
                <Name numberOfLines={1}>{title}</Name>
            </BackButton>

            <Navegador 
                source={{uri:link}}
            />
        </>
    );
}