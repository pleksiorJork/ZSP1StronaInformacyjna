<!DOCTYPE html>
<html lang="pl-PL">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="style.css">
<!-- css bootstrapa-->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <title>ZSP1</title>
</head>
<body class="d-flex flex-column" style="height: 100vh;">
    <header class="naglowek px-4 py-2">
        <div class="row">
            <div class="col-md-1 col-2 d-flex flex-column">
                <img src="img/logo.png" class="img-fluid" style="max-height: 61px; max-width: 151px;">
            </div>
            <div class="col-md-3 col-3">
                <span class="align-middle">ZESPOL SZKOL BLA BLA</span>
            </div>
            <div class="col-md-2 col-7"></div>
            <div class="col-md-2 col-3">
                <div class="row">
                    <span id="dzien"></span>
                </div>
                <div class="row">
                    <span id="data"></span>
                </div>
            </div>
            <div class="col-md-1 col-3">
                <span id="czas"></span>
            </div>
            <div class="col-md-2 col-3">
                pogoda
            </div>
            <div class="col-md-1 col-3">
                szajs
            </div>
        </div>
    </header>

    <div class="container-fluid flex-grow-1 d-flex flex-column kontener-glowny py-2 px-4" style="height: 100vh;">
        <div class="row bg-light flex-grow-0" style="height: 62%;">
            <div class="col-md-4 col-12">
                <style>
                    table, th, td {
                        border: 1px solid black;
                        border-collapse: collapse;
                    }
                </style>
                <table>
                    <tr>
                        <th colspan="4">Zbliżające się wydarzenia</th>
                    </tr>
                    <tr>
                        <th>12:30</th>
                        <td colspan="3">Konkurs</td>
                    </tr>
                    <tr>
                        <th>9:35</th>
                        <td colspan="3">Inny konkurs</td>
                    </tr>
                </table>
            </div>
            <div class="col-md-4 col-12 bg-danger">
                blok b i c toalety nieczynne
            </div>
            <div class="col-md-4 col-12 d-flex flex-column">
                <div class="nested-row" style="height: 25%; border-bottom: 1px solid black;">
                    CYTAT / KOD QR
                </div>
                <div class="nested-row" style="height: 75%;">
                    ZASTEPSTWA
                </div>
            </div>
        </div>
        <div class="row flex-grow-0" style="height: 38%;">
            <div class="col-md-8 col-12">
                GALERIA, WYDARZENIA - SCROLL
            </div>
            <div class="col-md-4 col-12">
                <img src="img/proto-zastepstwa.png" class="img-fluid">
            </div>
        </div>
    </div>

    <footer class="stopka">cos tam</footer>
    <script src="script.js"></script>
<!-- skrypty bootstrapa -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.3/dist/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
</body>
</html>