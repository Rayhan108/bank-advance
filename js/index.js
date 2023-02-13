document.getElementById('login-btn').addEventListener('click',function(){
    const inputEmail =document.getElementById('user-email');
    const emailValue =inputEmail.value;
    inputEmail.value='';
    const inputPassword = document.getElementById('user-password');
    const passwordValue = inputPassword.value;
    if(emailValue === 'admin@gmail.com' && passwordValue === 'admin'){
        window.location.href='bank.html';
    }else if(emailValue !== 'admin@gmail.com'){
        alert('incorrect email');
    }else{
        alert('wrong password,please enter a right password');
    }
})

// document.addEventListener('keydown',function(event){
//     console.log(event.key);
//     if(event.key === 'Enter'){
    
//             const inputEmail =document.getElementById('user-email');
//             const emailValue =inputEmail.value;
//             const inputPassword = document.getElementById('user-password');
//             const passwordValue = inputPassword.value;
//             if(emailValue === 'admin@gmail.com' && passwordValue === 'admin'){
//                 window.location.href='bank.html';
//             }else if(emailValue !== 'admin@gmail.com'){
//                 alert('incorrect email');
//             }else{
//                 alert('wrong password,please enter a right password');
//             }
       
//     }
// })