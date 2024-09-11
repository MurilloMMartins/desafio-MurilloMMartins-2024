const animais = {
  "LEAO": { tamanho: 3, bioma: ["savana"], carnivoro: true },
  "LEOPARDO": { tamanho: 2, bioma: ["savana"], carnivoro: true },
  "CROCODILO": { tamanho: 3, bioma: ["rio"], carnivoro: true },
  "MACACO": { tamanho: 1, bioma: ["savana, floresta"], carnivoro: false },
  "GAZELA": { tamanho: 2, bioma: ["savana"], carnivoro: false },
  "HIPOPOTAMO": { tamanho: 4, bioma: ["savana, rio"], carnivoro: false },
}

const recintos = [
  { bioma: ["savana"], tamanho: 10, animais: [{ tipo: "MACACO", quantidade: 3 }] },
  { bioma: ["floresta"], tamanho: 5, animais: [] },
  { bioma: ["savana", "rio"], tamanho: 7, animais: [{ tipo: "GAZELA", quantidade: 1 }] },
  { bioma: ["rio"], tamanho: 8, animais: [] },
  { bioma: ["savana"], tamanho: 9, animais: [{ tipo: "LEAO", quantidade: 1 }] },
]

class RecintosZoo {

  analisaRecintos(animal, quantidade) {
    console.log(animais[animal])
  }

}

export { RecintosZoo as RecintosZoo };
