/* =====================================================================
   DATA · 20 ÁREAS DEL PDF
   ===================================================================== */
const AREAS = [
  { id: 1,  name: "Libertad de Expresión" },
  { id: 2,  name: "Religión" },
  { id: 3,  name: "Servicio Militar" },
  { id: 4,  name: "Sexualidad" },
  { id: 5,  name: "Drogas" },
  { id: 6,  name: "Seguridad" },
  { id: 7,  name: "Discriminación" },
  { id: 8,  name: "Inmigración" },
  { id: 9,  name: "Nación" },
  { id: 10, name: "Medio Ambiente" },
  { id: 11, name: "Globalización" },
  { id: 12, name: "Impuestos" },
  { id: 13, name: "Pensiones" },
  { id: 14, name: "Solidaridad" },
  { id: 15, name: "Permisos" },
  { id: 16, name: "Sindicatos" },
  { id: 17, name: "Sanidad" },
  { id: 18, name: "Bancos" },
  { id: 19, name: "Grandes Superficies" },
  { id: 20, name: "Mercado Laboral" }
];

// 40 propuestas: 2 por área. ID pares: área i → propuestas (2i-1) y (2i).
const PROPOSALS = [
  { id: 1,  areaId: 1,  name: "Democratización de medios",                     desc: "El Estado democratiza los medios para que las voces regionales tengan igual representación que las nacionales." },
  { id: 2,  areaId: 1,  name: "Directrices contra información manipulada",     desc: "El gobierno establece directrices para que la prensa no difunda información manipulada que afecte la moral patriótica." },
  { id: 3,  areaId: 2,  name: "Plan de gobierno con valores religiosos",       desc: "El Plan de Gobierno se sustenta explícitamente en valores religiosos y el temor a Dios como pilares morales." },
  { id: 4,  areaId: 2,  name: "Estado laico y ética social",                   desc: "El Estado mantiene una laicidad estricta y centra su ética en la justicia social y la equidad." },
  { id: 5,  areaId: 3,  name: "Servicio social para la paz",                   desc: "El servicio militar es reemplazado por un servicio social obligatorio enfocado en la paz y el campo." },
  { id: 6,  areaId: 3,  name: "Fortalecimiento del pie de fuerza",             desc: "Se fortalece el pie de fuerza y se mejora el armamento de las tropas para retomar el control territorial." },
  { id: 7,  areaId: 4,  name: "Sistemas de cuidado y autonomía femenina",     desc: "El Estado prioriza sistemas de cuidado que liberan a las mujeres de la carga doméstica desproporcionada." },
  { id: 8,  areaId: 4,  name: "Defensa de la familia tradicional",            desc: "El gobierno defiende la estructura de la familia tradicional y se opone a cambios en leyes de adopción y aborto." },
  { id: 9,  areaId: 5,  name: "Fumigación aérea de cultivos ilícitos",         desc: "La fumigación aérea de cultivos ilícitos es la herramienta más efectiva contra el narcotráfico." },
  { id: 10, areaId: 5,  name: "Titulación de tierras y sustitución",          desc: "El enfoque contra las drogas es la titulación de tierras y la sustitución productiva voluntaria." },
  { id: 11, areaId: 6,  name: "Militarización de cárceles y bloques de búsqueda", desc: "Militarización de cárceles y creación de bloques de búsqueda contra la extorsión inmediata." },
  { id: 12, areaId: 6,  name: "Consolidación territorial integral",           desc: "La seguridad se logra mediante consolidación territorial con jueces, profesores y servicios sociales integrados." },
  { id: 13, areaId: 7,  name: "Cuotas y reparación histórica",                desc: "El Estado implementa cuotas de acceso y reparación histórica para corregir el racismo estructural." },
  { id: 14, areaId: 7,  name: "Meritocracia y educación universal",            desc: "La meritocracia y el acceso universal a la educación son la única forma justa de combatir la discriminación." },
  { id: 15, areaId: 8,  name: "Restricción fronteriza y alianza con EE. UU.", desc: "Colombia restringe el acceso fronterizo y prioriza alianzas de seguridad con potencias como EE. UU. e Israel." },
  { id: 16, areaId: 8,  name: "Regularización e integración productiva",      desc: "Se prioriza la regularización laboral y la integración social de los migrantes en el sistema productivo." },
  { id: 17, areaId: 9,  name: "Asamblea Nacional Constituyente",              desc: "Se convoca una Asamblea Nacional Constituyente para redefinir el poder del pueblo y las instituciones." },
  { id: 18, areaId: 9,  name: "Defensa de la Constitución de 1991",            desc: "Es prioritario defender la Constitución de 1991 frente a cualquier intento de reforma estructural del sistema." },
  { id: 19, areaId: 10, name: "Prohibir nuevos contratos de petróleo",        desc: "El país prohíbe nuevos contratos de petróleo para acelerar la transición hacia una economía verde." },
  { id: 20, areaId: 10, name: "Renta petrolera para biodiversidad",          desc: "Se usan los recursos del petróleo y el gas para financiar la protección de la biodiversidad y los parques." },
  { id: 21, areaId: 11, name: "Bloques regionales autónomos",                 desc: "Colombia se integra en bloques regionales autónomos para resistir presiones de las grandes potencias." },
  { id: 22, areaId: 11, name: "Apertura total y tratados globales",            desc: "Apertura total a la inversión extranjera mediante el fortalecimiento de tratados comerciales globales." },
  { id: 23, areaId: 12, name: "Bajar impuestos a empresas para mejorar salarios", desc: "Se bajan los impuestos a las empresas a condición de que trasladen ese ahorro a los salarios de los empleados." },
  { id: 24, areaId: 12, name: "Tributación progresiva a grandes patrimonios", desc: "Reforma tributaria progresiva que aumenta el recaudo de los multimillonarios y grandes corporaciones." },
  { id: 25, areaId: 13, name: "Pensión básica administrada por el Estado",    desc: "El Estado administra la mayoría de los aportes para garantizar un bono de pensión básica a todos los pobres." },
  { id: 26, areaId: 13, name: "Cuentas privadas de ahorro desde el nacimiento", desc: "Se fomenta el ahorro individual mediante cuentas privadas desde el nacimiento, protegidas del gasto estatal." },
  { id: 27, areaId: 14, name: "Subsidios directos a poblaciones vulnerables", desc: "La solidaridad estatal se enfoca en subsidios directos a adultos mayores y madres cabeza de hogar." },
  { id: 28, areaId: 14, name: "Educación gratuita e internet universal",      desc: "La solidaridad se expresa garantizando educación superior gratuita y acceso universal a internet." },
  { id: 29, areaId: 15, name: "Reducir el Estado un 40 %",                    desc: "Se reduce el tamaño del Estado en un 40 % para eliminar trámites y burocracia que frenan al emprendedor." },
  { id: 30, areaId: 15, name: "Estado digital con inteligencia artificial",   desc: "Se digitaliza el Estado usando IA para eliminar la corrupción en los trámites sin reducir la inversión social." },
  { id: 31, areaId: 16, name: "Sindicatos en dirección de empresas",          desc: "Los sindicatos participan activamente en la dirección de las empresas y en la planeación nacional." },
  { id: 32, areaId: 16, name: "Limitar negociación de sindicatos estatales",  desc: "Se limita el poder de negociación de los sindicatos estatales para priorizar la eficiencia del gasto público." },
  { id: 33, areaId: 17, name: "Sin EPS: manejo estatal directo",              desc: "El Estado elimina la intermediación de las EPS y maneja directamente los recursos del sistema de salud." },
  { id: 34, areaId: 17, name: "Sistema mixto de competencia regulada",        desc: "Sistema mixto de competencia regulada entre entes públicos y privados con auditoría técnica." },
  { id: 35, areaId: 18, name: "Banco de la República compra oro nacional",    desc: "El Banco de la República compra todo el oro nacional para fortalecer la soberanía financiera del país." },
  { id: 36, areaId: 18, name: "Crédito popular masivo subsidiado",            desc: "Se fomenta el crédito popular masivo subsidiado para erradicar el préstamo informal o gota a gota." },
  { id: 37, areaId: 19, name: "Mercados campesinos directos",                 desc: "El gobierno fomenta mercados campesinos directos para reducir el poder de las grandes cadenas de supermercados." },
  { id: 38, areaId: 19, name: "Libre competencia y grandes superficies",      desc: "Se garantiza la libre competencia y la inversión de grandes superficies para generar empleo formal." },
  { id: 39, areaId: 20, name: "Reforma laboral con derechos y recargos",      desc: "Reforma laboral que aumenta los recargos nocturnos y la estabilidad del trabajador contratado." },
  { id: 40, areaId: 20, name: "Flexibilización y menos impuestos a la nómina", desc: "Se flexibiliza la contratación y se reducen los impuestos a la nómina para combatir la informalidad laboral." }
];

