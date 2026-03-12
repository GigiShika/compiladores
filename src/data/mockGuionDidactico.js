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
