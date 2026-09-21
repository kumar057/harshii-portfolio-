const themeButton=document.getElementById('theme');
if(themeButton){
  const saved=localStorage.getItem('harshini-theme');
  if(saved==='light') document.body.classList.add('light');
  themeButton.textContent=document.body.classList.contains('light')?'☀':'☾';
  themeButton.addEventListener('click',()=>{
    document.body.classList.toggle('light');
    const light=document.body.classList.contains('light');
    localStorage.setItem('harshini-theme',light?'light':'dark');
    themeButton.textContent=light?'☀':'☾';
  });
}
