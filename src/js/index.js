const initialCats = [
  {
    clickCount: 0,
    name: 'Tabby',
    imgSrc: 'img/cat1.jpg',
    nicknames: ['Tabtab', 'T-bone', 'Mr. T', 'Tabitha Tab Tabby Catty Cat']
  },
  {
    clickCount: 0,
    name: 'Joe Dan',
    imgSrc: 'img/cat2.jpg',
    nicknames: ['Joeseph', 'JD', 'JDizzle']
  },
  {
    clickCount: 0,
    name: 'Rudge',
    imgSrc: 'img/cat3.jpg',
    nicknames: ['Rudy']
  },
  {
    clickCount: 0,
    name: 'Shabaz',
    imgSrc: 'img/cat4.jpg',
    nicknames: ['Shab']
  },
  {
    clickCount: 0,
    name: 'Peppa',
    imgSrc: 'img/cat5.jpg',
    nicknames: ['Pep']
  },
  {
    clickCount: 0,
    name: 'Dora',
    imgSrc: 'img/cat6.jpg',
    nicknames: ['Explorer']
  },
  {
    clickCount: 0,
    name: 'Spot',
    imgSrc: 'img/cat7.jpg',
    nicknames: ['Spotty']
  },
  {
    clickCount: 0,
    name: 'Garfield',
    imgSrc: 'img/cat8.jpg',
    nicknames: ['Garfy']
  }
];

const ViewModel = function() {
  const self = this;

  this.catList = ko.observableArray([]);

  initialCats.forEach(catData => self.catList.push(new Cat(catData)));

  this.currentCat = ko.observable(this.catList()[0]);

  self.setCat = function(cat) {
    self.currentCat(cat);
  };

  this.incrementCounter = function() {
    return self.currentCat().clickCount(self.currentCat().clickCount() + 1);
  };
};

const Cat = function(data) {
  this.clickCount = ko.observable(data.clickCount);
  this.name = ko.observable(data.name);
  this.imgSrc = ko.observable(data.imgSrc);
  this.nicknames = ko.observableArray(data.nicknames);

  this.level = ko.computed(function() {
    let level = 'Newborn';
    // Calculate level based on click count

    if (this.clickCount() > 500) {
      level = 'Adult';
    } else if (this.clickCount() > 200) {
      level = 'Teen';
    } else if (this.clickCount() > 100) {
      level = 'Pre-teen';
    } else if (this.clickCount() > 50) {
      level = 'Toddler';
    } else if (this.clickCount() > 10) {
      level = 'Infant';
    }
    return level;
  }, this);
};

ko.applyBindings(new ViewModel());
