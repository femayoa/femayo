/*******************************************
 * nav.js
 * Timothy Kay
 *
 * This file helps reduce navigation duplicates
 * while improving maintenance.
 **********************************************/

function createHeaderFooter() {
  /* Footer */
  var footer = document.createElement('footer')
  footer.setAttribute('class', 'footer')

  var spanFooterHead = document.createElement('span')
  spanFooterHead.setAttribute('class', 'footer-head')

  var i = document.createElement('i')
  i.setAttribute('class', 'fa fa-phone')

  cta = document.createElement('a')
  cta.setAttribute('href', 'tel:+2348026274283')
  cta.innerHTML = 'Phone Us'

  span = document.createElement('span')
  span.appendChild(i)
  span.appendChild(cta)
  spanFooterHead.appendChild(span)

  // another span section
  i = document.createElement('i')
  i.setAttribute('class', 'fa fa-envelope')

  cta = document.createElement('a')
  cta.setAttribute('href', 'mailto:admin@femayo.com.ng')
  cta.innerHTML = 'Mail us'

  span = document.createElement('span')
  span.appendChild(i)
  span.appendChild(cta)
  spanFooterHead.appendChild(span)

  // another span section
  i = document.createElement('i')
  i.setAttribute('class', 'fa fa-location-dot')

  cta = document.createElement('a')
  cta.setAttribute('href', 'https://goo.gl/maps/TVtdSg6c4fDVoHaH6')
  cta.innerHTML = 'Locate Us'

  span = document.createElement('span')
  span.appendChild(i)
  span.appendChild(cta)
  spanFooterHead.appendChild(span)

  footer.appendChild(spanFooterHead)

  // Section for FooterFoot
  var spanFooterFoot = document.createElement('span')
  spanFooterFoot.setAttribute('class', 'footer-foot')

  var i = document.createElement('i')
  i.setAttribute('class', 'fa-brands fa-facebook')
  span = document.createElement('span')
  a = getAlpha('#', '')
  a.appendChild(i)
  span.appendChild(a)

  // new icon element
  i = document.createElement('i')
  i.setAttribute('class', 'fa-brands fa-linkedin')
  a = getAlpha('#', '')
  a.appendChild(i)
  span.appendChild(a)

  // new icon element
  i = document.createElement('i')
  i.setAttribute('class', 'fa-brands fa-twitter')
  a = getAlpha('#', '')
  a.appendChild(i)
  span.appendChild(a)

  // new icon element
  i = document.createElement('i')
  // the getAlpha function will keep creating a new alpha element
  i.setAttribute('class', 'fa-brands fa-instagram')
  a = getAlpha('#', '')
  a.appendChild(i)
  span.appendChild(a)

  spanFooterFoot.appendChild(span)

  // new span element
  span = document.createElement('span')
  a = getAlpha('#top', '&Hat;')
  span.appendChild(a)
  spanFooterFoot.appendChild(span)

  // new span element
  span = document.createElement('span')
  var spanDate = document.createElement('span')

  // footer's year
  var today = new Date()
  var year = today.getFullYear()

  spanDate.innerHTML =
    '&copy; ' + year + ' Femayo Trading & Supplies Comapny: All Rights Reserved'
  spanDate.style.fontSize = '80%'
  span.appendChild(spanDate)
  spanFooterFoot.appendChild(span)

  footer.appendChild(spanFooterFoot)
  document.body.appendChild(footer)
} // end createHeaderFooter

function getAlpha(ref, label) {
  var a = document.createElement('a')

  a.setAttribute('href', ref)
  a.innerHTML = label
  return a
} // end getAlpha

function getli(ref, label) {
  var li = document.createElement('li')
  var a = document.createElement('a')

  a.setAttribute('href', ref)
  a.innerHTML = label
  li.appendChild(a) // insert a into li
  return li
} // end getli

// console.log(window.location.pathname)
