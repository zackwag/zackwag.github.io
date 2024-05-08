function getYear(yearToSubtract){let currentYear=new Date().getFullYear();return currentYear-yearToSubtract}
window.addEventListener("DOMContentLoaded",function(){document.querySelectorAll('.relativeYear').forEach(element=>{let yearToSubtract=parseInt(element.getAttribute('data-year'));let relativeYear=getYear(yearToSubtract);element.textContent=relativeYear})})
