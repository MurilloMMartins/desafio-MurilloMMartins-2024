const animais = {
  "LEAO": { tamanho: 3, bioma: ["savana"], carnivoro: true },
  "LEOPARDO": { tamanho: 2, bioma: ["savana"], carnivoro: true },
  "CROCODILO": { tamanho: 3, bioma: ["rio"], carnivoro: true },
  "MACACO": { tamanho: 1, bioma: ["savana", "floresta"], carnivoro: false },
  "GAZELA": { tamanho: 2, bioma: ["savana"], carnivoro: false },
  "HIPOPOTAMO": { tamanho: 4, bioma: ["savana", "rio"], carnivoro: false },
};

const recintos = [
  { bioma: ["savana"], tamanho: 10, animais: [{ especie: "MACACO", quantidade: 3 }] },
  { bioma: ["floresta"], tamanho: 5, animais: [] },
  { bioma: ["savana", "rio"], tamanho: 7, animais: [{ especie: "GAZELA", quantidade: 1 }] },
  { bioma: ["rio"], tamanho: 8, animais: [] },
  { bioma: ["savana"], tamanho: 9, animais: [{ especie: "LEAO", quantidade: 1 }] },
];

class RecintosZoo {

  animaisEmBiomaAdequado(animais, biomas) {
    return animais.informacao.bioma.some((bioma) => biomas.includes(bioma));
  }

  calcularEspacoOcupado(recinto) {
    return recinto.animais.reduce((espacoTotal, animalRecinto) => espacoTotal + animalRecinto.quantidade*animais[animalRecinto.especie].tamanho, 0);
  }

  recintoPossuiEspecie(recinto, especieInserida) {
    return recinto.animais.some((animalRecinto) => animalRecinto.especie === especieInserida);
  }

  analisaRecintos(animal, quantidade) {
    if (!(animal in animais))
      return { erro: "Animal inválido" };

    if (quantidade <= 0)
      return { erro: "Quantidade inválida" };

    // const carnivoro = animais[animal].carnivoro;
    const informacaoEspecie = animais[animal]
    const espacoNecessario = informacaoEspecie.tamanho * quantidade;
    const animaisParaInserir = { especie: animal, informacao: informacaoEspecie, espacoNecessario: espacoNecessario};

    const recintosValidos = [];
    for (const [indice, recinto] of recintos.entries()) {
      if(!this.animaisEmBiomaAdequado(animaisParaInserir, recinto.bioma))
        continue;

      const possuiEspecie = this.recintoPossuiEspecie(recinto, animaisParaInserir.especie);
      // esse espaço extra só é adicionado caso a espécie inserida não esteja no recinto
      // mas não é adicionado caso o recinto esteja vazio
      const espacoExtra = (!possuiEspecie && recinto.animais.length !== 0) ? 1 : 0;

      const espacoOcupado = this.calcularEspacoOcupado(recinto);
      const espacoLivre = recinto.tamanho - (espacoOcupado + animaisParaInserir.espacoNecessario + espacoExtra);
      if(espacoLivre < 0)
        continue;

      // const contemCarnivoro = false;
      // for (const animal in recinto.animais) {
      //   if (animais[animal.tipo].carnivoro)
      //     contemCarnivoro = true;
      // }

      // if (contemCarnivoro || carnivoro) {
      //   // necessariamente teremos pelo menos um animal no recinto
      //   // se ele for carnívoro, então somente ele estará no recinto
      //   if (recinto.animais[0].tipo !== animal)
      //     continue;
      // }

      recintosValidos.push(`Recinto ${indice + 1} (espaço livre: ${espacoLivre} total: ${recinto.tamanho})`)
    }

    if (recintosValidos.length == 0)
      return { erro: "Não há recinto viável" }

    return { recintosViaveis: recintosValidos };
  }

}

export { RecintosZoo as RecintosZoo };
