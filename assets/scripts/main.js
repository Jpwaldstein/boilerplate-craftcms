//Import Libraries
import Vue from 'vue';

// Import custom modules
import App from'./modules/app.js';

// Import custom components
//import ExampleComponent from './components/ExampleComponent.vue';


//Initiate Classes Here
const app = new App();


// Run Class Based Scripts Here
function run() {

  app.init();
  app.hamburger(".js-hamburger");

  // const exampleComponent = new Vue({ 
  //     el: '#ExampleComponent',
  //     components: {
  //       ExampleComponent
  //     }
  // });

}


// in case the document is already rendered
if (document.readyState!='loading') run();
// modern browsers
else if (document.addEventListener) document.addEventListener('DOMContentLoaded', run);
// IE <= 8
else document.attachEvent('onreadystatechange', function(){
    if (document.readyState=='complete') run();
});