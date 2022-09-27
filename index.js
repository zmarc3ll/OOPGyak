let zeneList = [];

    class Song {
        #dal;
        #hossz;

    constructor(dal, hossz) {
        this.#dal = dal;
        this.#hossz = hossz;
    }

    get dal() {
        return this.#dal; 
    }

    get hossz() {
        return this.#hossz;
    }
}
    function addToList() {
        var z = new Song(document.getElementById("song").value, parseInt(document.getElementById("length").value));
        zeneList.push(z);
        var osszeadva = sum();
        document.getElementById("sum").innerText ="Össz. hosszúság: " + osszeadva;
    }

    function sum() {
        var sum = 0;
        for (let i = 0; i < zeneList.length; i++) {
            sum += zeneList[i].length;
        }
        return sum;
    }

   
        function init() {
        document.getElementById("add").addEventListener("click", addToList);
    }

        document.addEventListener("DOMContentLoaded", init);


