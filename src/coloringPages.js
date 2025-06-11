import React from 'react';

// This constant will be used to make every part of the canvas blank initially.
export const BLANK_COLOR = '#FFFFFF';

// --- SVG Component Definitions ---
// Each component is adapted to receive `f` (fills) and `o` (onClick handler) props from the main app.

const TeddyBearSVG = ({ f, o }) => (
    <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" className="w-full h-full cursor-default">
        <rect width="500" height="500" fill={f.background} onClick={() => o('background')} style={{ cursor: 'pointer' }} />
        <g id="teddyBearBody" onClick={() => o('body')} style={{ cursor: 'pointer' }}>
            <circle cx="110" cy="280" r="55" fill={f.body} />
            <circle cx="390" cy="280" r="55" fill={f.body} />
            <circle cx="250" cy="320" r="130" fill={f.body} />
            <circle cx="250" cy="150" r="100" fill={f.body} />
        </g>
        <g id="teddyBearEars">
            <circle cx="150" cy="80" r="50" fill={f.body} onClick={(e) => { e.stopPropagation(); o('body'); }} style={{ cursor: 'pointer' }} />
            <circle cx="350" cy="80" r="50" fill={f.body} onClick={(e) => { e.stopPropagation(); o('body'); }} style={{ cursor: 'pointer' }} />
            <circle cx="150" cy="80" r="30" fill={f.innerEars} onClick={(e) => { e.stopPropagation(); o('innerEars'); }} style={{ cursor: 'pointer' }} />
            <circle cx="350" cy="80" r="30" fill={f.innerEars} onClick={(e) => { e.stopPropagation(); o('innerEars'); }} style={{ cursor: 'pointer' }} />
        </g>
        <ellipse cx="250" cy="320" rx="70" ry="80" fill={f.tummyPatch} onClick={() => o('tummyPatch')} style={{ cursor: 'pointer' }} />
        <g id="teddyBearPads" onClick={() => o('pawPads')} style={{ cursor: 'pointer' }}>
            <circle cx="150" cy="420" r="50" fill={f.body} onClick={(e) => { e.stopPropagation(); o('body'); }} />
            <circle cx="350" cy="420" r="50" fill={f.body} onClick={(e) => { e.stopPropagation(); o('body'); }} />
            <circle cx="150" cy="420" r="35" fill={f.pawPads} />
            <circle cx="350" cy="420" r="35" fill={f.pawPads} />
            <circle cx="110" cy="280" r="35" fill={f.pawPads} />
            <circle cx="390" cy="280" r="35" fill={f.pawPads} />
        </g>
        <ellipse cx="250" cy="180" rx="55" ry="40" fill={f.snout} onClick={() => o('snout')} style={{ cursor: 'pointer' }} />
        <path d="M 250 165 l -15 15 l 30 0 z" fill={f.nose} onClick={() => o('nose')} style={{ cursor: 'pointer' }} />
        <g id="teddyBearEyes" onClick={() => o('eyes')} style={{ cursor: 'pointer' }}>
            <circle cx="210" cy="140" r="10" fill={f.eyes} />
            <circle cx="290" cy="140" r="10" fill={f.eyes} />
        </g>
    </svg>
);

const HouseSceneSVG = ({ f, o }) => (
    <svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg" className="w-full h-full cursor-default">
        <rect id="sky" width="800" height="450" fill={f.sky} onClick={() => o('sky')} style={{ cursor: 'pointer' }} />
        <rect id="grass" y="350" width="800" height="100" fill={f.grass} onClick={() => o('grass')} style={{ cursor: 'pointer' }} />
        <circle id="sun" cx="100" cy="100" r="50" fill={f.sun} onClick={() => o('sun')} style={{ cursor: 'pointer' }} />
        <g id="cloud" onClick={() => o('cloud')} style={{ cursor: 'pointer' }}>
            <circle cx="650" cy="120" r="40" fill={f.cloud} />
            <circle cx="700" cy="120" r="50" fill={f.cloud} />
            <circle cx="620" cy="130" r="45" fill={f.cloud} />
            <circle cx="680" cy="140" r="40" fill={f.cloud} />
        </g>
        <rect id="treeTrunk" x="550" y="250" width="40" height="100" fill={f.treeTrunk} onClick={() => o('treeTrunk')} style={{ cursor: 'pointer' }} />
        <circle id="treeLeaves" cx="570" cy="220" r="70" fill={f.treeLeaves} onClick={() => o('treeLeaves')} style={{ cursor: 'pointer' }} />
        <g id="house">
            <rect id="houseWalls" x="200" y="200" width="250" height="150" fill={f.houseWalls} stroke="#5D4037" strokeWidth="3" onClick={() => o('houseWalls')} style={{ cursor: 'pointer' }} />
            <path id="houseRoof" d="M 180 200 L 325 100 L 470 200 Z" fill={f.houseRoof} stroke="#5D4037" strokeWidth="3" onClick={() => o('houseRoof')} style={{ cursor: 'pointer' }} />
            <rect id="houseDoor" x="230" y="270" width="60" height="80" fill={f.houseDoor} stroke="#5D4037" strokeWidth="2" onClick={() => o('houseDoor')} style={{ cursor: 'pointer' }} />
            <circle id="doorKnob" cx="280" cy="310" r="5" fill={f.doorKnob} stroke="#5D4037" strokeWidth="1" onClick={() => o('doorKnob')} style={{ cursor: 'pointer' }} />
            <rect id="windowFrame" x="330" y="240" width="80" height="60" fill={f.windowFrame} stroke="#5D4037" strokeWidth="2" onClick={() => o('windowFrame')} style={{ cursor: 'pointer' }} />
            <rect id="windowGlass" x="335" y="245" width="70" height="50" fill={f.windowGlass} onClick={() => o('windowGlass')} style={{ cursor: 'pointer' }} />
            <line x1="370" y1="245" x2="370" y2="295" stroke="#5D4037" strokeWidth="2" />
            <line x1="335" y1="270" x2="405" y2="270" stroke="#5D4037" strokeWidth="2" />
        </g>
    </svg>
);