// 40 preguntas (texto del PDF)
const QUESTIONS = [
  { id: 1,  proposalId: 1,  text: "¿Crees que el gobierno debería repartir más espacio en los medios de comunicación para que las regiones del país tengan la misma voz que Bogotá?" },
  { id: 2,  proposalId: 2,  text: "¿El gobierno debería poder decirle a los medios de comunicación qué información no pueden publicar si cree que es dañina para el país?" },
  { id: 3,  proposalId: 3,  text: "¿Te parece bien que el plan de gobierno de Colombia se base abiertamente en valores religiosos y en la fe en Dios?" },
  { id: 4,  proposalId: 4,  text: "¿Crees que el Estado debería mantenerse completamente separado de la religión y enfocarse solo en la justicia y la igualdad?" },
  { id: 5,  proposalId: 5,  text: "¿Preferirías que en vez de hacer el servicio militar, los jóvenes hicieran trabajo comunitario en zonas rurales o de paz?" },
  { id: 6,  proposalId: 6,  text: "¿Crees que Colombia necesita más policías, más soldados y mejores armas para recuperar el control de los territorios peligrosos?" },
  { id: 7,  proposalId: 7,  text: "¿El Estado debería crear más guarderías, hogares de cuidado y servicios para que las mujeres no carguen solas con el trabajo del hogar?" },
  { id: 8,  proposalId: 8,  text: "¿Crees que el gobierno debería proteger el modelo de familia tradicional y no cambiar las leyes de adopción ni las de aborto?" },
  { id: 9,  proposalId: 9,  text: "¿Estás de acuerdo con fumigar desde el aire los cultivos de coca, aunque eso afecte también a campesinos que los cuidan para sobrevivir?" },
  { id: 10, proposalId: 10, text: "¿Crees que la mejor forma de combatir las drogas es darles tierras a los campesinos y ayudarlos a sembrar otras cosas en vez de coca?" },
  { id: 11, proposalId: 11, text: "¿Apoyas que el ejército tome el control de las cárceles y que se creen grupos especiales para atacar directamente a las bandas de extorsionistas?" },
  { id: 12, proposalId: 12, text: "¿Crees que la seguridad mejora cuando el Estado lleva al mismo tiempo jueces, profesores y servicios sociales a los territorios en conflicto?" },
  { id: 13, proposalId: 13, text: "¿Estás de acuerdo con que el gobierno reserve cupos especiales en empleos y universidades para personas que han sufrido discriminación histórica?" },
  { id: 14, proposalId: 14, text: "¿Crees que la única forma justa de combatir la discriminación es que todo el mundo tenga acceso a buena educación y que los mejores avancen por mérito?" },
  { id: 15, proposalId: 15, text: "¿Colombia debería cerrar más sus fronteras y aliarse con países como Estados Unidos e Israel para controlar quién entra al territorio?" },
  { id: 16, proposalId: 16, text: "¿Crees que Colombia debería darles papeles y trabajo legal a los migrantes venezolanos y de otros países para que contribuyan a la economía?" },
  { id: 17, proposalId: 17, text: "¿Apoyarías que Colombia hiciera una asamblea para escribir una constitución nueva desde cero, con más poder en manos del pueblo?" },
  { id: 18, proposalId: 18, text: "¿Crees que la Constitución de 1991 sigue siendo buena y que hay que defenderla en lugar de cambiarla?" },
  { id: 19, proposalId: 19, text: "¿Estarías de acuerdo con que Colombia deje de firmar nuevos contratos petroleros, aunque eso signifique menos plata para el país a corto plazo?" },
  { id: 20, proposalId: 20, text: "¿Crees que la plata que genera el petróleo debería usarse para cuidar los parques naturales y la biodiversidad de Colombia?" },
  { id: 21, proposalId: 21, text: "¿Crees que Colombia debería juntarse más con sus países vecinos y crear sus propios bloques regionales para no depender tanto de EE. UU. o China?" },
  { id: 22, proposalId: 22, text: "¿Preferirías que Colombia abra sus puertas completamente a empresas e inversiones extranjeras mediante más tratados de libre comercio?" },
  { id: 23, proposalId: 23, text: "¿Estarías de acuerdo con bajarle los impuestos a las empresas, pero solo si ellas se comprometen a subirle el sueldo a sus empleados?" },
  { id: 24, proposalId: 24, text: "¿Crees que los más ricos y las grandes empresas deberían pagar muchos más impuestos de los que pagan hoy para financiar servicios públicos?" },
  { id: 25, proposalId: 25, text: "¿Te parece bien que el Estado maneje la mayor parte de los ahorros para pensiones y garantice una pensión mínima a quienes no tienen nada?" },
  { id: 26, proposalId: 26, text: "¿Preferirías que cada persona tenga su propia cuenta de ahorros para la vejez desde que nace, sin que el Estado pueda tocar esa plata?" },
  { id: 27, proposalId: 27, text: "¿Crees que el Estado debería enfocar sus ayudas económicas principalmente en adultos mayores y madres cabeza de familia que más lo necesitan?" },
  { id: 28, proposalId: 28, text: "¿Crees que la mejor forma de ayudarse entre todos es garantizar que cualquier colombiano pueda ir a la universidad gratis y tener internet en su casa?" },
  { id: 29, proposalId: 29, text: "¿Apoyarías reducir el Estado colombiano casi a la mitad para eliminar trámites y burocracia que frenan a quienes quieren emprender?" },
  { id: 30, proposalId: 30, text: "¿Crees que se debe usar tecnología e inteligencia artificial para digitalizar el Estado y acabar con la corrupción en los trámites, sin recortar la inversión social?" },
  { id: 31, proposalId: 31, text: "¿Te parece bien que los sindicatos (los grupos que representan a los trabajadores) tengan voz y voto en cómo se dirigen las empresas y el país?" },
  { id: 32, proposalId: 32, text: "¿Crees que los sindicatos del Estado tienen demasiado poder y que hay que limitarlos para que el gasto público sea más eficiente?" },
  { id: 33, proposalId: 33, text: "¿Estarías de acuerdo con que el Estado elimine las EPS y maneje directamente toda la plata de la salud, sin que haya empresas en el medio?" },
  { id: 34, proposalId: 34, text: "¿Preferirías que la salud funcione con una mezcla de lo público y lo privado, bien regulada y con auditorías técnicas para evitar abusos?" },
  { id: 35, proposalId: 35, text: "¿Crees que el Banco de la República debería comprar todo el oro que se produce en Colombia para que el país tenga más independencia financiera?" },
  { id: 36, proposalId: 36, text: "¿Apoyarías que el gobierno cree créditos baratos y con poca plata para que la gente no tenga que recurrir al gota a gota y los prestamistas ilegales?" },
  { id: 37, proposalId: 37, text: "¿Crees que el gobierno debería apoyar más los mercados campesinos y de productores locales para reducir el poder de los grandes supermercados?" },
  { id: 38, proposalId: 38, text: "¿Preferirías que haya libre competencia y que los grandes supermercados e hipermercados puedan operar sin restricciones porque generan empleo?" },
  { id: 39, proposalId: 39, text: "¿Estás de acuerdo con aprobar una reforma laboral que les suba el pago a quienes trabajan de noche y que haga más difícil despedir a los empleados?" },
  { id: 40, proposalId: 40, text: "¿Crees que es mejor hacer más fácil contratar personas y quitarle costos a las empresas para que se formalice el empleo informal en Colombia?" }
];

