export default () => {
  const $searchBtn = document.querySelector('.search__form')
  const $searchInput = document.querySelector('.search__form--input')
  const $socialIcons = document.querySelector('.social-icons')
  $searchBtn.addEventListener('click', handleClick, true)
  $searchInput.addEventListener('blur', outFocus, true)
  function handleClick () {
    $socialIcons.style.display = 'none'
    $searchInput.style.display = 'block'
    $searchInput.focus()
  }
  function outFocus () {
    $socialIcons.style.display = 'block'
    $searchInput.style.display = 'none'
    // console.log($socialIcons.style.display)
    // console.log($searchInput.style.display)
  }
}
