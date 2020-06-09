import StorageArray from 'ember-local-storage/local/array';

const Storage = StorageArray.extend();

  Storage.reopenClass({
   initialState() {
     return [{
      id: 1,
      name: 'Kanye West',
      upVotes: 64,
      downVotes: 36,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolorum porro repellendus quae.',
      category: 'Entertainment',
      image: 'kanye.jpg',
      createdAt: '2020-04-01'
    },
    {
      id: 2,
      name: 'Mark Zuckerberg',
      upVotes: 36,
      downVotes: 64,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolorum porro repellendus quae.',
      category: 'Business',
      image: 'mark.jpg',
      createdAt: '2020-04-01'
    },
    {
      id: 3,
      name: 'Cristina Fernández de Kirchner',
      upVotes: 36,
      downVotes: 64,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolorum porro repellendus quae.',
      category: 'Politics',
      image: 'cristina.jpg',
      createdAt: '2020-04-01'
    },
    {
      id: 4,
      name: 'Malala Yousafzai',
      upVotes: 64,
      downVotes: 36,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolorum porro repellendus quae.',
      category: 'Entertainment',
      image: 'malala.jpg',
      createdAt: '2020-04-01'
    }];
   }
  });

export default Storage;