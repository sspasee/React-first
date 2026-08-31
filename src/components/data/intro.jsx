import React from "react";
// eto proizvodnaya ot obichnogo XML
export default function IntroSection() {
    return React.createElement('section',{className: 'centered'}, 
        [React.createElement('h1',{className:'centered', key: 1}, 'Константин'),
        React.createElement('h3',{className: 'centered future', key: 2, style:{color: '#555', textDecoration:'underline'}}, 'будущий фронтед разработчик')]
    )
}