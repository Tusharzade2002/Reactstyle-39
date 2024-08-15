import ReactDOM from 'react-dom/client';
import HelloUser  from './HelloUser';
import GoodMorning from './HelloUser'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
  <div>
  <HelloUser name="Tushar"  />
  <HelloUser name="saurabh" />
  <GoodMorning name="Krishna"/>
  </div>
);


