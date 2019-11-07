
var employees = [
    {
      name: "Mai Gunnarsli",
      title: "Tannlege",
      image: "resources/mai-kersten-gunnarsli.png",
      experiences: [
      "Født i Oslo, flyttet til Skien som 13 åring.",
      "Utdannet tannlege ved universitetet i Bergen i 1986.",
      "Allmenntannlege med spesiell interesse for krone-broprotetikk og implantatprotetikk.",
      "1987-89: Avtjent førstegangstjeneste som tannlege i forsvaret ved Haakonsvern, videre som garnisonstannlege på Akershus festning.",
      "1990-1997: Jobbet som assistenttannlege i privatpraksis i Skien.1997- Egen privatpraksis i Skien.",
      "2011 Autorisasjon som tannlege med rett til å utføre implantatprotetisk behandling med offentlig økonomisk støtte.",
      "Fra 2001 fulgt Tannlegeforeningens Systematiske Etterutdanning"
      ]
    },
    {
      name: "Kirsten Benedikte Aanesen",
      title: "Tannlege",
      image: "resources/kirsten-b-aanesen.png",
      experiences:[
      "Født og oppvokst i Skien.",
      "Er uteksaminert tannlege fra Universitetet i Oslo i 1984.",
      "Allmenntannlege med spesiell interesse for krone-broprotetikk og estetisk tannbehandling.",
      "1984-85 Militærtannlege på Gardermoen Flystasjon.",
      "1985-87 Privat praksis Lillestrøm.",
      "1987-91 Assistenttannlege Skien hos Tannlege Gunnar Snartland1991- Egen privatpraksis Skien.",
      "Har fulgt og gjennomført alle fagområdene i Tannlegeforeningens Systematiske Etterutdanning (TSE) fra 2001."
      ]
    },
    {
      name: "Kari Nesse",
      title: "Tannlege",
      image: "resources/kari-nesse.png",
      experiences:[
      "Født og oppvokst i Porsgrunn.",
      "Utdannet tannlege i Oslo 1981.",
      "Allmenntannlege med spesiell interesse for implantatprotetikk, kirurgi og søvnapne behandling.",
      "1981-1985 : Distriktstannlege på Ørnes i Nordland.",
      "1985-1989 : Deltidsstilling som skoletannlege ,vikar Skien, Siljan og Brevik.",
      "1985-1989: Deltidsstilling privat praksis.Fra 1989 : Egen privat praksis i Skien.",
      "2010: Autorisasjon som tannlege med rett til å utføre implantatprotetisk behandling med offentlig økonomisk støtte.",
      "2012: Diplomgodkjenning med tillatelse til å behandle med SomnoDent søvnapneskinner.",
      "Fra 2001 fulgt Tannlegeforeningens Systematiske Etterutdannelse."
      ]
    },
    {
      name: "Christine Aanesen",
      title: "Tannlege",
      image: "resources/christine-aanesen.png",
      experiences:[
      "Født og oppvokst i Porsgrunn.",
      "Er uteksaminert tannlege fra Universitetet i Bergen 2015.",
      "Kurs i bleking av tenner."
      ]
    },
    {
      name: "Hanne Hauge Hommedal",
      title: "Tannpleier",
      image: "resources/hanne-hommedal.png",
      experiences:[
      "Født og oppvokst i Bergen",
      "Utdannet tannpleier på Universitet i Bergen i 2010",
      "Jobbet i den offentlige tannhelsetjenesten i over 8 år",
      "Jobber 1dag i uken på Ibsen Tannlegesenter."
      ]
    },
    {
      name: "Erna Oterholt Johnsen",
      title: "Tannhelsesekretær",
      image: "resources/erna-oterholt.png",
      experiences:[
      "Født og oppvokst i Skien.",
      "Jobbet i privat tannlegepraksis i Oslo fra 1975-1982",
      "Flyttet til Skien i 1982 og har jobbet i privat praksis siden.",
      "Har vært tannhelsesekretær hos tannlege Mai Kersten Gunnarsli siden 1997."
      ]
    },
    {
      name: "Anne Kari Johansen",
      title: "Tannhelsesekretær",
      image: "resources/anne-kari-johansen.png",
      experiences:[
      "Født i Porsgrunn og oppvokst i Skien",
      "Sekretær i Skien Boligbyggelag i 8 år",
      "Autorisasjon som tannhelsesekretær i 2008",
      "Jobbet som tannhelsesekretær hos Kirsten Aanesen siden 1993"
      ]
    },
    {
      name: "Marlene Almli",
      title: "Tannhelsesekretær",
      image: "resources/marlene-S-Almli.png",
      experiences:[
      "Født og oppvokst i Skien.",
      "Utdannet tannhelsesekretær i 2005 ved Holmestrand videregående skole.",
      "Fra 2005 jobbet som tannhelsesekretær i privat praksis."
      ]
    },
    {
      name: "Signe Lie",
      title: "Tannhelsesekretær",
      image: "resources/Signe-lie.png",
      experiences:[
      "Født og oppvokst i Porsgrunn",
      "Jobbet ved Ibsen Tannlegesenter siden 2016"
      ]
    }
]


gridContainer = document.querySelector(".grid-container");

for (employee in employees) {
  createEmployeDiv(employees[employee]);
}

function createEmployeDiv(employee){
  let node = document.createElement("div");
  node.className = "employees";
  let border = document.createElement("div");
  border.className = "border";
  border.onclick = function() {populateEmployeeContent(employee);}
  let img = document.createElement("img");
  img.src = employee.image;
  img.className = "img";
  let name = document.createElement("p");
  name.className = "name";
  name.appendChild(document.createTextNode(employee.name));
  let title = document.createElement("p");
  title.className = "title";
  title.appendChild(document.createTextNode(employee.title))
  border.appendChild(img);
  border.appendChild(name);
  border.appendChild(title);
  node.appendChild(border);
  gridContainer.appendChild(node);
}
function populateEmployeeContent(employee){
  modal.style.display = "block";
  employeesExperienceImg.src = employee.image;
  employeesExperienceName.innerHTML = employee.name;
  employeesExperienceTitle.innerHTML = employee.title;
  while(employeesExperienceList.firstChild){
  employeesExperienceList.removeChild(employeesExperienceList.firstChild);
  }
  for (var i = 0; i<employee["experiences"].length; i++) {
      console.log("hei")
      let li = document.createElement("li");
      li.appendChild(document.createTextNode(employee.experiences[i]));
      employeesExperienceList.appendChild(li);
    }
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

modal.onclick = function() {
  modal.style.display = "none";
}

/*
// Import error?
// HTML: <script type="module" src="scripts/about.js"></script>


try {
    load("JSON", "../dev/employees.json", (json) => {
        console.log(json);
    });
} catch (error) {
    console.warn(error);
}
*/
