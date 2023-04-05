var kgbtn = document.getElementById('kgbtn')


kgbtn.addEventListener('click', function(){
    let input = document.getElementById('input').value;
    document.getElementById('output1').innerHTML = 'dollar $ =   ' + input * 765;
    document.getElementById('output2').innerHTML = 'Euro € =   ' + input * 500;
    document.getElementById('output3').innerHTML = 'Pound sterling £ =   ' + input * 940;

})