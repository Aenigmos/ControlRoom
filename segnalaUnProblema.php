<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Segnala Un Problema</title>
        <link rel="stylesheet" type="text/css" href="Assets/css/segnalaUnProblemaStyle.css?ver=1.0">
        <script type="text/javascript" src="http://code.jquery.com/jquery-3.4.1.min.js?ver=1.0"></script>
    </head>
    <body>
        <div class="pageWrapper background">
            <div class="navBar">
                <div class="navLogo">Google Control Room</div>
            </div>
            <div class="content">
                <div class="box">
                    <div class="barTitle"><span class="textTitle">Segnala un problema</span></div>
                    <div class="contentBox">
                        <form action="Assets/php/insertAlert.php" method="post" enctype="multipart/form-data" class="form" onsubmit="return controlData()">
                            <div class="separator">
                                <p id="errorMessage"></p>
                            </div>
                            <div class="riga1">
                                <div class="formPartOne">
                                    <div class="containerItem">
                                        Nome
                                    </div>
                                    <div class="containerItem">
                                        <input type="text" placeholder="Nome" name="nameUser" id="nameUser" class="formItem" required>
                                    </div>
                                    <div class="containerItem">
                                        Cognome
                                    </div>
                                    <div class="containerItem">
                                        <input type="text" placeholder="Cognome" name="surnameUser" id="surnameUser" class="formItem" required>
                                    </div>
                                    <div class="containerItem">
                                        Paese
                                    </div>
                                    <div class="containerItem">
                                        <select name="countryUser" id="countryUser" class="formItem" required>
                                            <option>Italia</option>
                                            <option>Francia</option>
                                            <option>Spagna</option>
                                            <option>USA</option>
                                            <option>UK</option>
                                            <option>Germania</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="formPartTwo">
                                    <div class="containerItem">
                                        Tipo di errore
                                    </div>
                                    <div class="containerItem"> 
                                        <select name="codeError" class="formItem" id="tipoErrore" onchange="onChange()" required>
                                            <option value="401">Error 401(Unauthorized)</option>
                                            <option value="400">Error 400(Bad Request)</option>
                                            <option value="404">Error 404(Not Found)</option>
                                            <option value="403">Error 403 (Forbidden)</option>
                                            <option value="500">Error 500 (Internal Server Error)</option>
                                            <option value="altro">Altro (Specificare)</option>
                                        </select>
                                    </div>
                                    <div class="containerItem">
                                        Codice errore
                                    </div>
                                    <div class="containerItem">
                                        <input type="text" placeholder="Codice" name="codeErrorAltro" id="codiceErrore" class="formItem" pattern="[0-9]{3}" readonly>
                                    </div>
                                    <div class="containerItem">
                                        Data errore
                                    </div>
                                    <div class="containerItem">
                                        <input type="date" name="dateError" id="dateError" class="formItem" required>
                                    </div>
                                </div>
                            </div>
                            <div class="separator"></div>
                            <div class="riga2">
                                <Input type="submit" class="btn" value="Segnala" name="submit" onclick="getData()">
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="footer">
                
            </div>
        </div>
        <script src="Assets/js/controlFormSegnalaUnProblema.js?ver=1.0"></script>
    </body>
</html>
