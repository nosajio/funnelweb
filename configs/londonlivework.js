module.exports = {
  init: {
    name: 'London Live Work',
    url: 'http://www.londonlivework.co.uk/LondonLW/',
    
    // Grab the data from this page
    data: [
      {
        name: 'Card',
        select: '.card',
        then: [
          {
            name: 'Title',
            select: '.title',
            transform: el => ({ listing_title: el.innerText }),
          },
          {
            name: 'Dimensions',
            select: '.meta-box-list > li',
            transform: el => ({ dimensions_sqft: el.innerText }),
          }
        ]
      }
    ],
    
    // For each result of select, run the property_page handler
    follow_all: {
      select: '.card a',
      transform: el => el.href,
      handler: 'property_page',
    }
    
  },
  
  property_page: {
    name: 'Property page',
    data: [
      {
        name: 'Pictures',
        select: '.owl-stage .owl-item .item img',
        transform: imgs => ({ pictures: Array.from(imgs) })
      },
      {
        name: 'Description',
        select: '.main-content .section > p',
        transform: els => Array.from(els).reduce((acc, val) => `${acc}\n${val.innerText}`, '')
      }
    ]
  }
  
}
