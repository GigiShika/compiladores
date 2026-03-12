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
    contenido: [
      `Un lenguaje es cualquier sistema de comunicación estructurado, para el que existen reglas de uso y ciertos principios combinatorios formales. Existen contextos naturales y artificiales; del mismo modo los lenguajes se dividen en tres principales que son: lenguaje humano, lenguaje animal y lenguaje formal.
Los lenguajes formales son construcciones artificiales humanas, que se usan en matemáticas y otras áreas formales, incluyendo lenguajes de programación. Estas construcciones tienen estructuras internas que comparten con el lenguaje humano natural, por lo que pueden ser en parte analizados con los mismos conceptos que éste.
`,
      `LENGUAJE: Un lenguaje es un conjunto de cadenas, donde los símbolos de todas ellas se han seleccionado de un determinado alfabeto. Cuando las cadenas de un lenguaje se interpretan de alguna manera, la cuestión de si una cadena pertenece o no, se dice en ciertas ocasiones que es un problema.

GRAMATICA: Define una importante notación para definir la estructura de los lenguajes y de los conjuntos relacionados de cadenas de símbolos o caracteres. En cuanto a las aplicaciones a las ciencias computacionales, resultan útiles en la realización del analizador sintáctico de un compilador.
`,
      `Otras definiciones nos dicen que es un lenguaje cuyos símbolos y reglas para unir esos símbolos están formalmente especificados. Al conjunto de esos símbolos se le llama vocabulario del lenguaje, y al conjunto de reglas se le conoce como gramática formal o sintaxis.
Podemos considerar que cualquier lenguaje cae dentro de la clasificación de cualquiera de los siguientes grupos:
Lenguajes Humanos (Naturales):
Este grupo se creó desde el momento en que el hombre tuvo la necesidad de compartir o de dar a conocer sus ideas, por lo que no se tiene un origen preciso de su aparición. También los podemos considerar como lenguajes naturales; en la actualidad podemos decir que inglés, francés, español, alemán, italiano etc., pertenecen a este grupo.
Lenguajes Artificiales:
Este grupo ha sido creado por el mismo ser humano, con el objetivo de poder entablar una comunicación directa con diversos objetos, de entre los cuales encontramos a las computadoras u ordenadores. Dentro de esta clasificación de lenguajes, tenemos dos divisiones:
Los lenguajes de alto nivel: 
Los podemos definir, como un lenguaje simbólico en el que una instrucción de programa fuente da lugar a varias instrucciones de lenguaje máquina, debido a que es compilado o interpretado.
“Chomsky Clasifica las gramáticas como no restringidas, sensibles al contexto, independientes de él, y regulares.”

El lenguaje máquina, es en otras palabras, el lenguaje específico de las computadoras, en el que las instrucciones se expresan en código binario directamente asimilable por la máquina.
En estos apuntes principalmente hablaremos del segundo grupo, el de los Lenguajes Artificiales, conocidos también como Lenguajes de Programación de Alto Nivel o bien Simbólicos; esto se debe a que no son directamente utilizados por las computadoras, sino que primero pasan por un proceso de traducción, un proceso de ensamble, hasta llegar al punto en que son comprendidos por las computadoras.



Podemos definir Lenguajes de Programación como un conjunto de reglas y elementos gramaticales, de los que un usuario programador dispone para escribir un conjunto de instrucciones o indicaciones para la realización de una labor específica en la resolución de un problema.
Como se ha visto hasta este momento, los lenguajes se pueden clasificar por alguna de las siguientes maneras:
•	Niveles con respecto al hardware.
•	Generaciones.
•	Modelos de Interpretación.
•	Aplicación.
•	Tipos.
•	Paradigmas.

Es por lo que tenemos como ejemplo los siguientes lenguajes:
•	Lenguajes Específicos conocidos como Metalenguajes.
•	Lenguajes de Presentación y Formateo de Datos como el lenguaje de marcación de hipertextos HTML.
•	Lenguajes de Definición de Datos como DDl dentro de SQL, XML, etc.
•	Lenguajes de Propósito General como C, Pascal, Visual Basic, etc.
•	Lenguajes Orientados a Objetos como C++ y Java.
•	Lenguajes Orientados a la Inteligencia Artificial como Lisp.
Es muy importante tener una panorámica muy amplia de los lenguajes de programación que ya existen en el mundo de la computación desde la creación de las computadoras son más de 2500. Con esta introducción sobre las características que guardan todos los lenguajes de programación que se han diseñado en la historia de los lenguajes de computadora que existan hasta nuestros días estaremos en posibilidad de aplicar algunos elementos importantes a considerar en el diseño de los lenguajes de programación.

ELEMENTOS PARA EL DISEÑO DE LENGUAJES
Algunas de las características básicas a considerar en el diseño de los lenguajes de programación son:



•	Abstracción. El lenguaje debe evitar forzar a los programadores a tener que enunciar algo más de una vez. El lenguaje debe permitir al programador la identificación de patrones repetitivos y automatizar tareas mecánicas, tediosas o susceptibles de cometer errores. Ejemplos de técnicas de abstracción son los procedimientos y funciones, la generalidad, los lenguajes de patrones de diseño, etc.
•	Concisión notacional. El lenguaje proporciona un marco conceptual para pensar algoritmos y expresar dichos algoritmos con el nivel de detalle adecuado. El lenguaje debe ser una ayuda al programador (incluso antes de comenzar a codificar) proporcionando un conjunto de conceptos de forma clara, simple y unificada. La sintaxis debe ser legible por el programador (o por otras personas que vayan a utilizar esos programas). Deben buscarse soluciones de compromiso entre lenguajes demasiado crípticos (por ejemplo, C) y lenguajes con código demasiado largo o dilatado con exceso. (Cobol, XSLT).
•	Eficiencia. El programador debe poder expresar algoritmos suficientemente eficientes o el lenguaje debe incorporar técnicas de optimización de los programas escritos en él.
•	Entorno. Aunque el entorno no forma parte del lenguaje, muchos lenguajes débiles técnicamente son ampliamente utilizados debido a que disponen de un entorno de desarrollo potente o agradable. De la misma forma, la disposición de documentación, ejemplos de programas e incluso programadores pueden ser factores clave de la popularidad de un lenguaje de programación.
•	Expresividad. El programador debe poder expresar sus intenciones. En ocasiones, demasiada expresividad puede implicar falta de seguridad. De hecho, algunos sistemas limitan la expresividad para mejorar la fiabilidad de los programas (por ejemplo, la aritmética de punteros no es permitida en algunos lenguajes).
•	Extensibilidad. El lenguaje debe facilitar mecanismos para que el programador pueda aumentar la capacidad expresiva del lenguaje añadiendo nuevas construcciones. En Haskell, por ejemplo, el programador puede definir sus propias estructuras de control.
•	Librerías e interacción con el exterior. La inclusión de un conjunto de librerías que facilita el rápido desarrollo de aplicaciones es una componente esencial de la popularidad de los lenguajes. Si no se dispone de tales librerías, es necesario contemplar mecanismos de enlace con otros lenguajes que facilitan la incorporación de librerías externas.

•	Ortogonalidad. Ofrece la posibilidad de combinar características de todas las formas posibles (sin excepciones). La falta de ortogonalidad puede suponer la enumeración de situaciones excepcionales o la aparición de incoherencias. Un ejemplo de falta de ortogonalidad es la limitación que impone Pascal para que una función devuelva determinados tipos de valores.
•	Portabilidad. El lenguaje debe facilitar la creación de programas que funcionen en el mayor número de entornos computacionales. Este requisito es una garantía de supervivencia de los programas escritos en el lenguaje y, por tanto, del propio lenguaje. Para conseguir la portabilidad, es necesario limitar las características dependientes de una arquitectura concreta.
•	Seguridad. La fiabilidad de los productos software es cada vez más importante. Lo ideal es que los programas incorrectos no pertenezcan al lenguaje y sean rechazados por el compilador. Por ejemplo, los sistemas con chequeo de tipos establecen restricciones a los posibles programas que pueden escribirse en un lenguaje para evitar que en tiempo de ejecución se produzcan errores. Existen lenguajes como Charity que garantizan la terminación de sus programas.

PREVENCIÓN Y DETECCION DE ERRORES
Tener una serie de defensas tal que, si un error no es detectado por el programador que desarrolla el código, este error probablemente sea detectado por otro programador. Los errores deben ser detectados por el compilador, si un mecanismo no es capaz de detectar un error es necesario implementar otro que lo detecte, pero nunca ignorarlo.
Prevención de errores
•	El programador comete errores. Hay que prevenir los errores
•	El programador es su fuente. El programador no sabe lo que hace y el compilador ha de limitar sus acciones (EUCLID, PASCAL). Hacer imposible cierto tipo de errores.
Ejecutar datos → control de flujo limitado.
Errores en el uso de datos → código fuente fuertemente “tipeado”.
Apuntadores erróneos → Gestión de memoria implícita (LISP, PROLOG, ML)



Hay que facilitar su detección, identificación y corrección. Tener que declarar antes de utilizar. Evitar coerciones inductoras de errores.
•	float a int por su pérdida de precisión.
•	Comprobaciones en tiempo de ejecución. Índice de “array” (arreglos) fuera de límites. Control sobre los apuntadores a NULL.
Prevención y tolerancia de fallos.
Hay dos formas de aumentar la fiabilidad de un sistema:
Prevención de fallos: Se trata de evitar que se introduzcan fallos en el sistema antes de que entre en funcionamiento.
Prevención de fallos.
Se realiza en dos etapas:
•	Evitación de fallos: Se trata de impedir que se introduzcan fallos durante la construcción del sistema.
•	Eliminación de fallos: Consiste en encontrar y eliminar los fallos que se producen en el sistema una vez construido.
Tolerancia de fallos: Se trata de conseguir que el sistema continúe funcionando, aunque produzcan fallos. En ambos casos el objetivo es desarrollar sistemas con modos de fallo bien definidos.
Detección de errores o Por el entorno de ejecución o hardware (p.ej. instrucción ilegal) o Núcleo o sistema operativo (p.ej. puntero nulo) o Por el software de aplicación o Duplicación (redundancia con dos versiones) o Comprobaciones de tiempo o Inversión de funciones o Códigos detectores de error o Validación de estado o Validación estructural. 
EFICACIA.
Los lenguajes de programación contienen un repertorio de tipos básicos o primitivos junto con una serie de operaciones sobre dichos tipos. Los tipos básicos más habituales son:
•	Números enteros: Normalmente se representan mediante un número de bytes fijo, limitando su rango. Algunos lenguajes, como Haskell, incluyen una representación ilimitada.



•	Caracteres: Como en el caso anterior, suelen representarse mediante un número fijo de bytes. En algunos lenguajes, los caracteres se identifican con los enteros.
•	Números reales representados en punto flotante. La representación también suele realizarse mediante un número fijo de bytes, limitando la precisión de los programas.
•	Booleanos: Con los valores verdadero o falso.
•	Referencias. Algunos lenguajes incluyen un tipo básico que se utiliza para hacer referencia a otros elementos. Estas referencias pueden implementarse mediante direcciones de memoria.

Cada tipo básico contiene un conjunto de operaciones primitivas. Por ejemplo, los enteros y flotantes incluyen operaciones aritméticas, los caracteres, operaciones de conversión y los booleanos (operaciones lógicas).
Los lenguajes con chequeo estático de tipos permiten comprobar en tiempo de compilación que en tiempo de ejecución no se van a producir errores de tipos. El chequeo estático de tipos aumenta la seguridad de los programas, al detectar errores antes de la ejecución. Otra ventaja es la eficiencia, ya que en la fase de ejecución no es necesario realizar comprobaciones de tipo.
Otros lenguajes, como LISP, BASIC, Perl, Prolog, etc. no incluyen chequeo estático de tipos. Las ventajas de no incluirlo son una mayor flexibilidad (es posible construir más programas) y sencillez para el programador. El programador no se preocupa de incluir declaraciones de tipos y los programas dan menos errores de tipo al compilar (aunque pueden darlos al ejecutarse).
Algunos lenguajes, como Haskell o ML, incluyen además un sistema de inferencia de tipos. El programador no tiene obligación de declarar el tipo de las expresiones, ya que el sistema es capaz de inferirlo. En caso de que el programador lo hubiese declarado, el sistema puede comprobar que el tipo declarado coincide con el tipo inferido.
LENGUAJES DE PROGRAMACION: DISEÑO E IMPLEMENTACION del autor PRATT (ISBN 9789701700464). (Cita completa más adelante)




COMPATIBILIDAD
La elección de un lenguaje de programación depende de sus conocimientos del lenguaje y del ámbito de la aplicación que está generando. Las aplicaciones de pequeño tamaño se suelen crear utilizando un único lenguaje, y es frecuente implementar aplicaciones grandes utilizando varios lenguajes.
Por ejemplo, si está ampliando una aplicación con servicios Web de XML existentes, podría utilizar un lenguaje de secuencias que no requiera apenas tareas de programación. Para aplicaciones cliente-servidor, utilizaría probablemente el lenguaje del que tiene más conocimientos para toda la aplicación. 
Para nuevas aplicaciones empresariales, donde un equipo grande de programadores crea componentes y servicios para implementarlos en varios sitios remotos, la mejor opción sería utilizar varios lenguajes dependiendo de los conocimientos de los programadores y de las expectativas de mantenimiento a largo plazo.
Los lenguajes de programación de la plataforma .NET, incluidos Visual Basic .NET, Visual C# y las Extensiones administradas de C++, y otros lenguajes de distintos fabricantes, utilizan los servicios y características de .NET Framework a través de un conjunto común de clases unificadas. Las clases unificadas de .NET proporcionan un método coherente de acceso a la funcionalidad de la plataforma. Si aprende a utilizar la biblioteca de clases, observará que todas las tareas siguen la misma arquitectura uniforme. Ya no necesitará aprender ni administrar distintas arquitecturas API para escribir las aplicaciones.
En la mayoría de las situaciones, puede utilizar de manera eficiente todos los lenguajes de programación de Microsoft. Sin embargo, cada lenguaje de programación tiene sus puntos fuertes, y es recomendable comprender las características únicas para cada uno de ellos. Las secciones siguientes le ayudarán a seleccionar el lenguaje de programación que mejor se ajuste a su aplicación. Algunos de los lenguajes Una noción importante de estos lenguajes es la herencia que facilita la reutilización de código.
•	Simula. Desarrollado por O. J. Dahl y K. Nygaard entre 1962 y 1967 como un dialecto de ALGOL para simulación de eventos discretos. Fue el primer lenguaje que desarrolla el concepto de clases y subclases.
•	Smalltalk. Desarrollado por A. C. Kay en 1971 como un sistema integral orientado a objetos que facilitaba el desarrollo de aplicaciones interactivas.



•	C++. Creado en 1985 por B. Stroustroup añadiendo capacidades de orientación a objetos al lenguaje C. El objetivo era disponer de un lenguaje con las capacidades de abstracción y reutilización de código de la orientación a objetos y la eficiencia de C++. El lenguaje fue ganando popularidad a la par que se incluían numerosas características como genericidad, excepciones, etc.
•	Java. Desarrollado por J. Gosling en 1993 como un lenguaje orientado a objetos para dispositivos electrónicos empotrados. Alcanzó gran popularidad en 1996 cuando Sun Microsystems hizo pública su implementación. La sintaxis del lenguaje se inspira en la de C++, pero contiene un conjunto más reducido de características. Incluye un sistema de gestión de memoria y un mecanismo de tratamiento de excepciones y concurrencia. 
•	 Python. Creado por Guido van Rossum en 1990 como un lenguaje orientado a objetos interpretado. Utiliza una sintaxis inspirada en C++ y contiene un sistema dinámico de tipos. El lenguaje ha ganado popularidad debido a su capacidad de desarrollo rápido de aplicaciones de Internet, gráficos, bases de datos, etc.
•	C#. Creado por Microsoft para la plataforma .NET en 1999. Utiliza una sintaxis similar a la de Java y C++. También contiene un sistema de gestión dinámica de memoria y se apoya en la máquina virtual CLR. El lenguaje aprovecha muchas de las características de esta plataforma, como el mecanismo de excepciones, sistema de componentes, control de versiones.
Los lenguajes de programación tienen como objetivo la construcción de programas, normalmente escritos por personas humanas. Estos programas se ejecutarán por un computador que realizará las tareas descritas. La utilización de un lenguaje de programación requiere, por tanto, una comprensión mutua por parte de personas y máquinas. Este objetivo es difícil de alcanzar debido a la naturaleza diferente de ambos. En un lenguaje natural, el significado de los símbolos se establece por la costumbre y se aprende mediante la experiencia. Sin embargo, los lenguajes de programación se definen habitualmente por una autoridad, que puede ser el diseñador individual del lenguaje o un determinado comité.
Los lenguajes de programación son, por tanto, una solución de compromiso entre las necesidades del emisor (programador - persona) y del receptor (computador - máquina). De esa forma, las declaraciones, tipos, nombres simbólicos, etc. son concesiones de los diseñadores de lenguajes para que los humanos podamos entender mejor lo que se ha escrito en un programa. Por otro lado, la utilización de un vocabulario limitado y de unas reglas estrictas son concesiones para facilitar el proceso de traducción.

En 1938, C. Morris [Morris71] realiza una división del estudio de los signos (semiótica) en tres partes:
•	Sintaxis: relación de los signos entre sí
•	Semántica: Relación de los signos con los objetos a los que se aplican.
•	Pragmática: Relación de los signos con sus intérpretes
Adaptando dichas definiciones al caso particular de lenguajes de programación, la sintaxis se refiere al formato de los programas del lenguaje, la semántica estudia el comportamiento de los programas y la pragmática estudia aspectos relacionados con las técnicas empleadas para la construcción de programas.
Lenguajes de programación: diseño e implementación / Terrence. W. Pratt, Marvin. V. Zelkowitz; traduccido por Héctor Javier Escalona García.

Cadenas, Alfabetos y Lenguajes.
Las cadenas son la unión de símbolos o concatenación desde cero símbolos expresados con la cadena vacía épsilon Ԑ hasta un número infinito de símbolos: ∞, por lo que las cadenas tienen una longitud que se especifica más adelante. Las cadenas por lo general se escriben con letras minúsculas como la u, v, w, etc. Los alfabetos son el conjunto de símbolos que definen un lenguaje formal. Los alfabetos son el conjunto de símbolos que definen un lenguaje formal. Los alfabetos se denotan con ∑ y opcionalmente un subíndice.
Ejemplos de Alfabetos		                 Ejemplos de Cadenas
∑₁ = {0, 1}	∑= Alfabeto			w= 011100 	v= 11
∑₂= {a, b, c}	w= Cadena			u= bcabb

Cuando hay cadenas de un mismo Alfabeto, se pueden concatenar o pegar:
•	wv= 01110011
La concatenación no es conmutativa.
•	Cadena vacía Ԑ
•	ԐX = XԐ = X
La longitud de una cadena es el número de símbolos y tienen un valor absoluto |x|



Ejemplos:
•	|w|= 6	   Longitud 6
•	| Ԑ |= 0    Longitud de Ԑ es 0
Prefijos y subfijos.
Prefijo: Porción inicial de una palabra o cadena subyacente.
Subfijo: Cualquier porción final de una cadena o parte final de la palabra.
Para prefijos y subfijos a manejar, pueden tener un significado por sí solos. Ԑ₁ es un prefijo.
b₁ es un prefijo, al igual que los siguientes:
•	Bc	              Debido a que es cualquier porción inicial de la cadena u. 	
•	bcab
•	bcabb
•	Ԑ₁ es un sufijo
b es un sufijo de la cadena, al igual que los siguientes:
•	Bb
•	Abb
•	Cabb
•	bcabb
Cuando el prefijo no es igual a la palabra completa es un prefijo propio. Los sufijos propios son todos aquellos sufijos que no sean la palabra completa.
•	Conjunto que se puede obtener a partir de cualquier alfabeto.
∑ * Consta de todas las cadenas que se pueden formar con los símbolos de ∑ y es infinito.
•	Ejemplo: 
•	∑₁* = {Ԑ, 0, 1, 00, 01, 10, 11, …, ∞} (Siguen los de tres dígitos, cuatro, etcétera, por eso es infinito)
Lenguajes:  L  C  Z* Lenguaje sobre ∑
•	Por lo que un lenguaje puede ser finito e infinito.



Lenguajes.
•	Ø 	El vacío es formalmente muy útil.
•	{Ԑ}	Tiene el elemento de la palabra vacía, ausencia de símbolos y su longitud es cero (símbolos).
•	∑	Lenguaje
•	∑ *	Lenguaje      	Los elementos también pueden operarse dado que estos son conjuntos.
Operaciones entre lenguajes.
La concatenación.
•	L₁L₂ = {WV | W ∈ L₁, V ∈ L₂} = u u u u … u (n veces) = Ԑ

Cerradura de Kleene.
•	Se denota como L* (V*)
•	En L* están concatenadas todas las palabras contra todas.
Cerradura positiva
•	Siempre tendrá a Ԑ como un elemento
•	Tendrá a Ԑ si L la tenía desde el principio.
Ejemplos:
•	L1 = {a, ab}, L₂ = {b, ba}              
•	 L₁L₂ = {ab, aba, abb, abba} = {Ԑ, a, ab, aa, aab, aba, abab, …}
•	Se suprime Ԑ porque no aparece L₁ = {a, ab, aa, aab, aba, abab, …} 
•	Ԑ está en la cerradura positiva.  (  ) Si y sólo si Ԑ está en L (el lenguaje) originalmente desde un principio.

`
    ]
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
    contenido: [
      `LENGUAJE DE MÁQUINA.
Es el sistema de códigos directamente interpretable por una máquina, como el procesador de un ordenador o computadora. Este lenguaje está compuesto por un conjunto de instrucciones que determinan acciones a ser tomadas por la máquina. Un programa de computadora consiste en una cadena de estas instrucciones de lenguaje de máquina (más datos). 

Estas instrucciones son normalmente ejecutadas en secuencia, con eventuales cambios de flujo causados por el propio programa o eventos externos. El lenguaje de máquina es específico de cada máquina o arquitectura de la máquina, aunque el conjunto de instrucciones disponibles pueda ser similar entre ellas.
 
El lenguaje-máquina sólo utiliza dos signos. Y éstos se corresponden exactamente con las únicas dos constantes del álgebra booleana, y también con los dos estados exclusivos de un conmutador. Estos signos, constantes o estados de conmutación son el 1 y el 0, llamados dígitos binarios.  Claude Elwood Shannon, en su Analysis of Relay and Switching Circuits, y con sus experiencias en redes de conmutación sentó las bases para la aplicación del álgebra de Boole a redes de conmutación.  Una Red de Conmutación es un circuito de interruptores eléctricos que, al cumplir ciertas combinaciones booleanas con las variables de entrada, define el estado de la salida. 

Este concepto es el núcleo de las Compuertas Lógicas, las cuales son por su parte, los ladrillos con que se construyen sistemas lógicos cada vez más complejos.  Shannon utilizaba al “relay” como dispositivo físico de conmutación en sus redes. El “relay”, igual que el interruptor de una lámpara eléctrica, es 1 o es 0; está prendido o está apagado.

El desarrollo tecnológico ha permitido evolucionar desde las redes de relays electromagnéticos de Shannon, pasar a circuitos con tubos de vacío, luego a redes transistorizadas, hasta llegar a los modernos circuitos integrados. El Microprocesador de la CPU de la computadora u ordenador opera en lenguaje-máquina, ya que su repertorio de instrucciones consiste en la ejecución de conjuntos binarios. Por cierto, que Shannon fue quien aportó el término de bit para los guarismos 1 o 0, acrónimo de las palabras inglesas binary digit o el equivalente en español: "dígito binario". 
LENGUAJE ENSAMBLADOR.
El lenguaje ensamblador consiste en una selección de abreviaturas (mnemónicos o mnemoclaves) tomadas de palabras del lenguaje inglés, las cuales dan una idea de su significado. Este lenguaje está muy cercano a la arquitectura de la computadora y se dan instrucciones indicando el direccionamiento para cada instrucción. Este es una versión mnemotécnica del código de máquina, donde se usan nombres (identificadores) en lugar de códigos binarios para operaciones, y también se usan nombres (también identificadores) para las direcciones de memoria.

Existe un lenguaje ensamblador para cada tipo de computadora en especial, por lo que se dice que son dependientes del hardware y de bajo nivel, por lo que suelen ser complejos dependiendo de la capacidad de la computadora, a mayor capacidad mayor complejidad en la elaboración del código en este tipo de lenguaje.
	 Un ejemplo puede ser lo que se muestra a continuación...
`,
      `https://drive.google.com/file/d/14JYNkb4fDsuj7x2k2n6uCIdf5Ju8FXAY/view?usp=drive_link`,
      `Se concibe una pequeña palabra de instrucción, en la que los cuatro primeros bits son el código de la instrucción, donde 0001 y 0010 representan hipotéticamente las instrucciones MOV (mover) y ADD (sumar) respectivamente, el 00 representa (también hipotéticamente) la dirección de la variable a, el 01 representa la dirección de la variable R1, de donde se concluye que las tres instrucciones en ensamblador corresponden a:

MOV a, R1 - Se mueve el contenido de la constante cuya dirección es a (00) a la variable R1 (cuya dirección en 10) y esto equivale a igualar el valor de la variable a= R1
ADD #2, R1	- Se incremente el valor de la variable R1 en dos unidades (que convertidas a binario es 10) y equivale a R1 = R1 + 2
MOV R1, a		El valor que tenga R1 se guarda en la variable a 
			(Igualándolos) R1 = a

De esta forma podemos imaginar que todo lo que se escribe en mnemónicos conlleva una traducción a binario. Según se mostró con un tipo muy particular (ya simplificado) de lenguaje ensamblador, solo con el objetivo de entender una traducción simulada de ensamblador a binario


LENGUAJE DE ALTO NIVEL
La programación en el lenguaje de la máquina o en lenguaje simbólico tiene ciertas ventajas: 
•	Mayor adaptación al equipo. 
•	Posibilidad de obtener la máxima velocidad con mínimo uso de memoria. 
También tienen importantes inconvenientes: 
•	Imposibilidad de escribir código independiente de la máquina. 
•	Mayor dificultad en la programación y en la comprensión de los programas. 
Por esta razón, a finales de los años 1950 surgió un nuevo tipo de lenguaje que evitaba los inconvenientes, a costa de ceder un poco en las ventajas. Estos lenguajes se llaman "de tercera generación" o "de alto nivel", en contraposición a los "de bajo nivel" o "de nivel próximo a la máquina". 
Principales lenguajes de alto nivel 
•	Basic 
•	Pascal, Object Pascal 
•	C, C#, C++ 
•	Python 
•	Rubi
•	Perl 
•	Ada 
•	Cobol 
•	Java 
•	Fortran  
•	Lenguajes funcionales 
o	Lisp 
o	Haskell 
Nota: Dentro de los lenguajes de nivel alto, el lenguaje C y sus derivados son considerados lenguajes de nivel intermedio.

TRADUCTORES
Los traductores son un conjunto de programas, necesarios para lograr la conversión de un código a otro, de un lenguaje a otro y de diferentes niveles. Antes de mostrar los diferentes tipos de traductores es importante remarcar la importancia de la traducción de un código a otro. Para poder lograr la comunicación hombre máquina, simplificando esta labor, se han creado herramientas “traductores” cada vez más cercanos al hombre y más lejanos del lenguaje de máquina, Por esta razón trataremos de definir brevemente que es un nivel.
Los niveles en los programas se consideran tomando en cuenta las características del lenguaje que se utiliza. En términos muy generales, los lenguajes pueden ser:
•	De alto nivel. - Cercanos al hombre y lejanos a las características particulares de la computadora o al lenguaje de máquina.
•	De bajo nivel. - Cercanos a la arquitectura de las computadoras y con gran detalle para el código que realiza el hombre debido a su cercanía con el tipo particular de computadora.
•	De nivel intermedio. - Estos son poderosos como los lenguajes de bajo nivel (ensambladores) y accesibles al hombre, como son los lenguajes de alto nivel. El ejemplo clásico de este tipo de lenguajes de nivel medio, son los que tienen alguna relación con los diferentes tipos de lenguaje C, ya que estos tienen una gran variedad por la cantidad de derivados que se han generado, incluyendo a JAVA.
Con base a lo anterior, existen infinidad de niveles intermedios de traducción o interpretación, los cuales llevan diferentes nombres tales como:
Ensambladores. - Estos existen en gran variedad y en diferentes tipos, de acuerdo con sus particularidades, ya que, dentro de los mismos ensambladores, también incluyen varios tipos de niveles de traductores debido a que son de bajo nivel y dependen de las características específicas de cada computadora. Esto hace que se tenga un tipo especial de ensamblador para cada tipo de procesador en particular, dependiendo de su tamaño de palabra, el número de registros internos con los que cuenta, así como características específicas de sus tipos de direccionamiento. 
Además de las características físicas con las que se diseña un lenguaje ensamblador, estos lenguajes pueden ser identificados de forma genérica, en los siguientes tipos: Los pseudo-ensambladores o emuladores de ensamblador, un ejemplo de este tipo diseñado para el procesador INTEL modelo 80286 es el programa que se ejecuta como comando externo, conocido como el DEBUG. 

Otro tipo de ensambladores son los macroensambladores, también para procesadores INTEL, un ejemplo de este es MASM y los ensambladores en sí. Es importante hacer la diferencia entre el concepto de ensambladores como procesos y como lenguajes, ya que en el proceso de traducción de un lenguaje de programación de alto nivel se requiere traducir a bajo nivel y para esto se tiene un programa o procesador que por lo general proporcionan los sistemas operativos llamado ensamblador (ASSEMBLER), y este adecua el código de un lenguaje de alto nivel a otro de bajo nivel, mismo que es el que la computadora interpreta y ejecuta. 
Los lenguajes ensambladores son a los que nos referimos en la clasificación de los niveles que aquí se describen, ya que un compilador puede incluir una fase de síntesis o ensamble que se describirá con más detalle en las siguientes unidades.

INTÉRPRETES O TRADUCTORES INMEDIATOS.
Estos tienen como principal característica la posibilidad de emitir una repuesta inmediata (en tiempo real), esto es, para cada instrucción se genera una acción o respuesta que se obtiene de la máquina al mismo tiempo que se realiza la interpretación del código escrito por el usuario programador. Este es un nivel de traducción eficiente y económica, debido a que no requiere gran capacidad de almacenamiento, ya que no genera código intermedio y por eso es eficiente al producir una respuesta inmediata. Su inconveniente es que deja el código fuente a disposición del usuario.
Existen lenguajes como BASIC y C de los cuales se han construido versiones compiladas e intérpretes con respuesta inmediata, la diferencia entre uno y otro es la cantidad de recursos que requiere cada tipo de herramienta y los niveles de traducción que a continuación se describen. Es importante ubicar a los traductores, intérpretes y compiladores como herramientas de desarrollo de programas para la utilización de computadoras cualquiera que sea su capacidad y complejidad. Por lo que se abrevian como herramientas de desarrollo o productividad, existiendo una gran variedad por la combinación de sus características.
Niveles de traducción. - Recordemos la necesidad de realizar una comunicación hombre máquina para poder controlar los trabajos que realiza una computadora. Para esto ya se explicó que el nivel más alto de traducción es el lenguaje cercano al hombre, los cuales se conocen como lenguajes naturales tales como el inglés, español, francés, alemán, etc. Estos lenguajes son entendibles para el hombre, pero difíciles de definir en sus reglas gramaticales debido a la gran cantidad de excepciones, así como la variedad de palabras y distintos significados que se requieren para expresar ideas que por lo general están sujetas a un contexto. 

Recapitulando lo anterior, para poder lograr que la máquina identifique palabras, se necesita establecer reglas gramaticales y realizar procesos tales como:
•	Codificación, Análisis, Síntesis, estos tres conocidos como traducción y la parte de interpretación o ejecución del código conocido como tiempo de ejecución o RUN TIME.
•	Codificación es una operación consistente en representar una información o instrucción mediante un código. 
•	Código es un conjunto de reglas que proporcionan una correspondencia biunívoca que permite representar datos, programas y otras informaciones con vistas a facilitar su tratamiento automático o su transmisión. 
•	Análisis es el estudio realizado para separar las distintas partes de un todo. 
•	Síntesis es la unión de esas partes (o la composición) del todo.
En la siguiente figura se presenta un diagrama esquemático de un proceso de codificación, en este se incluye un usuario programador, el cual escribe un código en algún lenguaje de programación. El código se puede introducir directamente en la computadora (de forma interprete) o bien grabar el código en un archivo llamado programa fuente.
La codificación es la que realiza el hombre, las cuales se guardan en un archivo conocido como programa fuente o código fuente. Este programa fuente entra a un proceso de análisis y síntesis conocido como compilación, donde además se realiza la labor de análisis de las palabras estructuradas en el código fuente para verificar que sean léxica, semántica y sintácticamente correctas.

`,
      `https://drive.google.com/file/d/1NBwSPnZGSULIocbok17etCJrhoEMg48j/view?usp=drive_link`,
      `Después de realizado lo anterior, si son correctas, pasan a la fase de análisis y después se aceptan para pasar a la siguiente etapa que es de síntesis y generación de un código que será el que la máquina interpretará y ejecutará. 

De aquí que en esa cantidad de pasos intermedios se tienen una variedad de compiladores que en términos generales y basándonos en sus niveles de traducción, los podemos describir como:
Precompiladores o Preprocesadores, Compiladores y Pseudocompiladores.
Estos conceptos se ilustran a continuación. Los compiladores también se pueden clasificar por el número de pasadas, pero todos estos tipos de compiladores requieren de otro proceso de invocación o ejecución conocido como RUN-TIME. Los dos tiempos que tiene un compilador: COMPILE-TIME y RUN-TIME es otra característica que diferencia a un compilador de un intérprete, ya que éste último solo tiene un tiempo que es una invocación y su inmediata ejecución.
Intérpretes. - Programa que conjunta el tiempo de revisión, análisis, síntesis y ejecución (RUN-TIME), en una sola orden o instrucción. Es eficiente y económico porque no requiere de grandes recursos de almacenamiento y se realiza todo en un solo tiempo.
Compiladores. - Como ya se describió, los diferentes nombres y tipos de compiladores están en función del nivel de traducción que se tiene del código fuente. Cuando el código fuente es de muy alto nivel, por ejemplo, herramientas que se conocen como 5GL (Quinta generación). Que se describirán como los diferentes tipos de lenguajes en la siguiente unidad. 
Los lenguajes 5GL pueden requerir de un preproceso o etapa previa de adaptación o traducción agregada para disminuir el nivel de 5º a 4º nivel y con esto agregarle instrucciones que completen la información que la computadora requiere.
`,
      `Fases y etapas que intervienen, en el proceso de compilación y elementos que intervienen en el proceso de codificación
El código transformado puede ser un conjunto de instrucciones agregadas al código fuente original, puede ser un código en alto nivel, y solo adecuarlo como es el caso de la compilación que se realiza parcialmente denominada precompilación o pseudocompilación o puede generarse un código conocido como objeto que es el lenguaje de máquina que corresponde al código fuente que el usuario programador escribió. 
Sobre los niveles en los lenguajes de programación, ya se había descrito una clasificación sólo de tres niveles:
El alto nivel que corresponde a los lenguajes de programación conocidos como formales y el bajo nivel que corresponde a los lenguajes más cercanos a la arquitectura de la computadora. Pero, dada la diversidad en los lenguajes de programación actuales de los cuales ya son miles. Se han establecido niveles intermedios, como ya se mencionó el ejemplo de un nivel intermedio es el lenguaje C con la variedad de herramientas que se desprenden de este, tales como TURBO C, AWK, C++, gracias a que como ya se mencionó. El lenguaje C y sus derivados, se considera de alto nivel por su facilidad y flexibilidad y de bajo nivel por la posibilidad de administrar los espacios en memoria y su poderío en el uso de recursos computacionales, mismas características que hasta han servido como herramienta para desarrollar el sistema operativo más evolucionado con el que se cuenta actualmente, este es UNIX y sus cientos de clones (el más famoso y actual LINUX).
Otros niveles que a continuación se describen son a juicio particular y temporal, ya que este tema es polémico y no se ha llegado a criterios que se fijen como una norma o estándar para definir a los lenguajes por niveles. Algunos autores en vez de utilizar el término nivel, utilizan el concepto de generaciones de lenguajes de programación, en el entendido de que los lenguajes de programación son todos artificiales o creados por el hombre, diferentes a los lenguajes naturales que se les considera de origen Divino y muchos de los lenguajes naturales se forman de la combinación entre ellos.
Con base a lo anterior, sucede algo similar en los lenguajes de programación o artificiales, de los cuales surgen niveles intermedios a lo largo de la historia, mima que se trata de resumir a continuación:
Nivel cero o de más bajo nivel. Este nivel corresponde al lenguaje de máquina, el cual como ya se mencionó, consiste en unos y ceros integrados en códigos diversos, controlados de forma alambrada o bien con microinstrucciones.


Nivel uno corresponde al lenguaje ensamblador basado en abreviaturas, mnemónicos, mnemotécnicos o mnemoclaves del idioma inglés. Estos son dependientes del hardware y existe un tipo de lenguaje ensamblador para cada tipo de procesador.
Nivel dos o segundo nivel, corresponde al de los lenguajes de programación formales. Estos tienen estructuras y reglas gramaticales muy restrictivas, sólo permiten el uso de datos que se tienen que declarar con anterioridad a su uso (esta es una característica que se conoce como fuertemente “tipeado”) y comprenden un gran número de palabras reservadas o instrucciones particulares para cada lenguaje con formatos específicos, algunos ejemplos de estos lenguajes de segundo nivel son, el compilador de ALGOL, COBOL y FORTRAN. Aquí cabe hacer la aclaración de que algunos autores consideran a este nivel como de primera generación de los lenguajes de programación, considerando solo a los lenguajes de nivel alto como lenguajes, y los del nivel bajo tales como lenguaje de máquina y ensamblador, de bajo nivel, o bien como de nivel cero o generación cero.
Nivel tres, son lenguajes de programación informales que tienen como base la restrictiva formalidad del anterior nivel, pero incluyen estructuras gramaticales más flexibles y dinámicas, mismas que le dan mayor libertad al usuario programador. Aquí nace el lenguaje Basic, después Smalltalk, PASCAL y culmina con el lenguaje C. Al que se le considera también de nivel medio (entre alto y bajo nivel ya mencionado con anterioridad).
Nivel cuatro, conocidos como de cuarta generación, se abrevian como 4GL, estos lenguajes tienen como principal característica facilitarle la labor de codificar al usuario programador. Con esto se crean herramientas tales como: DBASE, SQL, INFORMIX, JAVACREATOR, BLUE JEEN, etc. Estas herramientas son generadoras de código automático. Cabe aclarar que, a partir de la tercera, cuarta y quinta generación existe mayor diversidad de opiniones en base a que no se tiene un consenso estándar sobre las características que guarda cada tipo de lenguaje, este tema se hace cada día más polémico y difícil de definir, se puede decir que al hablar de generaciones o niveles de los lenguajes de programación estamos entrando a un mundo extenso, en constante crecimiento y variabilidad.
Por lo anterior es importante aclarar que se pueden encontrar discrepancias en la forma de clasificar los lenguajes por niveles y generaciones mismas que se puede decir se manejan de forma indistinta en los libros sobre esta materia. Según apreciación personal, es más fina la clasificación de los lenguajes en base a paradigmas de programación y estos son descritos con mayor detalle después de los tipos de traductores sobre los lenguajes. 


Es importante concluir que entre más alto es el nivel que alcanza el lenguaje, más pasos intermedios se deben incluir para lograr una traducción e interpretación de la computadora. Por lo anterior, quizá hasta sea necesario crear preprocesos esto es, procesos previos a la compilación conocidos como precompiladores. Este aspecto está abierto para futuros desarrollos los cuales no presentan un límite, sólo el que la creatividad del programador decida.
 
Ejemplo de un preprocesador o precompilador:
En el siguiente diagrama del lado izquierdo, sólo se esquematiza de forma genérica la función de un pre-proceso que es bajar el nivel del lenguaje a procesar. Este diagrama del lado derecho se puede observar en el código que se escribe para una herramienta 4GL, solo se tienen dos líneas de instrucciones y en una herramienta 3GL, se agregan más instrucciones para realizar la misma función descrita en la herramienta 4GL, que consiste en tomar la base de datos conocida como clientes “customer” y de ella obtener una lista con el nombre y la dirección de los clientes. Este ejemplo corresponde a: SQL Informix.
`,
      `https://drive.google.com/file/d/163OUpVsp-xPv6jk3SXM5iKDc79uwERTv/view?usp=drive_link`,
      `El último ejemplo relacionado con los niveles de traducción es el caso de un pseudocompilador el cual se puede describir como un generador de código intermedio, esto es, se crea un código estándar para lograr algunas ventajas con respecto a la arquitectura de la computadora, de forma muy general tenemos en el siguiente diagrama de bloques un pseudocompilador o máquina virtual.`,
      `https://drive.google.com/file/d/1nB2mRMtRTnnBAMzCW3C1oAKL-2zxy-sV/view?usp=drive_link`,
      `En este caso el pseudocompilador es un generador de código intermedio, cuya principal ventaja es su compatibilidad El ejemplo clásico, conocido y actual de este tipo de herramientas es la máquina virtual de JAVA, donde se tiene un generador de código intermedio conocido con BYTECODE el cual es independiente de la arquitectura de la computadora donde se corre para hacer posible que las aplicaciones corran en cualquier plataforma, lo mismo para UNIX, MACHINTOSH Y MICROSOFT. Una máquina virtual es una capa intermedia de software que se le agrega al hardware para lograr la compatibilidad y el enmascaramiento o bien el ocultamiento de las particularidades del hardware donde se ejecutan las aplicaciones diseñadas para la máquina virtual en cuestión.`,
      `https://drive.google.com/file/d/1hpOofYpD_ji8HM5Gqut_WJfge9Vekb3m/view?usp=drive_link`,
      `Gracias a los pseudocompiladores se tiene una compatibilidad y transportabilidad (fácil implementación en diferentes plataformas) de los programas que se desarrollen con generación de código intermedio. Antes de concluir con el tema de los niveles de traducción, el cual está relacionado con los diferentes tipos de interpretación, es importante remarcar que entre más bajo es el nivel del lenguaje que se utiliza en el programa fuente, más sencillo es el proceso que se realiza para obtener la traducción al lenguaje de máquina.
Otro ejemplo es el codificar un programa fuente al lenguaje ensamblador, donde se tiene solo un proceso para lograr obtener un código de máquina ejecutable. Es importante remarcar la importancia que tiene este tipo de herramientas de bajo nivel, pues siguen dando eficiencia y poderío en el uso de recursos computacionales. 
Ya para concluir sobre los niveles de traducción es importante remarcar que, con el éxito de la computadora personal, se tienen muchas facilidades en cuanto a herramientas de desarrollo y paqueterías, pero es difícil, por ejemplo, pensar que se tienen microprocesadores con velocidades medibles en gigahertzs y aún no se tiene un ensamblador para procesador INTEL PENTIUM. Por lo que en este tema se pretende aprovechar la necesidad de crear niveles de traducción más eficientes y realizarlos con herramientas de bajo nivel como son los ensambladores.

Ejemplo de un proceso de ensamble…
`,
      `https://drive.google.com/file/d/1N7nLnrW6qN8cA2ERDTUVETvgOe8nEpuQ/view?usp=drive_link`,
      `Paradigmas de los lenguajes de programación. - Para completar el tema sobre los niveles de traducción, ya se mencionó que una cualidad más detallada sobre los diferentes lenguajes que se han diseñado hasta la fecha son los paradigmas o modelos a los que responden los actuales lenguajes. 
A continuación, se da una lista con los paradigmas o modelos que tienen los lenguajes actuales de programación, no sin olvidar que cada día se puede desarrollar un nuevo lenguaje o paradigma. Ya que los lenguajes que se conocen hasta la fecha corresponden a los modelos actuales o paradigmas conocidos con la tecnología que existe en este momento, pero estos generarán nuevos modelos, mismos que guardan características heredadas, tal como los hijos se parecen a sus padres.  

Los paradigmas conocidos hasta la fecha son:
Imperativo. - Corresponden a la arquitectura de John Von Newmann “programa almacenado en memoria”, con instrucciones estructuradas, funciones y manejo de memoria dinámica con apuntadores a direcciones de memoria que controla el usuario. Ejecución señalizada. Ejemplos: ALGOL, COBOL y FORTRAN.
Funcional (operacional). - Los lenguajes que responden a este modelo optimizan la representación interna de los datos y le dan particular importancia al orden de las decisiones que se toman en la lógica del código. Este paradigma está basado en la optimización de los datos que se almacenan en memoria. El ejemplo más representativo de este tipo de paradigma es LISP.
J. McCarthy “Recursive Functions of Symbolic Expressions and Their Computation by Machine. Part 1. Comm ACM Vol. 3 No. 4. abril de 1960 páginas 184-195.

Orientado a objetos. - Este quizá es el paradigma más difundido y conocido para los nuevos programadores, ya que pretende facilitar la labor de codificar el detalle de cómo resolver un problema. Los lenguajes orientados a objetos proporcionan una gran cantidad de elementos con los cuales no se tiene que definir el cómo, sólo lo que se desea obtener del lenguaje y aprovechar el encapsulamiento (ocultamiento y protección del código), la inferencia, el paso de mensajes, las clases, subclases, la herencia, etc. El primer lenguaje representativo de este paradigma es el Smalltalk (en 1980), luego C++ (en 1986), el Object Pascal (en 1989), Object Cobol (en 1993) hasta el actual y exitoso Java (en 1995).
Asíncrono. - Este paradigma y el que se describe a continuación corresponde a las nuevas arquitecturas avanzadas de las computadoras, pueden optimizar las características de los microprocesadores con tipo de procesamiento paralelo o vectorial. Este paradigma corresponde a procesos asíncronos (en diferentes tiempos de ejecución) los cuales se hacen posibles mediante la comunicación entre procesos. El lenguaje de programación LINDA es un ejemplo representativo de uno de los lenguajes que agrega estas facilidades, tomando como base a los lenguajes C y FORTRAN.
Síncrono. - En este modelo se tiene un procesamiento paralelo con alto grado de acoplamiento. Debe de haber una sincronía en todos los procesos que se ejecutan al mismo tiempo. Un ejemplo de un lenguaje que corresponde a este paradigma es el ACTUS, Paralation LISP que proveen construcciones independientes de la arquitectura de la computadora.


Funcional (definicional). - Este paradigma ofrece mayores facilidades que el paradigma operacional, pues tiene una gran variedad de funciones que el usuario programador puede utilizar para simplificar su código. Un ejemplo de este tipo de lenguajes es el lenguaje de programación llamado Miranda y el Haskell. Este último es un polimorfismo estático (variedad de formas predefinidas) derivadas de Miranda y ambos lenguajes (Miranda y Haskell) se caracterizan por tener funciones de alto orden, usar datos algebraicos definidos por el usuario y un sistema de clases. También proporciona operadores con redireccionamiento dinámico (overloading), sistema funcional de entradas y salidas, arreglos funcionales y compilación por separado.
Transformacional. - Este paradigma permite definir reglas sobre argumentos y términos que se reescriben. El ejemplo representativo de este tipo de lenguaje es Bertrand, que corresponde a la característica de ser un lenguaje de especificación basado en reglas, sobre argumentos y términos que se pueden reescribir. En los lenguajes restrictivos el usuario programador debe especificar explícitamente los árboles de búsqueda y la propagación restrictiva que es la característica básica de este paradigma transformacional.
Lógico. - Este paradigma emplea la lógica y las reglas de inferencia, tratando de adecuarse al lenguaje natural. El ejemplo representativo de este paradigma es PROLOG y todos sus derivados.
Basado en formas (Form-based). - Este es el paradigma que corresponde a todas las hojas electrónicas de cálculo que se han diseñado, desde Visical, Lotus hasta MS-Excel, iWork, OpenOffice, Tables, Mesa, Mariner Calc, Papyrus Office, Ragtime 6, Neo Office Calc, ThinkFree Calc, KSpread 2.
De flujo de datos (dataflow). - Los lenguajes que corresponden a este paradigma se programan a través de elementos gráficos. Un ejemplo de este lenguaje es “Show and Tell”. 
Restringido (constraint). - Especifica la relación que debe permanecer. El usuario programador es el responsable de especificar la relación y el sistema es el encargado de mantenerla. Aunque no se tienen muchos lenguajes que respondan a este paradigma, un ejemplo que corresponde a este paradigma es el lenguaje visual ThigLab.
Demostracional. - Mejor conocido como de “Query by example”. ¿En este paradigma se presenta el “qué quiero?” con un ejemplo y automáticamente se genera código, mismo que le indica a la computadora el cómo obtener lo que quiero con una generación inmediata de resultados.


Otro enfoque de clasificar a los traductores de forma genérica en ciencias de la computación es definir a los procesadores de lenguajes como aquellos programas destinados a trabajar sobre una entrada que por la forma como ha sido elaborada, pertenece a un lenguaje en particular reconocido o aceptado por el programa en cuestión. Los procesadores de lenguajes se clasifican como traductores o intérpretes.
Un traductor es un programa que recibe una entrada escrita en un lenguaje (el lenguaje fuente) a una salida perteneciente a otro lenguaje (el lenguaje de bajo nivel), conservando su significado. En términos computacionales esto significa que tanto la entrada como la salida sean capaces de producir los mismos resultados. Un intérprete, por otra parte, no lleva a cabo tal transformación; en su lugar obtiene los resultados conforme va analizando la entrada. Los traductores son clasificados en compiladores, ensambladores y preprocesadores.
•	Traductor: Es una máquina teórica que tiene como entrada un texto escrito en un lenguaje L1 y como salida un texto escrito en un lenguaje L2. Habitualmente se denomina a L1 lenguaje fuente y a L2 lenguaje objeto. Las técnicas que se desarrollan en esta asignatura no sólo son válidas para la implementación de compiladores, sino que son aplicables en general a todos los sistemas de procesamiento de lenguajes y de traducción. Estos sistemas pueden ser de distintos tipos:
•	Traductores de lenguaje natural: Serían los que tradujeran un lenguaje natural en otro (por ejemplo, español a inglés). Esto en la actualidad no se ha conseguido debido fundamentalmente a la ambigüedad del lenguaje natural. Los mayores logros en la materia siempre trabajan con un subconjunto del lenguaje natural, limitando las construcciones sintácticas válidas y/o el vocabulario. Este tema se aborda generalmente mediante técnicas de inteligencia artificial. Compilador: Es un traductor que convierte un texto escrito en un lenguaje fuente de alto nivel en un programa objeto en código máquina.
•	Intérprete: Es un traductor que realiza la operación de compilación paso a paso. Para cada sentencia que compone el texto de entrada, se realiza una traducción, ejecuta dicha sentencia y vuelve a iniciar el proceso con la sentencia siguiente. La principal ventaja del proceso de compilación frente al de interpretación es que los programas se ejecutan mucho más rápidamente una vez compilados; por el contrario, es más cómodo desarrollar un programa mediante un intérprete que mediante un compilador puesto que en el intérprete las fases de edición y ejecución están más integradas. La depuración de los programas suele ser más fácil en los intérpretes que en los compiladores puesto que el código fuente está presente durante la ejecución. 

Estas ventajas pueden incorporarse al compilador mediante la utilización de entornos de desarrollo y depuradores simbólicos en tiempo de ejecución. Preprocesadores: Procesan un texto fuente modificándolo en cierta forma previamente a la compilación. Por ejemplo, muchos compiladores admiten un conjunto de macroinstrucciones ajenas al lenguaje en sí que indican al compilador si tiene que incluir algún fichero externo, si ha de hacer o no un listado completo de la compilación, etc.
Conversores Fuente-Fuente: (LCP) Traducen un lenguaje fuente de alto nivel a otro (por ejemplo, PASCAL C). Una aplicación interesante de la traducción fuente-fuente es el desarrollo e implementación de prototipos de nuevos lenguajes de programación. Así, por ejemplo, si se desea definir un lenguaje especializado puede implementarse rápidamente mediante su traducción a un lenguaje convencional de alto nivel.
Rutinas de análisis de instrucciones: El conjunto de instrucciones del entorno de un sistema operativo constituye un lenguaje que debe ser analizado previamente para realizar las acciones oportunas. Igualmente, ciertos programas como editores de texto, sistemas de diseño asistido, etc., utilizan instrucciones complejas que deben interpretarse adecuadamente. Ensambladores: Son compiladores cuyo lenguaje de entrada, llamado ensamblador, permite la traducción de cada sentencia fuente a una instrucción en código máquina. Compilador cruzado: Es el que genera un código objeto ejecutable en un ordenador distinto de aquél en el que se realiza la compilación.
Compilación-Montaje-Ejecución: En las aplicaciones grandes es conveniente fragmentar el programa a realizar en módulos que se compilan por separado, y una vez que estos estén compilados unirlos mediante un programa denominado montador para formar el módulo ejecutable. El montador se encarga, a su vez, de incluir las librerías donde están guardadas las funciones predefinidas de uso común.
Compilación en una o varias pasadas: Se llama pasada a cada lectura que hace el compilador del texto fuente. Compilación incremental. Este compilador actúa de la siguiente manera. Compila un programa fuente. Caso de detectar errores al volver a compilar el programa corregido sólo compila las modificaciones que se han hecho respecto al primero.
Auto compilador: Es aquél que está escrito en el mismo lenguaje que se pretende compilar. Supongamos, por ejemplo, que queremos desarrollar la versión 2.0 de un compilador Pascal. Dicho compilador generará un código mucho más rápido y eficiente que el que generaba la versión anterior 1.0. Sin embargo, son ya muchas las máquinas (IBM 370, Serie 1, PDP 11, ...) que disponen del antiguo compilador, o que al menos tienen otro compilador Pascal. 

La mejor opción consiste en escribir el nuevo compilador en Pascal, ya que así podrá (el compilador) ser compilado en las distintas máquinas por los compiladores Pascal ya existentes.
•	Metacompilador: Es un traductor que tiene como entrada la definición de un lenguaje y como salida el compilador para dicho lenguaje.
•	Decompilador: Es el que traduce código máquina a lenguaje de alto nivel. Los decompiladores más usuales son los desensambladores, que traducen un programa en lenguaje máquina a otro en ensamblador.
•	Bootstrapping. Es una técnica muy usada actualmente para el desarrollo de compiladores de lenguajes de alto nivel, en especial si se quiere obtener un auto-compilador, o sea, un compilador que se compile a sí mismo.
Para describir el proceso de autocomparación se emplea la notación en T que representa gráficamente los tres lenguajes implicados en el proceso de compilación:
`,
      `https://drive.google.com/file/d/1lgPiyXyTZH8oGgNiXpNWHv6GdrhiO_Wp/view?usp=drive_link`,
      `
•	Lenguaje objeto: Lenguaje meta, al cual traduce el compilador. 
•	Lenguaje del compilador: Lenguaje en el que está escrito el compilador. 


Supongamos que se quiere implementar un nuevo lenguaje A(N) en una máquina determinada. Disponemos solamente de un ensamblador para dicha máquina. En principio parece que la solución es escribir un compilador en lenguaje ensamblador que traduzca desde el lenguaje A(N) al lenguaje máquina LM.
`,
      `https://drive.google.com/file/d/1To709jDVbYjszmkc3bpUMmnH_8htgzI5/view?usp=drive_link`,
      `Diagrama esquemático. 
Esto en la práctica resulta bastante complicado, dado que programar en ensamblador es muy laborioso.
Lo que se hace en estos casos es desarrollar un lenguaje restringido A (1), parecido al A(N) pero más simple, y para este lenguaje escribir el compilador en ensamblador, o en cualquier otro lenguaje soportado por la máquina.
Una vez construido este compilador, y dado que nuestra máquina es ya capaz de entender el lenguaje A (1), se puede desarrollar un compilador para otro lenguaje A (2) escribiéndolo en el lenguaje A (1), y así sucesivamente hasta llegar a obtener un auto compilador del lenguaje A(N). Esta técnica se conoce como bootstrapping.
`,
      `https://drive.google.com/file/d/1c1hOphF3GeP9IY64MPD874cE0qCmtEV_/view?usp=drive_link`,
      `Diagrama esquemático de Lenguaje fuente: Lenguaje origen que traduce el compilador. 
El primer compilador de Pascal desarrollado en Zurich por Wirth fue posible gracias a esta técnica. El conocido compilador C de GNU emplea también este mecanismo en tres pasos.
`
    ]
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
    contenido: [
      `Estructura de un compilador.
Un compilador es un programa, en el que pueden distinguirse dos subprogramas o fases principales: una fase de análisis, en la cual se lee el programa fuente y se estudia la estructura y el significado de este; y otra fase de síntesis, en la que se genera el programa objeto.


En un compilador pueden distinguirse, además, algunas estructuras de datos comunes, la más importante de las cuales es la tabla de símbolos, junto con las funciones de gestión de ésta y de los demás elementos del compilador, y de una serie de rutinas auxiliares para detección de errores.
`,
      `https://drive.google.com/file/d/1-U4ATrfpKGrC9nTbss1C4lEuu4pJJWSA/view?usp=drive_link`,
      `Esquema de un compilador.
Las funciones de estos módulos son las siguientes:

Analizador lexicográfico: Las principales funciones que realiza son:
•	Identificar los símbolos. 
•	Eliminar los blancos, caracteres de fin de línea, etc... 
•	Eliminar los comentarios que acompañan al código fuente. 
•	Crear unos símbolos intermedios llamados tokens. 
•	Avisar de los errores que detecte. 

Ejemplo: A partir de la sentencia en PASCAL:

nuevo: = viejo + RAZON*2

Genera un código simplificado para el análisis sintáctico posterior, por ejemplo:

<id1> <: => <id2> <+> <id3> <*> <ent>

Nota: Cada elemento encerrado entre <> representa un único token. Las abreviaturas id y ent significan identificador y entero, respectivamente.

Analizador Léxico. Comprueba que las sentencias que componen el texto fuente son correctas en el lenguaje, creando una representación interna que corresponde a la sentencia analizada. De esta manera se garantiza que sólo serán procesadas las sentencias que pertenezcan al lenguaje fuente. Durante el análisis sintáctico, así como en las demás etapas, se van mostrando los errores que se encuentran.

Ejemplo: El esquema de la sentencia anterior corresponde al de una sentencia de asignación del lenguaje Pascal. Estas sentencias son de la forma:

<id> <: => <EXPRESION>

y la parte que se denomina <EXPRESION> es de la forma:

•	<id> <+> <EXPRESION> o bien 
•	<id> <*> <EXPRESION> o bien 
•	<real> 


La estructura de la sentencia queda, por tanto, de manifiesto mediante el siguiente esquema:
`,
      `https://drive.google.com/file/d/1fuVQc50UOCpIbPurmkHFQhH7OdMyKW5u/view?usp=drive_link`,
      `Análisis semántico: Se ocupa de analizar si la sentencia tiene algún significado. Se pueden encontrar sentencias que son sintácticamente correctas pero que no se pueden ejecutar porque carecen de sentido. En general, el análisis semántico se hace a la par que el análisis sintáctico introduciendo en éste unas rutinas semánticas.

Ejemplo: En la sentencia que se ha analizado existe una variable entera. Sin embargo, las operaciones se realizan entre identificadores reales, por lo que hay dos alternativas: o emitir un mensaje de error "Discordancia de tipos", o realizar una conversión automática al tipo superior, mediante una función auxiliar inttoreal.

<id1> <: =>  <EXPRESION>   
                         /   |   \           
<id2> <+> <EXPRESION> 
                     /   |   \                   
<id3> <*> <EXPRESION>
                                  |
                                <real>
                                  |
                             <inttoreal>
                                  | 
                               <int>

Generador de código intermedio: El código intermedio es un código abstracto independiente de la máquina para la que se generará el código objeto. El código intermedio ha de cumplir dos requisitos importantes: ser fácil de producir a partir del análisis sintáctico, y ser fácil de traducir al lenguaje objeto. Esta fase puede no existir si se genera directamente código máquina, pero suele ser conveniente emplearla.




Ejemplo: Consideremos, por ejemplo, un código intermedio de tercetos, llamado así porque en cada una de sus instrucciones aparecen como máximo tres operandos. La sentencia traducida a este código intermedio quedaría:

temp1: = inttoreal (2) temp2: = id3 * temp1temp3: = id2 + temp2id1: = temp3

Optimizador de código: A partir de todo lo anterior crea un nuevo código más compacto y eficiente, eliminando por ejemplo sentencias que no se ejecutan nunca, simplificando expresiones aritméticas, etc. La profundidad con que se realiza esta optimización varía mucho de unos compiladores a otros. En el peor de los casos esta fase se suprime.

Ejemplo: Siguiendo con el ejemplo anterior, es posible evitar la función inttoreal mediante el cambio de 2 por 2.0, obviando además una de las operaciones anteriores. El código optimizado queda como sigue:

temp1: = id3 * 2.0id1: = id2 + temp1

Generador de código: A partir de los análisis anteriores y de las tablas que estos análisis van creando durante su ejecución produce un código o lenguaje objeto que es directamente ejecutable por la máquina. Es la fase final del compilador. Las instrucciones del código intermedio se traducen una a una en código máquina reubicable.

Nota: Cada instrucción de código intermedio puede dar lugar a más de una de código máquina.

Ejemplo: El código anterior traducido a ensamblador DLX quedaría:

LW R1, id3 MUL R1, R1,2 LW R2, id2 ADD R2, R2, R1 SW id1, R2

En donde id1, id2 y id3 representan las posiciones de memoria en las que se hallan almacenadas estas variables; R1 y R2 son los registros de la máquina; y las instrucciones LW, SW, MUL y ADD representan las operaciones de colocar un valor de memoria en un registro, colocar un valor de un registro en memoria, multiplicar en punto flotante y sumar, respectivamente.
La tabla de símbolos: Es el medio de almacenamiento de toda la información referente a las variables y objetos en general del programa que se está compilando.


Ejemplo: Hemos visto que en ciertos momentos del proceso de compilación debemos hacer uso de cierta información referente a los identificadores o los números que aparecen en nuestra sentencia, como son su tipo, su posición de almacenamiento en memoria, etc. Esta información es la que se almacena en la tabla de símbolos.

Rutinas de errores: Están incluidas en cada uno de los procesos de compilación (análisis lexicográfico, sintáctico y semántico), y se encargan de informar de los errores que encuentran en texto fuente.

Ejemplo: El analizador semántico podría emitir un error (o al menos un aviso) cuando detectase una diferencia en los tipos de una operación.

ENSAMBLADOR:
Un ensamblador es el programa encargado de llevar a cabo un proceso denominado de ensamble o ensamblado. Este proceso consiste en que, a partir de un programa escrito en lenguaje ensamblador, se produzca el correspondiente programa en lenguaje máquina (sin ejecutarlo), realizando:
•	La integración de los diversos módulos que conforman al programa. 
•	La resolución de las direcciones de memoria designadas en el área de datos para el almacenamiento de variables, constantes y estructuras complejas; así como la determinación del tamaño de éstas. 
•	La identificación de las direcciones de memoria en la sección de código correspondientes a los puntos de entrada en saltos condicionales e incondicionales junto con los puntos de arranque de las subrutinas. 
•	La resolución de los diversos llamados a los servicios o rutinas del sistema operativo, código dinámico y bibliotecas de tiempo de ejecución. 
•	La especificación de la cantidad de memoria destinada para las áreas de datos, código, pila y montículo necesaria y otorgada para su ejecución. 
•	La incorporación de datos y código necesarios para la carga del programa y su ejecución. 
Turbo Assembler. - De Borland Intl., es muy superior al Turbo Editassm. Trabaja de la misma forma, pero proporciona una interfaz mucho más fácil de usar y un mayor conjunto de utilerías y servicios.



Un precompilador, también llamado preprocesador, es un programa que se ejecuta antes de invocar al compilador. Este programa es utilizado cuando el programa fuente, escrito en el lenguaje que el compilador es capaz de reconocer (de aquí en adelante denominado lenguaje anfitrión-- en inglés “host language”), incluye estructuras, instrucciones o declaraciones escritas en otro lenguaje (el lenguaje empotrado-- en inglés “embeded language”). El lenguaje empotrado es siempre un lenguaje de nivel superior o especializado (Por ejemplo, de consulta, de cuarta generación, simulación, cálculo numérico o estadístico, etcétera). Siendo que el único lenguaje que el compilador puede trabajar es aquel para el cual ha sido escrito, todas las instrucciones del lenguaje empotrado deben ser traducidas a instrucciones del lenguaje anfitrión para que puedan ser compiladas. Así púes un precompilador también es un traductor.
Los precompiladores son una solución rápida y barata a la necesidad de llevar las instrucciones de nuevos paradigmas de programación (Por ejemplo, los lenguajes de cuarta generación), extensiones a lenguajes ya existentes (como el caso de C y C++) y soluciones de nivel conceptual superior (por ejemplo, paquetes de simulación o cálculo numérico) a código máquina utilizando la tecnología existente, probada, optimizada y confiable (lo que evita el desarrollo de nuevos compiladores). Facilitan la incorporación de las nuevas herramientas de desarrollo en sistemas ya elaborados (por ejemplo, la consulta a bases de datos relacionales substituyendo las instrucciones de acceso a archivos por consultas en SQL). Resulta común encontrar que el flujo de proceso en los lenguajes de cuarta generación o de propósito especial puede resultar demasiado inflexible para su implantación en los procesos de una empresa, flujos de negocio o interacción con otros elementos de software y hardware, de aquí que se recurra o prefiera la creación de sistemas híbridos soportados en programas elaborados en lenguajes de tercera generación con instrucciones empotradas de nivel superior o propósito especial.
Un pseudocompilador es un programa que actúa como un compilador, salvo que su producto no es ejecutable en ninguna máquina real sino en una máquina virtual. Un pseudocompilador toma de entrada un programa escrito en un lenguaje determinado y lo transforma a una codificación especial llamada código de byte. Este código no tendría nada de especial o diferente al código máquina de cualquier microprocesador salvo por el hecho de ser el código máquina de un microprocesador ficticio. Tal procesador no existe, en su lugar existe un programa que emula a dicho procesador, de aquí el nombre de máquina virtual.
La ventaja de los pseudocompiladores que permite tener tantos emuladores como microprocesadores reales existan, pero sólo se requiere un compilador para producir código que se ejecutará en todos estos emuladores. Este método es una de las respuestas más aceptadas para el problema del tan ansiado lenguaje universal o código portable independiente de plataforma.

Un intérprete es un programa que ejecuta cada una de las instrucciones y declaraciones que encuentra conforme va analizando el programa que le ha sido dado de entrada (sin producir un programa objeto o ejecutable). La ejecución consiste en llamar a rutinas ya escritas en código máquina cuyos resultados u operaciones están asociados de manera unívoca al significado de las instrucciones o declaraciones identificadas.
Los intérpretes son útiles para el desarrollo de prototipos y pequeños programas para labores no previstas. Presentan la facilidad de probar el código casi de manera inmediata, sin tener que recurrir a la declaración previa de secciones de datos o código, y poder hallar errores de programación rápidamente. Resultan inadecuados para el desarrollo de complejos o grandes sistemas de información por ser más lentos en su ejecución.
Los programas interpretados suelen ser más lentos que los compilados, pero los intérpretes son más flexibles como entornos de programación y depuración.  Comparando su actuación con la de un ser humano, un compilador equivale a un traductor profesional que, a partir de un texto, prepara otro independiente traducido a otra lengua, mientras que un intérprete corresponde al intérprete humano, que traduce de viva voz las palabras que oye, sin dejar constancia por escrito. Los intérpretes de instrucciones pueden tener Interfaces Graficas de usuario en inglés “GUI´s” (Graphical User Interface), se pueden usar desde el cmd (command) del sistema operativo o bien la consola de operación también en archivos por lotes o conjunto de instrucciones conocidos como “.bat” (batch).
COMPILADOR:
Un compilador es un programa que recibe como entrada un programa escrito en un lenguaje de nivel medio o superior (el programa fuente) y lo transforma a su equivalente en lenguaje ensamblador (el programa objeto), e inclusive hasta lenguaje máquina (el programa ejecutable) pero sin ejecutarlo. Un compilador es un traductor. La forma de como llevará a cabo tal traducción es el objetivo central en el diseño de un compilador.
`
    ]
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
    contenido: [
      `CONCEPTO
Un compilador es un programa que recibe como entrada un programa escrito en un lenguaje X y deja otro programa escrito en un lenguaje Y. 


Es usual que se realicen compiladores que logren la traducción de un lenguaje de nivel medio o superior (el programa fuente) y lo transforma a su equivalente en lenguaje ensamblador (el programa objeto), e inclusive hasta lenguaje máquina (el programa ejecutable) pero sin ejecutarlo. Un compilador es un traductor. La forma de cómo llevará a cabo tal traducción es el objetivo central en el diseño de un compilador.
`,
      `https://drive.google.com/file/d/1yhrq-CjvmAIp_7ANQbi6FLHynZcDE-Ul/view?usp=drive_link`,
      `PROCESO DE INTERPRETACIÓN
Aunque es equivocado, es común encontrar referencias en documentación de productos, publicidad y textos (inclusive escuchar a la gente del medio informático), utilizando los términos traductor, compilador e intérprete de una forma libre e indistinta. Estas palabras no se utilizan para identificar de manera genérica a un programa que nos permitiría poder programar una computadora. Debemos ser precisos al emplear estas palabras, ya que se refieren a programas de distinta naturaleza que realizan labores encaminadas a un objetivo específico y particular. Aunque la conducta manifestada pueda ser similar, su comportamiento interno definitivamente es diferente.
Genéricamente hablando, en ciencias de la computación, lo procesadores de lenguajes son aquellos programas destinados a trabajar sobre una entrada que, por la forma en la que ha sido elaborada, pertenece a un lenguaje en particular reconocido o aceptado por el programa en cuestión. Los procesadores de lenguajes se clasifican como traductores o intérpretes.
Un traductor es un programa que recibe una entrada escrita en un lenguaje (el lenguaje fuente), a una salida perteneciente a otro lenguaje (el lenguaje objeto), conservando su significado. En términos computacionales esto significa que tanto la entrada como la salida sean capaces de producir los mismos resultados. Un intérprete, por otra parte, no lleva a cabo tal transformación; en su lugar obtiene los resultados conforme va analizando la entrada. Los traductores son clasificados en compiladores, ensambladores y preprocesadores.


Un ensamblador es el programa encargado de llevar a cabo un proceso denominado de ensamble o ensamblado.

PROCESO DE COMPILACIÓN
Lo primero que hace es el reconocimiento de caracteres para identificar que las instrucciones que introdujo el usuario programador estén léxica y sintácticamente de acuerdo con el lenguaje de programación.
Después realiza un manejo de errores y consulta a la tabla de símbolos para avisar que el usuario programador realice su corrección.
Una vez corregidos los errores y comprobada la fase de análisis, se realiza una traducción o conversión de un código a otro cercano a la máquina en la fase de síntesis.
El código que se produce de este proceso es estático, pues el código que se genera en la traducción tiene posteriormente que invocarse o ejecutarse para obtener una acción o resultado.
En la invocación del código se tiene una alta eficiencia, pues éste ya está en lenguaje de máquina y adecuado para obtener una respuesta más eficiente, que la que se obtiene en un intérprete. 
Lo anterior se trata de esquematizar en el siguiente diagrama.
En la fase de síntesis se realiza la generación de código y en algunos compiladores se da también en esta fase la optimización de código.
Independientemente de estas dos fases se puede requerir un pre-proceso para adecuar el código fuente. Y en ambas fases se consulta la tabla de símbolos para el manejo de errores.  Esto se muestra en la siguiente Figura.
Fases y Componentes. - Como ya se describió un compilador puede tener dos fases: La fase de análisis y la de síntesis.
Dentro de la fase de análisis está el análisis léxico, sintáctico y semántico (conceptos que se describen más adelante). Con un manejo de errores y consulta en la tabla de símbolos. Diagrama esquemático de las dos fases de un compilador.
`,
      `https://drive.google.com/file/d/1CRxcYYcSA1bBroqv5Xad8QMMKkRGoGrM/view?usp=drive_link`,
      `Análisis y Síntesis. - Estas dos actividades, dependiendo de la fuente de información que se consulte, se pueden encontrar definidas como fases o bien como etapas. Para efectos de este material, se describirán las dos como fases básicas, mismas que requiere un compilador. Dentro de la fase de análisis también definiremos a los tres tipos de análisis como etapas a cada una de ellas. Representadas con rectángulos en el diagrama anterior. 
La fase de análisis permite separar cada uno de los símbolos o caracteres que integran el código fuente, les asigna un componente léxico conocido como token, que es código numérico que facilita el chequeo posterior; se toma de la tabla de símbolos para su posterior procesamiento; donde se realiza el análisis sintáctico con base a las gramáticas del lenguaje y posteriormente el análisis semántico que da un significado a los conjuntos de tokens para después realizar la conversión en la siguiente fase.
`,
      `https://drive.google.com/file/d/1L9Pmg-5plZTd06vzpXKIAVbcEVQTVeeE/view?usp=drive_link`,
      `Diagrama esquemático de las fases y etapas de un compilador
En la fase de síntesis se toman los elementos por separado, ya aceptados, y se genera código con ellos, en los que se le agregan códigos adecuados a la máquina. Se tratará de esquematizar esos pasos de análisis y síntesis en el siguiente ejemplo.
Ejemplo. - Tomemos la siguiente cadena de una sencilla instrucción...    PRINT X
•	Análisis Léxico. - Es recibir la cadena PRINT y al identificar cada uno de los caracteres, consulta la tabla de símbolos, si es correcto y se encuentra en la tabla de símbolos: le genera un token para este caso, de manera hipotética se asigna como token el 503 y se da de alta el identificador X como variable, también asignándole un token, para este ejemplo es 001.
•	Análisis Sintáctico. - Se tiene como entrada dos tokens...503 001. Con base a la búsqueda en el orden definido como parsing de la gramática que acepta el lenguaje, tenemos que la cadena puede ser aceptada y pasar al 

siguiente análisis o bien, puede ser rechazada y generar un error de sintaxis (es decir, un orden no aceptado entre los dos elementos (el “PRINT” y la “X”). Un error de sintaxis puede ser X PRINT o bien PRNT X.  
•	Análisis Semántico. - Una vez que se pasa el análisis léxico y sintáctico se da un significado a los conjuntos de tokens aceptados y se le da un significado en otro lenguaje más cerca de la computadora. El significado se toma de la tabla de símbolos donde se obtiene un código equivalente pero más detallado.
Generación de Código. - Para este ejemplo, de dos cadenas en una sola instrucción, se toma un código equivalente en un ensamblador ficticio que puede ser:
Optimización de Código. - Siguiendo con el mismo ejemplo de una sola instrucción de impresión y con una emulación simulada queda...
`,
      `https://drive.google.com/file/d/1QE6V9p8f4V7tmuRyqKQ985Tcfqa7TGpf/view?usp=drive_link`,
      `La siguiente figura presenta un diagrama que ilustra de forma general las dos fases que componen al proceso de compilación y cada fase desglosada en sus etapas componentes. En una primera fase de análisis el programa es descompuesto en sus elementos fundamentales.
En la posterior fase de síntesis es construido el programa ejecutable correspondiente a los elementos identificados en la fase previa. El proceso es irreversible e inclusive puede considerarse destructivo, ya que no hay forma de reconstruir el programa fuente a partir del ejecutable.


Etapas del proceso de compilación.
Únicamente por facilidad descriptiva, el proceso es presentado con las etapas que componen a cada fase perfectamente diferenciadas y separadas; aunque en la práctica los límites no son estrictamente bien definidos; en la práctica se ha demostrado que productos muy rápidos y eficientes pueden ser desarrollados alterando el orden de algunas etapas o entremezclándolas. La entrada a este proceso es por supuesto el programa fuente. Por lo general este es un archivo que es creado por el usuario como un texto ASCII con o sin un formato específico, aunque también puede ser el resultado de algún otro proceso. A partir de este archivo, diversos pasos pueden ser llevados a cabo:
Preprocesamiento. - Un preprocesador es la estrategia generalmente adoptada como solución a lenguajes huéspedes, extensiones, lenguajes 4GL, o lenguajes de dominio específico. El preprocesador es un traductor encargado de transformar dichas instrucciones a instrucciones del lenguaje anfitrión, sobre las cuales finalmente trabajará el compilador. Esta etapa es definitivamente opcional.

`,
      `https://drive.google.com/file/d/12zseCF_BWdO_wvMH2bhTeArJ_upPBgK7/view?usp=drive_link`,
      `El anterior es un Diagrama esquemático completo de proceso de compilación

•	Análisis Léxico. - En esta fase, la cadena de caracteres que conforma al programa fuente es despojada de comentarios, espacios en blanco y otros elementos superfluos. El programa encargado de hacer esto es conocido como un scanner, y de aquí que al proceso se le refiera comúnmente como scanning (exploración). Durante esta fase se identifican los elementos gramaticales usados en la creación del programa. Cada elemento identificado es substituido por un código numérico conocido como token.
•	Análisis Sintáctico. - La cadena de tokens resultante es alimentada a un programa conocido como parser. El parser es el encargado de verificar que la secuencia y disposición de los tokens corresponda con la sintaxis del lenguaje. Este proceso de verificación sintáctica es conocido como parsing y es completamente guiado por la gramática del lenguaje. 
•	Análisis Semántico y Generación de Código. - Una vez que la secuencia de tokens ha sido validada, ésta es utilizada para identificar el sentido de la acción a realizar y generar el correspondiente código en lenguaje máquina. Algunos compiladores recurren a la creación de código intermedio para posteriormente generar la secuencia de instrucciones de máquina necesarias, mientras que algunos otros proceden a la generación directa del código máquina. 
•	Optimización de Código. - Esta es otra etapa opcional. La optimización de código es una actividad que raya en un arte dominado solamente por un experimentado programador de ensamblador y conocedor de la arquitectura del computador. Existen algunas técnicas desarrolladas al respecto, pero nada supera a la experiencia de un hábil programador. En esta etapa, ya sea posteriormente o trabajando al unísono con el generador de código, secuencias de instrucciones y estructuras de datos son examinadas buscando su substitución con secuencias, instrucciones o estructuras más cortas, rápidas o eficientes. 
•	Ligado. - Como paso final, todas las referencias pendientes de resolver sobre rutinas, módulos, bibliotecas y demás porciones de código necesarias para el funcionamiento del programa son cubiertas en esta parte. La resolución puede consistir desde el proporcionar meramente una dirección o llamado a una función hasta la inclusión de enormes porciones de código.
Al final, como producto de todo este proceso, lo que se obtiene es un programa escrito en código máquina que puede ser cargado en memoria y ejecutado.



El proceso seguido por un intérprete es ligeramente diferente, ya que mientras que cubre todas las etapas de análisis no cuenta con una fasede síntesis. Un intérprete no genera código, se limita a invocar rutinas ya escritas (proceso muchas veces llamado de interpretación). La siguiente figura ilustra esto el diagrama esquemático de las etapas del proceso de interpretación
En el caso de un pseudocompilador, cuyo caso mejor conocido es el de Java, la diferencia consiste en el código generado. Mientras que todas las etapas de un compilador son cubiertas, el programa ejecutable no es creado para ser ejecutado en un procesador "real" sino para uno "hipotético" o "imaginario" y conocido generalmente como máquina virtual. La máquina virtual es otro programa cuyo funcionamiento simula al de un procesador. Este procesador recibe de entrada el pseudocódigo creado por el compilador y procede a la ejecución de las instrucciones contenidas en éste; puede verse que no se trata más que de un intérprete muy sencillo.
`,
      `https://drive.google.com/file/d/1vH_P9hOtxO6m-fNNV31csm4r6PsF09Xr/view?usp=drive_link`,
      `La siguiente figura ilustra con mayor detalle lo que pasa en cada una de las etapas del proceso de compilación. El procesamiento de instrucciones de un lenguaje huésped (como puede ser SQL) correría a cargo del preprocesador, siendo transformadas instrucciones del lenguaje anfitrión. Durante la fase de análisis léxico el scanner se encarga de identificar cada uno de los elementos usados para escribir el programa fuente, substituyendo a cada uno de estos por un código numérico único (tokens). 
En este proceso se eliminan comentarios y espacios en blanco. Los tokens son alimentados al analizador sintáctico que, valida, que su disposición está acorde a las reglas del lenguaje. Validado éste, el analizador semántico procede a identificar el propósito de las diversas secuencias de tokens, y buscará generar representaciones intermedias de cada acción o directamente código máquina. 
Resultados obtenidos
`,
      `https://drive.google.com/file/d/1tqh2aAyvKzorjDhblhrUThpd5WMuu3iu/view?usp=drive_link`,
      `Diagrama esquemático del proceso de pseudocompilación



Este posteriormente es optimizado. El código optimizado es un nuevo código el cual contiene elementos que permiten la optimización de recursos computacionales, menor tiempo de respuesta, disminución del espacio de memoria para alojar direcciones y los resultados. Los algoritmos de asignación de memoria son implementados en la lógica del compilador.

Análisis: Dado un sistema, identificar los elementos constituyentes, las interrelaciones entre estos, y determinar la conducta creada.
Síntesis: Dado un conjunto de elementos y estableciendo un determinado número de interrelaciones entre éstos, crear uno de muchos posibles sistemas con una determinada conducta.
El "descompilar" un programa, sólo es posible si se cuenta con información de depuración, generada por el compilador. Mientras que es posible "desensamblar" un programa, sin información adicional que permita asociar secuencias de instrucciones ensamblador a instrucciones de nivel alto, es imposible reconstruir el programa fuente a partir del código ejecutable.

FASES Y COMPONENTES DE UN COMPILADOR
`,
      `https://drive.google.com/file/d/1F4dIuVIOYpb29-oD-hoIq60Mc2Dxv8Dk/view?usp=drive_link`,
      `Conceptualmente un compilador opera en fases. Cada una de las cuales transforma el programa fuente de una representación a otra. En la siguiente figura se muestra una descomposición típica de un compilador. En la práctica se pueden agrupar fases y las representaciones intermedias entre las fases agrupadas no necesitan ser construidas explícitamente.

Las tres primeras fases, que forman la mayor parte de la porción de análisis de un compilador se analizan en la sección IX. Otras dos actividades, la administración de la tabla se símbolos y el manejo de errores, se muestran en interacción con las seis fases de análisis léxico, análisis sintáctico, análisis semántico, generación de código intermedio, optimación de código y generación de código. De modo informal, también se llamarán "fases" al administrador de la tabla de símbolos y al manejador de errores.

FASE DE ANÁLISIS Y SÍNTESIS DE UN COMPILADOR
En la compilación hay dos partes: Análisis y Síntesis. La parte del análisis divide al programa fuente en sus elementos componentes y crea una representación intermedia. De las dos partes, la síntesis es la que requiere la técnica más especializada.

Durante el análisis se determina las operaciones que implica el programa fuente y se registra en una estructura jerárquica llamada árbol. A menudo, se usa una clase especial de árbol llamado árbol sintáctico, donde cada nodo representa una operación y los hijos de un nodo son los argumentos de la operación. Por ejemplo, en la figura se muestra un árbol sintáctico para una proposición de asignación. Árbol sintáctico para:  posición: = inicial + velocidad * 60
`,
      `https://drive.google.com/file/d/1Nl1ky9MxS-OSLNjSn4ZpYg1cxtzxtBYd/view?usp=drive_link`,
      `Conforme avanza la traducción, la representación interna del programa fuente que tiene el compilador se modifica. Para ilustrar esas representaciones, considérese las traducciones en el siguiente ejemplo.`,
      `https://drive.google.com/file/d/18k0IrGIaFarPJBasUv1pnkgFWzM56xCh/view?usp=drive_link`,
      `ANÁLISIS LÉXICO
La fase de análisis léxico lee los caracteres de un programa fuente y los agrupa en una cadena de componentes léxicos en los que cada componente representa una secuencia lógicamente coherente de caracteres, como un identificador, una palabra clave (if, while, etc.), un carácter de puntuación, o un operador de varios caracteres, como: =. La secuencia de caracteres que forman un componente léxico se denomina lexema del componente.

A ciertos componentes léxicos se les agregará un "valor léxico". Así, cuando se encuentra un identificador como velocidad, el analizador léxico no sólo genera un componente léxico (por ejemplo, id,) sino que también introduce el lexema velocidad en la tabla de símbolos, si aún no estaba allí. El valor léxico asociado con esta aparición de id, señala la entrada de la tabla de símbolos correspondiente a velocidad.

Usaremos id1, id2 e id3 para posición, inicial y velocidad, respectivamente, para enfatizar que la representación interna de un identificador es diferente de la secuencia de caracteres que forman el identificador. Por tanto, la representación de (1) después del análisis léxico queda sugerida por:

id1: = id2 + id3 * 60 					... (2)

Se deberían construir componentes para el operador de varios caracteres: = y el número 60, para reflejar su representación interna. En la sección IX ya se introdujeron las fases segunda y tercera: los análisis sintáctico y semántico. El análisis sintáctico impone una estructura jerárquica a la cadena de componentes léxicos, que se representará por medio de árboles sintácticos, (como se muestra en la figura 1.47). Una estructura de datos típica para el árbol se da cuando un nodo interior es un registro con un campo para el operador y dos campos que contienen apuntadores a los registros de los hijos izquierdo y derecho. Una hoja es un registro con dos o más campos, uno para identificar el componente léxico de la hoja, y los otros para registrar información sobre el componente léxico. Se puede tener información adicional sobre las construcciones del lenguaje añadiendo más campos a los registros de los nodos.

ANÁLISIS SINTÁCTICO
El analizador sintáctico, también llamado parser, recibe como entrada los tokens que le pasa el Analizador Léxico (el analizador sintáctico no maneja directamente caracteres) y comprueba si esos tokens van llegando en el orden correcto 

La salida "teórica" de la fase de análisis sintáctico sería un árbol sintáctico.

Así pues, sus funciones son:
•	Aceptar lo que es válido sintácticamente y rechazar lo que no lo es. 
•	Hacer explícito el orden jerárquico que tienen los operadores en el lenguaje que se trate. Por ejemplo, la cadena A/B*C es interpretada como (A/B) *C en FORTRAN y como A/(B*C) en APL. 
•	Guiar el proceso de traducción (traducción dirigida por la sintaxis).

ANÁLISIS SEMÁNTICO
El análisis semántico es posterior al sintáctico y mucho más difícil de formalizar que éste. Se trata de determinar el tipo de los resultados intermedios, comprobar que los argumentos que tiene un operador pertenecen al conjunto de los operadores posibles, y si son compatibles entre sí, etc. En definitiva, comprobará que el significado de lo que se va leyendo es válido.

La salida "teórica" de la fase de análisis semántico sería un árbol semántico. Consiste en un árbol sintáctico en el que cada una de sus ramas ha adquirido el significado que debe tener. En el caso de los operadores polimórficos (un único símbolo con varios significados), el análisis semántico determina cuál es el aplicable. 

Por ejemplo, consideremos la siguiente sentencia de asignación:
A: = B + C

En Pascal, el signo "+" sirve para sumar enteros y reales, concatenar cadenas de caracteres y unir conjuntos. El análisis semántico debe comprobar que B y C sean de un tipo común o compatible y que se les pueda aplicar dicho operador. Si B y C son enteros o reales los sumará, si son cadenas las concatenará y si son conjuntos calculará su unión.

Ejemplo
VAR
ch: CHAR; 	(*Un identificador no se puede utilizar si previamente no se ha definido*)
(* En Pascal no es válido, en C sí. *)
ent: INTEGER;
 ...
ch: = ent + 1; 

GENERACIÓN DE CÓDIGO 

Después de los análisis sintáctico y semántico, algunos compiladores generan una representación intermedia explícita del programa fuente. Se puede considerar esta representación intermedia como un programa para una máquina abstracta. Esta representación intermedia debe tener dos propiedades importantes; debe ser fácil de producir y fácil de traducir al programa objeto.

La representación intermedia puede tener diversas formas. Existe una forma intermedia llamada "código de tres direcciones", que es como el lenguaje ensamblador para una máquina en la que cada posición de memoria puede actuar como un registro. El código de tres direcciones consiste en una secuencia de instrucciones, cada una de las cuales tiene como máximo tres operandos.

El programa fuente de (1) puede aparecer en código de tres direcciones como
temp1: = entarea1(60)
temp2: = id3 * temp1 (2)
temp3: = id2 + temp2
id1: = temp3

Esta representación intermedia tiene varias propiedades. Primera, cada instrucción de tres direcciones tiene a lo sumo un operador, además de la asignación. Por tanto, cuando se generan esas instrucciones el compilador tiene que decidir el orden en que deben efectuarse, las operaciones; la multiplicación precede a la adición al programa fuente de (1), mostrado anteriormente. 

Segunda, el compilador debe generar un nombre temporal para guardar los valores calculados por cada instrucción. Tercera, algunas instrucciones de "tres direcciones" tienen menos de tres operadores, por ejemplo, la primera y la última instrucción de (2).

OPTIMIZACIÓN DE CÓDIGO 
La fase de optimación de código trata de mejorar el código intermedio de modo que resulte un código de máquina más rápido de ejecutar. Algunas optimaciones son triviales. Por ejemplo, un algoritmo natural genera el código intermedio (2) utilizando una instrucción para cada operador de la representación del árbol después del análisis semántico, aunque hay una forma mejor de realizar los mismos cálculos usando las dos instrucciones


Temp1: = id3 * 60.0				… (3)
id1: = 
id2 + temp1

Este sencillo algoritmo no tiene nada de malo, puesto que el problema se puede solucionar en la fase de optimación de código. Esto es, el compilador puede deducir que la conversión de 60 de entero a real se puede hacer en el momento de la compilación, de modo que la operación entera se puede eliminar. Además, temp3 se usa sólo una vez, para transmitir su valor a id1. Entonces resulta seguro sustituir a id1 por temp3, a partir de lo cual la última proposición de (2) no se necesita y se obtiene el código de (3).

Hay muchas variaciones en la cantidad de optimación de código que ejecutan los distintos compiladores. Los compiladores que realizan mucha optimización de código son llamados: "compiladores optimadores”. Sin embargo, hay optimaciones sencillas que mejoran significativamente el tiempo del compilador que se ocupa en esta fase.

`
    ]
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
    contenido: [
      `Conceptos de expresiones regulares.
Las expresiones regulares, aplicado a las ciencias computacionales, especifican la estructura de los datos integrados por cadenas, caracteres o símbolos. También conocido como un Lenguaje Regular o “Formal”.
`,
      `https://drive.google.com/file/d/11R7ChxHTKAFGs4qehUrk09uk1QFIltDe/view?usp=drive_link`,
      `
Los patrones de caracteres que pueden describir expresiones regulares son los mismos que pueden ser descritos por autómatas finitos. Su estilo es muy diferente al de las gramáticas. Es a menudo llamada también patrón, es una expresión que ejemplifica un conjunto de cadenas sin enumerar sus elementos.

Más específicamente las expresiones regulares están constituidas por los operadores unión, concatenación y clausura de Kleene (también conocida como cerradura de Klenee positiva + y estrella o asterisco *). Además de esto, cada expresión regular tiene asociado un autómata finito. IMPORTANTE: Las expresiones regulares se pueden representar por Autómatas Finitos ya sea No Determinísticos con épsilon transiciones, sin épsilon transiciones y Determinísticos.

Concepto de Autómatas Finitos.
El autómata finito es un modelo matemático que consta de una quíntupla o tabla con, cinco elementos  y estos son: M = {Q, Σ, δ, q0, F} 
•	La M significa Modelo o Máquina de estados finitos también conocido como diagrama de transiciones.
•	Q se define como el conjunto de estados que se pueden etiquetar con q0, q1, q2, q3, … qf  También pueden ser enumerados: 0, 1, 2, 3, 4, 5, 6, etc. 
Q = {q0, q1, q2, q3, … qf} Se representan con círculos. 
 
`,
      `https://drive.google.com/file/d/1_U3JoAhL4EBbuO3MEbuVuP8y0BD_OTge/view?usp=drive_link`,
      `•	Σ (sigma) es el alfabeto o símbolos que se requieren para pasar de un estado a otro. Ejemplo: Σ = {a}
Las transiciones son un eje cartesiano entre el conjunto de los estados y el alfabeto: δ  =  Q x Σ  δ
`,
      `https://drive.google.com/file/d/1gv-8kYTX7zOWiEUKVqtVE8LbVAFQ3kOS/view?usp=drive_link`,
      `•	F es el conjunto de estados finales o un sub-conjunto de Q Ejemplo: qf
Se dibuja con un círculo con línea doble. 
`,
      `https://drive.google.com/file/d/1X2P4P7Uckr581TTQFn6DsYMbIgQIOidc/view?usp=drive_link`,
      `El diagrama de autómata e la tabla anterior es el siguiente:`,
      `https://drive.google.com/file/d/1A01hIiJy5X-q4G37iDRoGOph8KziUmNE/view?usp=drive_link`,
      `Este autómata finito se considera determinista en base a que se tiene un solo símbolo del alfabeto esto es: Σ =a  que es el mismo que se utiliza en todas las transiciones para integrar un lenguaje regular que expresa una sola cadena.

 LR = {aaa} 

Para llegar desde q0 a qf necesitamos tres símbolos a (o bien la “a” tres veces)

PASOS PARA CONSTRUIR UN AUTOMÁTA FINITO

•	Paso 1 La palabra inicio de forma explicita
•	Paso 2 Los estados Q, etiquetados (con un número, letra mayúscula o  q0, q1, q2, q3, … qf)
•	Paso 3 Cada transición o flecha debe llevar una solo una y al menos una dirección y cada transición  AL menos un símbolo del alfabeto o en ausencia de símbolos a la cadena vacía (épsilon).
`,
      `•	Paso 4 EVITAR CRUZAR TRANSICIONES
•	Paso 5 Al menos un estado final etiquetado y con doble circulo.

 

El mecanismo de control de un elevador es un buen ejemplo de un sistema de estados finitos. El mecanismo no recuerda todas las demandas previas de servicio, sino solo el piso en el que se encuentra, la dirección de movimiento (hacia arriba o hacia abajo) y el conjunto de demandas de servicio aún no satisfechas.

Otro ejemplo que tenemos es que ciertos programas como los editores de texto y los analizadores léxicos que se encuentran en la mayoría de los compiladores son diseñados como sistemas de estado finito. En teoría, una Expresión Regular o Lenguaje Regular LR es posible representar con un Autómata que puede ser No Determinista con épsilon transiciones, No Determinista sin épsilon transiciones o bien un Autómata Determinista, para esto son los procesos de Transformación que se describen en esta unidad temática.

AUTÓMATA FINITO DETERMINISTA (AFD abreviando)
Entonces podemos definir que un autómata finito determinista AFD consiste en un conjunto finito de estados y un conjunto de transiciones de estado a estado, que se dan sobre el símbolo de entrada tomado de un alfabeto Σ. Un estado q0, que es el estado inicial, en el que el autómata comienza.
Para determinar los distintos símbolos de un lenguaje podemos construir un diagrama, este diagrama tiene la forma de un grafo dirigido con información adicional, y se llama diagrama de transición. Los nodos del grafo se llaman estados y se usan para señalar hasta que lugar se ha analizado la cadena. 
Las aristas del grafo que se etiquetan con caracteres del alfabeto determinan las transiciones. Naturalmente nosotros debemos comenzar por un estado inicial, y cuando se hayan tratado todos los caracteres de la cadena correspondiente, necesitamos saber si la cadena es legal. Para ello se marcan ciertos estados como estados de aceptación o estados finales.

Ejemplo

En la siguiente página se ilustra el diagrama de transiciones de un Autómata Finito. El estado inicial q0 está indicado por la flecha con la etiqueta “inicio” 

(en este ejemplo existe solo un estado final, pero pueden existir más en otros autómatas), también q0 en este caso  indicado por el doble círculo. Este autómata acepta todas las cadenas de ceros y unos, en las que el número de 0´s y el número de 1´s son pares.

Dado este ejemplo, formalmente, un autómata finito determinista AFD es una colección de cinco elementos:
1	Un alfabeto de entrada Σ.
2	Una colección finita de estados Q.
3	Un estado inicial S.
4	Una colección F de estados finales o de aceptación.
5	Una función δ: Q x Σ → Q, conocida como función de transición que determina el único estado siguiente para el par (qi,σ) correspondiente al estado actual qi y la entrada σ. (Donde “i” puede ser 0, 1, 2, 3, etc.)
`,
      `https://drive.google.com/file/d/1bGF81s0ybV9IV0tVR5uBCpvUXCsg8E8t/view?usp=drive_link`,
      `Diagrama de transiciones de un Autómata Finito  Determinístico

Denominaremos a un AFD con M, por lo que usaremos M = {Q, Σ, S, F, δ} para indicar el conjunto de estados, el alfabeto, el estado inicial, el conjunto de estados finales y la función asociada con el AFD. Se dice que una cadena x es aceptada por un AFD.



Si δ (q0, x) = p para algún p en F, es decir que la cadena termine en uno de los estados de aceptación o bien estados finales. El lenguaje aceptado por M, denominado L(M), es el conjunto {x | δ (q0, x) está en F}. Por lo que un lenguaje es regular, si es el conjunto de cadenas es aceptado por un autómata finito.
Ejemplo
Considerando el diagrama de nuestro ejemplo anterior, en notación formal, este AFD se denota como M = {Q, Σ, S, F, δ} de la siguiente manera:
Q = {q0, q1, q2, q3}
Σ = {0, 1}
S = q0
F = {q0}
δ = según la tabla 2.1              
`,
      `https://drive.google.com/file/d/1TJh5F55RNuY5yWAOmvixVmTzCtQixvaE/view?usp=drive_link`,
      `Dada la cadena 110101 vemos que pertenece a L(M). Ejemplo
El siguiente AFD que se representa mediante la siguiente manera 
M = {Q, Σ, S, F, δ}.
Q = {q0, q1}
Σ = {a, b}
S = q0
F = {q0}
δ  = según tabla 1.2
`,
      `https://drive.google.com/file/d/1VIolZTVjm9P1aIcyEC5IVZGwTyyE5oFi/view?usp=drive_link`,
      `Tabla 1.2 Diagrama de transiciones δ  de un autómata finito determinístico
La secuencia completa es          por lo tanto.
Dada la siguiente cadena ababa, vemos que pertenece a L(M). (Está integrado por las letras o símbolos de las transiciones en la parte superior izquierda de la secuencia completa que se forma).
AUTÓMATA FINITO NO DETERMINISTA
Si se permite que desde un estado se realicen cero o más transiciones mediante el mismo símbolo de entrada, se dice que el autómata finito es no determinista AFDN o AFN, pero llegaremos a la conclusión de que cualquier lenguaje aceptado por un AFN también es aceptado por un AFD. 
A veces es más conveniente diseñar AFN en lugar de AFD.
De manera formal denotamos a un AFN mediante una colección de cinco objetos (Q, Σ, S, F, δ), donde:
1	Q es un estado finito de estados.
2	Σ es el alfabeto de entrada.
3	S es uno de los estados de Q designado como estado de partida.
4	F es una colección de estados de aceptación o finales.
5	δ es una relación sobre (Q x Σ) y se llama relación de transición o función de transición expresada en una tabla de transiciones que hacen objetiva la función de producto cartesiano.
Ejemplo

En la siguiente página se muestra un diagrama de transiciones de un AFN. Observe que existen dos aristas con la etiqueta 0 que salen del estado q0, uno que regresa a q0 y otro que va al estado q3.

Por lo que su relación de transición δ está en la siguiente página.
`,
      `https://drive.google.com/file/d/1HLR--xuqnENOuBY1qvYL18DiJ8KA80BE/view?usp=drive_link`,
      `Tabla 1.3 Transiciones del diagrama de la siguiente figura.

AUTÓMATA Є–TRANSICIONES
`,
      `https://drive.google.com/file/d/1tyhHWYA4BId3ZiIqPv_jWu4lf941uk2_/view?usp=drive_link`,
      `Diagrama de un autómata finto no determinístico.

Este autómata es también un AFN, que incluye transiciones sobre la cadena vacía Ԑ, cuando hablamos de una cadena vacía conecta a dos estados, nos referimos a que no se consume ningún símbolo del alfabeto. 


Como ejemplo de estos autómatas tenemos los siguientes, en este primer ejemplo tenemos a un autómata  que puede cambiar su estado de q0 a q1 sin consumir nada en la entrada. Observemos que q1 es el único estado de aceptación de este AFN. Si w es cualquier cadena de 0 o más a’s, este autómata cicla sobre q0 hasta que consume las a’s. Una vez que la cadena se vacía, se desplaza a q1 con ε y lo acepta.
A continuación, se muestra un diagrama de un autómata finto no determinístico con ε – transiciones
`,
      `https://drive.google.com/file/d/1mpmDhIsqGJQgmcxvSAz5Nh5I9HnPfdej/view?usp=drive_link`,
      `En esta figura el AFND puede moverse del estado q0 al estado q1 sin consumir nada en la entrada. En ambos AFND, la decisión de elegir una ε-transición se realiza de la misma forma que la de cualquier otra transición con elección múltiple que exista en un AFND. Según se muestra en la siguiente figura.
Diagrama de un autómata finito no determinístico con ε – transiciones
`,
      `https://drive.google.com/file/d/1klKx1T83hpfizomYgNVwAbN4uaaaefmy/view?usp=drive_link`,
      `Este AFND asocia Q x (Σ U { Ԑ }) x Q con subconjuntos Q. Por lo que la figura anterior genera la siguiente tabla de transición:`,
      `https://drive.google.com/file/d/1P6gHLF7wc5y_z4UToO9QzoDmU_5eqc1n/view?usp=drive_link`,
    ]
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
    contenido: [
      `No Deterministas con épsilon (Ԑ) transiciones.

En teoría de la computación, la construcción Thompson es un algoritmo también llamado el algoritmo de McNaughton-Yamada-Thompson, es un método de transformación de una expresión regular en un equivalente Autómata Finito NO Determinista (AFND). Las expresiones regulares y autómatas finitos no deterministas son dos representaciones de lenguajes formales, de forma más explícita son también lenguajes “regulares” según la jerarquía de Noam Chomsky.
Por ejemplo, en los procesadores de texto son muy útiles las expresiones regulares para describir los patrones de búsqueda avanzada, pero un AFND son más adecuados para su ejecución en una computadora. Por lo tanto, este algoritmo es de interés práctico, ya que puede analizar expresiones regulares en AFND. Desde un punto de vista teórico, este algoritmo es una parte de la prueba que ambos aceptan exactamente los mismos lenguajes formales, es decir, los lenguajes regulares.
Un AFND puede hacerse determinista por la construcción de un conjunto potencia y luego se reduce al mínimo para obtener un autómata óptimo correspondiente a la expresión regular dada. Sin embargo, un AFND también puede interpretarse directamente. 
Para decidir si dos expresiones regulares dadas describen el mismo lenguaje, cada uno se puede convertir en un mínimo equivalente autómata finito determinista a través de la construcción de Thompson, mediante la  construcción de conjunto potencia, y la minimización del AFND. Si, y sólo si, los autómatas resultantes están de acuerdo hasta el cambio de nombre de los estados, PRODUCIENTO EL MISMO LENGUAJE o las mismas cadenas de las expresiones regulares de acuerdo. 
Para entender lo anterior, vamos a empezar con un ejemplo muy sencillo, una expresión de un solo símbolo que representa un lenguaje regular. Los lenguajes regulares pueden ser finitos como el caso del diagrama de la cadena
W = aaa Es una sola cadena o palabra formada con un sólo símbolo (que se repita tres veces) formado un LENGUAJE FINITO (UNA sola palabra)
Ahora tenemos la expresión regular a*



Con la cerradura de “Kleene” estrella o asterisco, incluye a la cadena vacía épsilon Ԑ y al único símbolo que es la letra o símbolo “a”, se repite el símbolo “a” un número infinito de veces, creando también un número infinito de cadenas, por lo que el lenguaje regular que representa también es infinito y “formalmente” se puede representar de las siguientes formas: 
1)	LR = { Ԑ, a, aa, aaa, aaaa, aaaaa, aaaaaa, aaaaaaa, aaaaaaaa, aaaaaaaaa, aaaaaaaaaa, aaaaaaaaaaa,…,∞ }
2)	LR = { Ԑ| an ,n ≥ 0 } 
Se lee, que el lenguaje regular  puede estar integrado por cadenas que incluyan a la cadena vacía Ԑ  o al símbolo “a” donde n significa un numero de repeticiones mayores o iguales a cero. 
Nota: “n” NO REPRESENTA UN EXPONENTE SINO LAS VECES QUE REPITE EL SIMBOLO.
El autómata AFND- Ԑ correspondiente para la expresión regular, se abrevia  /ER/ es a*
Uno de varios diagramas de Autómatas Finitos NO Deterministas (AFND) de la anterior /ER/ es el siguiente:
`,
`https://drive.google.com/file/d/1Pz8RBVY_Eo1PR6EEXvX5AT8G0KgxXPa6/view?usp=drive_link`,
`La definición formal de este diagrama es la siguiente:
AFND- Ԑ que se representa LA /ER/ = a*mediante M = {Q, Σ, S, F, δ}.
Q = {q0, q1, q2, qf }
Σ = { Ԑ, a}
S = q0
F = {qf}
δ  = según la siguiente tabla:	
`,
`https://drive.google.com/file/d/1eyZSciwJ7fLiSR4HFTZ4K-nzMqmMIDbS/view?usp=drive_link`,
`Otro diagrama de Autómatas Finitos NO Deterministas (AFND) de la anterior /ER/=a* es el siguiente:`,
`https://drive.google.com/file/d/1s8qYJ9B9-IiOeTiFTzP2zgpQkx_uGCRr/view?usp=drive_link`,
`La definición formal de este diagrama es la siguiente:
AFND- Ԑ que se representa la  /ER/ = a*  mediante M = {Q, Σ, S, F, δ}.
Q = {q0, q1}
Σ = { Ԑ, a}
S = q0
F = {q1}
δ  = según la siguiente tabla:	
`,
`https://drive.google.com/file/d/1gY2_9eLYqqT-tBwb5MC2vQ86dLI0QlWm/view?usp=drive_link`,
`Otros ejemplos básicos de AFND- Ԑ son: La expresión regular /ER/ = b+ 



Se lee: Cerradura de Kleene positiva, la cual incluye a la cadena vacía, si y solo sí está en el lenguaje originalmente y genera el siguiente Lenguaje Regular (LR) que se puede representar de las siguientes formas:
1)	LR = { b, bb, bbb, bbbb, bbbbb, bbbbbb, bbbbbbb, bbbbbbbb, bbbbbbbbb, bbbbbbbbbb, bbbbbbbbbbb,…,∞ }
2)	LR = { bn | n > 0 } 
Los diagramas de Autómata Finitos NO Determinista (AFND-Ԑ) de la anterior /ER/ = b+ puede ser alguno de los siguientes (A), (B), o bien (C):
Diagrama (A)
`,
`https://drive.google.com/file/d/1RvHT32dJ7OQ_V4f3IQl0bbEv6i8f-90u/view?usp=drive_link`,
`La definición formal de este diagrama es la siguiente:
AFND- Ԑ que se representa LA /ER/ = a*mediante M = {Q, Σ, S, F, δ}.
Q = {q0, q1, q2, qf }
Σ = { Ԑ, b}
S = q0
F = {qf}
δ  = según la siguiente tabla:	
`,
`https://drive.google.com/file/d/1Mz13GSwIuugj-azo7GbVfcuRXT_wKf_n/view?usp=drive_link`,
`NOTA: Recuerde que la cadena: ԐbԐ = b y que al regresar con Ԑ tenemos un número infinito de símbolos “b”

Diagrama (B) Equivalente al anterior porque genera el mismo lenguaje regular:   LR = {bn | n > 0}
`,
`https://drive.google.com/file/d/1cW1QHnfGjK56AwXMY7YDyIpjjOy8SK64/view?usp=drive_link`,
`La definición formal de este diagrama AFND-Ԑ es la siguiente:
AFND- Ԑ que se representa LA /ER/ = a*mediante M = {Q, Σ, S, F, δ}.
Q = {q0, qf }
Σ = { Ԑ, b}
S = q0
F = {qf}
δ  = según la siguiente tabla:	
`,
`https://drive.google.com/file/d/1MFjt53kmJd_ZdRi0Z79zDgNW49hH7NO-/view?usp=drive_link`,
`Diagrama (C) Equivalente al anterior porque genera el mismo lenguaje regular:  LR = {bn | n > 0} CON UN MINIMO NUMERO DE ESTADOS`,
`https://drive.google.com/file/d/1VRkFyGYPQYszR6FibKxI0IvQmTXri6pN/view?usp=drive_link`,
`NOTA IMPORTANTE: Es posible dibujar diferentes AFND-Ԑ con diferente forma e incluir más estados conectados con la cadena vacía siempre y cuando se genere el MISMO LENGUAJE o las mismas cadenas, por lo que lo que represente el símbolo a, depende del creador del lenguaje regular. Los anteriores diagramas de AFND-Ԑ son los más simples.


La definición formal de este diagrama AFND-Ԑ es la siguiente:
AFND- Ԑ que se representa LA /ER/ = a*mediante M = {Q, Σ, S, F, δ}.
Q = {q0, qf }
Σ = { Ԑ, b}
S = q0
F = {qf}
δ  = según la siguiente tabla:			
`,
`https://drive.google.com/file/d/1qyckj-EFNsA8Aplv71UqEYF31GQ9R3k6/view?usp=drive_link`
    ]
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
    contenido: [
      `El origen de los autómatas finitos probablemente se remonta a su uso implícito en máquinas electromecánicas, desde principios del siglo XX. En 1907, el matemático ruso Andréi Márkov formalizó un proceso llamado “cadena de Markov”, donde la ocurrencia de cada evento depende con una cierta probabilidad del evento anterior. Esta capacidad de "recordar" es utilizada posteriormente por los autómatas finitos, que poseen una memoria primitiva similar, en que la activación de un estado también depende del estado anterior, así como del símbolo o palabra presente en la función de transición.
Posteriormente, en 1943, surge una primera aproximación formal de los autómatas finitos con el modelo neuronal de McCulloch-Pitts. Durante la década de 1950 prolifera su estudio, frecuentemente llamando seles “máquinas de secuencia”; se establecen muchas de sus propiedades básicas, incluyendo su interpretación como “lenguajes regulares” y, su equivalencia con las “expresiones regulares” abreviadas /ER/. Al final de esta década, en 1959, surge el concepto de “autómata finito no determinista” abreviado AFND en manos de los primeros  teóricos de la computación:

Michael Oser Rabin (nacido en 1931 en Breslavia, Alemania, hoy en día parte de Polonia, es un notable científico de la computación y ganador del Premio Turing, el galardón más prestigioso en el campo computacional) y Dana Stewart Scott (nacido en 1932 es el Profesor Emérito de Ciencias de la Computación, Filosofía y Lógica Matemática en Carnegie Mellon University).
 En la década de 1960 se establece su conexión con las series de potencias y los sistemas de sobreescritura. Finalmente, con el desarrollo del sistema operativo Unix en la década de 1970, los autómatas finitos encuentran su nicho en el uso masivo de expresiones regulares para fines prácticos, específicamente en el diseño de analizadores léxicos (comando lex) y la búsqueda y reemplazo de texto (comandos ed y grep). A partir de ese tiempo, los autómatas finitos también se comienzan a utilizar en sistemas dinámicos.
Las máquinas no deterministas se han convertido en un concepto clave en la teoría de la complejidad computacional.
Fuente de información: Wikipedia

Existen varios métodos de trasformación de un Autómata Finito No Determinístico con épsilon transiciones a otro que no las tenga. Con la práctica se pueden diseñar o crear directamente de la expresión regular. Por ejemplo: De la expresión regular b+ que representa el Lenguaje Regular (LR) con cadenas que incluyen solo al símbolo b que se repite desde la primera cadena de longitud uno (b), la segunda cadena de longitud dos (bb), de longitud 3 (bbb) y así sucesivamente hasta un número infinito de b´s. Aquí tenemos un AFND ya sin épsilon transiciones abreviado Ԑ-transiciones.

El siguiente diagrama de autómata representa el LR = {b, bb, bbb, …, ∞}
Con la /ER/ = b+
`,
`https://drive.google.com/file/d/1umgByCm7Xgfak63fDMgYQSS0NBhzvcWC/view?usp=drive_link`,
`La definición formal de este diagrama AFND es la siguiente:
M = {Q, Σ, S, F, δ}.
Q = {qf }
Σ = {b}
S = {qf}
F = {qf}
δ  = según la siguiente tabla:
`,
`https://drive.google.com/file/d/1SPorAw2M4SRFCfCoWNXF0A-3RvwSF7cS/view?usp=drive_link`,
`Sin embargo para llegar a este autómata, también se puede realizar una Transformación con un método denominado “formal”, conocido como el método de la épsilon cerradura. Aquí es pertinente preguntar: 
¿Qué es la épsilon cerradura? 
También conocida como la cerradura de épsilon, abreviado: “Ԑ-C” o bien “C- Ԑ” Es identificar dentro del autómata finito con épsilon transiciones A todos aquellos estados que se conectan con épsilon y si no tienen a la cadena vacía o épsilon, se elige el mismo estado. Ejemplo, tomaremos el siguiente AFND-Ԑ.
`,
`https://drive.google.com/file/d/1ayVgF3JoMwG88fFzd1eIlmCjityc5RZh/view?usp=drive_link`,
`PASO 1. Se analiza la “Ԑ-C” de cada uno de los estados del autómata`,
`https://drive.google.com/file/d/17FfAoxGCPFHaW6jc_Uwnso6uuAr99uyR/view?usp=drive_link`,
`PASO 2. Se renombran los grupos de estados y se realiza un nuevo diagrama ya sin las épsilon transiciones.
{q0, q1, qf} = A			{q1} Está contenido en el grupo A
{q1, q2, qf} = B			En este grupo está un estado final, por lo que el nuevo estado será también final. {qf} Está contenido en el grupo B.
PASO 3. Se desarrolla otra tabla de transiciones con los nuevos estados
`,
`https://drive.google.com/file/d/1gis1M5jVxnjbl8F7q9S12g68zzywJ64Q/view?usp=drive_link`,
`Con la /ER/ = a*`,
`https://drive.google.com/file/d/13iNAaKhZcqFLxZuhMPGRPvOQ-T_H8o3h/view?usp=drive_link`,
`Este es un AFND sin épsilon transiciones. Transformado mediante el método de la épsilon cerradura.`
    ]
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
    contenido: [
      `Estas transformaciones nos permiten llegar a un autómata mínimo cuyo procesamiento resulta más objetivo y práctico, y recordemos que un autómata finito no determinista, NO incluye una transición para cada uno de los símbolos del alfabeto, sin embargo, un ejemplo sencillo de presentar esto es cuando se tiene como únicos símbolos del alfabeto al 0 y al 1 o bien la letra “a” o “b”. 
La parte aplicativa de los Autómatas Finitos es el hecho de que nosotros podemos realizar procesos de abstracción sobre el significado de dos o más símbolos, así como integrar con varios símbolos palabras como Si, No, Encendido, Apagado, Abierto Cerrado, Nombres, cualquier dato que nosotros queramos procesar y abstraer de forma “discreta”. Dependiendo de los datos o conjunto de símbolos concatenados que deseamos procesar se pueden diseñar Autómatas que de forma simbólica o discreta logren abstraer el comportamiento de sistemas tan simples como el comportamiento de una puerta que se abre y se cierra, imaginando que la A significa abrir y la C significa cerrar la puerta. 
Para este simple ejemplo de abstracción podemos definir el estado A (de Abierto) y el estado C (de Cerrado) para indicar que la puerta está abierta podemos agregar el símbolo del alfabeto 1 (uno) y para cerrar un 0 (cero). De esta forma es factible diseñar un autómata finito NO determinista (AFND), formalmente:
M = {Q, Σ, S, F, δ}.
Q = {A, C }
Σ = {0,1}
S = {A}
F = {A,B}
δ  = según la siguiente tabla:		
Entradas (alfabeto) =  Σ
`,
`https://drive.google.com/file/d/1AreZRloo7ubfHmuhhG8wyRp4nSajQnHZ/view?usp=drive_link`,
`Esta tabla que muestra las transiciones, al dejar conjuntos con vacío deja en evidencia un Autómata Finito NO Determinista (AFND).

Aquí la /ER/ = [0|1]* (casualmente esta es la expresión regular de un lenguaje binario).
`,
`https://drive.google.com/file/d/1kluaWJUOxjywjz_u3IXmVaaei-zNMkRo/view?usp=drive_link`,
`Aquí tenemos un ejemplo muy sencillo de la abstracción de una puerta que tiene sólo dos estados y en el paso de un estado a otro un alfabeto con dos símbolos 0 y 1. Recordemos que un Autómata Finito Determinista (AFD) incluye solo una transición, (de salida) desde cada uno de los estados A y C. Por lo que falta una transición con 1 (UNO) de salida de A y otra con un 0 (CERO) de salida de C. ¿Cómo lograr esto?
La alternativa más sencilla, de manera gráfica y NO formal, sin afectar el alfabeto es crear un estado NO FINAL que sirve como comodín para las transiciones que faltan. Dejando el autómata de la siguiente forma:
`,
`https://drive.google.com/file/d/1Uw-_4Kjy2Oa4Xpl8_q-UYABTLas_crgn/view?usp=drive_link`,
`Aquí se acepta
L = {Ԑ ,0,1, 01, 10, 11, 100, 101, 110, 111, 1000, 1001, 1010,…,∞} 
Este es un AFD donde el estado B puede ser una condición de ERROR o NO ACEPTADO, ya que es un estado No Final y según la definición de un AFD se tiene una transición con cada uno de los símbolos del alfabeto Σ = {0, 1} desde cada uno de los estados Q = {A, B, C}
 Con la siguiente definición formal.
M = {Q, Σ, S, F, δ}.
Q = {A, B, C }
Σ = {0,1}
S = {A}
F = {A,B}
δ  = según la siguiente tabla:			


Entradas (alfabeto) = Σ
`,
`https://drive.google.com/file/d/1OS6jv3UEBdZ-1S-OhJXnRgM4zVfZB_kk/view?usp=drive_link`,
`Ahora vamos a realizar una conversión con un método formal del siguiente AFND. Se puede observar que desde el estado A, tenemos dos transiciones con el símbolo 1 que van a los estados A y B; dos transiciones con el símbolo 0, una al estado A y otra al D; motivo por el que No se cumple el requisito de un AFD.`,
`https://drive.google.com/file/d/14RbKyWT-HxGOLJTKbL7xvkg9tfGqMmfL/view?usp=drive_link`,
`El Lenguaje regular lo podemos abstraer de la siguiente forma:
LR = {[0|1]*0|[0|1]*1 [0|1] [0|1]}

La definición formal es:
M = {Q, Σ, S, F, δ}.
Q = {A, B, C, D }
Σ = {0,1}
S = {A}
F = {D}
δ  = según la siguiente tabla:			
Entradas (alfabeto) = Σ
`,
`https://drive.google.com/file/d/1LlbaPOT4FE9Sztl6MYZIWvhONGg6jYT1/view?usp=drive_link`,
`El Lenguaje regular lo podemos abstraer de la siguiente forma Partimos del autómata finito no determinista (AFND) del anterior diagrama.
PASO 1. Añadimos un estado de error o “X” puede ser etiquetado con cualquier nombre según se muestra en el siguiente diagrama:
IMPORTANTE: El nuevo estado es NO FINAL y tiene una transición por cada uno de los símbolos del alfabeto. A este estado vamos a enviar las transiciones que sobran
`,
`https://drive.google.com/file/d/1WTzah2rkoth83ZRvs9D_dcD3bBG12Xz8/view?usp=drive_link`,
`PASO 2. Generamos una tabla considerando la transición de error y agrupando las nuevas transiciones, agregando a las nuevas transiciones los símbolos del alfabeto y nos queda la siguiente tabla:`,
`https://drive.google.com/file/d/1jUQV0BBuKt7R7SKI66ZeYlzZoRYqkvs3/view?usp=drive_link`,
`
PASO 3. Se pueden renombrar los estados en grupos y se re-emplazan en la tabla para generar una nueva tabla.
`,
`https://drive.google.com/file/d/1dPe4lTNGxZGFH9LJktw1WDIE2DOfelQ0/view?usp=drive_link`,
`PASO 4. Con esta tabla se construye el autómata finito determinista (AFD), ya sin épsilon transiciones y dado que acepta el mismo lenguaje:
LR = {[0|1]*0 | [0|1]*1[0|1] [0|1]} Es un autómata equivalente.
IMPORTANTE: Se conserva el estado D como estado final, considerándose como final el grupo de estados que contiene a D y también el nuevo estado de error es final de los símbolos del alfabeto.
`,
`https://drive.google.com/file/d/1O7VFbimAa4KS2DKrvpufA0cUO2q62RQk/view?usp=drive_link`,
`PASO 5.La definición formal del AFD de la anterior página es:
M = {Q, Σ, S, F, δ}.
Q = {q0, q1, q2, q3, q4, q5, q6}
Σ = {0,1}
S = {q0}
F = {q4, q5, q6}
δ  = según la siguiente tabla:			
Entradas (alfabeto) = Σ
`,
`https://drive.google.com/file/d/1PUPKJFCoe37fUJU8bwDksg3FG8KIDE-t/view?usp=drive_link`,
`El anterior autómata lo podemos convertir en un AFD mínimo, para el mismo lenguaje regular: LR = {[0|1]*0 | [0|1]*1[0|1] [0|1] }  esto es, con el menor número de estados.`,
`https://drive.google.com/file/d/1aMDx5j6MLumGmrMj1oRLlR5Me_l-KNR7/view?usp=drive_link`,
`La definición formal de este AFD es la siguiente:`,
`https://drive.google.com/file/d/1yj5YCkvBz1X_Xb08PuH_HNShkxgSu94d/view?usp=drive_link`,
`M = {Q, Σ, S, F, δ}.
Q = {q0, q1, q2, q3, q4}
Σ = {0,1}
S = {q0}
F = {q2, q4}
Para concluir con los temas de esta unidad, haremos un ejemplo completo de conversión de un AFND-Ԑ a AFND sin épsilon transiciones y luego a un AFD. 
`,
`https://drive.google.com/file/d/1xkMwk7HFQ7OOXuBFHg_1r5FUcRa59CDi/view?usp=drive_link`,
`Recordemos lo que es la épsilon cerradura: Son el conjunto de todos aquellos estados en los cuales se accede a ellos mediante la cadena vacía o épsilon cerradura. La épsilon cerradura de un estado, es al menos el estado en cuestión, por ejemplo:
La épsilon cerradura de q0 es q0  de una forma “formal” se especifica:
 Ԑ-C(qo, Ԑ) = ᵹ*(qo, Ԑ) = {qo}
Aclaramos que, para este material, los símbolos Ԑ-C se leen como la épsilon cerradura. El símbolo ᵹ se le como la transición y ᵹ* es la transición modificada de la ᵹ transición.
La descripción formal del autómata es:
M = {Q, ∑, ᵹ, S, F} donde:      Q = {q0, q1,  q2, q3}
El alfabeto, que es el conjunto de símbolos que se utilizan para el lenguaje (de solo dos palabras de longitud uno) es: ∑  = {Ԑ, 0, 1 } 
Las transiciones son: ᵹ = Q x ∑
`,
`https://drive.google.com/file/d/1QCivB_hQ-7cbDCjt05LsYHb05qLC0CeT/view?usp=drive_link`,
`El lenguaje aceptado para este autómata, son todas y cada una de las cadenas que llegan al estado final de q3 y este lenguaje a su vez puede incluir una expresión regular o varias de éstas. Consideradas las expresiones regulares como metalenguajes, esto es, el lenguaje de los lenguajes y queda:
L = {0*, 1, 11, [01*1|1|11]0*}
A continuación, vamos a obtener la épsilon cerradura de los estados que se definen en el autómata de la página anterior. Empezamos con la épsilon cerradura de todos y cada uno de los cuatro estados del autómata desde qo… q1…  q2…  q3… primero con épsilon y luego con cada uno de los símbolos del alfabeto.
Que para este autómata el alfabeto es: 
∑  = { Ԑ, 0, 1 } (según descripción “formal” anterior) Ԑ
Ԑ-C(qo, Ԑ)= ᵹ*(qo, Ԑ) = {qo, q3}
Ԑ-C(q1, Ԑ)= ᵹ*(q1, Ԑ) = {q1}
Ԑ-C(q2, Ԑ)= ᵹ*(q2, Ԑ) = {q2,, q3}
Ԑ-C(q3, Ԑ)= ᵹ*(q3, Ԑ) = { q3}
ᵹ*(qo, 0) = Ԑ-C(ᵹ (ᵹ*(qo, Ԑ),0)) = Ԑ-C(ᵹ ({qo, q3},0))= Ԑ-C({q1}ᴜ{q3}) = Ԑ-C({q1, q3,})= {q1, q3}
ᵹ*(q1, 0) = Ԑ-C(ᵹ (ᵹ*(q1, Ԑ),0)) = Ԑ-C(ᵹ ({q1},0)) = {ⱷ}
ᵹ*(q2,, 0) = Ԑ-C(ᵹ (ᵹ*(q2, Ԑ),0)) = Ԑ-C(ᵹ ({q2,, q3},0)) = Ԑ-C({q3})= { q3}
ᵹ*(q3,, 0) = Ԑ-C(ᵹ (ᵹ*(q3, Ԑ),0)) = Ԑ-C(ᵹ ({q2},0)) = Ԑ-C({q3})= { q3}
ᵹ*(q0,, 1) = Ԑ-C(ᵹ (ᵹ*(q0, Ԑ),1)) = Ԑ-C(ᵹ {q0,q3}, 1) = Ԑ-C({q2,})= {q2, q3,}
ᵹ*(q1,, 1) = Ԑ-C(ᵹ (ᵹ*(q1, Ԑ),1)) = Ԑ-C(ᵹ ({q1},1)) = Ԑ-C({q1,q3})= {q1, q3,}
ᵹ*(q2,, 1) = Ԑ-C(ᵹ (ᵹ*(q2, Ԑ),1)) = Ԑ-C(ᵹ ({q2,q3},1)) = Ԑ-C({q3}ᴜ{ ⱷ}) = Ԑ-C({q3})={q3}
ᵹ*(q3,, 1) = Ԑ-C(ᵹ (ᵹ*(q3,, Ԑ),1)) = Ԑ-C(ᵹ ({q3},1))= Ԑ-C({ ⱷ})= { ⱷ }
Conviene comprobar en el modelo gráfico, si este autómata que se forma de las transiciones anteriores es ya un autómata finito no determinístico, pero sin la cadena vacía o épsilon dentro de sus transiciones, por lo que es evidente que ya no está, y también gráficamente podemos verificar si el lenguaje aceptado es el mismo que en el autómata anterior para validar que ambos son autómatas equivalentes. 

L = {0*, 1, 11, [01*1|1|11]0*}
Con todo lo anterior, obtenemos un nuevo AFND ya sin épsilon transiciones y su descripción es la que se muestra en el siguiente diagrama:
`,
`https://drive.google.com/file/d/14n2g51uup_V7pkqnzMhT6ZXZgDxqcCyF/view?usp=drive_link`,
`La descripción formal de éste AFND es:
M = {Q, ∑, ᵹ, S, F} donde:
Q = {q0, q1, q2, q3}
El alfabeto, que es el conjunto de símbolos que se utilizan para el lenguaje (de solo dos palabras de longitud uno) es: ∑  = {0, 1}  (este ya no incluye a la cadena vacía o épsilon)
Las transiciones son: ᵹ = Q x ∑ 
`,
`https://drive.google.com/file/d/1k9OM_qnWHuk0lPEaB5MMPPrYiLJ_FB9l/view?usp=drive_link`,
`Ejemplo de transformación de Autómata Finito no Determinista (AFND) a un Autómata Finito  Determinista (AFD) EQUIVALENTE.

Como ya se explicó anteriormente, Estas transformaciones nos permiten llegar a un autómata mínimo cuyo procesamiento resulta más objetivo y práctico, y recordemos que un autómata finito no determinista, no incluye una transición para cada uno de los símbolos del alfabeto, sin embargo, un ejemplo sencillo de presentar es cuando se tiene como únicos símbolos del alfabeto al 0 y al 1. Es por esto la razón de que las computadoras se hayan diseñado con sistemas binarios en su lenguaje de máquina.

Partimos del autómata finito no determinista sin épsilon transiciones del diagrama anterior. AFND. Añadimos un estado de error o “X” puede ser etiquetado con cualquier nombre según se muestra en la siguiente Tabla. Generamos la tabla considerando la transición de error y agrupando nuevas transiciones, agregando las nuevas transiciones y nos queda la tabla en la siguiente página.

Las transiciones son: ᵹ = Q x ∑ 
`,
`Ejemplo de transformación de Autómata Finito no Determinista (AFND) a un Autómata Finito  Determinista (AFD) EQUIVALENTE.

Como ya se explicó anteriormente, Estas transformaciones nos permiten llegar a un autómata mínimo cuyo procesamiento resulta más objetivo y práctico, y recordemos que un autómata finito no determinista, no incluye una transición para cada uno de los símbolos del alfabeto, sin embargo, un ejemplo sencillo de presentar es cuando se tiene como únicos símbolos del alfabeto al 0 y al 1. Es por esto la razón de que las computadoras se hayan diseñado con sistemas binarios en su lenguaje de máquina.

Partimos del autómata finito no determinista sin épsilon transiciones del diagrama anterior. AFND. Añadimos un estado de error o “X” puede ser etiquetado con cualquier nombre según se muestra en la siguiente Tabla. Generamos la tabla considerando la transición de error y agrupando nuevas transiciones, agregando las nuevas transiciones y nos queda la tabla en la siguiente página.

Las transiciones son: ᵹ = Q x ∑ 
`,
`https://drive.google.com/file/d/1yrLWabK3pjDZ7T_FWTorHW3spbRZ9Gdk/view?usp=drive_link`,
`Con esta tabla se construye el autómata finito determinista ya sin épsilon transiciones y dado que acepta el mismo lenguaje regular:

L = {0*, 1, 11, [01*1|1|11]0*}
Este es un AFD o Autómata Finito Determinístico equivalente. Se conserva el estado {q3} como estado fina
`,
`https://drive.google.com/file/d/1nxekIddLfPBD9b4JWwHfY_wGXPbSPjnc/view?usp=drive_link`,
`La descripción formal de éste AFD es:
M = {Q, ∑, ᵹ, S, F} donde:
Q = {q0, q1, q2, q3}

El alfabeto, que es el conjunto de símbolos que se utilizan para el lenguaje (de solo dos palabras de longitud uno) es: ∑  = {0, 1}  (este ya no incluye a la cadena vacía o épsilon)
S = {q0}
F = {q0, q1, q2, q3}
`
    ]
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
    contenido: [
      `Los analizadores léxicos han tenido múltiples aplicaciones en el desarrollo de software de base, tales como los Sistemas Operativos y los protocolos de comunicación. Los recorridos del código fuente que se realizan dentro de los lenguajes ensambladores, intérpretes de instrucciones  y los compiladores. Todas estas herramientas requieren de un analizador léxico. Además de las aplicaciones de software de base se tienen convertidores o traductores tan simples como indispensables que convierten una cantidad escrita con números a su correspondiente representación escrita con lenguajes tales como el inglés, español, francés, etc. 
Dentro de los sistemas teleinformáticas de gestión se requiere de un proceso indispensable de validar o identificar los datos numéricos requeridos o cualquier otro tipo de dato que debe entrar al procesamiento para generar resultados. A este proceso se le considera como FILTROS, dependiendo de las necesidades o requerimientos que son identificados símbolo por símbolo, carácter por carácter, integrando palabras o cadenas que se conocen como los componentes léxicos del lenguaje o código de entrada también denominado código fuente. 
Actualmente, cada vez son más requeridos los traductores en lenguajes naturales, el procesamiento de datos o información no estructura en la red, ya sea de datos digitales, voz o videos. Todos estos elementos también requieren de analizadores léxicos realizados con herramientas computacionales, tanto para aplicaciones en dispositivos móviles como todo tipo de aplicaciones que pueda crear el intelecto y la creatividad del diseñador de sistemas. 
Las funciones de estos módulos de un analizador léxico de tipo digital son las siguientes:
•	Analizador Lexicográfico: Las principales funciones que realiza son:
•	Identificar los símbolos. 
•	Eliminar los blancos, caracteres de fin de línea, etc... 
•	Eliminar los comentarios que acompañan al código fuente. 
•	Crear símbolos intermedios por cada lexema, estos símbolos son llamados tokens. 
•	Avisar de los errores que detecte.
•	Actualizar la tabla de errores 


•	Avanzar en la revisión sin importar el número de errores y sin caer en ciclos repetitivos “loop”.
•	Actualizar la tabla de símbolos
Ejemplo: A partir de la sentencia en PASCAL:
nuevo:= viejo + RAZON*2
Esto genera un código simplificado para el análisis sintáctico posterior, por ejemplo:
<id1> <:=> <id2> <+> <id3> <*> <ent>
Nota: Cada elemento encerrado entre <> representa un único token. Las abreviaturas <id> y <ent> significan identificador y entero, respectivamente.
<id1> significa identificador 1 equivale a nuevo
<:=> separador
 <id2> significa identificador 2 equivale a viejo 
<+> es el signo de más
 <id3> significa identificador 3 equivale a RAZON 
<*> es el signo de multiplicación
<ent> significa el número entero 2
De los elementos más importantes del diseño de un analizador léxico son la tabla de símbolos y el manejador de errores. Mismos que se describen a continuación:
TABLAS DE SÍMBOLOS.
Las tablas de símbolos (también llamadas tablas de identificadores y tablas de nombres), realizan dos importantes funciones en el proceso de traducción: 
1)	Verificar que la semántica sea correcta y 
2)	Ayudar en la generación apropiada de código. 
Ambas funciones se realizan insertando o recuperando desde la tabla de símbolos los atributos de las variables usadas en el programa fuente. Estos atributos, tales como: el nombre, tipo, dirección de almacenamiento y dimensión de una variable, usualmente se encuentran explícitamente en las declaraciones o más implícitamente a través del contexto en que aparecen los nombres de variables en el programa.


Una de las estructuras de datos que se encuentran relacionadas con las fases del proceso de compilación es la tabla de símbolos, la cual tiene como propósito registrar información que se comparte entre varias etapas y que permite administrar los recursos asociados a las entidades que manipulará el programa. 
La tabla de símbolos tiene típicamente la estructura de la siguiente forma:
`,
`https://drive.google.com/file/d/1YHGkyeuRxHpUB67FtBJQClJxviHtmB-M/view?usp=drive_link`,
`Primera propuesta de formato para el diseño de tabla de símbolos.

En donde podemos apreciar la designación de la entidad y su token -derivados del análisis de léxico- así como una serie de atributos (tipo de dato, dirección en memoria) que emanan de otras fases (análisis gramatical y semántico). Las consultas a la tabla de símbolos se realizan por medio del lexema con que se designa a la entidad.

Esta concepción de la tabla de símbolos es demasiado simple para fines prácticos, si consideramos que el lexema de la entidad es de longitud variable y se desea que la estructura sea homogénea. Una solución es considerar que en el campo lexema se tiene un apuntador (que siempre ocupa el mismo espacio) hacia donde se registrarán propiamente los lexemas. Eso evitará el desperdicio de memoria al tener el espacio justo para representar a cada lexema.
`,
`https://drive.google.com/file/d/1ylH-ujlXAyFpDnCyBYqXpNCqDR0H1u6t/view?usp=drive_link`,
`Propuesta de formato para el análisis de lexemas.

La creación de la tabla de símbolos compete inicialmente al analizador de léxico, quien registrará a las entidades (reconocidas bajo el patrón de Identificador) de manera única, por medio del binomio de operaciones Búsqueda-Inserción. 
En el contexto de un programa las entidades pueden describir propiamente objetos manipulables por el lenguaje (por ejemplo, variables, constantes o funciones) o descriptores de acciones (las palabras reservadas); ambas situaciones son reconocidas bajo el mismo patrón de identificador y la tabla de símbolos se emplea para hacer su discriminación. El analizador de léxico funciona bajo el siguiente mecanismo:
REPITE
	Token = AnaLex();
	SI Token == Identificador
	ENTONCES
		Token= REVISA_RESERVADAS (lexema)
	FSI
HASTA QUE Token == EOF
FREPITE
¿Cuándo construir la tabla de símbolos y cuando interactuar con ella?
El punto del procesador de traducción en el cual son invocadas las rutinas de manejo de la tabla de símbolos. Esto depende primeramente del número y la naturaleza de los pasos del compilador.
En un compilador multipasos, la tabla de símbolos es creada durante el paso de análisis léxico. Por medio de un índice se entra a la tabla de símbolos para ubicar la variable, a partir del token generado por el “scanner”.
Contenido de la tabla de símbolos.
Una tabla de símbolos puede conceptualizarse como una serie de renglones, cada uno de los cuales contiene una lista de valores de atributos que son asociados con una variable en particular. Las clases de los atributos que aparecen en una tabla de símbolos dependen en algún grado de la naturaleza del lenguaje de programación para el cual se escribe el compilador. 


Por ejemplo, un lenguaje puede ser sin tipos, y por lo tanto el atributo tipo no necesita aparecer en la tabla. Similarmente, la organización de la tabla de símbolos variará dependiendo de las limitaciones de memoria y tiempo de acceso.
A continuación, se presenta un ejemplo de una tabla de símbolos típica.
`,
`https://drive.google.com/file/d/1ShMG_RpEzIphXt_V0M85VbhXA9-71nG7/view?usp=drive_link`,
`
Éste es un ejemplo de tabla de símbolos
Los atributos que se manejan en la tabla anterior y que se describen enseguida, no son estrictamente necesarios para todos los compiladores; sin embargo, cada uno de tales atributos deberá ser considerado para la implementación de un compilador de un compilador en particular.
•	Nombre de la variable. 
•	Dirección del código objeto. 
•	Tipo. 
•	Valor (o número de parámetros para uno procedimiento). 
•	Número de línea fuente donde fue declarada la variable. 
•	Números de línea fuente donde se hace referencia a la variable. 
•	Liga. Campo cuyos valores sirven para listar las variables en orden alfabético.
El nombre de la variable debe estar, en cualquier caso, formando parte de la tabla de símbolos, ya que es el medio por el cual una variable en particular es identificada en las etapas de análisis semántico y generación de código. Para proveer un acceso rápido, es conveniente manejar un tamaño predefinido pero lo suficientemente grande para los nombres de las variables. Una longitud igual o mayor que 16 caracteres es bastante adecuado. El identificador completo puede almacenarse, justificado a la izquierda, en un campo de longitud fija en la tabla de símbolos. Este criterio posibilita un acceso más rápido a la tabla de símbolos, a costa de no aprovechar eficientemente el espacio de almacenamiento en el caso de las variables con identificadores cortos.

Otro criterio para manejar los identificadores en la tabla de símbolos consiste en colocar una cadena descriptora en el campo Nombre Variable de la tabla. El descriptor contiene los subcampos posición y longitud. El subcampo posición es un apuntador que indica la posición del primer carácter del nombre de la variable en un área general de cadenas, y el subcampo describe el número de caracteres del nombre de la variable. Este enfoque produce un acceso más lento a la tabla de símbolos, pero ofrece un ahorro considerable de espacio de almacenamiento.
En el proceso de compilación, una dirección de código objeto debe asociarse con todo variable en un programa. Esta dirección establece la ubicación relativa para los valores de la variable en tiempo de ejecución. La dirección del código objeto se coloca en la tabla de símbolos cuando la variable es declarada (o encontrada por primera vez). Esta dirección es reinvocada desde la tabla cuando la variable es referenciada en el programa fuente. La dirección es luego utilizada en una instrucción objeto que accede al valor de esa variable (carga o almacena).
El atributo tipo se almacena en la tabla de símbolos cuando los lenguajes compilados tienen tipos de datos explícitos o implícitos. Tradicionalmente, el tipo de dato de una variable es almacenado codificada en la tabla de símbolos; por ejemplo 1 puede representar el tipo real, 2 el tipo integer, etc.
Los atributos número_de_dimensiones y número_de_parámetros son importantes en la fase de análisis semántico. En las referencias a los arreglos, el número de dimensiones debe coincidir con el especificado en la declaración del arreglo, y esto debe ser verificado en la fase de análisis semántico. El número de dimensiones se utiliza también como parámetro en el cálculo de la dirección de un elemento particular del arreglo. El número de parámetros de la invocación a un procedimiento también debe coincidir con el número usado en la declaración. En la construcción de la tabla de símbolos, es conveniente considerar el número de parámetros de un procedimiento como su número de dimensiones y así combinar estos dos atributos en uno. Además de conveniente, este enfoque también es consistente, ya que el tipo de verificación semántica para ambos atributos es similar.
El atributo liga se ha incluido en la tabla de ejemplo simplemente para facilitar la producción de un listado de referencias cruzadas ordenado alfabéticamente por nombre de variable. La tabla de símbolos debe incluir cada uno de los elementos o cadenas aceptadas por el lenguaje, conocidos como elementos terminales, para asignarle el token o identificador numérico que le corresponda a cada elemento terminal. Los elementos no terminales, se deberán dar de alta en la tabla de símbolos y reasignarle el mismo token o identificador cada vez que se utilicen.

`
    ]
  },
  {
    contenido_id: 113,
    titulo: '3.2 Diseño o descripción de una aplicación que requiera el uso de un lenguaje de programación.',
    descripcion: '',
    tipo: TipoContenido.RECURSO,
    orden: 2,
    url_recurso: null,
    unidad_id: 3,
    unidad: { unidad_id: 3, nombre: 'Unidad III - Implementación de un Analizador Léxico' },
    contenido: [
      `CASO PRÁCTICO
Usted se encuentra trabajando para una compañía desarrolladora de software a la medida. Su jefe se acaba de enterar que está llevando una unidad de aprendizaje de Teoría de Lenguajes y Compiladores, así que decide que es la persona ideal para el proyecto de uno de sus principales clientes. Se le asigna a asistir a una entrevista con el usuario a fin de obtener las especificaciones finales del último módulo del producto.



En la entrevista el cliente comenta:
“Para el módulo de análisis necesitamos generar gráficas y que se conserven para posteriores análisis, pero requerimos que tanto los datos como los parámetros de graficación se guarden, ya que pasado el tiempo la gráfica pierde sentido y el analista sólo puede saber qué hacer si cuenta con los datos y los parámetros usados para generar la gráfica. Guardar datos y especificaciones no nos sirve, todo debe quedar en un mismo archivo. Todas nuestras gráficas  son con dos variables (bidimensionales). ¿Qué sugiere?
Tras un minuto de meditación, usted responde: “Hmmm… Hasta donde veo la única forma es… Creando una forma de especificación para generar la gráfica… Como un pequeño lenguaje que iría al inicio del archivo de datos. De esta forma se puede alimentar el sistema y siempre general la gráfica deseada”
Su cliente lo piensa un rato… Acepta la idea… Pero conociendo como son sus analistas él le indica como debe ser este lenguaje:
“- Frecuentemente tenemos visitantes o clientes extranjeros que utilizan el sistema… Por lo que las palabras de este lenguaje deben ser en inglés.
- La entrada será un archivo a través de la pantalla en la que cada línea puede ser un dato o una instrucción de graficación.
-Los datos podrán aparecer en pares de números, el primero será la abscisa y el segundo la ordenad, o sólo un numero… en cuyo caso el valor de la abscisa se asigna por defecto (1, 2, 3, etc.) … Y un carácter opcional de graficación puede seguir a cada dato.
- Los datos pueden ser asignados e incluir exponentes científicos.
- Se debe especificar el título de la gráfica, rangos de abscisa y ordenada (en la misma línea), las marcas de cada eje… El largo y ancho de la gráfica. Las especificaciones pueden aparecer en cualquier orden, y todas deben ser opcionales…
Una por línea y no debe ser necesario indicar el tamaño de la muestra…”
“Y eso sería todo. Sólo le pido que todas las instrucciones lleven una cantidad de argumentos fijos, analizadores lexicográficos, capaz de producir un analizador salvo las marcas que podrán ser libres”
La entrevista termina.



SE PIDE: Desarrolle la especificación de este lenguaje en notación BNF o BNFE.
Redacción Dr. Eduardo René Rodríguez Ávila, IEEE computer Society Branch & Neural Networks Council https://eravila.wordpress.com/home/intereses/apuntes/

¿Qué son los BNF y BNFE?
La Notación de Backus-Naur, también llamado BNF extendido o EBNF (del inglés Extended Backus–Naur Form) es un metalenguaje usado para expresar gramáticas libres de contexto. Esta es una extensión de la Notación de Backus-Naur. Fuente de esta definición: Wikipedia
Para comprender mejor este concepto, nos adelantaremos un poco a describir breve y coloquialmente lo que es una Gramática libre de contexto abreviada (GLC).
Una GLC es la definición formal de una gramática “formal” que también puede ser regular como las expresiones regulares ya descritas con anterioridad. Dentro de la definición tenemos que dentro de una GLC se tienen cuatro tipos de variables: Variables No Terminales (NT) y dentro de estas La variable inicial No terminal (“Start” con el símbolo S), Variables Terminales (con el símbolo T) y las Reglas de producción, denominadas Producciones, reglas generadoras y un sinfín de nombres que se pueden encontrar dependiente de la fuente de información, pero para efectos de estos apuntes las definiremos con el símbolo P.
Queda: GLC = {S, NT, T, P}
Ejemplo: Si decidimos crear una instrucción simple como “dibujar” esta palabra DIBUJAR puede servir para crear una Gramática Libre de Contexto. Si definimos que podemos dibujar tres figuras geométricas: Cuadrado, Triangulo y Círculo de tamaño  1 a 10 centímetros y en colores, azul, rojo, amarillo, blanco y negro. Para esto podemos definir un BNF
<dibujar>: = DIBUJA <figuras> <tamaño> <color>
<figuras>: = <cuadrado> |<triangulo>|<circulo>
<tamaño>: = 1|2|3|4|5|6|7|8|91|10
<color>: = azul|rojo|amarillo|blanco|negro
<cuadrado>: = □ <circulo>: = Ο
<triangulo>: = Δ

Los elementos NO terminales se pueden definir con mayúsculas o bien entre “tags” <y>, las variables terminales son símbolos alfabéticos, numéricos, alfanuméricos o especiales. Estos signos especiales: = separan la variable NO terminales (a la izquierda) de las Terminales a la derecha. No existe un estándar de este signo que se lee: PRODUCE ya que puede ser un guion intermedio -, puede ser también una flecha de izquierda a derecha  un símbolo de =, etc.
La siguiente definición se escribió anteriormente y también se puede configurar como un BNF:
<SENT>: = if <EXP-BOOL> then <SENT> [else <SENT>]
<SENT>: = <VAR> 
<VAR>: = <EXP><EXP-BOOL>
<EXP-BOOL>: = <VAR-BOOL> | <EXP> <COMP> 
<EXP><COMP>: = < | > | <> | <= | >= | =< | => | =
<EXP>: = <EXP> <OP> <FACTOR> | <FACTOR> 
<FACTOR>: = (<EXP>) | <VAR> | <CTE>
<CTE>: = <DIGITO> [<DIGITO>]<VAR>
 <VAR-BOOL>: = <LETRA> [<ALFANUM>] <ALFANUM> 
<ALFANUM>: = <LETRA> | <DIGITO>
<LETRA>: = a | b | ...... | z
<DIGITO>: =  0 | 1 | ...... | 9
<OP>:: = + | - | * | / | **
Esta es la definición de un BNFE el cual tiene a las variables NO terminales con mayúscula y entre “tags” <…> y por cada NO terminal, la definición de sus variables Terminales.

`
    ]
  },
  {
    contenido_id: 11,
    titulo: '3.3 Diseño de un lenguaje simple de programación.',
    descripcion: '',
    tipo: TipoContenido.RECURSO,
    orden: 4,
    url_recurso: null,
    unidad_id: 3,
    unidad: { unidad_id: 3, nombre: 'Unidad III - Implementación de un Analizador Léxico' },
    contenido: [
      `La teoría sin la práctica se olvida. El aprendizaje además de ser un proceso intrapersonal, conviene que sea significativo, esto es, el que nos es útil para la vida o ganarnos un medio de ingresos económicos.

Usted como estudiante tiene creatividad, inteligencia, habilidad matemática y lo único que hace falta es que ponga en práctica lo aprendido en la mayor cantidad de unidades de aprendizaje, como la ingeniería de software, programación, estructura de datos, bases de datos, lenguajes de programación, tecnología digital, idiomas como el inglés, etc. Esa es la justificación de que realice un proyecto real donde se aplique la teoría de Lenguajes y compiladores, y logre un software conocido como traductor.
RESUMEN EJECUTIVO.
Este proyecto se elabora desde el principio del periodo escolar ya que cuenta para tres evaluaciones, una por cada periodo. En el primer periodo es el diseño conceptual con respecto a un analizador que puede ser léxico, sintáctico, semántico, un traductor o compilador parcial o completo.
El proyecto se puede realizar de forma individual o en equipos, el número de integrantes del equipo dependiente de la complejidad del proyecto. Si se elabora en equipo, se tendrá que adjuntar desde la primera etapa o entrega, elaborar la asignación de actividades para cada elemento del equipo sin duplicar las actividades asignadas a cada responsable.
Primera etapa
“Diseño conceptual de un lenguaje experimental”
SE ENTREGA IMPRESO EXCLUSIVAMENTE. EN EL HORARIO DE CLASE, EN LA CLASE ANTERIOR A LA FECHA DEL EXAMEN DEL PRIMER PERIODO. (Oportunidad en la entrega 2 puntos)
Se entrega la programación, pruebas y presentación, su contenido, además de los contenidos de la primera etapa, se agrega al menos tres páginas más, con lo siguiente:


1.	Manual de usuario o descripción de ¿Cómo se ejecuta el software? Proceso de instalación y utilización. (Dos puntos)
2.	Descripción técnica del proyecto. Recordar que estamos elaborando un software de base y se detalla de lo general a lo particular como lo requiere la programación estructurada. (Dos puntos) Incluir: Diagramas, mapas mentales, conceptuales, redes semánticas, diagramas de autómatas, formatos de Backus y Naur (BNF´s), etc. Los diagramas son creados específicamente para el programa en cuestión. (Dos puntos)
3.	CODIGO FUENTE (sintético) con documentación interna, esto es, comentarios en cada línea de código (dos puntos) En congruencia con los diagramas.
4.	EVIDENCIA DE LA EJECUCIÓN O CIFRAS DE CONTROL (dos puntos). Valor total de la etapa (diez puntos).  
Si el proyecto tiene una evaluación menor a 8 (ocho), se considera SOLO como DERECHO para presentar el tercer examen parcial y el examen extraordinario.
Tercera etapa
“Presentación del proyecto completo”
Considerar todos los elementos del proyecto desde el PRIMER PARCIAL. Si el proyecto tiene una evaluación mayor o igual a 8 (ocho), se corrige y se prepara una presentación con material de apoyo y ya corregido se asignarán fechas de presentación de los mejores proyectos presentados y agregando las correcciones al diseño.
1)	Preparación de presentación para el grupo, mismas que se evalúan con una co-evaluación. La calificación de las presentaciones se promedian y complementan el otro 50% con la evaluación de la presentación realizada por parte del profesor. Al final se suman ambas evaluaciones y se tiene la calificación para el tercer parcial.


2)	Apegarse a la fecha, hora de la presentación por todos los integrantes del equipo. Esto es un requisito para no perder el derecho a la calificación del tercer parcial. Elaborado por: Sara Méndez García. En la Ciudad de México el 3 de abril de 2020.

ELEMENTOS IMPORTANTES PARA LA PRESENTACIÓN O DISCURSO (3ª. etapa):
Cualquier persona necesita comunicarse con sus semejantes, el uso adecuado de las palabras, principalmente al hablar; con correcta entonación, dicción y el uso impecable de las palabras nos genera muchas ventajas como: inspirar confianza, transmitir ideas de forma asertiva, convencer, conseguir un buen empleo. También ayuda a evitar conflictos, puede ser un medio para ganarse la vida como los políticos, locutores, profesores, vendedores, etc. A todos nos conviene ser buenos comunicadores. 
Para aprender a nadar no hay alternativa, sólo cambiar el temor por preparación, tirarnos al agua y practicar; para caminar se aprende caminando y también para hablar en público necesitamos ejercitar con un programa académico pertinente, de calidad y la constancia; conjuntamente con el deseo y la práctica; las evaluaciones respetuosas y el conocimiento de nuestras áreas de oportunidad nos permitirán de forma consiente lograr que todos seamos comunicadores competentes.
RESUMEN EJECUTIVO.
Para su primer proyecto de oratoria, se presentará a los asistentes con información acerca de su vida, trayectoria académica, intereses, ambiciones, habilidades, presentación de un proyecto, etc. Practique dando su discurso y escríbalo antes de presentarlo. Evite leerlo y explíquelo en 5 a 20 minutos.
OBJETIVOS:
Comenzar a hablar ante un público. Descubrir las habilidades de oratoria que ya posee y las habilidades que necesita fortalecer sus áreas de oportunidad.
DESARROLLAR SU DISCURSO, primero por escrito –el escrito no se entrega, solo se explica al público de forma opcional como evaluación continua- con la siguiente estructura. 



Introducción. - Debe captar inmediatamente la atención del público y decirle al público algo de lo siguiente:
•	Una pregunta sorprendente o un enunciado desafiante.
•	Una cita, ilustración o historia apropiada de forma breve.
•	Un despliegue de algún objeto o figura.
•	Una generalización atractiva que esté vinculada con su personalidad.
Evitar introducciones deficientes: Un enunciado apologético; Un cuento o chiste que no está relacionado con su tema; Una observación común; Un enunciado o historia larga o lenta y Una pregunta trivial, tal como ¿Alguna vez te has detenido a pensar…? 
Desarrollo. - No perder el punto principal, después dejar claro el subpunto y se puede llevar material de apoyo fácil de mostrar.
Conclusión. - Puede ser la revisión de lo descrito, un resumen, llamado a la acción o enunciado digno de recordarlo.

Evaluación: 1=Necesita atención 2=Puede mejorar 3=Satisfactorio 4=Superior 5=Excelente
*Valor del discurso _____ Comentarios:______________________________
*Preparación__________ Sugerencias:_______________________________
*Organización_________ Correcciones:______________________________
*Introducción_________ Se completó lo solicitado:_____________________
*Desarrollo__________ Áreas de oportunidad:_________________________
*Conclusión________ Se apegó a lo solicitado_________________________
*Transiciones_______ Fueron aceptables_____________________________
*Tiempo ____________Se respetó de 5 a 20 minutos:____________________
SUMA DE PUNTOS: ______Máximo 8 x 5 = 40 puntos máximo = 10 de calificación (20 puntos = 5 de calificación 24 = 6, 28=7, 32=8, 36=9)
`
    ]
  },
  {
    contenido_id: 11,
    titulo: '3.4 Definición de Léxico mediante expresiones regulares',
    descripcion: 'Uso de expresiones regulares para definir los tokens de un lenguaje.',
    tipo: TipoContenido.RECURSO,
    orden: 5,
    url_recurso: null,
    unidad_id: 3,
    unidad: { unidad_id: 3, nombre: 'Unidad III - Implementación de un Analizador Léxico' },
  },
  {
    contenido_id: 12,
    titulo: '3.5 Implementación con herramienta automatizada',
    descripcion: 'Uso de herramientas como Lex/Flex para generar analizadores léxicos automáticamente.',
    tipo: TipoContenido.TAREA,
    orden: 6,
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
