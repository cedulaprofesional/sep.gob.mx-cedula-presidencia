// *************** DOCUMENTOS.HTML ***************

// METHOD TO GET AND USE A PORTION OF THE URL FROM ADDRESSBAR

// function getCurrentURL () { 
//     return window.location.href } 
    
    // Example 
    // const url = getCurrentURL()

    // EVERY PART I CAN GET FROM THE URL
    const {
        host, hostname, href, origin, pathname, port, protocol, search
      } = window.location
        console.log("HREF print:" + " " + href)
    // THIS CODE GETS THE URL IN AN ARRAY OR OBJECT
    function parseURLParams(url) {
        var queryStart = url.indexOf("?") + 1,
            queryEnd   = url.indexOf("#") + 1 || url.length + 1,
            query = url.slice(queryStart, queryEnd - 1),
            pairs = query.replace(/\+/g, " ").split("&"),
            parms = {}, i, n, v, nv;
    
        if (query === url || query === "") return;
    
        for (i = 0; i < pairs.length; i++) {
            nv = pairs[i].split("=", 2);
            n = decodeURIComponent(nv[0]);
            v = decodeURIComponent(nv[1]);
    
            if (!parms.hasOwnProperty(n)) parms[n] = [];
            parms[n].push(nv.length === 2 ? v : null);
        }
        return parms;
    }

    // THIS BREAKS DOWN THE URL INTO SEVERAL PARAMETERS
    let url = parseURLParams(href) 
    console.log(url)
    
    // ACCES TO DESIRE LINK SECTION AND TURNS IT INTO A STRING
    let chain = url.folio.toString()
    console.log("Folio extraído de la url:" + " " + chain)
    let txt = ("Este folio extraído de la url consta de" + " " + chain.length + " " + "dígitos");
    console.log(txt);

    // IT INSERTS DATA IN THE TARGET INPUT FIELD
    let inputValue = document.getElementById("form-data");
    inputValue.value = chain;

    
    // IT GETS THE CONTENT OF THE DESIRE ELEMENT (ID) [IN DISUSE]
    // let getChain = document.getElementById('invoice_').textContent
    // console.log(getChain)


  
    
  

    


