import React, { PureComponent } from 'react';

// This is reusable comopnent to view Riyadh weather using weatherwidget.io tool

export default class WeatherWidget extends PureComponent {
    render() {
        return (
            <div className={this.props.className || ""}>
                <a className="weatherwidget-io" href="https://forecast7.com/en/24d7146d68/riyadh/" data-label_1="RIYADH" data-label_2="WEATHER" data-theme="weather_one" >RIYADH WEATHER</a>
    
                {!function (d, s, id) {
                    var js, fjs = d.getElementsByTagName(s)[0];
                    // if (!d.getElementById(id)) {
                        js = d.createElement(s);
                        js.id = id;
                        js.src = 'https:weatherwidget.io/js/widget.min.js';
                        fjs.parentNode.insertBefore(js, fjs);
                    // }
                }
                    (document, 'script', 'weatherwidget-io-js')
                }
            </div>
        )
    }};