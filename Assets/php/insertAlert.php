<?php
if(isset($_POST['submit']))
{
    session_start();
    
    $nomeUtente = $_POST["nameUser"];
    $cognomeUtente = $_POST["surnameUser"];
    $paeseUtente = $_POST["countryUser"];
    $codiceErrore = $_POST["codeError"];
    $dataErrore = $_POST["dateError"];
    
    if($codiceErrore == "altro")
    	$codiceErrore = $_POST["codeErrorAltro"];
    
    $csv = "\n".$nomeUtente.",".$cognomeUtente.",".$paeseUtente.",".$codiceErrore.",".$dataErrore;

    $csv_handler = fopen ('../csv/registro.csv','a');
    fwrite ($csv_handler,$csv);
    fclose ($csv_handler);
    
    $csv = "\n".$codiceErrore.",".$dataErrore;
    $csv_handler = fopen ('../csv/clienti.csv','a');
    fwrite ($csv_handler,$csv);
    fclose ($csv_handler);
    
    header("Location: ../../index.php?");
    exit;
}
else
{
    header("Location: ../../segnalaUnProblema.php");
    exit;
}
?>
