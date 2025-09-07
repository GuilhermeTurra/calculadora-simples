function calcular() {
    let num1 = Number(document.querySelector('#num1').value)
    let num2 = Number(document.querySelector('#num2').value)
    let res = document.querySelector('#res')
    
    if (num1 == 0 || num2 == 0) {
        window.alert('[ERRO] Faltando dados!! Tente novamente.')
    } else {
        let adi = document.querySelector('#adi')
        let sub = document.querySelector('#sub')
        let multi = document.querySelector('#mul')
        let div = document.querySelector('#div')

        if (adi.checked) {
            res.innerHTML = 'O resultado é ' + (num1 + num2)
        } else if (sub.checked) {
            res.innerHTML = 'O resultado é ' + (num1 - num2)
        } else if (multi.checked) {
            res.innerHTML = 'O resultado é ' + (num1 * num2)
        } else if (div.checked) {
            res.innerHTML = 'O resultado é ' + (num1 / num2)
        }
    }
}