import React, { Component } from 'react'
import mainLogo from'../images/initialGif.gif';
import about from'../images/about.jpg';
import bornAndRaised from'../images/bornAndRaised.jpg';
import jobs from'../images/jobs.jpg';
import play from'../images/likeToPlay.jpg';
import lastone from'../images/lastone.png';
import { ParallaxProvider  } from 'react-scroll-parallax';
class Page extends Component {

		state = {
			color: 'white',
			aboutMe: false,
			work : false,
			contato: false,
		}
	
		listenScrollEvent = e => {
			if (window.scrollY > 550 && window.scrollY < 1500) {
				this.setState({aboutMe: true});
				this.setState({contato: false});
				this.setState({work: false});
			} else if (window.scrollY > 1501 && window.scrollY < 2200) {
				this.setState({aboutMe: false});
				this.setState({work: true});
				this.setState({contato: false});
		
			}		else if (window.scrollY > 2201) {
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
					<ParallaxProvider>
				<div>
					<div style={{justifyContent:'flex-start', position:'fixed', width: '100%', zIndex:2,cursor:'pointer', backgroundColor:'#fbfbfb', height:100, display:'flex', alignItems:'center',  boxShadow:' 0px 4px 10px 3px rgba(34,32,32,0.3)'}}>
						<div className="nameHeader" style={{ marginLeft: 20,display:'flex', flexDirection:'row', alignItems:'center'}}>
							<span style={{fontFamily:'fantasy', fontSize: 34, color:'#e45d3b', fontWeight:'lighter'}}>Renan Campos</span>
							<span  style={{fontFamily:'monospace', fontSize: 24, color:'#f5c639'}}>|</span>
							<span style={{fontFamily:'monospace', fontSize: 24, color:'#f5c639'}}>Web Developer</span>
						</div>	
						{ this.state.aboutMe === true && <span style={{fontFamily:'monospace', paddingLeft:200, fontSize: 24, color:'#425e66'}}>Sobre Mim</span>}		
						{ this.state.work === true && <span style={{fontFamily:'monospace', paddingLeft:200, fontSize: 24, color:'#425e66'}}>Trabalho e Educação</span>}		
						{ this.state.contato === true && <span style={{fontFamily:'monospace', paddingLeft:200, fontSize: 24, color:'#425e66'}}>Entre em contato comigo</span>}		
					
					</div>


					
					<div style={{width:'100%', zIndex:1}}>
						<img  style={{width:'100%'}} src={mainLogo} />
					</div>
					<div style={{width:'100%', marginTop:-4}}>
						<img  style={{width:'100%'}} src={bornAndRaised}/>
					</div>
					<div style={{width:'100%', marginTop:-4}}>
						<img  style={{width:'100%'}} src={jobs}/>
					</div>
					<div style={{width:'100%', marginTop:-4}}>
						<img  style={{width:'100%'}} src={lastone}/>
					</div>
				</div>
				</ParallaxProvider>
			)
    }
}
export default Page