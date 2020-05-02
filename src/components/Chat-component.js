import React, {Component} from 'react';
import logo from "../src/Towson_logo.jpg"
import "../page.css";

export default class Chat extends Component{
    render() {
      return (
        <div>
          <link type="text/css" rel="stylesheet" href="bootstrap3.min.css" />
          <title>Bootstrap Example</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
          <link rel="stylesheet" href="page.css" />
          <header>
            <nav>
              <div className="header">
                <img id="logo" src={logo} alt="Towson Logo" />
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
                  </li>		
                </ul>
              </div>
            </nav>
          </header>
          <div className="messaging">
            <div className="inbox_msg">
              <div className="inbox_people">
                <div className="headind_srch">
                  <div className="recent_heading">
                    <h4>Recent</h4>
                  </div>
                  <div className="srch_bar">
                    <div className="stylish-input-group">
                      <input type="text" className="search-bar" placeholder="Search" />
                    </div>
                  </div>
                </div>
                <div className="inbox_chat scroll">
                  <div className="chat_list active_chat">
                    <div className="chat_people">
                      <div className="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
                      <div className="chat_ib">
                        <h5>Sunil Rajput <span className="chat_date">Dec 25</span></h5>
                        <p>Test, which is a new approach to have all solutions 
                          astrology under one roof.</p>
                      </div>
                    </div>
                  </div>
                  <div className="chat_list">
                    <div className="chat_people">
                      <div className="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
                      <div className="chat_ib">
                        <h5>Sunil Rajput <span className="chat_date">Dec 25</span></h5>
                        <p>Test, which is a new approach to have all solutions 
                          astrology under one roof.</p>
                      </div>
                    </div>
                  </div>
                  <div className="chat_list">
                    <div className="chat_people">
                      <div className="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
                      <div className="chat_ib">
                        <h5>Sunil Rajput <span className="chat_date">Dec 25</span></h5>
                        <p>Test, which is a new approach to have all solutions 
                          astrology under one roof.</p>
                      </div>
                    </div>
                  </div>
                  <div className="chat_list">
                    <div className="chat_people">
                      <div className="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
                      <div className="chat_ib">
                        <h5>Sunil Rajput <span className="chat_date">Dec 25</span></h5>
                        <p>Test, which is a new approach to have all solutions 
                          astrology under one roof.</p>
                      </div>
                    </div>
                  </div>
                  <div className="chat_list">
                    <div className="chat_people">
                      <div className="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
                      <div className="chat_ib">
                        <h5>Sunil Rajput <span className="chat_date">Dec 25</span></h5>
                        <p>Test, which is a new approach to have all solutions 
                          astrology under one roof.</p>
                      </div>
                    </div>
                  </div>
                  <div className="chat_list">
                    <div className="chat_people">
                      <div className="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
                      <div className="chat_ib">
                        <h5>Sunil Rajput <span className="chat_date">Dec 25</span></h5>
                        <p>Test, which is a new approach to have all solutions 
                          astrology under one roof.</p>
                      </div>
                    </div>
                  </div>
                  <div className="chat_list">
                    <div className="chat_people">
                      <div className="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
                      <div className="chat_ib">
                        <h5>Sunil Rajput <span className="chat_date">Dec 25</span></h5>
                        <p>Test, which is a new approach to have all solutions 
                          astrology under one roof.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mesgs">
                <div className="msg_history">
                  <div className="incoming_msg">
                    <div className="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
                    <div className="received_msg">
                      <div className="received_withd_msg">
                        <p>Test which is a new approach to have all
                          solutions</p>
                        <span className="time_date"> 11:01 AM    |    June 9</span></div>
                    </div>
                  </div>
                  <div className="outgoing_msg">
                    <div className="sent_msg">
                      <p>Test which is a new approach to have all
                        solutions</p>
                      <span className="time_date"> 11:01 AM    |    June 9</span> </div>
                  </div>
                  <div className="incoming_msg">
                    <div className="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
                    <div className="received_msg">
                      <div className="received_withd_msg">
                        <p>Test, which is a new approach to have</p>
                        <span className="time_date"> 11:01 AM    |    Yesterday</span></div>
                    </div>
                  </div>
                  <div className="outgoing_msg">
                    <div className="sent_msg">
                      <p>Apollo University, Delhi, India Test</p>
                      <span className="time_date"> 11:01 AM    |    Today</span> </div>
                  </div>
                  <div className="incoming_msg">
                    <div className="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
                    <div className="received_msg">
                      <div className="received_withd_msg">
                        <p>We work directly with our designers and suppliers,
                          and sell direct to you, which means quality, exclusive
                          products, at a price anyone can afford.</p>
                        <span className="time_date"> 11:01 AM    |    Today</span></div>
                    </div>
                  </div>
                </div>
                <div className="type_msg">
                  <div className="input_msg_write">
                    <input type="text" className="write_msg" placeholder="Type a message" />
                    <button className="msg_send_btn" type="button"><i className="fa fa-paper-plane" aria-hidden="true" /></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
};