let alunos = [
  {
    nome: "Davi M",
    skills: {
      "Matemática": 12,
      "Física": 0,
      "Geografia": 0,
      "Biologia": 0,
      "Qúimica": 0,
      "Produção de Texto": 0,
      "Projeto de Vida": 0,
      "Projeto Integrador": 0,
      "Por trás do Texto": 0,
      "Grandezas Físicas do Cotidiano": 0,
      "Conversões e Logarítmo": 0,
      "Educação Física": 0,
      "Artes": 0,
      "Educação Financeira": 0,
      "Português": 0,
      "Literatura": 0,
      "Zoom In": 0
    },
    schoolXP: 0
  },
  {
    nome: "Isaque",
    skills: {
      "Matemática": 0,
      "Física": 0,
      "Geografia": 0,
      "Biologia": 0,
      "Qúimica": 0,
      "Produção de Texto": 0,
      "Projeto de Vida": 0,
      "Projeto Integrador": 0,
      "Por trás do Texto": 0,
      "Grandezas Físicas do Cotidiano": 0,
      "Conversões e Logarítmo": 0,
      "Educação Física": 0,
      "Artes": 0,
      "Educação Financeira": 0,
      "Português": 0,
      "Literatura": 0,
      "Zoom In": 0
    },
    schoolXP: 0
  }
];

// Função para interpretar o código e gerar HTML com base no comando
function interpretarCodigo() {
  const input = document.getElementById('codeInput').value.trim();

  if (input.toLowerCase() === 'setschoolxp') {
    document.getElementById('popupXP').classList.remove('hidden');
    return;
  }

  const lines = input.split('\n');
  let profilesHTML = '';
  alunos = [];

  for (let line of lines) {
    try {
      const data = JSON.parse(line);
      alunos.push(data);
      profilesHTML += gerarHTMLAluno(data);
    } catch (e) {
      profilesHTML += `<p style='color:red;'>Erro ao interpretar linha: ${line}</p>`;
    }
  }
  document.getElementById('profiles').innerHTML = profilesHTML;
}

// Função para gerar o HTML do aluno com base nos dados
function gerarHTMLAluno(data) {
  const nome = data.nome;
  const skills = data.skills || {};
  const schoolXP = data.schoolXP || 0;
  let skillHTML = '';

  for (let materia in skills) {
    const nivel = skills[materia];
    const porcentagem = Math.min((nivel / 50) * 100, 100);
    skillHTML += `
      <div class="skill-box">
        <div class="skill-name">${materia} (Nível ${nivel})</div>
        <div class="level-bar">
          <div class="level-bar-fill" style="width: ${porcentagem}%;"></div>
        </div>
      </div>
    `;
  }

  return `
    <div class="profile">
      <h3>${nome}</h3>
      <div class="schoolxp-box">School XP: ${schoolXP}</div>
      ${skillHTML}
    </div>
  `;
}

// Função para salvar o valor de School XP
function salvarXP() {
  const nome = document.getElementById('nomeAluno').value;
  const valor = parseInt(document.getElementById('valorXP').value);

  for (let aluno of alunos) {
    if (aluno.nome === nome) {
      aluno.schoolXP = valor;
    }
  }

  const htmlAtualizado = alunos.map(gerarHTMLAluno).join('');
  document.getElementById('profiles').innerHTML = htmlAtualizado;
  fecharPopup();
}

// Função para fechar o popup
function fecharPopup() {
  document.getElementById('popupXP').classList.add('hidden');
}

// Renderiza os usuários ao inicializar
document.addEventListener("DOMContentLoaded", function() {
  const profilesHTML = alunos.map(gerarHTMLAluno).join('');
  document.getElementById('profiles').innerHTML = profilesHTML;
});
