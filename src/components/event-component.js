import React, {Component} from 'react';
import logo from "../img/Towson_logo.jpg"
import "../page.css";

//Event layout page
//need to update navigation under <ul>
export default class Event extends Component {
  render(){
    if( this.props.data.loggedIn && this.props.data.event){
        return(
            <body>
              <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
                crossorigin="anonymous"></script>
              <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
                crossorigin="anonymous"></script>
              <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy"
                crossorigin="anonymous"></script>
              <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"></link>
               
            
           
        
        
            <div className="container-fluid gedf-wrapper">
                <div className="row">
                    <div className="col-md-3">
                        <div className="card">
                            <div className="card-body">
                                <img id= "EventLogo" alt = "Group Logo"/>
                                <div className="h5">Event Name </div>
                                <div className="h6">Hosted by:</div>
                                <div className="h7 text-muted">Date:</div>
                                <div className="h7">Time: 
                                </div>
                                <div className="h8"> Description: 
        
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 gedf-main">
        
                       
                        <div className="card gedf-card">
                            <div className="card-header">
                                <ul className="nav nav-tabs card-header-tabs" id="myTab" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" id="posts-tab" data-toggle="tab" href="#posts" role="tab" aria-controls="posts" aria-selected="true">Make
                                            a publication</a>
                                    </li>
                                    <li className="nav-item">
                                        <a class="nav-link" id="images-tab" data-toggle="tab" role="tab" aria-controls="images" aria-selected="false" href="#images">Images</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="card-body">
                                <div className="tab-content" id="myTabContent">
                                    <div className="tab-pane fade show active" id="posts" role="tabpanel" aria-labelledby="posts-tab">
                                        <div className="form-group">
                                            <label className="sr-only" for="message">post</label>
                                            <textarea className="form-control" id="message" rows="3" placeholder="Event Updates"></textarea>
                                        </div>
        
                                    </div>
                                    <div className="tab-pane fade" id="images" role="tabpanel" aria-labelledby="images-tab">
                                        <div className="form-group">
                                            <div className="custom-file">
                                                <input type="file" className="custom-file-input" id="customFile"/>
                                                <label className="custom-file-label" for="customFile">Upload image</label>
                                            </div>
                                        </div>
                                        <div className="py-4"></div>
                                    </div>
                                </div>
                                <div className="btn-toolbar justify-content-between">
                                    <div className="btn-group">
                                        <button type="submit" className="btn btn-primary">Post</button>
                                    </div>
                                    <div className="btn-group">
                                        <button id="btnGroupDrop1" type="button" className="btn btn-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
                                            aria-expanded="false">
                                            <i className="fa fa-globe"></i>
                                        </button>
                                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="btnGroupDrop1">
                                            <a className="dropdown-item" href="#"><i className="fa fa-globe"></i> Public</a>
                                            <a className="dropdown-item" href="#"><i className="fa fa-users"></i> Friends</a>
                                            <a className="dropdown-item" href="#"><i className="fa fa-user"></i> Just me</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                        <div className="card gedf-card">
                            <div className="card-header">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="mr-2">
                                            <img className="rounded-circle" width="45" src="https://picsum.photos/50/50" alt=""/>
                                        </div>
                                        <div className="ml-2">
                                            <div className="h5 m-0">Event Name</div>
                                            <div className="h7 text-muted">Hosted by: </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="dropdown">
                                            <button className="btn btn-link dropdown-toggle" type="button" id="gedf-drop1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i className="fa fa-ellipsis-h"></i>
                                            </button>
                                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="gedf-drop1">
                                                <div className="h6 dropdown-header">Configuration</div>
                                                <a className="dropdown-item" href="#">Save</a>
                                                <a className="dropdown-item" href="#">Hide</a>
                                                <a className="dropdown-item" href="#">Report</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
        
                            </div>
                            <div className="card-body">
                                <div className="text-muted h7 mb-2"> <i className="fa fa-clock-o"></i>Date: </div>
                                <a className="card-link" href="#">
                                    <h5 className="card-title"></h5>
                                </a>
        
                                <p className="card-text">
                                        Information or posts regarding the group 
                                </p>
                            </div>
                            <div className="card-footer">
                                <a href="#" className="card-link"><i className="fa fa-gittip"></i> Like</a>
                                <a href="#" className="card-link"><i className="fa fa-comment"></i> Comment</a>
                                <a href="#" className="card-link"><i className="fa fa-mail-forward"></i> Share</a>
                            </div>
                        </div>
                        
                        <div className="card gedf-card">
                            <div className="card-header">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="mr-2">
                                            <img className="rounded-circle" width="45" src="https://picsum.photos/50/50" alt=""/>
                                        </div>
                                        <div className="ml-2">
                                            <div className="h5 m-0">Event Name </div>
                                            <div className="h7 text-muted">Hosted by: </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="dropdown">
                                            <button className="btn btn-link dropdown-toggle" type="button" id="gedf-drop1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i className="fa fa-ellipsis-h"></i>
                                            </button>
                                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="gedf-drop1">
                                                <div class="h6 dropdown-header">Configuration</div>
                                                <a className="dropdown-item" href="#">Save</a>
                                                <a className="dropdown-item" href="#">Hide</a>
                                                <a className="dropdown-item" href="#">Report</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
        
                            </div>
                            <div className="card-body">
                                <div className="text-muted h7 mb-2"> <i className="fa fa-clock-o"></i> Date: </div>
                                <a className="card-link" href="#">
                                    <h5 className="card-title"> </h5>
                                </a>
        
                                <p className="card-text">
                                    Information or posts regarding the group 
                                </p>
                
                            </div>
                            <div className="card-footer">
                                <a href="#" className="card-link"><i className="fa fa-gittip"></i> Like</a>
                                <a href="#" className="card-link"><i className="fa fa-comment"></i> Comment</a>
                                <a href="#" className="card-link"><i className="fa fa-mail-forward"></i> Share</a>
                            </div>
                        </div>
                        
                        <div className="card gedf-card">
                            <div className="card-header">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="mr-2">
                                            <img className="rounded-circle" width="45" src="https://picsum.photos/50/50" alt=""/>
                                        </div>
                                        <div className="ml-2">
                                            <div className="h5 m-0">Event Name </div>
                                            <div className="h7 text-muted">Hosted by: </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="dropdown">
                                            <button className="btn btn-link dropdown-toggle" type="button" id="gedf-drop1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i className="fa fa-ellipsis-h"></i>
                                            </button>
                                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="gedf-drop1">
                                                <div className="h6 dropdown-header">Configuration</div>
                                                <a className="dropdown-item" href="#">Save</a>
                                                <a className="dropdown-item" href="#">Hide</a>
                                                <a className="dropdown-item" href="#">Report</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                             </div>
                        </div>
                    </div>
            
                     
        
        
        
                 
                    <div className="col-md-3">
                        <div className="card gedf-card">
                            <div className="card-body">
                                <h5 className="card-title">Groups</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Group1</h6>
                                <h6 className="card-subtitle mb-2 text-muted">Commencement 2020 </h6>
                                <p className="card-text">This will be used to quickly link to the groups you are in.</p>
                                <a href="#" className="card-link">Invite Friends</a>
                                <a href="#" className="card-link">Group Page</a>
                            </div>
                        </div>        
                    </div>
                </div>
            </div>  
        </body>
        
            );
    }else {
        return (
            <div></div>
        )
    }
    
  }
}