/* Mapeo propuesta ↔ candidato según el PDF
   - Cepeda: "Tres Revoluciones" (progresista)
   - De la Espriella: "Milagro Patriótico" (derecha radical)
   - Valencia: "Orden y Corazón" (uribista / conservadora)
   - Fajardo: tecnocrático / centro
   - López: gerencial / centro-izquierda */
const CANDIDATES = [
  {
    id: "cepeda", name: "Iván Cepeda", party: "Pacto Histórico", role: "Progresista / Reformista",
    photo: "cepeda",
    proposalIds: [1, 4, 5, 7, 10, 12, 13, 16, 17, 19, 21, 24, 25, 28, 30, 31, 33, 35, 37, 39]
  },
  {
    id: "espriella", name: "Abelardo de la Espriella", party: "Defensores de la Patria", role: "Derecha radical",
    photo: "espriella",
    proposalIds: [2, 3, 6, 8, 9, 11, 14, 15, 18, 20, 22, 23, 26, 27, 29, 32, 34, 36, 38, 40]
  },
  {
    id: "valencia", name: "Paloma Valencia", party: "Centro Democrático", role: "Uribista / Conservadora",
    photo: "valencia",
    proposalIds: [1, 3, 6, 8, 9, 11, 14, 15, 18, 20, 22, 23, 26, 27, 30, 32, 34, 36, 38, 40]
  },
  {
    id: "fajardo", name: "Sergio Fajardo", party: "Dignidad & Compromiso", role: "Centro / Tecnocrático",
    photo: "fajardo",
    proposalIds: [1, 4, 6, 7, 10, 12, 14, 16, 18, 20, 22, 23, 26, 28, 30, 32, 34, 36, 38, 40]
  },
  {
    id: "lopez", name: "Claudia López", party: "Independiente", role: "Centro-izquierda / Gerencial",
    photo: "lopez",
    proposalIds: [1, 4, 5, 7, 10, 11, 13, 16, 18, 19, 22, 24, 25, 28, 30, 31, 34, 36, 37, 39]
  }
];

