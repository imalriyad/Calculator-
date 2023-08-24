const btn = document.getElementsByTagName('input')
for (const button of btn) {
   button.style.fontSize = '26px'
   button.style.cursor = 'pointer'
   button.style.boxShadow = ' -8px -8px 15px rgba(255, 255, 255, 0.1),5px 5px 15px rgba(0, 0, 0, 0.2);'
   button.style.borderRadius = '6px'
   button.style.margin = '10px'
}
