<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta name="description" content="Pagina para practicar js, html y css" />
    <meta name="author" content="Magali Glauso" />
    <link rel="stylesheet" href="./css/ej.css">
    <link rel="shortcut icon" href="./imagen/icono.ico">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
    <title>Principal</title>
</head>

<body>
    <div class="container-fluid" id="cont">
        Envios a domicilio
    </div>
    <header>
        <nav class="navbar navbar-expand-lg navbar-dark bg-nav">
            <div class="container-fluid">
                <a class="navbar-brand" href="./imagen/icono.ico" target="_blank"> <img src="./imagen/icono.ico"> </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li class=" nav-item">
                            <a class="nav-link active" aria-current="page" href="./INICIO.html" target="_blank">Inicio</a>
                        </li>
                        <li class=" nav-item">
                            <a class="nav-link active" aria-current="page" href="/ayuda.html" target="_blank">Ayuda</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Productos
                    </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="/camisetas.html" target="_blank">Camisetas</a></li>
                                <li><a class="dropdown-item" href="/buzos.html" target="_blank">Buzos</a></li>
                                <li><a class="dropdown-item" href="/sweater.html" target="_blank">Sweater</a></li>
                                <li><a class="dropdown-item" href="/jeans.html" target="_blank">Pantalones</a></li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <li><a class="dropdown-item" href="/remeras.html" target="_blank">Remeras</a></li>
                            </ul>
                        </li>


                    </ul>

                    <div id="inicio">
                        <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
                            <ul class="navbar-nav">
                                <li class="nav-item dropstart">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <img src="imagen/login.ico" style="width: 3rem;">
                                    </a>
                                    <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                                        <li><a class="dropdown-item" id="open">Ingresar</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>

                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </header>

    <main>
        <div id="carrusel">
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button " data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true " aria-label="Slide 1 "></button>
                    <button type="button " data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button " data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="/imagen/Paradise (1).jpg " class="d-block w-100 " alt="... ">
                    </div>
                    <div class="carousel-item">
                        <img src="/imagen/Paradise.jpg " class="d-block w-100 " alt="... ">
                    </div>
                    <div class="carousel-item">
                        <img src="/imagen/Paradise (2).jpg " class="d-block w-100 " alt="... ">
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
            </div>
        </div>
        <div id="opciones">
            <div class="row row-cols-1 row-cols-md-2 g-4">
                <div class="col">
                    <div class="card border-0 ">
                        <a href="/ofertas.html ">
                            <img src="/imagen/OFERTAS (1).jpg " class="card-img-top " alt="... ">
                        </a>
                    </div>
                </div>
                <div class="col">
                    <div class="card border-0 ">
                        <a href="/jeans.html">
                            <img src="/imagen/JEANS.jpg" class="card-img-top " alt="... ">
                        </a>
                    </div>
                </div>
                <div class="col">
                    <div class="card border-0 ">
                        <a href="/sweater.html">
                            <img src="/imagen/SWEATER.jpg " class="card-img-top " alt="... ">
                        </a>
                    </div>
                </div>
                <div class="col">
                    <div class="card border-0 ">
                        <a href="/loNuevo.html">
                            <img src="/imagen/LO NUEVO.jpg " class="card-img-top " alt="... ">
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div class="container-fluid" id="destacados">
            <h2> DESTACADOS </h2>
        </div>
        <div class="grupos">
            <div class="row row-cols-1 row-cols-md-4 g-4">
                <div class="col">
                    <div class="card border-0 ">
                        <img src="/imagen/Monkey-Colores.jpg " class="card-img-top " alt="... ">
                        <div class="card-body ">
                            <h5 class="card-title ">Sweater Monkey</h5>
                        </div>
                        <div class="card-footer ">
                            <small class="text-muted ">$990</small>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card border-0 ">
                        <img src="/imagen/sweater analia.jpg " class="card-img-top " alt="... ">
                        <div class="card-body ">
                            <h5 class="card-title ">Sweater Analia</h5>
                        </div>
                        <div class="card-footer ">
                            <small class="text-muted ">$1300</small>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card border-0 ">
                        <img src="/imagen/pantalon-plush.jpg " class="card-img-top " alt="... ">
                        <div class="card-body ">
                            <h5 class="card-title ">Pantalon Plush</h5>
                        </div>
                        <div class="card-footer ">
                            <small class="text-muted ">$800</small>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card border-0 ">
                        <img src="/imagen/Biker-Simona-2.jpg " class="card-img-top " alt="... ">
                        <div class="card-body ">
                            <h5 class="card-title ">Biker Simona</h5>
                        </div>
                        <div class="card-footer ">
                            <small class="text-muted ">$800</small>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row row-cols-1 row-cols-md-4 g-4">
                <div class="col">
                    <div class="card border-0 ">
                        <img src="/imagen/camisetas/arnold.jpeg" class="card-img-top " alt="... ">
                        <div class="card-body ">
                            <h5 class="card-title ">Camiseta Arnold</h5>
                        </div>
                        <div class="card-footer ">
                            <small class="text-muted ">$650</small>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card border-0 ">
                        <img src="/imagen/camisetas/BLESSED.jpeg" class="card-img-top " alt="... ">
                        <div class="card-body ">
                            <h5 class="card-title ">Camiseta Blessed</h5>
                        </div>
                        <div class="card-footer ">
                            <small class="text-muted ">$680</small>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card border-0">
                        <img src="/imagen/buzos/MALIBU.jpg" class="card-img-top " alt="... ">
                        <div class="card-body ">
                            <h5 class="card-title ">Buzo Malibu</h5>
                        </div>
                        <div class="card-footer ">
                            <small class="text-muted ">$1100</small>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card border-0">
                        <img src="/imagen/sweater/max-sw-helen.jpg" class="card-img-top " alt="... ">
                        <div class="card-body ">
                            <h5 class="card-title ">Maxi Sweater Helen</h5>
                        </div>
                        <div class="card-footer ">
                            <small class="text-muted ">$1510</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>



        <div class="container-fluid" id="nosotros">
            <h2> SEASON WINTER 2021 </h2>
        </div>
        <div id="carrusel2">
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <!-- CARD 1 -->
                        <div class="card-group">
                            <div class="card border-0">
                                <img src="/imagen/sweater/sw-amelia.jpeg" class="card-img-top" alt="...">
                                <div class="card-footer">
                                    <small class="text-muted">Sweater Amelia</small>
                                </div>
                            </div>
                            <div class="card border-0">
                                <img src="/imagen/sweater/sw-amapola.jpg" class="card-img-top" alt="...">
                                <div class="card-footer">
                                    <small class="text-muted">Sweater Amapola</small>
                                </div>
                            </div>
                            <div class="card border-0">
                                <img src="/imagen/sweater/sw-any.jpg" class="card-img-top" alt="...">
                                <div class="card-footer">
                                    <small class="text-muted">Sweater Any</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <!-- CARD 2 -->
                        <div class="card-group ">
                            <div class="card border-0">
                                <img src="/imagen/buzos/PALMWOOD.jpeg" class="card-img-top" alt="...">
                                <div class="card-footer">
                                    <small class="text-muted">Buzo Palmwood</small>
                                </div>
                            </div>
                            <div class="card border-0">
                                <img src="/imagen/buzos/ATLANTA.jpg" class="card-img-top" alt="...">
                                <div class="card-footer">
                                    <small class="text-muted">Buzo Atlanta</small>
                                </div>
                            </div>
                            <div class="card border-0">
                                <img src="/imagen/buzos/COLORADO.jpeg" class="card-img-top" alt="...">
                                <div class="card-footer">
                                    <small class="text-muted">Buzo Colorado</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- CARD 3 -->
                    <div class="carousel-item">
                        <div class="card-group">
                            <div class="card border-0">
                                <img src="/imagen/pantalones/dark-blue.jpg" class="card-img-top" alt="...">
                                <div class="card-footer">
                                    <small class="text-muted">Jeans Dark Blue</small>
                                </div>
                            </div>
                            <div class="card border-0">
                                <img src="/imagen/pantalones/denim-black.jpg" class="card-img-top" alt="...">
                                <div class="card-footer">
                                    <small class="text-muted">Jeans Denim Black</small>
                                </div>
                            </div>
                            <div class="card border-0">
                                <img src="/imagen/pantalones/denim-renata.jpg" class="card-img-top" alt="...">
                                <div class="card-footer">
                                    <small class="text-muted">Jeans Denim Renata</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
                </div>
            </div>

        </div>

    </main>



    <!-- FOOTER -->
    <footer class="footer ">
        <div class="container">
            <div class="redes_sociales">
                <div class="row">
                    <div class="col-4 col-sm-3">
                        <a href="http://webenlance.com"><img src="./imagen/fb.ico"></a>
                    </div>
                    <div class="col-4 col-sm-3">
                        <a href="http://webenlance.com"><img src="./imagen/ig.ico"></a>
                    </div>
                    <div class="col-4 col-sm-3">
                        <a href="http://webenlance.com"><img src="./imagen/gmail.ico"></a>
                    </div>
                    <div class="col-4 col-sm-3">
                        <a href="http://webenlance.com"><img src="./imagen/wsp.ico"></a>
                    </div>
                </div>

                <p>
                    <p class="text-center">Paradise Indumentaria @2020 | Diseñado por Magali Glauso</p>
    </footer>



    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js " integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p " crossorigin="anonymous ">
    </script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.min.js " integrity="sha384-Atwg2Pkwv9vp0ygtn1JAojH0nYbwNJLPhwyoVbhoPwBhjQPR5VtM2+xf0Uwh9KtT " crossorigin="anonymous "></script>

    <script type="text/javascript ">
        (function() {
            var ldk = document.createElement('script');
            ldk.type = 'text/javascript';
            ldk.async = true;
            ldk.src = "https://s.cliengo.com/weboptimizer/60de48ad1264ab002a47e7e3/60de48ae1264ab002a47e7e6.js?platform=registration ";
            var s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(ldk, s);
        })();
    </script>

    <!-- firebase -->
    <!-- The core Firebase JS SDK is always required and must be listed first -->
    <script src="https://www.gstatic.com/firebasejs/8.7.1/firebase-app.js"></script>

    <!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
    <script src="https://www.gstatic.com/firebasejs/8.7.1/firebase-auth.js"></script>
    <script src="https://www.gstatic.com/firebasejs/8.7.1/firebase-analytics.js"></script>

    <script>
        // Your web app's Firebase configuration
        // For Firebase JS SDK v7.20.0 and later, measurementId is optional
        var firebaseConfig = {
            apiKey: "AIzaSyB2wqmrmB9-q26MtUK8hEzcj8nZMmrTHzo",
            authDomain: "paradiseind-65740.firebaseapp.com",
            projectId: "paradiseind-65740",
            storageBucket: "paradiseind-65740.appspot.com",
            messagingSenderId: "370416669900",
            appId: "1:370416669900:web:19a15263731137d339de69",
            measurementId: "G-FFFVR1SM5S"
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
        firebase.analytics();
    </script>
    <script src="/js/boton.js"></script>
</body>

</html>
  
