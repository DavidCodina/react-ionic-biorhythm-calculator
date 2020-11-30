import { setupConfig } from '@ionic/react';
import React    from 'react';
import ReactDOM from 'react-dom';
import App      from './App';

//core.css is always required in order to use any Ionic component.
import '@ionic/react/css/core.css';

//For a full Ionic app (i.e., one that will be used for mobile), we will need additional styles.
//Basic CSS for apps built with Ionic
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
//
// //Optional CSS utils that can be commented out.
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

//import custom theming
import './theme/variables.css';

//import custom stylesheets
import './css/main.css';
import './css/utilities.css';


//Normally only used for testing.
//setupConfig({ mode: 'ios' });


ReactDOM.render(<App />, document.getElementById('root'));
