function populateSite(){

  var div = document.querySelector(".treatmentsContent");
  var h2 = document.createElement("h2");
  h2.className = "treatmentsContentTitle"
  h2.appendChild(document.createTextNode(treatmentArray[0].title));

  div.innerHTML = treatmentArray[0].content;
  div.insertBefore(h2, div.firstChild);
  let ul = document.querySelector(".treatmentsList");

  for (let i = 0; i<treatmentArray.length; i++){
    let li = document.createElement("li");
    li.className = "treatmentItems"
    li.innerHTML = treatmentArray[i].title;
    li.onclick = function() {
      populateTreatmentContent(treatmentArray[i]);
      borderActiceListItem(li);
      ;}
    ul.appendChild(li);
  }
}

function borderActiceListItem(li){
  var listItems = document.querySelector(".treatmentsList");
  for(var i = 0; i<listItems.childNodes.length; i++){
    if(listItems.childNodes[i].style.fontWeight != "400"){
      listItems.childNodes[i].style.fontWeight = "400";
    }
  }
  li.style.fontWeight = "600";
}

function populateTreatmentContent(articleContent){
  var div = document.querySelector(".treatmentsContent");
  var h2 = document.createElement("h2");
  h2.className = "treatmentsContentTitle"
  h2.appendChild(document.createTextNode(articleContent.title));
  div.innerHTML = articleContent.content;
  div.insertBefore(h2, div.firstChild);
}

