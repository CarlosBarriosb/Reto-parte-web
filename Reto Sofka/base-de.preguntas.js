function LaTeX(code) {
    return `https://latex.codecogs.com/svg.image?\\large&space;${code}`;
  }
  
  function opnLaTeX(code) {
    return `<img src="${LaTeX(code)}" style="height:40px">`;
  }

  // Primer nivel

   baseDePreguntas = [
   
    
    {
        pregunta: 'Fenómeno económico que cuando los precios aumentan el consumo es reducido, pero  al bajar los precios los compradores adquieren cantidades mayores.',
        respuesta: 'Demanda',
        distractores: ["Utilidad ","Oferta","Necesidad"]
        

    },

// Pregunta #2
    {
        pregunta: 'Cada país se encuentra dotado en forma diferente de los recursos necesarios para llevar a cabo el proceso productivo ¿Cuáles son esos recursos?',
        respuesta: 'Tierra, trabajo, capital y organización',
        distractores: ["Agentes económicos","Inversión","Manufacturas "]

    },

// Pregunta#3

    {
        pregunta: 'Cuando los precios son altos, los productores se sienten estimulados a producir y vender más, pero si los precios bajan, reducen su producción y el deseo de vender, a esto se le llama',
        respuesta: 'Ley de la oferta',
        distractores: ["Ley de la demanda","Costo total","Utilidad marginal"]

    },

// Pregunta #4

    {
        pregunta: 'Es el acuerdo entre compradores y vendedores acerca de las cantidades y precios de sus productos a comprar y vender, se le llama',
        respuesta: 'Mercado',
        distractores: ["Empresa","Consorcio","Sindicato"]

    },

// Pregunta #5

    {
        pregunta: 'Cuando los consumidores de manera individual toman la decisión de disminuir los bienes que van a demandar, es una acción estudiada por',
        respuesta: 'Microeconomía',
        distractores: ["Econometría","Economía","Macroeconomía"]

    },

    // Segundo nivel
// Pregunta #6

    {
        pregunta: 'Si disminuyen las preferencias por una mercancía',
        respuesta: ' Disminuye la cantidad ofrecida en el equilibrio',
        distractores: ["Su curva de oferta se desplaza hacia la derecha"," Aumenta el precio de sus mercancías complementarias","Disminuye la cantidad demandada de sus mercancías substitutivas"]

    },

// Pregunta #7

    {
        pregunta: 'En un mercado donde la demanda es decreciente y la oferta creciente, si aumenta la demanda',
        respuesta: 'Se seguirá ofreciendo la misma cantidad a un precio mayor',
        distractores: ["Se ofrecerá más cantidad al mismo precio","Se ofrecerá una cantidad mayor de producto"," Puede ofrecerse más, menos o igual cantidad, pero siempre a un precio mayor"]

    },

// Pregunta #8

    {
        pregunta: 'En un mercado en el que la demanda es decreciente y la oferta creciente, si  aumenta la demanda',
        respuesta: 'Se seguirá ofreciendo la misma cantidad a un precio mayor',
        distractores: ["El precio aumentará","La curva de oferta se desplazará hacia la izquierda","Disminuyen los costes totales"]

    },

// Pregunta #9

    {
        pregunta: ' Las curvas de indiferencia de dos bienes tienen una pendiente negativa debido',
        respuesta: 'al principio de cuanto más, mejor',
        distractores: ["a que las curvas de indiferencia no pueden cortarse en ningún punto","a que las preferencias son transitivas","a que la utilidad marginal de un bien disminuye a medida que se consume ese bien"]

    },

// Pregunta #10

    {
        pregunta: 'Las curvas de indiferencia no pueden cortarse porque',
        respuesta: 'las preferencias son completas',
        distractores: ["las curvas de indiferencia tienen pendiente negativa","las preferencias son transitivas","la utilidad marginal de un bien disminuye a medida que se consume ese bien"]

    },

   //Tercer nivel
// Pregunta #11

    {
        pregunta: 'Las curvas de indiferencia entre zapatos del pie izquierdo y zapatos del pie derecho',
        respuesta: 'tendrían forma de “L”',
        distractores: ["serían convexas","tendrían pendiente negativa y serían rectas","tendrían pendiente positiva"]

    },

// Pregunta #12

    {
        pregunta: 'La ordenada en el origen de la recta presupuestaria representa',
        respuesta: 'la renta real del consumidor con respecto al bien medido en el eje de ordenadas',
        distractores: ["la renta nominal del consumido","la renta real del consumidor con respecto al bien medido en el eje de abscisas","la mayor cantidad de dinero que el consumidor puede gastar en el bien medido en el eje de ordenadas"]

    },

// Pregunta #13

    {
        pregunta: 'Supongamos que la cantidad de patatas fritas consumida se mide en el eje de ordenadas  y  que  la  cantidad  de  refrescos  consumida  se  mide  en  el  eje  de abscisas.  Si  la  recta  presupuestaria  se  aplana  mientras  que  la  ordenada  en  el  origen no varía, entonces, ¿qué es lo que ha ocurrido?',
        respuesta: 'El precio de los refrescos ha bajado, mientras que otras cosas han permanecido constantes',
        distractores: ["La renta y el precio de los refrescos han subido, mientras que otras cosas han permanecido constantes","El precio de las patatas fritas ha subido, mientras que otras cosas han permanecido constantes","El precio de los refrescos ha subido, sin embargo la renta también aumentó en un gran porcentaje, permaneciendo constantes otras cosas"]

    },

// Pregunta #14

    {
        pregunta: 'María y Paloma consumen manzanas y chocolate. Cada una de ellas pagan el  mismo precio por cada bien y ambas exigen estar en equilibrio. Debe ser cierto  que',
        respuesta: 'María y Paloma tienen la misma relación marginal de sustitución de manzanas por chocolate',
        distractores: ["María y Paloma tienen las mismas funciones de utilidad","María y Paloma tienen la misma renta","Todas las respuestas anteriores son correctas"]

    },

// Pregunta #15

    {
        pregunta: 'Si la relación marginal de sustitución de Conchi de manzanas por chocolate es de 3, y el precio del chocolate es de 6 dólares y el de cada manzana es de 1 dólar, entonces Conchi',
        respuesta: 'reducirá su consumo de chocolate y comprará más manzanas',
        distractores: ["cree estar en equilibrio","reducirá su consumo de manzanas y comprará más chocolate","cambiará su conducta, pero se necesita información para determinar cómo lo hará"]

    },
   
   // Cuarto nivel 
// Pregunta #16

    {
        pregunta: 'El valor de las alternativas u otras oportunidades a las que renunciamos para conseguir una cosa determinada se denomina',
        respuesta: 'Costo de Oportunidad',
        distractores: ["Productividad","Utilidad","Rentabilidad"]

    },

// Pregunta #17

    {
        pregunta: 'El objeto de estudio de la Economía es',
        respuesta: 'La vida económica del hombre',
        distractores: ["La pobreza de la sociedad","El proceso económico","El estado y la empresa"]

    },

// Pregunta #18

    {
        pregunta: 'De  los  siguientes  cuál  no  es  un  fin  práctico  de  la Economía',
        respuesta: 'Conocer los fenómenos económicos',
        distractores: ["Favorecer la recuperación económica","Mejorar la distribución de la riqueza","Lograr el bienestar general"]

    },

// Pregunta #19

    {
        pregunta: 'El  concepto  básico  en  economía  que  significa  que  la sociedad puede ofrecer menos de lo que los individuos desean tener, es',
        respuesta: 'escasez',
        distractores: ["Eficiencia ","equidad","todas  las anteriores"]

    },

// Pregunta #20

    {
        pregunta: 'Los fenómenos económicos resultan de las actividades económicas  que  el  hombre  realiza  con  el  objeto  de adquirir  bienes  y  satisfacer  necesidades;  se  les considera',
        respuesta: 'Fenómenos Sociales',
        distractores: ["Fenómenos Naturales","Fenómenos Humanos","Todas las anteriores"]

    },

    // Quinto nivel
// Pregunta #21

    {
        pregunta: 'La capacidad para usar óptimamente los factores de la producción y lograr el cumplimiento del objetivo, se llama',
        respuesta: 'eficiencia',
        distractores: ["Rentabilidad ","productividad","utilidad"]

    },

// Pregunta #22

    {
        pregunta: 'uando  a  partir  de  la  observación  de  fenómenos económico,  podemos  hacer  afirmaciones  para  su posterior verificación, estamos',
        respuesta: 'Planteando hipótesis',
        distractores: ["Formulando conceptos","Planteando objetivos","Todas las anteriores"]

    },

// Pregunta #23

    {
        pregunta: 'Cuando partimos del análisis de la política económica del Estado para determinar cuál podría ser la situación futura  esperada  de  las  ventas  de  nuestra  empresa utilizamos el',
        respuesta: 'Método Deductivo',
        distractores: ["Método Estadístico","Método Inductivo","Método Matemático"]

    },

// Pregunta #24

    {
        pregunta: 'El contenido o conocimientos de la Economía, conjunto ordenado  de  ideas  que  pretenden  explicar  los fenómenos económicos, se encuentran en la',
        respuesta: 'Teoría Económica',
        distractores: ["Economía Descriptiva ","Economía Normativa","Todas las anteriores"]

    },

// Pregunta #25

    {
        pregunta: 'El INEI (Instituto Nacional de Estadística e Informática) es la institución del Estado responsable de desarrollar',
        respuesta: 'Economía Descriptiva',
        distractores: ["Política Económica","Teoría Económica","Economía Normativa"]

    }
];
