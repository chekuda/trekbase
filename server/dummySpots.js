import shortid from 'shortid'

export default () => ({
  'europe': [
    {
      'id': shortid.generate(),
      'lat': 46.4102,
      'lng': 11.8440,
      'text': 'Dolomites',
      'imageList': ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBemQWYCiXxeMctquLix0Ntn_zVQAS3RmQ4rRiWbhoRvQdp9P2', 'https://www.mountainphotography.com/images/640/20040628-Pala-Reflection.jpg', 'https://italyxp.com/sites/default/files/styles/colorbox_gallery_xp/public/mediaitalyxp/dolomites_lake.jpg?width=820&height=620&iframe=true'],
      'dificulty': 'easy',
      'maxAltitude': '2000m',
      'stars': 2,
      'routes': [{ name: 'first', hours: 10 }, { name: 'second', hours: 10 }],
      'title': 'Whatever whatever whatever'
    },
    {
      'id': shortid.generate(),
      'lat': 60.1543,
      'lng': 7.4430,
      'text': 'Hardangervidda National Park',
      'imageList': ['https://i2-prod.mirror.co.uk/incoming/article9387007.ece/ALTERNATES/s615/Bygdy-peninsula-Oslo-Norway.jpg'],
      'dificulty': 'easy',
      'stars': 3,
      'maxAltitude': '2000m',
      'routes': [{ name: 'first', hours: 10 }, { name: 'second', hours: 10 }, { name: 'second', hours: 11 }],
      'title': 'Whatever whatever whatever'
    },
    {
      'id': shortid.generate(),
      'lat': 46.3342,
      'lng': 13.8287,
      'text': 'Triglav',
      'imageList': ['https://i1.wp.com/www.andthereshegoesagain.com/wp-content/uploads/2017/10/DSCF7854.jpg?resize=700%2C395', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOpautxpXitBUcmm2RG9S6rbWcOj8W1uy4fgxNdiCjHkhM3cvY'],
      'dificulty': 'medium',
      'stars': 1,
      'maxAltitude': '2000m',
      'routes': [{ name: 'first', hours: 9 }, { name: 'second', hours: 8 }],
      'title': 'Whatever whatever whatever'
    },
    {
      'id': shortid.generate(),
      'lat': 40.416775,
      'lng': -3.703790,
      'text': 'Madrid',
      'imageList': ['https://www.telegraph.co.uk/content/dam/Travel/2016/November/madrid-TT-hres-2011_8.jpg?imwidth=450'],
      'dificulty': 'dificult',
      'stars': 2,
      'maxAltitude': '2000m',
      'routes': [{ name: 'first', hours: 100 }],
      'title': 'Whatever whatever whatever'
    },
    {
      'id': shortid.generate(),
      'lat': 52.520007,
      'lng': 13.404954,
      'text': 'Berlin',
      'imageList': ['https://lonelyplanetwp.imgix.net/2015/12/brandenburg-gate-berlin-GettyRF-1500-cs.jpg?crop=entropy&fit=crop&h=421&sharp=10&vib=20&w=748'],
      'dificulty': 'extreme',
      'stars': 5,
      'maxAltitude': '2000m',
      'routes': [{ name: 'first', hours: 9 }, { name: 'second', hours: 8 }],
      'title': 'Whatever whatever whatever'
    },
    {
      'id': shortid.generate(),
      'lat': 51.507351,
      'lng': -0.127758,
      'text': 'London',
      'imageList': ['https://images.pexels.com/photos/50632/pexels-photo-50632.jpeg?auto=compress&cs=tinysrgb&h=350', 'https://cdn.londonandpartners.com/assets/73295-640x360-london-skyline-ns.jpg'],
      'dificulty': 'medium',
      'stars': 4,
      'maxAltitude': '2000m',
      'routes': [{ name: 'first' }, { name: 'second', hours: 8 }],
      'title': 'Whatever whatever whatever'
    },
    {
      'id': shortid.generate(),
      'lat': 48.2775,
      'lng': 8.1860,
      'text': 'Black Forest',
      'imageList': ['https://assets.fodors.com/destinations/228/black-forest-the-black-forest-germany_main.jpg', 'https://media.istockphoto.com/photos/black-forest-germany-picture-id521383509?k=6&m=521383509&s=612x612&w=0&h=eEDtL2uqkSvcDCpL9uH9UikP4uLszMyTvcPbeyPmpi4='],
      'dificulty': 'medium',
      'stars': 4,
      'maxAltitude': '2000m',
      'routes': [{ name: 'first', hours: 9 }, { name: 'second', hours: 8 }],
      'title': 'Whatever whatever whatever'
    }
  ]
}
)