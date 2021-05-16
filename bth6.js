function quantity()
{
    var inc = document.getElementsByClassName('increase')[0];
    var dec = document.getElementsByClassName('decrease')[0];
    var inputQuantity = document.getElementById('number');
    inc.addEventListener('click',(e)=>
    {
        inputQuantity.value++;
        if(inputQuantity.value<=0|| isNaN(inputQuantity.value))
        {
            inputQuantity.value=1;
        }
    });
    dec.addEventListener('click',(e)=>{
        inputQuantity.value--;
        if(inputQuantity.value<=0|| isNaN(inputQuantity.value))
        {
            inputQuantity.value=1;
        }
    })
    inputQuantity.addEventListener('change',(e)=>
    {
        if(inputQuantity.value<=0|| isNaN(inputQuantity.value))
        {
            inputQuantity.value=1;
        }
    })
    var bigAva = document.getElementsByClassName('bigava')[0].children[0];
    var trang = document.getElementById('trang');
    var doo = document.getElementById('do');
    var den = document.getElementById('den');
//     trang.addEventListener('change',(e)=>{
//         if(trang.checked){
//             bigAva.src = 'img/aotrang.jpg';
//     }
// })
//     doo.addEventListener('change',(e)=>{
//         if(doo.checked){
//             bigAva.src = 'img/aodo.jpg';
//         }
//     }) 
//     den.addEventListener('change',(e)=>{
//         if(den.checked){
//             bigAva.src = 'img/aoden.jpg';
//         }
//     }) 
    $('ul').on('change','input',(e)=>{
        if(trang.checked){
            bigAva.src = 'SoMiKeSocKaRo.jpg';
    }
    else if(doo.checked){
        bigAva.src = 'SoMiXanhTimThan.jpg';
    }
    else if(den.checked){
        bigAva.src = 'SoMiXanhKe.jpg';
    }
    })



    var smallAva = document.getElementsByClassName('smallava')[0].children[0];
    var trang1 = document.getElementById('1');
    var do1 = document.getElementById('2');
    var den1 = document.getElementById('3');
//     trang.addEventListener('change',(e)=>{
//         if(trang.checked){
//             bigAva.src = 'img/aotrang.jpg';
//     }
// })
//     doo.addEventListener('change',(e)=>{
//         if(doo.checked){
//             bigAva.src = 'img/aodo.jpg';
//         }
//     }) 
//     den.addEventListener('change',(e)=>{
//         if(den.checked){
//             bigAva.src = 'img/aoden.jpg';
//         }
//     }) 
    $('ul').on('change','input',(e)=>{
        if(trang1.checked){
            smallAva.src = 'SoMiKeSocKaRo.jpg';
    }
    else if(do1.checked){
        smallAva.src = 'SoMiXanhTimThan.jpg';
    }
    else if(den1.checked){
        smallAva.src = 'SoMiXanhKe.jpg';
    }
    })
}

