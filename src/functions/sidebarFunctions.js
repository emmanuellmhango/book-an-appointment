export const toggleNav = (callerName = 'none') => {
  const sidebar = document.getElementById('sidebar');
  if (callerName === 'Header') {
    sidebar.style.backgroundColor = 'rgb(255, 176, 0)';
  } else {
    sidebar.style.backgroundColor = '#fff';
  }
  sidebar.classList.toggle('show');
  const navPop = document.querySelector('.close-nav');
  if (navPop.style.display === 'block') {
    navPop.style.display = 'none';
  } else {
    navPop.style.display = 'block';
  }
};

export const handleKeyDown = (e) => {
  e.preventDefault();
  toggleNav();
};