/* =====================================================================
   STATE
   ===================================================================== */
const state = { current: 0, answers: {}, view: 'proposals' };

/* =====================================================================
   AFFINITY
   - userVector: 40-D ∈ [-2, +2]
   - propuesta: +2 propia / -2 opuesta
   - dot ∈ [-8, +8] → normaliza a [0, 100]
   ===================================================================== */
function getOppositeQuestion(proposalId) {
  const p = PROPOSALS.find(x => x.id === proposalId);
  const opp = PROPOSALS.find(x => x.areaId === p.areaId && x.id !== proposalId);
  return QUESTIONS.find(q => q.proposalId === opp.id);
}
function getOwnQuestion(proposalId) { return QUESTIONS.find(q => q.proposalId === proposalId); }
function getProposalAffinity(proposalId) {
  const own = getOwnQuestion(proposalId);
  const opp = getOppositeQuestion(proposalId);
  const u_own = state.answers[own.id] ?? 0;
  const u_opp = state.answers[opp.id] ?? 0;
  const dot = 2 * u_own - 2 * u_opp;
  return ((dot + 8) / 16) * 100;
}
function getAreaWinner(areaId) {
  const ps = PROPOSALS.filter(p => p.areaId === areaId);
  return ps.reduce((best, p) =>
    getProposalAffinity(p.id) > getProposalAffinity(best.id) ? p : best
  );
}
function getCandidateAffinity(candidateId) {
  const c = CANDIDATES.find(x => x.id === candidateId);
  const arr = c.proposalIds.map(getProposalAffinity);
  return arr.reduce((a, b) => a + b, 0) / arr.length;
}
function getCandidatesForProposal(proposalId) {
  return CANDIDATES.filter(c => c.proposalIds.includes(proposalId));
}

