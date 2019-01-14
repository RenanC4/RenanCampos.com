import React, { Component } from 'react'
import mainLogo from'../images/initialGif.gif';
import about from'../images/about.jpg';
import bornAndRaised from'../images/bornAndRaised.jpg';
import jobs from'../images/work.jpeg';
import play from'../images/likeToPlay.jpg';
import lastone from'../images/lastone.png';
import { Parallax } from "react-parallax";

const styles = {
	fontFamily: "sans-serif",
	textAlign: "center"
  };

class Page extends Component {

		state = {
			color: 'white',
			aboutMe: false,
			work : false,
			contato: false,
		}
	
		listenScrollEvent = e => {
			if (window.scrollY > 550 && window.scrollY < 1000) {
				this.setState({aboutMe: true});
				this.setState({contato: false});
				this.setState({work: false});
			} else if (window.scrollY > 1001 && window.scrollY < 1500) {
				this.setState({aboutMe: false});
				this.setState({work: true});
				this.setState({contato: false});
		
			}		else if (window.scrollY > 1501) {
				this.setState({aboutMe: false});
				this.setState({work: false});
				this.setState({contato: true});
		
			}		
			else {
				this.setState({just: 'center'})
				this.setState({aboutMe: false});
				this.setState({work: false});
				this.setState({contato: false});
			}
		}
	
		componentDidMount() {
			window.addEventListener('scroll', this.listenScrollEvent)
		}

    render() {
        return (
			<div style={styles}>
<div style={{justifyContent:'flex-start', position:'fixed', width: '100%', zIndex:2,cursor:'pointer', backgroundColor:'#fbfbfb', height:80, display:'flex', alignItems:'center',  boxShadow:' 0px 4px 10px 3px rgba(34,32,32,0.3)'}}>
						<div className="nameHeader" style={{ marginLeft: 20,display:'flex', flexDirection:'row', alignItems:'center'}}>
							<span style={{fontFamily:'fantasy', fontSize: 34, color:'#e45d3b', fontWeight:'lighter'}}>Renan Campos</span>
							<span  style={{fontFamily:'monospace', fontSize: 24, color:'#f5c639'}}>|</span>
							<span style={{fontFamily:'monospace', fontSize: 24, color:'#f5c639'}}>Web Developer</span>
						</div>	
						{ this.state.aboutMe === true && <span style={{fontFamily:'monospace', paddingLeft:150, fontSize: 24, color:'#425e66'}}>Sobre Mim</span>}		
						{ this.state.work === true && <span style={{fontFamily:'monospace', paddingLeft:150, fontSize: 24, color:'#425e66'}}>Trabalho e Educação</span>}		
						{ this.state.contato === true && <span style={{fontFamily:'monospace', paddingLeft:150, fontSize: 24, color:'#425e66'}}>Entre em contato comigo</span>}		
					
					</div>

			<Parallax style={{paddingTop:250}}bgImage={mainLogo} bgWidth="auto" strength={400}>
			<div style={{ height:400 }}>
			</div>
		  </Parallax>
		  
			<Parallax bgImage={bornAndRaised}  strength={500}>
			<div style={{ height: 600 }}>
			<div style={{ marginTop: '10%',  marginLeft: '10%', borderRadius:'5px 5px 5px 5px', marginRight: '10%', backgroundColor: "rgba(0, 0, 0, 0.7)"}}>
							<div style={{ padding:'50px 50px',  }}>
								<span style={{fontSize:'38pt', color:"#fff", fontFamily:'Impact, fantasy'}}>Olá, sou o Renan</span><br/>
								<span style={{fontSize:'20pt', color:"#fff", fontFamily:'cursive'}}>type and scrambled it to make a type specimen book.type and scrambled it to make a type specimen book.type and scrambled it to make a type specimen book.type and scrambled it to make a type specimen book.type and scrambled it to make a type specimen book.type and scrambled it to make a type specimen book.type and scrambled </span><br/>
							</div>
						</div>
			</div>
		  </Parallax>
		  <Parallax bgImage={jobs} strength={500}>
			<div style={{ height: 600 }}>
			<div style={{marginLeft: '50%', height:'100%', backgroundColor: "rgba(0, 0, 0, 0.7)"}}>
							<div style={{ padding:'50px 50px',  }}>
								<span style={{fontSize:'38pt', color:"#fff", fontFamily:'Impact, fantasy'}}>Olá, sou o Renan</span><br/>
								<span style={{fontSize:'20pt', color:"#fff", fontFamily:'cursive'}}>type and scrambled it to make a type specimen book.type and scrambled it to make a type specimen book.type and scrambled it to make a type specimen book.type and scrambled it to make a type specimen book.type and scrambled it to make a type specimen book.type and scrambled it to make a type specimen book.type and scrambled </span><br/>
							</div>
						</div>
			</div>
		  </Parallax>
		  <Parallax bgImage={lastone} strength={500}>
			<div style={{ height: 600 }}>
			<div style={{marginRight: '50%', height:'100%', backgroundColor: "rgba(0, 0, 0, 0.7)"}}>
							<div style={{ padding:'50px 50px',  }}>
								<span style={{fontSize:'38pt', color:"#fff", fontFamily:'Impact, fantasy'}}>Olá, sou o Renan</span><br/>
								<span style={{fontSize:'20pt', color:"#fff", fontFamily:'cursive'}}>type and scrambled it to make a type specimen book.type and scrambled it to make a type specimen book.type and scrambled it to make a type specimen book.type and scrambled it to make a type specimen book.type and scrambled it to make a type specimen book.type and scrambled it to make a type specimen book.type and scrambled </span><br/>
							</div>
						</div>
			</div>
		  </Parallax>
		</div>	  

				
			)
    }
}
export default Page