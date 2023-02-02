import style from './style.css'
import { addStyle, waitForEl } from '@icetbr/utils/web';

addStyle(style);

// -/(Cross-Origin|Content Security)/
var keepVisible = el => () => !el.classList.contains('apV') && el.classList.add('apV');
var observe = el => new MutationObserver(keepVisible(el)).observe(el, { attributes: true });

waitForEl('div[jscontroller=nwtiKd]').then(observe); // email
waitForEl('div[jscontroller=Px22Mb]').then(observe); // chat
waitForEl('div[jscontroller=RhNKdd]').then(observe); // spaces
