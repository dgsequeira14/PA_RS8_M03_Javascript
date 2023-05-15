let formandos = ["Edgar","Frederico","Anísio","Djony","Pedro"];

function existe(formandos, nome) {
    for (let formando of formandos) {
        if (formando === nome) {
            return true;
        }
    };
    return false;
};

console.log(existe(formandos, "Edgar"));    // true
console.log(existe(formandos, "David"));    // false