const MountainSceneSVG = ({ f, o }) => (
    <svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg" className="w-full h-full cursor-default">
        <rect id="sky" width="800" height="500" fill={f.sky} onClick={() => o('sky')} style={{ cursor: 'pointer' }} />
        <circle id="sun" cx="700" cy="90" r="45" fill={f.sun} onClick={() => o('sun')} style={{ cursor: 'pointer' }} />
        <path id="mountainBack" d="M 0 300 L 150 150 L 300 250 L 450 180 L 600 280 L 800 200 L 800 500 L 0 500 Z" fill={f.mountainBack} onClick={() => o('mountainBack')} style={{ cursor: 'pointer' }} />
        <path id="mountainMiddle" d="M 0 350 L 100 250 L 250 320 L 400 230 L 550 350 L 700 280 L 800 380 L 800 500 L 0 500 Z" fill={f.mountainMiddle} onClick={() => o('mountainMiddle')} style={{ cursor: 'pointer' }} />
        <path id="mountainFront" d="M 0 500 L 0 400 L 200 300 L 350 400 L 500 320 L 650 450 L 800 400 L 800 500 Z" fill={f.mountainFront} onClick={() => o('mountainFront')} style={{ cursor: 'pointer' }} />
        <g id="trees" onClick={() => o('trees')} style={{ cursor: 'pointer' }}>
            <polygon points="100,420 130,350 160,420" fill={f.trees} />
            <rect x="120" y="420" width="20" height="30" fill={f.treeTrunk} onClick={(e)=>{e.stopPropagation(); o('treeTrunk');}} />
            <polygon points="220,450 260,370 300,450" fill={f.trees} />
            <rect x="250" y="450" width="20" height="40" fill={f.treeTrunk} onClick={(e)=>{e.stopPropagation(); o('treeTrunk');}}/>
            <polygon points="600,460 630,400 660,460" fill={f.trees} />
            <rect x="620" y="460" width="20" height="30" fill={f.treeTrunk} onClick={(e)=>{e.stopPropagation(); o('treeTrunk');}}/>
        </g>
        <path id="river" d="M 400 500 C 350 450, 450 400, 500 350" stroke={f.river} strokeWidth="40" fill="none" strokeLinecap="round" onClick={() => o('river')} style={{ cursor: 'pointer' }} />
    </svg>
);

const CastleSVG = ({ f, o }) => (
    <svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" className="w-full h-full cursor-default">
        <rect id="sky" width="800" height="600" fill={f.sky} onClick={() => o('sky')} style={{ cursor: 'pointer' }} />
        <path id="ground" d="M 0 450 C 200 440, 600 460, 800 450 L 800 600 L 0 600 Z" fill={f.ground} onClick={() => o('ground')} style={{ cursor: 'pointer' }} />
        <g id="castleTowers" onClick={() => o('castleTowers')} style={{ cursor: 'pointer' }}>
            <rect x="100" y="200" width="150" height="300" fill={f.castleTowers} />
            <rect x="550" y="200" width="150" height="300" fill={f.castleTowers} />
        </g>
        <g id="castleWalls" onClick={() => o('castleWalls')} style={{ cursor: 'pointer' }}>
            <rect x="250" y="280" width="300" height="220" fill={f.castleWalls} />
            <path d="M 250 280 H 550 V 260 H 520 V 280 H 490 V 260 H 460 V 280 H 430 V 260 H 400 V 280 H 370 V 260 H 340 V 280 H 310 V 260 H 280 V 280 Z" fill={f.castleWalls} />
            <path d="M 100 200 H 250 V 180 H 220 V 200 H 190 V 180 H 160 V 200 H 130 V 180 H 100 Z" fill={f.castleTowers} onClick={(e) => { e.stopPropagation(); o('castleTowers'); }} />
            <path d="M 550 200 H 700 V 180 H 670 V 200 H 640 V 180 H 610 V 200 H 580 V 180 H 550 Z" fill={f.castleTowers} onClick={(e) => { e.stopPropagation(); o('castleTowers'); }} />
        </g>
        <g id="towerRoofs" onClick={() => o('towerRoofs')} style={{ cursor: 'pointer' }}>
            <polygon points="100,200 175,100 250,200" fill={f.towerRoofs} />
            <polygon points="550,200 625,100 700,200" fill={f.towerRoofs} />
        </g>
        <g id="mainGate" onClick={() => o('mainGate')} style={{ cursor: 'pointer' }}>
            <path d="M 350 400 V 500 H 450 V 400 C 450 360, 400 350, 400 350 C 400 350, 350 360, 350 400 Z" fill={f.mainGate} />
        </g>
        <g id="windows" onClick={() => o('windows')} style={{ cursor: 'pointer' }}>
            <rect x="150" y="250" width="50" height="70" fill={f.windows} />
            <rect x="600" y="250" width="50" height="70" fill={f.windows} />
            <rect x="300" y="320" width="40" height="50" fill={f.windows} />
            <rect x="460" y="320" width="40" height="50" fill={f.windows} />
        </g>
        <g id="flags" onClick={() => o('flags')} style={{ cursor: 'pointer' }}>
            <line x1="175" y1="100" x2="175" y2="50" stroke="black" strokeWidth="4" />
            <polygon points="175,50 225,65 175,80" fill={f.flags} />
            <line x1="625" y1="100" x2="625" y2="50" stroke="black" strokeWidth="4" />
            <polygon points="625,50 675,65 625,80" fill={f.flags} />
        </g>
    </svg>
);