/* =====================================================================
   POLI · ASISTENTE IA "PARA DUMMIES"
   ===================================================================== */
const AREA_HINTS = {
  "Libertad de Expresión": "quién controla qué se puede decir o publicar en Colombia",
  "Religión": "si el gobierno debe o no mezclarse con la fe religiosa",
  "Servicio Militar": "qué deben hacer los jóvenes colombianos para cumplir con el país",
  "Sexualidad": "los derechos de las familias y las mujeres en Colombia",
  "Drogas": "cómo combatir los cultivos de coca y el narcotráfico",
  "Seguridad": "cómo hacer que Colombia sea más segura",
  "Discriminación": "cómo tratar de forma justa a quienes han sido excluidos históricamente",
  "Inmigración": "qué hacer con los migrantes, especialmente los venezolanos",
  "Nación": "si se debe cambiar o defender la constitución colombiana",
  "Medio Ambiente": "el petróleo vs el planeta: el dilema ambiental de Colombia",
  "Globalización": "si Colombia debe abrirse más al mundo o protegerse",
  "Impuestos": "quién paga más impuestos y cómo afecta eso a los empleados",
  "Pensiones": "cómo ahorrar para la vejez: ¿tú solo o con el Estado?",
  "Solidaridad": "cómo ayuda el Estado a los colombianos que más lo necesitan",
  "Permisos": "cuántos trámites y burocracia tiene el Estado colombiano",
  "Sindicatos": "el poder de los sindicatos (grupos de trabajadores organizados)",
  "Sanidad": "cómo funciona el sistema de salud en Colombia y quién lo maneja",
  "Bancos": "cómo manejar el dinero y el crédito en Colombia",
  "Grandes Superficies": "supermercados grandes vs mercados campesinos locales",
  "Mercado Laboral": "cómo contratar trabajadores y qué derechos tienen"
};

let poliHistory = [];

async function togglePoli() {
  const panel = document.getElementById('poliPanel');
  const isOpen = panel.classList.contains('open');
  if (isOpen) {
    panel.classList.remove('open');
    return;
  }
  panel.classList.add('open');
  poliHistory = [];
  const q = QUESTIONS[state.current];
  const proposal = PROPOSALS.find(p => p.id === q.proposalId);
  const area = AREAS.find(a => a.id === proposal.areaId);
  const hint = AREA_HINTS[area.name] || area.name;
  await askPoli(`Explícame en muy simple y casual, como si le hablaras a alguien que no sabe nada de política, el tema de "${area.name}" en Colombia. Este tema trata sobre: ${hint}. La pregunta del quiz es: "${q.text}". Dame máximo 3 oraciones cortas y usa ejemplos cotidianos.`, true);
}

