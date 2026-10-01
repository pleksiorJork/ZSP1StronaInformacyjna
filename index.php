<!DOCTYPE html>
<html lang="pl-PL">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="style.css">
    <!-- css bootstrapa-->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
    <!-- font -->
    <link href="https://fonts.googleapis.com/css2?family=Sora:wght@400;600&display=swap" rel="stylesheet">
    <title>ZSP1</title>
</head>
<body class="d-flex flex-column">
    <header class="naglowek px-5 py-4 h-1">
        <div class="row d-flex align-items-center">
            <div class="col-md-1 col-2 d-flex align-items-center">
                <img src="img/logo3.png" class="img-logo img-fluid">
            </div>
            <div class="col-md-5 col-10 d-flex align-items-center">
                <span class="fw-bold fs-1">Zespół Szkół Ponadpodstawowych nr 1 w Kępnie</span>
            </div>
            <div class="col-md-1 col-3 align-items-center d-block" style="border-right: 2px solid white">
                
            </div>
            <div class="col-md-2 col-3 d-flex align-items-center">
                
                
            </div>
            <div class="col-md-2 col-3 d-flex align-items-center">
                <img id="pogoda-ikona">
                <span id="pogoda">Ładowanie pogody...</span>
            </div>
            <div class="col-md-1 col-3 d-flex align-items-center">
                <span id="czas" class="fs-1"></span>
            </div>
        </div>
    </header>

    <main class="kontener-glowny container-fluid flex-grow-1 d-flex flex-column py-2 px-4">
        <div class="row bg-light flex-grow-0" style="height: 62%;">
            <div class="col-md-4 col-12 kalendarz-kol">         
                    <iframe src="kalendarz-iframe.html" style="width:100%; height:100%; border:0;"></iframe>
            </div>
            <div class="col-md-4 col-12 py-1">
                <div class="informacje-wrapper">
                    <div class="row bg-danger my-2 mx-2 py-1 wazne-informacje">
                        <span class="text-center fw-bold fs-2" style="color:white;">WAŻNA INFORMACJA</span>
                    </div>
                    <div class="row">
                        <span class="text-center text-primary fs-3 fw-bold">TOALETY W BLOKU B I C SĄ NIECZYNNE</span>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-12 d-flex flex-column">
                <div class="nested-row" style="height: 25%; border-bottom: 1px solid black;">
                    <img src="img/qr.png" style="max-height: 100%;">
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
                <img src="img/VTI.png" class="img-fluid">
            </div>
        </div>
    </main>

    <footer class="stopka px-2 py-2">© 2026 Wszelkie prawa zastrzeżone.</footer>
    <script src="script.js"></script>
<!-- skrypty bootstrapa -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossorigin="anonymous"></script>
</body>
</html>