const CatSVG = ({ f, o }) => (
    <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" className="w-full h-full cursor-default">
        <rect width="500" height="500" fill={f.background} onClick={() => o('background')} style={{ cursor: 'pointer' }} />
        <path id="tail" d="M 120 300 C 50 250, 100 150, 150 200" stroke={f.tail} strokeWidth="35" fill="none" strokeLinecap="round" onClick={() => o('tail')} style={{ cursor: 'pointer' }} />
        <g id="catBodyGroup" onClick={() => o('body')} style={{ cursor: 'pointer' }}>
            <ellipse id="body" cx="250" cy="330" rx="130" ry="110" fill={f.body} />
            <circle id="head" cx="250" cy="190" r="100" fill={f.body} />
        </g>
        <ellipse id="tummy" cx="250" cy="340" rx="70" ry="90" fill={f.tummy} onClick={() => o('tummy')} style={{ cursor: 'pointer' }} />
        <g id="ears">
            <path d="M 150 120 L 160 50 L 220 110 Z" fill={f.body} onClick={(e) => { e.stopPropagation(); o('body') }} style={{ cursor: 'pointer' }} />
            <path d="M 350 120 L 340 50 L 280 110 Z" fill={f.body} onClick={(e) => { e.stopPropagation(); o('body') }} style={{ cursor: 'pointer' }} />
            <path d="M 165 110 L 168 70 L 205 105 Z" fill={f.innerEars} onClick={(e) => { e.stopPropagation(); o('innerEars') }} style={{ cursor: 'pointer' }} />
            <path d="M 335 110 L 332 70 L 295 105 Z" fill={f.innerEars} onClick={(e) => { e.stopPropagation(); o('innerEars') }} style={{ cursor: 'pointer' }} />
        </g>
        <g id="paws" onClick={() => o('paws')} style={{ cursor: 'pointer' }}>
            <circle cx="180" cy="420" r="35" fill={f.paws} />
            <circle cx="320" cy="420" r="35" fill={f.paws} />
        </g>
        <g id="face">
            <g id="eyes" onClick={() => o('eyes')} style={{ cursor: 'pointer' }}>
                <circle cx="215" cy="180" r="14" fill={f.eyes} />
                <circle cx="285" cy="180" r="14" fill={f.eyes} />
            </g>
            <path id="nose" d="M 250 205 l -10 10 l 20 0 z" fill={f.nose} onClick={() => o('nose')} style={{ cursor: 'pointer' }} />
            <g stroke="black" strokeWidth="2" strokeLinecap="round">
                <path d="M 150 200 Q 180 210, 200 205" fill="none" />
                <path d="M 150 215 Q 180 225, 200 220" fill="none" />
                <path d="M 350 200 Q 320 210, 300 205" fill="none" />
                <path d="M 350 215 Q 320 225, 300 220" fill="none" />
            </g>
        </g>
        <g id="bow" transform="translate(250, 280)" onClick={() => o('bow')} style={{ cursor: 'pointer' }}>
            <circle cx="0" cy="0" r="15" fill={f.bow} />
            <path d="M 10 0 L 50 -30 L 50 30 Z" fill={f.bow} />
            <path d="M -10 0 L -50 -30 L -50 30 Z" fill={f.bow} />
        </g>
    </svg>
);

const UnderwaterSVG = ({ f, o }) => (
    <svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg" className="w-full h-full cursor-default">
        <rect width="800" height="450" fill={f.water} onClick={() => o('water')} style={{ cursor: 'pointer' }} />
        <path id="sand" d="M 0 380 C 150 360, 300 400, 450 380 S 700 360, 800 380 L 800 450 L 0 450 Z" fill={f.sand} onClick={() => o('sand')} style={{ cursor: 'pointer' }} />
        <g id="seaweed" onClick={() => o('seaweed')} style={{ cursor: 'pointer' }} stroke={f.seaweed} strokeWidth="10" fill="none" strokeLinecap="round">
            <path d="M 100 450 C 120 350, 80 300, 110 250" />
            <path d="M 150 450 C 160 380, 130 350, 140 300" />
            <path d="M 700 450 C 680 350, 720 300, 690 250" />
        </g>
        <g id="fish1" transform="translate(200, 150)">
            <ellipse cx="0" cy="0" rx="60" ry="30" fill={f.fish1} onClick={() => o('fish1')} style={{ cursor: 'pointer' }} />
            <path d="M -50 0 C -90 -30, -90 30, -50 0 Z" fill={f.fishFins} onClick={(e) => { e.stopPropagation(); o('fishFins') }} style={{ cursor: 'pointer' }} />
            <circle cx="40" cy="-5" r="5" fill={f.eyes} onClick={(e) => { e.stopPropagation(); o('eyes') }} style={{ cursor: 'pointer' }} />
        </g>
        <g id="fish2" transform="translate(550, 250)">
            <ellipse cx="0" cy="0" rx="80" ry="40" fill={f.fish2} onClick={() => o('fish2')} style={{ cursor: 'pointer' }} />
            <path d="M 70 0 C 120 -40, 120 40, 70 0 Z" fill={f.fishFins} onClick={(e) => { e.stopPropagation(); o('fishFins') }} style={{ cursor: 'pointer' }} />
            <circle cx="-55" cy="-10" r="6" fill={f.eyes} onClick={(e) => { e.stopPropagation(); o('eyes') }} style={{ cursor: 'pointer' }} />
        </g>
        <g id="fish3" transform="translate(350, 320)">
            <ellipse cx="0" cy="0" rx="50" ry="25" fill={f.fish3} onClick={() => o('fish3')} style={{ cursor: 'pointer' }} />
            <path d="M -40 0 C -70 -20, -70 20, -40 0 Z" fill={f.fishFins} onClick={(e) => { e.stopPropagation(); o('fishFins') }} style={{ cursor: 'pointer' }} />
            <circle cx="35" cy="-5" r="4" fill={f.eyes} onClick={(e) => { e.stopPropagation(); o('eyes') }} style={{ cursor: 'pointer' }} />
        </g>
        <g id="bubbles" onClick={() => o('bubbles')} style={{ cursor: 'pointer' }} fill={f.bubbles} stroke="#ADD8E6" strokeWidth="2">
            <circle cx="450" cy="100" r="15" />
            <circle cx="480" cy="150" r="10" />
            <circle cx="460" cy="180" r="5" />
            <circle cx="150" cy="80" r="12" />
            <circle cx="120" cy="120" r="8" />
        </g>
    </svg>
);

