import * as React from "react"
import { useState, useCallback, useRef } from "react";
import { View,Text,Button,Alert,ScrollView } from "react-native"
import Header from './components/Header'
import {CorpoProjeto,CorpoProjetoP,Titulo,Sobre,Sinop,SinopHis,Data,Gen,Dese,Footer} from './components/Style'
import YoutubePlayer from "react-native-youtube-iframe";
export default function App(){
  const [playing, setPlaying] = useState(false);
  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
    }
  }, []);
  return(
    <CorpoProjetoP>
      <ScrollView>
      <Header/>
      <CorpoProjeto>
      <Titulo>1.Hollow knight</Titulo>
      <YoutubePlayer
        height={240}
        play={playing}
        videoId={"UAO2urG23S4"}
        onChangeState={onStateChange}
      />
      <Sobre>Sobre o Jogo</Sobre>
      <Sinop>Sinopse</Sinop>
      <SinopHis>Forje seu caminho em Hollow Knight! Uma aventura de ação épica em um vasto reino arruinado de insetos e heróis. Explore cavernas serpenteantes, lute contra criaturas malignas e alie-se a insetos bizarros num estilo clássico 2D desenhado à mão.</SinopHis>
      <Dese>Desenvolvedora: Team Cherry</Dese>
      <Gen>Gênero: Ação, Aventura, Indie</Gen>
      <Data>Data de lançamento: 24 de fev de 2017</Data>
      <Titulo>2.Octopath traveler</Titulo>
      <YoutubePlayer
        height={240}
        play={playing}
        videoId={"ZQD9h8gUXb0"}
        onChangeState={onStateChange}
      />
      <Sobre>Sobre o Jogo</Sobre>
      <Sinop>Sinopse</Sinop>
      <SinopHis>Oito viajantes. Oito aventuras. Oito personagens para jogar. Embarque em uma jornada épica pelo vasto e maravilhoso mundo de Orsterra e conheça as histórias cativantes de cada um dos oito viajantes.</SinopHis>
      <Dese>Desenvolvedora: Square Enix</Dese>
      <Gen>Gênero: RPG</Gen>
      <Data>Data de lançamento: 7 de jun de 2019</Data>
      <Titulo>3.Skyrim</Titulo>
      <YoutubePlayer
        height={240}
        play={playing}
        videoId={"JSRtYpNRoN0"}
        onChangeState={onStateChange}
      />
      <Sobre>Sobre o Jogo</Sobre>
      <Sinop>Sinopse</Sinop>
      <SinopHis>Vencedor de mais de 200 prêmios de Jogo do Ano, Skyrim Special Edition dá vida à fantasia épica com detalhes impressionantes. A Edição Especial inclui o jogo e complementos aclamados pela crítica com recursos totalmente novos, como arte e efeitos remasterizados, raios divinos volumétricos, profundidade de campo dinâmica, espaço de tela</SinopHis>
      <Dese>Desenvolvedora: Bethesda Game Studios</Dese>
      <Gen>Gênero: RPG</Gen>
      <Data>Data de lançamento: 27 de out de 2016</Data>
      <Titulo>4.METAL GEAR RISING: REVENGEANCE</Titulo>
      <YoutubePlayer
        height={240}
        play={playing}
        videoId={"EMCkbDnaTDM"}
        onChangeState={onStateChange}
      />
      <Sobre>Sobre o Jogo</Sobre>
      <Sinop>Sinopse</Sinop>
      <SinopHis>Desenvolvido pela Kojima Productions e PlatinumGames, METAL GEAR RISING: REVENGEANCE leva a renomada franquia METAL GEAR a um novo território emocionante com uma experiência de ação totalmente nova. O jogo combina perfeitamente ação pura e narrativa épica que envolve Raiden</SinopHis>
      <Dese>Desenvolvedora: PlatinumGames</Dese>
      <Gen>Gênero: Ação</Gen>
      <Data>Data de lançamento: 9 de jan de 2014</Data>
      <Titulo>5.Minecraft</Titulo>
      <YoutubePlayer
        height={240}
        play={playing}
        videoId={"jMe3tdyjouM"}
        onChangeState={onStateChange}
      />
      <Sobre>Sobre o Jogo</Sobre>
      <Sinop>Sinopse</Sinop>
      <SinopHis>um jogo eletrônico dos gêneros sandbox e sobrevivência que não possui objetivos específicos a serem alcançados, permitindo aos jogadores uma grande liberdade de escolha de como jogá-lo. No entanto, existe um sistema de conquistas, conhecido como "progressos" na edição Java.</SinopHis>
      <Dese>Desenvolvedora: Mojang</Dese>
      <Gen>Gênero: Sandbox</Gen>
      <Data>Data de lançamento: 18 de novembro de 2011</Data>
      <Titulo>6.The witcher 3</Titulo>
      <YoutubePlayer
        height={240}
        play={playing}
        videoId={"nBT2SP21f3Q"}
        onChangeState={onStateChange}
      />
      <Sobre>Sobre o Jogo</Sobre>
      <Sinop>Sinopse</Sinop>
      <SinopHis>Enquanto a guerra assola todos os Reinos do Norte, você enfrenta o maior conflito de sua vida: ir em busca da criança da profecia, uma arma senciente capaz de alterar o mundo.</SinopHis>
      <Dese>Desenvolvedora: CD PROJEKT RED</Dese>
      <Gen>Gênero: RPG</Gen>
      <Data>Data de lançamento: 18 de mai de 2015</Data>
      <Titulo>7.Terraria</Titulo>
      <YoutubePlayer
        height={240}
        play={playing}
        videoId={"6nUvWkD8rAE"}
        onChangeState={onStateChange}
      />
      <Sobre>Sobre o Jogo</Sobre>
      <Sinop>Sinopse</Sinop>
      <SinopHis>Cave, lute, explore, construa! Nada é impossível neste jogo de aventura cheio de ação. Pacote de quatro também disponível!</SinopHis>
      <Dese>Desenvolvedora: Re-Logic</Dese>
      <Gen>Gênero: Ação, Aventura, Indie, RPG</Gen>
      <Data>Data de lançamento: 16 de mai de 2011</Data>
      <Titulo>8.Final fantasy XV</Titulo>
      <YoutubePlayer
        height={240}
        play={playing}
        videoId={"CNM6o9um1dc"}
        onChangeState={onStateChange}
      />
      <Sobre>Sobre o Jogo</Sobre>
      <Sinop>Sinopse</Sinop>
      <SinopHis>Parta nesta jornada, agora com qualidade definitiva. Com muito conteúdo bônus e suporte a gráficos em Ultra High-Resolution e HDR 10, agora você pode viver a experiência maravilhosa e bem feita de FINAL FANTASY XV como nunca antes.</SinopHis>
      <Dese>Desenvolvedora: Square Enix</Dese>
      <Gen>Gênero: Action Rpg</Gen>
      <Data>Data de lançamento: 6 de mar de 2018</Data>
      <Titulo>9.Devil may cry 5</Titulo>
      <YoutubePlayer
        height={240}
        play={playing}
        videoId={"mF3dN6fOJTo"}
        onChangeState={onStateChange}
      />
      <Sobre>Sobre o Jogo</Sobre>
      <Sinop>Sinopse</Sinop>
      <SinopHis>O melhor caçador de demônios está de volta com estilo, no jogo que os fãs de ação estavam esperando	</SinopHis>
      <Dese>Desenvolvedora: CAPCOM Co., Ltd.</Dese>
      <Gen>Gênero: Ação</Gen>
      <Data>Data de lançamento: 7 de mar de 2019</Data>
      <Titulo>10.The Binding of Isaac</Titulo>
      <YoutubePlayer
        height={240}
        play={playing}
        videoId={"27Le3kOOFQk"}
        onChangeState={onStateChange}
      />
      <Sobre>Sobre o Jogo</Sobre>
      <Sinop>Sinopse</Sinop>
      <SinopHis>The Binding of Isaac: Rebirth é um RPG de ação gerado aleatoriamente com elementos pesados do tipo Rogue. Seguindo Isaac em sua jornada, os jogadores encontrarão tesouros bizarros que mudam a forma de Isaac, dando-lhe habilidades sobre-humanas e permitindo que ele lute contra multidões de criaturas misteriosas, descubra segredos</SinopHis>
      <Dese>Desenvolvedora: Nicalis, Inc., Edmund McMillen</Dese>
      <Gen>Gênero: Ação</Gen>
      <Data>Data de lançamento: 4 de nov de 2014</Data>
      <View style={{marginTop:"10%"}}>
        <Footer>Feito por Julian Silva de Almeida</Footer>
      </View>
      </CorpoProjeto>
      </ScrollView>
    </CorpoProjetoP>
  )
}
