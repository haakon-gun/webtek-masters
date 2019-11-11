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
        ps[i] = document.createElement("P");
        ps[i].innerText = pText[i-1];
        footerDivs[i].appendChild(h4s[i]);
        footerDivs[i].appendChild(ps[i]);
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
            footerDivs[i].appendChild(p);
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
        footerTextDiv.appendChild(footerDivs[i]);
        footerDiv.appendChild(footerTextDiv);
    }
    var body = document.getElementById("body");
    body.appendChild(footerDiv);

}
createFooter()
