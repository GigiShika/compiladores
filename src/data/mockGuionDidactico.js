export const TipoContenido = {
  LECCION: 'leccion',
  RECURSO: 'recurso',
  TAREA: 'tarea',
};

export const CONTENIDOS_MOCK = [
  // ── UNIDAD I ─────────────────────────────────────────────
  {
    contenido_id: 1,
    titulo: '1.1 Sistemas formales y teoría de conjuntos',
    descripcion: 'Definición de sistema formal, propiedades (coherencia, completitud, decidibilidad) y operaciones con conjuntos.',
    tipo: TipoContenido.LECCION,
    orden: 1,
    url_recurso: null,
    unidad_id: 1,
    unidad: { unidad_id: 1, nombre: 'Unidad I - Introducción y uso de autómatas en los compiladores' },
    contenido: [
      `Para poder definir el término de sistema formal, se tiene que definir primero cada uno de los subterminos que lo conforman.

“SISTEMA, es un conjunto de elementos independientes pero interrelacionados (recursos) que interactúan, directa o indirectamente, que forman un todo indivisible y organizado (nombre del sistema), que afecta y se ve afectado por su medio ambiente y realiza actividades, para el cumplimiento de su propósito u objetivo, valiéndose de mecanismos de retroalimentación que le permiten efectuar su auto control para continuar su existencia”.
Al aplicar este concepto, bajo cualquier campo de investigación o disciplina, cualquier hecho, suceso o fenómeno de la naturaleza a ser estudiado como sistema, permitirá precisar y delimitar sus elementos con mayor objetividad y comprenderlo mejor. 
Fuente: Silva [2010], página 19.

Un ejemplo de un sistema real es el sistema respiratorio en el cuerpo de un ser humano, que está compuesto por distintos órganos, entre ellos pulmones, nariz, tráquea, entre otros, cuyo fin común es la asimilación del oxígeno para la alimentación de las células del cuerpo interactuando con la complejidad del cerebro humano para formar acciones involuntarias pero vitales. También interactúa con los sistemas circulatorio, digestivo, cardiovascular, sistema óseo, neurológico, etc.
El concepto de formal se define como el cumplimiento de las condiciones necesarias o con los requisitos establecidos para llevarse a cabo, un ejemplo de esto puede ser la formalidad en cuanto a vestimenta que es requerida en ocasiones específicas, por ejemplo, una boda o el trabajo. 
Por lo tanto, se define a un sistema formal como el conjunto de los elementos destinados a cumplir cierta tarea o tareas siguiendo condiciones o, los requisitos establecidos. Aplicado a la teoría de lenguajes y compiladores, esto puede verse desde un punto de vista matemático y axiomático.


Los Sistemas Formales poseen propiedades, las cuales son:
•	Coherencia: El sistema formal es coherente si cada teorema o cadena integrada por símbolos yuxtapuestos al ser interpretados corresponden a una decisión verdadera.
•	Completitud: El sistema formal es completo si cada proposición verdadera puede ser representada mediante un teorema. Es incompleto si alguna verdad no puede expresarse.
•	Decidibilidad: Un sistema formal es decidible (de decisión), si existe un algoritmo (conjunto de instrucciones o reglas bien definidas, ordenadas y finitas, que permite realizar una actividad mediante pasos sucesivos que no generen dudas a quien deba realizar dicha actividad) que diga en tiempo finito, si una cadena cualquiera es un teorema o no lo es. 
Aquí colocamos como ejemplo el conocido teorema de Pitágoras donde se reúnen los tres elementos ya descritos: Coherencia, completitud y decidibilidad. La intención de describir procedimientos de manera más exacta y precisa es lo que ha motivado la formalización.
Teorema de Pitágoras como ejemplo de que reúne los elementos de un sistema formal.
`,
      `https://drive.google.com/file/d/1k75pGK7fzxw8bxjD_Or6wXGcBWj8HLrP/view?usp=drive_link`,
      `Teorema de Pitágoras: El cuadrado de la hipotenusa (b) es igual a la suma de los cuadrados de los dos catetos (a y c)
a2 + b2 = c2
Proposiciones:
1)	a2 + 202 = 252 Se sustituyen valores
2)	a2 + 400 = 625 Se resta c-b
3)	625 – 400 = 225
4)	√225   = 15
`,
      `En este sistema tenemos la coherencia, ya que el teorema se cumple como verdadero.
Tenemos la completitud ya que cada proposición es verdadera y la decidibilidad es gracias a que se puede realizar mediante un conjunto de pasos sucesivos de sus proposiciones.
`,
      `https://drive.google.com/file/d/1CIwPgi0boqM0rv3p8oyN9SqNL5uiW-f4/view?usp=drive_link`,
      `Teoría de conjuntos.
Un conjunto es un grupo de elementos u objetos especificados en tal forma que se puede afirmar con certeza si cualquier objeto dado pertenece o no a la agrupación. Para denotar a los conjuntos, se usan letras mayúsculas.

Cuando un elemento x pertenece a un conjunto A se expresa de forma simbólica como: x  A. En caso de que un elemento y no pertenezca a este mismo conjunto se utiliza la notación: y  A
Existen cuatro formas de enunciar a los conjuntos:
	Por extensión o enumeración: los elementos son encerrados entre llaves y separados por comas. Es decir, el conjunto se describe listando todos sus elementos entre llaves. Ejemplo: Sean los conjuntos 
A={1,3,5,7,9}    y  B={10,11,12}
	Por comprensión: los elementos se determinan a través de una condición que se establece entre llaves. En este caso se emplea el símbolo | que significa “tal que". En forma simbólica es:
A={x ┤|P(x)}=(x_1,x_2,x_3…x_n)
	Diagramas de Venn: son regiones cerradas que sirven para visualizar el contenido de un conjunto o las relaciones entre conjuntos.
Por diagrama de Venn:
`,
      `https://drive.google.com/file/d/19_W9FPQ8JICvIikeHxoQbKSU_Pfsh5zK/view?usp=drive_link`,
      `En donde las vocales representan al universo o la totalidad de los elementos del conjunto definido como V={a,e,i,o,u}. En caso de estar en conjuntos separados las vocales, por ejemplo, en el conjunto A y B, se sobrepondrían las partes que conforman, o incluso podrían no tener relación.
	Por descripción verbal: Es un enunciado que describe la característica que es común para los elementos. Un ejemplo sencillo de aplicación de lo anterior, son las cinco vocales.
De forma verbal, se define simplemente como tal: “El conjunto de las letras vocales”
Por extensión: V={a,e,i,o,u}
Por comprensión: V={x ┤|  x sea una vocal } 

La teoría de conjuntos es indispensable para las matemáticas discretas, siendo estas dos indispensables para la teoría de la computación. Basándonos en este ejemplo podemos definir la existencia de operaciones con conjuntos. Los cuales se especifican de manera general en la siguiente tabla.
`,
      `https://drive.google.com/file/d/1Pk2jHhqSTeEPErGOEe_C_mx1jhD_vkWs/view?usp=drive_link`,
      `https://drive.google.com/file/d/1SdCdWFKfoFSsZpy7xPDUY4puKRMWMhky/view?usp=drive_link`
    ]

  },
  {
    contenido_id: 2,
    titulo: '1.2 Conceptos y elementos para el diseño de lenguajes',
    descripcion: 'Elementos fundamentales para el diseño de lenguajes de programación.',
    tipo: TipoContenido.LECCION,
    orden: 2,
    url_recurso: null,
    unidad_id: 1,
    unidad: { unidad_id: 1, nombre: 'Unidad I - Introducción y uso de autómatas en los compiladores' },
  },
  {
    contenido_id: 3,
    titulo: '1.3 Sistemas de traducción y compilación',
    descripcion: 'Conceptos de traductores, intérpretes y compiladores.',
    tipo: TipoContenido.LECCION,
    orden: 3,
    url_recurso: null,
    unidad_id: 1,
    unidad: { unidad_id: 1, nombre: 'Unidad I - Introducción y uso de autómatas en los compiladores' },
  },
  {
    contenido_id: 4,
    titulo: '1.4 Fases y pasos del compilador',
    descripcion: 'Análisis léxico, sintáctico, semántico, generación de código intermedio y optimización.',
    tipo: TipoContenido.LECCION,
    orden: 4,
    url_recurso: null,
    unidad_id: 1,
    unidad: { unidad_id: 1, nombre: 'Unidad I - Introducción y uso de autómatas en los compiladores' },
  },
  {
    contenido_id: 5,
    titulo: '1.5 Traductor simple orientado a la sintaxis',
    descripcion: 'Análisis semántico y traducción orientada a la sintaxis.',
    tipo: TipoContenido.LECCION,
    orden: 5,
    url_recurso: null,
    unidad_id: 1,
    unidad: { unidad_id: 1, nombre: 'Unidad I - Introducción y uso de autómatas en los compiladores' },
  },

  // ── UNIDAD II ────────────────────────────────────────────
  {
    contenido_id: 6,
    titulo: '2.1 Expresiones regulares y Autómatas Finitos',
    descripcion: 'Conceptos de expresiones regulares y autómatas finitos deterministas y no deterministas.',
    tipo: TipoContenido.LECCION,
    orden: 1,
    url_recurso: null,
    unidad_id: 2,
    unidad: { unidad_id: 2, nombre: 'Unidad II - Uso de Gramáticas' },
  },
  {
    contenido_id: 7,
    titulo: '2.2 ER a AFND con épsilon transiciones',
    descripcion: 'Transformación de Expresiones Regulares a Autómatas Finitos No Deterministas con transiciones épsilon.',
    tipo: TipoContenido.LECCION,
    orden: 2,
    url_recurso: null,
    unidad_id: 2,
    unidad: { unidad_id: 2, nombre: 'Unidad II - Uso de Gramáticas' },
  },
  {
    contenido_id: 8,
    titulo: '2.3 AFND con épsilon a AFND sin épsilon',
    descripcion: 'Transformación de AFND con épsilon a AFND sin épsilon.',
    tipo: TipoContenido.LECCION,
    orden: 3,
    url_recurso: null,
    unidad_id: 2,
    unidad: { unidad_id: 2, nombre: 'Unidad II - Uso de Gramáticas' },
  },
  {
    contenido_id: 9,
    titulo: '2.4 AFND sin épsilon a AFD',
    descripcion: 'Transformación de Autómatas Finitos No Deterministas a Deterministas.',
    tipo: TipoContenido.TAREA,
    orden: 4,
    url_recurso: null,
    unidad_id: 2,
    unidad: { unidad_id: 2, nombre: 'Unidad II - Uso de Gramáticas' },
  },

  // ── UNIDAD III ───────────────────────────────────────────
  {
    contenido_id: 10,
    titulo: '3.1 Elementos de diseño de Analizadores Léxicos',
    descripcion: 'Principios y componentes del análisis léxico en compiladores.',
    tipo: TipoContenido.LECCION,
    orden: 1,
    url_recurso: null,
    unidad_id: 3,
    unidad: { unidad_id: 3, nombre: 'Unidad III - Implementación de un Analizador Léxico' },
  },
  {
    contenido_id: 11,
    titulo: '3.4 Definición de Léxico mediante expresiones regulares',
    descripcion: 'Uso de expresiones regulares para definir los tokens de un lenguaje.',
    tipo: TipoContenido.RECURSO,
    orden: 2,
    url_recurso: null,
    unidad_id: 3,
    unidad: { unidad_id: 3, nombre: 'Unidad III - Implementación de un Analizador Léxico' },
  },
  {
    contenido_id: 12,
    titulo: '3.5 Implementación con herramienta automatizada',
    descripcion: 'Uso de herramientas como Lex/Flex para generar analizadores léxicos automáticamente.',
    tipo: TipoContenido.TAREA,
    orden: 3,
    url_recurso: null,
    unidad_id: 3,
    unidad: { unidad_id: 3, nombre: 'Unidad III - Implementación de un Analizador Léxico' },
  },

  // ── UNIDAD IV ────────────────────────────────────────────
  {
    contenido_id: 13,
    titulo: '4.1 Gramáticas Libres de Contexto',
    descripcion: 'Conceptos básicos, árboles de derivación y recursividad.',
    tipo: TipoContenido.LECCION,
    orden: 1,
    url_recurso: null,
    unidad_id: 4,
    unidad: { unidad_id: 4, nombre: 'Unidad IV - Implementación de un Analizador Sintáctico' },
  },
  {
    contenido_id: 14,
    titulo: '4.4 Forma Normal de Chomsky',
    descripcion: 'Obtención de la Forma Normal de Chomsky de una gramática libre de contexto.',
    tipo: TipoContenido.LECCION,
    orden: 2,
    url_recurso: null,
    unidad_id: 4,
    unidad: { unidad_id: 4, nombre: 'Unidad IV - Implementación de un Analizador Sintáctico' },
  },
  {
    contenido_id: 15,
    titulo: '4.5 Forma Normal de Greibach y Autómata de Pila',
    descripcion: 'Transformación a Forma Normal de Greibach y generación del Autómata de Pila.',
    tipo: TipoContenido.TAREA,
    orden: 3,
    url_recurso: null,
    unidad_id: 4,
    unidad: { unidad_id: 4, nombre: 'Unidad IV - Implementación de un Analizador Sintáctico' },
  },

  // ── UNIDAD V ─────────────────────────────────────────────
  {
    contenido_id: 16,
    titulo: '5.1 Análisis Sintáctico Descendente Predictivo y gramáticas LL',
    descripcion: 'Gramáticas LL y construcción de analizadores descendentes predictivos.',
    tipo: TipoContenido.LECCION,
    orden: 1,
    url_recurso: null,
    unidad_id: 5,
    unidad: { unidad_id: 5, nombre: 'Unidad V - Traducción Orientada por la Sintaxis' },
  },
  {
    contenido_id: 17,
    titulo: '5.3 Notaciones para especificar la sintaxis y tabla de símbolos',
    descripcion: 'BNF, EBNF y otras notaciones para describir la sintaxis de lenguajes de programación.',
    tipo: TipoContenido.RECURSO,
    orden: 2,
    url_recurso: null,
    unidad_id: 5,
    unidad: { unidad_id: 5, nombre: 'Unidad V - Traducción Orientada por la Sintaxis' },
  },
  {
    contenido_id: 18,
    titulo: '5.4 Procedimientos para la tabla de análisis sintáctico',
    descripcion: 'Cálculo de conjuntos Primero y Siguiente para construcción de tablas LL.',
    tipo: TipoContenido.TAREA,
    orden: 3,
    url_recurso: null,
    unidad_id: 5,
    unidad: { unidad_id: 5, nombre: 'Unidad V - Traducción Orientada por la Sintaxis' },
  },
];
