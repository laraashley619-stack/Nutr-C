# nutríC · fuentes de datos (versión 1.1.0)

| Conjunto | Archivo | Fuente y versión | Consulta | Estado |
|---|---|---|---|---|
| SMAE quinta edición (2,841 alimentos) | data/smae5.json | Archivos SMAE.xlsx y Tablas_SMAE.xlsx proporcionados por el usuario | 2026-10-17 | Datos tal como vienen; registros dudosos marcados «requiere revisión». Unidades de vitamina A, vitamina C y folato por confirmar. |
| Micronutrientes: EAR, RDA/AI, UL (27 nutrimentos × 22 etapas) | data/micronutrientes.json | NASEM, Dietary Reference Intakes Summary Tables (Apéndice J), en DRI for Sodium and Potassium, 2019, doi:10.17226/25353 | 2026-10-18 | Verificados contra la tabla oficial. Función y fuentes alimentarias: pendientes. |
| Macronutrientes: agua, carbohidratos, fibra, grasa, ác. linoleico y α-linolénico, proteína; EAR; AMDR; recomendaciones adicionales | data/micronutrientes.json (macronutrientes, amdr, adicionales_macro) | Misma tabla NASEM (Apéndice J, 2019) | 2026-10-18 | Verificados contra la tabla oficial. RDA de proteína en g/kg/d y ecuaciones de energía (EER) por edad: pendientes. |
| Precios | data/precios_mx.json | Sin registros. Fuente prevista: SNIIM (Secretaría de Economía) | 2026-10-18 | Sin datos cargados; módulo sin cambios. |
| Fórmulas | src/calc.js | Ver tests/ y la sección Referencias | 2026-10-18 | Ver estado por fórmula abajo. |

## Estado de verificación de fórmulas
- Mifflin-St Jeor (simplificada y original completa, y con masa libre de grasa): verificadas en el resumen de PubMed (Am J Clin Nutr 1990;51:241-247).
- Harris-Benedict original: coeficientes verificados en varias fuentes secundarias (la versión anterior de nutríC tenía coeficientes redondeados y un valor erróneo, 6.775, que se corrigió a 6.7550). Revisada 1984 (Roza y Shizgal): fuentes secundarias.
- Schofield: coeficientes de 10 años o más verificados en una tabla de revisión publicada (MJ/d × 239.006 = kcal/d); menores de 10 años y varones de más de 60 años: solo fuentes secundarias. Los coeficientes del informe FAO/OMS/UNU 1985 son distintos.
- Owen: fuente secundaria. Katch-McArdle: fuentes secundarias que citan el libro de texto.
- Devine, Robinson y Miller: verificadas con Pai y Paloucek (Ann Pharmacother 2000;34:1066-1069). Hamwi: solo fuentes secundarias.
- Lorentz: hombres ÷4 coincide en todas las fuentes; para mujeres las fuentes difieren (÷2.5 o ÷2): nutríC muestra ambas.
- Deurenberg: verificada contra el resumen en PubMed (Br J Nutr 1991;65:105-114).
- Mosteller, DuBois, IMC (OMS), cintura/cadera (OMS): sin verificar en línea en esta versión.
