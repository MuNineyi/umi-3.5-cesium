import React, {useEffect, useRef} from 'react';
import styles from './hero.less';
import * as Cesium from 'cesium';
import { connect, HeroModelState, ConnectProps } from "umi";
import {Ion} from "cesium";
// import 'cesium/Source/Widgets/widgets.css';
// import hero from "@/models/hero";

interface PageProps extends ConnectProps {
  hero: HeroModelState;
}


const Hero: React.FC<PageProps> = (props) => {
    console.log(props.hero);
    const divRef = useRef<HTMLDivElement>(null);
    let viewer;
    Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3ZDE3YTE1Ni1iYTJjLTRjYjAtYTIyYi0zMDQ0M2UwN2NlNmQiLCJpZCI6NTg3MjcsImlhdCI6MTYyMzM4OTE3NH0.PS43TPHDe7ewqpHVLZXU4rrNC9E132RWas92ql_1jPI';
    useEffect(() => {
      viewer = new Cesium.Viewer(divRef.current as Element, {
        animation: true, // 动画控制，默认true
      })
    })
    return (
        <div>
            {/*<h1 className={styles.title}>Page hero</h1>*/}
            {/*<h2>This is {props.hero.name}</h2>*/}
          <div ref={divRef}/>
        </div>
    )
}

export default Hero;
// export default connect(({ hero } : { hero: HeroModelState }) => ({ hero }))(Hero);