const RainbowSVG = ({ f, o }) => {
    const rainbowArcs = [
        { id: 'arc1', strokeWidth: 30, radius: 150 }, { id: 'arc2', strokeWidth: 30, radius: 180 },
        { id: 'arc3', strokeWidth: 30, radius: 210 }, { id: 'arc4', strokeWidth: 30, radius: 240 },
        { id: 'arc5', strokeWidth: 30, radius: 270 }, { id: 'arc6', strokeWidth: 30, radius: 300 },
        { id: 'arc7', strokeWidth: 30, radius: 330 },
    ];
    return (
        <svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg" className="w-full h-full cursor-default">
            <rect width="800" height="450" fill={f.sky} onClick={() => o('sky')} style={{ cursor: 'pointer' }} />
            <g id="rainbow" transform="translate(400, 450)">
                {rainbowArcs.map(arc => (
                    <path key={arc.id} d={`M -${arc.radius} 0 A ${arc.radius} ${arc.radius} 0 0 1 ${arc.radius} 0`} stroke={f[arc.id]} strokeWidth={arc.strokeWidth} fill="none" strokeLinecap="round" onClick={() => o(arc.id)} style={{ cursor: 'pointer' }} />
                ))}
            </g>
            <g id="cloud1" onClick={() => o('cloud1')} style={{ cursor: 'pointer' }} fill={f.cloud1}>
                <circle cx="40" cy="420" r="40" /> <circle cx="90" cy="420" r="50" /> <circle cx="10" cy="430" r="45" /> <circle cx="70" cy="440" r="40" /> <circle cx="130" cy="430" r="35" />
            </g>
            <g id="cloud2" onClick={() => o('cloud2')} style={{ cursor: 'pointer' }} fill={f.cloud2}>
                <circle cx="760" cy="420" r="40" /> <circle cx="710" cy="420" r="50" /> <circle cx="790" cy="430" r="45" /> <circle cx="730" cy="440" r="40" /> <circle cx="670" cy="430" r="35" />
            </g>
        </svg>
    );
};

const RocketSVG = ({ f, o }) => {
    const starPositions = [{ x: 50, y: 80 }, { x: 320, y: 60 }, { x: 80, y: 150 }, { x: 350, y: 180 }, { x: 30, y: 250 }];
    return (
        <svg width="400" height="500" viewBox="0 0 400 500" className="w-full h-full cursor-default">
            <rect width="400" height="500" fill={f.background} onClick={() => o('background')} />
            {starPositions.map((pos, index) => (
                <polygon key={index} points={`${pos.x},${pos.y - 8} ${pos.x + 3},${pos.y - 3} ${pos.x + 8},${pos.y - 3} ${pos.x + 5},${pos.y + 2} ${pos.x + 6},${pos.y + 7} ${pos.x},${pos.y + 4} ${pos.x - 6},${pos.y + 7} ${pos.x - 5},${pos.y + 2} ${pos.x - 8},${pos.y - 3} ${pos.x - 3},${pos.y - 3}`}
                    fill={f[`star${index + 1}`]} stroke="#333" strokeWidth="1" style={{ cursor: 'pointer' }} onClick={() => o(`star${index + 1}`)} />
            ))}
            <circle cx="320" cy="100" r="25" fill={f.moon} stroke="#333" strokeWidth="2" style={{ cursor: 'pointer' }} onClick={() => o('moon')} />
            <circle cx="315" cy="95" r="3" fill="#ddd" /> <circle cx="325" cy="105" r="2" fill="#ddd" /> <circle cx="318" cy="110" r="1.5" fill="#ddd" />
            <rect x="170" y="200" width="60" height="120" fill={f.body} stroke="#333" strokeWidth="3" rx="8" style={{ cursor: 'pointer' }} onClick={() => o('body')} />
            <polygon points="170,200 230,200 200,150" fill={f.nose} stroke="#333" strokeWidth="3" style={{ cursor: 'pointer' }} onClick={() => o('nose')} />
            <circle cx="200" cy="230" r="15" fill={f.window} stroke="#333" strokeWidth="2" style={{ cursor: 'pointer' }} onClick={() => o('window')} />
            <polygon points="170,280 150,320 170,320" fill={f.fin1} stroke="#333" strokeWidth="3" style={{ cursor: 'pointer' }} onClick={() => o('fin1')} />
            <polygon points="230,280 250,320 230,320" fill={f.fin2} stroke="#333" strokeWidth="3" style={{ cursor: 'pointer' }} onClick={() => o('fin2')} />
            <polygon points="190,320 210,320 200,340" fill={f.fin3} stroke="#333" strokeWidth="3" style={{ cursor: 'pointer' }} onClick={() => o('fin3')} />
            <ellipse cx="185" cy="350" rx="8" ry="25" fill={f.flame1} stroke="#333" strokeWidth="2" style={{ cursor: 'pointer' }} onClick={() => o('flame1')} />
            <ellipse cx="200" cy="360" rx="10" ry="35" fill={f.flame2} stroke="#333" strokeWidth="2" style={{ cursor: 'pointer' }} onClick={() => o('flame2')} />
            <ellipse cx="215" cy="350" rx="8" ry="25" fill={f.flame3} stroke="#333" strokeWidth="2" style={{ cursor: 'pointer' }} onClick={() => o('flame3')} />
            <rect x="180" y="260" width="40" height="3" fill="#333" /> <rect x="180" y="280" width="40" height="3" fill="#333" />
        </svg>
    );
};

const FlowerSVG = ({ f, o }) => {
    const petals = Array.from({ length: 12 }).map((_, i) => ({ id: `petal${i + 1}`, rotation: i * 30 }));
    return (
        <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" className="w-full h-full cursor-default">
            <rect width="500" height="500" fill={f.background} onClick={() => o('background')} style={{ cursor: 'pointer' }} />
            <g id="stemAndLeaves">
                <rect id="stem" x="240" y="250" width="20" height="250" fill={f.stem} onClick={() => o('stem')} style={{ cursor: 'pointer' }} />
                <g id="leaves" onClick={() => o('leaves')} style={{ cursor: 'pointer' }}>
                    <ellipse cx="200" cy="350" rx="60" ry="20" fill={f.leaves} transform="rotate(-20, 200, 350)" />
                    <ellipse cx="300" cy="400" rx="60" ry="20" fill={f.leaves} transform="rotate(20, 300, 400)" />
                </g>
            </g>
            <g id="flowerPetals">
                {petals.map(petal => (
                    <ellipse key={petal.id} cx="250" cy="150" rx="40" ry="100" fill={f[petal.id]} transform={`rotate(${petal.rotation}, 250, 250)`} onClick={() => o(petal.id)} style={{ cursor: 'pointer' }} />
                ))}
            </g>
            <circle id="flowerCenter" cx="250" cy="250" r="70" fill={f.flowerCenter} stroke="rgba(0,0,0,0.2)" strokeWidth="5" onClick={() => o('flowerCenter')} style={{ cursor: 'pointer' }} />
        </svg>
    );
};

