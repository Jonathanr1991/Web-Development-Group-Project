import React, { Component } from 'react';
import axios from 'axios';

export default class UserFeed extends Component {
    render() {
        return(
            <div>
       < link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"></link>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <link rel="stylesheet" href="page.css" />
        <header>
          <nav>
            <div className="header">
              <img id="logo" src="Towson_logo.jpg" alt="Towson logo" />
              <p>Tu Social</p>
              <div className="search">
                <input type="text" id="inputText" placeholder="Search" />
                <div className="search-icon">
                  <img src="http://icons.iconarchive.com/icons/icons8/ios7/256/Very-Basic-Search-icon.png" />
                </div>
              </div>   
              <ul>
                <li style={{textAlign: 'center', fontSize: '30px'}}>
                  <a href="profile.html" style={{fontSize: '20px', paddingRight: '10px'}}>Profile</a>
                  <a href="newsfeed.html" style={{fontSize: '20px', paddingRight: '10px'}}>Home page</a>
                  <a href="create.html" style={{fontSize: '20px', paddingRight: '10px'}}>Create</a>
                </li>		
              </ul>
            </div>
          </nav>
          <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-fbook">
            <div className="container c-navbar">
              <a className="navbar-brand" href="#">
                <svg className="d-block" width={30} height={30} viewBox="0 0 612 612" xmlns="http://www.w3.org/2000/svg" focusable="false"><title>Bootstrap</title><path fill="currentColor" d="M510 8a94.3 94.3 0 0 1 94 94v408a94.3 94.3 0 0 1-94 94H102a94.3 94.3 0 0 1-94-94V102a94.3 94.3 0 0 1 94-94h408m0-8H102C45.9 0 0 45.9 0 102v408c0 56.1 45.9 102 102 102h408c56.1 0 102-45.9 102-102V102C612 45.9 566.1 0 510 0z" /><path fill="currentColor" d="M196.77 471.5V154.43h124.15c54.27 0 91 31.64 91 79.1 0 33-24.17 63.72-54.71 69.21v1.76c43.07 5.49 70.75 35.82 70.75 78 0 55.81-40 89-107.45 89zm39.55-180.4h63.28c46.8 0 72.29-18.68 72.29-53 0-31.42-21.53-48.78-60-48.78h-75.57zm78.22 145.46c47.68 0 72.73-19.34 72.73-56s-25.93-55.37-76.46-55.37h-74.49v111.4z" /></svg>
              </a>
            </div>
          </nav>
        </header>
        <a href="profile.html">Gina Alvino</a>
        <div>
          <a href="chat.html">Messenger</a>
        </div>
        <div className="col-lg-7 offset-lg-3">
          <div className="row">
            <div className="col-lg-8">
              <div className="card my-3">
                <div className="card-header">
                  <ul className="nav nav-tabs card-header-tabs nav-fill">
                    <li className="nav-item">
                      <a className="nav-link active" href="#">Create Post</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Upload Photo/Video</a>
                    </li>
                  </ul>
                </div>
                <div className="card-body py-2">
                  <div className="d-flex">
                    <div>
                      <img className="rounded-circle" width={50} src="https://picsum.photos/80/80/?random?image=4" />
                    </div>
                    <div className="col">
                      <form action="#">
                        <div className="form-group mb-0">
                          <label className="sr-only" htmlFor="exampleFormControlTextarea1">Example textarea</label>
                          <textarea className="form-control border-0" id="exampleFormControlTextarea1" rows={2} placeholder="What are you thinking?" defaultValue={""} />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="card-footer p-2">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="col">
                      <button type="button" className="btn btn-fposts btn-block btn-sm"> <i className="fa fa-list" aria-hidden="true" /> Documents</button>
                    </div>
                    <div className="col">
                      <button type="button" className="btn btn-fposts btn-block btn-sm"><i className="fa fa-picture-o" aria-hidden="true" /> Photos/Videos</button>
                    </div>
                    <div className="col">
                      <button type="button" className="btn btn-fposts btn-block btn-sm"><i className="fa fa-user-plus" aria-hidden="true" /> </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* ITEM */}
              <div className="card my-3">
                <div className="card-header bg-white border-0 py-2">
                  <div className="d-flex justify-content-between">
                    <div className="d-flex justify-content-between">
                      <a href="#">
                        <img className="rounded-circle" src="https://picsum.photos/80/80/?random" width={45} alt="" />
                      </a>
                      <div className="ml-3">
                        <div className="h6 m-0">
                          <a href="#">Revista Automóvil Panamericano</a>
                        </div>
                        <div className="text-muted h8">Hace 2 min <i className="fa fa-globe" aria-hidden="true" /></div>
                      </div>
                    </div>
                    <div className="dropdown">
                      <button className="btn btn-link dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
                      <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body pt-0 pb-2">
                  Hola, necesito ayuda para clonar mi HDD a un SSD. Probé Norton Ghost y easyup (nose
                  que nota les dan) lo malo es que estos software al iniciar desde el ssd me pide que
                  repare el sistema. Aiudaaaaa....
                </div>
                <img className="card-img-top rounded-0" src="https://picsum.photos/320/250/?random" alt="Card image cap" />
                <div className="card-footer bg-white border-0 p-0">
                  <div className="d-flex justify-content-between align-items-center py-2 mx-3 border-bottom">
                    <div>
                    </div>
                    <div className="h7"> 3279 <a href="#"> comentarios</a> 44845 veces <a href="#">compartido</a></div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center my-1">
                    <div className="col">
                      <button type="button" className="btn btn-fbook btn-block btn-sm"> <i className="fa fa-thumbs-up" aria-hidden="true" /> Like</button>
                    </div>
                    <div className="col">
                      <button type="button" className="btn btn-fbook btn-block btn-sm"><i className="fa fa-comment" aria-hidden="true" /> Comment</button>
                    </div>
                    <div className="col">
                      <button type="button" className="btn btn-fbook btn-block btn-sm"><i className="fa fa-share" aria-hidden="true" /> Share</button>
                    </div>
                  </div>
                </div>
              </div>
              {/* ITEM */}
              {/* ITEM */}
              <div className="card my-3">
                <div className="card-header bg-white border-0 py-2">
                  <div className="d-flex justify-content-between">
                    <div className="d-flex justify-content-between">
                      <a href="#">
                        <img className="rounded-circle" src="https://picsum.photos/80/80/?random?image=2" width={45} alt="" />
                      </a>
                      <div className="ml-3">
                        <div className="h6 m-0">
                          <a href="#">Angel Miguel Tantarico Vela</a> a compartido <a href="#">Cuminidad
                            Programadores peru masters</a>
                        </div>
                        <div className="text-muted h8">Hace 5 min <i className="fa fa-globe" aria-hidden="true" /></div>
                      </div>
                    </div>
                    <div className="dropdown">
                      <button className="btn btn-link dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
                      <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body pt-0 pb-2">
                  La fuerza es el único lenguaje que el mal entiende. ¡Derrota monstruos para conseguir
                  muchas recompensas!
                </div>
                <img className="card-img-top rounded-0" src="https://picsum.photos/g/320/250/?random" alt="Card image cap" />
                <div className="card-footer bg-white border-0 p-0">
                  <div className="d-flex justify-content-between align-items-center py-2 mx-3 border-bottom">
                    <div>
                    </div>
                    <div className="h7"> 3279 <a href="#"> Comments </a> 44845 veces <a href="#">compartido</a></div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center my-1">
                    <div className="col">
                      <button type="button" className="btn btn-fbook btn-block btn-sm"> <i className="fa fa-thumbs-up" aria-hidden="true" /> Like</button>
                    </div>
                    <div className="col">
                      <button type="button" className="btn btn-fbook btn-block btn-sm"><i className="fa fa-comment" aria-hidden="true" /> Comement</button>
                    </div>
                  </div>
                </div>
              </div>
              {/* ITEM */}
              {/* ITEM */}
              <div className="card my-3">
                <div className="card-header bg-white border-0 py-2">
                  <div className="d-flex justify-content-between">
                    <div className="d-flex justify-content-between">
                      <a href="#">
                        <img className="rounded-circle" src="https://picsum.photos/80/80/?random?image=0" width={45} alt="" />
                      </a>
                      <div className="ml-3">
                        <div className="h6 m-0">
                          <a href="#">Revista Automóvil Panamericano</a>
                        </div>
                        <div className="text-muted h8">Hace 2 min <i className="fa fa-globe" aria-hidden="true" /></div>
                      </div>
                    </div>
                    <div className="dropdown">
                      <button className="btn btn-link dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
                      <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body pt-0 pb-2">
                  Hola, necesito ayuda para clonar mi HDD a un SSD. Probé Norton Ghost y easyup (nose
                  que nota les dan) lo malo es que estos software al iniciar desde el ssd me pide que
                  repare el sistema. Aiudaaaaa....
                </div>
                <img className="card-img-top rounded-0" src="https://picsum.photos/320/250/?random?image=0" alt="Card image cap" />
                <div className="card-footer bg-white border-0 p-0">
                  <div className="d-flex justify-content-between align-items-center py-2 mx-3 border-bottom">
                    <div>
                    </div>
                    <div className="h7"> 3279 <a href="#"> comentarios</a> 44845 veces <a href="#">compartido</a></div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center my-1">
                    <div className="col">
                      <button type="button" className="btn btn-fbook btn-block btn-sm"> <i className="fa fa-thumbs-up" aria-hidden="true" /> Like</button>
                    </div>
                    <div className="col">
                      <button type="button" className="btn btn-fbook btn-block btn-sm"><i className="fa fa-comment" aria-hidden="true" /> Comment</button>
                    </div>
                    <div className="col">
                      <button type="button" className="btn btn-fbook btn-block btn-sm"><i className="fa fa-share" aria-hidden="true" /> Share</button>
                    </div>
                  </div>
                </div>
              </div>
              {/* ITEM */}
              {/* ITEM */}
              <div className="card my-3">
                <div className="card-header bg-white border-0 py-2">
                  <div className="d-flex justify-content-between">
                    <div className="d-flex justify-content-between">
                      <a href="#">
                        <img className="rounded-circle" src="https://picsum.photos/80/80/?random?image=1" width={45} alt="" />
                      </a>
                      <div className="ml-3">
                        <div className="h6 m-0">
                          <a href="#">Angel Miguel Tantarico Vela</a> a compartido <a href="#">Cuminidad
                            Programadores peru masters</a>
                        </div>
                        <div className="text-muted h8">Hace 5 min <i className="fa fa-globe" aria-hidden="true" /></div>
                      </div>
                    </div>
                    <div className="dropdown">
                      <button className="btn btn-link dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
                      <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body pt-0 pb-2">
                  La fuerza es el único lenguaje que el mal entiende. ¡Derrota monstruos para conseguir
                  muchas recompensas!
                </div>
                <img className="card-img-top rounded-0" src="https://picsum.photos/320/250/?random?image=1" alt="Card image cap" />
                <div className="card-footer bg-white border-0 p-0">
                  <div className="d-flex justify-content-between align-items-center py-2 mx-3 border-bottom">
                    <div>
                    </div>
                    <div className="h7"> 3279 <a href="#"> comentarios</a> 44845 veces <a href="#">compartido</a></div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center my-1">
                    <div className="col">
                      <button type="button" className="btn btn-fbook btn-block btn-sm"> <i className="fa fa-thumbs-up" aria-hidden="true" /> Like</button>
                    </div>
                    <div className="col">
                      <button type="button" className="btn btn-fbook btn-block btn-sm"><i className="fa fa-comment" aria-hidden="true" /> Comment</button>
                    </div>
                  </div>
                </div>
              </div>
              {/* ITEM */}
            </div>
            <div className="col-lg-4">
              <div className="card my-3">
                <div className="card-body p-2">
                  <div className="h6">Groups</div>
                  {/* */}
                  <div className="mb-3">
                    <div className="d-flex justify-content-start">
                      <div className="img-circle">
                      </div>
                      <div className="h7 ml-2">
                        <a href="#"> Active Groups</a>
                        <div className="text-muted">Comparte una foto , un video o haz un comentario</div>
                      </div>
                    </div>
                  </div>
                  {/* */}
                  {/* */}
                  <div className="mb-3">
                    <div className="d-flex justify-content-start">
                      <div>
                        <img className="rounded-circle" width={45} src="https://picsum.photos/80/80/?random?image=5" alt="" />
                      </div>
                      <div className="h7 ml-2">
                        <a href="#">Fraternities</a>
                        <div className="text-muted"> Hace 1 Hora</div>
                      </div>
                    </div>
                  </div>
                  {/* */}
                  {/* */}
                  <div className="mb-3">
                    <div className="d-flex justify-content-start">
                      <div>
                        <img className="rounded-circle" width={45} src="https://picsum.photos/80/80/?random?image=4" alt="" />
                      </div>
                      <div className="h7 ml-2">
                        <a href="#"> Security club</a>
                        <div className="text-muted"> Hace 2 Hora</div>
                      </div>
                    </div>
                  </div>
                  {/* */}
                  {/* */}
                  <div className="mb-3">
                    <div className="d-flex justify-content-start">
                      <div>
                        <img className="rounded-circle" width={45} src="https://picsum.photos/80/80/?random?image=2" alt="" />
                      </div>
                      <div className="h7 ml-2">
                        <a href="#"> Career Center</a>
                        <div className="text-muted"> Hace 2 Hora</div>
                      </div>
                    </div>
                  </div>
                  {/* */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <form action="#">
        </form>
      </div>
        );
    }
}