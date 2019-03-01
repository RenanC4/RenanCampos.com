import React, {Component} from 'react'
import mainLogo from '../images/initialGif.gif';
import ife from '../images/ife.png';
import ibm from '../images/ibmLogo.png';
import mb from '../images/Mblabs.png';

import freela from '../images/freela.png';
import assist from '../images/assist.png';

import bornAndRaised from '../images/bornAndRaised.jpg';
import jobs from '../images/work.jpeg';
import me from '../images/renanc.png';

import last from '../images/lastone.png';
import {Parallax} from "react-parallax";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class Page extends Component {

  state = {
    color: 'white',
    aboutMe: false,
    work: false,
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

    } else if (window.scrollY > 1501) {
      this.setState({aboutMe: false});
      this.setState({work: false});
      this.setState({contato: true});

    } else {
      this.setState({just: 'center'})
      this.setState({aboutMe: false});
      this.setState({work: false});
      this.setState({contato: false});
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent)
    console.log('Achou que ia encontrar Erros?')
    console.log('ACHOU ERRADO OTÁRIO')
  }

  render() {
    return (
      <div style={styles}>
        <div style={{
          justifyContent: 'flex-start',
          position: 'fixed',
          width: '100%',
          zIndex: 2,
          cursor: 'pointer',
          backgroundColor: '#fbfbfb',
          height: 80,
          display: 'flex',
          alignItems: 'center',
          boxShadow: ' 0px 4px 10px 3px rgba(34,32,32,0.3)'
        }}>
          <div className="nameHeader"
               style={{marginLeft: 20, display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
            <span
              style={{fontFamily: 'fantasy', fontSize: 34, color: '#e45d3b', fontWeight: 'lighter'}}>Renan Campos</span>
            <span style={{fontFamily: 'monospace', fontSize: 24, color: '#f5c639'}}>|</span>
            <span style={{fontFamily: 'monospace', fontSize: 24, color: '#f5c639'}}>Web Developer</span>
          </div>
          {this.state.aboutMe === true &&
          <span style={{fontFamily: 'monospace', paddingLeft: 150, fontSize: 24, color: '#425e66'}}>Sobre Mim</span>}
          {this.state.work === true && <span style={{
            fontFamily: 'monospace',
            paddingLeft: 150,
            fontSize: 24,
            color: '#425e66'
          }}>Trabalho e Educação</span>}
          {this.state.contato === true &&
          <span style={{fontFamily: 'monospace', paddingLeft: 150, fontSize: 24, color: '#425e66'}}>Entre em contato comigo</span>}

        </div>

        <Parallax style={{paddingTop: 250}} bgImage={mainLogo} bgWidth="auto" strength={500}>
          <div style={{height: 500}}>
          </div>
        </Parallax>

        <Parallax bgImage={bornAndRaised} strength={500}>
          <div style={{height: 600}}>
            <div style={{
              marginTop: '50px',
              marginLeft: '50px',
              borderRadius: '5px 5px 5px 5px',
              marginRight: '10%',
              backgroundColor: "rgba(255, 255, 255, 0.9)"
            }}>
              <div style={{padding: '15px',}}>
                <span style={{
                  fontSize: '38pt',
                  color: "#323232",
                  fontFamily: 'Impact, fantasy'
                }}>Olá, sou o Renan</span><br/>
                <span style={{fontSize: '12pt', color: "#323232", fontFamily: 'cursive'}}>full stack web developer de Hortolândia, São Paulo. </span><br/>
              </div>
              <div style={{textAlign: 'left', display: 'flex',}}>
                <div className="Image" style={{padding: '5px 15px 5px 15px',}}><img
                  style={{width: '300px', height: '350px'}} src={me}/></div>
                <span style={{fontSize: '12pt', color: "#323232", fontFamily: 'cursive'}}>
                  Entrei no mundo do TI, logo que sai do ensino médio, ainda um pouco sem saber o que fazer da vida. Iniciei o curso de Informática na Escola Técnica de São Paulo, um curso completo, com uma maior ênfase em programação, mas minha carreira como desenvolvedor surgiu logo após trabalhar por 1 ano como suporte técnico na própria instituição que estudei. <br/>
							Comecei a fazer pequenos sistemas e sites para amigos e conhecidos, não sabia na época, mas eu era um Freelancer. <br/><br/>
							No ano seguinte, após terminar o curso técnico, ingressei no curso superior de Tecnologia em Análise e desenvolvimento de sistemas no Instituto Federal de Educação Ciência e Tecnologia de São Paulo. <br/><br/>
							Logo após iniciar o curso, consegui um estágio na IBM, a empresa que via nos filmes de tecnologia, como 'Piratas do vale do silício' e Jobs, empresa do qual estudei as tecnologias e já tinha certa admiração antes mesmo de ter a oportunidade de trabalhar lá.<br/><br/>
							Trabalhei 1 ano e 9 meses como estagiário em Analise de Sistemas Distribuídos, com sistemas operacionais Unix (Red-Hat Linux e AIX). Porém, o caminho que escolhi para minha carreira inicialmente, é o de desenvolvedor de software, estudei javascript e seus Frameworks, ux/ui, participo de Hackatons, Meetups e fiz todo um roadmap para me tornar um desenvolvedor... e deu certo.<br/><br/>
                </span>
              </div>
              <div className="RodapeText" style={{textAlign: 'left', marginLeft: 15, paddingBottom: 15,}}>
                <span style={{fontSize: '12pt', color: "#323232", fontFamily: 'cursive'}}>Hoje trabalho como Desenvolvedor Full-Stack em uma Software House, trabalho com ReactJS, React Native e C#... Bem, além disso já ministrei aulas de inglês e até ja fui padeiro... Esse é um pequeno resumo do que eu fiz até hoje, até o próximo passo. =)</span><br/>

              </div>


            </div>
          </div>
        </Parallax>
        <Parallax bgImage={jobs} strength={500}>
          <div style={{height: 600}}>
            <div style={{
              marginLeft: '50%',
              height: '100%',
              borderRadius: '5px 0px 0px 5px',
              backgroundColor: "rgba(255, 255, 255, 0.9"
            }}>
              <div style={{textAlign: 'left', padding: '50px 50px', display: 'flex', flexDirection: 'column'}}>
                <div className='ife' style={{display: 'flex', flexDirection: 'row'}}>
                  <div className="ifLogo" style={{flexGrow: 1}}>
                    <img style={{width: 100}} src={ife} alt="ifsp logo"/>
                  </div>
                  <div style={{flexGrow: 2, marginLeft: 10, marginTop: 10}}>
                    <span style={{fontSize: '14pt', color: "#323232", fontFamily: 'cursive'}}>Sou formado em Análise e Desenvolvimento de Sistemas pelo Instituto Federal de Educação, Ciência e Tecnologia de São Paulo.</span>
                  </div>
                </div>
                <div className='imb' style={{display: 'flex', flexDirection: 'row', paddingTop: 30,}}>
                  <div style={{flexGrow: 2,}}>
                    <span style={{fontSize: '14pt', color: "#323232", fontFamily: 'cursive'}}>
                      Ja Fui Analista de Sistemas UNIX na IBM
                    </span>
                  </div>
                  <div className="ibm" style={{flexGrow: 1}}>
                    <img style={{width: 100}} src={ibm} alt="ibm logo"/>
                  </div>
                </div>
                <div className='MB' style={{display: 'flex', flexDirection: 'row', paddingTop: 30,}}>

                  <div className="mb" style={{flexGrow: 1}}>
                    <img style={{width: 100}} src={mb} alt="ibm logo"/>
                  </div>
                  <div style={{flexGrow: 2, marginTop: 30}}>
                    <span style={{fontSize: '14pt', color: "#323232", fontFamily: 'cursive'}}>
                        Ja Fui Desenvolvedor Na MBLABS Aplicativos
                    </span>
                  </div>


                </div>
                <div className='assist' style={{display: 'flex', flexDirection: 'row', paddingTop: 30,}}>

                  <div style={{flexGrow: 2, marginTop: 10}}>
                    <span style={{fontSize: '14pt', color: "#323232", fontFamily: 'cursive'}}>
                      e atualmente sou Desenvolvedor na Assist Software
                    </span>
                  </div>

                  <div className="ass" style={{flexGrow: 1}}>
                    <img style={{width: 110}} src={assist} alt="ibm logo"/>
                  </div>

                </div>

                <div className='assist' style={{display: 'flex', flexDirection: 'row', paddingTop: 30,}}>
                  <div className="ass" style={{flexGrow: 1}}>
                    <img style={{width: 150}} src={freela} alt="ibm logo"/>
                  </div>
                  <div style={{flexGrow: 2, marginTop: 30}}>
                    <span style={{fontSize: '14pt', color: "#323232", fontFamily: 'cursive'}}>
                      fora os Freela...
                    </span>
                  </div>


                </div>

              </div>
            </div>
          </div>
        </Parallax>
        <Parallax bgImage={last} strength={500}>
          <div style={{height: 600}}>
            <div style={{
              marginRight: '50%',
              height: '100%',
              borderRadius: '5px 0px 0px 5px',
              backgroundColor: "rgba(255, 255, 255, 0.9"
            }}>
              <div style={{padding: '50px 50px',}}>
                <span style={{fontSize: '38pt', color: "#323232", fontFamily: 'Impact, fantasy'}}>Entre em contato comigo</span><br/>
                <span style={{fontSize: '20pt', color: "#323232", fontFamily: 'cursive'}}>type and scrambled it to make a type specimen book.type and scrambled it to make a type specimen book.type and scrambled it to make a type specimen book.type and scrambled it to make a type specimen book.type and scrambled it to make a type specimen book.type and scrambled it to make a type specimen book.type and scrambled </span><br/>
              </div>
            </div>
          </div>
        </Parallax>
      </div>


    )
  }
}

export default Page