async function askPoli(msg, isAuto = false) {
  const msgs = document.getElementById('poliMessages');
  if (!isAuto) {
    msgs.innerHTML += '<div class="poli-user-msg">' + msg + '</div>';
    poliHistory.push({ role: 'user', content: msg });
  } else {
    msgs.innerHTML = '<div class="poli-loading">Dame un segundo\u2026 \uD83E\uDD14</div>';
    poliHistory.push({ role: 'user', content: msg });
  }
  msgs.scrollTop = msgs.scrollHeight;

  const systemPrompt = 'Eres Poli, un amigo cercano que explica política colombiana de forma súper casual y simple. Hablas con jerga colombiana natural. Usas emojis ocasionalmente. Eres completamente neutral políticamente. Cuando usas términos técnicos, los explicas inmediatamente. Tus respuestas son cortas: 2-4 oraciones máximo. Nunca dices "gran pregunta" ni haces introducciones largas. Vas directo al grano.';

  try {
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1000,
        system: systemPrompt,
        messages: poliHistory
      })
    });
    const data = await res.json();
    const text = data.content && data.content.find(function(b){ return b.type === 'text'; });
    const reply = text ? text.text : 'No pude responder \uD83D\uDE05';
    poliHistory.push({ role: 'assistant', content: reply });
    msgs.innerHTML = msgs.innerHTML.replace('<div class="poli-loading">Dame un segundo\u2026 \uD83E\uDD14</div>', '');
    msgs.innerHTML += '<div class="poli-bot-msg"><span class="poli-avatar">P</span><div class="poli-text">' + reply + '</div></div>';
    msgs.scrollTop = msgs.scrollHeight;
  } catch(e) {
    msgs.innerHTML += '<div class="poli-bot-msg"><span class="poli-avatar">P</span><div class="poli-text">Ups, no pude conectarme \uD83D\uDE05 \u00A1Intenta de nuevo!</div></div>';
  }
}

function sendPoliMsg() {
  const input = document.getElementById('poliInput');
  const msg = input.value.trim();
  if (!msg) return;
  input.value = '';
  const msgs = document.getElementById('poliMessages');
  msgs.innerHTML += '<div class="poli-user-msg">' + msg + '</div>';
  msgs.innerHTML += '<div class="poli-loading">Dame un segundo\u2026 \uD83E\uDD14</div>';
  poliHistory.push({ role: 'user', content: msg });
  msgs.scrollTop = msgs.scrollHeight;
  askPoli(msg, false);
}

function poliQuick(q) {
  var input = document.getElementById('poliInput');
  input.value = q;
  sendPoliMsg();
}

/* =====================================================================
   NAVIGATION
   ===================================================================== */
function goto(name) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('screen-' + name).classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
function startQuiz() {
  state.current = 0;
  state.answers = {};
  goto('quiz');
  // Inject Poli panel if not already present
  if (!document.getElementById('poliPanel')) {
    const card = document.getElementById('questionCard');
    const wrapHTML = '<div class="poli-trigger-wrap">' +
      '<button class="poli-trigger" onclick="togglePoli()">' +
      '<span class="poli-dot">P</span>' +
      '<span>No entiendo bien este tema… <span class="poli-badge">Pregúntale a Poli</span></span>' +
      '</button></div>' +
      '<div class="poli-panel" id="poliPanel">' +
        '<div class="poli-panel-head"><div class="poli-dot">P</div><div class="poli-info"><div class="name">Poli — tu asistente político</div><div class="sub">Te explico todo sin vueltas 🗳️</div></div></div>' +
        '<div class="poli-messages" id="poliMessages"></div>' +
        '<div class="poli-quick-qs">' +
          '<button class="poli-quick-q" onclick="poliQuick(\'¿Cómo me afecta esto en mi vida diaria?\')">¿Cómo me afecta?</button>' +
          '<button class="poli-quick-q" onclick="poliQuick(\'Dame un ejemplo sencillo de la vida real\')">Ejemplo real</button>' +
          '<button class="poli-quick-q" onclick="poliQuick(\'¿Cuál es el argumento a favor y en contra?\')">¿Pros y contras?</button>' +
        '</div>' +
        '<div class="poli-input-row">' +
          '<input class="poli-input" id="poliInput" placeholder="Pregúntale algo a Poli…" onkeydown="if(event.key===\'Enter\') sendPoliMsg()">' +
          '<button class="poli-send" onclick="sendPoliMsg()">Enviar</button>' +
        '</div>' +
      '</div>';
    card.insertAdjacentHTML('beforebegin', wrapHTML);
  }
  renderQuestion(true);
}
function restart() {
  state.current = 0;
  state.answers = {};
  goto('welcome');
}

/* =====================================================================
   QUIZ — soft transitions
   ===================================================================== */
