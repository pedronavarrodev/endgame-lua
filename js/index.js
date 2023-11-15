'use strict';
let votoSim = window.document.getElementById('sim');
let votoNao = window.document.getElementById('nao');

let parceiro = prompt('Digite seu nome.');
if (parceiro) {
    document.querySelector('.conteudo__titulo').classList.remove('hidden');
    document.querySelector('.conteudo__titulo').innerHTML += parceiro + ' ?';
}
const alertas = () => {
  alert(`💞 Nunca desconfiei que escolheria qualquer outra opção ${parceiro}, agora clique em OK 🥰`);
  location.href = "https://youtu.be/nfezTxgrcUo";
};

const zoeira = () => {
  votoNao.style.position = 'absolute';
  votoNao.style.top = (Math.random() * window.innerHeight) + 'px';
  votoNao.style.left = (Math.random() * window.innerWidth) + 'px';
};

votoSim.addEventListener('click', alertas);
votoNao.addEventListener('mouseover', zoeira);
