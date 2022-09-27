let zenekLista=[];

class Zenek{

    constructor(cim, hossz){
        this.cim = cim;
        this.hossz = hossz;
    }

}
zenekLista.push(document.getElementById('zeneszam').innerHTML, document.getElementById('zeneHossz').value);
let zenek=new Zenek(zenekLista.cim,zenekLista.hossz)
function zeneszamHozzaad(){
    document.getElementById('zeneszam').innerHTML=zenek.cim;
}
document.getElementById('hozzaad').addEventListener('click',zeneszamHozzaad());