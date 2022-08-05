import {toggleMenu} from './scripts/toggleMenu';
import {bindModal} from './scripts/modal';
import {switchTabs} from './scripts/tabs';

toggleMenu();
 


if ( document.URL.includes("index.html") ) {
    bindModal("#popup3", "#popup-info", ".js-popupCall_close");
}


if ( document.URL.includes("notification_5.html") ) {
    switchTabs (".js-tubList", ".js-tab",  ".js-tabContent");
}