const HotAirBalloonSVG = ({ f, o }) => (
    <svg viewBox="0 0 500 800" xmlns="http://www.w3.org/2000/svg" className="w-full h-full cursor-default">
        <rect width="500" height="800" fill={f.sky} onClick={() => o('sky')} style={{ cursor: 'pointer' }} />
        <path id="grass" d="M 0 650 C 150 630, 350 670, 500 650 L 500 800 L 0 800 Z" fill={f.grass} onClick={() => o('grass')} style={{ cursor: 'pointer' }} />
        <g id="hotAirBalloon" transform="translate(250, 400)">
            <defs>
                <clipPath id="balloonClip">
                    <path d="M 0 -350 C 160 -350, 200 -180, 200 0 C 200 120, 140 180, 0 180 C -140 180, -200 120, -200 0 C -200 -180, -160 -350, 0 -350 Z" />
                </clipPath>
            </defs>
            <g clipPath="url(#balloonClip)">
                <rect x="-200" y="-350" width="67" height="530" fill={f.stripe1} onClick={() => o('stripe1')} style={{ cursor: 'pointer' }} />
                <rect x="-133" y="-350" width="67" height="530" fill={f.stripe2} onClick={() => o('stripe2')} style={{ cursor: 'pointer' }} />
                <rect x="-66" y="-350" width="67" height="530" fill={f.stripe3} onClick={() => o('stripe3')} style={{ cursor: 'pointer' }} />
                <rect x="1" y="-350" width="67" height="530" fill={f.stripe4} onClick={() => o('stripe4')} style={{ cursor: 'pointer' }} />
                <rect x="68" y="-350" width="67" height="530" fill={f.stripe5} onClick={() => o('stripe5')} style={{ cursor: 'pointer' }} />
                <rect x="135" y="-350" width="67" height="530" fill={f.stripe6} onClick={() => o('stripe6')} style={{ cursor: 'pointer' }} />
            </g>
            <path d="M 0 -350 C 160 -350, 200 -180, 200 0 C 200 120, 140 180, 0 180 C -140 180, -200 120, -200 0 C -200 -180, -160 -350, 0 -350 Z" stroke="#4A5568" strokeWidth="6" fill="none" />
            <rect id="balloonBasket" x="-60" y="180" width="120" height="80" rx="15" fill={f.basket} stroke="#4A5568" strokeWidth="4" onClick={() => o('basket')} style={{ cursor: 'pointer' }} />
            <g stroke="#4A5568" strokeWidth="4">
                <line x1="-40" y1="180" x2="-120" y2="80" />
                <line x1="40" y1="180" x2="120" y2="80" />
            </g>
        </g>
    </svg>
);

const TrainSVG = ({ f, o }) => (
    <svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg" className="w-full h-full cursor-default">
        <rect width="800" height="450" fill={f.sky} onClick={() => o('sky')} style={{ cursor: 'pointer' }} />
        <g id="clouds" onClick={() => o('clouds')} style={{ cursor: 'pointer' }} fill={f.clouds}>
            <circle cx="150" cy="100" r="30" /><circle cx="190" cy="100" r="40" /><circle cx="120" cy="110" r="35" /><circle cx="650" cy="120" r="40" /><circle cx="700" cy="120" r="50" />
        </g>
        <g id="mountains">
            <path id="mountainBack" d="M -50 350 L 150 150 L 350 300 L 550 120 L 850 350 Z" fill={f.mountainBack} onClick={() => o('mountainBack')} style={{ cursor: 'pointer' }} />
            <path id="mountainFront" d="M -50 350 L 250 200 L 450 320 L 650 180 L 850 350 Z" fill={f.mountainFront} onClick={() => o('mountainFront')} style={{ cursor: 'pointer' }} />
        </g>
        <rect y="350" width="800" height="100" fill={f.ground} onClick={() => o('ground')} style={{ cursor: 'pointer' }} />
        <g id="track" onClick={() => o('track')} style={{ cursor: 'pointer' }}>
            <rect y="360" width="800" height="10" fill={f.track} />
            <rect y="390" width="800" height="10" fill={f.track} />
            {Array.from({ length: 10 }).map((_, i) => (<rect key={i} x={i * 80} y="350" width="10" height="60" fill={f.track} />))}
        </g>
        <g id="wheels" onClick={() => o('wheels')} style={{ cursor: 'pointer' }} fill={f.wheels}>
            <circle cx="120" cy="340" r="20" /><circle cx="200" cy="340" r="20" /><circle cx="360" cy="340" r="20" /><circle cx="480" cy="340" r="20" /><circle cx="590" cy="340" r="20" /><circle cx="710" cy="340" r="20" />
        </g>
        <g id="compartment2">
            <rect x="560" y="240" width="180" height="100" rx="10" fill={f.compartment2Body} onClick={() => o('compartment2Body')} style={{ cursor: 'pointer' }} />
            <rect x="560" y="220" width="180" height="30" rx="5" fill={f.compartmentRoofs} onClick={(e)=>{e.stopPropagation(); o('compartmentRoofs');}} style={{ cursor: 'pointer' }} />
            <g onClick={() => o('windows')} style={{ cursor: 'pointer' }} fill={f.windows}>
                <rect x="580" y="260" width="40" height="40" rx="5" /><rect x="630" y="260" width="40" height="40" rx="5" /><rect x="680" y="260" width="40" height="40" rx="5" />
            </g>
        </g>
        <g id="compartment1">
            <rect x="330" y="240" width="180" height="100" rx="10" fill={f.compartment1Body} onClick={() => o('compartment1Body')} style={{ cursor: 'pointer' }} />
            <rect x="330" y="220" width="180" height="30" rx="5" fill={f.compartmentRoofs} onClick={(e)=>{e.stopPropagation(); o('compartmentRoofs');}} style={{ cursor: 'pointer' }} />
            <g onClick={() => o('windows')} style={{ cursor: 'pointer' }} fill={f.windows}>
                <rect x="350" y="260" width="40" height="40" rx="5" /><rect x="400" y="260" width="40" height="40" rx="5" /><rect x="450" y="260" width="40" height="40" rx="5" />
            </g>
        </g>
        <g id="engine">
            <rect id="engineBody" x="70" y="260" width="180" height="80" rx="10" fill={f.engineBody} onClick={() => o('engineBody')} style={{ cursor: 'pointer' }} />
            <rect id="engineCabin" x="200" y="200" width="80" height="80" rx="10" fill={f.engineCabin} onClick={() => o('engineCabin')} style={{ cursor: 'pointer' }} />
            <rect id="chimney" x="100" y="200" width="40" height="60" fill={f.chimney} onClick={() => o('chimney')} style={{ cursor: 'pointer' }} />
            <g id="smoke" onClick={() => o('smoke')} style={{ cursor: 'pointer' }} fill={f.smoke}>
                <circle cx="120" cy="180" r="25" /><circle cx="140" cy="160" r="30" />
            </g>
        </g>
        <g fill="#616161">
            <rect x="280" y="310" width="50" height="15" /><rect x="510" y="310" width="50" height="15" />
        </g>
    </svg>
);

