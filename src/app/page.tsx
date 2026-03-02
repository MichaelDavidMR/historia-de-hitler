'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ScrollArea } from "@/components/ui/scroll-area"
import { 
  Calendar, 
  MapPin, 
  BookOpen, 
  Users, 
  Building, 
  Skull, 
  AlertTriangle,
  Clock,
  GraduationCap,
  Swords,
  Landmark,
  FileText
} from "lucide-react"

export default function HitlerBiographyBlog() {
  return (
    <div className="min-h-screen flex flex-col bg-stone-50 dark:bg-stone-950">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 dark:bg-stone-900/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 dark:supports-[backdrop-filter]:bg-stone-900/80 border-b border-stone-200 dark:border-stone-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <BookOpen className="h-6 w-6 text-stone-700 dark:text-stone-300" />
              <h1 className="text-xl font-serif font-bold text-stone-900 dark:text-stone-100">
                Historia Crítica
              </h1>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#infancia" className="text-sm text-stone-600 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100 transition-colors">Infancia</a>
              <a href="#primera-guerra" className="text-sm text-stone-600 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100 transition-colors">Primera Guerra</a>
              <a href="#ascenso" className="text-sm text-stone-600 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100 transition-colors">Ascenso</a>
              <a href="#segunda-guerra" className="text-sm text-stone-600 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100 transition-colors">Segunda Guerra</a>
              <a href="#legado" className="text-sm text-stone-600 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100 transition-colors">Legado</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-stone-900 to-stone-800 dark:from-stone-950 dark:to-stone-900 text-white py-16 md:py-24">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-4 border-stone-500 text-stone-300 bg-stone-800/50">
                Biografía Histórica
              </Badge>
              <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
                Adolf Hitler
              </h1>
              <p className="text-xl md:text-2xl text-stone-300 mb-4 font-light">
                1889 - 1945
              </p>
              <p className="text-lg text-stone-400 max-w-2xl mx-auto leading-relaxed">
                Un análisis histórico objetivo de la vida del dictador alemán, 
                desde su infancia en Austria hasta su papel en la Segunda Guerra Mundial y el Holocausto.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <div className="flex items-center gap-2 text-stone-400">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm">20 de abril de 1889 - 30 de abril de 1945</span>
                </div>
                <div className="flex items-center gap-2 text-stone-400">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">Braunau am Inn, Austria - Berlín, Alemania</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Warning Banner */}
        <section className="bg-amber-50 dark:bg-amber-950/30 border-b border-amber-200 dark:border-amber-900">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-500 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-amber-800 dark:text-amber-200">
                <strong>Nota editorial:</strong> Este artículo presenta hechos históricos documentados de manera objetiva. 
                El Holocausto fue un genocidio sistemático que resultó en el asesinato de aproximadamente 6 millones de judíos 
                y millones de otras víctimas por el régimen nazi. La documentación histórica es esencial para la educación y la memoria colectiva.
              </p>
            </div>
          </div>
        </section>

        {/* Content Grid */}
        <section className="container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              
              {/* Chapter 1: Infancia */}
              <article id="infancia" className="scroll-mt-20">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-stone-200 dark:bg-stone-800 flex items-center justify-center">
                    <span className="font-serif font-bold text-stone-600 dark:text-stone-400">1</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-900 dark:text-stone-100">
                    Infancia y Primera Juventud (1889-1913)
                  </h2>
                </div>
                
                <Card className="border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900">
                  <CardContent className="p-6 space-y-4">
                    <div className="prose prose-stone dark:prose-invert max-w-none">
                      <p className="text-stone-700 dark:text-stone-300 leading-relaxed">
                        Adolf Hitler nació el 20 de abril de 1889 en Braunau am Inn, una pequeña ciudad fronteriza 
                        de Austria, cerca de la frontera con Baviera. Fue el cuarto de seis hijos de Alois Hitler, 
                        un funcionario de aduanas de 52 años, y su tercera esposa, Klara Pölzl, de 25 años.
                      </p>
                      
                      <h3 className="text-lg font-semibold text-stone-900 dark:text-stone-100 mt-6 mb-3 flex items-center gap-2">
                        <Users className="h-5 w-5 text-stone-500" />
                        Contexto Familiar
                      </h3>
                      <p className="text-stone-700 dark:text-stone-300 leading-relaxed">
                        La familia Hitler tuvo una vida itinerante debido al trabajo de Alois. Vivieron en 
                        Passau, Lambach, y finalmente se establecieron en Leonding cerca de Linz. De los seis 
                        hijos del matrimonio, solo Adolf y su hermana Paula sobrevivieron hasta la edad adulta.
                      </p>

                      <h3 className="text-lg font-semibold text-stone-900 dark:text-stone-100 mt-6 mb-3 flex items-center gap-2">
                        <GraduationCap className="h-5 w-5 text-stone-500" />
                        Educación y Aspiraciones
                      </h3>
                      <p className="text-stone-700 dark:text-stone-300 leading-relaxed">
                        Hitler mostró desde joven un interés por el arte. En 1907, tras la muerte de su madre 
                        por cáncer de mama, se trasladó a Viena con la intención de estudiar en la Academia 
                        de Bellas Artes. Fue rechazado dos veces (1907 y 1908). Durante este período vivió 
                        en la indigencia, sobreviviendo con pequeños trabajos y vendiendo postales pintadas.
                      </p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4 mt-6">
                      <div className="p-4 bg-stone-50 dark:bg-stone-800/50 rounded-lg">
                        <p className="text-xs font-medium text-stone-500 dark:text-stone-400 uppercase tracking-wider mb-1">
                          Padre
                        </p>
                        <p className="text-sm text-stone-900 dark:text-stone-100 font-medium">Alois Hitler (1837-1903)</p>
                        <p className="text-xs text-stone-500 dark:text-stone-400">Funcionario de aduanas austriaco</p>
                      </div>
                      <div className="p-4 bg-stone-50 dark:bg-stone-800/50 rounded-lg">
                        <p className="text-xs font-medium text-stone-500 dark:text-stone-400 uppercase tracking-wider mb-1">
                          Madre
                        </p>
                        <p className="text-sm text-stone-900 dark:text-stone-100 font-medium">Klara Pölzl (1860-1907)</p>
                        <p className="text-xs text-stone-500 dark:text-stone-400">Ama de casa, tercera esposa de Alois</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </article>

              {/* Chapter 2: Primera Guerra Mundial */}
              <article id="primera-guerra" className="scroll-mt-20">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-stone-200 dark:bg-stone-800 flex items-center justify-center">
                    <span className="font-serif font-bold text-stone-600 dark:text-stone-400">2</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-900 dark:text-stone-100">
                    Primera Guerra Mundial (1914-1918)
                  </h2>
                </div>

                <Card className="border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900">
                  <CardContent className="p-6 space-y-4">
                    <div className="prose prose-stone dark:prose-invert max-w-none">
                      <p className="text-stone-700 dark:text-stone-300 leading-relaxed">
                        En 1913, Hitler se trasladó a Múnich, en parte para evitar el servicio militar en 
                        Austria-Hungría. Sin embargo, cuando estalló la Primera Guerra Mundial en agosto de 1914, 
                        se enlistó voluntariamente en el ejército bávaro.
                      </p>

                      <h3 className="text-lg font-semibold text-stone-900 dark:text-stone-100 mt-6 mb-3 flex items-center gap-2">
                        <Swords className="h-5 w-5 text-stone-500" />
                        Servicio Militar
                      </h3>
                      <p className="text-stone-700 dark:text-stone-300 leading-relaxed">
                        Hitler sirvió como mensajero (Meldegänger) en el Frente Occidental, participando en 
                        importantes batallas como Ypres, el Somme y Arras. Fue herido dos veces: en 1916 
                        en el muslo durante la Batalla del Somme, y en 1918 sufrió ceguera temporal por 
                        un ataque con gas mostaza.
                      </p>

                      <h3 className="text-lg font-semibold text-stone-900 dark:text-stone-100 mt-6 mb-3">
                        Condecoraciones
                      </h3>
                      <p className="text-stone-700 dark:text-stone-300 leading-relaxed">
                        Recibió la Cruz de Hierro de Segunda Clase (1914) y la Cruz de Hierro de Primera 
                        Clase (1918), una distinción poco común para un soldado raso. Permaneció en el 
                        ejército hasta 1920.
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-4">
                      <Badge variant="outline" className="border-stone-300 dark:border-stone-600">
                        Cruz de Hierro 2ª Clase
                      </Badge>
                      <Badge variant="outline" className="border-stone-300 dark:border-stone-600">
                        Cruz de Hierro 1ª Clase
                      </Badge>
                      <Badge variant="outline" className="border-stone-300 dark:border-stone-600">
                        Medalla de Herido
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </article>

              {/* Chapter 3: Ascenso al Poder */}
              <article id="ascenso" className="scroll-mt-20">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-stone-200 dark:bg-stone-800 flex items-center justify-center">
                    <span className="font-serif font-bold text-stone-600 dark:text-stone-400">3</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-900 dark:text-stone-100">
                    Ascenso al Poder (1919-1934)
                  </h2>
                </div>

                <Card className="border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900">
                  <CardContent className="p-6 space-y-4">
                    <div className="prose prose-stone dark:prose-invert max-w-none">
                      <p className="text-stone-700 dark:text-stone-300 leading-relaxed">
                        Tras la guerra, Hitler permaneció en Múnich como informante del ejército sobre 
                        grupos políticos radicales. En septiembre de 1919, se unió al Partido Obrero Alemán 
                        (DAP), que más tarde se convertiría en el NSDAP (Partido Nacionalsocialista Obrero Alemán).
                      </p>

                      <h3 className="text-lg font-semibold text-stone-900 dark:text-stone-100 mt-6 mb-3 flex items-center gap-2">
                        <Landmark className="h-5 w-5 text-stone-500" />
                        El Putsch de Múnich (1923)
                      </h3>
                      <p className="text-stone-700 dark:text-stone-300 leading-relaxed">
                        El 8-9 de noviembre de 1923, Hitler intentó un golpe de estado en Múnich. El intento 
                        fracasó, resultando en 16 muertos y el arresto de Hitler. Fue juzgado por traición 
                        y sentenciado a cinco años de prisión, de los cuales solo cumplió nueve meses en 
                        la fortaleza de Landsberg. Durante este tiempo dictó "Mein Kampf" (Mi Lucha) a su 
                        secretario Rudolf Hess.
                      </p>

                      <h3 className="text-lg font-semibold text-stone-900 dark:text-stone-100 mt-6 mb-3">
                        La Legalidad Táctica
                      </h3>
                      <p className="text-stone-700 dark:text-stone-300 leading-relaxed">
                        Tras su liberación, Hitler cambió de estrategia: en lugar de un golpe militar, 
                        buscaría el poder a través de medios constitucionales. El contexto de la Gran 
                        Depresión (1929) y el descontento social facilitaron el crecimiento del partido nazi, 
                        que pasó de ser marginal a convertirse en el partido más grande del Reichstag en 1932.
                      </p>

                      <h3 className="text-lg font-semibold text-stone-900 dark:text-stone-100 mt-6 mb-3 flex items-center gap-2">
                        <Building className="h-5 w-5 text-stone-500" />
                        Canciller y Führer
                      </h3>
                      <p className="text-stone-700 dark:text-stone-300 leading-relaxed">
                        El 30 de enero de 1933, el presidente Paul von Hindenburg nombró a Hitler canciller 
                        de Alemania. Tras el incendio del Reichstag (febrero de 1933), se implementaron 
                        medidas de emergencia que suspendieron las libertades civiles. La "Ley Habilitante" 
                        de marzo de 1933 dio a Hitler poderes dictatoriales. Tras la muerte de Hindenburg 
                        en agosto de 1934, Hitler combinó los cargos de canciller y presidente, 
                        estableciendo el título de "Führer und Reichskanzler".
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </article>

              {/* Chapter 4: Segunda Guerra Mundial */}
              <article id="segunda-guerra" className="scroll-mt-20">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-stone-200 dark:bg-stone-800 flex items-center justify-center">
                    <span className="font-serif font-bold text-stone-600 dark:text-stone-400">4</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-900 dark:text-stone-100">
                    Segunda Guerra Mundial (1939-1945)
                  </h2>
                </div>

                <Card className="border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900">
                  <CardContent className="p-6 space-y-4">
                    <div className="prose prose-stone dark:prose-invert max-w-none">
                      <h3 className="text-lg font-semibold text-stone-900 dark:text-stone-100 mb-3">
                        Expansión y Agresión
                      </h3>
                      <p className="text-stone-700 dark:text-stone-300 leading-relaxed">
                        La política exterior agresiva de Hitler condujo a una serie de anexiones: 
                        la remilitarización de Renania (1936), el Anschluss con Austria (marzo 1938), 
                        y la ocupación de los Sudetes checos (octubre 1938). La invasión de Polonia 
                        el 1 de septiembre de 1939 provocó la declaración de guerra de Gran Bretaña 
                        y Francia, iniciando la Segunda Guerra Mundial.
                      </p>

                      <h3 className="text-lg font-semibold text-stone-900 dark:text-stone-100 mt-6 mb-3 flex items-center gap-2">
                        <Skull className="h-5 w-5 text-red-500" />
                        El Holocausto
                      </h3>
                      <p className="text-stone-700 dark:text-stone-300 leading-relaxed">
                        Bajo el liderazgo de Hitler, el régimen nazi implementó un programa sistemático 
                        de exterminio conocido como el Holocausto o Shoah. Aproximadamente 6 millones 
                        de judíos fueron asesinados, junto con romaníes, personas con discapacidad, 
                        prisioneros de guerra soviéticos, opositores políticos, homosexuales y otros 
                        grupos perseguidos. Los campos de exterminio como Auschwitz-Birkenau, Treblinka, 
                        Sobibor y Belzec fueron diseñados específicamente para el asesinato en masa.
                      </p>

                      <h3 className="text-lg font-semibold text-stone-900 dark:text-stone-100 mt-6 mb-3">
                        Derrota y Suicidio
                      </h3>
                      <p className="text-stone-700 dark:text-stone-300 leading-relaxed">
                        Tras los reveses militares en Stalingrado (1943) y el desembarco de Normandía 
                        (1944), el Tercer Reich se encontraba en retirada. Con las fuerzas soviéticas 
                        aproximándose a Berlín, Hitler se suicidó en su búnker el 30 de abril de 1945, 
                        junto a su esposa Eva Braun, con quien se había casado el día anterior.
                      </p>
                    </div>

                    <div className="mt-6 p-4 bg-red-50 dark:bg-red-950/30 rounded-lg border border-red-200 dark:border-red-900">
                      <h4 className="text-sm font-semibold text-red-800 dark:text-red-200 mb-2 flex items-center gap-2">
                        <Skull className="h-4 w-4" />
                        Víctimas del Nazismo
                      </h4>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                        <div className="p-2 bg-white/50 dark:bg-stone-900/50 rounded">
                          <p className="font-medium text-red-700 dark:text-red-300">~6 millones</p>
                          <p className="text-red-600/70 dark:text-red-400/70">Judíos</p>
                        </div>
                        <div className="p-2 bg-white/50 dark:bg-stone-900/50 rounded">
                          <p className="font-medium text-red-700 dark:text-red-300">~500,000</p>
                          <p className="text-red-600/70 dark:text-red-400/70">Romaníes</p>
                        </div>
                        <div className="p-2 bg-white/50 dark:bg-stone-900/50 rounded">
                          <p className="font-medium text-red-700 dark:text-red-300">~3 millones</p>
                          <p className="text-red-600/70 dark:text-red-400/70">Prisioneros soviéticos</p>
                        </div>
                        <div className="p-2 bg-white/50 dark:bg-stone-900/50 rounded">
                          <p className="font-medium text-red-700 dark:text-red-300">~270,000</p>
                          <p className="text-red-600/70 dark:text-red-400/70">Personas con discapacidad</p>
                        </div>
                        <div className="p-2 bg-white/50 dark:bg-stone-900/50 rounded">
                          <p className="font-medium text-red-700 dark:text-red-300">~2 millones</p>
                          <p className="text-red-600/70 dark:text-red-400/70">Polacos étnicos</p>
                        </div>
                        <div className="p-2 bg-white/50 dark:bg-stone-900/50 rounded">
                          <p className="font-medium text-red-700 dark:text-red-300">Miles</p>
                          <p className="text-red-600/70 dark:text-red-400/70">Otros grupos</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </article>

              {/* Chapter 5: Legado */}
              <article id="legado" className="scroll-mt-20">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-stone-200 dark:bg-stone-800 flex items-center justify-center">
                    <span className="font-serif font-bold text-stone-600 dark:text-stone-400">5</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-900 dark:text-stone-100">
                    Legado Histórico y Juicios
                  </h2>
                </div>

                <Card className="border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900">
                  <CardContent className="p-6 space-y-4">
                    <div className="prose prose-stone dark:prose-invert max-w-none">
                      <h3 className="text-lg font-semibold text-stone-900 dark:text-stone-100 mb-3 flex items-center gap-2">
                        <FileText className="h-5 w-5 text-stone-500" />
                        Los Juicios de Núremberg
                      </h3>
                      <p className="text-stone-700 dark:text-stone-300 leading-relaxed">
                        Tras la guerra, los principales líderes nazis supervivientes fueron juzgados 
                        en los Juicios de Núremberg (1945-1946). Estos juicios establecieron importantes 
                        precedentes en derecho internacional, incluyendo los crímenes contra la humanidad 
                        y crímenes de guerra. Aunque Hitler ya estaba muerto, su legado de destrucción 
                        fue documentado exhaustivamente.
                      </p>

                      <h3 className="text-lg font-semibold text-stone-900 dark:text-stone-100 mt-6 mb-3">
                        Consecuencias
                      </h3>
                      <p className="text-stone-700 dark:text-stone-300 leading-relaxed">
                        La Segunda Guerra Mundial causó aproximadamente 70-85 millones de muertes, 
                        siendo el conflicto más mortífero de la historia. Europa quedó devastada, 
                        y el mapa político mundial se reconfiguró con el inicio de la Guerra Fría. 
                        Alemania fue dividida hasta 1990. El Estado de Israel fue fundado en 1948, 
                        en parte como respuesta al Holocausto.
                      </p>

                      <h3 className="text-lg font-semibold text-stone-900 dark:text-stone-100 mt-6 mb-3">
                        Memoria y Educación
                      </h3>
                      <p className="text-stone-700 dark:text-stone-300 leading-relaxed">
                        El estudio del nazismo y el Holocausto se ha convertido en una parte fundamental 
                        de la educación histórica mundial. Museos, monumentos conmemorativos y programas 
                        educativos buscan preservar la memoria de las víctimas y educar sobre los peligros 
                        del totalitarismo, el racismo y la intolerancia.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </article>

            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* Timeline */}
              <Card className="sticky top-24 border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Clock className="h-5 w-5 text-stone-500" />
                    Línea Temporal
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-96">
                    <div className="space-y-4">
                      {[
                        { year: "1889", event: "Nacimiento en Braunau am Inn" },
                        { year: "1907", event: "Muerte de su madre; rechazo de la Academia de Viena" },
                        { year: "1914", event: "Se alista voluntario en el ejército alemán" },
                        { year: "1919", event: "Se une al DAP (futuro NSDAP)" },
                        { year: "1923", event: "Putsch de Múnich; prisión en Landsberg" },
                        { year: "1925", event: "Publicación de Mein Kampf" },
                        { year: "1933", event: "Nombrado Canciller de Alemania" },
                        { year: "1934", event: "Se convierte en Führer tras muerte de Hindenburg" },
                        { year: "1938", event: "Anschluss con Austria" },
                        { year: "1939", event: "Invasión de Polonia; inicio de WWII" },
                        { year: "1941", event: "Invasión de la URSS; inicio del Holocausto sistemático" },
                        { year: "1945", event: "Suicidio en el búnker de Berlín" }
                      ].map((item, index) => (
                        <div key={index} className="flex gap-3">
                          <div className="flex flex-col items-center">
                            <div className="w-2 h-2 rounded-full bg-stone-400 dark:bg-stone-600" />
                            {index < 11 && (
                              <div className="w-0.5 flex-1 bg-stone-200 dark:bg-stone-700" />
                            )}
                          </div>
                          <div className="pb-4">
                            <p className="text-sm font-medium text-stone-900 dark:text-stone-100">
                              {item.year}
                            </p>
                            <p className="text-xs text-stone-500 dark:text-stone-400">
                              {item.event}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* FAQ Accordion */}
              <Card className="border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900">
                <CardHeader>
                  <CardTitle className="text-lg">Preguntas Frecuentes</CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="q1">
                      <AccordionTrigger className="text-sm text-left">
                        ¿Cuánto duró el Tercer Reich?
                      </AccordionTrigger>
                      <AccordionContent className="text-sm text-stone-600 dark:text-stone-400">
                        El Tercer Reich duró 12 años, desde 1933 hasta 1945. Hitler prometió un "Reich de mil años", 
                        pero duró apenas más de una década.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="q2">
                      <AccordionTrigger className="text-sm text-left">
                        ¿Qué significaba "Mein Kampf"?
                      </AccordionTrigger>
                      <AccordionContent className="text-sm text-stone-600 dark:text-stone-400">
                        "Mein Kampf" significa "Mi Lucha" en español. Fue escrito durante su encarcelamiento 
                        en Landsberg (1924) y expone su ideología política.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="q3">
                      <AccordionTrigger className="text-sm text-left">
                        ¿Cómo murió Hitler?
                      </AccordionTrigger>
                      <AccordionContent className="text-sm text-stone-600 dark:text-stone-400">
                        Hitler se suicidó de un disparo el 30 de abril de 1945 en su búnker en Berlín, 
                        mientras las fuerzas soviéticas rodeaban la ciudad.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="q4">
                      <AccordionTrigger className="text-sm text-left">
                        ¿Tuvo hijos?
                      </AccordionTrigger>
                      <AccordionContent className="text-sm text-stone-600 dark:text-stone-400">
                        No, Hitler no tuvo hijos. Se casó con Eva Braun el 29 de abril de 1945, 
                        un día antes de su suicidio conjunto.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>

              {/* Sources */}
              <Card className="border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900">
                <CardHeader>
                  <CardTitle className="text-lg">Fuentes Consultadas</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-stone-600 dark:text-stone-400">
                    <li>• Kershaw, Ian. "Hitler: A Biography" (2008)</li>
                    <li>• Evans, Richard J. "The Third Reich Trilogy" (2003-2008)</li>
                    <li>• United States Holocaust Memorial Museum</li>
                    <li>• Yad Vashem - The World Holocaust Remembrance Center</li>
                    <li>• Bundesarchiv (Archivo Federal Alemán)</li>
                  </ul>
                </CardContent>
              </Card>
            </aside>
          </div>
        </section>

        {/* Conclusion Section */}
        <section className="bg-stone-100 dark:bg-stone-900 py-12">
          <div className="container mx-auto px-4">
            <Card className="max-w-4xl mx-auto border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800">
              <CardHeader>
                <CardTitle className="text-2xl font-serif">Conclusión</CardTitle>
                <CardDescription>
                  Lecciones de la Historia
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-stone-700 dark:text-stone-300 leading-relaxed">
                  El estudio de la vida de Adolf Hitler y el nazismo representa una de las páginas más oscuras 
                  de la historia humana. La documentación histórica demuestra inequívocamente su responsabilidad 
                  en el inicio de la Segunda Guerra Mundial y en el Holocausto. El estudio riguroso de estos 
                  eventos es esencial para comprender los mecanismos del totalitarismo, los peligros del 
                  nacionalismo extremo y la importancia de defender los derechos humanos y la democracia.
                </p>
                <Separator className="my-6" />
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Historia del Siglo XX</Badge>
                  <Badge variant="secondary">Segunda Guerra Mundial</Badge>
                  <Badge variant="secondary">Holocausto</Badge>
                  <Badge variant="secondary">Alemania Nazi</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-stone-900 dark:bg-stone-950 text-stone-300 py-8 mt-auto">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              <span className="font-serif font-bold text-stone-100">Historia Crítica</span>
            </div>
            <p className="text-sm text-stone-500 text-center md:text-right">
              Artículo con fines educativos. Contenido basado en fuentes históricas documentadas.
            </p>
          </div>
          <Separator className="my-4 bg-stone-700" />
          <p className="text-xs text-stone-500 text-center">
            "Quien no conoce la historia está condenado a repetirla" - La memoria histórica es fundamental para construir un futuro mejor.
          </p>
        </div>
      </footer>
    </div>
  )
}
