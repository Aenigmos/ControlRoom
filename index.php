<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Home</title>
        <link rel="stylesheet" type="text/css" href="Assets/css/indexStyle.css?ver=1.0">
    </head>
    <body>
        <div class="pageWrapper background">
            <div class="navBar">
                <div class="navLogo">Google Control Room</div>
            </div>
            <div class="content">
                <div class="bigBox box">
                    <div class="barTitle"><span class="textTitle">Cosa è GCR?</span></div>
                    <div class="contentBox">
                        <div class="contentText big">
                            <p>Google Control Room è un servizio il quale ti permette di segnalare errori provocatosi nei nostri sistemi,
                            inoltre esso ti permette di vedere tutti gli errori susseguitosi nell'arco del tempo e di visualizzarli sia
                            in formato grafico che in formato CSV.</p> <p class="centerLine">Facendo ciò potrai sempre sapere se il tuo errore è collegato ai 
                            nostri server (e quindi generico), oppure se l'errore è dovuto al tuo pc/smartphone.</p>
                            <p>In seguito a queste informazioni ci saranno le varie pagine disponibili, le quali ti reindirizzeranno ad una pagina adita, vai e prova!</p>
                        </div>
                        <div class="contentImages">
                            <div id="img1" class="img"></div>
                            <div id="img2" class="img"></div>
                        </div>
                    </div>
                </div>
                <div class="box">
                    <div class="barTitle"><span class="textTitle">Segnala un problema</span></div>
                    <div class="contentBox small">
                        <div class="contentText secondSectionTxt">
                            <p>In questa sezione puoi segnalare un problema, basta che premi il bottone e verrai reindirizzato alla pagina adibita. </p>
                        </div>
                        <div class="contentImages secondSectionImg">
                            <button class="btn" onclick="location.href='segnalaUnProblema.php';">Vai</button>
                        </div>
                    </div>
                </div>
                <div id="lastBox" class="box">
                    <div class="barTitle"><span class="textTitle">Visualizza gli alert</span></div>
                    <div class="contentBox small">
                        <div class="contentText secondSectionTxt">
                            <p>In questa sezione puoi visualizzare tutti gli Alert, puoi inoltre effettuare ricerche mirate e filtrarli, premi il bottone e verrai reindirizzato alla pagina adibita.</p>
                        </div>
                        <div class="contentImages secondSectionImg">
                            <button class="btn" onclick="location.href='visualizzaAlert.php';">Vai</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer">
                
            </div>
        </div>
    </body>
</html>
