import { Component, Prop, State, Watch, h } from '@stencil/core';

import api from '../utils/api'

// import isLocalHost from '../utils/isLocalHost';

@Component({
  tag: 'ip-app-home'
})
export class IpAppHome {

  @State()
  klanten: any[];

  @Prop()
  data: any[];

  componentDidLoad() {

    const klant = {
      klantnummer: "20210002",
      bedrijfsnaam: "van Maas tot Maas",
      contactpersoon: "Nathalie Strijker",
      voornaam: "Gary",
      voorvoegselAchternaam: "",
      achternaam: "Wenneker",
      telefoonnummer: "0626937737",
      emailadres: "garywenneeker@gmail.com",
      adres: [
        {
          vanafDatum: "26-01-2021",
          straatnaam: "Sint Odradastraat",
          huisnummer: 6,
          huisnummertoevoeging: "",
          postcode: "5335LL",
          woonplaatsnaam: "Alem",
          landcode: "NL"
        }
      ]
    };

    const updated = {
      klantnummer: "20210002",
      bedrijfsnaam: "van Maas tot Maas",
      contactpersoon: "Nathalie Wenneker-Strijker",
      voornaam: "Gary",
      voorvoegselAchternaam: "",
      achternaam: "Wenneker",
      telefoonnummer: "0626937737",
      emailadres: "garywenneeker@gmail.com",
      adres: [
        {
          vanafDatum: "26-01-2021",
          straatnaam: "Sint Odradastraat",
          huisnummer: 6,
          huisnummertoevoeging: "",
          postcode: "5335LL",
          woonplaatsnaam: "Alem",
          landcode: "NL"
        }
      ]
    };

    const id = api.getId();
    console.log('id', id);

    api.create(id, klant).then((add) => {
      console.log('added', add);

      // get
      api.read(id).then((read) => {
        console.log('read', read);

        // update
        api.update(id, updated).then((updated) => {
          console.log('updated', updated);
          
          // api.delete(id).then((deleted) => {
          //   console.log('deleted', deleted);
          // });

          // delete
          // api.batchDelete([id]).then((deleted) => {
          //   console.log('deleted', deleted);
          // });
        });

      });
    });


    // api.readAll().then((klanten) => {
    //   if (klanten.message === 'unauthorized') {
    //     if (isLocalHost()) {
    //       alert('FaunaDB key is not unauthorized. Make sure you set it in terminal session where you ran `npm start`. Visit http://bit.ly/set-fauna-key for more info')
    //     } else {
    //       alert('FaunaDB key is not unauthorized. Verify the key `FAUNADB_SERVER_SECRET` set in Netlify enviroment variables is correct')
    //     }
    //     return false
    //   }

    //   this.data = klanten;

    //   console.log('all klanten', klanten);

    // })

    // force video to paste onto viewport
    let elem = (document.compatMode === "CSS1Compat") ?
      document.documentElement :
      document.body;
    let height = elem.clientHeight - 200;
    let item = document.getElementsByClassName('home-intro').item(0);
    (item as any).style.height = `${height}px`;
  }

  @Watch('data')
  watching(klanten: any[]) {
    console.log('watch!', klanten);
    this.klanten = klanten;
  }

