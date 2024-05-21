import React from 'react'
import Main from '../components/section/Main'

import { Today } from '../data/Today'
import { Asia } from '../data/Asia'
import { Europe } from '../data/Europe'
import { NorthAmerica } from '../data/NorthAmerica'
import { SouthAmerica } from '../data/SouthAmerica'
import { Africa } from '../data/Africa'
import { Oceania } from '../data/Oceania'
import { WorldWar } from '../data/WorldWar'

import VideoSlider from '../components/video/VideoSlider'

// import TodayCont from '../components/contents/TodayCont'
// import AsiaCont from '../components/contents/AsiaCont'
// import EuropeCont from '../components/contents/EuropeCont'
// import NorthAmericaCont from '../components/contents/NorthAmericaCont'
// import SouthAmericaCont from '../components/contents/SouthAmericaCont'
// import AfricaCont from '../components/contents/AfricaCont'
// import OceaniaCont from '../components/contents/OceaniaCont'
// import WorldWarCont from '../components/contents/WorldWarCont'

const Home = () => {
    return (
        <Main
            title="각 대륙별 역사를 다루는 사이트"
            description="각 대륙별 역사를 다루는 사이트입니다.">

            <VideoSlider videos={Today} id="TodayCont" title="오늘의 추천" />
            <VideoSlider videos={Asia} id="AsiaCont" title="아시아" />
            <VideoSlider videos={Europe} id="EuropeCont" title="유럽" />
            <VideoSlider videos={NorthAmerica} id="NorthAmericaCont" title="북아메리카" />
            <VideoSlider videos={SouthAmerica} id="SouthAmericaCont" title="남아메리카" />
            <VideoSlider videos={Africa} id="AfricaCont" title="아프리카" />
            <VideoSlider videos={Oceania} id="OceaniaCont" title="오세아니아" />
            <VideoSlider videos={WorldWar} id="WorldWarCont" title="세계대전" />

            {/* <TodayCont />
            <AsiaCont />
            <EuropeCont />
            <NorthAmericaCont />
            <SouthAmericaCont />
            <AfricaCont />
            <OceaniaCont />
            <WorldWarCont /> */}
        </Main>
    )
}

export default Home