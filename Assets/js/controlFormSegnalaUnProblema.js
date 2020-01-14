document.getElementById("dateError").value = new Date().toISOString().substr(0, 10);
$('input, select, textarea').on("invalid", function(e) {
    e.preventDefault();
});

function getData()
{
    i=0;
    $('input, select, textarea').on("invalid", function() {
        if(i==0)
        {
            document.getElementById("errorMessage").innerHTML = "Inserisci tutti i campi correttamente";
            $(document).ready(function(){
                $('#errorMessage').animate({
                    opacity: "+=1"
                }, 1000, function() {
                $('#errorMessage').animate({
                    opacity: "-=1"
                }, 1500);
                });
            });
            i=1;
        }
    });
}

function controlData()
{
    data = new Date(document.getElementById("dateError").value).toJSON().slice(0, 10);
    today = new Date().toJSON().slice(0, 10);;
    if(data > today)
    {
        document.getElementById("errorMessage").innerHTML = "Inserisci tutti i campi correttamente";
            $(document).ready(function(){
            $('#errorMessage').animate({
                opacity: "+=1"
            }, 1000, function() {
            $('#errorMessage').animate({
                opacity: "-=1"
            }, 1500);
            });
        });
        return false;
    }

    return true;
}

function onChange()
{
    tipoErrore = document.getElementById("tipoErrore").value;
    if(tipoErrore == "altro")
    {
        document.getElementById("codiceErrore").readOnly = false;
        document.getElementById("codiceErrore").required = true;
        document.getElementById("tipoErrore").required = false;
    }
    else
    {
        document.getElementById("codiceErrore").readOnly = true;
        document.getElementById("codiceErrore").required = false;
        document.getElementById("tipoErrore").required = true;
        document.getElementById("codiceErrore").value = "";
    }
}