const BirthdaySVG = ({ f, o }) => (
    <svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" className="w-full h-full cursor-default">
        <rect width="800" height="600" fill={f.background} onClick={() => o('background')} style={{ cursor: 'pointer' }} />
        <g id="confetti" onClick={() => o('confetti')} style={{ cursor: 'pointer' }} fill={f.confetti}>
            <circle cx="100" cy="100" r="10" /><rect x="200" y="50" width="15" height="25" transform="rotate(20, 200, 50)" /><circle cx="700" cy="150" r="12" /><rect x="600" y="80" width="20" height="20" transform="rotate(-30, 600, 80)" /><circle cx="50" cy="400" r="8" /><circle cx="750" cy="500" r="15" /><rect x="300" y="550" width="10" height="30" transform="rotate(45, 300, 550)" />
        </g>
        <g id="gift1" transform="translate(50, 400)">
            <rect width="200" height="150" rx="10" fill={f.gift1} onClick={() => o('gift1')} style={{ cursor: 'pointer' }} />
            <rect x="85" width="30" height="150" fill={f.gift1Bow} onClick={(e)=>{e.stopPropagation(); o('gift1Bow');}} style={{ cursor: 'pointer' }} />
            <path d="M 60 -20 C 40 -50, 160 -50, 140 -20 L 100 0 Z" fill={f.gift1Bow} onClick={(e)=>{e.stopPropagation(); o('gift1Bow');}} style={{ cursor: 'pointer' }} />
        </g>
        <g id="gift2" transform="translate(550, 450)">
            <rect width="180" height="100" rx="10" fill={f.gift2} onClick={() => o('gift2')} style={{ cursor: 'pointer' }} />
            <rect x="75" width="30" height="100" fill={f.gift2Bow} onClick={(e)=>{e.stopPropagation(); o('gift2Bow');}} style={{ cursor: 'pointer' }} />
            <path d="M 50 -15 C 30 -40, 150 -40, 130 -15 L 90 0 Z" fill={f.gift2Bow} onClick={(e)=>{e.stopPropagation(); o('gift2Bow');}} style={{ cursor: 'pointer' }} />
        </g>
        <g id="cake" transform="translate(400, 400)">
            <rect id="cakeLayer1" x="-150" y="0" width="300" height="150" rx="15" fill={f.cakeLayer1} onClick={() => o('cakeLayer1')} style={{ cursor: 'pointer' }} />
            <rect id="cakeLayer2" x="-120" y="-100" width="240" height="100" rx="15" fill={f.cakeLayer2} onClick={() => o('cakeLayer2')} style={{ cursor: 'pointer' }} />
            <path id="icing" d="M -120 -100 C -80 -120, -40 -100, 0 -120 C 40 -140, 80 -120, 120 -100 Z" fill={f.icing} onClick={() => o('icing')} style={{ cursor: 'pointer' }} />
            <g id="candleGroup">
                <rect id="candle" x="-15" y="-180" width="30" height="60" fill={f.candle} onClick={() => o('candle')} style={{ cursor: 'pointer' }} />
                <path id="flame" d="M 0 -180 Q 15 -210, 0 -230 Q -15 -210, 0 -180 Z" fill={f.flame} onClick={() => o('flame')} style={{ cursor: 'pointer' }} />
            </g>
        </g>
    </svg>
);

const ChristmasSVG = ({ f, o }) => (
    <svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" className="w-full h-full cursor-default">
        <rect width="800" height="600" fill={f.background} onClick={() => o('background')} style={{ cursor: 'pointer' }} />
        <path id="snow" d="M 0 500 C 150 480, 300 520, 450 500 S 700 480, 800 500 L 800 600 L 0 600 Z" fill={f.snow} onClick={() => o('snow')} style={{ cursor: 'pointer' }} />
        <rect id="trunk" x="375" y="480" width="50" height="70" fill={f.trunk} onClick={() => o('trunk')} style={{ cursor: 'pointer' }} />
        <g id="treeGroup">
            <polygon id="tree" points="400,50 150,500 650,500" fill={f.tree} onClick={() => o('tree')} style={{ cursor: 'pointer' }} />
        </g>
        <path id="star" d="M400,0 l15,45 h47 l-38,28 l15,45 l-38,-28 l-38,28 l15,-45 l-38,-28 h47 z" fill={f.star} transform="translate(0, 30)" onClick={() => o('star')} style={{ cursor: 'pointer' }} />
        <g id="decorations">
            <g id="ornaments1" onClick={() => o('ornaments1')} style={{ cursor: 'pointer' }} fill={f.ornaments1}>
                <circle cx="400" cy="200" r="20" /><circle cx="300" cy="350" r="25" /><circle cx="500" cy="350" r="25" /><circle cx="220" cy="450" r="20" />
            </g>
            <g id="ornaments2" onClick={() => o('ornaments2')} style={{ cursor: 'pointer' }} fill={f.ornaments2}>
                <circle cx="580" cy="450" r="20" /><circle cx="450" cy="280" r="22" /><circle cx="350" cy="280" r="22" /><circle cx="400" cy="420" r="25" />
            </g>
            <g id="lights" onClick={() => o('lights')} style={{ cursor: 'pointer' }} fill={f.lights}>
                <circle cx="350" cy="180" r="8" /><circle cx="450" cy="180" r="8" /><circle cx="320" cy="250" r="8" /><circle cx="480" cy="250" r="8" /><circle cx="270" cy="320" r="8" /><circle cx="530" cy="320" r="8" /><circle cx="250" cy="400" r="8" /><circle cx="550" cy="400" r="8" />
            </g>
        </g>
        <g id="gifts">
            <g id="gift1" transform="translate(100, 480)">
                <rect width="150" height="100" rx="10" fill={f.gift1} onClick={() => o('gift1')} style={{ cursor: 'pointer' }} />
                <rect x="60" width="30" height="100" fill={f.gift1Bow} onClick={(e)=>{e.stopPropagation(); o('gift1Bow')}} style={{ cursor: 'pointer' }} />
                <path d="M 40 -15 C 20 -40, 130 -40, 110 -15 L 75 0 Z" fill={f.gift1Bow} onClick={(e)=>{e.stopPropagation(); o('gift1Bow')}} style={{ cursor: 'pointer' }} />
            </g>
            <g id="gift2" transform="translate(550, 460)">
                <rect width="180" height="120" rx="10" fill={f.gift2} onClick={() => o('gift2')} style={{ cursor: 'pointer' }} />
                <rect x="75" width="30" height="120" fill={f.gift2Bow} onClick={(e)=>{e.stopPropagation(); o('gift2Bow')}} style={{ cursor: 'pointer' }} />
                <path d="M 50 -15 C 30 -40, 150 -40, 130 -15 L 90 0 Z" fill={f.gift2Bow} onClick={(e)=>{e.stopPropagation(); o('gift2Bow')}} style={{ cursor: 'pointer' }} />
            </g>
        </g>
    </svg>
);

