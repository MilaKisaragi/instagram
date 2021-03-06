import logo from './logo.svg';
import './App.css';
import img1 from './img/navigation.png'
import img2 from './img/home.png'
import img3 from './img/dm.png'
import img4 from './img/like.png'
import img5 from './img/profile.png'
import img6 from './img/story.png'
import img7 from './img/pict.jpg'
import img8 from './img/comment.png'
import img9 from './img/save.png'
import img10 from './img/instagram.png'
import img11 from './img/smile.png'
import React, { useState, useEffect } from 'react';
import Login from './Login'

const App = (props) => {

  return (
    <div className="luar">
      <div className="navbar">
        <div className="satu">
          <img className="instagram" src={img10} alt="avatar" />
        </div>
        <div className="dua">
          <form >
            <img className="cari" src={img1} alt="avatar" />
            <input type="text" placeholder="Search.." name="search" />
          </form>
        </div>
        <div className="tiga">
          <img className="iconnav" src={img2} alt="avatar" />
          <img className="iconnav" src={img3} alt="avatar" />
          <img className="iconnav" src={img1} alt="avatar" />
          <img className="iconnav" src={img4} alt="avatar" />
          <img className="iconnav" src={img5} alt="avatar" />
        </div>
      </div>
      <div className="isi">
        <div className="kiri">
          <div className="storybar">
            <div className="story">
              <img src={img6} alt="" />
              <img src={img6} alt="" />
              <img src={img6} alt="" />
              <img src={img6} alt="" />
              <img src={img6} alt="" />
              <img src={img6} alt="" />
              <img src={img6} alt="" />
              <img src={img6} alt="" />
            </div>
          </div>
          <div className="post">
            <div className="postbar">
              <div className="navpost">
                <img className="iconpost" src={img7} alt="" />
                <span>hey</span>
              </div>
              <div className="menu">
                <span>ooo</span>
              </div>
            </div>
            <div className="isipost">
              <img className="postpic" src={img7} alt="" />
            </div>
            <div className="reactpost">
              <div className="respon">
                <img className="iconreact" src={img4} alt="" />
                <img className="iconreact" src={img8} alt="" />
                <img className="iconreact" src={img3} alt="" />
              </div>
              <div className="keep">
                <img className="iconreact" src={img9} alt="" />
              </div>
            </div>
            <div className="likepost">
              <span>368 likes</span>
            </div>
            <div className="statuspost">
              <span>salmonella</span>
              idgaf
            </div>
            <div className="timepost">
              1  HOUR AGO
            </div>
            <div className="komentar">
              <div className="coment">
                <img className="" src={img11} alt="" />
                <span>Add a comment...</span>
              </div>
              <div className="kirim">
                Post
              </div>
            </div>
          </div>

        </div>
        <div className="tengah">
          anu
        </div>
        <div className="kanan">
          <div className="isilah">
            <div className="userprofile">
              <div className="profile">
                <img className="profpict" src={img7} alt="" />
              </div>
              <div className="user">
                <span>Salmonella</span>
                <span>UwU</span>
              </div>
              <div className="spacer"></div>
              <div className="action">
                <span>switch</span>
              </div>
            </div>
            <div className="sugestion">
              <span>sugestion</span>
            </div>
            <button onClick={() => props.onLogout()}>Logout</button>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
