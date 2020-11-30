import React, { useState } from 'react';
import { useLocalStorage } from './hooks';


import {
  IonApp,
  IonHeader,
  IonToolbar,
  IonTitle,

  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonItem,

  IonLabel,
  IonInput,
  IonDatetime
} from '@ionic/react';

import BiorhythmCard from './components/BiorhythmCard';


/* =============================================================================

============================================================================= */


function App(){
  const [ birthDate,  setBirthDate  ] = useLocalStorage('birthDate', '');
  const [ targetDate, setTargetDate ] = useState(new Date().toISOString());


  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="fancy-h2 text-center">Biorhythms</IonTitle>
        </IonToolbar>
      </IonHeader>


      <IonContent>
        <div className="form-group" style={{ maxWidth: 500, margin: '0 auto 25px auto'}}>
          <IonLabel className="label">Target Date:</IonLabel>

          <IonDatetime
            className="form-control"
            displayFormat="D MMM YYYY"
            placeholder="Enter Target Date"
            value={targetDate}
            onIonChange={e => setTargetDate(e.detail.value)}
          />
        </div>


        <div className="form-group" style={{ maxWidth: 500, margin: '0 auto 25px auto'}}>
          <IonLabel className="label">Date of Birth:</IonLabel>

          <IonDatetime
            className="form-control"
            displayFormat="D MMM YYYY"
            placeholder="Enter Birthday"
            value={birthDate}
            onIonChange={e => setBirthDate(e.detail.value)}
          />
        </div>

        { (birthDate && targetDate) && <BiorhythmCard birthDate={birthDate} targetDate={targetDate} /> }
      </IonContent>
    </IonApp>
  );
}


export default App;