  render() {


    return (
      <div>
        <gl-background-video
          src="/assets/video/intro.mp4"
          poster="https://i.vimeocdn.com/video/827528832.webp?mw=960&mh=542" class="o-video">
        </gl-background-video>
        <div class="overlay active"></div>
        <div class="container inverted text-shadow home-intro">
          <div class="row">
            <div class="one column">&nbsp;</div>
            <div class="seven columns title"><h1>B&B van Maas tot Maas</h1></div>
            <div class="two columns"></div>
          </div>
          <div class="row">
            <div class="one column">&nbsp;</div>
            <div class="seven columns Parisienne"><p>Omringd door de Waal en de Maas en gekenmerkt door kastelen, historische kerken en mooie stadjes</p></div>
            <div class="two columns"></div>
          </div>
          <div class="row">
            <div class="one column">&nbsp;</div>
            <div class="seven columns"><stencil-route-link url="/aanmelden"><div class="btn-primary">Reserveren<ion-icon name="chevron-forward"></ion-icon></div></stencil-route-link></div>
            <div class="two columns"></div>
          </div>

          {/* <div class="row">
            <div class="one column">&nbsp;</div>
            <div class="seven columns">
              {this.klanten ? `${this.klanten.length} wijnen gevonden` : 'geen wijnen gevonden'}
              {
                this.klanten.map((wine) => {
                  return <ip-wine-block title={wine.data.name} intro={wine.data.grapes}></ip-wine-block>
                })

              }


            </div>
            <div class="two columns"></div>
          </div> */}
        </div>

        <ip-content-block backgroundColor="#ffffff" margin="6em 0 0 0">
          <div class="row">
            <div class="ten columns offset-by-two title"><h2>Hoe werkt het?</h2></div>
          </div>
          <div class="row">
            <div class="four columns offset-by-two">Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</div>
            <div class="four columns">Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</div>
          </div>
        </ip-content-block>

        <ip-content-block backgroundColor="#F2EFE3" margin="0 0 0 0">
          <div class="row">
            <div class="ten columns offset-by-two title"><h2>Beloften</h2></div>
          </div>
          <div class="row">
            <div class="ten columns offset-by-two intro">Leverage agile frameworks to provide a robust synopsis for high level overviews.</div>
          </div>
          <div class="row">
            <div class="four columns offset-by-two">
              <ip-usp-counter count="01">Leverage agile frameworks to provide a robust synopsis for high level overviews.</ip-usp-counter>
              <ip-usp-counter count="02">Leverage agile frameworks to provide a robust synopsis for high level overviews.</ip-usp-counter>
              <ip-usp-counter count="03">Leverage agile frameworks to provide a robust synopsis for high level overviews.</ip-usp-counter>
            </div>
            <div class="four columns">
              <ip-usp-counter count="04">Leverage agile frameworks to provide a robust synopsis for high level overviews.</ip-usp-counter>
              <ip-usp-counter count="05">Leverage agile frameworks to provide a robust synopsis for high level overviews.</ip-usp-counter>
              <ip-usp-counter count="06">Leverage agile frameworks to provide a robust synopsis for high level overviews.</ip-usp-counter>
            </div>
          </div>
        </ip-content-block>

        <ip-content-block backgroundColor="#ffffff" margin="0 0 0 0">
          <div class="row">
            <div class="twelve columns title" style={{ textAlign: 'center' }}><h2>Onze wijnhuizen</h2></div>
          </div>
          <div class="row">
            <div class="twelve columns" style={{ textAlign: 'center', margin: '0 0 32px 0' }}>Leverage agile frameworks to provide a robust synopsis for high level overviews.</div>
          </div>
          <div class="row">
            <div class="two columns">&nbsp;</div>
            <div class="two columns">ANTINORI</div>
            <div class="two columns">ANTINORI</div>
            <div class="two columns">ANTINORI</div>
            <div class="two columns">ANTINORI</div>
            <div class="two columns"></div>
          </div>
          <div class="row">
            <div class="two columns">&nbsp;</div>
            <div class="two columns">ANTINORI</div>
            <div class="two columns">ANTINORI</div>
            <div class="two columns">ANTINORI</div>
            <div class="two columns">ANTINORI</div>
            <div class="two columns"></div>
          </div>
        </ip-content-block>

        <ip-content-block backgroundColor="#ffffff" margin="0 0 0 0">
          <div class="row">
            <div class="twelve columns title" style={{ textAlign: 'center' }}><h2>Veelgestelde vragen</h2></div>
          </div>
          <div class="row">
            <div class="twelve columns" style={{ textAlign: 'center', margin: '0 0 32px 0' }}>Leverage agile frameworks to provide a robust synopsis for high level overviews.</div>
          </div>
          <div class="row">
            <div class="six columns offset-by-three">
              <web-accordion>
                <web-accordion-item>
                  <h1 class="label" slot="title">item no 1 <span>test</span></h1>
                  <div id="content-1">Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</div>
                </web-accordion-item>
                <web-accordion-item>
                  <h1 slot="title">item no 2</h1>
                  <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                </web-accordion-item>
                <web-accordion-item>
                  <h1 slot="title">item no 3</h1>
                  <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                </web-accordion-item>
              </web-accordion>
            </div>
            <div class="three columns"></div>
          </div>
        </ip-content-block>

      </div>
    );
  }
}
