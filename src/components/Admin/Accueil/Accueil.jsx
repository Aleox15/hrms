import React from 'react'
import Layout from '../../layout/Layout'
import './Accueil.css'
import Button from '../../../styles/Button.styled'
export default function Accueil() {
  return (
    <div className="accueil">
      <div className="">
      <div className="email-app mb-4">
          <nav>
             <Button className='btnNewEmail'>New Email</Button>
              <ul className="nav">
                  <li className="nav-item">
                     <span className='leftEmailInfo'><i className="fa fa-inbox"></i> &nbsp; Inbox</span>  <span className="numberInbox">4</span>
                     
                  </li>
                  <li className="nav-item">
                     <span className='leftEmailInfo'><i className="fa fa-star"></i>&nbsp;Stared</span> 
                  </li>
                  <li className="nav-item">
                  <span className='leftEmailInfo'><i className="fa fa-rocket"></i>&nbsp; Sent</span> 
                  </li>
                  <li className="nav-item">
                  <span className='leftEmailInfo'><i className="fa fa-trash-o"></i>&nbsp; Trash</span> 
                  </li>
                  <li className="nav-item">
                  <span className='leftEmailInfo'><i className="fa fa-bookmark"></i>&nbsp; Important</span> 
                  </li>
              </ul>
          </nav>
          <main className="inbox">
              <div className="btnAccueilTop">
                  <div className="">
                      <button type="button" className="btnItemTop">
                          <span className="fa fa-envelope"></span>
                      </button>
                      <button type="button" className="btnItemTop">
                          <span className="fa fa-star"></span>
                      </button>
                      <button type="button" className="btnItemTop">
                          <span className="fa fa-star-o"></span>
                      </button>
                      <button type="button" className="btnItemTop">
                          <span className="fa fa-bookmark-o"></span>
                      </button>
                  </div>
                  <div className="btn-group">
                      <button type="button" className="btnItemTop">
                          <span className="fa fa-mail-reply"></span>
                      </button>
                      <button type="button" className="btnItemTop">
                          <span className="fa fa-mail-reply-all"></span>
                      </button>
                      <button type="button" className="btnItemTop">
                          <span className="fa fa-mail-forward"></span>
                      </button>
                  </div>
                  <button type="button" className="btnItemTop">
                      <span className="fa fa-trash-o"></span>
                  </button>
                  <div className="btn-group float-right">
                      <button type="button" className="btnItemTop">
                          <span className="fa fa-chevron-left"></span>
                      </button>
                      <button type="button" className="btnItemTop">
                          <span className="fa fa-chevron-right"></span>
                      </button>
                  </div>
              </div>

              <ul className="messages">
                  <li className="message unread">
                          <div className="actions">
                              <span className="action"><i className="fa fa-square-o"></i></span>
                              <span className="action"><i className="fa fa-star-o"></i></span>
                          </div>
                          <div className="header">
                              <span className="">Lukasz Holeczek</span>
                              <span className="date">
                              <span className="fa fa-paper-clip"></span> Today, 3:47 PM</span>
                          </div>
                          <div className="title">
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                          </div>
                          <div className="description">
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                          </div>
                  </li>
                  <li className="message">
                          <div className="actions">
                              <span className="action"><i className="fa fa-square-o"></i></span>
                              <span className="action"><i className="fa fa-star-o"></i></span>
                          </div>
                          <div className="header">
                              <span className="from">Lukasz Holeczek</span>
                              <span className="date">
                              <span className="fa fa-paper-clip"></span> Today, 3:47 PM</span>
                          </div>
                          <div className="title">
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                          </div>
                          <div className="description">
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                          </div>
                  </li>
                  <li className="message">
                          <div className="actions">
                              <span className="action"><i className="fa fa-square-o"></i></span>
                              <span className="action"><i className="fa fa-star-o"></i></span>
                          </div>
                          <div className="header">
                              <span className="from">Lukasz Holeczek</span>
                              <span className="date">Today, 3:47 PM</span>
                          </div>
                          <div className="title">
                              Lorem ipsum dolor sit amet.
                          </div>
                          <div className="description">
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                          </div>
                  </li>
                  <li className="message unread">
                          <div className="actions">
                              <span className="action"><i className="fa fa-square-o"></i></span>
                              <span className="action"><i className="fa fa-star-o"></i></span>
                          </div>
                          <div className="header">
                              <span className="from">Lukasz Holeczek</span>
                              <span className="date">Today, 3:47 PM</span>
                          </div>
                          <div className="title">
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                          </div>
                          <div className="description">
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                          </div>
                  </li>
              </ul>
          </main>
      </div>
      </div>

    </div>
  )
}