var treatmentArray = [
  {
  title: "Hva er karies/hull i tannen?",
  content: `
          <article>
              <p> Karies (hull i tannen), er en sykdom som oppstår når tannsubstans brytes ned av biprodukter (syrer) fra bakteriekolonier som lever på tannoverflaten. Disse koloniene er det man kaller plakk.</p>
              <br>

              <p>Hvorfor man får hull i tennene, har en fleraktoriell årsak. Til å forklare hvorfor, bruker en ofte Keys triade. Den består av enkeltfaktorene :plakk på tennene, kosten og tannflaten. Hver for seg er ikke disse nok til å danne et hull i tannen, men fletter man dem sammen, og legger på tid, vil det etterhvert oppstå et hull.</p>

              <br>

              <p>Man graderer hullene inn i fem grader der grad 1 er starten på hullet og 5 er hull helt inn til nerven av tannen. Grad 1-2 er det mange kaller for «begynnende hull» og er et hull i emaljen av tannen. Emaljen er 1-2mm tykk. Er hullet lokalisert her kan man stoppe hullet ved å være flink med munnhygiene som tannpuss og tanntråd. Ved grad 3-5 har hullet gått inn til dentin eller tannbenet under emaljen og man må borre bort hullet (den ødelagte delen av tannen) for å stoppe det.</p>

              <img src="resources/karies.png" id="wideImage" class="karies" alt="karies">

              <p>Etter man har borret er det et hulrom i tannen. Ut ifra hvor mye tann som er igjen etter dette kan man erstatte tapt del av tann med enten en fylling, en krone eller innlegg. Oftest bruker man ulike fyllingsmaterialer til å fylle igjen tannen slik at den blir hel igjen.</p>

              <p>Før brukte man amalgam til dette, men det er nå erstattet med ulike hvite plastmaterialer. Plastmaterialene kommer i mange ulike hvite fargenyanser som gjør det mulig å lage pene fyllinger som ikke syntes. Det finnes mange ulike fyllingsmaterialer på markedet. Vi på Ibsen tannlegesenter benytter kun anerkjente og godt dokumenterte materialer.</p>
          </article>`
  },
  {
  title: "Kirurgi og tanntrekking",
  content: `
      <article>

          <h2><a id="visdomstenner">Fjerning av visdomstenner</a></h2>

          <p>Visdomstennene er det tredje og siste sett av jeksler som bryter frem i munnen, vanligvis i slutten av tenårene eller tidlig i tyveårene. Mange lever hele livet med friske, fullt frembrudte visdomstenner uten symptomer eller smerter. Men ofte er det ikke nok plass til visdomstannen, og den kommer derfor bare delvis frem i munnen. Slike tenner kan gi opphav til smerter og betennelse, og av den grunn er det nødvendig å fjerne dem.</p>

          <br>

          <h2><a id="rotspiss">Rotspissamputasjon:</a></h2>

          <p>Alle tenner har en rotkanal som forsyner tannen med nerver og blodkar. Om bakterier kommer inn i rotkanalen, eller tannen skades slik at blodforsyningen til tannen skades, må tannen rotfylles.</p>

          <p>Noen ganger er ikke en rotfylling tilstrekkelig for at tannen skal bli bra, og da kan det være behov for kirurgisk behandling. Den vanligste kirurgiske behandling for å redde tannen kalles for rotspissamputasjon.</p>

          <p> Ved denne operasjonen blir betennelses-vev rundt roten fjernes, og rotkanalen forsegles med en fylling slik at ny infeksjon i roten ikke skal oppstå. Når området rundt er tilhelet med nytt kjeveben, kan tannen opprettholder sin normale funksjon.</p>

          <br>

          <h2><a id="tanntekking">Etter kirurgi og tanntrekking</a></h2>

          <p>Kroppen oppfatter alle kirurgiske behandlinger som en skade som må repareres. Det er viktig at området får mest mulig ro når tilhelingen starter.</p>

          <p>Etter 20 minutter fjernes bittkompressen (hvis du har fått en). Så snart som mulig tas smertestillende tablett(er) med litt vann (slik begynner dette å virke mens bedøvelsen ennå sitter).</p>

          <br>

          <p>Du skal ikke spise, drikke eller skylle munnen på de første to til tre timene etter kirurgisk behandling. Unngå trening og tunge løft de første to dagene etter operasjonen og røyking bør unngås operasjonsdagen.</p>
          <p>På denne måten forebygges smertene som kommer når virkningen av lokalbedøvelsen går ut (oftest en til to timer etter inngrepet), og muligheten for å få betennelse i kjevebeinet reduseres vesentlig.</p>
          <p> Etter enkelte behandlinger vil det være en fordel å kjøle ned operasjonsstedet med en ispose. Dette vil redusere hevelsen og dermed også smerter og gapebesvær. Sett i gang så raskt som mulig etter behandlingen!</p>
          <p>ISPOSE: En plastpose med isbiter og litt kaldt vann pakkes inn i et fuktig håndkle. Hold posen over operasjonsstedet med litt press i 15 minutter, deretter hvile i 15 minutter. Gjenta 3 til 4 ganger.</p>
      </article>
      `
  },
  {
  title: "Kroner/Bro/Fasett",
  content: `        <article>
              <p>Dersom en fylling skal skiftes ut, det er et nytt hull i en tann, deler av tannen har knekt av eller en fylling som knekker må man alltid gjøre en vurdering på hvilke type restaurering som best erstatter de tapte delene. Valgene står mellom å legge ny fylling, lage et innlegg, en krone eller en fasett i front.</p>

              <br>

              <h2>Krone</h2>

              <img src="resources/krone.png" class="krone" alt="krone">

              <p>Dersom tannen er veldig redusert, sidevegger enten er veldig svake eller helt borte eller tannen er rotfylt med lite tannsubstans igjen bør en veldige å fremstille en krone for best å gjenskape funksjon og utseende. En krone kan i mange tilfeller være mer holdbar en for eksempel en stor plastfylling.</p>

              <br>

              <p>For å lage en krone må man slipe rundt hele tannen som vist på bildet slik at man får plass til materialet. Videre tar man et avtrykk av tannen, et annet avtrykk av motstående tann som biter over, sender inn til tanntekniker som fremstiller en ny, kunstig tannkrone som en deretter sementerer over den beslipte tannen i munn. Du får laget en midlertidig erstatning frem til kronen er klar. Dette tar vanligvis 2-3 uker.</p>

              <br>

              <h2>Bro</h2>

              <img src="resources/bro.png" class="bro" alt="bro">

              <p>Hvis en eller flere tenner mangler av ulike årsaker og ønskes erstattet kan man enten fremstille en bro på nabotennene eller sette inn et implantat. En bro er en sammenhengende konstruksjon som erstatter tapte tenner der egne tenner bærer de kunstige erstatningene.</p>

              <br>

              <p>En bro fremstilles ved å slipe til nabotennene til den tannen (tenner) som ønskes erstattet som vist på bildet. Man tar så et avtrykk av de beslipte tennene, et avtrykk av motstående tenner som biter over og avtrykket sendes til tanntekniker. Tanntekniker fremstiller broen som så sementeres på plass i munn. Du får laget til en midlertidig erstatning frem til broen er klar. Dette tar vanligvis 2-3 uker.</p>

              <br>

              <h2>Fasetter</h2>

              <p>En fasett eller laminater er et tynt skall i porselen som fremstilles av en tanntekniker. Dette er en god erstatning dersom en ønsker et optimalt estetisk resultat.</p>

              <p> Til forskjell fra kroner er det her krav om at det ikke er mye tannsubstans som er borte eller at tannen er svært misfarget. De lages oftest i front og er hva årsak til hvorfor alle Hollywood-kjendiser har hvite og rette tenner. Det må også her beslipes et tynt lag av egen tann, avtrykk av tann/tenner som deretter sendes til tanntekniker. Tanntekniker fremstiller fasetten etter de spesifikasjonene vi gir. Til slutt sementeres fasetten til tannen.</p>

              <img src="resources/fasett-1.png" class="fasett1" alt="fasett">
              <img src="resources/fasett-2.png" class="fasett2" alt="tannfasett">

              <br>

              <p>Det finnes flere ulike materialer på markedet som brukes av tanntekniker til fremstilling av kroner, broer og fasetter. For kroner og broer er det vanligst å fremstille en kjerne i et hardt materiale som det legges porselen utenpå. Kjernematerialet er gjerne en støpt metallegering, men helkeramiske erstatninger blir mer og mer vanlig. Dette grunnet større krav til estetikk i enkelte tilfeller. Hvilke materialer som velges diskuterer vi med deg slik at du får det beste resultatet både funksjonelt og estetisk. Vi på Ibsen Tannlegesenter bruker kun autoriserte norske tannteknikerfirmaer.</p>
          </article>`
  },
  {
  title: "Rotfylling av tann",
  content: `
      <article>
            <img src="resources/rotfylling-1.png" class="rot" alt="rotfylling">

            <p>Rotfylling gjør vi når nerven inni en tann er blitt angrepet og syk av bakterier. Årsaken kan være et dypt hull, en sprekk i tannen, sykt tannkjøtt, eller tidligere skade.</p>

            <p>Nerven må da renses ut av røttene og erstattes av rotfylling med et naturplastmateriale (guttaperka). Rotfylling er en behandling som kan kreve to eller flere besøk. Man vil vanligvis være godt bedøvd og smertefri under behandlingen. Målet er å hindre at bakterier sprer seg i kjeven og i kroppen. Ved hjelp av rotfylling kan man ofte beholde en tann som ellers måtte trekkes.</p>

            <img src="resources/rotfylling-2-og-3.png" class="rot" alt="rotfylling">
            <img src="resources/Rotfylling-4.png" class="rot" alt="rotfylling">
            <p>Når tannen er ferdig rotfylt og fri for infeksjon og smerter, må den bygges opp med fyllingsmateriale eller med en krone, som eventuelt må forankres med stift i rotkanalen.</p>

    </article>`
  },
  {
  title: "Søvnapnéskinner/snorkeskinner",
  content: `
          <article>
              <ul class="behandling">
                  <li>Er du eller dine omgivelser plaget med at du snorker?</li>
                  <li>Har du mild eller moderat søvnapné?</li>
                  <li>Har du problemer med å sove med Cpap?</li>
              </ul>

              <p>I samarbeid med flere produsenter av snorke- og apneskinner kan vi tilby en enkel skinne som plasseres i munnen når du sover. Resultatene er svært gode for de som snorker, og for de med mild eller moderat søvnapné. Søvnapné: Tilstand der man slutter å puste i 10 sekunder eller mer minst 5 ganger pr. time</p>

              <p>De som ikke allerede er undersøkt av lege, tilbys å låne et enkelt diagnoseapparat med hjem. Ved hjelp av dette, kan vi vurdere om det foreligger noen grad av søvnapné. Ved behov, vil vi henvise videre til søvnklinikk for videre utredning.</p>

              <img src="resources/snorkeskinne.png" class="snorkeskinne" alt="snorkeskinne">

              <br>

              <p> Søvnapné er pustestopp mens du sover. Det er en sykdom hvor en sovende person opplever pustestopp som varer over 10 sekunder. Forekomsten av korte pustepauser under søvn er nokså vanlig. Det er varigheten på pustestoppet og antallet i løpet natten, som definerer om det snakk om sykdom. Søvnapné bør behandles om man har mer enn 10 pustestopp per time med en varighet på mer enn 10 sekunder. De vanligste symptomene er snorking, unormal trøtthet om dagen, observerte pustestopp om natten, stadige oppvåkninger, hyppige toalettbesøk, hodepine, konsentrasjonsvansker, irritabilitet, redusert seksuell lyst/evne og vektproblemer.</p>

              <br>

              <p>Søvnapné er sterkt forbundet med diabetes, høyt blodtrykk, hjerteinfarkt og hjerneslag. Studier viser også at personer med søvnapné har syv ganger forhøyet risiko for å være involvert i en bilulykke. 20-40% har søvnapné eller andre pusteforstyrrelser og pustestans under søvn. 80% av dem går uvitende om sin sykdom og får dermed ingen diagnose og behandling.</p>

              <p>God informasjon på internett finnes her: <a href="https://www.sovnapne.no">www.sovnapne.no</a> og <a href="https://www.pustestans.no">www.pustestans.no</a></p>
          </article>`
  },
  {
  title: "Tannimplantater",
  content: `
          <article>
              <img src="resources/Implantatfestet-bro.png" class="implbro" alt="implantatfestet-bro">

              <p>Det er mulig å erstatte nesten alle tapte tenner med implantat.</p>

              <p>Behandlingen innebærer at man opererer en liten skrue i titan inn i kjevebenet. Denne erstatter roten som mangler. På implantatet festes siden en krone eller en bro.</p>

              <br>

              <p>Tannerstatning på implantater er en gjennomprøvd behandlingsmetode med en klinisk dokumentasjon som strekker seg over 40 år tilbake i tid. I nesten alle tilfeller går det an å få tenner som sitter fast og som ser naturlige ut med denne behandlingen.</p>

              <br>

              <p>Grunnstoffet titan(Ti) godtas av kroppen nesten som om det var dens eget vev, og dette gjør at pasienten kan få nye røtter fremstilt i titan. Med en liten operasjon vil tannlegen feste titanskruer, eller implantater som er fagbetegnelsen, i kjeven. Disse titanimplantatene vokser fast i kjevebenet. På implantatet festes siden en liten mellomdel kalt distanse, som stikker så vidt gjennom tannkjøttet. En krone eller bro skrues deretter fast på distansen.</p>

              <br>

              <p>Før implantatbehandlingen settes i gang kreves grundig forundersøkelse og nøye planlegging. Behandlingen strekker seg som regel over flere uker og krever flere tannlegebesøk. Tannlegen vil lage et kostnadsoverslag og en behandlingsplan i samarbeid med oralkirurg og tanntekniker. Det er viktig med røntgenbilder for å se på høyden og kvaliteten av kjevekammen. I tillegg trenger man oppdaterte helseopplysninger, fordi munnhulen må være fri for infeksjoner og tannløsningssykdom (periodontitt).</p>

              <br>

              <img src="resources/Implantat-fortann.png" class="implfortann" alt="implantatfestet-fortann">

              <p>Når behandlingen utføres er det viktig at pasienten er frisk, men også pasienter med kroniske sykdommer under medisinsk behandling kan få utført implantatbehandling. En frisk munnhule hvor tannkjøttproblemer, kariesangrep og andre infeksjoner er under kontroll er viktig for et stabilt og godt langtids resultat. Høy alder er sjelden et problem. Røyking frarådes ved implantatbehandling, da det er større fare for komplikasjoner med bentap.</p>

              <img src="resources/Implantat-fortann-2.png" class="impltann" alt="implantatfestet-fortann">

              <br>

              <h2>Implantatbehandling kan benyttes hvis du:</h2>

              <ul>
                  <li><strong>mangler èn tann.</strong> Man opererer inn et implantat og fester en krone på implantatet. Dette anbefales særlig der nabotenner
                      er feilfrie eller har små fyllinger.</li>
                  <li><strong>mangler flere tenner.</strong> Man opererer inn to eller flere implantater og fester enten flere kroner eller en keramisk bro
                      på disse.</li>
                  <li><strong>mangler alle tennene i kjeven.</strong> Implantatene vil da fungere som feste for en avtagbar helprotese eller for en større
                      keramisk bro.</li>
              </ul>

              <img src="resources/Implantatfestet-protese.png" class="implprotese" alt="implantatfestet-protese">

              <br>

              <p>I underkjeven er det spesielt vanskelig å få en helprotese til å sitte fast, og hvis så er tilfelle, kan man få satt inn 2 implantater og laget en dekkprotese/avtagbar protese på trygdens regning.</p>

              <p>Vi benytter oss av de mest anerkjente merkene: Straumann, Nobel Biocare, Dentsply implants og Biomet 3i.</p>

              <div class="forhandlere">
                  <a href="http://www.straumann.us/" class="straumann" target="_blank"></a>
                  <a href="http://www.biomet3i.com/" class="biomet" target="_blank"></a>
                  <a href="https://www.nobelbiocare.com/no/en/home.html?redirect=true" class="nobel" target="_blank"></a>
                  <a href="http://www.dentsply.com/en" class="dents" target="_blank"></a>
              </div>
          </article>`
  },
  {
  title: "Tannkjøttbetennelse",
  content:`<article>
      <p>Dette er en betennelse i tannkjøttet (gingivitt) og i tannfestet rundt tennene (periodontitt). En annen betegnelse på periodontitt er tannløsningssykdom eller pyrea.</p>

      <img src="resources/tannkjott-1.jpg" class="tannkjott" alt="gingivitt">

      <p>Et friskt tannkjøtt har lys rød farge og ligger stramt inntil tennene.</p>

      <br>

      <h2>Gingivitt</h2>

      <p>er en forholdsvis vanlig tilstand som gir lite symptomer i tidlig fase. Dårlig ånde og lettblødende tannkjøtt er de første symptomene. Den vanligste formen er kronisk gingivitt, som forårsakes av bakteriebelegg på tennene. Kliniske tegn er rødhet, hevelse, samt blødningstendens ved f.eks. tannrengjøring. Tilstanden er reversibel og grundig renhold kan gjøre tannkjøttet friskt igjen.</p>

      <br>

      <img src="resources/tannkjott-2.jpg" class="tannkjott" alt="gingivitt">

      <br>

      <h2>Periodontitt</h2>

      <p>er en betennelse i tennenes støttevev. Omlag 10 % av den voksne befolkning utvikler alvorlig periodontitt. Ved periodontitt er det få subjektive symptomer. Enkelte vil likevel kunne oppleve dårlig ånde og blødning fra tannkjøttet. Tannkjøttet vil også være noe ømt og hovent. Senere i sykdomsforløpet vil tenner kunne bli løsere, og eventuelt flytte på seg.</p>

      <img src="resources/tannkjott-3.jpg" class="tannkjott" alt="gingivitt">

      <br>

      <p>Periodontitt er en betennelse i tennenes støttevev. Omlag 10 % av den voksne befolkning utvikler alvorlig periodontitt. Ved periodontitt er det få subjektive symptomer. Enkelte vil likevel kunne oppleve dårlig ånde og blødning fra tannkjøttet. Tannkjøttet vil også være noe ømt og hovent. Senere i sykdomsforløpet vil tenner kunne bli løsere, og eventuelt flytte på seg.</p>

      <br>

      <h2>Behandling av periodontitt</h2>

      <img src="resources/tannkjott-4.jpg" class="tannkjott" alt="tannkjøttbetennelse">

      <p>God munnhygiene er en forutsetning for at behandlingen av periodontitt skal bli vellykket. Behandlingen vil derfor innledes med hygieneopplæring for deretter å fjerne belegg og tannstein fra tennenes rotoverflate. Målet er å etterlate glatte rotoverflater slik at det blir lettere å holde tennene rene. I enkelte tilfeller kan det være nødvendig med henvisnings til spesialist og/eller kirurgisk behandling for å få kontroll over periodontitten.</p>

      <p>Plakk og tannstein dannes hele tiden. Etter endt behandling vil det derfor være nødvendig med kontroller og vedlikeholdsbehandling av tennene for å holde periodontitten i sjakk. Selv om periodontittbehandlingen utføres korrekt og etter beste evne, kan man ikke utelukke at tenner kan gå tapt på sikt.</p>

      <img src="resources/tannkjott-5.jpg" class="tannkjott" alt="tannkjøttbetennelse">

      <br>

      <p>Hvis periodontitten ikke blir behandlet vil sykdommen i de fleste tilfelle ikke medføre store konsekvenser for tannsettet. Noen, ca 10% av befolkningen vil uten behandling oppleve at tenner løsner og flytter på seg. De kan miste flere tenner i løpet av livet dersom tilstanden ikke behandles, og noen ytterst få vil kunne bli helt tannløse. Blant disse med en mer alvorlig (hurtigforløpende) sykdom vil det være noen som ikke lar seg behandle med suksess, selv av spesialister. Her, som i andre sammenheng, vil tidlig behandling nesten alltid være enklere, rimeligere og gi et bedre og mer varig resultat.</p>
  </article>`
  },
  {
  title: "Tannproteser",
  content: `
          <article>
              <p>Dersom flere eller alle tennene mangler i en kjeve kan en tannprotese være løsningen. Vi skiller mellom hel- og delproteser.</p>
              <br>

              <h3 class="left-align">Helprotese</h3>

              <p>Når alle tennene mangler kan en helprotese erstatte en tannløs kjeve. Helprotesen blir på folkemunne kalt gebiss. Musklene i ganen samt vakuumet som oppstår under protesen holder den på plass.&nbsp; Helprotesen lages i et plastakrylat-materiale av en tanntekniker etter at tannlegen har tatt et nøyaktig avtrykk av kjevekammen. Fremstillingen krever flere tannlegebesøk.</p>

              <br>

              <img src="resources/protese.png" class="protese" alt="tannprotese">

              <br>

              <h3 class="left-align">Immediat-protese</h3>

              <p>En immediat-protese er en helprotese eller delprotese som settes inn umiddelbart etter at de dårlige tennene er trukket ut. Det blir på forhånd tatt avtrykk av overkjeven og underkjeven. Avtrykket sendes til en tanntekniker som lager protesen. Fordelen med immediat-protesen er at man slipper å gå uten tenner etter at de er fjernet. Man vil imidlertid kjenne sårhet i kjeven den første tiden etter at protesen er satt inn. Dessuten vil kjevekammen gjennomgå endringer under tilhelingen, noe som gjør at immediatprotesen gradvis blir dårligere tilpasset. Dette kan løses ved at protesen fores (rebaseres) innvendig. Noen ganger vil det være nødvendig og lage en ny protese som passer de endrede forholdene.</p>

              <br>

              <h3 class="left-align">Delproteser</h3>

              <p>Dersom man mangler noen av tennene i en kjeve kan disse erstattes av en delprotese. Fremstillingsprosedyren er den samme som for en helprotese. Delprotesen er avtakbar og sitter fast med små klammere til gjenstående tenner. Den består av et plastakrylatmaterialet på et metallskjelett i crom-kobolt. Den dekker deler av kjeven og kan ha synlig metall.</p>

              <br>

              <img src="resources/delprotese.png" class="delprotese" alt="delprotese">

              <br>

              <h3 class="left-align">Verdt å vite om tannproteser</h3>

              <p>Det tar tid å venne seg til den nye protesen. Det er uvant både å spise og snakke med den. Videre vil det ta tid før muskulatur og slimhinner blir vant til den nye situasjonen. Det er helt normalt å få gnag i gommen, da må man oppsøke tannlegen for å slipe på den nye protesen.</p>

              <br>

              <p>Både hel- og delproteser må tas ut av kjeven for daglig renhold. Et godt renhold er helt nødvendig for å unngå kroniske irritasjoner på slimhinnene, samt infeksjoner og sopp i munnen.&nbsp;Protesen må pusses hver dag med myk tannbørste både innvendig og utvendig. I tillegg må man pusse gummer, gane og tunge. Det er en fordel at man tar protesen ut om natten. Da reduseres risikoen for soppdannelse i slimhinnen. Når protesen ikke er i munnen, bør den oppbevares fuktig, for eksempel i et glass med vann.</p>

              <br>

              <p>En protese er ingen engangs-anskaffelse. Gradvise endringer av kjeven gjør at protesen med tiden blir løsere og derfor fungerer dårligere. Det er da mulig å ”fore” den slik at den tilpasses de endrede forholdene. Ofte vil det likevel være bedre å fremstille en ny protese. Tidsintervallet for dette vil kunne variere fra person til person og må derfor vurderes individuelt.</p>

              <br>

              <p>Selv om man har helprotese, er det viktig at man går til tannlegen årlig for undersøkelse.</p>

              <br>

              <h3 class="left-align">Tannløs underkjeve</h3>

              <img src="resources/underkjeve.jpg" class="underkjeve" alt="dekkprotese">

              <p>Ny stønadsordning fra Helfo, gjeldene fra 1. Januar 2014 gir refusjon for to implantater med dekkprotese utført av tannleger med spesialkompetanse i implantatprotetikk. Denne kompetansen har både tannlege Gunnarsli og tannlege Nesse. Har du en tannløs underkjeve og en protese i undekjeven som ikke fungerer har du muligheten til og få 2 implantater og en implantatretinert protese med refusjon fra Helfo. For personer som i tillegg er tannløse i overkjeven, og som har behov for ny protese i den kjeven, dekkes også utgifter til slik protese.</p>
          </article>`
  }];

populateSite();