function paintQuestion() {
  const q = QUESTIONS[state.current];
  const proposal = PROPOSALS.find(p => p.id === q.proposalId);
  const area = AREAS.find(a => a.id === proposal.areaId);
  document.getElementById('areaNum').textContent = '— ' + String(area.id).padStart(2, '0');
  document.getElementById('areaName').textContent = area.name;
  document.getElementById('questionText').textContent = q.text;
  // Reset Poli panel on each new question
  const poliPanel = document.getElementById('poliPanel');
  if (poliPanel) { poliPanel.classList.remove('open'); }
  poliHistory = [];
  const pct = Math.round(((state.current) / QUESTIONS.length) * 100);
  document.getElementById('progressFill').style.width = pct + '%';
  document.getElementById('qCount').textContent = String(state.current + 1).padStart(2, '0');
  document.getElementById('qPercent').textContent = pct + '% completado';
  const score = state.answers[q.id];
  document.querySelectorAll('.ans-btn').forEach(btn => {
    btn.classList.toggle('selected', score !== undefined && Number(btn.dataset.score) === score);
  });
  document.getElementById('btnPrev').disabled = state.current === 0;
  const nextBtn = document.getElementById('btnNext');
  const isLast = state.current === QUESTIONS.length - 1;
  nextBtn.innerHTML = isLast
    ? 'Ver resultados <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>'
    : 'Siguiente <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>';
  nextBtn.disabled = score === undefined;
}
function renderQuestion(initial = false) {
  const card = document.getElementById('questionCard');
  if (initial) { paintQuestion(); return; }
  // soft fade-out → repaint → fade-in
  card.classList.add('fading');
  setTimeout(() => {
    paintQuestion();
    requestAnimationFrame(() => card.classList.remove('fading'));
  }, 300);
}
function answer(score) {
  const q = QUESTIONS[state.current];
  state.answers[q.id] = score;
  document.querySelectorAll('.ans-btn').forEach(btn => {
    btn.classList.toggle('selected', Number(btn.dataset.score) === score);
  });
  document.getElementById('btnNext').disabled = false;
  setTimeout(() => {
    if (state.current < QUESTIONS.length - 1) {
      state.current++;
      renderQuestion();
    } else {
      finishQuiz();
    }
  }, 520);
}
function nextQuestion() {
  if (state.answers[QUESTIONS[state.current].id] === undefined) return;
  if (state.current < QUESTIONS.length - 1) {
    state.current++;
    renderQuestion();
  } else {
    finishQuiz();
  }
}
function prevQuestion() {
  if (state.current > 0) {
    state.current--;
    renderQuestion();
  }
}
function finishQuiz() {
  document.getElementById('progressFill').style.width = '100%';
  setTimeout(() => {
    goto('results');
    setView('proposals');
  }, 380);
}

/* =====================================================================
   RESULTS
   ===================================================================== */
function setView(v) {
  state.view = v;
  document.querySelectorAll('.view-tab').forEach(t => t.classList.toggle('active', t.dataset.view === v));
  const c = document.getElementById('viewContent');
  c.style.animation = 'none'; c.offsetHeight; c.style.animation = '';
  if (v === 'proposals') c.innerHTML = renderTopProposalsView();
  else if (v === 'candidates') c.innerHTML = renderCandidatesView();
  else c.innerHTML = renderDetailView();
  requestAnimationFrame(applyBarAnimations);
}
function applyBarAnimations() {
  document.querySelectorAll('[data-fill]').forEach((el, i) => {
    const w = el.dataset.fill;
    el.style.width = '0%';
    setTimeout(() => {
      el.style.transition = 'width 1s cubic-bezier(0.22, 1, 0.36, 1)';
      el.style.width = w + '%';
    }, 120 + i * 22);
  });
}
function pct(v) { return Math.round(v); }
function pad(n) { return String(n).padStart(2, '0'); }
function photoEl(photoKey, alt) {
  const src = PHOTOS[photoKey];
  if (src) return `<img src="${src}" alt="${alt}">`;
  const initials = alt.split(' ').map(p => p[0]).slice(0, 2).join('');
  return `<div style="width:100%;height:100%;display:grid;place-items:center;background:linear-gradient(135deg,#4b2785,#1d0b3e);color:white;font-family:var(--display);font-weight:500;font-size:1.4em;">${initials}</div>`;
}

/* VIEW 1 · Top propuestas */
function renderTopProposalsView() {
  const winners = AREAS.map(a => {
    const w = getAreaWinner(a.id);
    return { ...w, area: a, affinity: getProposalAffinity(w.id) };
  }).sort((a, b) => b.affinity - a.affinity);

  return `<div class="proposals-grid">
    ${winners.map((w, i) => {
      const cands = getCandidatesForProposal(w.id);
      const top = i === 0 ? 'top' : '';
      const rank = pad(i + 1);
      return `
        <article class="prop-card ${top}" style="animation-delay:${i * 40}ms">
          <span class="rank">— ${rank}</span>
          <div class="head">
            <div class="area-row">
              <span class="num">— ${pad(w.area.id)}</span>
              <span class="pipe"></span>
              <span>${w.area.name}</span>
            </div>
            <h3>${w.name}</h3>
          </div>
          <p>${w.desc}</p>
          <div class="affinity">
            <div>
              <div class="pct">${pct(w.affinity)}<sup>%</sup></div>
              <div class="pct-label">afinidad</div>
            </div>
            <div class="bar"><div class="bar-fill" data-fill="${pct(w.affinity)}"></div></div>
          </div>
          <div class="candidate-chips">
            <span class="label">Comparte con</span>
            ${cands.length === 0 ? '<span style="font-size:11.5px;color:var(--ink-muted);">Ninguno</span>' :
              cands.map(c => `<div class="chip" title="${c.name}">${photoEl(c.photo, c.name)}</div>`).join('')}
          </div>
        </article>`;
    }).join('')}
  </div>`;
}

