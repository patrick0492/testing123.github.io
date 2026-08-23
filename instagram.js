document.addEventListener('DOMContentLoaded', ()=>{
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const mobileThemeToggleBtn = document.getElementById('mobileThemeToggleBtn');
  const themeIcon = document.getElementById('themeIcon');
  const mobileThemeIcon = document.getElementById('mobileThemeIcon');
  const htmlElement = document.documentElement;

  function toggleTheme(){
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light'?'dark':'light';

    htmlElement.setAttribute('data-theme', newTheme);
    if(themeIcon) themeIcon.className = newTheme==='light'?'ph ph-moon':'ph ph-sun';
    if(mobileThemeIcon) mobileThemeIcon.className = newTheme==='light'?'ph ph-moon':'ph ph-sun';
  }
  if(themeToggleBtn) themeToggleBtn.addEventListener('click', toggleTheme);
  if(mobileThemeToggleBtn) mobileThemeToggleBtn.addEventListener('click', toggleTheme);

  const navItems = document.querySelectorAll('.nav-menu .nav-item');
  navItems.forEach(item =>{
    item.addEventListener('click', (e) =>{
      e.preventDefault();
      navItems.forEach(nav => nav.classList.remove('active'));
      item.classList.add('active');
    });
  });
  const mobileNavBtns = document.querySelectorAll('.mobile-bottom-nav .mobile-nav-btn');
  mobileNavBtns.forEach(btn =>{
    btn.addEventListener('click', () =>{
      mobileNavBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    })
  })
})