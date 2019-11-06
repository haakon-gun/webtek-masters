

var karies_hull = `
  <article>
      <p> Karies (hull i tannen), er en sykdom som oppstår når tannsubstans brytes ned av biprodukter (syrer) fra bakteriekolonier som lever på tannoverflaten. Disse koloniene er det man kaller plakk.</p>
      <br>

      <p>Hvorfor man får hull i tennene, har en fleraktoriell årsak. Til å forklare hvorfor, bruker en ofte Keys triade. Den består av enkeltfaktorene :plakk på tennene, kosten og tannflaten. Hver for seg er ikke disse nok til å danne et hull i tannen, men fletter man dem sammen, og legger på tid, vil det etterhvert oppstå et hull.</p>

      <br>

      <p>Man graderer hullene inn i fem grader der grad 1 er starten på hullet og 5 er hull helt inn til nerven av tannen. Grad 1-2 er det mange kaller for «begynnende hull» og er et hull i emaljen av tannen. Emaljen er 1-2mm tykk. Er hullet lokalisert her kan man stoppe hullet ved å være flink med munnhygiene som tannpuss og tanntråd. Ved grad 3-5 har hullet gått inn til dentin eller tannbenet under emaljen og man må borre bort hullet (den ødelagte delen av tannen) for å stoppe det.</p>

      <img src="resources/karies.png" class="karies" alt="karies">

      <p>Etter man har borret er det et hulrom i tannen. Ut ifra hvor mye tann som er igjen etter dette kan man erstatte tapt del av tann med enten en fylling, en krone eller innlegg. Oftest bruker man ulike fyllingsmaterialer til å fylle igjen tannen slik at den blir hel igjen.</p>

      <p>Før brukte man amalgam til dette, men det er nå erstattet med ulike hvite plastmaterialer. Plastmaterialene kommer i mange ulike hvite fargenyanser som gjør det mulig å lage pene fyllinger som ikke syntes. Det finnes mange ulike fyllingsmaterialer på markedet. Vi på Ibsen tannlegesenter benytter kun anerkjente og godt dokumenterte materialer.</p>
  </article>
  `;

var kirurgi = `
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
    `;

var treatmentTitleList = [
  {
  title: "Hva er karies/hull i tannen?",
  content: "fkjdsnfljnsdljf"
  },
  {
  title: "Kirurgi og tanntrekking",
  content: "fkjdsnfljnsdljf"
  },
  {
  title: "Kroner/Bro/Fasett",
  content: "fkjdsnfljnsdljf"
  },
  {
  title: "Rotfylling",
  content: "fkjdsnfljnsdljf"
  },
  {
  title: "Søvnapnéskinner/snorkeskinner",
  content: "fkjdsnfljnsdljf"
  },
  {
  title: "Tannimplantater",
  content: "fkjdsnfljnsdljf"
  },
  {
  title: "Tannkjøttbetennelse",
  content: "fkjdsnfljnsdljf"
  },
  {
  title: "Tannproteser",
  content: "fkjdsnfljnsdljf"
  }];


let ul = document.querySelector(".treatmentsList");
for (let i = 0; i<treatmentTitleList.length; i++){
  let li = document.createElement("li");
  li.innerHTML = treatmentTitleList[i].title;
  li.onclick = function() {populateTreatmentContent(treatmentTitleList[i].content);}
  ul.appendChild(li);
}
