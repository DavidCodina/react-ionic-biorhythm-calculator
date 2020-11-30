import React, { useState } from 'react';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/react';
import dayjs from 'dayjs';
import { birthDate, calculateBiorhythms } from '../calculations';
import BiorhythmChart from './BiorhythmChart';
import './BiorhythmCard.css';


function formatDate(iso_string){
  return dayjs(iso_string).format('MMMM D, YYYY');
}


/* =============================================================================

============================================================================= */


function BiorhythmCard(props){
  const { birthDate, targetDate } = props;
  const formattedDate = formatDate(targetDate);
  const { physical, emotional, intellectual } = calculateBiorhythms(birthDate, targetDate);


  return (
    <IonCard className="biorhythm-card">
      <IonCardHeader>
        <IonCardTitle className="ion-text-center fancy-h4">{ formattedDate }</IonCardTitle>
      </IonCardHeader>

      <IonCardContent>
        <BiorhythmChart birthDate={birthDate} targetDate={targetDate} />
        <p className="text-physical      ion-text-center">Physical:     { (birthDate && targetDate) ? physical.toFixed(4)     : "-" }</p>
        <p className="text-emotional     ion-text-center">Emotional:    { (birthDate && targetDate) ? emotional.toFixed(4)    : "-" }</p>
        <p className="text-intellectual  ion-text-center">Intellectual: { (birthDate && targetDate) ? intellectual.toFixed(4) : "-" }</p>
      </IonCardContent>
    </IonCard>
  );
}


export default BiorhythmCard;
