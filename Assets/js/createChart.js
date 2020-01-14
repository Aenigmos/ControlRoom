data = [];
datasets = [];
codiciGrafico = [];
myChart = null;
datasetIndex = 0;
maxDate = 5;
buttonClicked = false;
loop = null;
dataScelta = null;

d3.csv('Assets/csv/registro.csv').then(creaGrafico);

function getData()
{
    clearInterval(loop);
    datasetIndex = 0;
    myChart.destroy();
    buttonClicked = true;
    indexInizio = document.getElementById("dataInizio").selectedIndex;
    indexFine = document.getElementById("dataFine").selectedIndex;
    if(indexFine-indexInizio >= maxDate)
    {
        document.getElementById("errorMessage").innerHTML = "Puoi selezionare un massimo di "+maxDate+" date";
        $(document).ready(function(){
            $('#errorMessage').animate({
                opacity: "+=1"
            }, 1000, function() {
                $('#errorMessage').animate({
                    opacity: "-=1"
                }, 1500);
            });
        });
        ripristina();
        exit();
    }
    dataInizio = document.getElementById("dataInizio").value;
    dataFine = document.getElementById("dataFine").value;
    if(dataInizio == dataFine)
    {
        document.getElementById("errorMessage").innerHTML = "La data iniziale non può essere la stessa di quella finale";
        $(document).ready(function(){
            $('#errorMessage').animate({
                opacity: "+=1"
            }, 1000, function() {
                $('#errorMessage').animate({
                    opacity: "-=1"
                }, 1500);
            });
        });
        ripristina();
        return;
    }
    if(dataInizio > dataFine)
    {
        document.getElementById("errorMessage").innerHTML = "La data iniziale non può essere dopo quella finale";
        $(document).ready(function(){
            $('#errorMessage').animate({
                opacity: "+=1"
            }, 1000, function() {
                $('#errorMessage').animate({
                    opacity: "-=1"
                }, 1500);
            });
        });
        ripristina();
        return;
    }
    
    d3.csv('Assets/csv/registro.csv').then(creaGrafico);
}

function ripristina()
{
    clearInterval(loop);
    datasetIndex = 0;
    myChart.destroy();
    buttonClicked = false;
    
    d3.csv('Assets/csv/registro.csv').then(creaGrafico);
}

function creaGrafico(data)
{
    date = data.map(function(d) {return d.dataErrore});
    codici = data.map(function(d) {return d.codiceErrore});
    
    dateCodici = [];
    for(i=0;i<date.length;i++)
    {
        dateCodici[i] = [];
        dateCodici[i][0] = date[i];
        dateCodici[i][1] = codici[i];
    }
    dateCodici.sort();
    
    dateList = [];
    dateList[0] = [];
    dataCurrent = dateCodici[0][0];
    dateList[0][0] = dataCurrent;
    indexGiorni = 0;
    indexCodici = 1;
    for(i=0;i<date.length;i++)
    {
        if(dataCurrent == dateCodici[i][0])
        {
            dateList[indexGiorni][indexCodici] = dateCodici[i][1];
            indexCodici++;
        }
        else
        {
            dataCurrent = dateCodici[i][0];
            indexGiorni++;
            dateList[indexGiorni] = [];
            dateList[indexGiorni][0] = dataCurrent;
            dateList[indexGiorni][1] = dateCodici[i][1];
            indexCodici = 2;
        }
    }
    
    dateGrafico = [];
    $.each(date, function(i, el){
        if($.inArray(el, dateGrafico) === -1) dateGrafico.push(el);
    });
    dateGrafico.sort();
    
    html = "";
    for(i=0;i<dateGrafico.length;i++)
        html+="<option>"+dateGrafico[i]+"</option>";
    
    document.getElementById("dataInizio").innerHTML = html;
    document.getElementById("dataFine").innerHTML = html;
    
    if(!buttonClicked)
        dateNow = new Date().toJSON().slice(0, 10);
    else
    {
        dateStart = new Date(dataInizio).toJSON().slice(0, 10);
        dateEnd = new Date(dataInizio).toJSON().slice(0, 10);
    }
    
    if(dateGrafico.length>5)
    {
        if(!buttonClicked)
        {
            for(;dateGrafico.length>5;)
            {
                dateGrafico.shift();
              	dateList.shift();
            }
        }
        else
        {
            arrayCopy = dateGrafico.slice(0);
            for(i=0;i<arrayCopy.length;i++)
            {
                dataArray = new Date(arrayCopy[i]).toJSON().slice(0, 10);
                if(dataArray < dataInizio)
                {
                    dateGrafico.shift();
                    dateList.shift();
                }
                if(dataArray > dataFine)
                {
                    dateGrafico.pop();
                    dateList.pop();
                }
            }
        }
    }
    
    dateData = [];
    count = 0;
    index = 0;

    for(i=0;i<dateList.length;i++)
    {
        dateData[index] = [];
        dateData[index][0] = dateList[i][0];
        codiceCurrent = dateList[i][1];
        count = 0;
        for(o=1;o<dateList[i].length;o++)
        {
            if(codiceCurrent == dateList[i][o])
            {
                count++;
            }
            else
            {
                dateData[index][0] = dateList[i][0];
                dateData[index][1] = codiceCurrent;
                dateData[index][2] = count;
                codiceCurrent = dateList[i][o];
                index++;
                dateData[index] = [];
                count = 1;
            }
        }
        dateData[index][0] = dateList[i][0];
        dateData[index][1] = codiceCurrent;
        dateData[index][2] = count;
        index++;
    }

    $.each(codici, function(i, el){
        if($.inArray(el, codiciGrafico) === -1) codiciGrafico.push(el);
    });
    codiciGrafico.sort();
    
    colori = ["#bd3026","#1c8718","#14109c","#de7c1b","#dede1b"];
    coloriSfondo = ["rgba(186, 49, 28, 0.5)","rgba(32, 140, 15, 0.5)","rgba(15, 57, 140, 0.5)","rgba(219, 117, 22, 0.5)","rgba(222, 222, 27, 0.5)"];
    indexColori = 0;
    for(i=0;i<codiciGrafico.length;i++)
    {
        datasets[i] = [];
        dataGrafico = [];
        trovato = false;
        for(indexDateList=0;indexDateList<dateList.length;indexDateList++)
        {
            for(o=1;o<dateList[indexDateList].length;o++)
            {
                if(codiciGrafico[i] == dateList[indexDateList][o])
                {
                    for(indexDateData=0;indexDateData<dateData.length;indexDateData++)
                    {
                        if(dateList[indexDateList][0] == dateData[indexDateData][0])
                            if(codiciGrafico[i] == dateData[indexDateData][1])
                            {
                                dataGrafico[indexDateList] = dateData[indexDateData][2];
                                trovato = true;
                            }
                    }
                }
            }
            if(!trovato)
                dataGrafico[indexDateList] = 0;
            else
                trovato = false;
        }
        datasets[i] = myNewDataset = {
            label: codiciGrafico[i],
            borderColor: colori[i],
            backgroundColor: coloriSfondo[i],
            lineTension: 0,
            data: dataGrafico
        }
    }
    
    ctx = document.getElementById('chart').getContext('2d');
    myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: dateGrafico,
        dataset: []
    },
    options: {
        responsive: true,
        maintainAspectRatio: false
    }
});

loop = setInterval(function() {
    if(datasetIndex < codiciGrafico.length)
    {
        myChart.data.datasets.push(datasets[datasetIndex]);
        myChart.update();
        datasetIndex++;
    }
    else
        clearInterval(loop);
}, 1000);
}