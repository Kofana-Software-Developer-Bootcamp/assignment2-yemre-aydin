
function Topla(s1,s2){
    return s1+s2;
    }
    function Fark(s1,s2){
    return s1-s2;
    }
    function Carp(s1,s2){
    return s1*s2;
    }
    function Bol(s1,s2){
    return s1/s2;
    }
     
     
    var btn=document.getElementById("btnHesap");
    btn.onclick=function(){
    var s1=Number(document.getElementById("sayi1").value);
    var s2=Number(document.getElementById("sayi2").value);
    var sonuc;
    if(document.getElementById("topla").checked)
    {
    sonuc=Topla(s1,s2);
    }
    else if(document.getElementById("cikar").checked)
    {
    sonuc=Fark(s1,s2);
    }
    else if(document.getElementById("carp").checked)
    {
    sonuc=Carp(s1,s2);
    }
    else if(document.getElementById("bol").checked)
    {
    sonuc=Bol(s1,s2);
    }
    else
    {
    sonuc="Seçim Yapın..."
    }
    document.getElementById("kutuToplam").innerHTML="Sonuç : "+sonuc;
    }