const BeachSVG = ({ f, o }) => (
    <svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg" className="w-full h-full cursor-default">
        <rect width="800" height="450" fill={f.sky} onClick={() => o('sky')} style={{ cursor: 'pointer' }} />
        <circle id="sun" cx="100" cy="100" r="50" fill={f.sun} onClick={() => o('sun')} style={{ cursor: 'pointer' }} />
        <g id="ocean">
            <path id="oceanFar" d="M -5 250 C 150 220, 250 280, 400 250 S 550 280, 700 250 S 850 220, 805 250 V 350 C 600 330, 200 370, -5 350 Z" fill={f.oceanFar} onClick={() => o('oceanFar')} style={{ cursor: 'pointer' }} />
            <path id="oceanMiddle" d="M -5 320 C 150 290, 250 350, 400 320 S 550 350, 700 320 S 850 290, 805 320 V 400 C 600 380, 200 420, -5 400 Z" fill={f.oceanMiddle} onClick={() => o('oceanMiddle')} style={{ cursor: 'pointer' }} />
            <path id="oceanNear" d="M -5 380 C 150 350, 250 410, 400 380 S 550 410, 700 380 S 850 350, 805 380 V 450 C 600 430, 200 470, -5 450 Z" fill={f.oceanNear} onClick={() => o('oceanNear')} style={{ cursor: 'pointer' }} />
        </g>
        <path id="sand" d="M 0 420 C 200 400, 600 440, 800 420 L 800 450 L 0 450 Z" fill={f.sand} onClick={() => o('sand')} style={{ cursor: 'pointer' }} />
        <g id="umbrella" transform="translate(650, 300)">
            <rect id="umbrellaPole" x="-5" y="-100" width="10" height="200" fill={f.umbrellaPole} onClick={() => o('umbrellaPole')} style={{ cursor: 'pointer' }} />
            <g id="umbrellaCanopy">
                <path d="M 0 -100 C -80 -100, -120 -50, -120 0 H 120 C 120 -50, 80 -100, 0 -100 Z" fill={f.umbrellaStripe1} onClick={(e) => { e.stopPropagation(); o('umbrellaStripe1'); }} style={{ cursor: 'pointer' }} />
                <path d="M 0 -90 C -60 -90, -90 -50, -90 0 H 90 C 90 -50, 60 -90, 0 -90 Z" fill={f.umbrellaStripe2} onClick={(e) => { e.stopPropagation(); o('umbrellaStripe2'); }} style={{ cursor: 'pointer' }} />
                <path d="M 0 -80 C -40 -80, -60 -50, -60 0 H 60 C 60 -50, 40 -80, 0 -80 Z" fill={f.umbrellaStripe1} onClick={(e) => { e.stopPropagation(); o('umbrellaStripe1'); }} style={{ cursor: 'pointer' }} />
                <circle cx="0" cy="-100" r="10" fill={f.umbrellaPole} onClick={(e) => { e.stopPropagation(); o('umbrellaPole'); }} style={{ cursor: 'pointer' }} />
            </g>
        </g>
        <g id="sandcastle" transform="translate(100, 380)" onClick={() => o('sandcastle')} style={{ cursor: 'pointer' }} fill={f.sandcastle}>
            <rect x="0" y="20" width="100" height="50" /><rect x="25" y="-10" width="50" height="30" /><path d="M 0 20 L 20 20 L 20 0 L 0 0 Z M 40 20 L 60 20 L 60 0 L 40 0 Z M 80 20 L 100 20 L 100 0 L 80 0 Z" />
        </g>
        <g id="beachBall" transform="translate(350, 390)">
            <defs>
                <clipPath id="ballClip"><circle cx="0" cy="0" r="40" /></clipPath>
            </defs>
            <g clipPath="url(#ballClip)">
                <rect x="-40" y="-40" width="20" height="80" fill={f.ballStripe1} onClick={() => o('ballStripe1')} style={{ cursor: 'pointer' }} />
                <rect x="-20" y="-40" width="20" height="80" fill={f.ballStripe2} onClick={() => o('ballStripe2')} style={{ cursor: 'pointer' }} />
                <rect x="0" y="-40" width="20" height="80" fill={f.ballStripe3} onClick={() => o('ballStripe3')} style={{ cursor: 'pointer' }} />
                <rect x="20" y="-40" width="20" height="80" fill={f.ballStripe4} onClick={() => o('ballStripe4')} style={{ cursor: 'pointer' }} />
            </g>
            <circle cx="0" cy="0" r="40" stroke="#4A5568" strokeWidth="3" fill="none" />
        </g>
    </svg>
);


