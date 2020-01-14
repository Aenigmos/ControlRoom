<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Visualizza gli alert</title>
        <link rel="stylesheet" type="text/css" href="Assets/css/visualizzaAlertStyle.css?ver=1.0">
        <script src="Assets/plugins/chartJS/Chart.js?ver=1.0"></script>
        <script type="text/javascript" src="http://code.jquery.com/jquery-3.4.1.min.js?ver=1.0"></script>
        <script src="Assets/plugins/d3/d3.min.js"></script>
    </head>
    <body>
        <div class="pageWrapper">
            <div class="navBar">
                <div class="navLogo">Google Control Room</div>
            </div>
            <div class="content background">
                <div class="backgroundContent">
                    <div class="background"></div>
                </div>
                <div class="box">
                    <div class="barTitle"><span class="textTitle">Visualizza gli alert</span></div>
                    <div class="contentBox">
                        <div class="colonna1">
                            <p id="errorMessage"></p>
                            <p class="formItem">Data inizio intervallo:</p>
                            <select class="formItem select" id="dataInizio"></select>
                            <p class="formItem">Data inizio intervallo:</p>
                            <select class="formItem select" id="dataFine"></select>
                            <button class="formItem btn" onclick="getData()">Vai</button>
                            <button class="formItem btn" onclick="ripristina()">Ripristina</button>
                            <form method="get" action="Assets/csv/clienti.csv" class="formItem special">
                                <button type="submit" class="btn btnSpecial">Download CSV</button>
                            </form>
                        </div>
                        <div class="chart-container colonna2">
                            <canvas id="chart" class="chart" width="600" height="250"></canvas>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer">
                
            </div>
        </div>
        <script src="Assets/js/createChart.js?ver=1.0"></script>
    </body>
</html>
