function createFooter(){
    var footerDiv = document.createElement("div");
    footerDiv.id = "website-footer";

    var map = document.createElement("div");
    map.id = "footer-box-map"
    var iframe = document.createElement("iframe");
    iframe.id ="map"
    iframe.setAttribute("src", "https://www.google.com/maps/embed/v1/place?q=place_id:ChIJWdJJ6SwhR0YRa2D-z285A2E&key=AIzaSyBITdjEW51MyztEZQGDNFcxuz1YZP_KUlk");
    iframe.setAttribute("allowfullscreen", "");
    map.appendChild(iframe);
    footerDiv.appendChild(map);
    
    var footerTextDiv = document.createElement("div");
    footerTextDiv.className = "footer-text"
    var footerDivs = [];
    var h4Texts = ["Adresse", "Åpningstider", "Grenland Tannlegevakt", "Den norske tannlegeforeningen",];
    var h4s = [];
    var ps = [];
    var pText = ["Henrik Ibsens gate 6: 3. etasje. 3724 Skien", "08:00–15:00, mandag til torsdag", "Helger og helligdager: 10:00–17:00", ""]


    for(var i = 1; i<5; i++){
        footerDivs[i] = document.createElement("div");
        footerDivs[i].id = "line" + i;
        h4s[i] = document.createElement("H4");
        h4s[i].innerText = h4Texts[i-1];
        ps[i<3] = document.createElement("P");
        ps[i<3].innerText = pText[i];
        if(i==1){
            var a = document.createElement("a");
            a.setAttribute("href", "tel:+4735520469");
            a.innerText = "Telefon: 35 52 04 69";
            footerDivs[i].appendChild(a);
        }
        else if(i==2){
            var p = document.createElement("P");
            var pt = document.createTextNode("08:00–13:00, fredag");
            p.appendChild(pt);
        }
        else if(i==3){
            var a2 = document.createElement("a");
            a2.setAttribute("href", "tel:+4790913377");
            a2.innerHTML = "Telefon: 90 91 33 77";
            footerDivs[i].appendChild(a2);
        }
        else{
            h4s[4].className = "website-footer-heading";
            var img = document.createElement("img");
            img.alt = "Den norske tannlegeforeningen"
            img.src ="resources/dntf.png";
            img.setAttribute("target","_blank")
            var a3 = document.createElement("a")
            a3.setAttribute("href", "https://www.tannlegeforeningen.no")
            a3.appendChild(img)
            a3.appendChild(h4s[i])
            footerDivs[i].appendChild(a3);
        }
        footerDivs[i].appendChild(h4s[i]);
        footerDivs[i].appendChild(ps[i<3]);
        footerTextDiv.appendChild(footerDivs[i]);
        footerDiv.appendChild(footerTextDiv);
    }
    var body = document.getElementById("body");
    body.appendChild(footerDiv);

}
createFooter()
/*
document.write(`
<div id="website-footer">
    <div id="footer-box-map">
        <iframe id="map" src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJWdJJ6SwhR0YRa2D-z285A2E&key=AIzaSyBITdjEW51MyztEZQGDNFcxuz1YZP_KUlk" allowfullscreen></iframe>
    </div>

    <div class="footer-text">
        <div id="line1">
            <h4>Adresse</h1>
            <p>Henrik Ibsens gate 6: 3. etasje. 3724 Skien</p>
            <a href="tel:+4735520469">Telefon: 35 52 04 69</a>
        </div>
        <div id="line2">
            <h4>Åpningstider</h1>
            <p>08:00–15:00, mandag til torsdag</p>
            <p>08:00–13:00, fredag</p>
        </div>
        <div id="line3">
            <h4>Grenland tannlegevakt</h4>
            <p>Helger og helligdager: 10:00–17:00</p>
            <a href="tel:+4790913377">Telefon: 90 91 33 77</a>
        </div>

        <div id="line4">
            <a href="https://www.tannlegeforeningen.no">
                <img alt="Den norske tannlegeforeningen" src="resources/dntf.png">
                <h4 class="website-footer-heading">Den norske tannlegeforeningen</h1>
            </a>
        </div>
    </div>
</div>
`);
*/

