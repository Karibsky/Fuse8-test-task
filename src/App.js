import React, { Component } from 'react';
import Card from './components/Card/Card';

import image1 from './img/Image1.jpg';
import image2 from './img/Image2.jpg';
import image3 from './img/Image3.jpg';
import rightArrow from './img/Chevron.svg';

class App extends Component {
  state = {
    isShownAll: false,
    cards: [
      { 
        id: 0,
        title: 'Brunlees Court',
        image: image1,
        textone: '19-23 Cambridge Road, Southport',
        texttwo: 'New Properties for Sale from',
        textprice: '£214,999',
        textsmall: 'Shared Ownership Available',
        labeltext: 'Independent living',
        orangecolored: false
      },
      { 
        id: 1,
        title: 'Charlotte Court',
        image: image2,
        textone: '19-23 Cambridge Road, Southport',
        texttwo: 'New Properties for Sale from',
        textprice: '£214,999',
        textsmall: 'Shared Ownership Available',
        labeltext: 'Independent living',
        orangecolored: false
      },
      { 
        id: 2,
        title: 'Grove Court',
        image: image3,
        textone: '19-23 Cambridge Road, Southport',
        texttwo: 'New Properties for Sale from',
        textprice: '£214,999',
        textsmall: 'Shared Ownership Available',
        labeltext: 'Restaurant & Support available',
        orangecolored: true
      },
      { 
        id: 3,
        title: 'Brunlees Court',
        image: image1,
        textone: '19-23 Cambridge Road, Southport',
        texttwo: 'New Properties for Sale from',
        textprice: '£214,999',
        textsmall: 'Shared Ownership Available',
        labeltext: 'Independent living',
        orangecolored: false
      },
      { 
        id: 4,
        title: 'Charlotte Court',
        image: image2,
        textone: '19-23 Cambridge Road, Southport',
        texttwo: 'New Properties for Sale from',
        textprice: '£214,999',
        textsmall: 'Shared Ownership Available',
        labeltext: 'Independent living',
        orangecolored: false
      },
      { 
        id: 5,
        title: 'Grove Court',
        image: image3,
        textone: '19-23 Cambridge Road, Southport',
        texttwo: 'New Properties for Sale from',
        textprice: '£214,999',
        textsmall: 'Shared Ownership Available',
        labeltext: 'Restaurant & Support available',
        orangecolored: true
      },
      { 
        id: 6,
        title: 'Brunlees Court',
        image: image1,
        textone: '19-23 Cambridge Road, Southport',
        texttwo: 'New Properties for Sale from',
        textprice: '£214,999',
        textsmall: 'Shared Ownership Available',
        labeltext: 'Independent living',
        orangecolored: false
      },
      { 
        id: 7,
        title: 'Charlotte Court',
        image: image2,
        textone: '19-23 Cambridge Road, Southport',
        texttwo: 'New Properties for Sale from',
        textprice: '£214,999',
        textsmall: 'Shared Ownership Available',
        labeltext: 'Independent living',
        orangecolored: false
      },
      { 
        id: 8,
        title: 'Grove Court',
        image: image3,
        textone: '19-23 Cambridge Road, Southport',
        texttwo: 'New Properties for Sale from',
        textprice: '£214,999',
        textsmall: 'Shared Ownership Available',
        labeltext: 'Restaurant & Support available',
        orangecolored: true
      }
    ]
  }
  render() {
    const isShownAll = this.state.isShownAll;
    const cards = this.state.cards;
    const showAll = e => {
      e.preventDefault();
      this.setState({isShownAll: !isShownAll});
    }
    return (
      <section className="page">
        <h1 className="page__title">Our Latest Developments</h1>
        <div className="page__container">
            { isShownAll ? 
              ( cards
                  .filter(card => card.id <= 8)
                  .map((card, i) => 
                    <Card 
                      title={card.title} 
                      image={card.image} 
                      textone={card.textone} 
                      texttwo={card.texttwo}
                      textprice={card.textprice} 
                      textsmall={card.textsmall}
                      labeltext={card.labeltext}
                      orangecolored={card.orangecolored}
                      key={i}
                    /> 
                  )) : 
              ( cards
                  .filter(card => card.id <= 2)
                  .map((card, i) => 
                  <Card 
                      title={card.title} 
                      image={card.image} 
                      textone={card.textone} 
                      texttwo={card.texttwo}
                      textprice={card.textprice} 
                      textsmall={card.textsmall} 
                      labeltext={card.labeltext}
                      orangecolored={card.orangecolored}
                      key={i}
                    />  
                )
              )
            }  
        </div>
        <div className="page__button">
          <button onClick={showAll}>
            { !isShownAll ? 'See more' : 'Hide' }
            <img className="button__icon" src={rightArrow} alt="right arrow icon"/>
          </button>
        </div>
      </section>
    );
  }
}

export default App;