/* VIEW 2 · Candidatos */
function renderCandidatesView() {
  const ranked = CANDIDATES.map(c => ({ ...c, affinity: getCandidateAffinity(c.id) }))
                           .sort((a, b) => b.affinity - a.affinity);

  return `<div class="candidates-grid">
    ${ranked.map((c, i) => {
      const affinities = c.proposalIds.map(getProposalAffinity);
      const top = i === 0 ? 'first' : '';
      const high = affinities.filter(a => a >= 65).length;
      const low = affinities.filter(a => a < 35).length;
      const rank = pad(i + 1);
      return `
        <article class="cand-card ${top}" style="animation-delay:${i * 70}ms">
          <span class="rank">— ${rank}</span>
          <div class="photo">${photoEl(c.photo, c.name)}</div>
          <div class="name">${c.name}</div>
          <div class="party">${c.party} · ${c.role}</div>
          <div class="pct">${pct(c.affinity)}<sup>%</sup></div>
          <div class="pct-lbl">afinidad agregada</div>
          <div class="bar"><div class="bar-fill" data-fill="${pct(c.affinity)}"></div></div>
          <div class="summary">
            <div><span>${high}</span><small>coincidencias altas</small></div>
            <div><span>${low}</span><small>desacuerdos</small></div>
            <div><span>${c.proposalIds.length}</span><small>propuestas</small></div>
          </div>
        </article>`;
    }).join('')}
  </div>`;
}

/* VIEW 3 · Detalle propuesta a propuesta */
function renderDetailView() {
  const ranked = CANDIDATES.map(c => ({ ...c, affinity: getCandidateAffinity(c.id) }))
                           .sort((a, b) => b.affinity - a.affinity);

  return `<div class="detail-list">
    ${ranked.map((c, i) => {
      const items = c.proposalIds.map(pid => {
        const p = PROPOSALS.find(x => x.id === pid);
        const a = AREAS.find(x => x.id === p.areaId);
        const aff = getProposalAffinity(pid);
        return { p, a, aff };
      }).sort((x, y) => y.aff - x.aff);

      return `
        <article class="detail-block ${i === 0 ? 'open' : ''}" style="animation-delay:${i * 55}ms">
          <div class="detail-head" onclick="toggleDetail(this)">
            <div class="photo">${photoEl(c.photo, c.name)}</div>
            <div class="info">
              <div class="name">${c.name}</div>
              <div class="party">${c.party}</div>
            </div>
            <div class="pct">${pct(c.affinity)}<sup>%</sup></div>
            <div class="toggle">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>
            </div>
          </div>
          <div class="detail-body">
            <div class="detail-body-inner">
              ${items.map(it => `
                <div class="prop-row">
                  <div class="area-num">${pad(it.a.id)}</div>
                  <div class="meta">
                    <div class="area">${it.a.name}</div>
                    <div class="name">${it.p.name}</div>
                  </div>
                  <div class="row-bar"><div class="row-fill" data-fill="${pct(it.aff)}"></div></div>
                  <div class="row-pct">${pct(it.aff)}%</div>
                </div>`).join('')}
            </div>
          </div>
        </article>`;
    }).join('')}
  </div>`;
}
function toggleDetail(headEl) { headEl.parentElement.classList.toggle('open'); }

/* =====================================================================
   EVENTS & INIT
   ===================================================================== */
document.querySelectorAll('.ans-btn').forEach(btn => {
  btn.addEventListener('click', () => answer(Number(btn.dataset.score)));
});
document.addEventListener('keydown', e => {
  if (!document.getElementById('screen-quiz').classList.contains('active')) return;
  if (e.key >= '1' && e.key <= '5') {
    answer(Number(e.key) - 3); // 1=-2 ... 5=+2
  } else if (e.key === 'ArrowRight') nextQuestion();
  else if (e.key === 'ArrowLeft') prevQuestion();
});

renderQuestion(true);

const PHOTOS = {
  cepeda:    'scr/Cepeda.jpeg',
  espriella: 'scr/Abelardo.jpeg',
  valencia:  'scr/Paloma.jpeg',
  fajardo:   'scr/Fajardo.jpeg',
  lopez:     'scr/Claudia.jpeg',
};
