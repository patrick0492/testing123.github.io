class menuSection extends HTMLElement{
  connectedCallback(){
    this.innerHTML = `
    <div class="sidenav-wrapper">
      <div class="sidenav nav-red">
        <div class="sidenav nav-blue">
          <div class="sidenav nav-white">
            <img src="./img/logo.svg" class="sidenav-logo" alt="">
            <ul class="sidenav sidenav-list">
              <li class="nav-link"><a href="logotekst.html" class="nav-link">Agenda</a></li>
              <li class="nav-link"><a href="#!" class="nav-link">Contact</a></li>
              <li class="nav-link"><a href="#!" class="nav-link">Media</a></li>
              <li class="nav-link"><a href="#!" class="nav-link">Nieuws</a></li>
              <li class="nav-link btn nav-btn"><a href="#!" class="">Doe mee</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <header id="header">
      <nav>
        <div class="nav-logo">
          <img src="./img/logo.svg" alt="">
        </div>
        <ul class="nav-list">
          <li class="nav-link"><a href="logotekst.html" class="nav-link">Agenda</a></li>
          <li class="nav-link"><a href="" class="nav-link">Contact</a></li>
          <li class="nav-link"><a href="" class="nav-link">Media</a></li>
          <li class="nav-link"><a href="" class="nav-link">Nieuws</a></li>
          <li class="nav-link btn nav-btn"><a href="" class="">Doe mee</a></li>
        </ul>
        <div class="menu-toggle">
          <button id="menu-toggle">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
    </header>
    `
  }
}
// class specialFooter extends HTMLElement{
//   connectedCallback(){
//     this.innerHTML = `
//       <p style="display: flex; justify-content: space-around; background-color: #eee; padding: 10px;">
//         This is my first html template element.
//       </p>
//     `
//   }
// }
customElements.define('menu-section', menuSection)
// customElements.define('special-footer', specialFooter)

  // Change background header
  function scrollHeader(){
    const header = document.getElementById('header')

    if(this.scrollY >= 200) header.classList.add('scroll'); else header.classList.remove('scroll')
  }

  window.addEventListener('scroll', scrollHeader)

  // Show Menu
  const menu = document.getElementById('menu-toggle');

  if(menu){
    menu.addEventListener('click', () =>{
      menu.classList.toggle('active');
    })
  }

  const nav = document.querySelectorAll('.sidenav')
  const navLink = document.querySelectorAll('.sidenav-list li a')
  const body = document.querySelector('body')

  menu.addEventListener('click', () =>{
    nav.forEach(nav_el => nav_el.classList.toggle('visible'))
  })

  navLink.forEach(el => el.addEventListener('click', () =>{
    nav.forEach(nav_el => nav_el.classList.remove('visible'));
    menu.classList.remove('active');
  }))