// The final list of all coloring pages available in the app.
let allColoringPages = [
    { name: "Teddy Bear", component: TeddyBearSVG, initialFills: { background: BLANK_COLOR, body: BLANK_COLOR, tummyPatch: BLANK_COLOR, innerEars: BLANK_COLOR, pawPads: BLANK_COLOR, snout: BLANK_COLOR, nose: BLANK_COLOR, eyes: BLANK_COLOR } },
    { name: "House Scene", component: HouseSceneSVG, initialFills: { sky: BLANK_COLOR, sun: BLANK_COLOR, cloud: BLANK_COLOR, houseWalls: BLANK_COLOR, houseRoof: BLANK_COLOR, houseDoor: BLANK_COLOR, doorKnob: BLANK_COLOR, windowFrame: BLANK_COLOR, windowGlass: BLANK_COLOR, treeTrunk: BLANK_COLOR, treeLeaves: BLANK_COLOR, grass: BLANK_COLOR } },
    { name: "Mountain Scene", component: MountainSceneSVG, initialFills: { sky: BLANK_COLOR, sun: BLANK_COLOR, mountainBack: BLANK_COLOR, mountainMiddle: BLANK_COLOR, mountainFront: BLANK_COLOR, trees: BLANK_COLOR, treeTrunk: BLANK_COLOR, river: BLANK_COLOR } },
    { name: "Castle", component: CastleSVG, initialFills: { sky: BLANK_COLOR, ground: BLANK_COLOR, castleWalls: BLANK_COLOR, castleTowers: BLANK_COLOR, towerRoofs: BLANK_COLOR, mainGate: BLANK_COLOR, windows: BLANK_COLOR, flags: BLANK_COLOR } },
    { name: "Cat", component: CatSVG, initialFills: { background: BLANK_COLOR, body: BLANK_COLOR, tummy: BLANK_COLOR, innerEars: BLANK_COLOR, paws: BLANK_COLOR, tail: BLANK_COLOR, bow: BLANK_COLOR, nose: BLANK_COLOR, eyes: BLANK_COLOR } },
    { name: "Underwater", component: UnderwaterSVG, initialFills: { water: BLANK_COLOR, sand: BLANK_COLOR, fish1: BLANK_COLOR, fish2: BLANK_COLOR, fish3: BLANK_COLOR, fishFins: BLANK_COLOR, seaweed: BLANK_COLOR, bubbles: BLANK_COLOR, eyes: BLANK_COLOR } },
    { name: "Rainbow", component: RainbowSVG, initialFills: { sky: BLANK_COLOR, cloud1: BLANK_COLOR, cloud2: BLANK_COLOR, arc1: BLANK_COLOR, arc2: BLANK_COLOR, arc3: BLANK_COLOR, arc4: BLANK_COLOR, arc5: BLANK_COLOR, arc6: BLANK_COLOR, arc7: BLANK_COLOR } },
    { name: "Rocket", component: RocketSVG, initialFills: { background: BLANK_COLOR, body: BLANK_COLOR, nose: BLANK_COLOR, fin1: BLANK_COLOR, fin2: BLANK_COLOR, fin3: BLANK_COLOR, window: BLANK_COLOR, flame1: BLANK_COLOR, flame2: BLANK_COLOR, flame3: BLANK_COLOR, star1: BLANK_COLOR, star2: BLANK_COLOR, star3: BLANK_COLOR, star4: BLANK_COLOR, star5: BLANK_COLOR, moon: BLANK_COLOR } },
    { name: "Flower", component: FlowerSVG, initialFills: { background: BLANK_COLOR, petal1: BLANK_COLOR, petal2: BLANK_COLOR, petal3: BLANK_COLOR, petal4: BLANK_COLOR, petal5: BLANK_COLOR, petal6: BLANK_COLOR, petal7: BLANK_COLOR, petal8: BLANK_COLOR, petal9: BLANK_COLOR, petal10: BLANK_COLOR, petal11: BLANK_COLOR, petal12: BLANK_COLOR, flowerCenter: BLANK_COLOR, stem: BLANK_COLOR, leaves: BLANK_COLOR } },
    { name: "Hot Air Balloon", component: HotAirBalloonSVG, initialFills: { sky: BLANK_COLOR, grass: BLANK_COLOR, stripe1: BLANK_COLOR, stripe2: BLANK_COLOR, stripe3: BLANK_COLOR, stripe4: BLANK_COLOR, stripe5: BLANK_COLOR, stripe6: BLANK_COLOR, basket: BLANK_COLOR } },
    { name: "Train", component: TrainSVG, initialFills: { sky: BLANK_COLOR, clouds: BLANK_COLOR, mountainBack: BLANK_COLOR, mountainFront: BLANK_COLOR, ground: BLANK_COLOR, track: BLANK_COLOR, engineBody: BLANK_COLOR, engineCabin: BLANK_COLOR, chimney: BLANK_COLOR, smoke: BLANK_COLOR, wheels: BLANK_COLOR, compartment1Body: BLANK_COLOR, compartment2Body: BLANK_COLOR, compartmentRoofs: BLANK_COLOR, windows: BLANK_COLOR } },
    { name: "Birthday", component: BirthdaySVG, initialFills: { background: BLANK_COLOR, cakeLayer1: BLANK_COLOR, cakeLayer2: BLANK_COLOR, icing: BLANK_COLOR, candle: BLANK_COLOR, flame: BLANK_COLOR, gift1: BLANK_COLOR, gift1Bow: BLANK_COLOR, gift2: BLANK_COLOR, gift2Bow: BLANK_COLOR, confetti: BLANK_COLOR } },
    { name: "Christmas", component: ChristmasSVG, initialFills: { background: BLANK_COLOR, snow: BLANK_COLOR, tree: BLANK_COLOR, trunk: BLANK_COLOR, star: BLANK_COLOR, ornaments1: BLANK_COLOR, ornaments2: BLANK_COLOR, lights: BLANK_COLOR, gift1: BLANK_COLOR, gift1Bow: BLANK_COLOR, gift2: BLANK_COLOR, gift2Bow: BLANK_COLOR } },
    { name: "Beach", component: BeachSVG, initialFills: { sky: BLANK_COLOR, sun: BLANK_COLOR, oceanFar: BLANK_COLOR, oceanMiddle: BLANK_COLOR, oceanNear: BLANK_COLOR, sand: BLANK_COLOR, umbrellaPole: BLANK_COLOR, umbrellaStripe1: BLANK_COLOR, umbrellaStripe2: BLANK_COLOR, ballStripe1: BLANK_COLOR, ballStripe2: BLANK_COLOR, ballStripe3: BLANK_COLOR, ballStripe4: BLANK_COLOR, sandcastle: BLANK_COLOR } },
];

/**
 * Shuffles array in place.
 * @param {Array} a items An array containing the items.
 */
function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

// Export the shuffled list so the order is random on each app load.
export const coloringPages = shuffle(allColoringPages);