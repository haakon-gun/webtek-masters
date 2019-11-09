/*function populateFooter(){
    var footer = document.createElement("div");
        footer.id = "website-footer";

            var map = document.createElement("div");
            map.id = "footer-box-map"
                var iframe = document.createElement("iframe");
                iframe.id ="map"
                iframe.setAttribute("src", "https://www.google.com/maps/embed/v1/place?q=place_id:ChIJWdJJ6SwhR0YRa2D-z285A2E&key=AIzaSyBITdjEW51MyztEZQGDNFcxuz1YZP_KUlk");
                iframe.setAttribute("allowfullscreen", "");
                map.appendChild(iframe);

            var footerText = document.createElement("div");
            footerText.className = "footer-text"
            for(i=1; i<5; i++) {
                var lines = document.createElement("div");
                lines.id = "line" + i; //Får ikke til å define line osv
                    var h = document.createElement("H1");
                    var t = document.createTextNode("Adresse");
                    h.appendChild(t);
                    line1.appendChild(h);
                    var p = document.createElement("P");
                    var tp = document.createTextNode("Henrik Ibsens gate 6: 3. etasje. 3724 Skien");
                    p.appendChild(tp);
                    line1.appendChild(p);
                    var a = document.createElement("a");
                    a.setAttribute("href", "tel:+4735520469");
                    a.innerHTML("Telefon: 35 52 04 69");
                    line1.appendChild(a);
                    //Line2
                    var h2 = document.createElement("H4");
                    var t2 = document.createTextNode("Åpningstider");
                    h2.appendChild(t2);
                    line2.appendChild(h2);
                    var p2 = document.createElement("P");
                    var tp2 = document.createTextNode("08:00–15:00, mandag til torsdag");
                    p2.appendChild(tp2);
                    line2.appendChild(p2);
                    var p3 = document.createElement("P");
                    var tp3 = document.createTextNode("08:00–13:00, fredag");
                    p3.appendChild(tp3);
                    line2.appendChild(p3);
                    //Line3
                    var h3 = document.createElement("H4");
                    var t3 = document.createTextNode("Grenland tannlegevakt");
                    h3.appendChild(t3);
                    line3.appendChild(h3);
                    var p4 = document.createElement("P");
                    var tp4 = document.createTextNode("Helger og helligdager: 10:00–17:00");
                    p4.appendChild(tp4);
                    line3.appendChild(p4);
                    var a2 = document.createElement("a");
                    a2.setAttribute("href", "tel:+4790913377");
                    a2.innerHTML("Telefon: 90 91 33 77");
                    line3.appendChild(a2);
                    //Line4
                    var a3 = document.createElement("a");
                    a3.setAttribute("href", "https://www.tannlegeforeningen.no");
                    line4.appendChild(a3);
                    var img = document.createElement("IMG");
                    img.setAttribute("src", "resources/dntf.png");
                    img.setAttribute("alt", "Den norske tannlegeforeningen");
                    line4.appendChild(img);
                    var h5 = document.createElement("H4");
                    h5.className = "website-footer-heading";
                    h5.innerText = "Den norske tannlegeforeningen";
                    line4.appendChild(h5);

                
            }
            footerText.appendChild(line4);
            footerText.appendChild(line3);
            footerText.appendChild(line2);
            footerText.appendChild(line1);
            footer.appendChild(footerText);
            footer.appendChild(map);
     document.body.appendChild(footer)
}
populateFooter() */


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
            <h4>Grenland tannlegevakt</h1>
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