import React from 'react';
import './App.css';
import Header from './components/Header.js';
import Stories from './components/Stories.js';
import Footer from './components/Footer.js';
import Content from './components/Content.js';

function App() {

  const data = [
    {
      img: "https://i.pinimg.com/564x/5f/9f/b0/5f9fb0759919c1de610a28bc97e7a237.jpg",
      name: "Angela"
    },
    {
      img: "https://i.pinimg.com/236x/43/0b/78/430b7802041a41eababcffb9223bbf72.jpg",
      name: "Jhon"
    },
    {
      img: "https://i.pinimg.com/236x/9d/69/93/9d6993fe898d2bbf89c90b79aaca566a.jpg",
      name: "Darlene"
    },
    {
      img: "https://i.pinimg.com/236x/b3/ad/94/b3ad94f9417d8c33feff75c31df7ca8e.jpg",
      name: "Elliot"
    },
    {
      img: "https://i.pinimg.com/236x/45/11/f6/4511f6491dbf746553b7e21d1eccdb44.jpg",
      name: "Phillip"
    },
    {
      img: "https://i.pinimg.com/236x/67/e6/78/67e678ffda4d9868262474ce13adb268.jpg",
      name: "Tyrell"
    },
    {
      img: "https://i.pinimg.com/236x/20/83/09/2083092e28fd8b90ac43e8cf1c94091c.jpg",
      name: "Hannah"
    },
    {
      img: "https://i.pinimg.com/236x/05/b9/1b/05b91b48a18de49942c5bb15dcc8efd6.jpg",
      name: "DedZombie"
    },
    {
      img: "https://i.pinimg.com/236x/75/d7/c0/75d7c0cda928167e930a1ec32c05da27.jpg",
      name: "NightOwl"
    },
    {
      img: "https://i.pinimg.com/236x/a4/99/7b/a4997b86516955f61511d04713fccc1e.jpg",
      name: "Mario"
    },
    {
      img: "https://i.pinimg.com/236x/04/c7/30/04c730022cc296c810806040476ddd9c.jpg",
      name: "DedInside"
    }
  ]

  return (
    <>
      <div className="con">
        <div className="header">
          <Header/>
        </div>
        <div className="stories">
          <div className="sd">
            <div className="story">
                <div style={
                  {width:"70px",
                  margin: "8px",
                  borderRadius: "50%",
                  height: "70px", 
                  position: "relative",
                  backgroundRepeat: "no-repeat" ,background: "url('https://yt3.ggpht.com/ytc/AKedOLSKaXhsJjVcucr6ZGs4aFaBu_Qy-oY5z1KBLVGh0Q=s88-c-k-c0x00ffffff-no-rj')"}
                }>
                  <i className="fas fa-plus-circle"></i>
                </div>
                <p className="name">Your Story</p>
            </div>
            {
              data.map(
                (d, i) => {
                  return <Stories image={d.img} name={d.name} key={i}/>
                }
              )
            }
          </div>
        </div>
        <div className="content">
          <div className="c">
            {
              data.map(
                (d, i) => {
                  return <Content post={d.img} usrname={d.name} key={i}/>
                }
              )
            }
          </div>
        </div>
        <div className="footer">
          <Footer/>
        </div>
      </div>
    </>    
  );
}

export default App;
