<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtenir les dades del formulari.
    $email    = $_POST['email'];
    $password = $_POST['password'];
    $llibre   = $_POST['llibre'];
    $preu     = $_POST['preu'];

    // Creem un array en el que guardar les dades del llibre més rellevants.
    $dades = array(
      'titol'    => '',
      'autor'    => '',
      'tipus'    => '',
      'missatge' => ''
    );

    // Comprovar que els valors de les variables siguin els correctes.
    if (empty($email) || empty($password) || empty($preu)) {
        http_response_code(400);
        echo "Oops! Hi ha halgut algun problema amb les dades introduïdes, revisa-les...";
        exit;
    }

    // Comrpovar si el preu és un número.
    if (!is_numeric($preu)) {
        http_response_code(400);
        echo " Oops! El preu introduït no és un número, revisa'l...";
        exit;
    }

    // Comrpovar si s'ha seleccionat un llibre.
    if ($llibre == "0") {
        http_response_code(400);
        echo " Oops! Has de seleccionar un llibre!";
        exit;
    }

    // A banda de validar el formulari, tornarem alguna informació de més.
    // Assignem les dades al seu índex corresponent.
    if ($llibre == "gulliver") {
        $dades['titol']    = "Gulliver's Travels";
        $dades['autor']    = "Jonathan Swift";
        $dades['tipus']    = "Fantasia";
        $dades['missatge'] = "Tot ha sortit bé!";
    } elseif ($llibre == "time") {
        $dades['titol']    = "Time and the Gods";
        $dades['autor']    = "Lord Dunsany";
        $dades['tipus']    = "Fantasia";
        $dades['missatge'] = "Tot ha sortit bé!";
    } elseif ($llibre == "princess") {
        $dades['titol']    = "A Princess of Mars";
        $dades['autor']    = "Edgar Rice Burroughs";
        $dades['tipus']    = "Ciència-ficció";
        $dades['missatge'] = "Tot ha sortit bé!";
    } else {
        $dades['titol']    = "The War of the Worlds";
        $dades['autor']    = "H. G. Wells";
        $dades['tipus']    = "Ciència-ficció";
        $dades['missatge'] = "Tot ha sortit bé!";
    }

    // Definir el format de les dades a enviar i enviar-les.
    header('Content-type: application/json');
    echo json_encode($dades);
} else {
    http_response_code(403);
}
