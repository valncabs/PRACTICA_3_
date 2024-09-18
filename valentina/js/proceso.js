console.log("hola")
alert("bienvenido")
/*segunda opcion */

function calculasuma() {
    let n1=document.getElementById('txtnumero1').value
    let n2=document.getElementById('txtnumero2').value
    let s = parseFloat(n1)+parseFloat(n2)
    console.log(s)
    document.getElementById('res').innerHTML="la suma es= " +s
}

function calcularesta() {
    let n1=document.getElementById('txtnumero1').value
    let n2=document.getElementById('txtnumero2').value
    let r = parseFloat(n1)- parseFloat(n2)
    console.log(r)

    document.getElementById('res2').innerHTML="la resta es= " +r
}

function calculadivision() {
    let n1=document.getElementById('txtnumero1').value
    let n2=document.getElementById('txtnumero2').value
    if (n2 > 0){
        let d = parseFloat(n1) / parseFloat(n2)
        console.log(d)
        document.getElementById('res3').innerHTML="la divison es= " +d
    }else{
        alert("OPERACION INVALIDA!!")
    }
   
}
function calculamultiplicacion() {
    let n1=document.getElementById('txtnumero1').value
    let n2=document.getElementById('txtnumero2').value
    let m = parseFloat(n1) * parseFloat(n2)
    console.log(m)

    document.getElementById('res4').innerHTML="la multiplicacion es= " +m
}