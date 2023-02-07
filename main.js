const userPanel = document.querySelector('.user-panel');
const adminPanel = document.querySelector('.admin-panel');

const select = document.querySelector('#user-type');
select.addEventListener('change', (e)=>{
  if(parseInt(e.target.value)) {
    userPanel.classList.add('hide');
    adminPanel.classList.remove('hide');
  } else {
    adminPanel.classList.add('hide');
    userPanel.classList.remove('hide');
  }
});

const passwd = document.querySelector('#passwd');
passwd.addEventListener('focus', (e)=>{
  if(e.target.value.length < 8) {
    e.target.style['color'] = 'red';
  } else {
    e.target.style['color'] = 'green';
  }
});
passwd.addEventListener('blur', (e)=>{
  e.target.style['color'] = 'inherit';
});

const pwdMsg = document.querySelector('.pwd-msg');
passwd.addEventListener('input', (e)=>{
  if(e.target.value.length < 8) {
    pwdMsg.style['display'] = 'block';
  } else {
    pwdMsg.style['display'] = 'none';
  }
});

const isDigit = s => ('0' <= s) && (s <= '9');
const isAlpha = s => ( ('a' <= s) && (s <= 'z') ) || ( ('A' <= s) && (s <= 'Z') );

const admCode = document.querySelector('#adm-code');
admCode.addEventListener('keydown', (e)=>{
  if( !( isDigit(e.key) || isAlpha(e.key) ) ) {
    e.preventDefault();
  }
});


